"use client";

import Loading from "@/app/loading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMenu } from "@/contexts/MenuContext";
import { updateUrl } from "@/utils/utils";
import { X } from "lucide-react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import React from "react";
import { CommandBlock } from "../CommandBlock";

// Dynamic imports for tab panels
const Home = dynamic(() => import("./Home"), {
  ssr: false,
  loading: () => <Loading></Loading>,
});
const AboutMe = dynamic(() => import("./AboutMe"), {
  ssr: false,
  loading: () => <Loading></Loading>,
});
const Projects = dynamic(() => import("./Projects"), {
  ssr: false,
  loading: () => <Loading></Loading>,
});
const EducationCareer = dynamic(() => import("./EducationCareer"), {
  ssr: false,
  loading: () => <Loading></Loading>,
});
const Contact = dynamic(() => import("./Contact"), {
  ssr: false,
  loading: () => <Loading></Loading>,
});

export default function FileTabs() {
  const {
    state: { menuItems, activeItem },
    dispatch,
  } = useMenu();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  if (!page) {
    updateUrl(searchParams.toString(), activeItem?.name || "index");
  }

  const renderPanel = (panelValue: string) => {
    return (
      <TabsContent
        defaultValue={"index"}
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
          <>Please click to the tab</>
        )}
      </TabsContent>
    );
  };

  // Set initial URL if empty
  React.useEffect(() => {
    if (!page) {
      updateUrl(searchParams.toString(), activeItem?.name || "index");
    }
  }, [page, activeItem, searchParams]);

  // Sync URL changes with active tab
  React.useEffect(() => {
    if (page && activeItem?.name !== page) {
      const newActive = menuItems.find((item) => item.name === page);
      if (newActive) {
        dispatch({ type: "UPDATE_ACTIVE_ITEM", payload: newActive });
      }
    }
  }, [page, menuItems, dispatch, activeItem]);

  return (
    <>
      <CommandBlock />
      <Tabs defaultValue="index" className="">
        <TabsList className="w-full justify-start rounded-none bg-drac-current flex-1 h-14 shadow-lg border-b border-b-drac-comment overflow-x-auto scrollbar-hide gap-6">
          {menuItems.map((item) => (
            <TabsTrigger
              value={item.name}
              key={item.title + item.url}
              className={`px-2 text-base text-white flex items-center rounded-md border border-transparent ${item.name == page ? "tab tab-active" : ""}`}
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
