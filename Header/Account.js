import React from 'react'
import Language from '@material-ui/icons/Language'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { Avatar,Button } from '@material-ui/core'

function Account() {
    return (
        <div className='header_right'>
            <Button>Become a host</Button>
            <Language />
            <ExpandMore />
            <Avatar />
        </div>
    )
}

export default Account
