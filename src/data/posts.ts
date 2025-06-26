// src/data/posts.ts
export const posts = [
    //{ date: '06-16-25', title: 'crossword puzzles, an ai benchmark for them, and thinking', slug: 'crosswordbench' },
    ///{ date: '06-15-25', title: 'thoughts on memory', slug: 'recall' },
    //{ date: '06-15-25', title: 'workout schedule', slug: 'workout' },
    //{ date: '06-12-25', title: 'the new new york socialist', slug: 'zohran' },
    { date: '06-10-25', title: 'goals for the summer', slug: 'goals' },
    { date: '06-10-25', title: 'building coherence', slug: 'coherence' },
    { date: '04-03-25', title: 'the stack', slug: 'intro' }
    // { date: '25-00-00', title: 'three', slug: 'intro' } // Removed
] as const;

// if u need just recent posts somewhere
export const getRecentPosts = () => posts.slice(0, 3);