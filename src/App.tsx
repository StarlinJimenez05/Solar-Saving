import { useEffect, useState } from "react";
import "./App.css";
import { supabase } from "./lib/helper/supabaseClient.js";
import AddressInput from "./components/AddressInput.js";

function App() {
  const [user, setUser] = useState(null);

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
  }, []);

  const login = async () => {
    await supabase.auth.signInWithOAuth({ provider: "github" });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  console.log(import.meta.env.VITE_SUPABASE_URL);

  return (
    <>
      <div>
        {user ? (
          <div>
            <h1>User authenticated</h1>

            <button onClick={logout}>Log OUT</button>
            <AddressInput />
          </div>
        ) : (
          <>
            <div className="header">
              <h1>SolarSavings</h1>
            </div>

            <button onClick={login}>Login with github</button>
            <h2>ok</h2>
            <AddressInput />
          </>
        )}
      </div>
    </>
  );
}

export default App;
