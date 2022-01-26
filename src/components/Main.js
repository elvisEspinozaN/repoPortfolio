import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Main = (props) => {
  const [repo, setRepo] = useState([]);

  const URL = "http://localhost:3001/repo/";
  // const URL = "https://repo-portfolio.herokuapp.com/repo/";

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
        "Content-Type": "Appplication/json",
      },
      body: JSON.stringify(repo),
    });
    // listed repos
    getRepo();
  };

  return (
    <main>
      <Switch>
        <Route excat path="/">
          <Index />
        </Route>
        <Route path="/repo/:id" render={(rp) => <Show {...rp} />} />
      </Switch>
    </main>
  );
};

export default Main;
