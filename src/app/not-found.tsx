"use client";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] flex flex-col items-center justify-center font-mono">
      <div className="w-full max-w-lg rounded-lg shadow-lg border border-[#333] bg-[#252526]">
        <div className="p-8 flex flex-col items-center">
          <svg width="64" height="64" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="8" fill="#007ACC" />
            <path
              d="M13 34L35 14"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M35 34L13 14"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <h1 className="mt-6 text-3xl text-[#d7ba7d] font-bold">
            404 - File Not Found
          </h1>
          <p className="mt-2 text-[#cccccc] text-center">
            The file or page you are looking for does not exist.
            <br />
            Please check the path or return to the{" "}
            <a href="/" className="text-[#569cd6] underline">
              home page
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
