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

  // change functions
  const changeHandler = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };

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
    props.history.push("/repo");
  };
};

export default Create;
