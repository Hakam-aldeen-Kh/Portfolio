import "./App.css";
import ExamGate from "./assets/Exam Gate.png";
import Ecommerce from "./assets/E-commerce.png";
import Kasper from "./assets/Kaspe.png";
import Bondi from "./assets/Bondi.png";
import Elzero from "./assets/Elzero.png";
import Leon from "./assets/Leon.png";
import Redux from "./assets/redux-svgrepo-com.svg";
import myPhoto from "./assets/myPhoto.png";
import ArrowDown from "./assets/arrow-down.svg";
import myCv from "./PDFs/HakamAldeenAlkadraaResume.pdf";
import { useEffect, useState } from "react";
import { EmailForm } from "./EmailForm.jsx";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="max-w-4xl m-auto relative">
      <header
        className={`${
          scrolling ? "border-b border-gray-900" : ""
        }  fixed left-0 right-0 top-[-14px] sm:top-[0px] z-20`}
        id="home"
      >
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Hakam aldeen Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#connectMe"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Connect Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">
                Hello, I'm Hakam Aldeen Alkhadraa
              </h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">
                  Frontend Developer
                </h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                  I'm a frontend developer passionate about creating intuitive
                  and visually appealing web experiences.
                  <br /> With a keen eye for detail and a commitment to
                  excellence,
                  <br /> I specialize in turning design concepts into responsive
                  and interactive websites.
                </p>
                <a
                  href={myCv}
                  download="HakamAldeenAlkadraaResume.pdf"
                  target="_blank"
                >
                  <button className=" px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Download resume
                  </button>
                </a>
              </div>
              <div className="text-white mt-10 ms-auto">
                <a
                  href="https://www.linkedin.com/in/hakam-aldeen-kh/"
                  className="icon-linkedin text-3xl"
                >
                  <i className="fa-brands fa-linkedin me-5"></i>
                </a>
                <a
                  href="https://github.com/Hakam-aldeen-Kh"
                  className="icon-github text-3xl"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img
                  src={myPhoto}
                  className="relative z-10 w-[280px] m-auto sm:w-[600px] rounded-full"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={ExamGate} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">Exam Gate</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive Web Application Offers a Completed Automated Exam
                  Work Experience with backend developer team
                </p>
                <div className="flex mt-5 gap-2">
                  <a
                    href="https://examgateperev.gensolv.no/"
                    target="_blank"
                    className="block w-full"
                  >
                    <button className="w-full text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Live preview
                    </button>
                  </a>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Ecommerce} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Basic E-commerce
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive React Js Store with APIs
                </p>
                <div className="flex justify-between gap-2 mt-12 items-end">
                  <a
                    href="https://basic-ecommerce.surge.sh/"
                    className="w-1/2"
                    target="_blank"
                  >
                    <button className="w-full text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Live preview
                    </button>
                  </a>
                  <a
                    href="https://github.com/Hakam-aldeen-Kh/Basic-Ecommerce-React"
                    className="w-1/2"
                    target="_blank"
                  >
                    <button className="w-full text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Elzero} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">Elzero Project</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for landing page with animation
                </p>
                <div className="flex justify-between gap-2 mt-12 items-end">
                  <a
                    href="https://hakam-aldeen-kh.github.io/Templet-Three/"
                    className="w-1/2"
                    target="_blank"
                  >
                    <button className="w-full text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Live preview
                    </button>
                  </a>
                  <a
                    href="https://github.com/Hakam-aldeen-Kh/Templet-Three"
                    className="w-1/2"
                    target="_blank"
                  >
                    <button className="w-full text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button>
                  </a>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Bondi} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">Bondi Project</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS Bootstrap layout for landing page and
                  filter items
                </p>
                <div className="flex justify-between gap-2 mt-10 items-end">
                  <a
                    href="https://hakam-aldeen-kh.github.io/Bondi/"
                    className="w-1/2"
                    target="_blank"
                  >
                    <button className="w-full text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Live preview
                    </button>
                  </a>
                  <a
                    href="https://github.com/Hakam-aldeen-Kh/Bondi"
                    className="w-1/2"
                    target="_blank"
                  >
                    <button className="w-full text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Kasper} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">Kasper Project</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for landing page
                </p>
                <div className="flex justify-between gap-2 mt-12 items-end">
                  <a
                    href="https://elzerowebschool.github.io/HTML_And_CSS_Template_Two/"
                    className="w-1/2"
                    target="_blank"
                  >
                    <button className="w-full text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Live preview
                    </button>
                  </a>
                  <a
                    href="https://github.com/Hakam-aldeen-Kh/Kasper"
                    className="w-1/2"
                    target="_blank"
                  >
                    <button className="w-full text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button>
                  </a>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Leon} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">Leon Project</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for landing page
                </p>
                <div className="flex justify-between gap-2 mt-10 items-end">
                  <a
                    href="https://hakam-aldeen-kh.github.io/Leon/"
                    className="w-1/2"
                    target="_blank"
                  >
                    <button className="w-full text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Live preview
                    </button>
                  </a>
                  <a
                    href="https://github.com/Hakam-aldeen-Kh/Leon"
                    className="w-1/2"
                    target="_blank"
                  >
                    <button className="w-full text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    <i className="fa-brands fa-html5 me-3 text-[#e34f26] text-2xl"></i>
                    HTML
                  </h2>
                  <p className="text-gray-500">90%</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    <i className="fa-brands fa-css3 me-3 text-[#2965f1] text-2xl"></i>
                    CSS
                  </h2>
                  <p className="text-gray-500">90%</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    <i className="fa-brands fa-bootstrap me-3 text-[#702cf6] text-2xl"></i>
                    Bootstrap 5
                  </h2>
                  <p className="text-gray-500">70%</p>
                </div>
                <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    <i className="fa-brands fa-js me-3 text-[#f7df1e] text-2xl"></i>
                    JavaScript
                  </h2>
                  <p className="text-gray-500">85%</p>
                </div>
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    <i className="fa-brands fa-react me-3 text-[#00d8ff] text-2xl"></i>
                    React Js
                  </h2>
                  <p className="text-gray-500">75%</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    <img src={Redux} className="w-7 inline-block pb-2 me-3 " />
                    Redux, Redux Toolkit
                  </h2>
                  <p className="text-gray-500">70%</p>
                </div>
                <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    <i className="fa-brands fa-git-alt me-3 text-[#fc6d26] text-2xl"></i>
                    Git
                  </h2>
                  <p className="text-gray-500">75%</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  GitHub
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Responsive Design
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  RestFull APIs
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick learning
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  B1 english
                </p>
              </div>
              <div>
                <p className=" font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Graduated KTC (Krasnodar Technical College) and for about two
                  years worked with high voltage (35, 110kV) substations as the
                  specialty electrician of emergency mobile crew. Later
                  qualified as a Crossfit trainer.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Underwent a digital marketing course and started to work as a
                  PPC and project manager in a local web studio. After 3 months
                  started my own freelance practice.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Became more interested in IT and decided to try programming.
                  Underwent Java course and made a project.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Worked out in which field I want to build a developer's career
                  and started to learn Frontend Development.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/*email form*/}
        <EmailForm />
        {/*email form*/}
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Hakam Aldeen Alkadraa</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/hakam-aldeen-kh/"
                  className="icon-linkedin text-3xl"
                >
                  <i className="fa-brands fa-linkedin me-5"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Hakam-aldeen-Kh"
                  className="icon-github text-3xl"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {scrolling && (
        <button
          className="fixed block right-8 bottom-0 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
}

export default App;
// * mail service_388s43d
