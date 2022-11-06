import "./App.css";
import RepoDetails from "./components/RepoDetails";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <h1>Repo search</h1>
      <SearchBar />
    </div>
  );

  // <div className="App">
  //   <input type="text" /> <br></br>
  //   <br></br>
  //   <button type="submit">Get Repositories</button>
  // </div>
}

export default App;
