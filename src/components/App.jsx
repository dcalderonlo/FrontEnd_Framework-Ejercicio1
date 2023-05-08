import LogIn from "./access/login/LogIn"
import LogOut from "./access/logout/LogOut"
import Header from "./header/Header"
import SearchBar from "./search/SearchBar"
import PostList from "./post/PostList"
import UserList from "./user/UserList"
import { Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute"
import ContextProvider from "../Context/RouteContext";

const App = () => {
  
  return(
    <>
      <ContextProvider>
        <Routes>
          <Route index element= {
            <ProtectedRoute>
              <Header />
              <SearchBar />
              <PostList />
            </ProtectedRoute>
          } />
          <Route path='/login' element= {<LogIn />} />
          <Route element= { <ProtectedRoute /> }>
            <Route path='/home' element= {
              <>
                <Header />
                <SearchBar />
                <PostList />
              </>
            } />
            <Route path='/user' element= {
              <>
                <Header />
                <UserList />
              </>
            } />
          </Route>
          <Route path='/logout' element= {
            <ProtectedRoute>
              <LogOut />
            </ProtectedRoute>
          } />
        </Routes>
        </ContextProvider>
    </>
  );

}

export default App;
