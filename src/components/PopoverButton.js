import React, { useState, useRef } from "react";

const PopoverButton = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isHoverOpen, setIsHoverOpen] = useState(false);
  const [hoverDepth, setHoverDepth] = useState(0);

  const hoverRef = useRef(null);
  const handleMouseEnterdepth = (depth) => {
    setHoverDepth(depth);
  };

  const handleMouseLeavedepth = (depth) => {
    if (hoverDepth === depth) {
      setHoverDepth(depth - 1);
    }
  };

  const renderNestedMenus = (depth) => {
    // Check if the current hover depth is greater than or equal to the depth passed to the function.
    // If so, render the nested dropdown menu; otherwise, return null to stop rendering further nested menus.
    if (hoverDepth >= depth) {
      return (
        <div
          className="nested-dropdown absolute left-full bottom-0 bg-white font-medium text-lg border-2 border-zinc-900 rounded-md text-zinc-700"
          key={`nested-menu-${depth}`}
          ref={hoverRef}
          style={{
            animation: "slideInWithBlur 0.5s ease-out forwards",
          }}
        >
          <ul className="font-medium text-xl text-center">
            <li
              className="py-2 px-4 cursor-pointer hover:bg-zinc-700 hover:text-lime-500"
              // When the mouse enters the list item, increase the depth by 1 to show the next nested menu.
              onMouseEnter={() => handleMouseEnterdepth(depth + 1)}
              // When the mouse leaves the list item, decrease the depth by 1 to hide the current nested menu.
              onMouseLeave={() => handleMouseLeavedepth(depth + 1)}
            >
              Hover
              {/* Recursively call renderNestedMenus to create the next level of the nested menu */}
              {renderNestedMenus(depth + 1)}
            </li>
          </ul>
        </div>
      );
    }
    // Return null if hoverDepth is less than the current depth, indicating no further menus should be rendered.
    return null;
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
      className="w-80 h-56 rounded-2xl border border-gray-500 "
      style={{ backgroundColor: "#de9999" }}
    >
      <h3 className="text-4xl font-bold text-center mt-10">Click on button</h3>
      <div className="relative">
        <button
          className="bg-white px-2 border-2 border-gray-500 ml-4 mt-8 text-lg font-medium text-gray-700 rounded-md cursor-default"
          onClick={() => {
            setIsPopoverOpen(!isPopoverOpen);
            setIsHoverOpen(false); // Close nested dropdown when toggling the main dropdown
          }}
        >
          Popover
        </button>
        {isPopoverOpen && (
          <div className="absolute left-24 top-8 ml-1">
            <ul className="bg-white font-medium text-xl border-2 border-zinc-900 rounded-sm text-zinc-700">
              <li className="py-2 px-4 cursor-default hover:bg-zinc-700 hover:text-lime-500 animate-slideInRight">
                Hello
              </li>
              <li
                className="py-2 px-4 cursor-default hover:bg-zinc-700 hover:text-lime-500 animate-slideInLeft"
                onClick={() => {
                  setIsPopoverOpen(false);
                }}
              >
                Close
              </li>
              <li
                className="px-4 py-2 cursor-default hover:bg-zinc-700 hover:text-lime-500 relative animate-slideInRight"
                onMouseEnter={() => {
                  setIsHoverOpen(true);
                  setHoverDepth(0);
                }}
                onMouseLeave={handleMouseLeave}
              >
                Hover
                {isHoverOpen && (
                  <div>
                    <div
                      className="nested-dropdown absolute left-full top-0 mt-1 bg-white font-medium text-lg border-2 border-zinc-900 rounded-sm text-zinc-700"
                      ref={hoverRef}
                    >
                      <ul className="font-medium text-xl text-center">
                        <li className="py-2 px-4 cursor-pointer hover:bg-zinc-700 hover:text-lime-500 animate-slideInRight">
                          Hello
                        </li>
                        <li className="py-2 px-4 cursor-pointer hover:bg-zinc-700 hover:text-lime-500 animate-slideInLeft">
                          Spacemaker
                        </li>
                        <li className="py-2 px-4 cursor-pointer hover:bg-zinc-700 hover:text-lime-500 animate-slideInRight">
                          World
                        </li>
                        <li
                          className="py-2 px-4 cursor-pointer hover:bg-zinc-700 hover:text-lime-500 animate-slideInLeft"
                          onClick={() => {
                            setIsHoverOpen(false);
                          }}
                        >
                          Close
                        </li>
                        <li
                          className="py-2 px-4 cursor-pointer hover:bg-zinc-700 hover:text-lime-500 relative animate-slideInRight"
                          onMouseEnter={() => handleMouseEnterdepth(1)}
                          onMouseLeave={() => handleMouseLeavedepth(1)}
                        >
                          Hover
                          {renderNestedMenus(1)}
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopoverButton;
