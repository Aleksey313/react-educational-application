const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi', likesCount: 12},
                {id: 2, message: 'hey', likesCount: 2},
                {id: 3, message: 'da', likesCount: 7},
                {id: 4, message: 'yes', likesCount: 33},
            ],
            newPostText: 'yes'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Ola'},
                {id: 4, name: 'Nasty'},
            ],
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'hey'},
                {id: 3, message: 'da'},
                {id: 4, message: 'yes'},
            ],
            newMessageText: 'yes'
        },
        friendsPage: {
            friends: [
                {id: 1, img: 'https://www.film.ru/sites/default/files/images/10(186).jpg', name: 'Nasty'},
                {id: 2, img: 'https://borealis.su/uploads/img/element1.png', name: 'Alexei'},
                {id: 3, img: 'https://pokemon-go.name/wp-content/uploads/2019/11/387-pokemon-turtwig.png', name: 'Ola'}
            ]
        }
    },
    _callSubscriber()  {
        console.log("yes")
    },
    getState () {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, newText: text
    }
}

export default store