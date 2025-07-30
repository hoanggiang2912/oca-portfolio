"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMenu } from "@/contexts/MenuContext";
import { updateUrl } from "@/utils/utils";
import { X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { CommandBlock } from "../CommandBlock";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import EducationCareer from "./EducationCareer";
import Contact from "./Contact";

export default function FileTabs() {
  const {
    state: { menuItems, activeItem },
  } = useMenu();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  if (!page) {
    updateUrl(searchParams.toString(), "index");
  }

  const renderPanel = (panelValue: string) => {
    return (
      <TabsContent
        value={panelValue}
        className=" w-full overflow-y-auto h-[calc(100vh-100px)]"
      >
        {panelValue === "index" ? (
          <Home />
        ) : panelValue === "about-me" ? (
          <AboutMe />
        ) : panelValue === "projects" ? (
          <Projects />
        ) : panelValue === "education-career" ? (
          <EducationCareer />
        ) : panelValue === "contact" ? (
          <Contact />
        ) : (
          <></>
        )}
      </TabsContent>
    );
  };

  return (
    <>
      <CommandBlock />
      <Tabs defaultValue="index" className="">
        <TabsList
          // style={{ backgroundColor: "transparent !important" }}
          className="w-full justify-start rounded-none bg-drac-current flex-1 h-14 shadow-lg border-b border-b-drac-comment overflow-x-auto scrollbar-hide gap-6"
        >
          {menuItems.map((item) => (
            <TabsTrigger
              value={item.name}
              key={item.title + item.url}
              className={`px-2 text-base flex items-center rounded-full border border-transparent ${item.name == page ? "tab tab-active" : ""}`}
              onClick={() => updateUrl(searchParams.toString(), item.name)}
            >
              {item.icon}
              {item.title}
              <div className="p-[2px] rounded-md hover:bg-white/10 transition ml-1">
                <X className="bg-transparent w-4 h-4" />
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        {renderPanel(activeItem?.name as string)}
      </Tabs>
    </>
  );
}
