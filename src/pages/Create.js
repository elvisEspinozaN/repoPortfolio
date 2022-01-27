import { useState } from "react";
import { Link } from "react-router-dom";

const Create = (props) => {
  // state that hold form data
  const [form, setForm] = useState({
    author: "",
    pName: "",
    progress: "",
    url: "",
  });

  // submit functions
  const submitHandler = (evt) => {
    evt.preventDefault();
    props.createRepo(setForm);
    setForm({
      author: "",
      pName: "",
      progress: "",
      url: "",
    });
  };
};

export default Create;
