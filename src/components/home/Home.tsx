"use client";

// src/app/page.tsx
import { useMenu } from "@/contexts/MenuContext";
import { updateUrl } from "@/utils/utils";
import { ArrowRightIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

export default function Home() {
  const searchParams = useSearchParams();

  const {
    dispatch,
    state: { menuItems },
  } = useMenu();

  const handleAboutClick = () => {
    const aboutMeItem = menuItems.find((item) => item.name === "about-me");
    if (aboutMeItem) {
      dispatch({ type: "UPDATE_ACTIVE_ITEM", payload: aboutMeItem });
      updateUrl(searchParams.toString(), "about-me");
    }
  };

  return (
    <div className="h-full overflow-auto p-6 font-mono text-drac-base">
      <div className="prose prose-invert max-w-none space-y-4">
        <h1 className="h1"># 👋 Hello World</h1>
        <p className="text-base">
          I&apos;m <span className="text-drac-cyan"> Oca</span> - a passionate
          developer aim to create beautiful and functional web applications.
        </p>
        <p className="text-base">
          I came up with the idea of creating a VS-Code theme website from
          nowhere. Haha, did you really expect me to remember that? LOL
        </p>
        <div className="flex items-center">
          <Button className="font-bold" onClick={handleAboutClick}>
            About me <ArrowRightIcon />
          </Button>
          <Button
            variant={"outline"}
            className="hover:bg-muted hover:text-white ml-3"
          >
            Contact me now
          </Button>
        </div>
      </div>
    </div>
  );
}
