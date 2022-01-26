import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Main = (props) => {
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
