import ReactMarkdown from 'react-markdown';

function Story({ content }) {
  return (
    <div style={{ whiteSpace: 'pre-line', fontSize: '1.2rem' }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default Story;
