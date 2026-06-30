/**
 * @file past-life.js
 * @description 세계 역사적 위인 10인(이순신, 클레오파트라, 나폴레옹, 다빈치, 아인슈타인, 카이사르, 잔다르크, 마리퀴리, 세종대왕, 링컨) 기반 전생 유형 테스트 데이터셋입니다.
 * 결과 이미지는 귀여운 파스텔 카툰 캐릭터 일러스트를 연동합니다.
 * 문항 수: 10개, 결과 유형: 10개
 */

window.activeTestData = {
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
  labels: {
    summary: { ko: "전생 위인의 한줄 요약", en: "Past Life Hero Summary" },
    daily: { ko: "당신이 전생에 이 위인이었던 이유 (고증 기록)", en: "Why You Were This Hero (Historical Records)" },
    strengths: { ko: "당신이 계승한 위인의 대표적 강점", en: "Primary Past Life Hero Strength" },
    weaknesses: { ko: "위인이 남긴 귀여운 역사적 인간미", en: "Adorable Human Mistake of the Hero" },
    prescription: { ko: "위인이 현생의 당신에게 보내는 역사적 처방전", en: "Historical Advice for Your Present Life" }
  },
  questions: [
    {
      id: 1,
      type: "choice",
      scenario: {
        ko: "평소 SNS에서 소문난 초인기 맛집의 긴 대기열을 마주했을 때 당신의 행동은?",
        en: "What do you do when facing an extremely long line at a viral restaurant?"
      },
      options: [
        {
          text: {
            ko: "기다림은 나의 사명! 약속한 목표(또는 맛있는 빵)를 위해 끝까지 1등 자리를 지켜 기다린다.",
            en: "Waiting is my mission! I defend my spot for my goal until the very end."
          },
          scores: { napoleon: 3, joanofarc: 3, sejong: 2 }
        },
        {
          text: {
            ko: "대기표를 뽑아두고 근처 편안한 공간이나 카페에 앉아 우아하게 차를 마시며 쉰다.",
            en: "Grab a ticket and sit comfortably in a café nearby, sipping tea with grace."
          },
          scores: { cleopatra: 3, lincoln: 3, einstein: 2 }
        },
        {
          text: {
            ko: "기다리는 시간 낭비는 딱 질색. 바로 결단하여 즉시 입장 가능한 근처 다른 가게로 간다.",
            en: "I hate wasting time. I will immediately move on to a nearby vacant store."
          },
          scores: { caesar: 3, mariecurie: 3, yisunsin: 1 }
        },
        {
          text: {
            ko: "대기줄을 빠르게 단축할 수 있는 특별한 방법이나 지름길 우회로를 머릿속으로 구상한다.",
            en: "Quickly map out a strategy or alternative shortcut to bypass the waiting line."
          },
          scores: { yisunsin: 3, davinci: 3, einstein: 1 }
        }
      ]
    },
    {
      id: 2,
      type: "choice",
      scenario: {
        ko: "친구들과 단체 협동 프로젝트나 여행 계획을 짤 때 당신의 주된 포지션은?",
        en: "What is your main position when planning a group travel or project?"
      },
      options: [
        {
          text: {
            ko: "용맹한 돌격! 강력한 결단력과 전투력으로 일단 앞장서서 일을 추진하는 대장",
            en: "The active commander who jumps in with high resolve and pushes forward."
          },
          scores: { napoleon: 3, caesar: 3, joanofarc: 2 }
        },
        {
          text: {
            ko: "배후에서 전술 지도와 백과사전을 켜고 모든 변수를 치밀하게 감시, 기록하는 지략가",
            en: "The strategist who calculates variables and keeps precise system logs."
          },
          scores: { yisunsin: 3, mariecurie: 3, sejong: 2 }
        },
        {
          text: {
            ko: "감성적인 핫플레이스를 탐색하고 아름다운 배경을 서칭하며 분위기를 즐겁게 만드는 기획자",
            en: "The creative director who searches for aesthetics and keeps the vibe warm."
          },
          scores: { cleopatra: 3, davinci: 3, einstein: 1 }
        },
        {
          text: {
            ko: "서로 다른 갈등과 고집들 사이에서 유쾌하게 위트를 섞어 원만한 타협을 만드는 중재자",
            en: "The diplomat who coordinates diverse opinions with high wit and empathy."
          },
          scores: { lincoln: 3, sejong: 3, cleopatra: 1 }
        }
      ]
    },
    {
      id: 3,
      type: "choice",
      scenario: {
        ko: "마음에 드는 물건을 살 때 당신의 전형적인 쇼핑 철학은 어느 쪽에 가깝나요?",
        en: "What is your typical shopping philosophy when buying items?"
      },
      options: [
        {
          text: {
            ko: "철저한 가성비와 견고함 대조! 내 지갑에서 나가는 1원의 가치도 허투루 쓰지 않는다.",
            en: "Pragmatic budgeting! I compare qualities and never waste a single penny."
          },
          scores: { mariecurie: 3, yisunsin: 3, lincoln: 2 }
        },
        {
          text: {
            ko: "내가 꽂힌 예술적이고 특이한 감성의 제품이라면 비싸도 앞뒤 안 가리고 즉시 구매한다.",
            en: "If I like its unique aesthetic, I buy it immediately regardless of price."
          },
          scores: { davinci: 3, cleopatra: 3, einstein: 3 }
        },
        {
          text: {
            ko: "유행을 타지 않고 다수에게 널리 검증되어 후기가 든든한 대중적인 제품을 선호한다.",
            en: "I prefer safe, verified standard items that have earned high public trust."
          },
          scores: { sejong: 3, mariecurie: 2, lincoln: 2 }
        },
        {
          text: {
            ko: "지름신 강림 후 '결국 필요해서 산 것'이라며 과감하게 지르고 행복하게 포장한다.",
            en: "Buy boldly first, then happily declare it was a vital destiny."
          },
          scores: { caesar: 3, napoleon: 3, joanofarc: 2 }
        }
      ]
    },
    {
      id: 4,
      type: "choice",
      scenario: {
        ko: "일이나 공부를 하던 중 예상치 못한 긴급 파국 돌발 상황이 터졌을 때 당신의 반응은?",
        en: "How do you react mentally when an unexpected urgent crisis occurs?"
      },
      options: [
        {
          text: {
            ko: "근성과 투지 발동! 상향된 긴장감 속에서 온몸을 던져 돌격해 역전극을 만든다.",
            en: "Grit and guts! I face the pressure head-on and fight for a turnaround."
          },
          scores: { yisunsin: 3, joanofarc: 3, napoleon: 3 }
        },
        {
          text: {
            ko: "차분함을 유지하고 매뉴얼과 이론적 근거를 바탕으로 팩트를 수집해 단계별로 수습한다.",
            en: "Stay calm, gather empirical data, and handle it logically step-by-step."
          },
          scores: { mariecurie: 3, sejong: 3, einstein: 2 }
        },
        {
          text: {
            ko: "빠른 잔머리와 인맥 네트워크를 동원해 사람들을 설득하고 임기응변의 협상으로 타개한다.",
            en: "Use verbal charisma and networks to negotiate a quick exit from crisis."
          },
          scores: { caesar: 3, cleopatra: 3, lincoln: 3 }
        },
        {
          text: {
            ko: "기존의 틀을 완전히 뒤흔드는 전혀 생각지 못한 기발한 상상력이나 꼼수로 위기를 돌파한다.",
            en: "Break the rules entirely using a creative shortcut or dynamic innovation."
          },
          scores: { davinci: 3, einstein: 3 }
        }
      ]
    },
    {
      id: 5,
      type: "choice",
      scenario: {
        ko: "당신을 가장 행복하게 충전해 주는 이상적인 쉼표 공간은?",
        en: "Which environment recharges your mental battery the most?"
      },
      options: [
        {
          text: {
            ko: "방 안에서 누구의 간섭도 없이 홀로 생각에 잠기거나 가만히 에너지를 아끼는 내 서재",
            en: "Being completely alone in my room, thinking, or resting with zero social pressure."
          },
          scores: { einstein: 3, mariecurie: 3, sejong: 2 }
        },
        {
          text: {
            ko: "사람들의 환호, 맛있는 술과 음식, 감각적인 대화가 끊이지 않는 세련된 파티 핫플레이스",
            en: "A busy social hub filled with grand talks, elegant food, and laughter."
          },
          scores: { cleopatra: 3, caesar: 3, lincoln: 3 }
        },
        {
          text: {
            ko: "아름다운 아이디어와 고즈넉한 정취가 묻어나는 미술관, 조용한 도서관의 구석진 테이블",
            en: "A quiet corner in a historic library, art gallery, or aesthetic museum."
          },
          scores: { davinci: 3, lincoln: 2, sejong: 2 }
        },
        {
          text: {
            ko: "바람을 뚫고 땀을 흠뻑 흘리는 스포츠 필드나 거친 대자연 아웃도어",
            en: "An outdoor sports field or raw wilderness where I sweat and conquer challenges."
          },
          scores: { yisunsin: 3, napoleon: 3, joanofarc: 2 }
        }
      ]
    },
    {
      id: 6,
      type: "choice",
      scenario: {
        ko: "중요한 비즈니스 또는 대면 약속이 있을 때, 당신이 약속 시간을 지키는 기준은?",
        en: "How do you typically manage appointment times?"
      },
      options: [
        {
          text: {
            ko: "약속 10분 전 사전 배치는 철칙! 미리 도착해서 판을 읽고 조용히 대기한다.",
            en: "Arriving 10 minutes early is my code. I set up and read the field first."
          },
          scores: { yisunsin: 3, mariecurie: 3, sejong: 3 }
        },
        {
          text: {
            ko: "마지막 순간까지 불꽃처럼 달리거나 일에 집중하다가 정각 세이프를 위해 달린다.",
            en: "Work till the final minute and run like lightning to make it just on time."
          },
          scores: { napoleon: 3, caesar: 3, joanofarc: 2 }
        },
        {
          text: {
            ko: "다소 늦더라도 상대를 사로잡을 유쾌한 입담이나 맛있는 디저트를 챙겨 자연스럽게 매료시킨다.",
            en: "Even if late, I prepare a funny story or sweet treats to charm my partner."
          },
          scores: { cleopatra: 3, lincoln: 3, davinci: 2 }
        },
        {
          text: {
            ko: "일정에 너무 얽매이지 않고, 내 집중력의 흐름이나 상황에 따라 융통성 있게 조율한다.",
            en: "I don't stress over the clock, I adapt flexibly based on my mental flow."
          },
          scores: { einstein: 3, caesar: 2 }
        }
      ]
    },
    {
      id: 7,
      type: "choice",
      scenario: {
        ko: "완전히 새로운 집단이나 낯선 커뮤니티에 들어갔을 때 당신의 생존 공식은?",
        en: "What is your survival strategy in a brand new social community?"
      },
      options: [
        {
          text: {
            ko: "불필요한 에너지는 아낀다. 묵묵히 내 실력과 역할만 수행하며 신뢰를 쌓는다.",
            en: "Conserve energy. I silently perform my duties to gain structural trust."
          },
          scores: { mariecurie: 3, einstein: 3, yisunsin: 3, sejong: 1 }
        },
        {
          text: {
            ko: "네트워킹의 마술사! 적극적으로 인사하며 순식간에 핵심 친화 라인을 장악한다.",
            en: "Master communicator! Approach with a smile and lead social circles."
          },
          scores: { cleopatra: 3, lincoln: 3, caesar: 3, napoleon: 2 }
        },
        {
          text: {
            ko: "기존의 불합리한 관습이 보이면 침묵하지 않고 개혁안을 내세워 판도를 바꾼다.",
            en: "If I spot outdated rules, I raise my voice and reform the system."
          },
          scores: { joanofarc: 3, davinci: 3, einstein: 2, napoleon: 2 }
        }
      ]
    },
    {
      id: 8,
      type: "choice",
      scenario: {
        ko: "어떤 큰 프로젝트나 중요한 집필을 개시하기 직전 당신의 행동 양식은?",
        en: "What prep routine do you check before initiating a major project?"
      },
      options: [
        {
          text: {
            ko: "도구와 환경 정리 정돈! 책상 청소와 필요한 리서치 셋팅이 완벽해야 뇌가 굴러간다.",
            en: "Aligning tools and systems! I need structured setup to start my focus."
          },
          scores: { davinci: 3, yisunsin: 3, mariecurie: 3 }
        },
        {
          text: {
            ko: "준비 운동은 필요 없다. 데드라인의 압박이 등 뒤에 불꽃처럼 밀려와야 비로소 시작한다.",
            en: "No prep needed. I focus best under raw pressure near the deadline."
          },
          scores: { napoleon: 3, caesar: 3, joanofarc: 3, einstein: 1 }
        },
        {
          text: {
            ko: "해야 할 일의 체크리스트와 일정을 엑셀이나 캘린더에 촘촘하게 박아 매핑하고 시작한다.",
            en: "I construct a systematic list of checklist items on my dashboard first."
          },
          scores: { sejong: 3, lincoln: 3, cleopatra: 3 }
        }
      ]
    },
    {
      id: 9,
      type: "choice",
      scenario: {
        ko: "동료와 날카로운 대립 상황이나 의견 충돌이 일어났을 때 당신의 태도는?",
        en: "How do you handle intense disagreements or debates with others?"
      },
      options: [
        {
          text: {
            ko: "정확한 팩트와 논문, 논리적 증거를 조목조목 들이밀어 타협 없는 설전을 벌인다.",
            en: "I argue with exact facts, data, and logical evidence with zero compromise."
          },
          scores: { yisunsin: 3, mariecurie: 3, einstein: 3, joanofarc: 3, napoleon: 2 }
        },
        {
          text: {
            ko: "대립의 어색한 텐션이 싫다. 특유의 위트와 조율 능력으로 양측이 윈윈할 타협점을 빚어낸다.",
            en: "I hate toxic tension. I shape a win-win compromise with humor and negotiation."
          },
          scores: { lincoln: 3, sejong: 3, cleopatra: 3, caesar: 3, davinci: 2 }
        }
      ]
    },
    {
      id: 10,
      type: "choice",
      scenario: {
        ko: "하루의 업무나 연구를 마치고 나만의 기록을 남길 때 주로 사용하는 서술 방식은?",
        en: "What is your main writing style when recording your day?"
      },
      options: [
        {
          text: {
            ko: "오늘 마주친 특별한 감정과 번뜩인 영감을 일기장에 시적이거나 독창적으로 스케치한다.",
            en: "Draft my inner delicate insights and sparks of ideas in my notebook."
          },
          scores: { davinci: 3, cleopatra: 3, joanofarc: 3, einstein: 2 }
        },
        {
          text: {
            ko: "오늘의 주요 실행 사실과 성과, 지출 수치만 일목요연하게 팩트 위주로 요약한다.",
            en: "Objectively index target actions, accomplishments, and expenditures."
          },
          scores: { yisunsin: 3, mariecurie: 3, caesar: 3, napoleon: 3 }
        },
        {
          text: {
            ko: "사람들이 참고할 만한 유익한 노하우나 꿀 정보, 도움 되는 팁들을 예쁘게 정리해 기록한다.",
            en: "Nicely structure reference checklists, tips, and guides for public help."
          },
          scores: { sejong: 3, lincoln: 3, cleopatra: 2 }
        }
      ]
    }
  ],
  results: {
    "yisunsin": {
      animalName: { ko: "충무공 이순신", en: "Admiral Yi Sun-sin" },
      typeTitle: {
        ko: "12척의 배로 나라를 구한 철저한 전략가 '이순신'",
        en: "The Invincible Naval Strategist: Yi Sun-sin"
      },
      image: "images/hero-yisunsin.png",
      coreTraits: { ko: "철저한 대비 • 백전백승 전략 • 무한 책임감", en: "Preparation • Perfect Tactics • High Responsibility" },
      summary: {
         ko: "극강의 준비성과 위기 앞에서도 꺾이지 않는 대담한 기개, 그리고 철저한 책임감으로 매 프로젝트를 승리로 이끄는 당신의 전생은 충무공 이순신 장군이었습니다.",
         en: "With tactical brilliance and unyielding grit under pressure, you organize victories. You were Admiral Yi Sun-sin."
      },
      dailyScene: {
        ko: "당신은 전생에 한산도 앞바다에서 학익진을 지휘하며 23전 23승 무패 신화를 장식한 위대한 전술가였습니다. '살고자 하면 죽을 것이요, 죽고자 하면 살 것이다'라는 신념 아래, 언제나 난중일기를 기록하며 다가올 파도를 치밀하게 시뮬레이션했습니다. 현생의 당신이 중요한 과제를 앞두고 빈틈없이 리스크를 검토하고, 팀원들이 흔들릴 때 우직한 책임감의 기둥 역할을 맡으며, 예기치 못한 위기 상황에서도 명확하게 우선순위를 정렬해 승리로 이끄는 지적인 힘은 이순신 장군의 DNA를 고스란히 계승한 유산입니다.",
        en: "In your past life, you commanded the high seas under strict discipline, crafting legendary victories against impossible odds. You documented every battlefield shift. Today, this translates to your solid reliability. When others panic, you silently analyze data, align tasks, and steer the team toward safety. You carry the noble spirit of an invincible anchor who values preparation and honor above all."
      },
      strengths: {
        ko: "당신이 계승한 대표적 강점: 폭발적인 돌발 사태도 단숨에 정리해버리는 위기 대처 능력과 빈틈없는 전술 기획 스케줄링.",
        en: "Exceptional resilience in chaos and detail-oriented operational preparation."
      },
      weaknesses: {
        ko: "위인이 남긴 귀여운 역사적 인간미: 일기에 날씨와 주변인 뒷담화(?)를 무척 솔직하고 소상히 적으시며 은근히 소심하게 스트레스를 삭이시던 난중일기 속 면모.",
        en: "Relieving stress by writing overly detailed, blunt diaries about people who annoyed you."
      },
      prescription: {
        ko: "위인이 보내는 역사적 처방전: '아직 신에게는 열두 척의 배가 남아있사옵니다'라고 스스로를 채찍질하기 전에, 가끔은 한 발짝 뒤로 물러나 당신만의 평화로운 한산도 정자 위에서 시조 한 자락을 읊으며 숨을 골라보세요.",
        en: "Do not push yourself to carry the weight of the entire world. Rest your shield and take a break."
      }
    },
    "cleopatra": {
      animalName: { ko: "클레오파트라", en: "Cleopatra" },
      typeTitle: {
        ko: "7개 국어를 조종한 화술과 설득의 대여왕 '클레오파트라'",
        en: "The Queen of Charm and Diplomacy: Cleopatra"
      },
      image: "images/hero-cleopatra.png",
      coreTraits: { ko: "매혹적인 사교성 • 다국어 언어 천재 • 정교한 외교술", en: "Charisma • Multilingualism • Master Negotiation" },
      summary: {
        ko: "언어의 마술사이자 상대를 매료시키는 품격 있는 화술로 판세 자체를 본인 편으로 매력적으로 이끌어 나가던 당신은 이집트의 여왕 클레오파트라였습니다.",
        en: "A natural diplomat who won kingdoms through strategic eloquence and intellectual charm. You were Queen Cleopatra."
      },
      dailyScene: {
        ko: "전생의 당신은 화려한 알렉산드리아 궁정에서 카이사르와 안토니우스 같은 당대 최고 권력자들을 설득력 있는 논리와 매혹적인 카리스마로 사로잡은 뛰어난 정치가였습니다. 단순한 미모가 아닌, 7개 국어에 능통한 풍부한 학식과 세련된 유머로 외교 테이블을 지배했습니다. 이러한 소통 재능은 현생에서도 유효하여, 처음 만난 사람의 마음을 3초 만에 열고, 까다로운 조별 과제나 비즈니스 협상에서 타고난 눈치와 화술로 나에게 유리한 고지를 이끌어내는 인맥 지휘관의 면모로 이어집니다.",
        en: "You ruled Alexandria with high intellectual grasp and multi-language capability. You engaged world conquerors on equal terms. Today, you are the master storyteller. You know exactly what words to pick, how to set the lighting of your social space, and how to negotiate win-win agreements with beautiful grace."
      },
      strengths: {
        ko: "당신이 계승한 대표적 강점: 목소리 톤과 단어 선택 하나로 상대의 경계심을 무력화시키는 극강의 언어적 설득 테크닉.",
        en: "Charming communication style and reading people's social needs instantly."
      },
      weaknesses: {
        ko: "위인이 남긴 귀여운 역사적 인간미: 이벤트를 너무 좋아해서 카이사르에게 자신을 카펫에 말아 배달(?)시키는 파격적인 첫 등장을 연출한 남다른 이벤트 집착.",
        en: "Going slightly over-the-top with dramatic entries, like rolling yourself inside a carpet for delivery."
      },
      prescription: {
        ko: "위인이 보내는 역사적 처방전: 화려한 무대와 끊임없는 인맥 네트워킹 속에서 에너지를 쏟는 것도 멋지지만, 가끔은 카펫(가면)을 완전히 걷어내고 가장 솔직하고 편안한 내면의 민낯을 마주하는 독서 시간을 누려보세요.",
        en: "Take off your diplomatic crown. Enjoy some quiet hours without needing to charm anyone."
      }
    },
    "napoleon": {
      animalName: { ko: "나폴레옹", en: "Napoleon Bonaparte" },
      typeTitle: {
        ko: "불가능은 없다며 온 대륙을 개척한 황제 '나폴레옹'",
        en: "The Boundary-Pushing Conqueror: Napoleon"
      },
      image: "images/hero-napoleon.png",
      coreTraits: { ko: "불가능은 없다 • 저돌적 추진 • 개척 정신", en: "Limitless Goal • High Drive • Pioneering Vibe" },
      summary: {
        ko: "\"내 사전에 불가능이란 단어는 없다\"를 몸소 증명하듯, 대담한 실행력과 야망으로 남들이 가지 않은 미지의 영토를 향해 질주하는 당신은 전생에 나폴레옹이었습니다.",
        en: "Fueled by fiery ambition and high drive, you cross snowy Alps to conquer targets. You were Napoleon Bonaparte."
      },
      dailyScene: {
        ko: "전생의 당신은 알프스산맥을 넘으며 전 유럽을 호령하던 용맹한 총사령관이었습니다. 남들이 '지형이 험해 불가하다'고 말릴 때, 본인의 든든한 직관과 결단력으로 판을 뒤흔들고 황제의 관을 직접 자신의 머리에 얹는 등 전무후무한 야망의 드라마를 장식했습니다. 현생의 당신이 지루한 현실 유지에 만족하지 못하고 끊임없이 새로운 이직, 창업, 새로운 도전 거리를 스스로 만들어 돌진하며, 결심이 서면 뒤돌아보지 않고 돌격하는 불도저형 리더십을 갖춘 원동력은 바로 이 전생의 야망 세포 덕분입니다.",
        en: "You led legions across frozen peaks, rewriting map boundaries with absolute speed. You placed the imperial crown on your own head. Today, you are the bulldozer who initiates new projects, tackles hard goals, and pushes past negative voices. Your drive makes the impossible happen."
      },
      strengths: {
        ko: "당신이 계승한 대표적 강점: 남들이 주저할 때 눈 깜짝할 사이에 첫발을 내딛어 기선을 제압하는 위대한 돌파 정신.",
        en: "Unmatched operational speed and courage to challenge uncharted projects."
      },
      weaknesses: {
        ko: "위인이 남긴 귀여운 역사적 인간미: 겉으론 위엄 넘치는 황제였지만, 사실은 연인 조세핀에게 편지로 투정을 부리고 고양이 공포증이 있어 고양이만 보면 깜짝 놀라 도망치던 의외의 반전 귀여움.",
        en: "Writing overly dramatic love notes and jumping onto tables when seeing a tiny kitten."
      },
      prescription: {
        ko: "위인이 보내는 역사적 처방전: 워털루에서의 마지막 과욕을 기억하세요. 모든 전투에서 승리할 순 없습니다. 때로는 한 박자 템포를 늦추고 아군의 체력과 리소스를 챙기며 안전한 후퇴를 택하는 융통성도 필요합니다.",
        en: "Slow down your horse. Guard your inner energy to sustain your long-term empire."
      }
    },
    "davinci": {
      animalName: { ko: "레오나르도 다 빈치", en: "Leonardo da Vinci" },
      typeTitle: {
        ko: "미술부터 천문학까지 다 섭렵한 융합형 천재 '다 빈치'",
        en: "The Ultimate Renaissance Polymath: Leonardo da Vinci"
      },
      image: "images/hero-davinci.png",
      coreTraits: { ko: "무한 호기심 • 융합형 크리에이터 • 다재다능", en: "Curiosity • Multi-Talent • Renaissance Mind" },
      summary: {
        ko: "예술적 감성과 과학적 이성, 왕성한 호기심이 기막히게 융합되어 매일 번뜩이는 아이디어를 쏟아내던 당신은 르네상스의 거장 레오나르도 다 빈치였습니다.",
        en: "An artistic visionary and analytical inventor who mapped blueprints of helicopters and masterpieces alike. You were Leonardo."
      },
      dailyScene: {
        ko: "전생의 당신은 피렌체의 화실에서 모나리자의 신비로운 미소를 연구하는 동시에 하늘을 나는 기계를 설계하고 인체를 드로잉하던 만능형 천재였습니다. 한 분야에 얽매이지 않고 우주의 모든 궁금증을 노트에 해부학적으로 기록했습니다. 이러한 다재다능한 두뇌 덕분에 현생의 당신 또한 기획, 디자인, 데이터 분석 등 여러 능력을 동시에 섭렵한 멀티태스커로 활약하며, 세상에 없던 독창적인 아이디어 조합으로 팀원들을 깜짝 놀라게 만듭니다.",
        en: "You sketched wings of birds and painted the Last Supper, operating with a brain that saw no boundary between art and science. Today, you are the multidisciplinary asset. You design layouts, analyze code, and curate copy, bringing creative sparks that solve complex projects elegantly."
      },
      strengths: {
        ko: "당신이 계승한 대표적 강점: 상반된 두 가지 아이디어(예: 감성과 기술)를 결합하여 하나의 눈부신 가치를 창조하는 기획력.",
        en: "Connecting distant dots to construct uniquely creative and visual solutions."
      },
      weaknesses: {
        ko: "위인이 남긴 귀여운 역사적 인간미: 끊임없는 호기심 때문에 시작한 프로젝트는 오조오억 개인데, 정작 물감 섞는 새로운 꼼수에 몰두하다가 완성을 차일피일 미뤄 미완성작이 무척 많았던 프로 벌리머(ADHD형) 면모.",
        en: "Starting ten glorious designs but delaying the finish because you got curious about a new tool."
      },
      prescription: {
        ko: "위인이 보내는 역사적 처방전: 새로운 아이디어 노트를 펼치기 전에, 현재 손에 쥔 모나리자 캔버스 한 장을 완전하게 마침표 찍고 발표하는 '완결의 미학'을 의식적으로 실천해 보세요. 생산성이 백 배 오릅니다.",
        en: "Focus on closing current tasks before launching your next exciting masterwork."
      }
    },
    "einstein": {
      animalName: { ko: "알베르트 아인슈타인", en: "Albert Einstein" },
      typeTitle: {
        ko: "상대성 이론으로 우주의 틀을 바꾼 물리학자 '아인슈타인'",
        en: "The Quirky Physicist of Relative Space: Albert Einstein"
      },
      image: "images/hero-einstein.png",
      coreTraits: { ko: "엉뚱한 상상 • 본질 탐구 • 기존 권위 거부", en: "Imagination • Core Logic • Non-Conformist" },
      summary: {
        ko: "세상의 고정관념에 질문을 던지며, 엉뚱한 상상력(시공간 워프)과 독창적인 본질 탐구로 새로운 패러다임을 연 당신의 전생은 아인슈타인이었습니다.",
        en: "With wild hair and a playful tongue, you re-envisioned cosmic gravity through pure thought experiments. You were Einstein."
      },
      dailyScene: {
        ko: "전생의 당신은 특허청 직원으로 조용히 일하며 머릿속으로 빛을 타고 달리는 상상을 하던 괴짜 과학자였습니다. 기존 물리학계의 단단한 권위에 타협하지 않고, 오직 사고 실험(Thought Experiment)만으로 시간과 공간이 늘어난다는 놀라운 이론을 도출했습니다. 현생의 당신이 복잡하게 꼬인 문제를 마주했을 때 뻔한 해답 대신 완전히 다른 본질적인 질문을 툭 던지고, 혼자 조용히 생각에 잠겨 공상하는 것을 즐기며, 남들이 짜놓은 딱딱한 틀에 갇히는 것을 거부하는 자유로운 영혼의 본질은 여기에 있습니다.",
        en: "You worked quietly while unlocking the secrets of E=mc² in your mind. You challenged established scientific norms through pure imagination. Today, you are the core problem solver. You don't follow trends blindly; you ask 'Why?' and find the root cause, bringing fresh logic that resets the team's direction."
      },
      strengths: {
        ko: "당신이 계승한 대표적 강점: 눈에 보이지 않는 본질을 꿰뚫어 보고, 복잡한 공식을 명쾌한 원리로 단순화시키는 시각적 사고력.",
        en: "Pragmatic simplification of complex logic and visual thinking."
      },
      weaknesses: {
        ko: "위인이 남긴 귀여운 역사적 인간미: 양말을 신는 것이 불필요하게 미끄러운 낭비라며 평생 양말을 신지 않고 맨발로 구두를 신으시던 남다른 생활 밀착형 고집과 건망증.",
        en: "Refusing to wear socks because they developed holes anyway, and misplacing your home keys."
      },
      prescription: {
        ko: "위인이 보내는 역사적 처방전: 당신의 머릿속 우주를 타인에게 좀 더 따뜻하고 친절하게 공유해 보세요. 가치 있는 상상력은 쉬운 소통의 다리를 건널 때 더 위대한 기적으로 증명됩니다.",
        en: "Translate your cosmic thoughts into warm, simple steps so your team can walk with you."
      }
    },
    "caesar": {
      animalName: { ko: "율리우스 카이사르", en: "Julius Caesar" },
      typeTitle: {
        ko: "루비콘강을 건너 주사위를 던진 승부사 '카이사르'",
        en: "The Bold Decider and Emperor: Julius Caesar"
      },
      image: "images/hero-caesar.png",
      coreTraits: { ko: "과감한 결단 • 주사위는 던져졌다 • 위기 정면돌파", en: "Risk Taking • The Die is Cast • Adaptability" },
      summary: {
        ko: "\"주사위는 던져졌다\"며 인생의 중요한 갈림길마다 과감하게 결단을 내리고, 대담한 승부사 기질로 돌파구를 빚어내던 당신은 로마의 지배자 카이사르였습니다.",
        en: "A strategic general who crossed the Rubicon River and declared 'Veni, Vidi, Vici'. You were Julius Caesar."
      },
      dailyScene: {
        ko: "전생의 당신은 갈리아 대륙을 평정하고 로마 공화정의 판도를 완전히 제정으로 바꾼 대담한 리더였습니다. 해적에게 납치당했을 때도 오히려 몸값을 더 올리라고 고함을 지르고 훗날 그들을 모두 소탕하겠다고 협박하던(?) 배포의 소유자였습니다. 현생의 당신이 우물쭈물하는 결정 장애 없이 시원시원하게 모임을 추진하고, 위태로운 투자나 도전 상황에서도 '어떻게든 되겠지, 가보자!' 하며 주사위를 던질 수 있는 배짱은 카이사르가 지녔던 전설적인 강심장과 임기응변 덕분입니다.",
        en: "You made historical plays by crossing the Rubicon, relying on raw speed and battlefield charm to defeat rivals. You feared no variable. Today, you are the project launcher who cuts through endless meetings and says, 'Let's just execute and test!' You thrive on momentum and quick comebacks."
      },
      strengths: {
        ko: "당신이 계승한 대표적 강점: 흐릿한 회색지대 속에서 빠르게 핵심 가치를 짚어내고 과감하게 행동으로 선언해버리는 직관력.",
        en: "Uncompromising decision speed and keeping teams motivated during transitions."
      },
      weaknesses: {
        ko: "위인이 남긴 귀여운 역사적 인간미: 대머리 콤플렉스가 너무 심해, 월계관을 쓰면 머리숱을 가릴 수 있다는 이유로 평생 월계관을 쓰고 다니길 애원하시던 가슴 절절한 대머리 방어 노력.",
        en: "Obsessively wearing your gold laurel wreath everywhere just to cover a receding hairline."
      },
      prescription: {
        ko: "위인이 보내는 역사적 처방전: '브루투스, 너마저!'의 비극을 피하려면, 너무 본인의 결단과 기개만 믿고 질주하지 마세요. 등 뒤에서 묵묵히 따르는 조력자들의 서운함과 피로감을 챙기는 다정함을 한 스푼 더해보세요.",
        en: "Listen to the quiet voices around you. A long-term victory needs secure trust behind your back."
      }
    },
    "joanofarc": {
      animalName: { ko: "잔 다르크", en: "Joan of Arc" },
      typeTitle: {
        ko: "순수한 신념과 의리로 프랑스를 구한 불꽃 '잔 다르크'",
        en: "The Maid of Orleans with Pure Faith: Joan of Arc"
      },
      image: "images/hero-joanofarc.png",
      coreTraits: { ko: "순수한 투지 • 신념 사수 • 백절불굴 의리", en: "Pure Faith • Defending Cause • Courageous Heart" },
      summary: {
        ko: "스스로가 옳다고 믿는 신념과 의리에 인생을 걸고, 불꽃같은 투지로 불가능해 보이는 전선에 앞장서 깃발을 흔들던 당신은 잔 다르크였습니다.",
        en: "A young visionary who rallied a nation under a single flag of purity and courage. You were Joan of Arc."
      },
      dailyScene: {
        ko: "전생의 당신은 백년전쟁의 소용돌이 속에서 오를레앙성을 해방시킨 프랑스의 구국 영웅이었습니다. 군사 훈련을 받지 않은 순수한 몸이었지만, 오직 나라를 구하겠다는 정의감과 꺾이지 않는 투지만으로 갑옷을 입고 맨 앞에서 돌격해 기적적인 승리를 만들어 냈습니다. 이 뜨거운 불꽃은 현대에도 이어져, 내가 소중히 여기는 내 동료나 가치관이 모욕당하면 참지 못하고 총대를 메며, 순수하면서도 묵직한 돌파력으로 주변 사람들에게 뜨거운 동기부여를 심어줍니다.",
        en: "Armed with pure belief, you rode into active siege lines, lifting the spirits of tired soldiers. You led from the absolute front. Today, you are the passionate defender. You protect your team's values, volunteer to resolve sticky bottlenecks, and inspire everyone through your raw, sincere commitment."
      },
      strengths: {
        ko: "당신이 계승한 대표적 강점: 가식과 꼼수 없이 순수하게 가슴을 울리는 진정성으로 사람들을 감화시켜 움직이는 영도력.",
        en: "Empathetic authenticity that unites people under a shared, noble goal."
      },
      weaknesses: {
        ko: "위인이 남긴 귀여운 역사적 인간미: 평소 성격이 불같고 잔소리가 엄청나서, 거친 병사들이 캠프에서 카드놀이를 하거나 욕설을 하면 빗자루를 들고 쫓아가서 참 교육(?)을 시키던 불꽃 같은 잔소리.",
        en: "Chasing rough soldiers around the military camp with a broom because they swore."
      },
      prescription: {
        ko: "위인이 보내는 역사적 처방전: 당신의 맑고 의리 있는 마음은 세상의 큰 자산이지만, 스스로를 태우는 불꽃이 되지 않도록 주의하세요. 때로는 내 전선이 아닌 일에는 한 발짝 물러서서 평온한 방관자의 미소를 지어보는 연습도 필요합니다.",
        en: "Protect your inner light from burnout. You don't have to carry every flag yourself."
      }
    },
    "mariecurie": {
      animalName: { ko: "마리 퀴리", en: "Marie Curie" },
      typeTitle: {
        ko: "라듐을 향한 집념으로 인류를 바꾼 과학자 '마리 퀴리'",
        en: "The Pioneer of Radioactivity: Marie Curie"
      },
      image: "images/hero-mariecurie.png",
      coreTraits: { ko: "라듐의 집념 • 한 우물 연구 • 묵묵한 실력파", en: "Unwavering Focus • Deep Research • Scientific Grit" },
      summary: {
        ko: "남들이 유행을 좇아 흔들릴 때, 차갑고 어두운 실험실에서 묵묵하게 피치블렌드를 휘저으며 라듐과 폴로늄을 찾아내던 한 우물 파기의 대가 당신은 마리 퀴리였습니다.",
        en: "With legendary patience, you boiled tons of pitchblend to extract a decigram of pure radium. You were Marie Curie."
      },
      dailyScene: {
        ko: "전생의 당신은 여성 최초 노벨상 수상이자 노벨상 2회 수상이라는 전무후무한 기록을 남긴 위대한 실험 물리학자였습니다. 열악한 헛간 실험실의 매캐한 연기 속에서도 오직 과학적 진실만을 향해 4년간 묵묵히 땀 흘렸습니다. 현생의 당신이 복잡하고 화려한 마케팅 문구보다는 진짜 '내 손으로 완성한 알맹이(실력)'를 신뢰하고, 한 가지 관심사가 생기면 주변의 소음을 차단한 채 깊이 파고들어 끝장을 보는 장인 정신을 발휘하는 바탕은 바로 이 라듐의 집념입니다.",
        en: "You spent cold winters in a leaky shed, purifying mineral residues to capture a glow-in-the-dark element. You prioritized substance over noise. Today, you are the reliable specialist. You enjoy diving deep into technical tasks, organizing accurate data grids, and building quality results through quiet, consistent efforts."
      },
      strengths: {
        ko: "당신이 계승한 대표적 강점: 아무도 알아주지 않는 기나긴 실무 터널 속에서도 평정심을 유지하며 정밀한 결과물을 빚어내는 장인형 지구력.",
        en: "Unshakeable stamina to execute dry details and refine quality metrics."
      },
      weaknesses: {
        ko: "위인이 남긴 귀여운 역사적 인간미: 스스로 발견한 라듐의 아름다운 푸른 빛에 반해, 라듐 앰플을 보석처럼 평생 주머니나 침대 옆에 두고 자장가 불빛 삼아 흐뭇하게 바라보시던 무서운 라듐 덕후(라듐 바라기) 면모.",
        en: "Carrying highly radioactive tubes in your lab coat pockets because you loved their blue light."
      },
      prescription: {
        ko: "위인이 보내는 역사적 처방전: 헛간 문을 열고 가끔은 봄바람을 쐬러 나가보세요. 당신의 집념과 연구물은 이미 위대합니다. 주변 사람들과 성과를 공유하며 가볍게 차를 마시는 캐주얼한 수다를 즐겨보세요.",
        en: "Take a break from your research shed. Share your milestones and enjoy a casual conversation."
      }
    },
    "sejong": {
      animalName: { ko: "세종대왕", en: "King Sejong" },
      typeTitle: {
        ko: "글자로 백성을 구원한 헌신적 학자 '세종대왕'",
        en: "The Benevolent Scholar King: Sejong the Great"
      },
      image: "images/hero-sejong.png",
      coreTraits: { ko: "애민과 헌신 • 학구적 지식정리 • 다정한 리더", en: "Empathy & Love • Intellectual Cataloging • Warm Leader" },
      summary: {
        ko: "지극한 다정함으로 주변 사람들의 불편을 보살피고, 공부하고 정리한 결과물로 세상의 편리한 규격(훈민정음)을 널리 이롭게 배급하던 당신은 세종대왕이었습니다.",
        en: "A warm-hearted king who created a unique alphabet to empower his people. You were King Sejong."
      },
      dailyScene: {
        ko: "전생의 당신은 집현전 학자들과 밤새 머리를 맞대고 천문, 인쇄, 농업 기술을 발전시키며 조선 왕조 역사상 가장 눈부신 태평성대를 이룩한 군주였습니다. 눈이 멀어가는 순간에도 백성들이 쉽게 글을 읽을 수 있도록 한글을 창제한 위대한 교사이기도 했습니다. 이러한 다정한 성향은 현생에서도 이어져, 주변 동료가 뒤처지면 끝까지 붙잡아 친절하게 설명해 주고, 프로젝트의 혼란스러운 개념들을 깔끔하게 정리해 문서(매뉴얼)화하여 공유하는 '다정한 지식 배급가'의 역할을 뽐내게 만듭니다.",
        en: "You designed astronomical tools and letters of script to give voices to the voiceless, working late despite failing health. You valued public welfare. In your present life, you are the caring guide. You write clear documentations, help struggling newcomers patiently, and organize chaotic datasets into neat, accessible structures."
      },
      strengths: {
        ko: "당신이 계승한 대표적 강점: 산발적인 정보들을 일목요연하게 정리하여 타인에게 가장 쉬운 언어로 제공하는 최고의 정리 및 교육 능력.",
        en: "Converting complex knowledge into easy, step-by-step documentation."
      },
      weaknesses: {
        ko: "위인이 남긴 귀여운 역사적 인간미: 고기 없이는 절대 수저를 들지 않으시며 운동(사냥)을 지독히 싫어하시던 극단적인 육식 러버(고기 마니아)이자 학구적 집콕 성향.",
        en: "Refusing to touch any meal that lacked beef, and actively avoiding physical workouts."
      },
      prescription: {
        ko: "위인이 보내는 역사적 처방전: 주변 사람들을 챙기고 지식을 정리하는 헌신은 숭고하지만, 당신의 에너지 잔량도 챙기셔야 합니다. 가끔은 '고기 반찬'을 든든하게 먹고, 모든 잔소리와 서류(문서)를 덮은 뒤 온전한 당신만의 낮잠 시간을 만끽하세요.",
        en: "Close your books and instruction sheets. Prioritize your own comfort and health first."
      }
    },
    "lincoln": {
      animalName: { ko: "에이브러햄 링컨", en: "Abraham Lincoln" },
      typeTitle: {
        ko: "유머와 경청으로 연방을 통합한 정치가 '링컨'",
        en: "The Great Emancipator and Wit Master: Abraham Lincoln"
      },
      image: "images/hero-lincoln.png",
      coreTraits: { ko: "포용성과 경청 • 위트 넘치는 조율 • 소통형 리더", en: "Empathy • Humorous Mediation • Diplomatic Wit" },
      summary: {
        ko: "날카로운 갈등 한복판에서도 따뜻한 소통과 유쾌한 농담으로 적대적인 상대마저 내 편으로 만드는 최고의 갈등 중재자인 당신은 에이브러햄 링컨이었습니다.",
        en: "A tall visionary who balanced a broken union through empathy, historical speeches, and sharp humor. You were Lincoln."
      },
      dailyScene: {
        ko: "전생의 당신은 남북전쟁의 참화 속에서 국가를 하나로 지켜내고 노예 해방을 이룩한 미국의 제16대 대통령이었습니다. 본인을 비난하던 정적을 국방장관에 임명하는 등 포용적인 리더십의 극치를 보여주었으며, 날선 회의실 분위기를 깨는 훌륭한 이야기꾼이자 위트 넘치는 변호사였습니다. 이러한 성향은 현생의 당신에게 고스란히 반영되어, 팀 내에서 의견 대립이 격화될 때 특유의 유머러스한 농담으로 긴장감을 해소하고, 모두가 만족할 만한 상생의 해결책을 빚어내는 소통 지휘관으로 활약하게 만듭니다.",
        en: "You held a dividing nation together with deep speeches and warm jokes, recruiting political rivals into your cabinet. You used humor to melt cold tension. Today, you are the emotional pillar of your team. You listen to complaints patiently, make colleagues laugh with sharp dry humor, and find peaceful routes where others see walls."
      },
      strengths: {
        ko: "당신이 계승한 대표적 강점: 상대의 불만 섞인 주장을 끝까지 경청한 뒤, 논리적인 위트로 정교하게 판세를 전환하는 조율력.",
        en: "Active listening and dissolving intense office pressure with brilliant timing of humor."
      },
      weaknesses: {
        ko: "위인이 남긴 귀여운 역사적 인간미: 키가 193cm로 너무 컸는데 거기다 20cm가 넘는 굴뚝 모자(탑 햇)를 고집하여, 모자 속에 편지나 중요 서류를 쑤셔놓고 다니다가 모자가 벗겨져 바람에 날아가 곤혹을 치르시던 털털함.",
        en: "Storing important envelopes inside your giant top hat, only to chase them down the street when the wind blew."
      },
      prescription: {
        ko: "위인이 보내는 역사적 처방전: 남들의 갈등을 조율하고 짐을 짊어지는 중재자의 어깨는 무겁기 마련입니다. 때로는 '링컨의 모자' 속에 모든 고민 서류들을 털어버리고, 아늑한 벽난로 흔들의자에 앉아 당신만을 위한 낭만 소설 한 권을 읽으며 자유를 즐겨보세요.",
        en: "Sit in a rocking chair by the fireplace. Empty your mind of everyone else's complaints."
      }
    }
  }
};
