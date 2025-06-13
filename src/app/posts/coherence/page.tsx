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
                <h2 className="font-semibold">Building Coherence</h2>
            </div>
            <div className="mb-4 border border-black border-t-0 p-2">
                <p className="italic mb-4 text-gray-600">trying to think</p>

                <div className="space-y-3">
                    <h3 className="font-semibold text-lg">
                        Impetus
                    </h3>
                    <p>
                        I spend a lot of time trying to think the right way. This is evidently a very common urge and has brought forth a library of opinions and strategies (see: <Link href="https://www.lesswrong.com/" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200">LessWrong</Link>).
                        Some of these are pretty good. Most of them are noisy and distracting, but single-pass filtration appears to be pretty effective. Reading opinions has generally been good for me, though occasionally some red herrings and rabbit holes prove more of a waste than a valuable exercise.
                    </p>
                    <h3 className="font-semibold text-lg">
                        Intentions
                    </h3>
                    <p>
                        This does not intend to be performative or provide some reasoning to justify a set of predetermined opinions, but rather should build off of reasonable assumptions to reach beliefs that hopefully do not align with the most repulsive conclusions. This is not an invention of some profound philosophical stance, but rather a documentation and analysis of the most interesting pieces I find. I hope to mesh the most attractive ideas I find together in a way a little more organized than shower thoughts.
                        Though the list of assumptions necessary to reach any valuable conclusions at all is certainly pretty large, I hope to show that placing the most weight on the following principles is most reasonable:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 bg-gray-100 p-3 rounded">
                        <li>general mutual coherence. each belief should be visibly and unmistakably consistent with another, or it should not be believed</li>
                        <li>try very hard to reconcile repulsive conclusions. if the means seem valid, but but the ends are viscerally disturbing, I should question why I feel this way about the ends while providing some validity to my own human instincts and repulsions. it's more likely [insert citation] that the means are wrong than that a repulsive conclusion is <i>actually correct</i></li>
                    </ul>
                    <h3 className="font-semibold text-lg">
                        Getting Started
                    </h3>
                    <h5 className="font-semibold text-sm">
                        Selective Effects
                    </h5>
                    <p>

                    </p>
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