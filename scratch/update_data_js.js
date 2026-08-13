const fs = require('fs');
const path = require('path');

// 1. Read existing data.js content
let rawCode = fs.readFileSync('data.js', 'utf8');

// Use eval with global context to get learningData object
global.learningData = null;
const evalCode = rawCode.replace('const learningData', 'global.learningData');
eval(evalCode);

const ld = global.learningData;
console.log("Original weeks in data.js:", Object.keys(ld.weeks));

// 2. Define Primary Sources to append
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
    sourceUrl": "https://declarationproject.org/?p=1592",
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
    sourceUrl": "https://cheirif.wordpress.com/wp-content/uploads/2015/08/paul-kennedy-the-rise-and-fall-of-the-great-powers-19891.pdf",
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
    sourceUrl": "https://www.marxists.org/archive/marx/works/download/pdf/condition-working-class-england.pdf",
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
    sourceUrl": "https://archive.org/details/allpashasmenmehm0000fahm/page/n7/mode/2up",
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
    sourceUrl": "https://sourcebooks.fordham.edu/mod/1884ferry.asp",
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
    sourceUrl": "https://loveman.sdsu.edu/docs/1885GeneralActBerlinConference.pdf",
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
  if (!ld.primarySources.find(existing => existing.id === s.id)) {
    ld.primarySources.push(s);
  }
});

// 3. Define Map Markers to append
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

// 4. Define Map Routes to append
const newRoutes = {
  "philiki_route": {
    label: { en: "Philiki Etaireia Underground Network", tr: "Filiki Eterya Gizli Ağ Hattı" },
    path: [[46.4825, 30.7233], [43.9833, 27.5167], [41.0082, 28.9784], [37.9838, 23.7275]],
    color: "#ea580c"
  },
  "ibrahim_greek_expedition": {
    label: { en: "Ibrahim Pasha's Expedition to Morea", tr: "İbrahim Paşa'nın Mora Seferi" },
    path: [[31.2001, 29.9187], [35.5, 24.0], [36.9133, 21.6967]],
    color: "#dc2626"
  },
  "navarino_allied_route": {
    label: { en: "Allied Fleet Entry to Navarino Bay", tr: "Müttefik Donanmasının Navarin İlerleyişi" },
    path: [[38.3683, 21.4319], [36.9133, 21.6967]],
    color: "#2563eb"
  },
  "first_railway_uk": {
    label: { en: "Liverpool & Manchester Railway Line (1830)", tr: "Liverpool-Manchester Demiryolu (1830)" },
    path: [[53.4084, -2.9916], [53.4808, -2.2426]],
    color: "#0284c7"
  },
  "prussian_siege_paris": {
    label: { en: "Prussian Siege & Encirclement of Paris (1870)", tr: "Prusya Ordusunun Paris Kuşatması" },
    path: [[49.2583, 4.0317], [48.8566, 2.3522]],
    color: "#475569"
  },
  "versailles_army_advance": {
    label: { en: "Versailles Army Suppression Advance into Paris", tr: "Versay Ordusunun Paris'e Saldırı Hattı" },
    path: [[48.8049, 2.1301], [48.8564, 2.3524]],
    color: "#dc2626"
  },
  "mehmet_ali_syrian_expedition": {
    label: { en: "Egyptian Conquest Route of Greater Syria to Anatolia", tr: "Mısır Ordusunun Suriye ve Anadolu Seferi" },
    path: [[30.0299, 31.2611], [31.7683, 35.2137], [33.5138, 36.2765], [37.0167, 37.7833], [39.4167, 29.9833]],
    color: "#059669"
  },
  "suez_canal_route": {
    label: { en: "Suez Maritime Transit Route", tr: "Süveyş Deniz Geçiş Yolu" },
    path: [[31.2565, 32.2841], [30.5852, 32.2654], [29.9668, 32.5498]],
    color: "#0284c7"
  },
  "british_1882_invasion": {
    label: { en: "British Military Invasion of Egypt (1882)", tr: "1882 İngiliz Mısır İşgal Hattı" },
    path: [[31.2001, 29.9187], [30.5500, 31.9333], [30.0299, 31.2611]],
    color: "#b91c1c"
  },
  "scramble_africa_lines": {
    label: { en: "Imperial Axis of Scramble for Africa", tr: "Afrika Talanı Emperyalist Yayılma Ekseni" },
    path: [[52.5186, 13.3761], [9.8833, 32.1167], [-17.8252, 31.0335]],
    color: "#7e22ce"
  },
  "rhodes_cape_cairo_vision": {
    label: { en: "Cecil Rhodes' Cape to Cairo Project Line", tr: "Cecil Rhodes Kahire-Kap Demiryolu Projesi" },
    path: [[-33.9249, 18.4241], [-17.8252, 31.0335], [15.5007, 32.5599], [30.0299, 31.2611]],
    color: "#d97706"
  }
};

Object.assign(ld.map.routes, newRoutes);

console.log("Updated markers and routes.");
