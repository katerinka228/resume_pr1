interface HeaderProps {
    name: string;
    role: string;
}

export default function Header({ name, role }: HeaderProps) {
    return (
        <header className="header">
            <h1>{name}</h1>
            <p>{role}</p>
        </header>
    );
}