
export default function SkillCard({ headline, items }: { headline: string, items: string[] }) {
    return (
        <div className="skillcard">
            <h1 className="text-center">{headline}</h1>
            <ul>
                {items.map((item, i) =>
                    <li key={i}>- {item}</li>
                )
                }
            </ul>
        </div>
    )
}
