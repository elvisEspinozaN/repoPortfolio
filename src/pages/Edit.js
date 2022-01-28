import { useState } from "react";

const Edit = (props) => {
  const id = props.match.params.id;
  const repo = props.repo;
  const repos = repo.find((p) => p._id === id);

  const [edit, setEdit] = useState(repos);
};

export default Edit;
