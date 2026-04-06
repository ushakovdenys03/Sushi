import {
  Routes,
  Route,
} from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart"
import Header from "./components/Header/Header";

export const SearchContext = React.createContext("")

function App() {

const [searchValue, setSearchValue] = React.useState('');

  return (
    <>
    <SearchContext.Provider value={{searchValue, setSearchValue}}>
      <Header   />
    <Routes>
      <Route path="/" element={<Home searchValue={searchValue}/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </SearchContext.Provider>
    </>
  );
}

export default App;
