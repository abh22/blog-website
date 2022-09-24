import { ADD_POST, EDIT_POST, DELETE_POST } from "../actionTypes/actionTypes";

const initialState = {
  postList: [
    {
      id: Math.random(),
      category: "music",
      poster:
        "https://vidaartmanagement.com/files/How-to-Understand-and-Appreciate-Classical-Music.jpg",
      title: "Classical music in modern times",
      author: "admin",
      date: "21/09/22",
      info: "Lorem ipsum dolor sit amet utfffoufoooooo",
      media: "none",
      commentsList: [{ id: Math.random(), text: "nice post" }],
    },
  ],
};
// const newCommentsList=(post,cmnt)=>{
// post.commentsList.push(cmnt);
// }

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, postList: [...state.postList, action.payload] };
    case EDIT_POST:
      return {
        ...state,
        postList: state.postList.map((post) =>
          post.id === action.payload.id
            ? { ...post, text: action.payload.textEdited }
            : post
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        postList: state.postList.filter((post) => post.id !== action.payload),
      };
    // case COMMENT:
    //     return{
    //         ...state,
    //         postList:state.postList.map((post) =>
    //             post.id === action.payload.id
    //             //   ? {...post, commentsList:[...commentsList,action.payload.cmnt]}
    //             ? {
    //                 ...post, commentsList:[...commentsList,action.payload.cmnt]
    //             }
    //               : post
    //               )

    //     }
    default:
      return state;
  }
};
export default postReducer;
