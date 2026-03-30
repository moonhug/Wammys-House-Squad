# Junior Contributor README

이 문서는 Wammy's House Squad에 처음 기여하는 주니어를 위한 안내서다.

대상:

- Git은 어느 정도 알지만 `Node.js`, `npm`, `Astro`는 처음인 사람
- Markdown 글은 써봤지만 `MDX`나 템플릿 기반 글쓰기는 처음인 사람
- macOS와 Windows PowerShell 환경에서 직접 글을 확인하고 배포 흐름까지 이해하고 싶은 사람

이 문서의 목표는 하나다.

- "내가 쓴 글이 어떤 과정을 거쳐 실제 블로그에 올라가는지"를 처음부터 끝까지 이해하게 돕는 것

## 1. 먼저, 이 프로젝트가 뭔지

Wammy's House Squad는 `Astro` 기반의 파일형 블로그다.

이 말은 다음 뜻이다.

- 글은 데이터베이스에 저장되지 않는다.
- 글은 CMS에서 작성하지 않는다.
- 글은 저장소 안의 파일로 관리된다.
- 보통 `index.md` 또는 `index.mdx` 파일 하나가 글 본문이 된다.
- GitHub에 push된 뒤, GitHub Actions가 사이트를 다시 빌드하고 GitHub Pages가 실제 사이트에 배포한다.

즉, 이 프로젝트는 "파일을 쓰고, 확인하고, push하면 사이트에 반영되는 구조"다.

## 2. 중요한 단어 먼저 정리

처음 보면 헷갈릴 수 있는 단어를 먼저 짧게 설명한다.

### Git

파일 변경 이력을 관리하는 도구다.

예를 들어:

- 글을 추가했다
- 문장을 수정했다
- 이미지를 바꿨다

이런 변경사항을 기록하고 공유할 수 있다.

### GitHub

Git 저장소를 인터넷에 올려 관리하는 서비스다.

우리 팀은 이 저장소를 GitHub에 올려두고 같이 작업한다.

### Repository

프로젝트 폴더 전체를 뜻한다.

이 블로그 전체가 하나의 repository다.

### Commit

변경사항을 "하나의 기록"으로 저장하는 것이다.

예:

- `Add Mabinogi quest note`
- `Fix typo in About page`

### Push

내 컴퓨터에 있는 commit을 GitHub 원격 저장소로 올리는 것이다.

### Pull Request

내 브랜치의 변경사항을 `main`에 합쳐달라고 요청하는 절차다.

팀 작업에서는 보통 이 방법을 권장한다.

### Node.js

브라우저 밖에서 JavaScript를 실행하게 해주는 런타임이다.

이 프로젝트에서는 Astro 개발 서버를 실행하고, 패키지를 설치하고, 빌드를 만드는 데 필요하다.

### npm

Node.js와 함께 쓰는 패키지 매니저다.

우리가 자주 쓰는 명령:

- `npm install`
- `npm run dev`
- `npm run build`

### Astro

이 블로그를 만드는 프레임워크다.

Astro가 맡는 일:

- 페이지 라우팅
- Markdown/MDX 렌더링
- 정적 사이트 빌드
- 컴포넌트와 레이아웃 결합

### Markdown (`.md`)

텍스트 중심으로 글을 쓰는 가장 기본 형식이다.

제목, 문단, 리스트, 이미지 정도를 간단히 다루기 좋다.

### MDX (`.mdx`)

Markdown에 컴포넌트를 섞어 쓸 수 있는 형식이다.

예:

- 캡션이 있는 이미지
- 콜아웃 박스
- 템플릿 기반 글

### GitHub Actions

GitHub에서 자동으로 실행되는 작업이다.

이 프로젝트에서는 push나 merge 후에 사이트를 다시 빌드하고 배포하는 일을 한다.

### GitHub Pages

GitHub가 정적 사이트를 실제 웹페이지로 올려주는 기능이다.

이 블로그는 최종적으로 GitHub Pages를 통해 공개된다.

## 3. 내 글이 배포되는 전체 흐름

아래 순서대로 생각하면 된다.

1. 내 컴퓨터에서 글 파일을 만든다.
2. 로컬 개발 서버에서 미리 본다.
3. Git으로 변경사항을 commit한다.
4. GitHub로 push한다.
5. Pull Request를 열거나 `main`에 반영한다.
6. GitHub Actions가 자동으로 사이트를 build한다.
7. GitHub Pages가 사이트를 다시 배포한다.
8. 실제 주소에서 내 글이 보인다.

한 줄 요약:

`파일 작성 -> 로컬 확인 -> commit -> push -> GitHub Actions build -> GitHub Pages deploy`

## 4. 사전 준비물

각자 아래 항목이 준비되어 있어야 한다.

- GitHub 계정
- Git 설치
- Node.js 설치
- 코드 에디터
- 터미널

추천 에디터:

- VS Code

추천 터미널:

- macOS: `Terminal` 또는 `iTerm2`
- Windows: `PowerShell`

## 5. Node.js 버전

Astro 공식 문서 기준으로, Astro는 짝수 번호 Node.js를 지원하며 현재 최소 지원 버전은 `v22.12.0`이다. 가능하면 최신 `Node.js 22 LTS`를 쓰는 것을 권장한다.

공식 문서:

- [Astro - Prepare your dev environment](https://docs.astro.build/en/tutorial/1-setup/1/)
- [Astro - Install and set up Astro](https://docs.astro.build/en/getting-started/)

## 6. macOS Apple Silicon에서 시작하기

### 6-1. Node.js 설치

가장 쉬운 방법은 공식 설치 파일을 사용하는 것이다.

1. [Node.js Download](https://nodejs.org/en/download/) 페이지에 들어간다.
2. `Node.js 22 LTS`를 설치한다.
3. 설치가 끝나면 터미널을 새로 연다.

### 6-2. 설치 확인

터미널에서 아래를 실행한다.

```bash
node -v
npm -v
git --version
```

정상이라면:

- `node -v`는 `v22...`
- `npm -v`는 숫자 버전
- `git --version`도 숫자 버전

### 6-3. 저장소 받기

```bash
git clone https://github.com/moonhug/Wammys-House-Squad.git
cd Wammys-House-Squad
```

### 6-4. 패키지 설치

```bash
npm install
```

### 6-5. 개발 서버 실행

```bash
npm run dev
```

브라우저에서:

```text
http://localhost:4321
```

열면 된다.

### 6-6. 만약 macOS에서 Node 경로 충돌이 나면

특정 맥 환경에서는 Homebrew Node와 공식 설치 Node가 충돌할 수 있다.

그럴 땐 아래처럼 실행한다.

```bash
PATH=/usr/local/bin:/opt/homebrew/bin:$PATH npm run dev
```

같은 방식으로 설치나 빌드도 가능하다.

```bash
PATH=/usr/local/bin:/opt/homebrew/bin:$PATH npm install
PATH=/usr/local/bin:/opt/homebrew/bin:$PATH npm run build
```

## 7. Windows PowerShell에서 시작하기

### 7-1. Node.js 설치

1. [Node.js Download](https://nodejs.org/en/download/) 페이지에 들어간다.
2. `Node.js 22 LTS` Windows 설치 파일을 받는다.
3. 설치 마법사를 끝까지 진행한다.
4. PowerShell을 새로 연다.

### 7-2. 설치 확인

PowerShell에서 아래를 실행한다.

```powershell
node -v
npm -v
git --version
```

### 7-3. 저장소 받기

```powershell
git clone https://github.com/moonhug/Wammys-House-Squad.git
cd .\Wammys-House-Squad
```

### 7-4. 패키지 설치

```powershell
npm install
```

### 7-5. 개발 서버 실행

```powershell
npm run dev
```

브라우저에서:

```text
http://localhost:4321
```

을 열면 된다.

## 8. 프로젝트 폴더에서 꼭 알아둘 위치

중요한 폴더:

```text
src/content/posts/tech/
src/content/posts/game/
src/templates/
src/components/
docs/
```

의미:

- `src/content/posts/tech/`: 테크 글
- `src/content/posts/game/`: 게임 글
- `src/templates/`: MDX에서 쓰는 공유 글 템플릿
- `src/components/`: Figure, Callout 같은 재사용 컴포넌트
- `docs/`: 작성 가이드와 기술 명세

## 9. 어떤 형식으로 글을 써야 하나

### Markdown (`index.md`)을 쓰는 경우

이럴 때 추천:

- 일반 리뷰
- 짧은 회고
- 추천 글
- 간단한 기록형 글
- 구조가 단순한 글

### MDX (`index.mdx`)를 쓰는 경우

이럴 때 추천:

- 캡션이 있는 이미지가 필요하다
- 템플릿을 쓰고 싶다
- Callout, Figure, ProsCons 같은 컴포넌트를 쓰고 싶다
- 정보 구조를 조금 더 공들여 보여주고 싶다

### raw HTML 파일은 쓰나?

아니오.

이 프로젝트는 포스트별 독립 HTML 페이지를 직접 만드는 방식이 아니다.

우리가 말하는 "HTML-style"은:

- `MDX`
- 공유 템플릿
- 공유 컴포넌트

를 이용해서 본문을 더 풍부하게 만드는 방식을 뜻한다.

## 10. 새 아티클 만드는 순서

### 10-1. 섹션 먼저 결정

- `tech`
- `game`

둘 중 하나를 고른다.

### 10-2. 포스트 폴더 만들기

권장 형식:

```text
YYYY-MM-DD-short-kebab-slug
```

예:

```text
2026-04-01-mabinogi-quest-log
```

### 10-3. 글 파일 만들기

Markdown이면:

```text
index.md
```

HTML-style(MDX)면:

```text
index.mdx
```

### 10-4. 이미지 파일 같이 넣기

예:

```text
src/content/posts/game/2026-04-01-mabinogi-quest-log/
  index.md
  cover.png
  body-shot-01.png
  body-shot-02.png
```

### 10-5. 템플릿 복사

복사용 템플릿 파일:

- Markdown: `docs/templates/markdown-post-template.md`
- HTML-style(MDX): `docs/templates/html-style-post-template.mdx`

추천 방식:

1. 템플릿 파일을 열어서 복사한다.
2. 새 포스트 폴더의 `index.md` 또는 `index.mdx`에 붙여 넣는다.
3. frontmatter와 본문을 수정한다.

## 11. Frontmatter가 뭔가

파일 맨 위의 메타데이터 블록이다.

예:

```yaml
---
title: "마비노기 주간 기록"
description: "이번 주 플레이 메모와 관찰 포인트 정리."
pubDate: 2026-04-01
author: "Your Name"
section: "game"
tags:
  - mabinogi
  - weekly-log
draft: false
heroImage: ./cover.png
---
```

이 정보는:

- 포스트 제목
- 목록 설명
- 작성일
- 태그
- 대표 이미지

등으로 사용된다.

## 12. 이미지 넣는 법

### 12-1. Markdown에서 이미지

```md
![이미지 설명](./body-shot-01.png)
```

규칙:

- 이미지 파일은 같은 포스트 폴더에 둔다.
- 상대 경로 `./파일명`으로 쓴다.
- 가능하면 alt 텍스트를 꼭 적는다.

### 12-2. MDX에서 PNG/JPG/WEBP 이미지

```mdx
import screenshot from "./body-shot-01.png";
```

사용:

```mdx
<Figure
  src={screenshot}
  alt="게임 화면 예시"
  caption="이 장면에서 확인한 UI 배치."
/>
```

### 12-3. MDX에서 SVG 이미지

```mdx
import diagramUrl from "./diagram.svg?url";
```

사용:

```mdx
<Figure
  src={diagramUrl}
  alt="분석 흐름도"
  caption="SVG는 ?url 방식으로 import 한다."
/>
```

## 13. 글을 로컬에서 확인하는 방법

서버 실행:

macOS:

```bash
npm run dev
```

Windows PowerShell:

```powershell
npm run dev
```

접속 주소:

```text
http://localhost:4321
```

수정 후 확인:

- 파일 저장
- 브라우저 새로고침

보통은 서버 재시작 없이 바로 반영된다.

서버 종료:

- `Ctrl + C`

## 14. 내 글을 실제로 배포하는 방법

이 프로젝트는 GitHub Pages 자동 배포 구조다.

즉, 배포 명령을 사람이 매번 직접 칠 필요가 없다.

### 권장 흐름: 브랜치 + Pull Request

1. 새 브랜치 만들기

macOS / Windows 공통:

```bash
git checkout -b add/my-article
```

2. 글 작성 및 이미지 추가

3. 변경 확인

```bash
git status
```

4. 파일 스테이징

```bash
git add .
```

5. 커밋

```bash
git commit -m "Add Mabinogi weekly article"
```

6. 원격 브랜치로 push

```bash
git push -u origin add/my-article
```

7. GitHub에서 Pull Request 생성

8. 리뷰 후 `main`에 merge

9. merge되면 GitHub Actions가 자동으로 배포

### 팀 정책상 직접 main에 올리는 경우

```bash
git add .
git commit -m "Add article"
git push
```

이 경우 push 즉시 GitHub Actions가 실행되고 사이트가 다시 배포된다.

## 15. 배포가 실제로 되는 과정

이 부분은 꼭 이해해두면 좋다.

네가 `push`를 했다고 해서 브라우저 파일이 즉시 바뀌는 건 아니다.

중간에 자동 작업이 있다.

1. GitHub가 push를 받는다.
2. `.github/workflows/deploy.yml` 워크플로우가 실행된다.
3. Astro가 사이트를 다시 build한다.
4. build 결과가 GitHub Pages로 배포된다.
5. 몇십 초 후 실제 사이트에 반영된다.

확인 위치:

- GitHub 저장소의 `Actions` 탭

사이트 주소:

- [https://wammys.uk](https://wammys.uk)

## 16. 문제가 생겼을 때 가장 먼저 볼 것

### `npm install`이 안 된다

확인:

- `node -v`
- `npm -v`

Node가 너무 오래됐거나 설치가 꼬였을 수 있다.

### `npm run dev`가 안 된다

확인:

- 현재 폴더가 프로젝트 루트인지
- `node_modules`가 설치됐는지
- 터미널 에러 메시지에 경로 문제가 있는지

### 글은 썼는데 목록에 안 나온다

확인:

- `draft: false`인지
- `section`이 `tech` 또는 `game`인지
- frontmatter 형식이 깨지지 않았는지
- 파일명이 `index.md` 또는 `index.mdx`인지

### 이미지는 있는데 화면에 안 보인다

확인:

- 이미지 파일이 같은 포스트 폴더 안에 있는지
- 경로가 `./filename.png`인지
- SVG라면 `?url` import를 썼는지

### push는 했는데 사이트 반영이 안 된다

확인:

- GitHub `Actions` 탭에서 배포가 성공했는지
- 브라우저 캐시 문제인지 새로고침했는지
- 배포 후 1~2분 정도 기다렸는지

## 17. 이 문서와 같이 보면 좋은 문서

- 상세 작성 명세: `docs/post-authoring-spec.md`
- 기본 작성 가이드: `docs/writing-guide.md`
- HTML-style 템플릿 가이드: `docs/html-template-guide.md`
- 태그 규칙: `docs/tag-style-guide.md`
- Markdown 복사 템플릿: `docs/templates/markdown-post-template.md`
- HTML-style 복사 템플릿: `docs/templates/html-style-post-template.mdx`

## 18. 가장 짧은 실전 요약

정말 급할 때는 이 순서만 기억하면 된다.

1. 저장소 clone
2. `npm install`
3. `npm run dev`
4. `src/content/posts/tech/` 또는 `src/content/posts/game/`에 새 폴더 생성
5. `index.md` 또는 `index.mdx` 작성
6. 이미지 같은 폴더에 넣기
7. 로컬에서 확인
8. `git add .`
9. `git commit -m "Add article"`
10. `git push`
11. GitHub Actions가 자동 배포

이 문서 하나로 부족하면, 먼저 `docs/post-authoring-spec.md`를 읽고 시작하는 것을 권장한다.
