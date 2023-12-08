import { useCallback, useEffect, useMemo } from "react";
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
import Placeholder from "@tiptap/extension-placeholder";
import Code from "@tiptap/extension-code";
import Blockquote from "@tiptap/extension-blockquote";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";

type Props = {
  placeholder?: string;
  content?: string;
  setContent: (content: string) => void;
};

export default function useTipTap({ placeholder, content, setContent }: Props) {
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
      Placeholder.configure({
        placeholder: placeholder || "",
      }),
      Code,
      Blockquote,
      BulletList,
      OrderedList,
      ListItem,
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

  const toggleNormal = useCallback(() => {
    editor.chain().focus().setParagraph().run();
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
        level: 0,
        toggle: toggleNormal,
        isActive: () => editor.isActive("paragraph"),
      },
      {
        level: 1,
        toggle: toggleHeading1,
        isActive: () => editor.isActive("heading", { level: 1 }),
      },
      {
        level: 2,
        toggle: toggleHeading2,
        isActive: () => editor.isActive("heading", { level: 2 }),
      },
      {
        level: 3,
        toggle: toggleHeading3,
        isActive: () => editor.isActive("heading", { level: 3 }),
      },
      {
        level: 4,
        toggle: toggleHeading4,
        isActive: () => editor.isActive("heading", { level: 4 }),
      },
      {
        level: 5,
        toggle: toggleHeading5,
        isActive: () => editor.isActive("heading", { level: 5 }),
      },
      {
        level: 6,
        toggle: toggleHeading6,
        isActive: () => editor.isActive("heading", { level: 6 }),
      },
    ],
    [
      toggleNormal,
      toggleHeading1,
      toggleHeading2,
      toggleHeading3,
      toggleHeading4,
      toggleHeading5,
      toggleHeading6,
      editor,
    ]
  );

  const toggleCode = useCallback(() => {
    editor.chain().focus().toggleCode().run();
  }, [editor]);

  const toggleBlockquote = useCallback(() => {
    editor.chain().focus().toggleBlockquote().run();
  }, [editor]);

  const toggleBulletList = useCallback(() => {
    editor.chain().focus().toggleBulletList().run();
  }, [editor]);

  const toggleOrderedList = useCallback(() => {
    editor.chain().focus().toggleOrderedList().run();
  }, [editor]);

  const splitListItem = useCallback(() => {
    console.log("splitListItem");

    editor.chain().focus().splitListItem("listItem").run();
  }, [editor]);

  return {
    editor,
    content,
    setContent,
    toggleBold,
    toggleUnderline,
    toggleItalic,
    toggleStrike,
    heading,
    toggleCode,
    toggleBlockquote,
    toggleBulletList,
    toggleOrderedList,
    splitListItem,
  };
}
