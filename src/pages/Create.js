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
    props.createRepo(form);
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
          <h1>Upload Your Repo</h1>
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
              placeholder="project name"
              onChange={changeHandler}
            />
          </div>
          <div className="form-control">
            <label>Progress</label>
            <input
              type="number"
              name="progress"
              min="0"
              step="0"
              max="100"
              value={form.progress}
              placeholder="%"
              onChange={changeHandler}
            />
          </div>
          <div className="form-control">
            <label>Repo Link</label>
            <input
              type="text"
              name="url"
              value={form.url}
              placeholder="repo link"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="form-action">
          <button type="submit">Upload</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
