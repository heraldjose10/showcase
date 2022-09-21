import Image from "next/image";
import Layout from "../../components/Layout"
import { fetchAPI } from "../../lib/api"

const Gallery = ({ images }) => {

    return (
        <Layout>
            <div className="flex flex-wrap gap-2 justify-center content-start my-auto py-10 w-full max-w-[900px] md:gap-3">
                {
                    images.map(image => {
                        return (
                            <div
                                className="relative w-[calc(50vw-4px)] h-[calc(50vw-4px)] md:w-[270px] md:h-[270px] md:border-black md:border-2"
                                key={image.id}
                            >
                                <Image
                                    src={
                                        process.env.NEXT_PUBLIC_STRAPI_API_URL +
                                        (image.attributes.image.data.attributes.formats.medium ? image.attributes.image.data.attributes.formats.medium.url : image.attributes.image.data.attributes.formats.small.url)
                                    }
                                    layout='fill'
                                    className="object-contain"
                                    key={image.id}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const response = await fetchAPI(
        '/gallary-images',
        { populate: '*' }
    )

    return {
        props: { images: response.data }
    }
}

export default Gallery