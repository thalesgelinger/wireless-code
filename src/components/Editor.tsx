import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";

const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);

type EditorProps ={
    code: string;
    onType: (code: string)  => void
}

export const Editor = ({ code, onType}: EditorProps) => {
    return (
        <CodeEditor
            value={code}
            language="tsx"
            placeholder="Please enter JS code."
            onChange={(evn) => onType(evn.target.value)}
            padding={15}
            style={{
                fontSize: 14,
                backgroundColor: "#f5f5f5",
                fontFamily:
                    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                    flex: 1
            }}
        />
    );
}
