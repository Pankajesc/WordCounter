import React, { useState } from 'react';

const WordCount = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (event) => {
    const { value } = event.target;
    setText(value);
    setWordCount(value.trim().length === 0 ? 0 : value.trim().split(/\s+/).length);
  };

  return (
    <div className='container'>
      <h2>Responsive Paragraph Word Counter</h2>
      <textarea value={text} onChange={handleTextChange} placeholder="Enter text..." />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCount;