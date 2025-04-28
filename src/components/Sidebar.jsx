import { useState } from 'react';
import { FaBook,FaRegFileAlt  } from 'react-icons/fa'; // Book icon for stories

function Sidebar({ storyFiles, selectStory, currentStoryIndex }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div 
      className="bg-light border-end d-flex flex-column"
      style={{
        width: isOpen ? '250px' : '70px',
        transition: 'width 0.3s',
        overflowX: 'hidden'
      }}
    >
      {/* Header inside sidebar */}
      <div className="d-flex justify-content-between align-items-center p-2 border-bottom">
        {isOpen ? (
          <strong style={{ fontSize: '1rem' }}>Stories</strong>
        ) : (
          <FaBook size={20} /> // Show folder icon when collapsed
        )}
        <button 
          className="btn btn-sm btn-outline-secondary ms-auto"
          onClick={toggleSidebar}
          style={{ fontSize: '0.8rem' }}
        >
          {isOpen ? '«' : '»'}
        </button>
      </div>

      {/* Story List */}
      <ul className="list-group list-group-flush">
        {storyFiles.map((story, idx) => (
          <li 
            key={idx}
            onClick={() => selectStory(idx)}
            className={`list-group-item list-group-item-action d-flex align-items-center ${currentStoryIndex === idx ? 'active' : ''}`}
            style={{ 
              cursor: 'pointer', 
              fontSize: '0.9rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            <FaRegFileAlt className="me-2" size={10} /> {/* File Icon */}
            {isOpen && story.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;