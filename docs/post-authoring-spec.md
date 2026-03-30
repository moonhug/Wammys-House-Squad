# Post Authoring Specification

이 문서는 Wammy's House Squad에서 아티클을 작성하는 기본 규칙과 템플릿 사용법을 정리한 기술 명세서다.

대상 독자:

- 처음 저장소에 글을 올리는 주니어
- Markdown은 익숙하지만 MDX나 Astro는 처음인 작성자
- 이미지, 템플릿, frontmatter 규칙을 한 번에 확인하고 싶은 작성자

## 1. 기본 원칙

이 저장소에서 지원하는 글 작성 방식은 크게 두 가지다.

1. `Markdown (.md)`
기본 작성 방식이다. 일반적인 리뷰, 회고, 분석 글, 추천 글, 짧은 기술 메모는 대부분 이 방식으로 작성한다.

2. `HTML-style article (.mdx)`
고급 작성 방식이다. 완전한 독립 HTML 페이지를 만드는 것이 아니라, 공유 레이아웃 안에서 더 풍부한 본문 구조를 쓰는 방식이다. 템플릿, 콜아웃, Figure, 정보 블록 등을 사용하고 싶을 때 선택한다.

중요:

- 이 프로젝트는 `raw HTML full page` 작성을 허용하지 않는다.
- 각 포스트가 자체적으로 헤더, 네비게이션, 사이드바, 푸터를 만들면 안 된다.
- 사이트 껍데기와 공통 UI는 항상 공유 레이아웃이 관리한다.

## 2. 디렉터리 규칙

모든 포스트는 아래 경로 중 하나에 들어간다.

- `src/content/posts/tech/`
- `src/content/posts/game/`

각 포스트는 반드시 자기 전용 폴더를 가져야 한다.

예시:

```text
src/content/posts/tech/2026-04-01-ai-prompt-notes/
  index.md
  cover.png
  body-shot-01.png

src/content/posts/game/2026-04-01-mabinogi-weekly-log/
  index.mdx
  cover.jpg
  field-map.png
  diagram.svg
```

폴더명 규칙:

- 권장 형식: `YYYY-MM-DD-short-kebab-slug`
- 예시: `2026-04-01-mabinogi-weekly-log`
- 이 폴더명이 최종 URL slug의 기준이 된다.

## 3. section 선택 규칙

`section` 필드는 반드시 아래 둘 중 하나만 사용한다.

- `tech`
- `game`

선택 기준:

- `tech`: 리버싱, 도구 분석, 디버깅, AI 활용, 분석 방법론, 개발/보안/툴링 관련 글
- `game`: 플레이 로그, 리뷰, 추천, 감상, 공략 메모, 게임 문화 관련 글

주의:

- `section`은 자유 입력이 아니다.
- `ai`, `review`, `mabinogi` 같은 값은 `section`이 아니라 `tags`로 들어가야 한다.

## 4. Frontmatter 명세

모든 포스트는 파일 맨 위에 frontmatter를 가져야 한다.

필수 필드:

| 필드 | 타입 | 설명 |
| --- | --- | --- |
| `title` | `string` | 글 제목 |
| `description` | `string` | 목록 페이지에 노출될 1문장 요약 |
| `pubDate` | `date` | 게시 날짜 |
| `author` | `string` | 작성자명 |
| `section` | `"tech" \| "game"` | 상위 분류 |
| `tags` | `string[]` | 자유 태그 목록 |
| `draft` | `boolean` | `true`면 일반 목록에서 숨김 |

선택 필드:

| 필드 | 타입 | 설명 |
| --- | --- | --- |
| `heroImage` | `string` | 포스트 상단 대표 이미지 |
| `updatedDate` | `date` | 수정일 |
| `series` | `string` | 시리즈명 |
| `featured` | `boolean` | 홈 featured 영역 노출 여부 |
| `readingTime` | `string` | 예: `5 min` |
| `template` | `string` | 템플릿 사용 시 식별자 |

기본 예시:

```yaml
---
title: "마비노기 주간 메모"
description: "이번 주 플레이에서 건진 장면과 메모를 정리한 기록."
pubDate: 2026-04-01
author: "Your Name"
section: "game"
tags:
  - mabinogi
  - weekly-log
  - korean
draft: false
heroImage: ./cover.png
updatedDate: 2026-04-01
readingTime: "4 min"
---
```

## 5. Markdown 포스트 작성 방식

기본 파일명:

- `index.md`

사용 권장 상황:

- 일반 리뷰
- 추천 글
- 회고 글
- 짧은 기술 메모
- 구조가 단순한 글

본문 작성 규칙:

- 제목은 frontmatter의 `title`이 담당하므로 본문 맨 위에 다시 `# 제목`을 쓰지 않아도 된다.
- 본문은 `##`, `###` 헤딩 기준으로 구획을 나누는 것을 권장한다.
- 리스트, 인용문, 코드블록, 일반 이미지 정도까지는 Markdown만으로 충분하다.

Markdown 본문 이미지 삽입:

```md
![이미지 설명](./body-shot-01.png)
```

설명:

- 이미지 파일은 반드시 같은 포스트 폴더 안에 둔다.
- 경로는 항상 `./파일명`처럼 상대 경로로 쓴다.
- `alt` 텍스트는 비워두지 않는 것을 권장한다.

대표 이미지:

```yaml
heroImage: ./cover.png
```

권장 파일명:

- `cover.png`
- `body-shot-01.png`
- `body-shot-02.png`
- `diagram-01.svg`

Markdown에서 이미지 캡션이 꼭 필요할 때:

- 단순한 캡션이면 이미지 아래 문단에 짧게 적는다.
- 구조화된 캡션이 필요하면 `MDX + Figure` 방식으로 전환한다.

## 6. HTML-style 포스트 작성 방식

이 프로젝트에서 말하는 `HTML-style`은 실제로는 `MDX`를 뜻한다.

기본 파일명:

- `index.mdx`

사용 권장 상황:

- 캡션이 있는 이미지가 필요할 때
- Callout 박스를 쓰고 싶을 때
- 템플릿 기반 구성으로 글을 정리하고 싶을 때
- 정보 블록이나 비교 블록이 필요할 때

중요한 규칙:

- `.html` 파일을 직접 만들지 않는다.
- 전체 페이지를 통째로 만드는 방식은 금지한다.
- 반드시 공유 템플릿과 공유 컴포넌트를 사용한다.

### 6-1. 사용 가능한 공유 템플릿

- `src/templates/ClassicArticleTemplate.astro`
- `src/templates/CasualArticleTemplate.astro`
- `src/templates/TechArticleTemplate.astro`

선택 기준:

- `ClassicArticleTemplate`: 전통적인 아티클, 메모, 요약형 글
- `CasualArticleTemplate`: 감상, 플레이 로그, 분위기 있는 게임 글
- `TechArticleTemplate`: 분석, 리버싱, AI/툴링, 체크리스트형 기술 글

### 6-2. 사용 가능한 대표 컴포넌트

- `Figure`: 캡션이 있는 이미지
- `Callout`: 강조 박스
- `ProsCons`: 장단점 정리
- `GameInfo`: 게임 정보 요약 박스

## 7. MDX 이미지 명세

MDX에서 이미지를 쓸 때는 파일 형식에 따라 방법이 다르다.

### 7-1. PNG, JPG, JPEG, WEBP

```mdx
import screenshot from "./body-shot-01.png";
```

사용:

```mdx
<Figure
  src={screenshot}
  alt="전투 UI가 보이는 플레이 장면"
  caption="이번 테스트에서 확인한 인벤토리와 HUD 배치."
/>
```

### 7-2. SVG

SVG는 URL로 가져와야 한다.

```mdx
import diagramUrl from "./diagram.svg?url";
```

사용:

```mdx
<Figure
  src={diagramUrl}
  alt="분석 흐름 다이어그램"
  caption="패킷 분석 흐름을 단순화한 도식."
/>
```

주의:

- SVG를 일반 import로 가져오면 컴포넌트로 해석될 수 있다.
- 따라서 `?url`을 붙이는 방식을 기본 규칙으로 사용한다.

## 8. 이미지 배치 규칙

이미지는 반드시 해당 포스트 폴더 안에 둔다.

권장 구조:

```text
src/content/posts/tech/2026-04-01-ai-prompt-notes/
  index.mdx
  cover.png
  body-shot-01.png
  body-shot-02.png
  diagram.svg
```

권장 규칙:

- 대표 이미지는 `cover`
- 본문 스크린샷은 `body-shot-01`, `body-shot-02`
- 도식류는 `diagram-01`, `diagram-02`
- 파일명은 소문자와 하이픈을 권장

비권장:

- 공백이 많은 파일명
- `스크린샷 1 최종진짜.png`
- 의미 없는 이름인 `image1.png`, `new.png`

## 9. 템플릿 선택 기준

### Markdown을 선택할 때

- 글 구조가 단순하다.
- 헤딩, 리스트, 일반 이미지 정도면 충분하다.
- 빠르게 올리는 기록성 글이다.

### HTML-style(MDX)를 선택할 때

- 정보 블록이 많다.
- Figure 캡션이 필요하다.
- Callout, Pros/Cons, GameInfo 같은 컴포넌트를 쓰고 싶다.
- 화면 구조를 조금 더 정리된 형태로 보여주고 싶다.

## 10. 작성 절차

실제 작업 순서는 아래처럼 진행한다.

1. 섹션을 먼저 정한다.
- `tech`인지 `game`인지 결정한다.

2. 포스트 폴더를 만든다.
- 예: `src/content/posts/game/2026-04-01-mabinogi-weekly-log/`

3. 이미지 파일을 먼저 넣는다.
- 예: `cover.png`, `body-shot-01.png`

4. 작성 형식을 정한다.
- 일반 글이면 `index.md`
- 템플릿형 글이면 `index.mdx`

5. frontmatter를 채운다.
- `title`, `description`, `pubDate`, `author`, `section`, `tags`, `draft`

6. 본문을 작성한다.
- Markdown 또는 MDX 규칙에 맞게 작성한다.

7. 로컬 미리보기로 확인한다.

```bash
cd /Users/dabinyim/Downloads/blog
PATH=/usr/local/bin:/opt/homebrew/bin:$PATH npm run dev
```

8. 브라우저에서 확인한다.

- 홈: `http://localhost:4321`
- tech 글: `http://localhost:4321/tech/...`
- game 글: `http://localhost:4321/game/...`

9. 문구, 이미지, 레이아웃을 점검한다.

- 제목이 너무 긴지
- 설명이 목록에서 자연스러운지
- 태그가 기존 규칙과 맞는지
- 이미지 alt/caption이 충분한지

10. Git으로 반영한다.

```bash
git add .
git commit -m "Add new article"
git push
```

## 11. 금지 사항

- 포스트 안에서 사이트 헤더를 다시 만드는 행위
- 포스트 안에서 자체 네비게이션을 만드는 행위
- 독립적인 전체 HTML 문서를 만드는 행위
- 다른 포스트 폴더에 이미지를 섞어 두는 행위
- `section`에 `tech`, `game` 외의 값을 넣는 행위

## 12. 추천 시작점

처음 쓰는 사람은 아래 파일부터 복사해서 시작하는 것을 권장한다.

- Markdown 기본 템플릿: `docs/templates/markdown-post-template.md`
- HTML-style 기본 템플릿: `docs/templates/html-style-post-template.mdx`

이 문서를 먼저 읽고, 그다음 템플릿 파일을 복사해서 새 포스트 폴더에 붙여 넣으면 가장 빠르다.
