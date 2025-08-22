## 25-08-22-금

- 라우트 설정
  - 폴더 구조 고민한 결과 colocation 방식으로 해보기로 결정
  - frontend-fundamentals.com 전부 읽어봄. 나중에 항목별로 리팩토링 실습해보기
- UI 기본 뼈대/컨셉 적용
  - tailwind 커스텀 클래스 설정해봤다
- not-found 페이지 설정
  - 일관된 레이아웃 유지 필요성을 배웠다

---

- 문제: next.js의 폴더 구조, 관리 방식으로 권장되거나 많이 사용되는 방식이 있는지?
- 고민한 지점/대안
  - (1) 공식: App Router 기반의 라우팅과 폴더 구조
    - 특징
      - 폴더가 곧 경로 `app/portfolio/page.tsx -> /portfolio`
      - 특수한 의미를 가진 파일 사용 `page.tsx`, `layout.tsx`
      - colocation
        ```
        /src/app/shrine/
        ├── page.tsx            # /shrine 경로의 메인 페이지 UI
        ├── _components/        # shrine에서만 사용하는 컴포넌트들 (앞에 _를 붙여 라우팅에서 제외)
        │   ├── ShrineCard.tsx
        │   └── ShrineList.tsx
        ├── _hooks/             # shrine에서만 사용하는 커스텀 훅
        │   └── useShrineData.ts
        ├── _actions/           # shrine에서만 사용하는 서버 액션 (Server Actions)
        │   └── fetchShrines.ts
        └── styles.css          # shrine에만 적용되는 스타일
        ```
    - 장점: 응집도 - 특정 기능과 관련된 코드가 모여있어 이해, 수정 쉬움
      - [토스 Frontend Fundamentals - 3. 응집도 - 함께 수정되는 파일을 같은 디렉토리에 두기](https://frontend-fundamentals.com/code-quality/code/examples/code-directory.html)
  - (2) app 하위에는 라우팅 관련 폴더, 파일만 두고 app, component, hook, type 같은 레벨로 폴더 나눠서 사용하는 방식
- 결정
  - colocation
  - 이유
    - 코드 간 의존 관계를 파악하기 쉬움
    - 특정 기능과 관련된 코드 삭제할 때 더이상 사용되지 않는, 누락 코드 발생 가능성 낮음
    - 유지보수 시 수정/영향 범위를 한 눈에 파악할 수 있음

---

- 문제: app/not-found가 app/layout의 영향을 받음
- 고민한 지점/대안
  - 영향을 안 받게 하는 법
  - 왜 영향을 안 받게 해야하지?
    - 레퍼런스 찾아보기 github, tailwind, vercel
      - 일관된 헤더, 푸터 및 레이아웃 적용하고 있음
- 결정
  - 영향을 받도록 그대로 둔다
  - 이유
    - 사용자 이탈 방지 / 이정표 역할을 함
    - 브랜드 경험 일관성 유지
