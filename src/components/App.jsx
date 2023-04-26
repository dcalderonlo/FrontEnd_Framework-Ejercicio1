import Header from "./header/Header";
import SearchBar from "./search/SearchBar";
import PostList from "./post/PostList";
import UserList from "./user/UserList";
import React, { useState } from "react";

const App = () => {
  
  const [query, setQuery] = useState('');
  const [section, setSection] = useState (() =>{
    const { pathname } = window.location;
    const section = pathname.slice(1);
    return section;
  });

  const toSection = section => event => {
    event.preventDefault()
 
    window.history.pushState(null, '', `/${section}`)
    setSection(section)
  }

  const getContent = () => {
    if(section === 'user'){
      return (
        <>
          <Header toSection = {toSection}/>
          <UserList />
        </>
      );
    }else {
      return (
        <>
          <Header toSection = {toSection}/>
          <SearchBar setQuery = {setQuery} />
          <PostList query={query} />
        </>
      );
    }
  }

  return(
    <>
      {getContent()}
    </>
  );

}

export default App;
