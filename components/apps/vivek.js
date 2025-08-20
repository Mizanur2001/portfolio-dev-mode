import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutVivek extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about Mizanur" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Mizanur's education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Mizanur's skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Mizanur's projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Mizanur's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutVivek;

export const displayAboutVivek = () => {
    return <AboutVivek />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full rounded-full" src="./images/logos/mizanur_img.jpg" alt="Mizanur Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>My name is <span className="font-bold">Mizanur Rahaman</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Full Stack Developer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className="list-pc"> I'm a <span className="font-medium">Master's student</span> pursuing Computer Science and Engineering. I completed a 2-year 2-month internship at <u className="cursor-pointer"> <a href="https://martiancorp.in" target="_blank" rel="noopener noreferrer">Martian Corporation</a> </u>, and I'm now seeking full-time Full Stack Engineer roles! (Feel free to reach out at <a className="text-underline" href="mailto:dev@mizanur.in"><u>dev@mizanur.in</u> </a> 😊) </li>
                <li className=" mt-3 list-building"> I enjoy building awesome softwares that solve practical problems.</li>
                <li className="mt-3 list-time"> When I'm not coding my next project, I enjoy watching Netflix, catching up with friends, or watching <u className="cursor-pointer"><a href="https://www.youtube.com/@CodeWithHarry" target="_blank" rel="noreferrer"> Code with Harry's videos</a></u>.</li>
                <li className=" mt-3 list-star"> I am also interested in the Internet of Things (IoT).</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className="w-10/12 mt-4 ml-4 px-0 md:px-1 space-y-6">
                {/* Jadavpur University */}
                <li className="list-disc">
                    <div className="text-xl md:text-2xl font-bold text-white">Jadavpur University</div>
                    <div className="text-sm text-gray-400 mt-1">2024 – 2026</div>

                    <div className="mt-2">
                        <div className="text-base md:text-lg text-gray-200">Computer Science & Engineering (IoT)</div>
                        <div className="text-sm md:text-base font-semibold text-gray-300">Master of Engineering</div>
                    </div>

                    <div className="mt-2 inline-block bg-gray-800 text-gray-100 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                        CGPA: --
                    </div>
                </li>

                {/* Aliah University */}
                <li className="list-disc">
                    <div className="text-xl md:text-2xl font-bold text-white">Aliah University</div>
                    <div className="text-sm text-gray-400 mt-1">2020 – 2024</div>

                    <div className="mt-2">
                        <div className="text-base md:text-lg text-gray-200">Computer Science & Engineering</div>
                        <div className="text-sm md:text-base font-semibold text-gray-300">Bachelor of Technology</div>
                    </div>

                    <div className="mt-2 inline-block bg-gray-800 text-gray-100 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                        CGPA: 8.93 / 10
                    </div>
                </li>

                {/* Class 12 */}
                <li className="list-disc">
                    <div className="text-xl md:text-2xl font-bold text-white">Class 12<sup>th</sup></div>
                    <div className="text-sm text-gray-400 mt-1">2018 – 2020</div>

                    <div className="mt-2">
                        <div className="text-base md:text-lg text-gray-200">Maths, Physics, Chemistry, Computer Science</div>
                    </div>

                    <div className="mt-2 inline-block bg-gray-800 text-gray-100 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                        Percentile Rank: 84.8%
                    </div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">full-stack development, Node.js & React!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="c++" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="python" />
                        <img className="m-1" src="https://img.shields.io/badge/C-00599C?style=flat&logo=c&logoColor=white" alt="C" />
                        <img className="m-1" src="https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white" alt="php" />
                        <img className="m-1" src="https://img.shields.io/badge/Java-007396?style=flat&logo=openjdk&logoColor=white" alt="java" />
                        <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="HTML" /></a>
                        <img src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat&logo=sass&logoColor=ffffff" alt="SASS" className="m-1" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="Git" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff" alt="next" />
                        <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="react" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="tailwind css" />
                        <img className="m-1" src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white" alt="bootstrap" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="node.js" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white" alt="express.js" />
                        <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white" alt="jquery" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" alt="mongodb" />
                        <img className="m-1" src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="mysql" />
                        <img className="m-1" src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white" alt="postman" />
                        <img className="m-1" src="https://img.shields.io/badge/DigitalOcean-0080FF?style=flat&logo=digitalocean&logoColor=white" alt="digitalocean" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "FeedMore V2.0.0",
            date: "Oct 2024",
            link: "https://github.com/mizanur2001/FeedMore-V2.0.0",
            description: [
                "A restaurant management system with dashboard, analytics, and order tracking.",
            ],
            domains: ["javascript", "react", "node.js", "mongodb", "express.js"],
        },
        {
            name: "Udyogsaarthi",
            date: "Dec 2023",
            link: "https://github.com/Mizanur2001/udyogsaarthi_final",
            description: [
                "Smart India Hackathon project helping disabled persons receive job alerts by scraping government job feeds and displaying them on a portal.",
            ],
            domains: ["node.js", "express.js", "react", "mongodb"],
        },
        {
            name: "Hospital Management System",
            date: "Aug 2024",
            link: "Private",
            description: [
                "A system to manage patients, diagnostics, appointments, and hospitals with QR-code based email notifications.",
            ],
            domains: ["javascript", "express.js", "mongodb", "node.js"],
        },
        {
            name: "Voice Authentication & Emotion Recognition",
            date: "Apr 2025",
            link: "Private",
            description: [
                "Deep learning project to identify speakers and recognize emotions in real-time meetings using Raspberry Pi hardware.",
            ],
            domains: ["python", "deep-learning", "raspberry-pi"],
        },
        {
            name: "Social Network",
            date: "Dec 2022",
            link: "https://sn.mizanur.in/",
            description: [
                "A social networking platform where users can connect, share posts, comment, and interact in real-time.",
            ],
            domains: ["javascript", "react", "node.js", "mongodb", "express.js"]
        },
        {
            name: "FeedMore",
            date: "Oct 2022",
            link: "https://feedmore.in/",
            description: [
                "A restaurant management system with an admin dashboard, analytics, order tracking, and customer management.",
            ],
            domains: ["javascript", "react", "node.js", "express.js", "mongodb", "tailwindcss"]
        },
        {
            name: "Martian_Meet",
            date: "Jan 2023",
            link: "https://meet.martiancorp.in/",
            description: [
                "A video conferencing platform designed to be more efficient and feature-rich than Google Meet, with real-time collaboration and secure communication.",
            ],
            domains: ["javascript", "react", "node.js", "webrtc", "express.js", "mongodb"]
        },
        {
            name: "CaledonKababs",
            date: "Jun 2023",
            link: "https://caledonkababs.com/",
            description: [
                "A complete restaurant management system for Caledon Kababs, including order tracking, inventory management, customer analytics, and admin dashboard.",
            ],
            domains: ["javascript", "react", "node.js", "express.js", "mongodb", "tailwindcss"]
        },
        {
            name: "DMSA",
            date: "Dec 2023",
            link: "Private",
            description: [
                "A dashboard system for handling, monitoring, and managing databases with interactive visualizations and admin tools.",
            ],
            domains: ["javascript", "react", "node.js", "express.js", "mongodb"]
        }
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            <div className="my-4 w-5/6 md:w-3/4 p-4 bg-gray-800 rounded-xl flex items-center shadow-md">
                <img
                    src="./images/logos/mizanur_img.jpg"
                    alt="Profile"
                    className="w-20 h-20 rounded-full border-2 border-white mr-4"
                />
                <div>
                    <h3 className="text-xl font-bold text-white">Mizanur Rahaman</h3>
                    <p className="text-sm text-gray-300">
                        ME @ Jadavpur University | Full-stack Developer
                    </p>
                    <div className="flex space-x-4 mt-2">
                        {/* GitHub */}
                        <a href="https://github.com/mizanur2001" target="_blank" rel="noopener noreferrer">
                            <svg className="w-6 h-6 text-white hover:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.388 7.87 10.92.575.106.785-.25.785-.554 0-.274-.01-1.002-.015-1.966-3.2.696-3.877-1.542-3.877-1.542-.523-1.326-1.278-1.68-1.278-1.68-1.044-.713.08-.698.08-.698 1.155.082 1.762 1.186 1.762 1.186 1.027 1.76 2.694 1.252 3.35.958.104-.743.402-1.252.73-1.54-2.554-.29-5.238-1.278-5.238-5.686 0-1.257.448-2.285 1.183-3.09-.12-.29-.513-1.46.112-3.045 0 0 .965-.31 3.165 1.18.918-.255 1.902-.383 2.88-.388.977.005 1.962.133 2.882.388 2.2-1.49 3.163-1.18 3.163-1.18.626 1.585.233 2.755.114 3.045.737.805 1.182 1.833 1.182 3.09 0 4.418-2.688 5.392-5.25 5.676.413.354.78 1.057.78 2.13 0 1.54-.014 2.78-.014 3.157 0 .308.208.666.79.552C20.21 21.386 23.5 17.086 23.5 12c0-6.352-5.148-11.5-11.5-11.5z" />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/mizanur2001" target="_blank" rel="noopener noreferrer">
                            <svg className="w-6 h-6 text-blue-500 hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.83v2.16h.05c.53-1 1.83-2.16 3.77-2.16 4.03 0 4.78 2.66 4.78 6.1V24h-4v-7.5c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 4v7.6h-4V8z" />
                            </svg>
                        </a>

                        {/* Email */}
                        <a href="mailto:dev@mizanur.in">
                            <svg className="w-6 h-6 text-red-400 hover:text-red-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 13.065l-11.714-7.73h23.428L12 13.065zm0 2.101L0 7.79v12.91h24V7.79L12 15.166z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>


            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        {project.link !== "Private" ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 hover:text-blue-300 flex items-center space-x-1 text-sm"
                                            >
                                                <span>Visit</span>
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H19.5V12M5.25 18.75L19.5 4.5" />
                                                </svg>
                                            </a>
                                        ) : (
                                            <span className="px-2 py-0.5 rounded-full bg-gray-700 text-gray-300 text-xs font-medium">
                                                Private
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                return <span key={index} className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/MizanurRahamanResume(V30.0.0).pdf" title="Mizanur Rahaman resume" frameBorder="0"></iframe>
    )
}