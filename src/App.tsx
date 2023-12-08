import Editor from "./Editor";
import "./App.css";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { formatHTMLString } from "./Utilities/formatCode";

function App() {
  const [content, setContent] = useState<string>("<p></p>");

  return (
    <div className="main-container">
      <div className="tiptap-container">
        <code>Editor</code>
        <Editor content={content} setContent={setContent} />
      </div>
      <div className="preview-container">
        <code>Preview</code>
        <div
          className="preview-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div className="code-container">
        <code>HTML</code>
        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {formatHTMLString(content)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default App;
