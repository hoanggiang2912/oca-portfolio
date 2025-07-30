import "@/app/_styles/globals.css";
import { AppSidebar } from "@/components/layout/AppSidebar";
import Header from "@/components/layout/Header";
import ResizeableLayout from "@/components/layout/ResizeableLayout";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-background text-foreground min-h-screen font-mono overflow-hidden">
        <Suspense fallback={<Loading />}>
          <Header />
          <ResizeableLayout
            leftChildren={<AppSidebar />}
            rightChildren={children}
          />
        </Suspense>
      </body>
    </html>
  );
}
