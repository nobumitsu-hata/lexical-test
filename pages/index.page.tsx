import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { ListItemNode, ListNode } from '@lexical/list'
import AutoFocusPlugin from '@lexical/react/LexicalAutoFocusPlugin'
import LexicalComposer from '@lexical/react/LexicalComposer'
import ContentEditable from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import LinkPlugin from '@lexical/react/LexicalLinkPlugin'
import ListPlugin from '@lexical/react/LexicalListPlugin'
import LexicalMarkdownShortcutPlugin from '@lexical/react/LexicalMarkdownShortcutPlugin'
import RichTextPlugin from '@lexical/react/LexicalRichTextPlugin'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table'

import ToolbarPlugin from '../plugins/ToolbarPlugin'
import ExampleTheme from '../themes/ExampleTheme'

const theme = {
  ltr: 'ltr',
  paragraph: 'editor-paragraph',
  placeholder: 'editor-placeholder',
  rtl: 'rtl',
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
  console.error(error)
}

const editorConfig = {
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],

  // Handling of errors during update
  onError(error) {
    throw error
  },

  // The editor theme
  theme: ExampleTheme,
}

const Page = () => {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="relative my-5 w-[600px] text-left text-black rounded-sm">
        <ToolbarPlugin />
        <div className="relative bg-white">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="relative p-4 min-h-[150px] resize-none" />
            }
            placeholder={
              <div className="inline-block overflow-hidden absolute top-4 left-3 text-[#999]">
                Enter some rich text...
              </div>
            }
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <ListPlugin />
          <LinkPlugin />
          <LexicalMarkdownShortcutPlugin />
        </div>
      </div>
    </LexicalComposer>
  )
}

export default Page
