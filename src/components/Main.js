import { Route, Switch, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Create from "../pages/Create";
import Home from "../pages/Home";
import Header from "./Header";
import About from "../pages/About";

const Main = (props) => {
  const [repo, setRepo] = useState([]);

  // const URL = "http://localhost:3001/repo/";
  const URL = "https://repo-portfolio.herokuapp.com/repo/";

  const getRepo = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setRepo(data);
  };

  const createRepo = async (repo) => {
    // post that creates
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(repo),
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
        <Route exact path="/home">
          <Home user={props.user} />
        </Route>
        <Route path="/about">
          <Header user={props.user} />
          <About />
        </Route>
        <Route exact path="/repo">
          <Header user={props.user} />
          <Index repo={repo} createRepo={createRepo} user={props.user} />
        </Route>
        <Route
          path="/repo/:id"
          render={(rp) => (
            <>
              <Header user={props.user} />
              <Show
                {...rp}
                repo={repo}
                updateRepo={updateRepo}
                deleteRepo={deleteRepo}
                user={props.user}
              />
            </>
          )}
        />
        {/* <Route
          path="/repo/create"
          render={(rp) => (
            <>
              <Header user={props.user} />
              <Create
                {...rp}
                repo={repo}
                createRepo={createRepo}
                user={props.user}
              />
            </>
          )}
        /> */}
        <Route
          path="/repo/create"
          render={(rp) =>
            props.user ? (
              <>
                <Header user={props.user} />
                <Create {...rp} createRepo={createRepo} />
              </>
            ) : (
              <Redirect to="/repo" />
            )
          }
        />
      </Switch>
    </main>
  );
};

export default Main;
