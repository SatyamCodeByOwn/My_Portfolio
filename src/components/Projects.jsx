import React from "react";
import fan from '../assets/fan.png';
import meme from '../assets/meme.png';
import Footer from './Footer';

const ProjectCard = ({ title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title === 'Meme Generator' && <a href={git}>
                <img className="w-full rounded-t-lg h-auto object-cover" src={meme} alt="" />
            </a>}
            {title === 'Moving Fan' && <a href={git}>
                <img className="w-full rounded-t-lg h-auto object-cover" src={fan} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href={git}>
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <main className="flex-grow flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </main>
            <Footer />
        </div>
    );
}

export const project = [
    {
        title: 'Meme Generator',
        description: 'Meme Generator is a web application I crafted using React js. This project is a modern and customized meme generator for social platforms that allows users to connect, share content, and interact seamlessly.',
        git: 'https://github.com/SatyamCodeByOwn/Meme_Generator.git',
        technologies: ['ReactJS', 'Bootstrap']
    },
    {
        title: 'Moving Fan',
        description: 'Moving Fan is a fun purpose project implement using HTML, CSS and Javascript. This is a button controlled running fan.',
        git: "https://github.com/SatyamCodeByOwn/Moving-Fan.git",
        technologies: ['HTML', 'CSS', 'JS']
    }
]

export default Projects;
