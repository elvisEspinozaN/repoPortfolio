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
