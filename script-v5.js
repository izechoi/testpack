/**
 * @file script-v5.js
 * @description 지연 로딩(Lazy-Loading) 기반으로 설계된 글로벌 다국어 테스트 포털 스크립트입니다. (캐시 무효화 버전)
 */

// --- 1. 다국어 정적 사전 (Static Translation Dictionary) ---
const i18nDict = {
  ko: {
    portal_badge: "글로벌 성향 & 심리 테스트",
    portal_title: "내 안의 숨겨진 성향<br><span class=\"highlight\">테스트 포털</span>",
    portal_subtitle: "나의 소울 국가 매칭부터 전생 위인 분석, 개성 만점 MBTI 테스트까지 한 곳에서 즐겨보세요!",
    portal_footer: "© 2026 테스트 연구소. All rights reserved.",
    back_btn: "↩ 홈으로",
    start_btn: "테스트 시작하기",
    intro_duration: "소요 시간: 약 3분",
    intro_questions: "문항 수: {count}개",
    loading_title: "현실 분석 엔진 가동 중...",
    loading_tip_1: "\"답변 데이터 가중치 연산 중...\"",
    loading_tip_2: "\"당신만의 특별한 성향 데이터를 분석하는 중...\"",
    loading_tip_3: "\"매칭 결과를 촘촘히 큐레이션하는 중...\"",
    result_badge: "나의 테스트 결과는?",
    alternative_title: "차선책으로 추천하는 2순위 국가 (Alternative Soul Country)",
    share_kakao: "💬 카카오톡으로 결과 공유",
    share_whatsapp: "🟢 WhatsApp으로 결과 공유",
    copy_link: "🔗 결과 링크 복사하기",
    restart_btn: "🔄 다시 테스트하기",
    home_btn: "🏠 테스트 모음 홈으로"
  },
  en: {
    portal_badge: "Global Persona & Mind Tests",
    portal_title: "Uncover Your Self<br><span class=\"highlight\">Test Portal</span>",
    portal_subtitle: "From matching your soul country to discovering your past life and personality character tests!",
    portal_footer: "© 2026 Test Lab. All rights reserved.",
    back_btn: "↩ Home",
    start_btn: "Start Test",
    intro_duration: "Duration: ~3 mins",
    intro_questions: "Questions: {count} items",
    loading_title: "Analyzing answers...",
    loading_tip_1: "\"Aggregating your values and metrics...\"",
    loading_tip_2: "\"Cross-analyzing lifestyle choices...\"",
    loading_tip_3: "\"Curating the best match for you...\"",
    result_badge: "Your Test Result",
    alternative_title: "Alternative Match (2nd Highest Recommendation)",
    share_kakao: "💬 Share via KakaoTalk",
    share_whatsapp: "🟢 Share via WhatsApp",
    copy_link: "🔗 Copy Link to Clipboard",
    restart_btn: "🔄 Retake Test",
    home_btn: "🏠 Back to Portal Home"
  }
};

// --- 2. 전역 상태 제어 변수 ---
let currentLang = 'ko';       // 기본 로케일
let selectedTestId = '';      // 현재 플레이 중인 테스트 키
let activeTestData = null;    // 지연 로딩 완료된 활성 테스트 데이터 객체
let currentQuestionIndex = 0; // 현재 질문 인덱스
let userScores = {};          // 점수 집계 테이블
let lastCalculatedAnimal = ''; // 1순위 결과 키
let lastAlternativeAnimal = ''; // 2순위 결과 키

// --- 3. DOM 요소 바인딩 ---
const phoneContainer = document.getElementById('phone-container');
const homeScreen = document.getElementById('home-screen');
const introScreen = document.getElementById('intro-screen');
const testScreen = document.getElementById('test-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');

// 버튼 요소들
const startBtn = document.getElementById('start-btn');
const backToHomeBtn = document.getElementById('back-to-home');
const restartBtn = document.getElementById('restart-btn');
const resultHomeBtn = document.getElementById('result-home-btn');
const shareBtn = document.getElementById('share-btn');
const kakaoShareBtn = document.getElementById('kakao-share-btn');
const whatsappShareBtn = document.getElementById('whatsapp-share-btn');



// 동적 데이터 렌더링 요소들
const testListContainer = document.getElementById('test-list-container');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

// 결과 화면 리포트 바인딩 요소들
const resultImage = document.getElementById('result-image');
const resultAnimalName = document.getElementById('result-animal');
const resultTypeTitle = document.getElementById('result-title');
const resultTraits = document.getElementById('result-traits');
const resultSummary = document.getElementById('result-summary');
const resultDaily = document.getElementById('result-daily');
const resultStrengths = document.getElementById('result-strengths');
const resultWeaknesses = document.getElementById('result-weaknesses');
const resultPrescription = document.getElementById('result-prescription');
const alternativeCard = document.getElementById('alternative-card');
const resultAlternative = document.getElementById('result-alternative');

// --- 4. 다국어(i18n) 번역 엔진 ---

function detectLanguage() {
  const userLocale = (navigator.language || navigator.userLanguage).toLowerCase();
  currentLang = userLocale.startsWith('ko') ? 'ko' : 'en';
}

function translateStaticUI() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    let text = i18nDict[currentLang][key];

    if (text) {
      if (key === 'intro_questions' && activeTestData) {
        const count = activeTestData.questions.length;
        text = text.replace('{count}', count);
      }

      if (text.includes('<') && text.includes('>')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });
}



// --- 5. 동적 모듈 로더 (Dynamic Module Loader) ---

/**
 * 특정 테스트의 대용량 자바스크립트 데이터를 온디맨드(On-demand) 방식으로 지연 로딩합니다.
 */
function loadTestData(testId, callback) {
  const testMeta = testsRegistry[testId];
  if (!testMeta || !testMeta.dataPath) return;

  const oldScript = document.getElementById('dynamic-test-script');
  if (oldScript) {
    oldScript.remove();
  }

  window.activeTestData = null;

  const script = document.createElement('script');
  script.id = 'dynamic-test-script';
  script.src = `${testMeta.dataPath}?v=${new Date().getTime()}`;
  script.async = true;

  script.onload = () => {
    if (window.activeTestData) {
      activeTestData = window.activeTestData;
      callback();
    } else {
      console.error(`Failed to harvest test payload for ID: ${testId}`);
    }
  };

  script.onerror = () => {
    alert(currentLang === 'ko' ? '설문 데이터를 불러오는데 실패했습니다. 네트워크 상태를 확인하세요.' : 'Failed to load test data. Please check your network.');
  };

  document.head.appendChild(script);
}

// --- 6. 화면 라우팅 ---
function showScreen(screenToShow) {
  [homeScreen, introScreen, testScreen, loadingScreen, resultScreen].forEach(screen => {
    screen.classList.remove('active');
  });
  screenToShow.classList.add('active');
  screenToShow.scrollTop = 0;
}

function resetContainerTheme() {
  phoneContainer.className = 'phone-container';
  activeTestData = null;
}

// --- 7. 포털 메인 카드 목록 렌더링 ---
function renderPortalHome() {
  resetContainerTheme();
  testListContainer.innerHTML = '';

  for (const testKey in testsRegistry) {
    const test = testsRegistry[testKey];
    const card = document.createElement('div');

    if (test.status === 'ready') {
      card.className = 'test-card ready';
    } else {
      card.className = 'test-card';
    }

    card.innerHTML = `
      <div class="test-icon-wrapper">${test.icon}</div>
      <div class="test-info">
        <h3>${test.title[currentLang]}</h3>
        <p>${test.description[currentLang]}</p>
        ${test.status === 'ready' ? `<span class="badge-ready">${currentLang === 'ko' ? '준비 중' : 'Coming Soon'}</span>` : ''}
      </div>
    `;

    if (test.status !== 'ready') {
      card.addEventListener('click', () => {
        loadTestData(testKey, () => {
          openTestIntro(testKey);
        });
      });
    }

    testListContainer.appendChild(card);
  }
}

// --- 8. 인트로 화면 렌더링 ---
function openTestIntro(testKey) {
  selectedTestId = testKey;
  const testMeta = testsRegistry[testKey];

  phoneContainer.className = 'phone-container';
  if (testMeta.themeClass) {
    phoneContainer.classList.add(testMeta.themeClass);
  }

  renderIntroScreen();
  showScreen(introScreen);
}

function renderIntroScreen() {
  const badgeEl = document.getElementById('intro-badge');
  if (selectedTestId === 'parenting-style') {
    badgeEl.textContent = currentLang === 'ko' ? '육아 진단' : 'Parenting';
  } else if (selectedTestId === 'past-life') {
    badgeEl.textContent = currentLang === 'ko' ? '전생 진단' : 'Past Life';
  } else {
    badgeEl.textContent = currentLang === 'ko' ? '글로벌 매칭' : 'Global Match';
  }

  document.getElementById('intro-title').textContent = activeTestData.title[currentLang];
  document.getElementById('intro-desc').textContent = activeTestData.description[currentLang];

  const introImg = document.getElementById('intro-image');
  // 테스트 유형별 인트로 대문 이미지 분기
  if (selectedTestId === 'soul-country') {
    introImg.src = 'images/soul-country-main.png';
  } else if (selectedTestId === 'past-life') {
    introImg.src = 'images/past-life-main.png';
  } else {
    introImg.src = 'images/dolphin.png';
  }


  translateStaticUI();
}

// --- 9. 테스트 진행 시점 초기화 ---
function initTest() {
  if (!activeTestData) return;

  currentQuestionIndex = 0;
  userScores = {};

  // 데이터 셋 결과 리포트에 정의된 모든 키를 0점으로 안전하게 초기화
  if (selectedTestId === 'mbti-test') {
    ['E', 'I', 'S', 'N', 'T', 'F', 'J', 'P'].forEach(key => {
      userScores[key] = 0;
    });
  } else {
    for (const key in activeTestData.results) {
      userScores[key] = 0;
    }
  }

  lastCalculatedAnimal = '';
  lastAlternativeAnimal = '';

  renderQuestion();
  showScreen(testScreen);
}

// --- 10. 문항 동적 렌더링 ---
function renderQuestion() {
  if (!activeTestData) return;

  const currentQuestion = activeTestData.questions[currentQuestionIndex];
  const totalQuestions = activeTestData.questions.length;

  questionCounter.textContent = `${String(currentQuestionIndex + 1).padStart(2, '0')} / ${String(totalQuestions).padStart(2, '0')}`;
  progressBar.style.width = `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`;

  questionText.textContent = currentQuestion.scenario[currentLang];
  optionsContainer.innerHTML = '';

  if (currentQuestion.type === 'slider') {
    // 1) 슬라이더 렌더링을 위한 전용 래퍼
    const sliderWrapper = document.createElement('div');
    sliderWrapper.className = 'slider-wrapper';

    // 좌우 가이드 라벨
    const labelsDiv = document.createElement('div');
    labelsDiv.className = 'slider-labels';

    const leftSpan = document.createElement('span');
    leftSpan.className = 'slider-label-left';
    leftSpan.textContent = currentQuestion.leftLabel[currentLang];

    const rightSpan = document.createElement('span');
    rightSpan.className = 'slider-label-right';
    rightSpan.textContent = currentQuestion.rightLabel[currentLang];

    labelsDiv.appendChild(leftSpan);
    labelsDiv.appendChild(rightSpan);

    // 슬라이더 인풋
    const sliderInput = document.createElement('input');
    sliderInput.type = 'range';
    sliderInput.min = '0';
    sliderInput.max = '100';
    sliderInput.value = '50';
    sliderInput.className = 'custom-range-slider';

    // 가치관 지향을 시각화해 주는 텍스트 인디케이터
    const valueIndicator = document.createElement('div');
    valueIndicator.className = 'slider-value-indicator';
    valueIndicator.textContent = currentLang === 'ko' ? '⚖️ 균형 (Neutral)' : '⚖️ Balanced (Neutral)';

    sliderInput.addEventListener('input', () => {
      const val = parseInt(sliderInput.value);
      if (val < 40) {
        valueIndicator.textContent = currentLang === 'ko' ? `👈 '${currentQuestion.leftLabel[currentLang]}' 지향` : `👈 Prefer '${currentQuestion.leftLabel[currentLang]}'`;
      } else if (val > 60) {
        valueIndicator.textContent = currentLang === 'ko' ? `👉 '${currentQuestion.rightLabel[currentLang]}' 지향` : `👉 Prefer '${currentQuestion.rightLabel[currentLang]}'`;
      } else {
        valueIndicator.textContent = currentLang === 'ko' ? '⚖️ 균형 (Neutral)' : '⚖️ Balanced (Neutral)';
      }
    });

    // 확인 및 제출 버튼
    const submitBtn = document.createElement('button');
    submitBtn.className = 'btn btn-primary ripple slider-submit-btn';
    submitBtn.textContent = currentLang === 'ko' ? '이 가치관 선택하기' : 'Apply Vibe';

    submitBtn.addEventListener('click', () => {
      const finalVal = parseInt(sliderInput.value);

      // 구간 가중치 정산
      const thresholds = currentQuestion.sliderScores.thresholds;
      thresholds.forEach(t => {
        const [min, max] = t.range;
        if (finalVal >= min && finalVal <= max) {
          for (const country in t.scores) {
            if (userScores.hasOwnProperty(country)) {
              userScores[country] += t.scores[country];
            }
          }
        }
      });

      nextStep();
    });

    sliderWrapper.appendChild(labelsDiv);
    sliderWrapper.appendChild(sliderInput);
    sliderWrapper.appendChild(valueIndicator);
    sliderWrapper.appendChild(submitBtn);

    optionsContainer.appendChild(sliderWrapper);
  } else {
    // 2) 기존 3지/4지 객관식 렌더링
    currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.className = 'option-btn ripple';
      button.textContent = option.text[currentLang];

      button.addEventListener('click', () => {
        for (const key in option.scores) {
          if (userScores.hasOwnProperty(key)) {
            userScores[key] += option.scores[key];
          }
        }
        nextStep();
      });
      optionsContainer.appendChild(button);
    });
  }
}

function nextStep() {
  currentQuestionIndex++;

  if (currentQuestionIndex < activeTestData.questions.length) {
    renderQuestion();
  } else {
    startLoading();
  }
}

// --- 11. 결과 대기 로딩 연출 ---
function startLoading() {
  showScreen(loadingScreen);

  const tips = document.querySelectorAll('.tip-text');
  let tipIndex = 0;

  if (selectedTestId === 'soul-country') {
    if (currentLang === 'ko') {
      tips[0].textContent = "당신의 예산 범위와 세금 선호도를 채점하는 중...";
      tips[1].textContent = "지중해성 날씨와 대자연 선호도를 교차 분석하는 중...";
      tips[2].textContent = "20개국 영주/체류 정보 데이터베이스 매칭 중...";
    } else {
      tips[0].textContent = "Analyzing budget ranges and tax preferences...";
      tips[1].textContent = "Cross-analyzing weather and nature priorities...";
      tips[2].textContent = "Matching with global immigration databases...";
    }
  } else if (selectedTestId === 'mbti-test') {
    if (currentLang === 'ko') {
      tips[0].textContent = "당신의 E/I 외향/내향 사교성 지표 분석 중...";
      tips[1].textContent = "뇌 속의 S/N 현실/상상 회로 분석 중...";
      tips[2].textContent = "T/F 팩트폭행 및 감성 공감 수치 연산 중...";
    } else {
      tips[0].textContent = "Analyzing E/I sociability index...";
      tips[1].textContent = "Measuring S/N reality vs imagination neurons...";
      tips[2].textContent = "Calculating T/F logical vs emotional ratios...";
    }
  } else {
    if (currentLang === 'ko') {
      tips[0].textContent = "장난감 정리 시 '다 버린다' 경고 횟수 정산 중...";
      tips[1].textContent = "놀이터 갈등 시 내면의 욱함 수치 계산 중...";
      tips[2].textContent = "식사 시간 숟가락 들고 쫓아다닌 거리 측정 중...";
    } else {
      tips[0].textContent = "Calculating 'throw away toys' warning counts...";
      tips[1].textContent = "Measuring playground conflict panic levels...";
      tips[2].textContent = "Calculating dining spoon chase distances...";
    }
  }

  const tipInterval = setInterval(() => {
    tips.forEach(tip => tip.classList.remove('active'));
    tipIndex = (tipIndex + 1) % tips.length;
    tips[tipIndex].classList.add('active');
  }, 800);

  setTimeout(() => {
    clearInterval(tipInterval);
    showResult();
  }, 2400);
}

// --- 12. 결과 정렬 계산 및 화면 전시 ---
function showResult() {
  if (!activeTestData) return;

  let primaryResultKey = '';
  let secondaryResultKey = '';

  if (selectedTestId === 'mbti-test') {
    const eVal = userScores['E'] || 0;
    const iVal = userScores['I'] || 0;
    const sVal = userScores['S'] || 0;
    const nVal = userScores['N'] || 0;
    const tVal = userScores['T'] || 0;
    const fVal = userScores['F'] || 0;
    const jVal = userScores['J'] || 0;
    const pVal = userScores['P'] || 0;

    const mbtiCode =
      (eVal >= iVal ? 'E' : 'I') +
      (sVal >= nVal ? 'S' : 'N') +
      (tVal >= fVal ? 'T' : 'F') +
      (jVal >= pVal ? 'J' : 'P');

    primaryResultKey = mbtiCode;
    secondaryResultKey = mbtiCode;
  } else {
    const sortedKeys = Object.keys(userScores).sort((a, b) => userScores[b] - userScores[a]);
    primaryResultKey = sortedKeys[0];
    secondaryResultKey = sortedKeys[1] || sortedKeys[0];
  }

  lastCalculatedAnimal = primaryResultKey;
  lastAlternativeAnimal = secondaryResultKey;

  const resultData = activeTestData.results[primaryResultKey];
  const alternativeData = activeTestData.results[secondaryResultKey];

  translateStaticUI();

  const labels = activeTestData.labels;
  document.getElementById('label-summary').textContent = labels.summary[currentLang];
  document.getElementById('label-daily').textContent = labels.daily[currentLang];
  document.getElementById('label-strengths').textContent = labels.strengths[currentLang];
  document.getElementById('label-weaknesses').textContent = labels.weaknesses[currentLang];
  document.getElementById('label-prescription').textContent = labels.prescription[currentLang];

  // 테스트 성격별 결과 이미지 액자 프레임 세분화 분기
  const imgBox = document.querySelector('.result-img-box');
  imgBox.classList.remove('flag-rect', 'char-rect'); // 초기화

  if (selectedTestId === 'soul-country') {
    imgBox.classList.add('flag-rect');
  } else if (selectedTestId === 'past-life' || selectedTestId === 'mbti-test') {
    imgBox.classList.add('char-rect');
  }

  resultImage.src = resultData.image;
  resultImage.alt = resultData.animalName[currentLang];

  if (selectedTestId === 'parenting-style') {
    resultAnimalName.textContent = resultData.animalName[currentLang] + (currentLang === 'ko' ? " 부모" : " Parent");
  } else {
    resultAnimalName.textContent = resultData.animalName[currentLang];
  }

  resultTypeTitle.textContent = resultData.typeTitle[currentLang];

  resultTraits.innerHTML = '';
  const tags = resultData.coreTraits[currentLang].split('•');
  tags.forEach(tag => {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = '#' + tag.trim();
    resultTraits.appendChild(span);
  });

  resultSummary.textContent = resultData.summary[currentLang];
  resultDaily.textContent = resultData.dailyScene[currentLang];
  resultStrengths.textContent = resultData.strengths[currentLang];
  resultWeaknesses.textContent = resultData.weaknesses[currentLang];
  resultPrescription.textContent = resultData.prescription[currentLang];

  if (selectedTestId === 'soul-country') {
    alternativeCard.style.display = 'block';
    const altTitle = currentLang === 'ko' ? `✈️ 2순위 차선책 국가: ${alternativeData.animalName[currentLang]}` : `✈️ 2nd Choice Country: ${alternativeData.animalName[currentLang]}`;
    resultAlternative.textContent = altTitle;
  } else {
    alternativeCard.style.display = 'none';
  }

  showScreen(resultScreen);
}

// --- 13. 소셜 공유 기능 ---

function copyLink() {
  const dummy = document.createElement('input');
  const text = window.location.href;

  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();

  try {
    const successful = document.execCommand('copy');
    if (successful) {
      const msg = currentLang === 'ko' ? '공유 링크가 클립보드에 복사되었습니다!\n친구들에게 성향 진단 링크를 추천해보세요.' : 'Test link copied to clipboard!\nShare it with your friends.';
      alert(msg);
    } else {
      const failMsg = currentLang === 'ko' ? '링크 복사에 실패했습니다. 주소창 주소를 복사해주세요.' : 'Copy failed. Please copy the URL from address bar.';
      alert(failMsg);
    }
  } catch (err) {
    alert(currentLang === 'ko' ? '이 브라우저는 주소 복사를 지원하지 않습니다. 주소창 주소를 직접 복사해주세요.' : 'Automatic copy is not supported in this browser.');
  }

  document.body.removeChild(dummy);
}

function shareToKakao() {
  if (!lastCalculatedAnimal || !activeTestData) return;
  const resultData = activeTestData.results[lastCalculatedAnimal];

  let shareTitle = '';
  if (selectedTestId === 'parenting-style') {
    shareTitle = currentLang === 'ko' ? `[현실 육아 성향 테스트] 나의 진단 유형: '${resultData.animalName[currentLang]} 부모'!` : `[Parenting Style Test] My Type: '${resultData.animalName[currentLang]} Parent'!`;
  } else {
    shareTitle = currentLang === 'ko' ? `[소울 컨트리 매칭] 나의 운명적인 소울 국가는 바로 '${resultData.animalName[currentLang]}'!` : `[Soul Country Match] My Destination: '${resultData.animalName[currentLang]}'!`;
  }

  const shareUrl = window.location.href;
  const kakaoUrl = `https://sharer.kakao.com/talk/friends/picker/link?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`;
  window.open(kakaoUrl, '_blank');
}

function shareToWhatsApp() {
  if (!lastCalculatedAnimal || !activeTestData) return;
  const resultData = activeTestData.results[lastCalculatedAnimal];

  let shareText = '';
  if (selectedTestId === 'parenting-style') {
    shareText = currentLang === 'ko'
      ? `[현실 육아 성향 테스트] 진단 결과, 저는 '${resultData.animalName[currentLang]} 부모' 유형이 나왔어요! 거실 속 매일 겪는 현실 육아 성향이 궁금하다면 진단해 보세요! 👉 ${window.location.href}`
      : `[Parenting Style Test] I got '${resultData.animalName[currentLang]} Parent'! Take the test to discover yours! 👉 ${window.location.href}`;
  } else {
    shareText = currentLang === 'ko'
      ? `[나에게 맞는 소울 컨트리 찾기] 15가지 현실 가치관을 맞춰본 결과, 저의 매칭 국가는 '${resultData.animalName[currentLang]}'이(가) 나왔어요! 당신의 운명적인 나라는 어딜까요? 👉 ${window.location.href}`
      : `[Where is My Soul Country?] My matching country is '${resultData.animalName[currentLang]}'! Take this 15-question test to find your soul destination! 👉 ${window.location.href}`;
  }

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
  window.open(whatsappUrl, '_blank');
}

// --- 14. 초기 실행 및 이벤트 바인딩 ---

detectLanguage();
translateStaticUI();
renderPortalHome();

startBtn.addEventListener('click', initTest);
backToHomeBtn.addEventListener('click', () => {
  renderPortalHome();
  showScreen(homeScreen);
});
restartBtn.addEventListener('click', initTest);
resultHomeBtn.addEventListener('click', () => {
  renderPortalHome();
  showScreen(homeScreen);
});
shareBtn.addEventListener('click', copyLink);
kakaoShareBtn.addEventListener('click', shareToKakao);
whatsappShareBtn.addEventListener('click', shareToWhatsApp);

// --- 15. 구글 애드센스 광고 승인을 위한 다국어 약관 데이터 및 모달 작동 로직 ---

const policyContent = {
  privacy: {
    title: { ko: "개인정보 처리방침 (Privacy Policy)", en: "Privacy Policy" },
    body: {
      ko: `
        <h4>1. 수집하는 개인정보 항목 및 수집 방법</h4>
        <p>본 웹사이트는 사용자의 이름, 비밀번호 등의 민감한 개인식별정보를 직접 수집하거나 데이터베이스에 강제로 저장하지 않습니다. 다만, 서비스 통계 분석 및 맞춤형 광고 게재를 위해 쿠키(Cookie) 정보와 IP 주소, 브라우저 환경 정보 등이 자동으로 수집될 수 있습니다.</p>
        
        <h4>2. 쿠키(Cookie) 및 구글 애드센스 광고 정책 고지</h4>
        <p>본 웹사이트는 구글(Google Inc.)이 제공하는 웹 분석 서비스 및 광고 관리 시스템인 구글 애드센스(Google AdSense)를 이용할 수 있습니다. 구글은 사용자가 본 웹사이트 또는 다른 웹사이트를 방문한 기록을 바탕으로 맞춤형 광고를 제공하기 위해 쿠키(DoubleClick Cookie 등)를 수집 및 사용합니다.</p>
        <p>사용자는 브라우저 설정 또는 구글 광고 설정 페이지(https://adssettings.google.com)를 방문하여 맞춤형 광고 쿠키 제공을 거부하고 제어할 수 있습니다.</p>
        
        <h4>3. 개인정보 제3자 제공 및 위탁</h4>
        <p>수집된 비식별화 통계 정보는 구글 등 타사 광고 서비스의 맞춤형 광고 서빙 목적 외에는 제3자에게 임의로 제공되거나 판매되지 않습니다.</p>
        
        <h4>4. 정보주체의 권리 및 연락처</h4>
        <p>본 방침과 관련하여 문의 사항이 있으신 경우, 당사 고객지원 이메일(prosum87@gmail.com)을 통해 요청해 주시면 영업일 기준 3일 이내에 조치해 드립니다.</p>
      `,
      en: `
        <h4>1. Information Collected and Method of Collection</h4>
        <p>This website does not directly collect or save sensitive personal identification information (such as real names, passwords, or emails). However, non-personal data, including cookie IDs, IP addresses, and browser details, might be processed automatically to serve customized advertisements and analyze web traffic.</p>
        
        <h4>2. Cookie and Google AdSense Ad Policy Notification</h4>
        <p>This website may use Google AdSense, a service provided by Google Inc. Google uses cookies (such as DoubleClick cookies) to serve ads based on users' visits to this site and/or other sites on the Internet.</p>
        <p>You may opt out of personalized advertising by visiting Google's Ad Settings (https://adssettings.google.com) or adjusting your internet browser settings.</p>
        
        <h4>3. Third-Party Sharing and Data Processing</h4>
        <p>We do not sell or trade non-personal statistic datasets. All web server request logs are processed securely under standard SSL encryption and immediately deleted after traffic diagnostics.</p>
        
        <h4>4. User Rights and Contact Information</h4>
        <p>For any privacy-related requests or policy inquiries, please contact our support department at prosum87@gmail.com.</p>
      `
    }
  },
  terms: {
    title: { ko: "이용 약관 (Terms of Service)", en: "Terms of Service" },
    body: {
      ko: `
        <h4>1. 목적 및 약관의 효력</h4>
        <p>본 이용 약관은 테스트 연구소 포털(이하 "회사" 혹은 "사이트")이 제공하는 심리 성향 진단 서비스 및 부가 콘텐츠를 이용함에 있어, 이용자의 권리와 의무를 규정하는 것을 목적으로 합니다. 본 사이트에 접속하여 진단 서비스를 개시하는 것은 본 약관에 동의한 것으로 간주합니다.</p>
        
        <h4>2. 서비스 제공 및 면책</h4>
        <p>본 사이트가 제공하는 성향 테스트 및 매칭 리포트는 사용자의 설문 답변 가중치 분석 결과에 기반한 참조용 오락 콘텐츠입니다. 전문적인 심리학적 임상 진단이나 의학적 육아 자문을 대체할 수 없으므로, 이용자는 이를 가벼운 재미와 학습 보조용 리포트로 참고해 주셔야 합니다.</p>
        
        <h4>3. 저작권 고지</h4>
        <p>본 웹사이트에 게재된 질문 내용, 결과 리포트 문구 및 AI 생성 캐릭터 일러스트 등의 지식 재산권은 원작자 및 당사 연구소에 귀속됩니다. 당사의 명시적 서면 동의 없이 본 콘텐츠를 영리 목적으로 무단 복제, 배포하는 행위는 엄격히 금지됩니다.</p>
      `,
      en: `
        <h4>1. Purpose and Acceptance of Terms</h4>
        <p>These terms govern your access to and use of this self-testing portal website. By accessing or initiating any test within the portal, you represent that you agree to all rules outlined herein.</p>
        
        <h4>2. Limitation of Services</h4>
        <p>All matching results, character evaluations, and tips provided by this site are purely for recreational and educational reference. They cannot replace clinical advice, professional diagnosis, or immigration counseling. You agree to use these services at your own discretion.</p>
        
        <h4>3. Intellectual Property Rights</h4>
        <p>All original question scripts, customized translations, HTML structures, and AI-generated vector characters are properties of this portal. Unauthorized reproduction or commercial distribution without written consent is strictly prohibited.</p>
      `
    }
  },
  disclaimer: {
    title: { ko: "사이트 면책 조항 (Disclaimer)", en: "Disclaimer" },
    body: {
      ko: `
        <h4>1. 법적 한계 및 정보의 타당성 고지</h4>
        <p>본 성향 테스트 포털에서 도출되는 모든 육아 동물 성향, 소울 국가 매칭, 전생 위인 및 MBTI 유형 분석 리포트는 전적으로 설문 가중치 알고리즘의 연산 결과에 따른 가벼운 오락 목적의 가이드입니다.</p>
        <p>국가별 조세 세율, 거주 기후, 영주 가능 여부 등의 외부 정보는 각국 법령 변경에 따라 실시간으로 변동될 수 있습니다. 따라서 당사는 본 사이트의 정보 오류나 누락, 혹은 이를 신뢰함으로써 발생한 사용자의 어떠한 물적, 정신적 손해에 대해서도 법적 책임을 지지 않음을 엄숙히 명시합니다.</p>
        
        <h4>2. 제3자 광고 및 외부 링크 책임</h4>
        <p>본 사이트에 노출되는 타사 광고 배너 또는 제3자 하이퍼링크를 타고 접속한 외부 웹사이트의 서비스 퀄리티, 개인정보 보안, 거래 신용 상태 등에 대해 당사는 일체의 연대 보증 책임을 지지 않습니다.</p>
      `,
      en: `
        <h4>1. Recreational Purpose and Non-Liability</h4>
        <p>All reports regarding soul countries, parenting types, past lives, and MBTI configurations are generated mathematically based on user weights for casual interest. They do not constitute formal consults or legal representations.</p>
        <p>While we strive for accuracy, immigration laws, local tax policies, and character reports might contain outdated indexes. We explicitly disclaim all liabilities for physical, financial, or mental damages resulting from the use of our services.</p>
        
        <h4>2. Third-Party Advertisements</h4>
        <p>This portal bears no responsibility for the contents, products, or safety protocols of third-party advertisements or external domains recommended by banner ads.</p>
      `
    }
  }
};

const policyModal = document.getElementById('policy-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');

const linkPrivacy = document.getElementById('link-privacy');
const linkTerms = document.getElementById('link-terms');
const linkDisclaimer = document.getElementById('link-disclaimer');

function openPolicyModal(type) {
  if (!policyContent[type]) return;
  modalTitle.textContent = policyContent[type].title[currentLang];
  modalBody.innerHTML = policyContent[type].body[currentLang];
  policyModal.classList.add('active');
}

function closePolicyModal() {
  policyModal.classList.remove('active');
}

if (linkPrivacy) linkPrivacy.addEventListener('click', (e) => { e.preventDefault(); openPolicyModal('privacy'); });
if (linkTerms) linkTerms.addEventListener('click', (e) => { e.preventDefault(); openPolicyModal('terms'); });
if (linkDisclaimer) linkDisclaimer.addEventListener('click', (e) => { e.preventDefault(); openPolicyModal('disclaimer'); });
if (closeModalBtn) closeModalBtn.addEventListener('click', closePolicyModal);
if (policyModal) policyModal.addEventListener('click', (e) => {
  if (e.target === policyModal) closePolicyModal();
});

