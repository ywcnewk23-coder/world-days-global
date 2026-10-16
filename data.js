/* World Days global expansion v1. Research starter dataset, not yet exhaustive. Verify each linked page against its event before treating as fully sourced. */
const WORLD_DAYS_DATA = [
  {
    "id": "slovakia-statehood",
    "country": "スロバキア",
    "countryEn": "Slovakia",
    "date": "01-01",
    "name": "共和国成立記念日",
    "nameEn": "Day of the Establishment of the Slovak Republic",
    "category": "建国・国家成立",
    "year": 1993,
    "status": "official",
    "official": true,
    "origin": "1993年1月1日、チェコスロバキアの解体によりスロバキア共和国が成立した。",
    "sources": [
      {
        "label": "スロバキア政府",
        "url": "https://www.vlada.gov.sk/"
      }
    ]
  },
  {
    "id": "haiti-independence",
    "country": "ハイチ",
    "countryEn": "Haiti",
    "date": "01-01",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1804,
    "status": "official",
    "official": true,
    "origin": "1804年1月1日、ハイチはフランスから独立を宣言した。奴隷制に対する革命から生まれた国家であり、独立史は大西洋世界の奴隷制と植民地主義の歴史に深く関わる。",
    "sources": [
      {
        "label": "Encyclopaedia Britannica: Haiti",
        "url": "https://www.britannica.com/place/Haiti"
      }
    ]
  },
  {
    "id": "chile-declaration",
    "country": "チリ",
    "countryEn": "Chile",
    "date": "02-12",
    "name": "独立宣言記念日",
    "nameEn": "Declaration of Independence",
    "category": "独立",
    "year": 1818,
    "status": "historical",
    "official": false,
    "origin": "チリは1818年2月12日に独立を正式に宣言した。現在広く祝われる国民祭とは日付が異なるため、歴史的節目として登録。",
    "sources": [
      {
        "label": "チリ国立図書館",
        "url": "https://www.memoriachilena.gob.cl/"
      }
    ]
  },
  {
    "id": "lithuania-independence",
    "country": "リトアニア",
    "countryEn": "Lithuania",
    "date": "02-16",
    "name": "国家再建記念日",
    "nameEn": "Day of Restoration of the State of Lithuania",
    "category": "建国・国家成立",
    "year": 1918,
    "status": "official",
    "official": true,
    "origin": "1918年2月16日、リトアニア評議会が独立国家の再建を宣言した。1990年3月11日の独立回復宣言とは異なる歴史的節目である。",
    "sources": [
      {
        "label": "リトアニア政府",
        "url": "https://lrv.lt/en/"
      }
    ]
  },
  {
    "id": "estonia-independence",
    "country": "エストニア",
    "countryEn": "Estonia",
    "date": "02-24",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1918,
    "status": "official",
    "official": true,
    "origin": "1918年2月24日、エストニア救国委員会が独立宣言を公表した。ソ連時代を経て1991年に独立を回復した歴史も重要である。",
    "sources": [
      {
        "label": "エストニア外務省",
        "url": "https://vm.ee/en"
      }
    ]
  },
  {
    "id": "dominican-republic-independence",
    "country": "ドミニカ共和国",
    "countryEn": "Dominican Republic",
    "date": "02-27",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1844,
    "status": "official",
    "official": true,
    "origin": "1844年2月27日、ハイチ支配からの独立が宣言された。ドミニカ共和国の国家形成は、イスパニョーラ島の複雑な植民地・政治史と結びついている。",
    "sources": [
      {
        "label": "ドミニカ共和国政府",
        "url": "https://www.gob.do/"
      }
    ]
  },
  {
    "id": "ghana-independence",
    "country": "ガーナ",
    "countryEn": "Ghana",
    "date": "03-06",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1957,
    "status": "official",
    "official": true,
    "origin": "1957年3月6日、ゴールド・コーストはガーナとしてイギリスから独立した。サハラ以南のアフリカで植民地支配から独立した国々の歴史における重要な節目となった。",
    "sources": [
      {
        "label": "ガーナ政府",
        "url": "https://www.ghana.gov.gh/"
      }
    ]
  },
  {
    "id": "namibia-independence",
    "country": "ナミビア",
    "countryEn": "Namibia",
    "date": "03-21",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1990,
    "status": "official",
    "official": true,
    "origin": "1990年3月21日、ナミビアは南アフリカの統治から独立した。独立に至る過程は国連の関与や長期の解放闘争と関連している。",
    "sources": [
      {
        "label": "国連ナミビア独立関連資料",
        "url": "https://www.un.org/dppa/decolonization/en/nsgt/namibia"
      }
    ]
  },
  {
    "id": "greece-independence",
    "country": "ギリシャ",
    "countryEn": "Greece",
    "date": "03-25",
    "name": "独立記念日",
    "nameEn": "Greek Independence Day",
    "category": "独立",
    "year": 1821,
    "status": "official",
    "official": true,
    "origin": "1821年に始まったギリシャ独立革命を記念する日。国家成立の過程は複数年にわたる。",
    "sources": [
      {
        "label": "ギリシャ外務省",
        "url": "https://www.mfa.gr/en/"
      }
    ]
  },
  {
    "id": "greece-republic",
    "country": "ギリシャ",
    "countryEn": "Greece",
    "date": "03-25",
    "name": "独立革命記念日",
    "nameEn": "Greek Independence Day",
    "category": "独立",
    "year": 1821,
    "status": "official",
    "official": true,
    "origin": "1821年に始まった独立革命を記念する日。国際的な承認と独立国家としての成立はその後の戦争・外交を通じて進んだ。",
    "sources": [
      {
        "label": "ギリシャ外務省",
        "url": "https://www.mfa.gr/en/"
      }
    ]
  },
  {
    "id": "bangladesh-independence",
    "country": "バングラデシュ",
    "countryEn": "Bangladesh",
    "date": "03-26",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1971,
    "status": "official",
    "official": true,
    "origin": "1971年3月26日、バングラデシュの独立が宣言された。解放戦争を経て同年12月に独立が確立したため、宣言日と勝利の日は区別される。",
    "sources": [
      {
        "label": "バングラデシュ政府",
        "url": "https://bangladesh.gov.bd/"
      }
    ]
  },
  {
    "id": "senegal-independence",
    "country": "セネガル",
    "countryEn": "Senegal",
    "date": "04-04",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1960,
    "status": "official",
    "official": true,
    "origin": "1960年4月4日、セネガルはフランス共同体内の自治から独立国家へ移行した。4月4日は独立に至る政治的過程を記念する日として扱われる。",
    "sources": [
      {
        "label": "セネガル政府",
        "url": "https://www.sec.gouv.sn/"
      }
    ]
  },
  {
    "id": "tanzania-union",
    "country": "タンザニア",
    "countryEn": "Tanzania",
    "date": "04-26",
    "name": "連合記念日",
    "nameEn": "Union Day",
    "category": "統一",
    "year": 1964,
    "status": "official",
    "official": true,
    "origin": "1964年4月26日、タンガニーカとザンジバルが連合協定を結び、タンザニア連合共和国の基礎が成立した。",
    "sources": [
      {
        "label": "タンザニア政府",
        "url": "https://www.tanzania.go.tz/"
      }
    ]
  },
  {
    "id": "japan-constitution",
    "country": "日本",
    "countryEn": "Japan",
    "date": "05-03",
    "name": "日本国憲法施行",
    "nameEn": "Constitution Memorial Day",
    "category": "その他の国家的節目",
    "year": 1947,
    "status": "official",
    "official": true,
    "origin": "日本国憲法は1947年5月3日に施行された。国家成立の日というより、戦後の国家制度と憲法秩序の転換を示す節目として収録する。",
    "sources": [
      {
        "label": "国立国会図書館：日本国憲法",
        "url": "https://www.ndl.go.jp/constitution/e/etc/c01.html"
      }
    ]
  },
  {
    "id": "latvia-independence-restoration",
    "country": "ラトビア",
    "countryEn": "Latvia",
    "date": "05-04",
    "name": "独立回復宣言記念日",
    "nameEn": "Declaration of Independence Restoration",
    "category": "独立",
    "year": 1990,
    "status": "historical",
    "official": false,
    "origin": "1990年5月4日、ラトビアは独立回復宣言を採択した。実際の独立回復過程は1991年に進展したため、1918年の独立宣言記念日と区別する。",
    "sources": [
      {
        "label": "ラトビア外務省",
        "url": "https://www.mfa.gov.lv/en"
      }
    ]
  },
  {
    "id": "norway-constitution",
    "country": "ノルウェー",
    "countryEn": "Norway",
    "date": "05-17",
    "name": "憲法記念日",
    "nameEn": "Constitution Day",
    "category": "その他の国家的節目",
    "year": 1814,
    "status": "official",
    "official": true,
    "origin": "1814年に憲法が採択されたことに由来する。独立の歴史はその後のスウェーデンとの同君連合も含めて説明する必要がある。",
    "sources": [
      {
        "label": "ノルウェー政府",
        "url": "https://www.regjeringen.no/en/"
      }
    ]
  },
  {
    "id": "cuba-republic",
    "country": "キューバ",
    "countryEn": "Cuba",
    "date": "05-20",
    "name": "共和国成立記念日",
    "nameEn": "Republic Day",
    "category": "共和国成立",
    "year": 1902,
    "status": "historical",
    "official": false,
    "origin": "1902年5月20日、キューバ共和国が発足した。ただし米国の強い影響下にあり、独立後の主権の範囲を考えるうえで重要な節目となる。",
    "sources": [
      {
        "label": "Encyclopaedia Britannica: Cuba",
        "url": "https://www.britannica.com/place/Cuba"
      }
    ]
  },
  {
    "id": "timor-leste-restoration",
    "country": "東ティモール",
    "countryEn": "Timor-Leste",
    "date": "05-20",
    "name": "独立回復記念日",
    "nameEn": "Restoration of Independence",
    "category": "独立",
    "year": 2002,
    "status": "official",
    "official": true,
    "origin": "東ティモールは1975年に独立を宣言したが、その後インドネシアに占領された。国連の暫定統治を経て2002年5月20日に独立を回復した。",
    "sources": [
      {
        "label": "国連東ティモール資料",
        "url": "https://peacekeeping.un.org/mission/past/etimor/etimor.htm"
      }
    ]
  },
  {
    "id": "yemen-unification",
    "country": "イエメン",
    "countryEn": "Yemen",
    "date": "05-22",
    "name": "統一記念日",
    "nameEn": "Unity Day",
    "category": "統一",
    "year": 1990,
    "status": "official",
    "official": true,
    "origin": "1990年5月22日、北イエメンと南イエメンが統一してイエメン共和国が成立した。",
    "sources": [
      {
        "label": "イエメン政府ポータル",
        "url": "https://yemen.gov.ye/"
      }
    ]
  },
  {
    "id": "argentina-revolution",
    "country": "アルゼンチン",
    "countryEn": "Argentina",
    "date": "05-25",
    "name": "五月革命記念日",
    "nameEn": "May Revolution",
    "category": "その他の国家的節目",
    "year": 1810,
    "status": "official",
    "official": true,
    "origin": "1810年5月25日、ブエノスアイレスで副王政府に代わる自治政府が成立した。これは独立宣言そのものではなく、独立過程の重要な節目である。",
    "sources": [
      {
        "label": "アルゼンチン国立歴史博物館",
        "url": "https://museohistoriconacional.cultura.gob.ar/"
      }
    ]
  },
  {
    "id": "nepal-republic",
    "country": "ネパール",
    "countryEn": "Nepal",
    "date": "05-28",
    "name": "共和国成立記念日",
    "nameEn": "Republic Day",
    "category": "共和国成立",
    "year": 2008,
    "status": "official",
    "official": true,
    "origin": "2008年5月28日、制憲議会が王制を廃止し、ネパールを連邦民主共和国と宣言した。",
    "sources": [
      {
        "label": "ネパール政府",
        "url": "https://www.nepal.gov.np/"
      }
    ]
  },
  {
    "id": "south-africa-union",
    "country": "南アフリカ",
    "countryEn": "South Africa",
    "date": "05-31",
    "name": "連邦成立の歴史的節目",
    "nameEn": "Union of South Africa",
    "category": "建国・国家成立",
    "year": 1910,
    "status": "historical",
    "official": false,
    "origin": "1910年5月31日、南アフリカ連邦が成立した。ただし当時の政治制度は白人少数支配を基盤とし、全住民の平等な政治参加を意味したわけではない。",
    "sources": [
      {
        "label": "南アフリカ政府：歴史資料",
        "url": "https://www.gov.za/about-sa/history"
      }
    ]
  },
  {
    "id": "italy-republic",
    "country": "イタリア",
    "countryEn": "Italy",
    "date": "06-02",
    "name": "共和国記念日",
    "nameEn": "Festa della Repubblica",
    "category": "共和国成立",
    "year": 1946,
    "status": "official",
    "official": true,
    "origin": "1946年の国民投票で君主制から共和制への移行が選ばれたことを記念する。",
    "sources": [
      {
        "label": "イタリア政府",
        "url": "https://www.governo.it/en"
      }
    ]
  },
  {
    "id": "philippines-independence",
    "country": "フィリピン",
    "countryEn": "Philippines",
    "date": "06-12",
    "name": "独立宣言記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1898,
    "status": "official",
    "official": true,
    "origin": "1898年6月12日、フィリピン革命政府がスペインからの独立を宣言した。しかし米西戦争後に米国の支配下に入り、主権獲得の過程は長く続いた。",
    "sources": [
      {
        "label": "フィリピン政府",
        "url": "https://www.officialgazette.gov.ph/"
      }
    ]
  },
  {
    "id": "iceland-independence",
    "country": "アイスランド",
    "countryEn": "Iceland",
    "date": "06-17",
    "name": "国民の日",
    "nameEn": "Icelandic National Day",
    "category": "独立",
    "year": 1944,
    "status": "official",
    "official": true,
    "origin": "1944年にアイスランド共和国が成立し、デンマークとの君主連合を終えたことを記念する。",
    "sources": [
      {
        "label": "アイスランド政府",
        "url": "https://www.government.is/"
      }
    ]
  },
  {
    "id": "iceland-republic",
    "country": "アイスランド",
    "countryEn": "Iceland",
    "date": "06-17",
    "name": "共和国成立記念日",
    "nameEn": "National Day",
    "category": "共和国成立",
    "year": 1944,
    "status": "official",
    "official": true,
    "origin": "1944年6月17日、アイスランドはデンマークとの君主制上の結びつきを終えて共和国となった。独立過程はそれ以前の自治拡大と結びついている。",
    "sources": [
      {
        "label": "アイスランド政府",
        "url": "https://www.government.is/"
      }
    ]
  },
  {
    "id": "mozambique-independence",
    "country": "モザンビーク",
    "countryEn": "Mozambique",
    "date": "06-25",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1975,
    "status": "official",
    "official": true,
    "origin": "1975年6月25日、モザンビークはポルトガルから独立した。",
    "sources": [
      {
        "label": "モザンビーク政府",
        "url": "https://www.portaldogoverno.gov.mz/"
      }
    ]
  },
  {
    "id": "canada-confederation",
    "country": "カナダ",
    "countryEn": "Canada",
    "date": "07-01",
    "name": "カナダ連邦成立記念日",
    "nameEn": "Canada Day",
    "category": "建国・国家成立",
    "year": 1867,
    "status": "official",
    "official": true,
    "origin": "1867年7月1日、英領北アメリカ法の施行によりオンタリオ、ケベック、ノバスコシア、ニューブランズウィックが連邦を形成した。現在のカナダ全域が同日に成立したわけではなく、領域拡大はその後も続いた。",
    "sources": [
      {
        "label": "カナダ政府：Canada Day",
        "url": "https://www.canada.ca/en/canadian-heritage/services/canada-day-history.html"
      }
    ]
  },
  {
    "id": "US-independence",
    "country": "アメリカ合衆国",
    "countryEn": "United States",
    "date": "07-04",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1776,
    "status": "official",
    "official": true,
    "origin": "1776年7月4日に独立宣言が採択されたことを記念する日。独立戦争の終結日そのものとは区別して記録する。",
    "sources": [
      {
        "label": "米国国立公文書館：独立宣言",
        "url": "https://www.archives.gov/founding-docs/declaration-transcript"
      }
    ]
  },
  {
    "id": "algeria-independence",
    "country": "アルジェリア",
    "countryEn": "Algeria",
    "date": "07-05",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1962,
    "status": "official",
    "official": true,
    "origin": "1962年7月5日、アルジェリアはフランスからの独立を記念する。独立は長期にわたる戦争と交渉の末に実現した。",
    "sources": [
      {
        "label": "アルジェリア政府",
        "url": "https://www.el-mouradia.dz/"
      }
    ]
  },
  {
    "id": "cape-verde-independence",
    "country": "カーボベルデ",
    "countryEn": "Cabo Verde",
    "date": "07-05",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1975,
    "status": "official",
    "official": true,
    "origin": "1975年7月5日、カーボベルデはポルトガルから独立した。",
    "sources": [
      {
        "label": "カーボベルデ政府",
        "url": "https://www.governo.cv/"
      }
    ]
  },
  {
    "id": "venezuela-independence",
    "country": "ベネズエラ",
    "countryEn": "Venezuela",
    "date": "07-05",
    "name": "独立宣言記念日",
    "nameEn": "Declaration of Independence",
    "category": "独立",
    "year": 1811,
    "status": "official",
    "official": true,
    "origin": "1811年7月5日、ベネズエラの代表者たちはスペインからの独立を宣言した。その後も独立戦争は続いた。",
    "sources": [
      {
        "label": "ベネズエラ国立図書館",
        "url": "https://www.bnv.gob.ve/"
      }
    ]
  },
  {
    "id": "argentina-independence",
    "country": "アルゼンチン",
    "countryEn": "Argentina",
    "date": "07-09",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1816,
    "status": "official",
    "official": true,
    "origin": "1816年7月9日、トゥクマン議会がスペインからの独立を宣言した。1810年の五月革命と区別して記録する。",
    "sources": [
      {
        "label": "アルゼンチン政府",
        "url": "https://www.argentina.gob.ar/"
      }
    ]
  },
  {
    "id": "fr-bastille",
    "country": "フランス",
    "countryEn": "France",
    "date": "07-14",
    "name": "フランス国民祭（革命記念日）",
    "nameEn": "French National Day",
    "category": "その他の国家的節目",
    "year": 1789,
    "status": "official",
    "official": true,
    "origin": "7月14日は1789年のバスティーユ襲撃と、1790年の連盟祭の双方と結びついている。単一の出来事だけを記念する日として単純化しない。",
    "sources": [
      {
        "label": "フランス政府（France.fr）",
        "url": "https://www.france.fr/en/article/bastille-day-14-july/"
      }
    ]
  },
  {
    "id": "colombia-independence",
    "country": "コロンビア",
    "countryEn": "Colombia",
    "date": "07-20",
    "name": "独立運動記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1810,
    "status": "official",
    "official": true,
    "origin": "1810年7月20日のボゴタでの政治危機は、スペイン支配からの独立過程の起点として記憶される。現在の独立国家成立までには長い戦争と政治的変化があった。",
    "sources": [
      {
        "label": "コロンビア国立図書館",
        "url": "https://www.bibliotecanacional.gov.co/"
      }
    ]
  },
  {
    "id": "peru-independence",
    "country": "ペルー",
    "countryEn": "Peru",
    "date": "07-28",
    "name": "独立宣言記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1821,
    "status": "official",
    "official": true,
    "origin": "ホセ・デ・サン・マルティンが1821年7月28日にリマで独立を宣言した。独立戦争はその後も続き、軍事的決着と宣言の日は区別される。",
    "sources": [
      {
        "label": "ペルー政府",
        "url": "https://www.gob.pe/"
      }
    ]
  },
  {
    "id": "switzerland-national",
    "country": "スイス",
    "countryEn": "Switzerland",
    "date": "08-01",
    "name": "スイス建国記念日",
    "nameEn": "Swiss National Day",
    "category": "建国・国家成立",
    "year": 1291,
    "status": "official",
    "official": true,
    "origin": "1291年の盟約に伝統的に結びつく記念日。近代国家としての連邦成立（1848年）とは異なる歴史的枠組みである。",
    "sources": [
      {
        "label": "スイス政府 ch.ch",
        "url": "https://www.ch.ch/en/"
      }
    ]
  },
  {
    "id": "jamaica-independence",
    "country": "ジャマイカ",
    "countryEn": "Jamaica",
    "date": "08-06",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1962,
    "status": "official",
    "official": true,
    "origin": "1962年8月6日、ジャマイカはイギリスから独立した。独立直後の同年10月にはキューバ危機が起き、カリブ海地域の安全保障環境は緊迫した。ジャマイカの外交史を調べる際は、地域の緊張と同国自身の政策判断を区別して見る必要がある。",
    "sources": [
      {
        "label": "Jamaica Information Service",
        "url": "https://jis.gov.jm/"
      }
    ]
  },
  {
    "id": "singapore-independence",
    "country": "シンガポール",
    "countryEn": "Singapore",
    "date": "08-09",
    "name": "独立記念日",
    "nameEn": "National Day",
    "category": "独立",
    "year": 1965,
    "status": "official",
    "official": true,
    "origin": "1965年8月9日、シンガポールはマレーシアから分離して独立国家となった。これは植民地支配からの独立とは異なる国家成立の経路である。",
    "sources": [
      {
        "label": "シンガポール国立図書館：歴史",
        "url": "https://www.nlb.gov.sg/main/home"
      }
    ]
  },
  {
    "id": "pakistan-independence",
    "country": "パキスタン",
    "countryEn": "Pakistan",
    "date": "08-14",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1947,
    "status": "official",
    "official": true,
    "origin": "1947年にパキスタンが独立したことを記念する。インドの独立記念日とは日付が異なる。",
    "sources": [
      {
        "label": "パキスタン政府",
        "url": "https://pakistan.gov.pk/"
      }
    ]
  },
  {
    "id": "india-independence",
    "country": "インド",
    "countryEn": "India",
    "date": "08-15",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1947,
    "status": "official",
    "official": true,
    "origin": "1947年8月15日にイギリスの植民地支配から独立したことを記念する。",
    "sources": [
      {
        "label": "インド政府 National Portal",
        "url": "https://knowindia.india.gov.in/national-identity-elements/national-days.php"
      }
    ]
  },
  {
    "id": "bahrain-independence",
    "country": "バーレーン",
    "countryEn": "Bahrain",
    "date": "08-15",
    "name": "独立の歴史的節目",
    "nameEn": "Independence",
    "category": "独立",
    "year": 1971,
    "status": "historical",
    "official": false,
    "origin": "バーレーンは1971年にイギリスから独立した。8月15日は独立日として歴史資料に見られる一方、現在の国民の日は別の日付で祝われるため、公式祝日と歴史的日付を混同しないこと。",
    "sources": [
      {
        "label": "バーレーン政府ポータル",
        "url": "https://www.bahrain.bh/"
      }
    ]
  },
  {
    "id": "south-korea-republic",
    "country": "韓国",
    "countryEn": "Republic of Korea",
    "date": "08-15",
    "name": "大韓民国政府樹立",
    "nameEn": "Establishment of the Republic of Korea",
    "category": "共和国成立",
    "year": 1948,
    "status": "historical",
    "official": false,
    "origin": "1948年8月15日に大韓民国政府が樹立された。同日は日本の植民地支配からの解放を記念する日でもあるが、解放と政府樹立は異なる出来事である。",
    "sources": [
      {
        "label": "韓国国家記録院",
        "url": "https://www.archives.go.kr/english/"
      }
    ]
  },
  {
    "id": "indonesia-independence",
    "country": "インドネシア",
    "countryEn": "Indonesia",
    "date": "08-17",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1945,
    "status": "official",
    "official": true,
    "origin": "1945年8月17日の独立宣言を記念する。独立の承認・主権移譲の過程とは区別する。",
    "sources": [
      {
        "label": "インドネシア外務省",
        "url": "https://kemlu.go.id/"
      }
    ]
  },
  {
    "id": "ukraine-independence",
    "country": "ウクライナ",
    "countryEn": "Ukraine",
    "date": "08-24",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1991,
    "status": "official",
    "official": true,
    "origin": "1991年8月24日、ウクライナ最高会議が独立を宣言した。12月の国民投票で独立への支持が確認された。",
    "sources": [
      {
        "label": "ウクライナ政府",
        "url": "https://www.kmu.gov.ua/en"
      }
    ]
  },
  {
    "id": "vietnam-independence",
    "country": "ベトナム",
    "countryEn": "Vietnam",
    "date": "09-02",
    "name": "独立宣言記念日",
    "nameEn": "National Day",
    "category": "独立",
    "year": 1945,
    "status": "official",
    "official": true,
    "origin": "1945年9月2日、ホー・チ・ミンがベトナム民主共和国の独立を宣言した。その後も植民地支配と分断をめぐる戦争が続いた。",
    "sources": [
      {
        "label": "ベトナム政府ポータル",
        "url": "https://en.baochinhphu.vn/"
      }
    ]
  },
  {
    "id": "qatar-independence",
    "country": "カタール",
    "countryEn": "Qatar",
    "date": "09-03",
    "name": "独立記念日（歴史的節目）",
    "nameEn": "Independence",
    "category": "独立",
    "year": 1971,
    "status": "historical",
    "official": false,
    "origin": "カタールは1971年9月3日にイギリスから独立した。現在の国民の日は別の日付を国家形成の歴史と結びつけて記念している。",
    "sources": [
      {
        "label": "カタール政府ポータル",
        "url": "https://www.gov.qa/"
      }
    ]
  },
  {
    "id": "brazil-independence",
    "country": "ブラジル",
    "countryEn": "Brazil",
    "date": "09-07",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1822,
    "status": "official",
    "official": true,
    "origin": "1822年9月7日、摂政としてブラジルにいたペドロがポルトガルからの独立を宣言した。独立後も君主制が続き、共和国成立は1889年である。",
    "sources": [
      {
        "label": "ブラジル政府ポータル",
        "url": "https://www.gov.br/planalto/pt-br"
      }
    ]
  },
  {
    "id": "malaysia-formation",
    "country": "マレーシア",
    "countryEn": "Malaysia",
    "date": "09-16",
    "name": "マレーシア成立記念日",
    "nameEn": "Malaysia Day",
    "category": "建国・国家成立",
    "year": 1963,
    "status": "official",
    "official": true,
    "origin": "1963年9月16日、マラヤ連邦、サバ、サラワク、シンガポールによるマレーシア連邦が成立した。シンガポールは1965年に分離した。",
    "sources": [
      {
        "label": "マレーシア政府",
        "url": "https://www.malaysia.gov.my/"
      }
    ]
  },
  {
    "id": "mexico-independence",
    "country": "メキシコ",
    "countryEn": "Mexico",
    "date": "09-16",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1810,
    "status": "official",
    "official": true,
    "origin": "1810年9月16日の独立運動の開始（ドロレスの叫び）に由来する。独立が完成した1821年とは異なる。",
    "sources": [
      {
        "label": "メキシコ政府",
        "url": "https://www.gob.mx/"
      }
    ]
  },
  {
    "id": "chile-independence",
    "country": "チリ",
    "countryEn": "Chile",
    "date": "09-18",
    "name": "第一次政府評議会記念日",
    "nameEn": "Fiestas Patrias",
    "category": "その他の国家的節目",
    "year": 1810,
    "status": "official",
    "official": true,
    "origin": "1810年9月18日に自治的な政府評議会が設置されたことを記念する。チリの独立宣言は1818年であり、9月18日は独立宣言の日付ではない。",
    "sources": [
      {
        "label": "チリ国立図書館",
        "url": "https://www.memoriachilena.gob.cl/"
      }
    ]
  },
  {
    "id": "botswana-independence",
    "country": "ボツワナ",
    "countryEn": "Botswana",
    "date": "09-30",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1966,
    "status": "official",
    "official": true,
    "origin": "1966年9月30日、ベチュアナランド保護領はボツワナとして独立した。",
    "sources": [
      {
        "label": "ボツワナ政府",
        "url": "https://www.gov.bw/"
      }
    ]
  },
  {
    "id": "cyprus-independence",
    "country": "キプロス",
    "countryEn": "Cyprus",
    "date": "10-01",
    "name": "独立記念日",
    "nameEn": "Cyprus Independence Day",
    "category": "独立",
    "year": 1960,
    "status": "official",
    "official": true,
    "origin": "1960年にキプロスが独立したことを記念する。",
    "sources": [
      {
        "label": "キプロス政府",
        "url": "https://www.gov.cy/"
      }
    ]
  },
  {
    "id": "nigeria-independence",
    "country": "ナイジェリア",
    "countryEn": "Nigeria",
    "date": "10-01",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1960,
    "status": "official",
    "official": true,
    "origin": "1960年10月1日にイギリスから独立したことを記念する。",
    "sources": [
      {
        "label": "ナイジェリア政府",
        "url": "https://statehouse.gov.ng/"
      }
    ]
  },
  {
    "id": "nigeria-republic",
    "country": "ナイジェリア",
    "countryEn": "Nigeria",
    "date": "10-01",
    "name": "共和国成立記念日",
    "nameEn": "Republic Day",
    "category": "共和国成立",
    "year": 1963,
    "status": "historical",
    "official": false,
    "origin": "ナイジェリアは1960年に独立し、1963年10月1日に君主制との憲法上の結びつきを終えて共和国となった。独立と共和国成立は別の節目である。",
    "sources": [
      {
        "label": "ナイジェリア政府",
        "url": "https://statehouse.gov.ng/"
      }
    ]
  },
  {
    "id": "china-national",
    "country": "中国",
    "countryEn": "China",
    "date": "10-01",
    "name": "国慶節（中華人民共和国成立記念日）",
    "nameEn": "National Day of the People's Republic of China",
    "category": "建国・国家成立",
    "year": 1949,
    "status": "official",
    "official": true,
    "origin": "1949年10月1日に中華人民共和国の成立が宣言されたことを記念する。",
    "sources": [
      {
        "label": "中国政府ポータル",
        "url": "https://english.www.gov.cn/"
      }
    ]
  },
  {
    "id": "china-republic",
    "country": "中国（中華人民共和国）",
    "countryEn": "China (People’s Republic)",
    "date": "10-01",
    "name": "中華人民共和国成立",
    "nameEn": "Founding of the People’s Republic of China",
    "category": "建国・国家成立",
    "year": 1949,
    "status": "official",
    "official": true,
    "origin": "1949年10月1日、北京で中華人民共和国の成立が宣言された。これは現政権の成立を示す日付であり、中国の長い歴史全体の始まりという意味ではない。",
    "sources": [
      {
        "label": "中国政府ポータル",
        "url": "https://english.www.gov.cn/"
      }
    ]
  },
  {
    "id": "germany-unity",
    "country": "ドイツ",
    "countryEn": "Germany",
    "date": "10-03",
    "name": "ドイツ統一の日",
    "nameEn": "German Unity Day",
    "category": "統一",
    "year": 1990,
    "status": "official",
    "official": true,
    "origin": "1990年10月3日のドイツ再統一を記念する。",
    "sources": [
      {
        "label": "ドイツ連邦政府",
        "url": "https://www.bundesregierung.de/breg-en"
      }
    ]
  },
  {
    "id": "zambia-independence",
    "country": "ザンビア",
    "countryEn": "Zambia",
    "date": "10-24",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1964,
    "status": "official",
    "official": true,
    "origin": "1964年10月24日、北ローデシアはザンビアとして独立した。",
    "sources": [
      {
        "label": "ザンビア政府",
        "url": "https://www.gov.zm/"
      }
    ]
  },
  {
    "id": "austria-national",
    "country": "オーストリア",
    "countryEn": "Austria",
    "date": "10-26",
    "name": "国民の日",
    "nameEn": "Austrian National Day",
    "category": "その他の国家的節目",
    "year": 1955,
    "status": "official",
    "official": true,
    "origin": "1955年10月26日に永世中立を宣言したことに結びつく国民の日。国家の建国日とは異なる。",
    "sources": [
      {
        "label": "オーストリア政府",
        "url": "https://www.oesterreich.gv.at/"
      }
    ]
  },
  {
    "id": "czechia-statehood",
    "country": "チェコ",
    "countryEn": "Czechia",
    "date": "10-28",
    "name": "独立国家成立記念日",
    "nameEn": "Independent Czechoslovak State Day",
    "category": "建国・国家成立",
    "year": 1918,
    "status": "historical",
    "official": false,
    "origin": "1918年10月28日、第一次世界大戦末期にチェコスロバキアの独立国家成立が宣言された。1993年にはチェコとスロバキアに平和的に分離した。",
    "sources": [
      {
        "label": "チェコ外務省",
        "url": "https://mzv.gov.cz/jnp/en/index.html"
      }
    ]
  },
  {
    "id": "turkey-republic",
    "country": "トルコ",
    "countryEn": "Türkiye",
    "date": "10-29",
    "name": "共和国記念日",
    "nameEn": "Republic Day",
    "category": "共和国成立",
    "year": 1923,
    "status": "official",
    "official": true,
    "origin": "1923年10月29日にトルコ共和国が宣言されたことを記念する。",
    "sources": [
      {
        "label": "トルコ外務省",
        "url": "https://www.mfa.gov.tr/"
      }
    ]
  },
  {
    "id": "algeria-revolution",
    "country": "アルジェリア",
    "countryEn": "Algeria",
    "date": "11-01",
    "name": "革命記念日",
    "nameEn": "Anniversary of the Revolution",
    "category": "独立",
    "year": 1954,
    "status": "official",
    "official": true,
    "origin": "1954年11月1日に始まったアルジェリア独立革命を記念する。独立達成の1962年とは異なる。",
    "sources": [
      {
        "label": "アルジェリア外務省",
        "url": "https://www.mfa.gov.dz/"
      }
    ]
  },
  {
    "id": "panama-independence",
    "country": "パナマ",
    "countryEn": "Panama",
    "date": "11-03",
    "name": "独立記念日",
    "nameEn": "Separation Day",
    "category": "独立",
    "year": 1903,
    "status": "official",
    "official": true,
    "origin": "1903年にパナマがコロンビアから分離したことを記念する。スペインからの独立（1821年）とは別の日。",
    "sources": [
      {
        "label": "パナマ政府",
        "url": "https://www.presidencia.gob.pa/"
      }
    ]
  },
  {
    "id": "angola-independence",
    "country": "アンゴラ",
    "countryEn": "Angola",
    "date": "11-11",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1975,
    "status": "official",
    "official": true,
    "origin": "1975年11月11日、アンゴラはポルトガルから独立を宣言した。独立後には複数勢力間の内戦が続き、独立と安定した国家形成は同じではなかった。",
    "sources": [
      {
        "label": "アンゴラ政府",
        "url": "https://governo.gov.ao/"
      }
    ]
  },
  {
    "id": "poland-independence",
    "country": "ポーランド",
    "countryEn": "Poland",
    "date": "11-11",
    "name": "独立回復記念日",
    "nameEn": "National Independence Day",
    "category": "独立",
    "year": 1918,
    "status": "official",
    "official": true,
    "origin": "第一次世界大戦末期の1918年、ポーランドは分割支配を経て独立を回復した。11月11日は国家再建の象徴的な日として記念される。",
    "sources": [
      {
        "label": "ポーランド政府",
        "url": "https://www.gov.pl/web/primeminister"
      }
    ]
  },
  {
    "id": "latvia-independence",
    "country": "ラトビア",
    "countryEn": "Latvia",
    "date": "11-18",
    "name": "独立宣言記念日",
    "nameEn": "Proclamation Day of the Republic of Latvia",
    "category": "独立",
    "year": 1918,
    "status": "official",
    "official": true,
    "origin": "1918年11月18日にラトビア共和国の独立が宣言されたことを記念する。",
    "sources": [
      {
        "label": "ラトビア政府",
        "url": "https://www.mk.gov.lv/en"
      }
    ]
  },
  {
    "id": "lebanon-independence",
    "country": "レバノン",
    "countryEn": "Lebanon",
    "date": "11-22",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1943,
    "status": "official",
    "official": true,
    "origin": "1943年にフランス委任統治からの独立を達成したことを記念する。",
    "sources": [
      {
        "label": "レバノン大統領府",
        "url": "https://www.presidency.gov.lb/"
      }
    ]
  },
  {
    "id": "romania-unification",
    "country": "ルーマニア",
    "countryEn": "Romania",
    "date": "12-01",
    "name": "国民の日（大統一記念日）",
    "nameEn": "Great Union Day",
    "category": "統一",
    "year": 1918,
    "status": "official",
    "official": true,
    "origin": "1918年12月1日のトランシルヴァニアとルーマニアの統合に由来する。",
    "sources": [
      {
        "label": "ルーマニア政府",
        "url": "https://gov.ro/en"
      }
    ]
  },
  {
    "id": "romania-union",
    "country": "ルーマニア",
    "countryEn": "Romania",
    "date": "12-01",
    "name": "国民の日（大統一記念日）",
    "nameEn": "Great Union Day",
    "category": "統一",
    "year": 1918,
    "status": "official",
    "official": true,
    "origin": "1918年12月1日、トランシルヴァニアの代表者会議がルーマニアとの統合を宣言した。現在の国民の日はこの統一過程を記念する。",
    "sources": [
      {
        "label": "ルーマニア政府",
        "url": "https://gov.ro/en"
      }
    ]
  },
  {
    "id": "uae-formation",
    "country": "アラブ首長国連邦",
    "countryEn": "United Arab Emirates",
    "date": "12-02",
    "name": "連邦成立記念日",
    "nameEn": "National Day",
    "category": "建国・国家成立",
    "year": 1971,
    "status": "official",
    "official": true,
    "origin": "1971年12月2日、6首長国が連邦を結成し、翌年にラス・アル・ハイマが加わった。",
    "sources": [
      {
        "label": "UAE政府ポータル",
        "url": "https://u.ae/en/about-the-uae"
      }
    ]
  },
  {
    "id": "finland-independence",
    "country": "フィンランド",
    "countryEn": "Finland",
    "date": "12-06",
    "name": "独立記念日",
    "nameEn": "Independence Day",
    "category": "独立",
    "year": 1917,
    "status": "official",
    "official": true,
    "origin": "1917年12月6日にフィンランド議会が独立宣言を採択したことを記念する。",
    "sources": [
      {
        "label": "フィンランド政府",
        "url": "https://valtioneuvosto.fi/en"
      }
    ]
  },
  {
    "id": "kenya-independence",
    "country": "ケニア",
    "countryEn": "Kenya",
    "date": "12-12",
    "name": "ジャムフリ・デー（独立・共和国記念日）",
    "nameEn": "Jamhuri Day",
    "category": "独立",
    "year": 1963,
    "status": "official",
    "official": true,
    "origin": "1963年の独立と、1964年の共和国成立の双方を記念する。",
    "sources": [
      {
        "label": "ケニア政府",
        "url": "https://www.president.go.ke/"
      }
    ]
  },
  {
    "id": "bangladesh-victory",
    "country": "バングラデシュ",
    "countryEn": "Bangladesh",
    "date": "12-16",
    "name": "戦勝記念日",
    "nameEn": "Victory Day",
    "category": "独立",
    "year": 1971,
    "status": "official",
    "official": true,
    "origin": "1971年にバングラデシュ解放戦争で勝利したことを記念する。独立宣言の3月26日とは区別する。",
    "sources": [
      {
        "label": "バングラデシュ政府",
        "url": "https://bangladesh.gov.bd/"
      }
    ]
  },
  {
    "id": "mongolia-independence",
    "country": "モンゴル",
    "countryEn": "Mongolia",
    "date": "12-29",
    "name": "独立回復の節目",
    "nameEn": "Restoration of Independence",
    "category": "独立",
    "year": 1911,
    "status": "historical",
    "official": false,
    "origin": "1911年、清朝の崩壊過程で外モンゴルは独立を宣言した。国際的な承認と実効的な主権の確立は段階的に進んだため、単一の日付で現代国家の成立を説明するには注意が必要。",
    "sources": [
      {
        "label": "Encyclopaedia Britannica: Mongolia",
        "url": "https://www.britannica.com/place/Mongolia"
      }
    ]
  }
];
