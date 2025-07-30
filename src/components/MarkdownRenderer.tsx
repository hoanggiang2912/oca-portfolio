// components/MarkdownRenderer.tsx
"use client";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "./CodeBlock";

export function MarkdownRenderer({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, inline, className, children, ...props }) => (
          <h1 className="text-5xl text-primary font-bold" {...props}></h1>
        ),
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");

          if (inline) {
            return (
              <code className="bg-drac-current/20 px-1.5 py-0.5 rounded text-drac-base">
                {children}
              </code>
            );
          }

          return (
            <CodeBlock
              language={match?.[1] || "typescript"}
              className={className}
            >
              {String(children).replace(/\n$/, "")}
            </CodeBlock>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
