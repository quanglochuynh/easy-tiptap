import { useCallback, useEffect, useMemo, useState } from "react";
import { useEditor, Editor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Link from "@tiptap/extension-link";
import Bold from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import History from "@tiptap/extension-history";
import Heading from "@tiptap/extension-heading";

export default function useTipTap() {
  const [content, setContent] = useState<string>("");
  const editor = useEditor({
    extensions: [
      Document,
      History,
      Paragraph,
      Text,
      Link.configure({
        openOnClick: false,
      }),
      Bold,
      Underline,
      Italic,
      Strike,
      Heading,
    ],
    content,
  }) as Editor;
  useEffect(() => {
    if (editor) {
      setContent(editor.getHTML());
    }
  }, [editor, setContent]);
  const toggleBold = useCallback(() => {
    editor.chain().focus().toggleBold().run();
  }, [editor]);

  const toggleUnderline = useCallback(() => {
    editor.chain().focus().toggleUnderline().run();
  }, [editor]);

  const toggleItalic = useCallback(() => {
    editor.chain().focus().toggleItalic().run();
  }, [editor]);

  const toggleStrike = useCallback(() => {
    editor.chain().focus().toggleStrike().run();
  }, [editor]);

  const toggleHeading1 = useCallback(() => {
    editor.chain().focus().toggleHeading({ level: 1 }).run();
  }, [editor]);

  const toggleHeading2 = useCallback(() => {
    editor.chain().focus().toggleHeading({ level: 2 }).run();
  }, [editor]);

  const toggleHeading3 = useCallback(() => {
    editor.chain().focus().toggleHeading({ level: 3 }).run();
  }, [editor]);

  const toggleHeading4 = useCallback(() => {
    editor.chain().focus().toggleHeading({ level: 4 }).run();
  }, [editor]);

  const toggleHeading5 = useCallback(() => {
    editor.chain().focus().toggleHeading({ level: 5 }).run();
  }, [editor]);

  const toggleHeading6 = useCallback(() => {
    editor.chain().focus().toggleHeading({ level: 6 }).run();
  }, [editor]);
  const heading = useMemo(
    () => [
      {
        level: 1,
        toggle: toggleHeading1,
      },
      {
        level: 2,
        toggle: toggleHeading2,
      },
      {
        level: 3,
        toggle: toggleHeading3,
      },
      {
        level: 4,
        toggle: toggleHeading4,
      },
      {
        level: 5,
        toggle: toggleHeading5,
      },
      {
        level: 6,
        toggle: toggleHeading6,
      },
    ],
    [
      toggleHeading1,
      toggleHeading2,
      toggleHeading3,
      toggleHeading4,
      toggleHeading5,
      toggleHeading6,
    ]
  );
  return {
    editor,
    content,
    setContent,
    toggleBold,
    toggleUnderline,
    toggleItalic,
    toggleStrike,
    heading,
  };
}
