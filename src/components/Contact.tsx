interface ContactProps {
    email: string;
    phone: string;
    github: string;
}

export default function Contact({ email, phone, github }: ContactProps) {
    return (
        <section className="contact">
            <h2>Contact</h2>
            <ul>
                <li>Email: {email}</li>
                <li>Phone: {phone}</li>
                <li>GitHub: <a href={github}>{github}</a></li>
            </ul>
        </section>
    );
}