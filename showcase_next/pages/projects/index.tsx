import Link from "next/link"
import Layout from "../../components/Layout"

import { personalProjects } from "../../data"

import { ProjectCard } from "../../components/ProjectCard"


const Projects = () => {
    return (
        <Layout>
            <div className="flex flex-col px-5 sm:px-10 py-16 gap-20 lg:flex-row lg:flex-wrap justify-center">
                {
                    personalProjects.map(project => (
                        <Link
                            href={'/projects/' + project.slug}
                            className="lg:shrink-0"
                            key={project.id}
                        >
                            <a className="lg:basis-1/4 lg:hover:scale-110 transition-all">
                                <ProjectCard
                                    title={project.title}
                                    summary={project.summary}
                                    image_link={project.home_page}
                                />
                            </a>
                        </Link>
                    ))
                }
            </div>
        </Layout>
    )
}

export default Projects