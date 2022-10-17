import moment from 'moment'
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout"
import { fetchAPI } from "../../lib/api"

const BlogPage = ({ blog }) => {

    return (
        <Layout>
            <motion.article
                initial={{ opacity: 0, y: '100vh' }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: .6 }
                }}
                exit={{ opacity: 0 }}
                className='max-w-2xl mx-5 my-8'
            >
                <h1 className='text-5xl font-bold my-5 font-Fjalla'>
                    {blog.attributes.title}
                </h1>
                <div className='my-3 font-Noto'>
                    <p>{moment(blog.attributes.published_at).format('MMMM Do YYYY')}</p>
                    <p className='italic'>{blog.attributes.description}</p>
                </div>
                <ReactMarkdown className='unreset font-Noto' children={blog.attributes.content} />
            </motion.article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const response = await fetchAPI('/blogs', { fields: ['slug'] })

    return {
        paths: response.data.map(blog => ({
            params: {
                slug: blog.attributes.slug
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const response = await fetchAPI(
        '/blogs',
        {
            filters: { slug: params.slug }
        }
    )
    return {
        props: { blog: response.data[0] }
    }

}

export default BlogPage