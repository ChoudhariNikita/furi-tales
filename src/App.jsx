import { useState, useEffect } from 'react';
import Story from './Story';

const storyFiles = [
  '/src/stories/story1.md'
];

function App() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [storyContent, setStoryContent] = useState('');

  useEffect(() => {
    fetch(storyFiles[currentStoryIndex])
      .then((res) => res.text())
      .then((text) => setStoryContent(text));
  }, [currentStoryIndex]);

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % storyFiles.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + storyFiles.length) % storyFiles.length);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">📖 Furi-Tales</h1>
      <div className="card shadow-sm p-4">
        <Story content={storyContent} />
      </div>
      <div className="d-flex justify-content-between mt-4">
        <button onClick={prevStory} className="btn btn-outline-primary">⬅️ Previous</button>
        <button onClick={nextStory} className="btn btn-primary">Next ➡️</button>
      </div>
    </div>
  );
}

export default App;
