"use client";

import { useState, useEffect } from "react";
import { CopyIcon, CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  children,
  language = "typescript",
  className,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [SyntaxHighlighter, setSyntaxHighlighter] = useState<any>(null);
  const [theme, setTheme] = useState<any>(null);

  useEffect(() => {
    // Dynamic import to avoid SSR issues
    import("react-syntax-highlighter").then((mod) => {
      setSyntaxHighlighter(() => mod.Prism);
      import("react-syntax-highlighter/dist/cjs/styles/prism").then(
        (themeMod) => {
          setTheme(themeMod.dracula);
        }
      );
    });
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!SyntaxHighlighter || !theme) {
    return (
      <pre
        className={cn(
          "bg-drac-base/50 p-4 rounded-md overflow-x-auto",
          "border border-drac-current",
          className
        )}
      >
        <code>{children}</code>
      </pre>
    );
  }

  return (
    <div className="relative group">
      <button
        onClick={copyToClipboard}
        className={cn(
          "absolute right-2 top-2 p-2 rounded",
          "text-drac-base bg-drac-current/20 hover:bg-drac-current/30",
          "opacity-0 group-hover:opacity-100 transition-opacity",
          "flex items-center gap-1 text-xs"
        )}
        aria-label="Copy code"
      >
        {copied ? (
          <>
            <CheckIcon className="w-3 h-3 text-drac-green" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <CopyIcon className="w-3 h-3" />
            <span>Copy</span>
          </>
        )}
      </button>

      <SyntaxHighlighter
        language={language}
        style={theme}
        showLineNumbers={showLineNumbers}
        lineNumberStyle={{ color: "#6272a4" }}
        customStyle={{
          margin: 0,
          padding: "1rem",
          backgroundColor: "rgba(40, 42, 54, 0.5)",
          borderRadius: "0.375rem",
          border: "1px solid #6272a4",
        }}
        codeTagProps={{
          style: {
            fontFamily: "var(--font-mono)",
            fontSize: "0.875rem",
            lineHeight: "1.5",
          },
        }}
        className={className}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
