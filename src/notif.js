import { useState } from "react";
import "./notif.css";

function Notif({ notif = 22 }) {
  return (
    <>
      <div className="h-16 flex justify-between bg-gray-500">
        <h1 className=" pt-4 text-white pl-4 font-bold text-2xl">Next1Code</h1>
      </div>

      {notif > 0 && (
        <h4 className="pr-32 mr-4 float-right cursor-pointer border-2 border-gray-500 rounded-full w-10 pt-4 bg-gray-300">
          notifications
          <sum>{notif}</sum>
        </h4>
      )}
    </>
  );
}

export default Notif;
