import { Button } from "@mantine/core";
import { useRef } from "react";
import EmailEditor from "react-email-editor";

const App = () => {
  const emailEditorRef = useRef<any>(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml(
      (data: { design: any; html: any }) => {
        const { design, html } = data;
        console.log("exportHtml", html, design);
      }
    );
  };

  return (
    <div style={{ height: "85vh" }}>
      <Button my="md" onClick={exportHtml}>
        Export HTML
      </Button>

      <EmailEditor
        appearance={{ panels: { tools: { dock: "left" } } }}
        ref={emailEditorRef}
        minHeight={"100%"}
      />
    </div>
  );
};

export default App;
