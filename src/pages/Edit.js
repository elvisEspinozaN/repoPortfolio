import { useState } from "react";

const Edit = (props) => {
  const id = props.match.params.id;
  const repo = props.repo;
  const repos = repo.find((p) => p._id === id);

  const [edit, setEdit] = useState(repos);

  // handle change
  const changeHandler = (evt) => {
    setEdit((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  // handle submit
  const submitHandler = (evt) => {
    evt.preventDefault();
    props.updateRepo(edit, repo._id);
    props.history.push("/repo");
  };
};

export default Edit;
