// import React, { useState } from "react";
// import "./textArea.css";

// import ContentEditable from "react-contenteditable";

// const Editable = () => {
//   const [content, setContent] = useState("");

//   const onContentChange = (evt) => {
//     setContent(evt.currentTarget.innerHTML);
//   };

//   const [color, setColor] = useState('#000000');

//   const handleColorChange = (e) => {
//     setColor(e.target.value);
//   };

//   return (
//     <>
//         <div className="text-area">
//       {/* <ContentEditable
//         contentEditable="true"
//         placeholder="Write Your Text"
//         suppressContentEditableWarning={true}
//         onChange={onContentChange}
//         onBlur={onContentChange}
//         html={content}
//         style={{ color: color }}
//        // onChange={(e) => console.log(e.target.value)}
//       /> */}
//       <textarea
//       //onChange={onContentChange}
//       onBlur={onContentChange}
//       //html={content}
//       contentEditable="true"
//       placeholder="Write Your Text"
//       suppressContentEditableWarning={true}
//         style={{ color: color }}
//         onChange={(e) => console.log(e.target.value)}
//       />
//     </div>
        
//     <input type="color" value={color} onChange={handleColorChange} />
   
//     </>
    
//   );
// };

// export default Editable;



import React, { useState } from "react";
import "./textArea.css";
import ContentEditable from "react-contenteditable";

const Editable = () => {
  const [content, setContent] = useState("");

  const onContentChange = (evt) => {
    setContent(evt.currentTarget.innerHTML);
  };
  

  const [color, setColor] = useState('#000000');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleColorClick = () => {
    const selection = window.getSelection();
    if (!selection.isCollapsed) {
      document.execCommand("foreColor", true, color);
    }
  }

  return (
    <>
    <input type="color" value={color} onChange={handleColorChange} />
    
      <div className="text-area">
        <ContentEditable
          contentEditable="true"
          placeholder="Write Your Text"
          suppressContentEditableWarning={true}
          onChange={onContentChange}
          onBlur={onContentChange}
          html={content}
           style={{ color: color }}
          onSelect={handleColorClick}
        />
      </div>
        
      
    </>
  );
};

export default Editable;


