/**
 * @file parenting-style.js
 * @description 육아 동물 성향 테스트(10문항)에 대한 한국어/영어 다국어 콘텐츠 데이터셋입니다.
 */

window.activeTestData = {
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
  labels: {
    summary: { ko: "성향 요약", en: "Traits Summary" },
    daily: { ko: "일상 속 내 모습 (현실 고증)", en: "My Daily Life Scene" },
    strengths: { ko: "부모로서의 멋진 장점", en: "My Greatest Strengths" },
    weaknesses: { ko: "살짝 매콤한 현실 피드백", en: "Real Advice for You" },
    prescription: { ko: "맞춤형 현실 육아 처방전", en: "Parenting Prescription" }
  },
  questions: [
    {
      id: 1,
      scenario: {
        ko: "아이 방이 발 디딜 틈 없는 난장판인데 치우라고 해도 귓등으로도 안 들을 때 내 반응은?",
        en: "The kids room is a complete mess. The kid ignores your cleanup order. Your reaction?"
      },
      options: [
        {
          text: {
            ko: "\"엄마가 셋 센다. 하나, 둘...! 지금 안 치우면 싹 다 쓰레기통에 버린다!\" 경고한다.",
            en: "\"I will count to three. One, two...! I will throw everything away in the trash!\""
          },
          scores: { tiger: 2, owl: 1 }
        },
        {
          text: {
            ko: "\"우리 OO이 치우기 힘들지? 엄마가 도와줄게!\" 하고 결국 내가 다 치워준다.",
            en: "\"It's hard to clean up, right? Let me help you!\" and you end up cleaning 80%."
          },
          scores: { kangaroo: 2, dolphin: 1 }
        },
        {
          text: {
            ko: "\"안 치우면 내일부터 장난감은 금지야.\" 단호히 규칙을 알려주고 스스로 치우게 둔다.",
            en: "\"No toys starting tomorrow if you don't clean.\" Remind them of rules and wait."
          },
          scores: { eagle: 2, owl: 1 }
        }
      ]
    },
    {
      id: 2,
      scenario: {
        ko: "조용한 식당에서 아이가 지루하다고 소리 지르며 스마트폰을 달라고 떼쓸 때 내 반응은?",
        en: "In a quiet restaurant, the child screams out of boredom and demands a smartphone. Your reaction?"
      },
      options: [
        {
          text: {
            ko: "\"여기 조용히 하는 곳이야! 씁!\" 단호하게 눈빛으로 제압하고 폰은 주지 않는다.",
            en: "\"This is a quiet place! Shh!\" Stare firmly and do not hand over the phone."
          },
          scores: { tiger: 2, owl: 1 }
        },
        {
          text: {
            ko: "\"조용히 해야지~ 여기 폰 줄 테니까 얌전히 있어!\" 얼른 폰을 쥐여주고 진정시킨다.",
            en: "\"Please be quiet~ Here is the phone. Watch YouTube quietly!\" Give it quickly."
          },
          scores: { kangaroo: 2, dolphin: 2 }
        },
        {
          text: {
            ko: "\"시끄럽게 굴면 바로 집에 간다.\" 경고하고 조용해질 때까지 밖으로 데리고 나간다.",
            en: "\"We'll go home right now if you scream.\" Warn them and take them outside."
          },
          scores: { eagle: 2, tiger: 1 }
        }
      ]
    },
    {
      id: 3,
      scenario: {
        ko: "마트 장난감 코너에서 원하는 걸 안 사준다고 바닥에 드러누워 소리 지를 때 내 반응은?",
        en: "At the supermarket toy corner, the child lies on the floor and screams for a toy. Your reaction?"
      },
      options: [
        {
          text: {
            ko: "\"창피하게 뭐 하는 짓이야! 당장 일어나!\" 억지로 일으켜 세워 끌고 나간다.",
            en: "\"How embarrassing! Get up right now!\" Drag them up by force and walk out."
          },
          scores: { tiger: 2, eagle: 1 }
        },
        {
          text: {
            ko: "\"OO아 얼른 일어나~ 이거 말고 대신 다른 과자 맛있는 거 사줄게, 응?\" 달래며 타협한다.",
            en: "\"Sweetie, get up~ I'll buy you some delicious snacks instead, okay?\" Negotiate."
          },
          scores: { kangaroo: 2, dolphin: 1 }
        },
        {
          text: {
            ko: "\"계속 누워있어 봐, 사주나. 엄마 먼저 간다.\" 툭 한마디 뱉고 저 멀리 걸어가 버린다.",
            en: "\"Lie there all day, I won't buy it anyway. I'm leaving.\" Walk away."
          },
          scores: { eagle: 2, owl: 1 }
        }
      ]
    },
    {
      id: 4,
      scenario: {
        ko: "아침에 눈도 제대로 못 뜨고 \"나 오늘 학교(유치원) 가기 싫어...\" 하며 징징댈 때 내 반응은?",
        en: "In the morning, the child barely opens their eyes and whines, \"I don't want to go to school...\" Your reaction?"
      },
      options: [
        {
          text: {
            ko: "\"늦었어! 당장 옷 입어! 꾀병 부리는 거 다 알아!\" 팩폭을 날리며 등원시킨다.",
            en: "\"You are late! Put on clothes! I know you are faking it.\" Push them out."
          },
          scores: { tiger: 2, owl: 1 }
        },
        {
          text: {
            ko: "\"우리 강아지 어디 아파? 열 나나 보자. 오늘 하루 쉴까?\" 노심초사 상태가 된다.",
            en: "\"Oh dear, where does it hurt? Let me check your temperature. Want to stay home?\""
          },
          scores: { kangaroo: 2, dolphin: 1 }
        },
        {
          text: {
            ko: "\"왜 가기 싫은지 얘기해 볼까? 유치원에서 속상한 일 있었어?\" 눈높이 맞춰 공감한다.",
            en: "\"Tell me why you don't want to go. Did something happen?\" Empathize at eye level."
          },
          scores: { dolphin: 2, eagle: 1 }
        }
      ]
    },
    {
      id: 5,
      scenario: {
        ko: "아이가 받아쓰기 시험에서 생각지도 못한 50점을 받아왔을 때 내 반응은?",
        en: "The child brings home a 50-point spelling test paper with a embarrassed look. Your reaction?"
      },
      options: [
        {
          text: {
            ko: "\"수업 시간에 딴짓했어? 오늘 틀린 거 오답 노트에 10번씩 쓰고 자!\" 오답을 정조준한다.",
            en: "\"Were you daydreaming? Write down incorrect answers 10 times tonight!\""
          },
          scores: { tiger: 2, owl: 1 }
        },
        {
          text: {
            ko: "\"아이구 괜찮아! 속상했겠네. 오늘 맛있는 거 먹자!\" 기죽을까 봐 폭풍 위로한다.",
            en: "\"It's okay! You must have felt bad. Let's get something delicious!\" Cheer them up."
          },
          scores: { dolphin: 2, kangaroo: 1 }
        },
        {
          text: {
            ko: "\"틀린 걸 분석해 보자. 개념을 모르는 건지 단순 실수인지 팩트 체크하자.\" 이성적으로 확인한다.",
            en: "\"Let's analyze. Is it lack of understanding or a simple mistake?\" Fact-check."
          },
          scores: { owl: 2, eagle: 1 }
        }
      ]
    },
    {
      id: 6,
      scenario: {
        ko: "놀이터에서 노는데 우리 아이가 딴 애한테 밀침을 당해 울며 뛰어올 때 내 반응은?",
        en: "In the playground, your child gets pushed by another kid and runs crying to you. Your reaction?"
      },
      options: [
        {
          text: {
            ko: "\"어떤 애가 그랬어?! 너는 바보같이 왜 맞고만 있어!\" 화가 치밀어 당장 개입한다.",
            en: "\"Who did that?! Why didn't you stand up for yourself!\" Get angry and intervene."
          },
          scores: { tiger: 2, kangaroo: 1 }
        },
        {
          text: {
            ko: "가슴이 미어지며 \"아이고 내 새끼 아팠지? 다친 덴 없어?\" 안고 둥둥대며 달랜다.",
            en: "Heartbroken, you hug them tight, saying \"Oh sweetie, did it hurt? Are you okay?\""
          },
          scores: { kangaroo: 2, dolphin: 1 }
        },
        {
          text: {
            ko: "\"속상했겠네. 가서 밀치지 말라고 단호하게 얘기하고 와.\" 스스로 맞서도록 응원한다.",
            en: "\"Must have been sad. Go back and tell them firmly 'Don't push me!'\" Encourage independence."
          },
          scores: { eagle: 2, owl: 1 }
        }
      ]
    },
    {
      id: 7,
      scenario: {
        ko: "식탁에서 엉덩이를 떼고 돌아다니며 \"시금치 싫어! 고기만 줘!\" 하고 편식할 때 내 반응은?",
        en: "Running around the dining table and whining, \"I hate spinach! Give me meat!\" Your reaction?"
      },
      options: [
        {
          text: {
            ko: "\"안 먹을 거면 먹지 마!\" 즉시 숟가락 뺏고 밥상을 치워버려 굶는 쓴맛을 보게 한다.",
            en: "\"Don't eat then!\" Take away the spoon and clear the table. Let them starve."
          },
          scores: { tiger: 2, eagle: 1 }
        },
        {
          text: {
            ko: "숟가락 들고 따라다니며 \"한 입만 먹자, 응? 요거 먹으면 젤리 사줄게!\" 달래며 떠먹인다.",
            en: "Chase them with a spoon: \"Just one bite, okay? I will buy you jellies!\""
          },
          scores: { kangaroo: 2, dolphin: 1 }
        },
        {
          text: {
            ko: "\"골고루 먹어야 키가 크는 거야. 안 먹으면 성장판에 안 좋아.\" 영양학적 조언을 한다.",
            en: "\"Eating balanced food makes you taller. It is bad for development.\" Rationalize."
          },
          scores: { owl: 2, tiger: 1 }
        }
      ]
    },
    {
      id: 8,
      scenario: {
        ko: "꿀맛 같은 주말 아침 일찍 깨워서 \"엄마 아빠, 일어나서 나랑 놀자!\" 하고 흔들 때 내 반응은?",
        en: "Waking you up at 6:30 AM on a weekend, shaking you, \"Wake up and play with me!\" Your reaction?"
      },
      options: [
        {
          text: {
            ko: "\"엄마 피곤해 죽겠어. 저기 가서 TV 좀 보고 있어.\" 리모컨 쥐여주고 다시 눈 감는다.",
            en: "\"I am so exhausted. Go watch TV.\" Hand over the remote and sleep again."
          },
          scores: { eagle: 2, tiger: 1 }
        },
        {
          text: {
            ko: "눈도 못 뜨고 \"아구 일어났어? 무슨 놀이할까? 로봇 변신할까?\" 몸부림치며 놀아준다.",
            en: "Struggle to open eyes: \"Oh you're awake? Let's play with robots!\" Play along."
          },
          scores: { dolphin: 2, kangaroo: 1 }
        },
        {
          text: {
            ko: "\"지금 7시야. 시곗바늘이 8로 갈 때까지는 혼자 책 보거나 노는 시간이야.\" 규칙을 정한다.",
            en: "\"It is 7 AM. Read books alone until the clock points to 8. That is the rule.\""
          },
          scores: { owl: 2, eagle: 1 }
        }
      ]
    },
    {
      id: 9,
      scenario: {
        ko: "약속한 유튜브 시청 30분이 끝났는데 \"제발 딱 한 개만 더 보면 안 돼?\" 빌 때 내 반응은?",
        en: "The promised 30-min tablet time ends, but the kid begs, \"Please, just one more video?\" Your reaction?"
      },
      options: [
        {
          text: {
            ko: "\"약속 끝났어!\" 기계처럼 단호하게 패드를 뺏어서 깊숙한 곳에 보이지 않게 숨긴다.",
            en: "\"Time is up!\" Firmly take away the tablet and hide it in a high cabinet."
          },
          scores: { tiger: 2, owl: 1 }
        },
        {
          text: {
            ko: "\"어머 재밌는 부분이네? 그럼 진짜 약속이야. 요것만 더 보고 딱 끄자!\" 한 번 눈감아준다.",
            en: "\"Oh, that looks interesting. Okay, just this one last video!\" Give in once."
          },
          scores: { dolphin: 2, kangaroo: 1 }
        },
        {
          text: {
            ko: "\"약속 어기면 내일은 미디어 사용 금지야. 스스로 끌래?\" 패널티를 고지하고 선택하게 한다.",
            en: "\"If you break the promise, no media tomorrow. Turn it off yourself?\" Warn penalty."
          },
          scores: { owl: 2, eagle: 1 }
        }
      ]
    },
    {
      id: 10,
      scenario: {
        ko: "방학 숙제를 계속 미루다가 개학 전날 밤 \"대신 숙제 써주면 안 돼?\" 하며 울 때 내 반응은?",
        en: "Procrastinated homework until the night before school starts. The kid cries, \"Can you do it for me?\" Your reaction?"
      },
      options: [
        {
          text: {
            ko: "\"그러게 미리 하랬잖아! 오늘 밤새서라도 다 해놓고 자!\" 옆에 감시하고 서 있는다.",
            en: "\"I told you to do it! Stay up all night and finish it yourself!\" Supervise strictly."
          },
          scores: { tiger: 2, owl: 1 }
        },
        {
          text: {
            ko: "\"아유 불쌍해라. 엄마가 그림 그릴 테니 넌 일기 써. 얼른 끝내자.\" 결국 대리 숙제를 돕는다.",
            en: "\"Oh poor baby. I will draw, you write the diary. Let's finish quick!\" Help write."
          },
          scores: { kangaroo: 2, dolphin: 1 }
        },
        {
          text: {
            ko: "\"숙제 안 해가서 혼나는 것도 네 몫이야. 감당해.\" 냉정하게 선 긋고 잠을 자러 간다.",
            en: "\"Getting scolded by your teacher is your responsibility. Deal with it.\" Go to bed."
          },
          scores: { eagle: 2, owl: 1 }
        }
      ]
    }
  ],
  results: {
    tiger: {
      animalName: { ko: "호랑이", en: "Tiger" },
      typeTitle: {
        ko: "셋 셀 때 치워라! 완벽주의 카리스마, 팩트 폭격기 호랑이 부모",
        en: "Perfect Charisma: The Rule-Enforcer Tiger Parent"
      },
      image: "images/tiger.png",
      coreTraits: { ko: "확고한 훈육 체계 • 칼 같은 질서 • 팩트 기반 통제", en: "Strict Rules • High Standards • Clear Boundaries" },
      summary: {
        ko: "당신은 강인한 규율과 확실한 질서를 중시하며, 자녀를 어디서나 똑 부러지고 예의 바른 아이로 키워내기 위해 매일 고군분투하는 호랑이 지휘관 스타일입니다. 어설픈 타협이나 칭얼거리는 핑계는 당신의 통제 범위 안에서 결코 통하지 않습니다.",
        en: "You value strict discipline and clear boundaries, acting like a commander to raise an independent and well-mannered child. Whining or lazy excuses never work under your watch. You believe clear rules are the truest form of love."
      },
      dailyScene: {
        ko: "아이가 어질러 놓은 장난감을 보면 심장이 요동칩니다. 조용하고 차갑게 다가가 '엄마가 셋 센다. 하나, 둘, 셋!'을 외치는 순간 거실 공기는 순식간에 시베리아 벌판으로 얼어붙습니다. 학원 가기 싫다고 투정이라도 부릴 때면 감정에 흔들리지 않고 '너는 왜 학생의 의무를 회피하려 하니?'라며 논리적이고도 묵직한 팩폭을 직격으로 꽂아 넣습니다.",
        en: "Seeing toys all over the living room drives you crazy. The moment you declare, 'I'll count to three. One, two...' the entire room freezes. When the kid whines about school, you hit them with a cold logic fact-bomb: 'Why do you think you can skip your duty as a student?' you shut down excuses instantly."
      },
      strengths: {
        ko: "당신의 엄격한 훈육 덕분에 자녀는 유치원, 초등학교, 학원 등 공공장소나 단체 생활에서 규칙을 가장 잘 지키고 예의 바르다는 극찬을 독차지하게 됩니다. 계획적으로 시간을 배분하고 스스로 해야 할 의무를 마치는 강한 책임감과 자기 조절 능력의 뼈대를 확실히 다져주는 훌륭한 인생 멘토입니다.",
        en: "Thanks to your strict parenting, your child is often praised for being exceptionally well-behaved and polite in public. You are an excellent mentor who establishes strong self-regulation, time management, and responsibility from an early age."
      },
      weaknesses: {
        ko: "하지만 아이는 부모 앞에서는 야무지고 얌전한 모습을 보이다가도, 안 보이는 곳에서는 강한 압박감을 느낄 수 있습니다. 사소한 실수에도 엄한 불호령이 떨어지다 보니, 혼나는 상황을 피하기 위해 감쪽같이 잔머리를 굴리거나 거짓말을 하는 역효과가 나기도 합니다. '우리 엄마 아빠는 너무 무서워. 내 마음은 하나도 공감 안 해줘'라며 마음의 빗장을 걸어 잠급니다.",
        en: "However, your child may feel intense pressure and act perfectly only when you are watching. Fear of harsh scolding might drive them to lie or make up excuses to avoid trouble. They might think, 'Mom and Dad are scary and never understand my feelings,' locking their hearts away."
      },
      prescription: {
        ko: "이제는 카리스마 지휘봉을 아주 잠시만 내려두시고, 하루에 한 번만이라도 '셋 세기' 대신 깊은 호흡을 세 번 내쉬어 보세요. 아이의 서툰 손길과 더딘 속도를 묵묵히 지켜봐 주며 기다려주는 인내가 필요합니다. 결과 중심의 칭찬보다는 아이가 서투르게 노력한 그 자체에 대해 '애썼다'고 따뜻하게 등 두드려주세요.",
        en: "Put down the commander's baton for a moment. Try taking three deep breaths instead of counting to three. Practice waiting patiently for your child's slow, clumsy progress. Praise their effort and hard work rather than focusing solely on the final outcome."
      }
    },
    kangaroo: {
      animalName: { ko: "캥거루", en: "Kangaroo" },
      typeTitle: {
        ko: "내 품 안의 자식! 안절부절 과잉보호, 무한 헌신 캥거루 부모",
        en: "Protective Warmth: The Helicopter Kangaroo Parent"
      },
      image: "images/kangaroo.png",
      coreTraits: { ko: "지나친 걱정 • 자녀 중심 헌신 • 무한 서포트", en: "Devotion • Endless Worry • Overprotection" },
      summary: {
        ko: "당신은 아이의 행복과 정서적 안정이 인생의 최우선 순위인 아주 따뜻하고 헌신적인 부모입니다. 자녀가 행여나 다치지 않을까, 밖에서 기죽고 미움받지는 않을까 걱정 인형을 늘 품에 안고 사는 헬리콥터 스타일의 전형입니다. 아이가 힘들어하거나 우는 모습을 눈 뜨고 단 10초도 보지 못하기 때문에, 힘든 일이나 갈등 상황이 생기면 내가 먼저 총대 메고 나서서 해결해 줘야만 직성이 풀립니다.",
        en: "Your child's happiness is your top priority. You are a devoted parent who worries 24/7 about your child getting hurt or feeling left out. You can't stand seeing your child struggle or cry for even 10 seconds, so you immediately jump in to solve every single problem for them."
      },
      dailyScene: {
        ko: "아이가 또래 친구와 아주 사소하게 장난감을 가지고 다투고 돌아온 날이면, 온 세상이 무너진 것처럼 밤새 가슴이 갈가리 찢어집니다. 머릿속으로 선생님과 통화하는 상상부터 시작해 상대 부모에게 보낼 장문의 카카오톡 메시지를 밤새 썼다 지우는 감정 소모를 겪습니다. 아이가 신발을 거꾸로 신고 장난감을 정리하는 게 느려 터져 보이면 결국 내가 다 치웁니다.",
        en: "If your child gets into a minor playground spat, your heart breaks and you stay up all night writing and deleting long messages to the teacher or the other parent. When toy cleanup seems too slow or difficult for your child, you say 'Oh sweetie, let me do it,' and sweep it up yourself."
      },
      strengths: {
        ko: "세상 누구와도 비교할 수 없는 무한한 사랑과 깊은 지지로 자녀에게 가장 안전하고 따뜻한 우주를 선사합니다. 부모의 빈틈없는 정서적 돌봄과 사랑을 잔뜩 받고 자란 덕에 자녀는 정서적 결핍 없이 아주 해맑고 순수한 심성을 지니게 됩니다. '언제든 부모님이 내 편에서 나를 지켜준다'는 확신이 있어 든든한 정서적 안정감을 가집니다.",
        en: "With your boundless love and support, you create a incredibly warm and secure universe for your child. Raised with absolute care, your child grows up emotionally secure and bright. They hold a firm belief that 'My parents are always on my side,' building a strong emotional base."
      },
      weaknesses: {
        ko: "그러나 아이의 손과 발, 머리를 부모가 완벽하게 대신해 주다 보니, 정작 아이 스스로 상황을 판단하고 선택하고 실패를 헤쳐 나갈 독립적인 근육이 자랄 틈이 없습니다. 조금만 어려운 과제가 닥쳐도 스스로 부딪치기보다는 대번에 자포자기하며 '엄마, 이거 대신 다 해줘!'라고 의존해버리는 유아적 무기력증에 빠지기 쉽습니다.",
        en: "However, by doing everything for your child, you rob them of the chance to build independent problem-solving muscles. At the first sign of difficulty, they might easily give up and whimper, 'Mom, do this for me!' becoming overly dependent and helpless."
      },
      prescription: {
        ko: "아이를 정말 사랑한다면, 이제는 한 걸음 뒤로 물러서서 당신의 손을 주머니 속에 꾹 집어넣는 혹독한(?) 참을성을 발휘해야 합니다. 물을 다 흘리며 컵에 붓든, 양말을 뒤집어 신든 간에 스스로 겪어보고 책임져보는 '아주 작은 실패와 경험'을 선물해야 합니다. 애타는 걱정의 잔소리는 잠시 삼키고 믿음의 침묵을 선물하세요.",
        en: "If you truly love your child, take a step back and pocket your hands. Let them spill water while pouring it, let them wear socks backward, and let them experience minor failures. Swap anxious lecturing with a silent, trustful watch."
      }
    },
    dolphin: {
      animalName: { ko: "돌고래", en: "Dolphin" },
      typeTitle: {
        ko: "영혼 가득 리액션! 친구 같은 무한 공감, 소통 천재 돌고래 부모",
        en: "Infinite Empathy: The High-Reaction Friend-Like Dolphin Parent"
      },
      image: "images/dolphin.png",
      coreTraits: { ko: "눈높이 대화 • 리액션 끝판왕 • 최고의 놀이 메이트", en: "Friendship • Warm Empathy • High Feedback" },
      summary: {
        ko: "당신은 딱딱한 권위와 부모로서의 훈육 격식을 시원하게 던져버리고, 아이와 온몸으로 구르며 소통하는 세상에서 가장 활기차고 다정한 프렌디(Friendy) 부모입니다. 아이가 매일 가져오는 소소하고 엉뚱한 장난감 이야기에도 영혼을 듬뿍 담은 하이톤 리액션을 선사하며, 아이와 장난치고 대화하는 시간 자체를 인생 최고의 행복으로 여깁니다.",
        en: "You throw away stiff authority and connect with your child at their eye level, acting like their best friend. You give high-energy, enthusiastic reactions to even their silliest stories, and playing together is your favorite pastime."
      },
      dailyScene: {
        ko: "퇴근 후나 주말이면 이불 위에서 몸싸움을 벌이거나 아이가 좋아하는 유튜브 캐릭터 성대모사를 똑같이 흉내 내며 놉니다. 아이가 학교나 유치원에서 있었던 별 시시콜콜한 사건을 얘기하면 '어머 진짜?! 대박이다! 속상했겠다!'라며 감정 리액션을 실시간으로 뿜어냅니다. 하지만 아이가 울면 나도 같이 울컥할 만큼 과몰입 상태가 됩니다.",
        en: "On weekends, you wrestle on the bed or mimic characters from your child's favorite YouTube channels. If they say 'Lunch was yummy today!' you jump in excitement, 'Oh really?! Wow, I'm jealous!' But if they look slightly sad, you immediately over-identify and feel like crying with them."
      },
      strengths: {
        ko: "풍부한 감정 소통과 따뜻한 피드백 덕에 자녀는 자신의 감정 상태나 의사를 타인에게 숨김없이 표현하는 정서적 솔직함과 뛰어난 자기 표현력을 가집니다. 부모 앞에서는 거짓 가식을 꾸밀 필요가 전혀 없기에 자존감이 매우 건강하고, 기발한 발상과 창의적인 생각들을 가감 없이 펼쳐내는 아이로 성장합니다.",
        en: "Thanks to your vibrant communication, your child is emotionally expressive, honest, and highly articulate. Knowing they don't have to pretend in front of you, their self-esteem flourishes, and they grow up as highly creative individuals."
      },
      weaknesses: {
        ko: "친구처럼 너무 편하고 오냐오냐하는 부모이다 보니, 꼭 단호하게 규율을 잡고 훈육을 진행해야 하는 상황에서 훈육의 위엄이 전혀 서지 않습니다. 아이가 속으로 '엄마 아빠는 조금만 떼쓰면 다 들어줘'라고 생각하며 단호한 약속을 우습게 보거나, 버릇없이 대드는 당황스러운 순간들이 발생할 수 있습니다.",
        en: "However, being too casual can weaken your authority during discipline. The child might think, 'Mom and Dad won't get mad anyway,' testing rules or speaking rudely as if talking to a classmate. Balancing friendship and authority is your key challenge."
      },
      prescription: {
        ko: "친구 같은 관계는 유지하되, 안 되는 행동은 절대로 타협할 수 없다는 명확한 경계선을 그어주셔야 합니다. 훈육이 필요한 엄밀한 순간에는 높은 리액션 톤을 단호하게 낮추고, 아이의 눈을 지긋이 정면으로 쳐다보며 웃음기 없는 엄격한 말투로 말해야 합니다. 사랑과 통제의 밸런스를 확실히 잡아주세요.",
        en: "Maintain the friendship, but draw clear lines for what is strictly unacceptable. When disciplining, drop the high-pitched friendly tone, look them straight in the eyes, and speak with a calm, serious voice. Clearly set boundaries between play and rules."
      }
    },
    eagle: {
      animalName: { ko: "독수리", en: "Eagle" },
      typeTitle: {
        ko: "강하게 키운다! 쿨한 방임과 자립심의 대명사, 독수리 부모",
        en: "Cool Independence: The Observer Eagle Parent"
      },
      image: "images/eagle.png",
      coreTraits: { ko: "자기 주도권 위임 • 회복탄력성 극대화 • 쿨한 방임", en: "Self-Reliance • Low Intervention • High Resilience" },
      summary: {
        ko: "당신은 '아이의 인생은 스스로 결정하고 개척하는 것'이라는 아주 확고한 주관을 지닌 자유방임주의형 독수리 부모입니다. 매일 아침 숙제를 다 했는지 간섭하거나 학원 가방을 대신 챙겨주는 사소한 밀착형 육아는 당신의 사전에는 존재하지 않습니다. 잔소리를 극도로 귀찮아하며, 아이가 풍파를 겪고 단단해지기를 지켜보고 있습니다.",
        en: "You firmly believe that 'Children must shape their own lives.' Micromanaging daily homework or packing school bags is not your style. You avoid nagging and let your child face natural consequences to build true grit."
      },
      dailyScene: {
        ko: "아이가 놀이터에서 놀다가 발이 걸려 넘어져서 으아앙 울며 나를 쳐다봐도, 허겁지겁 뛰어가지 않고 그저 쿨하게 손을 흔들며 '괜찮아! 흙 훌훌 털고 일어나서 마저 놀아라~' 하고 멀리서만 격려할 뿐입니다. 준비물을 놓고 가도 가져다주지 않고 스스로 벌을 받아 책임감을 느끼게 조치하는 쿨함의 극치입니다.",
        en: "If your child falls down on the playground and looks at you crying, you don't run over. You just wave from a distance: 'You are okay! Dust it off and keep playing.' Even if they forget school items, you let them get scolded to learn responsibility."
      },
      strengths: {
        ko: "당신의 쿨한 방임 양육법 덕분에 자녀는 동년배 아이들과 비교해 문제 해결 능력과 자립심이 대단히 강인하게 자라납니다. 부모가 사사건건 행동을 간섭하거나 규제하지 않으므로, 눈치를 보지 않고 매사 본인의 판단에 따라 자유롭고 기백 있게 움직입니다. 부모 본인의 양육 피로도 또한 낮아 스트레스를 덜 받습니다.",
        en: "Your cool, hands-off approach fosters remarkable self-reliance and grit in your child. Since you do not monitor their every move, they act boldly based on their own judgment. You also enjoy a healthy life-work balance with minimal parenting stress."
      },
      weaknesses: {
        ko: "그러나 세심한 보살핌과 정서적 교감이 가장 뜨겁게 필요한 유년기에 지나치게 방조형 태도로만 일관하면, 아이는 속으로 '부모님이 나에게 관심이 없으신가?' 하는 쓸쓸한 외로움을 키우게 됩니다. 감정이 불안정하고 힘든 시기에 속마음을 털어놓지 못하고 혼자 삭이게 되며, 정서적 유대가 끊어질 우려가 있습니다.",
        en: "However, too much distance during childhood can make the child feel neglected. They might think, 'Do my parents even care about me?' If you remain cool when they need deep emotional support, they might hide their wounds, weakening the family bond."
      },
      prescription: {
        ko: "방임과 방치는 엄연히 다릅니다. 아이의 주도적 태도를 지지해주되, 항상 '엄마 아빠는 언제나 따뜻한 눈빛으로 너를 응원하며 주시하고 있다'는 감정적 온기를 공급해 줘야 합니다. 하루에 단 10분만이라도 모든 것을 내려놓고 다정하게 오늘 하루 기분은 어땠는지 눈을 맞추며 대화를 나누어 주세요.",
        en: "Independence is not neglect. Support their autonomy but ensure they feel secure knowing you are watching over them with love. Spend at least 10 minutes a day making eye contact and asking, 'How was your day?' with warm hugs."
      }
    },
    owl: {
      animalName: { ko: "올빼미", en: "Owl" },
      typeTitle: {
        ko: "지식과 팩트로 무장! 이성적 분석, 교육 중심 올빼미 부모",
        en: "Fact-Based Intelligence: The Analytical Owl Parent"
      },
      image: "images/owl.png",
      coreTraits: { ko: "합리주의 양육 • 지적 탐구 자극 • 분석적 피드백", en: "Logical Thinking • Intellectual Curiosity • Reason-Based" },
      summary: {
        ko: "당신은 감성적인 기분에 이끌려 소리를 지르거나 다투기보다, 객관적인 논리 구조와 명확한 인과관계를 최우선으로 생각하는 스마트한 공부파 올빼미 부모입니다. 온갖 베스트셀러 육아 지침서를 꼼꼼히 연구하고 아동 발달학 이론들을 공부하여 현실 양육에 과학적이고도 이성적으로 대입하려는 열정을 가지고 있습니다.",
        en: "You are a smart, analytical parent who relies on logic and evidence rather than emotional outbursts. You read parenting books, analyze educational methods, and try to apply structured theories to raise a logically sound child."
      },
      dailyScene: {
        ko: "아이가 '하늘은 왜 파래?'라고 물으면 '예뻐서 그래'라는 답 대신 빛의 산란 현상과 대기 굴절을 친절히 교재를 펴서 설명해 줍니다. 50점짜리 받아쓰기를 가져왔을 때도 감정적으로 화내는 일 없이 문항별 원인을 차분히 분석합니다. 편식을 할 때도 영양소와 성장 인자의 역학을 들어 논리적으로 아이를 설득하려 듭니다.",
        en: "When the kid asks, 'Why is the sky blue?' you explain Rayleigh scattering of light rather than saying 'Because it's pretty.' When they bring home a 50-point test, you calmly sit down to diagnose which concepts were misunderstood. You explain vitamins to fight picky eating."
      },
      strengths: {
        ko: "합리적이고 규칙적인 훈육 구조 속에서 올곧게 자란 아이는 감정적으로 생떼를 써봤자 소용없음을 알고, 논리적으로 타협하는 대화 방식을 배웁니다. 풍부한 상식과 깊이 있는 지적 자극 덕분에 창의적이면서도 논리적인 두뇌 발달이 두드러지며, 체계적인 공부 습관을 형성하는 데 탁월한 영향을 줍니다.",
        en: "Raised under rational rules, your child learns that tantrums do not work and learns to negotiate logically. Rich intellectual stimulations boost their logical thinking, critical reasoning, and highly structured studying habits."
      },
      weaknesses: {
        ko: "모든 일을 팩트와 이성으로만 해결하려다 보니, 정작 아이가 너무 억울하고 슬퍼서 눈물을 왈칵 흘릴 때마저도 '울어서 바뀔 건 없어, 원인을 말해봐'라며 팩폭을 가해 상처를 줍니다. 감정이 메마른 분석적 대화는 아이로 하여금 마음을 닫게 하고 정서적 불통 상태를 유발할 수 있습니다.",
        en: "However, analyzing every problem can make you seem cold. When your child is crying from sadness or frustration, saying 'Crying solves nothing, tell me the cause,' breaks their heart. Dry, analytical talk can make them close their emotional doors."
      },
      prescription: {
        ko: "때로는 머리로 하는 분석 육아는 잠시 멈추시고, 이제는 뜨거운 가슴으로 아이를 꼭 안아주는 감성 육아가 절대적으로 개입해야 합니다. 아이가 넘어지거나 속상해하고 눈물 흘릴 때는 왜 그런 문제가 벌어졌는지 인과관계를 파헤치는 분석 본능을 마음속으로 꾹 억누르세요. 대신 '아이구 정말 속상했겠다', '우리 강아지 마음이 너무 슬펐겠네' 하며 눈물을 닦아주고 가만히 꼭 안아주는 폭풍 감성 리시브를 해주는 연습이 꼭 필요합니다.",
        en: "Sometimes parenting must come from the heart, not the brain. Put away the logical analyzer when your child is crying. Suppress the urge to find solutions and first say, 'Oh, you must have been so sad,' giving them a warm, silent hug."
      }
    }
  }
};
