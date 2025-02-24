import Header from "./components/Header/Header.tsx";
import Experience from "./components/Experience";
import Skills from "./components/Skills/Skills.tsx";
import Contact from "./components/Contact";
import Hackathons from "./components/Hackathons/Hackathons.tsx";
import Education from "./components/Education/Education.tsx";
import "./App.css";

import {
    userData,
    experienceData,
    skillsData,
    hackathonsData,
    educationData,
} from "./data";

export default function App() {
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