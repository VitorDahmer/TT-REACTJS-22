import { useEffect, useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import Nav from "./components/Nav";
import RouterNavigation from "./router";



function App() {
  // const [navRedHome, setNavRedHome] = useState(false);

  // const handleNavLink = ()=>{
  //   const page = navLink
  //   console.log(">>> pagename",page);
  //   console.log(navLink);
  // };

  // useEffect(()=>{
  //   handleNavLink();
  // },[]);
  return (
    <BrowserRouter>
      <Nav/>
      <RouterNavigation/>
    </BrowserRouter>
  );
}

export default App;
