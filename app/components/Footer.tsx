import { SocialIcon } from "react-social-icons";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 mt-8 md:mt-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between md:px-16 px-6 py-8 text-zinc-400">
            <div className="flex items-center gap-x-4 md:order-2">
             <SocialIcon
                url="https://github.com/Michle99/"
                target="_blank"
                rel="noreferrer noopener"
                style={{ height: 30, width: 30 }}
             />
             <SocialIcon
                url="https://www.linkedin.com/in/m0ry"
                target="_blank"
                rel="noreferrer noopener"
                style={{ height: 30, width: 30 }}
             />
             <SocialIcon
                url="https://twitter.com/Yehana01"
                target="_blank"
                rel="noreferrer noopener"
                style={{ height: 30, width: 30 }}
             />
            </div>

            <div className="flex flex-col items-center md:flex-row md:order-1 md:mt-0 mt-4 md:w-auto w-full">
              <small className="text-center duration-200 font-mono">
               All rights reserved &copy; {new Date().getFullYear()}
             </small>
            </div>
          </div>
        </footer>
    );
  }