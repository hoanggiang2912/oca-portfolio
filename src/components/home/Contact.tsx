import { TerminalWindow } from "../TerminalWindow";

export default function Contact() {
  return (
    <div className="h-full overflow-auto p-6 font-mono text-drac-base">
      {/* Content area */}
      <h1 className="h1"># ☎️ Contact</h1>
      <div className="py-6">
        <TerminalWindow
          command="npm run projects --page=contact"
          result="Not ready for now! It will be available soon 😅"
          className="mb-8"
        ></TerminalWindow>
      </div>
    </div>
  );
}
