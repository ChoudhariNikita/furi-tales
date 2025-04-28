import ReactMarkdown from 'react-markdown';

function Story({ content }) {
  return (
    <div style={{ whiteSpace: 'pre-line', fontSize: '1.0rem', lineHeight: '1.3' }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default Story;