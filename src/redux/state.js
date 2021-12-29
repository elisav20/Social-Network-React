const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    message:
                        "Quisque id mi. Praesent vestibulum dapibus nibh. Nulla sit amet est. Praesent nec nisl a purus blandit viverra. Nulla sit amet est.",
                    likesCount: 10,
                },
                {
                    id: 2,
                    message:
                        "Fusce vulputate eleifend sapien. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Curabitur ullamcorper ultricies nisi.",
                    likesCount: 11,
                },
                {
                    id: 3,
                    message:
                        "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium. Nulla porta dolor. Vivamus euismod mauris. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor.",
                    likesCount: 0,
                },
            ],
            newPostText: "",
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: "Vasea" },
                { id: 2, name: "Gheorghe" },
                { id: 3, name: "Andrei" },
                { id: 4, name: "Oleg" },
                { id: 5, name: "Sasha" },
                { id: 6, name: "Sveta" },
                { id: 7, name: "Abdulah" },
            ],
            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "Yo" },
            ],
        },
    },
    _callSubscriber() {},
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._state.profilePage.postsData.push({
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            });
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default store;
window.store = store;
