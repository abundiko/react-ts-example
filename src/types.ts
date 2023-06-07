export type ServiceDataType = {
  title: string;
  body: string;
  icon: string;
};

export type NavContextType = {
  ref: React.RefObject<HTMLDivElement> | null;
  show: () => void;
  hide: () => void;
};

export type WhyChooseUsCardPropType = {
  reversed: boolean;
  title: string;
  subTitle: string;
  img: string;
};
