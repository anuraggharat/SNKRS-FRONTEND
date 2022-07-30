import React from 'react'
import { Link } from "react-router-dom";


export default function Sidebar() {
  return (
    <div className="z-20 w-1/2 pt-20 text-xs md:text-lg md:w-1/5 flex flex-col px-2 md:px-10 font-medium fixed top-0 left-0 h-screen bg-white shadow-lg">
      <Link to={"/admin/dashboard"}>
        <div className="flex flex-row px-5 py-3 mb-3 rounded-lg bg-green-400 text-white shadow ">
          <i className="ri-dashboard-line mr-4"></i>
          <p>Dashboard</p>
        </div>
      </Link>
      <Link to={"/admin/dashboard"}>
        <div className="flex flex-row px-5 py-3 mb-3 rounded-lg hover:bg-slate-50 hover:shadow-sm">
          <i className="ri-line-chart-line  mr-4"></i>
          <p>Analytics</p>
        </div>
      </Link>
      <Link to={"/admin/dashboard"}>
        <div className="flex flex-row px-5 py-3 mb-3 rounded-lg hover:bg-slate-50 hover:shadow-sm">
          <i className="ri-shopping-bag-line mr-4"></i>
          <p>Shop</p>
        </div>
      </Link>
      <Link to={"/admin/dashboard"}>
        <div className="flex flex-row px-5 py-3 mb-3 rounded-lg hover:bg-slate-50 hover:shadow-sm">
          <i className="ri-user-line mr-4"></i>
          <p>User</p>
        </div>
      </Link>
      <Link to={"/admin/addproduct"}>
        <div className="flex flex-row px-5 py-3 mb-3 rounded-lg hover:bg-slate-50 hover:shadow-sm">
          <i className="ri-menu-add-line mr-4"></i>
          <p>Add Products</p>
        </div>
      </Link>
      <Link to={"/admin/dashboard"}>
        <div className="flex flex-row px-5 py-3 mb-3 rounded-lg hover:bg-slate-50 hover:shadow-sm">
          <i className="ri-logout-box-line mr-4"></i>
          <p>Logout</p>
        </div>
      </Link>
    </div>
  );
}
