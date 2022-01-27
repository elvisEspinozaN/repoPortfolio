import { useState } from "react";

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

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <div className="form-control">
            <label>Author</label>
            <input
              type="text"
              name="author"
              value={form.author}
              placeholder="author name"
              onChange={changeHandler}
            />
          </div>
          <div className="form-control">
            <label>Project Name</label>
            <input
              type="text"
              name="pName"
              value={form.pName}
              placeholder="porject name"
              onChange={changeHandler}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
