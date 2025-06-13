// src/data/posts.ts
export const posts = [
    { date: '06-12-25', title: 'the new new york socialist', slug: 'zohran' },
    { date: '06-10-25', title: 'goals for the summer', slug: 'goals' },
    { date: '06-10-25', title: 'building coherence', slug: 'coherence' },
    { date: '04-03-25', title: 'the stack', slug: 'intro' }
    // { date: '25-00-00', title: 'three', slug: 'intro' } // Removed
] as const;

// if u need just recent posts somewhere
export const getRecentPosts = () => posts.slice(0, 3);