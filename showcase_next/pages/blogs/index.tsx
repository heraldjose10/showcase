import Link from "next/link";
import Layout from "../../components/Layout";

import { fetchAPI } from '../../lib/api'

const BlogsPage = ({ blogs }) => {

    return (
        <Layout>
            <ul className="max-w-2xl mx-5 my-10">
                {
                    blogs.map(blog => (
                        <li key={blog.id} className='my-5 cursor-pointer'>
                            <Link href={`/blogs/${blog.attributes.slug}`}>
                                <h3 className='text-2xl sm:text-4xl'><a>{blog.attributes.title}</a></h3>
                            </Link>
                            <p className="text-sm">{blog.attributes.description}</p>
                        </li>
                    ))
                }
            </ul>
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