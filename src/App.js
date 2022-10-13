import './App.css';
import React, { useState, useEffect } from 'react';
import Markdown from 'marked-react';

function App() {
  const file_name = 'markdown-sample.md';
  const [post, setPost] = useState('');

  useEffect(() => {
    import(`./${file_name}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res));
      })
      .catch(err => console.log(err));
  });

  return (
    <div className="App">
      <div className="MarkDown">
        <Markdown>
          {post}
        </Markdown>
      </div>
    </div>
  );
}

export default App;
