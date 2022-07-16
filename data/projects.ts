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
            '/projects/nike_home.png',
            '/projects/nike_home_1.png',
            '/projects/nike_home_mobile.png',
            '/projects/nike_login.png',
            '/projects/nike_product.png',
            '/projects/nike_products.png',
            '/projects/nike_products_long.png',
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
            '/projects/storytell_blog_page.jpeg',
            '/projects/storytell_homepage.jpeg',
            '/projects/storytell_iphone_home.jpeg',
            '/projects/storytell_login.jpeg',
            '/projects/storytell_profile.jpeg',
            '/projects/storytell_update_blog.jpeg',
            '/projects/storytell_write_blog.jpeg',
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
            '/projects/spotify_clone_home.png',
            '/projects/spotify_clone_library.png',
            '/projects/spotify_clone_playlist.png',
            '/projects/spotify_clone_liked.png',
            '/projects/spotify_clone_search.png'
        ],
        learnings: [
            'Used a 3rd party API. The awesome documentation by Spotify helped a lot',
            'State management using Redux',
            'Styling using SCSS. Responsive web development'
        ],
        tags: ['react', 'react-redux', 'scss', '3rd party api']
    }
]