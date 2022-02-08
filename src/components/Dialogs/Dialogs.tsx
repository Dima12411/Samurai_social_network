import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";

const Dialogs = (props: DialogsPropsType) => {
    const [message, setMessage] = useState<string>("")
    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)
    //let newMessageElements: RefObject<HTMLTextAreaElement> = React.createRef();


    let onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
    }
    let onAddMessage = () => {
        props.addMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                <div>{messagesElements}</div>
                <div>
                    <textarea placeholder="Enter your message"
                              value={props.newMessageText}
                              onChange={onChangeHandler}>

                    </textarea>
                    <div>
                        <button onClick={onAddMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;