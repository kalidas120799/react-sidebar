
import React from 'react'
import "./sidebar.css"
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { NavLink } from "react-router-dom"
import { sidemenu } from "./sidemenu"
export default function Sidebar({ issidebar, islogin }) {
    return (
        <div className={`${issidebar ? "smallsidebar" : "bigsidebar"} `}>
            <List component="nav" aria-labelledby="nested-list-subheader" >
                {
                    sidemenu ? sidemenu.map((menu, index) => (

                        <NavLink exact className="menu-items" activeClassName="active-menu" to={menu.path} key={index} >
                            <ListItem button >
                                <ListItemIcon style={{ color: "white" }} >
                                    {menu.icon}
                                </ListItemIcon>
                                {
                                    issidebar ? <ListItemText primary={menu.name} /> : null
                                }
                            </ListItem>
                        </NavLink>


                    )) : null
                }
            </List>
        </div>
    )
}


