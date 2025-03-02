import AnimatedName from "./name-animation";
import SkillGraph from "./skillGraph";
                        

export default function SkillSection() {
    return (
        <div className="h-[80rem] flex flex-col p-16">
            <AnimatedName
                name ={<h1 className="text-teal-400 text-[2.7rem] italic font-semibold pb-6">Here’s my Pokémon collection—oops, I meant skills!</h1>
                } />
            <h1 className="text-zinc-300 text-[1rem] pb-12">Feel free to zoom or drag them.</h1>
            <div><SkillGraph /></div>
        </div>
    );
  }

