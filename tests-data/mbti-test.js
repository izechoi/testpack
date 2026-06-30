/**
 * @file mbti-test.js
 * @description 16가지 개성 넘치는 현대인 캐릭터(판사, 해커, 아이돌, 소설가 등) 기반 MBTI 성향 테스트 데이터셋입니다.
 * 문항 수: 15개, 결과 유형: 16개 (분석가/외교관/관리자/탐험가 4종 카툰 에셋 분기 연동)
 */

window.activeTestData = {
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
  labels: {
    summary: { ko: "당신의 MBTI 퍼소나 성향", en: "Your MBTI Persona" },
    daily: { ko: "이 캐릭터가 당신을 완벽히 대변하는 이유 (정밀 분석)", en: "Why This Persona Fits You (Detailed Analysis)" },
    strengths: { ko: "당신이 뽐내는 대표적 성격 강점", en: "Your Superpower Strengths" },
    weaknesses: { ko: "주변 사람들이 말하는 귀여운 성격 맹점", en: "Your Adorable Personality Blindspots" },
    prescription: { ko: "현생을 200% 활용하기 위한 맞춤형 조언 처방", en: "Growth Advice for Your Persona Life" }
  },
  questions: [
    // --- 1~4번: E vs I 지표 판정 ---
    {
      id: 1,
      type: "choice",
      scenario: {
        ko: "주말 휴일이 찾아왔을 때, 나를 가장 확실하게 충전해 주는 이상적인 방식은?",
        en: "When a weekend holiday arrives, what is your ideal way to recharge your energy?"
      },
      options: [
        {
          text: {
            ko: "에너제틱한 핫플레이스 탐방, 친구들과 왁자지껄 떠들며 수다 떨기",
            en: "Exploring dynamic hotspots and chatting loudly with groups of friends."
          },
          scores: { E: 1 }
        },
        {
          text: {
            ko: "방 안에서 누구의 간섭도 없이 조용히 넷플릭스를 보거나 개인 작업을 하며 고요히 쉬기",
            en: "Resting silently in my room watching Netflix or working on personal hobbies."
          },
          scores: { I: 1 }
        }
      ]
    },
    {
      id: 2,
      type: "choice",
      scenario: {
        ko: "낯선 사람들로 가득 찬 사교 파티나 모임장에 들어섰을 때 당신의 행동 텐션은?",
        en: "How do you behave when walking into a social party filled with new faces?"
      },
      options: [
        {
          text: {
            ko: "\"처음 뵙겠습니다!\" 적극적으로 다가가 웃으며 먼저 인사를 건네고 말을 건다.",
            en: "I approach first with a warm smile and start casual conversations actively."
          },
          scores: { E: 1 }
        },
        {
          text: {
            ko: "아는 사람 곁에 붙어있거나, 조용한 구석 자리를 찾아 차분히 대화 상황을 지켜본다.",
            en: "I stick to familiar people or find a quiet corner to watch the atmosphere first."
          },
          scores: { I: 1 }
        }
      ]
    },
    {
      id: 3,
      type: "choice",
      scenario: {
        ko: "최근 SNS에서 엄청 핫하고 스릴 넘치는 야외 액티비티가 유행할 때 당신의 즉각 반응은?",
        en: "When a highly popular outdoor activity goes viral, what is your immediate reaction?"
      },
      options: [
        {
          text: {
            ko: "이건 가야 해! 당장 단체 대화방을 파서 같이 참여할 친구들을 모집한다.",
            en: "I must go! I immediately message group chats to recruit friends to go together."
          },
          scores: { E: 1 }
        },
        {
          text: {
            ko: "우선 방구석에서 다른 블로거들의 솔직한 후기 영상들을 꼼꼼하게 시청하며 생각한다.",
            en: "First, I search detailed reviews and videos from my room and think it over."
          },
          scores: { I: 1 }
        }
      ]
    },
    {
      id: 4,
      type: "choice",
      scenario: {
        ko: "업무나 공부 등 무언가에 집중하고 몰입해야 할 때 선호하는 최적의 환경은?",
        en: "Which environment do you prefer when you need to focus deeply on work or study?"
      },
      options: [
        {
          text: {
            ko: "사람들의 백색 소음이 섞이고 활발하게 소통할 수 있는 힙한 카페나 공유 오피스",
            en: "A trendy open café or dynamic co-working hub with light background noises."
          },
          scores: { E: 1 }
        },
        {
          text: {
            ko: "나만의 헤드폰을 장착하고 조용히 문을 닫을 수 있는 독립된 방이나 개인 책상",
            en: "A private closed room or quiet desk wearing my favorite headphones."
          },
          scores: { I: 1 }
        }
      ]
    },

    // --- 5~8번: S vs N 지표 판정 ---
    {
      id: 5,
      type: "choice",
      scenario: {
        ko: "평소 미래나 세상을 바라보며 머릿속을 메우는 상상의 흐름은 주로 어느 쪽에 쏠려있나요?",
        en: "Where does your typical chain of thoughts drift during quiet hours?"
      },
      options: [
        {
          text: {
            ko: "오늘 당장 처리해야 할 현실적인 팩트와 당장 내 손에 잡히는 일들 위주의 실용적 생각",
            en: "Pragmatic factors, immediate checklists, and realistic schedules of today."
          },
          scores: { S: 1 }
        },
        {
          text: {
            ko: "언젠가 우주선이 발사되면 벌어질 일들, 먼 훗날의 가능성, 철학적 은유와 엉뚱한 우주 공상",
            en: "Philosophical metaphors, distant possibilities, and wild space travel fantasies."
          },
          scores: { N: 1 }
        }
      ]
    },
    {
      id: 6,
      type: "choice",
      scenario: {
        ko: "이케아에서 복잡한 조립식 가구를 새로 구입했을 때, 당신이 조립하는 스타일은?",
        en: "How do you assemble a newly bought multi-part furniture from IKEA?"
      },
      options: [
        {
          text: {
            ko: "동봉된 설명서 책자의 1번 단계부터 기호와 나사 치수를 하나씩 꼼꼼하게 대조하며 조립한다.",
            en: "I open the manual book and double-check every bolt step-by-step from page 1."
          },
          scores: { S: 1 }
        },
        {
          text: {
            ko: "완성 이미지 카드를 한 번 슥 훑어본 후 직관의 힘을 믿고 빠르게 조립하다가, 막히면 정정한다.",
            en: "I glance at the final image and assemble it intuitively, only looking at manuals when stuck."
          },
          scores: { N: 1 }
        }
      ]
    },
    {
      id: 7,
      type: "choice",
      scenario: {
        ko: "소설책을 읽거나 영화를 감상할 때, 당신이 가장 크게 매료되고 감상하는 포인트는?",
        en: "What points do you value most while reading a novel or watching a movie?"
      },
      options: [
        {
          text: {
            ko: "주인공의 감정선 묘사, 현실에 있을 법한 개연성 탄탄한 스토리와 사실적 묘사 기법",
            en: "Logical plot structures, solid realism, and convincing physical details of scenes."
          },
          scores: { S: 1 }
        },
        {
          text: {
            ko: "작품 이면에 숨겨진 철학적 복선, 감독이 던지는 은밀한 상징물, 열린 결말 뒤 숨겨진 우주적 의미",
            en: "Hidden metaphors, symbolic clues, and cosmic themes behind open-ended plots."
          },
          scores: { N: 1 }
        }
      ]
    },
    {
      id: 8,
      type: "choice",
      scenario: {
        ko: "하늘에 뜬 뭉게구름이나 선선하게 부는 가을바람을 보며 주로 드는 생각은?",
        en: "What goes through your mind when looking at beautiful autumn clouds?"
      },
      options: [
        {
          text: {
            ko: "\"와, 오늘 구름 뽀얗고 날씨 시원하다! 저녁에는 얼큰한 찌개나 국물 먹을까?\"",
            en: "\"Wow, beautiful crisp sky today. I should walk around and decide on a warm dinner.\""
          },
          scores: { S: 1 }
        },
        {
          text: {
            ko: "\"구름은 저 높은 기압 골에서 어떻게 솜사탕처럼 결합되었을까? 만약 저 위에서 걸으면 떨어질까?\"",
            en: "\"How did those water vapors formulate such shapes? What if I could walk on them?\""
          },
          scores: { N: 1 }
        }
      ]
    },

    // --- 9~12번: T vs F 지표 판정 ---
    {
      id: 9,
      type: "choice",
      scenario: {
        ko: "절친이 직장에서 큰 실수를 저질러 상사에게 엄청 깨졌다고 우울해하며 털어놓을 때 나의 첫 대답은?",
        en: "How do you respond first when a close friend complains about getting scolded at work?"
      },
      options: [
        {
          text: {
            ko: "\"저런... 상사가 피드백 준 구체적인 문제 원인이 뭐였어? 수습할 방법이 있는지 같이 따져보자!\"",
            en: "\"Oh... What was the core issue your manager complained about? Let's check the solution.\""
          },
          scores: { T: 1 }
        },
        {
          text: {
            ko: "\"헐... 너 진짜 서러웠겠다. 밤새 고생한 걸 윗사람이 몰라주다니 속상해. 오늘 당장 맥주 한잔하자!\"",
            en: "\"Oh no... You must have been so stressed. You worked so hard. Let's go grab a drink!\""
          },
          scores: { F: 1 }
        }
      ]
    },
    {
      id: 10,
      type: "choice",
      scenario: {
        ko: "회의실 의견 충돌 상황에서, 상대가 내 주장에 대해 냉정하게 구체적 데이터 팩트를 가져와 반박할 때 나는?",
        en: "How do you feel when someone refutes your proposal with logical raw data?"
      },
      options: [
        {
          text: {
            ko: "내용의 타당성을 이성적으로 비교 대조해 보고, 상대 말이 논리적으로 옳다면 쿨하게 반성하며 인정한다.",
            en: "I examine the evidence rationally. If they are correct, I happily accept their points."
          },
          scores: { T: 1 }
        },
        {
          text: {
            ko: "논리가 맞더라도 말투가 서운하게 느껴져 마음에 은근히 상처를 입고, 경직된 회의장 공기에 예민해진다.",
            en: "Even if correct, the blunt delivery hurts my feelings and makes me sensitive."
          },
          scores: { F: 1 }
        }
      ]
    },
    {
      id: 11,
      type: "choice",
      scenario: {
        ko: "눈물이 쏟아질 만큼 슬픈 다큐멘터리나 복잡한 갈등을 다룬 인간극장을 마주했을 때 나의 내면 상태는?",
        en: "What happens inside you when watching a heart-wrenching documentary?"
      },
      options: [
        {
          text: {
            ko: "인물이 불행하게 꼬인 사회적 시스템의 모순점이나 인과관계를 차분하게 분석하고 파악한다.",
            en: "I analyze the systemic faults or structural reasons behind their struggles."
          },
          scores: { T: 1 }
        },
        {
          text: {
            ko: "인물의 절절한 심정에 과몰입하여 어느새 나도 모르게 눈물을 훔치며 눈시울이 붉어진다.",
            en: "I deeply synchronize with their emotional pain and feel tears swelling up."
          },
          scores: { F: 1 }
        }
      ]
    },
    {
      id: 12,
      type: "choice",
      scenario: {
        ko: "동료에게 고마움을 표하거나 칭찬의 피드백 카드를 써서 전달할 때 당신의 주된 문구 스타일은?",
        en: "How do you frame your words when sending thank-you notes to a colleague?"
      },
      options: [
        {
          text: {
            ko: "\"이번 제안서 정리 작업에서 네가 꼼꼼히 정리해 준 통계 덕분에 거래처 승인이 단숨에 통과됐어. 고마워!\"",
            en: "\"Thanks to the accurate statistics you organized, our pitch passed instantly. Great job!\""
          },
          scores: { T: 1 }
        },
        {
          text: {
            ko: "\"넌 진짜 우리 팀에 없어서는 안 될 빛나는 에이스야! 곁에 있어 주는 것만으로 엄청 힘이 돼. 늘 응원해!\"",
            en: "\"You are such an amazing presence in our team. Having you around gives me so much support!\""
          },
          scores: { F: 1 }
        }
      ]
    },

    // --- 13~15번: J vs P 지표 판정 ---
    {
      id: 13,
      type: "choice",
      scenario: {
        ko: "친구들과 드디어 꿈꿔온 해외 휴양지 여행 일정을 확정했을 때, 당신의 계획 수립 스타일은?",
        en: "When a dream travel schedule is locked, how do you handle the planning process?"
      },
      options: [
        {
          text: {
            ko: "날짜별 교통편 예약, 맛집 후보군 지도 링크, 1안/2안 플랜 비상 경로까지 캘린더에 촘촘히 적어 정리해둔다.",
            en: "I build detailed itinerary grids with booking links, backup routes, and lists of cafes."
          },
          scores: { J: 1 }
        },
        {
          text: {
            ko: "가장 중요한 왕복 비행기표와 첫날 숙소만 정한 채, 나머지는 현지의 날씨와 기분에 따라 융통성 있게 이동한다.",
            en: "Lock the flights and first night's stay. The rest can be decided spontaneously."
          },
          scores: { P: 1 }
        }
      ]
    },
    {
      id: 14,
      type: "choice",
      scenario: {
        ko: "현재 당신이 사용하는 컴퓨터 바탕화면이나 스마트폰 앱들의 폴더 정돈 상태는?",
        en: "How organized are your desktop icons or smartphone application folders?"
      },
      options: [
        {
          text: {
            ko: "카테고리별 분류 폴더 정리와 불필요한 캐시 지우기가 습관이 되어 칼같이 정돈된 상태",
            en: "Neatly grouped in named folders, keeping unnecessary files completely cleared."
          },
          scores: { J: 1 }
        },
        {
          text: {
            ko: "바탕화면에 온갖 다운로드 파일이 어지럽게 널려있어도, 머릿속 직관적 위치 기억으로 다 찾아내 쓴다.",
            en: "Scattered files everywhere, but I know exactly where everything is in my own way."
          },
          scores: { P: 1 }
        }
      ]
    },
    {
      id: 15,
      type: "choice",
      scenario: {
        ko: "일주일 뒤 제출 마감인 거대한 중요 프로젝트 과제가 주어졌을 때, 당신의 일 처리 패턴은?",
        en: "Faced with a major project due in one week, how do you manage your execution?"
      },
      options: [
        {
          text: {
            ko: "매일 해야 할 할당량을 쪼개 스케줄표에 배분하고, 하루씩 단계별로 완수해 데드라인 전에 여유롭게 끝낸다.",
            en: "Divide tasks into daily slots, completing steps steadily to submit before deadline."
          },
          scores: { J: 1 }
        },
        {
          text: {
            ko: "미루고 미루다가 마감 전날 등 뒤에 폭풍이 몰아치면 비로소 각성하여 밤샘 벼락치기 초인적 힘을 낸다.",
            en: "Delay and play until the final 24 hours, then produce raw outputs through sleepless nights."
          },
          scores: { P: 1 }
        }
      ]
    }
  ],
  results: {
    // --- 1. 분석가형 (NT 계열: images/mbti-analyst.png) ---
    "INTJ": {
      animalName: { ko: "체스판 위의 해커 (INTJ)", en: "Chessboard Brain Hacker (INTJ)" },
      typeTitle: {
        ko: "모든 수를 3단계 앞서 계산하는 냉철한 전략가",
        en: "The Architect calculating 3 steps ahead"
      },
      image: "images/mbti-analyst.png",
      coreTraits: { ko: "전략적 분석 • 높은 독립성 • 완벽주의", en: "Tactical Brain • High Independence • Perfectionism" },
      summary: {
         ko: "극강의 이성과 체계적인 분석 능력으로, 보이지 않는 구조를 파악해 가장 합리적인 지름길을 설계하는 당신의 퍼소나는 INTJ 해커입니다.",
         en: "With raw logic and long-term vision, you parse complex grids to build the most efficient pathway."
      },
      dailyScene: {
        ko: "당신은 매사 논리적인 체계(System)가 갖춰져 있지 않으면 가벼운 답답함을 느끼며, 문제를 마주하면 감정적 하소연 대신 '원인과 타당성'을 집요하게 분석합니다. 겉으론 차가워 보이지만 머릿속에선 10년 뒤의 장기적 계획과 예비 플랜 B가 톱니바퀴처럼 굴러가고 있습니다. 비합리적인 관례를 극도로 혐오하여, 스스로 정밀하게 기획하고 혼자 묵묵히 완수하는 독립적인 실무를 사랑하는 에이스입니다.",
        en: "You look at systems objectively and point out logical holes that others miss. While quiet outside, your mind constantly simulates long-term strategies. You hate bureaucratic friction and prefer working independently, delivering top-quality results based on clean analysis."
      },
      strengths: {
        ko: "대표적 성격 강점: 어지럽고 방대한 자료 속에서 본질적인 핵심 인과관계(아키텍처)를 조목조목 분류해내는 정보 추출력.",
        en: "Spotting conceptual contradictions in vast databases and building flawless templates."
      },
      weaknesses: {
        ko: "주변 사람들이 말하는 귀여운 성격 맹점: 친구가 슬픈 이야기를 털어놓을 때 뇌가 자동으로 팩트 체크와 해결 공식을 말하기 시작하여 상대방에게 본의 아니게 로봇(?) 취급을 당함.",
        en: "Responding to emotional complaints with logical formulas, making friends label you as a robot."
      },
      prescription: {
        ko: "현생 활용 처방전: 때로는 주사위를 던지는 세상의 무작위성(Randomness)을 인정하고, 타인의 논리적이지 못한 감정적 넋두리에도 영혼 없는 리액션('아, 진짜?', '힘들었겠다')을 한 방울 곁들여보세요. 세상살이가 한결 부드러워집니다.",
        en: "Sprinkle some casual empathy like 'Oh really?' into raw talks. Smooth social ties fuel faster project execution."
      }
    },
    "INTP": {
      animalName: { ko: "외계인 분석가 (INTP)", en: "Alien Investigator (INTP)" },
      typeTitle: {
        ko: "시공간의 원리를 탐구하는 괴짜 사색 연구원",
        en: "The Logician dissecting cosmic formulas"
      },
      image: "images/mbti-analyst.png",
      coreTraits: { ko: "엉뚱한 호기심 • 본질적 탐구 • 자유로운 아이디어", en: "Wacky Curiosity • Core Truth Finder • Spontaneous Idea" },
      summary: {
        ko: "관습적인 상식을 거부하고 시공간 워프나 외계인 같은 엉뚱하면서도 날카로운 의문을 던지며, 우주의 본질을 혼자 탐구하는 당신은 INTP 연구원입니다.",
        en: "An analytical explorer of cosmic laws who questions standard rules and loves brain challenges."
      },
      dailyScene: {
        ko: "당신은 세상 모든 뻔한 해답과 권위주의적 주장을 지극히 의심합니다. 남들이 맛집에서 길게 줄 서며 트렌드에 열광할 때, 구석진 방에서 '줄 서기의 경제학적 비효율성'을 생각하는 공상의 신입니다. 혼자 조용히 생각할 수 있는 조용한 카페나 침대 위 안전지대를 최고로 사랑하며, 머릿속에서 번뜩이는 수많은 지식 파편들을 직관적으로 연결하여 남들이 상상치 못한 엉뚱하고 기발한 해법을 툭 던집니다.",
        en: "You evaluate daily actions based on raw curiosity rather than public trends. When a project hits a wall, you bring a radical theory that resets the entire playing board. Quiet environments let your thoughts spark, connecting concepts in complex patterns."
      },
      strengths: {
        ko: "대표적 성격 강점: 복잡하게 얽힌 문제의 전제조건 자체에 질문을 던져 근본적인 문제점(Root Cause)을 정의하는 통찰력.",
        en: "Defining the absolute root cause of a bug by questioning the starting rules."
      },
      weaknesses: {
        ko: "주변 사람들이 말하는 귀여운 성격 맹점: 기발한 시작 프로젝트는 99개인데 마감 데드라인 벼락치기에 너무 의존하다가 미완성 아이디어 스케치만 잔뜩 쌓인 상태로 방치함.",
        en: "Constructing multiple genius blueprints but delaying the completion because a new theory caught your eye."
      },
      prescription: {
        ko: "현생 활용 처방전: 당신의 머릿속 우주도 든든한 마감의 기한과 완성의 캔버스를 만날 때 비로소 특허(성과)로 인정받습니다. 데드라인을 소수점으로 지키는 연습을 병행해 보세요.",
        en: "Commit to finishing just one core task before launching into your next deep research."
      }
    },
    "ENTJ": {
      animalName: { ko: "야심 찬 스타트업 대표 (ENTJ)", en: "Ambitious Startup CEO (ENTJ)" },
      typeTitle: {
        ko: "전선을 직접 개척하여 회사를 씹어 먹는 야망의 사령관",
        en: "The Commander scaling up systems"
      },
      image: "images/mbti-analyst.png",
      coreTraits: { ko: "야망과 비전 • 파워풀 추진 • 시스템 구축", en: "Ambition • Executive Power • Scalability" },
      summary: {
        ko: "불가능이라는 사전을 찢어버리듯 과감한 결단력과 강력한 카리스마로 공동체의 비전을 확장하고 목표를 기어코 쟁취해내는 당신은 ENTJ 대표입니다.",
        en: "A strategic builder who drives teams through challenges to secure massive goals."
      },
      dailyScene: {
        ko: "당신은 회의가 길어지며 '말만 많고 액션이 없는 상태'를 참지 못합니다. 극강의 비즈니스 마인드와 주동성으로, 비합리적인 조직 관습을 마주하면 과감히 총대를 메고 판도를 재설계합니다. 사람들의 거절이나 비판에도 쉽게 멘탈이 흔들리지 않으며, 철저한 능력주의를 지향해 내 사람들을 최고의 성과로 이끄는 천생 리더의 카리스마를 뿜어냅니다.",
        en: "You cut through unproductive talk and direct teams toward real execution. You see structural holes in businesses instantly and reconstruct them. Your ambition drives you to continuously look for higher goals and scale systems."
      },
      strengths: {
        ko: "대표적 성격 강점: 사람들의 역할을 효율적으로 나누고, 목표 마감일까지 가시적인 실무를 폭발적으로 몰아붙이는 실행력.",
        en: "Arranging tasks for maximum efficiency and leading group actions under hard targets."
      },
      weaknesses: {
        ko: "주변 사람들이 말하는 귀여운 성격 맹점: 일을 더 잘해보자며 건넨 날카로운 조언 피드백이 동료들에게 불곰의 몽둥이질(?) 같은 마음의 상처로 작용함.",
        en: "Delivering raw feedback too bluntly, leaving sensitive teammates slightly bruised."
      },
      prescription: {
        ko: "현생 활용 처방전: 때로는 100% 효율이 나지 않더라도 팀원들의 페이스를 조절하고 심리적 안정(그늘)을 챙겨주세요. 아군의 든든한 신뢰망이 뒷받침될 때 당신의 위대한 정복 사업이 영구히 안전해집니다.",
        en: "Guard your team's energy. A long-term victory needs steady trust behind your leadership."
      }
    },
    "ENTP": {
      animalName: { ko: "엉뚱 발명 유튜버 (ENTP)", en: "Wacky Inventor YouTuber (ENTP)" },
      typeTitle: {
        ko: "선 넘는 드립과 번뜩이는 꼼수로 판을 흔드는 승부사",
        en: "The Innovator disrupting boring rules"
      },
      image: "images/mbti-analyst.png",
      coreTraits: { ko: "현란한 설전 • 아이디어 뱅크 • 임기응변", en: "Wit & Debate • Idea Generator • Adaptability" },
      summary: {
        ko: "지루하고 뻔한 시스템에 딴지를 걸며 기상천외한 질문과 번개 같은 잔머리로 토론을 주도하고, 핫플과 신기술의 중심에서 도파민을 수집하는 당신은 ENTP 유튜버입니다.",
        en: "A dynamic mind who thrives on creative debates, quick hacks, and tracking new digital trends."
      },
      dailyScene: {
        ko: "당신은 남들이 다 예라고 할 때 '아닌데? 이거 이렇게 하면 훨씬 꿀인데?' 하며 꼼수 꿀팁을 제시하길 즐깁니다. 의견 대립이 벌어지면 속으로 짜릿함을 느끼며 현란한 반박 입담을 뽐냅니다. 마감일 직전에 몰아치는 벼락치기 속에서 최고의 도파민을 충전하며, 격식 차리는 조용한 면접장이나 매뉴얼이 딱딱한 환경을 기묘한 유머로 환기하는 타고난 분위기 주도자입니다.",
        en: "You enjoy refuting standard thoughts and offering witty, shortcuts. You love brainstorming sessions and testing experimental features. Routine jobs tire you; you want high-velocity projects that utilize your quick wit."
      },
      strengths: {
        ko: "대표적 성격 강점: 한 치 앞도 보이지 않는 돌발 긴급 위기 상황에서도 번뜩이는 임기응변과 잔머리로 가볍게 판도를 뒤엎는 유연성.",
        en: "Excellent adaptability in crisis and constructing highly entertaining ideas."
      },
      weaknesses: {
        ko: "주변 사람들이 말하는 귀여운 성격 맹점: 흥미가 떨어지는 반복 업무나 스케줄 관리 리스트를 대가리에 보관만(?) 하다가 결제일을 깜빡하고 넘겨버림.",
        en: "Ignoring routine checklists because they bore you, leading to tiny bills and dates missed."
      },
      prescription: {
        ko: "현생 활용 처방전: 현란한 입담에 더해, 내 캘린더 일정을 꼼꼼히 정리하는 J형 파트너를 조력자로 두거나 본인 일정에 체크 알림을 적극 설정해 보세요. 당신의 번뜩이는 꼼수가 안정적인 현금 흐름으로 돌아옵니다.",
        en: "Pair up with organized friends or set strict alarms. Your hacks need calendar anchors to succeed."
      }
    },

    // --- 2. 외교관형 (NF 계열: images/mbti-diplomat.png) ---
    "INFJ": {
      animalName: { ko: "타로 마스터 (INFJ)", en: "Tarot Master (INFJ)" },
      typeTitle: {
        ko: "신비로운 직관으로 타인의 마음을 읽어주는 영적 치유사",
        en: "The Advocate parsing souls with direct empathy"
      },
      image: "images/mbti-diplomat.png",
      coreTraits: { ko: "직관적 통찰 • 따뜻한 헌신 • 깊은 정신세계", en: "Intuition • Warm Support • Rich Inner World" },
      summary: {
        ko: "소란스러운 핫플레이스보다 깊고 고요한 영성의 구석방에서, 타인의 깊은 고민과 미래의 운명을 따뜻하게 매핑해 주던 당신은 INFJ 타로 마스터입니다.",
        en: "A quiet counsellor who guides souls through gentle insights and deep visionary paths."
      },
      dailyScene: {
        ko: "당신은 처음 본 사람도 '이 사람 속엔 이런 상처와 스토리가 있겠구나' 하고 귀신같이 간파하는 높은 감수성을 가졌습니다. 타인의 고집이나 갈등 사이에서 평화와 중재를 가장 아름다운 말그릇으로 빚어내며, 겉으로는 누구에게나 친절하지만 내면에는 명확한 철학과 독립적 선이 그어져 있습니다. 조용한 미술관이나 영적인 카페에서 홀로 일기장을 적으며 에너지를 충전하길 사랑합니다.",
        en: "You have a natural ability to read the unexpressed pains in others. You build warm compromises and value deep, one-on-one connections. While gentle and helpful, you have a private boundary that you guard with care."
      },
      strengths: {
        ko: "대표적 성격 강점: 사람의 성향을 복합적으로 통찰하여, 그들의 재능을 가장 가치 있게 치유하고 피드백해 주는 다정한 멘토링.",
        en: "Warm and deep coaching style that visualizes a person's path with logic."
      },
      weaknesses: {
        ko: "주변 사람들이 말하는 귀여운 성격 맹점: 남들의 힘든 하소연을 스펀지처럼 온몸으로 빨아들여 감정 쓰레기통 역할을 하다가 혼자 멘탈이 방전되어 동굴 속으로 탈주해 연락 두절됨.",
        en: "Absorbing everyone's emotional garbage and suddenly disappearing into your cave for recovery."
      },
      prescription: {
        ko: "현생 활용 처방전: 타인의 영혼을 돌보기 전에, 당신 방의 문걸쇠를 단단히 잠그고 '감정 전선 분리 필터'를 장착하세요. 내 멘탈 요새가 튼튼해야 세상의 평화도 장기적으로 사수할 수 있습니다.",
        en: "Set emotional shields. You must protect your own energy first before healing others."
      }
    },
    "INFP": {
      animalName: { ko: "새벽 감성 소설가 (INFP)", en: "Midnight Romantic Novelist (INFP)" },
      typeTitle: {
        ko: "방구석에서 우주를 노래하는 자아 탐색가",
        en: "The Dreamer sketching warm romantic worlds"
      },
      image: "images/mbti-diplomat.png",
      coreTraits: { ko: "순수한 자아 • 새벽 감성 • 예술적 시선", en: "Pure Vibe • Rich Imagination • Romantic Eye" },
      summary: {
        ko: "현실의 차가운 팩트 대신, 나만의 아기자기하고 시적인 세계를 꿈꾸며 타인의 아픔에 눈물 흘려주는 따뜻한 낭만파 당신은 INFP 소설가입니다.",
        en: "A sensitive soul who writes beautiful narratives and values emotional authenticity."
      },
      dailyScene: {
        ko: "당신은 매일 밤 침대에 누워 '오늘 내가 건넨 말이 상처가 되진 않았을까?' 하며 감성적인 이불킥 일기를 적는 다정함의 화신입니다. 격식 있고 딱딱한 명령을 기피하고, 나만의 특별한 영감과 개성이 담긴 소박한 공간(독립 서점, 클래식 음악 등)을 서성입니다. 상처받기 쉽고 눈물이 흔하지만, 소중한 가치관이나 의리를 건드리면 갑옷을 꺼내 입고 깃발을 흔드는 숨겨진 잔 다르크 같은 내면을 지녔습니다.",
        en: "You navigate daily life with high empathy, constantly wondering if your words comforted someone. You seek artistic validation and small cozy cafes. Although you look gentle, you guard your core values with a burning, quiet passion."
      },
      strengths: {
        ko: "대표적 성격 강점: 단어 하나, 구름 한 점에서도 섬세한 감정을 포착해 한 편의 시적 묘사로 빚어내는 크리에이티브한 글그릇.",
        en: "Capturing subtle shifts in mood and translating them into warm, beautiful content."
      },
      weaknesses: {
        ko: "주변 사람들이 말하는 귀여운 성격 맹점: 마감과 정리 체크리스트를 쳐다보면 머리가 지끈거려 미루다가, 결국 벼락치기 전날 밤 울면서 아메리카노를 들이켜며 밤샘 작업을 함.",
        en: "Delaying tasks until the final evening, weeping while drinking coffee to finish before dawn."
      },
      prescription: {
        ko: "현생 활용 처방전: 낭만도 통장 잔고와 정돈된 데스크에서 굳건히 지속됩니다. 가벼운 J형 체크리스트 도구(투두 리스트)를 귀여운 스티커와 함께 채워보는 재미를 들여보세요. 예술적 생산성이 극대화됩니다.",
        en: "Combine your romantic ideas with a small checklist tool. Structure gives flight to dreams."
      }
    },
    "ENFJ": {
      animalName: { ko: "평화 캠페인 리더 (ENFJ)", en: "Inspiring Peace Leader (ENFJ)" },
      typeTitle: {
        ko: "선한 영향력으로 세상을 밝히는 인류애의 수호자",
        en: "The Teacher rallying support for warm growth"
      },
      image: "images/mbti-diplomat.png",
      coreTraits: { ko: "인류애와 지지 • 계획적인 서포트 • 다정함", en: "Altruism • Structured Support • Empathy Vibe" },
      summary: {
        ko: "혼자만의 성취보다 팀원들 전체가 성장하는 기적에 눈물 흘리며, 백성(동료)의 불편을 해결하는 다정하고 설계력 높은 당신의 퍼소나는 ENFJ 리더입니다.",
        en: "An inspiring organizer who guides groups with deep empathy and detailed schedules."
      },
      dailyScene: {
        ko: "당신은 새로 들어온 신입이나 소외된 동료를 보면 참지 못하고 친절히 다가가 업무 메뉴얼과 맛있는 간식을 챙겨주는 '엄마' 같은 든든한 정치가입니다. 학구적인 성향이 있어 중요한 일정표와 체크리스트를 예쁘게 만들어 팀방에 공유하고, 갈등이 터지면 유쾌한 눈치와 위트로 양측의 자존심을 챙겨주며 윈윈 합의를 이끕니다. 백성을 사랑한 세종대왕처럼, 내 바운더리의 사람들에게 무한 헌신을 제공합니다.",
        en: "You instantly spot who is left out in a group and step in with a warm guide sheet and friendly coffee. You plan checklists, keep communications transparent, and lead discussions toward group growth with structured empathy."
      },
      strengths: {
        ko: "대표적 성격 강점: 상대방이 지닌 잠재적 장점을 귀신같이 발굴하여, 자존감을 폭발시켜 스스로 일하게 만드는 격려 멘토링.",
        en: "Spotting a person's hidden superpower and coaching them to grow with warm details."
      },
      weaknesses: {
        ko: "주변 사람들이 말하는 귀여운 성격 맹점: 인류애가 지나쳐 모두를 만족시키려다 보니 정작 거절을 못해 온갖 잡무(부탁)를 떠맡아 속앓이하며 과부하가 걸림.",
        en: "Accepting too many favors because you can't say no, loading yourself with extra stress."
      },
      prescription: {
        ko: "현생 활용 처방전: '고기 반찬' 든든히 먹고 사냥(휴식)을 가시던 왕처럼, 타인의 부탁을 받기 전에 당신의 스케줄에 '나를 위한 절대 거절 시간'을 엑셀에 먼저 박아두세요. 내 에너지가 넘쳐야 인류애도 퍼집니다.",
        en: "Block a specific window in your calendar labeled 'Do Not Disturb'. Self-care is productivity."
      }
    },
    "ENFP": {
      animalName: { ko: "에너자이저 파티 플래너 (ENFP)", en: "High Tension Party Planner (ENFP)" },
      typeTitle: {
        ko: "매일 새로운 흥미를 수집하는 도파민 대마왕",
        en: "The Campaigner collecting joyful vibrations"
      },
      image: "images/mbti-diplomat.png",
      coreTraits: { ko: "리치한 친화력 • 긍정적 에너지 • 트렌드세터", en: "Super Social Vibe • Optimistic Mind • Trend Follower" },
      summary: {
        ko: "처음 만난 사람도 3초 만에 절친 라인을 뚫고, 번뜩이는 핫플 정보와 댄스 챌린지 텐션으로 축제 분위기를 뿜어내며 낭만을 즐기는 당신은 ENFP 플래너입니다.",
        en: "A vibrant social hub who brings endless project ideas, night party guides, and warm smiles."
      },
      dailyScene: {
        ko: "당신은 매일 '인생은 지루하기엔 너무 짧다!'를 온몸으로 증명하는 인간 골든 리트리버입니다. 새로운 핫플레이스 오픈 소식을 널리 공유하고, 충동적으로 꽂힌 이국적인 예쁜 아이템을 flex하는 쇼핑의 낭만주의자입니다. 사람을 너무 좋아해서 상대방이 나를 싫어하면 깊은 시무룩에 빠지지만, 이튿날 아침이면 다시 꼬리를 흔들며 활기찬 모임을 주도하는 도파민 사냥꾼입니다.",
        en: "You operate on high optimism and digital trends. You love setting up gatherings, collecting beautiful art objects, and checking out local coffee shops. People are naturally drawn to your colorful energy and open-minded talk."
      },
      strengths: {
        ko: "대표적 성격 강점: 굳어있는 어색한 회의장이나 낯선 모임 공기를 순식간에 말랑말랑하고 유쾌하게 만드는 친화력과 소통 촉진 능력.",
        en: "Melting cold social tensions with witty timing of humor and encouraging smiles."
      },
      weaknesses: {
        ko: "주변 사람들이 말하는 귀여운 성격 맹점: 아이디어가 폭발해 벌려놓은 파티는 많은데, 중간에 흥미가 급식으면 조용히 딴짓을 하며 마무리를 흐지부지 뭉개버림.",
        en: "Launching multiple projects with high hype but leaving the boring final files unfinished."
      },
      prescription: {
        ko: "현생 활용 처방전: 낭만적인 파티를 지속하려면, 회계(가계부)와 뒷정리를 도와줄 냉철한 조력자(T/J형)를 파트너로 선점하세요. 마무리를 확실히 해두는 습관만 기르면 당신의 야외 축제는 평생 지속됩니다.",
        en: "Keep a structured checklist helper nearby. Finishing details locks in your creative value."
      }
    },

    // --- 3. 관리자형 (SJ 계열: images/mbti-sentinel.png) ---
    "ISTJ": {
      animalName: { ko: "원칙주의 판사 (ISTJ)", en: "Strict Judge (ISTJ)" },
      typeTitle: {
        ko: "질서와 규칙, 백전백승 신용의 인간 정밀 시계",
        en: "The Logistician ensuring order and logic"
      },
      image: "images/mbti-sentinel.png",
      coreTraits: { ko: "철저한 시간준수 • 매뉴얼 원칙 • 강한 신용", en: "Punctuality • Manual Oriented • High Trust" },
      summary: {
        ko: "약속 10분 전 사전 배치는 인생의 당연한 법률! 오차 없는 철저한 시스템과 팩트 중심의 기록으로 신용을 구축하는 당신은 ISTJ 판사입니다.",
        en: "The model citizen of structure who maps data accurately and shows absolute reliability."
      },
      dailyScene: {
        ko: "당신은 매사 매뉴얼과 규칙이 존중되는 질서 정연한 세상을 사랑합니다. 중요한 약속이 생기면 이미 머릿속으로 최단 루트를 시뮬레이션하고, 대용량 데이터를 처리할 때 엑셀 수치의 미세한 오타를 귀신같이 잡아냅니다. 감정적인 징징거림에는 리액션 고장이 일어나지만, 묵묵하게 맡은 바 책임을 200% 끝마쳐 동료들에게 '이 사람에겐 그냥 믿고 맡긴다'는 극강의 신뢰를 획득하는 우직한 에이스입니다.",
        en: "You run on logic, schedules, and verified records. You show up early, double-check database entries, and maintain quiet focus. Teammates respect you because you never skip steps or leave tasks half-finished."
      },
      strengths: {
        ko: "대표적 성격 강점: 애매모호한 과제도 명확한 단계별 프로세스로 규칙화하여 스케줄을 수호하는 시스템 구축력.",
        en: "Converting confusing project scopes into structured, step-by-step spreadsheets."
      },
      weaknesses: {
        ko: "주변 사람들이 말하는 귀여운 성격 맹점: 돌발 변수나 융통성 없는 일탈 앞에서는 뇌 정지가 오며, 남들이 약속 시간을 5분 늦추면 마음속으로 엄숙한 판사봉을 두드리며 감점을 먹임.",
        en: "Getting deeply annoyed by sudden calendar shifts or teammates ignoring manual codes."
      },
      prescription: {
        ko: "현생 활용 처방전: 인생의 묘미는 가끔 계획되지 않은 골목길에서 피어납니다. 가끔은 주사위(P형 벼락치기)를 던지며 즉흥 여행을 가보거나, 규칙을 깬 일탈 속 소소한 재미를 허용해 보세요.",
        en: "Allow yourself to color outside the lines sometimes. Spontaneity can bring fresh insights."
      }
    },
    "ISFJ": {
      animalName: { ko: "골목길 수호 자율방범대원 (ISFJ)", en: "Warm Neighborhood Patrol (ISFJ)" },
      typeTitle: {
        ko: "소리 없이 세상을 돌보는 다정한 보안 지킴이",
        en: "The Defender guarding stability with care"
      },
      image: "images/mbti-sentinel.png",
      coreTraits: { ko: "소외된 이 보살핌 • 규칙 엄수 • 조용한 헌신", en: "Caring Excluded • Rules Follower • Quiet Dedication" },
      summary: {
        ko: "남들이 튀는 행동으로 스포트라이트를 받을 때, 묵묵히 소외된 동료를 보살피고 약속과 안전 매뉴얼을 수호하는 당신은 ISFJ 방범대원입니다.",
        en: "A quiet, gentle heart who supports the team from behind, maintaining safe networks."
      },
      dailyScene: {
        ko: "당신은 타인의 감정에 섬세하게 귀를 기울이며, 조직의 질서와 안전을 조용히 사수합니다. 아픈 동료를 보면 꿀차를 끓여주고, 회의 뒤에 어질러진 테이블을 조용히 치워두는 따뜻한 수호자입니다. 튀는 꼼수나 무리한 베팅보다는 오랫동안 검증되어 평화로운 스탠다드 제품과 관계를 선호하며, 약속 시간 10분 전에 조용히 도착해 골목길 안전(단합)을 챙기는 든든한 조력자입니다.",
        en: "You remember small details about people, like their favorite drinks or deadlines. You support projects silently, clean up messy details after meetings, and keep systems running reliably with high dedication."
      },
      strengths: {
        ko: "대표적 성격 강점: 상대방이 무엇이 불편하고 무엇이 필요한지 눈치껏 먼저 캐치해내어 조용하게 채워주는 센스와 헌신성.",
        en: "Spotting tiny discomforts early and adjusting settings to comfort teammates."
      },
      weaknesses: {
        ko: "주변 사람들이 말하는 귀여운 성격 맹점: 남을 배려하느라 속마음을 꾹 참으며 혼자 화를 삭이다가, 결국 마음에 한계가 찾아와 고양이처럼 삐쳐서 방안의 동굴로 쏙 숨어버림.",
        en: "Suppressing your own needs to please others, then experiencing sudden emotional fatigue."
      },
      prescription: {
        ko: "현생 활용 처방전: 가끔은 싫은 부탁에는 정중하고 확실하게 거절하는 연습('아니오')을 하세요. 당신의 따뜻한 방범 천막(마음)도 문고리를 잠가두어야 도둑(스트레스)을 막을 수 있습니다.",
        en: "Practice saying 'No' without feeling guilty. Your boundary is vital to sustain your care."
      }
    },
    "ESTJ": {
      animalName: { ko: "비서실 스케줄러 (ESTJ)", en: "Super Efficient Manager (ESTJ)" },
      typeTitle: {
        ko: "일정표와 엑셀을 지배하는 효율 200%의 통제관",
        en: "The Executive organizing actions and schedules"
      },
      image: "images/mbti-sentinel.png",
      coreTraits: { ko: "극강의 효율 • 일정 매핑 • 팩트 체크", en: "Pure Efficiency • Calendar Mapping • Fact Verification" },
      summary: {
        ko: "비효율적인 낭비를 전면 차단하고, 해야 할 일 리스트와 체크박스를 엑셀에 촘촘히 박아 업무 완결을 사수하는 당신의 퍼소나는 ESTJ 스케줄러입니다.",
        en: "An efficient administrator who tracks progress bars, filters out fluff, and delivers results early."
      },
      dailyScene: {
        ko: "당신은 '계획 없는 행동'을 인생의 심각한 낭비라고 여깁니다. 여행을 갈 때 분 단위 숙소와 식사 루트를 엑셀에 깔끔하게 정렬해 두며, 직장에서 지각을 밥 먹듯 하거나 꼼수만 부리는 동료를 보면 깊은 이성적 한숨을 쉽니다. 팩트와 수치 데이터 위주로 명확하게 요약해 보고하는 것을 사랑하며, 공사 구분이 확실하여 팀의 생산성을 최전선에서 수호하는 해결사입니다.",
        en: "You structure work pipelines clearly, setting deadlines for each team action. You hate sloppy work and late delivery. Your friends call you the human excel sheet because you organize group events cleanly."
      },
      strengths: {
        ko: "대표적 성격 강점: 혼잡한 백로그 일감들을 파악해 가장 합리적이고 신속한 시간선 위에 정렬해내는 일정 총괄 지휘 능력.",
        en: "Converting messy project lists into clear weekly calendars with absolute speed."
      },
      weaknesses: {
        ko: "주변 사람들이 말하는 귀여운 성격 맹점: 약속 시간 정각에 조금이라도 늦는 동료에게 눈으로 레이저(?)를 쏘며 엄격한 규칙 엄수를 훈계하여 가끔 팀원들을 덜덜 떨게 만듦.",
        en: "Staring lasers at teammates who arrive 5 minutes late, lecturing them on professional codes."
      },
      prescription: {
        ko: "현생 활용 처방전: 마감 직전에 벼락치기(P형)로 초인적 집중력을 내는 엉뚱한 천재 동료들의 즉흥적 감수성과 영감도 가끔은 봐주며, 숨통을 틔워주는 융통성을 한 스푼 곁들여보세요.",
        en: "Understand that some creative teammates need fluid schedules to spark original ideas."
      }
    },
    "ESFJ": {
      animalName: { ko: "동네 민원 해결사 (ESFJ)", en: "Friendly Neighborhood Helper (ESFJ)" },
      typeTitle: {
        ko: "리액션 혜자이자 우리 반의 영원한 친절 반장",
        en: "The Consul hosting social groups with warmth"
      },
      image: "images/mbti-sentinel.png",
      coreTraits: { ko: "공동체 지지 • 풍부한 리액션 • 친근한 눈치", en: "Team Connection • High Reaction • Friendly Eye" },
      summary: {
        ko: "처음 보는 이웃과도 순식간에 떡볶이 맛집 정보로 2시간 동안 수다를 떨며, 모임의 경조사와 일정을 살뜰하게 챙기는 당신은 ESFJ 반장입니다.",
        en: "A warm host who organizes reunions, remembers birthdays, and coordinates group guides."
      },
      dailyScene: {
        ko: "당신은 주변 사람들의 사소한 표정 변화에도 안테나를 켜는 '친절 센서'가 발달해 있습니다. 다이어리에 동료들의 생일과 약속 일정을 꼼꼼히 적어 챙겨주고, 대화 중 리액션이 고장 나지 않도록 고개를 끄덕이며 연신 호응해 주는 분위기 메이커입니다. 불편한 언쟁보다는 따뜻하고 안정적인 평화를 사랑하여, 동네 민원을 조율하는 해결사 역할을 기꺼이 수행합니다.",
        en: "You host group dinners and coordinate dates happily. Your friendly smile and warm greetings open closed hearts. You take rules seriously, keep schedules clean, and ensure everyone feels welcome and supported."
      },
      strengths: {
        ko: "대표적 성격 강점: 타인이 어떤 점에 호감을 느끼고 예쁘다고 생각하는지 정확하게 간파하는 패션/비주얼 센스와 친화 감각.",
        en: "Recognizing group mood shifts early and organizing customized gifts to restore trust."
      },
      weaknesses: {
        ko: "주변 사람들이 말하는 귀여운 성격 맹점: 남의 경조사 챙기기와 오지랖에 과한 시간과 예산을 소비한 나머지, 정작 정산 가계부를 열었을 때 깜짝 놀라는 귀여운 통장 부실 현상.",
        en: "Spending too much money buying gifts for everyone, leaving your own wallet slightly empty."
      },
      prescription: {
        ko: "현생 활용 처방전: 온 세상을 다 챙기려 하지 않아도 사람들은 당신의 친절을 충분히 알고 있습니다. 가끔은 '내 지갑'과 '내 주말 시간'을 1순위로 챙겨두고, 조용한 방에서 독서 힐링을 맛보세요.",
        en: "Put your own schedule and budget first. You can only care for others when your well is full."
      }
    },

    // --- 4. 탐험가형 (SP 계열: images/mbti-explorer.png) ---
    "ISTP": {
      animalName: { ko: "공구 만능 기술자 (ISTP)", en: "Handy Tool Specialist (ISTP)" },
      typeTitle: {
        ko: "말 대신 연장(실력)으로 조용하게 증명하는 마스터",
        en: "The Virtuoso fixing grids silently"
      },
      image: "images/mbti-explorer.png",
      coreTraits: { ko: "연장 실력 • 최소한의 소통 • 묵묵한 해결", en: "Tool Specialist • Silent Executer • Pragmatism" },
      summary: {
        ko: "불필요한 참견과 감정 낭비는 딱 사절. 오직 실용적인 손재주와 팩트 도구로 문제를 묵묵히 해결해 내는 당신은 ISTP 기술자입니다.",
        en: "A quiet mechanic of code and tools who dislikes gossip but fixes broken machines instantly."
      },
      dailyScene: {
        ko: "당신은 직장이나 학교에서 사생활 간섭을 극도로 싫어하는 과묵한 실력파입니다. 문제가 발생하면 백 마디 토론 대신 묵묵히 공구를 들고 와 조용히 볼트를 조이고 떠납니다. 벼락치기 임기응변 능력이 타의 추종을 불허하며, 주말이면 거친 액티비티나 드라이브로 고요히 스릴 도파민을 채운 뒤, 일기장에 팩트만 단순 요약해 적는 시크한 해결사입니다.",
        en: "You work silently, ignoring idle gossip but focusing on empirical reality. You prefer handy execution over endless team alignments. Your logic is practical: you fix bugs, test systems, and value high-quality toolkits."
      },
      strengths: {
        ko: "대표적 성격 강점: 복잡한 이론이나 말재주에 흔들리지 않고, 당장 망가진 기계나 꼬인 실무 파일을 기하학적 감각으로 뚝딱 고쳐내는 문제해결력.",
        en: "Diagnosing hardware or data issues logically and fixing them with minimal fuss."
      },
      weaknesses: {
        ko: "주변 사람들이 말하는 귀여운 성격 맹점: 회식 자리나 단체 톡방에서 너무 영혼 없는 단답형 답변('ㅇㅇ', '글쎄')만 일관하여 가끔 주변 사람들에게 얼음 마녀/얼음 장군으로 오해받음.",
        en: "Replying to lengthy chats with short icons like 'OK', making teammates think you are angry."
      },
      prescription: {
        ko: "현생 활용 처방전: 가끔은 동료의 자랑이나 감정 이야기에도 기계적인 리액션 3종 세트('오!', '대박', '진짜?')를 번갈아 출력해 보세요. 최소의 언어 가성비로 최고의 평화를 유지할 수 있습니다.",
        en: "Generate automated nods like 'Awesome!' occasionally. A tiny verbal lubricant saves energy."
      }
    },
    "ISFP": {
      animalName: { ko: "방구석 누워있기 예술가 (ISFP)", en: "Lazy Room Artist (ISFP)" },
      typeTitle: {
        ko: "누워있는 침대 위에서 은밀한 미적 영감을 펼치는 힐러",
        en: "The Composer sketching cozy vibes from bed"
      },
      image: "images/mbti-explorer.png",
      coreTraits: { ko: "프로 누워있기 • 미적 감각 • 갈등 회피", en: "Bed Fort Builder • Aesthetic Sense • Peace Seeker" },
      summary: {
        ko: "침대와 합체된 '프로 누워있기 요새' 속에서, 조용히 예쁜 인테리어와 음악 감성을 충전하며 평화를 추구하는 당신은 ISFP 예술가입니다.",
        en: "An artistic homebody who curates visual templates and dislikes social confrontations."
      },
      dailyScene: {
        ko: "당신은 타인에게 해를 끼치는 행동이나 갈등 상황을 몹시 두려워하고 싫어합니다. 처음 보는 사람에게도 적당히 웃으며 다 맞춰 주는 '순둥이'처럼 보이지만, 내 침대 요새로 돌아오면 비로소 진정한 자아가 깨어나 힙한 플레이리스트 음악을 듣고 방을 예쁜 조명으로 꾸밉니다. 준비 운동은 사절이며 마감이 닥쳐야 특유의 시각적 감각으로 결과물을 뚝딱 만들어내는 은둔형 아티스트입니다.",
        en: "You avoid loud arguments and prefer peace. But inside your room, you curate warm color combinations and listen to indie bands. You have a detailed eye for aesthetic layout, delivering beautiful designs at the last minute."
      },
      strengths: {
        ko: "대표적 성격 강점: 공간의 미세한 색조화와 폰트, 소품 배치에서 풍부한 감성을 끄집어내어 어여쁜 공간을 구축하는 미적 안목.",
        en: "Exceptional intuition for soft color schemes, cozy layouts, and artistic branding."
      },
      weaknesses: {
        ko: "주변 사람들이 말하는 귀여운 성격 맹점: 주말에 친구들이 '지금 바로 집 앞인데 나오라'고 급습하면, 화장실에 볼일이 생겼다거나 몸살 기운이 도는 척하며 침대 속 요새 사수 작전을 개시함.",
        en: "Faking a sudden minor flu when friends drop by unexpectedly, to guard your bed fortress."
      },
      prescription: {
        ko: "현생 활용 처방전: 방구석 힐링도 좋지만, 가끔은 당신의 아름다운 작품(스케치나 아이디어)을 세상 밖(SNS, 포트폴리오)으로 널리 배급해 보세요. 당신의 조용하고 이쁜 감성이 뜻밖의 좋은 기회(머니)를 데려다줍니다.",
        en: "Publish your quiet artwork to the public. Your taste has high market value when shared."
      }
    },
    "ESTP": {
      animalName: { ko: "익스트림 보드 라이더 (ESTP)", en: "Extreme Skateboard Rider (ESTP)" },
      typeTitle: {
        ko: "온몸으로 도파민을 수집하는 스릴 추구 행동파",
        en: "The Entrepreneur riding on high momentum"
      },
      image: "images/mbti-explorer.png",
      coreTraits: { ko: "스릴 도파민 • 액티브 아웃도어 • 폭발적 사교", en: "Extreme Thrill • Active Outdoor • High Networking" },
      summary: {
        ko: "머리 아픈 이론과 걱정은 뒤로! 당장 야외 서핑이나 스케이트보드를 타고 몸을 움직이며, 잔머리로 틈새 기회를 포착하는 당신은 ESTP 라이더입니다.",
        en: "An energetic doer who jumps into action first, navigates risks with high physical agility."
      },
      dailyScene: {
        ko: "당신은 매사 책상에 앉아 100년 뒤의 걱정을 N형처럼 토론하는 것을 지독한 시간 낭비로 여깁니다. 닥치는 대로 부딪히며 몸으로 배우고, 돌발 사건이 터지면 탁월한 임기응변와 폭발적인 친화력으로 사람들을 휘어잡아 위기를 헤쳐 나갑니다. 맛있는 길거리 음식, 왁자지껄한 액티비티 축제 현장에서 가장 빛나는 활력의 소유자입니다.",
        en: "You hate sitting still analyzing far-future disasters. You grab your board, walk into crowds, and learn by crashing. You have strong common sense and make sales or negotiate crisis using raw charisma and fast thinking."
      },
      strengths: {
        ko: "대표적 성격 강점: 현장에서 몸으로 빠르게 시행착오를 겪어내며, 기회 비용을 최소화하고 실리를 챙기는 초강력 생존력.",
        en: "High operational velocity and converting social conversations into cash-flow loops."
      },
      weaknesses: {
        ko: "주변 사람들이 말하는 귀여운 성격 맹점: 충동적이고 흥이 넘쳐서 돈이든 약속이든 '지르고 본다'를 실천하다가 카드 청구서와 겹친 일정 속에서 잠시 곤욕을 치름.",
        en: "Booking double appointments and swiping cards impulsively because the vibe was too good."
      },
      prescription: {
        ko: "현생 활용 처방전: 몸을 움직이는 도파민도 탄탄한 안전벨트(J형의 예비 자금 및 스케줄 관리)가 있을 때 더 안전하고 롱런할 수 있습니다. 캘린더 알림과 비상 자금 통장 지키기 룰을 의식적으로 박아두세요.",
        en: "Anchor your raw momentum. Use schedule locks and target-saving accounts to protect your ride."
      }
    },
    "ESFP": {
      animalName: { ko: "틱톡 아이돌 (ESFP)", en: "Dance Challenge Idol (ESFP)" },
      typeTitle: {
        ko: "무대 위에서 스포트라이트를 사랑하는 인간 도파민",
        en: "The Entertainer lighting up social screens"
      },
      image: "images/mbti-explorer.png",
      coreTraits: { ko: "스포트라이트 • 춤과 노래 • 친화력 끝판왕", en: "Spotlight Lover • Performance Vibe • Social Mastery" },
      summary: {
        ko: "새로운 패션과 맛집 정보를 독점하고, 화려한 조명 밑에서 댄스 챌린지를 즐기며 주변 사람들의 관심(스포트라이트)을 사랑하는 당신은 ESFP 아이돌입니다.",
        en: "A colorful social magnet who curates the best party vibes and loves being the center of attention."
      },
      dailyScene: {
        ko: "당신은 골치 아픈 논리 계산이나 매뉴얼 줄 맞추기 직전이 되면 급격한 졸음(?)이 쏟아지는 낙천가입니다. 대신에 핫한 명소 골목길을 걷거나 축제 인파 속에서 리액션 대마왕으로 호응하며 엄청난 아우라를 뿜어냅니다. 주말 약속에 종종 늦지만 특유의 윙크와 춤 동작, 달콤한 도넛 디저트를 공수해 오며 미워할 수 없는 매력을 발휘해 순식간에 분위기를 녹이는 댄스 퀸/킹입니다.",
        en: "You find dry spreadsheets exhausting. But you light up on the dance floor or hosting dinners. You show up in the latest fashion trends, buy pretty decor items, and make everyone laugh through your expressive storytelling."
      },
      strengths: {
        ko: "대표적 성격 강점: 타인이 어떤 점에 호감을 느끼고 예쁘다고 생각하는지 정확하게 간파하는 패션/비주얼 센스와 친화 감각.",
        en: "Incredible eye for visual marketing, trending cosmetics, and high social styling."
      },
      weaknesses: {
        ko: "주변 사람들이 말하는 귀여운 성격 맹점: 만세 부르며 놀다가 내 소지품 가방이나 지갑을 엉뚱한 테이블에 두고 와서 한바탕 분실물 소동을 벌임.",
        en: "Leaving your phone or wallet behind at the party because you were too busy laughing."
      },
      prescription: {
        ko: "현생 활용 처방전: 스포트라이트를 계속 받으려면, 가끔은 당신의 영수증과 서류 파일을 지켜줄 침착한 매니저(T/J형)의 잔소리에 귀를 기울여야 합니다. 꼼꼼한 마무리를 생활화해 보세요.",
        en: "Listen to the warnings of detail-oriented team managers to safeguard your personal brand."
      }
    }
  }
};
