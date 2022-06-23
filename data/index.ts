import { Education, Experience, Item, Project } from '../interfaces'

export const skills: Item[] = [
    { id: 1, name: 'Python Programming' },
    { id: 2, name: 'Web Development(Flask, React, Tailwind CSS, Redux)' },
    { id: 3, name: 'Git Version Control System' },
    { id: 4, name: 'Data Visualisation(Pandas, Plotly)' },
]

export const activities: Item[] = [
    { id: 1, name: 'Hospitality Committee member for college tech fest Dyuksha\’20.', },
    { id: 2, name: 'Internship at KELTRON on PCB design using Proteus software suite.', },
    { id: 3, name: 'TCS CodeVita coding competition round 1 winner.' }
]

export const langs: Item[] = [
    { id: 1, name: 'English' },
    { id: 2, name: 'Malayalam' }
]

export const projects: Project[] = [
    { id: 1, title: 'BTech Final Year Project', summary: 'Analysed the torque ripples in a Brushless DC Motor and simulated a solution for reducing the torque ripples.' },
    { id: 2, title: 'Kaggle Survey Data Visualisation', summary: 'Learned data handling using Pandas and created graphs with the data using Plotly to analyse gender disparities in the data science industry.' },
    { id: 3, title: 'StoryTell', summary: 'Created a webapp for blogging using Flask framework and REST API.' },
    { id: 4, title: 'Nike Online', summary: 'A fullstack clone for Nike IN webapp made using React and Flask' },
]

export const educations: Education[] = [
    { id: 1, college: 'NSS College of Engineering', place: 'Palakkad', duration: 'AUGUST 2017 - JUNE 2021', summary: 'Bachelor of Technology in Electrical and Electronics Engineering with a CGPA of 7.8.' },
    { id: 2, college: 'St Joseph\'s Higher Secondary School', place: 'Pavaratty', duration: 'JUNE 2015 - MARCH 2017', summary: 'Higher secondary education with 96% overall score.' }
]

export const experiences: Experience[] = [
    {
        id: 1,
        title: 'Tata Consultancy Services',
        place: 'Kochi',
        role: 'Technical Faculty',
        duration: 'JULY 2021 - PRESENT',
        responsibilities: [
            'Deliver webinars and sessions on Python, Web development and SQL.',
            'Develop and maintain Python scripts to manipulate data in Excel and CSV files.'
        ]
    }
]