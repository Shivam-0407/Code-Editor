import React, { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import 'prismjs/components/prism-jsx';

const CodeEditor = ({ language }) => {
  const [code, setCode] = useState(`
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world 🌍</h1>
  );
}
`);
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      console.log(codeRef.current)
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div >
      <textarea
      id="text-area"
        value={code}
        onChange={handleCodeChange}
        spellCheck="false"
        placeholder="Write your code here..."
      />
      <pre
      id="pre-area"
      aria-hidden="true"
      >
        <code  id="highlighting-content" ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeEditor;