import Link from 'next/link';
import Layout from '@/components/layout';

export default function Specs() {
    // Define sidebar content
    const sidebarContent = (
        <>
            <div className="border border-black p-2">
                <h2 className="font-semibold">Navigation</h2>
            </div>
            <div className="mb-4 border border-black border-t-0 p-2">
                <ul className="space-y-1">
                    <li><Link href="/" className="hover:text-indigo-500 transition-colors duration-200">Home</Link></li>
                    <li><Link href="/posts" className="hover:text-indigo-500 transition-colors duration-200">All Posts</Link></li>
                </ul>
            </div>
        </>
    );

    // Main content
    const mainContent = (
        <>
            <div className="border border-black p-2">
                <h2 className="font-semibold">Goals</h2>
            </div>
            <div className="mb-4 border border-black border-t-0 p-2">
                <p className="italic mb-4 text-gray-600">what do I want to do?</p>

                <div className="space-y-3">
                    <h3 className="font-semibold text-lg">
                        Build
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 bg-gray-100 p-3 rounded">
                        <li>drift, a gamified learning platform where users navigate some coherent space littered with long-form content articles from places like Wikipedia, arXiv, LessWrong, Paul Graham, etc.</li>
                        <li>generate some sort of easy workflow for math psets. latex, but in a way that updates live, with a nice UI and window for both the text editing and generated pdf. I should be able to easily paste in questions and fluidly type in answers. Think Overleaf, but locally and w/ "benefits"</li>
                        <li>build some benchmarks. finish the NYT crossword benchmark, generate some more sophisticated ones afterwards that focus on collaboration, strategy. come up with some novel circumstances, see how these models can "build" towards a common goal, how they operate in zero sum games, etc. Take inspiration from resource-based strategy games (Catan, Monopoly), but the benchmark and activities should be novel.</li>
                        <li>start building progressively cooler AI/ML models. not using chat to generate them, just using my brain and understanding the underlying principles. not sure exactly what this looks like yet, but that's the deal with non-objective based search</li>
                    </ul>
                    <h3 className="font-semibold text-lg">
                        Learn
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 bg-gray-100 p-3 rounded">
                        <li>real math. finish axler's linear algebra done right, pde book</li>
                        <li>read a lot, not necessarily planning what I read. finish what I've started, read what other people recommend and love. be open, but firm and opinionated. document readings, thoughts, ideas</li>
                        <li>be more niche, but intentionally. this is good</li>
                        <li>practice for the Putnam (for cope, this is just for fun). go through the past ten years of problems, and do every single one, learning new concepts until I (at least superficially) <i>understand</i></li>
                    </ul>
                    <h3 className="font-semibold text-lg">
                        Maintenance
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 bg-gray-100 p-3 rounded">
                        <li>start lifting weights again. hit 225 again by the end of the summer</li>
                        <li>diet, exercise, sleep</li>
                    </ul>
                </div>
            </div>
        </>
    );

    return (
        <Layout sidebarContent={sidebarContent}>
            {mainContent}
        </Layout>
    );
}