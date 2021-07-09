import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum'
const Header = () => {
    return (
        <div className='header'> 
            <IconButton>
            <PersonIcon fontSize='large' className='header_icons'/> 
            </IconButton>

            <img 
            className='header_logo'
            src="https://image.flaticon.com/icons/png/512/732/732251.png"
            alt="tits" />
            
            <IconButton>
            <ForumIcon fontSize='large' className='header_icons'/>
            </IconButton>
        </div>
    )
}

export default Header
