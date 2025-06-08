

import { useState, useRef } from "react";
import { BiCalendar } from "react-icons/bi";
import { CgMoreVertical } from "react-icons/cg";

export default function DraggableTaskList({ initialTasks = [] }) {
  const [tasks, setTasks] = useState(initialTasks);
  const container = useRef(null);
  const item = useRef(null);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleMouseDown = (e, index) => {
    e.preventDefault();
    setDraggingIndex(index);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const childPos = e.clientY;
    const parentTop = container.current.getBoundingClientRect().top;
    const offsetY = (childPos - parentTop) /
      parseFloat(getComputedStyle(document.documentElement).fontSize);

    if (item.current) {
      item.current.style.top = `${offsetY}rem`;
      item.current.style.position = "absolute";
      item.current.style.zIndex = 100;
      item.current.style.width = "100%";
      item.current.style.border = "2px solid #c203fc";
      item.current.style.borderRadius = "10px";
    }

    let index = Math.floor(offsetY / 4);
    index = Math.max(0, Math.min(index, tasks.length - 1));
    setDraggedIndex(index);
  };

  const handleMouseUp = () => {
    if (draggedIndex !== null && draggingIndex !== null) {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      const array = [...tasks];
      const draggedItem = array.splice(draggingIndex, 1)[0];
      array.splice(draggedIndex, 0, draggedItem);
      setTasks(array);

      if (item.current) {
        item.current.style = "";
        item.current = null;
      }

      setDraggedIndex(null);
      setDraggingIndex(null);
    }
  };

  const Task = ({ task }) => (
    <div className="flex p-2 bg-white rounded-lg justify-between items-center h-[4rem] overflow-hidden cursor-pointer hover:border-[2px] hover:border-purple-400 border-purple-200 border-2">
      <div className="flex items-center gap-2 w-1/2">
        <div className="w-4 h-4 border-2 rounded-full"></div>
        <div>{task.title}</div>
      </div>
      <div className="flex justify-between w-1/2">
        <div className="flex items-center gap-2 text-gray-500">
          <BiCalendar className="text-xl" />
        </div>
        <CgMoreVertical />
      </div>
    </div>
  );

  return (
    <div className="bg-white flex flex-col rounded-2xl p-4 shadow-md">
      <div className="text-[1.3rem] font-semibold mb-4">Tasks List</div>
      <div ref={container} className="relative w-full">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            onMouseDown={(e) => handleMouseDown(e, index)}
            className="mb-2 w-full"
            ref={draggingIndex === index ? item : null}
          >
            <Task task={task} />
          </div>
        ))}
      </div>
    </div>
  );
}
