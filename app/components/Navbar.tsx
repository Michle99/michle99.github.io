import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/Mich_0ry.png";
import { ThemeToggle } from "../libs/theme_toggle";

export default function Navbar() {

  return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-900 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="My Logo" width={50} height={50} />
        </Link>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row items-center md:gap-x-8">
            <li>
              <Link
                href="/about"
                className="hover:text-purple-400 duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-purple-400 duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/jobs"
                className="hover:text-purple-400 duration-300"
              >
                Experience
              </Link>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}