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
                        Some of these are pretty good. Most of them are noisy and distracting. Reading opinions has generally been good for me, though occasionally some red herrings and rabbit holes prove more of a waste than a valuable exercise.
                    </p>
                    <h3 className="font-semibold text-lg">
                        Intentions
                    </h3>
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