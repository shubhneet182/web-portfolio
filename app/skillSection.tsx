import AnimatedName from "./name-animation";
import SkillGraph from "./skillGraph";

export default function SkillSection() {
    return (
        <div className="flex flex-col p-8 md:p-16" style={{ height: 'clamp(600px, 80rem, 1280px)' }}>
            <AnimatedName
                name={<h1 className="text-teal-400 text-[1.6rem] md:text-[2.7rem] italic font-semibold pb-3 md:pb-6">
                    Here&apos;s my Pokémon collection—oops, I meant skills!
                </h1>} />
            <p className="text-zinc-300 text-[0.9rem] md:text-[1rem] pb-6 md:pb-12">Feel free to zoom or drag them.</p>
            <div className="flex-1 min-h-0">
                <SkillGraph />
            </div>
        </div>
    );
}
