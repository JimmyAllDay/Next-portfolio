import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className=" bg-dark p-5 py-[100px] flex flex-col print:hidden">
      <ul className="flex p-5 mx-auto space-x-6 sm:space-x-[150px] ">
        <li className="">
          <a
            className="text-accent hover:text-accentd flex"
            href="mailto:jameswhmarshall@gmail.com"
          >
            <Icon icon="carbon:email" className="text-4xl my-auto" />
          </a>
        </li>
        <li className="text-accent hover:text-accentd flex">
          <a href="https://github.com/JimmyAllDay" className="my-auto">
            <Icon icon="brandico:github" className="text-2xl" />
          </a>
        </li>
        <li className="text-accent hover:text-accentd flex">
          <a className="my-auto" href="https://twitter.com">
            <Icon icon="akar-icons:twitter-fill" className="text-3xl my-auto" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
