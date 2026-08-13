const fs = require('fs');

// Read data.js
let rawCode = fs.readFileSync('data.js', 'utf8');
global.learningData = null;
eval(rawCode.replace('const learningData', 'global.learningData'));
const ld = global.learningData;

console.log("Loaded existing weeks:", Object.keys(ld.weeks));

// Primary Sources
const newSources = [
  {
    id: "greek_declaration_1822",
    sourceUrl: "https://declarationproject.org/?p=1592",
    week: 8,
    title: { tr: "Yunan Bağımsızlık Bildirgesi (15 Ocak 1822)", en: "Greek Declaration of Independence (January 15, 1822)" },
    author: { tr: "Birinci Ulusal Meclis (Epidavros)", en: "First National Assembly at Epidaurus" },
    date: "1822",
    summary: { tr: "Osmanlı yönetimine karşı meşru bağımsızlık hakkını ve Hristiyan Yunan ulusunun egemenliğini ilan eden tarihi bildirge.", en: "Foundational document declaring legitimate national sovereignty and independence of the Greek nation from Ottoman rule." },
    formattedHtml: {
      tr: "<div class=\"doc-body-text\"><p><strong>KAYNAK:</strong> Hafta 8 — Yunan Bağımsızlık Bildirgesi (15 Ocak 1822)</p><p>Yunan ulusu adına toplanan Epidavros Birinci Ulusal Meclisi, dört asırlık korkunç Osmanlı boyunduruğunun ardından ulusal özgürlüğünü, dini hürriyetini ve siyasi varlığını tüm medeni dünyaya ilan eder.</p></div>",
      en: "<div class=\"doc-body-text\"><p><strong>SOURCE:</strong> Week 8 — Greek Declaration of Independence (January 15, 1822)</p><p>The Greek Nation, assembled in the First National Assembly of Epidaurus, proclaims before God and men its political existence and independence from the Ottoman Empire.</p></div>"
    },
    topic: { tr: "Balkanlar & Doğu Sorunu", en: "Balkans & Eastern Question" },
    localTxt: "week8_declaration.txt"
  },
  {
    id: "mazower_balkans",
    "sourceUrl": "https://declarationproject.org/?p=1592",
    week: 8,
    title: { tr: "Mark Mazower — Balkanlar: Kısa Bir Tarih (2000)", en: "Mark Mazower — The Balkans: A Short History (2000)" },
    author: { tr: "Mark Mazower (Tarihçi)", en: "Mark Mazower (Historian)" },
    date: "2000",
    summary: { tr: "Balkanlar'da din eksenli toplumsal yapının ulus-devletleşme sürecinde etnikleşmesini ve Batılı güçlerin Doğu Sorunu müdahalesini inceleyen historiografik çalışma.", en: "Historiographical analysis examining how religious communities in the Balkans were transformed into exclusive ethnic nationalisms." },
    formattedHtml: {
      tr: "<div class=\"doc-body-text\"><p>Balkanlar'da uluslaşma süreci, cemaat yapılarının parçalanması ve Avrupalı güçlerin şarkiyatçı bakış açısıyla şekillenmiştir.</p></div>",
      en: "<div class=\"doc-body-text\"><p>Nationalism in the Balkans replaced multi-religious coexistence with rigid ethnic boundaries.</p></div>"
    },
    topic: { tr: "Balkanlar & Doğu Sorunu", en: "Balkans & Eastern Question" }
  },
  {
    id: "kennedy_rise_fall_1987",
    sourceUrl: "https://cheirif.wordpress.com/wp-content/uploads/2015/08/paul-kennedy-the-rise-and-fall-of-the-great-powers-19891.pdf",
    week: 9,
    title: { tr: "Paul Kennedy — Büyük Güçlerin Yükselişi ve Çöküşü (1987)", en: "Paul Kennedy — The Rise and Fall of the Great Powers (1987)" },
    author: { tr: "Paul Kennedy (Tarihçi)", en: "Paul Kennedy (Historian)" },
    date: "1987",
    summary: { tr: "Sanayileşmenin küresel güç dengelerini, askeri kapasiteyi ve Avrupalı imparatorlukların iktisadi üstünlüğünü nasıl dönüştürdüğünü analiz eden temel yapıt.", en: "Landmark historical study analyzing how the Industrial Revolution reshaped military power, wealth concentration, and global hegemony." },
    formattedHtml: {
      tr: "<div class=\"doc-body-text\"><p>Sanayi Devrimi, küresel güç dengesinde sanayileşen Avrupa devletlerini görülmemiş bir askeri ve ekonomik üstünlüğe taşımıştır.</p></div>",
      en: "<div class=\"doc-body-text\"><p>Industrialization created an unprecedented gap in military and economic power between Europe and the rest of the world.</p></div>"
    },
    topic: { tr: "Sanayi Devrimi & İktisat", en: "Industrial Revolution & Economy" }
  },
  {
    id: "engels_condition_working_class_1845",
    sourceUrl: "https://www.marxists.org/archive/marx/works/download/pdf/condition-working-class-england.pdf",
    week: 10,
    title: { tr: "Friedrich Engels — İngiltere'de Emekçi Sınıfın Durumu (1845)", en: "Friedrich Engels — The Condition of the Working Class in England (1845)" },
    author: { tr: "Friedrich Engels", en: "Friedrich Engels" },
    date: "1845",
    summary: { tr: "Manchester sanayi işçilerinin ağır yaşam koşullarını, çocuk işçiliğini ve kapitalist sömürüyü belgeleyen ilk elden sosyolojik inceleme.", en: "Classic firsthand account exposing the grim living conditions, child labor, and social exploitation of industrial workers in Manchester." },
    formattedHtml: {
      tr: "<div class=\"doc-body-text\"><p>Manchester ve etrafındaki sanayi kentlerinde işçi sınıfı, sefalet, hava kirliliği ve salgın hastalıklar arasında yaşam mücadelesi vermektedir.</p></div>",
      en: "<div class=\"doc-body-text\"><p>The industrial proletariat in Manchester endures severe poverty, toxic factory conditions, and total lack of healthcare.</p></div>"
    },
    topic: { tr: "İşçi Hareketi & Komün", en: "Labor Movement & Commune" }
  },
  {
    id: "fahmy_pashas_men_1997",
    sourceUrl: "https://archive.org/details/allpashasmenmehm0000fahm/page/n7/mode/2up",
    week: 11,
    title: { tr: "Khaled Fahmy — Paşa'nın Adamları: Mehmet Ali ve Mısır'ın Ordu Reformu (1997)", en: "Khaled Fahmy — All the Pasha's Men: Mehmed Ali, His Army and Modern Egypt (1997)" },
    author: { tr: "Khaled Fahmy (Tarihçi)", en: "Khaled Fahmy (Historian)" },
    date: "1997",
    summary: { tr: "Mehmet Ali Paşa'nın zorunlu askerlik ve bürokrasi yoluyla Mısır'da kurduğu modern devlet mekanizmasını ve fellahların tepkilerini inceleyen revizyonist çalışma.", en: "Revisionist study analyzing how Muhammad Ali Pasha used military conscription, medical surveillance, and state bureaucracy to construct modern Egypt." },
    formattedHtml: {
      tr: "<div class=\"doc-body-text\"><p>Mehmet Ali Paşa'nın reformlarının merkezinde ulusal bir ideal değil, ordunun ve hanehalkı iktidarının sürdürülebilirliği yatıyordu.</p></div>",
      en: "<div class=\"doc-body-text\"><p>Mehmed Ali's military reforms were designed to build a centralized dynastic state powered by forced conscription of Egyptian fellahin.</p></div>"
    },
    topic: { tr: "Mısır Modernleşmesi", en: "Egypt Modernization" }
  },
  {
    id: "jules_ferry_1884",
    sourceUrl: "https://sourcebooks.fordham.edu/mod/1884ferry.asp",
    week: 12,
    title: { tr: "Jules Ferry — Fransız Temsilciler Meclisi Konuşması (28 Mart 1884)", en: "Jules Ferry — Speech Before the French Chamber of Deputies (March 28, 1884)" },
    author: { tr: "Jules Ferry (Fransa Başbakanı)", en: "Jules Ferry (Prime Minister of France)" },
    date: "1884",
    summary: { tr: "Üstün ırkların aşağı ırkları medenileştirme hakkı ve görevi olduğunu iddia eden emperyalist söylevin klasik belgesi.", en: "Famous speech articulating the French 'civilizing mission' rhetoric and economic justifications for imperial colonial expansion." },
    formattedHtml: {
      tr: "<div class=\"doc-body-text\"><p>Üstün ırkların aşağı ırk üzerinde hakları vardır; çünkü onları medenileştirme görevleri vardır.</p></div>",
      en: "<div class=\"doc-body-text\"><p>Higher races have a right over lower races because they have a duty to civilize them.</p></div>"
    },
    topic: { tr: "Yeni Emperyalizm", en: "New Imperialism" }
  },
  {
    id: "berlin_conference_1885",
    sourceUrl: "https://loveman.sdsu.edu/docs/1885GeneralActBerlinConference.pdf",
    week: 12,
    title: { tr: "Berlin Konferansı Genel Senedi (26 Şubat 1885)", en: "General Act of the Berlin Conference (February 26, 1885)" },
    author: { tr: "Avrupalı Büyük Güçler", en: "European Great Powers" },
    date: "1885",
    summary: { tr: "Afrika kıtasının Avrupalı devletler arasında paylaşılması, Kongo serbest ticareti ve fiili işgal kuralını belirleyen diplomatik anlaşma.", en: "Diplomatic treaty establishing rules for the Scramble for Africa, Congo free trade zone, and effective occupation principle." },
    formattedHtml: {
      tr: "<div class=\"doc-body-text\"><p>Afrika sahillerinde yeni bir yer işgal eden devlet, diğer imzacı devletlere bildirimde bulunmak zorundadır.</p></div>",
      en: "<div class=\"doc-body-text\"><p>Any power taking possession of African coastal land must notify other signatory powers to establish effective possession.</p></div>"
    },
    topic: { tr: "Yeni Emperyalizm", en: "New Imperialism" }
  }
];

newSources.forEach(s => {
  if (!ld.primarySources.find(ex => ex.id === s.id)) {
    ld.primarySources.push(s);
  }
});

// Map Markers
const newMarkers = {
  "athens": { coords: [37.9838, 23.7275], label: { en: "Athens", tr: "Atina" }, placement: "top" },
  "peloponnesus": { coords: [37.5, 22.3], label: { en: "Peloponnese (Morea)", tr: "Mora Yarımadası" }, placement: "top", isRegion: true },
  "chios": { coords: [38.3683, 26.1358], label: { en: "Chios Island", tr: "Sakız Adası" }, placement: "right" },
  "missolonghi": { coords: [38.3683, 21.4319], label: { en: "Missolonghi", tr: "Missolonghi" }, placement: "top" },
  "navarino": { coords: [36.9133, 21.6967], label: { en: "Navarino Bay", tr: "Navarin Limanı" }, placement: "bottom" },
  "odessa": { coords: [46.4825, 30.7233], label: { en: "Odessa (Philiki HQ)", tr: "Odessa (Filiki Eterya)" }, placement: "top" },
  "kucuk_kaynarca": { coords: [43.9833, 27.5167], label: { en: "Küçük Kaynarca", tr: "Küçük Kaynarca" }, placement: "left" },
  "manchester": { coords: [53.4808, -2.2426], label: { en: "Manchester (Cottonopolis)", tr: "Manchester (Sanayi Merkezi)" }, placement: "top" },
  "london_city": { coords: [51.5127, -0.0918], label: { en: "London (Finance & Empire)", tr: "Londra Finans Merkezi" }, placement: "top" },
  "ruhr_valley": { coords: [51.4556, 7.0116], label: { en: "Ruhr Valley Industrial Zone", tr: "Ruhr Sanayi Bölgesi" }, placement: "top" },
  "birmingham": { coords: [52.4862, -1.8904], label: { en: "Birmingham", tr: "Birmingham" }, placement: "left" },
  "paris_urban": { coords: [48.8566, 2.3522], label: { en: "Paris", tr: "Paris" }, placement: "top" },
  "montmartre": { coords: [48.8867, 2.3431], label: { en: "Montmartre Cannon Outpost", tr: "Montmartre Tepesi" }, placement: "top" },
  "hotel_de_ville_paris": { coords: [48.8564, 2.3524], label: { en: "Hôtel de Ville (Commune HQ)", tr: "Hôtel de Ville (Komün Karargahı)" }, placement: "bottom" },
  "vendome_column": { coords: [48.8675, 2.3294], label: { en: "Place Vendôme Column", tr: "Place Vendôme Sütunu" }, placement: "left" },
  "perelachaise": { coords: [48.8614, 2.3942], label: { en: "Père Lachaise (Mur des Fédérés)", tr: "Père Lachaise (Komünarlar Duvarı)" }, placement: "right" },
  "cairo_citadel": { coords: [30.0299, 31.2611], label: { en: "Cairo Citadel", tr: "Kahire Kalesi" }, placement: "top" },
  "alexandria_port": { coords: [31.2001, 29.9187], label: { en: "Alexandria Port", tr: "İskenderiye Limanı" }, placement: "left" },
  "aswan_school": { coords: [24.0889, 32.8998], label: { en: "Aswan Military Academy", tr: "Aswan Askeri Okulu" }, placement: "right" },
  "suez_canal": { coords: [30.5852, 32.2654], label: { en: "Suez Canal Zone", tr: "Süveyş Kanalı Bölgesi" }, placement: "right" },
  "kutahya": { coords: [39.4167, 29.9833], label: { en: "Kütahya (Egyptian Advance)", tr: "Kütahya (Mısır İlerleyişi)" }, placement: "top" },
  "nezib": { coords: [37.0167, 37.7833], label: { en: "Battle of Nezib (1839)", tr: "Nizip Savaşı (1839)" }, placement: "top" },
  "beirut_port": { coords: [33.8938, 35.5018], label: { en: "Beirut Naval Landing", tr: "Beyrut Çıkarması" }, placement: "right" },
  "tel_el_kebir": { coords: [30.5500, 31.9333], label: { en: "Battle of Tel el-Kebir (1882)", tr: "Tell el-Kebir Savaşı (1882)" }, placement: "bottom" },
  "berlin_reichstag": { coords: [52.5186, 13.3761], label: { en: "Berlin Conference (1884-85)", tr: "Berlin Konferansı Binası" }, placement: "top" },
  "fashoda": { coords: [9.8833, 32.1167], label: { en: "Fashoda (Anglo-French Crisis)", tr: "Faşoda (İngiliz-Fransız Krizi)" }, placement: "right" },
  "rhodesia_harare": { coords: [-17.8252, 31.0335], label: { en: "Rhodesia (De Beers Base)", tr: "Rodezya (De Beers Madenleri)" }, placement: "left" },
  "swakopmund_herero": { coords: [-22.6783, 14.5269], label: { en: "German South West Africa (Herero Genocide)", tr: "Alman Güneybatı Afrika (Herero Soykırımı)" }, placement: "left" },
  "boer_transvaal": { coords: [-25.7479, 28.2293], label: { en: "Transvaal Boer Concentration Camps", tr: "Transvaal Boer Toplama Kampları" }, placement: "right" },
  "khartoum_sudan": { coords: [15.5007, 32.5599], label: { en: "Khartoum (Gordon Siege)", tr: "Hartum (General Gordon Kuşatması)" }, placement: "top" }
};
Object.assign(ld.map.markers, newMarkers);

// Map Routes
const newRoutes = {
  "philiki_route": { label: { en: "Philiki Etaireia Underground Network", tr: "Filiki Eterya Gizli Ağ Hattı" }, path: [[46.4825, 30.7233], [43.9833, 27.5167], [41.0082, 28.9784], [37.9838, 23.7275]], color: "#ea580c" },
  "ibrahim_greek_expedition": { label: { en: "Ibrahim Pasha's Expedition to Morea", tr: "İbrahim Paşa'nın Mora Seferi" }, path: [[31.2001, 29.9187], [35.5, 24.0], [36.9133, 21.6967]], color: "#dc2626" },
  "navarino_allied_route": { label: { en: "Allied Fleet Entry to Navarino Bay", tr: "Müttefik Donanmasının Navarin İlerleyişi" }, path: [[38.3683, 21.4319], [36.9133, 21.6967]], color: "#2563eb" },
  "first_railway_uk": { label: { en: "Liverpool & Manchester Railway Line (1830)", tr: "Liverpool-Manchester Demiryolu (1830)" }, path: [[53.4084, -2.9916], [53.4808, -2.2426]], color: "#0284c7" },
  "prussian_siege_paris": { label: { en: "Prussian Siege & Encirclement of Paris (1870)", tr: "Prusya Ordusunun Paris Kuşatması" }, path: [[49.2583, 4.0317], [48.8566, 2.3522]], color: "#475569" },
  "versailles_army_advance": { label: { en: "Versailles Army Suppression Advance into Paris", tr: "Versay Ordusunun Paris'e Saldırı Hattı" }, path: [[48.8049, 2.1301], [48.8564, 2.3524]], color: "#dc2626" },
  "mehmet_ali_syrian_expedition": { label: { en: "Egyptian Conquest Route of Greater Syria to Anatolia", tr: "Mısır Ordusunun Suriye ve Anadolu Seferi" }, path: [[30.0299, 31.2611], [31.7683, 35.2137], [33.5138, 36.2765], [37.0167, 37.7833], [39.4167, 29.9833]], color: "#059669" },
  "suez_canal_route": { label: { en: "Suez Maritime Transit Route", tr: "Süveyş Deniz Geçiş Yolu" }, path: [[31.2565, 32.2841], [30.5852, 32.2654], [29.9668, 32.5498]], color: "#0284c7" },
  "british_1882_invasion": { label: { en: "British Military Invasion of Egypt (1882)", tr: "1882 İngiliz Mısır İşgal Hattı" }, path: [[31.2001, 29.9187], [30.5500, 31.9333], [30.0299, 31.2611]], color: "#b91c1c" },
  "scramble_africa_lines": { label: { en: "Imperial Axis of Scramble for Africa", tr: "Afrika Talanı Emperyalist Yayılma Ekseni" }, path: [[52.5186, 13.3761], [9.8833, 32.1167], [-17.8252, 31.0335]], color: "#7e22ce" },
  "rhodes_cape_cairo_vision": { label: { en: "Cecil Rhodes' Cape to Cairo Project Line", tr: "Cecil Rhodes Kahire-Kap Demiryolu Projesi" }, path: [[-33.9249, 18.4241], [-17.8252, 31.0335], [15.5007, 32.5599], [30.0299, 31.2611]], color: "#d97706" }
};
Object.assign(ld.map.routes, newRoutes);

// Helper function to build quiz array
function createQuiz(wNum, topicsTR, topicsEN) {
  const quiz = [];
  for (let i = 1; i <= 20; i++) {
    const tTR = topicsTR[(i - 1) % topicsTR.length];
    const tEN = topicsEN[(i - 1) % topicsEN.length];
    quiz.push({
      question: {
        tr: `Hafta ${wNum} Soru ${i}: ${tTR.q}`,
        en: `Week ${wNum} Q${i}: ${tEN.q}`
      },
      options: [
        { text: { tr: tTR.a, en: tEN.a }, correct: true },
        { text: { tr: tTR.b, en: tEN.b }, correct: false },
        { text: { tr: tTR.c, en: tEN.c }, correct: false },
        { text: { tr: tTR.d, en: tEN.d }, correct: false }
      ],
      explanation: {
        tr: tTR.exp,
        en: tEN.exp
      }
    });
  }
  return quiz;
}

// --- WEEK 8 ---
ld.weeks["8"] = {
  id: "8",
  themeColor: "#ea580c",
  title: { tr: "Doğu Sorunu ve Yunanistan Bağımsızlık Hareketi", en: "The Eastern Question & Greek National Liberation" },
  video: { src: "https://drive.google.com/file/d/1y9JMjselukGWTnJiIqU-swfdMP06Y6Cr/view?usp=sharing", desc: { tr: "Doğu Sorunu, Küçük Kaynarca Antlaşması ve 1821 Yunan Devrimi.", en: "The Eastern Question, Treaty of Küçük Kaynarca, and the 1821 Greek Revolution." } },
  slides: [
    { title: { tr: "1. Doğu Sorunu ve Napolyon Sonrası Avrupa", en: "1. The Eastern Question & Post-Napoleonic Europe" }, text: { tr: "Fransız Devrim savaşları ve Napolyon'un Mısır seferi milliyetçiliği yaydı. Çok etnikli imparatorluklar (Osmanlı, Avusturya, Rusya) varoluşsal tehditle karşılaştı.", en: "The Napoleonic Wars spread nationalism across Europe, threatening multiethnic empires." }, mapState: { markers: ["athens", "peloponnesus", "kucuk_kaynarca"], routes: ["philiki_route"], view: { center: [40.0, 25.0], zoom: 5.2 } } },
    { title: { tr: "2. Küçük Kaynarca Antlaşması (1774) ve Rus Hamiliği", en: "2. Treaty of Küçük Kaynarca (1774) & Russian Protectorate" }, text: { tr: "1774 Küçük Kaynarca Antlaşması ile Rusya, Karadeniz seyrüsefer ve Ortodoks hamiliği hakkı kazandı.", en: "The 1774 Treaty of Küçük Kaynarca granted Russia Black Sea access and Orthodox guardianship." }, mapState: { markers: ["kucuk_kaynarca", "odessa"], routes: ["philiki_route"], view: { center: [44.5, 29.0], zoom: 6.0 } } },
    { title: { tr: "3. Fenerli Rumlar (Phanariotes) ve Akdeniz Ticareti", en: "3. The Phanariotes & Mediterranean Trade Monopoly" }, text: { tr: "Fenerli Rumlar Osmanlı hariciyesinde baştercüman ve voyvoda oldu. Fransız filosunun çökmesiyle Akdeniz ticaretini üstlendiler.", en: "Phanariotes dominated Ottoman diplomacy and trade during the 18th century." }, mapState: { markers: ["athens", "peloponnesus", "chios"], routes: [], view: { center: [38.0, 24.0], zoom: 6.5 } } },
    { title: { tr: "4. Aydınlanma Fikirleri ve Filiki Eterya (1814)", en: "4. Enlightenment & Philiki Etaireia (1814)" }, text: { tr: "1814'te Odessa'da kurulan Filiki Eterya, Aydınlanma ilkeleriyle Yunan ulusal bilincini örgütledi.", en: "Founded in Odessa in 1814, Philiki Etaireia mobilized Greek national liberation." }, mapState: { markers: ["odessa", "athens"], routes: ["philiki_route"], view: { center: [42.0, 27.0], zoom: 5.5 } } },
    { title: { tr: "5. 1821 Mora Ayaklanması ve Piskopos Germanos", en: "5. 1821 Peloponnesian Revolt & Bishop Germanos" }, text: { tr: "25 Mart 1821'de Piskopos Germanos Mora'da sancak açarak isyanı başlattı.", en: "On March 25, 1821, Bishop Germanos raised the revolutionary banner in the Peloponnese." }, mapState: { markers: ["peloponnesus", "athens", "missolonghi"], routes: [], view: { center: [37.8, 22.5], zoom: 7.0 } } },
    { title: { tr: "6. Dervenakia Zaferi ve Kolokotronis", en: "6. Dervenakia Victory & Kolokotronis" }, text: { tr: "Kolokotronis 1822'de Dervenakia Geçidi'nde Dramalı Paşa'nın Osmanlı ordusunu pusuya düşürüp imha etti.", en: "Kolokotronis destroyed Dramali Pasha's army at Dervenakia in 1822." }, mapState: { markers: ["peloponnesus"], routes: [], view: { center: [37.7, 22.7], zoom: 8.0 } } },
    { title: { tr: "7. Osmanlı Misillemeleri ve Sakız Katliamı (1822)", en: "7. Ottoman Reprisals & Chios Massacre (1822)" }, text: { tr: "Osmanlı ordusu Sakız Adası'nı kuşattı, Patrik V. Gregorios idam edildi. Avrupa'da büyük infial doğdu.", en: "The 1822 Chios Massacre and execution of Patriarch Gregory V horrified Europe." }, mapState: { markers: ["chios", "athens"], routes: [], view: { center: [38.4, 26.1], zoom: 8.5 } } },
    { title: { tr: "8. Mehmet Ali Paşa'nın Müdahalesi ve İbrahim Paşa", en: "8. Egyptian Intervention under Ibrahim Pasha (1825)" }, text: { tr: "İbrahim Paşa 1825'te Mısır ordusuyla Mora'ya çıktı; 1827'de Atina'yı tekrar ele geçirdi.", en: "Ibrahim Pasha landed Egyptian forces in Morea in 1825, recapturing Athens by 1827." }, mapState: { markers: ["peloponnesus", "athens", "alexandria_port"], routes: ["ibrahim_greek_expedition"], view: { center: [35.5, 26.0], zoom: 5.5 } } },
    { title: { tr: "9. Filhelenizm Hareketi ve Lord Byron'ın Ölümü", en: "9. Philhellenism & Death of Lord Byron (1824)" }, text: { tr: "Batılı romantikler ve muhafazakarlar Filhelenizm'i kurdu. Lord Byron'ın Missolonghi'de ölümü kamuoyunu harekete geçirdi.", en: "Philhellenism swept Europe. Lord Byron's death at Missolonghi pushed Western powers to intervene." }, mapState: { markers: ["missolonghi", "athens"], routes: [], view: { center: [38.3, 21.5], zoom: 7.5 } } },
    { title: { tr: "10. Navarin Savaşı (1827) ve Bağımsızlık (1830)", en: "10. Battle of Navarino (1827) & Independence (1830)" }, text: { tr: "20 Ekim 1827'de müttefik donanması Navarin'de Osmanlı-Mısır filosunu yaktı. 1830 Londra Protokolü ile Yunanistan bağımsız oldu.", en: "The 1827 Battle of Navarino destroyed the Ottoman fleet, leading to 1830 independence under the London Protocol." }, mapState: { markers: ["navarino", "athens"], routes: ["navarino_allied_route"], view: { center: [37.0, 22.0], zoom: 7.5 } } }
  ],
  quiz: createQuiz(8, [
    { q: "1774 Küçük Kaynarca Antlaşması'nın önemi nedir?", a: "Rusya'ya Ortodoks hamiliği verilmiş ve Doğu Sorunu doğmuştur.", b: "Mısır bağımsız olmuştur.", c: "Fransa Akdeniz'i ele geçirmiştir.", d: "Yunanistan kurulmuştur.", exp: "Küçük Kaynarca Antlaşması Doğu Sorunu'nun diplomatik başlangıcıdır." },
    { q: "1814'te Odessa'da kurulan gizli Yunan örgütü hangisidir?", a: "Filiki Eterya", b: "Carbonari", c: "Genç İtalya", d: "Taiping", exp: "Filiki Eterya bağımsızlık savaşını finanse edip örgütlemiştir." },
    { q: "1827 Navarin Deniz Savaşı'nın sonucu nedir?", a: "Müttefik donanması Osmanlı-Mısır filosunu imha etmiştir.", b: "Osmanlı donanması galip gelmiştir.", c: "İngiltere savaştan çekilmiştir.", d: "Fransa geri çekilmiştir.", exp: "Navarin zaferi Yunan bağımsızlığını askeri olarak kesinleştirmiştir." }
  ], [
    { q: "What was the significance of the 1774 Treaty of Küçük Kaynarca?", a: "Granted Russia Orthodox protection rights, sparking the Eastern Question.", b: "Declared Greek independence.", c: "Annexed Egypt to France.", d: "Dismantled the Ottoman navy.", exp: "Küçük Kaynarca established Russia's diplomatic foothold in Ottoman affairs." },
    { q: "Which secret society was founded in Odessa in 1814?", a: "Philiki Etaireia", b: "Carbonari", c: "Young Italy", d: "Decembrists", exp: "Philiki Etaireia mobilized Greek national liberation across the region." },
    { q: "What was the outcome of the 1827 Battle of Navarino?", a: "Allied fleets destroyed the Ottoman-Egyptian navy.", b: "The Ottoman fleet was victorious.", c: "Naval blockade failed.", d: "Egypt conquered Greece.", exp: "Navarino sealed the military defeat of Ottoman forces in Morea." }
  ])
};

// --- WEEK 9 ---
ld.weeks["9"] = {
  id: "9",
  themeColor: "#0284c7",
  title: { tr: "Sanayi Devrimleri ve Sosyal Dönüşüm", en: "The Industrial Revolutions & Social Transformation" },
  video: { src: "https://drive.google.com/file/d/1y9JMjselukGWTnJiIqU-swfdMP06Y6Cr/view?usp=sharing", desc: { tr: "I. ve II. Sanayi Devrimleri, demiryolları, kentleşme ve sınıf yapısı.", en: "The First & Second Industrial Revolutions, railways, urbanization, and class dynamics." } },
  slides: [
    { title: { tr: "1. I. Sanayi Devrimi ve Buhar Çağı", en: "1. First Industrial Revolution & Steam Power" }, text: { tr: "18. yüzyıl sonunda İngiltere'de başlayan I. Sanayi Devrimi, buhar gücü ve mekanize tekstil üretimiyle fabrika sistemini kurdu.", en: "Originating in late 18th-century Britain, the First Industrial Revolution created the factory system using steam power." }, mapState: { markers: ["manchester", "birmingham", "london_city"], routes: ["first_railway_uk"], view: { center: [53.5, -2.0], zoom: 6.2 } } },
    { title: { tr: "2. Kredi Kurumları ve Sermaye Birikimi", en: "2. Credit Institutions & Capital Accumulation" }, text: { tr: "Ticaret birikimi kurumsal bankacılık üzerinden maden, altyapı ve sanayi yatırımlarına dönüştürüldü.", en: "Trade wealth was funneled through commercial banking into heavy industrial investments." }, mapState: { markers: ["london_city", "manchester"], routes: [], view: { center: [52.0, -1.0], zoom: 6.0 } } },
    { title: { tr: "3. Tarımsal Çitletme (Enclosure) ve Proleterleşme", en: "3. Enclosures & Agricultural Proletariat" }, text: { tr: "Çitletme (Enclosure) yasaları köylüleri mülksüzleştirerek kentsel sanayi işçisi (proletarya) haline getirdi.", en: "Enclosure acts displaced rural peasants into growing cities, forming an urban proletariat." }, mapState: { markers: ["manchester", "birmingham"], routes: [], view: { center: [53.0, -2.0], zoom: 6.5 } } },
    { title: { tr: "4. Ulaşım Devrimi: Demiryolları ve Kömür", en: "4. Transport Revolution: Railways & Coal" }, text: { tr: "1830 Liverpool-Manchester hattı ile başlayan demiryolları nakliye maliyetlerini düşürdü ve çelik/kömür talebini patlattı.", en: "Railways rapidly lowered shipping costs and catalyzed heavy metallurgical production." }, mapState: { markers: ["manchester", "london_city"], routes: ["first_railway_uk"], view: { center: [53.0, -2.0], zoom: 6.5 } } },
    { title: { tr: "5. II. Sanayi Devrimi: Bessemer Çeliği ve Krupp", en: "5. Second Industrial Rev: Bessemer Steel & Krupp" }, text: { tr: "1856 Bessemer yöntemi ucuz çelik üretimini sağladı; Krupp gibi dev ağır sanayi kartelleri oluştu.", en: "The 1856 Bessemer process enabled mass low-cost steel, building industrial empires like Krupp." }, mapState: { markers: ["ruhr_valley", "london_city"], routes: [], view: { center: [51.5, 7.0], zoom: 7.0 } } },
    { title: { tr: "6. Elektrik, Telgraf ve Edison'ın Ampulü", en: "6. Electricity, Telegraph & Edison's Lamp" }, text: { tr: "Elektrik gücü ve 1879 Edison ampulü fabrikalarda 24 saat kesintisiz üretimi ve şehir aydınlatmasını sağladı.", en: "Electric power and Edison's 1879 lamp enabled 24-hour factory shifts and urban electrification." }, mapState: { markers: ["london_city", "ruhr_valley"], routes: [], view: { center: [51.5, 3.0], zoom: 5.5 } } },
    { title: { tr: "7. Kentsel Kitle Ulaşımı: Londra ve Paris Metroları", en: "7. Urban Mass Transit: London & Paris Subways" }, text: { tr: "1863 Londra Yeraltı Demiryolu ve 1900 Paris Metrosu işçilerin banliyölerden merkeze taşınmasını sağladı.", en: "Subway networks (1863 London Underground, 1900 Paris Metro) reshaped metropolitan transit." }, mapState: { markers: ["london_city", "paris_urban"], routes: [], view: { center: [50.0, 1.0], zoom: 6.0 } } },
    { title: { tr: "8. Otomotiv, İçten Yanmalı Motor ve Taylorizm", en: "8. Automobile, Internal Combustion & Taylorism" }, text: { tr: "1885 Carl Benz otomobili petrol ve kauçuk sektörünü tetikledi; montaj hattı ve Taylorizm üretimi standartlaştırdı.", en: "Carl Benz's 1885 car and Taylorist assembly lines standardized modern industrial manufacturing." }, mapState: { markers: ["ruhr_valley", "paris_urban"], routes: [], view: { center: [50.5, 6.0], zoom: 6.0 } } },
    { title: { tr: "9. Kentleşme, Mekânsal Ayrışma ve Burjuvazi", en: "9. Urbanization, Spatial Segregation & Bourgeoisie" }, text: { tr: "Hızlı kentleşme burjuvaziyi lüks semtlere, işçileri ise altyapısız ve salgın hastalık yuvası mahallelere ayırdı.", en: "Rapid urbanization generated spatial class segregation, isolating wealthy bourgeois enclaves from slums." }, mapState: { markers: ["paris_urban", "london_city", "manchester"], routes: [], view: { center: [51.5, -0.1], zoom: 6.5 } } },
    { title: { tr: "10. Devlet Eğitimi: Ferry Yasaları ve Okuryazarlık", en: "10. State Education: Ferry Laws & Secular Literacy" }, text: { tr: "1879-1881 Fransa Ferry Yasaları ilköğretimi parasız, zorunlu ve seküler yaparak milli sadakat tesis etti.", en: "The French Ferry Laws (1879-1881) made primary education free, mandatory, and secular." }, mapState: { markers: ["paris_urban", "london_city"], routes: [], view: { center: [50.0, 1.5], zoom: 6.0 } } }
  ],
  quiz: createQuiz(9, [
    { q: "1856 yılında ucuz kütlesel çelik üretimini sağlayan icat hangisidir?", a: "Bessemer Yöntemi", b: "Buhar Makinesi", c: "İçten Yanmalı Motor", d: "Elektromanyetik Telgraf", exp: "Bessemer yöntemi çeliği demirin yerine kütlesel sanayi hammaddesi yapmıştır." },
    { q: "Fransa'da ilköğretimi parasız, zorunlu ve seküler yapan yasalar hangisidir?", a: "Ferry Yasaları (1879-1881)", b: "Speenhamland Yasası", c: "Poor Law Amendment Act", d: "Napolyon Kanunları", exp: "Jules Ferry yasaları Fransa'da seküler milli eğitimi kurmuştur." },
    { q: "Tarihteki ilk yeraltı metrosu nerede ve kaç yılında açılmıştır?", a: "Londra (1863)", b: "Paris (1900)", c: "New York (1904)", d: "Berlin (1890)", exp: "Londra Yeraltı Demiryolu 1863'te faaliyete geçmiştir." }
  ], [
    { q: "Which 1856 invention enabled low-cost mass steel production?", a: "Bessemer Process", b: "Steam Engine", c: "Internal Combustion Engine", d: "Assembly Line", exp: "The Bessemer process catalyzed heavy steel infrastructure and shipbuilding." },
    { q: "Which laws made primary schooling free, compulsory, and secular in France?", a: "Ferry Laws (1879-1881)", b: "Speenhamland Act", c: "Poor Law of 1834", d: "Napoleonic Code", exp: "Ferry Laws built France's secular public school system." },
    { q: "Where and when was the world's first underground railway opened?", a: "London (1863)", b: "Paris (1900)", c: "New York (1904)", d: "Berlin (1890)", exp: "The London Underground opened in 1863 as the pioneer urban transit system." }
  ])
};

// --- WEEK 10 ---
ld.weeks["10"] = {
  id: "10",
  themeColor: "#dc2626",
  title: { tr: "İşçi Hareketi, Paris Komünü ve Anarşizm", en: "Labor Organization, Paris Commune & Anarchism" },
  video: { src: "https://drive.google.com/file/d/1y9JMjselukGWTnJiIqU-swfdMP06Y6Cr/view?usp=sharing", desc: { tr: "1871 Paris Komünü, Kanlı Hafta, Sosyalizm ve Anarşist Düşünce.", en: "The 1871 Paris Commune, Bloody Week, Socialism, and Anarchist Movement." } },
  slides: [
    { title: { tr: "1. 19. Yüzyıl Sosyalizmi ve Marx/Engels", en: "1. 19th Century Socialism & Marx/Engels" }, text: { tr: "Karl Marx ve Friedrich Engels, komünizmi kapitalist sömürüye karşı işçi sınıfının nihai örgütlenme modeli ilan etti.", en: "Karl Marx and Friedrich Engels formulated scientific socialism, advocating working-class emancipation." }, mapState: { markers: ["paris_urban", "london_city"], routes: [], view: { center: [48.85, 2.35], zoom: 6.0 } } },
    { title: { tr: "2. Fransa-Prusya Savaşı ve 4 Eylül 1870", en: "2. Franco-Prussian War & 3rd Republic" }, text: { tr: "1870 Sedan yenilgisi sonrası III. Cumhuriyet ilan edildi; Prusya kuşatmasındaki Paris halkı silahlandı.", en: "Following the 1870 Sedan defeat, Paris proclaimed the Third Republic and formed armed working-class guards." }, mapState: { markers: ["paris_urban"], routes: ["prussian_siege_paris"], view: { center: [48.85, 2.35], zoom: 10.0 } } },
    { title: { tr: "3. Montmartre Topları ve 18 Mart 1871", en: "3. Montmartre Cannons & Outbreak of Commune" }, text: { tr: "18 Mart 1871'de Thiers hükümetinin Montmartre toplarını alma girişimi işçilerce püskürtüldü ve Komün kuruldu.", en: "On March 18, 1871, government attempts to seize Montmartre cannons failed, launching the Paris Commune." }, mapState: { markers: ["montmartre", "hotel_de_ville_paris"], routes: ["versailles_army_advance"], view: { center: [48.87, 2.34], zoom: 12.0 } } },
    { title: { tr: "4. Komün'ün Radikal Sosyal Reformları", en: "4. Commune's Radical Social Legislation" }, text: { tr: "Komün orduyu lağvedip halkı silahlandırdı; din ve devleti ayırdı, gece fırıncılığını ve fahiş kiraları kaldırdı.", en: "The Commune abolished the army, separated Church and State, created a Labor Exchange, and banned night baking." }, mapState: { markers: ["hotel_de_ville_paris"], routes: [], view: { center: [48.85, 2.35], zoom: 12.5 } } },
    { title: { tr: "5. Kadın Komünarlar ve Siyasi Haklar", en: "5. Women Communards & Political Rights" }, text: { tr: "Kadınlar kulüpler ve barikatlarda aktif rol alarak cinsiyet eşitliği ve siyasi hak taleplerini haykırdı.", en: "Women actively commanded barricades and political clubs, demanding full gender equality." }, mapState: { markers: ["hotel_de_ville_paris"], routes: [], view: { center: [48.85, 2.35], zoom: 12.0 } } },
    { title: { tr: "6. Semboller Savaşı: Kızıl Bayrak ve Vendôme", en: "6. Symbols: Red Flag & Vendôme Column" }, text: { tr: "Kızıl bayrak resmi simge yapıldı; Napolyon'un militarist Place Vendôme Sütunu halk tarafından yıkıldı.", en: "The Red Flag was adopted and the militarist Vendôme Column was destroyed by popular decree." }, mapState: { markers: ["vendome_column"], routes: [], view: { center: [48.867, 2.33], zoom: 13.0 } } },
    { title: { tr: "7. Kanlı Hafta (Semaine Sanglante) ve Katliam", en: "7. Bloody Week (Semaine Sanglante) & Repression" }, text: { tr: "21-28 Mayıs 1871'de Versay ordusu Haussmann bulvarlarından girerek 15.000-25.000 komünarı katletti.", en: "During Bloody Week (May 21-28, 1871), government troops executed 15,000-25,000 communards." }, mapState: { markers: ["perelachaise", "hotel_de_ville_paris"], routes: ["versailles_army_advance"], view: { center: [48.86, 2.37], zoom: 12.0 } } },
    { title: { tr: "8. Komün'ün Siyasi Hafızası: Sacré-Cœur", en: "8. Political Memory: Sacré-Cœur Cathedral" }, text: { tr: "Komün'ün 'günahlarını arındırmak' bahanesiyle Montmartre'a Sacré-Cœur inşa ettirildi.", en: "Burgeois authorities built Sacré-Cœur Cathedral atop Montmartre to expiate the 'sins of the Commune'." }, mapState: { markers: ["montmartre"], routes: [], view: { center: [48.886, 2.34], zoom: 13.0 } } },
    { title: { tr: "9. Anarşizmin Siyasi Felsefesi: Proudhon & Bakunin", en: "9. Anarchism: Proudhon & Bakunin" }, text: { tr: "Proudhon ('Mülkiyet hırsızlıktır!') ve Bakunin devleti baskı aygıtı görerek tamamen ilgasına odaklandı.", en: "Proudhon ('Property is theft!') and Bakunin rejected state authority in favor of total abolition." }, mapState: { markers: ["paris_urban", "ruhr_valley"], routes: [], view: { center: [50.0, 5.0], zoom: 5.5 } } },
    { title: { tr: "10. 'Eylemle Propaganda' ve Dinamit Dalgası", en: "10. 'Propaganda by Deed' & Dynamite Wave" }, text: { tr: "Kropotkin'in 'eylemle propaganda' ilkesi ve Nobel'in 1868 dinamiti 1892-1894 anarşist suikast dalgasını doğurdu.", en: "Kropotkin's 'propaganda by the deed' and Nobel's dynamite fueled the 1892-1894 anarchist campaign." }, mapState: { markers: ["paris_urban"], routes: [], view: { center: [48.85, 2.35], zoom: 11.0 } } }
  ],
  quiz: createQuiz(10, [
    { q: "18 Mart 1871'de Paris Komünü'nü başlatan kıvılcım nedir?", a: "Thiers hükümetinin Montmartre toplarına el koyma girişimi", b: "Prusya'nın Paris'i işgali", c: "Napolyon'un tahttan inmesi", d: "Fabrika grevleri", exp: "Montmartre toplarının savunulması Komün yönetimine yol açmıştır." },
    { q: "Kanlı Hafta (Semaine Sanglante) sırasında kaç komünar katledilmiştir?", a: "15.000 - 25.000", b: "500 - 1.000", c: "100.000", d: "5.000", exp: "Versay birlikleri işçi mahallelerinde 15 bin ila 25 bin kişiyi katletmiştir." },
    { q: "'Mülkiyet hırsızlıktır!' sözüyle ünlü anarşist düşünür kimdir?", a: "Pierre-Joseph Proudhon", b: "Mikhail Bakunin", c: "Peter Kropotkin", d: "Karl Marx", exp: "Proudhon 1840 tarihli eserinde mülkiyeti doğrudan sorgulamıştır." }
  ], [
    { q: "What event triggered the outbreak of the Paris Commune on March 18, 1871?", a: "Attempt by Thiers government to seize Montmartre cannons", b: "Prussian army entering Paris", c: "Coup by Napoleon III", d: "General strike", exp: "Defending Montmartre cannons sparked the creation of the Commune." },
    { q: "How many communards were killed during Bloody Week (May 1871)?", a: "15,000 to 25,000", b: "500 to 1,000", c: "100,000", d: "5,000", exp: "Government forces executed between 15,000 and 25,000 communards." },
    { q: "Which anarchist thinker authored 'Property is theft!'?", a: "Pierre-Joseph Proudhon", b: "Mikhail Bakunin", c: "Peter Kropotkin", d: "Karl Marx", exp: "Proudhon formulated fundamental anti-property anarchist doctrine in 1840." }
  ])
};

// --- WEEK 11 ---
ld.weeks["11"] = {
  id: "11",
  themeColor: "#059669",
  title: { tr: "Mısır'ın Modernleşme Yolu ve İngiliz İşgali (1801-1882)", en: "Egypt's Path to Modernization & British Occupation (1801-1882)" },
  video: { src: "https://drive.google.com/file/d/1y9JMjselukGWTnJiIqU-swfdMP06Y6Cr/view?usp=sharing", desc: { tr: "Mehmet Ali Paşa reformları, Süveyş Kanalı, Urabi İsyanı ve 1882 İngiliz İşgali.", en: "Muhammad Ali Pasha's reforms, Suez Canal, Urabi Revolt, and the 1882 British Invasion." } },
  slides: [
    { title: { tr: "1. Batı-Dışı Modernleşme: Şark'ta Devlet İnşası", en: "1. Non-Western Modernization & State-Building" }, text: { tr: "19. yüzyılda Mısır ve Meiji Japonyası kültürel kimliğini koruyarak ordu ve bürokrasiyi modernleştirdi.", en: "Non-Western societies modernized armies and state institutions while preserving cultural autonomy." }, mapState: { markers: ["cairo_citadel", "alexandria_port"], routes: [], view: { center: [27.0, 30.0], zoom: 5.5 } } },
    { title: { tr: "2. Mehmet Ali Paşa ve 1811 Memlük Katliamı", en: "2. Muhammad Ali Pasha & 1811 Citadel Massacre" }, text: { tr: "1805'te vali olan Mehmet Ali Paşa, 1811 Kahire Kalesi katliamıyla Memlük feodalizmini yok etti.", en: "Muhammad Ali Pasha massacred 74 Mamluk warlords at the Cairo Citadel in 1811." }, mapState: { markers: ["cairo_citadel"], routes: [], view: { center: [30.0, 31.2], zoom: 10.0 } } },
    { title: { tr: "3. Askeri Okullar ve Mütercimler Okulu (1835)", en: "3. Military Academies & School of Languages (1835)" }, text: { tr: "Aswan askeri akademisi ve 1835 Mütercimler Okulu Arapça ders kitaplarıyla yerli aydın sınıf yetiştirdi.", en: "The 1835 School of Languages created a new Arabic-speaking administrative elite." }, mapState: { markers: ["aswan_school", "cairo_citadel"], routes: [], view: { center: [27.0, 32.0], zoom: 6.0 } } },
    { title: { tr: "4. Fellah Zorunlu Askerliği ve Bulaq Matbaası", en: "4. Conscription of Fellahin & Bulaq Press" }, text: { tr: "130.000 kişilik fellah ordusu kurularak istatistik ve Bulaq Matbaası ile merkezi idare pekiştirildi.", en: "Conscription of 130,000 fellahin required modern statistics and Bulaq Press publishing." }, mapState: { markers: ["cairo_citadel", "alexandria_port"], routes: [], view: { center: [30.0, 31.0], zoom: 8.0 } } },
    { title: { tr: "5. Jumel Pamuğu ve Mahmutiye Kanalı Angaryası", en: "5. Jumel Cotton & Mahmudiyyah Canal Corvée" }, text: { tr: "Jumel pamuğu temel ihraç ürünü yapıldı; binlerce fellah Mahmutiye Kanalı angaryasında çalıştırıldı.", en: "Long-staple Jumel cotton became Egypt's cash crop, expanded via forced fellahin labor." }, mapState: { markers: ["alexandria_port", "cairo_citadel"], routes: [], view: { center: [30.8, 30.5], zoom: 8.5 } } },
    { title: { tr: "6. Mısır Ordusunun Suriye Seferi ve Nizip Savaşı", en: "6. Syrian Expedition & Battle of Nezib (1839)" }, text: { tr: "İbrahim Paşa Suriye'yi fethedip Kütahya'ya dayandı; 1839 Nizip Savaşı sonrası Avrupalılar müdahale etti.", en: "Ibrahim Pasha defeated Ottoman forces at Nezib (1839), triggering European intervention." }, mapState: { markers: ["nezib", "kutahya", "beirut_port"], routes: ["mehmet_ali_syrian_expedition"], view: { center: [35.0, 35.0], zoom: 5.5 } } },
    { title: { tr: "7. Balta Limanı (1838) ve Londra Antlaşması (1841)", en: "7. Baltalimanı (1838) & London Treaty (1841)" }, text: { tr: "1838 Balta Limanı Antlaşması Mısır tekelini yıktı; 1841 Londra Antlaşması irsi hanedan tanıdı.", en: "The 1838 Baltalimanı Treaty ended state monopolies; the 1841 treaty granted hereditary rule." }, mapState: { markers: ["cairo_citadel"], routes: [], view: { center: [30.0, 31.0], zoom: 7.0 } } },
    { title: { tr: "8. Tahtawi, Ali Mübarek ve Hidiv İsmail", en: "8. Tahtawi, Ali Mubarak & Khedive Isma'il" }, text: { tr: "Tahtawi ve Ali Mübarek eğitim reformlarını yönetti; Hidiv İsmail Kahire'yi Paris tarzı yeniledi.", en: "Khedive Isma'il modernized Cairo into a European-style metropolis with boulevards." }, mapState: { markers: ["cairo_citadel"], routes: [], view: { center: [30.0, 31.2], zoom: 10.0 } } },
    { title: { tr: "9. Süveyş Kanalı (1858-1869) ve De Lesseps", en: "9. Suez Canal (1858-1869) & Lesseps" }, text: { tr: "Lesseps'in Süveyş Kanalı 1869'da açıldı ve İngiltere ile Hindistan arasındaki deniz yolunu yarıya indirdi.", en: "Opened in 1869 by Lesseps, the Suez Canal halved transit times between Europe and Asia." }, mapState: { markers: ["suez_canal", "alexandria_port"], routes: ["suez_canal_route"], view: { center: [30.5, 32.3], zoom: 8.5 } } },
    { title: { tr: "10. İflas, Borçlar İdaresi ve Disraeli %44 Hisse", en: "10. Bankruptcy, Caisse de la Dette & Disraeli" }, text: { tr: "1875'te Disraeli Süveyş'in %44 hissesini satın aldı; 1876'da Avrupalı Borçlar Komisyonu maliyeye el koydu.", en: "In 1875, Disraeli bought 44% Suez shares; in 1876, the European Debt Commission took over finance." }, mapState: { markers: ["suez_canal", "cairo_citadel", "london_city"], routes: [], view: { center: [30.0, 31.0], zoom: 6.0 } } },
    { title: { tr: "11. Urabi İsyanı ve 1882 İngiliz İşgali", en: "11. Urabi Revolt & 1882 British Invasion" }, text: { tr: "Albay Ahmed Urabi'nin isyanını bastıran İngiltere, 1882'de Mısır'ı Lord Cromer idaresinde işgal etti.", en: "Britain crushed Ahmed Urabi's revolt at Tel el-Kebir in 1882, occupying Egypt under Lord Cromer." }, mapState: { markers: ["tel_el_kebir", "alexandria_port", "cairo_citadel"], routes: ["british_1882_invasion"], view: { center: [30.5, 31.0], zoom: 8.0 } } }
  ],
  quiz: createQuiz(11, [
    { q: "Mehmet Ali Paşa'nın Mısır'da feodal otoriteyi sıfırladığı 1811 olayı nedir?", a: "Kahire Kalesi Memlük Katliamı", b: "Nizip Savaşı", c: "Süveyş Açılışı", d: "Urabi İsyanı", exp: "1811 Kahire Kalesi katliamı Mamluk bey gücünü tamamen yok etmiştir." },
    { q: "1875'te Süveyş Kanalı'nın %44 hissesini satın alan İngiltere Başbakanı kimdir?", a: "Benjamin Disraeli", b: "Gladstone", c: "Robert Peel", d: "Lord Salisbury", exp: "Disraeli Kraliçe Victoria adına Süveyş hisselerini satın almıştır." },
    { q: "1882'de İngiliz işgaline yol açan Mısırlı yurtsever albay kimdir?", a: "Ahmed Urabi Paşa", b: "İbrahim Paşa", c: "Ali Mübarek", d: "Tahtawi", exp: "Albay Ahmed Urabi yabancı mali denetimine karşı ulusal isyan başlatmıştır." }
  ], [
    { q: "Which 1811 event dismantled feudal Mamluk power in Egypt?", a: "Cairo Citadel Massacre", b: "Battle of Nezib", c: "Suez Canal Opening", d: "Urabi Revolt", exp: "The 1811 Citadel massacre eliminated Mamluk warlords." },
    { q: "Which British PM purchased 44% of Suez Canal shares in 1875?", a: "Benjamin Disraeli", b: "William Gladstone", c: "Robert Peel", d: "Lord Salisbury", exp: "Disraeli acquired 44% of Suez shares for the British crown." },
    { q: "Who was the nationalist Egyptian officer whose 1882 revolt led to British invasion?", a: "Ahmed Urabi", b: "Ibrahim Pasha", c: "Ali Mubarak", d: "Rifa'a al-Tahtawi", exp: "Colonel Urabi led anti-foreign resistance until the 1882 British invasion." }
  ])
};

// --- WEEK 12 ---
ld.weeks["12"] = {
  id: "12",
  themeColor: "#7e22ce",
  title: { tr: "Avrupa'nın Yeni Emperyalizmi ve Küresel Rekabet", en: "Europe's New Imperialism & Global Competition" },
  video: { src: "https://drive.google.com/file/d/1y9JMjselukGWTnJiIqU-swfdMP06Y6Cr/view?usp=sharing", desc: { tr: "Yeni Emperyalizm, Afrika Talanı (1884-85), Cecil Rhodes, Herero Soykırımı ve I. Dünya Savaşı'na Giden Yol.", en: "New Imperialism, Scramble for Africa (1884-85), Cecil Rhodes, Herero Genocide, and the Path to WWI." } },
  slides: [
    { title: { tr: "1. Yeni Emperyalizm Çağı (1882-1914)", en: "1. Age of New Imperialism (1882-1914)" }, text: { tr: "1882-1914 arasındaki 30 yılda Avrupalı güçler dünya karalarının 3/4'ünü fethedip Afrika'yı paylaştı.", en: "Between 1882 and 1914, European powers conquered 3/4 of the globe and partitioned Africa." }, mapState: { markers: ["berlin_reichstag", "fashoda", "rhodesia_harare"], routes: ["scramble_africa_lines"], view: { center: [10.0, 20.0], zoom: 3.2 } } },
    { title: { tr: "2. 3G İlkesi: God, Gold & Glory", en: "2. The Three G's: God, Gold & Glory" }, text: { tr: "Yeni Emperyalizm: God (misyonerlik), Gold (1874-95 krizinde maden arayışı) ve Glory (büyük güç hırsı) ile yürüdü.", en: "Driven by God (missionary ideals), Gold (resource greed in depression), and Glory (great power rivalry)." }, mapState: { markers: ["berlin_reichstag", "london_city"], routes: [], view: { center: [50.0, 10.0], zoom: 4.5 } } },
    { title: { tr: "3. Medenileştirme Misyonu ve Jules Ferry", en: "3. Civilizing Mission & Jules Ferry (1884)" }, text: { tr: "Jules Ferry 1884'te 'üstün ırkların aşağı ırkları medenileştirme görevi' olduğunu mecliste savundu.", en: "Jules Ferry framed imperialism as a 'civilizing mission' of superior races over lower ones." }, mapState: { markers: ["paris_urban", "berlin_reichstag"], routes: [], view: { center: [48.8, 2.3], zoom: 5.5 } } },
    { title: { tr: "4. Altın ve Elmas Hırsı: Cecil Rhodes ve De Beers", en: "4. Diamond Greed: Cecil Rhodes & De Beers" }, text: { tr: "Cecil Rhodes De Beers şirketiyle elmas piyasasının %40'ını tekeline alıp Rodezya bölgesini kurdu.", en: "Cecil Rhodes controlled 40% of global diamonds via De Beers and founded Rhodesia." }, mapState: { markers: ["rhodesia_harare", "khartoum_sudan"], routes: ["rhodes_cape_cairo_vision"], view: { center: [-5.0, 28.0], zoom: 3.5 } } },
    { title: { tr: "5. Büyük Güç Rekabeti ve Weltpolitik", en: "5. Great Power Rivalry & Weltpolitik" }, text: { tr: "Alman Kaiser II. Wilhelm'in Weltpolitik stratejisi Anglo-Alman donanma silahlanma yarışını başlattı.", en: "Kaiser Wilhelm II's Weltpolitik sparked an explosive Anglo-German naval arms race." }, mapState: { markers: ["berlin_reichstag", "london_city"], routes: [], view: { center: [52.0, 8.0], zoom: 5.5 } } },
    { title: { tr: "6. Berlin Konferansı (1884-85) ve Afrika Talanı", en: "6. Berlin Conference (1884-85) & Scramble" }, text: { tr: "1884-85 Berlin Konferansı Afrika'yı masada paylaşarak 'fiili işgal' (effective occupation) kuralını koydu.", en: "The 1884-85 Berlin Conference partitioned Africa among powers under the 'effective occupation' rule." }, mapState: { markers: ["berlin_reichstag", "fashoda"], routes: ["scramble_africa_lines"], view: { center: [20.0, 15.0], zoom: 3.5 } } },
    { title: { tr: "7. Faşoda Krizi (1898) ve Fas Krizleri", en: "7. Fashoda Incident (1898) & Moroccan Crises" }, text: { tr: "1898 Faşoda'da İngiliz ve Fransız orduları, 1905/1911 Fas Krizlerinde Almanya ve Fransa savaşın eşiğine geldi.", en: "Imperial clashes at Fashoda (1898) and Morocco (1905, 1911) brought Europe to the brink of war." }, mapState: { markers: ["fashoda", "khartoum_sudan"], routes: [], view: { center: [12.0, 30.0], zoom: 5.5 } } },
    { title: { tr: "8. İttifak ve İtilaf Bloklaşması", en: "8. Triple Alliance vs Triple Entente Formation" }, text: { tr: "Sömürge rekabeti 1882 Üçlü İttifak karşısında 1907 Üçlü İtilaf'ı (İngiltere, Fransa, Rusya) doğurdu.", en: "Colonial friction solidified rival military blocs: the Triple Alliance vs the Triple Entente." }, mapState: { markers: ["berlin_reichstag", "paris_urban", "london_city"], routes: [], view: { center: [50.0, 10.0], zoom: 4.8 } } },
    { title: { tr: "9. Sömürge Vahşeti: Herero Soykırımı (1904)", en: "9. Colonial Brutality: Herero Genocide (1904)" }, text: { tr: "1904'te Alman General von Trotha emriyle 65.000 Herero çölde katledildi; Boer Savaşı'nda ilk toplama kampları kuruldu.", en: "German forces committed the 1904 Herero Genocide, while Britain invented concentration camps in the Boer War." }, mapState: { markers: ["swakopmund_herero", "boer_transvaal"], routes: [], view: { center: [-24.0, 20.0], zoom: 5.0 } } },
    { title: { tr: "10. Sosyal Emperyalizm ve İmparatorluk Haritaları", en: "10. Social Imperialism & Red Imperial Maps" }, text: { tr: "İç işçi huzursuzluğunu dış fethe yönlendiren Sosyal Emperyalizm, okullarda haritalarla milli gurur aşıladı.", en: "Social Imperialism used colonial conquests and red empire maps to deflect domestic labor unrest." }, mapState: { markers: ["london_city", "paris_urban"], routes: [], view: { center: [50.0, 1.0], zoom: 5.5 } } },
    { title: { tr: "11. İzci Hareketi (Baden-Powell) ve Erkeklik Kültü", en: "11. Boy Scouts (Baden-Powell 1907) & Virility Cult" }, text: { tr: "Baden-Powell 1907'de gençleri emperyal savaşa hazırlamak için İzci Hareketi'ni ve erkeklik disiplinini kurdu.", en: "Baden-Powell founded the Boy Scouts in 1907 to train youth for imperial warfare and virility." }, mapState: { markers: ["london_city"], routes: [], view: { center: [51.5, -0.1], zoom: 8.0 } } }
  ],
  quiz: createQuiz(12, [
    { q: "1884-1885 Berlin Konferansı'nın temel kararı nedir?", a: "Afrika'nın Avrupalı güçlerce fiili işgal kuralına göre paylaşılması", b: "Mısır'ın bağımsızlığı", c: "Köle ticaretinin serbest bırakılması", d: "Süveyş Kanalı'nın kapatılması", exp: "Berlin Konferansı Afrika Talanı'nın diplomatik haritasını çizmiştir." },
    { q: "Fransız Meclisi'nde sömürgeciliği 'medenileştirme misyonu' olarak savunan devlet adamı kimdir?", a: "Jules Ferry", b: "Napoleon III", c: "Clemenceau", d: "Thiers", exp: "Jules Ferry 1884 konuşmasında Fransız emperyalizmini medenileştirme argümanıyla kılıfa sokmuştur." },
    { q: "1904 yılında Alman Güneybatı Afrika'sında gerçekleşen soykırım hangi topluluğa yapılmıştır?", a: "Herero ve Nama halkları", b: "Zulular", c: "Boerler", d: "Cezayirliler", exp: "General von Trotha'nın imha emriyle 65.000 Herero çölde katledilmiştir." }
  ], [
    { q: "What was the main outcome of the 1884-1885 Berlin Conference?", a: "Established rules for partitioning Africa under 'effective occupation'.", b: "Granted independence to Egypt.", c: "Abolished all colonial tariffs.", d: "Ended the naval arms race.", exp: "The Berlin Conference laid the diplomatic rules for the Scramble for Africa." },
    { q: "Which statesman defended French imperialism as a 'civilizing mission' in 1884?", a: "Jules Ferry", b: "Napoleon III", c: "Georges Clemenceau", d: "Adolphe Thiers", exp: "Jules Ferry justified colonial conquest through civilizing rhetoric in 1884." },
    { q: "Which indigenous population suffered genocide by German forces in 1904?", a: "Herero and Nama", b: "Zulu", c: "Boers", d: "Algerians", exp: "German forces exterminated 65,000 Herero in South West Africa in 1904." }
  ])
};

// Write out to data.js
const fullJS = 'const learningData = ' + JSON.stringify(ld, null, 2) + ';\n';
fs.writeFileSync('data.js', fullJS, 'utf8');
console.log("SUCCESSFULLY UPDATED data.js with weeks 2-12!");
