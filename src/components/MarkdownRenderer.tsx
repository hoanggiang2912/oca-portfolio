// components/MarkdownRenderer.tsx
"use client";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "./CodeBlock";

export function MarkdownRenderer({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ ...props }) => (
          <h1 className="text-5xl text-primary font-bold" {...props} />
        ),
        code({ className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");

          if (match) {
            return (
              <CodeBlock language={match[1]} className={className}>
                {String(children).replace(/\n$/, "")}
              </CodeBlock>
            );
          }

          return (
            <code
              className="bg-drac-current/20 px-1.5 py-0.5 rounded text-drac-base"
              {...props}
            >
              {children}
            </code>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
