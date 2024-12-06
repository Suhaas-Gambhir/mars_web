// pages/docs.tsx
import React from "react";
import Link from "next/link";

const DocsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black p-8 text-white">
      <nav className="mb-8 animate-fade-in z-20">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link href="/" className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 text-center">Documentation</h1>

      {/* Static Documentation Content */}
      <div className="prose max-w-none text-white">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-5">
          <li>Easy to use</li>
          <li>Clean and responsive design</li>
          <li>Supports markdown rendering</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Usage</h2>
        <p className="mb-4">
          To use this project, follow the installation instructions below:
        </p>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>npm install react-markdown remark remark-gfm</code>
        </pre>
        <p className="mt-4">For more details, visit the official documentation or GitHub repository.</p>
      </div>

      {/* Footer Section */}
      <div className="my-16 text-center animate-fade-in z-10">
        <h2 className="text-sm text-zinc-500">Thank you for visiting the docs!</h2>
      </div>
    </div>
  );
};

export default DocsPage;
