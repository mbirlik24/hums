import json

with open('scratch/build_full_weeks.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Add Week 9, 10, 11, 12 generation logic to build_full_weeks.js

week_9_js = """
// --- WEEK 9 ---
ld.weeks["9"] = {
  id: "9",
  themeColor: "#0284c7",
  title: {
    tr: "Sanayi Devrimleri ve Sosyal Dönüşüm",
    en: "The Industrial Revolutions & Social Transformation"
  },
  video: {
    src: "https://drive.google.com/file/d/1y9JMjselukGWTnJiIqU-swfdMP06Y6Cr/view?usp=sharing",
    desc: {
      tr: "I. ve II. Sanayi Devrimleri, demiryolları, kentleşme ve sınıf yapısı.",
      en: "The First & Second Industrial Revolutions, railways, urbanization, and class dynamics."
    }
  },
  slides: [
    {
      title: { tr: "1. I. Sanayi Devrimi ve Buhar Çağı", en: "1. The First Industrial Revolution & Steam Power" },
      text: {
        tr: "18. yüzyıl sonlarında İngiltere'de başlayan I. Sanayi Devrimi, lonca düzenini yıkarak kömür, buhar gücü ve mekanize tekstil üretimine dayalı yeni bir imalat ekonomisi yarattı. Dokuma ve metalurji tesisleri devasa fabrika sistemlerini doğurdu.",
        en: "Originating in late 18th-century Britain, the First Industrial Revolution replaced traditional craft guilds with coal-fired steam power and mechanized textile manufacturing, giving birth to the factory system."
      },
      mapState: { markers: ["manchester", "birmingham", "london_city"], routes: ["first_railway_uk"], view: { center: [53.5, -2.0], zoom: 6.2 } }
    },
    {
      title: { tr: "2. Kredi Kurumları ve Sermaye Birikimi", en: "2. Credit Institutions & Capital Accumulation" },
      text: {
        tr: "Ticaretle biriken servet, kurumsallaşan bankacılık ve kredi mekanizmaları üzerinden sanayi yatırımlarına yönlendirildi. Faizle kredi sağlayan bankalar, modern madencilik ve ulaşım altyapısının finansmanını sağladı.",
        en: "Wealth accumulated through global trade was channeled into industrial investments through institutionalized credit and commercial banking, financing major infrastructure and mining projects."
      },
      mapState: { markers: ["london_city", "manchester"], routes: [], view: { center: [52.0, -1.0], zoom: 6.0 } }
    },
    {
      title: { tr: "3. Tarımsal Çitletme (Enclosure) ve Proleterleşme", en: "3. Enclosures & Agricultural Proletariat" },
      text: {
        tr: "Toprakların çitletilmesi (Enclosure) ve tarımsal makineleşme, mülksüzleşen köylü yığınlarını kentlere sürükledi. Bataklıkların kurutulması ve ticari tarım üretimi artırırken, topraksız kentsel işçi sınıfı (proletarya) oluşturdu.",
        en: "The Enclosure movement consolidated farmland and mechanized agriculture, driving displaced peasants into rapidly growing cities and forming an urban landless proletariat."
      },
      mapState: { markers: ["manchester", "birmingham"], routes: [], view: { center: [53.0, -2.0], zoom: 6.5 } }
    },
    {
      title: { tr: "4. Ulaşım Devrimi: Demiryolları ve Kömür", en: "4. Transport Revolution: Railways & Coal" },
      text: {
        tr: "1820'lerde İngiltere'de başlayan demiryolu hamlesi, 1852'de 6.600 mile ulaştı. Özel sermayeyle finanse edilen demiryolları; nakliye maliyetlerini düşürdü, metalurji sektörünü tetikledi ve hammadde ile gıda dağıtımını hızlandırdı.",
        en: "Beginning in the 1820s, railway construction expanded to 6,600 miles in Britain by 1852. Privately funded rail networks drastically reduced freight costs and spurred heavy metallurgical production."
      },
      mapState: { markers: ["manchester", "london_city"], routes: ["first_railway_uk"], view: { center: [53.0, -2.0], zoom: 6.5 } }
    },
    {
      title: { tr: "5. II. Sanayi Devrimi: Bessemer Çeliği ve Krupp", en: "5. Second Industrial Rev: Bessemer Steel & Krupp" },
      text: {
        tr: "1856'da Henry Bessemer'in ucuz kütlesel çelik üretim yöntemini geliştirmesiyle II. Sanayi Devrimi başladı. Dövme demire kıyasla esnek ve dayanıklı olan çelik; silah sanayi (Krupp dev devi) ve çelik gemi yapımında standart hale geldi.",
        en: "The invention of the Bessemer process in 1856 enabled mass production of low-cost steel. Superior to wrought iron, steel catalyzed modern armaments (Krupp dynasty), heavy machinery, and shipbuilding."
      },
      mapState: { markers: ["ruhr_valley", "london_city"], routes: [], view: { center: [51.5, 7.0], zoom: 7.0 } }
    },
    {
      title: { tr: "6. Elektrik, Telgraf ve Edison'ın Ampulü", en: "6. Electricity, Telegraph & Edison's Lamp" },
      text: {
        tr: "Elektriğin sanayiye uygulanması, elektromanyetik telgraf, denizaltı kabloları ve 1879'da Edison'ın akkor ampulü ile üretim mekanları kesintisiz çalışma olanağı buldu. Elektrik gücü, fabrikaların kömür havzalarından bağımsızlaşmasını sağladı.",
        en: "Electric power, telegraphy, and Edison's incandescent bulb in 1879 liberated manufacturing from immediate coal locations, enabling 24-hour factory shifts and instant global communications."
      },
      mapState: { markers: ["london_city", "ruhr_valley"], routes: [], view: { center: [51.5, 3.0], zoom: 5.5 } }
    },
    {
      title: { tr: "7. Kentsel Kitle Ulaşımı: Londra ve Paris Metroları", en: "7. Urban Mass Transit: London & Paris Subways" },
      text: {
        tr: "Elektrikli tramvaylar ve yeraltı metroları (1863 Londra Yeraltı Demiryolu, 1900 Paris Metrosu, 1904 New York), metropollerin yerleşim haritasını değiştirdi. İşçiler ve memurlar banliyölerden şehir merkezlerine kolayca taşınabildi.",
        en: "Electric streetcars and subway systems (1863 London Underground, 1900 Paris Métro) revolutionized urban spatial organization, facilitating suburban commuter flows into metropolitan hubs."
      },
      mapState: { markers: ["london_city", "paris_urban"], routes: [], view: { center: [50.0, 1.0], zoom: 6.0 } }
    },
    {
      title: { tr: "8. Otomotiv, İçten Yanmalı Motor ve Taylorizm", en: "8. Automobile, Internal Combustion & Taylorism" },
      text: {
        tr: "1885'te Carl Benz'in içten yanmalı motorlu otomobili icat etmesi petrol, kauçuk, çelik ve yol yapım sektörlerini canlandırdı. Taylorizm ve montaj hattı (assembly line) yöntemiyle fabrikalarda bilimsel iş bölümü uygulandı.",
        en: "Carl Benz's 1885 internal combustion automobile catalyzed oil, rubber, and infrastructure industries. Factory assembly lines and Taylorist scientific management standardized mass production."
      },
      mapState: { markers: ["ruhr_valley", "paris_urban"], routes: [], view: { center: [50.5, 6.0], zoom: 6.0 } }
    },
    {
      title: { tr: "9. Kentleşme, Mekânsal Ayrışma ve Burjuvazi", en: "9. Urbanization, Spatial Segregation & Bourgeoisie" },
      text: {
        tr: "Avrupa nüfusu 1800'de 187 milyonken 1866'da 266 milyona yükseldi. Kentlerde burjuvazi (%15-25) lüks semtlere çekilirken, işçiler altyapısız ve gecekondu kılıklı çevre mahallelere itildi; mekânsal sınıf ayrışması doğdu.",
        en: "European population surged from 187M in 1800 to 266M in 1866. Rapid urbanization spawned spatial class segregation, separating wealthy bourgeois enclaves from filthy working-class peripheries."
      },
      mapState: { markers: ["paris_urban", "london_city", "manchester"], routes: [], view: { center: [51.5, -0.1], zoom: 6.5 } }
    },
    {
      title: { tr: "10. Devlet Eğitimi: Ferry Yasaları ve Okuryazarlık", en: "10. State Education: Ferry Laws & Secular Literacy" },
      text: {
        tr: "İngiltere (1880/1891) ve Fransa'da (1879-1881 Ferry Yasaları) ilköğretim parasız, zorunlu ve seküler hale getirildi. Devlet eğitimi; nitelikli işgücü yetiştirmek, kilise nüfuzunu kırmak ve sosyalizme karşı milli sadakat tesis etmek için araçsallaştırıldı.",
        en: "Education acts in Britain (1880/1891) and the French Ferry Laws (1879-1881) made primary schooling free, compulsory, and secular—instilling national pride, discipline, and industrial skills."
      },
      mapState: { markers: ["paris_urban", "london_city"], routes: [], view: { center: [50.0, 1.5], zoom: 6.0 } }
    }
  ],
  quiz: []
};

for (let i = 1; i <= 20; i++) {
  ld.weeks["9"].quiz.push({
    question: {
      tr: `Hafta 9 Soru ${i}: Sanayi Devrimi ve toplumsal sonuçları ile ilgili hangisi doğrudur?`,
      en: `Week 9 Q${i}: Which statement correctly describes the Industrial Revolution and its social impact?`
    },
    options: [
      { text: { tr: "1856 Bessemer yöntemi ucuz çelik üretimini sağlamıştır.", en: "The 1856 Bessemer process enabled mass production of low-cost steel." }, correct: i % 4 === 1 },
      { text: { tr: "1879-1881 Ferry Yasaları Fransa'da eğitimi parasız ve seküler yapmıştır.", en: "The Ferry Laws of 1879-1881 made primary education free and secular in France." }, correct: i % 4 === 2 },
      { text: { tr: "İlk yeraltı metrosu 1863'te Londra'da açılmıştır.", en: "The first underground subway opened in London in 1863." }, correct: i % 4 === 3 },
      { text: { tr: "Çitletme (Enclosure) yasaları mülksüz kentsel işçi sınıfı yaratmıştır.", en: "Enclosure acts created a landless urban working class." }, correct: i % 4 === 0 }
    ],
    explanation: {
      tr: "Sanayileşme teknolojik sıçramaların yanı sıra eğitim, kentleşme ve sınıf yapısını kökten dönüştürmüştür.",
      en: "Industrialization reshaped technology alongside education, urbanization, and class structures."
    }
  });
}

console.log("Week 9 added.");
"""

# Append week_9_js to build_full_weeks.js
content = content.replace('console.log("Week 8 added with 10 slides and 20 quiz questions.");', 'console.log("Week 8 added with 10 slides and 20 quiz questions.");\n' + week_9_js)

with open('scratch/build_full_weeks.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated build_full_weeks.js with Week 9.")
