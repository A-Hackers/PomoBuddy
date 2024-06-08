import React from "react";
import Timer from "../components/Timer";
import TodoList from "../components/TodoList";

const TimerPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-background-gradient">
      <div className="grid grid-cols-3 gap-0 items-start">
        <div className="self-start">
          <TodoList />
        </div>
        <div className="flex justify-center">
          <Timer />
        </div>
        <div></div>
      </div>
      <style>{`
    .bg-background-gradient {
      background: rgb(4, 20, 72);
      background: -moz-radial-gradient(
        circle,
        rgba(4, 20, 72, 1) 21%,
        rgba(0, 0, 0, 1) 55%
      );
      background: -webkit-radial-gradient(
        circle,
        rgba(4, 20, 72, 1) 21%,
        rgba(0, 0, 0, 1) 55%
      );
      background: radial-gradient(
        circle,
        rgba(4, 20, 72, 1) 21%,
        rgba(0, 0, 0, 1) 55%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#041448",endColorstr="#000000",GradientType=1);
    }
  `}</style>
    </div>
  );
};

export default TimerPage;
