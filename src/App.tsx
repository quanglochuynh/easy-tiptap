import Editor from "./Editor";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <header className="main-header">
        <h1>TipTap Editor</h1>
      </header>
      <div className="editor-container">
        <Editor />
      </div>
    </div>
  );
}

export default App;
