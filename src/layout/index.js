import React, { useState,useEffect } from 'react'
import "./layout.css"
import Router from "../router/Router"
import Header from '../pages/header/Header'
import Sidebar from '../pages/sidebar/Sidebar'
import {checkLogin} from "../auth"
export default function Index() {
    const [islogin, setislogin] = useState(false)
    const [issidebar, sidebaraction] = useState(false)
    const changeSidebar = () => {
        sidebaraction(!issidebar)
    }
    useEffect(()=>{
         if(checkLogin()){
            setislogin(true)
         }
    },[])
    return (
        <div className='layout-div'>
            <div className="header-div">
                <Header issidebar={issidebar} islogin={islogin} changeSidebar={changeSidebar} />
            </div>
            <div className="body-div">
                {
                    islogin ? (
                        <div className="sidebar-div">
                            <Sidebar islogin={islogin} issidebar={issidebar} />
                        </div>
                    ) : null
                }

                <div className="content-div">                
                    <Router />
                </div>
            </div>
        </div>
    )
}

