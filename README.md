# SumStation-Copy

해당 프로젝트는 SumStation-Web-Fron에 대한 카피 버전입니다.

### 설정 및 컨벤션

#### npm

본 프로젝트는 `yarn`으로 관리합니다.  
https://github.com/facebook/create-react-app/issues/10219 를 참고하여 `package.json`에 `devDependencies`를 따로 두지 않습니다.

#### 상태 관리

`recoil`을 사용합니다.  
다음과 같이 작성합니다.

```typescript
import { atom } from 'recoil'

export const SpecificState = atom<string>({
  // state는 PascalCase
  key: 'specific-state', // key는 kebab-case
  default: 'defaultString'
})
```

#### Compnoent

컴포넌트는 함수형 컴포넌트를 사용합니다.  
`styled-components`를 사용합니다.  
다음과 같이 작성합니다.

```typescript
import styled from 'styled-components'

// Component는 PascalCase
const Title = styled.h1`
  font-weight: bold;
  font-size: 14px;
  line-height: 160%;
  color: #221e1f;
`

function Component() {
  // function 키워드로 통일
  return <Title>제목</Title>
}

export default Alert
```

style은 다음과 같은 순서로 작성하며 각 순서마다 개행을 추가합니다.

1. `position` 관련, `width`, `height`
2. `display` 관련, `padding`, `margin`
3. `font` 관련
4. `background` 관련
5. `border` 관련
6. 기타

### 실행 방법

1. prettier와 eslint를 설정합니다.

`vscode prettier eslint`라고 검색하여 vscode용 prettier, eslint를 적용합니다.  
extension을 설치해도 적용이 안된다면 'alt + shift + f', ctrl(cmd) + shift + p를 누른 후 'Format Document' 검색을 합니다.

2. 프로젝트 시작

```sh
yarn start
```

3. 프로젝트 빌드

```sh
yarn build
```
