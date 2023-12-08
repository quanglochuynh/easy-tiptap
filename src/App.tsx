import Editor from "./Editor";
import "./App.css";
import { useState } from "react";

function App() {
  const [content, setContent] = useState<string>("<p></p>");

  return (
    <div className="main-container">
      <header className="main-header">
        <h1>TipTap Editor</h1>
      </header>
      <div className="editor-container">
        <Editor content={content} setContent={setContent} />
      </div>
      <div className="preview-container">
        <h2>Preview</h2>
        <div
          className="preview-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div className="code-container">
        <h2>HTML</h2>
        <pre>
          <code>{content}</code>
        </pre>
      </div>
    </div>
  );
}

export default App;
