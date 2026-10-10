# GitHub Pages 도메인 연결

저장소: https://github.com/ekyuho/connectware

GitHub Pages: main 브랜치 / 루트, 기본 도메인 www.connectware.kr.

Cloudflare에서 connectware.kr → DNS → Records에 아래 레코드를 추가합니다. Proxy status는 DNS only로 설정합니다.

| 유형 | 이름 | 값 |
| --- | --- | --- |
| CNAME | www | ekyuho.github.io |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

TTL은 Auto. 이메일용 MX/TXT 레코드는 유지합니다. 동일 웹 호스트의 충돌하는 A/AAAA/CNAME은 확인 후 조정합니다.

DNS 전파 후 GitHub Settings → Pages에서 DNS check 및 인증서 발급을 확인하고 Enforce HTTPS를 활성화합니다. connectware.kr은 www.connectware.kr로 자동 리디렉션됩니다.

공식 안내: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
