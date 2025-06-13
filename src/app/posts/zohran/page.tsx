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
                <h2 className="font-semibold">zohran mamdani</h2>
            </div>
            <div className="mb-4 border border-black border-t-0 p-2">
                <p className="italic mb-4 text-gray-600">he's a strategic genius. it's too bad his ideas aren't any good</p>

                <div className="space-y-3">
                    <h3 className="font-semibold text-lg">
                        genius
                    </h3>
                    <p>
                        Zohran Mamdani has placed himself on the popular side of virtually every issue. His campaign has centralized on a singular memorable message: <i>make New York City affordable</i>. This is quite a noble cause! Let's further break down his goals, looking at the policies he powerfully advocates in this <a href="https://x.com/ZohranKMamdani/status/1932607640070434919" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200">twitter ad</a><sup>1</sup>.
                    </p>
                    <h5 className="font-semibold text-sm">
                        cheaper groceries!
                    </h5>
                    <p className="bg-gray-100 p-3 rounded pl-8">
                        Who wants expensive groceries? Certainly not me! Voters are famously price sensitive, and they severely <a href="https://apnews.com/article/global-elections-2024-incumbents-defeated-c80fbd4e667de86fe08aac025b333f95" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200">punished incumbent candidates</a><sup>2</sup> worldwide for rampant post-pandemic inflation.
                        How amazing would it be if Zohran could make groceries cheaper? Worth trying!
                    </p>
                    <h5 className="font-semibold text-sm">
                        freeze the rent!
                    </h5>
                    <p className="bg-gray-100 p-3 rounded pl-8">
                        There's nothing worse than a landlord greedily forcing a hardworking resident out of their longtime home with vicious rent increases. Mamdani says, "No more."
                    </p>
                    <h5 className="font-semibold text-sm">
                        build hundreds of thousands of affordable homes!
                    </h5>
                    <p className="bg-gray-100 p-3 rounded pl-8">
                        Housing is expensive. Let's build more of it, and make sure that people can buy the homes we build!
                    </p>

                    <h5 className="font-semibold text-sm">
                        raise the minimum wage!
                    </h5>
                    <p className="bg-gray-100 p-3 rounded pl-8">
                        95% of New York City Democrats (the voting population in the primary, after all) <a href="https://www.dataforprogress.org/blog/2024/4/26/voters-think-its-time-to-raise-the-minimum-wage" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200">somewhat or strongly support</a><sup>3</sup> "raising the minimum wage each year to keep up with the rising cost of living and increase in workforce productivity."
                        His framing is effective. Cut costs, raise wages. <i>While we're making everything cheaper, why not also have people make more money?</i>
                    </p>
                    <h3 className="font-semibold text-lg"><i>are you ready for a city we can afford?</i></h3>
                    <p>
                        Zohran's campaign is built on the idea that New York City is too expensive, and that the city government should take action to make it more affordable. His message is simple, effective, and popular, and he <a href="https://x.com/ZohranKMamdani/status/1913291422507090322" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200">knows it</a><sup>4</sup>.
                        For the purposes of winning the election, Mamdani is doing damn near perfectly. What Zohran Mamdani has figured out is that, as a democratic politician, <i>you can just promise things</i>.
                        That isn't to say that he's not being sincere; in fact, I think he absolutely believes in what he's saying. He just repeatedly argues in favor of more free lunch, and people love it.
                        In a sense, Mamdani is far more similar to Donald Trump than he is to Andrew Cuomo. Both obsess over feel-good populism and voicing <i>popular policies</i> for the <i>common man</i>.
                        Where Trump appeals to the hearts of American workers with promises of protectionist tariffs and "no taxes on tips," Mamdani promises "higher wages" and "cheaper things."
                        At the time of writing, Mamdani's odds of winning the primary sit at ~40% on the major prediction sites Polymarket and Kalshi, a steep ascent from a low of ~5.5% in late May.<sup>5</sup><sup>6</sup>
                        Regardless of the election outcome on June 24, Mamdani's campaign will remain a case study in generating true political excitement. Despite his entrance in this uber-competitive mayoral race as a fairly unknown socialist assemblyman out of Bowdoin College, Mamdani has managed to become a clear (and not too far-fetched) second favorite to become mayor of the largest city in the United States.


                    </p>
                    <h3 className="font-semibold text-lg">
                        idiocy
                    </h3>
                    <p>
                        The reality is that these policy ideas are horribly, miserably bad. That's not to say that these issues aren't real; they are.
                        People do suffer when their grocery store prices increase, when they can't pay their rent, and when their wages stagnate. The unforgiving reality is that these policies do not remotely help the issues that they so clearly seem to address.
                        Here's the bottom line:
                    </p>
                    <p className="bg-gray-100 p-3 rounded pl-8">
                        <i>The solutions that Mamdani proposes feel good and human intuition generally indicates that they will causally mitigate real problems. They will not.</i>
                    </p>
                    <p>
                        To preface, the conversations about each one of these policies are generally long and nuanced. Exhaustively discussing each one of these policies would be a massive undertaking, and I implore the reader explore past my own reductive analysis. With that being said, we're lucky that the policies are so glaringly awful that a reductive analysis should be pretty sufficient.
                    </p>
                    <h5 className="font-semibold text-sm">
                        Grocery Price Controlling
                    </h5>
                    <p>
                        Mamdani's self-proclaimed solution to lowering the price of groceries is to build an army of city-owned grocery stores.<sup>7</sup> Does that sound familiar?

                        <br />
                        <br />
                        Let's go back in time for a second.
                        <br />
                        <img src="/assets/yeltsin.jpg" alt="Boris Yeltsin at a Houston Randall's in 1991" className="w-1/2 mx-auto border-2 border-gray-200 rounded-lg" />
                        Here's Boris Yeltsin at a Houston Randall's in 1989.<sup>8</sup> A career Soviet politician, Yeltsin could not even believe the abundance and scale of an Average American grocery store. He was reportedly in a state of shock on his departing flight, and his "last vestige of bolshevism collapsed."<sup>9</sup>
                        American grocery stores are a testament to and an embodiment of the American success story. From New York City, to Houston, to Spartanburg, South Carolina, America possesses these behemoths of abundance. With robust supply chains, efficient distribution, fierce competition, and notoriously low profit margins, American grocery stores effectively supply the American people with the goods they want, when they want them, and at truly competitive prices.
                        Let's go back to Mamdani's idea to create city-owned grocery stores. First of all, <i>what the hell does the city government know about running a grocery store?</i>. The answer is that they know nothing.
                    </p>
                    <h5 className="font-semibold text-sm">
                        Rent Controlling
                    </h5>
                    <p>

                    </p>
                    <h5 className="font-semibold text-sm">
                        "Affordable Housing" Construction
                    </h5>
                    <p>

                    </p>
                    <h5 className="font-semibold text-sm">
                        Raising the Minimum Wage
                    </h5>
                    <p>

                    </p>
                    <h3 className="font-semibold text-lg">
                        citations
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 bg-gray-100 p-3 rounded">
                        <li><a href="https://x.com/ZohranKMamdani/status/1932607640070434919" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200">Zohran's campaign ad</a><sup>1</sup></li>
                        <li><a href="https://apnews.com/article/global-elections-2024-incumbents-defeated-c80fbd4e667de86fe08aac025b333f95" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200">Voters punished incumbents for inflation</a><sup>2</sup></li>
                        <li><a href="https://www.dataforprogress.org/blog/2024/4/26/voters-think-its-time-to-raise-the-minimum-wage" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200">Voters support raising the minimum wage</a><sup>3</sup></li>
                        <li><a href="https://x.com/ZohranKMamdani/status/1913291422507090322" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200">Zohran's campaign ad</a><sup>4</sup></li>
                        <li><a href="https://polymarket.com/event/who-will-win-dem-nomination-for-nyc-mayor?tid=1749757111141" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200">Polymarket market</a><sup>5</sup></li>
                        <li><a href="https://kalshi.com/markets/kxmayornycnomd/new-york-city-mayoral-nominations5" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200">Kalshi Market</a><sup>6</sup></li>
                        <li><a href="https://www.zohranfornyc.com/platform" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200">Zohran's platform</a><sup>7</sup></li>
                        <li><a href="https://www.chron.com/neighborhood/bayarea/news/article/When-Boris-Yeltsin-went-grocery-shopping-in-Clear-5759129.php" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200">Boris Yeltsin at a Houston Randall's in 1991</a><sup>8</sup></li>
                        <li><a href="https://en.wikipedia.org/wiki/1989_visit_by_Boris_Yeltsin_to_the_United_States" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200">Information on Boris Yeltsin's grocery store visit</a><sup>9</sup></li>
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