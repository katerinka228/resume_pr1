interface EducationItem {
    institution: string;
    faculty: string;
    period: string;
}

interface EducationProps {
    education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
    return (
        <section className="education">
            <h2>Education</h2>
            <ul>
                {education.map((item, index) => (
                    <li key={index} className="education-item">
                        <h3>{item.institution}</h3>
                        <p>{item.faculty}</p>
                        <p>{item.period}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}