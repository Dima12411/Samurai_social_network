import dialogsReducer, {ActionsDialogsType} from "./dialogsReducer";
import profileReducer, {ActionsProfileType} from "./profileReducer";

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    amount: number
}
type ProfilePagePropsType = {
    posts: Array<PostType>
    newPostText: string
}
type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
type RootStateType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPropsType

}
type ActionsTypes = ActionsDialogsType | ActionsProfileType
type StoreType = {
    _state: RootStateType
    subscribe: (callback: (state: RootStateType) => void) => void
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", amount: 15},
                {id: 2, message: "It's my first posts", amount: 20},
                {id: 3, message: "Hello!", amount: 20},
                {id: 4, message: "What's yours name?", amount: 20},

            ],
            newPostText: "",
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Lera"},
                {id: 4, name: "Maksim"},
                {id: 5, name: "Lesha"},
                {id: 6, name: "Anton"}
            ],
            messages: [
                {id: 1, message: "Hello!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Okay"},
                {id: 4, message: "Okay"},
                {id: 5, message: "Okay"},
                {id: 6, message: "Okay"},
            ],
            newMessageText: "",
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: RootStateType) {
        console.log("State changed")
    },
    subscribe(callback: (state: RootStateType) => void) {
        this._callSubscriber = callback;
    },
    dispatch(action) {
        //profileReducer(this._state.profilePage, action)
        //dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}



console.log(store._state.profilePage.newPostText)



