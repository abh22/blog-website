import React from "react";
import { useLocation } from "react-router-dom";
// import InputAdornment from "@mui/material/InputAdornment";
// import InputLabel from "@mui/material/InputLabel";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import "./Detailed.css";
// import { useDispatch } from "react-redux";
// import { addComment } from "../../JS/actions/actions";


export default function DetailedPost() {
// const id={...location.state.id};

  // const auth = useSelector((store) => store.signReducer.auth);
  // const dispatch=useDispatch();
//   const [comment, setComment] = React.useState({
//     comment: "",
//   });
// const handleSubmit=()=>{
// auth===false? "Please log in to your account to proceed or sign up if you don't have one!":
// dispatch(addComment(id,comment))
// }
  // const handleChange = (prop) => (event) => {
  //   setComment({ ...comment, [prop]: event.target.value });
  // };
  const location = useLocation();
  console.log(location.state.title);
  return (
    <div className="fullPost">
      <h2>{location.state.title}</h2>
      <img src={location.state.poster} alt="displayed pic" />
      <div className="date">
        <h5>
          <strong>Author: {location.state.author} </strong>
        </h5>
        <h5>Published on: {location.state.date}</h5>
      </div>
      <p style={{ fontSize: 20, margin: 40, color: "black" }}>
        info:  {location.state.info}
      </p>
      {/* <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Comment</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={comment.amount}
          onChange={handleChange("amount")}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          label="Amount"
        />
      </FormControl> */}
      <Button  variant="text">
        Submit
      </Button>

      {/* <div>
        <ul>
          {location.state.commentsList}
        </ul>
      </div> */}
    </div>
  );
}
