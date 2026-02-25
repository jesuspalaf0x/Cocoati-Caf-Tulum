'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import { useEffect } from 'react'

const MenuBar = ({ editor }: { editor: any }) => {
    if (!editor) {
        return null
    }

    const addImage = () => {
        const url = window.prompt('URL de la imagen')
        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }

    return (
        <div className="border-b border-slate-700 p-2 flex flex-wrap gap-2 text-slate-300">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`p-2 rounded hover:bg-white/10 ${editor.isActive('bold') ? 'bg-white/10 text-gold-500' : ''}`}
                title="Negrita"
            >
                <span className="material-symbols-outlined text-[20px]">format_bold</span>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`p-2 rounded hover:bg-white/10 ${editor.isActive('italic') ? 'bg-white/10 text-gold-500' : ''}`}
                title="Cursiva"
            >
                <span className="material-symbols-outlined text-[20px]">format_italic</span>
            </button>
            <div className="w-px h-6 bg-slate-700 mx-1 self-center"></div>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`p-2 rounded hover:bg-white/10 ${editor.isActive('heading', { level: 2 }) ? 'bg-white/10 text-gold-500' : ''}`}
                title="Título Principal"
            >
                <span className="material-symbols-outlined text-[20px]">title</span>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={`p-2 rounded hover:bg-white/10 ${editor.isActive('heading', { level: 3 }) ? 'bg-white/10 text-gold-500' : ''}`}
                title="Subtítulo"
            >
                <span className="material-symbols-outlined text-[20px] scale-75">title</span>
            </button>
            <div className="w-px h-6 bg-slate-700 mx-1 self-center"></div>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`p-2 rounded hover:bg-white/10 ${editor.isActive('bulletList') ? 'bg-white/10 text-gold-500' : ''}`}
                title="Lista con viñetas"
            >
                <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`p-2 rounded hover:bg-white/10 ${editor.isActive('orderedList') ? 'bg-white/10 text-gold-500' : ''}`}
                title="Lista numerada"
            >
                <span className="material-symbols-outlined text-[20px]">format_list_numbered</span>
            </button>
            <div className="w-px h-6 bg-slate-700 mx-1 self-center"></div>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`p-2 rounded hover:bg-white/10 ${editor.isActive('blockquote') ? 'bg-white/10 text-gold-500' : ''}`}
                title="Cita"
            >
                <span className="material-symbols-outlined text-[20px]">format_quote</span>
            </button>
            <button
                onClick={addImage}
                className="p-2 rounded hover:bg-white/10"
                title="Insertar imagen"
            >
                <span className="material-symbols-outlined text-[20px]">image</span>
            </button>
        </div>
    )
}

interface RichTextEditorProps {
    content: string
    onChange: (content: string) => void
}

const RichTextEditor = ({ content, onChange }: RichTextEditorProps) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Image.configure({
                HTMLAttributes: {
                    class: 'rounded-lg max-w-full h-auto mx-auto my-6',
                },
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-gold-500 underline decoration-gold-500/50 hover:decoration-gold-500 transition-all',
                },
            }),
            Placeholder.configure({
                placeholder: 'Escribe tu historia aquí...',
            }),
        ],
        content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        },
        editorProps: {
            attributes: {
                class: 'prose prose-invert prose-lg max-w-none focus:outline-none min-h-[300px] px-6 py-4 text-slate-300',
            },
        },
        immediatelyRender: false,
    })

    // Sync content if it changes externally (e.g. initial load)
    useEffect(() => {
        if (editor && content !== editor.getHTML()) {
            // Only update if difference is significant to avoid cursor jumps loops
            // For simple use cases, this is usually fine, but be careful with strict equality on HTML string
            if (editor.getText() === '' && content !== '') {
                editor.commands.setContent(content)
            }
        }
    }, [content, editor])

    return (
        <div className="bg-black/20 border border-slate-800 rounded-lg overflow-hidden focus-within:border-gold-500 transition-colors">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}

export default RichTextEditor
