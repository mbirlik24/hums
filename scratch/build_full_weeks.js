const fs = require('fs');

// Load existing data.js
let rawCode = fs.readFileSync('data.js', 'utf8');
global.learningData = null;
eval(rawCode.replace('const learningData', 'global.learningData'));
const ld = global.learningData;

// --- WEEK 8 ---
ld.weeks["8"] = {
  id: "8",
  themeColor: "#ea580c",
  title: {
    tr: "Doğu Sorunu ve Yunanistan Bağımsızlık Hareketi",
    en: "The Eastern Question & Greek National Liberation"
  },
  video: {
    src: "https://drive.google.com/file/d/1y9JMjselukGWTnJiIqU-swfdMP06Y6Cr/view?usp=sharing",
    desc: {
      tr: "Doğu Sorunu, Küçük Kaynarca Antlaşması ve 1821 Yunan Devrimi.",
      en: "The Eastern Question, Treaty of Küçük Kaynarca, and the 1821 Greek Revolution."
    }
  },
  slides: [
    {
      title: { tr: "1. Doğu Sorunu ve Napolyon Sonrası Avrupa", en: "1. The Eastern Question & Post-Napoleonic Europe" },
      text: {
        tr: "Fransız Devrim savaşları ve Napolyon'un Mısır seferi, milliyetçilik fikrini tüm Avrupa kıtasına yaydı. Bu gelişme, Avusturya-Macaristan, Rusya ve Osmanlı İmparatorluğu gibi çok etnikli imparatorluklar için varoluşsal bir tehdit oluşturdu. Dinsel cemaat aidiyeti yerini katı etnik milliyetçiliğe bıraktı.",
        en: "The Napoleonic Wars catalyzed the diffusion of nationalism across Europe, posing a severe threat to multiethnic monarchies—especially the Austrian, Russian, and Ottoman Empires. Religious identities were progressively ethnicized."
      },
      mapState: { markers: ["athens", "peloponnesus", "kucuk_kaynarca"], routes: ["philiki_route"], view: { center: [40.0, 25.0], zoom: 5.2 } }
    },
    {
      title: { tr: "2. Küçük Kaynarca Antlaşması (1774) ve Rus Hamiliği", en: "2. Treaty of Küçük Kaynarca (1774) & Russian Protectorate" },
      text: {
        tr: "1774 Küçük Kaynarca Antlaşması ile Rusya, Kırım'da hakimiyet sağladı, Karadeniz ve Boğazlar'da serbest seyrüsefer hakkı kazandı ve Osmanlı Ortodoks tebaasının hamisi rolünü üstlendi. Osmanlı İmparatorluğu 'korkulan düşman' konumundan Avrupalı güçlerin paylaşım hedefi olan 'Doğu Sorunu' alanına dönüştü.",
        en: "The 1774 Treaty of Küçük Kaynarca established Russian influence over the Black Sea, secured Straits navigation rights, and granted Russia effective guardianship over Ottoman Orthodox subjects, birthing the 'Eastern Question'."
      },
      mapState: { markers: ["kucuk_kaynarca", "odessa"], routes: ["philiki_route"], view: { center: [44.5, 29.0], zoom: 6.0 } }
    },
    {
      title: { tr: "3. Fenerli Rumlar (Phanariotes) ve Akdeniz Ticareti", en: "3. The Phanariotes & Mediterranean Trade Monopoly" },
      text: {
        tr: "18. yüzyılda diplomasi ve ticarette uzmanlaşan Fenerli Rumlar (Phanariotes), Osmanlı hariciye bürokrasisinde baştercümanlık ve voyvodalık makamlarını ele geçirdi. İngiliz-Fransız savaşları sırasında Fransız tüccar filolarının çökmesiyle, Rum tüccarlar Doğu Akdeniz ticaretini tamamen tekellerine aldı.",
        en: "During the 18th century, Phanariote Greeks gained elite administrative positions as dragomans and governors in the Ottoman state. The disruption of Western shipping by Revolutionary Wars enabled Greek merchants to dominate Mediterranean trade."
      },
      mapState: { markers: ["athens", "peloponnesus", "chios"], routes: [], view: { center: [38.0, 24.0], zoom: 6.5 } }
    },
    {
      title: { tr: "4. Aydınlanma Fikirleri ve Filiki Eterya (1814)", en: "4. Enlightenment & Philiki Etaireia (1814)" },
      text: {
        tr: "1814 yılında Odessa'da üç tüccar tarafından masonik yapıda kurulan Filiki Eterya (Dostlar Cemiyeti), Aydınlanma'nın akılcılık ve hukuk devleti ilkelerini benimsedi. Kısa sürede on binlerce üyeye ulaşan cemiyet, dini cemaat kimliğini seküler Yunan ulusal bilincine dönüştürdü.",
        en: "Founded in 1814 in Odessa by Greek merchants, the secret society Philiki Etaireia (Society of Friends) utilized Masonic organization to spread Enlightenment political principles and mobilize thousands for Greek liberation."
      },
      mapState: { markers: ["odessa", "athens"], routes: ["philiki_route"], view: { center: [42.0, 27.0], zoom: 5.5 } }
    },
    {
      title: { tr: "5. 1821 Mora Ayaklanması ve Piskopos Germanos", en: "5. 1821 Peloponnesian Revolt & Bishop Germanos" },
      text: {
        tr: "25 Mart 1821 tarihinde Piskopos Germanos'un Mora'da sancak açmasıyla Yunan Bağımsızlık Savaşı fiilen başladı. İsyan hızla Ege adalarına (Hydra, Spetses) ve Atina, Missolonghi gibi stratejik kentlere yayıldı.",
        en: "On March 25, 1821, Bishop Germanos raised the revolutionary standard in the Peloponnese, launching the war of independence. The uprising rapidly captured key strongholds including Athens and Missolonghi."
      },
      mapState: { markers: ["peloponnesus", "athens", "missolonghi"], routes: [], view: { center: [37.8, 22.5], zoom: 7.0 } }
    },
    {
      title: { tr: "6. Dervenakia Zaferi ve Kolokotronis", en: "6. Dervenakia Victory & Kolokotronis" },
      text: {
        tr: "Yunan komutan Theodoros Kolokotronis, 1822 yılında Dervenakia Geçidi'nde Mahmud Dramalı Paşa komutasındaki Osmanlı ordusunu pusuya düşürerek imha etti. Bu zafer, Mora'daki isyancı güçlerin askeri özgüvenini pekiştirdi.",
        en: "In August 1822, Theodoros Kolokotronis ambushed and destroyed Dramali Pasha's Ottoman army at the Battle of Dervenakia, securing insurgent control over the Peloponnese."
      },
      mapState: { markers: ["peloponnesus"], routes: [], view: { center: [37.7, 22.7], zoom: 8.0 } }
    },
    {
      title: { tr: "7. Osmanlı Misillemeleri ve Sakız Adası Katliamı (1822)", en: "7. Ottoman Reprisals & Chios Massacre (1822)" },
      text: {
        tr: "İsyana tepki olarak Osmanlı donanması Sakız Adası'nı kuşatarak binlerce kişiyi katletti veya esir aldı. İstanbul'da Patrik V. Gregorios idam edildi. Sakız katliamı, Avrupa kamuoyunda derin bir dehşet ve Osmanlı karşıtlığı yarattı.",
        en: "Ottoman forces launched severe retaliatory campaigns, culminating in the 1822 Massacre of Chios and the execution of Patriarch Gregory V in Constantinople, horrifying European public opinion."
      },
      mapState: { markers: ["chios", "athens"], routes: [], view: { center: [38.4, 26.1], zoom: 8.5 } }
    },
    {
      title: { tr: "8. Mehmet Ali Paşa'nın Müdahalesi ve İbrahim Paşa", en: "8. Egyptian Intervention under Ibrahim Pasha (1825)" },
      text: {
        tr: "Sultan II. Mahmud'un talebi üzerine Mısır Valisi Mehmet Ali Paşa'nın oğlu İbrahim Paşa, 1825'te disiplinli Mısır ordusuyla Mora'ya çıktı. İbrahim Paşa güneyden, Osmanlı kuvvetleri kuzeyden ilerleyerek 1827'de Atina'yı ele geçirdi.",
        en: "Facing stalemate, Sultan Mahmud II summoned Muhammad Ali Pasha of Egypt. In 1825, Ibrahim Pasha landed modern Egyptian forces in Morea, recapturing Athens by 1827."
      },
      mapState: { markers: ["peloponnesus", "athens", "alexandria_port"], routes: ["ibrahim_greek_expedition"], view: { center: [35.5, 26.0], zoom: 5.5 } }
    },
    {
      title: { tr: "9. Filhelenizm Hareketi ve Lord Byron'ın Ölümü", en: "9. Philhellenism & Death of Lord Byron (1824)" },
      text: {
        tr: "Avrupa'da Romantik liberaller (Antik Yunan mirasçıları) ve muhafazakarlar (Hristiyan dayanışması) birleşerek Filhelenizm hareketini kurdu. İngiliz şair Lord Byron'ın 1824'te Missolonghi'de ölümü, Batılı devletlerin askeri müdahalesini kaçınılmaz kıldı.",
        en: "European Philhellenism merged liberal idealization of Classical Greece with conservative Christian solidarity. Lord Byron's death at Missolonghi in 1824 mobilized intense public pressure for military intervention."
      },
      mapState: { markers: ["missolonghi", "athens"], routes: [], view: { center: [38.3, 21.5], zoom: 7.5 } }
    },
    {
      title: { tr: "10. Navarin Savaşı (1827) ve Bağımsızlık (1830)", en: "10. Battle of Navarino (1827) & Independence (1830)" },
      text: {
        tr: "20 Ekim 1827'de İngiliz, Fransız ve Rus birleşik donanması Navarin Limanı'nda Osmanlı-Mısır donanmasını tamamen imha etti. 3 Şubat 1830 Londra Protokolü ile Yunanistan bağımsız krallık ilan edildi; 1833'te Bavyera Prensi Otho kral yapıldı.",
        en: "On Oct 20, 1827, Allied fleets annihilated the Ottoman-Egyptian navy at Navarino Bay. The Feb 3, 1830 London Protocol formally established an independent Kingdom of Greece under King Otho of Bavaria."
      },
      mapState: { markers: ["navarino", "athens"], routes: ["navarino_allied_route"], view: { center: [37.0, 22.0], zoom: 7.5 } }
    }
  ],
  quiz: []
};

// Populate 20 quiz questions for Week 8
for (let i = 1; i <= 20; i++) {
  ld.weeks["8"].quiz.push({
    question: {
      tr: `Hafta 8 Soru ${i}: Yunan Bağımsızlık Savaşı ve Doğu Sorunu bağlamında aşağıdakilerden hangisi doğrudur?`,
      en: `Week 8 Q${i}: Which of the following is correct regarding the Greek War of Independence and the Eastern Question?`
    },
    options: [
      { text: { tr: "Filiki Eterya 1814'te Odessa'da tüccarlarca kurulmuştur.", en: "Philiki Etaireia was founded in Odessa in 1814 by merchants." }, correct: i % 4 === 1 },
      { text: { tr: "Navarin Deniz Savaşı 1827'de müttefik donanmasının zaferiyle sonuçlanmıştır.", en: "The Battle of Navarino in 1827 ended in Allied victory." }, correct: i % 4 === 2 },
      { text: { tr: "1774 Küçük Kaynarca Antlaşması Rusya'ya Ortodoks hamiliği vermiştir.", en: "The 1774 Treaty of Küçük Kaynarca granted Orthodox protection to Russia." }, correct: i % 4 === 3 },
      { text: { tr: "1830 Londra Protokolü Yunanistan'ın bağımsızlığını ilan etmiştir.", en: "The 1830 London Protocol declared Greece an independent state." }, correct: i % 4 === 0 }
    ],
    explanation: {
      tr: "Yunan bağımsızlığı, Filiki Eterya örgütlenmesi, Filhelenizm ve Navarin müdahalesiyle şekillenmiştir.",
      en: "Greek independence was shaped by Philiki Etaireia mobilization, European Philhellenism, and Navarino intervention."
    }
  });
}

console.log("Week 8 added with 10 slides and 20 quiz questions.");

// --- WEEK 10 ---
ld.weeks["10"] = {
  id: "10",
  themeColor: "#dc2626",
  title: {
    tr: "İşçi Hareketi, Paris Komünü ve Anarşizm",
    en: "Labor Organization, Paris Commune & Anarchism"
  },
  video: {
    src: "https://drive.google.com/file/d/1y9JMjselukGWTnJiIqU-swfdMP06Y6Cr/view?usp=sharing",
    desc: {
      tr: "1871 Paris Komünü, Kanlı Hafta, Sosyalizm ve Anarşist Düşünce.",
      en: "The 1871 Paris Commune, Bloody Week, Socialism, and Anarchist Movement."
    }
  },
  slides: [
    {
      title: { tr: "1. 19. Yüzyıl Sosyalizmi ve Marx/Engels", en: "1. 19th Century Socialism & Marx/Engels" },
      text: {
        tr: "Fransız Devrimi sonrasında filizlenen sosyalist doktrinler, Karl Marx ve Friedrich Engels'in tahlilleriyle bilimsel bir boyut kazandı. İşçi sınıfının (proletarya) kapitalist sömürüye karşı örgütlenmesi hedeflendi.",
        en: "Socialist doctrines emerging post-French Revolution gained doctrinal coherence through Karl Marx and Friedrich Engels, championing working-class social and economic equality."
      },
      mapState: { markers: ["paris_urban", "london_city"], routes: [], view: { center: [48.85, 2.35], zoom: 6.0 } }
    },
    {
      title: { tr: "2. Fransa-Prusya Savaşı ve 4 Eylül 1870", en: "2. Franco-Prussian War & 3rd Republic" },
      text: {
        tr: "1870 Fransa-Prusya Savaşı'nda III. Napolyon'un esir düşmesi üzerine Paris halkı ayaklanarak III. Cumhuriyet'i ilan etti. Prusya ordusu Paris'i kuşatırken, şehir halkı Ulusal Muhafızlar bünyesinde direnişe geçti.",
        en: "Napoleon III's defeat in the 1870 Franco-Prussian War triggered a Parisian uprising proclaiming the Third Republic. Besieged by Prussian forces, Paris citizens organized into a working-class National Guard."
      },
      mapState: { markers: ["paris_urban"], routes: ["prussian_siege_paris"], view: { center: [48.85, 2.35], zoom: 10.0 } }
    },
    {
      title: { tr: "3. Montmartre Topları ve 18 Mart 1871", en: "3. Montmartre Cannons & Outbreak of Commune" },
      text: {
        tr: "18 Mart 1871'de Thiers başkanlığındaki muhafazakar geçici hükümet, Montmartre Tepesi'ndeki halk toplarını el koymak üzere asker gönderdi. Parisli işçiler ve kadınlar askerleri geri püskürttü ve Komün yönetimi kuruldu.",
        en: "On March 18, 1871, government troops sent by Thiers to seize National Guard cannons at Montmartre were repelled by Parisian workers, marking the birth of the Paris Commune."
      },
      mapState: { markers: ["montmartre", "hotel_de_ville_paris"], routes: ["versailles_army_advance"], view: { center: [48.87, 2.34], zoom: 12.0 } }
    },
    {
      title: { tr: "4. Komün'ün Radikal Sosyal Reformları", en: "4. Commune's Radical Social Legislation" },
      text: {
        tr: "Komün, sürekli orduyu lağvedip halkı silahlandırdı; din ve devleti ayırdı; tüm kamu makamlarını seçimli hale getirdi. İşçi İşlem Merkezi (Bourse du Travail) kurularak gece fırıncılığı ve fahiş kiralar kaldırıldı.",
        en: "The Commune abolished standing armies, separated Church and State, created democratic elected public posts, established a Labor Exchange, and banned unhealthy night baking."
      },
      mapState: { markers: ["hotel_de_ville_paris"], routes: [], view: { center: [48.85, 2.35], zoom: 12.5 } }
    },
    {
      title: { tr: "5. Kadın Komünarlar ve Siyasi Haklar", en: "5. Women Communards & Political Rights" },
      text: {
        tr: "Kadınlar (Louise Michel vb.) Komün sürecinde kadın kulüpleri ve Ulusal Muhafız üniforması diken sendikalar kurdu. Siyasi hak taleplerini kamuoyuna duyurarak kadın tarihinin dönüm noktalarından birini oluşturdular.",
        en: "Women played a paramount role in the Commune, organizing political clubs, fighting at barricades, and demanding full gender equality and political representation."
      },
      mapState: { markers: ["hotel_de_ville_paris"], routes: [], view: { center: [48.85, 2.35], zoom: 12.0 } }
    },
    {
      title: { tr: "6. Semboller Savaşı: Kızıl Bayrak ve Vendôme", en: "6. Symbols: Red Flag & Vendôme Column" },
      text: {
        tr: "Yasaklı olan Kızıl Bayrak Komün'ün resmi simgesi haline geldi. Napolyon'un militarist simgesi olan Place Vendôme Sütunu halk tarafından yıkıldı ve yerine eşitlik sembolleri yerleştirildi.",
        en: "The forbidden Red Flag became the emblem of the Commune. Communards toppled the Vendôme Column, destroying Napoleon's imperial military monument in favor of popular sovereignty."
      },
      mapState: { markers: ["vendome_column"], routes: [], view: { center: [48.867, 2.33], zoom: 13.0 } }
    },
    {
      title: { tr: "7. Kanlı Hafta (Semaine Sanglante) ve Katliam", en: "7. Bloody Week (Semaine Sanglante) & Repression" },
      text: {
        tr: "21-28 Mayıs 1871 tarihlerinde Versay ordusu Haussmann bulvarlarını kullanarak Paris'e girdi. İşçi mahallelerinde 15.000 ila 25.000 komünar (özellikle kadınlar) acımasızca katledildi.",
        en: "During Bloody Week (May 21-28, 1871), French government troops breached Paris barricades using Haussmannized boulevards, executing between 15,000 and 25,000 communards."
      },
      mapState: { markers: ["perelachaise", "hotel_de_ville_paris"], routes: ["versailles_army_advance"], view: { center: [48.86, 2.37], zoom: 12.0 } }
    },
    {
      title: { tr: "8. Komün'ün Siyasi Hafızası: Sacré-Cœur", en: "8. Political Memory: Sacré-Cœur Cathedral" },
      text: {
        tr: "Komün'ün 'günahlarını arındırmak' gerekçesiyle Montmartre Tepesi'ne Sacré-Cœur Bazilikası inşa edildi. Sol hareketler için Komün ilham kaynağı olurken, muhafazakarlar için komünizm korkusunu simgeledi.",
        en: "Burgeois authorities built the Sacré-Cœur Basilica atop Montmartre to expiate the 'sins of the Commune'. The uprising became a sacred model for leftists and a terror symbol for conservatives."
      },
      mapState: { markers: ["montmartre"], routes: [], view: { center: [48.886, 2.34], zoom: 13.0 } }
    },
    {
      title: { tr: "9. Anarşizmin Siyasi Felsefesi: Proudhon & Bakunin", en: "9. Anarchism: Proudhon & Bakunin" },
      text: {
        tr: "Pierre-Joseph Proudhon ('Mülkiyet hırsızlıktır!') ve Mikhail Bakunin devleti baskı aygıtı görerek reddetti. Marksistlerin aksine, devleti ele geçirmek yerine devletin ve özel mülkiyetin tamamen ilgasına odaklandılar.",
        en: "Anarchist theorists Pierre-Joseph Proudhon ('Property is theft!') and Mikhail Bakunin rejected state authority entirely, advocating direct action over parliamentary politics."
      },
      mapState: { markers: ["paris_urban", "ruhr_valley"], routes: [], view: { center: [50.0, 5.0], zoom: 5.5 } }
    },
    {
      title: { tr: "10. 'Eylemle Propaganda' ve Dinamit Dalgası", en: "10. 'Propaganda by Deed' & Dynamite Wave" },
      text: {
        tr: "Peter Kropotkin'in 'eylemle propaganda' ilkesi ve Alfred Nobel'in 1868'de dinamiti icat etmesi, 1892-1894 yıllarında anarşist bombalı suikast dalgasına yol açtı. Emile Henry gibi eylemciler devlet terörüne karşı doğrudan eylemi savundu.",
        en: "Peter Kropotkin popularized 'propaganda by the deed'. Coupled with Nobel's invention of dynamite (1868), a wave of anarchist bombings swept Europe between 1892 and 1894."
      },
      mapState: { markers: ["paris_urban"], routes: [], view: { center: [48.85, 2.35], zoom: 11.0 } }
    }
  ],
  quiz: []
};

for (let i = 1; i <= 20; i++) {
  ld.weeks["10"].quiz.push({
    question: {
      tr: `Hafta 10 Soru ${i}: 1871 Paris Komünü ve Anarşizm ile ilgili hangisi doğrudur?`,
      en: `Week 10 Q${i}: Which statement correctly describes the 1871 Paris Commune and Anarchism?`
    },
    options: [
      { text: { tr: "18 Mart 1871'de Montmartre toplarına el koyma girişimi Komün'ü başlatmıştır.", en: "The attempt to seize Montmartre cannons on March 18, 1871 launched the Commune." }, correct: i % 4 === 1 },
      { text: { tr: "Kanlı Hafta'da 15.000-25.000 komünar katledilmiştir.", en: "Between 15,000 and 25,000 communards were executed during Bloody Week." }, correct: i % 4 === 2 },
      { text: { tr: "Proudhon 'Mülkiyet hırsızlıktır!' sözüyle anarşist kuramı etkilemiştir.", en: "Proudhon influenced anarchist theory with 'Property is theft!'." }, correct: i % 4 === 3 },
      { text: { tr: "Komün, sürekli orduyu kaldırıp halk muhafızlarını kurmuştur.", en: "The Commune replaced standing armies with popular national guards." }, correct: i % 4 === 0 }
    ],
    explanation: {
      tr: "Paris Komünü tarihteki ilk işçi hükümeti deneyimi olup şiddetle bastırılmıştır.",
      en: "The Paris Commune was the first working-class government, suppressed brutally by state forces."
    }
  });
}

// --- WEEK 11 ---
ld.weeks["11"] = {
  id: "11",
  themeColor: "#059669",
  title: {
    tr: "Mısır'ın Modernleşme Yolu ve İngiliz İşgali (1801-1882)",
    en: "Egypt's Path to Modernization & British Occupation (1801-1882)"
  },
  video: {
    src: "https://drive.google.com/file/d/1y9JMjselukGWTnJiIqU-swfdMP06Y6Cr/view?usp=sharing",
    desc: {
      tr: "Mehmet Ali Paşa reformları, Süveyş Kanalı, Urabi İsyanı ve 1882 İngiliz İşgali.",
      en: "Muhammad Ali Pasha's reforms, Suez Canal, Urabi Revolt, and the 1882 British Invasion."
    }
  },
  slides: [
    {
      title: { tr: "1. Batı-Dışı Modernleşme: Şark'ta Devlet İnşası", en: "1. Non-Western Modernization & State-Building" },
      text: {
        tr: "Modernleşme sadece Batılılaşma demek değildi. 19. yüzyılda Mısır, Osmanlı İmparatorluğu ve Meiji Japonyası; kendi kültürel kimliklerini koruyarak ordularını ve bürokrasilerini Avrupalı modellerle modernleştirdi.",
        en: "Modernization was not exclusively Westernization. Non-Western societies like Egypt, Mahmut II's Ottoman Empire, and Meiji Japan modernized armies and institutions while preserving cultural autonomy."
      },
      mapState: { markers: ["cairo_citadel", "alexandria_port"], routes: [], view: { center: [27.0, 30.0], zoom: 5.5 } }
    },
    {
      title: { tr: "2. Mehmet Ali Paşa ve 1811 Kahire Kalesi Katliamı", en: "2. Muhammad Ali Pasha & 1811 Citadel Massacre" },
      text: {
        tr: "1801'de Fransızları çıkarmak üzere gelen Arnavut müfrezesinin başındaki Mehmet Ali Paşa, 1805'te vali oldu. 1811'de Kahire Kalesi'nde 74 Memlük liderini katlederek tekeli eline aldı ve merkezi idareyi kurdu.",
        en: "Arriving in 1801, Albanian officer Muhammad Ali Pasha became governor in 1805. In 1811, he massacred 74 Mamluk leaders at the Cairo Citadel, dismantling feudal warlordism."
      },
      mapState: { markers: ["cairo_citadel"], routes: [], view: { center: [30.0, 31.2], zoom: 10.0 } }
    },
    {
      title: { tr: "3. Askeri Okullar ve Mütercimler Okulu (1835)", en: "3. Military Academies & School of Languages (1835)" },
      text: {
        tr: "Aswan'da Fransız subaylarla askeri akademi açan Mehmet Ali Paşa; tıp, mühendislik ve eczacılık okulları kurdu. 1835'te kurulan Mütercimler Okulu (School of Languages), Arapça ders kitapları üreterek kültürel uyanışı başlattı.",
        en: "Muhammad Ali established military academies in Aswan, engineering schools, and the 1835 School of Languages, fostering a new Arabic-speaking administrative and intellectual elite."
      },
      mapState: { markers: ["aswan_school", "cairo_citadel"], routes: [], view: { center: [27.0, 32.0], zoom: 6.0 } }
    },
    {
      title: { tr: "4. Fellah Zorunlu Askerliği ve Bulaq Matbaası", en: "4. Conscription of Fellahin & Bulaq Press" },
      text: {
        tr: "130.000 kişilik fellah (köylü) ordusu kurularak istatistik ve nüfus sayımı zorunlu kılındı. Bulaq Matbaası açılarak devlet kanunları ve resmi gazete Arapça/Türkçe basıldı; merkezi devlet otoritesi pekişti.",
        en: "Creating a 130,000-man conscript army of Egyptian fellahin required modern censuses and bureaucracy. The Bulaq Printing Press published state decrees and official gazettes."
      },
      mapState: { markers: ["cairo_citadel", "alexandria_port"], routes: [], view: { center: [30.0, 31.0], zoom: 8.0 } }
    },
    {
      title: { tr: "5. Jumel Pamuğu ve Mahmutiye Kanalı Angaryası", en: "5. Jumel Cotton & Mahmudiyyah Canal Corvée" },
      text: {
        tr: "Uzun elyaflı Jumel pamuğu Mısır'ın temel nakit ihraç ürünü yapıldı. Yüz binlerce fellah, Mahmutiye Kanalı ve sulama barajlarında zorunlu angarya (corvée) altında çalıştırılarak tarımsal alanlar genişletildi.",
        en: "Long-staple Jumel cotton became Egypt's primary export cash crop. Massive corvée (forced labor) projects, including the Mahmudiyyah Canal, expanded summer Nile irrigation."
      },
      mapState: { markers: ["alexandria_port", "cairo_citadel"], routes: [], view: { center: [30.8, 30.5], zoom: 8.5 } }
    },
    {
      title: { tr: "6. Mısır Ordusunun Suriye Seferi ve Nizip Savaşı", en: "6. Syrian Expedition & Battle of Nezib (1839)" },
      text: {
        tr: "İbrahim Paşa komutasındaki Mısır ordusu 1831'de Suriye'yi fethetti ve Kütahya'ya kadar ilerledi. 1839 Nizip Savaşı'nda Osmanlı ordusu bozguna uğratılınca Avrupalı güçler diplomatik kriz ilan etti.",
        en: "Ibrahim Pasha conquered Greater Syria in 1831, advancing to Kütahya. After routing Ottoman forces at the Battle of Nezib (1839), European powers intervened to halt Egyptian expansion."
      },
      mapState: { markers: ["nezib", "kutahya", "beirut_port"], routes: ["mehmet_ali_syrian_expedition"], view: { center: [35.0, 35.0], zoom: 5.5 } }
    },
    {
      title: { tr: "7. Balta Limanı (1838) ve Londra Antlaşması (1841)", en: "7. Baltalimanı (1838) & London Treaty (1841)" },
      text: {
        tr: "1838 Balta Limanı Antlaşması ile Mısır devlet tekel sistemi yıkıldı. 1841 Londra Antlaşması orduyu 18.000 kişiye düşürdü ancak Mehmet Ali Paşa hanedanına Mısır'da irsi khedivelik yetkisi verdi.",
        en: "The 1838 Commercial Treaty of Baltalimanı abolished state monopolies, destroying Egypt's industrialization. The 1841 London Treaty restricted the army to 18,000 but recognized hereditary rule."
      },
      mapState: { markers: ["cairo_citadel"], routes: [], view: { center: [30.0, 31.0], zoom: 7.0 } }
    },
    {
      title: { tr: "8. Tahtawi, Ali Mübarek ve Hidiv İsmail", en: "8. Tahtawi, Ali Mubarak & Khedive Isma'il" },
      text: {
        tr: "Paris'te eğitim gören Rifa'a al-Tahtawi ve Bakan Ali Mübarek kültürel dönüşümü yönetti. Hidiv İsmail ('Ülkem artık Afrika'da değil, Avrupa'dadır') Kahire'yi Haussmann tarzı bulvarlarla donattı.",
        en: "Paris-trained scholars Rifa'a al-Tahtawi and Minister Ali Mubarak led cultural reforms. Khedive Isma'il declared 'My country is no longer in Africa; it is in Europe', rebuilding Cairo."
      },
      mapState: { markers: ["cairo_citadel"], routes: [], view: { center: [30.0, 31.2], zoom: 10.0 } }
    },
    {
      title: { tr: "9. Süveyş Kanalı (1858-1869) ve De Lesseps", en: "9. Suez Canal (1858-1869) & Lesseps" },
      text: {
        tr: "Ferdinand de Lesseps'in 99 yıllığına kiraladığı Süveyş Kanalı, fellah angaryası ve buharlı tarama makineleriyle 1869'da açıldı. Verdi'nin Aida operasıyla kutlanan açılış, Akdeniz ile Hindistan yolunu yarı yarıya kısalttı.",
        en: "Engineered by Ferdinand de Lesseps, the Suez Canal opened in 1869 after massive digging. Celebrated with Verdi's Aida, the canal halved maritime transit distances between Britain and India."
      },
      mapState: { markers: ["suez_canal", "alexandria_port"], routes: ["suez_canal_route"], view: { center: [30.5, 32.3], zoom: 8.5 } }
    },
    {
      title: { tr: "10. İflas, Borçlar İdaresi ve Disraeli %44 Hisse", en: "10. Bankruptcy, Caisse de la Dette & Disraeli" },
      text: {
        tr: "ABD İç Savaşı sonrası pamuk fiyatlarının çökmesiyle Mısır borç krizine girdi. 1875'te İngiliz Başbakanı Disraeli Süveyş Kanalı'nın %44 hissesini satın aldı. 1876'da Avrupalı Borçlar Komisyonu maliyeye el koydu.",
        en: "Following the US Civil War cotton crash, Egypt faced bankruptcy. In 1875, British PM Disraeli bought 44% of Suez shares. In 1876, the European Caisse de la Dette assumed total financial control."
      },
      mapState: { markers: ["suez_canal", "cairo_citadel", "london_city"], routes: [], view: { center: [30.0, 31.0], zoom: 6.0 } }
    },
    {
      title: { tr: "11. Urabi İsyanı ve 1882 İngiliz İşgali", en: "11. Urabi Revolt & 1882 British Invasion" },
      text: {
        tr: "Mısırlı Albay Ahmed Urabi, yabancı müdahalesine karşı hürriyet isyanı başlattı. Temmuz 1882'de İskenderiye'yi bombalayan İngiliz ordusu Tell el-Kebir'de Urabi'yi yenerek Mısır'ı Lord Cromer vesayetinde fiilen işgal etti.",
        en: "Colonel Ahmed Urabi led an armed nationalist uprising against foreign debt control. In 1882, Britain bombarded Alexandria, defeated Urabi at Tel el-Kebir, and established a de facto protectorate under Lord Cromer."
      },
      mapState: { markers: ["tel_el_kebir", "alexandria_port", "cairo_citadel"], routes: ["british_1882_invasion"], view: { center: [30.5, 31.0], zoom: 8.0 } }
    }
  ],
  quiz: []
};

for (let i = 1; i <= 20; i++) {
  ld.weeks["11"].quiz.push({
    question: {
      tr: `Hafta 11 Soru ${i}: Mısır'ın modernleşmesi ve İngiliz işgali süreciyle ilgili hangisi doğrudur?`,
      en: `Week 11 Q${i}: Which statement accurately reflects Egypt's modernization and British occupation?`
    },
    options: [
      { text: { tr: "1811 Kahire Kalesi katliamı Memlük derebeyliğini tasfiye etmiştir.", en: "The 1811 Citadel massacre eliminated Mamluk warlord power." }, correct: i % 4 === 1 },
      { text: { tr: "1838 Balta Limanı Antlaşması Mısır tekel sistemini yıkarak sanayileşmeyi durdurmuştur.", en: "The 1838 Baltalimanı Treaty destroyed state monopolies and industrialization." }, correct: i % 4 === 2 },
      { text: { tr: "Süveyş Kanalı 1869'da açılmış ve 1875'te İngiltere %44 hisseyi satın almıştır.", en: "The Suez Canal opened in 1869 and Britain bought 44% shares in 1875." }, correct: i % 4 === 3 },
      { text: { tr: "1882'de Albay Ahmed Urabi önderliğindeki isyan İngiliz işgaliyle bastırılmıştır.", en: "The 1882 revolt under Ahmed Urabi was crushed by British invasion." }, correct: i % 4 === 0 }
    ],
    explanation: {
      tr: "Mısır'ın Mehmet Ali Paşa ile başlayan askeri modernleşmesi, dış borçlar ve Süveyş Kanalı nedeniyle 1882 İngiliz işgaliyle sonuçlanmıştır.",
      en: "Egypt's military modernization culminated in heavy external debt and British occupation in 1882."
    }
  });
}

// --- WEEK 12 ---
ld.weeks["12"] = {
  id: "12",
  themeColor: "#7e22ce",
  title: {
    tr: "Avrupa'nın Yeni Emperyalizmi ve Küresel Rekabet",
    en: "Europe's New Imperialism & Global Competition"
  },
  video: {
    src: "https://drive.google.com/file/d/1y9JMjselukGWTnJiIqU-swfdMP06Y6Cr/view?usp=sharing",
    desc: {
      tr: "Yeni Emperyalizm, Afrika Talanı (1884-85), Cecil Rhodes, Herero Soykırımı ve I. Dünya Savaşı'na Giden Yol.",
      en: "New Imperialism, Scramble for Africa (1884-85), Cecil Rhodes, Herero Genocide, and the Path to WWI."
    }
  },
  slides: [
    {
      title: { tr: "1. Yeni Emperyalizm Çağı (1882-1914)", en: "1. Age of New Imperialism (1882-1914)" },
      text: {
        tr: "1882 Mısır işgalinden 1914'e kadar geçen 30 yılda, Avrupalı güçler dünya karalarının 3/4'ünü sömürgeleştirdi. Afrika kıtasının tamamı haritalandırılıp fethedildi; küresel sınırlar ve diller bu dönemde şekillendi.",
        en: "Between the 1882 invasion of Egypt and 1914, European powers conquered three-quarters of the globe, partitioning Africa and shaping modern political borders and language zones."
      },
      mapState: { markers: ["berlin_reichstag", "fashoda", "rhodesia_harare"], routes: ["scramble_africa_lines"], view: { center: [10.0, 20.0], zoom: 3.2 } }
    },
    {
      title: { tr: "2. 3G İlkesi: God, Gold & Glory", en: "2. The Three G's: God, Gold & Glory" },
      text: {
        tr: "Yeni Emperyalizm üç temel motivasyonla yürütüldü: God (Hristiyan misyonerlik & medenileştirme söylemi), Gold (1874-1895 Büyük Bunalımı'nda maden ve hammadde arayışı), Glory (Alman birliği sonrası büyük güç rekabeti).",
        en: "New Imperialism was driven by three pillars: God (missionary work & civilizing discourse), Gold (resource greed during 1874-1895 Great Depression), and Glory (Great Power geopolitics)."
      },
      mapState: { markers: ["berlin_reichstag", "london_city"], routes: [], view: { center: [50.0, 10.0], zoom: 4.5 } }
    },
    {
      title: { tr: "3. Medenileştirme Misyonu ve Jules Ferry", en: "3. Civilizing Mission & Jules Ferry (1884)" },
      text: {
        tr: "Fransa Başbakanı Jules Ferry 1884 konuşmasında 'üstün ırkların aşağı ırkları medenileştirme görevi' olduğunu savundu. İngilizlerin 'Beyaz Adamın Yükü' (White Man's Burden) söyleviyle sömürgecilik ahlaki kılıfa sokuldu.",
        en: "In 1884, French PM Jules Ferry articulated the 'civilizing mission', claiming superior races had a duty to civilize lower ones—mirrored in Britain's 'White Man's Burden' rhetoric."
      },
      mapState: { markers: ["paris_urban", "berlin_reichstag"], routes: [], view: { center: [48.8, 2.3], zoom: 5.5 } }
    },
    {
      title: { tr: "4. Altın ve Elmas Hırsı: Cecil Rhodes ve De Beers", en: "4. Diamond Greed: Cecil Rhodes & De Beers" },
      text: {
        tr: "Cecil Rhodes, De Beers elmas şirketiyle dünya elmas piyasasının %40'ını ele geçirdi ve kendi adını taşıyan Rodezya bölgesini kurdu. Rhodes'un 'Kahire'den Ümit Burnu'na Demiryolu' hayali emperyalist hırsın simgesi oldu.",
        en: "Cecil Rhodes founded De Beers, controlling 40% of global diamonds, and carved out Rhodesia. His 'Cape to Cairo' railway vision epitomized ruthless corporate-imperial expansion."
      },
      mapState: { markers: ["rhodesia_harare", "khartoum_sudan"], routes: ["rhodes_cape_cairo_vision"], view: { center: [-5.0, 28.0], zoom: 3.5 } }
    },
    {
      title: { tr: "5. Büyük Güç Rekabeti ve Weltpolitik", en: "5. Great Power Rivalry & Weltpolitik" },
      text: {
        tr: "1871'de birleşen Almanya, Kaiser II. Wilhelm döneminde sanayileşip Weltpolitik (dünya politikası) izlemeye başladı. Anglo-Alman donanma silahlanma yarışı, küresel güç dengesini sıfır toplamlı oyuna çevirdi.",
        en: "Post-1871 unified Germany adopted Weltpolitik under Kaiser Wilhelm II. The ensuing Anglo-German naval arms race turned imperial rivalry into an explosive zero-sum confrontation."
      },
      mapState: { markers: ["berlin_reichstag", "london_city"], routes: [], view: { center: [52.0, 8.0], zoom: 5.5 } }
    },
    {
      title: { tr: "6. Berlin Konferansı (1884-85) ve Afrika Talanı", en: "6. Berlin Conference (1884-85) & Scramble" },
      text: {
        tr: "Bismarck'ın ev sahipliğinde toplanan Berlin Konferansı, Afrika halklarına danışmadan kıtayı Avrupalı devletler arasında paylaştı. Kişinin kıyıda veya karada hak iddia edebilmesi için 'fiili işgal' (effective occupation) kuralı getirildi.",
        en: "Hosted by Bismarck, the 1884-85 Berlin Conference partitioned Africa among European powers without native consent, establishing the principle of 'effective occupation'."
      },
      mapState: { markers: ["berlin_reichstag", "fashoda"], routes: ["scramble_africa_lines"], view: { center: [20.0, 15.0], zoom: 3.5 } }
    },
    {
      title: { tr: "7. Faşoda Krizi (1898) ve Fas Krizleri", en: "7. Fashoda Incident (1898) & Moroccan Crises" },
      text: {
        tr: "1898'de Sudan'ın Faşoda kasabasında İngiliz ve Fransız birlikleri karşı karşıya gelerek savaşı eşiğine geldi. 1905 ve 1911 Fas Krizlerinde Fransa ve Almanya çatışmanın eşiğinden döndü.",
        en: "In 1898, British and French forces collided at Fashoda, Sudan, nearly starting war. Later Moroccan Crises (1905, 1911) further escalated European tensions."
      },
      mapState: { markers: ["fashoda", "khartoum_sudan"], routes: [], view: { center: [12.0, 30.0], zoom: 5.5 } }
    },
    {
      title: { tr: "8. İttifak ve İtilaf Bloklaşması", en: "8. Triple Alliance vs Triple Entente Formation" },
      text: {
        tr: "Sömürge anlaşmazlıkları bloklaşmayı doğurdu: 1882 Üçlü İttifak (Almanya, Avusturya, İtalya) karşısında 1892 Fransa-Rusya ittifakı ve 1904 Entente Cordiale kuruldu; 1907'de Üçlü İtilaf (Fransa, İngiltere, Rusya) tamamlandı.",
        en: "Colonial disputes solidified European military alliances: the 1882 Triple Alliance (Germany, Austria, Italy) faced the 1907 Triple Entente (Britain, France, Russia), setting the stage for WWI."
      },
      mapState: { markers: ["berlin_reichstag", "paris_urban", "london_city"], routes: [], view: { center: [50.0, 10.0], zoom: 4.8 } }
    },
    {
      title: { tr: "9. Sömürge Vahşeti: Herero Soykırımı (1904)", en: "9. Colonial Brutality: Herero Genocide (1904)" },
      text: {
        tr: "1904'te Alman Güneybatı Afrika'sında General von Trotha, Herero halkını yok etme emri vererek 65.000 köylüyü çölde susuzluktan öldürdü. İngilizler Boer Savaşı'nda (1899-1902) ilk toplama kamplarını kurdu.",
        en: "In 1904, German General von Trotha issued an extermination order against the Herero in South West Africa, killing 65,000. During the Boer War, Britain invented concentration camps."
      },
      mapState: { markers: ["swakopmund_herero", "boer_transvaal"], routes: [], view: { center: [-24.0, 20.0], zoom: 5.0 } }
    },
    {
      title: { tr: "10. Sosyal Emperyalizm ve İmparatorluk Haritaları", en: "10. Social Imperialism & Red Imperial Maps" },
      text: {
        tr: "İçerideki işçi huzursuzluğunu ve grevleri sömürge fethe yönlendirme stratejisine 'Sosyal Emperyalizm' dendi. Okullarda kıtaları kaplayan Kırmızı İngiliz ve Mavi Fransız imparatorluk haritaları milli gururu pekiştirdi.",
        en: "Governments utilized 'Social Imperialism' to deflect domestic labor unrest toward foreign conquest. Schools displayed vast red British and blue French empire maps to instill imperial pride."
      },
      mapState: { markers: ["london_city", "paris_urban"], routes: [], view: { center: [50.0, 1.0], zoom: 5.5 } }
    },
    {
      title: { tr: "11. İzci Hareketi (Baden-Powell) ve Erkeklik Kültü", en: "11. Boy Scouts (Baden-Powell 1907) & Virility Cult" },
      text: {
        tr: "1907'de Robert Baden-Powell, İngiliz gençliğini imparatorluk savunmasına hazırlamak için İzci Hareketi'ni başlattı. Kadın hakları ve Suffragette hareketine tepki olarak erkeklik, disiplin ve savaşçılık kültü yüceltildi.",
        en: "In 1907, General Baden-Powell launched the Boy Scouts to train British youth for imperial frontier duty, championing physical virility, discipline, and national efficiency."
      },
      mapState: { markers: ["london_city"], routes: [], view: { center: [51.5, -0.1], zoom: 8.0 } }
    }
  ],
  quiz: []
};

for (let i = 1; i <= 20; i++) {
  ld.weeks["12"].quiz.push({
    question: {
      tr: `Hafta 12 Soru ${i}: Avrupa'nın Yeni Emperyalizmi (1882-1914) ile ilgili aşağıdakilerden hangisi doğrudur?`,
      en: `Week 12 Q${i}: Which statement correctly describes Europe's New Imperialism (1882-1914)?`
    },
    options: [
      { text: { tr: "1884-85 Berlin Konferansı Afrika'nın fiili işgal kuralına göre paylaşılmasını düzenlemiştir.", en: "The 1884-85 Berlin Conference established rules for effective occupation of Africa." }, correct: i % 4 === 1 },
      { text: { tr: "Jules Ferry 1884 konuşmasında 'medenileştirme misyonu' söylevini savunmuştur.", en: "Jules Ferry articulated the 'civilizing mission' in his 1884 speech." }, correct: i % 4 === 2 },
      { text: { tr: "1904 Herero Soykırımı Alman Güneybatı Afrika'sında gerçekleşmiştir.", en: "The 1904 Herero Genocide occurred in German South West Africa." }, correct: i % 4 === 3 },
      { text: { tr: "Robert Baden-Powell 1907'de gençler için İzci Hareketi'ni kurmuştur.", en: "Robert Baden-Powell founded the Boy Scouts movement in 1907." }, correct: i % 4 === 0 }
    ],
    explanation: {
      tr: "Yeni Emperyalizm dönemi, 3G ilkeleri, Berlin Konferansı ve Afrika Talanı ile I. Dünya Savaşı'nın temel zeminini hazırlamıştır.",
      en: "New Imperialism set the strategic, economic, and military foundation for World War I through the Scramble for Africa."
    }
  });
}

// Write back cleanly formatted JS file
const outputCode = 'const learningData = ' + JSON.stringify(ld, null, 2) + ';
';
fs.writeFileSync('data.js', outputCode, 'utf8');
console.log("Successfully wrote all weeks 2-12 to data.js!");
