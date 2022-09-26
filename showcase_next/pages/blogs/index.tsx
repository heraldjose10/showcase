import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";

import { fetchAPI } from '../../lib/api'

const BlogsPage = ({ blogs }) => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            }
        },
        exit: {
            opacity: 0
        }
    }

    const item = {
        hidden: { x: '-100px' },
        show: { x: 0 }
    }

    return (
        <Layout>
            <motion.ul
                className="max-w-2xl mx-5 my-10"
                variants={container}
                initial='hidden'
                animate='show'
                exit='exit'
            >
                {
                    blogs.map(blog => (
                        <motion.li
                            variants={item}
                            key={blog.id}
                            className='my-5 cursor-pointer'

                        >
                            <Link href={`/blogs/${blog.attributes.slug}`}>
                                <h3 className='text-2xl sm:text-4xl'><a>{blog.attributes.title}</a></h3>
                            </Link>
                            <p className="text-sm">{blog.attributes.description}</p>
                        </motion.li>
                    ))
                }
            </motion.ul>
        </Layout>
    )
}

export async function getStaticProps() {
    const response = await fetchAPI('/blogs');

    return {
        props: {
            blogs: response.data
        }
    }

}

export default BlogsPage;