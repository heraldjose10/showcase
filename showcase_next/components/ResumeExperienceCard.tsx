import { Experience } from "../interfaces"

type Props = {
    experience: Experience
}

const ResumeExperienceCard = ({ experience }: Props) => {
    return (
        <div>
            <h4 className="text-xl md:text-2xl font-DMSerif">
                <span className="font-semibold">{experience.title + ', '} </span>
                <span>{experience.place + ' — '}</span>
                <span className="italic">{experience.role}</span>
            </h4>
            <p className="text-sm font-Noto">{experience.duration}</p>
            <ul className="list-disc list-inside font-Noto">
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