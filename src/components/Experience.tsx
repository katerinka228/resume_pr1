interface ExperienceItem {
    title: string;
    description: string;
}

interface ExperienceProps {
    experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
    return (
        <section className="experience">
            <h2>Experience</h2>
            <ul>
                {experience.map((item, index) => (
                    <li key={index}>
                        <strong>{item.title}</strong> — {item.description}
                    </li>
                ))}
            </ul>
        </section>
    );
}