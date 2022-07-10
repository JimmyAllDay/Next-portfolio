import Link from "next/link";

import { Icon } from "@iconify/react";

export default function TechSkills() {
  return (
    <div className="mt-5">
      <div
        className="bg-accent inline-flex pl-5 pr-2 pt-[0.1em] pb-[0.25em]"
        id="techSkills"
      >
        <h3 className="text-4xl text-light">Tech Skills</h3>
      </div>

      <div className="px-5 text-dark">
        <p className="mb-2 mt-2">I use the following technologies:</p>
        <div className="flex flex-wrap p-1 justify-center space-x-4 place-content-around space-y-2">
          <Icon
            icon="mdi:language-html5"
            style={{ color: "#e34f26" }}
            className="text-[3.5rem] mt-1"
          />
          <Icon
            icon="ion:logo-css3"
            style={{ color: "#2965f1" }}
            className="text-5xl"
          />
          <Icon
            icon="fontisto:sass"
            style={{ color: "#CD6D93" }}
            className="text-4xl"
          />
          <Icon
            icon="akar-icons:bootstrap-fill"
            style={{ color: "#563d7c" }}
            className="text-5xl"
          />
          <Icon icon="logos:tailwindcss-icon" className="text-4xl" />
          <Icon
            icon="ion:logo-javascript"
            style={{ color: "#f0db4f" }}
            className="text-5xl"
          />
          <Icon
            icon="akar-icons:node-fill"
            style={{ color: "#3c873a" }}
            className="text-5xl"
          />
          <Icon
            icon="akar-icons:react-fill"
            style={{ color: "#61DBFB" }}
            className="text-5xl"
          />
          <Icon icon="logos:nextjs" className="text-5xl" />
          <Icon
            icon="vscode-icons:file-type-jest"
            className="border"
            className="text-5xl"
          />
        </div>
        <p className="mt-2 flex">
          My portfolio, demonstrating my use of these skills, is&nbsp;
          <Link href="https://jimmyallday.github.io/react-portfolio/">
            <span className="text-accent hover:cursor-pointer">here</span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
