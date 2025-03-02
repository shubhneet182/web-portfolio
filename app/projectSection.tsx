import "tailwindcss";
import data from "./projects-data.json";
import AnimatedName from "./name-animation";

interface ProjectData {
    "Project Title": string;
    Background: string;
    Objective: string;
    "Key Features": string[];
    "Tech Stack": string[];
    "bg-cover": string;
    "bg-full": string;
  }

function ExpandableAccordion(project: ProjectData){
    return(
        <div className=" group relative bg-emerald-50 px-4 py-3 grow hover:w-full transition-width rounded overflow-hidden">
            {/* Accordion Title */}
            <div className="absolute inset-0 group-hover:opacity-0 duration-700 ease-in-out justify-center bg-center bg-cover" style={{ backgroundImage: `url(/${project['bg-cover']})` }}>
            </div>
            {/* Accordion Content */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-700 ease-in-out justify-center bg-center bg-cover" style={{ backgroundImage: `url(/${project['bg-full']})` }}>
                <div className="m-4 h-[38rem] bg-white/80 backdrop-blur-lg p-4 rounded flex flex-col justify-between">
                            <h1 className="text-3xl text-sky-800 font-bold pb-6">
                                {project["Project Title"]}
                            </h1>
                            <div>
                                <h2 className="text-2xl font-bold pb-2">
                                    Background
                                </h2>
                                <p className="text-zinc-700 pb-4">
                                    {project.Background}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold pb-2">
                                    Objective
                                </h2>
                                <div  className="text-zinc-700 pb-4">
                                    {project.Objective.split("\n").map((line:string, index:number) => (
                                        <p key={index} style={{ marginTop: (line.includes("My Role:")) ? '10px' : '0', fontWeight: (line.includes("My Role:")) ? 'bold' : 'normal' }}>{line}</p>
                                        ))}
                                </div>
                            </div>
                            <div className="flex justify-between pr-4">
                                <div>
                                    <h3 className="text-2xl font-bold pb-2">
                                        Key Features
                                    </h3>
                                    {project["Key Features"].map((feature:string, index:number) =>
                                                <p className="text-zinc-700" key={index}>{feature}</p>)}
                                </div>
                                <div className="pl-8 max-w-[20rem]">
                                    <h3 className="text-2xl font-bold pb-2">
                                        Tech Stack
                                    </h3>
                                    {project["Tech Stack"].map((skill:string, index:number) =>
                                                <p className="text-zinc-700" key={index}>{skill}</p>)}
                                </div>
                            </div>
                </div>
            </div>
        </div>
    );
}

export default function ProjectSection() {
    return (
        <div className="p-16 h-[56rem] flex flex-col">
            <AnimatedName
                name={<h1 className="text-teal-400 text-[2.7rem] italic font-semibold pb-12">Projects where I turned caffeine into code...</h1>
                } />
            <div className="container mx-auto">
                <div className="flex space-x-2 justify-between h-[40rem]">
                    {data.map((projectData, index) => <ExpandableAccordion key={index} {...projectData} />)}
                </div>
            </div>
        </div>
    );
  }

