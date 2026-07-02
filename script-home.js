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
    portal_title: "유형 검사 분석 포털",
    portal_subtitle: "나의 소울 국가 매칭부터 전생 위인 분석, 개성 만점 MBTI 테스트까지 한 곳에서 즐겨보세요!",
    portal_footer: "© 2026 테스트 연구소. All rights reserved.",
    update_notice: "📢 [정기 업데이트] 매월 1일, 15일 신규 유형 분석 및 심리 테스트 정기 업데이트 완료!",
    column_section_title: "🔍 성향 분석 및 유형 연구 칼럼",
    column_section_subtitle: "각 분야별 유형 분석에 따른 심리학적 연구 보고서와 실생활 가이드를 제공합니다.",
    column_1_title: "1. 부모의 양육 태도가 자녀 정서에 미치는 영향",
    column_1_body: "부모의 양육 태도는 자녀의 자아존중감과 정서 발달에 결정적인 이정표가 됩니다. 심리학자 바움린드(Diana Baumrind)의 연구에 따르면, 부모의 양육 방식은 통제(Demandingness)와 애정(Responsiveness)이라는 두 가지 축을 기준으로 크게 네 가지(권위가 있는 양육, 권위주의적 양육, 허용적 양육, 방임적 양육) 스타일로 나뉩니다. 첫째, '권위가 있는 양육(Authoritative)' 스타일은 자녀의 행동 기준을 합리적으로 통제하되, 애정과 지지를 아끼지 않는 가장 이상적인 방식입니다. 이러한 환경에서 자란 자녀는 자기 통제력이 높고 자아 성찰 능력이 뛰어난 독립적인 성격을 형성하게 됩니다. 둘째, 통제는 강하지만 따뜻함이 결여된 '권위주의적 양육(Authoritarian)'은 자녀에게 지나친 규칙 강요로 정서적 억압을 가져올 수 있어 주의가 요구됩니다. 셋째, 지지는 풍부하나 통제가 부족한 '허용적 양육(Permissive)'은 자녀의 창의성을 발휘시킬 수 있으나 충동 통제가 다소 어려울 수 있습니다. 본 포털의 부모 유형 진단은 이 네 가지 기본 이론을 토대로, 매일 거실에서 발생하는 일상적 상황을 접목하여 부모 스스로 자신의 양육적 특징(민감성, 통제성, 일관성)을 유쾌하게 되돌아보고, 아동 발달을 돕는 구체적인 정서 훈육 솔루션을 제공하는 것을 목적으로 연구 및 큐레이션 되었습니다.",
    column_2_title: "2. 가치관 기반 글로벌 정착지 선택의 심리적 배경",
    column_2_body: "인간은 일정한 정주 환경을 벗어나 자신과 완벽히 공명하는 라이프스타일 환경을 찾을 때 극대화된 행복과 심리적 안정감을 느낍니다. 이를 인문지리학 및 환경심리학에서는 '장소 애착(Place Attachment)'과 '환경 적합성(Person-Environment Fit)' 이론으로 설명합니다. 개인이 선호하는 자연 기후, 치안 수준, 공공 인프라, 그리고 개인주의적 가치관과 공동체주의적 가치관의 성향 차이는 삶의 만족도에 심대한 영향을 끼칩니다. 예컨대, 시원하고 차분한 북유럽의 복지 및 개인주의 시스템을 선호하는 사람과 따뜻하고 여유로운 동남아시아의 휴양 인프라 및 가성비를 중시하는 사람이 동일한 물리적 환경에 처했을 때 느끼는 체류 생산성은 완전히 상이합니다. 본 찰떡 궁합 나라 찾기 테스트는 개인이 인지하는 노동과 여가(Work-Life Balance)의 가중치, 소비 예산의 가성비 선호도, 공공 치안 안전의 마지노선 등 15가지 세부 지표를 리커트 척도 눈금으로 정밀 계량합니다. 이를 바탕으로 글로벌 주요 14개국 데이터를 실시간 비교 분석하여, 단순한 관광지를 넘어 장기 체류(한 달 살기, 디지털 노마드) 시 문화 충격을 최소화하고 자아 실현을 이뤄낼 수 있는 이상적인 정주 국가를 학술적으로 큐레이션합니다.",
    column_3_title: "3. 세대 간 신조어 사용과 사회학적 동조 경향",
    column_3_body: "유행어와 신조어는 단순한 언어적 일탈을 넘어, 시대를 관통하는 집단적 무의식과 사회적 유대감을 투영하는 가장 원초적인 문화 거울입니다. 사회학에서 말하는 '동조 현상(Conformity)'과 '하위문화(Subculture)' 전파 이론에 따르면, 새로운 은어나 단축어의 등장은 특정 연령층이나 커뮤니티 내부의 강력한 소속감과 정체성을 확보하는 수단으로 기능합니다. 10대의 스마트폰 밈과 20대의 트렌디한 약어들은 급변하는 모바일 매체 환경을 생존하기 위한 언어적 효율성의 산물인 반면, 40~50대의 추억 어린 유행어나 복고풍 언어들은 과거 경제 성장기와 PC통신 여명기를 공유하는 정서적 향수(Nostalgia)의 매개체입니다. 본 세대 공감 유행어 퀴즈는 각 세대가 겪어온 시대상을 투영하는 10가지 객관식 유행어 문항을 통해, 사용자가 서로 다른 세대의 언어 문화 구조를 얼마나 깊이 공감하고 번역해낼 수 있는지 측정합니다. 테스트를 통해 자신의 언어 스펙트럼과 유연성을 깨닫는 동시에, 타 세대와의 상호 소통력을 넓혀나가는 융합형 커뮤니케이션 리더로 거듭날 수 있는 방향성을 시사합니다."
  },
  en: {
    portal_badge: "Global Persona & Mind Tests",
    portal_title: "Type Analysis Portal",
    portal_subtitle: "From matching your soul country to discovering your past life and personality character tests!",
    portal_footer: "© 2026 Test Lab. All rights reserved.",
    update_notice: "📢 [Regular Updates] New personality tests and analysis columns are updated on the 1st and 15th of every month.",
    column_section_title: "🔍 Personality Analysis & Psychological Columns",
    column_section_subtitle: "Providing psychological research reports and practical guidelines based on type analysis.",
    column_1_title: "1. The Impact of Parenting Attitude on Children's Emotional Development",
    column_1_body: "A parent's parenting attitude acts as a decisive milestone in a child's self-esteem and emotional development. According to research by psychologist Diana Baumrind, parenting styles are broadly divided into four categories (authoritative, authoritarian, permissive, and neglectful) based on demandingness and responsiveness. First, the 'authoritative' style controls the child's standards of behavior reasonably but provides affection and support. Children raised in this environment form independent personalities with high self-control. Second, 'authoritarian' parenting, which is highly demanding but lacks warmth, requires caution as it can cause emotional oppression due to excessive rules. Third, 'permissive' parenting, which has abundant support but lacks control, can express creativity but might make impulse control difficult. The Parenting Style Test on this portal is designed to let parents reflect on their characteristics (sensitivity, control, consistency) by combining daily situations in the living room based on these basic psychological theories.",
    column_2_title: "2. Psychological Background of Values-Based Global Relocation Site Selection",
    column_2_body: "Humans experience maximized happiness and psychological stability when they find a lifestyle environment that resonates perfectly with them, out of their static residence. In human geography and environmental psychology, this is explained by 'Place Attachment' and 'Person-Environment Fit' theories. Individual preferences for natural climate, public safety, infrastructure, and values of individualism versus collectivism affect life satisfaction deeply. For example, a person who prefers Northern Europe's welfare and individualism systems versus one who values Southeast Asia's tropical resort infrastructure and cost efficiency will experience totally different productivity. The Soul Country Matching Test precisely measures 15 detailed indexes, including work-life balance weights, cost preferences, and safety boundaries. By analyzing data from 14 major global countries, it academically curates the ideal country to minimize cultural shock and achieve self-actualization during long-term stays.",
    column_3_title: "3. Generational Slang Usage and Sociological Conformity Tendencies",
    column_3_body: "Slangs and neologisms are not simple linguistic deviations, but the most primitive cultural mirrors projecting collective unconsciousness and social solidarity. According to 'Conformity' and 'Subculture' propagation theories in sociology, the appearance of new slangs functions as a means of securing a strong sense of belonging and identity. Gen-Z's smartphone memes and abbreviation codes are products of linguistic efficiency for survival in the rapidly changing mobile media environment, while retro slangs of the 40s and 50s are media of nostalgia sharing the economic growth era. The Slang Quiz measures how deeply users can empathize and translate different generations' linguistic cultures through 10 choice questions. It lets users realize their linguistic spectrum and suggests direction to grow into a convergent communication leader who expands empathy across generations."
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
  'mbti-test':       'mbti-test.html',
  'buzzword-quiz':   'buzzword-quiz.html'
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

    // 카드 내부 HTML (아이콘 + 제목 한 행에 배치, 설명은 하단 배치)
    card.innerHTML = `
      <div class="test-card-header">
        <div class="test-icon-wrapper">${test.icon}</div>
        <h3>${test.title[currentLang]}</h3>
      </div>
      <div class="test-card-body">
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
  },
  about: {
    title: { ko: "포털 소개 (About Us)", en: "About Our Portal" },
    body: {
      ko: `
        <h4>1. 포털 개요 및 설립 목적</h4>
        <p>유형 검사 분석 포털(테스트 연구소)은 인간의 가치관, 심리 성향, 행동 패턴을 다각도로 분석하여 나 자신과 타인에 대한 더 깊은 이해를 돕는 전문 연구 포털입니다.</p>
        <h4>2. 과학적 학술 이론 기반</h4>
        <p>본 포털의 진단 서비스는 발달심리학(Baumrind의 양육 스타일 이론), 환경심리학(Person-Environment Fit 이론), 사회학(하위문화 동조 경향) 등 검증된 학술적 이론과 데이터 가중치 분석 알고리즘에 입각하여 고안되었습니다.</p>
        <h4>3. 콘텐츠 정책 및 투명성</h4>
        <p>저희는 사용자의 개인식별정보를 전혀 수집하거나 저장하지 않는 투명한 운영을 고수하며, 사용자 신뢰에 부합하는 클린 콘텐츠 환경과 정기적인 보완 아티클 발행을 약속드립니다.</p>
      `,
      en: `
        <h4>1. Overview & Purpose</h4>
        <p>The Type Analysis Portal is a professional research platform designed to help understand human behaviors, values, and psychological tendencies.</p>
        <h4>2. Academic Frameworks</h4>
        <p>Our assessment tools are designed based on developmental psychology, environmental psychology, and sociological conformity theories.</p>
        <h4>3. Privacy & Trust Policy</h4>
        <p>We do not collect personal data and guarantee complete transparency and user trust in our services.</p>
      `
    }
  },
  contact: {
    title: { ko: "공식 문의하기 (Contact Us)", en: "Contact Us" },
    body: {
      ko: `
        <h4>1. 공식 지원 및 연구 협업 제보 채널</h4>
        <p>서비스 이용 관련 피드백, 제휴 문의, 학술 연구 협업 및 시스템 오류 제보는 아래의 전용 지원 창구로 연락 주시면 신속하게 검토하겠습니다.</p>
        <p><b>공식 이메일:</b> prosum87@gmail.com</p>
        <p><b>회신 소요 시간:</b> 영업일 기준 평균 48시간 이내에 처리해 드립니다.</p>
        <p><b>오프라인 연구실:</b> 서울특별시 마포구 백범로 31길 (테스트 연구소 랩)</p>
      `,
      en: `
        <h4>1. Official Contact Channel</h4>
        <p>For any business inquiries, academic collaborations, or system feedback, please reach out to our team.</p>
        <p><b>Email:</b> prosum87@gmail.com</p>
        <p><b>Response Time:</b> Within 48 hours on business days.</p>
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

// 아코디언 접힘/펼침 이벤트 설정
function initAccordion() {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = header.nextElementSibling;
      const arrow = header.querySelector('.accordion-arrow');

      const isActive = item.classList.contains('active');

      // 중복 오픈 가능하도록 타 항목 닫기
      document.querySelectorAll('.accordion-item').forEach(el => {
        el.classList.remove('active');
        const c = el.querySelector('.accordion-content');
        if (c) c.style.maxHeight = null;
        const a = el.querySelector('.accordion-arrow');
        if (a) a.textContent = '▼';
      });

      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px";
        arrow.textContent = '▲';
      }
    });
  });
}

// ============================================================
// 8. 초기화 실행 (페이지 로드 시 자동 실행)
// ============================================================
detectLanguage();       // 브라우저 언어 감지
translateStaticUI();    // 정적 UI 번역 적용
renderPortalHome();     // 테스트 카드 목록 렌더링
initAccordion();        // 아코디언 초기화 추가

// 정책 모달 버튼 이벤트 연결
const linkAbout      = document.getElementById('link-about');
const linkContact    = document.getElementById('link-contact');
const linkPrivacy    = document.getElementById('link-privacy');
const linkTerms      = document.getElementById('link-terms');
const linkDisclaimer = document.getElementById('link-disclaimer');
const closeModalBtn  = document.getElementById('close-modal');
const policyModal    = document.getElementById('policy-modal');

if (linkAbout)      linkAbout.addEventListener('click',      (e) => { e.preventDefault(); openPolicyModal('about'); });
if (linkContact)    linkContact.addEventListener('click',    (e) => { e.preventDefault(); openPolicyModal('contact'); });
if (linkPrivacy)    linkPrivacy.addEventListener('click',    (e) => { e.preventDefault(); openPolicyModal('privacy'); });
if (linkTerms)      linkTerms.addEventListener('click',      (e) => { e.preventDefault(); openPolicyModal('terms'); });
if (linkDisclaimer) linkDisclaimer.addEventListener('click', (e) => { e.preventDefault(); openPolicyModal('disclaimer'); });
if (closeModalBtn)  closeModalBtn.addEventListener('click', closePolicyModal);
if (policyModal)    policyModal.addEventListener('click', (e) => { if (e.target === policyModal) closePolicyModal(); });
