import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <main className="flex flex-row min-h-screen flex-wrap text-gray-600 relative justify-end">
        <div className="w-1/5 bg-white flex flex-col pt-28 px-10 font-medium absolute top-0 left-0 h-screen ">
          <div className="flex flex-row px-5 py-5 rounded-lg bg-green-400 text-white shadow">
            <i class="ri-dashboard-line mr-4"></i>
            <p>Dashboard</p>
          </div>
          <div className="flex flex-row px-5 py-5 rounded-lg ">
            <i class="ri-line-chart-line  mr-4"></i>
            <p>Analytics</p>
          </div>
          <div className="flex flex-row px-5 py-5 rounded-lg ">
            <i class="ri-shopping-bag-line mr-4"></i>
            <p>Shop</p>
          </div>
          <div className="flex flex-row px-5 py-5 rounded-lg ">
            <i class="ri-user-line mr-4"></i>
            <p>User</p>
          </div>
          <div className="flex flex-row px-5 py-5 rounded-lg ">
            <i class="ri-menu-add-line mr-4"></i>
            <p>Add Products</p>
          </div>
          <div className="flex flex-row px-5 py-5 rounded-lg ">
            <i class="ri-logout-box-line mr-4"></i>
            <p>Logout</p>
          </div>
        </div>
        <div className="w-4/5 bg-gray-50 pt-28 px-10">
          <div className="h-28 flex w-full flex-row justify-start">
            <img
              src="https://pixelmator.com/community/download/file.php?avatar=17785_1569233053.png"
              className="w-28 h-28 rounded-full"
            />
            <div className="flex flex-col justify-center ml-5">
              <h1 className="text-2xl font-bold text-dark">
                Good Morning, Anurag!
              </h1>
              <p>Here's an overview on whats happening at the shop</p>
            </div>
          </div>
          <div className="flex flex-row mt-10">
            <div className="w-1/3 p-2">
              <div className="w-100 py-10 flex flex-col text-center justify-center px-2 bg-white shadow rounded-lg">
                <p className="mb-2 text-sm">New Orders</p>
                <h1 className="text-5xl font-medium text-black">1400</h1>
              </div>
            </div>
            <div className="w-1/3 p-2">
              <div className="w-100 py-10 flex flex-col text-center justify-center px-2 bg-white shadow rounded-lg">
                <p className="mb-2 text-sm">Pending Orders </p>
                <h1 className="text-5xl font-medium text-black">320</h1>
              </div>
            </div>
            <div className="w-1/3 p-2">
              <div className="w-100 py-10 flex flex-col text-center justify-center px-2 bg-white shadow rounded-lg">
                <p className="mb-2 text-sm">In Stock</p>
                <h1 className="text-5xl font-medium text-black">5000</h1>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
