/**
 * @file script-quiz.js
 * @description 세대 공감 유행어 퀴즈 전용 스크립트입니다.
 * 객관식 문제를 채점하여 최종 맞힌 개수(0~10)에 따른 인싸 등급 결과를 도출합니다.
 */

// ============================================================
// 카카오 SDK 초기화 (결과 공유용)
// ============================================================
if (typeof Kakao !== 'undefined' && !Kakao.isInitialized()) {
  Kakao.init('5251b2427d7ba66cb0cff4ca6bac975e');
}

// ============================================================
// 1. 다국어 사전 (퀴즈 진행 화면에 필요한 텍스트)
// ============================================================
const i18nDict = {
  ko: {
    back_btn:          "↩ 홈으로",
    start_btn:         "퀴즈 시작하기",
    intro_duration:    "소요 시간: 약 3분",
    intro_questions:   "문항 수: {count}개",
    loading_title:     "채점 엔진 분석 중...",
    loading_tip_1:     "\"당신의 유행어 정답 여부 채점 중...\"",
    loading_tip_2:     "\"10대 신조어 반응도 수치 연산 중...\"",
    loading_tip_3:     "\"50대 레트로 감성 지표 매칭 중...\"",
    result_badge:      "나의 퀴즈 채점 결과는?",
    share_kakao:       "💬 카카오톡으로 결과 공유",
    share_whatsapp:    "🟢 WhatsApp으로 결과 공유",
    copy_link:         "🔗 결과 링크 복사하기",
    restart_btn:       "🔄 다시 도전하기",
    home_btn:          "🏠 테스트 모음 홈으로"
  },
  en: {
    back_btn:          "↩ Home",
    start_btn:         "Start Quiz",
    intro_duration:    "Duration: ~3 mins",
    intro_questions:   "Questions: {count} items",
    loading_title:     "Grading your quiz...",
    loading_tip_1:     "\"Grading your slang answers...\"",
    loading_tip_2:     "\"Calculating teenage slang accuracy...\"",
    loading_tip_3:     "\"Matching retro vibe intelligence indicators...\"",
    result_badge:      "Your Quiz Result",
    share_kakao:       "💬 Share via KakaoTalk",
    share_whatsapp:    "🟢 Share via WhatsApp",
    copy_link:         "🔗 Copy Link to Clipboard",
    restart_btn:       "🔄 Try Again",
    home_btn:          "🏠 Back to Portal Home"
  }
};

// ============================================================
// 2. 전역 상태 변수
// ============================================================
let currentLang           = 'ko';
let selectedTestId        = window.CURRENT_TEST_ID || 'buzzword-quiz';
let activeTestData        = window.activeTestData  || null; // 퀴즈 전체 데이터
let currentQuestionIndex  = 0;   // 현재 문항 번호
let quizScore             = 0;   // 맞힌 문제 개수 (0~10)
let lastCalculatedGrade   = '';   // 최종 결과 등급 키

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

    if (key === 'intro_questions' && activeTestData) {
      el.textContent = text.replace('{count}', activeTestData.questions.length);
      return;
    }

    if (text.includes('<') && text.includes('>')) {
      el.innerHTML = text;
    } else {
      el.textContent = text;
    }
  });
}

// ============================================================
// 6. 화면 전환 함수
// ============================================================
function showScreen(screenToShow) {
  [introScreen, testScreen, loadingScreen, resultScreen].forEach(screen => {
    screen.classList.remove('active');
  });
  screenToShow.classList.add('active');
  screenToShow.scrollTop = 0;
}

// ============================================================
// 7. 인트로 화면 렌더링
// ============================================================
function renderIntroScreen() {
  if (!activeTestData) return;

  const badgeEl = document.getElementById('intro-badge');
  badgeEl.textContent = currentLang === 'ko' ? '유행어 인싸 진단' : 'Slang Level';

  document.getElementById('intro-title').textContent = activeTestData.title[currentLang];
  document.getElementById('intro-desc').textContent  = activeTestData.description[currentLang];

  const introImg = document.getElementById('intro-image');
  introImg.src = 'images/trendy-fox.png'; // 퀴즈 기본 메인 이미지 (사막여우)

  translateStaticUI();
}

// ============================================================
// 8. 퀴즈 초기화
// ============================================================
function initTest() {
  if (!activeTestData) return;

  currentQuestionIndex = 0;
  quizScore = 0;
  lastCalculatedGrade = '';

  renderQuestion();
  showScreen(testScreen);
}

// ============================================================
// 9. 문항 동적 렌더링
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

  // 객관식 선택지 렌더링
  currentQuestion.options.forEach(option => {
    const button = document.createElement('button');
    button.className  = 'option-btn ripple';
    button.textContent = option.text[currentLang];

    button.addEventListener('click', () => {
      // 정답을 선택했는지 확인하여 점수 가산
      if (option.isCorrect) {
        quizScore++; // 맞힌 개수 누적
      }
      nextStep();
    });

    optionsContainer.appendChild(button);
  });
}

// ============================================================
// 10. 다음 문항으로 이동
// ============================================================
function nextStep() {
  currentQuestionIndex++;
  if (currentQuestionIndex < activeTestData.questions.length) {
    renderQuestion();
  } else {
    startLoading(); // 모든 문항 완료 -> 로딩 화면으로
  }
}

// ============================================================
// 11. 결과 대기 로딩 연출
// ============================================================
function startLoading() {
  showScreen(loadingScreen);

  const tips    = document.querySelectorAll('.tip-text');
  let tipIndex  = 0;

  if (currentLang === 'ko') {
    tips[0].textContent = "당신의 유행어 정답 여부 채점 중...";
    tips[1].textContent = "10대 신조어 반응도 수치 연산 중...";
    tips[2].textContent = "50대 레트로 감성 지표 매칭 중...";
  } else {
    tips[0].textContent = "Grading your slang answers...";
    tips[1].textContent = "Calculating teenage slang accuracy...";
    tips[2].textContent = "Matching retro vibe intelligence indicators...";
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

// ============================================================
// 12. 결과 계산 및 결과 화면 표시
// ============================================================
function showResult() {
  if (!activeTestData) return;

  // 맞힌 개수에 매칭되는 등급 결과 키 찾기
  let primaryResultKey = 'level_0';
  for (const key in activeTestData.results) {
    const res = activeTestData.results[key];
    if (quizScore >= res.minScore && quizScore <= res.maxScore) {
      primaryResultKey = key;
      break;
    }
  }

  lastCalculatedGrade = primaryResultKey;
  const resultData = activeTestData.results[primaryResultKey];

  if (!resultData) {
    console.error('결과 데이터를 찾을 수 없습니다:', primaryResultKey);
    return;
  }

  translateStaticUI();

  // 결과 화면 라벨 텍스트 적용 (buzzword-quiz.js의 labels 객체 연동)
  const labels = activeTestData.labels;
  document.getElementById('label-summary').textContent      = labels.summary[currentLang];
  document.getElementById('label-daily').textContent        = labels.daily[currentLang];
  if (document.getElementById('label-strengths')) {
    document.getElementById('label-strengths').textContent    = labels.strengths[currentLang];
  }
  if (document.getElementById('label-weaknesses')) {
    document.getElementById('label-weaknesses').textContent   = labels.weaknesses[currentLang];
  }
  document.getElementById('label-prescription').textContent = labels.prescription[currentLang];

  // 이미지 프레임 스타일 지정
  const imgBox = document.querySelector('.result-img-box');
  if (imgBox) {
    imgBox.classList.remove('flag-rect', 'char-rect');
    imgBox.classList.add('char-rect'); // 동물 일러스트 프레임 적용
  }

  // 결과 이미지 및 등급/유형 타이틀 바인딩
  if (resultImage) {
    resultImage.src = resultData.image;
    resultImage.alt = resultData.animalName[currentLang];
  }

  resultAnimalName.textContent = resultData.animalName[currentLang];
  resultTypeTitle.textContent  = resultData.typeTitle[currentLang];

  // 성향 해시태그 렌더링
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

  // 결과 상세 텍스트 바인딩
  resultSummary.textContent      = resultData.summary[currentLang];
  resultDaily.textContent        = resultData.dailyScene[currentLang];
  if (resultStrengths) {
    resultStrengths.textContent    = resultData.strengths[currentLang];
  }
  if (resultWeaknesses) {
    resultWeaknesses.textContent   = resultData.weaknesses[currentLang];
  }
  resultPrescription.textContent = resultData.prescription[currentLang];

  showScreen(resultScreen);
}

// ============================================================
// 13. 소셜 공유 기능
// ============================================================

// 결과 링크 복사
function copyLink() {
  const dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.value = window.location.href;
  dummy.select();
  try {
    const ok = document.execCommand('copy');
    if (ok) {
      alert(currentLang === 'ko'
        ? '공유 링크가 클립보드에 복사되었습니다!\n친구들에게 트렌디함을 뽐내보세요.'
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
  if (!lastCalculatedGrade || !activeTestData) return;

  const resultData  = activeTestData.results[lastCalculatedGrade];
  const resultName  = resultData.animalName[currentLang];
  const resultTitle = currentLang === 'ko'
    ? `[유행어 퀴즈] 나의 트렌드 등급은 '${resultName}'!`
    : `[Slang Quiz] My slang grade is '${resultName}'!`;
  
  const resultDesc = currentLang === 'ko'
    ? `유행어 퀴즈 최종 결과: 맞힌 개수 ${quizScore}/10개. 당신도 트렌드 인싸 등급을 측정해 보세요!`
    : `Slang Quiz Result: Score ${quizScore}/10. Test your trend grade now!`;

  // 유행어 결과 페이지에는 동물 이미지가 없으므로, 대표 썸네일인 사막여우 캐릭터 이미지를 절대경로로 주입
  const imageUrl = window.location.origin + '/images/trendy-fox.png';

  // 카카오 SDK 연동
  if (typeof Kakao !== 'undefined') {
    try {
      Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: resultTitle,
          description: resultDesc,
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: currentLang === 'ko' ? '퀴즈 도전하기' : 'Try Quiz',
            link: {
              mobileWebUrl: window.location.origin + window.location.pathname,
              webUrl: window.location.origin + window.location.pathname,
            },
          },
        ],
      });
    } catch (err) {
      console.error('Kakao share error:', err);
      fallbackCopyShare();
    }
  } else {
    fallbackCopyShare();
  }
}

// 카카오 공유 실패 시 폴백 함수
function fallbackCopyShare() {
  if (currentLang === 'ko') {
    alert("🔒 카카오톡 보안 정책 강화로 인해 공유 링크가 자동으로 복사되었습니다!\n카카오톡 대화방에 붙여넣기(Ctrl + V)하여 친구들과 편리하게 공유해 보세요.");
  } else {
    alert("🔒 Link copied to clipboard due to KakaoTalk security policy.\nPlease paste (Ctrl + V) in your KakaoTalk chat room to share!");
  }
  copyLink();
}

// 왓츠앱 공유
function shareToWhatsApp() {
  if (!lastCalculatedGrade || !activeTestData) return;
  const resultData  = activeTestData.results[lastCalculatedGrade];
  const resultName  = resultData.animalName[currentLang];
  const shareText   = currentLang === 'ko'
    ? `[유행어 퀴즈] 나의 트렌드 인싸 등급은 '${resultName}'이(가) 나왔어요! 당신도 도전해 보세요! 👉 ${window.location.href}`
    : `[Slang Quiz] My slang grade is '${resultName}'! Try the test! 👉 ${window.location.href}`;
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
}

// 지역별 공유 버튼 제어
function applyRegionalShareButtons() {
  if (currentLang === 'ko') {
    kakaoShareBtn.style.display   = 'block';
    whatsappShareBtn.style.display = 'none';
  } else {
    kakaoShareBtn.style.display   = 'none';
    whatsappShareBtn.style.display = 'block';
  }
}

// ============================================================
// 14. 초기화 실행 (페이지 로드 시 자동 실행)
// ============================================================
detectLanguage();

if (activeTestData && activeTestData.themeClass) {
  phoneContainer.classList.add(activeTestData.themeClass);
}

renderIntroScreen();
showScreen(introScreen);
applyRegionalShareButtons();

// 이벤트 연결
startBtn.addEventListener('click', initTest);
backToHomeBtn.addEventListener('click', () => { window.location.href = 'index.html'; });
restartBtn.addEventListener('click', initTest);
resultHomeBtn.addEventListener('click', () => { window.location.href = 'index.html'; });

shareBtn.addEventListener('click', copyLink);
kakaoShareBtn.addEventListener('click', shareToKakao);
whatsappShareBtn.addEventListener('click', shareToWhatsApp);
