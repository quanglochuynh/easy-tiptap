import useTipTap from "./useTipTap";
import { EditorContent } from "@tiptap/react";
import "./styles.css";

import { IoSyncCircleOutline } from "react-icons/io5";
import MenuBar from "./MenuBar";

type Props = {
  content: string;
  setContent: (content: string) => void;
};

export default function Editor({ setContent, content }: Props) {
  const { editor, toggles, menuActions } = useTipTap({
    placeholder: "Start typing something...",
    content,
    setContent,
  });

  return (
    <>
      <MenuBar toggles={toggles} menuActions={menuActions} />
      <div className="tiptap-editor">
        {editor && <EditorContent editor={editor} />}
      </div>
      <div className="sync-button-container">
        <button
          className="sync-button"
          onClick={() => {
            setContent(editor.getHTML());
          }}
        >
          <IoSyncCircleOutline size={22} />
          <span className="sync-text">Sync Preview & Code</span>
        </button>
      </div>
    </>
  );
}
