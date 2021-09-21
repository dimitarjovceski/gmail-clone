import React, { useEffect, useState } from 'react'
import './EmailList.css'
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from '../firebase';


function EmailList() {

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection("emails").onSnapshot((snapshot) =>
            setEmails(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            ))
    }, []);

    return (
        <div className="emailList">
            <div className="emailList__settings">

                <div className="settings__left">
                    <IconButton>
                        <Checkbox />
                    </IconButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="settings__right">
                    <IconButton>
                        <ArrowLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ArrowRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardIcon />
                    </IconButton>
                </div>
            </div>

            <div className="emailList__sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>
            <div className="emailrows">
                {emails.map(({ id, data: { to, message, subject} }) => (
                    <EmailRow
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                    />
                ))}
            </div>
        </div>
    )
}

export default EmailList
