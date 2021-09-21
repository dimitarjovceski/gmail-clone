import { Checkbox, IconButton } from '@material-ui/core'
import React from 'react'
import './EmailRow.css'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';

function EmailRow({ id, title, subject, description, time }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time
        }));

        history.push("/mail");
    }

    return (
        <div className="emailRow" onClick={openMail}>
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarOutlineIcon />
                </IconButton>

                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
            </div>

            <h3 className="emailRow__title">
                {title}
            </h3>

            <div className="emailRow__message">
                <h4>{subject}</h4>
                <span className="emailRow_description">{description}</span>
            </div>

            <p className="emailRow__time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow
