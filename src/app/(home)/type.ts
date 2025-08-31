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
    unoptimized: boolean;
  };
  github: string;
  email: string;
  phone: string;
  address: string;
};

export type TechStackGroup = {
  category: string;
  items: TechStackItem[];
};

export type TechStackItem = {
  name: string;
  src: string;
};
