import React from "react";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import git from "../../assets/git.png";
import wp from "../../assets/wp.png";
const Footer = () => {
  return (
    <footer>
      <div className="px-4 py-2 bg-blue-950 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white  sm:text-center">
          © 2023 <a href="/">StockInsights</a>. All Rights Reserved.
        </span>
        {/* Email input */}

        <div className="flex gap-3 items-center">
          <span className="text-white">Enter Email</span>
          <span>
            <input
              type="email"
              id="form5Example25"
              className="block w-full px-2 py-1 rounded border border-gray-300  "
              placeholder="Enter your email address"
            />
          </span>
          <span>
            <button
              type="submit"
              className="inline-block px-2 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600 "
            >
              Subscribe
            </button>
          </span>
        </div>

        <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
          <div className="flex items-center justify-center">
            <a href="https://github.com/PriyankaVastarpara" target="_blank">
              <img src={fb} alt="fb" className="w-6 h-6 mx-2 rounded-full" />
            </a>
            <a href="https://github.com/PriyankaVastarpara" target="_blank">
              <img src={wp} alt="wp" className="w-6 h-6 mx-2 rounded-full" />
            </a>
            <a href="https://github.com/PriyankaVastarpara" target="_blank">
              <img src={ig} alt="ig" className="w-6 h-6 mx-2 rounded-full" />
            </a>
            <a href="https://github.com/PriyankaVastarpara" target="_blank">
              <img src={git} alt="git" className="w-6 h-6 mx-2 rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
