import React,{useState} from 'react'
import Header from './Header'
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';
import NavSidebar from './NavSidebar';


export default function Index({children}) {

  const [sideBar, setSideBar] = useState(false)

  var completePath = window.location.pathname;
  var role = completePath.split('/');

  return (
    <div className="bg-white relative">
      {role[1] !== "admin" && (
        <Header sideBar={sideBar} setSideBar={setSideBar} />
      )}
      <Outlet />
      <Footer />
      <NavSidebar sideBar={sideBar} />
    </div>
  );
}
