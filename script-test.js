/**
 * @file script-test.js
 * @description 모든 개별 테스트 페이지(parenting-style.html, soul-country.html 등)에서
 * 공통으로 사용하는 테스트 진행 로직입니다.
 *
 * [사용 방법]
 * 각 테스트 HTML 파일에서 이 파일보다 앞서 다음 두 가지가 실행되어야 합니다:
 *   1. window.CURRENT_TEST_ID = 'parenting-style';  ← 테스트 ID 설정
 *   2. <script src="tests-data/parenting-style.js">  ← 데이터 로드 (window.activeTestData 설정)
 */

// ============================================================
// 1. 다국어 사전 (테스트 진행 화면에 필요한 텍스트)
// ============================================================
const i18nDict = {
  ko: {
    back_btn:          "↩ 홈으로",
    start_btn:         "테스트 시작하기",
    intro_duration:    "소요 시간: 약 3분",
    intro_questions:   "문항 수: {count}개",
    loading_title:     "분석 엔진 가동 중...",
    loading_tip_1:     "\"답변 데이터 가중치 연산 중...\"",
    loading_tip_2:     "\"당신만의 특별한 성향 데이터를 분석하는 중...\"",
    loading_tip_3:     "\"매칭 결과를 촘촘히 큐레이션하는 중...\"",
    result_badge:      "나의 테스트 결과는?",
    alternative_title: "차선책으로 추천하는 2순위 국가",
    share_kakao:       "💬 카카오톡으로 결과 공유",
    share_whatsapp:    "🟢 WhatsApp으로 결과 공유",
    copy_link:         "🔗 결과 링크 복사하기",
    restart_btn:       "🔄 다시 테스트하기",
    home_btn:          "🏠 테스트 모음 홈으로"
  },
  en: {
    back_btn:          "↩ Home",
    start_btn:         "Start Test",
    intro_duration:    "Duration: ~3 mins",
    intro_questions:   "Questions: {count} items",
    loading_title:     "Analyzing answers...",
    loading_tip_1:     "\"Aggregating your values and metrics...\"",
    loading_tip_2:     "\"Cross-analyzing lifestyle choices...\"",
    loading_tip_3:     "\"Curating the best match for you...\"",
    result_badge:      "Your Test Result",
    alternative_title: "Alternative Match (2nd Recommendation)",
    share_kakao:       "💬 Share via KakaoTalk",
    share_whatsapp:    "🟢 Share via WhatsApp",
    copy_link:         "🔗 Copy Link to Clipboard",
    restart_btn:       "🔄 Retake Test",
    home_btn:          "🏠 Back to Portal Home"
  }
};

// ============================================================
// 2. 전역 상태 변수
//    - window.CURRENT_TEST_ID: 각 HTML 파일에서 미리 설정
//    - window.activeTestData: 각 데이터 JS 파일에서 미리 설정
// ============================================================
let currentLang           = 'ko';
let selectedTestId        = window.CURRENT_TEST_ID || '';  // 예: 'parenting-style'
let activeTestData        = window.activeTestData  || null; // 테스트 전체 데이터
let currentQuestionIndex  = 0;   // 현재 문항 번호
let userScores            = {};   // 답변별 누적 점수
let lastCalculatedAnimal  = '';   // 1순위 결과 키
let lastAlternativeAnimal = '';   // 2순위 결과 키

// ============================================================
// 3. DOM 요소 바인딩
// ============================================================
const phoneContainer    = document.getElementById('phone-container');
const introScreen       = document.getElementById('intro-screen');
const testScreen        = document.getElementById('test-screen');
const loadingScreen     = document.getElementById('loading-screen');
const resultScreen      = document.getElementById('result-screen');

const startBtn          = document.getElementById('start-btn');
const backToHomeBtn     = document.getElementById('back-to-home');
const restartBtn        = document.getElementById('restart-btn');
const resultHomeBtn     = document.getElementById('result-home-btn');
const shareBtn          = document.getElementById('share-btn');
const kakaoShareBtn     = document.getElementById('kakao-share-btn');
const whatsappShareBtn  = document.getElementById('whatsapp-share-btn');

const questionCounter   = document.getElementById('question-counter');
const progressBar       = document.getElementById('progress-bar');
const questionText      = document.getElementById('question-text');
const optionsContainer  = document.getElementById('options-container');

const resultImage       = document.getElementById('result-image');
const resultAnimalName  = document.getElementById('result-animal');
const resultTypeTitle   = document.getElementById('result-title');
const resultTraits      = document.getElementById('result-traits');
const resultSummary     = document.getElementById('result-summary');
const resultDaily       = document.getElementById('result-daily');
const resultStrengths   = document.getElementById('result-strengths');
const resultWeaknesses  = document.getElementById('result-weaknesses');
const resultPrescription= document.getElementById('result-prescription');
const alternativeCard   = document.getElementById('alternative-card');
const resultAlternative = document.getElementById('result-alternative');

// ============================================================
// 4. 브라우저 언어 자동 감지
// ============================================================
function detectLanguage() {
  const lang = navigator.language || navigator.userLanguage || 'ko';
  currentLang = lang.startsWith('ko') ? 'ko' : 'en';
}

// ============================================================
// 5. 정적 UI 텍스트 번역
// ============================================================
function translateStaticUI() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = i18nDict[currentLang]?.[key];
    if (!text) return;

    // 문항 수 표시: {count} 자리에 실제 숫자 대입
    if (key === 'intro_questions' && activeTestData) {
      el.textContent = text.replace('{count}', activeTestData.questions.length);
      return;
    }

    // HTML 태그가 포함된 텍스트는 innerHTML로 처리
    if (text.includes('<') && text.includes('>')) {
      el.innerHTML = text;
    } else {
      el.textContent = text;
    }
  });
}

// ============================================================
// 6. 화면 전환 함수
//    - 모든 화면에서 active 클래스를 제거하고 지정된 화면만 활성화
// ============================================================
function showScreen(screenToShow) {
  [introScreen, testScreen, loadingScreen, resultScreen].forEach(screen => {
    screen.classList.remove('active');
  });
  screenToShow.classList.add('active');
  screenToShow.scrollTop = 0; // 화면 상단으로 스크롤 초기화
}

// ============================================================
// 7. 인트로 화면 렌더링
//    - 테스트 제목, 설명, 대문 이미지, 배지 텍스트 설정
// ============================================================
function renderIntroScreen() {
  if (!activeTestData) return;

  // 상단 배지 텍스트 분기
  const badgeEl = document.getElementById('intro-badge');
  if (selectedTestId === 'parenting-style') {
    badgeEl.textContent = currentLang === 'ko' ? '육아 성향 진단' : 'Parenting Style';
  } else if (selectedTestId === 'past-life') {
    badgeEl.textContent = currentLang === 'ko' ? '전생 유형 진단' : 'Past Life Type';
  } else if (selectedTestId === 'mbti-test') {
    badgeEl.textContent = currentLang === 'ko' ? 'MBTI 성격 유형' : 'MBTI Type';
  } else {
    badgeEl.textContent = currentLang === 'ko' ? '글로벌 매칭' : 'Global Match';
  }

  // 제목과 설명 텍스트 세팅
  document.getElementById('intro-title').textContent = activeTestData.title[currentLang];
  document.getElementById('intro-desc').textContent  = activeTestData.description[currentLang];

  // 테스트별 대문 이미지 분기
  const introImg = document.getElementById('intro-image');
  if (selectedTestId === 'soul-country') {
    introImg.src = 'images/soul-country-main.png';
  } else if (selectedTestId === 'past-life') {
    introImg.src = 'images/past-life-main.png';
  } else if (selectedTestId === 'mbti-test') {
    introImg.src = 'images/mbti-main.png';
  } else {
    introImg.src = 'images/dolphin.png'; // 육아 테스트 기본 이미지
  }

  translateStaticUI(); // 버튼 텍스트 등 나머지 UI 번역
}

// ============================================================
// 8. 테스트 초기화 (시작 or 다시하기 버튼 클릭 시 실행)
// ============================================================
function initTest() {
  if (!activeTestData) return;

  currentQuestionIndex = 0;
  userScores = {};
  lastCalculatedAnimal = '';
  lastAlternativeAnimal = '';

  // MBTI 테스트는 8개 지표(E/I/S/N/T/F/J/P)를 0점으로 초기화
  if (selectedTestId === 'mbti-test') {
    ['E', 'I', 'S', 'N', 'T', 'F', 'J', 'P'].forEach(key => {
      userScores[key] = 0;
    });
  } else {
    // 그 외 테스트는 결과 키 목록을 0점으로 초기화
    for (const key in activeTestData.results) {
      userScores[key] = 0;
    }
  }

  renderQuestion();
  showScreen(testScreen);
}

// ============================================================
// 9. 문항 동적 렌더링
//    - 슬라이더 문항과 객관식 문항 두 가지 타입을 처리
// ============================================================
function renderQuestion() {
  if (!activeTestData) return;

  const currentQuestion = activeTestData.questions[currentQuestionIndex];
  const totalQuestions  = activeTestData.questions.length;

  // 진행 상태 표시
  questionCounter.textContent = `${String(currentQuestionIndex + 1).padStart(2, '0')} / ${String(totalQuestions).padStart(2, '0')}`;
  progressBar.style.width = `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`;

  // 질문 텍스트 출력
  questionText.textContent = currentQuestion.scenario[currentLang];
  optionsContainer.innerHTML = ''; // 이전 선택지 초기화

  if (currentQuestion.type === 'slider') {
    // ---- 슬라이더 타입 렌더링 ----
    const sliderWrapper = document.createElement('div');
    sliderWrapper.className = 'slider-wrapper';

    // 좌우 가이드 라벨
    const labelsDiv  = document.createElement('div');
    labelsDiv.className = 'slider-labels';
    const leftSpan   = document.createElement('span');
    leftSpan.className = 'slider-label-left';
    leftSpan.textContent = currentQuestion.leftLabel[currentLang];
    const rightSpan  = document.createElement('span');
    rightSpan.className = 'slider-label-right';
    rightSpan.textContent = currentQuestion.rightLabel[currentLang];
    labelsDiv.appendChild(leftSpan);
    labelsDiv.appendChild(rightSpan);

    // 슬라이더 인풋 (0~100 범위)
    const sliderInput = document.createElement('input');
    sliderInput.type  = 'range';
    sliderInput.min   = '0';
    sliderInput.max   = '100';
    sliderInput.value = '50'; // 기본값: 중간
    sliderInput.className = 'custom-range-slider';

    // 현재 선택 위치 안내 텍스트
    const valueIndicator = document.createElement('div');
    valueIndicator.className = 'slider-value-indicator';
    valueIndicator.textContent = currentLang === 'ko' ? '⚖️ 균형 (Neutral)' : '⚖️ Balanced (Neutral)';

    // 슬라이더 이동 시 안내 텍스트 실시간 업데이트
    sliderInput.addEventListener('input', () => {
      const val = parseInt(sliderInput.value);
      if (val < 40) {
        valueIndicator.textContent = currentLang === 'ko'
          ? `👈 '${currentQuestion.leftLabel[currentLang]}' 지향`
          : `👈 Prefer '${currentQuestion.leftLabel[currentLang]}'`;
      } else if (val > 60) {
        valueIndicator.textContent = currentLang === 'ko'
          ? `👉 '${currentQuestion.rightLabel[currentLang]}' 지향`
          : `👉 Prefer '${currentQuestion.rightLabel[currentLang]}'`;
      } else {
        valueIndicator.textContent = currentLang === 'ko' ? '⚖️ 균형 (Neutral)' : '⚖️ Balanced (Neutral)';
      }
    });

    // 선택 확인 버튼
    const submitBtn = document.createElement('button');
    submitBtn.className = 'btn btn-primary ripple slider-submit-btn';
    submitBtn.textContent = currentLang === 'ko' ? '이 가치관 선택하기' : 'Apply Vibe';

    submitBtn.addEventListener('click', () => {
      const finalVal   = parseInt(sliderInput.value);
      const thresholds = currentQuestion.sliderScores.thresholds;

      // 슬라이더 위치가 해당 구간에 맞는 점수 부여
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
    // ---- 객관식 타입 렌더링 ----
    currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.className  = 'option-btn ripple';
      button.textContent = option.text[currentLang];

      button.addEventListener('click', () => {
        // 선택된 답변의 점수를 누적
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

// ============================================================
// 10. 다음 문항으로 이동 (마지막 문항이면 로딩 화면으로)
// ============================================================
function nextStep() {
  currentQuestionIndex++;
  if (currentQuestionIndex < activeTestData.questions.length) {
    renderQuestion();
  } else {
    startLoading(); // 모든 문항 완료 → 결과 로딩 시작
  }
}

// ============================================================
// 11. 결과 대기 로딩 연출 (2.4초 후 결과 화면으로)
// ============================================================
function startLoading() {
  showScreen(loadingScreen);

  const tips    = document.querySelectorAll('.tip-text');
  let tipIndex  = 0;

  // 테스트 유형별 재미있는 로딩 메시지 분기
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
  } else if (selectedTestId === 'past-life') {
    if (currentLang === 'ko') {
      tips[0].textContent = "역사의 강을 건너 전생 데이터를 탐색하는 중...";
      tips[1].textContent = "당신의 전생 시대와 역사적 좌표를 분석하는 중...";
      tips[2].textContent = "세계 역사 인물 DNA와 성향 교차 매칭 중...";
    } else {
      tips[0].textContent = "Traversing the rivers of history...";
      tips[1].textContent = "Analyzing your past-life era and coordinates...";
      tips[2].textContent = "Cross-matching with historical figure DNA...";
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
    // 육아 테스트
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

  // 0.8초마다 로딩 팁 텍스트 교체
  const tipInterval = setInterval(() => {
    tips.forEach(tip => tip.classList.remove('active'));
    tipIndex = (tipIndex + 1) % tips.length;
    tips[tipIndex].classList.add('active');
  }, 800);

  // 2.4초 후 결과 화면으로 전환
  setTimeout(() => {
    clearInterval(tipInterval);
    showResult();
  }, 2400);
}

// ============================================================
// 12. 결과 계산 및 결과 화면 표시
// ============================================================
function showResult() {
  if (!activeTestData) return;

  let primaryResultKey   = '';
  let secondaryResultKey = '';

  if (selectedTestId === 'mbti-test') {
    // MBTI: 4개 축 중 높은 쪽을 선택해 4자리 코드 조합
    const eVal = userScores['E'] || 0; const iVal = userScores['I'] || 0;
    const sVal = userScores['S'] || 0; const nVal = userScores['N'] || 0;
    const tVal = userScores['T'] || 0; const fVal = userScores['F'] || 0;
    const jVal = userScores['J'] || 0; const pVal = userScores['P'] || 0;

    const mbtiCode =
      (eVal >= iVal ? 'E' : 'I') +
      (sVal >= nVal ? 'S' : 'N') +
      (tVal >= fVal ? 'T' : 'F') +
      (jVal >= pVal ? 'J' : 'P');

    primaryResultKey   = mbtiCode;
    secondaryResultKey = mbtiCode; // MBTI는 2순위 없음
  } else {
    // 그 외: 점수 내림차순 정렬 후 1위, 2위 선택
    const sortedKeys   = Object.keys(userScores).sort((a, b) => userScores[b] - userScores[a]);
    primaryResultKey   = sortedKeys[0];
    secondaryResultKey = sortedKeys[1] || sortedKeys[0];
  }

  lastCalculatedAnimal  = primaryResultKey;
  lastAlternativeAnimal = secondaryResultKey;

  const resultData      = activeTestData.results[primaryResultKey];
  const alternativeData = activeTestData.results[secondaryResultKey];

  if (!resultData) {
    console.error('결과 데이터를 찾을 수 없습니다:', primaryResultKey);
    return;
  }

  translateStaticUI();

  // 결과 화면 라벨 텍스트 (테스트 데이터의 labels 필드에서 가져옴)
  const labels = activeTestData.labels;
  document.getElementById('label-summary').textContent      = labels.summary[currentLang];
  document.getElementById('label-daily').textContent        = labels.daily[currentLang];
  document.getElementById('label-strengths').textContent    = labels.strengths[currentLang];
  document.getElementById('label-weaknesses').textContent   = labels.weaknesses[currentLang];
  document.getElementById('label-prescription').textContent = labels.prescription[currentLang];

  // 테스트 유형별 이미지 프레임 스타일 분기
  const imgBox = document.querySelector('.result-img-box');
  imgBox.classList.remove('flag-rect', 'char-rect');
  if (selectedTestId === 'soul-country') {
    imgBox.classList.add('flag-rect');                    // 소울컨트리: 국기 직사각형 프레임
  } else if (selectedTestId === 'past-life' || selectedTestId === 'mbti-test') {
    imgBox.classList.add('char-rect');                    // 전생/MBTI: 캐릭터 직사각형 프레임
  }

  // 결과 이미지 세팅
  resultImage.src = resultData.image;
  resultImage.alt = resultData.animalName[currentLang];

  // 결과 대상 이름 (육아 테스트는 "○○ 부모" 형태)
  if (selectedTestId === 'parenting-style') {
    resultAnimalName.textContent = resultData.animalName[currentLang] + (currentLang === 'ko' ? ' 부모' : ' Parent');
  } else {
    resultAnimalName.textContent = resultData.animalName[currentLang];
  }

  resultTypeTitle.textContent = resultData.typeTitle[currentLang];

  // 성향 태그 렌더링 (•로 구분된 텍스트를 개별 태그로 분리)
  resultTraits.innerHTML = '';
  const tags = resultData.coreTraits[currentLang].split('•');
  tags.forEach(tag => {
    const trimmed = tag.trim();
    if (!trimmed) return;
    const span = document.createElement('span');
    span.className   = 'tag';
    span.textContent = '#' + trimmed;
    resultTraits.appendChild(span);
  });

  // 결과 세부 텍스트 채우기
  resultSummary.textContent     = resultData.summary[currentLang];
  resultDaily.textContent       = resultData.dailyScene[currentLang];
  resultStrengths.textContent   = resultData.strengths[currentLang];
  resultWeaknesses.textContent  = resultData.weaknesses[currentLang];
  resultPrescription.textContent= resultData.prescription[currentLang];

  // 소울컨트리만 2순위 추천 카드 표시
  if (selectedTestId === 'soul-country' && alternativeData && primaryResultKey !== secondaryResultKey) {
    alternativeCard.style.display = 'block';
    const altText = currentLang === 'ko'
      ? `✈️ 2순위 차선책 국가: ${alternativeData.animalName[currentLang]}`
      : `✈️ 2nd Choice Country: ${alternativeData.animalName[currentLang]}`;
    resultAlternative.textContent = altText;
  } else {
    alternativeCard.style.display = 'none';
  }

  showScreen(resultScreen);
}

// ============================================================
// 13. 소셜 공유 기능
// ============================================================

// 결과 링크 클립보드 복사
function copyLink() {
  const dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.value = window.location.href;
  dummy.select();
  try {
    const ok = document.execCommand('copy');
    if (ok) {
      alert(currentLang === 'ko'
        ? '공유 링크가 클립보드에 복사되었습니다!\n친구들에게 추천해보세요.'
        : 'Link copied to clipboard! Share it with your friends.');
    }
  } catch (err) {
    alert(currentLang === 'ko'
      ? '주소창의 URL을 직접 복사해주세요.'
      : 'Please copy the URL from the address bar.');
  }
  document.body.removeChild(dummy);
}

// 카카오톡 공유
function shareToKakao() {
  // [공지] 카카오톡 웹 공유 링크(sharer.kakao.com) 서비스 폐쇄로 인한 클립보드 자동 복사 우회 처리
  if (currentLang === 'ko') {
    alert("🔒 카카오톡 보안 정책 강화로 인해 공유 링크가 자동으로 복사되었습니다!\n카카오톡 대화방에 붙여넣기(Ctrl + V)하여 친구들과 편리하게 공유해 보세요.");
  } else {
    alert("🔒 Link copied to clipboard due to KakaoTalk security policy.\nPlease paste (Ctrl + V) in your KakaoTalk chat room to share!");
  }
  copyLink(); // 클립보드 복사 함수 호출
}

// 왓츠앱 공유
function shareToWhatsApp() {
  if (!lastCalculatedAnimal || !activeTestData) return;
  const resultData  = activeTestData.results[lastCalculatedAnimal];
  const resultName  = resultData.animalName[currentLang];
  const shareText   = currentLang === 'ko'
    ? `[테스트 연구소] 나의 결과는 '${resultName}'이(가) 나왔어요! 당신도 테스트해보세요! 👉 ${window.location.href}`
    : `[Test Lab] My result is '${resultName}'! Take the test! 👉 ${window.location.href}`;
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
}

// ============================================================
// 14. 초기화 실행 (페이지 로드 시 자동 실행)
// ============================================================
detectLanguage();

// ============================================================
// 지역별 공유 버튼 표시 설정
// - 한국어 환경(ko): 카카오톡 버튼 표시, 왓츠앱 버튼 숨김
// - 해외 환경(en 등): 왓츠앱 버튼 표시, 카카오톡 버튼 숨김
// 브라우저 언어(navigator.language)로 자동 감지합니다.
// ============================================================
function applyRegionalShareButtons() {
  if (currentLang === 'ko') {
    // 한국 사용자: 카카오톡 표시, 왓츠앱 숨김
    kakaoShareBtn.style.display   = 'block';
    whatsappShareBtn.style.display = 'none';
  } else {
    // 해외 사용자: 왓츠앱 표시, 카카오톡 숨김
    kakaoShareBtn.style.display   = 'none';
    whatsappShareBtn.style.display = 'block';
  }
}

// 테마 클래스 적용 (데이터 파일의 themeClass 값 사용)
if (activeTestData && activeTestData.themeClass) {
  phoneContainer.classList.add(activeTestData.themeClass);
}

// 인트로 화면 렌더링 및 표시
renderIntroScreen();
showScreen(introScreen);

// 지역별 공유 버튼 적용 (언어 감지 후 바로 실행)
applyRegionalShareButtons();

// 이벤트 연결
startBtn.addEventListener('click', initTest); // 테스트 시작

// 홈으로 버튼 클릭 시 index.html(포털 홈)으로 이동
backToHomeBtn.addEventListener('click', () => { window.location.href = 'index.html'; });
restartBtn.addEventListener('click', initTest); // 다시하기: 테스트 재초기화
resultHomeBtn.addEventListener('click', () => { window.location.href = 'index.html'; }); // 홈 이동

shareBtn.addEventListener('click', copyLink);
kakaoShareBtn.addEventListener('click', shareToKakao);
whatsappShareBtn.addEventListener('click', shareToWhatsApp);

