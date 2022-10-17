import { Education } from "../interfaces";

type Props = {
    education: Education
}

const ResumeEducationCard = ({ education }: Props) => {
    return (
        <div>
            <h4 className="text-xl md:text-2xl font-DMSerif">
                <span className="font-semibold">{education.college + ', '}</span>
                <span>{education.place}</span>
            </h4>
            <p className="text-sm font-Noto">{education.duration}</p>
            <p className="font-Noto">{education.summary}</p>
        </div>
    )
}

export default ResumeEducationCard