import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import Layout from "../../components/Layout"

import { personalProjects } from "../../data"

import { ProjectCard } from "../../components/ProjectCard"


const Projects = () => {
    return (
        <Layout>
            <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={{ duration: .5 }}
                className="flex flex-col px-5 sm:px-10 py-16 gap-20 lg:flex-row lg:flex-wrap justify-center"
            >
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
            </motion.div>
        </Layout>
    )
}

export default Projects