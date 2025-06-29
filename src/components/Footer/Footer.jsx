import React from "react";
import { ArrowRight } from "lucide-react";
import { AtSign } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-4">
      <div className="max-w-6xl mx-auto flex items-center gap-x-2 px-4 text-[#008236] cursor-pointer">
        <AtSign size={18} />
        <a
          href="https://x.com/soyebislam_1"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
        >
          soyebislam_1
        </a>
        <ArrowRight size={18} />
      </div>
    </footer>
  );
};

export default Footer;
