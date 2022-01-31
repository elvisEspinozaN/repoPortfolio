import "./index.css";

import Main from "./components/Main";

import { useEffect, useState } from "react";
import { auth } from "./services/firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user));
  }, []);

  return (
    <div className="App">
      <Main user={user} />
    </div>
  );
}

export default App;
