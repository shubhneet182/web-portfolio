import "tailwindcss";
import TimelineScroll from "./experienceTimeline";
import AnimatedName from "./name-animation";

interface ExperienceData {
    title: string;
    organization: string;
    location: string;
    toDate: string;
    endDate: string;
    description: string;
    type: string;
  }

export const EduExperienceComponent = (data:ExperienceData) => {
    return(
        <li className="relative h-[20rem]">
            {/* Time */}
            <p className="block font-bold leading-none text-gray-400 pb-6">{data.toDate} - {data.endDate}</p>
            <div className="flex items-center">                
                {/* Icon */}
                <div className="z-10 flex items-center justify-center w-8 h-8 bg-amber-100 rounded-full ring-0 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg width="64px" height="64px" viewBox="-3.6 -3.6 31.20 31.20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fcba03" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0,0), scale(1)"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path d="M21 10L12 5L3 10L6 11.6667M21 10L18 11.6667M21 10V10C21.6129 10.3064 22 10.9328 22 11.618V16.9998M6 11.6667L12 15L18 11.6667M6 11.6667V17.6667L12 21L18 17.6667L18 11.6667" 
                                stroke="#000000#fcba03" strokeWidth="1.296" strokeLinecap="round" 
                                strokeLinejoin="round"></path> 
                            </g>
                        </svg>
                </div>
                {/* Horizontal Line */}
                <div className="hidden sm:flex w-[30rem] bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            {/* Data */}
            <div className="mt-4 sm:pe-8 text-wrap w-[25rem]">
                <h3 className="text-lg font-semibold text-white dark:text-white pb-2">{data.title}</h3>
                <h4 className="font-semibold text-teal-400 dark:text-white">{data.organization}</h4>
                <h5 className="text-gray-300 dark:text-white pb-4">{data.location}</h5>
                <p className="text-base font-normal text-gray-400 dark:text-gray-400">{data.description}</p>
            </div>
        </li>
    )  
}

export const WorkExperienceComponent = (data:ExperienceData) => {
    return(
        <li className="relative h-[20rem]">
            {/* Time */}
            <p className="block font-bold leading-none text-gray-400 pb-6">{data.toDate} - {data.endDate}</p>
            <div className="flex items-center">
                {/* Icon */}
                <div className="z-10 flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full ring-0 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg width="64px" height="64px" viewBox="-7.44 -7.44 38.88 38.88" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0c63c7">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" 
                        strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.384"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z" stroke="#0c63c7" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path> 
                            <path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7" stroke="#0c63c7" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path> 
                            <path d="M22 12L12.3922 13.9216C12.1333 13.9733 11.8667 13.9733 11.6078 13.9216L2 12" stroke="#0c63c7" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path> 
                        </g></svg>
                </div>
                {/* Horizontal Line */}
                <div className="hidden sm:flex w-[30rem] bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            {/* Data */}
            <div className="mt-3 sm:pe-8 text-wrap w-[25rem]">
                <h3 className="text-lg font-semibold text-white dark:text-white pb-2">{data.title}</h3>
                <h4 className="font-semibold text-teal-400 dark:text-white">{data.organization}</h4>
                <h5 className="text-gray-300 dark:text-white pb-4">{data.location}</h5>
                <time className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500 pb-4">{data.toDate} - {data.endDate}</time>
                <p className="text-base font-normal text-gray-00 dark:text-gray-400">{data.description}</p>
            </div>
        </li>
    )  
}

export default function ExperienceSection() {
    const experiences = [
                            {
                                title:"High School", 
                                organization:"Amity International School", 
                                location:"Noida, U.P., India",
                                toDate:"2014", 
                                endDate:"2018", 
                                description:"Graduated with 93.60% from CBSE Board", 
                                type:"school"
                            },
                            {
                                title:"Bachelor of Technology - Computer Science & Engineering", 
                                organization:"Deenbandhu Chhotu Ram University of Science and Technology", 
                                location:"Murthal, Haryana, India",
                                toDate:"Aug 2018", 
                                endDate:"Aug 2022", 
                                description:"Graduated with 8.5 CGPA out of 10 CGPA. Came 2nd in DCRUST Hack", 
                                type:"school"
                            },
                            {
                                title:"Technology Intern", 
                                organization:"Fidelity International Ltd.", 
                                location:"Gurugram, Haryana, India",
                                toDate:"Jun 2021", 
                                endDate:"Aug 2021", 
                                description:"Worked with Research and Development Dept. on AI/React JS project. Recieved PPO.", 
                                type:"work"
                            },
                            {
                                title:"React JS Developer", 
                                organization:"PureSoftware Pvt. Ltd.", 
                                location: "Noida, U.P., India",
                                toDate:"Jan 2022", 
                                endDate:"Jul 2022", 
                                description:"Recieved Bravo Award in April 2022 for outstanding work on project", 
                                type:"work"
                            },
                            {
                                title:"Graduate Programmer", 
                                organization:"Fidelity International Ltd.", 
                                location:"Gurugram, Haryana, India",
                                toDate:"Aug 2022", 
                                endDate:"Dec 2022", 
                                description:"Worked within Technology Dept.", 
                                type:"work"
                            },
                            {
                                title:"Post Graduate Certificate - Artificial Intelligence – Architecture, Design, and Implementation", 
                                organization:"Georgian College", 
                                location:"Barrie Ontario, Canada",
                                toDate:"Jan 2023", 
                                endDate:"Aug 2023", 
                                description:"Graduated with Honours and Dean's List each semester", 
                                type:"school"
                            },
                            {
                                title:"Post Graduate Certificate - Project Management", 
                                organization:"Georgian College", 
                                location:"Barrie Ontario, Canada",
                                toDate:"Sep 2023", 
                                endDate:"Apr 2024", 
                                description:"Graduated with Honours and Dean's List each semester. Came 2nd in AI Hackathon", 
                                type:"school"
                            },
                            {
                                title:"Student Researcher", 
                                organization:"Georgian College", 
                                location:"Barrie, Ontario, Canada",
                                toDate:"Jan 2024", 
                                endDate:"Apr 2024", 
                                description:"Handled, coordinated and managed portfolio of Big Data projects for Capstone", 
                                type:"work"
                            },
                            {
                                title:"Jr. Project Manager & Research Associate", 
                                organization:"Georgian College", 
                                location:"Barrie, Ontario, Canada",
                                toDate:"Jan 2024", 
                                endDate:"Apr 2024", 
                                description:"Handled, coordinated and managed portfolio of Big Data and AI projects for Capstone", 
                                type:"work"
                            }
                    ]


    return (
        <div className="h-[40rem] p-16">
            <AnimatedName  
                name= {<h1 className="text-teal-400 text-[2.7rem] italic font-semibold pb-20">Scroll Through My Growth</h1>
                    } />
            {/* <ExperienceTimeline />  */}
            <TimelineScroll>
            <div className="flex w-[200%]">
                <li className="relative">
                <div className="flex items-center">                
                    {/* Horizontal Line */}
                    <div className="mt-14 hidden sm:flex w-[2rem] bg-gray-200 h-0.4 dark:bg-gray-700"></div>
                </div></li>
                {experiences.map((data, index) => 
                        data.type == "school" ?
                        <EduExperienceComponent key={index} {...data} /> :
                        <WorkExperienceComponent key={index} {...data} />)}
            </div>
            </TimelineScroll>
        </div>
    );
  }