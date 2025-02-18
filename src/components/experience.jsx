import { useState, useRef } from "react";
import Card from "./card.jsx";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const info = [
  {
    company: "Factory Bucket",
    hyperlink: "https://www.factorybucket.com/",
    imageSrc: `/Factory_bucket.svg`,
    imageClass: "h-8 md:h-12 lg:h-16 -mt-2",
    position: "Senior Software Engineer",
    duration: "Jan 2024 - Present",
    glintColor: "[--streak-color:42,172,226]",
    points: [
      "Built and maintained different front end applications for testing out and integrating various generative AI capabilities such as RAG, Semantic Kernel, Work instructions, Vectors, etc during the prototype phase for our ERP.",
      "Built an architecture for displaying custom inline widgets from LLM’s markdown response stream such as showing calendar events, map location, timelines, charts , etc from AI’s response.",
      "Developed an excel like interface in client which serves as the knowledge base to the underlying language model. This helps our users to establish business data and their relations to AI.",
    ],
  },
  {
    company: "Certa",
    hyperlink: "https://www.getcerta.com/",
    imageSrc: `/Certa.svg`,
    position: "Senior Frontend Engineer",
    duration: "Mar 2023 - Sep 2023",
    glintColor: "[--streak-color:30,94,255]",
    points: [
      "Lead the development of a robust data visualization tool that allowed customers to create dynamic visualizations for various business metrics.",
      "Undertook a massive codebase migration from Webpack to Vite. This reduced build times in the pipeline (thereby saving costs) and significantly improved DX by faster HMRs and reduced dev server start times.",
      "Actively contributed in implementing a highly customisable charting suite wrapped around D3.js.",
      "Collaborated with a Gen-AI startup to successfully integrate our tool with their solution, thus enabling customers to give prompts and generate visualizations on the fly with zero configuration.",
    ],
  },
  {
    company: "Autonom8",
    hyperlink: "https://autonom8.com/",
    imageSrc: `/A8.svg`,
    position: "Senior Software Engineer",
    duration: "Jun 2020 - Jan 2023",
    glintColor: "[--streak-color:60,97,156]",
    points: [
      "Developed a low code form builder which lets users create dynamic forms using drag and drop. Other features include theming, custom layouts (powered by flex and grid configurations) and script support for implementing advanced flows.",
      "Worked on a WASM script inside web workers to offload form builder’s heavy computation tasks from the main thread.",
      "Developed an end-to-end RBAC system (similar to GCP), providing granular access control for all entities within the platform.",
      "Took various initiatives to benchmark application performance and optimize render cycles across the product",
      "Implemented secured execution of user written callbacks in a sandboxed context in the server.",
      "Developed an alternative solution for Strapi to achieve data independency.",
      "Implemented a fully fledged audit logger which captures user actions as metrics throughout the platform.",
      "Collaborated with other engineers in automating end to end tests in CI/CD pipeline.",
    ],
  },
  {
    company: "Incedo",
    hyperlink: "https://www.incedoinc.com/",
    imageSrc: `/Incedo.svg`,
    position: "Software Engineer",
    duration: "Oct 2019 - Jun 2020",
    glintColor: "[--streak-color:238,73,34]",
    points: [
      "Worked as an interim module lead team taking up responsibilities such as requirement gathering and outlining roadmaps to the client.",
      "Handled all of the enhancements within the module and extended architectural support for other modules during their corresponding design phases.",
      "Prototyped various application MVP's to showcase and onboard new clients.",
      "Onboarded recruits and conducted training sessions on CSS, JS, React. This resulted in a conversion rate of 70% (trainees deployed to client projects).",
      "Collaborated closely with CTO and PM to develop an internal HR recruiting tool.",
    ],
  },
  {
    company: "Infosys",
    hyperlink: "https://www.infosys.com/",
    imageSrc: `/Infosys.svg`,
    position: "Software Engineer",
    duration: "Jun 2017 - Oct 2019",
    glintColor: "[--streak-color:55,129,194]",
    points: [
      "Designed and managed wide variety of client web applications using HTML, CSS, JavaScript and JQuery.",
      "Actively worked in achieving responsiveness for various devices via CSS media queries and flexbox.",
      "Contributed in migrating existing client applications to React framework.",
      "Notable clients include P&G, Coca Cola and Vale.",
    ],
  },
];

export default () => {
  const [infoState, setInfoState] = useState(0);
  const zeroRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const nodeRef =
    infoState === 0
      ? zeroRef
      : infoState === 1
        ? oneRef
        : infoState === 2
          ? twoRef
          : threeRef;

  const { position, duration, points, glintColor, company, hyperlink } =
    info[infoState];

  return (
    <>
      <section id="work" className="py-16 md:py-20 px-6">
        <h2 className="text-5xl font-light text-gray-300 text-center flex flex-col gap-2">
          <span className="text-primary font-bold">Work</span>
          <span>Experiences</span>
        </h2>
        <div className="mx-auto max-w-7xl pt-12">
          <div className="flex flex-col gap-12 justify-between h-full">
            <div className="flex justify-evenly md:2 lg:mt-0">
              {info.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    setInfoState(index);
                  }}
                >
                  <img
                    className={`aspect-auto ${
                      item.imageClass
                    } w-20 md:w-24 lg:w-36 ${
                      infoState === index
                        ? "opacity-100 saturate-100"
                        : "opacity-50 saturate-0 hover:opacity-75 hover:saturate-100"
                    } duration-75 transition-opacity`}
                    src={item.imageSrc}
                  />
                </div>
              ))}
            </div>
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={infoState}
                nodeRef={nodeRef}
                addEndListener={(done) => {
                  nodeRef.current.addEventListener(
                    "transitionend",
                    done,
                    false,
                  );
                }}
                classNames="fade"
              >
                <div ref={nodeRef}>
                  <Card classes={`w-fit ${glintColor} glitter-border`}>
                    <a
                      href={hyperlink}
                      rel="noreferrer noopener"
                      target="_blank"
                      className="group"
                    >
                      <div className="flex flex-col items-center md:flex-row md:justify-start gap-4 md:items-baseline">
                        <div className="flex gap-1 mr-2 items-center font-semibold text-2xl text-[color:rgb(var(--streak-color))]">
                          {company}
                          <span className="transform translate-y-1 group-hover:-translate-y-0 transition-transform">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-arrow-up-right"
                            >
                              <path d="M7 7h10v10" />
                              <path d="M7 17 17 7" />
                            </svg>
                          </span>
                        </div>
                        <h3 className="font-semibold text-xl text-white">
                          {position}
                        </h3>
                        <span className="font-light text-xs text-gray-500">
                          {duration}
                        </span>
                      </div>
                      <ul className="mt-4 ml-4 max-w-[60ch] text-base text-gray-400 list-disc">
                        {points.map((point, index) => {
                          return <li key={index}>{point}</li>;
                        })}
                      </ul>
                    </a>
                  </Card>
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </section>
    </>
  );
};
