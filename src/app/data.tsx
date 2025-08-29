const linkImageDir = '/nav';

export const links = [
  {
    title: '홈',
    href: '/',
    src: `${linkImageDir}/windows-logo-without-text.png`,
  },
  { title: '프로젝트', href: '/project', src: `${linkImageDir}/builder.png` },
  { title: '성전', href: '/shrine', src: `${linkImageDir}/earth-rating.png` },
  {
    title: '갤러리',
    href: '/gallery',
    src: `${linkImageDir}/drawing-green-picture.png`,
  },
] as const;
