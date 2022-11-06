import "./App.css";
import RepoDetails from "./components/RepoDetails";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <div class="nav-content-container">
        <h1>GitHub Portfolio</h1>
      </div>
      <div class="sidebar-content-container">
        <h1>Profile</h1>
        <UserProfile />
      </div>
      <div class="content-container">
        <h1>Repositories</h1>
        <SearchBar />
      </div>
    </>
  );

  // <div className="App">
  //   <input type="text" /> <br></br>
  //   <br></br>
  //   <button type="submit">Get Repositories</button>
  // </div>
}

export default App;
