import React from "react"
import Head from "next/head"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

import Layout from "../../components/Layout"

import { ProjectDetails } from "../../data/projects"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MasonryLayout from "../../components/MasonryLayout"
import Gallery from "../../components/Gallery"

const Project = () => {
    const { query } = useRouter()
    const { slug } = query

    const project = ProjectDetails.find(p => (p.slug === slug))

    return (
        <Layout>
            <Head>
                <meta property="og:description" content={'Showcase | Projects'} />
                <meta name="description" content={'Showcase | Projects'} />
                <meta property="twitter:description" content={'Showcase | Projects'} />
            </Head>
            {
                project
                    ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="px-5 sm:px-10 py-16 flex-col flex gap-10 items-center w-full max-w-5xl"
                        >
                            <h1 className="font-Fjalla text-left w-full text-5xl font-extrabold md:text-7xl lg:text-8xl">
                                {project.title}
                            </h1>

                            {/* screenshots for small displays */}
                            <Gallery images={project.images} />

                            <section className="w-full mt-10 font-Noto">
                                <h2 className="text-3xl font-semibold py-5">Challenges</h2>
                                <ul className="list-disc list-inside">
                                    {
                                        project.challenges.map((challenge, index) => (
                                            <li key={index}>{challenge}</li>
                                        ))
                                    }
                                </ul>
                            </section>

                            <section className="w-full font-Noto">
                                <h2 className="text-3xl font-semibold py-5">Take Aways</h2>
                                <ul className="list-disc list-inside">
                                    {
                                        project.learnings.map((learning, index) => (
                                            <li key={index}>{learning}</li>
                                        ))
                                    }
                                </ul>
                            </section>

                            {/* Masonry layout for large displays */}
                            <MasonryLayout columns={3} gap={50}>
                                {
                                    project.images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image.link}
                                            alt={image.alt}
                                            placeholder='blur'
                                            blurDataURL={image.link}
                                            layout="intrinsic"
                                            width={image.width / 3}
                                            height={image.height / 3}
                                            className="hover:cursor-pointer"
                                        />
                                    ))
                                }
                            </MasonryLayout>
                        </motion.div>
                    )
                    : <p>loading....</p> // create a good loading animation
            }
        </Layout>
    )
}

export default Project