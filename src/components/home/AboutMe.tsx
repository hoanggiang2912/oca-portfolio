"use client";

import { CodeBlock } from "../CodeBlock";

const myStory = [
  () => (
    <>
      Started coding at 18 years old, initially focused on{" "}
      <span className="text-drac-cyan">Web Development</span>
    </>
  ),
  () => (
    <>
      Trying out various{" "}
      <span className="text-drac-pink">Programming Languages</span> and{" "}
      <span className="text-drac-pink">Frameworks</span>
    </>
  ),
  () => (
    <>
      Developed a passion for creating{" "}
      <span className="bg-drac-yellow text-muted">
        User-friendly Interfaces
      </span>{" "}
      and <span className="bg-drac-yellow text-muted">Experiences</span>
    </>
  ),
  () => (
    <>
      Currently dive deep into{" "}
      <span className="text-drac-cyan">TypeScript</span> and{" "}
      <span className="text-drac-cyan">ReactJS</span>.
    </>
  ),
  () => (
    <>
      Become a{" "}
      <span className="bg-drac-pink text-muted">Programming Teacher</span>,
      sharing knowledge with others.
    </>
  ),
];

const coreBeliefs = [
  () => (
    <>
      <span className="text-drac-cyan">Code</span> should be{" "}
      <span className="bg-drac-yellow text-muted">Readable</span> and{" "}
      <span className="bg-drac-yellow text-muted">Maintainable</span>.
    </>
  ),
  () => (
    <>
      Always strive for{" "}
      <span className="text-drac-cyan">Continuous Learning</span> and{" "}
      <span className="text-drac-cyan">Improvement</span>.
    </>
  ),
  () => (
    <>
      Embrace <span className="text-drac-pink">Collaboration</span> and{" "}
      <span className="text-drac-pink">Community</span> in software development.
    </>
  ),
];

export default function AboutMe() {
  return (
    <div className="h-full overflow-auto p-6 font-mono text-drac-base">
      <div className="prose prose-invert max-w-none py-6 space-y-12">
        <div className="space-y-4">
          <h1 className="h1"># 🧑‍💻 About Me</h1>

          {/* Fun fact toggle */}
          <CodeBlock language="bash" showLineNumbers>
            {`const oca = {
            pronouns: "he/him",
            location: "Ho Chi Minh City",
            personality: ["Curious", "Detail-Oriented", "Coffee-Addicted"],
            hobbies: [
              "Breaking then fixing code",
              "Football + Badminton", 
              "Mechanical Keyboards"
            ]
          };`}
          </CodeBlock>
        </div>

        <div className="space-y-4">
          <h2 className="h2 mt-8">## 📘 My Story</h2>
          <ul className="ul">
            {myStory.map((item, index) => (
              <li key={index} className="li">
                {item()}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="h2">## 📜 Core Beliefs</h2>
          <ul className="ul">
            {coreBeliefs.map((item, index) => (
              <li key={index} className="li">
                {item()}
              </li>
            ))}
          </ul>
        </div>

        {/* Fun fact toggle */}
        <CodeBlock language="bash" showLineNumbers>
          {`$ curl -X GET https://oca.dev/fun-fact
> "I once fixed a production bug while skydiving 🪂"`}
        </CodeBlock>
      </div>
    </div>
  );
}
