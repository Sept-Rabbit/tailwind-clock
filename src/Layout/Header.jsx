import React from "react";

function Header() {
  const displayDelete = "";

  return (
    <div className="flex flex-row items-center justify-between px-4 py-10 text-xl">
      <div>
        <h1>時鐘</h1>
      </div>
      <div className="relative mx-2 group hover:bg-gray-700">
        <button className="">
          <i className="text-sm fas fa-ellipsis-v"></i>
        </button>
        <div className="hidden transition duration-500 ease-in-out group-hover:block">
          <div className="absolute top-0 right-0 z-20 hidden h-auto p-4 bg-gray-700 rounded-lg w-28 group-hover:block">
            <div className="grid grid-cols-1 grid-rows-2 gap-2 p-1">
              <button
                onClick={displayDelete}
                className="p-1 text-sm font-semibold hover:bg-gray-500"
                href="/"
              >
                刪除
              </button>
              <button
                className="p-1 text-sm font-semibold hover:bg-gray-500"
                href="/"
              >
                設定
              </button>
              <button
                className="p-1 text-sm font-semibold hover:bg-gray-500"
                href="/"
              >
                常見問題
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
