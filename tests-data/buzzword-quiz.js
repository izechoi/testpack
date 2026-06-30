/**
 * @file buzzword-quiz.js
 * @description 10대부터 50대까지 전 세대를 아우르는 유행어 퀴즈 데이터셋입니다.
 * 맞힌 문제 개수(0~10)에 따라 5개의 재치 있는 등급(돌고래, 호랑이, 독수리, 부엉이, 캥거루) 결과를 도출합니다.
 * 문항 수: 10개 (단답형 질문을 4지 선다형 객관식으로 구성)
 */

window.activeTestData = {
  id: "buzzword-quiz",
  title: {
    ko: "세대 공감 유행어 퀴즈",
    en: "Generation Slang Quiz"
  },
  description: {
    ko: "10대 최신 신조어부터 50대 추억의 복고 유행어까지! 당신의 유행어 인싸 지수는 몇 등급일까요?",
    en: "From teenage slangs to retro vibes! What is your slang intelligence grade?"
  },
  icon: "💬",
  status: "active",
  themeClass: "theme-pastel-cream",
  labels: {
    summary: { ko: "인싸 등급 총평", en: "Slang Level Summary" },
    daily: { ko: "나의 세대 소통력", en: "My Communication Vibe" },
    strengths: { ko: "유행어 센스 강점", en: "Slang Intelligence Strengths" },
    weaknesses: { ko: "놓치기 쉬운 트렌드 구멍", en: "Potential Slang Gaps" },
    prescription: { ko: "트렌드 인싸 처방전", en: "Prescription for Slang Upgrade" }
  },
  questions: [
    {
      id: 1,
      type: "choice",
      scenario: {
        ko: "1단계 (10대): 요즘 10대들이 말하는 '디토(Ditto)합니다'의 올바른 뜻은 무엇일까요?",
        en: "Level 1 (Teenager): What does 'Ditto(디토)합니다' mean in Korean youth slang?"
      },
      options: [
        {
          text: { ko: "나도 전적으로 동의합니다", en: "I completely agree with you" },
          isCorrect: true
        },
        {
          text: { ko: "디저트를 토할 때까지 먹는다", en: "Eating desserts until I throw up" },
          isCorrect: false
        },
        {
          text: { ko: "노래 가사를 전부 외워서 부른다", en: "Singing song lyrics from memory" },
          isCorrect: false
        },
        {
          text: { ko: "갑자기 연락을 끊고 사라진다", en: "Suddenly ghosting someone" },
          isCorrect: false
        }
      ]
    },
    {
      id: 2,
      type: "choice",
      scenario: {
        ko: "2단계 (10대): 일 처리나 센스가 탁월한 사람에게 쓰는 '알잘딱깔센'의 진짜 풀이는?",
        en: "Level 2 (Teenager): What is the full meaning of '알잘딱깔센' (Al-jal-ttak-kkal-sen)?"
      },
      options: [
        {
          text: { ko: "알아서 잘 딱 깔끔하고 센스있게", en: "Do it well, cleanly and with sense on your own" },
          isCorrect: true
        },
        {
          text: { ko: "알고 보면 잘생겼는데 딱히 깔 데가 없는 센스쟁이", en: "Good-looking on second thought with zero flaws" },
          isCorrect: false
        },
        {
          text: { ko: "알레르기가 잘 도지는 딱딱한 깔비(갈비) 센서", en: "Hard ribs sensor that reacts to allergies easily" },
          isCorrect: false
        },
        {
          text: { ko: "알뜰하게 잘 살아서 딱 깔끔하게 센트(Cent) 단위 아끼기", en: "Frugally saving up cleanly down to the cent" },
          isCorrect: false
        }
      ]
    },
    {
      id: 3,
      type: "choice",
      scenario: {
        ko: "3단계 (20대): 누군가의 기량이나 상태가 절정에 달했을 때 쓰는 표현인 '폼 미쳤다'의 뜻은?",
        en: "Level 3 (20s): What does '폼 미쳤다' (Form mi-cheot-da) mean?"
      },
      options: [
        {
          text: { ko: "기량이나 솜씨가 대단히 훌륭하다", en: "One's performance or skill is absolutely insane" },
          isCorrect: true
        },
        {
          text: { ko: "스마트폰 액정 필름이 엉망으로 붙었다", en: "The smartphone screen protector is messed up" },
          isCorrect: false
        },
        {
          text: { ko: "세안용 폼클렌징 거품이 눈에 들어가 아프다", en: "Cleansing foam got into the eyes and hurts" },
          isCorrect: false
        },
        {
          text: { ko: "보고서 서식(Form)의 정렬이 전부 깨졌다", en: "The document formatting has totally broken down" },
          isCorrect: false
        }
      ]
    },
    {
      id: 4,
      type: "choice",
      scenario: {
        ko: "4단계 (20대): 복잡하고 힘든 사회 속에서 힐링을 바라는 '복세편살'의 뜻은?",
        en: "Level 4 (20s): What is the meaning of '복세편살' (Bok-se-pyeon-sal)?"
      },
      options: [
        {
          text: { ko: "복잡한 세상 편하게 살자", en: "Let's live comfortably in this complex world" },
          isCorrect: true
        },
        {
          text: { ko: "복받은 세상에서 편식하지 말고 살자", en: "Don't be a picky eater in a blessed world" },
          isCorrect: false
        },
        {
          text: { ko: "복숭아 세 개 편하게 나눠 살(Buy) 사람", en: "Looking for someone to buy three peaches together" },
          isCorrect: false
        },
        {
          text: { ko: "복날에는 세 대의 선풍기를 틀고 편히 살자", en: "Turn on three fans on hot days to rest easy" },
          isCorrect: false
        }
      ]
    },
    {
      id: 5,
      type: "choice",
      scenario: {
        ko: "5단계 (30대): 야민정음의 대표 단어인 '롬곡옾눞'을 거꾸로 뒤집어 읽었을 때 진짜 뜻은?",
        en: "Level 5 (30s): What does '롬곡옾눞' (Rom-gok-op-nop) mean when you rotate the text?"
      },
      options: [
        {
          text: { ko: "폭풍눈물", en: "Stormy tears (crying out loud)" },
          isCorrect: true
        },
        {
          text: { ko: "우주 대폭발", en: "Big bang of the universe" },
          isCorrect: false
        },
        {
          text: { ko: "동네방네 소문", en: "Spreading rumors everywhere" },
          isCorrect: false
        },
        {
          text: { ko: "밀푀유나베", en: "Mille-feuille nabe (hot pot)" },
          isCorrect: false
        }
      ]
    },
    {
      id: 6,
      type: "choice",
      scenario: {
        ko: "6단계 (30대): 회식이나 미팅 중 분위기가 갑자기 조용해질 때 쓰는 '갑분싸'의 뜻은?",
        en: "Level 6 (30s): What does '갑분싸' (Gap-bun-ssa) mean?"
      },
      options: [
        {
          text: { ko: "갑자기 분위기 싸해짐", en: "Suddenly the atmosphere turns cold and awkward" },
          isCorrect: true
        },
        {
          text: { ko: "갑자기 분식집에서 싸움남", en: "Suddenly a fight breaks out at a snack shop" },
          isCorrect: false
        },
        {
          text: { ko: "갑자기 분당선 사거리 교통체증", en: "Suddenly heavy traffic at Bundang crossing" },
          isCorrect: false
        },
        {
          text: { ko: "갑도(갑옷) 입은 분이 싸인을 해줌", en: "A person in armor signing an autograph" },
          isCorrect: false
        }
      ]
    },
    {
      id: 7,
      type: "choice",
      scenario: {
        ko: "7단계 (40대): 2000년대 미니홈피 시절, 상대방의 어이없는 말을 차단하며 쓰던 단어 '즐'의 유래와 뜻은?",
        en: "Level 7 (40s): What did '즐' (Kin) mean during the 2000s Korean internet era?"
      },
      options: [
        {
          text: { ko: "'즐거운 웹서핑'에서 유래했으며 '반사/거절'의 뜻", en: "Derived from 'Happy Surfing', meaning 'Rejection/Talk to my hand'" },
          isCorrect: true
        },
        {
          text: { ko: "'즐거운 인생'에서 유래했으며 '축하'의 뜻", en: "Derived from 'Joyful Life', meaning 'Congratulations'" },
          isCorrect: false
        },
        {
          text: { ko: "'즐겨찾기'에서 유래했으며 '내 마음속에 저장'의 뜻", en: "Derived from 'Bookmark', meaning 'Saved in my heart'" },
          isCorrect: false
        },
        {
          text: { ko: "'즐거운 명절'에서 유래했으며 '새해 복 많이 받아'의 뜻", en: "Derived from 'Happy Holidays', meaning 'Happy New Year'" },
          isCorrect: false
        }
      ]
    },
    {
      id: 8,
      type: "choice",
      scenario: {
        ko: "8단계 (40대): 90년대 후반 음료수 광고로 전 국민이 흉내 내던 유행어이자, 브라질어로 '매우 좋다'는 뜻의 유행어는?",
        en: "Level 8 (40s): What is the retro term meaning 'Excellent!' originating from a 90s juice commercial?"
      },
      options: [
        {
          text: { ko: "따봉!", en: "Tabong! (Excellent!)" },
          isCorrect: true
        },
        {
          text: { ko: "엄지척!", en: "Thumbs up!" },
          isCorrect: false
        },
        {
          text: { ko: "오케이 바리!", en: "Okay-bari! (Got it!)" },
          isCorrect: false
        },
        {
          text: { ko: "끝내줘요!", en: "Delicious/Great!" },
          isCorrect: false
        }
      ]
    },
    {
      id: 9,
      type: "choice",
      scenario: {
        ko: "9단계 (50대): PC통신 채팅창을 뜨겁게 달구었던 대표적인 환영 인사말은?",
        en: "Level 9 (50s): What was the typical friendly online greeting during the 90s PC communication era?"
      },
      options: [
        {
          text: { ko: "방가방가", en: "Bang-ga Bang-ga (Nice to meet you)" },
          isCorrect: true
        },
        {
          text: { ko: "안뇽안뇽", en: "An-nyong An-nyong (Hi there)" },
          isCorrect: false
        },
        {
          text: { ko: "하이루", en: "Hi-ru (Hello)" },
          isCorrect: false
        },
        {
          text: { ko: "하이룽", en: "Hi-rung (Hey)" },
          isCorrect: false
        }
      ]
    },
    {
      id: 10,
      type: "choice",
      scenario: {
        ko: "10단계 (50대): 90년대 중고등학생들이 최고의 대상을 칭송할 때 쓰던 유행어 '이것이다'의 빈칸은?",
        en: "Level 10 (50s): What is the retro blank word in '___이다' used by 90s students to mean 'The best/First rate'?"
      },
      options: [
        {
          text: { ko: "캡", en: "Cap (meaning boss/top)" },
          isCorrect: true
        },
        {
          text: { ko: "짱", en: "Jjjang (meaning best)" },
          isCorrect: false
        },
        {
          text: { ko: "왕", en: "Wang (meaning king)" },
          isCorrect: false
        },
        {
          text: { ko: "탑", en: "Top (meaning number one)" },
          isCorrect: false
        }
      ]
    }
  ],
  results: {
    "level_5": {
      minScore: 10,
      maxScore: 10,
      animalName: { ko: "트렌드 신 (100점)", en: "Slang God (100pt)" },
      typeTitle: {
        ko: "🦊 큰 귀로 온 세대의 트렌드를 포착하는 '사막여우'",
        en: "The Slang Deity: The Trend-Catching Fennec Fox"
      },
      image: "images/trendy-fox.png",
      coreTraits: { ko: "트렌드 세터 • 세대 통합 소통력 • 신조어 번역기", en: "Trend Setter • Universal Empathy • Slang Dictionary" },
      summary: {
        ko: "축하합니다! 10문제를 전부 맞힌 당신은 진정한 트렌드의 신입니다. 10대의 최신 유행어부터 50대의 레트로 감성까지 모두 사로잡은 사막여우형 인간입니다.",
        en: "Perfect! You've decoded every generational reference. You communicate fluently across all generations like a smart fennec fox."
      },
      dailyScene: {
        ko: "당신은 큰 귀로 온 사방의 소리를 다 듣는 사막여우처럼, 주변 세대의 모든 트렌드를 빠르게 감지하고 소통하는 능력자입니다. 급식체부터 옛 PC통신 용어까지 완벽히 내재화되어 있어, 세대 갈등 없이 누구와도 유쾌하게 어울립니다. 센스 넘치는 패션과 힙한 선글라스를 장착한 듯, 어딜 가나 트렌드를 선도하는 매력적인 주역입니다.",
        en: "With large ears that catch every whisper of new trends, you act as the ultimate fennec fox navigator. From Gen-Z memes to classic internet slangs, your vocabulary has no bounds. You keep the vibe stylish, energetic, and highly engaging."
      },
      strengths: {
        ko: "유행어 센스 강점: 전 세대 유행어 데이터베이스 완벽 동기화, 트렌드를 빠르게 습득하고 어색함 없이 활용하는 위트.",
        en: "Flawless knowledge of cross-generation slangs and high social wit."
      },
      weaknesses: {
        ko: "놓치기 쉬운 트렌드 구멍: 신조어를 너무 남발하다 보니 가끔 정통 표준 한국어(?)를 쓸 때 단어가 생각나지 않는 귀여운 국어 부작용.",
        en: "Using too many slangs that you occasionally forget standard dictionary vocabulary."
      },
      prescription: {
        ko: "트렌드 인싸 처방전: 이미 완벽한 인싸이십니다! 다만 가끔은 고운 우리말 사전이나 책을 읽으며 정갈한 표준어 감성도 충전해 보세요.",
        en: "Keep up the beautiful energy, but read some classic books to balance your vocabulary."
      }
    },
    "level_4": {
      minScore: 8,
      maxScore: 9,
      animalName: { ko: "트렌드 리더 (80~90점)", en: "Trend Leader (80~90pt)" },
      typeTitle: {
        ko: "🐯 트렌드 전선에서 포효하는 인싸 '호랑이'",
        en: "The Trend Vanguard: The Trendy Tiger"
      },
      image: "images/tiger.png",
      coreTraits: { ko: "트렌드 리더 • 강력한 소통력 • 센스 쟁이", en: "Trend Leader • Strong Connection • Charismatic Wit" },
      summary: {
        ko: "최신 유행 흐름을 아주 훌륭하게 꿰뚫고 있는 센스쟁이입니다! 일상 속 소통에서 감각적인 센스로 인기를 끄는 포지션입니다.",
        en: "Awesome! You have excellent slang sense. You navigate modern trends and traditional expressions with high confidence."
      },
      dailyScene: {
        ko: "당신은 새로운 트렌드가 생겼을 때 누구보다 빠르게 알림을 수신하고 소화해내는 호랑이형 리더입니다. 신조어 몇 개를 몰라도 눈치와 타고난 센스로 대화 맥락을 즉각 짚어내며, 모임의 중심에서 대화를 이끌어 나갑니다. 10대들의 대화 흐름도 대략 이해하고 있고, 부모님 세대의 추억 유행어도 기분 좋게 리액션해 줄 수 있는 훌륭한 균형 감각을 보유하고 있습니다.",
        en: "You are the fast learner who catches trends as they happen. Even if you miss a minor slang, your high social intuition guides you to match the flow. You act as the bridge between different age groups, generating a energetic and comfortable environment for everyone around."
      },
      strengths: {
        ko: "유행어 센스 강점: 뛰어난 눈치와 상황 판단력, 새로운 유행어 트렌드에 대한 높은 적응성과 유연성.",
        en: "Excellent intuition and fast absorption of modern cultural keywords."
      },
      weaknesses: {
        ko: "놓치기 쉬운 트렌드 구멍: 최신 유행어를 겉으로는 아는 척 넘어가지만, 집에 돌아가서 몰래 검색창에 뜻을 쳐보는 남다른 남의 눈치 신경 쓰기.",
        en: "Pretending you know all youth slangs on the spot, then secretly googling them on your way home."
      },
      prescription: {
        ko: "트렌드 인싸 처방전: 모르는 유행어가 나와도 당당하게 물어보세요! 호랑이 같은 카리스마는 모르는 것을 쿨하게 인정할 때 더욱 빛이 납니다.",
        en: "Be proud! If you don't know a slang, ask directly. Your confidence is your true asset."
      }
    },
    "level_3": {
      minScore: 5,
      maxScore: 7,
      animalName: { ko: "평범한 트렌드 추종자 (50~70점)", en: "Average Slang Follower (50~70pt)" },
      typeTitle: {
        ko: "🦅 트렌드 흐름을 영리하게 관망하는 '독수리'",
        en: "The Watchful Observer: The Sharp Eagle"
      },
      image: "images/eagle.png",
      coreTraits: { ko: "평범함 • 무난한 소통 • 합리적 관찰자", en: "Balanced • Stable Communication • Pragmatic Watcher" },
      summary: {
        ko: "평균적인 트렌드 감각의 소유자입니다. 최신 신조어가 아주 익숙하진 않지만, 일상적인 대화와 소통엔 무리가 없습니다.",
        en: "Perfectly balanced. You get the major pop-culture references, maintaining stable communication in daily life."
      },
      dailyScene: {
        ko: "당신은 멀리서 날아오르며 세상의 트렌드 변화를 차분히 분석하는 독수리와 같습니다. 유행어에 무조건 목매달지 않고, 진짜 널리 쓰이는 대중적인 신조어(예: 갑분싸 등)만 쏙쏙 취합해 실용적으로 사용합니다. 10대 조카들의 너무 외계인 같은(?) 신조어에는 갸우뚱하지만, 굳이 무리해서 억지로 흉내 내기보다는 나만의 편안한 화법을 유지하며 조용히 미소 짓는 실리적인 타입입니다.",
        en: "You observe trends with a calm mind, only adopting expressions that have survived the test of public validation. You don't try too hard to fit in with teenagers, choosing to speak in your own comfort zone while nodding politely to keep the harmony."
      },
      strengths: {
        ko: "유행어 센스 강점: 유행의 소음에 휩쓸리지 않는 주관, 널리 공인된 대중적 유행어는 정확하게 인지하는 균형감.",
        en: "Practical usage of verified terms without being distracted by minor trends."
      },
      weaknesses: {
        ko: "놓치기 쉬운 트렌드 구멍: 10대들과 깊은 대화를 할 때 '그게 무슨 뜻이야?'라고 세 번 이상 물어보다가 슬그머니 대화 방관자 모드로 전환되는 점.",
        en: "Slow reaction to young slangs, which might isolate you from deep conversations in younger groups."
      },
      prescription: {
        ko: "트렌드 인싸 처방전: 일주일에 한 번씩 짤방이나 트렌드 피드를 가볍게 훑어보세요. 독수리의 날카로운 시야에 트렌드 감각 한 스푼만 얹어도 무적입니다.",
        en: "Read a short summary of modern memes once a week to keep your mental radar sharp."
      }
    },
    "level_2": {
      minScore: 2,
      maxScore: 4,
      animalName: { ko: "인터넷 방랑객 (20~40점)", en: "Analog Explorer (20~40pt)" },
      typeTitle: {
        ko: "🦉 한 세대 늦게 출발하는 아날로그 '부엉이'",
        en: "The Late Owl: The Retro Explorer"
      },
      image: "images/owl.png",
      coreTraits: { ko: "아날로그 감성 • 유행어 지각생 • 추억 애호가", en: "Analog Soul • Retro Vibe • Late Adapter" },
      summary: {
        ko: "최신 신조어보다는 지나간 세대의 추억어(예: 방가방가, 즐)가 훨씬 마음 편하게 느껴지는 정겨운 아날로그 영혼입니다.",
        en: "You feel much more comfortable with vintage internet slangs. You have a warm retro soul."
      },
      dailyScene: {
        ko: "당신은 밤이 깊어지면 미니홈피 도토리 감성과 예전 PC통신 파란 화면의 추억을 떠올리는 부엉이입니다. 요즘 아이들이 '알잘딱깔센'이라고 말하면 머릿속 컴퓨터가 로딩을 시작하며 렉이 걸리곤 합니다. 대신 '방가방가'나 '캡이다' 같은 레트로 유행어가 나오면 깃털을 바짝 세우며 격하게 반가워합니다. 유행에 다소 어두울 순 있어도, 그 시절의 따뜻한 정서와 아날로그 대화법을 여전히 아끼는 멋이 있습니다.",
        en: "You are the nostalgic owl who loves classic vibes. Modern slangs sound like a foreign language to you. However, mention retro terms from the early internet era, and you immediately light up. You represent the cozy analog wisdom of past decades."
      },
      strengths: {
        ko: "유행어 센스 강점: 90년대와 2000년대 초반 온라인 감성 및 밈 완벽 소화, 추억을 자극하는 따뜻한 표현력.",
        en: "Strong grip on 90s/2000s retro internet memes and nostalgic storytelling."
      },
      weaknesses: {
        ko: "놓치기 쉬운 트렌드 구멍: 최신 메신저나 SNS에서 친구들이 쓰는 줄임말 밈을 오해해서 엉뚱한 진지 댓글을 남길 확률 80%.",
        en: "Misunderstanding modern abbreviations in group chats and leaving overly serious comments."
      },
      prescription: {
        ko: "트렌드 인싸 처방전: 요즘 핫한 릴스나 숏폼 비디오를 하루에 5분씩만 구경해 보세요. 요즘 트렌드도 생각보다 어렵지 않고 금방 친숙해질 것입니다.",
        en: "Spend 5 minutes watching modern short-form videos to get comfortable with youth vibes."
      }
    },
    "level_0": {
      minScore: 0,
      maxScore: 1,
      animalName: { ko: "조선시대 선비 (0~10점)", en: "Joseon Scholar (0~10pt)" },
      typeTitle: {
        ko: "🦘 타임머신을 타고 온 에코 선비 '캥거루'",
        en: "The Timeless Hermit: The Joseon Scholar"
      },
      image: "images/kangaroo.png",
      coreTraits: { ko: "선비 정신 • 자연인 • 고운 말 지킴이", en: "Pure Language Guard • Nature Lover • Time Traveler" },
      summary: {
        ko: "유행어와 신조어 오염에 전혀 물들지 않은 고결하고 순수한 국어 수호자입니다! 타임머신을 타고 조선시대에서 막 도착한 듯합니다.",
        en: "Pure and untainted. You speak with high grace, completely immune to modern internet abbreviations."
      },
      dailyScene: {
        ko: "당신은 마치 캥거루처럼 자신만의 맑고 둥근 주머니 영역 속에서 아름답고 고운 표준어만 지키며 살아가는 자연인입니다. 젊은 층이 '폼 미쳤다'라고 열변을 토하면 '그의 양식이 광기에 휩싸였느냐'며 걱정스러운 눈빛으로 번역을 시도할지도 모릅니다. 신조어를 모르는 것을 넘어 인터넷 세상의 시끄러운 유행에서 완전히 초탈한 모습으로, 고전적인 품위와 차분한 어조를 사랑하는 우아한 선비의 영혼입니다.",
        en: "You carry a quiet, classical aura that feels completely untouched by noisy online buzz. When people throw digital acronyms at you, you react with polite confusion, as if translated from an ancient document. You are the defender of elegant dictionary expressions."
      },
      strengths: {
        ko: "유행어 센스 강점: 품격 있고 바른 언어 사용, 유행에 흔들리지 않는 뚝심과 독야청청한 주관.",
        en: "Excellent command of pure, formal vocabulary and high resistance to digital noise."
      },
      weaknesses: {
        ko: "놓치기 쉬운 트렌드 구멍: 10대 청소년들과 단 1분만 대화해도 서로 다른 행성에 온 것 같은 극심한 소통 단절 현상 발생.",
        en: "Heavy communication barriers when interacting with teenagers in modern digital setups."
      },
      prescription: {
        ko: "트렌드 인싸 처방전: 퀴즈의 답안 해설지를 읽어보시며 가볍게 유행어 하나씩 머릿속에 메모해보세요. 세상과 소통하는 작은 열쇠가 되어줄 것입니다.",
        en: "Study this quiz's answer list carefully. A tiny slang knowledge can act as a bridge to younger generations."
      }
    }
  }
};
