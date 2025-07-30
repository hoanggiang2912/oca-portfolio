"use client";
import { useEffect, useState, ReactNode } from "react";

export function TerminalWindow({
  command,
  children,
  className = "",
}: {
  command: string;
  children?: ReactNode;
  className?: string;
}) {
  const [typedCommand, setTypedCommand] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < command.length) {
        setTypedCommand(command.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        setShowCursor(false);
        // Show content after typing is complete
        setTimeout(() => setShowContent(true), 300);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [command]);

  return (
    <div
      className={`bg-drac-black/50 p-4 rounded border border-drac-current ${className}`}
    >
      <div className="flex items-center text-drac-green mb-2">
        <span className="mr-2">$</span>
        <span className="font-mono">
          {typedCommand}
          {showCursor && <span className="animate-blink">▋</span>}
        </span>
      </div>
      {/* Render children after typing is complete */}
      {showContent && (
        <div className="mt-4">
          {children || (
            <p className="text-drac-yellow">Command executed successfully!</p>
          )}
        </div>
      )}
    </div>
  );
}
