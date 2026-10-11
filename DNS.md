# GitHub Pages / Cloudflare 도메인 설정

저장소: https://github.com/ekyuho/connectware
GitHub Pages 기본 도메인: www.connectware.kr. Enforce HTTPS 활성화.

| 호스트 | 유형 | 대상 | 프록시 |
| --- | --- | --- | --- |
| connectware.kr | A | 185.199.111.153 | Proxied |
| www.connectware.kr | CNAME | ekyuho.github.io | Proxied |
| 9000.connectware.kr | CNAME | bus-three-roan.vercel.app | Proxied |
| direct.connectware.kr | A | 185.199.111.153 (현재 GitHub Pages IP) | DNS only |
| mqtt.connectware.kr | CNAME | a.hyodolms.com | DNS only |

`direct`는 아직 SSH/MQTT 서버를 가리키지 않습니다. 실제 서버 주소 확인 후 교체해야 합니다.
이메일 MX/TXT, DKIM 및 Brevo의 img/r 레코드는 DNS only로 유지합니다.

Cloudflare Redirect Rule: `*://connectware.kr/*` → `https://www.connectware.kr/${2}`, 301, 쿼리 문자열 유지.
SSL/TLS는 기존 Automatic / Full 모드를 유지합니다.

Web Analytics는 Cloudflare 자동 JS 삽입(Enable)으로 설정했습니다. index.html의 수동 beacon은 제거하여 중복 삽입을 피합니다. 프록시 요청 통계와 JS 기반 방문자/성능 통계는 서로 다릅니다.
