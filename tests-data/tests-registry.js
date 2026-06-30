/**
 * @file tests-registry.js
 * @description 성향 테스트 포털 홈 화면에 카드를 그리고 동적 로딩을 수행하기 위한 통합 색인 데이터베이스입니다.
 * 미출시 카드 2종이 제거되고 신규 MBTI 성격 테스트 카드가 등록되었습니다.
 */

const testsRegistry = {
  "parenting-style": {
    id: "parenting-style",
    title: {
      ko: "우리 집 거실 육아 유형 테스트",
      en: "Living Room Parenting Style Test"
    },
    description: {
      ko: "장난감 정리부터 늦잠까지! 매일 거실에서 겪는 10가지 딜레마 속 나의 진짜 동물 유형은?",
      en: "Dilemmas like cleaning toys and oversleeping! What is your parenting animal type in daily life?"
    },
    icon: "🏠",
    status: "active",
    themeClass: "theme-pastel-cream",
    dataPath: "tests-data/parenting-style.js"
  },
  "soul-country": {
    id: "soul-country",
    title: {
      ko: "나에게 맞는 소울 컨트리 찾기",
      en: "Where is My Soul Country?"
    },
    description: {
      ko: "업무 스타일, 라이프스타일, 예산, 기후 등 가치관 기반 15가지 질문으로 알아보는 나의 완벽한 매칭 국가!",
      en: "Discover your perfect match from global countries based on 15 realistic lifestyle questions!"
    },
    icon: "✈️",
    status: "active",
    themeClass: "theme-pastel-cream",
    dataPath: "tests-data/soul-country.js"
  },
  "past-life": {
    id: "past-life",
    title: {
      ko: "재미로 보는 나의 전생 유형 테스트",
      en: "What Was I in My Past Life?"
    },
    description: {
      ko: "이순신 장군부터 클레오파트라까지! 가벼운 10가지 딜레마로 전생 속 당신의 위대한 역사적 정체를 밝혀보세요!",
      en: "From Admiral Yi Sun-sin to Cleopatra! Discover your grand historical identity through 10 easy questions!"
    },
    icon: "⏳",
    status: "active",
    themeClass: "theme-pastel-cream",
    dataPath: "tests-data/past-life.js"
  },
  "mbti-test": {
    id: "mbti-test",
    title: {
      ko: "개성 만점 인물 캐릭터 MBTI 테스트",
      en: "Persona Character MBTI Test"
    },
    description: {
      ko: "15가지 일상 선택으로 분석하는 나의 진짜 MBTI 유형과 이에 어울리는 개성 만점 현대인 캐릭터 캐릭터 매칭!",
      en: "Discover your true MBTI and get matched with one of 16 quirky modern character personas through 15 questions!"
    },
    icon: "🎭",
    status: "active",
    themeClass: "theme-pastel-cream",
    dataPath: "tests-data/mbti-test.js"
  }
};
