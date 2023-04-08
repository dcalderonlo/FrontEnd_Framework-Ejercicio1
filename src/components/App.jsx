import React from "react";
// import "./App.css";
import CommentsList from "./commentsList/CommentsList";
import EpisodesList from "./episodeList/EpisodesList";
import SearchBar from "./searchBar/SearchBar";
import Header from "./header/Header";
console.log(CommentsList);
console.log(EpisodesList);
const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <EpisodesList />
      {/* <CommentsList /> */}
    </div>
  );
}

export default App;
