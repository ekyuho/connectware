# Connectware Lab

주식회사 커넥트웨어 소개 사이트. 설치할 외부 npm 의존성 없는 정적 HTML/CSS/JavaScript입니다.

## 로컬 확인

`npm run dev` 실행 후 http://127.0.0.1:3000 접속.

## Vercel 배포

이 폴더를 GitHub 저장소에 업로드한 후 Vercel에서 Import Project를 선택합니다. Framework Preset은 Other, Build Command는 `npm run build`, Output Directory는 `dist`입니다. 포함된 vercel.json에 동일한 설정이 있습니다. Vercel CLI를 이미 사용 중이면 이 폴더에서 `vercel`로 프리뷰, `vercel --prod`로 운영 배포할 수 있습니다.

## 콘텐츠 근거와 보완 항목

- Valve God: https://www.slideshare.net/KyuhoKim/20150122-valve-god (김규호, 2015.01.22). Raspberry Pi/Node.js 난방 밸브 제어 사례. 사이트는 역사적 프로젝트 소개이며 현재 판매 사양이나 절감률을 주장하지 않습니다.
- 디지털 미술펜: 사용자 제공 제작 사례. 태블릿 펜 모션 센서 데이터 수집·행동 분석 스타트업을 위해 PCB, Android 앱, 서비스 웹까지 구현했으며 어르신 치매 관련 행동 분석에 활용되고 있습니다. 임상 진단이나 효과에 관한 주장은 하지 않습니다. 웹 캔버스 시연은 제거했습니다.
- 회사 소개 문구는 홈페이지용 편집 제안입니다. 사업자번호, 주소, 대표자는 제공되지 않아 넣지 않았습니다. 문의 섹션은 사용자 제공 공식 이메일 ekyuho@connectware.kr로 연결합니다.
- Valve God 사진은 사용자가 제공한 실제 제작 사진입니다. 메인 비주얼은 CSS 개념 일러스트입니다.
- 글꼴은 Google Fonts를 사용하며 연결되지 않을 경우 시스템 글꼴로 표시됩니다.

프로젝트는 직접 제작한 탐구 경험 중심으로 소개하며 세부 구현 사양은 최소화하고, Valve God 원전 SlideShare 링크를 제공합니다.

Make it 전시 정보: https://sema.seoul.go.kr/kr/whatson/exhibition/detail?exNo=526 (서울시립 북서울미술관, 2017.10.24–12.25). 사용자 제공 관련 블로그: https://blog.naver.com/yunhe303/221145979016 . 블로그 본문은 접근 제한으로 확인하지 못했으므로 작품명, 출품 형태 등 구체적인 전시 참여 내용은 기재하지 않았습니다.
