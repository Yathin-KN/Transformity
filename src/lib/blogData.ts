import { faker } from '@faker-js/faker';

function generateTitle() {
  return {
    type: 'Title',
    content: faker.lorem.words(),
  };
}

function generateSubtitle() {
  return {
    type: 'Subtitle',
    content: faker.lorem.sentence({
      min:5,
      max:10
    }),
  };
}

function generateDescription() {
  return {
    type: 'Description',
    content: faker.lorem.paragraphs(Math.floor(Math.random() * 10) + 1),
  };
}

function generateBlogInfo() {
  return {
    type: 'Blog Info',
    content: {
      date: faker.date.past().toString().substring(0,10),
      time: faker.date.past().toString(),
      categories: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
      author: {
        name: faker.person.fullName(),
        avatarUrl: faker.image.avatar(),
      },
      imageUrl: faker.image.avatar(),
    },
  };
}

function generateImage() {
  return {
    type: 'Image',
    content: {
      imageUrl: faker.image.url(),
      imageCaption: faker.lorem.sentence(),
    },
  };
}

function generateVideo() {
  return {
    type: 'Video',
    content: {
      videoUrl: faker.internet.url(),
      videoCaption: faker.lorem.sentence(),
    },
  };
}

export function generateBlogArray() {
  const additionalItems = [
    generateDescription(),
    generateImage(),
    generateDescription(),
    generateVideo(),
    generateDescription(),
    generateVideo(),
    generateDescription(),
  ].sort(() => Math.random() - 0.5).slice(0, Math.floor(Math.random() * 5) + 4);

  return {
    blogInfo:generateBlogInfo(),
    content:[generateTitle(), generateImage(), generateSubtitle()  ,  ...additionalItems]
  };
}
