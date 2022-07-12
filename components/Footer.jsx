import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="print-hide bg-dark p-5 py-[100px] flex flex-col">
      <ul className="flex p-5 border-accent mx-auto space-x-6 sm:space-x-[150px] ">
        <li className="">
          <a
            className="text-accent hover:underline hover:cursor-pointer"
            href="https://www.gatsbyjs.com/"
          >
            <Icon icon="ri:gatsby-line" className="text-3xl" />
          </a>
        </li>
        <li className="text-accent hover:underline hover:cursor-pointer flex">
          <a href="https://github.com/JimmyAllDay" className="my-auto">
            <Icon icon="brandico:github" className="text-2xl" />
          </a>
        </li>
        <li className="text-accent">
          <a className="" href="https://twitter.com">
            <Icon
              icon="akar-icons:twitter-fill"
              className="text-3xl hover:border-bottom hover:cursor-pointer"
            />
          </a>
        </li>
      </ul>
      <a
        href="mailto:jameswhmarshall@gmail.com"
        className="text-accent hover:underline hover:cursor-pointer mx-auto text-xl mt-4"
      >
        <h3>jameswhmarshall@gmail.com</h3>
      </a>
    </footer>
  );
}
