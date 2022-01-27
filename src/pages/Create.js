import { useState } from "react";
import { Link } from "react-router-dom";

//
const Create = (props) => {
  // state that hold form data
  const [form, setForm] = useState(
    {
      author: "",
      pName: "",
      progress: "",
      url: "",
    },
    { timestamp: true }
  );
};

export default Create;
