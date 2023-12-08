import useTipTap from "./useTipTap";
import { EditorContent } from "@tiptap/react";
import "./styles.css";
import {
  LuBold,
  LuCode,
  LuImage,
  LuItalic,
  LuList,
  LuListOrdered,
  LuQuote,
  LuSplit,
  LuStrikethrough,
  LuUnderline,
} from "react-icons/lu";

import { IoSyncCircleOutline } from "react-icons/io5";
import { Level } from "@tiptap/extension-heading";

type Props = {
  content: string;
  setContent: (content: string) => void;
};

export default function Editor({ setContent, content }: Props) {
  const {
    editor,
    toggleHeading,
    toggleNormal,
    toggleBold,
    toggleItalic,
    toggleStrike,
    toggleUnderline,
    splitListItem,
    toggleBlockquote,
    toggleBulletList,
    toggleOrderedList,
    toggleCode,
    currentHeading,
    addImage,
    fileRef,
    handleSelectImg,
  } = useTipTap({
    placeholder: "Start typing something...",
    content,
    setContent,
  });

  return (
    <>
      <div className="tiptap-menu">
        <button onClick={toggleBold}>
          <LuBold />
        </button>
        <button onClick={toggleItalic}>
          <LuItalic />
        </button>
        <button onClick={toggleStrike}>
          <LuStrikethrough />
        </button>
        <button onClick={toggleUnderline}>
          <LuUnderline />
        </button>
        <select
          value={currentHeading.toString()}
          onChange={(e) => {
            if (parseInt(e.target.value) === 0) {
              toggleNormal();
              return;
            }
            toggleHeading(parseInt(e.target.value) as Level);
          }}
        >
          <option value={0}>Normal</option>
          {Array.from(Array(6).keys()).map((_, index) => (
            <option key={index} value={index + 1}>
              Heading {index + 1}
            </option>
          ))}
        </select>
        <button onClick={toggleCode}>
          <LuCode />
        </button>
        <button onClick={toggleBlockquote}>
          <LuQuote />
        </button>
        <button onClick={toggleBulletList}>
          <LuList />
        </button>
        <button onClick={toggleOrderedList}>
          <LuListOrdered />
        </button>
        <button onClick={splitListItem}>
          <LuSplit />
        </button>
        <input
          type="file"
          id="file"
          ref={fileRef}
          multiple={false}
          onChange={handleSelectImg}
        />
        <button onClick={addImage}>
          <LuImage />
        </button>
      </div>
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
