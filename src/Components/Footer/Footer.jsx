import React from "react";

const Footer = () => {
  return (
    <footer className="pb-8">
      <div className="container">
        <div className="footer-box flex justify-between">
          <div className="footer-box__start">
            <a
              className="text-2xl leading-9 tracking-tighter text-[#4433FF] font-medium"
              href="./index.html"
            >
              Josh Comeau
            </a>
            <p className="font-semibold text-sm tracking-normal mt-2">
              Thanks for reading!
            </p>
            <p className="mt-20 text-xs leading-6">
              © 2020-present Joshua Comeau. All Rights Reserved.
            </p>
          </div>
          <div className="footer-box__end flex justify-between w-full max-w-[400px]">
            <div>
              <p className="text-[#5A6072] text-sm leading-6">Tutorials</p>
              <div className="flex justify-between flex-wrap w-full max-w-[250px]">
                <div className="mt-2">
                  <div className="mb-2">
                    <a href="https://www.joshwcomeau.com/tutorials/react/">
                      React
                    </a>
                  </div>
                  <div className="mb-2">
                    <a href="https://www.joshwcomeau.com/tutorials/css/">Css</a>
                  </div>
                  <div className="mb-2">
                    <a href="https://www.joshwcomeau.com/tutorials/gatsby/">
                      Gatsby
                    </a>
                  </div>
                  <div className="mb-2">
                    <a href="https://www.joshwcomeau.com/tutorials/performance/">
                      Performance
                    </a>
                  </div>
                </div>

                <div className="pl-5 mt-2">
                  <div className="mb-2">
                    <a href="https://www.joshwcomeau.com/tutorials/animation/">
                      Animation
                    </a>
                  </div>
                  <div className="mb-2">
                    <a href="https://www.joshwcomeau.com/tutorials/career/">
                      Career
                    </a>
                  </div>
                  <div className="mb-2">
                    <a href="https://www.joshwcomeau.com/tutorials/nextjs/">
                      Nextjs
                    </a>
                  </div>
                  <div className="mb-2">
                    <a href="https://www.joshwcomeau.com/tutorials/javascript/">
                      Javascript
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#5A6072] text-sm leading-6">Links</p>
              <ul className="mt-2">
                <li className="mb-2">
                  <a href="https://twitter.com/joshwcomeau">Twitter</a>
                </li>
                <li className="mb-2">
                  <a href="support@joshwcomeau.com">Email</a>
                </li>
                <li className="mb-2">
                  <a href="https://www.joshwcomeau.com/terms/">Terms of Use</a>
                </li>
                <li className="mb-2">
                  <a href="https://www.joshwcomeau.com/privacy/">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
