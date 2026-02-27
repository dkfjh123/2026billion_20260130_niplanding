https://shogunpizza.com/


# 히어로 화면 

1. 핵심 시각 효과: WebGL Displacement Transition
영상에서 이미지가 전환될 때 단순히 옆으로 넘어가거나 페이드인/아웃 되는 것이 아니라, 화면의 공간이 액체처럼 물결치듯 왜곡되며 다음 이미지가 나타납니다.

기술 배경: 이는 CSS만으로는 구현이 불가능하며, WebGL과 **GLSL(OpenGL Shading Language)**을 사용한 전형적인 Displacement Mapping(변위 매핑) 효과입니다.

작동 원리: <canvas> 요소 위에 두 개의 이미지 텍스처(현재 슬라이드, 다음 슬라이드)와 왜곡 패턴의 기준이 되는 흑백 이미지(Displacement Map)를 로드합니다. 사용자의 액션이 발생하면 Fragment Shader를 이용해 픽셀 데이터를 수학적으로 섞고 재배치하여 부드러운 모핑(Morphing) 효과를 렌더링합니다.

2. 레이아웃 및 렌더링 구조 (Layout & DOM Structure)
Full-viewport Canvas: 이미지 슬라이더 역할을 하는 <canvas>가 100vw, 100vh 크기로 배경 전체를 덮고 있습니다.

고정된 오버레이 UI (Absolute/Fixed Positioning): 중앙의 굵은 세리프(Serif) 폰트 타이포그래피("SHOGUN PIZZA")와 하단의 페이지네이션(Dots)은 Canvas 렌더링과는 독립적인 일반 HTML DOM 요소입니다. position: absolute와 높은 z-index를 사용하여 Canvas 레이어 위에 띄워두었습니다.

가독성 최적화: 다채로운 배경 이미지 위에서도 텍스트가 명확히 보이도록 미세한 text-shadow를 주거나, 폰트 자체의 대비를 강하게 설정하여 가독성을 확보했습니다.

3. 인터랙션 및 애니메이션 제어 (Interaction & Animation Loop)
상태 트리거 (State Trigger): 하단 Dot 클릭이나 마우스/터치 드래그(Swipe) 이벤트 리스너가 다음 슬라이드 인덱스를 결정합니다.

보간 애니메이션 (Interpolation): 상태가 변경되면 셰이더의 진행도(Progress 값, 보통 0.0에서 1.0)를 업데이트합니다. 이때 딱딱하게 끊기지 않도록 requestAnimationFrame과 이징(Easing) 함수를 결합해 프레임 단위로 부드럽게 화면을 갱신합니다.

🛠️ 구현을 위한 추천 기술 스택
이러한 효과를 직접 개발하신다면 다음 라이브러리들을 조합하는 것이 가장 효율적입니다.

Three.js 또는 PixiJS: WebGL 파이프라인과 셰이더를 쉽게 다루기 위한 필수 렌더링 라이브러리입니다. (WebGL 전용인 Curtains.js를 사용하면 DOM 이미지와 Canvas를 동기화하기 더 수월합니다.)

GSAP (GreenSock): 트랜지션이 일어날 때 셰이더의 Progress 값을 정밀하고 탄력적으로 컨트롤(Tweening)하기 위한 강력한 애니메이션 라이브러리입니다.

기존 오픈소스 활용: GitHub에서 webgl displacement transition이라고 검색하시면 이를 쉽게 구현할 수 있는 래퍼(Wrapper) 라이브러리(예: hover-effect)들을 많이 찾을 수 있습니다.

