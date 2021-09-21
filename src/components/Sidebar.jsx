import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import SidebarOptions from './SidebarOptions';
import InboxIcon from '@material-ui/icons/Inbox';
import StarRateIcon from '@material-ui/icons/StarRate';
import SnoozeIcon from '@material-ui/icons/Snooze';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';

function Sidebar() {
    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />}
                className="sidebar__compose" onClick={() => dispatch(openSendMessage())}>Compose</Button>

            <SidebarOptions Icon={InboxIcon} title="Inbox" number='54' selected={true} />
            <SidebarOptions Icon={StarRateIcon} title="Starred" number='22' />
            <SidebarOptions Icon={SnoozeIcon} title="Snoozed" number='54' />
            <SidebarOptions Icon={SendIcon} title="Sent" number='54' />
            <SidebarOptions Icon={DraftsIcon} title="Drafts" number='54' />
            <SidebarOptions Icon={AccessTimeIcon} title="Time" number='22' />
            <SidebarOptions Icon={LabelImportantIcon} title="Label" number='54' />
            <SidebarOptions Icon={NearMeIcon} title="Me" number='54' />
            <SidebarOptions Icon={ExpandMoreIcon} title="More" number='54' />


            <div className="sidebar__footer">
                <h4>Meet</h4>
                <IconButton>
                    <VideocamIcon />
                </IconButton>
                <IconButton>
                    <KeyboardIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default Sidebar
