import profileReducer, { addPost, deletePost } from "./profileReducer";

const state = {
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
};

test("length of posts should be incremented", () => {
    let action = addPost("New post title");
    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(4);
});

test("message of new post should be correct", () => {
    let action = addPost("New post title");
    let newState = profileReducer(state, action);

    expect(newState.postsData[3].message).toBe("New post title");
});

test("after deleting length of messages should be decrement", () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(2);
});

test("after deleting length of messages shouldn't be decrement if id is incorrect", () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(3);
});
