import { useEffect, useState } from "react";
import "./App.css";
import { supabase } from "./lib/helper/supabaseClient.js";

function App() {
  const [user, setUser] = useState(null);

  const login = async () => {
    await supabase.auth.signInWithOAuth({ provider: "github" });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  useEffect(() => {
    // const session = supabase.auth.getSession();
    setUser(supabase.auth.getUser());
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        switch (event) {
          case "SIGNED-IN":
            setUser(supabase.auth.getUser());
            break;
          case "SIGNED-OUT":
            setUser(null);
            break;
          default:
        }
      }
    );

    // return () => {
    //   authListener.unsubscribe;
    // };
  }, []);

  console.log(import.meta.env.VITE_SUPABASE_URL);

  return (
    <>
      <div>
        {user ? (
          <div>
            <h1>User authenticated</h1>

            <button onClick={logout}>Log OUT</button>
          </div>
        ) : (
          <>
            <h1>Dubswki</h1>
            <button onClick={login}>Login with github</button>
            <h2>ok</h2>
          </>
        )}
      </div>
    </>
  );
}

export default App;
