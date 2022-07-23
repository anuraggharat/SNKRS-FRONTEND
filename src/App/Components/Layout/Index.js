import React,{useState} from 'react'
import Header from './Header'
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';
import NavSidebar from './NavSidebar';


export default function Index({children}) {

const [sideBar, setSideBar] = useState(false)

  return (
    <div className="bg-white relative">
      <Header sideBar={sideBar} setSideBar={setSideBar} />
      <Outlet />
      <Footer />
      <NavSidebar sideBar={sideBar} />
    </div>
  );
}
