type Props = {
    title: string,
    children: React.ReactNode
}

const ResumeSection = ({ title, children }: Props) => {
    return (
        <section className="flex flex-col gap-2">
            <h3 className="text-green-800 uppercase font-semibold text-lg font-Noto">{title}</h3>
            {children}
        </section>
    )
}

export default ResumeSection