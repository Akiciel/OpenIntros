const teams = [
  {
    key: "luna",
    short: "루나",
    name: "루나리움",
    tone: "오래된 왕가의 맹세를 잇는다. 파괴보다 민간인 보호와 전선 통제를 우선시하며, 상처가 번지기 전에 정화하고 조용히 닫아버리는 구원자들.",
    characters: [
      { name: "진서우", alias: "크림슨레드", power: "절단", code: "F_A_A", mood: "냉철한 현장 지휘관. 책임을 온전히 짊어지며, '절단'을 폭력이 아닌 상황 통제와 퇴로 확보의 이성적 수단으로 운용한다." },
      { name: "김하린", alias: "코발트블루", power: "동결", code: "F_A_B", mood: "철저한 손실 통제자. 자원과 감정의 낭비를 막기 위해 '동결'을 방어적 거리 유지와 피해 억제 수단으로 쓴다." },
      { name: "정다인", alias: "제이드그린", power: "재생", code: "F_A_C", mood: "타인의 상처를 우선하는 헌신적 조율자. '재생'을 무력 제압이 아닌 전선 유지와 아군 구호의 든든한 기반으로 다룬다." },
      { name: "유채하", alias: "토파즈옐로", power: "정화", code: "F_A_D", mood: "절망 앞에서도 꺾이지 않는 낙관주의자. '정화'를 전장의 짙은 오염을 뚫고 사기를 진작시키는 치열한 의지로 운용한다." },
      { name: "이지안", alias: "오닉스블랙", power: "흡인", code: "F_A_E", mood: "노련하고 현실적인 관찰자. '흡인'을 파괴가 아닌 불길한 징후와 숨겨진 위협을 예민하게 읽어들이는 정보 수집 수단으로 다룬다." },
    ],
  },
  {
    key: "wish",
    short: "원환",
    name: "원환의사도",
    tone: "소원과 계약의 굴레를 짊어진 자들. 인과를 계산하고 소모전을 치르며, 가혹한 대가 속에서도 과거의 비극을 막기 위해 투쟁한다.",
    characters: [
      { name: "하은영", alias: "프레이야", power: "인과", code: "F_B_A", mood: "철저한 후회 관리자. '인과'를 결백한 선이 아닌, 가장 덜 망가지는 최선의 경로를 강제하는 차가운 통제 수단으로 다룬다." },
      { name: "차설희", alias: "탤리아", power: "연출", code: "F_B_B", mood: "현실감이 결여된 극작가. '연출'을 직접적인 충돌 대신, 자신에게 가장 유리한 국면을 조작해 내는 기만과 방어 기제로 운용한다." },
      { name: "명주하", alias: "바스테트", power: "중력", code: "F_B_C", mood: "책임감의 무게에 흔들리는 몽상가. '중력'을 무거운 현실 대신 적을 물리적으로 짓눌러 강제로 전선을 여는 압승의 타격 수단으로 쓴다." },
      { name: "양로아", alias: "테티스", power: "수압", code: "F_B_D", mood: "규범을 거부하는 저돌적 일탈자. '수압'을 얽매인 틀을 단번에 터뜨리고 적에게 숨 쉴 틈을 주지 않는 강제 돌파 수단으로 다룬다." },
      { name: "타카나기 미나미", alias: "아이리스", power: "프리즘", code: "F_B_E", mood: "자존감의 결핍을 앓는 가희. '프리즘'을 대중의 시선과 감정을 굴절시켜 전장의 공기를 지배하는 매혹과 통제 수단으로 운용한다." },
    ],
  },
  {
    key: "fellow",
    short: "펠로",
    name: "큐어펠로우십",
    tone: "희망과 응원을 공명시키는 무대 위의 구원자들. 압도적인 팀워크를 무기로, 누군가를 맹목적으로 응원하는 마음을 즉각적인 마력으로 치환한다.",
    characters: [
      { name: "김미리", alias: "드림마젠타", power: "꿈", code: "F_C_A", mood: "타인의 긍정에 의존하는 팀의 중추. '꿈'을 환각이 아닌 전장에 희망적인 심상을 투사하여 아군의 행동을 동기화하는 방송 매체로 운용한다." },
      { name: "야마하라 카나", alias: "드림민트", power: "자연", code: "F_C_B", mood: "찰나의 장면을 포착하는 감각적 기록자. '자연'을 덩굴 타격이 아닌 빛과 흐름을 읽어 최적의 치유 위치를 찾는 감각적 보조 수단으로 쓴다." },
      { name: "정하영", alias: "드림인디고", power: "심해", code: "F_C_C", mood: "감정 표현이 마비될 정도로 자신을 통제하는 조율자. '심해'를 고요한 저기압으로 깔아 폭주하는 전선의 질서를 보호하는 제어 시스템으로 다룬다." },
      { name: "정희영", alias: "드림블레이즈", power: "화염", code: "F_C_D", mood: "패배를 피드백으로 삼는 호전적 게이머. '화염'을 무지성 방화가 아닌 정확한 타이밍에 콤보를 꽂아 방어선을 부수는 타격 수단으로 운용한다." },
      { name: "향미미", alias: "드림레몬", power: "빛속도", code: "F_C_E", mood: "기다림을 혐오하는 행동파. '빛속도'를 혼자 도망치는 용도가 아닌 아군의 사기와 리듬을 전장에 퍼뜨려 행동을 촉발시키는 선봉의 동력으로 쓴다." },
    ],
  },
  {
    key: "tactical",
    short: "특마대",
    name: "국제연합특수마도부대",
    tone: "특마대의 전장에는 기적조차 작전표 안에 놓인다. 차갑고 정확한 전술 연산과 규율 통제로 인류의 위협을 가장 냉철하게 진압한다.",
    characters: [
      { name: "제인 스텔라", alias: "스타라이트", power: "집속포격", code: "F_D_A", mood: "피해 산출을 앞세우는 지휘관. '집속포격'을 파괴 본능이 아닌, 불필요한 피해를 줄이고 정확한 탄착군에 화력을 쏟는 전술적 타격 수단으로 운용한다." },
      { name: "리카", alias: "바이올렛", power: "초고속기동", code: "F_D_B", mood: "주저함을 허락하지 않는 기동 타격장. '초고속기동'을 적이 판단할 시간 자체를 빼앗아 전장의 템포를 지배하는 심리적·물리적 압박 수단으로 쓴다." },
      { name: "매리 트와일", alias: "문나이트", power: "달빛인력", code: "F_D_C", mood: "완벽한 전술각에 집착하는 지원관. '달빛인력'을 전장의 변수들을 끌어당기고 밀어내며 최적의 사선과 각도를 조율하는 통제 기제로 다룬다." },
      { name: "김연우", alias: "에메랄드", power: "지형스캔", code: "F_D_D", mood: "정보의 불확실성을 혐오하는 작전 브레인. '지형스캔'을 아군의 생존율을 높이고 불확실성을 소거하기 위해 정밀하게 정보를 제어하는 수단으로 운용한다." },
      { name: "세미 피어리", alias: "피어리", power: "열집속", code: "F_D_E", mood: "군대 내 생존을 위해 명랑함을 택한 돌격수. '열집속'을 선배들에게 가치를 증명하고 적의 방어선을 뚫어내기 위해 에너지를 모으는 타격 수단으로 쓴다." },
    ],
  },
  {
    key: "spirit",
    short: "정령관",
    name: "정령의도서관",
    tone: "사라지는 이름과 기록을 붙잡는 숲의 수호자들. 상실을 극복해 낸 이들은 파괴가 아닌 원래의 기록과 형태로 되돌리는 정상화의 길을 걷는다.",
    characters: [
      { name: "유하나", alias: "리드피치", power: "복숭아정령", code: "F_E_A", mood: "이름을 되찾아주는 치유의 매개체. '복숭아정령'을 타격용이 아닌 왜곡된 존재를 감싸 안고 본래의 형태를 찾아주는 부드러운 구호 수단으로 운용한다." },
      { name: "강미란", alias: "리드스카이", power: "수정", code: "F_E_B", mood: "조준점을 잃지 않는 강직한 보호자. '수정'을 물리적 압박 성향에 맞춰 단단한 벽을 치고 일직선으로 꿰뚫어 아군을 정밀하게 보호하는 수단으로 쓴다." },
      { name: "이즈하", alias: "리드베리", power: "야생베리", code: "F_E_C", mood: "야생의 경계심을 품은 생존자. '야생베리'를 화려한 마법이 아닌 본능에 따라 타인과의 거리를 벌리고 적을 사냥하는 생존의 덫으로 다룬다." },
      { name: "샤를로테", alias: "리드포레스트", power: "삼림정령", code: "F_E_D", mood: "느리고 깊게 상처를 묻어두는 숲의 기둥. '삼림정령'을 공격이 아닌 울창한 환경을 펼쳐 장기적으로 치유하고 생명을 유지하는 은폐 수단으로 운용한다." },
      { name: "미아", alias: "리드로열", power: "황금정령", code: "F_E_E", mood: "공적인 책임감으로 무장한 스타. '황금정령'을 부의 과시가 아닌, 압도적인 카리스마로 대중을 매혹하여 통제하고 팀을 이끄는 무대 장치로 쓴다." },
    ],
  },
  {
    key: "stellar",
    short: "성휘",
    name: "성휘만화경",
    tone: "낯선 세계에 떨어진 이방인들. 극심한 마력 반동 속에서도 살아남아, 균열을 봉쇄하고 원래의 세계로 귀환하기 위해 처절한 사투를 벌인다.",
    characters: [
      { name: "유이라", alias: "루멘하트", power: "카드투영", code: "F_F_A", mood: "돌아갈 가족을 품은 부드러운 완충재. '카드투영'을 파괴가 아닌 전장에 필요한 영웅적 특성을 구현해 아군을 돕고 생존로를 여는 보조 수단으로 운용한다." },
      { name: "시로나", alias: "녹스하트", power: "근접투영", code: "F_F_B", mood: "고립의 불안을 떨쳐내려는 맹렬한 생존자. '근접투영'을 안전한 발동이 아닌 신체에 가장 가까이 구현해 적을 부수고 돌파하는 치열한 근접 수단으로 쓴다." },
      { name: "미유나", alias: "미러레이크", power: "정밀투영", code: "F_F_C", mood: "감정을 오차와 좌표로 번역하는 정밀한 조율자. '정밀투영'을 무차별 화력이 아닌 전장을 통제하고 정확한 좌표에 힘을 꽂아넣는 지원 시스템으로 다룬다." },
    ],
  },
  {
    key: "symphonia",
    short: "심포",
    name: "심포니아",
    tone: "불협화음이 울리는 전장을 조율하는 이계의 악단. 엇갈린 숨결과 부서진 박자를 모아, 혼란스러운 전장을 하나의 웅장한 교향곡으로 엮어낸다.",
    characters: [
      { name: "서라엘", alias: "심포니아오라토리아", power: "화음지휘", code: "F_G_A", mood: "합주의 균형을 통제하는 완벽주의 지휘자. '화음지휘'를 흩어진 아군의 마력을 엮어내어 전장의 템포와 밸런스를 강제하는 고도의 전술 통제 시스템으로 다룬다." },
      { name: "이세린", alias: "심포니아아르페지아", power: "현율조율", code: "F_G_B", mood: "미세한 음정으로 긴장을 푸는 섬세한 연주자. '현율조율'을 동료의 심리적 안정감을 구호하고 전장의 미세한 균열을 꿰매는 정밀한 보조 수단으로 운용한다." },
      { name: "문유하", alias: "심포니아녹턴", power: "저음장벽", code: "F_G_C", mood: "침묵 앞에서는 무력해지는 든든한 방어자. '저음장벽'을 끝없이 가라앉는 주파수로 깔아 적의 기동을 봉쇄하고 아군을 감싸는 결계 수단으로 쓴다." },
      { name: "하미루", alias: "심포니아칸타빌레", power: "선율치유", code: "F_G_D", mood: "흐트러짐 없는 선율로 활력을 불어넣는 치유자. '선율치유'를 쉼 없이 이어지는 호흡으로 아군의 즉각적인 재행동을 촉발시키는 기동형 회복 수단으로 다룬다." },
      { name: "강리오", alias: "심포니아마르카토", power: "박동충격", code: "F_G_E", mood: "박자를 놓치면 폭주하는 저돌적 타악기 주자. '박동충격'을 물리적인 충격파로 적의 진형을 붕괴시키고 아군의 돌격 템포를 지배하는 돌파 수단으로 운용한다." },
    ],
  },
  {
    key: "prima",
    short: "프리마",
    name: "프리마",
    tone: "빛바래지 않는 맹세와 왕권의 잔향. 우주 정거장을 거점으로 삼아, 상실된 원초의 성물을 회수하며 구세대가 맺었던 절대적인 맹세를 완수하려 한다.",
    characters: [
      { name: "유세리나", alias: "프리마브라이드", power: "세정", code: "F_H_A", mood: "정답을 내지 못한 채 사랑을 가르치는 수호자. '세정'을 타인의 얽힌 감정선을 신념의 형식으로 씻어내어 올바른 관계를 맺도록 유도하는 교정 수단으로 쓴다." },
      { name: "노아린", alias: "프리마팬텀", power: "마술", code: "F_H_B", mood: "쾌락주의자이자 기만을 일삼는 의적. '마술'을 고정된 마법이 아닌 수만 가지의 변칙적인 기법을 창조해 적을 완벽하게 농락하는 기만 수단으로 다룬다." },
      { name: "엘리시아", alias: "프리마레지나", power: "왕권결계", code: "F_H_C", mood: "사랑마저 계약화하는 극단적 통제광. '왕권결계'를 방어막이 아닌 출입과 관계 자체를 규정하여 지배를 선포하는 거대한 통치 및 제어 행위로 운용한다." },
    ],
  },
];

const dailyNotes = {
  luna: [
    "약속 시간과 주변 정리를 유난히 잘 챙긴다. 모두가 긴장한 날이면 일부러 가벼운 농담을 던져, 숨 쉴 틈을 만들어 준다.",
    "조용한 자리에서 생각을 정리하는 시간이 많다. 감정 표현은 서툴지만, 누가 무엇 때문에 불편했는지는 오래 기억한다.",
    "차가 식기 전에 건네는 사람이다. 누가 무리했는지, 누가 괜찮은 척하는지 가장 먼저 알아차린다.",
    "사람이 모이면 자연스럽게 중심에 선다. 칭찬에는 약하지만, 누군가 시무룩해지면 자기 일처럼 분위기를 끌어올린다.",
    "취향도 생활도 쉽게 드러내지 않는다. 대신 필요할 때 정확한 말만 남기고, 뒤에서 위험한 가능성을 하나씩 지운다.",
  ],
  wish: [
    "반복되는 일과 작은 습관을 좋아한다. 누군가 가볍게 한 말도 오래 기억해, 어느 날 아무렇지 않게 지켜 낸다.",
    "대화의 흐름을 장면처럼 살핀다. 가장 적당한 타이밍에 말을 꺼내고, 어색한 침묵도 자기 페이스로 바꿔 놓는다.",
    "기분이 금방 얼굴에 떠오른다. 장난스럽게 굴면서도 상대가 어디까지 다가와도 되는지 조심스레 확인한다.",
    "시원한 말투로 막힌 공기를 뚫어 준다. 먼저 움직이고 먼저 부딪히지만, 뒤끝 없이 팀을 다시 끌고 간다.",
    "사교적이고 여유롭다. 웃는 얼굴로 사람을 안심시키면서도, 누가 무엇을 원하고 숨기는지 빠르게 읽어 낸다.",
  ],
  fellow: [
    "작은 성공도 크게 축하한다. 누군가 풀이 죽은 날이면, 별것 아닌 일도 축제로 만들어 기어이 웃게 한다.",
    "느린 산책과 식물 돌보기를 좋아한다. 아무 말 없이 곁에 있다가도, 필요한 순간에는 가장 부드러운 말로 다가온다.",
    "조용히 있어도 존재감이 사라지지 않는다. 기준을 세워 주고, 과열된 분위기에는 깊은 숨을 돌려준다.",
    "감정 표현이 분명해서 오해도 빠르고 화해도 빠르다. 팀이 망설이면 먼저 불을 붙이는 쪽이다.",
    "복잡한 생각보다 먼저 움직인다. 그 빠른 발걸음이 가끔은 모두를 구하고, 가끔은 모두를 끌고 뛰게 만든다.",
  ],
  tactical: [
    "정돈된 일정과 장비 점검을 편안해한다. 딱딱해 보이지만, 팀원이 무너지지 않게 뒤처리까지 챙긴다.",
    "농담처럼 가볍게 움직이지만 늘 퇴로를 본다. 몸이 먼저 기억한 동선이 실전에서 모두를 살린다.",
    "과장된 반응을 싫어한다. 조용히 놓친 부분을 메우고, 아무도 보지 않는 곳에서 기록을 정리한다.",
    "메모와 지도 확인이 습관처럼 붙어 있다. 취미처럼 보이는 일이 결국 팀의 길을 열어 준다.",
    "밝고 수다스럽지만 중요한 순간에는 흔들리지 않는다. 시선도 열도 한 점으로 모아낸다.",
  ],
  spirit: [
    "누군가의 작은 피로도 쉽게 지나치지 못한다. 이름을 기억한다는 것이 곧 지키는 일이라고 믿는다.",
    "정리하는 손길이 익숙하다. 엉킨 기록과 마음을 한꺼번에 펴 놓고, 아무 일 없었다는 듯 미소 짓는다.",
    "구석에서 조용히 관찰하는 시간이 많다. 이상한 기척이 닿으면, 말보다 먼저 움직인다.",
    "곁에 머무는 방식이 조용하다. 강요하지 않고 기다리다가, 상대가 무너지기 직전에 손을 내민다.",
    "품격을 중요하게 여긴다. 화려한 말보다 정확한 판단으로 팀이 흔들리지 않게 붙든다.",
  ],
  stellar: [
    "먼저 필요한 것을 묻는 사람이다. 팀원들이 불안을 말할 수 있도록, 작고 안전한 자리를 만든다.",
    "단순해 보일 만큼 솔직하다. 하지만 위험이 닥치면 누구보다 빠르게 살아남을 길을 계산한다.",
    "배려가 조용하다. 말 대신 자리를 비켜 주고, 길 대신 방향을 맞춰 준다.",
  ],
  symphonia: [
    "감정을 크게 보이지 않아도 모두의 변화를 듣고 있다. 목소리의 떨림 하나로 템포를 낮춘다.",
    "말을 고르는 속도가 느리다. 그래서 한마디가 필요할 때 더 정확히 닿는다.",
    "여유로운 웃음 뒤에 보호 본능이 깊다. 위험이 오면 가장 단단한 저음처럼 앞을 막는다.",
    "먼저 인사하고 먼저 웃는다. 작은 노래 한 소절로 어색한 공기를 녹인다.",
    "반응이 빠르고 솔직하다. 오래 묵은 침묵도 한 번의 박동처럼 깨뜨린다.",
  ],
  prima: [
    "예의를 지키며 다가간다. 사람을 믿는 태도는 부드럽지만, 결코 가볍지 않다.",
    "긴장을 흐트러뜨리는 장난을 즐긴다. 그러나 중요한 순간에는 가장 정확한 곳을 찌른다.",
    "흐트러진 약속을 싫어한다. 말없이 선을 긋고, 그 선 안에서 모두가 버틸 수 있게 한다.",
  ],
};

const villainFactions = [
  {
    key: "curse",
    short: "주해",
    name: "주해의일족",
    color: "#ff4040",
    image: "F_VB_A",
    teamup: "assets/villain-teamups-ai/villain-teamup-curse-ai-v2.png",
    tone: "부정적인 감정을 증식시켜 대상을 타락시키는 저주의 근원. 원념을 동력으로 삼아 인간을 괴물로 만들고 비극을 수확하는 끔찍한 소모전을 펼친다.",
    doctrine: "본진은 주해차원. 접촉 오염과 장기 소모전에 능하며, 상처받은 마음과 억눌린 책임을 먹이 삼아 마법소녀의 변신 한계를 서서히 갉아먹는다.",
    characters: [
      { name: "적주희", alias: "레드커스프린세스", code: "F_VB_A", role: "저주", mood: "타인을 지배하고 짓밟는 가학적 통치자. 저주를 분노가 아닌, 희생양의 정신을 가장 고통스럽고 효율적으로 파괴하는 정밀한 고문 수단으로 다룬다." },
      { name: "시노", alias: "주해의그림자", code: "M_VB_B", role: "그림자", mood: "불필요한 마찰을 꺼리는 침묵의 암살자. 그림자 능력을 사각지대를 파고들어 최소한의 움직임으로 숨통을 끊어내는 완벽한 은폐 수단으로 운용한다." },
      { name: "츠루기노야이바", alias: "오니무사", code: "M_VB_C", role: "검술", mood: "끓어오르는 폭력성을 즐기는 호전적 무사. 검술을 명예가 아닌, 전장에서 적을 찢고 압도적인 우위를 쾌락적으로 확인하는 살육의 도구로 쓴다." },
      { name: "백면권", alias: "주원권법원로", code: "M_VB_D", role: "주원권법", mood: "전통과 규율로 악행을 정당화하는 원로. 주원권 능력을 적을 논리적 저주의 사슬로 옭아매어 고통을 제도화하는 기만적 억압 수단으로 운용한다." },
    ],
  },
  {
    key: "abyss",
    short: "심연",
    name: "심연귀족",
    color: "#d84772",
    image: "F_VA_A",
    teamup: "assets/villain-teamups-ai/villain-teamup-abyss-ai-v1.png",
    tone: "비극을 설계하고 타락을 관망하는 구경꾼 귀족. 직접적인 파괴보다 조종과 연출을 통해 사냥감이 가장 찬란한 희망을 품은 순간 스스로 추락하도록 유도한다.",
    doctrine: "본진은 심연궁전. 그들의 영지 안에서는 현실의 규칙과 경계가 흐려지며, 폭력조차 철저한 예법과 고상한 품위를 갖춘 연극 장면으로 탈바꿈한다.",
    characters: [
      { name: "느와르 여제", alias: "엠프레스느와르", code: "F_VA_A", role: "비극", mood: "비극의 총괄 설계자. 비극이라는 개념 자체를 다루며, 대상의 인생과 감정선을 완벽한 파멸의 서사로 조작하는 무대 통제 수단으로 운용한다." },
      { name: "버틀러", alias: "이터널스튜어드", code: "M_VA_B", role: "관통", mood: "오차 없는 살육의 절차를 밟는 은검 집사. 관통 능력을 통제와 규율에 맞춰, 예법에 어긋나는 대상을 소음 없이 꿰뚫는 정밀 처형 수단으로 다룬다." },
      { name: "오라클", alias: "폴른비저너리", code: "F_VA_C", role: "시간", mood: "운명을 얽어매는 시간의 예언자. 시간 능력을 인과율 조작에 사용하여, 적의 모든 발버둥과 회피 행동조차 파멸로 향하도록 유도하는 구속 수단으로 쓴다." },
      { name: "아르카스", alias: "블러드나이트", code: "M_VA_D", role: "혈기", mood: "맹렬한 승리욕을 규율로 통제하는 대검 기사. 혈기 능력을 폭주가 아닌, 정제된 기사도의 묵직한 검격으로 적을 질서 정연하게 짓누르는 제압 수단으로 운용한다." },
    ],
  },
  {
    key: "shady",
    short: "쉐디",
    name: "쉐도우디스코드",
    color: "#39d9ff",
    image: "M_VC_A",
    teamup: "assets/villain-teamups-ai/villain-teamup-shady-reference-composite-v1.png",
    tone: "디지털 노이즈와 감정의 균열로 시스템을 잠식하는 데이터 빌런. 오류와 해킹을 통해 도시 인프라를 무너뜨리고 군중의 심리를 조작한다.",
    doctrine: "본진은 노이즈서버. 서버가 존재하는 한 끝없이 증식하며, 현실의 마법 체계마저 한낱 데이터 시스템처럼 취급하여 오류를 강제 주입한다.",
    characters: [
      { name: "글리치 익스큐터", alias: "그랜드리더", code: "M_VC_A", role: "잠식", mood: "붕괴의 순서를 치밀하게 계산하는 집행자. 현실을 오류 난 화면처럼 찢어 놓고, 불필요한 감정과 변수를 통제 영역 밖으로 밀어낸다." },
      { name: "바이러스 퀸", alias: "인펙션간부", code: "F_VC_B", role: "바이러스침식", mood: "가장 치명적인 틈을 노리는 감염 지휘관. 다정한 표정으로 시스템의 핵심에 부드럽게 접속하여 관계의 밑바닥부터 썩어 들어가게 만든다." },
      { name: "데이터 밴시", alias: "심리전지휘", code: "F_VC_C", role: "정보탈취", mood: "가학적인 심리전에 능한 유령. 빼앗긴 정보와 뒤틀린 기억의 잔향을 증폭시켜, 적의 판단력을 앗아가고 서서히 미치게 만든다." },
      { name: "마그네타", alias: "근접처형", code: "F_VC_D", role: "자기력", mood: "맹렬한 사냥 본능을 지닌 처형인. 치명적인 거리까지 접근하여 무기와 신체의 균형을 강제로 비틀어버리는 압도적인 힘을 발휘한다." },
    ],
  },
  {
    key: "void",
    short: "보이드",
    name: "보이드오퍼레이션",
    color: "#6f89ff",
    image: "F_VD_A",
    teamup: "assets/villain-teamups-ai/villain-teamup-void-ai-v1.png",
    tone: "차원을 압착하고 공간을 지배하여 행성을 통째로 재구축하려는 무자비한 침공 군단. 현지의 법칙을 무시하고 강압적인 군령을 최우선으로 삼는다.",
    doctrine: "본진은 보이드함선. 차원문을 열고 전진할 때마다 기존 문명의 질서는 무너지고, 그 자리에 군단의 차가운 전술과 통치 법칙이 강제로 편입된다.",
    characters: [
      { name: "그란 마샤르", alias: "최고사령관", code: "F_VD_A", role: "차원압착", mood: "도망칠 공간조차 허락하지 않는 무자비한 사령관. 전장을 거시적으로 내려다보며 적의 선택지를 물리적으로 압착하여 지워버린다." },
      { name: "일렉트릭 발키리", alias: "공중에이스", code: "F_VD_B", role: "고압전류", mood: "오차를 허용하지 않는 하늘의 처형자. 빠르고 차가운 판단력과 고압의 전격으로 공중의 흐름을 완벽하게 장악한다." },
      { name: "더 디젤", alias: "공성전사", code: "M_VD_C", role: "질량가속", mood: "압도적인 무게로 방어선을 찢는 공성 병기. 거대한 장비의 질량과 가속을 전면에 내세워 적의 진형을 무자비하게 짓뭉갠다." },
      { name: "솔다트", alias: "정예보병", code: "M_VD_D", role: "질량포격", mood: "명령에 살고 죽는 흔들림 없는 병사. 감정을 배제한 채 전선을 유지하며, 가장 치명적인 순간에 묵직한 포격으로 길을 뚫는다." },
    ],
  },
  {
    key: "blank",
    short: "공백",
    name: "공백의마도서",
    color: "#d96bff",
    image: "M_VE_A",
    teamup: "assets/villain-teamups-ai/villain-teamup-blank-ai-v1.png",
    tone: "역사와 기억을 하얀 공백으로 지워버리는 망각의 마도서. 모든 현실을 무대 위 각본으로 비틀고, 확률을 조작해 존재 자체를 무(無)로 돌린다.",
    doctrine: "본진은 공백극장. 규칙과 상식이 무시되는 극장 안에서, 정화조차 불가능한 절대적인 망각의 권능으로 적을 영원히 격리한다.",
    characters: [
      { name: "링마스터", alias: "그랜드쇼맨", code: "M_VE_A", role: "공백", mood: "비명과 박수를 양분 삼는 광기의 단장. 무대가 커질수록 힘을 얻으며, 현실의 사건을 잔혹한 유희거리로 연출해낸다." },
      { name: "크라운 프린세스", alias: "왕녀", code: "F_VE_B", role: "규칙삭제", mood: "세상의 질서를 장난감처럼 다루는 왕녀. 웃는 얼굴로 물리 법칙과 상식을 찢어발기며, 상대가 믿던 기반을 순식간에 붕괴시킨다." },
      { name: "마리오네트", alias: "공백의인형", code: "F_VE_C", role: "기억소거", mood: "감정을 거세한 채 기억을 뜯어내는 인형. 말없는 침묵으로 다가와 대상의 정체성과 가장 소중한 기억의 실밥을 조용히 풀어헤친다." },
      { name: "아이언 워든", alias: "집행교도관", code: "M_VE_D", role: "중압봉인", mood: "도망칠 틈을 원천 봉쇄하는 무자비한 집행자. 무거운 규율과 강압적인 봉인으로 대상을 영원한 공백의 감옥에 가두어버린다." },
    ],
  },
  {
    key: "fallen",
    short: "폴른",
    name: "폴른",
    color: "#9fd8ff",
    image: "M_VF_A",
    teamup: "assets/villain-teamups-ai/villain-teamup-fallen-ai-v1.png",
    tone: "과거의 배신을 잊지 못해 세계를 영원한 겨울로 얼리려는 멸망의 계승자들. 멈춰버린 시간과 차가운 왕통의 지배력을 현실에 강제한다.",
    doctrine: "본진은 사월궁. 모든 것을 얼려 보존하려는 집착과 배신을 응징하려는 차가운 논리로 무장하여 절망적인 최종 국면을 도래시킨다.",
    characters: [
      { name: "폴른프린스", alias: "냉월군주", code: "M_VF_A", role: "절대영도", mood: "모든 것을 얼려 보존하려는 차가운 지배자. 부드럽고 기품 있는 말투 이면에, 배신을 결코 잊지 못하는 지독한 잔혹함을 숨기고 있다." },
      { name: "렐릭콜렉터", alias: "왕실수장고", code: "F_VF_B", role: "유물속박", mood: "과거의 영광에 집착하는 광적인 수집가. 조용히 관찰하며 가치를 매긴 뒤, 영원히 변하지 않도록 유물의 사슬로 대상을 묶어버린다." },
    ],
  },
];

// Base copyEdits are intentionally left blank as the base objects (teams, villainFactions)
// have been directly populated with the finalized, deeply integrated lore.
// However, the function structure is preserved to maintain existing application logic.
const copyEdits = {
  teams: {},
  villains: {},
};

function applyCopyEdits() {
  teams.forEach((team) => {
    const edit = copyEdits.teams[team.key];
    if (!edit) return;
    team.tone = edit.tone;
    team.characters.forEach((character, index) => {
      character.mood = edit.moods[index] || character.mood;
    });
    dailyNotes[team.key] = edit.daily || dailyNotes[team.key];
  });

  villainFactions.forEach((faction) => {
    const edit = copyEdits.villains[faction.key];
    if (!edit) return;
    faction.tone = edit.tone;
    faction.doctrine = edit.doctrine;
    faction.characters.forEach((character, index) => {
      character.mood = edit.moods[index] || character.mood;
    });
  });
}

applyCopyEdits();

const progress = document.querySelector(".progress span");
const introLoader = document.querySelector(".intro-loader");
const toTop = document.querySelector(".to-top");
const navLinks = [...document.querySelectorAll(".nav a[href^='#']")];
const sideLinks = [...document.querySelectorAll(".side-index a[href^='#']")];
const villainGrid = document.querySelector("#villainGrid");
const villainProfileTabs = document.querySelector("#villainProfileTabs");
const villainProfileHeader = document.querySelector("#villainProfileHeader");
const villainProfileGrid = document.querySelector("#villainProfileGrid");
const teamProfileTabs = document.querySelector("#teamProfileTabs");
const teamProfileHeader = document.querySelector("#teamProfileHeader");
const profileGrid = document.querySelector("#profileGrid");
const formButtons = [...document.querySelectorAll("[data-form]")];
const teamCards = [...document.querySelectorAll(".team-grid article")];

let activeTeam = 0;
let activeForm = "both";
let activeVillainFaction = 0;

document.body.classList.add("is-loading");

function imageFor(character, form) {
  if (form === "normal") return `assets/profiles/normal/${character.code}.png`;
  return `assets/profiles/magic/${character.code}F.png`;
}

function villainImage(code) {
  return `assets/profiles/villains/${code}.png`;
}

function villainTeamup(faction) {
  return faction.teamup || villainImage(faction.image);
}

function formImage(character, form) {
  return `
    <figure class="profile-form profile-form-${form}">
      <img src="${imageFor(character, form)}" alt="${character.name} ${form === "normal" ? "일반폼" : "변신폼"} 이미지">
      <figcaption>${form === "normal" ? "일반폼" : "변신폼"}</figcaption>
    </figure>
  `;
}

function renderProfilesContent() {
  const team = teams[activeTeam];
  teamProfileHeader.innerHTML = `
    <span>${team.short}</span>
    <h3>${team.name}</h3>
    <p>${team.tone}</p>
  `;

  profileGrid.innerHTML = team.characters.map((character, characterIndex) => {
    const images = activeForm === "both"
      ? formImage(character, "normal") + formImage(character, "magic")
      : formImage(character, activeForm);

    return `
      <article class="profile-card">
        <div class="profile-images ${activeForm === "both" ? "is-both" : "is-single"}">
          ${images}
        </div>
        <div class="profile-copy">
          <span>${character.alias}</span>
          <h3>${character.name}</h3>
          <dl>
            <div><dt>소속</dt><dd>${team.name}</dd></div>
            <div><dt>능력</dt><dd>${character.power}</dd></div>
          </dl>
          <p>${character.mood}</p>
          <p class="profile-daily">${dailyNotes[team.key]?.[characterIndex] || ""}</p>
        </div>
      </article>
    `;
  }).join("");

  teamProfileTabs?.querySelectorAll("[data-team]").forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.team) === activeTeam);
  });

  formButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.form === activeForm);
  });
}

function renderProfiles(animate = false) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!animate || reduceMotion || !profileGrid) {
    renderProfilesContent();
    return;
  }

  const startHeight = profileGrid.getBoundingClientRect().height;
  profileGrid.style.height = `${startHeight}px`;
  profileGrid.classList.add("is-switching");

  renderProfilesContent();

  const endHeight = profileGrid.scrollHeight;
  requestAnimationFrame(() => {
    profileGrid.style.height = `${endHeight}px`;
  });

  const cleanup = (event) => {
    if (event.propertyName !== "height") return;
    profileGrid.style.height = "";
    profileGrid.classList.remove("is-switching");
    profileGrid.removeEventListener("transitionend", cleanup);
  };

  profileGrid.addEventListener("transitionend", cleanup);
  window.setTimeout(() => {
    profileGrid.style.height = "";
    profileGrid.classList.remove("is-switching");
    profileGrid.removeEventListener("transitionend", cleanup);
  }, 460);
}

function activateTeam(index, shouldScroll = false) {
  activeTeam = Math.max(0, Math.min(index, teams.length - 1));
  renderProfiles(true);
  if (shouldScroll) {
    document.querySelector("#characters")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderTeamTabs() {
  if (!teamProfileTabs) return;
  teamProfileTabs.innerHTML = teams.map((team, index) => `
    <button class="team-profile-tab${index === activeTeam ? " is-active" : ""}" type="button" data-team="${index}">
      <span>${team.short}</span>
      <strong>${team.name}</strong>
    </button>
  `).join("");

  teamProfileTabs.querySelectorAll("[data-team]").forEach((button) => {
    button.addEventListener("click", () => {
      activateTeam(Number(button.dataset.team || 0));
    });
  });
}

function renderVillainCards() {
  if (!villainGrid) return;
  villainGrid.innerHTML = villainFactions.map((faction, index) => `
    <article class="villain-card" style="--villain:${faction.color}" data-villain-card="${index}" tabindex="0" role="button" aria-label="${faction.name} 프로필 보기">
      <img src="${villainTeamup(faction)}" alt="${faction.name} 팀업 이미지">
      <span>${String(index + 1).padStart(2, "0")} / ${faction.short}</span>
      <h3>${faction.name}</h3>
      <p>${faction.tone}</p>
      <div class="villain-card-detail">
        <strong>${faction.short}의 방식</strong>
        <p>${faction.doctrine}</p>
      </div>
    </article>
  `).join("");

  villainGrid.querySelectorAll("[data-villain-card]").forEach((card) => {
    const index = Number(card.dataset.villainCard || 0);
    const activate = () => activateVillainFaction(index, true);
    card.addEventListener("click", activate);
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      activate();
    });
  });
}

function renderVillainProfileContent() {
  if (!villainProfileHeader || !villainProfileGrid) return;
  const faction = villainFactions[activeVillainFaction];
  villainProfileHeader.style.setProperty("--villain", faction.color);
  villainProfileHeader.innerHTML = `
    <span>${faction.short}</span>
    <h3>${faction.name}</h3>
    <p>${faction.tone} ${faction.doctrine}</p>
  `;

  villainProfileGrid.innerHTML = faction.characters.map((character) => `
    <article class="profile-card villain-person-card" style="--villain:${faction.color}">
      <div class="profile-images is-single villain-image-wrap">
        <figure class="profile-form">
          <img src="${villainImage(character.code)}" alt="${character.name} 빌런 이미지">
          <figcaption>${faction.short}</figcaption>
        </figure>
      </div>
      <div class="profile-copy">
        <span>${character.alias}</span>
        <h3>${character.name}</h3>
        <dl>
          <div><dt>세력</dt><dd>${faction.name}</dd></div>
          <div><dt>역할</dt><dd>${character.role}</dd></div>
        </dl>
        <p>${character.mood}</p>
      </div>
    </article>
  `).join("");

  villainProfileTabs?.querySelectorAll("[data-villain]").forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.villain) === activeVillainFaction);
  });
}

function renderVillainProfiles(animate = false) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!animate || reduceMotion || !villainProfileGrid) {
    renderVillainProfileContent();
    return;
  }

  const startHeight = villainProfileGrid.getBoundingClientRect().height;
  villainProfileGrid.style.height = `${startHeight}px`;
  villainProfileGrid.classList.add("is-switching");

  renderVillainProfileContent();

  const endHeight = villainProfileGrid.scrollHeight;
  requestAnimationFrame(() => {
    villainProfileGrid.style.height = `${endHeight}px`;
  });

  const cleanup = (event) => {
    if (event.propertyName !== "height") return;
    villainProfileGrid.style.height = "";
    villainProfileGrid.classList.remove("is-switching");
    villainProfileGrid.removeEventListener("transitionend", cleanup);
  };

  villainProfileGrid.addEventListener("transitionend", cleanup);
  window.setTimeout(() => {
    villainProfileGrid.style.height = "";
    villainProfileGrid.classList.remove("is-switching");
    villainProfileGrid.removeEventListener("transitionend", cleanup);
  }, 460);
}

function activateVillainFaction(index, shouldScroll = false) {
  activeVillainFaction = Math.max(0, Math.min(index, villainFactions.length - 1));
  renderVillainProfiles(true);
  if (shouldScroll) {
    document.querySelector("#villain-profiles")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderVillainTabs() {
  if (!villainProfileTabs) return;
  villainProfileTabs.innerHTML = villainFactions.map((faction, index) => `
    <button class="team-profile-tab villain-profile-tab${index === activeVillainFaction ? " is-active" : ""}" type="button" data-villain="${index}" style="--villain:${faction.color}">
      <span>${faction.short}</span>
      <strong>${faction.name}</strong>
    </button>
  `).join("");

  villainProfileTabs.querySelectorAll("[data-villain]").forEach((button) => {
    button.addEventListener("click", () => {
      activateVillainFaction(Number(button.dataset.villain || 0));
    });
  });
}

teamCards.forEach((card, index) => {
  card.dataset.teamCard = String(index);
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `${teams[index]?.name || "팀"} 프로필 보기`);

  card.addEventListener("click", () => activateTeam(index, true));
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    activateTeam(index, true);
  });
});

function updateScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const amount = max > 0 ? window.scrollY / max : 0;
  if (progress) progress.style.width = `${Math.min(amount * 100, 100)}%`;
  toTop?.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.7);
}

const observedSections = [...navLinks, ...sideLinks]
  .map((link) => document.querySelector(link.hash))
  .filter(Boolean);

if (observedSections.length) {
  const navObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible?.target?.id) return;

    [...navLinks, ...sideLinks].forEach((link) => {
      const active = link.hash === `#${visible.target.id}`;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-18% 0px -58% 0px", threshold: [0.1, 0.24, 0.4] });

  observedSections.forEach((section) => navObserver.observe(section));
}

const revealItems = [
  ...document.querySelectorAll(".section-title, .team-grid, .villain-grid, .team-profile-tabs, .villain-profile-tabs, .team-profile-header, .profile-form-switch, .profile-grid, .world-slider, .media-grid"),
];

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });

  revealItems.forEach((item) => {
    item.classList.add("reveal");
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

formButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeForm = button.dataset.form || "both";
    renderProfiles(true);
  });
});

toTop?.addEventListener("click", () => {
  document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("scroll", updateScroll, { passive: true });
window.addEventListener("resize", updateScroll);
window.addEventListener("load", () => {
  window.setTimeout(() => {
    introLoader?.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
  }, 1350);
});

renderTeamTabs();
renderProfiles();
renderVillainCards();
renderVillainTabs();
renderVillainProfiles();
updateScroll();
