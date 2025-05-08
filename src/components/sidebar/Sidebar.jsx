import { useState } from "react";
import { FaBook, FaRegFileAlt } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar({ storyFiles, selectStory, currentStoryIndex }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>
      <div className="sidebar-header">
        {isOpen ? <strong>Stories</strong> : <FaBook size={20} />}
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? "«" : "»"}
        </button>
      </div>
      <ul className="story-list">
        {storyFiles.map((story, idx) => (
          <li
            key={idx}
            onClick={() => selectStory(idx)}
            className={`story-item ${currentStoryIndex === idx ? "active" : ""}`}
          >
            <FaRegFileAlt className="story-icon" />
            {isOpen && story.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;