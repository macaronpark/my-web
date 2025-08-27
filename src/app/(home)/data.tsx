import { Introduction, TechStackItem, Welcome } from "@/app/(home)/type";

const DOMAIN = "suzypark.dev";

export const welcome = {
  title: `Welcome to ${DOMAIN}`,
  subTitle: `${DOMAIN}에 오신걸 환영합니다!`,
} satisfies Readonly<Welcome>;

export const introduction = {
  title: "프론트엔드 개발자 박수지🍉",
  subTitle: "~같이 일하는 경험이 쾌적한 사람~",
  description: "주도적! 적극적! 협조적! 평화적!",
  image: {
    src: "/polar-bear.webp",
    alt: "천천히 걸어오는 북극곰",
  },
  github: "https://github.com/macaronpark",
  gmail: process.env.NEXT_PUBLIC_MAIL_ADDRESS ?? "",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "",
  address: "대전광역시",
} satisfies Readonly<Introduction>;

const techStackImageDir = "/techstack";
export const techStack = [
  {
    category: "환경",
    items: [
      { name: "Next.js", src: `${techStackImageDir}/nextjs.svg` },
      { name: "Vite", src: `${techStackImageDir}/vite.svg` },
      { name: "TypeScript", src: `${techStackImageDir}/typescript.svg` },
      { name: "React", src: `${techStackImageDir}/react.svg` },
      { name: "Redux", src: `${techStackImageDir}/redux.svg` },
    ],
  },
  {
    category: "스타일링",
    items: [
      { name: "Tailwind", src: `${techStackImageDir}/tailwindcss.svg` },
      { name: "SCSS", src: `${techStackImageDir}/sass.svg` },
      { name: "Mui", src: `${techStackImageDir}/mui.svg` },
      { name: "Storybook", src: `${techStackImageDir}/storybook.svg` },
    ],
  },
  {
    category: "통신",
    items: [
      { name: "GraphQL", src: `${techStackImageDir}/graphql.svg` },
      { name: "Apollo Client", src: `${techStackImageDir}/apollo.svg` },
      { name: "Axios", src: `${techStackImageDir}/axios.svg` },
      { name: "TanStack Query", src: `${techStackImageDir}/tanstack-query.png` },
    ],
  },
  {
    category: "테스트",
    items: [
      { name: "Vitest", src: `${techStackImageDir}/vitest.svg` },
      { name: "RTL", src: `${techStackImageDir}/rtl.png` },
      { name: "MSW", src: `${techStackImageDir}/msw.svg` },
    ],
  },
  {
    category: "인프라/배포",
    items: [
      { name: "Vercel", src: `${techStackImageDir}/vercel.svg` },
      { name: "AWS", src: `${techStackImageDir}/aws.svg` },
      { name: "PWA", src: `${techStackImageDir}/pwa.svg` },
      { name: "Github Actions", src: `${techStackImageDir}/github-actions.svg` },
    ],
  },
  {
    category: "협업",
    items: [
      { name: "Slack", src: `${techStackImageDir}/slack.svg` },
      { name: "Figma", src: `${techStackImageDir}/figma.svg` },
      { name: "Notion", src: `${techStackImageDir}/notion.svg` },
    ],
  },
] satisfies Readonly<TechStackItem[]>;
