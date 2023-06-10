import db, { genId } from '../../src/modules/db';

const run = async () => {
    await db.post.createMany({
        data: [
            {
                id: genId(),
                title: 'My first post',
                slug: 'my-first-post',
                publishedAt: new Date(),
            },
            {
                id: genId(),
                title: 'My second post',
                slug: 'my-second-post',
            }
        ]
    })
}

if (require.main === module) {
    run().then(() => {
        console.log('Seeded successfully');
        process.exit(0);
    }).catch((e) => {
        console.error(e);
        process.exit(1);
    })
}