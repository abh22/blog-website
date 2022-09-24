import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPost } from "../../JS/actions/actions";
import Topbar from "../Topbar/Topbar";
import Select from "./Select";

import Posts from "../Posts/Posts";
import Sidebar from "../Sidebar/Sidebar";
import "./Write.css";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

export default function Write() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.signReducer.auth);
  console.log("hey" + user);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [poster, setPoster] = useState("");
  // const [values, setValues] = useState({
  //   category: "",
  //   poster: "",
  //   title: "",
  //   author: "",
  //   date: "",
  //   info: "",
  //   media: "none",
  //   commentsList: [{ id: Math.random(), text: "nice post" }],
  // });

const handleChangeCat = (e) => {
  setCategory(e.target.value);
};
const handleChangeTitle = (e) => {
  setTitle(e.target.value);
};
const handleChangeInfo = (e) => {
  setInfo(e.target.value);
};
const handleChangePoster = (e) => {
  setPoster(e.target.value);
};
  const handleAdd = () => {
    dispatch(
      addPost({
        id: Math.random(),
        category:category,
        poster: poster,
        title: title,
        author: "admin",
        date: Date(),
        info: info,
        media:"",
        // commentsList: [{ id: Math.random(), text: text }],
      })
    );
   
  };
  //auth
  const auth = useSelector((store) => store.signReducer.auth);
  console.log(auth);
  return (
    <>
      <Topbar auth={auth} />

      <div className="feed">
        <Posts className="posts" />
        <div className="addPost" style={{ marginTop: 60 }}>
          {/* <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="Small"
            variant="filled"
            size="small"
            label="Please type your post title"
            onChange={handleChange("title")}
            value={values.title}
          />
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="Small"
            variant="filled"
            size="small"
            label="extra ressources, links?"
            onChange={handleChange("media")}
            value={values.media}
          />
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="Small"
            variant="filled"
            size="small"
            label="Poster URL"
            onChange={handleChange("poster")}
            value={values.poster}
          /> */}
          {/* <div>
            <TextField
              id="outlined-multiline-flexible"
              label="Share your thoughts"
              multiline
              maxRows={10}
              value={values.info}
              onChange={handleChange("info")}
            />{" "}
          </div> */}
          <input placeholder="title" type="text" onChange={handleChangeTitle} value={title} />
          <input placeholder="info" type="text" onChange={handleChangeInfo} value={info} />
          <input placeholder="poster" type="text" onChange={handleChangePoster} value={poster} />
          <input placeholder="category" type="text" onChange={handleChangeCat} value={category} />
          {/* <Select /> */}
          
          <Button variant="contained" onClick={handleAdd}>
            Add
          </Button>
        </div>{" "}
      </div>
      <Sidebar />
    </>
  );
}
