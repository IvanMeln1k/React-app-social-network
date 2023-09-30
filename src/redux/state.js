import renderEntireTree from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, text: "yo" },
      { id: 2, text: "hello world!" },
      { id: 3, text: "yo yo yo" },
      { id: 4, text: "sometext" },
    ],
    newPostText: "new post text",
  },
  dialogsPage: {
    chats: [
      { id: 1, name: "Ivan" },
      { id: 2, name: "Marat" },
      { id: 3, name: "Denis" },
      { id: 4, name: "Yaroslav" },
      { id: 5, name: "Vlad" },
    ],
    messages: [
      { id: 1, message: "Hello!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Norm" },
    ],
  },
};

export let addPost = () => {
  state.profilePage.posts.push({
    id: 5,
    text: state.profilePage.newPostText,
  });
  renderEntireTree(state);
};

export let changeNewPostText = (text) => {
  state.profilePage.newPostText = text;
  renderEntireTree(state);
};

export default state;
