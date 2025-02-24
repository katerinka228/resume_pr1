
import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Hackathons from "./components/Hackathons";
import Education from "./components/Education";
import "./App.css";

export default function App() {
    const userData = {
        name: "Ekaterina Varfolomeeva",
        role: "Junior Frontend Developer",
        email: "varfolomeeva.katka@yandex.ru",
        phone: "+7 (977) 341-54-84",
        github: "https://github.com/katerinka228",
    };

    const experienceData = [
        {
            title: "Project Calculator",
            description: "A simple calculator with basic functions.",
        },
        {
            title: "Project: Cookies",
            description: "Website-online cookie store",
        },
    ];

    const skillsData = ["HTML, CSS, JavaScript", "React, TypeScript", "Vite", "Git, GitHub"];

    const hackathonsData = [
        {
            title: "Hackathon 'school of IT solutions'",
            role: "Frontend Developer",
            description: "Team member, developed a school navigator website.",
        },
        {
            title: "Hackathon 'Summer School of software engineering'",
            role: "Frontend Developer and Web-designer",
            description: "Event planner website.",
        },
    ];

    const educationData = [
        {
            institution: "MIREA University",
            faculty: "Faculty of Computer science and Engineering",
            period: "2024 - ...",
        },
    ];

    return (
        <div className="app">
            <Header name={userData.name} role={userData.role} />
            <Skills skills={skillsData} />
            <Education education={educationData} />
            <Experience experience={experienceData} />
            <Hackathons hackathons={hackathonsData} />
            <Contact email={userData.email} phone={userData.phone} github={userData.github} />
        </div>
    );
}