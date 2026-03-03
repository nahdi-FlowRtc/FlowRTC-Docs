import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-bash";
const Higlight = ({code,lang}) => {
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);

   

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        
        position: "relative",
      }}
    >
      {/* Copy Button */}
      <button
        onClick={copyCode}
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",

          background: "#2D2D2D",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",

          padding: "6px 12px",
          borderRadius: "6px",

          fontSize: "12px",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        {copied ? "Copied ✓" : "Copy"}
      </button>

      <pre
        style={{
          background: "#1E1E1E",
          borderRadius: "14px",

          padding: "20px 22px 22px",
          fontSize: "14px",
          fontFamily: `"JetBrains Mono","Fira Code", monospace`,
          lineHeight: "1.6",

          overflowX: "auto",

          boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Mac Dots */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "12px",
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              background: "#FF5F56",
              borderRadius: "50%",
            }}
          />
          <span
            style={{
              width: 12,
              height: 12,
              background: "#FFBD2E",
              borderRadius: "50%",
            }}
          />
          <span
            style={{
              width: 12,
              height: 12,
              background: "#27C93F",
              borderRadius: "50%",
            }}
          />
        </div>

        <code ref={codeRef} className={`language-${lang}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default Higlight;