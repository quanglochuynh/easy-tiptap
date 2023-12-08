import useTipTap from "./useTipTap";
import { EditorContent } from "@tiptap/react";
import "./styles.css";
import {
  LuBold,
  LuCode,
  LuItalic,
  LuList,
  LuListOrdered,
  LuQuote,
  LuSplit,
  LuStrikethrough,
  LuUnderline,
} from "react-icons/lu";

type Props = {
  content: string;
  setContent: (content: string) => void;
};

export default function Editor({ setContent, content }: Props) {
  const {
    editor,
    heading,
    toggleBold,
    toggleItalic,
    toggleStrike,
    toggleUnderline,
    splitListItem,
    toggleBlockquote,
    toggleBulletList,
    toggleOrderedList,
    toggleCode,
  } = useTipTap({
    placeholder: "Start typing something...",
    content,
    setContent,
  });
  return (
    <div className="tiptap-container">
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
          value={heading.findIndex((item) => item.isActive)}
          onChange={(e) => {
            heading[Number(e.target.value)].toggle();
          }}
        >
          <option value={0}>Normal</option>
          {heading.map((item, index) => (
            <option key={index} value={index + 1}>
              Heading {item.level + 1}
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
        <button
          onClick={() => {
            setContent(editor.getHTML());
          }}
        >
          log content
        </button>
      </div>
      <div className="tiptap-editor">
        {editor && <EditorContent editor={editor} />}
      </div>
    </div>
  );
}
