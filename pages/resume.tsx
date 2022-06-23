import Layout from '../components/Layout'
import List from '../components/List';
import ResumeEducationCard from '../components/ResumeEducationCard';
import ResumeExperienceCard from '../components/ResumeExperienceCard';
import ResumeProjectCard from '../components/ResumeProjectCard';
import ResumeSection from '../components/ResumeSection';
import { experiences, educations, skills, langs, projects, activities } from '../data';

const Resume = () => {

    return (
        <Layout>
            <div className='flex gap-20 w-[1150px] grow-0 mx-auto mt-[100px] px-10'>
                {/* left */}
                <div className='basis-4/6'>
                    {/* intro section */}
                    <div className='min-h-[200px]'>
                        <h1 className='text-7xl font-semibold mb-4 font-serif'>Herald J Olakkengil</h1>
                        <p>
                            Self motivated professional, excited to learn new technologies and explore multicultural collaboration. A fellow human being with passion for creating things out of scratch.
                        </p>
                    </div>

                    <div className='flex flex-col gap-10'>
                        <ResumeSection title='Experience'>
                            <ul>
                                {
                                    experiences.map(exp => (
                                        <li>
                                            <ResumeExperienceCard experience={exp} />
                                        </li>
                                    ))
                                }
                            </ul>
                        </ResumeSection>
                        <ResumeSection title='Education'>
                            <ul className='flex flex-col gap-5'>
                                {
                                    educations.map(education => (
                                        <li>
                                            <ResumeEducationCard education={education} />
                                        </li>
                                    ))
                                }
                            </ul>
                        </ResumeSection>
                        <ResumeSection title='Projects'>
                            <ul className='flex flex-col gap-5'>
                                {
                                    projects.map(project => (
                                        <li key={project.id}>
                                            <ResumeProjectCard project={project} />
                                        </li>
                                    ))
                                }
                            </ul>
                        </ResumeSection>
                    </div>
                </div>

                {/* right */}
                <div className='basis-2/6'>
                    {/* top right contact info */}
                    <div className='flex flex-col min-h-[200px]'>
                        <address>
                            Olakkengil House<br />
                            Pavaratty, Kerala, India<br />
                        </address>
                        <span className='font-semibold'>+91 8330030572</span>
                        <a href='mailto:heraldjose10@gmail.com' className='text-green-800 underline'>heraldjose10@gmail.com</a>
                        <a href='https://github.com/heraldjose10' className='text-green-800 underline'>github.com/heraldjose10</a>
                    </div>

                    <div className='flex flex-col gap-10'>
                        <ResumeSection title='Skills'>
                            <List items={skills} />
                        </ResumeSection>
                        <ResumeSection title='Activities'>
                            <List items={activities} />
                        </ResumeSection>
                        <ResumeSection title='Languages'>
                            <List items={langs} />
                        </ResumeSection>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Resume;