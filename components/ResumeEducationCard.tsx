import { Education } from "../interfaces";

type Props = {
    education: Education
}

const ResumeEducationCard = ({ education }: Props) => {
    return (
        <div>
            <h4 className="text-2xl font-serif">
                <span className="font-semibold">{education.college + ', '}</span>
                <span>{education.place}</span>
            </h4>
            <p className="text-sm ">{education.duration}</p>
            <p>{education.summary}</p>
        </div>
    )
}

export default ResumeEducationCard