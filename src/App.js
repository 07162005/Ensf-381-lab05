import "./App.css";
import Controls from "./Control";
import UserList from "./UserList";
import Footer from "./Footer";

function App() {
  const currentYear = new Date().getFullYear();
  const isLoggedIn = true;

  return (
    <>
      <section>
        <h1>ENSF-381: Full Stack Web Development</h1>
        <p>React Components</p>
        <p>Current Year: {currentYear}</p>
        <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
      </section>

      {isLoggedIn && (
        <>
          <section>
            <Controls />
          </section>

          <section>
            <h2>User List</h2>
            <UserList />
          </section>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;