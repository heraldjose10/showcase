import moment from 'moment'
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout"
import { fetchAPI } from "../../lib/api"

const BlogPage = ({ blog }) => {

    return (
        <Layout>
            <article className='max-w-2xl mx-5 my-8 '>
                <h1 className='text-5xl font-bold my-5'>
                    {blog.attributes.title}
                </h1>
                <div className='my-3'>
                    <p>{moment(blog.attributes.published_at).format('MMMM Do YYYY')}</p>
                    <p className='italic'>{blog.attributes.description}</p>
                </div>
                <ReactMarkdown className='unreset' children={blog.attributes.content} />
            </article>
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