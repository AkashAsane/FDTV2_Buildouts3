import React, { useState, useEffect } from 'react';

const customDictionary = {
  teh: 'the',
  wrok: 'work',
  fot: 'for',
  exampl: 'example'
};

const App = () => {
  const [text, setText] = useState('');
  const [correction, setCorrection] = useState('');

  useEffect(() => {
    const words = text.split(' ');

    for (let word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary[lowerCaseWord]) {
        setCorrection(`Did you mean: ${customDictionary[lowerCaseWord]}?`);
        return;
      }
    }

    setCorrection('');
  }, [text]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        onChange={handleChange}
        rows="5"
        cols="50"
        placeholder="Type something..."
      />
      {correction && <p>{correction}</p>}
    </div>
  );
};

export default App;
