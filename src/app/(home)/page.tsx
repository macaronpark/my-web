import { introduction, techStack, welcome } from './data';
import Welcome from './components/Welcome';
import Introduction from './components/Introduction';
import TechStack from './components/TechStack';

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-4 p-2">
      <Welcome contents={welcome} />
      <Introduction contents={introduction} />
      <TechStack contents={techStack} />
      🏗️🚧 홈 - 공사 중 🚧🏗️
      <div>경험</div>
      <div>프로젝트</div>
    </main>
  );
}
