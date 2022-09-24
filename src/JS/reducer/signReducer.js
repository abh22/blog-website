
import {LOG_OUT, SIGN_IN,SIGN_UP} from  "../actionTypes/actionTypes";
const initialState={
    userList:[
        {username:"admin",password:"admin",email:"",name:""},
        {username:"admin2",password:"admin2",email:"",name:""},
    ],
    auth:" ",
    user:" "
};
  const signReducer=(state=initialState,action)=>{
    switch(action.type){
case SIGN_IN:
    return{
        ...state,
    auth: state.userList.find((el)=> ((el.username==action.payload.username) && (el.password==action.payload.password)))?
    action.payload.username :false
  
    //  user: state.userList.find((el)=> ((el.username==action.payload.username) && (el.password==action.payload.password)))?
    // " ":action.payload.username 
//    user:state.userList.find((el)=> ((el.username===action.payload.username) && (el.password===action.payload.password)))?
   
//     : state.user
    }
    case SIGN_UP:
        return {...state, userList:[...state.userList,action.payload],
            user: action.payload.username}
        ;
        case LOG_OUT:
            return{
                ...state,
                auth: state.auth=true,
                // user: state.user=" "
              
            }
   default:
    return state;
}};

export default signReducer;