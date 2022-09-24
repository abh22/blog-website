import { combineReducers } from "redux";
import postReducer from "./postReducer"
import signReducer from "./signReducer";
const rootReducer= combineReducers({postReducer,signReducer});
export default rootReducer;