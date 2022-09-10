import { Experience } from "../interfaces"

type Props = {
    experience: Experience
}

const ResumeExperienceCard = ({ experience }: Props) => {
    return (
        <div>
            <h4 className="text-xl md:text-2xl font-serif">
                <span className="font-semibold">{experience.title + ', '} </span>
                <span>{experience.place + ' — '}</span>
                <span className="italic">{experience.role}</span>
            </h4>
            <p className="text-sm">{experience.duration}</p>
            <ul className="list-disc list-inside">
                {
                    experience.responsibilities.map(resp => (
                        <li>{resp}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ResumeExperienceCard