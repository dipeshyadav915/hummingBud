export type startupCardType = {
  _id: number;
  _created_at: string;
  views: number;
  author: {
    _id: number;
    name: string;
    image: string;
    bio: string;
    social?: {
      twitter?:string;
      instagram?:string;
      linkedin?:string;
    };
  };
  title: string;
  description: string;
  category: string;
  image: string;
  detail: string;
};
