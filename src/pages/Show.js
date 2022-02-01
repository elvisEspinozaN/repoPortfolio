import "./Show.css";
import { useState } from "react";

const Show = (props) => {
  const id = props.match.params.id;
  const repos = props.repo.find((repo) => repo._id === id);

  const [edit, setEdit] = useState(repos);

  const changeHandler = (evt) => {
    setEdit({
      ...edit,
      [evt.target.name]: evt.target.value,
    });
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    props.updateRepo(edit, id);
    props.history.push("/repo");
  };

  const deleteHandlerAction = (evt) => {
    props.deleteRepo(id);
    props.history.push("/repo");
  };

  return (
    <div className="show-body">
      <div className="show-container">
        <div className="show-incl-cont">
          <div className="show-incl-o">
            <div className="show-incl-o-cont">
              <div class="show-img">
                <img
                  src="https://retaintechnologies.com/wp-content/uploads/2020/04/Project-Management-Mantenimiento-1.jpg"
                  alt=""
                />
              </div>
              <div className="show-head">
                <h2>{repos.pName}</h2>
              </div>
              <p>{repos.author}</p>
              <p>{repos.url}</p>
              <p>{repos.progress}</p>
            </div>
          </div>
          <div className="show-incl-o">
            <div className="show-incl-o-cont-two">
              <div className="show-head">
                <h2>Update</h2>
              </div>
              <div className="show-form">
                <form onSubmit={submitHandler}>
                  <label>Author</label>
                  <input
                    type="text"
                    value={edit.author}
                    name="author"
                    placeholder="author name"
                    onChange={changeHandler}
                  />
                  <label>Project Name</label>
                  <input
                    type="text"
                    value={edit.pName}
                    name="pName"
                    placeholder="project/repo name"
                    onChange={changeHandler}
                  />
                  <label>Progress Percentage</label>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    max="100"
                    value={edit.progress}
                    name="progress"
                    placeholder="percentage"
                    onChange={changeHandler}
                  />
                  <label>Project URL</label>
                  <input
                    type="text"
                    value={edit.url}
                    name="url"
                    placeholder="url"
                    onChange={changeHandler}
                  />
                  <input className="show-button" type="submit" value="Edit" />
                </form>

                <button className="show-button" onClick={deleteHandlerAction}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
