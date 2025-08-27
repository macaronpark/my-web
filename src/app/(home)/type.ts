export type Welcome = {
  title: string;
  subTitle: string;
};

export type Introduction = {
  title: string;
  subTitle: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  github: string;
  email: string;
  phone: string;
  address: string;
};

export type TechStackItem = {
  category: string;
  items: { name: string; src: string }[];
};
