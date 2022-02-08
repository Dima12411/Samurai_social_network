import s from "./DialogItem.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

export type DialogItemProps = {
    id: number
    name: string
}

const DialogItem = (props: DialogItemProps) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
           <img
                src="https://e7.pngegg.com/pngimages/109/949/png-clipart-computer-software-management-business-service-technical-support-sugarplum-miscellaneous-infographic.png"/>
            <NavLink className={s.name} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;