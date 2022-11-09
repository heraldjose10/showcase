import Image from 'next/image';
import Head from 'next/head';
import moment from 'moment'
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout"
import { fetchAPI } from "../../lib/api"

const BlogPage = ({ blog }) => {

    // https://amirardalan.com/blog/use-next-image-with-react-markdown
    // replace images in md with next/image
    const MarkdownComponents: object = {
        p: paragraph => {
            const { node } = paragraph

            if (node.children[0].tagName === "img") {
                const image = node.children[0]
                const metastring = image.properties.alt
                const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
                const metaWidth = metastring.match(/{([^}]+)x/)
                const metaHeight = metastring.match(/x([^}]+)}/)
                const width = metaWidth ? metaWidth[1] : "768"
                const height = metaHeight ? metaHeight[1] : "432"

                return (
                    <Image
                        src={image.properties.src}
                        width={width}
                        height={height}
                        alt={image.properties.alt}
                        className='object-contain'
                    />
                )
            }
            return <p>{paragraph.children}</p>
        },
    }


    return (
        <Layout>
            <Head>
                <meta property="og:description" content={blog.attributes.description} />
            </Head>
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
                <ReactMarkdown
                    components={MarkdownComponents}
                    className='unreset font-Noto'
                    children={blog.attributes.content}
                />
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