import React, { useContext } from 'react'
import GlobalContext from './GlobalContext'

function Header() {
    const Tags = useContext(GlobalContext)
    return (
        <div>

            <div className='header-top'>

            </div>
            <div>{Tags}</div>
        </div>
    )
}

export default Header
