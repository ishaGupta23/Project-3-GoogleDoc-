import React from "react";
import "./textArea.css";

import sanitizeHtml from "sanitize-html";
import ContentEditable from "react-contenteditable";

const Editable = () => {
  const [content, setContent] = React.useState("");

  const onContentChange = React.useCallback((evt) => {
    const sanitizeConf = {
      allowedTags: ["b", "i", "a", "p"],
      allowedAttributes: { a: ["href"] },
    };

    setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf));
  }, []);

  return (
    <div className="text-area">
      <ContentEditable
        contentEditable="true"
        placeholder="Write Your Text"
        suppressContentEditableWarning={true}
        onChange={onContentChange}
        onBlur={onContentChange}
        html={content}
      />
    </div>
  );
};
export default Editable;
