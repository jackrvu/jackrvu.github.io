import Link from 'next/link';
import Layout from '@/components/layout';

export default function WorkoutSchedule() {
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
                <h2 className="font-semibold">monday - sunday, full detailed schedule</h2>
            </div>
            <div className="mb-4 border border-black border-t-0 p-2">
                <p className="italic mb-4 text-gray-600">subject to future changes.</p>

                {/* Monday */}
                <h3 className="font-semibold text-lg">monday - upper-body strength</h3>
                <div className="bg-gray-100 p-3 rounded">
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-400 px-4 py-2">Segment</th>
                                    <th className="border border-gray-400 px-4 py-2">Work</th>
                                    <th className="border border-gray-400 px-4 py-2">Load & Structure</th>
                                    <th className="border border-gray-400 px-4 py-2">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">A. Neural prep</td>
                                    <td className="border border-gray-400 px-4 py-2">Bench-press bar groove + band pull-aparts</td>
                                    <td className="border border-gray-400 px-4 py-2">2 × 10 empty bar + 2 × 15 band</td>
                                    <td className="border border-gray-400 px-4 py-2">7 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">B. Bench Press</td>
                                    <td className="border border-gray-400 px-4 py-2">Flat barbell</td>
                                    <td className="border border-gray-400 px-4 py-2">Ramp: 5-4-3-2 to 85%<br />Work: 5 × 3 @ 85% 1RM<br />Last set: +1–2 reps if RIR &gt; 2</td>
                                    <td className="border border-gray-400 px-4 py-2">18 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">C. Pendlay Row</td>
                                    <td className="border border-gray-400 px-4 py-2">Barbell, overhand</td>
                                    <td className="border border-gray-400 px-4 py-2">4 × 5 @ 80% 1RM<br />Last set: AMRAP cap = 8</td>
                                    <td className="border border-gray-400 px-4 py-2">15 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">D. Overhead Press</td>
                                    <td className="border border-gray-400 px-4 py-2">Standing barbell</td>
                                    <td className="border border-gray-400 px-4 py-2">3 × 6 @ 77% 1RM, RIR 1</td>
                                    <td className="border border-gray-400 px-4 py-2">10 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">E1. Weighted Dip</td>
                                    <td className="border border-gray-400 px-4 py-2">Belt or dumbbell</td>
                                    <td className="border border-gray-400 px-4 py-2">3 × 8 @ RIR 1–2</td>
                                    <td className="border border-gray-400 px-4 py-2" rowSpan={2}>Superset E1 + E2,<br />90s between rounds</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">E2. Weighted Pull-up</td>
                                    <td className="border border-gray-400 px-4 py-2">Supinated</td>
                                    <td className="border border-gray-400 px-4 py-2">3 × 6 @ RIR 1</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">F. Chest-Supported Rear-Delt Fly</td>
                                    <td className="border border-gray-400 px-4 py-2">Dumbbells</td>
                                    <td className="border border-gray-400 px-4 py-2">3 × 15, 2-sec squeeze</td>
                                    <td className="border border-gray-400 px-4 py-2">6 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">G. Farmer's Carry</td>
                                    <td className="border border-gray-400 px-4 py-2">Hex-trap or DB</td>
                                    <td className="border border-gray-400 px-4 py-2">4 × 40m @ ~60% body-weight/hand</td>
                                    <td className="border border-gray-400 px-4 py-2">8 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">H. Parasympathetic cooldown</td>
                                    <td className="border border-gray-400 px-4 py-2">Box breathing + lat stretch</td>
                                    <td className="border border-gray-400 px-4 py-2">3 min</td>
                                    <td className="border border-gray-400 px-4 py-2">3 min</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm">Progression: add 2.5–5 lb to B and C once all work sets beat last week by ≥ 1 rep.</p>
                </div>

                {/* Tuesday */}
                <h3 className="font-semibold text-lg mt-6">tuesday – active recovery &amp; core</h3>
                <div className="bg-gray-100 p-3 rounded">
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-400 px-4 py-2">Segment</th>
                                    <th className="border border-gray-400 px-4 py-2">Work</th>
                                    <th className="border border-gray-400 px-4 py-2">Load &amp; Structure</th>
                                    <th className="border border-gray-400 px-4 py-2">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* A. Mobility Circuit */}
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">
                                        A. Hip Circuit × 3
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        1. Leg Circles x8/side
                                        2. Fire Hydrants x8/side
                                        3. Heels to Sky x8/side
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">Body-weight</td>
                                    <td className="border border-gray-400 px-4 py-2">10 min</td>
                                </tr>

                                {/* B. Low-Impact Cardio (unchanged) */}
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">B. Low-Impact Cardio</td>
                                    <td className="border border-gray-400 px-4 py-2">Upright bike or incline walk</td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        25–30 min @ &lt; 65 % HR<sub>max</sub>, nasal breathing only
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">30 min</td>
                                </tr>

                                {/* C. Core Giant-Set */}
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">
                                        C. Core Giant-Set × 4
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        1.&nbsp;Barbell rollout (from knees) × 8<br />
                                        2.&nbsp;Weighted plank shoulder-tap × 10 / side<br />
                                        3.&nbsp;Bench reverse crunch&nbsp;+ hip lift × 12
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        BW&nbsp;/ light DB&nbsp;/ empty barbell
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">18&nbsp;min</td>
                                </tr>


                                {/* D. Static Stretch Flow */}
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">D. Static Stretch Flow</td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        Lat stretch, adductor stretch, piriformis stretch, ankle dorsiflexion – 60 s each
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">—</td>
                                    <td className="border border-gray-400 px-4 py-2">10 min</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Wednesday */}
                <h3 className="font-semibold text-lg mt-6">wednesday - leg day (strength + hypertrophy)</h3>
                <div className="bg-gray-100 p-3 rounded">
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-400 px-4 py-2">Segment</th>
                                    <th className="border border-gray-400 px-4 py-2">Work</th>
                                    <th className="border border-gray-400 px-4 py-2">Load & Structure</th>
                                    <th className="border border-gray-400 px-4 py-2">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">A. Warm-up</td>
                                    <td className="border border-gray-400 px-4 py-2">5 min rower → banded monster walks × 20</td>
                                    <td className="border border-gray-400 px-4 py-2">—</td>
                                    <td className="border border-gray-400 px-4 py-2">7 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">B. Back Squat</td>
                                    <td className="border border-gray-400 px-4 py-2">High-bar</td>
                                    <td className="border border-gray-400 px-4 py-2">Ramp: to 82%<br />Work: 4 × 4 @ 82% 1RM<br />Plus: 1 AMRAP set @ 75%, stop at RIR 0</td>
                                    <td className="border border-gray-400 px-4 py-2">20 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">C. Romanian Deadlift</td>
                                    <td className="border border-gray-400 px-4 py-2">Barbell</td>
                                    <td className="border border-gray-400 px-4 py-2">3 × 6 @ 78% 1RM (hip-hinge RDL max)</td>
                                    <td className="border border-gray-400 px-4 py-2">12 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">D. Hack Squat</td>
                                    <td className="border border-gray-400 px-4 py-2">Machine, feet low on plate</td>
                                    <td className="border border-gray-400 px-4 py-2">3 × 10 @ RIR 1–2</td>
                                    <td className="border border-gray-400 px-4 py-2">10 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">E. Leg Curl</td>
                                    <td className="border border-gray-400 px-4 py-2">Lying</td>
                                    <td className="border border-gray-400 px-4 py-2">3 × 12, 1-sec squeeze</td>
                                    <td className="border border-gray-400 px-4 py-2">7 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">F. Walking Lunge</td>
                                    <td className="border border-gray-400 px-4 py-2">DBs</td>
                                    <td className="border border-gray-400 px-4 py-2">2 × 20 steps @ ~30% body-weight/hand</td>
                                    <td className="border border-gray-400 px-4 py-2">6 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">G. Standing Calf Raise</td>
                                    <td className="border border-gray-400 px-4 py-2">—</td>
                                    <td className="border border-gray-400 px-4 py-2">4 × 12 @ RIR 1</td>
                                    <td className="border border-gray-400 px-4 py-2">6 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">H. Mobility Cooldown</td>
                                    <td className="border border-gray-400 px-4 py-2">Couch stretch + band distraction</td>
                                    <td className="border border-gray-400 px-4 py-2">5 min</td>
                                    <td className="border border-gray-400 px-4 py-2">5 min</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Thursday */}
                <h3 className="font-semibold text-lg mt-6">thursday - push day (chest/shoulder/triceps hypertrophy)</h3>
                <div className="bg-gray-100 p-3 rounded">
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-400 px-4 py-2">Segment</th>
                                    <th className="border border-gray-400 px-4 py-2">Work</th>
                                    <th className="border border-gray-400 px-4 py-2">Load & Structure</th>
                                    <th className="border border-gray-400 px-4 py-2">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">A. Potentiation</td>
                                    <td className="border border-gray-400 px-4 py-2">Med-ball chest pass × 3 × 5</td>
                                    <td className="border border-gray-400 px-4 py-2">Light</td>
                                    <td className="border border-gray-400 px-4 py-2">5 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">B. Incline DB Press</td>
                                    <td className="border border-gray-400 px-4 py-2">30°</td>
                                    <td className="border border-gray-400 px-4 py-2">4 × 8 @ RIR 1<br />Last set: drop 25% → AMRAP</td>
                                    <td className="border border-gray-400 px-4 py-2">15 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">C. Seated Dumbbell Shoulder Press</td>
                                    <td className="border border-gray-400 px-4 py-2">—</td>
                                    <td className="border border-gray-400 px-4 py-2">3 × 10 @ RIR 1–2</td>
                                    <td className="border border-gray-400 px-4 py-2">10 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">D1. Cable Fly</td>
                                    <td className="border border-gray-400 px-4 py-2">Mid-height</td>
                                    <td className="border border-gray-400 px-4 py-2">3 × 12–15</td>
                                    <td className="border border-gray-400 px-4 py-2" rowSpan={2}>Superset D1 + D2,<br />60s</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">D2. DB Lateral Raise</td>
                                    <td className="border border-gray-400 px-4 py-2">—</td>
                                    <td className="border border-gray-400 px-4 py-2">3 × 15</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">E. Smith-Machine Close-Grip Bench</td>
                                    <td className="border border-gray-400 px-4 py-2">—</td>
                                    <td className="border border-gray-400 px-4 py-2">3 × 6 @ 80% (close-grip 1RM)</td>
                                    <td className="border border-gray-400 px-4 py-2">8 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">F. Triceps Mechanical Drop-Set</td>
                                    <td className="border border-gray-400 px-4 py-2">1. Overhead rope ext. × 8<br />2. Straight-bar push-down × 8<br />3. Bench dips AMRAP</td>
                                    <td className="border border-gray-400 px-4 py-2">Choose weight so first movement @ RIR 1</td>
                                    <td className="border border-gray-400 px-4 py-2">8 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">G. Push-up Iso-Drops</td>
                                    <td className="border border-gray-400 px-4 py-2">4 drops from top to 1" off floor, hold 3s each</td>
                                    <td className="border border-gray-400 px-4 py-2">BW</td>
                                    <td className="border border-gray-400 px-4 py-2">4 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">H. Band Shoulder IR/ER + Wall Slides</td>
                                    <td className="border border-gray-400 px-4 py-2">—</td>
                                    <td className="border border-gray-400 px-4 py-2">2 × 15 each</td>
                                    <td className="border border-gray-400 px-4 py-2">6 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">I. Parasympathetic Cooldown</td>
                                    <td className="border border-gray-400 px-4 py-2">—</td>
                                    <td className="border border-gray-400 px-4 py-2">3 min</td>
                                    <td className="border border-gray-400 px-4 py-2">3 min</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Friday */}
                <h3 className="font-semibold text-lg mt-6">friday - pull day (back/biceps hypertrophy)</h3>
                <div className="bg-gray-100 p-3 rounded">
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-400 px-4 py-2">Segment</th>
                                    <th className="border border-gray-400 px-4 py-2">Work</th>
                                    <th className="border border-gray-400 px-4 py-2">Load & Structure</th>
                                    <th className="border border-gray-400 px-4 py-2">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">A. Warm-up</td>
                                    <td className="border border-gray-400 px-4 py-2">500m ski-erg + band pull-apart × 30</td>
                                    <td className="border border-gray-400 px-4 py-2">—</td>
                                    <td className="border border-gray-400 px-4 py-2">6 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">B. Conventional Deadlift</td>
                                    <td className="border border-gray-400 px-4 py-2">To mid-shin</td>
                                    <td className="border border-gray-400 px-4 py-2">Ramp: to 80%<br />Work: 3 × 5 @ 80% 1RM<br />Last set: AMRAP cap = 8</td>
                                    <td className="border border-gray-400 px-4 py-2">17 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">C. Chest-Supported T-Bar Row</td>
                                    <td className="border border-gray-400 px-4 py-2">Neutral grips</td>
                                    <td className="border border-gray-400 px-4 py-2">4 × 6 @ RIR 1</td>
                                    <td className="border border-gray-400 px-4 py-2">12 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">D. Wide-Grip Lat Pulldown</td>
                                    <td className="border border-gray-400 px-4 py-2">—</td>
                                    <td className="border border-gray-400 px-4 py-2">3 × 10 @ RIR 2</td>
                                    <td className="border border-gray-400 px-4 py-2">7 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">E. Seated Cable Row</td>
                                    <td className="border border-gray-400 px-4 py-2">2-sec peak</td>
                                    <td className="border border-gray-400 px-4 py-2">3 × 12</td>
                                    <td className="border border-gray-400 px-4 py-2">8 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">F. Biceps "6-12-25" Protocol</td>
                                    <td className="border border-gray-400 px-4 py-2">1. EZ-bar strict curl × 6 @ 85% 10RM<br />2. Incline DB curl × 12 @ 70% 12RM<br />3. Cable hammer curl × 25 @ light</td>
                                    <td className="border border-gray-400 px-4 py-2">1 giant-set × 3 rounds, 2 min rest</td>
                                    <td className="border border-gray-400 px-4 py-2">10 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">G. Face Pull + External Rotation</td>
                                    <td className="border border-gray-400 px-4 py-2">—</td>
                                    <td className="border border-gray-400 px-4 py-2">3 × 15 each</td>
                                    <td className="border border-gray-400 px-4 py-2">6 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">H. Loaded Stretch</td>
                                    <td className="border border-gray-400 px-4 py-2">DB preacher stretch 45s/arm</td>
                                    <td className="border border-gray-400 px-4 py-2">—</td>
                                    <td className="border border-gray-400 px-4 py-2">3 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">I. Box Breathing</td>
                                    <td className="border border-gray-400 px-4 py-2">—</td>
                                    <td className="border border-gray-400 px-4 py-2">2 min</td>
                                    <td className="border border-gray-400 px-4 py-2">2 min</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Saturday and Sunday */}
                <h3 className="font-semibold text-lg mt-6">saturday - anterior-chain power & arm volume</h3>
                <div className="bg-gray-100 p-3 rounded">
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-400 px-4 py-2">Clock</th>
                                    <th className="border border-gray-400 px-4 py-2">Work</th>
                                    <th className="border border-gray-400 px-4 py-2">Load / Prescription</th>
                                    <th className="border border-gray-400 px-4 py-2">Rest</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">00:00–06:00</td>
                                    <td className="border border-gray-400 px-4 py-2">Rower 400m → Band dislocates × 2 × 15 → Body-weight squat pries × 10</td>
                                    <td className="border border-gray-400 px-4 py-2">—</td>
                                    <td className="border border-gray-400 px-4 py-2">Flow</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">06:00–24:00</td>
                                    <td className="border border-gray-400 px-4 py-2">Front Squat w/ 2-sec pause</td>
                                    <td className="border border-gray-400 px-4 py-2">Build to 80% 1RM; 5 × 3 @ 80% (last set AMRAP, cap = 6)</td>
                                    <td className="border border-gray-400 px-4 py-2">2–3 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">24:00–37:00</td>
                                    <td className="border border-gray-400 px-4 py-2">Incline DB Press (30°)</td>
                                    <td className="border border-gray-400 px-4 py-2">4 × 8 @ RIR 1–2</td>
                                    <td className="border border-gray-400 px-4 py-2">2 min</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">37:00–55:00</td>
                                    <td className="border border-gray-400 px-4 py-2">Giant-set × 3<br />1. Bulgarian Split Squat (goblet) 12/leg @ RIR 1<br />2. Hanging Knee-Raise to L-sit 12-15<br />3. Rope Face-Pull 15-20</td>
                                    <td className="border border-gray-400 px-4 py-2">Choose loads → last reps slow</td>
                                    <td className="border border-gray-400 px-4 py-2">90s between rounds</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">55:00–75:00</td>
                                    <td className="border border-gray-400 px-4 py-2">20-min EMOM Arms (10 rounds)<br />• Odd min = EZ-bar Curl × 10 @ 65% 10RM<br />• Even min = Overhead Cable Extension × 12 @ 70% 12RM</td>
                                    <td className="border border-gray-400 px-4 py-2">Finish each set &lt; 40s</td>
                                    <td className="border border-gray-400 px-4 py-2">EMOM</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">75:00–85:00</td>
                                    <td className="border border-gray-400 px-4 py-2">Machine Chest-Supported Row</td>
                                    <td className="border border-gray-400 px-4 py-2">3 × 12-15 (1-sec squeeze) → 25% drop → rep-out</td>
                                    <td className="border border-gray-400 px-4 py-2">90s</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">85:00–90:00</td>
                                    <td className="border border-gray-400 px-4 py-2">Sled Push/Drag Finisher</td>
                                    <td className="border border-gray-400 px-4 py-2">30m push → 30m back-drag × 2 loops @ ~½ body-weight on sled</td>
                                    <td className="border border-gray-400 px-4 py-2">As needed</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">Cool-down after timer</td>
                                    <td className="border border-gray-400 px-4 py-2">Quad + pec stretch, 4-6-breathing</td>
                                    <td className="border border-gray-400 px-4 py-2">—</td>
                                    <td className="border border-gray-400 px-4 py-2">—</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm">Progression: When the pause-front-squat AMRAP beats last week by ≥2 reps, +2.5–5 lb to every work set next Saturday.</p>
                </div>

                <h3 className="font-semibold text-lg mt-6">sunday - resilience & recharge</h3>
                <div className="bg-gray-100 p-3 rounded">

                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-400 px-4 py-2">Clock</th>
                                    <th className="border border-gray-400 px-4 py-2">Block</th>
                                    <th className="border border-gray-400 px-4 py-2">Work & Rationale</th>
                                    <th className="border border-gray-400 px-4 py-2">Prescription</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">00:00–10:00</td>
                                    <td className="border border-gray-400 px-4 py-2">Tissue Prep</td>
                                    <td className="border border-gray-400 px-4 py-2">Foam-roll quads → glutes → lats → T-spine</td>
                                    <td className="border border-gray-400 px-4 py-2">45s each, slow passes</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">10:00–25:00</td>
                                    <td className="border border-gray-400 px-4 py-2">Breath-Driven Mobility Flow</td>
                                    <td className="border border-gray-400 px-4 py-2">1. 90-90 Hip Switch w/ Reach × 6/side<br />2. Cat-Camel × 10<br />3. World's Greatest Stretch × 5/side<br />4. Scap Wall Slide × 12</td>
                                    <td className="border border-gray-400 px-4 py-2">Cycle 2 rounds, exhale deeper into each rep</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">25:00–45:00</td>
                                    <td className="border border-gray-400 px-4 py-2">Technique + Speed Block</td>
                                    <td className="border border-gray-400 px-4 py-2">° Power Snatch from blocks → 2 × 5 @ 40% 1RM snatch<br />° Muscle Clean & Jerk → 3 × 3 @ 50% 1RM clean</td>
                                    <td className="border border-gray-400 px-4 py-2">90s rest; focus on velocity</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">45:00–60:00</td>
                                    <td className="border border-gray-400 px-4 py-2">Plyo-Conditioning Circuit × 4</td>
                                    <td className="border border-gray-400 px-4 py-2">1. KB Swing × 12 @ RIR 2<br />2. Box Jump × 6 (≤24″)<br />3. Battle-Rope Wave 30s</td>
                                    <td className="border border-gray-400 px-4 py-2">60s between rounds</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">60:00–75:00</td>
                                    <td className="border border-gray-400 px-4 py-2">"Connector" Strength Work</td>
                                    <td className="border border-gray-400 px-4 py-2">Tri-set × 3<br />• Neck Flexion (plate) × 15 @ RIR 2<br />• Standing Tibialis Raise × 20<br />• Seated Calf Raise × 15 @ RIR 1</td>
                                    <td className="border border-gray-400 px-4 py-2">90s between rounds</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">75:00–85:00</td>
                                    <td className="border border-gray-400 px-4 py-2">Loaded Carries & Sled Marches</td>
                                    <td className="border border-gray-400 px-4 py-2">• Farmer Carry 40m @ ~60% BW/hand → rest 60s → Sled Backward March 20m @ ~50% BW → rest 60s; repeat 2 rounds</td>
                                    <td className="border border-gray-400 px-4 py-2">—</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2">85:00–90:00</td>
                                    <td className="border border-gray-400 px-4 py-2">Down-shift</td>
                                    <td className="border border-gray-400 px-4 py-2">Supine 90-90 breathing, 4s in / 6s out</td>
                                    <td className="border border-gray-400 px-4 py-2">5 cycles</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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