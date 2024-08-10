import React, { useRef, useState } from "react";

function ContextMenu() {
  const [boxClicked, setBoxClicked] = useState(false);
  const [isHoverOpen, setIsHoverOpen] = useState(false);
  const hoverRef = useRef(null);
  const handleRightClick = (event) => {
    // Prevent the default context menu
    event.preventDefault();
    setBoxClicked(!boxClicked);
    // Custom logic to execute on right-click
  };
  const handleMouseLeave = (e) => {
    // Ensure that e.relatedTarget is not null and is an element node
    if (e.relatedTarget && e.relatedTarget.nodeType === Node.ELEMENT_NODE) {
      // Ensure that the hoverRef is valid before using contains
      if (
        hoverRef.current &&
        !hoverRef.current.contains(e.relatedTarget) &&
        !e.currentTarget.contains(e.relatedTarget)
      ) {
        setIsHoverOpen(false);
      }
    } else {
      // If the related target is not a valid node, close the dropdown
      setIsHoverOpen(false);
    }
  };
  return (
    <div
      className="w-96 h-56 rounded-2xl border border-gray-500 "
      style={{ backgroundColor: "aliceblue" }}
      onContextMenu={handleRightClick}
    >
      <h3 className="text-4xl font-bold text-center mt-10">
        Right click anywhere
      </h3>
      {boxClicked && (
        <div className="w-44 ml-10 mt-8">
          <ul className="bg-white text-center font-medium text-xl border border-zinc-900 rounded-sm text-zinc-700">
            <li
              className={`py-2 px-4 cursor-default hover:bg-zinc-700 hover:text-lime-500 relative animate-slideInLeft ${
                isHoverOpen
                  ? "bg-zinc-700 text-lime-500"
                  : "hover:bg-zinc-700 hover:text-lime-500"
              }`}
              onMouseEnter={() => {
                setIsHoverOpen(true);
              }}
              onMouseLeave={handleMouseLeave}
            >
              Hover
              {isHoverOpen && (
                <div
                  className="nested-dropdown absolute top-0 left-44 bg-white font-medium text-lg border-2 border-zinc-900 rounded-sm text-zinc-700"
                  ref={hoverRef}
                >
                  <ul className="font-medium text-xl text-center">
                    <li className="py-2 px-4 cursor-pointer hover:bg-zinc-700 hover:text-lime-500 animate-slideInLeft">
                      Empty
                    </li>
                    <li
                      className="py-2 px-4 cursor-pointer hover:bg-zinc-700 hover:text-lime-500 animate-slideInRight"
                      onClick={() => {
                        setIsHoverOpen(false);
                      }}
                    >
                      Close
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li className="py-2 px-4 cursor-default hover:bg-zinc-700 hover:text-lime-500 animate-slideInRight">
              I do nothing
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ContextMenu;
