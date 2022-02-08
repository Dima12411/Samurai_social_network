import s from "../Dialogs.module.css";
import React, {RefObject} from "react";

type messageProps = {
    message: string
}

const Message = (props: messageProps) => {
    return (
        <div className={s.message}>
            <div>
                <div className={s.message}>{props.message}</div>
            </div>
        </div>
    )
}

export default Message;