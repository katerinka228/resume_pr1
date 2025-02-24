import "./Skills.css";

interface SkillsProps {
    skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
}