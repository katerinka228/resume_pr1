import "./Hackathons.css";

interface Hackathon {
    title: string;
    role: string;
    description: string;
}

interface HackathonsProps {
    hackathons: Hackathon[];
}

export default function Hackathons({ hackathons }: HackathonsProps) {
    return (
        <section className="hackathons">
            <h2>Hackathons</h2>
            <ul>
                {hackathons.map((hackathon, index) => (
                    <li key={index} className="hackathon-item">
                        <h3>{hackathon.title}</h3>
                        <p><strong>Role:</strong> {hackathon.role}</p>
                        <p>{hackathon.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}