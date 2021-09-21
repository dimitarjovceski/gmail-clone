import React from 'react'
import './Mail.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import ArchiveIcon from '@material-ui/icons/Archive';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { selectOpenMail } from '../features/mailSlice';

function Mail() {

    const history = useHistory();

    const selectMail = useSelector(selectOpenMail);

    return (
        <div className="mail">
            <div className="mailTop__settings">
                <div className="mailSettings__left">
                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBackIcon />
                    </IconButton>

                    <IconButton>
                        <ArchiveIcon />
                    </IconButton>

                    <IconButton>
                        <ReportIcon />
                    </IconButton>

                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </div>

                <div className="mailSettings__right">
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

            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{selectMail?.subject}</h2>
                    <LabelImportantIcon className="mail__important" />
                    <p>{selectMail?.title}</p>
                    <p className="mail__time">{selectMail?.time}</p>
                </div>

                <div className="mail__bodyMessage">
                    <p>{selectMail?.description}</p>
                </div>
            </div>

        </div>
    )
}

export default Mail
