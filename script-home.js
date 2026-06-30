/**
 * @file script-home.js
 * @description 테스트 포털 홈 화면 전용 스크립트입니다.
 * 각 테스트 카드를 개별 HTML 페이지로 연결되는 <a> 링크로 렌더링합니다.
 * 이 방식은 구글 봇이 각 페이지를 독립적으로 크롤링할 수 있도록 합니다.
 */

// ============================================================
// 1. 다국어 사전 (홈 화면에 필요한 텍스트만 포함)
// ============================================================
const i18nDict = {
  ko: {
    portal_badge: "글로벌 성향 & 심리 테스트",
    portal_title: "내 안의 숨겨진 성향<br><span class=\"highlight\">테스트 포털</span>",
    portal_subtitle: "나의 소울 국가 매칭부터 전생 위인 분석, 개성 만점 MBTI 테스트까지 한 곳에서 즐겨보세요!",
    portal_footer: "© 2026 테스트 연구소. All rights reserved."
  },
  en: {
    portal_badge: "Global Persona & Mind Tests",
    portal_title: "Uncover Your Self<br><span class=\"highlight\">Test Portal</span>",
    portal_subtitle: "From matching your soul country to discovering your past life and personality character tests!",
    portal_footer: "© 2026 Test Lab. All rights reserved."
  }
};

// ============================================================
// 2. 각 테스트 ID → 개별 HTML 파일 URL 매핑표
//    이 매핑 덕분에 구글 봇이 각 페이지를 개별 URL로 수집합니다.
// ============================================================
const testPageUrls = {
  'parenting-style': 'parenting-style.html',
  'soul-country':    'soul-country.html',
  'past-life':       'past-life.html',
  'mbti-test':       'mbti-test.html'
};

// ============================================================
// 3. 상태 변수
// ============================================================
let currentLang = 'ko'; // 기본 언어

// ============================================================
// 4. 브라우저 언어 자동 감지
// ============================================================
function detectLanguage() {
  const lang = navigator.language || navigator.userLanguage || 'ko';
  // 브라우저 언어가 'ko'로 시작하면 한국어, 그 외는 영어
  currentLang = lang.startsWith('ko') ? 'ko' : 'en';
}

// ============================================================
// 5. 정적 UI 텍스트 번역 (data-i18n 속성을 가진 요소들 처리)
// ============================================================
function translateStaticUI() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = i18nDict[currentLang][key];
    if (!text) return;

    // HTML 태그가 포함된 텍스트는 innerHTML로, 그 외는 textContent로 처리
    if (text.includes('<') && text.includes('>')) {
      el.innerHTML = text;
    } else {
      el.textContent = text;
    }
  });
}

// ============================================================
// 6. 포털 홈 테스트 카드 렌더링
//    핵심 변경점: 클릭 이벤트 대신 <a href> 링크 태그를 사용하여
//    구글 봇이 각 테스트 페이지의 URL을 직접 발견하고 크롤링할 수 있게 합니다.
// ============================================================
function renderPortalHome() {
  const container = document.getElementById('test-list-container');
  if (!container) return;

  container.innerHTML = ''; // 기존 카드 초기화

  // tests-registry.js에서 정의한 testsRegistry 객체를 순회
  for (const testKey in testsRegistry) {
    const test = testsRegistry[testKey];
    const pageUrl = testPageUrls[testKey]; // 해당 테스트의 HTML 파일 경로

    let card;

    if (test.status === 'ready' || !pageUrl) {
      // '준비 중' 상태 테스트: 링크 없는 일반 div 카드
      card = document.createElement('div');
      card.className = 'test-card ready';
    } else {
      // 활성 테스트: <a> 태그로 만들어 구글 봇이 링크를 탐색할 수 있게 함
      card = document.createElement('a');
      card.href = pageUrl;          // 개별 테스트 페이지로 연결
      card.className = 'test-card'; // 기존 카드 스타일 그대로 적용
      card.style.textDecoration = 'none'; // 링크 밑줄 제거
      card.style.color = 'inherit';       // 링크 기본 파란색 제거
      card.style.display = 'block';       // 블록 요소로 표시
    }

    // 카드 내부 HTML (아이콘 + 제목 + 설명)
    card.innerHTML = `
      <div class="test-icon-wrapper">${test.icon}</div>
      <div class="test-info">
        <h3>${test.title[currentLang]}</h3>
        <p>${test.description[currentLang]}</p>
        ${test.status === 'ready' ? `<span class="badge-ready">${currentLang === 'ko' ? '준비 중' : 'Coming Soon'}</span>` : ''}
      </div>
    `;

    container.appendChild(card);
  }
}

// ============================================================
// 7. 정책 약관 모달 데이터 및 작동 로직
// ============================================================
const policyContent = {
  privacy: {
    title: { ko: "개인정보 처리방침 (Privacy Policy)", en: "Privacy Policy" },
    body: {
      ko: `
        <h4>1. 수집하는 개인정보 항목 및 수집 방법</h4>
        <p>본 웹사이트는 사용자의 이름, 비밀번호 등의 민감한 개인식별정보를 직접 수집하거나 데이터베이스에 저장하지 않습니다. 다만, 서비스 통계 분석 및 맞춤형 광고 게재를 위해 쿠키(Cookie) 정보와 IP 주소, 브라우저 환경 정보 등이 자동으로 수집될 수 있습니다.</p>
        <h4>2. 쿠키(Cookie) 및 구글 애드센스 광고 정책 고지</h4>
        <p>본 웹사이트는 구글(Google Inc.)이 제공하는 구글 애드센스(Google AdSense)를 이용할 수 있습니다. 구글은 사용자 방문 기록을 바탕으로 맞춤형 광고를 위해 쿠키(DoubleClick Cookie 등)를 수집 및 사용합니다.</p>
        <p>사용자는 구글 광고 설정 페이지(https://adssettings.google.com)를 통해 맞춤형 광고 쿠키를 거부할 수 있습니다.</p>
        <h4>3. 개인정보 제3자 제공 및 위탁</h4>
        <p>수집된 비식별화 통계 정보는 광고 서빙 목적 외에는 제3자에게 제공되거나 판매되지 않습니다.</p>
        <h4>4. 정보주체의 권리 및 연락처</h4>
        <p>문의 사항은 prosum87@gmail.com으로 연락해 주시면 영업일 기준 3일 이내에 조치해 드립니다.</p>
      `,
      en: `
        <h4>1. Information Collected</h4>
        <p>This website does not collect personal identification information. However, cookie IDs, IP addresses, and browser details may be processed to serve advertisements.</p>
        <h4>2. Google AdSense Cookie Notice</h4>
        <p>This website uses Google AdSense. Google uses cookies (such as DoubleClick cookies) to serve ads based on your visits. Opt out at https://adssettings.google.com.</p>
        <h4>3. Third-Party Sharing</h4>
        <p>We do not sell non-personal statistic data to third parties.</p>
        <h4>4. Contact</h4>
        <p>For inquiries, contact: prosum87@gmail.com</p>
      `
    }
  },
  terms: {
    title: { ko: "이용 약관 (Terms of Service)", en: "Terms of Service" },
    body: {
      ko: `
        <h4>1. 목적 및 약관의 효력</h4>
        <p>본 이용 약관은 테스트 연구소 포털이 제공하는 심리 성향 진단 서비스 이용 시 이용자의 권리와 의무를 규정합니다. 본 사이트에 접속하여 진단 서비스를 시작하는 것은 본 약관에 동의한 것으로 간주합니다.</p>
        <h4>2. 서비스 제공 및 면책</h4>
        <p>본 사이트의 테스트 결과는 오락 및 참조 목적이며, 전문적인 심리 진단이나 의학적 자문을 대체하지 않습니다.</p>
        <h4>3. 저작권 고지</h4>
        <p>본 웹사이트의 콘텐츠 저작권은 테스트 연구소에 귀속됩니다. 무단 복제, 배포를 금지합니다.</p>
      `,
      en: `
        <h4>1. Acceptance of Terms</h4>
        <p>By using this site, you agree to these terms. Initiating any test represents acceptance.</p>
        <h4>2. Limitation of Services</h4>
        <p>All test results are for recreational and educational reference only and cannot replace clinical advice.</p>
        <h4>3. Intellectual Property</h4>
        <p>All content is property of Test Lab. Unauthorized reproduction is prohibited.</p>
      `
    }
  },
  disclaimer: {
    title: { ko: "사이트 면책 조항 (Disclaimer)", en: "Disclaimer" },
    body: {
      ko: `
        <h4>1. 법적 한계 및 정보의 타당성 고지</h4>
        <p>본 사이트의 모든 테스트 결과는 설문 가중치 알고리즘에 따른 오락 목적의 가이드입니다. 당사는 이를 신뢰함으로써 발생한 어떠한 손해에도 법적 책임을 지지 않습니다.</p>
        <h4>2. 제3자 광고 및 외부 링크 책임</h4>
        <p>본 사이트의 광고 배너 또는 외부 링크를 통해 접속한 사이트의 서비스에 대해 당사는 책임을 지지 않습니다.</p>
      `,
      en: `
        <h4>1. Non-Liability</h4>
        <p>All test reports are for casual interest only. We disclaim all liabilities for damages resulting from use of our services.</p>
        <h4>2. Third-Party Advertisements</h4>
        <p>This portal bears no responsibility for the contents of third-party advertisements or external domains.</p>
      `
    }
  }
};

// 모달 열기
function openPolicyModal(type) {
  const modal = document.getElementById('policy-modal');
  const titleEl = document.getElementById('modal-title');
  const bodyEl = document.getElementById('modal-body');
  if (!policyContent[type]) return;
  titleEl.textContent = policyContent[type].title[currentLang];
  bodyEl.innerHTML = policyContent[type].body[currentLang];
  modal.classList.add('active');
}

// 모달 닫기
function closePolicyModal() {
  document.getElementById('policy-modal').classList.remove('active');
}

// ============================================================
// 8. 초기화 실행 (페이지 로드 시 자동 실행)
// ============================================================
detectLanguage();       // 브라우저 언어 감지
translateStaticUI();    // 정적 UI 번역 적용
renderPortalHome();     // 테스트 카드 목록 렌더링

// 정책 모달 버튼 이벤트 연결
const linkPrivacy    = document.getElementById('link-privacy');
const linkTerms      = document.getElementById('link-terms');
const linkDisclaimer = document.getElementById('link-disclaimer');
const closeModalBtn  = document.getElementById('close-modal');
const policyModal    = document.getElementById('policy-modal');

if (linkPrivacy)    linkPrivacy.addEventListener('click',    (e) => { e.preventDefault(); openPolicyModal('privacy'); });
if (linkTerms)      linkTerms.addEventListener('click',      (e) => { e.preventDefault(); openPolicyModal('terms'); });
if (linkDisclaimer) linkDisclaimer.addEventListener('click', (e) => { e.preventDefault(); openPolicyModal('disclaimer'); });
if (closeModalBtn)  closeModalBtn.addEventListener('click', closePolicyModal);
if (policyModal)    policyModal.addEventListener('click', (e) => { if (e.target === policyModal) closePolicyModal(); });
