/**
 * @file soul-country.js
 * @description 글로벌 소울 컨트리 매칭 테스트(15문항, 14개국 - 한국, 중국 추가)에 대한 한국어/영어 다국어 콘텐츠 데이터셋입니다.
 * 1번~5번 질문은 슬라이더(type: "slider") 형식이며, 6번~15번 질문은 객관식(type: "choice") 형식입니다.
 */

window.activeTestData = {
  id: "soul-country",
  title: {
    ko: "나에게 맞는 찰떡 궁합 나라 찾기",
    en: "Where is My Soul Country?"
  },
  description: {
    ko: "업무 스타일, 라이프스타일, 예산, 기후 등 가치관 기반 15가지 질문으로 알아보는 나의 완벽한 매칭 국가!",
    en: "Discover your perfect match from global countries based on 15 realistic lifestyle questions!"
  },
  icon: "✈️",
  status: "active",
  themeClass: "theme-pastel-cream",
  labels: {
    summary: { ko: "국가 매칭 한줄 요약", en: "Soul Country Summary" },
    daily: { ko: "이 국가가 당신에게 완벽한 매칭인 이유 (Curation Report)", en: "Why This Country is Your Perfect Match" },
    strengths: { ko: "추천 체류 비자 종류", en: "Recommended Visas" },
    weaknesses: { ko: "디지털 노마드 / 한 달 살기 적정 비용", en: "Living Costs per Month" },
    prescription: { ko: "추천 도시 및 현지 적응 라이프스타일 팁", en: "Recommended Cities & Living Tips" }
  },
  questions: [
    // 1번 ~ 5번: 슬라이더 문항 (type: "slider")
    {
      id: 1,
      type: "slider",
      scenario: {
        ko: "당신이 선호하는 기후와 자연 환경의 가치관은 어느 쪽에 가깝나요?",
        en: "Which climate and natural environment fits your soul the best?"
      },
      leftLabel: { ko: "❄️ 겨울왕국 (시원/추움)", en: "❄️ Cool/Cold Climate" },
      rightLabel: { ko: "☀️ 뜨거운 태양 (더움/열대)", en: "☀️ Hot/Tropical Sun" },
      sliderScores: {
        thresholds: [
          {
            range: [0, 40], // 왼쪽 성향
            scores: { canada: 3, sweden: 3, switzerland: 3, austria: 3, germany: 3, uk: 2 }
          },
          {
            range: [60, 100], // 오른쪽 성향
            scores: { thailand: 3, vietnam: 3, indonesia: 3, malaysia: 3, portugal: 3, spain: 3, australia: 2, singapore: 2 }
          }
        ]
      }
    },
    {
      id: 2,
      type: "slider",
      scenario: {
        ko: "이주 생활비 예산과 럭셔리 인프라 사이에서 당신의 선택은?",
        en: "How do you balance living cost savings against premium urban infrastructure?"
      },
      leftLabel: { ko: "💸 가성비/저렴한 생활비", en: "💸 Budget & Cost Savings" },
      rightLabel: { ko: "💎 프리미엄 럭셔리 인프라", en: "💎 Luxury & Best Infrastructure" },
      sliderScores: {
        thresholds: [
          {
            range: [0, 40],
            scores: { thailand: 3, vietnam: 3, indonesia: 3, malaysia: 3, portugal: 3, spain: 2 }
          },
          {
            range: [60, 100], // 오른쪽 성향
            scores: { usa: 3, uk: 3, singapore: 3, switzerland: 3, japan: 3, hongkong: 3, korea: 3, canada: 2 }
          }
        ]
      }
    },
    {
      id: 3,
      type: "slider",
      scenario: {
        ko: "인생의 정착지에서 철저한 치안과 모험적인 자유 중 무엇을 더 추구하나요?",
        en: "What matters more in your destination: ultimate safety or adventurous freedom?"
      },
      leftLabel: { ko: "👮 무결점 초안전 치안", en: "👮 Flawless Public Safety" },
      rightLabel: { ko: "🧗 자유로운 자연과 모험", en: "🧗 Adventure & Pure Freedom" },
      sliderScores: {
        thresholds: [
          {
            range: [0, 40],
            scores: { singapore: 3, japan: 3, switzerland: 3, korea: 3, austria: 3, hongkong: 2 }
          },
          {
            range: [60, 100],
            scores: { usa: 3, canada: 3, australia: 3, newzealand: 3, spain: 2, thailand: 2 }
          }
        ]
      }
    },
    {
      id: 4,
      type: "slider",
      scenario: {
        ko: "당신의 이상적인 워크 스타일과 인생의 가중치는 어느 쪽에 쏠려있나요?",
        en: "Where does your focus lie: career success or relaxing work-life balance?"
      },
      leftLabel: { ko: "🔥 성공과 경쟁 (Career)", en: "🔥 Career & Competition" },
      rightLabel: { ko: "🏡 슬로우 라이프 (Work-Life)", en: "🏡 Relaxing Work-Life" },
      sliderScores: {
        thresholds: [
          {
            range: [0, 40],
            scores: { usa: 3, singapore: 3, hongkong: 3, korea: 3, china: 3 }
          },
          {
            range: [60, 100],
            scores: { sweden: 3, germany: 3, australia: 3, newzealand: 3, austria: 3, france: 3, italy: 3, portugal: 3, spain: 2 }
          }
        ]
      }
    },
    {
      id: 5,
      type: "slider",
      scenario: {
        ko: "식문화와 정서적인 거리에서 아시아의 친숙함과 서양의 이국성 중 무엇을 더 바라나요?",
        en: "Do you prefer familiar Asian cultures/foods or exotic Western heritage?"
      },
      leftLabel: { ko: "🍜 친숙하고 매콤한 아시아", en: "🍜 Familiar Asian Vibe" },
      rightLabel: { ko: "🧀 이국적인 유럽/서양", en: "🧀 Exotic Western Heritage" },
      sliderScores: {
        thresholds: [
          {
            range: [0, 40],
            scores: { korea: 3, japan: 3, china: 3, singapore: 3, hongkong: 3, thailand: 3, vietnam: 3, indonesia: 2, malaysia: 2 }
          },
          {
            range: [60, 100],
            scores: { usa: 3, uk: 3, canada: 3, australia: 3, germany: 3, france: 3, italy: 3, spain: 3, switzerland: 3, austria: 2, portugal: 2 }
          }
        ]
      }
    },

    // 6번 ~ 15번: 일반 객관식 문항 (type: "choice")
    {
      id: 6,
      type: "choice",
      scenario: {
        ko: "당신이 현지에서 거주하고 거닐고 싶은 도시의 적절한 밀도는?",
        en: "What is your preferred population density and urban crowd scale?"
      },
      options: [
        {
          text: {
            ko: "고층 마천루와 밤낮없이 에너지가 넘치고 힙한 초대형 글로벌 대도시",
            en: "A massive, energetic metropolis with endless skyscrapers and active nightlife."
          },
          scores: { usa: 3, singapore: 3, hongkong: 3, korea: 3, china: 3, uk: 2 }
        },
        {
          text: {
            ko: "한적하고 여유로우며 숲과 공원, 단독주택들이 평화롭게 늘어선 조용한 소도시",
            en: "A peaceful, low-density suburb with green parks and private houses."
          },
          scores: { newzealand: 3, canada: 3, sweden: 3, australia: 3, austria: 2, germany: 2 }
        }
      ]
    },
    {
      id: 7,
      type: "choice",
      scenario: {
        ko: "국가의 세금 정책과 사회 복지망에 대한 당신의 뚜렷한 가치관은?",
        en: "What is your preference regarding national tax rates and social welfare?"
      },
      options: [
        {
          text: {
            ko: "세금을 많이 내더라도 자녀 무상 교육, 탄탄한 노후 보장이 약속되는 국가",
            en: "High taxes for solid social welfare, free education, and pension networks."
          },
          scores: { sweden: 3, germany: 3, austria: 3, canada: 2, uk: 2, france: 2 }
        },
        {
          text: {
            ko: "세율을 최대한 낮춰 개인이 버는 만큼 온전히 자산으로 굴릴 수 있는 금융 자율화 국가",
            en: "Minimal tax rates to keep my hard-earned income with high financial freedom."
          },
          scores: { singapore: 3, hongkong: 3, usa: 3, malaysia: 2, thailand: 2 }
        }
      ]
    },
    {
      id: 8,
      type: "choice",
      scenario: {
        ko: "매일 다니는 대중교통 인프라와 자가용 차량 운전에 관한 선호도는?",
        en: "How do you prefer to commute or travel on a daily basis?"
      },
      options: [
        {
          text: {
            ko: "차 없이 스마트폰과 대중교통(지하철, 버스)으로 온 동네를 정밀하게 이동 가능한 곳",
            en: "Relying on clean, dense subway networks and high-frequency trains without a car."
          },
          scores: { japan: 3, korea: 3, singapore: 3, hongkong: 3, china: 3, uk: 2 }
        },
        {
          text: {
            ko: "광활한 도로를 직접 차량을 운전하며 여유롭게 드라이브하고 주차장이 넉넉한 곳",
            en: "Driving my own car on vast highways and having spacious free parking spots."
          },
          scores: { usa: 3, canada: 3, australia: 3, newzealand: 3 }
        }
      ]
    },
    {
      id: 9,
      type: "choice",
      scenario: {
        ko: "외국에서 거주할 때 현지 로컬 언어에 대한 당신의 포용력은?",
        en: "What is your approach to learning and speaking local foreign languages?"
      },
      options: [
        {
          text: {
            ko: "로컬 언어 학습 스트레스 사절! 무조건 영어가 공용어로 통용되는 환경이 좋다.",
            en: "No local language stress! I want an environment where English is 100% sufficient."
          },
          scores: { usa: 3, uk: 3, singapore: 3, canada: 3, australia: 3, newzealand: 3, malaysia: 2, hongkong: 2 }
        },
        {
          text: {
            ko: "이국적인 매력의 제2외국어(일본어, 중국어, 독일어 등)를 기꺼이 즐겁게 배우고 싶다.",
            en: "I enjoy learning and blending into local dialects (Japanese, Chinese, French, etc.)."
          },
          scores: { japan: 3, korea: 3, china: 3, germany: 3, france: 3, italy: 3, spain: 3, portugal: 3 }
        }
      ]
    },
    {
      id: 10,
      type: "choice",
      scenario: {
        ko: "현지 정착 시 당신이 매일 눈을 뜨고 싶은 가장 이상적인 주거 타입은?",
        en: "What type of housing aligns best with your dream lifestyle?"
      },
      options: [
        {
          text: {
            ko: "시내 중심가에 위치한 헬스장, 수영장, 철저한 24시간 보안 시스템을 갖춘 고급 고층 콘도/레지던스",
            en: "Modern high-rise condos with gym, pool access, and strict round-the-clock security."
          },
          scores: { singapore: 3, hongkong: 3, malaysia: 3, korea: 3, china: 3, thailand: 2, vietnam: 2 }
        },
        {
          text: {
            ko: "탁 트인 하늘 아래 푸른 잔디 마당과 차고가 딸린 조용하고 클래식한 2층 단독 주택",
            en: "A cozy two-story house with a green backyard under vast open skies."
          },
          scores: { newzealand: 3, australia: 3, canada: 3, sweden: 3, switzerland: 2 }
        }
      ]
    },
    {
      id: 11,
      type: "choice",
      scenario: {
        ko: "가장 만족도가 높고 행복함을 느끼는 당신의 주말 여가 방식은?",
        en: "How do you prefer to spend your ideal weekend for recovery?"
      },
      options: [
        {
          text: {
            ko: "도시적인 트렌디한 감성의 파인다이닝 미식 탐방, 현대미술관 전시 관람, 빈티지 마켓 쇼핑",
            en: "Exploring fine dining, visiting modern art galleries, or vintage shopping."
          },
          scores: { france: 3, italy: 3, uk: 3, japan: 3, korea: 3, hongkong: 3, china: 2 }
        },
        {
          text: {
            ko: "웅장한 대자연 하이킹, 선선한 해변에서의 서핑, 맑은 계곡 캠핑 등 아웃도어 스포츠",
            en: "Outdoor activities like surfing, alpine hiking, or forest camping."
          },
          scores: { australia: 3, newzealand: 3, switzerland: 3, canada: 3, austria: 2 }
        }
      ]
    },
    {
      id: 12,
      type: "choice",
      scenario: {
        ko: "현지 이웃 및 사회적 관계를 맺을 때 선호하는 거리 조절은?",
        en: "What is your preference for social distance and local relationships?"
      },
      options: [
        {
          text: {
            ko: "이웃사촌끼리 따뜻하고 정겹게 음식을 나누고 허물없이 교류하는 온정적인 커뮤니티",
            en: "A warm, family-like community where neighbors share food and enjoy close ties."
          },
          scores: { thailand: 3, vietnam: 3, indonesia: 3, spain: 3, italy: 3, portugal: 2, korea: 2 }
        },
        {
          text: {
            ko: "타인의 사생활에 절대 간섭하지 않고 철저한 프라이버시 존중이 기본인 건조하지만 안전한 사회",
            en: "Strict respect for privacy where boundaries are never crossed."
          },
          scores: { sweden: 3, germany: 3, japan: 3, switzerland: 3, austria: 3, canada: 2 }
        }
      ]
    },
    {
      id: 13,
      type: "choice",
      scenario: {
        ko: "원격 업무나 공부를 처리할 때, 당신이 가장 강한 영감을 받는 공간은?",
        en: "Where do you feel the most inspired while working or studying?"
      },
      options: [
        {
          text: {
            ko: "전 세계 테크 창업가들과 교류하는 네트워킹 허브이자 활기찬 최고급 공유 오피스",
            en: "An energetic co-working space packed with startups and tech networks."
          },
          scores: { usa: 3, singapore: 3, korea: 3, china: 3, hongkong: 3 }
        },
        {
          text: {
            ko: "조용하고 고즈넉한 로컬 카페의 구석진 자리 또는 풍경이 좋은 개인 독립 서재",
            en: "A quiet corner in a historic café or a private home library with scenic views."
          },
          scores: { sweden: 3, portugal: 3, japan: 3, newzealand: 3, austria: 2 }
        }
      ]
    },
    {
      id: 14,
      type: "choice",
      scenario: {
        ko: "해외 체류 중 예상치 못하게 아플 때, 당신의 이상적인 의료 서비스 이용 철학은?",
        en: "What is your preference for medical services when feeling unwell?"
      },
      options: [
        {
          text: {
            ko: "비용이 다소 비싸더라도 대기 없이 당일 즉시 최고의 영문 진료를 받는 신속한 사립 병원",
            en: "High-cost but immediate, premium English consultations with zero wait times."
          },
          scores: { singapore: 3, usa: 3, switzerland: 3, korea: 3, japan: 3, china: 2 }
        },
        {
          text: {
            ko: "치료 예매 대기 시간이 길더라도 무료이거나 국가가 보장하는 든든한 공립 국민건강보험 시스템",
            en: "Slow but heavily subsidized or free medical system covered by national welfare."
          },
          scores: { sweden: 3, canada: 3, uk: 2, spain: 2, portugal: 2 }
        }
      ]
    },
    {
      id: 15,
      type: "choice",
      scenario: {
        ko: "해외에서 장기간 생활할 때 찾아올 수 있는 외로움이나 향수병을 이겨내는 당신만의 방식은?",
        en: "How do you deal with loneliness or homesickness when living abroad?"
      },
      options: [
        {
          text: {
            ko: "나는 독립적인 고독 수호자! 완전히 낯선 영토에 홀로 떨어져도 외로움을 타지 않는다.",
            en: "I embrace solitude! I am fully content in a completely foreign environment."
          },
          scores: { usa: 3, australia: 3, sweden: 3, canada: 3, germany: 3, switzerland: 2 }
        },
        {
          text: {
            ko: "외로움은 절대 사절! 풍부한 한인 커뮤니티, 한식당, 혹은 한국과 빠르게 비행기로 왕복 가능한 물리적 인접성이 중요하다.",
            en: "Proximity to Korean flight connections, local Koreatowns, and K-food markets."
          },
          scores: { japan: 3, korea: 3, china: 3, vietnam: 3, singapore: 3, thailand: 2, hongkong: 2 }
        }
      ]
    }
  ],
  results: {
    "korea": {
      animalName: { ko: "대한민국", en: "South Korea" },
      typeTitle: {
        ko: "세계 최고 속도의 IT 인프라와 24시간 역동적인 삶의 터전 '대한민국'",
        en: "High-Speed IT Infrastructure and 24/7 Dynamic Energy: South Korea"
      },
      image: "https://flagcdn.com/w320/kr.png",
      coreTraits: { ko: "24시 활력 • 초고속 인프라 • 세계 최고 편리함", en: "24/7 Vibe • High-Speed Transit • Modern Convenience" },
      summary: {
         ko: "스마트폰 하나로 모든 편리함이 해결되고, 밤늦게까지 안전하게 활력을 누리며 트렌디한 IT 환경을 사랑하는 당신에게 가장 적합한 소울 국가는 대한민국입니다.",
         en: "For tech-savvy souls who value ultra-convenience, high public safety, and active 24/7 lifestyles, South Korea is the ultimate home."
      },
      dailyScene: {
        ko: "대한민국은 초고속 인터넷망과 밤새 끊기지 않는 딜리버리 인프라, 전 세계 최고 수준의 대중교통 네트워크를 갖춘 현대 문명의 최전선입니다. 밤늦게까지 안심하고 도심 거리를 활보할 수 있는 치안이 보장되며, 힙한 테크 카페와 24시간 불이 꺼지지 않는 활기찬 밤문화가 일상화되어 있습니다. 경쟁적인 자기계발 분위기 속에서 스마트하게 일을 처리하고, 빠르고 신속한 의료와 서비스 혜택을 온전히 누리며 커리어를 폭발시키고 싶은 당신의 성향과 완벽하게 공명합니다.",
        en: "South Korea represents the absolute edge of modern convenience. The entire nation runs on seamless high-speed internet grids and efficient delivery ecosystems. Safe streets even past midnight, trendy café offices, and high-energy professional networks fill the urban landscape. It is the perfect ecosystem for active high-achievers who want premium healthcare, robust public transport, and instant response rates."
      },
      strengths: {
        ko: "추천 체류 비자 종류: 대한민국 국적 소유자는 제한 없음. 외국인의 경우 신설된 '대한민국 워케이션(디지털 노마드) 비자(F-1-D)', 혹은 특정 활동 장기 취업 비자(E-7).",
        en: "No restrictions for Korean citizens. Workation Visa (F-1-D) or E-7 Professional Employment Visa for expats."
      },
      weaknesses: {
        ko: "디지털 노마드 / 한 달 살기 적정 비용: 월 250만 원 ~ 380만 원 (서울 주요 역세권의 렌트비 및 지속 상승하는 외식 물가 감안 필요)",
        en: "USD 1,800 - USD 2,800 per month (moderate to high rents in Seoul and increasing dining costs)."
      },
      prescription: {
        ko: "가장 추천하는 도시: 서울 (테크, 트렌드, 네트워킹 중심지), 부산 (해변 조망과 광역 인프라가 결합된 워케이션 명소)",
        en: "Seoul (tech and metropolis networking center), Busan (beautiful sea views with high-speed city connections)."
      }
    },
    "china": {
      animalName: { ko: "중국", en: "China" },
      typeTitle: {
        ko: "초거대 자본주의 테크 시장과 웅장한 대륙 스케일의 기회 '중국'",
        en: "Vast Tech Market and Megacity Opportunities: China"
      },
      image: "https://flagcdn.com/w320/cn.png",
      coreTraits: { ko: "대륙의 스케일 • 모바일 페이 천국 • 창업 비즈니스 기회", en: "Massive Scale • Mobile-Only Economy • Tech Innovation Hub" },
      summary: {
        ko: "압도적인 도심 스케일 속에서 초거대 모바일 IT 생태계를 경험하고, 글로벌 제조 및 빅테크 비즈니스의 거대한 기회를 탐색하려는 열정가에겐 중국입니다.",
        en: "Ideal for entrepreneurs or professionals seeking scale, high-tech manufacturing, and massive cash-free mobile ecosystems."
      },
      dailyScene: {
        ko: "중국은 상하이나 선전 같은 1선 도시를 중심으로 빌딩 마천루와 무현금 모바일 결제(위챗페이, 알리페이) 생태계가 극도로 발달해 있습니다. 고대부터 이어져 온 웅장한 역사 유적과 최첨단 배달/유통 테크가 기묘하게 어우러진 대륙입니다. 영어 소통의 한계나 로컬 행정 처리는 스마트폰 번역 앱과 모바일 플랫폼을 통해 신속히 해결됩니다. 거대한 내수 시장을 바탕으로 한 스타트업 생태계, 하드웨어 혁신 전선에 도전하여 큰 기회를 잡고 싶은 비즈니스 마인드를 가진 당신에게 가장 짜릿한 소울 컨트리가 될 것입니다.",
        en: "China's first-tier cities offer vertical skylines and mobile payment infrastructure. Street vendors and high-end malls alike operate completely cashless. With dynamic tech manufacturing centers like Shenzhen, it acts as a launchpad for hardware innovation and vast consumer markets. Relocating here offers a front-row seat to massive economic acceleration."
      },
      strengths: {
        ko: "추천 체류 비자 종류: 상업/비즈니스 무역 비자(M 비자), 취업 비자(Z 비자), 혹은 인재 유치 비자(R 비자).",
        en: "M Business Visa, Z Employment Visa, or R Talent Attraction Visa."
      },
      weaknesses: {
        ko: "디지털 노마드 / 한 달 살기 적정 비용: 월 150만 원 ~ 280만 원 (베이징, 상하이 중심가는 주거비가 매우 높으며 VPN 통신비 필수)",
        en: "USD 1,100 - USD 2,000 per month (VPN services are required for global networks)."
      },
      prescription: {
        ko: "가장 추천하는 도시: 상하이 (글로벌 서양 문화가 결합된 세련된 메트로폴리스), 선전 (세계적인 하드웨어 및 IT 창업 허브)",
        en: "Shanghai (westernized finance & lifestyle metropolis), Shenzhen (global tech and hardware startup capital)."
      }
    },
    "usa": {
      animalName: { ko: "미국", en: "USA" },
      typeTitle: {
        ko: "자유 경쟁과 아메리칸 드림, 기회의 땅 '미국'",
        en: "The Land of Capitalism and Dreams: USA"
      },
      image: "https://flagcdn.com/w320/us.png",
      coreTraits: { ko: "자유 경쟁 • 글로벌 캐리어 • 혁신과 자본주의", en: "Competition • Global Career • Tech Hub" },
      summary: {
        ko: "치열한 비즈니스 전선에서 성취를 거두고 글로벌 인재들과 경쟁하며 짜릿함을 느끼는 당신에게 가장 어울리는 국가는 미국입니다.",
        en: "For individuals who seek rapid career scaling and thriving business networks, the USA is the ultimate match."
      },
      dailyScene: {
        ko: "미국은 전 세계 스타트업과 빅테크, 그리고 금융 자본이 가장 격정적으로 출렁이는 기회의 중심지입니다. 이곳에서의 삶은 끊임없는 도전과 빠른 템포의 스케줄로 채워집니다. 당신이 선택한 업무 지향적 라이프와 글로벌 영어 통제 환경, 대도시의 활기찬 예술/바 문화는 뉴욕이나 샌프란시스코의 심장박동과 완벽히 공명합니다. 세금 혜택보다는 확실한 실력 위주의 능력 주의와 막대한 보상을 지향하는 당신의 아메리칸 드림을 실현해 줄 소울 컨트리입니다.",
        en: "The USA hosts the world's most dynamic startup scenes, tech hubs, and capital markets. Life here is fast-paced, filled with opportunities and challenges. Your preference for career-focused networking, English-speaking environments, and large metropolitan cultures perfectly aligns with NYC or Silicon Valley. It offers you the perfect canvas to paint your personal ambitions through raw talent and competitive achievements."
      },
      strengths: {
        ko: "추천 체류 비자 종류: O-1 예술/체육/비즈니스 특기자 비자, F-1 학생 비자 후 OPT 취업 연계, 혹은 H-1B 전문직 비자. 디지털 노마드로 입국 시 ESTA 무비자(90일 체류) 가능.",
        en: "ESTA (90-day visa-free for nomads), O-1 Extraordinary Ability Visa, or H-1B Professional Employment Visa."
      },
      weaknesses: {
        ko: "디지털 노마드 / 한 달 살기 적정 비용: 월 최소 450만 원 ~ 650만 원 수준 (도심 기준 주거비 및 의료 예비 비용이 매우 높게 요구됨)",
        en: "USD 3,500 - USD 5,000 per month (extremely high rent in cities and private medical expenses)."
      },
      prescription: {
        ko: "가장 추천하는 도시: 뉴욕 (도시적 역동성과 네트워킹 지향), 시애틀 또는 실리콘밸리 (빅테크 혁신 및 자연 조화)",
        en: "New York City (networking & urban life), San Francisco / Silicon Valley (tech and nature harmony)."
      }
    },
    "uk": {
      animalName: { ko: "영국", en: "United Kingdom" },
      typeTitle: {
        ko: "클래식한 품격과 현대 문학의 융합, 신사의 나라 '영국'",
        en: "Classic Heritage and Modern Arts: United Kingdom"
      },
      image: "https://flagcdn.com/w320/gb.png",
      coreTraits: { ko: "역사와 전통 • 세련된 런던 라이프 • 다양한 문화 교차", en: "Tradition • Royal Heritage • London Vibes" },
      summary: {
        ko: "고풍스러운 노천카페와 미술관 전시를 사랑하면서도, 글로벌 영어 인프라 속에서 차분하게 커리어를 확장하고 싶은 당신에게 최적의 국가는 영국입니다.",
        en: "Ideal for cultural enthusiasts who appreciate rich artistic scenes while staying plugged into English global business networks."
      },
      dailyScene: {
        ko: "영국은 유서 깊은 왕실 전통과 해리포터로 대변되는 현대 문학 콘텐츠가 경이롭게 공존하는 나라입니다. 도심 기차와 튜브(지하철) 노선이 촘촘하게 짜여 있어 차 없이도 어디든 감성 넘치는 골목길 여행이 가능합니다. 주말마다 현대미술 갤러리(Tate Modern)를 거닐고 빈티지 마켓을 둘러보며 고독함을 우아한 여유로 극복해 내는 영국식 신사/숙녀의 면모를 지닌 당신에게 아주 적합한 소울 플레이스입니다.",
        en: "The UK blends royal history with leading creative industries. Thanks to perfect railway systems and London Underground grids, you can navigate without owning a car. Spending weekends at the Tate Modern, browsing vintage markets, and walking down historical brick alleys match your quiet elegance and intellectual lifestyle."
      },
      strengths: {
        ko: "추천 체류 비자 종류: High Potential Individual (HPI) 세계 우수 대학 졸자 비자, 혹은 Skilled Worker 취업 후원 비자.",
        en: "HPI Visa (for top university grads) or Skilled Worker Employment Sponsorship Visa."
      },
      weaknesses: {
        ko: "디지털 노마드 / 한 달 살기 적정 비용: 월 평균 380만 원 ~ 500만 원 (런던 중심지 기준 방값 비율이 높은 편)",
        en: "USD 2,800 - USD 4,000 per month (housing costs in central London occupy a high ratio)."
      },
      prescription: {
        ko: "가장 추천하는 도시: 런던 (글로벌 커리어 및 문화 허브), 에든버러 (클래식한 자연 경관과 조용한 삶)",
        en: "London (global finance & creative hub), Edinburgh (historic castle views and peaceful living)."
      }
    },
    "singapore": {
      animalName: { ko: "싱가포르", en: "Singapore" },
      typeTitle: {
        ko: "세계 최고의 안전성과 무결점 미래형 도시국가 '싱가포르'",
        en: "Flawless Safety and Future-Ready City State: Singapore"
      },
      image: "https://flagcdn.com/w320/sg.png",
      coreTraits: { ko: "완벽한 치안 • 청결한 인프라 • 아시아 금융 허브", en: "Ultimate Safety • Ultra Clean • High Financial Freedom" },
      summary: {
        ko: "늦은 밤에도 안심하고 조깅을 할 수 있는 극강의 치안과 세계 최고의 위생 및 최첨단 병원 인프라를 원하는 당신에게 싱가포르는 천국입니다.",
        en: "The perfect destination for families or professionals seeking top-tier healthcare, cleanliness, and security."
      },
      dailyScene: {
        ko: "싱가포르는 열대 기후의 웅장한 가든스 바이 더 베이와 정돈된 금융 빌딩 숲이 어우러진 현대 문명의 결정체입니다. 영어와 아시아 문화가 동시에 완벽하게 작용하며, 규제가 투명하고 법인세 및 소득세가 낮아 아시아 시장 개척의 교두보로 활약합니다. 한식 재료 수급이 아주 원활하고 대중교통이 환상적으로 깔끔하여, 안전과 인프라 효율성을 인생의 최우선 가치로 여기는 분께 이보다 나은 대안은 없습니다.",
        en: "Singapore represents modern efficiency under high-tech urban planning. Excellent transit networks mean you can traverse the tropical city in comfort. With low income taxes, strict laws ensuring safety, and easy access to delicious local and international food, Singapore is the ideal hub for professionals prioritizing luxury and security."
      },
      strengths: {
        ko: "추천 체류 비자 종류: Employment Pass (EP) 전문직 비자, 혹은 ONE Pass 글로벌 다국적 인재 장기 체류 비자.",
        en: "Employment Pass (EP) or Overseas Networks & Expertise (ONE) Pass for high earners."
      },
      weaknesses: {
        ko: "디지털 노마드 / 한 달 살기 적정 비용: 월 최소 400만 원 ~ 550만 원 (전 세계 주거비 임대 비용 최상위권)",
        en: "USD 3,000 - USD 4,200 per month (extremely high residential rental rates)."
      },
      prescription: {
        ko: "가장 추천하는 도시: 싱가포르 시티 전역 (마리나 베이 및 오차드 로드 인근 주거 단지)",
        en: "Downtown Core (business), Orchard or River Valley (cozy expat residential sectors)."
      }
    },
    "japan": {
      animalName: { ko: "일본", en: "Japan" },
      typeTitle: {
        ko: "고즈넉한 편안함และ 아기자기한 철저한 규칙의 나라 '일본'",
        en: "Quiet Harmony and Politeness: Japan"
      },
      image: "https://flagcdn.com/w320/jp.png",
      coreTraits: { ko: "프라이버시 존중 • 미식의 천국 • 가깝고 친숙한 환경", en: "Privacy • Culinary Paradise • Clean & Quiet" },
      summary: {
        ko: "타인과의 감정선이 불필요하게 엉키는 것을 지극히 기피하고, 고도의 개인주의와 깨끗한 아시아 환경을 갈망하는 당신의 소울 국가는 일본입니다.",
        en: "A perfect home for introverted minds who prefer quiet streets, high quality conveniences, and delicious culinary experiences."
      },
      dailyScene: {
        ko: "일본은 특유의 소박하면서도 완벽한 장인 정신이 일상 곳곳에 스며든 나라입니다. 골목길마다 자리 잡은 맛있는 라멘집과 정갈한 편의점, 시끄럽게 떠들지 않는 지하철 문화는 당신의 내면적 조용함을 완전히 보장합니다. 비행기로 2시간이면 한국과 왕복이 가능해 향수병을 느낄 틈이 없으며, 온천욕과 정갈한 식도락 주말을 보낼 수 있는 최고의 안식처입니다.",
        en: "Japan honors personal privacy like no other country. Silent trains, polite shopkeepers, and individual dining booths let you navigate daily life with minimal social pressure. From weekend hot spring trips to delicious local sushi bars, you can find quiet restoration here while staying connected globally."
      },
      strengths: {
        ko: "추천 체류 비자 종류: 신설된 '디지털 노마드 특정 활동 비자' (연 소득 조건 충족 시 최대 6개월 체류 가능).",
        en: "Specified Activities Visa for Digital Nomads (up to 6 months stay) or Working Visa."
      },
      weaknesses: {
        ko: "디지털 노마드 / 한 달 살기 적정 비용: 월 200만 원 ~ 300만 원 (최근 엔저 영향으로 한화 기준 가성비 우수)",
        en: "USD 1,500 - USD 2,200 per month (great purchasing power due to recent weak yen)."
      },
      prescription: {
        ko: "가장 추천하는 도시: 도쿄 (트렌디하고 편리한 지하철 라이프), 후쿠오카 (한국과 가깝고 살기 좋은 소도시)",
        en: "Tokyo (convenience & subways), Fukuoka (cozy coastal vibes, extremely near to Korea)."
      }
    },
    "hongkong": {
      animalName: { ko: "홍콩", en: "Hong Kong" },
      typeTitle: {
        ko: "동서양의 찬란한 교차점, 화려한 밤과 자본주의의 '홍콩'",
        en: "East Meets West: The Neon Capital Hong Kong"
      },
      image: "https://flagcdn.com/w320/hk.png",
      coreTraits: { ko: "금융 자유구역 • 화려한 야경 • 압축된 도심 인프라", en: "Finance Center • Neon Skylines • Super High Density" },
      summary: {
        ko: "고층 콘도의 탁 트인 시티뷰를 조망하며, 화려한 쇼핑과 파인다이닝, 밤늦게까지 이어지는 에너제틱한 도심 라이프를 만끽하고 싶은 당신에겐 홍콩입니다.",
        en: "A thrilling metropolis where high-rise condo views, endless shopping sprees, and diverse city walks meet."
      },
      dailyScene: {
        ko: "홍콩은 빅토리아 하버의 마천루와 전통 향이 물씬 풍기는 재래시장이 도보 5분 거리 안에 압축된 초밀도 매력 도시입니다. 관공서의 영문 행정처리가 깔끔하고 금융 규제가 자유로워 글로벌 투자가들이 여전히 사랑하는 무대입니다. 늦은 밤 센트럴 란콰이퐁에서 즐기는 칵테일과 딤섬은 활기찬 주말 도파민을 충전하기에 가장 최적화되어 있습니다.",
        en: "Hong Kong matches the fast-tempo professional who loves dense cityscapes. Taxis and subways are highly accessible, and the administration works flawlessly in English. Fine dining meets street dim sum, offering a colorful dual lifestyle that charges your dopamine after intense business hours."
      },
      strengths: {
        ko: "추천 체류 비자 종류: Top Talent Pass Scheme (TTPS) 글로벌 명문대 졸업생 우대 비자, 혹은 취업 동반 비자.",
        en: "Top Talent Pass Scheme (TTPS) or general Employment/Investment Visa."
      },
      weaknesses: {
        ko: "디지털 노마드 / 한 달 살기 적정 비용: 월 350만 원 ~ 480만 원 (면적 대비 주거 렌트 비용이 몹시 비쌈)",
        en: "USD 2,500 - USD 3,500 per month (rents are exceptionally high for small apartments)."
      },
      prescription: {
        ko: "가장 추천하는 도시: 홍콩섬 중서구 (소호 및 셩완 인근의 모던한 서비스드 레지던스 단지)",
        en: "Central & Western District (Soho, Sheung Wan; modern expat serviced residences)."
      }
    },
    "canada": {
      animalName: { ko: "캐나다", en: "Canada" },
      typeTitle: {
        ko: "끝없는 평화와 포용력 높은 단풍의 나라 '캐나다'",
        en: "Endless Peace and Pristine Nature: Canada"
      },
      image: "https://flagcdn.com/w320/ca.png",
      coreTraits: { ko: "이민자 포용성 • 압도적 청정 대자연 • 공공 의료 보장", en: "Multiculturalism • Pristine Outdoors • High Social Welware" },
      summary: {
        ko: "아이들의 평화로운 공립 교육 환경과 웅장한 로키산맥 자연 속에서 여유롭게 정착하고픈 당신의 운명적인 매칭은 캐나다입니다.",
        en: "A peaceful sanctuary for families prioritizing inclusive education, clean air, and pristine wilderness."
      },
      dailyScene: {
        ko: "캐나다는 다양한 문화적 배경을 가진 이민자들을 따스하게 포용하는 단풍의 대륙입니다. 이웃 간의 친근한 인사와 수평적인 직장 문화 속에서 워라밸이 칼같이 존중됩니다. 주말이면 국립공원으로 캠핑을 가거나 설산에서 스키를 즐기는 등 활동적인 친자연주의 아웃도어 라이프가 당신의 심리적 피로를 완벽하게 해소해 줍니다.",
        en: "Canada offers high social trust and relaxed work schedules. Diversity is deeply respected, creating a warm vibe for newcomers. On weekends, packing your car for a scenic drive to national parks, skiing on snowy peaks, or camping by mirror lakes lets you recharge your mind in the heart of nature."
      },
      strengths: {
        ko: "추천 체류 비자 종류: 워킹홀리데이(IEC) 확대 적용을 통한 취업 연계, Express Entry 기술 이민 점수제 정착.",
        en: "Working Holiday Visa (IEC) or Express Entry skilled immigration channels."
      },
      weaknesses: {
        ko: "디지털 노마드 / 한 달 살기 적정 비용: 월 300만 원 ~ 400만 원 (최근 주요 도심 물가 상승률 반영)",
        en: "USD 2,200 - USD 3,000 per month (inflated rental rates in major metro cities)."
      },
      prescription: {
        ko: "가장 추천하는 도시: 밴쿠버 (온화한 기후와 바다/산 액티비티), 토론토 (경제 중심지이자 다양한 다문화 허브)",
        en: "Vancouver (mild winter & outdoor sports), Toronto (economic hub, high multicultural vibe)."
      }
    },
    "australia": {
      animalName: { ko: "호주", en: "Australia" },
      typeTitle: {
        ko: "환상적인 해변과 진정한 워라밸의 낙원 '호주'",
        en: "Sun-Drenched Beaches and Coffee Culture: Australia"
      },
      image: "https://flagcdn.com/w320/au.png",
      coreTraits: { ko: "서핑과 커피 라이프 • 여유로운 근무 • 압도적 기후 조건", en: "Surfing & Oceans • Relaxed Pace • Perfect Sunshine" },
      summary: {
        ko: "아침엔 서핑보드를 들고 바다로 가고, 점심엔 플랫화이트 커피를 마시며 여유롭게 일하는 자연 친화적 주말을 꿈꾸는 당신에겐 호주입니다.",
        en: "Ideal for outdoor lovers who want to balance remote work with beach activities under perfect weather."
      },
      dailyScene: {
        ko: "호주는 오염되지 않은 천혜의 해변과 선선한 기후, 자유로운 아웃도어 문화가 국가적인 상징인 곳입니다. 주말마다 친구들과 공원 잔디밭에서 바베큐를 구워 먹으며 사생활 스트레스 없이 힐링을 합니다. 철저한 근무 규정 준수와 여유로운 템포의 작업 스타일이 당신의 인생 철학인 '행복 추구'와 가장 일치하는 국가입니다.",
        en: "Australia is defined by beautiful coastlines and a world-class cafe culture. People value work-life balance religiously. You can easily stroll down to sandy beaches after work, enjoy premium flat whites, and host a barbecue with friendly locals, enjoying stress-free personal growth."
      },
      strengths: {
        ko: "추천 체류 비자 종류: 워킹홀리데이 비자(최대 3년 소득 활동 가능), TSS 임시 기술 부족 취업 후원 비자.",
        en: "Working Holiday Visa (up to 3 years) or Temporary Skill Shortage (TSS) Visa."
      },
      weaknesses: {
        ko: "디지털 노마드 / 한 달 살기 적정 비용: 월 280만 원 ~ 380만 원 (시드니, 멜버른 등 주요 대도시 주거비 편차 있음)",
        en: "USD 2,000 - USD 2,800 per month (moderate living cost, rent varies by city)."
      },
      prescription: {
        ko: "가장 추천하는 도시: 시드니 (시티 라이프와 서핑 비치의 조화), 멜버른 (카페 투어와 문화예술을 즐기는 분)",
        en: "Sydney (city grids & famous surf beaches), Melbourne (cafe hub and artistic alleys)."
      }
    },
    "newzealand": {
      animalName: { ko: "뉴질랜드", en: "New Zealand" },
      typeTitle: {
        ko: "세상 가장 안전하고 고요한 지구의 마지막 청정 구역 '뉴질랜드'",
        en: "The Quiet Majesty of Clean Nature: New Zealand"
      },
      image: "https://flagcdn.com/w320/nz.png",
      coreTraits: { ko: "대자연 하이킹 • 완벽한 슬로우 라이프 • 안전한 평화", en: "Pristine Hikes • Calm Slow Life • Absolute Safety" },
      summary: {
        ko: "도시의 피로한 소음과 빌딩 숲에서 완전히 해방되어, 마당 딸린 목가적 주택에서 자연과 동화되고 싶은 분께 뉴질랜드는 인생의 목적지입니다.",
        en: "For souls seeking deep solace away from crowded skylines, finding peace in country cabins."
      },
      dailyScene: {
        ko: "뉴질랜드는 은백색 알프스 빙하와 평화로이 풀을 뜯는 양 떼들이 지평선을 메우는 고요한 국가입니다. 해가 지면 문을 일찍 닫는 자연의 섭리대로, 저녁에는 온전히 가족들과 단란하게 벽난로 앞에 모여 소소한 일상을 공유합니다. 타인의 시선에서 완전히 벗어나 자아와 자연에만 온전히 집중하는 삶이 완벽히 실현됩니다.",
        en: "New Zealand's air is clean, and its landscape is filled with majestic lakes and mountains. People here follow the sun: shops close early, letting you spend quiet evenings cooking with loved ones. It is a quiet oasis to practice mindfulness without external societal pressures."
      },
      strengths: {
        ko: "추천 체류 비자 종류: 실버펀 구직 비자, 워킹홀리데이 비자, 혹은 숙련 기술 이민 영주권 비자.",
        en: "Working Holiday Visa or Skilled Migrant Category Resident Visa."
      },
      weaknesses: {
        ko: "디지털 노마드 / 한 달 살기 적정 비용: 월 250만 원 ~ 350만 원 (교통을 위한 차량 렌트비 및 기름값 감안 필요)",
        en: "USD 1,800 - USD 2,600 per month (car rental is recommended to traverse)."
      },
      prescription: {
        ko: "가장 추천하는 도시: 퀸스타운 (레포츠와 아름다운 호수 마을), 오클랜드 (편리한 인프라를 동반한 근교 생활)",
        en: "Queenstown (lakeside scenery & extreme sports), Auckland (modern harbor conveniences)."
      }
    },
    "germany": {
      animalName: { ko: "독일", en: "Germany" },
      typeTitle: {
        ko: "견고한 합리성과 시스템적 안정의 대명사 '독일'",
        en: "Rationality, System, and Stability: Germany"
      },
      image: "https://flagcdn.com/w320/de.png",
      coreTraits: { ko: "철저한 질서 • 수준 높은 시민 의식 • 강력한 복지 세금망", en: "Order & Precision • High Social Welfare • Logical Mindset" },
      summary: {
        ko: "감정이나 융통성보다는 명확한 매뉴얼과 규칙이 존중되는 질서 정연한 사회 체계 속에서 평온함을 느끼는 당신에겐 독일입니다.",
        en: "A perfect match for structural minds who value rules, green forests, and a solid administrative grid."
      },
      dailyScene: {
        ko: "독일은 합리적인 토론 문화와 철저한 분리배출, 시간 약속 이행이 생활 규범으로 정착된 법치국가입니다. 주말이면 울창한 숲에서 삼림욕을 즐기고 차분하게 가정을 돌보며 소박한 맥주 한 잔을 즐깁니다. 높은 세금만큼이나 두터운 공공 의료 복지와 무상 교육 체계가 당신의 장기적인 안정성을 굳건하게 뒷받침해 줍니다.",
        en: "Germany runs on precision and logic. Punctuality is respected, and administration is transparent. Work-life boundary is strictly guarded. On weekends, walking through dense pine forests, visiting historic castles, and sipping local craft beers provide a deeply grounding, stable experience."
      },
      strengths: {
        ko: "추천 체류 비자 종류: 디지털 노마드를 위한 프리랜서(Freiberufler) 거주 허가 비자, 혹은 블루카드 취업 비자.",
        en: "Freelancer Visa (Freiberufler) or EU Blue Card for skilled tech workers."
      },
      weaknesses: {
        ko: "디지털 노마드 / 한 달 살기 적정 비용: 월 250만 원 ~ 350만 원 (대도심 아파트 렌트(Warmmiete) 확보에 난이도가 있음)",
        en: "USD 1,800 - USD 2,600 per month (finding furnished apartments in cities can be competitive)."
      },
      prescription: {
        ko: "가장 추천하는 도시: 베를린 (다양한 글로벌 아티스트와 IT 허브), 뮌헨 (가장 정돈되고 소득 수준이 높은 도시)",
        en: "Berlin (hip, tech startups & global creatives), Munich (rich Bavarian heritage, premium safe city)."
      }
    },
    "sweden": {
      animalName: { ko: "스웨덴", en: "Sweden" },
      typeTitle: {
        ko: "양성 평등과 저녁이 있는 삶의 복지 천국 '스웨덴'",
        en: "Fika and Lagom: The Equality Paradise Sweden"
      },
      image: "https://flagcdn.com/w320/se.png",
      coreTraits: { ko: "피카(Fika) 티타임 • 라곰(Lagom) 라이프 • 탄탄한 사회 안전망", en: "Lagom Philosophy • Fika Breaks • Clean Ecosystem" },
      summary: {
        ko: "적당히 일하고, 자연을 존중하며, 공동체의 혜택을 넉넉히 나눠 받는 균형 잡힌 친환경 북유럽 복지 국가를 열망하신다면 스웨덴입니다.",
        en: "For progressive minds seeking pure ecology, equal parenting benefits, and balanced lifestyles."
      },
      dailyScene: {
        ko: "스웨덴은 매일 오후 동료들과 커피에 시나몬 번을 곁들이는 '피카(Fika)' 타임이 일상의 법률처럼 지켜지는 문화가 있습니다. 지나치지 않고 모자라지도 않은 중간의 미학 '라곰(Lagom)' 정신을 본받아 평온한 마음으로 가정을 돌봅니다. 철저한 사생활 분리와 공평한 육아 복지망이 갖춰져 삶의 평온을 최우선으로 갈망하는 분께 최고의 나라입니다.",
        en: "Sweden balances life beautifully. The daily ritual of 'Fika' (coffee and cinnamon rolls) reminds you to slow down. Following the 'Lagom' mindset ('just enough'), you spend evenings doing sports or resting. Clean lakes, public trust, and extensive eco-friendly designs make Sweden an eco-haven."
      },
      strengths: {
        ko: "추천 체류 비자 종류: 스타트업 창업가 비자, 혹은 현지 법인 취업을 통한 거주 허가증 발급.",
        en: "Startup/Entrepreneur Residence Permit or general Employment Visa."
      },
      weaknesses: {
        ko: "디지털 노마드 / 한 달 살기 적정 비용: 월 300만 원 ~ 420만 원 (높은 물가 수준 및 북유럽 동절기 난방 예산 필요)",
        en: "USD 2,200 - USD 3,100 per month (high taxes and cost of services)."
      },
      prescription: {
        ko: "가장 추천하는 도시: 스톡홀름 (풍부한 물의 도시이자 하이테크 스타트업 허브), 예테보리 (고요하고 평화로운 예술 도시)",
        en: "Stockholm (beautiful archipelago & tech hubs), Gothenburg (artistic coastal university city)."
      }
    },
    "thailand": {
      animalName: { ko: "태국", en: "Thailand" },
      typeTitle: {
        ko: "미식과 불교적 따스함이 깃든 노마드의 성지 '태국'",
        en: "Sunshine and Affordable Luxury: Thailand"
      },
      image: "https://flagcdn.com/w320/th.png",
      coreTraits: { ko: "저렴한 생활 물가 • 세계적 타이 미식 • 최고 편의성", en: "High Cost-Effectiveness • Street Food • Tropical Co-working" },
      summary: {
        ko: "저렴한 마사지비와 타이 푸드로 매일 입을 즐겁게 하고, 가성비 끝판왕 리조트 콘도에서 여유롭게 일하고 싶은 당신에겐 태국입니다.",
        en: "The ultimate haven for digital nomads who want resort-style housing at a fraction of Western costs."
      },
      dailyScene: {
        ko: "태국은 미소의 나라라는 별명답게 친근하고 상냥한 사람들이 가득한 곳입니다. 전 세계의 수많은 디지털 노마드들이 방콕과 치앙마이의 쾌적한 공유 오피스에 모여 매일 정보를 나눕니다. 늦은 밤 야시장 투어와 화려한 루프탑 바, 그리고 마트의 풍성한 먹거리가 갖춰져 있어 저렴한 생활비로 럭셔리 라이프를 실현할 수 있습니다.",
        en: "Thailand offers rich hospitality and spicy pad thai. You can live in luxury condos with pools, work in fast-wifi cafes, and enjoy cheap night markets. The warm weather, combined with an open, friendly local community, makes transition stress non-existent."
      },
      strengths: {
        ko: "추천 체류 비자 종류: LTR 장기 체류 디지털 노마드 비자, 혹은 10년 체류 가능한 데스티네이션 타일랜드 비자(DTV) 발급.",
        en: "Destination Thailand Visa (DTV, 5-year multi-entry for remote workers) or LTR Visa."
      },
      weaknesses: {
        ko: "디지털 노마드 / 한 달 살기 적정 비용: 월 120만 원 ~ 200만 원 (한국 생활비의 절반 수준으로 호화 럭셔리 가능)",
        en: "USD 900 - USD 1,500 per month (your budget goes extremely far here)."
      },
      prescription: {
        ko: "가장 추천하는 도시: 방콕 (도시 활력과 루프탑 메트로폴리스), 치앙마이 (고요한 사원 숲과 디지털 노마드의 수도)",
        en: "Bangkok (modern metropolis and skyline bars), Chiang Mai (peaceful temples & nomad hubs)."
      }
    },
    "portugal": {
      animalName: { ko: "포르투갈", en: "Portugal" },
      typeTitle: {
        ko: "따사로운 햇살과 가장 안전한 남유럽의 안식처 '포르투갈'",
        en: "Sunny Coastlines and Europe's Safest Haven: Portugal"
      },
      image: "https://flagcdn.com/w320/pt.png",
      coreTraits: { ko: "대서양 노을 • 안전한 치안 • 친절하고 온화함", en: "Atlantic Sunsets • Ultra Safe Europe • Egg Tart Café" },
      summary: {
        ko: "유럽 특유의 고풍스러운 헤리티지와 따스한 해변 기후를 누리고 싶지만, 치안이 나쁜 곳은 절대 참을 수 없는 영혼의 소유자에겐 포르투갈입니다.",
        en: "Ideal for travelers looking for historic European architecture, ocean views, and low crime rates."
      },
      dailyScene: {
        ko: "포르투갈은 유럽 내에서 범죄율이 가장 낮은 평화 지대 중 한 곳입니다. 대서양의 붉은 낙조를 바라보며 정성 어린 에그타르트(Pastel de Nata)와 해산물 요리를 즐깁니다. 현지인들의 상냥하고 영어가 아주 잘 통하는 편안한 태도가 적응 스트레스를 덜어줍니다. 골목길 트램 소리를 들으며 소박하지만 깊은 유럽식 삶을 영위하게 됩니다.",
        en: "Portugal boasts exceptional safety. Walking by Atlantic sands, eating fresh seafood, and hearing the bells of vintage trams are daily joys. English is widely spoken, and the warm, welcoming attitude of Portuguese locals makes relocating a smooth, friendly experience."
      },
      strengths: {
        ko: "추천 체류 비자 종류: 디지털 노마드를 위한 D8 비자, 혹은 연금 수령자와 임대 소득자를 위한 D7 은퇴 비자.",
        en: "D8 Digital Nomad Visa or D7 Passive Income/Retirement Visa."
      },
      weaknesses: {
        ko: "디지털 노마드 / 한 달 살기 적정 비용: 월 200만 원 ~ 280만 원 (리스본, 포르투 등 리조트 관광도시 물가 반영)",
        en: "USD 1,500 - USD 2,100 per month (moderate cost, rising rent in tourist capitals)."
      },
      prescription: {
        ko: "가장 추천하는 도시: 리스본 (언덕 위 파란 대서양 뷰), 포르투 (도우루강 철교의 클래식한 노을 예술 도시)",
        en: "Lisbon (hilly streets, sea views), Porto (classic river bridges & port wine)."
      }
    },
    "malaysia": {
      animalName: { ko: "말레이시아", en: "Malaysia" },
      typeTitle: {
        ko: "고품격 영어를 사용하는 완벽한 인프라 천국 '말레이시아'",
        en: "Clean Suburbs and English Fluency: Malaysia"
      },
      image: "https://flagcdn.com/w320/my.png",
      coreTraits: { ko: "고급 콘도 가성비 • 다문화 포용 • 한인 인프라 발달", en: "Premium Condos • Safe & English • Multi-ethnic Coexistence" },
      summary: {
        ko: "동남아의 물가 이점은 살리면서도, 동남아의 비위생성이나 낙후함은 싫어하여 최고급 도심 아파트에 살고픈 타협주의자인 당신에겐 말레이시아입니다.",
        en: "For families or retirees wanting luxury high-rise living, English fluency, and affordable costs."
      },
      dailyScene: {
        ko: "말레이시아는 고층 빌딩 숲과 영어가 일상화된 말레이, 화교, 인도인 다문화가 안전한 치안 하에 평화로이 공존하는 국가입니다. 월 80만 원 선이면 수영장과 보안 가드가 있는 끝내주는 최고급 도심 콘도를 장만할 수 있습니다. 쇼핑몰 인프라가 싱가포르 버금가게 호화로워 아이들 영어 유학이나 한 달 살기 거주 만족도가 최고에 달합니다.",
        en: "Malaysia features clean city grids and great English fluency. You can rent high-end condos with sky pools for under USD 700. Massive shopping malls, delicious food courts, and strict safety laws provide a highly polished, convenient lifestyle suitable for long-term expat families."
      },
      strengths: {
        ko: "추천 체류 비자 종류: DE Rantau 디지털 노마드 패스(최대 2년 체류 지원), MM2H 은퇴 영주 장기 비자.",
        en: "DE Rantau Digital Nomad Pass (up to 2 years) or MM2H Silver/Gold Visa."
      },
      weaknesses: {
        ko: "디지털 노마드 / 한 달 살기 적정 비용: 월 150만 원 ~ 230만 원 (최고급 쇼핑 및 한인 인프라 활용 수준에 따라 가변적)",
        en: "USD 1,100 - USD 1,700 per month (very high value for money)."
      },
      prescription: {
        ko: "가장 추천하는 도시: 쿠알라룸푸르 (페트로나스 타워가 보이는 메트로폴리스), 페낭 (풍부한 길거리 미식과 조용한 해변)",
        en: "Kuala Lumpur (modern city center), Penang (street food capital and sandy beaches)."
      }
    },
    "switzerland": {
      animalName: { ko: "스위스", en: "Switzerland" },
      typeTitle: {
        ko: "알프스의 웅장함하고 철저한 중립의 유토피아 '스위스'",
        en: "Alpine Utopia and Financial Stability: Switzerland"
      },
      image: "https://flagcdn.com/w320/ch.png",
      coreTraits: { ko: "알프스 설산 • 세계 최고 치안 • 청정 계곡 온천", en: "Alpine Wilderness • Flawless Security • Switzerland Clockwork" },
      summary: {
        ko: "재정적 여유가 정착에 문제 되지 않으며, 전 세계에서 가장 맑은 공기와 평화로운 알프스 숲속 통나무집에서 완벽한 프라이버시를 누릴 소울 컨트리는 스위스입니다.",
        en: "The ultimate luxury matching for high earners seeking fresh air, absolute privacy, and stunning alps."
      },
      dailyScene: {
        ko: "스위스는 정밀 시계처럼 기차가 단 1초도 오차 없이 운행되는 완벽한 공공 신뢰를 기반으로 하는 국가입니다. 이웃 간 불필요한 참견은 눈을 씻고 봐도 없으며, 최첨단 사립 의료 인프라가 당신의 건강 리스크를 완벽 수비합니다. 주말엔 융프라우 아래 맑은 청정 빙하 계곡을 산책하고 치즈 퐁듀를 맛보며 세상 모든 고독을 자연의 숭고함으로 위로받을 수 있습니다.",
        en: "Switzerland functions like a Swiss clock—no delays, high social trust, and clean streets. Neighbors respect your absolute privacy. Having access to top-notch private hospitals, walking along Jungfrau glacier paths, and having cheese fondue in alpine cabins compensate for any high costs of living."
      },
      strengths: {
        ko: "추천 체류 비자 종류: 거주 허가증(L/B Permit) 발급, 혹은 은퇴 후 정착 세금 협약 이주 허가.",
        en: "L/B Permit (residence permit) or tax-agreement retirement paths."
      },
      weaknesses: {
        ko: "디지털 노마드 / 한 달 살기 적정 비용: 월 최소 550만 원 ~ 800만 원 (의식주 비용이 전 세계 최상위권의 고비용 구조)",
        en: "USD 4,000 - USD 5,800 per month (extremely high cost of living)."
      },
      prescription: {
        ko: "가장 추천하는 도시: 취리히 (금융과 정밀 행정의 최고 편리성), 인터라켄 (알프스 대자연 하이킹에 최적화된 마을)",
        en: "Zurich (financial hub & lake luxury), Interlaken (epic hiking gateways)."
      }
    }
  }
};
