import { Editor, EditorContent } from "@tiptap/react";

type Props = {
  editor?: Editor;
  boxStyle: React.CSSProperties;
};

export default function ContentEditor({ editor, boxStyle }: Props) {
  return (
    <div className="tiptap-editor" style={boxStyle}>
      {editor && <EditorContent editor={editor} />}
    </div>
  );
}
