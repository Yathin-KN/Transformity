import { faker } from '@faker-js/faker';

interface Event {
  title: string;
  desc: string;
  photo?: string;
  username: string;
  categories?: string[];
  eventDate: Date;
  eventTime: string;
  eventLocation: string;
  eventDescription: string;
}

const generateRandomEvents = (count: number): Event[] => {
  const events: Event[] = [];

  for (let i = 0; i < count; i++) {
    const event: Event = {
      title: faker.lorem.words(),
      desc: faker.lorem.paragraph({
        min:70,
        max:100
      }),
      photo: faker.image.url(),
      username: faker.internet.userName(),
      categories:faker.word.words({
        count:{
            min:2,
            max:4
        }
      }).split(" "),
      eventDate: faker.date.future(),
      eventTime: faker.date.anytime().toDateString(),
      eventLocation: faker.location.city(),
      eventDescription: faker.lorem.paragraph(),
    };

    events.push(event);
  }

  return events;
};

export default generateRandomEvents;
