import React from 'react';
import {
    addNewMessageAC,
    DialogType,
    MessageType,
    onChangeMessageAC
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/reduxStore";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    newMessageText: string
}
type MapDispatchToPropsType = {
    updateNewMessageBody: (message: string) => void
    addMessage: () => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (message: string) => {
            dispatch(onChangeMessageAC(message))
        },
        addMessage: () => {
            dispatch(addNewMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;