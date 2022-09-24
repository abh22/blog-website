import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


import Write from "./Write/Write";

const PrivateRoute = () => {
  const auth = useSelector((store) => store.signReducer.auth);
return(
  auth!==false? <Navigate to="/sign" replace /> :<Write/>   );
};

export default PrivateRoute;
