import React from "react";

function AlarmHeader() {
  return (
    <div className="flex flex-row justify-between items-center px-4 py-10 text-xl">
      <div>
        <h1>時鐘</h1>
      </div>
      <div className="relative group hover:bg-gray-700 mx-2">
        <button className="">
          <i className="text-sm fas fa-ellipsis-v"></i>
        </button>
        <div className="hidden group-hover:block transition duration-500 ease-in-out">
          <div className="w-28 h-auto absolute top-0 right-0 z-20 p-4 hidden bg-gray-700 rounded-lg group-hover:block">
            <div className="grid gap-2 p-1 grid-cols-1 grid-rows-2">
              <a
                className="hover:bg-gray-500 p-1 text-sm font-semibold"
                href="/"
              >
                刪除
              </a>
              <a
                className="hover:bg-gray-500 p-1 text-sm font-semibold"
                href="/"
              >
                設定
              </a>
              <a
                className="hover:bg-gray-500 p-1 text-sm font-semibold"
                href="/"
              >
                常見問題
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlarmHeader;
