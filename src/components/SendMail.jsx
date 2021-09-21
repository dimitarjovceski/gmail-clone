import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import firebase from 'firebase';
import { db } from '../firebase';
import { closeSendMessage } from '../features/mailSlice';




function SendMail() {

    const dispatch = useDispatch();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (dataForm) => {
        db.collection("emails").add({
            to: dataForm.to,
            subject: dataForm.subject,
            message: dataForm.message,
            time: firebase.firestore.FieldValue.serverTimestamp(),
        })

        dispatch(closeSendMessage());
    };

    return (
        <div className="send__mail">
            <div className="send__mailHeader">
                <h3>New message</h3>
                <CloseIcon className="mail__close" onClick={() => dispatch(closeSendMessage())} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="To"
                    type="text"
                    {...register("to", { required: true })}

                />
                {errors.to && <p className="sendMail__error">To is required!</p>}
                <input
                    placeholder="Subject"
                    type="text"
                    {...register("subject", { required: true })}

                />
                {errors.subject && <p className="sendMail__error">Subject is required!</p>}

                <input
                    placeholder="Message..."
                    type="text"
                    className="sendMail__message"
                    {...register("message", { required: true })}
                />
                {errors.message && <p className="sendMail__error">Message is required!</p>}

                <div className="mail__options">
                    <Button className="mail__button"
                        variant="contained"
                        type="submit"
                        color="primary"

                    >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
