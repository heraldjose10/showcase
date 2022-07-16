import Image from "next/image"

type Props = {
    title: string,
    summary: string,
    image_link: string
}

export const ProjectCard = ({ title, summary, image_link }: Props) => {
    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 items-center lg:flex-col lg:h-full hover:bg-green-500 px-5 py-10">
            <div className="basis-1/2 flex flex-col gap-4 shrink-0">
                <h1 className="text-4xl font-extrabold md:text-7xl basis-2/3 lg:min-h-[250px]">
                    {title}
                </h1>
                <p className="sm:text-lg basis-1/3">{summary}</p>
            </div>
            <Image
                src={image_link}
                alt={title + 'homepage'}
                height='600'
                width='1485'
                className=" object-cover basis-1/2"
            />
        </div>
    )
}
