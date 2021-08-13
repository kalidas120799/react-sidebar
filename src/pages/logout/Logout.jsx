import React from 'react'

export default function Logout() {
    const logoutbtn=()=>{
        localStorage.clear()
        window.location.replace("/")
    }
    return (
        <div>
        Logout
        <div className='mt-4'>
            <button className='btn btn-info' onClick={logoutbtn}>Logout</button>
        </div>
    </div>
    )
}
