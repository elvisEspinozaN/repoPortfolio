import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Create from "../pages/Create";

const Main = (props) => {
  const [repo, setRepo] = useState([]);

  const URL = "http://localhost:3001/repo/";
  // const URL = "https://repo-portfolio.herokuapp.com/repo";

  const getRepo = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setRepo(data);
  };

  const createRepo = async (rep) => {
    // post that creates
    console.log(rep);
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Appplication/json",
      },
      body: JSON.stringify(rep),
    });
    // listed repos
    getRepo();
  };

  const updateRepo = async (repo, id) => {
    //request ot create
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(repo),
    });
    // update
    getRepo();
  };

  const deleteRepo = async (id) => {
    // delete request to repo
    await fetch(URL + id, {
      method: "DELETE",
    });
    // update
    getRepo();
  };

  useEffect(() => getRepo(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index repo={repo} />
        </Route>
        <Route
          path="/repo/create"
          render={(rp) => <Create {...rp} createRepo={createRepo} />}
        />
        <Route
          path="/repo/:id"
          render={(rp) => (
            <Show
              repo={repo}
              updateRepo={updateRepo}
              deleteRepo={deleteRepo}
              {...rp}
            />
          )}
        />
      </Switch>
    </main>
  );
};

export default Main;
