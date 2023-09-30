import { Post } from "./types";
import { faker } from '@faker-js/faker';

export function generateDummyPosts(count: number): Post[] {
    const dummyPosts: Post[] = [];
  
    for (let i = 0; i < count; i++) {
        const randomDate = faker.date.recent(); // Generate a random recent date
      
        const post: Post = {
            title: faker.lorem.words(),
            desc: faker.lorem.paragraph(),
            photo: faker.image.url({
                height:250,
                width:400
            }),
            username: faker.internet.userName(),
            categories: [faker.lorem.word(), faker.lorem.word()],
            avatar:faker.image.avatar(),
            date: randomDate.toISOString().split('T')[0], // Add date
            time: randomDate.toISOString().split('T')[1].substring(0, 5), // Add time (HH:mm format)
        };
        dummyPosts.push(post);
    }
  
    return dummyPosts;
}
