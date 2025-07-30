"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { MenuProvider } from "@/contexts/MenuContext";

import React from "react";

export default function ResizeableLayout({
  rightChildren,
  leftChildren,
}: {
  rightChildren?: React.ReactNode;
  leftChildren?: React.ReactNode;
}) {
  const [leftPanelSize, setLeftPanelSize] = React.useState(20);
  const [rightPanelSize, setRightPanelSize] = React.useState(80);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "b") {
        console.log("Toggle left panel size");
        console.log(e.key);

        e.preventDefault();
        if (leftPanelSize === 0) {
          setLeftPanelSize(20);
          setRightPanelSize(80);
        } else {
          setLeftPanelSize(0);
          setRightPanelSize(100);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <MenuProvider>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={leftPanelSize} minSize={0}>
          <div className="flex h-full w-full flex-col relative">
            <div className="flex-1 overflow-y-auto *:!inset-0">
              {leftChildren}
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={rightPanelSize} minSize={20}>
          <div className="flex h-full w-full flex-col">
            <div className="flex-1 overflow-y-auto">{rightChildren}</div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </MenuProvider>
  );
}
