import { ProjectDetail } from "../interfaces";

export const ProjectDetails: ProjectDetail[] = [
    {
        id: 1,
        title: 'Nike India Clone',
        summary: 'A fullstack clone of the Nike India shopping website made using React frontend and Flask backend. Integrated with PayTM payments gateway.',
        home_page: '/projects/nike_home.png',
        slug: 'nike-india-clone',
        challenges: [
            'Finding data of the products. I scraped a portion of Nike India website and stored the data in a database.',
            'Integrating PayTM payments gateway. The documentation was limited for backend gateway integration.'
        ],
        images: [
            {
                link: '/projects/nike_home.png',
                alt: 'nike home screenshot',
                height: 800,
                width: 1920
            },
            {
                link: '/projects/nike_home_1.png',
                alt: 'nike home screenshot',
                height: 1512,
                width: 2048
            },
            {
                link: '/projects/nike_products.png',
                alt: 'nike products page',
                height: 1512,
                width: 640
            },
            {
                link: '/projects/nike_home_mobile.png',
                alt: 'nike home from mobile display',
                height: 5718,
                width: 2048
            },
            {
                link: '/projects/nike_product.png',
                alt: 'nike product page',
                height: 3540,
                width: 2048
            },
            {
                link: '/projects/nike_products_long.png',
                alt: 'nike products page scrolled down',
                height: 6738,
                width: 2048
            },
            {
                link: '/projects/nike_login.png',
                alt: 'nike login screen',
                height: 2902,
                width: 2048
            },

        ],
        learnings: [
            'Used PayTM payments gateway to checkout users',
            'Created auth flow with auth and refresh token using Flask-JWT-Extended',
            'Used Framer Motion to create animations'
        ],
        tags: ['flask', 'react', 'tailwind', 'framer motion', 'paytm']
    },
    {
        id: 2,
        title: 'StoryTell',
        summary: 'A webapp for light blogging. This webapp was made using Flask framework. Authors can sign and start writing their blogs through a WYSIWYG text editor.',
        home_page: '/projects/storytell_home.png',
        slug: 'storytell',
        challenges: [
            'Hosting the project on AWS EC2 was a bit challenging',
            'Resizing and storing thumbnails. I could set up a S3 bucket to store the thumbnails after resizing at client side'
        ],
        images: [
            {
                link: '/projects/storytell_blog_page.jpeg',
                alt: 'storytell blog page',
                height: 909,
                width: 1918
            },
            {
                link: '/projects/storytell_homepage.jpeg',
                alt: 'storytell home page',
                height: 800,
                width: 1920
            },
            {
                link: '/projects/storytell_iphone_home.jpeg',
                alt: 'storytell home page from iphone',
                height: 2436,
                width: 1125
            },
            {
                link: '/projects/storytell_login.jpeg',
                alt: 'storytell login page',
                height: 907,
                width: 1915
            },
            {
                link: '/projects/storytell_profile.jpeg',
                alt: 'storytell profile page',
                height: 4398,
                width: 1125
            },
            {
                link: '/projects/storytell_update_blog.jpeg',
                alt: 'storytell update blog page',
                height: 2182,
                width: 2880
            },
            {
                link: '/projects/storytell_write_blog.jpeg',
                alt: '',
                height: 3206,
                width: 2048
            }
        ],
        learnings: [
            'Database modelling using Flask-SQLAlchemy',
            'Sending mails to users using Flask-Mail',
            'Integrated a richtext editor. Storing of the user input will be done after bleaching of data'
        ],
        tags: ['flask', 'jinja2', 'wysiwyg', 'scss']
    },
    {
        id: 3,
        title: 'Spotify Clone',
        summary: 'A clone of the Spotify web player with music playback, search feature, playlists, albums and liked songs. I used the Spotify API for data.',
        home_page: '/projects/spotify_clone_home.png',
        slug: 'spotify-clone',
        challenges: [
            'Managing complex state of users data',
            'Integrating music playback using 3rd party component'
        ],
        images: [
            {
                link: '/projects/spotify_clone_home.png',
                alt: 'spotify clone home page',
                height: 800,
                width: 1980
            },
            {
                link: '/projects/spotify_clone_library.png',
                alt: 'spotify clone library',
                height: 1080,
                width: 1920
            },
            {
                link: '/projects/spotify_clone_search.png',
                alt: 'spotify clone search page',
                height: 800,
                width: 1430
            },
            {
                link: '/projects/spotify_clone_liked.png',
                alt: 'spotify clone liked songs page',
                height: 800,
                width: 1216
            },
            {
                link: '/projects/spotify_clone_playlist.png',
                alt: 'spotify clone playlists page',
                height: 800,
                width: 440
            },
            
        ],
        learnings: [
            'Used a 3rd party API. The awesome documentation by Spotify helped a lot',
            'State management using Redux',
            'Styling using SCSS. Responsive web development'
        ],
        tags: ['react', 'react-redux', 'scss', '3rd party api']
    }
]