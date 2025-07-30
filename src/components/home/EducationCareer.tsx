import { TerminalWindow } from "../TerminalWindow";

export default function EducationCareer() {
  return (
    <div className="h-full overflow-auto p-6 font-mono text-drac-base">
      {/* Content area */}
      <h1 className="h1"># 👜 Education and Career</h1>
      <div className="py-6">
        <TerminalWindow
          command="npm run projects --page=education-career"
          result="Not ready for now! It will be available soon 😅"
          className="mb-8"
        ></TerminalWindow>
      </div>
    </div>
  );
}
