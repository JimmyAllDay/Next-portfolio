import Link from 'next/link';

import { Icon } from '@iconify/react';

export default function TechSkills() {
  return (
    <div className="mt-5 max-w-5xl mx-auto print:max-w-7xl">
      <div
        className="bg-blend-soft-light inline-flex pl-5 pr-2 pt-[0.1em] pb-[0.25em]"
        id="techSkills"
      >
        <h3 className="text-2xl text-accent font-secondary">Tech Skills</h3>
      </div>

      <div className="px-5 text-dark">
        <p className="mb-2 mt-2">I use the following technologies:</p>
        <div className="flex flex-wrap p-1 place-content-start space-y-2">
          <Icon
            icon="mdi:language-html5"
            style={{ color: '#e34f26' }}
            className="mr-3 sm:mr-5 text-[3.5rem] mt-1"
          />
          <Icon
            icon="ion:logo-css3"
            style={{ color: '#2965f1' }}
            className="mr-3 sm:mr-5 text-5xl"
          />
          <Icon
            icon="fontisto:sass"
            style={{ color: '#CD6D93' }}
            className="mr-3 sm:mr-5 text-4xl"
          />
          <Icon
            icon="akar-icons:bootstrap-fill"
            style={{ color: '#563d7c' }}
            className="mr-3 sm:mr-5 text-5xl"
          />
          <Icon
            icon="logos:tailwindcss-icon"
            className="mr-3 sm:mr-5 text-4xl"
          />
          <Icon
            icon="ion:logo-javascript"
            style={{ color: '#f0db4f' }}
            className="mr-3 sm:mr-5 text-5xl"
          />
          <Icon
            icon="akar-icons:node-fill"
            style={{ color: '#3c873a' }}
            className="mr-3 sm:mr-5 text-5xl"
          />
          <Icon
            icon="akar-icons:react-fill"
            style={{ color: '#61DBFB' }}
            className="mr-3 sm:mr-5 text-5xl"
          />
          <Icon icon="cib:next-js" className="mr-3 sm:mr-5 text-5xl" />
          <Icon
            icon="vscode-icons:file-type-jest"
            className="mr-3 sm:mr-5 text-5xl"
          />
        </div>
        <p className="mt-2">
          My portfolio, demonstrating my use of these skills, is&nbsp;
          <Link href="https://jamesdev.com.au">
            <span className=" text-accent hover:cursor-pointer">
              <a
                href="https://jamesdev.com.au"
                className="print:inline-block disabled"
              >
                here
              </a>
            </span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
