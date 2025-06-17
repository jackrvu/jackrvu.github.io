import Link from 'next/link';
import Layout from '@/components/layout';

export default function WebsiteUpdate() {
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
                <h2 className="font-semibold">on memory & recall</h2>
            </div>
            <div className="mb-4 border border-black border-t-0 p-2">
                <p className="italic mb-4 text-gray-600">personal thoughts and findings.</p>

            </div>
        </>
    );

    return (
        <Layout sidebarContent={sidebarContent}>
            {mainContent}
        </Layout>
    );
}