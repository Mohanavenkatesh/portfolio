import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Mohan. All rights reserved.
        </p>

        <div className="flex gap-6">
          <Link href="https://github.com/mohan-codebase" target="_blank" className="text-gray-400 transition-colors hover:text-white">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/mohanavenkatesh/" target="_blank" className="text-gray-400 transition-colors hover:text-white">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-gray-400 transition-colors hover:text-white">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;