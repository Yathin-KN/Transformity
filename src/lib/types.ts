export interface Event  {
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

export interface Post {
  title: string;
  desc: string;
  photo: string | null;
  username: string;
  categories: string[];
  date:string;
  time:string;
  avatar:string;
}

export type BlogItem = 
  | { type: 'Title'; content: string }
  | { type: 'Subtitle'; content: string }
  | { type: 'Description'; content: string }
  | { 
      type: 'Blog Info'; 
      content: {
        date: string;
        time: string;
        categories: string[];
        author: {
          name: string;
          avatarUrl: string;
        };
        imageUrl: string;
      }
    }
  | { 
      type: 'Image'; 
      content: {
        imageUrl: string;
        imageCaption: string;
      }
    }
  | { 
      type: 'Video'; 
      content: {
        videoUrl: string;
        videoCaption: string;
      }
 };


export interface BlogItemProps {
  item: BlogItem;
  handlers?: {
    onChangeHandler: (title: string) => void;
    onChangeImageUrl?:(imgUrl:string) =>void;
    onChangeVideoUrl?:(videoUrl:string)=>void;
  };
}


