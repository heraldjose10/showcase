import { Project } from "../interfaces"

type Props = {
    project: Project
}

const ResumeProjectCard = ({ project }: Props) => {
    return (
        <div>
            <h4 className="font-semibold text-2xl font-serif">{project.title}</h4>
            <p>{project.summary}</p>
        </div>
    )
}

export default ResumeProjectCard