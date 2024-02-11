import { aboutPageData } from '@/Data/pageData';
import React from 'react';



const AboutPage = () => {
    return (
        <section className="flex items-center py-20 bg-gray-100 font-poppins dark:bg-gray-800 ">
            <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
                        <div className="flex flex-wrap">
                            <div className="w-full px-4 md:w-1/2">
                                {aboutPageData.images.map((item, index) => (
                                    <img src={item.src} alt={item.alts} key={index}
                                        className="object-cover w-full rounded-lg h-80" />
                                ))}
                            </div>
                            <div className="w-full px-4 md:w-1/2 xl:mt-11">
                                <img src="https://i.postimg.cc/sXJQ5cw0/pexels-pixabay-256455-1.jpg" alt=""
                                    className="object-cover w-full  rounded-lg h-80" />
                                <img src="https://i.postimg.cc/vHTg6593/aqq.jpg" alt=""
                                    className="object-cover w-full rounded-lg h-80" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
                        <span className="text-sm font-semibold text-blue-500 dark:text-blue-400">{aboutPageData.title}</span>
                        <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                            {aboutPageData.content}
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AboutPage;