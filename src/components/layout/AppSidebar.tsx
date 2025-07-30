"use client";

import { updateUrl } from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import MarkdownIcon from "../icons/MarkdownIcon";
import { useMenu } from "@/contexts/MenuContext";

export function AppSidebar() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") as string;
  const {
    state: { menuItems },
  } = useMenu();

  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <button
        onClick={() => updateUrl(searchParams.toString(), item.name)}
        key={item.title}
        className={`${page == item.url.split("=")[1] ? "nav-link active" : ""} w-full flex items-center px-4 py-1 mb-2 text-base font-medium text-white rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors duration-200`}
      >
        <MarkdownIcon className="w-5 h-5 mr-2 text-drac-blue" />
        {item.title}
      </button>
    ));
  };

  return (
    <aside>
      <h1 className="text-xl font-bold text-center uppercase text-drac-pink p-4">
        🚀 Explorer: Oca Portfolio
      </h1>
      <nav className="px-8">{renderMenuItems()}</nav>
    </aside>
  );
}
