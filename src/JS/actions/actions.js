import{
    ADD_POST, EDIT_POST,DELETE_POST, LOG_OUT, COMMENT,
} from "../actionTypes/actionTypes";
import { SIGN_IN,SIGN_UP } from "../actionTypes/actionTypes";
export const addPost=(newPost)=>{
    return{
        type:ADD_POST,
        payload:newPost,
    };
};
export const editPost=(id,textEdited)=>{
    return{
        type:EDIT_POST,
        payload:{id,textEdited},
    };
};
export const deletePost=(id)=>{
    return{
        type:DELETE_POST,
        payload:id,
    };
};
//sign in


// export const setMessage = (message) => ({
//   type: SET_MESSAGE,
//   payload: message,
// });

// export const clearMessage = () => ({
//   type: CLEAR_MESSAGE,
// });
export const signIN=(username,password)=>{
   return{ 
    type:SIGN_IN,
payload:{username,password},
}}
export const signUP=(username,password)=>{
    return{ 
     type:SIGN_UP,
 payload:{username,password},
 }}
 export const logOUT=()=>{
    return{ 
     type:LOG_OUT,
 payload:""
 }}
 //comment
 export const addComment=(id,cmnt)=>{
    return{
        type:COMMENT,
        payload:{id,cmnt}
    }
 }