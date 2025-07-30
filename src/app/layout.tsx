import { AppSidebar } from "@/components/layout/AppSidebar";
import Header from "@/components/layout/Header";
import ResizeableLayout from "@/components/layout/ResizeableLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-background text-foreground min-h-screen font-mono overflow-hidden">
        <Header />
        <ResizeableLayout
          leftChildren={<AppSidebar />}
          rightChildren={children}
        />
      </body>
    </html>
  );
}
