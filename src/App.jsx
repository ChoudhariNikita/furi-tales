import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Story from './components/Story';
import story1 from './data/stories/story1.md?raw';
import story2 from './data/stories/story2.md?raw';

const storyFiles = [
  { title: 'Story 1', content: story1 },
  { title: 'Story 2', content: story2 },
];

function App() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const selectStory = (index) => {
    setCurrentStoryIndex(index);
  };

  const goToNextStory = () => {
    if (currentStoryIndex < storyFiles.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    }
  };

  const goToPrevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  return (
    <div className="d-flex flex-column vh-100">
      <Header />

      <div className="d-flex flex-grow-1">
        <Sidebar 
          storyFiles={storyFiles}
          selectStory={selectStory}
          currentStoryIndex={currentStoryIndex}
        />

        <main className="flex-grow-1 p-4 overflow-auto">
          <Story 
            content={storyFiles[currentStoryIndex].content} 
          />

          {/* Prev and Next Buttons */}
          <div className="d-flex justify-content-between mt-4">
            <button 
              className="btn btn-outline-primary"
              onClick={goToPrevStory}
              disabled={currentStoryIndex === 0}
            >
              ← Previous
            </button>

            <button 
              className="btn btn-outline-primary"
              onClick={goToNextStory}
              disabled={currentStoryIndex === storyFiles.length - 1}
            >
              Next →
            </button>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;