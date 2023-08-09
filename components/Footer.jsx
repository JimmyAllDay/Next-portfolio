import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" bg-dark p-5 h-[250px] flex flex-col-reverse">
      <div className="sm:text-left">
        <Link href="mailto:jameswhmarshall@gmail.com">
          <p className="text-accent hover:underline hover:cursor-pointer">
            jameswhmarshall@gmail.com
          </p>
        </Link>
        <Link href="https://github.com/JimmyAllDay">
          <p className="text-accent hover:underline hover:cursor-pointer">
            github.com/JimmyAllDay
          </p>
        </Link>
      </div>
    </footer>
  );
}
