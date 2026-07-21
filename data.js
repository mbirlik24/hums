const learningData = {
  activeLanguage: 'tr', // default language
  activeWeek: 2, // default week
  
  weeks: {
    2: {
      id: 2,
      themeColor: "#10b981", // Emerald
      title: {
        en: "The Columbian Exchange",
        tr: "Kolomb Değişimi"
      },
      video: {
        src: "https://drive.google.com/file/d/1y9JMjselukGWTnJiIqU-swfdMP06Y6Cr/view?usp=sharing",
        desc: {
          tr: "Kolomb Değişimi: Yeni Dünya ile Eski Dünya arasındaki biyolojik, ekolojik ve kültürel etkileşimler.",
          en: "The Columbian Exchange: Biological, ecological, and cultural interactions between the New and Old Worlds."
        }
      },
      slides: [
        {
          title: {
            en: "Modernization & The Columbian Exchange",
            tr: "Modernleşme ve Kolomb Değişimi"
          },
          text: {
            en: `<p><strong>Link to Modernization:</strong> This course examines the fundamental historical link between modernization and Westernization, driven primarily by the long-term rise of Europe.</p>
                 <p><strong>The Engine of European Rise:</strong> Europe's rise was not an isolated internal phenomenon; it was fueled by Europe's domination of the Americas and subsequently maritime Asia. This global expansion brought unprecedented goods, riches, and commercial outlets that completely transformed European economies.</p>
                 <p><strong>The Columbian Exchange Defined:</strong> Coined by historian Alfred Crosby (1972), the <em>Columbian Exchange</em> refers to the massive transfer of diseases, ideas, food crops, and human populations between the New World (Americas) and the Old World (Afro-Eurasia) following Christopher Columbus's 1492 voyage (Nunn & Qian, 2010).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Context:</strong> As historian Alfred Crosby emphasized, Columbus's expedition initiated an ecological revolution that tied previously isolated hemispheres into a single global system.
                 </div>`,
            tr: `<p><strong>Modernleşme Bağlantısı:</strong> Bu ders, temel olarak Avrupa'nın uzun vadeli yükselişiyle yönlendirilen modernleşme ve Batılılaşma arasındaki tarihsel bağı incelemektedir.</p>
                 <p><strong>Avrupa Yükselişinin Motoru:</strong> Avrupa'nın yükselişi soyut bir iç süreç değil; Avrupa'nın Amerika kıtalarını ve hemen ardından Asya deniz yollarını tahakküm altına almasıyla tetiklenmiştir. Bu küresel yayılma, Avrupa ekonomilerini kökten dönüştüren emtialar, zenginlikler ve yeni ticari pazarlar sağlamıştır.</p>
                 <p><strong>Kolomb Değişimi Tanımı:</strong> Tarihçi Alfred Crosby (1972) tarafından kavramsallaştırılan <em>Kolomb Değişimi (Columbian Exchange)</em>, Christopher Columbus'un 1492 seferinin ardından Yeni Dünya (Amerika) ile Eski Dünya (Afro-Avrasya) arasında gerçekleşen hastalık, fikir, tarım ürünleri ve nüfus transferini ifade eder (Nunn & Qian, 2010).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Bağlam:</strong> Alfred Crosby'nin belirttiği üzere Kolomb'un seferi, binlerce yıldır birbirinden ayrı evrimleşen ekosistemleri tek bir küresel ağda birleştiren devasa bir ekolojik devrim başlatmıştır.
                 </div>`
          },
          mapState: {
            zoom: "world",
            highlightRegions: ["europe", "americas", "asia"],
            activeRoutes: [],
            markers: ["seville", "lisbon", "santo_domingo"]
          }
        },
        {
          title: {
            en: "Age of Exploration & Maritime Asia",
            tr: "Keşifler Çağı ve Denizci Asya"
          },
          text: {
            en: `<p><strong>Bypassing the Mediterranean:</strong> Everything began with Portuguese and Spanish maritime voyages seeking alternative commercial routes beyond the Mediterranean, which was then dominated by the Ottoman Empire and infested with pirates.</p>
                 <p><strong>The Allure of Maritime Asia:</strong> European exploration targeted the Indian Ocean and maritime Asia because Asian economies (China and India) were vastly richer, more productive, and produced luxury goods Europeans could not make—such as fine textiles from India and porcelain from China and Japan.</p>
                 <p><strong>Portuguese Foothold:</strong> Following the 1494 Treaty of Tordesillas between Spain and Portugal, the Portuguese established their crucial trading hub at Goa in 1510 (Fernandez-Armesto, 2007).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Historical Detail:</strong> The Treaty of Tordesillas (1494) divided the non-European world between Spain and Portugal, prompting Portugal to pioneer deep-sea routes around Africa to tap into Asian wealth.
                 </div>`,
            tr: `<p><strong>Akdeniz'i By-Pass Etmek:</strong> Süreç, Portekizli ve İspanyol denizcilerin Osmanlı İmparatorluğu kontrolünde olan ve korsanlarla dolu Akdeniz'in ötesinde alternatif ticaret yolları arama çabasıyla başladı.</p>
                 <p><strong>Asya Pazarlarının Cazibesi:</strong> Keşiflerin temel hedefi Hint Okyanusu ve Asya deniz ticaretiydi. Çin ve Hindistan ekonomileri Avrupa'dan kıyaslanamayacak kadar zengin ve üretkendi; Hint tekstili ve Çin/Japon porseleni gibi Avrupalıların üretemediği lüks mamuller sunuyordu.</p>
                 <p><strong>Portekiz Üssü:</strong> İspanya ile Portekiz arasındaki 1494 Tordesillas Antlaşması'nın ardından Portekizliler, 1510 yılında Goa ticaret istasyonunu kurarak Asya ticaretine doğrudan sızdılar (Fernandez-Armesto, 2007).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Tarihsel Detay:</strong> 1494 Tordesillas Antlaşması Avrupalı dışı dünyayı Portekiz ve İspanya arasında bölüştürerek Portekiz'i Afrika'yı dolaşan deniz yollarını açmaya teşvik etmiştir.
                 </div>`
          },
          mapState: {
            zoom: "asia",
            highlightRegions: ["europe", "asia"],
            activeRoutes: ["portuguese_route"],
            markers: ["lisbon", "goa", "malacca"]
          }
        },
        {
          title: {
            en: "Spanish Conquests of the Americas",
            tr: "İspanyol İmparatorluk Fetihleri"
          },
          text: {
            en: `<p><strong>Initial Foothold:</strong> For Spain, imperial expansion began with Christopher Columbus's conquest of Hispaniola (1495–1496).</p>
                 <p><strong>Fall of the Empires:</strong> Spain continued its sweep by subduing the Aztec Empire in Mexico under Hernán Cortés in the 1520s, followed by Francisco Pizarro's conquest of the Inca Empire in Peru.</p>
                 <p><strong>Asymmetric Acquisition:</strong> Through these conquests, Spain—a relatively poor and underpopulated European nation—acquired two of the most densely populated and environmentally diverse empires of the era (Fernandez-Armesto, 2007).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Note:</strong> In less than half a century, Spanish conquistadors brought the vast demographic and territorial centers of the Mesoamerican and Andean worlds under Spanish imperial rule.
                 </div>`,
            tr: `<p><strong>İlk Yerleşim:</strong> İspanya için imparatorluk genişlemesi Christopher Columbus'un 1495–1496 yıllarında Hispaniola adasını fethetmesiyle başladı.</p>
                 <p><strong>İmparatorlukların Düşüşü:</strong> İspanyol fatihleri, 1520'lerde Hernán Cortés önderliğinde Meksika'daki Aztek İmparatorluğu'nu, ardından Francisco Pizarro önderliğinde Peru'daki İnka İmparatorluğu'nu ele geçirdi.</p>
                 <p><strong>Asimetrik Kazanım:</strong> İspanya, nüfusu az ve görece yoksul bir Avrupa ülkesi olmasına rağmen dönemin en yoğun nüfuslu ve ekolojik çeşitliliği en yüksek iki büyük imparatorluğuna el koymuş oldu (Fernandez-Armesto, 2007).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Not:</strong> İspanyol conquistadorlar, yarım asırdan kısa bir sürede Mesoamerika ve And dağlarının devasa nüfus ve toprak merkezlerini İspanyol tacına bağladılar.
                 </div>`
          },
          mapState: {
            zoom: "americas",
            highlightRegions: ["americas"],
            activeRoutes: [],
            markers: ["santo_domingo", "tenochtitlan", "cuzco"]
          }
        },
        {
          title: {
            en: "Factors of Spanish Victory",
            tr: "İspanyol Zaferinin Stratejik Faktörleri"
          },
          text: {
            en: `<p><strong>Indigenous Alliances:</strong> Spaniards succeeded by allying with native enemies of the Aztecs, notably the Tlaxcalteca and Huexotzinca.</p>
                 <p><strong>Technological Edge & Civil Fractures:</strong> Superior weaponry (gun-carrying vessels on Lake Texcoco, longbows, steel swords) combined with exploitation of internal civil wars (such as Cañari and Huari resistance to Inca rule).</p>
                 <p><strong>Translation Intelligence:</strong> Doña Marina (La Malinche), a native interpreter fluent in local tongues who quickly mastered Spanish, proved indispensable as the sole person capable of masterminding negotiations (Fernandez-Armesto, 2007).</p>
                 <p><strong>Disease as Chief Ally:</strong> Epidemic disease acted as the most efficient ally of the Spaniards, crippling native populations before military engagements even peaked.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Strategic Reality:</strong> Spanish military numbers were tiny; native allies provided tens of thousands of combatants, making the conquest largely an indigenous civil conflict exploited by Spaniards.
                 </div>`,
            tr: `<p><strong>Yerel İttifaklar:</strong> İspanyolların başarısının arkasındaki en temel etken, Aztek yönetimine düşman olan Tlaxcalteca ve Huexotzinca gibi yerli halklarla ittifak kurmalarıydı.</p>
                 <p><strong>Teknolojik Üstünlük ve İç Savaşlar:</strong> Texcoco Gölü'ne indirilen topçu gemileri, çelik kılıçlar ve zırhlar gibi askeri teknolojiler, İnka egemenliğine direnen Cañari ve Huari gibi grupların taht kavgalarıyla birleşti.</p>
                 <p><strong>İstihbarat ve Tercümanlık:</strong> Yerli dillerini bilip hızla İspanyolca öğrenen Doña Marina (La Malinche), müzakereleri sevk ve idare eden kritik bir figür oldu (Fernandez-Armesto, 2007).</p>
                 <p><strong>En Etkili Müttefik (Hastalık):</strong> Avrupalı mikroplar ve salgınlar, İspanyolların en ölümcül ve etkili müttefiki olarak yerli komuta kademesini ve ordularını önceden felç etti.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Stratejik Gerçek:</strong> İspanyol askerlerinin sayısı birkaç yüz kişiyken, yerli müttefikler binlerce savaşçı sağlamış; fetih aslında Avrupalılarca manipüle edilen bir yerli iç savaşına dönüşmüştür.
                 </div>`
          },
          mapState: {
            zoom: "americas",
            highlightRegions: ["americas"],
            activeRoutes: [],
            markers: ["tenochtitlan", "cuzco", "veracruz"]
          }
        },
        {
          title: {
            en: "Treasure Fleets & Global Trade Networks",
            tr: "Hazine Filoları ve Küresel Ticaret Ağları"
          },
          text: {
            en: `<p><strong>The Treasure Fleets (Flotas):</strong> A convoy system linked Spain to the Americas, injecting Europe's cash-starved economies with massive veins of gold and silver. This increased liquidity stimulated economic exchange across Europe while also causing widespread inflation.</p>
                 <p><strong>Connecting the Globe:</strong> The Atlantic trade wind system—pioneered after the 1513 discovery of the Gulf Stream—established permanent trade loops tying Europe, Africa, and the Americas into a unified global system (Fernandez-Armesto, 2007).</p>
                 <p><strong>Challenging Asian Dominance:</strong> The resource bonanza of the Americas (mineral wealth, fertile land, labor opportunities) allowed traditionally poor Western Europe to accumulate capital and eventually challenge the dominant Asian economies of India and China.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Navigational Breakthrough:</strong> Charting the Gulf Stream (1513) allowed ships to utilize easterly trade winds to cross the Atlantic and westerlies to return safely to Europe.
                 </div>`,
            tr: `<p><strong>Hazine Filoları (Flotas):</strong> İspanya'yı Amerika kolonilerine bağlayan konvoy sistemi, nakit sıkıntısı çeken Avrupa ekonomilerine altın ve gümüş akıttı. Artan likidite ticareti canlandırırken enflasyona (Fiyat Devrimi) yol açtı.</p>
                 <p><strong>Dünyanın Bağlanması:</strong> 1513'te Gulf Stream akıntısının keşfiyle oturan Atlantik rüzgar sistemi; Avrupa, Afrika ve Amerika'yı ilk kez entegre bir küresel sisteme bağladı (Fernandez-Armesto, 2007).</p>
                 <p><strong>Asya Üstünlüğüne Meydan Okuma:</strong> Amerika'nın sunduğu kaynak bonanzası (toprak, maden, işgücü imkanları), tarihsel olarak yoksul olan Avrupa'nın sermaye biriktirerek Çin ve Hindistan gibi dev ekonomilerle rekabet edebilmesini sağladı.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Seyir Atılımı:</strong> 1513'te Gulf Stream'in haritalandırılması, gemilerin alizelerle Amerika'ya gidip batı rüzgarlarıyla güvenle Avrupa'ya dönmesini mümkün kılmıştır.
                 </div>`
          },
          mapState: {
            zoom: "atlantic",
            highlightRegions: ["europe", "americas", "africa"],
            activeRoutes: ["spanish_silver_fleet", "triangular_trade"],
            markers: ["seville", "potosi", "veracruz"]
          }
        },
        {
          title: {
            en: "New World Crops to the Old World",
            tr: "Yeni Dünya Bitkilerinin Eski Dünya'ya Transferi"
          },
          text: {
            en: `<p><strong>Nutritional Revolution:</strong> The Old World gained vital staple crops: potatoes, sweet potatoes, maize (corn), and cassava. Less calorie-intensive items like tomatoes, chili peppers, cacao, peanuts, and pineapples became culinary centerpieces across Eurasia.</p>
                 <p><strong>Global Adaptation:</strong> Tomatoes transformed Mediterranean cuisine; chili peppers revolutionized Indian and Korean cooking; paprika defined Hungarian cuisine (Nunn & Qian, 2010).</p>
                 <p><strong>Virginia Tobacco & The Potato:</strong> John Rolfe introduced Spanish tobacco to Virginia, creating its cash monoculture. Meanwhile, the potato provided high caloric yield and sustained European peasantry through wars because it grew safely underground (Fernandez-Armesto, 2007).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Wartime Advantage:</strong> The potato grew beneath the soil, making it immune to pillaging armies that routinely burned above-ground grain fields across Europe.
                 </div>`,
            tr: `<p><strong>Beslenme Devrimi:</strong> Eski Dünya temel gıdalar kazandı: patates, tatlı patates, mısır ve manyok (cassava). Domates, acı biber, kakao, fıstık ve ananas gibi ürünler Avrasya mutfaklarının merkezine yerleşti.</p>
                 <p><strong>Küresel Uyum:</strong> Domates Akdeniz mutfağını; acı biber Hindistan ve Kore mutfaklarını dönüştürdü; kırmızı biber (paprika) Macar mutfağının simgesi oldu (Nunn & Qian, 2010).</p>
                 <p><strong>Virginia Tütünü ve Patates:</strong> John Rolfe İspanyol tütününü Virginia'ya getirerek bölgenin temel ticari ürününü yarattı. Patates ise yeraltında yetiştiği için orduların yağmasından korunmuş ve Avrupa köylüsünün beslenmesini güvenceye almıştır (Fernandez-Armesto, 2007).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Savaş Zamanı Avantajı:</strong> Patates toprak altında yetiştiği için Avrupa'da tarlaları yakan işgalci orduların yağmasından zarar görmeden kalabiliyordu.
                 </div>`
          },
          mapState: {
            zoom: "world",
            highlightRegions: ["americas", "europe", "asia"],
            activeRoutes: ["columbian_exchange_east"],
            markers: ["jamestown", "seville"]
          }
        },
        {
          title: {
            en: "Old World Crops & Livestock to the Americas",
            tr: "Eski Dünya Bitki ve Hayvanlarının Transferi"
          },
          text: {
            en: `<p><strong>Agricultural Imports:</strong> Out to the Americas went wheat, sugar cane, rice, bananas, coconuts, citrus fruits, and major livestock (horses, cattle, sheep, pigs) (Fernandez-Armesto, 2007).</p>
                 <p><strong>Ecological Transformation:</strong> Introduction of European grasses allowed the Americas to support vast herds of cattle and sheep. Crops like sugar, coffee, and soybeans flourished in American soil (Nunn & Qian, 2010).</p>
                 <p><strong>The Rise of Sugar:</strong> First brought by Columbus in 1492 to Spanish Santo Domingo, sugar cane became the ultimate plantation crop. By the 1580s, Brazil became the world's major producer, creating sugar refining and rum distilling industries while inciting intense European imperial rivalries.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Slavery Link:</strong> As sugar cultivation exploded across Brazil and the Caribbean in the 17th century, it became the single greatest driver of the transatlantic slave trade.
                 </div>`,
            tr: `<p><strong>Tarımsal İthalat:</strong> Amerika kıtalarına buğday, şeker kamışı, pirinç, muz, narenciye ve büyükbaş/küçükbaş hayvanlar (at, sığır, koyun, domuz) taşındı (Fernandez-Armesto, 2007).</p>
                 <p><strong>Ekolojik Dönüşüm:</strong> Otlak otlarının gelişiyle Amerika ovaları devasa sığır ve koyun sürülerini besleyebilir hale geldi. Şeker, kahve ve soya Amerika topraklarında hızla yayıldı (Nunn & Qian, 2010).</p>
                 <p><strong>Şekerin Yükselişi:</strong> İlk kez 1492'de Columbus tarafından Santo Domingo'ya getirilen şeker kamışı, ana plantasyon ürünü oldu. 1580'lerde Brezilya dünyanın bir numaralı üreticisi haline gelerek şeker arıtma ve rom damıtma sanayilerini doğurdu.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Kölelik Bağlantısı:</strong> 17. yüzyılda Brezilya ve Karayipler'de şeker üretiminin patlaması, transatlantik köle ticaretinin en büyük ana motoru olmuştur.
                 </div>`
          },
          mapState: {
            zoom: "atlantic",
            highlightRegions: ["americas", "europe"],
            activeRoutes: ["columbian_exchange_west"],
            markers: ["santo_domingo", "salvador_bahia"]
          }
        },
        {
          title: {
            en: "Demographic Collapse & Microbe Exchange",
            tr: "Demografik Felaket ve Mikrobiyolojik Etkileşim"
          },
          text: {
            en: `<p><strong>Devastating Pathogens:</strong> Europeans transmitted deadly viruses and bacteria—smallpox, measles, typhus, plague, cholera—to isolated indigenous communities who possessed zero biological immunity (Nunn & Qian, 2010).</p>
                 <p><strong>Unprecedented Collapse:</strong> Up to 80%–95% of Native Americans died within 100–150 years after 1492. In Hispaniola, native Taino populations vanished within 50 years; Central Mexico's population plummeted from 15 million in 1519 to 1.5 million a century later.</p>
                 <p><strong>Biological Asymmetry & Syphilis:</strong> Eurasian societies had domesticated numerous animals, developing immunity to zoonotic diseases. In return, European sailors acquired syphilis in Hispaniola, bringing it home to trigger a European epidemic starting in Naples (1495).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Disaster Scale:</strong> Historian Fernandez-Armesto noted that European colonization provoked the worst recorded demographic collapse in human history.
                 </div>`,
            tr: `<p><strong>Ölümcül Patojenler:</strong> Avrupalılar; çiçek, kızamık, tifüs, veba ve kolera gibi ölümcül virüsleri bağışıklığı bulunmayan yerli topluluklara taşıdılar (Nunn & Qian, 2010).</p>
                 <p><strong>Emsalsiz Demografik Çöküş:</strong> 1492'yi izleyen 100–150 yıl içinde yerli nüfusun %80-95'i yok oldu. Hispaniola Taino halkı 50 yılda tükendi; Orta Meksika nüfusu 1519'da 15 milyondan bir asır sonra 1.5 milyona düştü.</p>
                 <p><strong>Biyolojik Asimetri ve Sifilis:</strong> Avrasya toplumları çok sayıda evcil hayvanla yaşadığı için mikroplara bağışıklık geliştirmişti. Avrupalı denizciler ise Amerika'dan sifilis mikrobu kaparak 1495'te Napoli kuşatmasıyla hastalığı Avrupa'ya yaydılar.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Felaketin Boyutu:</strong> Tarihçi Fernandez-Armesto, Amerika'nın sömürgeleştirilmesinin insanlık tarihinde kaydedilmiş en büyük demografik yıkım olduğunu belirtmektedir.
                 </div>`
          },
          mapState: {
            zoom: "americas",
            highlightRegions: ["americas", "europe"],
            activeRoutes: [],
            markers: ["santo_domingo", "tenochtitlan", "naples"]
          }
        },
        {
          title: {
            en: "Tools of Empire & Industrial Raw Materials",
            tr: "İmparatorluk Araçları ve Sanayi Hammaddeleri"
          },
          text: {
            en: `<p><strong>Quinine as a Tool of Empire:</strong> Discovered from the Cinchona tree bark in the Andes, quinine provided the first effective treatment against malaria. Researched extensively by Dr. Thomas Thomson (1841), quinine became an indispensable "tool of empire" allowing Europeans to penetrate and colonize tropical Africa (Nunn & Qian, 2010).</p>
                 <p><strong>Industrial Rubber Demand:</strong> Rubber, native to the South American <em>Hevea</em> tree and Central African wild vines, became vital after the invention of vulcanization (1770s onwards) and the rise of electricity, where rubber served as an essential insulator.</p>
                 <p><strong>The Congo Tragedy:</strong> The intense global demand for rubber fueled severe human exploitation, notably in the Congo, where population collapsed from 25 million in the 1880s to 7.7 million by 1923.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Imperial Impact:</strong> Without Andean quinine protecting troops from malaria, European colonization of interior Africa in the 19th century would have been virtually impossible.
                 </div>`,
            tr: `<p><strong>Kinin ve İmparatorluk Araçları:</strong> And Dağları'ndaki Kınakına ağacı kabuğundan elde edilen kinin, sıtmaya karşı ilk etkili ilaç oldu. Dr. Thomas Thomson (1841) araştırmalarıyla kinin, Avrupalıların tropik Afrika'yı sömürgeleştirmesini sağlayan hayati bir "imparatorluk aracı" oldu (Nunn & Qian, 2010).</p>
                 <p><strong>Sanayi Kauçuk Talebi:</strong> Güney Amerika ve Orta Afrika'dan elde edilen kauçuk, volkanizasyon işlemi ve elektriğin yaygınlaşmasıyla kablo yalıtkanı ve sanayi ürünü olarak stratejik önem kazandı.</p>
                 <p><strong>Kongo Trajedisi:</strong> Kauçuk patlaması devasa insani yıkıma yol açtı; Kongo nüfusu 1880'lerde 25 milyondan 1923 yılında 7.7 milyona kadar geriledi.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>İmparatorluk Etkisi:</strong> And kinini olmasaydı Avrupalıların 19. yüzyılda sıtma kaynağı olan tropik Afrika içlerine nüfuz etmesi neredeyse imkansız olacaktı.
                 </div>`
          },
          mapState: {
            zoom: "world",
            highlightRegions: ["americas", "africa", "europe"],
            activeRoutes: [],
            markers: ["quito", "kinshasa", "london"]
          }
        },
        {
          title: {
            en: "Global Legacy & Demographic Foundations",
            tr: "Küresel Dönüşümler ve İnsanlık Mirası"
          },
          text: {
            en: `<p><strong>Forced Labor & Slavery:</strong> The collapse of native populations paired with lucrative crop cultivation caused the forced abduction and movement of over 12 million Africans between the 16th and 19th centuries—the largest involuntary migration in history (Nunn & Qian, 2010).</p>
                 <p><strong>Merchant Capital & Urbanization:</strong> Profits from colonial trade strengthened European merchant classes and pro-business institutions. Meanwhile, New World crops like potatoes sustained a population explosion and urbanization across Europe.</p>
                 <p><strong>Fueling the Industrial Revolution:</strong> Cheap sugar provided easy calories for growing European urban working classes (in tea and processed foods). The biological convergence of the continents provided the demographic and material prerequisites for the Industrial Revolution.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Historical Synthesis:</strong> The Columbian Exchange reorganized the biosphere, sustained global population growth, and established Western Europe's economic foundation for modern industrialization.
                 </div>`,
            tr: `<p><strong>Zorunlu Göç ve Kölelik:</strong> Yerli nüfusun kırılması ve kazançlı tarım ürünleri, 16. ve 19. yüzyıllar arasında 12 milyondan fazla Afrikalının Amerika'ya zorla kaçırılmasına yol açtı—tarihin en büyük zorunlu göçü (Nunn & Qian, 2010).</p>
                 <p><strong>Tüccar Sermayesi ve Kentleşme:</strong> Koloni ticaretinden elde edilen karlar Avrupa tüccar sınıfını ve iş dostu kurumları güçlendirdi. Patates gibi ürünler Avrupa'da nüfus patlamasını ve kentleşmeyi besledi.</p>
                 <p><strong>Sanayi Devrimi'ne Yakıt:</strong> Ucuz şeker, büyüyen kentli işçi sınıfına çay ve işlenmiş gıdalarla kolay kalori sağladı. Kıtaların birleşmesi Sanayi Devrimi'nin demografik ve maddi altyapısını oluşturdu.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Tarihsel Sentez:</strong> Kolomb Değişimi dünyayı ekolojik olarak yeniden organize etmiş, nüfus artışını desteklemiş ve Batı Avrupa'nın modern sanayileşme temelini atmıştır.
                 </div>`
          },
          mapState: {
            zoom: "world",
            highlightRegions: ["europe", "americas", "africa"],
            activeRoutes: ["triangular_trade"],
            markers: ["london", "liverpool", "luanda", "santo_domingo"]
          }
        }
      ],
      quiz: [
        {
          question: {
            en: "Who coined the term 'Columbian Exchange' in 1972 to describe the biological transfer between hemispheres?",
            tr: "1972 yılında yarımküreler arasındaki biyolojik transferi tanımlamak için 'Kolomb Değişimi' terimini ilk kez hangi tarihçi kullanmıştır?"
          },
          options: [
            { text: { en: "Alfred Crosby", tr: "Alfred Crosby" }, correct: true },
            { text: { en: "John McNeill", tr: "John McNeill" }, correct: false },
            { text: { en: "Fernand Braudel", tr: "Fernand Braudel" }, correct: false },
            { text: { en: "Immanuel Wallerstein", tr: "Immanuel Wallerstein" }, correct: false }
          ],
          explanation: {
            en: "Alfred Crosby published his landmark book in 1972, redefining how historians analyze global integration.",
            tr: "Alfred Crosby, 1972 yılında yayınladığı çığır açan kitabıyla tarihçilerin küresel entegrasyonu analiz etme biçimini yeniden tanımlamıştır."
          }
        },
        {
          question: {
            en: "Which Portuguese maritime outpost, established in 1510, served as a key station for entering the Indian Ocean spice trade?",
            tr: "1510 yılında kurulan ve Portekizlilerin Hint Okyanusu baharat ticaretine sızmasında ana istasyon görevi gören deniz karakolu hangisidir?"
          },
          options: [
            { text: { en: "Goa", tr: "Goa" }, correct: true },
            { text: { en: "Malacca", tr: "Malakka" }, correct: false },
            { text: { en: "Ormuz", tr: "Hürmüz" }, correct: false },
            { text: { en: "Macau", tr: "Makao" }, correct: false }
          ],
          explanation: {
            en: "Following the Treaty of Tordesillas, Portugal expanded eastward, capturing Goa in 1510 to control spice lanes.",
            tr: "Tordesillas Antlaşması'nın ardından Portekiz doğuya doğru genişleyerek baharat yollarını kontrol etmek için 1510'da Goa'yı ele geçirmiştir."
          }
        },
        {
          question: {
            en: "Which native Mesoamerican allies proved crucial to Hernan Cortes in the military conquest of the Aztec Empire?",
            tr: "Aztek İmparatorluğu'nun askeri fethinde Hernan Cortes'e en kritik desteği sağlayan yerli Mesoamerika müttefikleri hangisidir?"
          },
          options: [
            { text: { en: "Tlaxcalteca and Huexotzinca", tr: "Tlaxcalteca ve Huexotzinca" }, correct: true },
            { text: { en: "Maya and Zapotec", tr: "Maya ve Zapotek" }, correct: false },
            { text: { en: "Purépecha and Otomi", tr: "Purepecha ve Otomi" }, correct: false },
            { text: { en: "Mixtec and Totonac", tr: "Mikstek ve Totonak" }, correct: false }
          ],
          explanation: {
            en: "Cortes exploited regional rivalries, allied with the Tlaxcalteca and Huexotzinca, who provided tens of thousands of warriors.",
            tr: "Cortes, bölgedeki rekabetleri manipüle ederek on binlerce savaşçı sağlayan Tlaxcalteca ve Huexotzinca ile ittifak kurmuştur."
          }
        },
        {
          question: {
            en: "Who was the native woman who acted as interpreter, advisor, and intermediary for Cortes during the Aztec conquest?",
            tr: "Aztek fethi sırasında Cortes için tercüman, danışman ve elçi olarak hareket eden yerli kadın kimdir?"
          },
          options: [
            { text: { en: "Dona Marina (La Malinche)", tr: "Dona Marina (La Malinche)" }, correct: true },
            { text: { en: "Sacagawea", tr: "Sacagawea" }, correct: false },
            { text: { en: "Pocahontas", tr: "Pocahontas" }, correct: false },
            { text: { en: "Anacaona", tr: "Anacaona" }, correct: false }
          ],
          explanation: {
            en: "Dona Marina, or La Malinche, spoke Nahuatl and Maya, quickly learned Spanish, and masterminded diplomatic communications.",
            tr: "Dona Marina (La Malinche), Nahuatl ve Maya dillerini konuşuyor olup hızlıca İspanyolca öğrenerek diplomatik iletişimi yönetmiştir."
          }
        },
        {
          question: {
            en: "The discovery of which powerful ocean current in 1513 completed the knowledge of the Atlantic wind loop?",
            tr: "1513 yılında hangi güçlü okyanus akıntısının keşfedilmesi Atlantik rüzgar döngüsünün tam olarak çözülmesini sağlamıştır?"
          },
          options: [
            { text: { en: "The Gulf Stream", tr: "Golfstrim (Gulf Stream)" }, correct: true },
            { text: { en: "The Humboldt Current", tr: "Humboldt Akıntısı" }, correct: false },
            { text: { en: "The Canary Current", tr: "Kanarya Akıntısı" }, correct: false },
            { text: { en: "The Benguela Current", tr: "Benguela Akıntısı" }, correct: false }
          ],
          explanation: {
            en: "Spanish navigator Anton de Alaminos charted the Gulf Stream, which allowed ships to return to Europe using the Westerlies.",
            tr: "İspanyol denizci Anton de Alaminos, gemilerin batı rüzgarlarını kullanarak Avrupa'ya dönmesini sağlayan Golfstrim akıntısını haritalandırdı."
          }
        },
        {
          question: {
            en: "What global economic phenomenon in the 16th century was triggered by the massive influx of American silver into Seville?",
            tr: "Amerika'dan Sevilla'ya akan devasa gümüş miktarının tetiklediği 16. yüzyıl küresel ekonomik fenomeni hangisidir?"
          },
          options: [
            { text: { en: "The Price Revolution", tr: "Fiyat Devrimi (Price Revolution)" }, correct: true },
            { text: { en: "The Great Depression", tr: "Büyük Buhran" }, correct: false },
            { text: { en: "The Tulip Mania", tr: "Lale Çılgınlığı" }, correct: false },
            { text: { en: "The Commercial Bubble", tr: "Ticari Balon" }, correct: false }
          ],
          explanation: {
            en: "The rapid influx of silver and gold increased money supply, causing widespread inflation known as the Price Revolution.",
            tr: "Gümüş ve altının hızla akması para arzını artırarak Avrupa genelinde Fiyat Devrimi olarak bilinen enflasyona yol açmıştır."
          }
        },
        {
          question: {
            en: "Which English settler introduced Spanish tobacco seeds to Virginia, saving the colony economically through monoculture?",
            tr: "Virginia kolonisine İspanyol tütünü tohumlarını getirerek koloniyi monokültür tarımla ekonomik iflastan kurtaran İngiliz yerleşimci kimdir?"
          },
          options: [
            { text: { en: "John Rolfe", tr: "John Rolfe" }, correct: true },
            { text: { en: "John Smith", tr: "John Smith" }, correct: false },
            { text: { en: "Walter Raleigh", tr: "Walter Raleigh" }, correct: false },
            { text: { en: "Thomas West", tr: "Thomas West" }, correct: false }
          ],
          explanation: {
            en: "John Rolfe cultivated milder West Indian tobacco in 1612, which became Virginia's cash crop export.",
            tr: "John Rolfe, 1612'de Batı Hint Adaları'ndan getirdiği tütünü ıslah ederek Virginia'nın ana ihraç ürünü haline getirmiştir."
          }
        },
        {
          question: {
            en: "Why was the potato highly favored by European peasantry during the devastating European wars of the 17th and 18th centuries?",
            tr: "17. ve 18. yüzyılın yıkıcı Avrupa savaşlarında patates neden köylüler tarafından en çok tercih edilen ürün olmuştur?"
          },
          options: [
            { text: { en: "It grew underground, protecting it from confiscation by pillaging troops.", tr: "Yer altında yetiştiği için yağmacı askerler tarafından kolayca gasp edilemiyordu." }, correct: true },
            { text: { en: "It could be harvested in winter.", tr: "Kış aylarında hasat edilebildiği için." }, correct: false },
            { text: { en: "It required no watering.", tr: "Hiç sulama gerektirmediği için." }, correct: false },
            { text: { en: "It was exempt from royal taxes.", tr: "Kraliyet vergilerinden muaf olduğu için." }, correct: false }
          ],
          explanation: {
            en: "Potatoes grow underground. When soldiers marched through fields, they burned grain but rarely dug up potatoes.",
            tr: "Patates toprak altında yetişir. Ordular tarlalardan geçerken tahılları yakardı ancak patatesleri kazıp çıkarmakla uğraşmazdı."
          }
        },
        {
          question: {
            en: "Sugarcane was first carried to the New World on Columbus's second voyage from which location?",
            tr: "Şeker kamışı, Kolomb'un ikinci seyahatinde Yeni Dünya'ya ilk kez hangi bölgeden taşınmıştır?"
          },
          options: [
            { text: { en: "Canary Islands", tr: "Kanarya Adaları" }, correct: true },
            { text: { en: "Madeira", tr: "Madeira" }, correct: false },
            { text: { en: "Azores", tr: "Azor Adaları" }, correct: false },
            { text: { en: "Cape Verde", tr: "Yeşil Burun Adaları" }, correct: false }
          ],
          explanation: {
            en: "Columbus loaded sugarcane in the Canary Islands in 1493 and planted it in Hispaniola.",
            tr: "Kolomb, 1493'te Kanarya Adaları'ndan yüklediği şeker kamışını Hispaniola'da toprakla buluşturmuştur."
          }
        },
        {
          question: {
            en: "What estimated percentage of the Native American population died within 150 years of Columbus's landfall?",
            tr: "Kolomb'un karaya çıkışından sonraki 150 yıl içinde Amerikan yerli nüfusunun yaklaşık yüzde kaçı hayatını kaybetmiştir?"
          },
          options: [
            { text: { en: "80% to 95%", tr: "%80 ila %95" }, correct: true },
            { text: { en: "50% to 60%", tr: "%50 ila %60" }, correct: false },
            { text: { en: "30% to 40%", tr: "%30 ila %40" }, correct: false },
            { text: { en: "10% to 20%", tr: "%10 ila %20" }, correct: false }
          ],
          explanation: {
            en: "Lack of immunity to Eurasian pathogens caused a catastrophic collapse of 80% to 95% of the native population.",
            tr: "Avrasya patojenlerine karşı bağışıklığın olmaması, yerli nüfusta %80 ila %95 oranında demografik çöküşe neden olmuştur."
          }
        },
        {
          question: {
            en: "The 1495 epidemic of which disease in Europe was linked to sailors returning from Columbus's first voyage?",
            tr: "Avrupa'da 1495'te patlak veren hangi salgın, Kolomb'un ilk seferinden dönen denizcilerle ilişkilendirilmiştir?"
          },
          options: [
            { text: { en: "Syphilis", tr: "Frengi (Syphilis)" }, correct: true },
            { text: { en: "Smallpox", tr: "Çiçek Hastalığı" }, correct: false },
            { text: { en: "Tuberculosis", tr: "Tüberküloz" }, correct: false },
            { text: { en: "Leprosy", tr: "Cüzzam" }, correct: false }
          ],
          explanation: {
            en: "Sailors contracted syphilis in Hispaniola, carrying it to Spain, and then to the siege of Naples in 1495.",
            tr: "Denizciler frengiyi Hispaniola'da kapmış, önce İspanya'ya, ardından 1495 Napoli Kuşatması'na taşımışlardır."
          }
        },
        {
          question: {
            en: "From which tree bark is the anti-malaria compound quinine extracted?",
            tr: "Sıtmaya karşı etkili olan kinin maddesi hangi ağacın kabuğundan elde edilmektedir?"
          },
          options: [
            { text: { en: "Cinchona tree", tr: "Kınakına ağacı (Cinchona)" }, correct: true },
            { text: { en: "Rubber tree", tr: "Kauçuk ağacı" }, correct: false },
            { text: { en: "Eucalyptus tree", tr: "Ökaliptus ağacı" }, correct: false },
            { text: { en: "Mahogany tree", tr: "Maun ağacı" }, correct: false }
          ],
          explanation: {
            en: "Quinine is derived from the bark of the Cinchona tree, native to the Andes mountains.",
            tr: "Kinin, And Dağları'na özgü kınakına ağacının kabuğundan elde edilen tıbbi bir alkaloiddir."
          }
        },
        {
          question: {
            en: "Who discovered the prophylactic (preventative) effect of quinine against malaria in 1841?",
            tr: "Sıtmaya karşı kininin koruyucu (profilaktik) etkisini 1841 yılında keşfeden doktor kimdir?"
          },
          options: [
            { text: { en: "Dr. Thomas R. H. Thomson", tr: "Dr. Thomas R. H. Thomson" }, correct: true },
            { text: { en: "Dr. Alexander Fleming", tr: "Dr. Alexander Fleming" }, correct: false },
            { text: { en: "Dr. Edward Jenner", tr: "Dr. Edward Jenner" }, correct: false },
            { text: { en: "Dr. Robert Koch", tr: "Dr. Robert Koch" }, correct: false }
          ],
          explanation: {
            en: "Dr. Thomson identified its preventive use in 1841, allowing Europeans to enter the African interior.",
            tr: "Dr. Thomson, 1841'de kininin koruyucu kullanımını belirleyerek Avrupalıların Afrika içlerine girmesinin yolunu açtı."
          }
        },
        {
          question: {
            en: "Under Belgian King Leopold II, the population of the Congo collapsed from 25 million to what number due to rubber exploitation?",
            tr: "Belçika Kralı II. Leopold döneminde, kauçuk sömürüsü nedeniyle Kongo nüfusu 25 milyondan hangi sayıya gerilemiştir?"
          },
          options: [
            { text: { en: "8.5 million (by 1911)", tr: "8.5 milyon (1911 yılına kadar)" }, correct: true },
            { text: { en: "15 million", tr: "15 milyon" }, correct: false },
            { text: { en: "18 million", tr: "18 milyon" }, correct: false },
            { text: { en: "4 million", tr: "4 milyon" }, correct: false }
          ],
          explanation: {
            en: "Leopold's brutal forced labor regime led to the death of nearly 15 million Congolese by 1911.",
            tr: "II. Leopold'un vahşi zorunlu çalışma rejimi, 1911 yılına kadar yaklaşık 15 milyon Kongolunun ölümüne yol açmıştır."
          }
        },
        {
          question: {
            en: "Which treaty signed in 1494 divided the newly discovered lands outside Europe between Spain and Portugal?",
            tr: "1494 yılında imzalanan ve Avrupa dışındaki yeni keşfedilen toprakları İspanya ile Portekiz arasında bölen antlaşma hangisidir?"
          },
          options: [
            { text: { en: "Treaty of Tordesillas", tr: "Tordesillas Antlaşması" }, correct: true },
            { text: { en: "Treaty of Zaragoza", tr: "Zaragoza Antlaşması" }, correct: true },
            { text: { en: "Treaty of Utrecht", tr: "Utrecht Antlaşması" }, correct: false },
            { text: { en: "Treaty of Westphalia", tr: "Vestfalya Antlaşması" }, correct: false }
          ],
          explanation: {
            en: "The Treaty of Tordesillas divided the hemispheres, establishing the line of demarcation.",
            tr: "Tordesillas Antlaşması, yarımküreleri bölerek İspanyol ve Portekiz etki alanlarını belirlemiştir."
          }
        },
        {
          question: {
            en: "What was the name of the Peruvian mountain that became the silver mining capital of the Spanish Empire?",
            tr: "İspanyol İmparatorluğu'nun gümüş madenciliği başkenti haline gelen Peru (bugünkü Bolivya) sınırlarındaki dağın adı nedir?"
          },
          options: [
            { text: { en: "Potosí", tr: "Potosi" }, correct: true },
            { text: { en: "Zacatecas", tr: "Zacatecas" }, correct: false },
            { text: { en: "Huancavelica", tr: "Huancavelica" }, correct: false },
            { text: { en: "Taxco", tr: "Taxco" }, correct: false }
          ],
          explanation: {
            en: "Potosí was a mountain of silver, mined by draft indigenous labor (mita) to fuel Spanish wealth.",
            tr: "Potosi, İspanyol zenginliğini beslemek için yerli emeğiyle (mita) kazılan devasa bir gümüş dağıydı."
          }
        },
        {
          question: {
            en: "Which food crop native to the Americas had a massive demographic impact on China during the Qing Dynasty?",
            tr: "Yeni Dünya kökenli hangi tarım ürünü, Çin'de Qing Hanedanlığı döneminde nüfus patlamasına yol açmıştır?"
          },
          options: [
            { text: { en: "Maize (Corn)", tr: "Mısır" }, correct: true },
            { text: { en: "Potato", tr: "Patates" }, correct: false },
            { text: { en: "Cassava", tr: "Manyok" }, correct: false },
            { text: { en: "Peanut", tr: "Yer Fıstığı" }, correct: false }
          ],
          explanation: {
            en: "Maize spread quickly to China, utilizing dry hillside soils and driving population growth.",
            tr: "Mısır, Çin'e hızla yayılarak kurak yamaç topraklarında yetiştirilmiş ve nüfus artışını tetiklemiştir."
          }
        },
        {
          question: {
            en: "Which European state established cacao plantations in West Africa in the late 17th century?",
            tr: "17. yüzyıl sonlarında Batı Afrika'da kakao plantasyonları kuran Avrupa devleti hangisidir?"
          },
          options: [
            { text: { en: "Denmark", tr: "Danimarka" }, correct: true },
            { text: { en: "Portugal", tr: "Portekiz" }, correct: false },
            { text: { en: "Britain", tr: "İngiltere" }, correct: false },
            { text: { en: "France", tr: "Fransa" }, correct: false }
          ],
          explanation: {
            en: "Denmark established cacao plantations in West Africa to supply its domestic luxury markets.",
            tr: "Danimarka, iç lüks tüketim pazarını beslemek amacıyla Batı Afrika'da kakao plantasyonları kurmuştur."
          }
        },
        {
          question: {
            en: "Which New World commodity was used as a official legal tender (currency) in early Virginia?",
            tr: "Erken Virginia kolonisinde resmi yasal para birimi olarak kullanılan Yeni Dünya emtiası hangisidir?"
          },
          options: [
            { text: { en: "Tobacco", tr: "Tütün" }, correct: true },
            { text: { en: "Sugar", tr: "Şeker" }, correct: false },
            { text: { en: "Silver", tr: "Gümüş" }, correct: false },
            { text: { en: "Cotton", tr: "Pamuk" }, correct: false }
          ],
          explanation: {
            en: "Tobacco was highly valued and standardized, serving as a medium of exchange and tax payment.",
            tr: "Tütün son derece değerli ve standartlaştırılmıştı; bu nedenle vergi ödemelerinde ve ticarette para yerine kullanıldı."
          }
        },
        {
          question: {
            en: "What was the name of the forced labor draft system used by the Spaniards in the Andes?",
            tr: "İspanyolların And Dağları'nda uyguladığı yerli zorunlu çalışma ve maden sevk sisteminin adı nedir?"
          },
          options: [
            { text: { en: "Mita", tr: "Mita" }, correct: true },
            { text: { en: "Encomienda", tr: "Encomienda" }, correct: false },
            { text: { en: "Repartimiento", tr: "Repartimiento" }, correct: false },
            { text: { en: "Hacienda", tr: "Hacienda" }, correct: false }
          ],
          explanation: {
            en: "The mita was an adapted Inca draft system, used by Spain to force indigenous populations into silver mines.",
            tr: "Mita, İspanyolların yerli nüfusu gümüş madenlerinde zorla çalıştırmak için adapte ettiği bir İnka sistemidir."
          }
        },
        {
          question: {
            en: "Which animal was completely absent in the Americas before the arrival of Christopher Columbus?",
            tr: "Christopher Columbus gelmeden önce Amerika kıtasında aşağıdaki hayvanlardan hangisi tamamen bulunmuyordu?"
          },
          options: [
            { text: { en: "Horse", tr: "At" }, correct: true },
            { text: { en: "Llama", tr: "Lama" }, correct: false },
            { text: { en: "Alpaca", tr: "Alpaka" }, correct: false },
            { text: { en: "Bison", tr: "Bizon" }, correct: false }
          ],
          explanation: {
            en: "Horses were native to Eurasia and introduced by Spanish conquistadors, transforming American ecology.",
            tr: "Atlar Avrasya'ya özgüydü ve İspanyol fatihler tarafından getirilerek Amerika ekolojisini dönüştürdü."
          }
        },
        {
          question: {
            en: "Which crop native to the Americas is a major source of starch and became a staple in tropical Africa?",
            tr: "Amerika kıtasına özgü olan, nişasta zengini ve tropikal Afrika'nın temel gıdası haline gelen ürün hangisidir?"
          },
          options: [
            { text: { en: "Cassava (Manioc)", tr: "Manyok (Cassava)" }, correct: true },
            { text: { en: "Sweet Potato", tr: "Tatlı Patates" }, correct: false },
            { text: { en: "Yam", tr: "Yer Elması" }, correct: false },
            { text: { en: "Sorghum", tr: "Sorgum" }, correct: false }
          ],
          explanation: {
            en: "Cassava thrives in poor soils and drought, becoming a demographic lifesaver in tropical Africa.",
            tr: "Manyok, fakir topraklarda ve kuraklıkta yetişebildiği için tropikal Afrika'da demografik bir kurtarıcı olmuştur."
          }
        },
        {
          question: {
            en: "How did the 'Great Dying' of Native Americans affect the global carbon cycle and climate?",
            tr: "Yerli nüfusun 'Büyük Ölüm' ile yok olması küresel karbon döngüsünü ve iklimi nasıl etkilemiştir?"
          },
          options: [
            { text: { en: "Reforestation sequestered CO2, contributing to the 'Little Ice Age' cooling.", tr: "Terk edilen tarım alanlarının ormanlaşması CO2 bağlamış ve 'Küçük Buz Çağı' soğumasına katkıda bulunmuştur." }, correct: true },
            { text: { en: "It increased global carbon emissions.", tr: "Küresel karbon emisyonlarını artırmıştır." }, correct: false },
            { text: { en: "It had no measurable effect.", tr: "Ölçülebilir hiçbir etkisi olmamıştır." }, correct: false },
            { text: { en: "It caused extreme global warming.", tr: "Aşırı küresel ısınmaya yol açmıştır." }, correct: false }
          ],
          explanation: {
            en: "The abandonment of agricultural lands led to forest regeneration, reducing atmospheric CO2.",
            tr: "Tarım arazilerinin terk edilmesi ormanların büyümesine yol açmış, bu da atmosferdeki CO2 seviyesini düşürmüştür."
          }
        },
        {
          question: {
            en: "Which Spanish conquistador led the expedition that overthrew the Inca Empire in Peru?",
            tr: "Peru'daki İnka İmparatorluğu'nu yıkan İspanyol fethi seferine hangi fatih (conquistador) liderlik etmiştir?"
          },
          options: [
            { text: { en: "Francisco Pizarro", tr: "Francisco Pizarro" }, correct: true },
            { text: { en: "Hernan Cortes", tr: "Hernan Cortes" }, correct: false },
            { text: { en: "Pedro de Alvarado", tr: "Pedro de Alvarado" }, correct: false },
            { text: { en: "Hernando de Soto", tr: "Hernando de Soto" }, correct: false }
          ],
          explanation: {
            en: "Pizarro exploited Inca civil conflicts, capturing Emperor Atahualpa to seize control of Peru.",
            tr: "Pizarro, İnka iç savaşlarından yararlanıp İmparator Atahualpa'yı esir alarak Peru'nun kontrolünü ele geçirdi."
          }
        },
        {
          question: {
            en: "The historical 'Great Divergence' theory by Kenneth Pomeranz emphasizes what factor in Europe's rise?",
            tr: "Kenneth Pomeranz'ın 'Büyük Ayrışma' (Great Divergence) teorisi, Avrupa'nın yükselişinde hangi temel faktörü vurgular?"
          },
          options: [
            { text: { en: "Access to coal and primary ecological assets of the New World.", tr: "Kömür kaynaklarına erişim ve Yeni Dünya'nın ekolojik kaynakları." }, correct: true },
            { text: { en: "Cultural superiority of Protestant ethics.", tr: "Protestan ahlakının kültürel üstünlüğü." }, correct: false },
            { text: { en: "Superior military discipline.", tr: "Üstün askeri disiplin." }, correct: false },
            { text: { en: "Technological advances in ship navigation alone.", tr: "Sadece gemi navigasyonundaki teknolojik gelişmeler." }, correct: false }
          ],
          explanation: {
            en: "Pomeranz argued that coal and American land relieved Europe's ecological constraints, starting the divergence.",
            tr: "Pomeranz, kömür ve Amerika topraklarının Avrupa'nın ekolojik kısıtlamalarını hafiflettiğini savunmuştur."
          }
        },
        {
          question: {
            en: "What was the primary motive for Portugal to pioneer deep-sea routes around the Cape of Good Hope?",
            tr: "Portekiz'in Ümit Burnu çevresinden geçen derin deniz rotalarına öncülük etmesinin temel amacı neydi?"
          },
          options: [
            { text: { en: "To bypass Ottoman trade monopolies and access Indian Ocean wealth directly.", tr: "Osmanlı ticaret tekellerini baypas etmek ve Hint Okyanusu zenginliklerine doğrudan ulaşmak." }, correct: true },
            { text: { en: "To establish sugar plantations in South Africa.", tr: "Güney Afrika'da şeker plantasyonları kurmak." }, correct: false },
            { text: { en: "To convert Chinese empires to Christianity.", tr: "Çin imparatorluklarını Hristiyanlığa döndürmek." }, correct: false },
            { text: { en: "To find gold mines in West Africa.", tr: "Batı Afrika'da altın madenleri bulmak." }, correct: false }
          ],
          explanation: {
            en: "Bypassing the Ottoman control over the overland Silk Road motivated Portuguese exploration.",
            tr: "İpek Yolu'nun kara yollarındaki Osmanlı denetimini aşmak, Portekiz keşiflerini tetikleyen ana motordu."
          }
        },
        {
          question: {
            en: "Which crop native to the Americas is the primary source of chocolate?",
            tr: "Amerika kıtasına özgü olan ve çikolatanın hammaddesini oluşturan bitki hangisidir?"
          },
          options: [
            { text: { en: "Cacao", tr: "Kakao (Cacao)" }, correct: true },
            { text: { en: "Vanilla", tr: "Vanilya" }, correct: false },
            { text: { en: "Sugarcane", tr: "Şeker kamışı" }, correct: false },
            { text: { en: "Coffee", tr: "Kahve" }, correct: false }
          ],
          explanation: {
            en: "Cacao is native to the Amazon basin and was consumed as a bitter drink by Mesoamericans.",
            tr: "Kakao, Amazon havzasına özgüdür ve Mesoamerika halkları tarafından acı bir içecek olarak tüketilirdi."
          }
        },
        {
          question: {
            en: "Which disease was uniquely carried FROM the New World back to the Old World?",
            tr: "Aşağıdaki hastalıklardan hangisi benzersiz bir şekilde Yeni Dünya'dan Eski Dünya'ya taşınmıştır?"
          },
          options: [
            { text: { en: "Syphilis", tr: "Frengi (Syphilis)" }, correct: true },
            { text: { en: "Malaria", tr: "Sıtma" }, correct: false },
            { text: { en: "Smallpox", tr: "Çiçek Hastalığı" }, correct: false },
            { text: { en: "Yellow Fever", tr: "Sarı Humma" }, correct: false }
          ],
          explanation: {
            en: "Syphilis was the only major pathogen that traveled from the Americas back to Europe.",
            tr: "Frengi, Amerika kıtasından Avrupa'ya taşınan tek büyük ve tehlikeli patojendir."
          }
        },
        {
          question: {
            en: "What was the native population of Hispaniola before Columbus's contact, according to modern estimates?",
            tr: "Modern tahminlere göre, Kolomb gelmeden önce Hispaniola adasındaki yerli Taino nüfusu yaklaşık ne kadardı?"
          },
          options: [
            { text: { en: "60,000 to 8 million", tr: "60.000 ila 8 milyon arası" }, correct: true },
            { text: { en: "50,000", tr: "50.000" }, correct: false },
            { text: { en: "10 million to 12 million", tr: "10 ila 12 milyon arası" }, correct: false },
            { text: { en: "15 million", tr: "15 milyon" }, correct: false }
          ],
          explanation: {
            en: "Estimates vary widely, but historical consensus places it between 60,000 and 8 million before rapid extinction.",
            tr: "Tahminler değişse de, tarihçiler hızlı yok oluştan önce nüfusun 60 bin ile 8 milyon arasında olduğunu öngörür."
          }
        },
        {
          question: {
            en: "What technological advance in rubber production, developed in 1839, stabilized the product for industrial use?",
            tr: "Kauçuk üretiminde 1839 yılında geliştirilen ve ürünü endüstriyel kullanıma uygun hale getiren teknolojik gelişme hangisidir?"
          },
          options: [
            { text: { en: "Vulcanization", tr: "Vulkanizasyon (Vulcanization)" }, correct: true },
            { text: { en: "Polymerization", tr: "Polimerizasyon" }, correct: false },
            { text: { en: "Distillation", tr: "Damıtma" }, correct: false },
            { text: { en: "Coagulation", tr: "Pıhtılaştırma" }, correct: false }
          ],
          explanation: {
            en: "Charles Goodyear patented vulcanization in 1839, making rubber temperature-resistant.",
            tr: "Charles Goodyear, 1839'da kauçuğu ısıya dayanıklı hale getiren vulkanizasyon işleminin patentini aldı."
          }
        },
        {
          question: {
            en: "Why did the rise of the electricity industry in the late 19th century cause a boom in rubber demand?",
            tr: "19. yüzyıl sonlarında elektrik endüstrisinin yükselişi neden kauçuk talebinde patlamaya yol açtı?"
          },
          options: [
            { text: { en: "Rubber served as an excellent electrical insulator.", tr: "Kauçuk mükemmel bir elektrik yalıtkanı olduğu için." }, correct: true },
            { text: { en: "Rubber was used to generate electricity.", tr: "Kauçuk elektrik üretiminde kullanıldığı için." }, correct: false },
            { text: { en: "Rubber plants absorbed electrical currents.", tr: "Kauçuk bitkileri elektrik akımlarını emdiği için." }, correct: false },
            { text: { en: "Rubber was used to coat power generator copper boilers.", tr: "Güç jeneratörlerinin bakır kazanlarını kaplamak için." }, correct: false }
          ],
          explanation: {
            en: "Rubber was critical for coating wires and insulating cables in early electrical grids.",
            tr: "Erken dönem elektrik şebekelerinde kabloları kaplamak ve yalıtmak için kauçuk kritik bir malzeme olmuştur."
          }
        },
        {
          question: {
            en: "Which crop native to Eurasia became the dominant cash crop in the Caribbean and Brazil?",
            tr: "Avrasya kökenli olan ancak Karayipler ve Brezilya'da sömürgeciliğin en baskın ürünü haline gelen mahsul hangisidir?"
          },
          options: [
            { text: { en: "Sugarcane", tr: "Şeker kamışı" }, correct: true },
            { text: { en: "Tobacco", tr: "Tütün" }, correct: false },
            { text: { en: "Wheat", tr: "Buğday" }, correct: false },
            { text: { en: "Coffee", tr: "Kahve" }, correct: false }
          ],
          explanation: {
            en: "Sugarcane, native to Southeast Asia, thrived in tropical America, driving plantation slavery.",
            tr: "Güneydoğu Asya kökenli şeker kamışı, tropikal Amerika topraklarında yayılarak kölelik düzenini körüklemiştir."
          }
        },
        {
          question: {
            en: "In what year did Christopher Columbus land in Hispaniola, initiating the Columbian Exchange?",
            tr: "Christopher Columbus hangi yılda Hispaniola'ya ulaşarak Kolomb Değişimi'ni başlatmıştır?"
          },
          options: [
            { text: { en: "1492", tr: "1492" }, correct: true },
            { text: { en: "1498", tr: "1498" }, correct: false },
            { text: { en: "1500", tr: "1500" }, correct: false },
            { text: { en: "1502", tr: "1502" }, correct: false }
          ],
          explanation: {
            en: "Columbus's first voyage reached the Bahamas and Hispaniola in October-December 1492.",
            tr: "Kolomb'un ilk seferi, Ekim-Aralık 1492 tarihlerinde Bahamalar ve Hispaniola'ya ulaşmıştır."
          }
        },
        {
          question: {
            en: "Which major European manufacturing power was economically superior to Europe prior to 1500?",
            tr: "1500 yılından önce hangi büyük Asya gücü, üretim kapasitesi ve ekonomi bakımından Avrupa'dan çok daha üstündü?"
          },
          options: [
            { text: { en: "China", tr: "Çin" }, correct: true },
            { text: { en: "Russia", tr: "Rusya" }, correct: false },
            { text: { en: "Spain", tr: "İspanya" }, correct: false },
            { text: { en: "Sweden", tr: "İsveç" }, correct: false }
          ],
          explanation: {
            en: "China and India were the manufacturing hubs of the pre-modern world, dwarfing European production.",
            tr: "Çin ve Hindistan, modern öncesi dönemin üretim devleri olup Avrupa'yı gölgede bırakmaktaydı."
          }
        },
        {
          question: {
            en: "Which animal introduced by Europeans dramatically altered the hunting practices of Great Plains Native Americans?",
            tr: "Avrupalılar tarafından getirilen hangi hayvan, Amerika Büyük Ovalarındaki yerlilerin avcılık pratiklerini kökten değiştirmiştir?"
          },
          options: [
            { text: { en: "Horse", tr: "At" }, correct: true },
            { text: { en: "Cattle", tr: "Sığır" }, correct: false },
            { text: { en: "Sheep", tr: "Koyun" }, correct: false },
            { text: { en: "Pig", tr: "Domuz" }, correct: false }
          ],
          explanation: {
            en: "The horse escaped and feral herds spread, allowing Plains tribes to hunt bison far more efficiently.",
            tr: "Kaçan atların ovalarda yayılması, yerli kabilelerin bizon avını çok daha etkili yapmasını sağladı."
          }
        },
        {
          question: {
            en: "Which country established the first global maritime trade network connecting silver to Asian luxury goods?",
            tr: "Gümüşü Asya'nın lüks tüketim mallarıyla birleştiren ilk küresel deniz ticaret ağını hangi ülke kurmuştur?"
          },
          options: [
            { text: { en: "Spain", tr: "İspanya" }, correct: true },
            { text: { en: "Portugal", tr: "Portekiz" }, correct: false },
            { text: { en: "Britain", tr: "İngiltere" }, correct: false },
            { text: { en: "Netherlands", tr: "Hollanda" }, correct: false }
          ],
          explanation: {
            en: "Spain's Manila Galleons connected American silver directly with Chinese silk and porcelain.",
            tr: "İspanya'nın Manila Kalyonları, Amerikan gümüşünü doğrudan Çin ipeği ve porseleniyle birleştirmiştir."
          }
        },
        {
          question: {
            en: "The 'Little Ice Age' cooling during the 17th century is hypothesized to have been amplified by what ecological event?",
            tr: "17. yüzyıldaki 'Küçük Buz Çağı' soğumasının hangi ekolojik olayla hızlandığı varsayılmaktadır?"
          },
          options: [
            { text: { en: "The abandonment of native farms and massive reforestation in the Americas.", tr: "Amerikan yerlilerinin tarım alanlarını terk etmesi ve devasa ormanlaşma dalgası." }, correct: true },
            { text: { en: "A massive volcanic eruption in Europe.", tr: "Avrupa'da gerçekleşen büyük bir volkanik patlama." }, correct: false },
            { text: { en: "The extinction of the American bison.", tr: "Amerikan bizonunun neslinin tükenmesi." }, correct: false },
            { text: { en: "A reduction in global maritime traffic.", tr: "Küresel deniz trafiğinin azalması." }, correct: false }
          ],
          explanation: {
            en: "Carbon sequestration by millions of acres of regrown forests pulled CO2 from the atmosphere.",
            tr: "Milyonlarca dönümlük arazinin yeniden ormanlaşması atmosferden büyük miktarda CO2 çekmiştir."
          }
        },
        {
          question: {
            en: "Which plant native to the Andes provided the chemical compound to fight malaria?",
            tr: "And Dağları'na özgü olan ve sıtmayla mücadelede kullanılan kimyasal bileşiği sağlayan bitki hangisidir?"
          },
          options: [
            { text: { en: "Cinchona tree", tr: "Kınakına ağacı" }, correct: true },
            { text: { en: "Coca plant", tr: "Koka bitkisi" }, correct: false },
            { text: { en: "Potato plant", tr: "Patates bitkisi" }, correct: false },
            { text: { en: "Cassava plant", tr: "Manyok bitkisi" }, correct: false }
          ],
          explanation: {
            en: "The Cinchona tree's bark was ground into powder to treat malaria fever.",
            tr: "Kınakına ağacının kabuğu öğütülerek sıtma ateşini tedavi eden toz haline getirilirdi."
          }
        },
        {
          question: {
            en: "What was the primary reason Native Americans lacked genetic immunity to smallpox and measles?",
            tr: "Amerikan yerlilerinin çiçek ve kızamık gibi hastalıklara karşı genetik bağışıklığa sahip olmamasının temel nedeni neydi?"
          },
          options: [
            { text: { en: "They had not domesticated livestock, which are the evolutionary source of these viruses.", tr: "Bu virüslerin evrimsel kaynağı olan evcil hayvanları beslememiş ve evcilleştirmemiş olmaları." }, correct: true },
            { text: { en: "Their diet lacked protein.", tr: "Beslenme düzenlerinde protein eksikliği olması." }, correct: false },
            { text: { en: "The tropical climate destroyed antibodies.", tr: "Tropikal iklimin antikorları yok etmesi." }, correct: false },
            { text: { en: "They were geographically isolated from all pathogens.", tr: "Tüm patojenlerden coğrafi olarak tamamen yalıtılmış olmaları." }, correct: false }
          ],
          explanation: {
            en: "Pathogens like smallpox mutated from animal viruses. Eurasia's animal husbandry built immunity over millennia.",
            tr: "Çiçek gibi patojenler hayvan virüslerinden mutasyona uğramıştır. Avrasya'nın hayvancılığı bağışıklık kazandırmıştır."
          }
        },
        {
          question: {
            en: "The Spanish Treasure Fleets transported silver from Zacatecas and Potosí to which Spanish port?",
            tr: "İspanyol Hazine Filoları, Zacatecas ve Potosi'den çıkardıkları gümüşü hangi İspanyol limanına taşıyordu?"
          },
          options: [
            { text: { en: "Seville", tr: "Sevilla" }, correct: true },
            { text: { en: "Cadiz", tr: "Kadiz" }, correct: false },
            { text: { en: "Barcelona", tr: "Barselona" }, correct: false },
            { text: { en: "Madrid", tr: "Madrid" }, correct: false }
          ],
          explanation: {
            en: "Seville held the exclusive royal monopoly on American trade through the Casa de la Contratación.",
            tr: "Sevilla, Casa de la Contratación üzerinden Amerika ticaretinde kraliyet tekeline sahipti."
          }
        },
        {
          question: {
            en: "Which crop native to the Americas is the key ingredient in Hungarian Paprika?",
            tr: "Macar Paprika baharatının ana maddesini oluşturan Yeni Dünya bitkisi hangisidir?"
          },
          options: [
            { text: { en: "Chili Pepper", tr: "Acı Biber" }, correct: true },
            { text: { en: "Tomato", tr: "Domates" }, correct: false },
            { text: { en: "Sorghum", tr: "Sorgum" }, correct: false },
            { text: { en: "Black Pepper", tr: "Karabiber" }, correct: false }
          ],
          explanation: {
            en: "Chili peppers spread globally from the Americas, becoming central to Hungarian cuisine as Paprika.",
            tr: "Acı biber Amerika'dan dünyaya yayılmış ve Macar mutfağında Paprika adıyla merkezileşmiştir."
          }
        },
        {
          question: {
            en: "Which demographic group suffered the worst casualties in the Congo Free State during the rubber boom?",
            tr: "Kauçuk patlaması sırasında Kongo Bağımsız Devleti'nde en ağır nüfus kaybını hangi demografik grup yaşamıştır?"
          },
          options: [
            { text: { en: "Enslaved rubber harvesters under forced labor.", tr: "Zorla çalıştırılan Kongolu kauçuk toplayıcıları." }, correct: true },
            { text: { en: "Belgian military officers.", tr: "Belçikalı askeri subaylar." }, correct: false },
            { text: { en: "Portuguese merchants.", tr: "Portekizli tüccarlar." }, correct: false },
            { text: { en: "European missionaries.", tr: "Avrupalı misyonerler." }, correct: false }
          ],
          explanation: {
            en: "Congolese workers were subjected to systematic terror, mutilation, and murder if quotas were not met.",
            tr: "Kongolu işçiler kotaları dolduramadıklarında sistematik terör, uzuv kesme ve cinayetlere maruz kaldılar."
          }
        },
        {
          question: {
            en: "Which animal introduced to the New World transformed agricultural plowing and heavy transport?",
            tr: "Yeni Dünya'ya getirilen hangi hayvan, tarımsal saban sürmeyi ve ağır taşımacılığı kökten değiştirmiştir?"
          },
          options: [
            { text: { en: "Oxen (Cattle)", tr: "Öküz / Sığır (Cattle)" }, correct: true },
            { text: { en: "Llama", tr: "Lama" }, correct: false },
            { text: { en: "Horse", tr: "At" }, correct: false },
            { text: { en: "Pig", tr: "Domuz" }, correct: false }
          ],
          explanation: {
            en: "Oxen provided the heavy draft power required to plow dense American soils for wheat farming.",
            tr: "Öküzler, buğday tarımı için sert Amerika topraklarını sürmek amacıyla gereken çekim gücünü sağladı."
          }
        },
        {
          question: {
            en: "What was the main destination of Potosí silver once it reached Western Europe?",
            tr: "Potosi gümüşü Batı Avrupa'ya ulaştıktan sonra nihai olarak en çok hangi coğrafyaya akıyordu?"
          },
          options: [
            { text: { en: "Asia (to buy luxury silk, tea, and porcelain)", tr: "Asya (ipek, çay ve porselen satın almak için)" }, correct: true },
            { text: { en: "Africa (to buy slaves)", tr: "Afrika (köle satın almak için)" }, correct: false },
            { text: { en: "England (to finance industries)", tr: "İngiltere (sanayiyi finanse etmek için)" }, correct: false },
            { text: { en: "Rome (to fund the Vatican)", tr: "Roma (Vatikan'ı finanse etmek için)" }, correct: false }
          ],
          explanation: {
            en: "Silver flowed to China and India to purchase high-value manufactured luxury products.",
            tr: "Gümüş, Çin ve Hindistan'dan yüksek değerli lüks mamuller satın almak üzere Asya'ya akmaktaydı."
          }
        },
        {
          question: {
            en: "Which New World crop became a primary dietary source of vitamin C and calories for the Irish population?",
            tr: "Yeni Dünya kökenli hangi tarım ürünü İrlanda nüfusu için C vitamini ve kalorinin ana kaynağı olmuştur?"
          },
          options: [
            { text: { en: "Potato", tr: "Patates" }, correct: true },
            { text: { en: "Maize", tr: "Mısır" }, correct: false },
            { text: { en: "Tomato", tr: "Domates" }, correct: false },
            { text: { en: "Sweet Potato", tr: "Tatlı Patates" }, correct: false }
          ],
          explanation: {
            en: "Irish peasants relied heavily on the high-yielding potato, leading to massive population growth.",
            tr: "İrlandalı köylüler patatese aşırı bağımlı hale gelmiş, bu da hızlı bir nüfus artışını beraberinde getirmiştir."
          }
        },
        {
          question: {
            en: "Which plant native to South America was vulcanized to produce commercial waterproof boots and tires?",
            tr: "Güney Amerika'ya özgü olan ve vulkanize edilerek endüstriyel su geçirmez bot ve lastik yapımında kullanılan bitki hangisidir?"
          },
          options: [
            { text: { en: "Hevea rubber tree", tr: "Hevea kauçuk ağacı" }, correct: true },
            { text: { en: "Cinchona tree", tr: "Kınakına ağacı" }, correct: false },
            { text: { en: "Cacao tree", tr: "Kakao ağacı" }, correct: false },
            { text: { en: "Tobacco plant", tr: "Tütün bitkisi" }, correct: false }
          ],
          explanation: {
            en: "The Hevea brasiliensis tree is the source of natural rubber latex used in vulcanization.",
            tr: "Hevea brasiliensis ağacı, vulkanizasyonda kullanılan doğal kauçuk lateksinin ana kaynağıdır."
          }
        },
        {
          question: {
            en: "Who was the Spanish writer and Dominican friar who debated Sepúlveda in 1550 against Native American enslavement?",
            tr: "1550'de Sepúlveda ile tartışarak yerlilerin köleleştirilmesine karşı çıkan İspanyol Dominik rahibi ve yazar kimdir?"
          },
          options: [
            { text: { en: "Bartolomé de Las Casas", tr: "Bartolomé de Las Casas" }, correct: true },
            { text: { en: "Francisco de Vitoria", tr: "Francisco de Vitoria" }, correct: false },
            { text: { en: "Juan de Zumárraga", tr: "Juan de Zumarraga" }, correct: false },
            { text: { en: "Ignatius of Loyola", tr: "Ignatius of Loyola" }, correct: false }
          ],
          explanation: {
            en: "Las Casas defended indigenous rights at the Valladolid Controversy, leading to restrictions on native enslavement.",
            tr: "Las Casas, Valladolid Tartışması'nda yerli haklarını savunmuş ve yerlilerin köleleştirilmesine kısıtlamalar getirilmesini sağlamıştır."
          }
        },
        {
          question: {
            en: "Which Eurasian grain was successfully introduced to the high valleys of Mexico and the Andes?",
            tr: "Meksika ve And Dağları'nın yüksek vadilerinde başarıyla yetiştirilen Avrasya kökenli tahıl hangisidir?"
          },
          options: [
            { text: { en: "Wheat", tr: "Buğday" }, correct: true },
            { text: { en: "Rice", tr: "Pirinç" }, correct: false },
            { text: { en: "Barley", tr: "Arpa" }, correct: false },
            { text: { en: "Oats", tr: "Yulaf" }, correct: false }
          ],
          explanation: {
            en: "Wheat adapted well to the cooler highland valleys, transforming local diets and farming.",
            tr: "Buğday, serin yüksek vadilere uyum sağlayarak yerel beslenmeyi ve tarımı dönüştürmüştür."
          }
        },
        {
          question: {
            en: "What demographic impact did the potato have on the war-torn regions of Germany and Poland?",
            tr: "Patates, savaşın yıktığı Almanya ve Polonya bölgelerinde nasıl bir demografik etki yaratmıştır?"
          },
          options: [
            { text: { en: "It mitigated famine and allowed populations to survive and grow.", tr: "Açlığı hafifletmiş, nüfusun hayatta kalmasını ve büyümesini sağlamıştır." }, correct: true },
            { text: { en: "It caused widespread dietary deficiencies.", tr: "Yaygın beslenme yetersizliklerine yol açmıştır." }, correct: false },
            { text: { en: "It led to large-scale emigration.", tr: "Büyük çaplı göç dalgalarına neden olmuştur." }, correct: false },
            { text: { en: "It reduced the fertility rate.", tr: "Doğurganlık oranını düşürmüştür." }, correct: false }
          ],
          explanation: {
            en: "As an underground crop, it secured food supply when armies burned surface crops.",
            tr: "Toprak altı bir ürün olarak, ordular tarlaları yakarken gıda arzını güvence altına almıştır."
          }
        },
        {
          question: {
            en: "Which animal introduced by Europeans became a major source of protein and fat for rural populations in Mexico?",
            tr: "Avrupalılar tarafından getirilen hangi hayvan, Meksika'daki kırsal nüfus için en önemli protein ve yağ kaynağı olmuştur?"
          },
          options: [
            { text: { en: "Pig (Pork)", tr: "Domuz" }, correct: true },
            { text: { en: "Horse", tr: "At" }, correct: false },
            { text: { en: "Llama", tr: "Lama" }, correct: false },
            { text: { en: "Chicken", tr: "Tavuk" }, correct: false }
          ],
          explanation: {
            en: "Pigs reproduced rapidly, adapted to local diets, and provided critical lard and meat.",
            tr: "Domuzlar hızlı çoğaldı, yerel besinlere uyum sağladı ve kırsalda kritik yağ ile et kaynağı oldu."
          }
        }
      ]
    },
    3: {
      id: 3,
      themeColor: "#d97706", // Amber
      title: {
        en: "The Transatlantic Slave Trade",
        tr: "Transatlantik Köle Ticareti"
      },
      video: {
        src: "https://drive.google.com/file/d/12cfKUtTXkUVCEVur_yg3sVytlGqDtLZf/view?usp=sharing",
        desc: {
          tr: "Transatlantik Köle Ticareti: Afrika, Amerika ve Avrupa arasındaki ticaret üçgeni ve insani maliyetleri.",
          en: "The Transatlantic Slave Trade: The trading triangle between Africa, the Americas, and Europe and its human costs."
        }
      },
      slides: [
        {
          title: {
            en: "The Transatlantic Slave Trade (1519–1867)",
            tr: "Transatlantik Köle Ticareti (1519–1867)"
          },
          text: {
            en: `<p><strong>Historical Scope:</strong> Operating between 1519 (first voyage to Hispaniola) and 1867 (last voyage to Cuba), the transatlantic slave trade shipped millions of African slaves to American colonies (Eltis, 2001).</p>
                 <p><strong>Unprecedented Demographic Shift:</strong> The forced migration of millions of Africans fundamentally reshaped the demographic outlook of the Americas, making Africans the dominant population group in several colonial areas (Thornton, 1999).</p>
                 <p><strong>Merchant Capital & Permanent Slavery:</strong> This lucrative commerce enriched European merchants—the same class that would later drive political revolutions. Unlike ancient forms of slavery, African slavery in the Americas became a permanent, hereditary condition from which slaves could never escape.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Key Distinction:</strong> While slavery existed in Roman and Ottoman times, New World slavery was unique in its permanent, racialized, and hereditary structure.
                 </div>`,
            tr: `<p><strong>Tarihsel Kapsam:</strong> 1519 (Hispaniola'ya ilk sefer) ile 1867 (Küba'ya son sefer) yılları arasında yürütülen transatlantik köle ticareti, milyonlarca Afrikalıyı Amerika kolonilerine taşıdı (Eltis, 2001).</p>
                 <p><strong>Emsalsiz Demografik Dönüşüm:</strong> Milyonlarca Afrikalının zorla göç ettirilmesi Amerika'nın nüfus yapısını değiştirdi ve birçok sömürge bölgesinde Afrikalılar baskın grup haline geldi (Thornton, 1999).</p>
                 <p><strong>Tüccar Sermayesi ve Kalıcı Kölelik:</strong> Bu kazançlı ticaret, ileride siyasi devrimleri yapacak olan Avrupalı burjuvaziyi güçlendirdi. Antik kölelik biçimlerinin aksine, Amerika'daki Afrikalı köleliği insanların asla kurtulamayacağı kalıcı ve irsi bir statüye dönüştü.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Temel Ayırım:</strong> Roma veya Osmanlı'daki köleliğin aksine Yeni Dünya köleliği irsi, ırksal ve kalıcı yapısıyla tarihte özgündür.
                 </div>`
          },
          mapState: {
            zoom: "atlantic",
            highlightRegions: ["africa", "americas", "europe"],
            activeRoutes: ["triangular_trade"],
            markers: ["luanda", "santo_domingo", "bristol"]
          }
        },
        {
          title: {
            en: "Key Analytical Questions of the Trade",
            tr: "Köle Ticaretinin Temel Soruları"
          },
          text: {
            en: `<p><strong>Core Inquiries:</strong> To understand the Transatlantic Slave Trade as a driver of modernization, we examine four pivotal questions:</p>
                 <p><ul>
                   <li><strong>When and how did the slave trade begin?</strong> Tracing its origins from Atlantic island colonization.</li>
                   <li><strong>How was this trade organized?</strong> Analyzing the commercial mechanisms between European merchants and African states.</li>
                   <li><strong>Who controlled it?</strong> Mapping imperial rivalries and national monopolies (Portugal, Britain, France).</li>
                   <li><strong>What kind of societies did it create?</strong> Examining the rise of slave societies, focusing on North America (Virginia).</li>
                 </ul></p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Analytical Focus:</strong> Slavery was not an accidental byproduct; it was the central labor mechanism fueling Atlantic capitalism.
                 </div>`,
            tr: `<p><strong>Temel Sorular:</strong> Transatlantik Köle Ticaretini modernleşmenin motoru olarak anlamak için dört ana soruyu inceliyoruz:</p>
                 <p><ul>
                   <li><strong>Köle ticareti ne zaman ve nasıl başladı?</strong> Atlantik adalarının sömürgeleştirilmesinden itibaren iz sürülmesi.</li>
                   <li><strong>Bu ticaret nasıl organize edildi?</strong> Avrupalı tüccarlar ile Afrika devletleri arasındaki ticari mekanizmalar.</li>
                   <li><strong>Ticareti kim kontrol ediyordu?</strong> Portekiz, İngiltere ve Fransa arasındaki rekabet ve tekel mücadeleleri.</li>
                   <li><strong>Nasıl toplumlar yarattı?</strong> Köle toplumlarının doğuşu ve Virginia örneği.</li>
                 </ul></p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Analitik Odak:</strong> Kölelik tesadüfi bir unsur değil, Atlantik kapitalizmini besleyen ana işgücü mekanizmasıydı.
                 </div>`
          },
          mapState: {
            zoom: "atlantic",
            highlightRegions: ["africa", "americas"],
            activeRoutes: [],
            markers: ["luanda", "jamestown"]
          }
        },
        {
          title: {
            en: "Origins & Atlantic Island Exploration",
            tr: "Atlantik Adaları ve Ticaretin Başlangıcı"
          },
          text: {
            en: `<p><strong>Gradual Development:</strong> The African slave trade did not start fully formed; it evolved gradually over decades of maritime expansion.</p>
                 <p><strong>The Atlantic Islands Stepping Stone:</strong> Its initial phase was tied to Portuguese and Spanish takeover of Atlantic islands (Madeira, Canaries, São Tomé). Here, Europeans first established prototype plantation systems using forced labor before expanding across the ocean.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Prototype Era:</strong> Sugar production on São Tomé served as the structural testing ground for the massive plantation economies later built in Brazil and the Caribbean.
                 </div>`,
            tr: `<p><strong>Kademeli Gelişim:</strong> Afrikalı köle ticareti aniden ortaya çıkmadı; denizci genişlemenin yıllar süren kademeli bir süreci olarak evrildi.</p>
                 <p><strong>Atlantik Adaları Deneyimi:</strong> İlk adım, Portekiz ve İspanyolların Atlantik adalarını (Madeira, Kanarya Adaları, São Tomé) ele geçirmesiydi. Avrupalılar, Okyanus ötesine geçmeden önce köle gücüne dayalı prototip plantasyon sistemlerini ilk kez bu adalarda denediler.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Prototip Dönemi:</strong> São Tomé'deki şeker üretimi, daha sonra Brezilya ve Karayipler'de kurulacak devasa plantasyon ekonomilerinin deneme sahası olmuştur.
                 </div>`
          },
          mapState: {
            zoom: "atlantic",
            highlightRegions: ["europe", "africa"],
            activeRoutes: ["portuguese_route"],
            markers: ["lisbon", "canary_islands", "sao_tome"]
          }
        },
        {
          title: {
            en: "From Encomienda to Permanent Forced Labor",
            tr: "Encomienda'dan Sürekli Zorunlu İşgücüne Geçiş"
          },
          text: {
            en: `<p><strong>Spanish Labor Demands:</strong> Spanish settlers needed labor for mining, European crop cultivation (wheat), and livestock raising. The Crown initially granted <em>encomiendas</em>—giving settlers rights to Native American labor.</p>
                 <p><strong>Widespread Compulsion:</strong> Slavery was part of a broader spectrum of forced labor in 18th-century economies, alongside indentured servants, bound peasants, apprenticeships, and convict workers (Fernandez-Armesto, 2007).</p>
                 <p><strong>Legal Barriers to Native Labor:</strong> Spanish colonial laws (requiring just wages, separate residences, and restricted service durations) prevented full-time exploitation of Native Americans, prompting settlers to turn to African slavery for permanent labor (Thornton, 1999).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Legal Impact:</strong> Protectionist laws for Native Americans paradoxically accelerated the demand for unprotected African slaves.
                 </div>`,
            tr: `<p><strong>İspanyol İşgücü Talebi:</strong> İspanyol yerleşimciler madencilik, buğday tarımı ve hayvancılık için işgücüne muhtaçtı. İspanyol Tacı başlangıçta yerli halkın emeğini yerleşimcilere tahsis eden <em>encomienda</em> sistemini kurdu.</p>
                 <p><strong>Zorunlu Emek Yelpazesi:</strong> Kölelik; sözleşmeli işçiler, toprağa bağlı köylüler ve hükümlü işçiler gibi 18. yüzyıl ekonomilerindeki geniş zorunlu emek tayfının bir parçasıydı (Fernandez-Armesto, 2007).</p>
                 <p><strong>Yerli Emek Sınırlamaları:</strong> İspanyol yasalarının yerliler için getirdiği adil ücret ve çalışma süresi kısıtlamaları tam zamanlı sömürüyü engellemiş; yerleşimciler sürekli işgücü için Afrikalı köleliğine yönelmiştir (Thornton, 1999).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Hukuki Etki:</strong> Yerli nüfusu koruma yasaları, çelişkili şekilde hukuki korumadan yoksun Afrikalı kölelere olan talebi patlatmıştır.
                 </div>`
          },
          mapState: {
            zoom: "americas",
            highlightRegions: ["americas"],
            activeRoutes: [],
            markers: ["santo_domingo", "potosi"]
          }
        },
        {
          title: {
            en: "Replacement of Native Labor with African Labor",
            tr: "Yerli İşgücünün Afrikalı Kölelerle Değiştirilmesi"
          },
          text: {
            en: `<p><strong>Demographic Collapse:</strong> European diseases decimated sparse native populations outside core Andean/Mesoamerican zones, rendering native labor quantitatively insufficient.</p>
                 <p><strong>Specialized Pastoral Skills:</strong> Native Americans had no large domesticated animals and lacked cattle-herding skills. In contrast, slaves imported from Wolof, Fula, and Mandinga regions of West Africa brought essential horse-riding and cattle-raising expertise to mid-16th century Hispaniola estates.</p>
                 <p><strong>Ideological & Political Factors:</strong> Importing slaves from afar eliminated local community ties, preventing local resistance. Bartolomé de Las Casas and the Valladolid Controversy (1550–1551) defended Native Americans against slavery while permitting African labor (Thornton, 1999).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Valladolid Controversy:</strong> Las Casas argued Native Americans were rational souls to be converted, inadvertently shifting the burden of forced labor onto Africans.
                 </div>`,
            tr: `<p><strong>Demografik Kırılma:</strong> Avrupalı mikroplar yerli nüfusu kırdığı için yerli işgücü niceliksel olarak yetersiz hale geldi.</p>
                 <p><strong>Uzmanlık ve Beceriler:</strong> Amerika yerlileri büyük evcil hayvanlara yabancıydı. Buna karşılık Wolof, Fula ve Mandinga bölgelerinden getirilen Afrikalı köleler, sığır ve at yetiştiriciliği konusunda büyük bir uzmanlığa sahipti.</p>
                 <p><strong>Siyasi ve İdeolojik Nedenler:</strong> Dışarıdan getirilen kölelerin yerel bağları yoktu. Bartolomé de Las Casas ve Valladolid Münazarası (1550–1551), yerlilerin köleleştirilmesine karşı çıkarken Afrikalı köle ithalatını meşrulaştırdı (Thornton, 1999).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Valladolid Münazarası:</strong> Las Casas yerlilerin Hristiyanlaştırılacak ruhlar olduğunu savunurken, zorunlu emek yükünü farkında olmadan Afrikalıların üzerine yıkmıştır.
                 </div>`
          },
          mapState: {
            zoom: "atlantic",
            highlightRegions: ["africa", "americas"],
            activeRoutes: ["triangular_trade"],
            markers: ["santo_domingo", "gorée"]
          }
        },
        {
          title: {
            en: "The Centrality of Sugar in the Slave Trade",
            tr: "Şeker Üretiminin Merkezi Rolü"
          },
          text: {
            en: `<p><strong>90% Driven by Sugar:</strong> Between the late 16th century and 1820, a staggering 90% of all enslaved Africans brought across the Atlantic were imported specifically for sugar production or economies sustained by sugar exports (Eltis, 2001).</p>
                 <p><strong>Secondary Demand Sectors:</strong> Secondary markets included tobacco (Chesapeake & Bahia), coffee (1/3 of sugar value in 1770), rice (Carolina), and gold/silver mining (Minas Gerais, Brazil after 1695).</p>
                 <p><strong>Cotton Came Late:</strong> Cotton only became a primary driver of slavery in the United States as the transatlantic traffic itself was coming to an end.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Economic Engine:</strong> Sugar was the undisputed monarch of Atlantic plantation commodities, driving capital accumulation across Europe.
                 </div>`,
            tr: `<p><strong>%90 Şeker Odaklı:</strong> 16. yüzyıl sonu ile 1820 arasında Atlantik'i geçen Afrikalı kölelerin %90'ı doğrudan şeker üretimi veya şekere dayalı ekonomiler için ithal edilmiştir (Eltis, 2001).</p>
                 <p><strong>İkincil Sektörler:</strong> Tütün (Chesapeake ve Bahia), kahve (1770'te şekerin 1/3'ü değerindeydi), pirinç (Carolina) ve madencilik (Minas Gerais, 1695) ikincil köle pazarlarıydı.</p>
                 <p><strong>Pamuk Sonradan Geldi:</strong> Pamuk, ancak transatlantik köle ticareti sona ererken ABD'de ana kölelik motoru haline gelmiştir.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Ekonomik Motor:</strong> Şeker, Avrupa'daki sermaye birikimini besleyen Atlantik plantasyon emtialarının tartışmasız lideriydi.
                 </div>`
          },
          mapState: {
            zoom: "atlantic",
            highlightRegions: ["americas", "africa"],
            activeRoutes: ["triangular_trade"],
            markers: ["santo_domingo", "salvador_bahia", "charleston"]
          }
        },
        {
          title: {
            en: "Organization of Trade & African State Relations",
            tr: "Afrika'da Ticaretin Organizasyonu ve Devlet İlişkileri"
          },
          text: {
            en: `<p><strong>Voluntary Exchange Mechanism:</strong> The trade relied on voluntary commercial exchanges between European merchant companies and powerful African states.</p>
                 <p><strong>European Inability to Occupy Africa:</strong> Europeans could not occupy Africa at this time due to high mortality from tropical malaria and fierce African military resistance—exemplified by Queen Nzinga's formidable resistance against Portuguese expansion in Angola.</p>
                 <p><strong>Trade Goods:</strong> Before 1650, Europeans exported non-essential goods to Africa: textiles, iron/copper metals, knives, cowrie shells (currency), jewelry, mechanical toys, and alcohol (Thornton, 1999).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Queen Nzinga:</strong> Queen Nzinga of Ndongo and Matamba adroitly resisted Portuguese military encroachment for decades through military tactics and diplomacy.
                 </div>`,
            tr: `<p><strong>Gönüllü Ticari Mübadele:</strong> Köle ticareti, Avrupalı şirketler ile güçlü Afrika devletleri arasındaki gönüllü ticari anlaşmalara dayanıyordu.</p>
                 <p><strong>Avrupalıların İşgal Edememesi:</strong> Avrupalılar yüksek sıtma ölümleri ve Afrikalıların sert askeri direnişi nedeniyle Afrika içlerini işgal edemiyordu—Kraliçe Nzinga'nın Portekizlilere karşı gösterdiği tarihi direniş buna örnektir.</p>
                 <p><strong>İhraç Edilen Mallar:</strong> 1650 öncesinde Avrupalılar Afrika'ya kumaş, demir/bakır metaller, bıçaklar, deniz kabukları (para birimi), takılar ve alkol satıyorlardı (Thornton, 1999).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Kraliçe Nzinga:</strong> Ndongo Kraliçesi Nzinga, zeki diplomasisi ve askeri taktikleriyle Portekiz işgaline onlarca yıl geçit vermemiştir.
                 </div>`
          },
          mapState: {
            zoom: "africa",
            highlightRegions: ["africa", "europe"],
            activeRoutes: [],
            markers: ["luanda", "elmina", "lisbon"]
          }
        },
        {
          title: {
            en: "Inland Capture & Coastal Slave Depots",
            tr: "Köle Avı ve Kıyı Kalesi Depoları"
          },
          text: {
            en: `<p><strong>Inland Captures & Long Marches:</strong> Slaves were captured deep within the interior by African armies during warfare and marched for months to the coast. Olaudah Equiano recorded learning six different languages during his long forced march to the sea (Fernandez-Armesto, 2007).</p>
                 <p><strong>Coastal Forts & Branding:</strong> By the late 17th century, 64 European-controlled coastal forts operated along West Africa (Gold Coast, Bight of Benin/Biafra, Luanda/Benguela). Slaves were branded with hot irons prior to embarkation.</p>
                 <p><strong>Cultural Retention:</strong> Slave owners resisted Christianizing slaves out of fear that the Bible would spark ideas of human equality, allowing African cultural practices to persist.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Olaudah Equiano:</strong> Equiano's famous autobiography exposed the horrific journey from inland capture to the Middle Passage.
                 </div>`,
            tr: `<p><strong>İç Bölgelerde Avlanma ve Yürüyüşler:</strong> Köleler iç bölgelerdeki savaşlarda yakalanıyor ve kıyıya doğru aylarca yürütülüyordu. Olaudah Equiano, kıyıya ulaşana kadar 6 farklı dil öğrendiğini kaydetmiştir (Fernandez-Armesto, 2007).</p>
                 <p><strong>Kıyı Kaleleri ve Dağlama:</strong> 17. yüzyıl sonuna kadar Batı Afrika kıyılarında 64 Avrupalı kalesi kuruldu (Altın Kıyısı, Benin/Biafra Körfezi, Luanda). Köleler gemilere bindirilmeden önce kızgın demirle dağlanıyordu.</p>
                 <p><strong>Kültürel Korunma:</strong> Köle sahipleri, İncil'in eşitlik fikirleri aşılamasından korkarak köleleri Hristiyanlaştırmaya direndi; bu da Afrika kültürünün yaşamasına imkan tanıdı.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Olaudah Equiano:</strong> Equiano'nun otobiyografisi, iç bölgelerdeki esaretten Orta Geçit'e uzanan dehşeti tüm dünyaya duyurmuştur.
                 </div>`
          },
          mapState: {
            zoom: "africa",
            highlightRegions: ["africa"],
            activeRoutes: [],
            markers: ["elmina", "luanda", "whydah"]
          }
        },
        {
          title: {
            en: "The Middle Passage & The Gun-Slave Cycle",
            tr: "Orta Geçit ve Silah-Köle Döngüsü"
          },
          text: {
            en: `<p><strong>Middle Passage Horrors:</strong> To suppress revolts, traders mixed captives from different regions. Ships like the British slave vessel <em>Brooks</em> packed over 300 slaves into suffocating holds for a 30-member crew (Fernandez-Armesto, 2007).</p>
                 <p><strong>Value Disparity:</strong> In the late 18th century, British slave exports from West Africa were worth 10 times the value of all other African commodities combined.</p>
                 <p><strong>The Gun-Slave Cycle Theory:</strong> African states traded slaves to obtain European firearms necessary for self-defense. Possessing guns enhanced their ability to capture more slaves, generating an ongoing cycle of militarized slaving (Thornton, 1999).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Brooks Diagram:</strong> The famous 1788 print of the Brooks ship became an iconic symbol used by abolitionists to demonstrate human overcrowding.
                 </div>`,
            tr: `<p><strong>Orta Geçit Dehşeti:</strong> İsyanları önlemek için farklı dil konuşan köleler karıştırılıyordu. İngiliz <em>Brooks</em> gemisi gibi yapılarda 30 kişilik mürettebata karşı 300'den fazla köle havasız ambarlara istifleniyordu (Fernandez-Armesto, 2007).</p>
                 <p><strong>Ticari Değer Uçurumu:</strong> 18. yüzyılın ikinci yarısında İngilizlerin Afrika'dan ihraç ettiği kölelerin değeri, tüm diğer Afrika ürünlerinin 10 katına ulaşmıştı.</p>
                 <p><strong>Silah-Köle Döngüsü Teorisi:</strong> Afrika devletleri kendilerini korumak üzere ateşli silah almak için köle satmak zorunda kalıyor; silah sahibi olmak daha fazla köle avlamayı kolaylaştırarak kısırdöngü yaratıyordu (Thornton, 1999).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Brooks Çizimi:</strong> 1788 tarihli Brooks gemisi kesiti, köle ticaretinin vahşetini sergilemek üzere kaldırılma yanlılarınca simgeleştirilmiştir.
                 </div>`
          },
          mapState: {
            zoom: "atlantic",
            highlightRegions: ["africa", "americas"],
            activeRoutes: ["triangular_trade"],
            markers: ["bristol", "liverpool", "santo_domingo"]
          }
        },
        {
          title: {
            en: "Control of the Trade & Imperial Rivalries",
            tr: "Ticaretin Kontrolü ve Güç Dengeleri"
          },
          text: {
            en: `<p><strong>British & Portuguese Dominance:</strong> Britain and Portugal accounted for 7/10 transatlantic slaving voyages and carried nearly 3/4 of all embarked slaves (Eltis, 2001).</p>
                 <p><strong>Timeline Shifts:</strong> Portugal dominated before 1640; Britain displaced Portugal between 1647 and 1807 (carrying 5 slaves for every 4 on Portuguese ships); Portuguese dominance returned after Britain's 1807 Abolition Act.</p>
                 <p><strong>Major British Ports:</strong> British slaving was concentrated in key port cities: Liverpool, Bristol, London, Whitehaven, and Lancashire (Eltis, 2001).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Liverpool's Rise:</strong> Liverpool grew into the world's premier slaving port, building specialized ships and banking networks centered on slave capital.
                 </div>`,
            tr: `<p><strong>İngiliz ve Portekiz Hakimiyeti:</strong> Portekiz ve İngiltere, tüm transatlantik seferlerinin 10'da 7'sini gerçekleştirmiş ve kölelerin 4'te 3'ünü taşımıştır (Eltis, 2001).</p>
                 <p><strong>Zaman Çizelgesi Değişimleri:</strong> Portekiz 1640 öncesine; İngiltere 1647–1807 arasına hükmetti; İngiltere'nin 1807 İptal Yasası sonrası Portekiz tekrar liderliğe geçti.</p>
                 <p><strong>İngiliz Liman Kentleri:</strong> İngiliz ticareti Liverpool, Bristol, Londra ve Whitehaven gibi liman kentlerinde yoğunlaştı (Eltis, 2001).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Liverpool'un Yükselişi:</strong> Liverpool, köle sermayesine dayalı bankacılık ve gemi inşa ağlarıyla dünyanın en büyük köle limanına dönüşmüştür.
                 </div>`
          },
          mapState: {
            zoom: "atlantic",
            highlightRegions: ["europe", "africa", "americas"],
            activeRoutes: ["triangular_trade"],
            markers: ["liverpool", "bristol", "london", "lisbon"]
          }
        },
        {
          title: {
            en: "Slave Societies & Maroon Resistance",
            tr: "Köle Toplumları ve Maron Direnişi"
          },
          text: {
            en: `<p><strong>The World the Slaves Made:</strong> Atlantic America became demographically more African than European. Import totals: 3 million to Brazil, 1 million to Caribbean, 1 million to Spanish colonies, 400,000 to English North America (Fernandez-Armesto, 2007).</p>
                 <p><strong>Cultural Autonomy:</strong> Slaves created original languages (creoles), retained religious traditions, and built household patterns to bridge diverse African origins.</p>
                 <p><strong>Maroon Communities:</strong> Runaway slaves formed independent <em>Maroon</em> communities in remote areas, often aided by Native Americans. The Maroon Kingdom of Esmeraldas (Colombia) signed a formal peace treaty with Spain in 1599 (Fernandez-Armesto, 2007).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Esmeraldas Treaty:</strong> The 1599 treaty recognized Maroon autonomy in Colombia, proving that runaway slave societies could force recognition from imperial crowns.
                 </div>`,
            tr: `<p><strong>Kölelerin Yarattığı Dünya:</strong> Atlantik Amerika demografik olarak Avrupa'dan çok Afrika karakteri kazandı: Brezilya'ya 3 milyon, Karayipler'e 1 milyon, İspanyol bölgelerine 1 milyon, Kuzey Amerika'ya 400.000 köle getirildi (Fernandez-Armesto, 2007).</p>
                 <p><strong>Kültürel Özerklik:</strong> Köleler kreyol diller geliştirdi, dini inançlarını sürdürdü ve Afrika kökenlerini harmanlayan aile yapıları kurdular.</p>
                 <p><strong>Maron Toplulukları:</strong> Kaçak köleler dağlarda bağımsız <em>Maron</em> toplulukları kurdular. Kolombiya'daki Esmeraldas Maron Krallığı 1599'da İspanyol Tacı ile resmi antlaşma imzaladı (Fernandez-Armesto, 2007).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Esmeraldas Antlaşması:</strong> 1599 antlaşması Maron özerkliğini tanıyarak kaçak toplulukların imparatorluklara iradelerini kabul ettirebileceğini kanıtlamıştır.
                 </div>`
          },
          mapState: {
            zoom: "americas",
            highlightRegions: ["americas"],
            activeRoutes: [],
            markers: ["salvador_bahia", "cartagena", "charleston"]
          }
        },
        {
          title: {
            en: "Case Study: Virginia & The Racial Turn",
            tr: "Virginia ve Irksal Köleliğe Geçiş"
          },
          text: {
            en: `<p><strong>Class over Race initially:</strong> In early 17th-century Virginia, status was defined by property, not race. Indentured workers (white and black) worked off contracts. Black individuals like Anthony Johnson acquired freedom, land, and their own indentured servants.</p>
                 <p><strong>Bacon's Rebellion (1676):</strong> A violent uprising of landless freed indentured workers, servants, and slaves attacked Virginia plantations. Terrified planter elites responded by dismantling class solidarity.</p>
                 <p><strong>The Racial & Hereditary Turn:</strong> Elite planters replaced indentured servitude with lifetime, hereditary African slavery. Laws (1691, 1705, 1708) barred freeing slaves and codified race as the sole divider (Royal African Company chartered 1672, co-owned by John Locke).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Paradox of Liberty:</strong> As European thinkers like John Locke wrote about human liberty, they simultaneously invested in slaving companies and codified racial slavery.
                 </div>`,
            tr: `<p><strong>Başlangıçta Sınıf Öncelikliydi:</strong> 17. yüzyıl başı Virginia'sında statü ırka değil mülkiyete dayanıyordu. Sözleşmeli işçiler çalışıyordu. Anthony Johnson gibi Afrikalılar azat edilip mülk ve tütün tarlası sahibi olabiliyordu.</p>
                 <p><strong>Bacon İsyanı (1676):</strong> Topraksız yoksul beyaz ve siyah sözleşmeli işçilerin plantasyonlara saldırması üzerine sömürgeci elitler dehşete düştü ve sınıf dayanışmasını kırmaya karar verdi.</p>
                 <p><strong>Irksal ve İrsi Dönüşüm:</strong> Elitler, sözleşmeli işçiliği ömür boyu ve irsi Afrikalı köleliği ile değiştirdiler. Çıkarılan yasalarla (1691, 1705, 1708) kölelik ırka bağlandı (John Locke'un hissedarı olduğu Royal African Company 1672'de kuruldu).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Özgürlük Çelişkisi:</strong> John Locke gibi düşünürler insan özgürlüğünü savunurken aynı zamanda köle şirketlerine yatırım yapmış ve ırksal köleliği yasallaştırmışlardır.
                 </div>`
          },
          mapState: {
            zoom: "americas",
            highlightRegions: ["americas"],
            activeRoutes: [],
            markers: ["jamestown", "london"]
          }
        }
      ],
      quiz: [
        {
          question: {
            en: "How many enslaved Africans are estimated to have been embarked on transatlantic voyages between 1519 and 1867?",
            tr: "1519 ile 1867 yılları arasında transatlantik seferlerinde yaklaşık kaç Afrikalının köleleştirilerek gemilere bindirildiği tahmin edilmektedir?"
          },
          options: [
            { text: { en: "Over 12.5 million", tr: "12.5 milyondan fazla" }, correct: true },
            { text: { en: "5 million", tr: "5 milyon" }, correct: false },
            { text: { en: "20 million", tr: "20 milyon" }, correct: false },
            { text: { en: "8 million", tr: "8 milyon" }, correct: false }
          ],
          explanation: {
            en: "Historical database records show that 12.5 million Africans were captured, with 10.7 million surviving the Middle Passage.",
            tr: "Tarihsel veri tabanları 12.5 milyon Afrikalının gemilere bindirildiğini, bunlardan 10.7 milyonunun canlı ulaşabildiğini gösterir."
          }
        },
        {
          question: {
            en: "Which legal doctrine in colonial Virginia codified that the status of a child followed that of the mother?",
            tr: "Sömürge dönemi Virginia'sında bir çocuğun kölelik statüsünün annesinin durumuna bağlı olacağını kurumsallaştıran yasal doktrin hangisidir?"
          },
          options: [
            { text: { en: "Partus sequitur ventrem", tr: "Partus sequitur ventrem" }, correct: true },
            { text: { en: "Lex talionis", tr: "Lex talionis" }, correct: false },
            { text: { en: "Habeas corpus", tr: "Habeas corpus" }, correct: false },
            { text: { en: "Coercive codes", tr: "Coercive codes" }, correct: false }
          ],
          explanation: {
            en: "Under 'Partus sequitur ventrem', children born to enslaved women were legally enslaved for life, ensuring perpetual labor.",
            tr: "Bu doktrinle köle kadınlardan doğan çocukların da ömür boyu köle sayılacağı belirlenmiş ve kölelik nesiller boyu kilitlenmiştir."
          }
        },
        {
          question: {
            en: "What debate in 1550 between Las Casas and Sepúlveda addressed the morality of Spanish conquest and native enslavement?",
            tr: "1550 yılında Las Casas ile Sepúlveda arasında İspanyol fethinin meşruiyeti ve yerli köleliğini tartışan ünlü tarihi meclis hangisidir?"
          },
          options: [
            { text: { en: "The Valladolid Controversy", tr: "Valladolid Tartışması" }, correct: true },
            { text: { en: "The Treaty of Tordesillas", tr: "Tordesillas Antlaşması" }, correct: false },
            { text: { en: "The Council of Trent", tr: "Trent Konseyi" }, correct: false },
            { text: { en: "The Diet of Worms", tr: "Worms Meclisi" }, correct: false }
          ],
          explanation: {
            en: "The Valladolid Controversy debated whether Native Americans were 'natural slaves' or free subjects under God.",
            tr: "Valladolid Tartışması, Amerikan yerlilerinin 'doğal köleler' mi yoksa hak sahibi özgür tebaalar mı olduğunu tartışmıştır."
          }
        },
        {
          question: {
            en: "Enslaved people from which West African region were highly sought after in Carolina for their expert wet-rice cultivation skills?",
            tr: "Carolina'da pirinç tarımı konusundaki uzmanlıkları nedeniyle özellikle tercih edilen köleler hangi Batı Afrika bölgesinden getirilmiştir?"
          },
          options: [
            { text: { en: "Senegambia and the Windward Coast", tr: "Senegambia ve Rüzgarüstü Kıyısı (Senegambia)" }, correct: true },
            { text: { en: "Bight of Biafra", tr: "Biafra Körfezi" }, correct: false },
            { text: { en: "Angola", tr: "Angola" }, correct: false },
            { text: { en: "Kingdom of Dahomey", tr: "Dahomey Krallığı" }, correct: false }
          ],
          explanation: {
            en: "Senegambians brought rice-growing techniques and engineering skills required for swamp cultivation.",
            tr: "Senegambialılar, bataklık tarımı için gereken pirinç ekim tekniklerini ve mühendislik bilgilerini beraberinde getirmiştir."
          }
        },
        {
          question: {
            en: "Approximately what percentage of all enslaved Africans were transported to Brazil and the Caribbean to produce sugar?",
            tr: "Transatlantik köle ticaretinde Afrikalıların yaklaşık yüzde kaçı şeker üretimi için Brezilya ve Karayipler'e gönderilmiştir?"
          },
          options: [
            { text: { en: "90%", tr: "%90" }, correct: true },
            { text: { en: "50%", tr: "%50" }, correct: false },
            { text: { en: "30%", tr: "%30" }, correct: false },
            { text: { en: "70%", tr: "%70" }, correct: false }
          ],
          explanation: {
            en: "Sugar was the supreme engine of the slave trade, capturing nearly 90% of the imported labor force.",
            tr: "Şeker tarımı köle ticaretinin ana motoruydu; getirilen kölelerin yaklaşık %90'ı şeker plantasyonlarında konuşlandırılmıştır."
          }
        },
        {
          question: {
            en: "Which powerful West African queen of Ndongo militarily resisted Portuguese penetration and territorial claims?",
            tr: "Portekizlilerin toprak iddialarına ve köle akınlarına karşı askeri olarak direnen ünlü Ndongo (Angola) Kraliçesi kimdir?"
          },
          options: [
            { text: { en: "Queen Nzinga", tr: "Kraliçe Nzinga" }, correct: true },
            { text: { en: "Queen Amina", tr: "Kraliçe Amina" }, correct: false },
            { text: { en: "Yaa Asantewaa", tr: "Yaa Asantewaa" }, correct: false },
            { text: { en: "Queen Idia", tr: "Kraliçe Idia" }, correct: false }
          ],
          explanation: {
            en: "Queen Nzinga of Ndongo and Matamba fought Portuguese forces for decades, maintaining her kingdom's sovereignty.",
            tr: "Kraliçe Nzinga, Portekiz güçlerine karşı onlarca yıl savaşarak krallığının bağımsızlığını korumuştur."
          }
        },
        {
          question: {
            en: "What was the primary West African slaving outpost built by the Portuguese in 1482 and later captured by the Dutch and British?",
            tr: "1482'de Portekizlilerce inşa edilen ve daha sonra İngilizler tarafından köle ticaret merkezine dönüştürülen kale hangisidir?"
          },
          options: [
            { text: { en: "Elmina Castle", tr: "Elmina Kalesi (Elmina Castle)" }, correct: true },
            { text: { en: "Cape Coast Castle", tr: "Cape Coast Kalesi" }, correct: false },
            { text: { en: "Ouidah", tr: "Ouidah Limanı" }, correct: false },
            { text: { en: "Gorée Island", tr: "Goree Adası" }, correct: false }
          ],
          explanation: {
            en: "Elmina Castle on the Gold Coast was a key commercial fortress where captives were held before transport.",
            tr: "Altın Kıyısı'ndaki Elmina Kalesi, esirlerin gemilere yüklenmeden önce tutulduğu en büyük kalelerden biriydi."
          }
        },
        {
          question: {
            en: "Which English city grew into the largest slave-trading port in the Western world by the late 18th century?",
            tr: "18. yüzyıl sonlarında finans ve gemi ağlarıyla Batı dünyasının en büyük köle ticareti limanı haline gelen İngiliz şehri hangisidir?"
          },
          options: [
            { text: { en: "Liverpool", tr: "Liverpool" }, correct: true },
            { text: { en: "Bristol", tr: "Bristol" }, correct: false },
            { text: { en: "London", tr: "Londra" }, correct: false },
            { text: { en: "Glasgow", tr: "Glasgow" }, correct: false }
          ],
          explanation: {
            en: "Liverpool controlled over 40% of the European slave trade, financing shipyards and local banking systems.",
            tr: "Liverpool, Avrupa köle ticaretinin %40'ından fazlasını kontrol ederek finansal gücünü ve bankacılık ağlarını büyütmüştür."
          }
        },
        {
          question: {
            en: "What ratio describes the British vs. Portuguese slaving volume during the peak period of 1647-1807?",
            tr: "1647-1807 yılları arasındaki zirve dönemde, İngiliz ve Portekiz gemilerinin köle taşıma hacimleri arasındaki oran nedir?"
          },
          options: [
            { text: { en: "British carried 5 slaves for every 4 in Portuguese vessels", tr: "İngiliz gemileri, her 4 Portekiz kölesine karşılık 5 köle taşımıştır" }, correct: true },
            { text: { en: "Portuguese carried twice as many as British", tr: "Portekizliler İngilizlerin iki katı taşımıştır" }, correct: false },
            { text: { en: "Equal volume", tr: "Eşit hacim" }, correct: false },
            { text: { en: "British carried ten times more", tr: "İngilizler on kat fazla taşımıştır" }, correct: false }
          ],
          explanation: {
            en: "British merchant fleets outpaced Portuguese shipping, carrying 5 for every 4 in Portuguese vessels.",
            tr: "İngiliz ticaret filoları Portekiz taşımacılığını geride bırakarak her 4 Portekiz kölesine karşılık 5 köle taşımıştır."
          }
        },
        {
          question: {
            en: "Which diagram published in 1788 became the iconic visual representation of the horrors of 'Tight Pack' shipping?",
            tr: "1788'de yayınlanan ve 'Sıkı İstifleme' nakliyesinin dehşetini gösteren ikonik görsel şema hangisidir?"
          },
          options: [
            { text: { en: "The Brooks slave ship diagram", tr: "Brooks köle gemisi şeması (Brooks)" }, correct: true },
            { text: { en: "The Amistad layout", tr: "Amistad planı" }, correct: false },
            { text: { en: "The Zong manifest", tr: "Zong gemisi raporu" }, correct: false },
            { text: { en: "The Henrietta Marie blueprint", tr: "Henrietta Marie planı" }, correct: false }
          ],
          explanation: {
            en: "The schematic of the Brooks ship showed exactly how hundreds of captives were packed under the decks.",
            tr: "Brooks gemisinin şeması, yüzlerce esirin güverte altına nasıl üst üste ve zincirlenerek yerleştirildiğini belgelemiştir."
          }
        },
        {
          question: {
            en: "Why did slave ship crews intentionally mix captives from different language and ethnic backgrounds?",
            tr: "Köle gemisi mürettebatı, esirleri neden kasıtlı olarak farklı dil ve kabile kökenlerinden seçip karıştırıyordu?"
          },
          options: [
            { text: { en: "To prevent communication and lower the risk of coordinated mutinies.", tr: "İletişimi önlemek ve ortak isyan çıkarma riskini azaltmak için." }, correct: true },
            { text: { en: "To teach them English faster.", tr: "İngilizceyi daha hızlı öğrenmelerini sağlamak için." }, correct: false },
            { text: { en: "To follow royal shipping regulations.", tr: "Kraliyet gemicilik kurallarına uymak için." }, correct: false },
            { text: { en: "To balance the weight distribution on the ship.", tr: "Gemideki ağırlık dağılımını dengelemek için." }, correct: false }
          ],
          explanation: {
            en: "Inability to communicate prevented organized mutinies, though uprisings were still common.",
            tr: "İletişim kuramamaları organize isyanları engelliyordu; ancak buna rağmen gemilerde isyanlar eksik olmuyordu."
          }
        },
        {
          question: {
            en: "What was the average mortality rate for enslaved Africans during the Middle Passage crossing?",
            tr: "Orta Geçit (Middle Passage) adı verilen Atlantik geçişinde kölelerin ortalama ölüm oranı yüzde kaçtır?"
          },
          options: [
            { text: { en: "15% to 20%", tr: "%15 ila %20" }, correct: true },
            { text: { en: "5% to 10%", tr: "%5 ila %10" }, correct: false },
            { text: { en: "40% to 50%", tr: "%40 ila %50" }, correct: false },
            { text: { en: "2% to 3%", tr: "%2 ila %3" }, correct: false }
          ],
          explanation: {
            en: "Averages show that disease, dehydration, and suicide took 15-20% of captives before arrival.",
            tr: "Ortalama veriler, dizanteri ve çiçek gibi hastalıkların kölelerin %15 ila %20'sinin yolda ölmesine yol açtığını gösterir."
          }
        },
        {
          question: {
            en: "What sociological classification distinguishes 'slave societies' from 'societies with slaves'?",
            tr: "Tarihçi Ira Berlin'in kavramsallaştırdığı 'köle toplumları' ile 'köle sahibi toplumlar' arasındaki temel fark nedir?"
          },
          options: [
            { text: { en: "In slave societies, slavery is the primary economic engine and social structure.", tr: "Köle toplumlarında kölelik, ekonominin ve tüm toplumsal yapının ana motorudur." }, correct: true },
            { text: { en: "The percentage of free black population.", tr: "Özgür siyah nüfusun oranı." }, correct: false },
            { text: { en: "The legal presence of slave laws.", tr: "Kölelik yasalarının varlığı." }, correct: false },
            { text: { en: "The type of crops cultivated.", tr: "Yetiştirilen tarım ürünlerinin türü." }, correct: false }
          ],
          explanation: {
            en: "In slave societies (like Jamaica or Bahia), every social institution was organized around slave extraction.",
            tr: "Köle toplumlarında (Jamaika veya Bahia gibi) tüm toplumsal düzen ve ekonomi köle emeği etrafında örgütlenmişti."
          }
        },
        {
          question: {
            en: "What was the most successful independent Maroon community established by escaped slaves in colonial Brazil?",
            tr: "Brezilya'da kaçak köleler tarafından kurulan en uzun ömürlü ve en başarılı Maron (Cimarron) topluluğu hangisidir?"
          },
          options: [
            { text: { en: "Quilombo dos Palmares", tr: "Quilombo dos Palmares" }, correct: true },
            { text: { en: "San Basilio de Palenque", tr: "San Basilio de Palenque" }, correct: false },
            { text: { en: "Esmeraldas", tr: "Esmeraldas" }, correct: false },
            { text: { en: "Nanny Town", tr: "Nanny Town" }, correct: false }
          ],
          explanation: {
            en: "Palmares held out against Portuguese armies for nearly a century under leaders like Ganga Zumba and Zumbi.",
            tr: "Palmares, Ganga Zumba ve Zumbi gibi liderler altında Portekiz ordularına karşı yaklaşık bir asır direnmiştir."
          }
        },
        {
          question: {
            en: "Which Maroon kingdom signed a official peace treaty recognizing its sovereignty with the Spanish Crown in 1599?",
            tr: "1599 yılında İspanyol Krallığı ile resmi bir barış antlaşması imzalayarak bağımsızlığını tescil ettiren Maron Krallığı hangisidir?"
          },
          options: [
            { text: { en: "Kingdom of Esmeraldas (Ecuador)", tr: "Esmeraldas Maron Krallığı (Ekvador/Kolombiya)" }, correct: true },
            { text: { en: "Palmares", tr: "Palmares" }, correct: false },
            { text: { en: "Blue Mountain Maroons", tr: "Mavi Dağ Maronları" }, correct: false },
            { text: { en: "Suriname Maroons", tr: "Surinam Maronları" }, correct: false }
          ],
          explanation: {
            en: "The Maroon leaders of Esmeraldas secured legal autonomy and sovereignty from Spain in 1599.",
            tr: "Esmeraldas Maron liderleri, 1599 antlaşması ile İspanyol Krallığı'ndan yasal özerklik ve egemenlik almışlardır."
          }
        },
        {
          question: {
            en: "Who was the Angolan-born enslaved man in early Virginia who gained freedom, acquired land, and owned servants of his own?",
            tr: "Erken Virginia kolonisinde Angola'dan köle getirilip daha sonra özgür kalan, toprak edinen ve kendi işçilerini çalıştıran siyah kimdir?"
          },
          options: [
            { text: { en: "Anthony Johnson", tr: "Anthony Johnson" }, correct: true },
            { text: { en: "Olaudah Equiano", tr: "Olaudah Equiano" }, correct: false },
            { text: { en: "Crispus Attucks", tr: "Crispus Attucks" }, correct: false },
            { text: { en: "Salem Poor", tr: "Salem Poor" }, correct: false }
          ],
          explanation: {
            en: "Anthony Johnson's life proves that racial castes were not yet legally fixed in early 17th-century Virginia.",
            tr: "Anthony Johnson'ın hayatı, 17. yüzyıl ortalarına kadar Virginia'da ırksal kast düzeninin henüz kurulmadığını kanıtlar."
          }
        },
        {
          question: {
            en: "What 1676 armed rebellion in Virginia united poor white and black servants against the colonial governor?",
            tr: "Virginia'da 1676'da patlak veren ve yoksul beyaz/siyah sözleşmeli işçileri sömürge yönetimine karşı birleştiren silahlı ayaklanma hangisidir?"
          },
          options: [
            { text: { en: "Bacon's Rebellion", tr: "Bacon İsyanı" }, correct: true },
            { text: { en: "Shays' Rebellion", tr: "Shays İsyanı" }, correct: false },
            { text: { en: "Stono Rebellion", tr: "Stono İsyanı" }, correct: false },
            { text: { en: "Whiskey Rebellion", tr: "Viski İsyanı" }, correct: false }
          ],
          explanation: {
            en: "Nathaniel Bacon led a multi-racial class uprising that burned Jamestown, terrifying the planter elites.",
            tr: "Nathaniel Bacon, Jamestown'ı yakan çok ırklı yoksul sınıfların ortak ayaklanmasına liderlik etmiştir."
          }
        },
        {
          question: {
            en: "How did the Virginia assembly systematically destroy lower-class unity after Bacon's Rebellion?",
            tr: "Virginia meclisi, Bacon İsyanı'ndan sonra alt sınıfların birliğini bozmak için nasıl bir strateji izlemiştir?"
          },
          options: [
            { text: { en: "By granting legal privileges to poor whites while codifying lifetime black slavery.", tr: "Yoksul beyazlara yasal imtiyazlar verirken, siyahları ömür boyu kalıtsal köleliğe mahkum ederek." }, correct: true },
            { text: { en: "By deporting all rebels to the Caribbean.", tr: "Tüm isyancıları Karayipler'e sürerek." }, correct: false },
            { text: { en: "By outlawing indentured servitude for all races.", tr: "Tüm ırklar için sözleşmeli işçiliği yasaklayarak." }, correct: false },
            { text: { en: "By distributing free land to both black and white servants.", tr: "Hem siyah hem de beyaz işçilere ücretsiz toprak dağıtarak." }, correct: false }
          ],
          explanation: {
            en: "To prevent future coalitions, the elites used race-based legal codes to split the working class.",
            tr: "Elitler, gelecekteki isyan ortaklıklarını önlemek için yoksul beyazları sistemle bütünleştirip siyahları dışlamıştır."
          }
        },
        {
          question: {
            en: "In what year did Virginia pass the law explicitly banning the freeing (manumission) of slaves?",
            tr: "Virginia sömürge meclisi hangi yılda siyah kölelerin serbest bırakılmasını (manumission) tamamen yasaklayan kanunu kabul etmiştir?"
          },
          options: [
            { text: { en: "1691", tr: "1691" }, correct: true },
            { text: { en: "1676", tr: "1676" }, correct: false },
            { text: { en: "1705", tr: "1705" }, correct: false },
            { text: { en: "1750", tr: "1750" }, correct: false }
          ],
          explanation: {
            en: "In 1691, Virginia banned manumission unless the freed person was transported out of the colony.",
            tr: "1691'de Virginia, serbest bırakılan kişilerin koloni dışına gönderilmesi şartı dışında köle azat etmeyi yasakladı."
          }
        },
        {
          question: {
            en: "Which Enlightenment philosopher was a prominent stockholder in the Royal African Company established in 1672?",
            tr: "1672'de kurulan tekelci Kraliyet Afrika Şirketi'nin (RAC) hissedarları arasında yer alan ünlü Aydınlanma filozofu kimdir?"
          },
          options: [
            { text: { en: "John Locke", tr: "John Locke" }, correct: true },
            { text: { en: "Thomas Hobbes", tr: "Thomas Hobbes" }, correct: false },
            { text: { en: "Jean-Jacques Rousseau", tr: "Jean-Jacques Rousseau" }, correct: false },
            { text: { en: "Voltaire", tr: "Voltaire" }, correct: false }
          ],
          explanation: {
            en: "John Locke, advocate of liberty and property rights, held significant stock in the Royal African Company.",
            tr: "Özgürlük ve mülkiyet haklarını savunan İngiliz filozof John Locke, köle ticareti yapan bu şirketin hissedarıydı."
          }
        },
        {
          question: {
            en: "What geopolitical cycle describes the exchange of European muskets for African captives to raid neighboring states?",
            tr: "Avrupa ateşli silahları karşılığında Afrikalı esirlerin satılmasını ve bu silahlarla yeni akınlar düzenlenmesini açıklayan döngü nedir?"
          },
          options: [
            { text: { en: "The Gun-Slave Cycle", tr: "Silah-Köle Sarmalı (Gun-Slave Cycle)" }, correct: true },
            { text: { en: "The Triangular Trade Loop", tr: "Üç Köşeli Ticaret Döngüsü" }, correct: false },
            { text: { en: "The Mercantile Exchange", tr: "Merkantilist Emtia Değişimi" }, correct: false },
            { text: { en: "The Militarized Monopoly", tr: "Militarize Tekel" }, correct: false }
          ],
          explanation: {
            en: "The Gun-Slave Cycle locked African states into security dilemmas, forcing them to trade humans for defense weapons.",
            tr: "Silah-Köle sarmalı, krallıkları güvenlik ikilemine sokarak kendilerini korumak için insan satmaya zorlamıştır."
          }
        },
        {
          question: {
            en: "Why did colonial planters resist the Christianization of enslaved Africans?",
            tr: "Sömürgeci plantasyon sahipleri, köleleştirilmiş Afrikalıların Hristiyanlaştırılmasına neden şiddetle karşı çıkıyordu?"
          },
          options: [
            { text: { en: "They feared Christian concepts of human equality before God would subvert slave obedience.", tr: "Hristiyanlığın 'Tanrı önünde eşitlik' fikrinin kölelerin itaatini bozacağından çekindikleri için." }, correct: true },
            { text: { en: "They did not want to pay for church services.", tr: "Kilise masraflarını ödemek istemedikleri için." }, correct: false },
            { text: { en: "The Pope banned the baptism of Africans.", tr: "Papa Afrikalıların vaftiz edilmesini yasakladığı için." }, correct: false },
            { text: { en: "Enslaved people refused to learn Latin.", tr: "Köleler Latince öğrenmeyi reddettikleri için." }, correct: false }
          ],
          explanation: {
            en: "Planters feared baptism would give slaves legal rights or moral claims to freedom under English law.",
            tr: "Sahipler, vaftiz edilen kölelerin İngiliz yasaları önünde özgürlük veya eşitlik iddia etmesinden korkuyordu."
          }
        },
        {
          question: {
            en: "Which company held the English royal monopoly on the slave trade until it was abolished in 1698?",
            tr: "1698 yılında kaldırılana kadar İngiliz krallığının köle ticareti tekelini elinde tutan şirket hangisidir?"
          },
          options: [
            { text: { en: "Royal African Company", tr: "Kraliyet Afrika Şirketi (Royal African Company)" }, correct: true },
            { text: { en: "East India Company", tr: "Doğu Hindistan Şirketi" }, correct: false },
            { text: { en: "Virginia Company", tr: "Virginia Şirketi" }, correct: false },
            { text: { en: "South Sea Company", tr: "Güney Denizi Şirketi" }, correct: false }
          ],
          explanation: {
            en: "The Royal African Company, led by the royal family, controlled the trade until the monopoly was opened to all merchants.",
            tr: "RAC, 1698'de tekel kalkıp serbest İngiliz tüccarlara açılana kadar köle ticaretini tekelinde tutmuştur."
          }
        },
        {
          question: {
            en: "What percentage of cowrie shells imported by European merchants were traded specifically in the Bight of Benin?",
            tr: "Avrupalı tüccarlar tarafından ithal edilen deniz kabuklarının (cowrie) yaklaşık yüzde kaçı Benin Körfezi'nde takas edilmiştir?"
          },
          options: [
            { text: { en: "95%", tr: "%95" }, correct: true },
            { text: { en: "50%", tr: "%50" }, correct: false },
            { text: { en: "20%", tr: "%20" }, correct: false },
            { text: { en: "75%", tr: "%75" }, correct: false }
          ],
          explanation: {
            en: "The Bight of Benin ports absorbed 95% of imported cowrie shells, which acted as local currency.",
            tr: "Benin Körfezi limanları, takas para birimi olarak kullanılan deniz kabuklarının %95'ini absorbe etmiştir."
          }
        },
        {
          question: {
            en: "Which cargo method aimed to maximize profits by squeezing captives shoulder-to-shoulder under low-clearance decks?",
            tr: "Esirleri alçak güverte altlarına omuz omuza ve zincirlerle sıkıştırarak karı maksimize etmeyi amaçlayan kargo yükleme yöntemi hangisidir?"
          },
          options: [
            { text: { en: "Tight Pack", tr: "Sıkı İstifleme (Tight Pack)" }, correct: true },
            { text: { en: "Loose Pack", tr: "Gevşek İstifleme" }, correct: false },
            { text: { en: "Double Decking", tr: "Çift Katlama" }, correct: false },
            { text: { en: "Logistics Max", tr: "Lojistik Maksimizasyon" }, correct: false }
          ],
          explanation: {
            en: "Tight Pack maximized numbers despite higher risk of disease mortality during the crossing.",
            tr: "Sıkı İstifleme yöntemi, yüksek ölüm riski olmasına rağmen gemiye olabildiğince çok esir sığdırmayı amaçlıyordu."
          }
        },
        {
          question: {
            en: "What disease was the primary killer of both crew members and captives on transatlantic slaving voyages?",
            tr: "Transatlantik köle seferlerinde hem mürettebat hem de esirler arasında en ölümcül olan hastalık hangisidir?"
          },
          options: [
            { text: { en: "Dysentery (Flux)", tr: "Dizanteri (Dysentery)" }, correct: true },
            { text: { en: "Malaria", tr: "Sıtma" }, correct: false },
            { text: { en: "Scurvy", tr: "İskorbüt" }, correct: false },
            { text: { en: "Syphilis", tr: "Frengi" }, correct: false }
          ],
          explanation: {
            en: "Dysentery (or 'bloody flux'), caused by unsanitary conditions, was the leading cause of Middle Passage deaths.",
            tr: "Gemilerdeki pis koşulların yol açtığı dizanteri (kanlı ishal), Orta Geçit'teki ölümlerin birincil nedeniydi."
          }
        },
        {
          question: {
            en: "Which major Caribbean colony was Britain's primary sugar-producing island in the 17th century?",
            tr: "17. yüzyılda İngiltere'nin Karayipler'deki en büyük şeker üreticisi ve sömürge üssü haline gelen ada hangisidir?"
          },
          options: [
            { text: { en: "Jamaica", tr: "Jamaika (Jamaica)" }, correct: true },
            { text: { en: "Barbados", tr: "Barbados" }, correct: false },
            { text: { en: "Saint-Domingue", tr: "Saint-Domingue" }, correct: false },
            { text: { en: "Cuba", tr: "Küba" }, correct: false }
          ],
          explanation: {
            en: "Jamaica was captured from Spain in 1655 and developed into a dominant British slave sugar economy.",
            tr: "Jamaika, 1655'te İspanya'dan alınarak İngilizlerin en büyük şeker ve köle sömürge ekonomisi yapılmıştır."
          }
        },
        {
          question: {
            en: "In what year did Great Britain pass the Act that formally abolished the slave trade (not slavery itself) within its empire?",
            tr: "İngiltere, kendi imparatorluğu sınırları içinde köle ticaretini (köleliğin kendisini değil) yasaklayan kanunu hangi yılda çıkarmıştır?"
          },
          options: [
            { text: { en: "1807", tr: "1807" }, correct: true },
            { text: { en: "1833", tr: "1833" }, correct: false },
            { text: { en: "1776", tr: "1776" }, correct: false },
            { text: { en: "1865", tr: "1865" }, correct: false }
          ],
          explanation: {
            en: "The Abolition of the Slave Trade Act was passed in 1807, making the shipping of captives illegal.",
            tr: "1807 yılında çıkarılan kanunla köle ticareti yasaklanmış, ancak kölelerin kendisi 1833'e kadar özgürleşememiştir."
          }
        },
        {
          question: {
            en: "Which African kingdom capitalized on the slave trade to build a highly centralized, militarized state in the 18th century?",
            tr: "18. yüzyılda köle ticaretini kullanarak son derece merkezi ve militarist bir devlet kuran Afrika krallığı hangisidir?"
          },
          options: [
            { text: { en: "Kingdom of Dahomey", tr: "Dahomey Krallığı" }, correct: true },
            { text: { en: "Kingdom of Ndongo", tr: "Ndongo Krallığı" }, correct: false },
            { text: { en: "Mali Empire", tr: "Mali İmparatorluğu" }, correct: false },
            { text: { en: "Songhai Empire", tr: "Songhay İmparatorluğu" }, correct: false }
          ],
          explanation: {
            en: "Dahomey expanded rapidly by conquering coastal ports to trade captives directly with Europeans for muskets.",
            tr: "Dahomey Krallığı, kıyı limanlarını ele geçirerek esirler karşılığında Avrupalılardan silah alıp genişlemiştir."
          }
        },
        {
          question: {
            en: "What syncretic religion developed in Saint-Domingue, combining West African beliefs with Catholic elements?",
            tr: "Saint-Domingue'de (Haiti) Batı Afrika inançları ile Katolik unsurların birleşmesiyle oluşan melez din hangisidir?"
          },
          options: [
            { text: { en: "Voodoo (Vodou)", tr: "Voodoo (Vodou)" }, correct: true },
            { text: { en: "Santería", tr: "Santeria" }, correct: false },
            { text: { en: "Candomblé", tr: "Candomble" }, correct: false },
            { text: { en: "Macumba", tr: "Macumba" }, correct: false }
          ],
          explanation: {
            en: "Voodoo served as a cultural cohesive force among diverse African ethnicities, aiding rebellion planning.",
            tr: "Voodoo, farklı kökenlerden gelen Afrikalıları birleştiren ve isyan planlamalarında rol oynayan bir inançtı."
          }
        },
        {
          question: {
            en: "Who was the leader of the quilombo community of Palmares who fought Portuguese forces until his death in 1695?",
            tr: "1695'teki ölümüne kadar Portekiz kuvvetlerine karşı savaşan Palmares quilombo (kaçak köle) topluluğu lideri kimdir?"
          },
          options: [
            { text: { en: "Zumbi dos Palmares", tr: "Zumbi dos Palmares" }, correct: true },
            { text: { en: "Ganga Zumba", tr: "Ganga Zumba" }, correct: false },
            { text: { en: "Toussaint Louverture", tr: "Toussaint Louverture" }, correct: false },
            { text: { en: "Vincent Ogé", tr: "Vincent Ogé" }, correct: false }
          ],
          explanation: {
            en: "Zumbi is celebrated as a symbol of anti-colonial resistance and freedom in Brazil.",
            tr: "Zumbi, Brezilya'da sömürge karşıtı direnişin ve köle karşıtlığının en büyük sembollerinden biridir."
          }
        },
        {
          question: {
            en: "What was the main cash crop of the colonial Chesapeake region (Virginia and Maryland)?",
            tr: "Chesapeake sömürge bölgesinin (Virginia ve Maryland) ana ticari tarım ürünü hangisidir?"
          },
          options: [
            { text: { en: "Tobacco", tr: "Tütün" }, correct: true },
            { text: { en: "Rice", tr: "Pirinç" }, correct: false },
            { text: { en: "Sugar", tr: "Şeker" }, correct: false },
            { text: { en: "Indigo", tr: "Çivit Otu" }, correct: false }
          ],
          explanation: {
            en: "Tobacco was the dominant export of the Chesapeake, employing first servants and later slaves.",
            tr: "Tütün, Chesapeake ekonomisinin temeliydi ve sömürgede köle emeğinin yaygınlaşmasını sağladı."
          }
        },
        {
          question: {
            en: "Which law passed in Virginia in 1708 formalized the legal distinction between 'servants' (temporary) and 'slaves' (permanent)?",
            tr: "Virginia'da 1708'de kabul edilen hangi yasa, geçici 'hizmetçiler' ile kalıcı 'köleler' arasındaki ayrımı kesinleştirmiştir?"
          },
          options: [
            { text: { en: "The 1708 Act concerning Servants and Slaves", tr: "1708 Hizmetçi ve Köle Kanunu" }, correct: true },
            { text: { en: "The Virginia Slave Codes of 1705", tr: "1705 Virginia Köle Yasaları" }, correct: false },
            { text: { en: "The Black Act", tr: "Kara Yasa" }, correct: false },
            { text: { en: "The Mutiny Act", tr: "Ayaklanma Yasası" }, correct: false }
          ],
          explanation: {
            en: "The 1708 law codified that all imported non-Christians were slaves, solidifying hereditary status.",
            tr: "1708 yasası, dışarıdan getirilen ve Hristiyan olmayan tüm işçileri kalıcı köle olarak tescil etmiştir."
          }
        },
        {
          question: {
            en: "What was the primary currency exchange medium traded for slaves along the Bight of Benin?",
            tr: "Benin Körfezi kıyılarında esir satın almak için kullanılan birincil para birimi takas aracı hangisiydi?"
          },
          options: [
            { text: { en: "Cowrie shells", tr: "Deniz kabukları (Cowrie)" }, correct: true },
            { text: { en: "Manillas (bronze rings)", tr: "Manillalar (bronz halkalar)" }, correct: false },
            { text: { en: "Gold dust", tr: "Altın tozu" }, correct: false },
            { text: { en: "Rum", tr: "Rom" }, correct: false }
          ],
          explanation: {
            en: "Cowrie shells imported from the Indian Ocean served as the standardized currency in Dahomey and Benin.",
            tr: "Hint Okyanusu'ndan getirilen deniz kabukları (cowrie), bölgede standart para birimi görevi görüyordu."
          }
        },
        {
          question: {
            en: "Which African kingdom's military force was famously augmented by elite female warriors (the Dahomey Amazons)?",
            tr: "Hangi Afrika krallığının askeri gücü, kadın savaşçılardan oluşan elit birliklerle (Dahomey Amazonları) takviye ediliyordu?"
          },
          options: [
            { text: { en: "Kingdom of Dahomey", tr: "Dahomey Krallığı" }, correct: true },
            { text: { en: "Kingdom of Ndongo", tr: "Ndongo Krallığı" }, correct: false },
            { text: { en: "Ashanti Empire", tr: "Aşanti İmparatorluğu" }, correct: false },
            { text: { en: "Oyo Empire", tr: "Oyo İmparatorluğu" }, correct: false }
          ],
          explanation: {
            en: "Dahomey's female regiments, or 'Mino', were highly disciplined and feared by rival African states.",
            tr: "Dahomey'in kadın savaşçı birlikleri (Mino), son derece disiplinliydi ve komşu devletlerce korkuluyordu."
          }
        },
        {
          question: {
            en: "Approximately how many voyages are registered in the Transatlantic Slave Trade Database?",
            tr: "Transatlantik Köle Ticareti Veri Tabanı'nda yaklaşık kaç adet köle taşıma seferi kayıtlıdır?"
          },
          options: [
            { text: { en: "Over 36,000 voyages", tr: "36.000'den fazla sefer" }, correct: true },
            { text: { en: "10,000 voyages", tr: "10.000 sefer" }, correct: false },
            { text: { en: "50,000 voyages", tr: "50.000 sefer" }, correct: false },
            { text: { en: "5,000 voyages", tr: "5.000 sefer" }, correct: false }
          ],
          explanation: {
            en: "The database documents over 36,000 individual voyages spanning three centuries.",
            tr: "Veri tabanı, üç asırlık döneme yayılan 36 binden fazla bireysel köle seferini belgelemektedir."
          }
        },
        {
          question: {
            en: "Which group of escaped slaves in Jamaica fought the British military to a stalemate, securing autonomy in 1739?",
            tr: "Jamaika'da İngiliz ordusunu çıkmaza sokarak 1739'da resmi özerklik antlaşması imzalayan kaçak köle grubu hangisidir?"
          },
          options: [
            { text: { en: "The Maroons (led by Cudjoe and Nanny)", tr: "Maronlar (Cudjoe ve Nanny önderliğinde)" }, correct: true },
            { text: { en: "The Palmares fighters", tr: "Palmares savaşçıları" }, correct: false },
            { text: { en: "The Cimarrones of Panama", tr: "Panama Cimarronları" }, correct: false },
            { text: { en: "The Esmeraldas chiefs", tr: "Esmeraldas şefleri" }, correct: false }
          ],
          explanation: {
            en: "The Jamaican Maroons used guerrilla warfare in the Blue Mountains, forcing the British to sign treaties.",
            tr: "Mavi Dağlar'da gerilla savaşı yürüten Maronlar, İngilizleri kendi özerkliklerini tanımaya zorlamıştır."
          }
        },
        {
          question: {
            en: "What was the main export product of early Portuguese Brazil?",
            tr: "Portekiz Brezilyası'nın sömürgeciliğin ilk evresindeki ana ihraç ürünü hangisiydi?"
          },
          options: [
            { text: { en: "Brazilwood (for red dye)", tr: "Brezilya odunu (boya için)" }, correct: true },
            { text: { en: "Sugar", tr: "Şeker" }, correct: false },
            { text: { en: "Gold", tr: "Altın" }, correct: false },
            { text: { en: "Coffee", tr: "Kahve" }, correct: false }
          ],
          explanation: {
            en: "Before the sugar boom, Brazilwood (pau-brasil) prized for its red dye was the primary export.",
            tr: "Şeker patlamasından önce, kırmızı boya üretiminde kullanılan Brezilya odunu ana ihraç maddesiydi."
          }
        },
        {
          question: {
            en: "Which document written by former slave Olaudah Equiano in 1789 fueled the British abolitionist movement?",
            tr: "Eski bir köle olan Olaudah Equiano tarafından 1789'da yazılan ve İngiliz kölelik karşıtı hareketi körükleyen kitap hangisidir?"
          },
          options: [
            { text: { en: "The Interesting Narrative of the Life of Olaudah Equiano", tr: "Olaudah Equiano'nun Hayatının İlginç Anlatımı" }, correct: true },
            { text: { en: "Uncle Tom's Cabin", tr: "Tom Amca'nın Kulübesi" }, correct: false },
            { text: { en: "The Black Jacobins", tr: "Siyah Jakobenler" }, correct: false },
            { text: { en: "Notes on Virginia", tr: "Virginia Üzerine Notlar" }, correct: false }
          ],
          explanation: {
            en: "Equiano's autobiography provided firsthand testimony of the Middle Passage and slavery's brutality.",
            tr: "Equiano'nun otobiyografisi, Orta Geçit ve köleliğin vahşetine dair ilk elden tanıklık sunmuştur."
          }
        },
        {
          question: {
            en: "In what year did the Royal African Company lose its exclusive English monopoly on the slave trade?",
            tr: "Kraliyet Afrika Şirketi, köle ticareti üzerindeki İngiliz tekel hakkını hangi yılda kaybetmiştir?"
          },
          options: [
            { text: { en: "1698", tr: "1698" }, correct: true },
            { text: { en: "1672", tr: "1672" }, correct: false },
            { text: { en: "1713", tr: "1713" }, correct: false },
            { text: { en: "1750", tr: "1750" }, correct: false }
          ],
          explanation: {
            en: "In 1698, Parliament opened the trade to all English merchants, who paid a 10% tax to maintain forts.",
            tr: "1698'de tekel kalkmış, tüm İngiliz tüccarların köle ticaretine girmesinin önü açılmıştır."
          }
        },
        {
          question: {
            en: "Which region of Africa exported the largest number of enslaved people to the Americas?",
            tr: "Afrika'nın hangi bölgesi Amerika kıtasına en fazla sayıda köle ihraç etmiştir?"
          },
          options: [
            { text: { en: "West-Central Africa (Angola/Congo)", tr: "Batı-Orta Afrika (Angola/Kongo)" }, correct: true },
            { text: { en: "Gold Coast", tr: "Altın Kıyısı" }, correct: false },
            { text: { en: "Bight of Benin", tr: "Benin Körfezi" }, correct: false },
            { text: { en: "Senegambia", tr: "Senegambia" }, correct: false }
          ],
          explanation: {
            en: "West-Central Africa (mostly Portuguese-controlled Luanda and Congo) exported nearly 45% of all slaves.",
            tr: "Batı-Orta Afrika (çoğunlukla Luanda ve Kongo), tüm köle ticaretinin yaklaşık %45'ini karşılamıştır."
          }
        },
        {
          question: {
            en: "What was the main purpose of the Spanish 'Asiento' contract?",
            tr: "İspanyol sömürge düzenindeki 'Asiento' sözleşmesinin temel amacı neydi?"
          },
          options: [
            { text: { en: "A royal monopoly license granted to foreign merchants to supply slaves to Spanish colonies.", tr: "Yabancı tüccarlara İspanyol sömürgelerine köle sağlama hakkı veren kraliyet lisansı sözleşmesi." }, correct: true },
            { text: { en: "A land grant for sugar production.", tr: "Şeker üretimi için verilen toprak hibesi." }, correct: false },
            { text: { en: "A treaty with native chiefs.", tr: "Yerli şeflerle yapılan barış anlaşması." }, correct: false },
            { text: { en: "A code for building forts.", tr: "Kıyı kaleleri inşa etme yönetmeliği." }, correct: false }
          ],
          explanation: {
            en: "The Asiento was a highly lucrative trade monopoly license sold by the Spanish Crown to other nations.",
            tr: "Asiento, İspanyol Krallığı'nın diğer devletlerin tüccarlarına sattığı karlı bir köle tedarik lisansıydı."
          }
        },
        {
          question: {
            en: "Which treaty transferred the lucrative Spanish Asiento slave-trade contract to Great Britain in 1713?",
            tr: "1713 yılında imzalanan hangi antlaşma, karlı İspanyol Asiento köle ticareti lisansını Büyük Britanya'ya devretmiştir?"
          },
          options: [
            { text: { en: "Treaty of Utrecht", tr: "Utrecht Antlaşması" }, correct: true },
            { text: { en: "Treaty of Paris", tr: "Paris Antlaşması" }, correct: false },
            { text: { en: "Treaty of Ryswick", tr: "Ryswick Antlaşması" }, correct: false },
            { text: { en: "Treaty of Westphalia", tr: "Vestfalya Antlaşması" }, correct: false }
          ],
          explanation: {
            en: "The Treaty of Utrecht ended the War of the Spanish Succession, giving Britain the exclusive Asiento for 30 years.",
            tr: "Utrecht Antlaşması ile İspanyol Veraset Savaşı bitmiş ve İngiltere 30 yıl boyunca Asiento tekelini almıştır."
          }
        },
        {
          question: {
            en: "What was the primary destination of enslaved Africans imported into British North America?",
            tr: "İngiliz Kuzey Amerikasına (bugünkü ABD) getirilen kölelerin birincil yerleşim alanı neresiydi?"
          },
          options: [
            { text: { en: "Southern agricultural plantations (tobacco, rice, indigo)", tr: "Güney tarım plantasyonları (tütün, pirinç, çivit otu)" }, correct: true },
            { text: { en: "Northern industrial cities", tr: "Kuzey sanayi şehirleri" }, correct: false },
            { text: { en: "Western mining towns", tr: "Batı madencilik kasabaları" }, correct: false },
            { text: { en: "Caribbean shipping ports", tr: "Karayip sevkiyat limanları" }, correct: false }
          ],
          explanation: {
            en: "Enslaved labor was concentrated in the agrarian south to cultivate labor-intensive cash crops.",
            tr: "Köle emeği, emek-yoğun ticari tarım ürünlerini yetiştirmek amacıyla tarımsal güneyde yoğunlaşmıştı."
          }
        },
        {
          question: {
            en: "Which cash crop was the primary driver of the expansion of slavery in the lowcountry of South Carolina?",
            tr: "Güney Carolina'nın kıyı bölgelerinde köleliğin yaygınlaşmasını tetikleyen temel tarım ürünü hangisiydi?"
          },
          options: [
            { text: { en: "Rice", tr: "Pirinç" }, correct: true },
            { text: { en: "Sugar", tr: "Şeker" }, correct: false },
            { text: { en: "Tobacco", tr: "Tütün" }, correct: false },
            { text: { en: "Cotton", tr: "Pamuk" }, correct: false }
          ],
          explanation: {
            en: "Rice cultivation required specialized skills and massive labor inputs, driving slave imports to Carolina.",
            tr: "Pirinç tarımı uzmanlık ve yoğun iş gücü gerektirdiğinden Carolina'ya köle ithalatını körüklemiştir."
          }
        },
        {
          question: {
            en: "What percentage of the population of Saint-Domingue was enslaved by 1789?",
            tr: "1789 yılına gelindiğinde Saint-Domingue (Haiti) nüfusunun yaklaşık yüzde kaçı kölelerden oluşuyordu?"
          },
          options: [
            { text: { en: "90%", tr: "%90" }, correct: true },
            { text: { en: "50%", tr: "%50" }, correct: false },
            { text: { en: "75%", tr: "%75" }, correct: false },
            { text: { en: "30%", tr: "%30" }, correct: false }
          ],
          explanation: {
            en: "The colony was heavily demographically skewed, with 500,000 slaves and only 40,000 whites.",
            tr: "Nüfus dengesi aşırı bozuktu: 500.000 köleye karşılık yalnızca 40.000 beyaz yaşıyordu."
          }
        },
        {
          question: {
            en: "What was the primary method used by colonial authorities to track and control escaped slaves in Brazil?",
            tr: "Brezilya'da sömürge yönetiminin kaçak köleleri izlemek ve yakalamak için kullandığı birincil askeri yöntem hangisiydi?"
          },
          options: [
            { text: { en: "Hiring specialized slave hunters known as bandeirantes or capitães-do-mato.", tr: "Capitães-do-mato (orman kaptanları) veya bandeirantes denilen özel köle avcıları kiralamak." }, correct: true },
            { text: { en: "Building border walls.", tr: "Sınır duvarları inşa etmek." }, correct: false },
            { text: { en: "Offering freedom to any informant.", tr: "Her muhbire özgürlük teklif etmek." }, correct: false },
            { text: { en: "Using naval blockades.", tr: "Deniz ablukaları kullanmak." }, correct: false }
          ],
          explanation: {
            en: "Capitães-do-mato were specialized bush captains hired to track fugitives and destroy Maroon settlements.",
            tr: "Orman Kaptanları, kaçak köleleri izlemek ve Maron yerleşimlerini yok etmek için kiralanan milislerdi."
          }
        },
        {
          question: {
            en: "Which cash crop did NOT rely primarily on enslaved African labor in the 17th-century Americas?",
            tr: "17. yüzyıl Amerikasında aşağıdaki tarım ürünlerinden hangisi üretimde köle emeğine birincil derecede bağımlı değildi?"
          },
          options: [
            { text: { en: "Wheat", tr: "Buğday" }, correct: true },
            { text: { en: "Sugar", tr: "Şeker" }, correct: false },
            { text: { en: "Tobacco", tr: "Tütün" }, correct: false },
            { text: { en: "Rice", tr: "Pirinç" }, correct: false }
          ],
          explanation: {
            en: "Wheat was cultivated primarily by free family farmers or indentured servants in cooler regions.",
            tr: "Buğday, daha serin bölgelerde özgür aile çiftçileri veya sözleşmeli işçilerce yetiştiriliyordu."
          }
        },
        {
          question: {
            en: "What was the name of the Portuguese slave ship that sailed directly to Virginia in 1619, carrying the first Africans?",
            tr: "1619'da Virginia'ya ilk Afrikalıları getiren Portekiz köle gemisine saldıran İngiliz korsan gemisinin adı nedir?"
          },
          options: [
            { text: { en: "White Lion", tr: "Beyaz Aslan (White Lion)" }, correct: true },
            { text: { en: "San Juan Bautista", tr: "San Juan Bautista" }, correct: false },
            { text: { en: "Mayflower", tr: "Mayflower" }, correct: false },
            { text: { en: "Discovery", tr: "Discovery" }, correct: false }
          ],
          explanation: {
            en: "The privateer White Lion brought the '20 and odd' Africans to Point Comfort after raiding a Portuguese vessel.",
            tr: "Beyaz Aslan adlı korsan gemisi, Portekiz gemisinden yağmaladığı Afrikalıları Point Comfort'a getirmiştir."
          }
        },
        {
          question: {
            en: "Which legal status described poor Europeans who traded several years of labor for passage to the Americas?",
            tr: "Amerika'ya geçiş ücreti karşılığında birkaç yıl boyunca ücretsiz çalışmayı kabul eden yoksul Avrupalıların yasal statüsü neydi?"
          },
          options: [
            { text: { en: "Indentured Servants", tr: "Sözleşmeli İşçiler (Indentured Servants)" }, correct: true },
            { text: { en: "Chattel Slaves", tr: "Mülk Köleler" }, correct: false },
            { text: { en: "Vassals", tr: "Vasallar" }, correct: false },
            { text: { en: "Sharecroppers", tr: "Ortakçı Çiftçiler" }, correct: false }
          ],
          explanation: {
            en: "Indentured servants signed contracts (indentures) to work for 4-7 years before gaining land or freedom.",
            tr: "Sözleşmeli işçiler, geçiş masrafı karşılığında 4-7 yıl çalışmayı kabul eden geçici statüdeki işçilerdi."
          }
        }
      ]
    },
    4: {
      id: 4,
      themeColor: "#2563eb", // Royal Blue
      title: {
        en: "The American Revolution",
        tr: "Amerika Devrimi"
      },
      video: {
        src: "https://drive.google.com/file/d/1DjMm--JvW8uZ5269pBOXFUd1-46c6MoN/view?usp=sharing",
        desc: {
          tr: "Amerika Devrimi: 13 Koloninin bağımsızlık mücadelesi ve Amerika Birleşik Devletleri'nin kuruluşu.",
          en: "The American Revolution: The struggle for independence of the 13 Colonies and the founding of the United States."
        }
      },
      slides: [
        {
          title: {
            en: "From British Subjects to Revolutionaries",
            tr: "İngiliz Uyruğundan Devrimciye Geçiş"
          },
          text: {
            en: `<p><strong>Transformation of Identity:</strong> While slavery expanded, a wave of revolutions swept the Western world, overthrowing royalist regimes in the name of liberty and popular rights against royal arbitrariness.</p>
                 <p><strong>Shift in Political Philosophy:</strong> Influenced by Enlightenment thought, political theory shifted from viewing governments as tools to please kings toward viewing them as institutions created to ensure the welfare of rights-bearing citizens.</p>
                 <p><strong>Focus of the Study:</strong> This evolution is observed through two key case studies: the American Revolutionary War and, subsequently, the French Revolution. In America, loyal British subjects transformed into angry revolutionaries and ultimately into Americans.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Context:</strong> The 13 North American colonies were inhabited by subjects of His Majesty the King of England established across the 17th and 18th centuries.
                 </div>`,
            tr: `<p><strong>Kimlik Dönüşümü:</strong> Kölelik zirveye ulaşırken, Batı dünyasında krallık rejimlerini deviren ve halkın özgürlük haklarını savunan bir devrimler dalgası başladı.</p>
                 <p><strong>Siyaset Felsefesinde Kayma:</strong> Aydınlanma'nın etkisiyle hükümetlerin amacı, kralı memnun etmek ve uyrukların güvenliğini sağlamaktan; hak sahibi yurttaşların refahını güvenceye almaya dönüştü.</p>
                 <p><strong>İnceleme Odağı:</strong> Bu süreç iki temel vaka üzerinden incelenmektedir: Amerikan Bağımsızlık Savaşı ve Fransız Devrimi. Amerikan kolonilerinde sadık İngiliz uyrukları, öfkeli devrimcilere ve nihayetinde Amerikalılara dönüştü.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Bağlam:</strong> 13 Kuzey Amerika kolonisi, 17. ve 18. yüzyıllarda İngiltere Kralı Majestelerinin uyrukları tarafından kurulmuş ve yerleşilmiştir.
                 </div>`
          },
          mapState: {
            zoom: "us",
            highlightRegions: ["north_america"],
            activeRoutes: [],
            markers: ["boston", "philadelphia", "williamsburg"]
          }
        },
        {
          title: {
            en: "Colonial Typology & Geography",
            tr: "Koloni Tipleri ve Coğrafyası"
          },
          text: {
            en: `<p><strong>Three Colonial Structures:</strong> The 13 colonies on the Atlantic seaboard fell into three political categories:</p>
                 <p><ul>
                   <li><strong>Corporate Colonies:</strong> Connecticut and Rhode Island, incorporated by Puritans leaving Massachusetts with self-governing constitutions ratified by the Crown.</li>
                   <li><strong>Proprietary Colonies:</strong> Pennsylvania (founded by Quaker proprietor William Penn) and Maryland (founded by Catholic proprietor Lord Baltimore).</li>
                   <li><strong>Royal Colonies:</strong> Directly owned and governed under the King (New York, Massachusetts, North/South Carolina, Georgia).</li>
                 </ul></p>
                 <p><strong>Seaboard Settlement:</strong> Colonists concentrated along the Atlantic coast, heavily reliant on shipping, trade, and direct communication with Britain.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Quaker & Catholic Havens:</strong> Proprietary charters permitted religious dissidents like Quakers in Pennsylvania and Catholics in Maryland to establish havens of religious tolerance.
                 </div>`,
            tr: `<p><strong>Üç Koloni Yapısı:</strong> Atlantik kıyısındaki 13 koloni üç idari kategoriye ayrılıyordu:</p>
                 <p><ul>
                   <li><strong>Şirket/Kurum Kolonileri (Corporate):</strong> Massachusetts'ten ayrılan Püritenlerin kendi anayasalarıyla kurduğu Connecticut ve Rhode Island.</li>
                   <li><strong>Mülk Kolonileri (Proprietary):</strong> Kralın mülkiyetini şahıslara devrettiği Pennsylvania (Kvakır William Penn) ve Maryland (Katolik Lord Baltimore).</li>
                   <li><strong>Kraliyet Kolonileri (Royal):</strong> Doğrudan Krala bağlı olan New York, Massachusetts, Kuzey/Güney Carolina ve Georgia.</li>
                 </ul></p>
                 <p><strong>Deniz Kıyısı Yerleşimi:</strong> Koloniler Atlantik kıyı şeridinde yoğunlaşmıştı; deniz ticareti ve İngiltere ile iletişim hayati önem taşıyordu.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Dini Sığınaklar:</strong> Mülkiyet beratları, Pennsylvania'da Kvakırlar ve Maryland'de Katolikler gibi dini azınlıkların hoşgörü sığınakları kurmasına izin vermiştir.
                 </div>`
          },
          mapState: {
            zoom: "us",
            highlightRegions: ["north_america"],
            activeRoutes: [],
            markers: ["boston", "philadelphia", "baltimore", "charleston"]
          }
        },
        {
          title: {
            en: "Colonial Demographics & Social Structure",
            tr: "Demografi ve Toplumsal Yapı"
          },
          text: {
            en: `<p><strong>Demographics & Identity:</strong> By the 18th century, 2 million colonists (free and enslaved) lived in North America. Colonists felt undeniably British, proudly fighting alongside British troops against France in the French and Indian War (1754–1763).</p>
                 <p><strong>Absence of Rigid Castes:</strong> Unlike feudal England, American colonial society lacked both an entrenched landed aristocracy and a traditional peasantry. Society was dominated by risk-taking migrants and younger sons of gentry aiming to build independent estates.</p>
                 <p><strong>Pluralism & Space:</strong> Vast geographic space and diverse religious migrations (Quakers, Puritans, Catholics) fostered practical tolerance and individual initiative.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Social Mobility:</strong> Broad access to land ownership created a uniquely large middle class of independent property owners.
                 </div>`,
            tr: `<p><strong>Demografi ve Kimlik:</strong> 18. yüzyılda Kuzey Amerika'da 2 milyon kolonyal nüfus yaşıyordu. Kolonistler kendilerini gururla İngiliz hissediyor, 1750'lerdeki Fransız ve Yerli Savaşları'nda İngiliz ordusuyla yan yana savaşıyorlardı.</p>
                 <p><strong>Esnek Toplumsal Yapı:</strong> İngiltere'nin aksine Amerika'da kökleşmiş bir aristokrasi veya feodal köylü sınıfı yoktu. Toplum, hayatını iyileştirmek isteyen risk alıcı göçmenlerden oluşuyordu.</p>
                 <p><strong>Çoğulculuk ve Coğrafya:</strong> Geniş coğrafi alan ve farklı dini göçler (Kvakırlar, Püritenler, Katolikler), pratik hoşgörüyü ve bireysel özerkliği teşvik etti.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Toplumsal Hareketlilik:</strong> Geniş toprak mülkiyeti imkanı, bağımsız mülk sahiplerinden oluşan benzersiz büyüklükte bir orta sınıf yaratmıştır.
                 </div>`
          },
          mapState: {
            zoom: "us",
            highlightRegions: ["north_america"],
            activeRoutes: [],
            markers: ["boston", "new_york", "philadelphia"]
          }
        },
        {
          title: {
            en: "Political Liberty & Salutary Neglect",
            tr: "Siyasi Özgürlük ve Özerk Yönetim"
          },
          text: {
            en: `<p><strong>Heritage of 1688:</strong> Migrations peaked following England's 1688 Glorious Revolution. Colonists firmly believed in English liberties, legislative representation, and the rule of law.</p>
                 <p><strong>Self-Governing Assemblies:</strong> Every colony possessed its own elected legislature capable of overriding royal governors. Because land ownership determined voting rights, 60%–80% of white adult males could vote in America, compared to just 20% in England.</p>
                 <p><strong>Salutary Neglect & Frontier Reality:</strong> British oversight remained hands-off ("salutary neglect"). Frontier living fostered self-reliance, independence, and strong community governance, making colonies self-governing states in practice by the 1760s.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Drifting Apart:</strong> Britain and the colonies developed parallel political identities, oblivious that they were slowly drifting apart until fiscal crisis struck.
                 </div>`,
            tr: `<p><strong>1688 Mirası:</strong> Göçler İngiltere'deki 1688 Şanlı Devrim sonrasında zirve yaptı. Kolonistler İngiliz özgürlüklerine, meclis temsiline ve hukukun üstünlüğüne yürekten inanıyordu.</p>
                 <p><strong>Özerk Meclisler:</strong> Her koloninin kraliyet valilerini denetleyebilen kendi meclisi vardı. Toprak sahibi olma şartı nedeniyle Amerika'da beyaz erkeklerin %60-80'i oy hakkına sahipken bu oran İngiltere'de sadece %20'ydi.</p>
                 <p><strong>Göz Yumma Politikası (Salutary Neglect):</strong> İngiltere'nin mesafeli yönetimi ve sınır boyu hayatı özerkliği pekiştirdi; 1760'lara gelindiğinde koloniler fiilen kendi kendini yöneten devletlere dönüşmüştü.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Sessiz Kopuş:</strong> İngiltere ile koloniler, mali kriz patlak verene kadar birbirlerinden uzaklaştıklarının farkında olmadan paralel siyasi kimlikler geliştirmişlerdir.
                 </div>`
          },
          mapState: {
            zoom: "us",
            highlightRegions: ["north_america"],
            activeRoutes: [],
            markers: ["williamsburg", "boston", "london"]
          }
        },
        {
          title: {
            en: "Southern Society & Fiscal Crisis",
            tr: "Güney Toplumu ve Mali Kriz"
          },
          text: {
            en: `<p><strong>Southern Slave Societies:</strong> Southern colonies developed structured plantation economies functioning like independent villages owned by gentry masters, fully dependent on black slave labor.</p>
                 <p><strong>The Cost of Victory:</strong> The French and Indian War (1754–1763) ended in British victory over France, but emptied King George III's coffers, leaving Britain heavily indebted.</p>
                 <p><strong>Taxing the Colonies:</strong> After taxing domestic English citizens, the British Parliament decided to compel American colonists to pay for the military defense provided during the war, igniting an explosive debate on colonial rights.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Fiscal Reality:</strong> Debt from imperial wars forced Britain to centralize control, directly challenging a century of colonial self-taxation.
                 </div>`,
            tr: `<p><strong>Güney Köle Toplumları:</strong> Güney kolonileri, beyefendi sahiplerin yönettiği ve Afrikalı köle emeğine dayalı bağımsız plantasyon köyleri şeklinde yapılandı.</p>
                 <p><strong>Zaferin Maliyeti:</strong> Fransız ve Yerli Savaşı (1754–1763) İngiliz zaferiyle bitti ancak Kral III. George'un hazinesini tamamen boşalttı ve İngiltere'yi devasa borçla baş başa bıraktı.</p>
                 <p><strong>Kolonileri Vergilendirme:</strong> İngiltere içindeki vergileri artırdıktan sonra Parlamento, savaş savunma masraflarını karşılamak üzere kolonileri vergilendirmeye karar vererek anayasal krizi başlattı.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Mali Gerçek:</strong> Savaş borçları İngiltere'yi yönetimi merkezileştirmeye zorlamış, bu da kolonilerin yüzyıllık vergi özerkliğine doğrudan çarpmıştır.
                 </div>`
          },
          mapState: {
            zoom: "us",
            highlightRegions: ["north_america", "europe"],
            activeRoutes: [],
            markers: ["charleston", "williamsburg", "london"]
          }
        },
        {
          title: {
            en: "Taxation Without Representation",
            tr: "Temsilsiz Vergilendirme Olmaz"
          },
          text: {
            en: `<p><strong>The 1765 Stamp Act:</strong> Parliament levied its first direct tax on colonists, requiring stamped paper for legal documents, contracts, diplomas, newspapers, and playing cards.</p>
                 <p><strong>Targeting Vocal Elites:</strong> The tax directly hit lawyers, printers, merchants, and ship owners—the most articulate and financially influential colonists capable of organizing opposition.</p>
                 <p><strong>Property as Freedom:</strong> Colonists rallied behind the slogan <em>"No taxation without representation."</em> In English political thought, freedom required security of property; unconsented taxes were viewed as reducing free men to propertyless slaves.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Colonial Quotation:</strong> "We cannot be free without being secure in our property. We cannot be secure in our property if, without our consent, others may take it away."
                 </div>`,
            tr: `<p><strong>1765 Pul Yasası (Stamp Act):</strong> İngiliz Parlamentosu, tüm yasal belgeler, gazeteler, sözleşmeler ve diplomalar üzerine doğrudan vergi koyan ilk yasayı çıkardı.</p>
                 <p><strong>Okumuş Elitlerin Hedef Alınması:</strong> Vergi doğrudan avukatları, matbaacıları, tüccarları ve gemi sahiplerini—muhalefet örgütleyecek en eğitimli kesimi—vurdu.</p>
                 <p><strong>Mülkiyet ve Özgürlük:</strong> Kolonistler <em>"Temsilsiz vergilendirme olamaz"</em> sloganında birleşti. İngiliz anlayışında özgürlük mülkiyet güvencesine bağlıydı; rızasız vergi almak özgür insanı köleleştirmek demekti.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Tarihsel Alıntı:</strong> "Mülkiyetimizden emin olmadan özgür olamayız. Rızamız olmadan başkaları mülkümüzü alabiliyorsa mülkiyetimizden emin olamayız."
                 </div>`
          },
          mapState: {
            zoom: "us",
            highlightRegions: ["north_america"],
            activeRoutes: [],
            markers: ["williamsburg", "boston", "philadelphia"]
          }
        },
        {
          title: {
            en: "Escalation & Popular Resistance",
            tr: "Gerilimin Tırmanması ve Halk Protestoları"
          },
          text: {
            en: `<p><strong>Legislative & Street Protest:</strong> Virginia passed formal resolutions against the Stamp Act. In Boston, Samuel Adams organized the <em>Sons of Liberty</em>, directing riots against tax collectors and stamp distributors.</p>
                 <p><strong>Boston Tea Party (1773):</strong> In response to the Tea Act, Bostonians disguised as Native Americans dumped East India Company tea into Boston Harbor, provoking punitive British acts.</p>
                 <p><strong>Bloodshed & Military Occupation:</strong> Skirmishes escalated into bloodshed (Boston Massacre 1770, Lexington & Concord 1775). Britain dissolved assemblies and dispatched troops, pushing reconciliation out of reach.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Point of No Return:</strong> British military intervention transformed a constitutional argument over taxes into armed colonial resistance.
                 </div>`,
            tr: `<p><strong>Meclis ve Sokak Protestoları:</strong> Virginia meclisi kararlar yayınladı. Boston'da Samuel Adams <em>Hürriyet Evlatları (Sons of Liberty)</em> örgütünü kurarak vergi memurlarına karşı gösteriler düzenledi.</p>
                 <p><strong>Boston Çay Partisi (1773):</strong> 1773 Çay Yasası'na misilleme olarak Bostonlular yerli kılığına girip İngiliz çayını limana döktü; İngiltere sert cezalandırıcı yasalar çıkardı.</p>
                 <p><strong>Kanlı Çatışmalar ve Askeri İşgal:</strong> Boston Katliamı (1770) ve Lexington-Concord (1775) çatışmalarıyla kan döküldü. İngiltere meclisleri fesh edip ordu gönderdi.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Geri Dönüşsüz Nokta:</strong> İngiliz askeri müdahalesi, vergi üzerindeki hukuki tartışmayı silahlı bağımsızlık direnişine dönüştürmüştür.
                 </div>`
          },
          mapState: {
            zoom: "us",
            highlightRegions: ["north_america"],
            activeRoutes: [],
            markers: ["boston", "lexington", "williamsburg"]
          }
        },
        {
          title: {
            en: "Continental Unity & Declaration of Independence",
            tr: "Kıtasal Birlik ve Bağımsızlık Bildirgesi"
          },
          text: {
            en: `<p><strong>Continental Congress:</strong> The 13 colonies created a common governing body, the Continental Congress in Philadelphia, fostering unprecedented colonial unity (Benjamin Franklin playing a pivotal role).</p>
                 <p><strong>Prohibitory Act (1775):</strong> In August 1775, King George declared colonies in open rebellion. The December 1775 Prohibitory Act banned all trade with colonies, stripping colonial ships of British protection and driving colonists toward full independence.</p>
                 <p><strong>Declaration of Independence (July 4, 1776):</strong> Following Virginia's June resolution, Thomas Jefferson drafted the Declaration of Independence, enshrining unalienable rights to life, liberty, and the pursuit of happiness.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Drafting Committee:</strong> Thomas Jefferson, John Adams, and Benjamin Franklin drafted the foundational text of modern constitutional republicanism.
                 </div>`,
            tr: `<p><strong>Kıtasal Kongre:</strong> 13 koloni Philadelphia'da Kıtasal Kongre'yi toplayarak ilk kez ortak bir yönetim kurdu (Benjamin Franklin kilit rol oynadı).</p>
                 <p><strong>Yasaklama Yasası (1775):</strong> Kral George kolonileri asi ilan etti. Aralık 1775 Yasaklama Yasası ticareti yasaklayıp gemileri korumasız bırakınca kolonistler tam bağımsızlığa yöneldi.</p>
                 <p><strong>Bağımsızlık Bildirgesi (4 Temmuz 1776):</strong> Thomas Jefferson tarafından kaleme alınan bildirge; yaşam, özgürlük ve mutluluğa erişim gibi vazgeçilemez doğal hakları ilan etti.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Hazırlık Komitesi:</strong> Thomas Jefferson, John Adams ve Benjamin Franklin modern cumhuriyetçiliğin kurucu metnini kaleme almışlardır.
                 </div>`
          },
          mapState: {
            zoom: "us",
            highlightRegions: ["north_america"],
            activeRoutes: ["revolutionary_ideas_flow"],
            markers: ["philadelphia", "williamsburg", "paris"]
          }
        },
        {
          title: {
            en: "Revolutionary War & The US Constitution",
            tr: "Bağımsızlık Savaşı ve ABD Anayasası"
          },
          text: {
            en: `<p><strong>War & French Alliance:</strong> George Washington commanded the Continental Army. France recognized US independence in 1778, providing crucial naval support, troops, and funds. Independence was acknowledged in the 1783 Treaty of Paris.</p>
                 <p><strong>Constitutional Convention (1787):</strong> Delegates gathered in Philadelphia to replace the weak Articles of Confederation, balancing state sovereignty against federal authority.</p>
                 <p><strong>Constitutional Compromises:</strong> Passed the Connecticut Compromise (House of Reps based on population; Senate with equal state voting), separation of powers (Legislative, Executive, Judiciary), and presidential electors, while shelving the slavery question to preserve union cohesion.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Slavery Compromise:</strong> Failing to address slavery in 1787 avoided immediate Southern secession but laid the structural seeds for the American Civil War.
                 </div>`,
            tr: `<p><strong>Savaş ve Fransız İttifakı:</strong> George Washington Ordu Komutanı oldu. Fransa 1778'de ABD'yi tanıyıp donanma ve asker desteği sağladı. Bağımsızlık 1783 Paris Antlaşması ile tescillendi.</p>
                 <p><strong>Anayasa Kurultayı (1787):</strong> Philadelphia'da toplanan temsilciler, eyalet özerkliği ile merkezi hükümet yetkilerini dengeleyen 1787 Anayasası'nı hazırladı.</p>
                 <p><strong>Uzlaşılar ve Güçler Ayrılığı:</strong> Connecticut Uzlaşısı (Nüfusa dayalı Temsilciler Meclisi; eşit oy hakkına sahip Senato), Güçler Ayrılığı ve Başkanlık sistemi kuruldu; kölelik meselesi birliği korumak adına erteledi.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Kölelik Tavizi:</strong> 1787'de köleliği ertelemek Güney'in ayrılmasını önlemiş ancak Amerikan İç Savaşı'nın tohumlarını atmıştır.
                 </div>`
          },
          mapState: {
            zoom: "us",
            highlightRegions: ["north_america", "europe"],
            activeRoutes: ["french_navy_route"],
            markers: ["yorktown", "philadelphia", "paris"]
          }
        }
      ],
      quiz: [
        {
          question: {
            en: "What political term describes Britain's hands-off administrative approach toward the 13 colonies prior to 1763?",
            tr: "1763 öncesinde İngiltere'nin 13 koloniye karşı uyguladığı gevşek ve müdahaleci olmayan yönetim politikasının adı nedir?"
          },
          options: [
            { text: { en: "Salutary Neglect", tr: "Faydalı İhmal (Salutary Neglect)" }, correct: true },
            { text: { en: "Imperial Dominance", tr: "Emperyal Tahakküm" }, correct: false },
            { text: { en: "Mercantile Control", tr: "Merkantilist Denetim" }, correct: false },
            { text: { en: "Indirect Rule", tr: "Dolaylı Yönetim" }, correct: false }
          ],
          explanation: {
            en: "Salutary Neglect allowed the colonies to develop independent legislatures and local tax autonomy.",
            tr: "Faydalı İhmal, kolonilerin kendi meclislerini kurmasını ve vergi özerkliği kazanmasını sağlamıştır."
          }
        },
        {
          question: {
            en: "Approximately what percentage of white adult males held the right to vote in the 13 colonies by 1750?",
            tr: "1750 yılına gelindiğinde, 13 kolonideki yetişkin beyaz erkeklerin yaklaşık yüzde kaçı oy kullanma hakkına sahipti?"
          },
          options: [
            { text: { en: "60% to 80%", tr: "%60 ila %80" }, correct: true },
            { text: { en: "10% to 20%", tr: "%10 ila %20" }, correct: false },
            { text: { en: "30% to 40%", tr: "%30 ila %40" }, correct: false },
            { text: { en: "5%", tr: "%5" }, correct: false }
          ],
          explanation: {
            en: "Wide land ownership in America expanded the franchise to 60-80% of males, compared to only 20% in Great Britain.",
            tr: "Toprak mülkiyetinin yaygınlığı sayesinde erkeklerin %60-80'i oy kullanabiliyordu; İngiltere'de bu oran %20'ydi."
          }
        },
        {
          question: {
            en: "Which colony was established specifically as a safe haven for English Catholics?",
            tr: "Aşağıdaki kolonilerden hangisi İngiliz Katolikleri için güvenli bir sığınak olarak kurulmuştur?"
          },
          options: [
            { text: { en: "Maryland", tr: "Maryland" }, correct: true },
            { text: { en: "Pennsylvania", tr: "Filadelfiya / Pensilvanya" }, correct: false },
            { text: { en: "Virginia", tr: "Virginia" }, correct: false },
            { text: { en: "Massachusetts", tr: "Massachusetts" }, correct: false }
          ],
          explanation: {
            en: "Maryland was chartered to Lord Baltimore as a proprietary colony serving as a Catholic sanctuary.",
            tr: "Maryland, Katolik yerleşimcilere sığınak olması amacıyla Lord Baltimore'a şahsi koloni olarak verilmişti."
          }
        },
        {
          question: {
            en: "Which global conflict doubled Great Britain's national debt, triggering the end of 'salutary neglect'?",
            tr: "Büyük Britanya'nın ulusal borcunu ikiye katlayan ve 'faydalı ihmal' dönemini bitiren küresel çatışma hangisidir?"
          },
          options: [
            { text: { en: "The Seven Years' War (French and Indian War)", tr: "Yedi Yıl Savaşları (Fransız ve Kızılderili Savaşı)" }, correct: true },
            { text: { en: "The War of the Spanish Succession", tr: "İspanyol Veraset Savaşı" }, correct: false },
            { text: { en: "The Thirty Years' War", tr: "Otuz Yıl Savaşları" }, correct: false },
            { text: { en: "The Napoleonic Wars", tr: "Napolyon Savaşları" }, correct: false }
          ],
          explanation: {
            en: "The cost of defending America during the Seven Years' War forced Parliament to raise revenues internally.",
            tr: "Yedi Yıl Savaşları'nın askeri masrafları, İngiliz Parlamentosu'nu kolonileri doğrudan vergilendirmeye itti."
          }
        },
        {
          question: {
            en: "What was the first direct tax levied by the Westminster Parliament on internal colonial transactions in 1765?",
            tr: "İngiliz Parlamentosu'nun 1765'te koloni içi işlemlerden almak üzere çıkardığı ilk doğrudan vergi hangisidir?"
          },
          options: [
            { text: { en: "The Stamp Act", tr: "Damga Vergisi Yasası (Stamp Act)" }, correct: true },
            { text: { en: "The Sugar Act", tr: "Şeker Yasası" }, correct: false },
            { text: { en: "The Townshend Acts", tr: "Townshend Yasaları" }, correct: false }
          ],
          explanation: {
            en: "The Stamp Act required royal stamps on legal documents, newspapers, and playing cards, sparking protests.",
            tr: "Damga Vergisi Yasası, tüm yasal belgeler ve gazetelerin damgalı olmasını şart koşarak protestoları başlattı."
          }
        },
        {
          question: {
            en: "What was the first direct tax levied by the Westminster Parliament on internal colonial transactions in 1765?",
            tr: "İngiliz Parlamentosu'nun 1765'te koloni içi işlemlerden almak üzere çıkardığı ilk doğrudan vergi hangisidir?"
          },
          options: [
            { text: { en: "The Stamp Act", tr: "Damga Vergisi Yasası (Stamp Act)" }, correct: true },
            { text: { en: "The Sugar Act", tr: "Şeker Yasası" }, correct: false },
            { text: { en: "The Townshend Acts", tr: "Townshend Yasaları" }, correct: false },
            { text: { en: "The Declaratory Act", tr: "Açıklama Yasası" }, correct: false }
          ],
          explanation: {
            en: "The Stamp Act required royal stamps on legal documents, contracts, and newspapers, sparking intense protests.",
            tr: "Damga Vergisi Yasası, resmi evrakların damgalı olmasını şart koşarak koloni genelinde büyük tepki çekti."
          }
        },
        {
          question: {
            en: "What constitutional concept did the British government use to defend taxing colonies without actual representation?",
            tr: "İngiltere, mecliste koloni temsilcisi olmadan vergi koymasını hangi anayasal kavramla savunmuştur?"
          },
          options: [
            { text: { en: "Virtual Representation", tr: "Sanal Temsil (Virtual Representation)" }, correct: true },
            { text: { en: "Direct Franchise", tr: "Doğrudan Temsil" }, correct: false },
            { text: { en: "Royal Prerogative", tr: "Kraliyet İmtiyazı" }, correct: false },
            { text: { en: "Mercantile Privilege", tr: "Merkantilist Hak" }, correct: false }
          ],
          explanation: {
            en: "Virtual Representation claimed that Members of Parliament represented all British subjects globally.",
            tr: "Sanal Temsil tezi, parlamentodaki her vekilin tüm imparatorluk tebaasını temsil ettiğini savunuyordu."
          }
        },
        {
          question: {
            en: "Which radical political group in Boston, led by Samuel Adams, organized riots against tax collectors?",
            tr: "Boston'da vergi tahsildarlarına karşı isyanlar örgütleyen ve Samuel Adams liderliğindeki radikal grup hangisidir?"
          },
          options: [
            { text: { en: "Sons of Liberty", tr: "Özgürlük Evlatları (Sons of Liberty)" }, correct: true },
            { text: { en: "The Regulators", tr: "Düzenleyiciler" }, correct: false },
            { text: { en: "The Federalists", tr: "Federalistler" }, correct: false },
            { text: { en: "The Jacobins", tr: "Jakobenler" }, correct: false }
          ],
          explanation: {
            en: "The Sons of Liberty led anti-tax demonstrations, boycotts, and eventually the Boston Tea Party.",
            tr: "Özgürlük Evlatları, vergi protestolarını, boykotları ve en sonunda Boston Çay Partisi'ni düzenleyen gruptur."
          }
        },
        {
          question: {
            en: "How many chests of British East India Company tea were dumped into Boston Harbor during the 1773 protest?",
            tr: "1773 yılındaki protesto sırasında Boston Limanı'na dökülen İngiliz Doğu Hindistan Şirketi çayı kaç sandıktır?"
          },
          options: [
            { text: { en: "342 chests", tr: "342 sandık" }, correct: true },
            { text: { en: "100 chests", tr: "100 sandık" }, correct: false },
            { text: { en: "500 chests", tr: "500 sandık" }, correct: false },
            { text: { en: "250 chests", tr: "250 sandık" }, correct: false }
          ],
          explanation: {
            en: "Protesters disguised as Mohawk Indians dumped exactly 342 chests of tea to protest the Tea Act monopoly.",
            tr: "Yerli kılığındaki protestocular, Çay Yasası tekelini sabote etmek için tam 342 sandık çayı denize dökmüştür."
          }
        },
        {
          question: {
            en: "What punitive laws did Parliament pass in 1774 in retaliation for the Boston Tea Party?",
            tr: "İngiliz Parlamentosu'nun Boston Çay Partisi'ne misilleme olarak 1774'te çıkardığı cezalandırıcı yasaların adı nedir?"
          },
          options: [
            { text: { en: "The Coercive Acts (Intolerable Acts)", tr: "Çekilmez Yasalar (Coercive/Intolerable Acts)" }, correct: true },
            { text: { en: "The Townshend Acts", tr: "Townshend Yasaları" }, correct: false },
            { text: { en: "The Declaratory Acts", tr: "Açıklama Yasaları" }, correct: false },
            { text: { en: "The Prohibitory Acts", tr: "Yasaklayıcı Yasalar" }, correct: false }
          ],
          explanation: {
            en: "The Coercive (Intolerable) Acts closed Boston Harbor, suspended the Massachusetts charter, and housed troops.",
            tr: "Çekilmez Yasalar, Boston Limanı'nı kapatmış, eyalet meclisini askıya almış ve şehre asker yerleştirmiştir."
          }
        },
        {
          question: {
            en: "In which month and year did the first armed clashes of the revolution occur at Lexington and Concord?",
            tr: "Devrimin ilk silahlı çatışmaları hangi ay ve yılda Lexington ve Concord'da gerçekleşmiştir?"
          },
          options: [
            { text: { en: "April 1775", tr: "Nisan 1775" }, correct: true },
            { text: { en: "July 1776", tr: "Temmuz 1776" }, correct: false },
            { text: { en: "August 1775", tr: "Ağustos 1775" }, correct: false },
            { text: { en: "December 1773", tr: "Aralık 1773" }, correct: false }
          ],
          explanation: {
            en: "Minutemen clashed with British regulars in April 1775, starting the armed phase of the revolution.",
            tr: "Milisler ile İngiliz askerleri Nisan 1775'te karşı karşıya gelmiş ve silahlı mücadeleyi başlatmıştır."
          }
        },
        {
          question: {
            en: "Which act passed by Parliament in December 1775 formally blockaded American trade and declared colonial ships open to capture?",
            tr: "Aralık 1775'te çıkarılan ve Amerikan ticaretini ablukaya alıp sömürge gemilerini düşman ilan eden yasa hangisidir?"
          },
          options: [
            { text: { en: "The Prohibitory Act", tr: "Yasaklayıcı Yasa (Prohibitory Act)" }, correct: true },
            { text: { en: "The Quartering Act", tr: "Konaklama Yasası" }, correct: false },
            { text: { en: "The Stamp Act", tr: "Damga Yasası" }, correct: false },
            { text: { en: "The Tea Act", tr: "Çay Yasası" }, correct: false }
          ],
          explanation: {
            en: "The Prohibitory Act was effectively a formal declaration of economic war by Great Britain.",
            tr: "Yasaklayıcı Yasa, Britanya'nın kendi kolonilerine karşı ilan ettiği resmi bir ekonomik savaştı."
          }
        },
        {
          question: {
            en: "Who drafted the primary text of the United States Declaration of Independence ratified on July 4, 1776?",
            tr: "4 Temmuz 1776'da kabul edilen Amerika Birleşik Devletleri Bağımsızlık Bildirgesi'nin ana taslağını kim yazmıştır?"
          },
          options: [
            { text: { en: "Thomas Jefferson", tr: "Thomas Jefferson" }, correct: true },
            { text: { en: "Benjamin Franklin", tr: "Benjamin Franklin" }, correct: false },
            { text: { en: "John Adams", tr: "John Adams" }, correct: false },
            { text: { en: "George Washington", tr: "George Washington" }, correct: false }
          ],
          explanation: {
            en: "Thomas Jefferson drafted the document, weaving Enlightenment philosophy with grievances against George III.",
            tr: "Thomas Jefferson, Aydınlanma felsefesini krala yönelik şikayetlerle birleştirerek bildirgeyi yazmıştır."
          }
        },
        {
          question: {
            en: "Which American victory in 1777 convinced France to sign a formal military alliance with the United States?",
            tr: "1777 yılındaki hangi Amerikan zaferi, Fransa'yı ABD ile resmi askeri ittifak kurmaya ikna etmiştir?"
          },
          options: [
            { text: { en: "Battle of Saratoga", tr: "Saratoga Zaferi (Saratoga)" }, correct: true },
            { text: { en: "Battle of Yorktown", tr: "Yorktown Savaşı" }, correct: false },
            { text: { en: "Battle of Bunker Hill", tr: "Bunker Hill Savaşı" }, correct: false },
            { text: { en: "Battle of Trenton", tr: "Trenton Savaşı" }, correct: false }
          ],
          explanation: {
            en: "Saratoga proved the Continental Army could win, prompting French entry into the war to weaken Britain.",
            tr: "Saratoga Zaferi, Kıta Ordusu'nun kazanabileceğini kanıtlayarak Fransa'nın savaşa girmesini sağlamıştır."
          }
        },
        {
          question: {
            en: "Which French naval commander blockaded the Chesapeake Bay, cutting off Cornwallis's escape at Yorktown in 1781?",
            tr: "1781'de Yorktown'da İngiliz general Cornwallis'in denizden kaçış yolunu kapatarak ablukaya alan Fransız Amiral kimdir?"
          },
          options: [
            { text: { en: "Admiral de Grasse", tr: "Amiral de Grasse" }, correct: true },
            { text: { en: "Marquis de Lafayette", tr: "Marquis de Lafayette" }, correct: false },
            { text: { en: "Comte de Rochambeau", tr: "Comte de Rochambeau" }, correct: false },
            { text: { en: "Admiral Suffren", tr: "Amiral Suffren" }, correct: false }
          ],
          explanation: {
            en: "Admiral de Grasse's fleet defeated British rescue ships, securing the joint victory at Yorktown.",
            tr: "Amiral de Grasse, İngiliz destek filosunu yenerek Yorktown'da kuşatılan ordunun teslim olmasını sağladı."
          }
        },
        {
          question: {
            en: "Which treaty signed in 1783 formally recognized the independence of the United States?",
            tr: "1783 yılında imzalanarak Amerika Birleşik Devletleri'nin bağımsızlığını resmen tanıyan antlaşma hangisidir?"
          },
          options: [
            { text: { en: "Treaty of Paris", tr: "Paris Antlaşması (Treaty of Paris)" }, correct: true },
            { text: { en: "Treaty of Versailles", tr: "Versailles Antlaşması" }, correct: false },
            { text: { en: "Treaty of Ghent", tr: "Ghent Antlaşması" }, correct: false },
            { text: { en: "Treaty of London", tr: "Londra Antlaşması" }, correct: false }
          ],
          explanation: {
            en: "The 1783 Treaty of Paris ended the war, ceding all territory east of the Mississippi to the US.",
            tr: "1783 Paris Antlaşması savaşı bitirmiş ve Mississippi'ye kadar olan toprakları ABD'ye bırakmıştır."
          }
        },
        {
          question: {
            en: "What was the first, highly decentralized constitution of the United States, replaced in 1787?",
            tr: "Amerika Birleşik Devletleri'nin 1787'de değiştirilen, merkezi yetkileri zayıf ilk anayasasının adı nedir?"
          },
          options: [
            { text: { en: "Articles of Confederation", tr: "Konfederasyon Maddeleri (Articles of Confederation)" }, correct: true },
            { text: { en: "The Federalist Papers", tr: "Federalist Yazılar" }, correct: false },
            { text: { en: "The Bill of Rights", tr: "Haklar Bildirgesi" }, correct: false },
            { text: { en: "The Magna Carta", tr: "Magna Carta" }, correct: false }
          ],
          explanation: {
            en: "The Articles of Confederation left the national government without the power to levy taxes or regulate commerce.",
            tr: "Konfederasyon Maddeleri federal hükümeti yetkisiz bırakarak vergi toplama gücünden mahrum etmişti."
          }
        },
        {
          question: {
            en: "Which compromise resolved the representation debate between small and large states at the 1787 Constitutional Convention?",
            tr: "1787 Federal Konvansiyonu'nda küçük ve büyük eyaletlerin temsil kavgasını çözen uzlaşma hangisidir?"
          },
          options: [
            { text: { en: "The Connecticut Compromise (Great Compromise)", tr: "Connecticut Uzlaşması (Büyük Uzlaşma)" }, correct: true },
            { text: { en: "The Three-Fifths Compromise", tr: "Beşte Üç Uzlaşması" }, correct: false },
            { text: { en: "The Missouri Compromise", tr: "Missouri Uzlaşması" }, correct: false },
            { text: { en: "The Virginia Plan", tr: "Virginia Planı" }, correct: false }
          ],
          explanation: {
            en: "The Connecticut Compromise created a proportional House of Representatives and an equal-senate representation.",
            tr: "Connecticut Uzlaşması, nüfusa dayalı bir Temsilciler Meclisi ile eşit temsil sağlayan Senato'yu kurdu."
          }
        },
        {
          question: {
            en: "What constitutional clause compromise was granted to Southern states to secure their ratification of the Constitution?",
            tr: "Anayasanın kabul edilmesi için güney eyaletlerine verilen kölelik temelli taviz (temsiliyet oranı) hangisidir?"
          },
          options: [
            { text: { en: "The Three-Fifths Clause", tr: "Beşte Üç Maddesi (Three-Fifths Clause)" }, correct: true },
            { text: { en: "The Fugitive Slave Act", tr: "Kaçak Köle Yasası" }, correct: false },
            { text: { en: "The Missouri Line", tr: "Missouri Çizgisi" }, correct: false },
            { text: { en: "The Abolition Clause", tr: "Kaldırma Maddesi" }, correct: false }
          ],
          explanation: {
            en: "The 3/5ths clause counted three-fifths of enslaved populations for tax and congressional seat allocation.",
            tr: "Beşte Üç maddesi, kölelerin 3/5'ini kongre koltuk dağılımında eyalet nüfusuna dahil etmiştir."
          }
        },
        {
          question: {
            en: "Which French philosopher's ideas on the separation of powers directly shaped the US Constitution?",
            tr: "Yasama, yürütme ve yargı güçler ayrılığı fikirleriyle ABD Anayasası'nı doğrudan şekillendiren Fransız düşünür kimdir?"
          },
          options: [
            { text: { en: "Montesquieu", tr: "Montesquieu" }, correct: true },
            { text: { en: "Voltaire", tr: "Voltaire" }, correct: false },
            { text: { en: "Rousseau", tr: "Rousseau" }, correct: false },
            { text: { en: "Diderot", tr: "Diderot" }, correct: false }
          ],
          explanation: {
            en: "Montesquieu's 'Spirit of the Laws' advocated dividing government power to protect individual liberty.",
            tr: "Montesquieu'nün 'Kanunların Ruhu' eseri, gücün tek elde toplanmasını önlemek için bölünmesini savunuyordu."
          }
        },
        {
          question: {
            en: "What was the main purpose of the Proclamation Line of 1763 issued by King George III?",
            tr: "Kral III. George'un 1763'te yayınladığı Sınır Hattı Genelgesi'nin (Proclamation Line) temel amacı neydi?"
          },
          options: [
            { text: { en: "To ban colonial settlement west of the Appalachian Mountains to prevent Indian wars.", tr: "Kızılderili savaşlarını önlemek için Apalaş Dağları'nın batısına yerleşimi yasaklamak." }, correct: true },
            { text: { en: "To establish sugar taxation borders.", tr: "Şeker vergilendirme sınırlarını belirlemek." }, correct: false },
            { text: { en: "To annex Canada.", tr: "Kanada'yı ilhak etmek." }, correct: false },
            { text: { en: "To deport French settlers.", tr: "Fransız yerleşimcileri sınır dışı etmek." }, correct: false }
          ],
          explanation: {
            en: "The boundary line aimed to prevent conflicts with native tribes, deeply angering land speculators like Washington.",
            tr: "Sınır hattı yerlilerle savaşı önlemeyi amaçlıyordu; bu durum Washington gibi spekülatörleri kızdırdı."
          }
        },
        {
          question: {
            en: "Which act of 1764 taxed foreign molasses entering the colonies, expanding admiralty court jurisdictions?",
            tr: "Kolonilere giren yabancı melası vergilendiren ve askeri mahkemelerin yetkisini artıran 1764 tarihli yasa hangisidir?"
          },
          options: [
            { text: { en: "The Sugar Act", tr: "Şeker Yasası (Sugar Act)" }, correct: true },
            { text: { en: "The Stamp Act", tr: "Damga Yasası" }, correct: false },
            { text: { en: "The Currency Act", tr: "Para Yasası" }, correct: false },
            { text: { en: "The Quartering Act", tr: "Asker Barındırma Yasası" }, correct: false }
          ],
          explanation: {
            en: "The Sugar Act aimed to enforce trade regulations strictly, bypassing traditional trial by jury for smugglers.",
            tr: "Şeker Yasası, kaçakçılık davalarını sömürge jürilerinden kaçırarak kraliyet mahkemelerine taşımıştır."
          }
        },
        {
          question: {
            en: "Who was the radical British journalist whose pamphlet 'Common Sense' (1776) popularized the call for independence?",
            tr: "1776'da yazdığı 'Sağduyu' (Common Sense) broşürüyle bağımsızlık fikrini geniş halk kitlelerine yayan radikal yazar kimdir?"
          },
          options: [
            { text: { en: "Thomas Paine", tr: "Thomas Paine" }, correct: true },
            { text: { en: "John Locke", tr: "John Locke" }, correct: false },
            { text: { en: "Samuel Adams", tr: "Samuel Adams" }, correct: false },
            { text: { en: "Patrick Henry", tr: "Patrick Henry" }, correct: false }
          ],
          explanation: {
            en: "Thomas Paine attacked the monarchy directly, arguing that a continent should not be ruled by an island.",
            tr: "Thomas Paine, monarşiyi sertçe eleştirerek bir kıtanın ada tarafından yönetilmesinin saçmalığını savundu."
          }
        },
        {
          question: {
            en: "Which battle is considered the final major military engagement of the American Revolutionary War?",
            tr: "Amerikan Bağımsızlık Savaşı'nın son büyük askeri çarpışması olarak kabul edilen kuşatma hangisidir?"
          },
          options: [
            { text: { en: "Siege of Yorktown", tr: "Yorktown Kuşatması" }, correct: true },
            { text: { en: "Battle of Saratoga", tr: "Saratoga Savaşı" }, correct: false },
            { text: { en: "Battle of Monmouth", tr: "Monmouth Savaşı" }, correct: false },
            { text: { en: "Battle of Brandywine", tr: "Brandywine Savaşı" }, correct: false }
          ],
          explanation: {
            en: "The surrender of Cornwallis at Yorktown in October 1781 effectively ended British military operations.",
            tr: "Ekim 1781'de Cornwallis'in Yorktown'da teslim olması, İngiltere'nin askeri operasyonlarını bitirmiştir."
          }
        },
        {
          question: {
            en: "What was the political function of the Committees of Correspondence established in 1772?",
            tr: "1772'de kurulan Haberleşme Komitelerinin (Committees of Correspondence) temel siyasi işlevi neydi?"
          },
          options: [
            { text: { en: "To share intelligence and coordinate joint resistance across the 13 colonies.", tr: "13 koloni arasında istihbarat paylaşmak ve ortak direnişi koordine etmek." }, correct: true },
            { text: { en: "To draft federal tax laws.", tr: "Federal vergi yasalarını taslak haline getirmek." }, correct: false },
            { text: { en: "To negotiate with the French king.", tr: "Fransız kralıyla müzakereler yürütmek." }, correct: false },
            { text: { en: "To print paper currency.", tr: "Kağıt para basımını yönetmek." }, correct: false }
          ],
          explanation: {
            en: "The committees created the shadow government network that bypassed royal administrative channels.",
            tr: "Komiteler, kraliyet kanallarını baypas eden gölge bir hükümet ve iletişim ağı kurmuştur."
          }
        },
        {
          question: {
            en: "What was the main weakness of the national government under the Articles of Confederation?",
            tr: "Konfederasyon Maddeleri döneminde federal hükümetin en büyük anayasal zayıflığı neydi?"
          },
          options: [
            { text: { en: "It lacked the power to levy taxes directly.", tr: "Doğrudan vergi toplama yetkisinin olmaması." }, correct: true },
            { text: { en: "It lacked a judicial branch completely.", tr: "Bir yargı organının olmaması." }, correct: false },
            { text: { en: "It had no military commander.", tr: "Askeri komutanının olmaması." }, correct: false },
            { text: { en: "It could not sign treaties.", tr: "Uluslararası antlaşma imzalayamaması." }, correct: false }
          ],
          explanation: {
            en: "Without tax power, the national government could not pay war debts or maintain standing military forces.",
            tr: "Vergi toplama yetkisi olmayan federal meclis, savaş borçlarını ödeyemiyor ve ordu besleyemiyordu."
          }
        },
        {
          question: {
            en: "Who is considered the 'Father of the US Constitution' for drafting the Virginia Plan?",
            tr: "Virginia Planı'nı hazırlayarak ABD Anayasası'nın mimarı (babası) kabul edilen devlet adamı kimdir?"
          },
          options: [
            { text: { en: "James Madison", tr: "James Madison" }, correct: true },
            { text: { en: "Thomas Jefferson", tr: "Thomas Jefferson" }, correct: false },
            { text: { en: "Alexander Hamilton", tr: "Alexander Hamilton" }, correct: false },
            { text: { en: "John Jay", tr: "John Jay" }, correct: false }
          ],
          explanation: {
            en: "James Madison's research and drafts formed the core of the Constitution's separation of powers.",
            tr: "James Madison'ın hazırladığı taslaklar ve anayasal çalışmalar, anayasanın temelini oluşturmuştur."
          }
        },
        {
          question: {
            en: "Which group opposed the ratification of the 1787 Constitution, fearing a centralized tyranny?",
            tr: "Merkeziyetçi bir tiranlıktan korkarak 1787 Anayasası'nın onaylanmasına karşı çıkan siyasi grup hangisidir?"
          },
          options: [
            { text: { en: "Anti-Federalists", tr: "Anti-Federalistler (Anti-Federalists)" }, correct: true },
            { text: { en: "Federalists", tr: "Federalistler" }, correct: false },
            { text: { en: "Whigs", tr: "Muhafazakarlar (Whigs)" }, correct: false },
            { text: { en: "Tories", tr: "Kraliyetçiler (Tories)" }, correct: false }
          ],
          explanation: {
            en: "Anti-Federalists demanded a Bill of Rights to protect individual and state liberties from federal power.",
            tr: "Anti-Federalistler, bireysel hakları korumak için Haklar Bildirgesi'nin (Bill of Rights) eklenmesini şart koştu."
          }
        },
        {
          question: {
            en: "What amendments form the US Bill of Rights ratified in 1791?",
            tr: "1791'de anayasaya eklenen ve ABD Haklar Bildirgesi'ni (Bill of Rights) oluşturan ilk kaç maddedir?"
          },
          options: [
            { text: { en: "The first 10 amendments", tr: "İlk 10 madde (amendment)" }, correct: true },
            { text: { en: "The first 5 amendments", tr: "İlk 5 madde" }, correct: false },
            { text: { en: "The Reconstruction amendments", tr: "Yeniden Yapılanma maddeleri" }, correct: false },
            { text: { en: "The first 12 amendments", tr: "İlk 12 madde" }, correct: false }
          ],
          explanation: {
            en: "The first ten amendments guarantee basic liberties: speech, religion, assembly, and trial by jury.",
            tr: "İlk on madde; ifade, din, basın özgürlüğü ve jürili yargılanma gibi temel hakları güvenceye almıştır."
          }
        },
        {
          question: {
            en: "Which state did NOT send delegates to the Constitutional Convention in 1787?",
            tr: "1787 yılında Philadelphia'daki Federal Konvansiyon'a delege göndermeyen tek eyalet hangisidir?"
          },
          options: [
            { text: { en: "Rhode Island", tr: "Rhode Island" }, correct: true },
            { text: { en: "Delaware", tr: "Delaware" }, correct: false },
            { text: { en: "Georgia", tr: "Gürcistan (Georgia)" }, correct: false },
            { text: { en: "New Hampshire", tr: "New Hampshire" }, correct: false }
          ],
          explanation: {
            en: "Rhode Island, suspicious of federal power and paper money regulation, boycotted the convention.",
            tr: "Rhode Island, federal güce ve kağıt para denetimlerine karşı olduğundan konvansiyonu boykot etti."
          }
        },
        {
          question: {
            en: "What was the primary function of the Declaratory Act passed by Parliament in 1766?",
            tr: "İngiliz Parlamentosu'nun 1766'da çıkardığı Açıklama Yasası'nın (Declaratory Act) temel işlevi neydi?"
          },
          options: [
            { text: { en: "To assert absolute parliamentary sovereignty over the colonies in all cases whatsoever.", tr: "Parlamentonun koloniler üzerinde her koşulda mutlak yasama yetkisine sahip olduğunu ilan etmek." }, correct: true },
            { text: { en: "To tax tea.", tr: "Çay vergisini onaylamak." }, correct: false },
            { text: { en: "To disband the Sons of Liberty.", tr: "Sons of Liberty grubunu yasa dışı ilan etmek." }, correct: false },
            { text: { en: "To close Boston Harbor.", tr: "Boston Limanı'nı kapatmak." }, correct: false }
          ],
          explanation: {
            en: "After repealing the Stamp Act, Parliament passed this act to maintain its constitutional supremacy.",
            tr: "Damga Yasası'nı geri çeken parlamento, prestijini korumak için bu egemenlik bildirgesini çıkarmıştır."
          }
        },
        {
          question: {
            en: "Which British Prime Minister introduced the Stamp Act of 1765?",
            tr: "1765 Damga Vergisi Yasası'nı çıkaran İngiltere Başbakanı kimdir?"
          },
          options: [
            { text: { en: "George Grenville", tr: "George Grenville" }, correct: true },
            { text: { en: "Lord North", tr: "Lord North" }, correct: false },
            { text: { en: "Charles Townshend", tr: "Charles Townshend" }, correct: false },
            { text: { en: "William Pitt", tr: "William Pitt" }, correct: false }
          ],
          explanation: {
            en: "Grenville introduced the tax to make the colonies pay for the British military garrison in America.",
            tr: "Grenville, kolonilerin Amerika'daki İngiliz garnizonunun masraflarını karşılaması için bu vergiyi getirdi."
          }
        },
        {
          question: {
            en: "Who was the first victim of the Boston Massacre (1770), a sailor of African and Native American descent?",
            tr: "1770 Boston Katliamı'nda hayatını kaybeden ilk kişi olan Afrika/yerli kökenli denizci kimdir?"
          },
          options: [
            { text: { en: "Crispus Attucks", tr: "Crispus Attucks" }, correct: true },
            { text: { en: "Salem Poor", tr: "Salem Poor" }, correct: false },
            { text: { en: "Peter Salem", tr: "Peter Salem" }, correct: false },
            { text: { en: "Prince Estabrook", tr: "Prince Estabrook" }, correct: false }
          ],
          explanation: {
            en: "Crispus Attucks, a runaway slave turned sailor, was the first killed by British soldiers firing on the crowd.",
            tr: "Crispus Attucks, kalabalığa ateş açan İngiliz askerlerince vurulan kaçak köle kökenli bir denizciydi."
          }
        },
        {
          question: {
            en: "What military asset did General George Washington lack most during the early years of the war?",
            tr: "General George Washington, savaşın ilk yıllarında en çok hangi askeri güç unsurundan yoksundu?"
          },
          options: [
            { text: { en: "A navy to counter British maritime control.", tr: "İngiliz deniz gücüne karşı koyacak bir donanma." }, correct: true },
            { text: { en: "Cavalry forces.", tr: "Süvari birlikleri." }, correct: false },
            { text: { en: "Rifle-bearing soldiers.", tr: "Yivli silah taşıyan askerler." }, correct: false },
            { text: { en: "Support from local assemblies.", tr: "Yerel meclislerin siyasi desteği." }, correct: false }
          ],
          explanation: {
            en: "The Continental Army had no naval forces, making it vulnerable to British amphibious operations until the French arrival.",
            tr: "Kıta Ordusu'nun donanması yoktu; bu durum Fransız donanması gelene kadar büyük bir dezavantaj yarattı."
          }
        },
        {
          question: {
            en: "Which battle fought in 1775 resulted in a pyrrhic British victory, proving the militia could fight regulars?",
            tr: "1775'te yapılan ve İngilizlerin ağır kayıplarla kazandığı (pirro zaferi), milislerin savaşabileceğini gösteren çatışma hangisidir?"
          },
          options: [
            { text: { en: "Battle of Bunker Hill", tr: "Bunker Hill Savaşı" }, correct: true },
            { text: { en: "Battle of Long Island", tr: "Long Island Savaşı" }, correct: false },
            { text: { en: "Battle of Princeton", tr: "Princeton Savaşı" }, correct: false },
            { text: { en: "Battle of Brandywine", tr: "Brandywine Savaşı" }, correct: false }
          ],
          explanation: {
            en: "Bunker Hill proved the raw American militia could inflict severe casualties on professional British infantry.",
            tr: "Bunker Hill, eğitimsiz Amerikan milislerinin dahi profesyonel ordulara ağır kayıplar verdirebileceğini gösterdi."
          }
        },
        {
          question: {
            en: "What percentage of the colonial population is estimated to have remained loyal to Britain (Loyalists/Tories)?",
            tr: "Savaş sırasında koloni nüfusunun yaklaşık yüzde kaçının İngiltere'ye sadık kaldığı (Loyalistler) tahmin edilmektedir?"
          },
          options: [
            { text: { en: "Around 20%", tr: "Yaklaşık %20" }, correct: true },
            { text: { en: "Over 50%", tr: "%50'den fazla" }, correct: false },
            { text: { en: "Around 5%", tr: "Yaklaşık %5" }, correct: false },
            { text: { en: "Around 40%", tr: "Yaklaşık %40" }, correct: false }
          ],
          explanation: {
            en: "Historians estimate 20% of colonists were loyalists, 40% patriots, and 40% remained neutral.",
            tr: "Tarihçiler nüfusun %20'sinin sadık tebaa, %40'ının vatansever olduğunu, kalan %40'ın ise tarafsız olduğunu öngörür."
          }
        },
        {
          question: {
            en: "Which treaty signed in 1778 established the official military alliance between France and the United States?",
            tr: "1778'de imzalanarak Fransa ile Amerika Birleşik Devletleri arasında resmi askeri ittifakı kuran antlaşma hangisidir?"
          },
          options: [
            { text: { en: "Treaty of Alliance", tr: "İttifak Antlaşması (Treaty of Alliance)" }, correct: true },
            { text: { en: "Treaty of Amity and Commerce", tr: "Dostluk ve Ticaret Antlaşması" }, correct: false },
            { text: { en: "Treaty of Paris", tr: "Paris Antlaşması" }, correct: false },
            { text: { en: "Treaty of Versailles", tr: "Versailles Antlaşması" }, correct: false }
          ],
          explanation: {
            en: "The Treaty of Alliance committed France to fight until American independence was fully secured.",
            tr: "İttifak Antlaşması, Amerika'nın bağımsızlığı kesinleşene kadar Fransa'yı savaşa devam etmeye bağlamıştır."
          }
        },
        {
          question: {
            en: "Who was the Prussian military officer who trained and disciplined the Continental Army at Valley Forge?",
            tr: "Valley Forge kış kampında Kıta Ordusu'nu eğiterek disiplinli ve düzenli bir güce dönüştüren Prusyalı subay kimdir?"
          },
          options: [
            { text: { en: "Baron von Steuben", tr: "Baron von Steuben" }, correct: true },
            { text: { en: "Marquis de Lafayette", tr: "Marquis de Lafayette" }, correct: false },
            { text: { en: "Comte de Rochambeau", tr: "Comte de Rochambeau" }, correct: false },
            { text: { en: "Johann de Kalb", tr: "Johann de Kalb" }, correct: false }
          ],
          explanation: {
            en: "Steuben introduced systematic drill manuals, sanitary camp layouts, and bayonet training.",
            tr: "Steuben, askeri talim el kitaplarını, kamp hijyen kurallarını ve süngü eğitimini orduya kazandırdı."
          }
        },
        {
          question: {
            en: "Which battle in South Carolina in 1781 was a tactical masterpiece, destroying Tarleton's British force?",
            tr: "1781'de Güney Carolina'da yapılan ve Amerikan taktik dehasıyla İngiliz Tarleton güçlerini yok eden savaş hangisidir?"
          },
          options: [
            { text: { en: "Battle of Cowpens", tr: "Cowpens Savaşı" }, correct: true },
            { text: { en: "Battle of Camden", tr: "Camden Savaşı" }, correct: false },
            { text: { en: "Battle of Guilford Court House", tr: "Guilford Court House Savaşı" }, correct: false },
            { text: { en: "Battle of King's Mountain", tr: "King's Mountain Savaşı" }, correct: false }
          ],
          explanation: {
            en: "General Daniel Morgan used a double envelopment at Cowpens, capturing or killing almost the entire British force.",
            tr: "General Daniel Morgan, Cowpens'ta çift kıskaç harekâtı uygulayarak İngiliz birliklerini imha etmiştir."
          }
        },
        {
          question: {
            en: "What was the main purpose of Shays' Rebellion in Massachusetts in 1786?",
            tr: "1786 yılında Massachusetts'te patlak veren Shays Ayaklanması'nın (Shays' Rebellion) temel amacı neydi?"
          },
          options: [
            { text: { en: "To stop courts from foreclosing on debt-ridden farmer properties.", tr: "Borçlu köylü topraklarının icra yoluyla satılmasını ve mahkemeleri engellemek." }, correct: true },
            { text: { en: "To restore British rule.", tr: "İngiliz egemenliğini geri getirmek." }, correct: false },
            { text: { en: "To abolish slavery.", tr: "Köleliği kaldırmak." }, correct: false },
            { text: { en: "To seize shipping ports.", tr: "Sevkiyat limanlarını ele geçirmek." }, correct: false }
          ],
          explanation: {
            en: "Daniel Shays led debt-ridden farmers to close courts, highlighting the weaknesses of the Articles of Confederation.",
            tr: "Borçlu köylülerin mahkemeleri basması, federal hükümetin zayıflığını göstererek anayasa konvansiyonunu tetikledi."
          }
        },
        {
          question: {
            en: "Who served as the president of the Constitutional Convention in 1787?",
            tr: "1787 Federal Anayasa Konvansiyonu'nun başkanlığını kim yürütmüştür?"
          },
          options: [
            { text: { en: "George Washington", tr: "George Washington" }, correct: true },
            { text: { en: "Benjamin Franklin", tr: "Benjamin Franklin" }, correct: false },
            { text: { en: "James Madison", tr: "James Madison" }, correct: false },
            { text: { en: "Alexander Hamilton", tr: "Alexander Hamilton" }, correct: false }
          ],
          explanation: {
            en: "Washington's presence and leadership gave the convention national legitimacy and prestige.",
            tr: "Washington'ın konvansiyon başkanlığı, yeni anayasa çalışmalarına ulusal düzeyde prestij kazandırdı."
          }
        },
        {
          question: {
            en: "What series of 85 essays were written to convince New York voters to ratify the Constitution?",
            tr: "New York seçmenlerini yeni anayasayı onaylamaya ikna etmek için yazılan 85 makalelik ünlü seri hangisidir?"
          },
          options: [
            { text: { en: "The Federalist Papers", tr: "Federalist Yazılar (The Federalist Papers)" }, correct: true },
            { text: { en: "Common Sense", tr: "Sağduyu" }, correct: false },
            { text: { en: "The Anti-Federalist Papers", tr: "Anti-Federalist Yazılar" }, correct: false },
            { text: { en: "The Bill of Rights", tr: "Haklar Bildirgesi" }, correct: false }
          ],
          explanation: {
            en: "Written by Hamilton, Madison, and Jay, the essays remain the supreme guide to interpreting the US Constitution.",
            tr: "Hamilton, Madison ve Jay tarafından yazılan makaleler, anayasanın yorumlanmasında bugün de temel kaynaktır."
          }
        },
        {
          question: {
            en: "What was the first state to ratify the United States Constitution in December 1787?",
            tr: "Aralık 1787'de ABD Anayasası'nı onaylayan ilk eyalet hangisidir?"
          },
          options: [
            { text: { en: "Delaware", tr: "Delaware" }, correct: true },
            { text: { en: "Pennsylvania", tr: "Pensilvanya" }, correct: false },
            { text: { en: "New Jersey", tr: "New Jersey" }, correct: false },
            { text: { en: "Virginia", tr: "Virginia" }, correct: false }
          ],
          explanation: {
            en: "Delaware ratified the Constitution unanimously on December 7, 1787, earning the nickname 'The First State'.",
            tr: "Delaware, 7 Aralık 1787'de oy birliğiyle anayasayı onaylayarak 'Birinci Eyalet' unvanını almıştır."
          }
        },
        {
          question: {
            en: "Which amendment protects citizens from unreasonable searches and seizures without a warrant?",
            tr: "Vatandaşları arama izni olmaksızın haksız arama ve el koymalardan koruyan anayasa maddesi hangisidir?"
          },
          options: [
            { text: { en: "The Fourth Amendment", tr: "Dördüncü Madde (Fourth Amendment)" }, correct: true },
            { text: { en: "The First Amendment", tr: "Birinci Madde" }, correct: false },
            { text: { en: "The Second Amendment", tr: "İkinci Madde" }, correct: false },
            { text: { en: "The Fifth Amendment", tr: "Beşinci Madde" }, correct: false }
          ],
          explanation: {
            en: "The Fourth Amendment requires probable cause and a judicial warrant for any search of property.",
            tr: "Dördüncü madde, mülk ve ev aramaları için makul şüphe ve hakim onaylı arama kararı şartı koşar."
          }
        },
        {
          question: {
            en: "What was the primary function of the US Electoral College system established in the Constitution?",
            tr: "Anayasayla kurulan Seçiciler Kurulu (Electoral College) sisteminin temel siyasi işlevi nedir?"
          },
          options: [
            { text: { en: "To serve as a buffer against direct democracy and prevent 'mob rule' presidential elections.", tr: "Doğrudan demokrasiye karşı tampon olmak ve 'çoğunluğun diktatörlüğüyle' başkan seçilmesini önlemek." }, correct: true },
            { text: { en: "To count votes faster.", tr: "Oyları daha hızlı saymak." }, correct: false },
            { text: { en: "To run congressional campaigns.", tr: "Kongre kampanyalarını yönetmek." }, correct: false },
            { text: { en: "To elect supreme court judges.", tr: "Yüksek mahkeme yargıçlarını seçmek." }, correct: false }
          ],
          explanation: {
            en: "The founders feared direct democracy, creating electors to choose the executive branch.",
            tr: "Kurucular doğrudan demokrasiden çekindikleri için yürütme liderini seçecek bağımsız seçiciler kurdular."
          }
        },
        {
          question: {
            en: "Which act of Parliament taxed imported glass, lead, paint, paper, and tea in 1767?",
            tr: "1767'de sömürgelere ithal edilen cam, kurşun, boya, kağıt ve çayı vergilendiren İngiliz yasası hangisidir?"
          },
          options: [
            { text: { en: "The Townshend Acts", tr: "Townshend Yasaları (Townshend Acts)" }, correct: true },
            { text: { en: "The Stamp Act", tr: "Damga Yasası" }, correct: false },
            { text: { en: "The Coercive Acts", tr: "Çekilmez Yasalar" }, correct: false },
            { text: { en: "The Sugar Act", tr: "Şeker Yasası" }, correct: false }
          ],
          explanation: {
            en: "The Townshend Acts aimed to raise revenue to pay the salaries of royal governors, bypassing local control.",
            tr: "Townshend Yasaları, sömürge valilerinin maaşlarını meclislerden bağımsız ödemek için çıkarılmıştı."
          }
        },
        {
          question: {
            en: "What was the main slogan of the American colonists protesting parliamentary tax acts?",
            tr: "İngiliz Parlamentosu'nun vergi yasalarını protesto eden kolonistlerin ana sloganı hangisiydi?"
          },
          options: [
            { text: { en: "No Taxation Without Representation", tr: "Temsil Yoksa Vergi de Yok (No Taxation Without Representation)" }, correct: true },
            { text: { en: "Give Me Liberty or Give Me Death", tr: "Bana ya Özgürlük Verin ya da Ölüm" }, correct: false },
            { text: { en: "Don't Tread on Me", tr: "Üzerime Basma" }, correct: false },
            { text: { en: "Liberty and Property", tr: "Hürriyet ve Mülkiyet" }, correct: false }
          ],
          explanation: {
            en: "The slogan highlighted the core constitutional argument that only local elected assemblies could levy taxes.",
            tr: "Slogan, sadece halkın seçtiği yerel meclislerin vergi koymaya yetkili olduğu anayasal tezini savunuyordu."
          }
        },
        {
          question: {
            en: "Which colony had its charter suspended and city occupied by British troops under the Intolerable Acts?",
            tr: "Çekilmez Yasalar (Intolerable Acts) kapsamında meclisi feshedilip şehri askeri işgale uğrayan koloni hangisidir?"
          },
          options: [
            { text: { en: "Massachusetts", tr: "Massachusetts" }, correct: true },
            { text: { en: "New York", tr: "New York" }, correct: false },
            { text: { en: "Virginia", tr: "Virginia" }, correct: false },
            { text: { en: "Pennsylvania", tr: "Pensilvanya" }, correct: false }
          ],
          explanation: {
            en: "Massachusetts, particularly Boston, was the main target of the punitive acts in 1774.",
            tr: "Massachusetts, özellikle de Boston limanı ve meclisi, 1774 cezalandırma yasalarının ana hedefiydi."
          }
        },
        {
          question: {
            en: "Who was the French aristocrat who volunteered to fight for the US, becoming a general and close friend of Washington?",
            tr: "Amerikan ordusunda savaşmak için gönüllü gelen, general olan ve Washington'ın yakın dostu olan Fransız aristokrat kimdir?"
          },
          options: [
            { text: { en: "Marquis de Lafayette", tr: "Marquis de Lafayette" }, correct: true },
            { text: { en: "Comte de Rochambeau", tr: "Comte de Rochambeau" }, correct: false },
            { text: { en: "Baron de Kalb", tr: "Baron de Kalb" }, correct: false },
            { text: { en: "Comte d'Estaing", tr: "Comte d'Estaing" }, correct: false }
          ],
          explanation: {
            en: "Lafayette fought in several battles and lobbied Versailles successfully for military reinforcements.",
            tr: "Lafayette, Kıta Ordusu'nda savaşmış ve Versailles sarayını ek birlik göndermeye ikna etmede rol oynamıştır."
          }
        },
        {
          question: {
            en: "What was the name of the meeting of colonial delegates in Philadelphia in 1774 to coordinate a joint boycott of British goods?",
            tr: "1774'te İngiliz mallarına karşı ortak boykot kararı almak üzere Philadelphia'da toplanan meclisin adı nedir?"
          },
          options: [
            { text: { en: "The First Continental Congress", tr: "I. Kıtasal Kongre (First Continental Congress)" }, correct: true },
            { text: { en: "The Stamp Act Congress", tr: "Damga Yasası Kongresi" }, correct: false },
            { text: { en: "The Annapolis Convention", tr: "Annapolis Konvansiyonu" }, correct: false },
            { text: { en: "The Constitutional Convention", tr: "Anayasa Konvansiyonu" }, correct: false }
          ],
          explanation: {
            en: "The First Continental Congress united twelve colonies, establishing local boycotts of British goods.",
            tr: "I. Kıtasal Kongre, 12 koloniyi bir araya getirerek İngiliz ticaretine karşı ortak boykot kararları aldı."
          }
        }
      ]
    },
    5: {
      id: 5,
      themeColor: "#7c3aed", // Violet
      title: {
        en: "The French Revolution",
        tr: "Fransız Devrimi"
      },
      video: {
        src: "https://drive.google.com/file/d/1btd1dlaQLlwdt52cIVsnf_w0eav2ojZq/view?usp=sharing",
        desc: {
          tr: "Fransız Devrimi: Monarşinin çöküşü, insan hakları bildirgesi ve devrimin küresel etkileri.",
          en: "The French Revolution: The collapse of the monarchy, the declaration of human rights, and the global impacts of the revolution."
        }
      },
      slides: [
        {
          title: {
            en: "Transatlantic Connections & Core Principles",
            tr: "Transatlantik Bağlantılar ve Temel İlkeler"
          },
          text: {
            en: `<p><strong>Transatlantic Link:</strong> The French and American revolutions were deeply connected; American independence acted as a direct catalyst for the French Revolution.</p>
                 <p><strong>Revolutionary Principles:</strong> Both revolutions redefined government around four core concepts: Natural unalienable rights, popular sovereignty (power derived from consent), social contract (constitutions binding state and citizens), and the legitimate right to revolt when rights are violated.</p>
                 <p><strong>Active vs. Passive Limitations:</strong> Both movements struggled with the limits of enfranchisement, creating tensions between active citizens (property owners) and passive non-citizens.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Temporal Coincidence:</strong> The American Constitution was proclaimed on September 17, 1787; less than two years later, the storming of the Bastille occurred on July 14, 1789.
                 </div>`,
            tr: `<p><strong>Transatlantik Bağlantı:</strong> Fransız ve Amerikan devrimleri birbirine derinden bağlıydı; Amerikan bağımsızlığı Fransız Devrimi'nin doğrudan tetikleyicilerinden biri olmuştur.</p>
                 <p><strong>Devrimci İlkeler:</strong> Her iki devrim de yönetimi dört temel kavramla yeniden tanımladı: Doğal ve vazgeçilemez haklar, halk egemenliği, toplumsal sözleşme ve yönetim hakları ihlal ettiğinde meşru direnme hakkı.</p>
                 <p><strong>Aktif ve Pasif Sınırlar:</strong> Her iki hareket de siyasi hakların sınırlarıyla mücadele etmiş, mülk sahibi aktif yurttaşlar ile oy hakkı olmayan pasif yurttaşlar arasında gerilim doğmuştur.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Zamanlama:</strong> Amerikan Anayasası 17 Eylül 1787'de ilan edilmiş; iki yıldan kısa bir süre sonra 14 Temmuz 1789'da Bastille Baskını gerçekleşmiştir.
                 </div>`
          },
          mapState: {
            zoom: "atlantic",
            highlightRegions: ["europe", "north_america"],
            activeRoutes: ["revolutionary_ideas_flow"],
            markers: ["paris", "philadelphia"]
          }
        },
        {
          title: {
            en: "The Republic of Letters & Modern Political Vocabulary",
            tr: "Cumhuriyet Mektupları ve Modern Siyaset Sözlüğü"
          },
          text: {
            en: `<p><strong>Transatlantic Intellectuals:</strong> French veterans of the American War (like Marquis de La Fayette) returned home as influential revolutionaries. American emissaries in Paris—Benjamin Franklin befriending Voltaire, Thomas Jefferson corresponding with Mirabeau—forged a vibrant <em>Republic of Letters</em>.</p>
                 <p><strong>Birth of Modern Politics:</strong> The French Revolution created the vocabulary, institutional concepts, and ideological frameworks of modern democratic politics (including democratic franchise extension and nation-state nationalism).</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Lafayette:</strong> At age 19, Lafayette fought for American liberty before returning to draft the Declaration of the Rights of Man in France.
                 </div>`,
            tr: `<p><strong>Transatlantik Entelektüel Ağ:</strong> Amerikan Savaşı'nda savaşan Fransızlar (Marki de La Fayette gibi) ülkelerine devrimci önderler olarak döndüler. Paris'teki Amerikan temsilcileri (Benjamin Franklin, Thomas Jefferson), Fransız filozoflarıyla yakın bir <em>Mektup Cumhuriyeti (Republic of Letters)</em> kurdular.</p>
                 <p><strong>Modern Siyasetin Doğuşu:</strong> Fransız Devrimi; modern demokratik siyasetin kavramlarını, kurumlarını ve ulus-devlet milliyetçiliği sözlüğünü şekillendirmiştir.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Lafayette:</strong> 19 yaşında Amerikan bağımsızlığı için savaşan Lafayette, Fransa'ya dönerek İnsan ve Yurttaş Hakları Bildirisi'nin taslağını hazırlamıştır.
                 </div>`
          },
          mapState: {
            zoom: "europe",
            highlightRegions: ["europe"],
            activeRoutes: [],
            markers: ["paris", "versailles"]
          }
        },
        {
          title: {
            en: "Ancien Régime & Absolute Monarchy",
            tr: "Ancien Régime ve Mutlak Monarşi"
          },
          text: {
            en: `<p><strong>Two Converging Forces:</strong> The French Revolution exploded when two forces collided: a broad European reaction against absolutism and France's acute financial crisis.</p>
                 <p><strong>Society of Privilege (Three Estates):</strong> Absolute France was legally divided into Three Estates: First Estate (Clergy), Second Estate (Nobility), and Third Estate (the remaining 98% of the population, including peasants and bourgeoisie, bearing the tax burden).</p>
                 <p><strong>Versailles & Absolutism:</strong> Kings concentrated all power by domesticating nobility at Versailles, transforming nobles into courtiers under royal supervision.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Tax Injustice:</strong> Nobility and clergy held vast land and wealth while remaining tax-exempt, forcing the Third Estate to finance the royal state.
                 </div>`,
            tr: `<p><strong>İki Birleşen Güç:</strong> Fransız Devrimi iki sürecin kesiştiği noktada patladı: Mutlakiyetçiliğe karşı Avrupa genelindeki tepki ve Fransa'nın akut mali krizi.</p>
                 <p><strong>Ayrıcalıklar Toplumu (Üç Katman):</strong> Fransız toplumu kanunen Üç Katmana ayrılmıştı: Ruhban (Birinci), Aristokrasi (İkinci) ve nüfusun %98'ini oluşturan, vergileri ödeyen Üçüncü Katman (Halk ve Burjuvazi).</p>
                 <p><strong>Versailles ve Mutlakiyet:</strong> Krallar tüm yetkiyi ellerinde toplayarak soyluları Versailles Sarayı'nda gözetim altında tutmuş ve evcilleştirmiştir.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Vergi Adaletsizliği:</strong> Soylular ve din adamları devasa topraklara sahipken vergeden muaf tutulmuş, tüm mali yük Üçüncü Katman'ın üzerine yıkılmıştır.
                 </div>`
          },
          mapState: {
            zoom: "france",
            highlightRegions: ["europe"],
            activeRoutes: [],
            markers: ["versailles", "paris"]
          }
        },
        {
          title: {
            en: "Rise & Frustration of the Bourgeoisie",
            tr: "Burjuvazinin Yükselişi ve Siyasi Engeller"
          },
          text: {
            en: `<p><strong>Economic Rise via Colonial Trade:</strong> The French merchant bourgeoisie gained immense economic wealth during the 18th century through maritime colonial trade (especially sugar and slave trade through Bordeaux, Nantes, and Marseille).</p>
                 <p><strong>Political Blockade:</strong> Despite their economic clout, the bourgeoisie were legally excluded from political power and senior government posts reserved exclusively for titled nobility.</p>
                 <p><strong>Tension with Privilege:</strong> Rising economic power paired with political frustration made the bourgeoisie receptive to radical Enlightenment political reform.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Colonial Wealth:</strong> Slave-produced sugar and coffee in Saint-Domingue created the fortunes of the French maritime bourgeoisie who led the Revolution.
                 </div>`,
            tr: `<p><strong>Deniz Ticaretiyle Yükseliş:</strong> Fransız tüccar burjuvazisi, 18. yüzyılda sömürge ticareti ve köle ticareti (Bordeaux, Nantes, Marsilya limanları) sayesinde devasa bir ekonomik güce ulaştı.</p>
                 <p><strong>Siyasi Engelleme:</strong> Burjuvazi ekonomik olarak güçlenmesine rağmen, devlet kademeleri ve siyasi yetkiler soyluların ayrıcalıklarına ayrıldığı için sistem dışı bırakıldı.</p>
                 <p><strong>Ayrıcalıklarla Çatışma:</strong> Artan zenginlik ile siyasi engellenmişlik birleşince, burjuvazi radikal Aydınlanma fikirlerinin ana taşıyıcısı oldu.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Sömürge Sermayesi:</strong> Saint-Domingue'deki köle üretimi şeker ve kahve, Fransız Devrimi'ni yapacak tüccar sınıfının servetini yaratmıştı.
                 </div>`
          },
          mapState: {
            zoom: "france",
            highlightRegions: ["europe"],
            activeRoutes: [],
            markers: ["bordeaux", "nantes", "marseille", "paris"]
          }
        },
        {
          title: {
            en: "The Enlightenment Ideals & Secular Ethics",
            tr: "Aydınlanma Düşüncesi ve Etkileri"
          },
          text: {
            en: `<p><strong>Reason vs. Tradition:</strong> 18th-century Enlightenment philosophers promoted reason, human equality before the law, and critique of arbitrary authority over routine tradition or religious dogma.</p>
                 <p><strong>Three Lasting Impacts:</strong></p>
                 <p><ul>
                   <li>Weakened the institutional hold of traditional religion and the Catholic Church in public life.</li>
                   <li>Established a secular code of ethics independent of religious doctrine.</li>
                   <li>Fostered a critical analytical spirit that made absolute monarchy and divine right thinkable as revocable human constructs.</li>
                 </ul></p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Philosophes:</strong> Voltaire, Rousseau, and Montesquieu challenged the ideological underpinnings of absolutist privilege.
                 </div>`,
            tr: `<p><strong>Gelenek Karşısında Akıl:</strong> 18. yüzyıl Aydınlanma filozofları; gelenek ve dini dogmalar yerine aklı, kanun önünde eşitliği ve eleştirel düşünceyi savundular.</p>
                 <p><strong>Üç Kalıcı Etki:</strong></p>
                 <p><ul>
                   <li>Katolik Kilisesi'nin kamusal alandaki kurumsal tahakkümünü zayıflattı.</li>
                   <li>Dinden bağımsız seküler bir ahlak felsefesi geliştirdi.</li>
                   <li>Mutlak monarşinin sorgulanmasını ve radikal eşitlikçi fikirlerin düşünülmesini sağladı.</li>
                 </ul></p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Düşünürler:</strong> Voltaire, Rousseau ve Montesquieu mutlakiyetçi ayrıcalıkların ideolojik temellerini sarsmışlardır.
                 </div>`
          },
          mapState: {
            zoom: "europe",
            highlightRegions: ["europe"],
            activeRoutes: [],
            markers: ["paris", "geneva"]
          }
        },
        {
          title: {
            en: "Public Sphere, Lowbrow Literature & Fiscal Bankruptcy",
            tr: "Kamusal Alan, Yeraltı Basını ve Mali İflas"
          },
          text: {
            en: `<p><strong>The Public Sphere:</strong> Enlightenment ideas spread through salons, academies, Masonic lodges, and coffeehouses (fueled by colonial coffee trade), creating an educated elite public sphere.</p>
                 <p><strong>Underground Pamphlets & Desacralization:</strong> Lowbrow writers and libelles mixed political critique with scandal and satire. By portraying clergy, nobles, and the Queen as corrupt mortals, popular pamphlets desacralized the monarchy and made a kingdom without a King thinkable.</p>
                 <p><strong>Fiscal Spark:</strong> Debts from funding the American Revolutionary War pushed France to near-bankrupt crisis. Needing new taxes, King Louis XVI was forced to convoke the Estates-General in Spring 1789.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Desacralization:</strong> Underground pamphlets destroyed the sacred image of royalty, dismantling reverence for the crown before the first barricades were built.
                 </div>`,
            tr: `<p><strong>Kamusal Alanın Doğuşu:</strong> Aydınlanma fikirleri salonlar, akademiler, kulüpler ve kahvehanelerde (sömürge kahvesi eşliğinde) tartışılarak eğitimli bir kamuoyu yarattı.</p>
                 <p><strong>Yeraltı Basını ve Desacralization:</strong> Yeraltı broşürleri ve hicivler, sarayı ve Kraliçe'yi yolsuz ve insani zaaflarıyla resmederek monarşinin kutsallığını (desacralization) yıktı ve kralsız bir toplumu düşünülebilir kıldı.</p>
                 <p><strong>Mali Kıvılcım:</strong> Amerikan Savaşı'nın borçları Fransa'yı iflasın eşiğine getirdi. Yeni vergiye ihtiyaç duyan XVI. Louis, 1789 İlkbaharı'nda Etats-Généraux'yu toplantıya çağırmak zorunda kaldı.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Kutsallığın Yıkılışı:</strong> Yeraltı edebiyatı, barikatlar kurulmadan önce halkın gözünde krallık makamının kutsallığını ve dokunulmazlığını yok etmiştir.
                 </div>`
          },
          mapState: {
            zoom: "france",
            highlightRegions: ["europe"],
            activeRoutes: [],
            markers: ["versailles", "paris"]
          }
        },
        {
          title: {
            en: "Estates-General & Birth of the National Assembly",
            tr: "Etats-Généraux ve Ulusal Meclis'in Doğuşu"
          },
          text: {
            en: `<p><strong>Voting Conflict:</strong> Opening on May 5, 1789, the Estates-General stalled because voting was held by Estate (giving Clergy and Nobility a 2-to-1 veto over the Third Estate majority).</p>
                 <p><strong>Proclaiming National Sovereignty:</strong> On June 17, 1789, the Third Estate broke away, declaring itself the <em>National Assembly</em> representing the sovereign nation. They took the Tennis Court Oath to draft a constitution.</p>
                 <p><strong>Redefining Nationality:</strong> Nationality shifted from subject allegiance to a King toward active political participation in the sovereign nation. Popular pressure forced the King to merge the Estates into the National Constituent Assembly.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Famous Oath:</strong> "We are here according to the will of the people and nothing except bayonets will drive us out."
                 </div>`,
            tr: `<p><strong>Oy Kullanma Çatışması:</strong> 5 Mayıs 1789'da toplanan meclis, oylamanın kişi başına değil katman başına yapılması nedeniyle kilitlendi (Soylular ve Ruhban 2'ye 1 üstünlük sağlıyordu).</p>
                 <p><strong>Ulusal Egemenlik İlanı:</strong> 17 Haziran 1789'da Üçüncü Katman kendisini egemen ulusu temsil eden <em>Ulusal Meclis</em> ilan etti ve Tenis Kortu Yemini ile anayasa yapana kadar dağılmama kararı aldı.</p>
                 <p><strong>Ulusun Yeniden Tanımı:</strong> Yurttaşlık, kralın kulu olmaktan çıkıp egemen ulusun siyasi parçası olmaya dönüştü. Kral diğer katmanları Meclis ile birleştirmeye mecbur kaldı.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Meşhur Alıntı:</strong> "Biz buradayız çünkü halkın iradesiyiz ve bizi buradan ancak süngülerin gücü söküp atabilir."
                 </div>`
          },
          mapState: {
            zoom: "france",
            highlightRegions: ["europe"],
            activeRoutes: [],
            markers: ["versailles", "paris"]
          }
        },
        {
          title: {
            en: "Storming of the Bastille & Declaration of Rights",
            tr: "Bastille Baskını ve İnsan Hakları Bildirisi"
          },
          text: {
            en: `<p><strong>Bastille & Feudal Abolition:</strong> On July 14, 1789, Paris crowds stormed the Bastille fortress. In August, peasant uprisings forced the Assembly to formally abolish feudalism and seigneurial privileges, dismantling privilege as France's organizing principle.</p>
                 <p><strong>Declaration of Rights (August 26, 1789):</strong> The Assembly proclaimed the <em>Declaration of the Rights of Man and of the Citizen</em>, asserting liberty, equality, and individualism.</p>
                 <p><strong>Property as Order:</strong> Article 17 declared property an inviolable right, ensuring wealth and talent—not noble birth—became the foundation of France's new social order.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Universal Claims:</strong> The Declaration articulated universal principles of human freedom influenced by Enlightenment philosophy and the American model.
                 </div>`,
            tr: `<p><strong>Bastille Baskını ve Feodalizmin Sonu:</strong> 14 Temmuz 1789'da Paris halkı Bastille Kalesi'ni bastı. Ağustos ayında köylü isyanları üzerine Meclis feodal hakları ve soyluluk ayrıcalıklarını resmen kaldırdı.</p>
                 <p><strong>İnsan ve Yurttaş Hakları Bildirisi (26 Ağustos 1789):</strong> Meclis, bireysel özgürlük ve eşitliği ilan eden evrensel bildiriyi kabul etti.</p>
                 <p><strong>Mülkiyet ve Düzen:</strong> Madde 17 mülkiyeti kutsal sayarak, doğum ve soyluluk ayrıcalığı yerine servet ve yeteneği yeni toplumsal düzenin temeli yaptı.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Evrensel İddia:</strong> Bildirge, Amerikan modelinden ve Aydınlanma felsefesinden esinlenerek insanlığın evrensel özgürlük ilkelerini duyurmuştur.
                 </div>`
          },
          mapState: {
            zoom: "france",
            highlightRegions: ["europe"],
            activeRoutes: [],
            markers: ["paris", "versailles"]
          }
        },
        {
          title: {
            en: "Constitutional Monarchy & Its Limits",
            tr: "Meşruti Monarşi ve Sınırları"
          },
          text: {
            en: `<p><strong>1791 Constitution & Political Spectrum:</strong> Created a Constitutional Monarchy (Louis XVI became "King of the French"). First elections for the Legislative Assembly (October 1791) gave birth to modern terms: <em>Right</em> (Monarchists) and <em>Left</em> (Republicans).</p>
                 <p><strong>Civil Constitution of the Clergy:</strong> Church property was nationalized, and priests were required to take a state oath, causing deep religious fractures.</p>
                 <p><strong>Class & Gender Exclusions:</strong> Voting rights were restricted to property-owning "active citizens", leaving workers and women politically disenfranchised. Unions were banned, and colonial slavery was maintained.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Origins of Left/Right:</strong> Seating arrangements in the 1791 Assembly created the political terms "Left" and "Right" used worldwide today.
                 </div>`,
            tr: `<p><strong>1791 Anayasası ve Siyasi Yelpaze:</strong> Meşruti Monarşi kuruldu ("Fransızların Kralı"). 1791 Meclis seçimleri modern siyasi kavramları doğurdu: Başkanın sağında oturan <em>Sağ</em> (Monarşistler) ve solunda oturan <em>Sol</em> (Cumhuriyetçiler).</p>
                 <p><strong>Din Adamları Yurttaş Anayasası:</strong> Kilise malları kamulaştırıldı ve rahiplere devlete sadakat yemini zorunluluğu getirilerek derin dini bölünme yaratıldı.</p>
                 <p><strong>Sınıf ve Cinsiyet Sınırları:</strong> Oy hakkı mülk sahibi "aktif yurttaşlara" verildi; kadınlar ve işçiler oy hakkından mahrum bırakıldı, işçi sendikaları yasaklandı, sömürgelerde kölelik sürdürüldü.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Sağ/Sol Doğuşu:</strong> 1791 Meclisindeki oturma düzeni, günümüzde tüm dünyada kullanılan "Sağ" ve "Sol" siyasi terimlerini doğurmuştur.
                 </div>`
          },
          mapState: {
            zoom: "france",
            highlightRegions: ["europe"],
            activeRoutes: [],
            markers: ["paris"]
          }
        },
        {
          title: {
            en: "Radicalization & Proclamation of the Republic",
            tr: "Radikalleşme ve Cumhuriyetin İlanı"
          },
          text: {
            en: `<p><strong>Flight to Varennes (1791):</strong> Louis XVI attempted to flee France to join foreign armies and restore absolutism, destroying popular faith in the monarchy.</p>
                 <p><strong>Foreign War & Valmy Victory:</strong> France declared war on Austria and Prussia. On September 20, 1792, French volunteer armies stopped invaders at Valmy, popularizing the <em>Marseillaise</em> national anthem.</p>
                 <p><strong>The Republic & King's Execution:</strong> On September 21, 1792, the National Convention declared France a Republic under universal male suffrage. Louis XVI was tried and guillotined on January 21, 1793.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Valmy Impact:</strong> The victory of citizen-volunteers at Valmy proved that revolutionary national fervor could defeat professional European armies.
                 </div>`,
            tr: `<p><strong>Varennes Kaçışı (1791):</strong> XVI. Louis yabancı ordularla birleşip mutlakiyetçiliği geri getirmek için kaçmaya çalıştı; bu durum krallığa olan son inancı da yıktı.</p>
                 <p><strong>Dış Savaş ve Valmy Zaferi:</strong> Fransa Avusturya ve Prusya'ya savaş açtı. 20 Eylül 1792'de gönüllü Fransız ordusu işgalcileri Valmy'de durdurdu; <em>Marseillaise</em> marşı yayıldı.</p>
                 <p><strong>Cumhuriyet ve Kralın İdamı:</strong> 21 Eylül 1792'de Ulusal Konvansiyon genel erkek oy hakkıyla Cumhuriyeti ilan etti. XVI. Louis yargılanarak 21 Ocak 1793'te giyotinle idam edildi.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Valmy Etkisi:</strong> Gönüllü yurttaş ordusunun Valmy'deki zaferi, devrimci ulusal coşkunun profesyonel Avrupa ordularını yenebileceğini kanıtlamıştır.
                 </div>`
          },
          mapState: {
            zoom: "france",
            highlightRegions: ["europe"],
            activeRoutes: ["foreign_invasion_routes"],
            markers: ["varennes", "valmy", "paris"]
          }
        }
      ],
      quiz: [
        {
          question: {
            en: "Which French officer who fought in the American Revolution returned to draft the Declaration of the Rights of Man?",
            tr: "Amerikan Devrimi'nde savaşıp ülkesine dönen ve İnsan ve Yurttaş Hakları Bildirisi taslağını hazırlayan Fransız subay kimdir?"
          },
          options: [
            { text: { en: "Marquis de Lafayette", tr: "Marquis de Lafayette" }, correct: true },
            { text: { en: "Count Rochambeau", tr: "Kont Rochambeau" }, correct: false },
            { text: { en: "Maximilien Robespierre", tr: "Maximilien Robespierre" }, correct: false },
            { text: { en: "Emmanuel-Joseph Sieyès", tr: "Emmanuel-Joseph Sieyes" }, correct: false }
          ],
          explanation: {
            en: "Lafayette drafted the declaration in cooperation with Thomas Jefferson, who was in Paris at the time.",
            tr: "Lafayette, İnsan Hakları Bildirisi'ni o dönem Paris'te bulunan Thomas Jefferson ile iş birliği içinde yazmıştır."
          }
        },
        {
          question: {
            en: "What rigid legal order represented the Catholic Clergy in pre-revolutionary France (Ancien Régime)?",
            tr: "Devrim öncesi Fransa'da (Eski Rejim) Katolik ruhban sınıfını temsil eden zümrenin adı nedir?"
          },
          options: [
            { text: { en: "The First Estate", tr: "Birinci Tabaka (First Estate)" }, correct: true },
            { text: { en: "The Second Estate", tr: "İkinci Tabaka" }, correct: false },
            { text: { en: "The Third Estate", tr: "Üçüncü Tabaka" }, correct: false },
            { text: { en: "The Nobles of the Robe", tr: "Cübbe Soyluları" }, correct: false }
          ],
          explanation: {
            en: "The First Estate comprised the clergy, owning 10% of the land and exempt from all direct taxes.",
            tr: "Birinci Tabaka, Fransa topraklarının %10'una sahip olan ve hiçbir vergi ödemeyen ruhban zümresiydi."
          }
        },
        {
          question: {
            en: "What French term described the direct land tax from which the clergy and nobility were exempt?",
            tr: "Eski Rejim'de ruhban ve soyluların muaf olduğu, tüm yükü köylülere binen doğrudan toprak vergisinin adı nedir?"
          },
          options: [
            { text: { en: "Taille", tr: "Taille (Toprak Vergisi)" }, correct: true },
            { text: { en: "Gabelle", tr: "Gabelle (Tuz Vergisi)" }, correct: false },
            { text: { en: "Corvée", tr: "Corvee (Zorunlu İş Emek Vergisi)" }, correct: false },
            { text: { en: "Dîme", tr: "Dime (Öşür Kilise Vergisi)" }, correct: false }
          ],
          explanation: {
            en: "The taille was the primary direct tax, falling heavily on the shoulders of the Third Estate peasantry.",
            tr: "Taille, aristokrasinin muaf olduğu ve tüm yükü Üçüncü Tabaka köylülerine binen doğrudan toprak vergisidir."
          }
        },
        {
          question: {
            en: "What critical public sphere spaces became key arenas for debating Enlightenment ideas and global news?",
            tr: "Aydınlanma fikirlerinin ve sömürge haberlerinin tartışıldığı, yeni kamusal alanların yükselişini sağlayan mekanlar hangileridir?"
          },
          options: [
            { text: { en: "Cafés and Salons", tr: "Kahvehaneler ve Salonlar (Cafes & Salons)" }, correct: true },
            { text: { en: "Royal Courts", tr: "Kraliyet Sarayları" }, correct: false },
            { text: { en: "Monasteries", tr: "Manastırlar" }, correct: false },
            { text: { en: "Guilde halls", tr: "Lonca Binaları" }, correct: false }
          ],
          explanation: {
            en: "Cafés (fueled by colonial sugar/coffee) and salons created the secular public sphere for critique of power.",
            tr: "Sömürgelerden gelen kahveyle beslenen kahvehaneler ve burjuva salonları, iktidarın eleştirildiği seküler kamusal alanlardı."
          }
        },
        {
          question: {
            en: "Where did the Third Estate delegates swear an oath in June 1789 to not disband until they drafted a constitution?",
            tr: "Haziran 1789'da Üçüncü Tabaka temsilcileri Fransa'ya anayasa kazandırana kadar dağılmama yeminini nerede etmiştir?"
          },
          options: [
            { text: { en: "An indoor Tennis Court (Jeu de Paume)", tr: "Kapalı Tenis Kortu (Jeu de Paume)" }, correct: true },
            { text: { en: "The Palace of Versailles", tr: "Versailles Sarayı" }, correct: false },
            { text: { en: "The Bastille Fortress", tr: "Bastille Kalesi" }, correct: false },
            { text: { en: "Notre-Dame Cathedral", tr: "Notre-Dame Katedrali" }, correct: false }
          ],
          explanation: {
            en: "Locked out of the assembly hall, they met at a nearby indoor tennis court, swearing the famous Tennis Court Oath.",
            tr: "Toplantı salonundan çıkarılan delegeler yakındaki tenis kortuna sığınarak anayasa yemini (Tenis Kortu Yemini) ettiler."
          }
        },
        {
          question: {
            en: "In what month, day, and year did the Parisian crowds storm the Bastille fortress?",
            tr: "Paris halkı hangi gün, ay ve yılda kraliyet otoritesinin sembolü olan Bastille Kalesi'ni basmıştır?"
          },
          options: [
            { text: { en: "July 14, 1789", tr: "14 Temmuz 1789" }, correct: true },
            { text: { en: "August 4, 1789", tr: "4 Ağustos 1789" }, correct: false },
            { text: { en: "June 20, 1789", tr: "20 Haziran 1789" }, correct: false },
            { text: { en: "January 21, 1793", tr: "21 Ocak 1793" }, correct: false }
          ],
          explanation: {
            en: "On July 14, 1789, crowds stormed the fortress to seize gunpowder, initiating the popular phase of the revolution.",
            tr: "14 Temmuz 1789'da barut ele geçirmek isteyen Paris halkı Bastille'i basarak devrime halk tabanını dahil etti."
          }
        },
        {
          question: {
            en: "What rural wave of panic in July-August 1789 prompted peasants to burn manor houses and feudal debt registries?",
            tr: "Temmuz-Ağustos 1789'da kırsalda patlak veren ve köylülerin şatolara saldırmasına yol açan genel panik dalgasına ne ad verilir?"
          },
          options: [
            { text: { en: "The Great Fear (La Grande Peur)", tr: "Büyük Korku (La Grande Peur)" }, correct: true },
            { text: { en: "The Reign of Terror", tr: "Terör Dönemi" }, correct: false },
            { text: { en: "The Vendée Uprising", tr: "Vendee İsyanı" }, correct: false },
            { text: { en: "The Jacquerie", tr: "Jacquerie Ayaklanması" }, correct: false }
          ],
          explanation: {
            en: "The Great Fear swept the countryside, forcing the National Assembly to abolish feudal privileges on August 4.",
            tr: "Büyük Korku kırsalı sarmış, bu şiddet dalgası meclisi 4 Ağustos'ta feodalizmi tamamen kaldırmaya zorlamıştır."
          }
        },
        {
          question: {
            en: "Which article of the 1789 Declaration of the Rights of Man defined property as a 'sacred and inviolable' right?",
            tr: "1789 İnsan ve Yurttaş Hakları Bildirisi'nin hangi maddesi mülkiyet hakkını 'kutsal ve dokunulmaz' bir hak olarak tanımlar?"
          },
          options: [
            { text: { en: "Article 17", tr: "17. Madde (Article 17)" }, correct: true },
            { text: { en: "Article 1", tr: "1. Madde" }, correct: false },
            { text: { en: "Article 6", tr: "6. Madde" }, correct: false },
            { text: { en: "Article 10", tr: "10. Madde" }, correct: false }
          ],
          explanation: {
            en: "Article 17 protected property rights, guaranteeing that wealth inequalities would remain legal in the new order.",
            tr: "17. madde, mülkiyet haklarını koruyarak yeni düzende zenginlik eşitsizliklerinin korunmasını meşrulaştırmıştır."
          }
        },
        {
          question: {
            en: "Who drafted the 'Declaration of the Rights of Woman and of the Female Citizen' in 1791 demanding political equality?",
            tr: "1791 yılında kadınların siyasi haklardan dışlanmasına karşı 'Kadın ve Kadın Yurttaş Hakları Bildirisi'ni yazan yazar kimdir?"
          },
          options: [
            { text: { en: "Olympe de Gouges", tr: "Olympe de Gouges" }, correct: true },
            { text: { en: "Mary Wollstonecraft", tr: "Mary Wollstonecraft" }, correct: false },
            { text: { en: "Madame Roland", tr: "Madame Roland" }, correct: false },
            { text: { en: "Charlotte Corday", tr: "Charlotte Corday" }, correct: false }
          ],
          explanation: {
            en: "Olympe de Gouges exposed the gender bias of the assembly, demanding voting rights and equality. She was later guillotined.",
            tr: "Olympe de Gouges, meclisin cinsiyetçi yapısını eleştirerek kadınlar için eşitlik talep etmiş, daha sonra giyotinle idam edilmiştir."
          }
        },
        {
          question: {
            en: "In which revolutionary assembly of October 1791 did the seating arrangements birth the terms 'Left' and 'Right'?",
            tr: "Ekim 1791'de toplanan hangi meclisteki oturma düzeni dünya siyaset tarihine 'Sol' ve 'Sağ' kavramlarını kazandırmıştır?"
          },
          options: [
            { text: { en: "The Legislative Assembly", tr: "Yasama Meclisi (Legislative Assembly)" }, correct: true },
            { text: { en: "The National Assembly", tr: "Ulusal Meclis" }, correct: false },
            { text: { en: "The Estates General", tr: "Estates General" }, correct: false },
            { text: { en: "The National Convention", tr: "Ulusal Konvansiyon" }, correct: false }
          ],
          explanation: {
            en: "Monarchists sat on the president's right, while radical Jacobin republicans sat on the left in the Legislative Assembly.",
            tr: "Kraliyetçiler meclis başkanının sağ tarafına, radikal cumhuriyetçiler (Jakobenler) ise sol tarafına yerleşmişti."
          }
        },
        {
          question: {
            en: "In June 1791, Louis XVI attempted to flee Paris to rally counter-revolutionary forces, but was arrested in which town?",
            tr: "Haziran 1791'de anayasal kısıtlamaları reddederek kaçmaya çalışan XVI. Louis, hangi kasabada tanınarak yakalanmıştır?"
          },
          options: [
            { text: { en: "Varennes", tr: "Varennes" }, correct: true },
            { text: { en: "Valmy", tr: "Valmy" }, correct: false },
            { text: { en: "Versailles", tr: "Versailles" }, correct: false },
            { text: { en: "Verdun", tr: "Verdun" }, correct: false }
          ],
          explanation: {
            en: "The Flight to Varennes shattered the illusion of a loyal king, accelerating calls for a republic.",
            tr: "Varennes Kaçışı, kralın devrime sadık olduğu illüzyonunu yıkarak cumhuriyet taleplerini hızlandırdı."
          }
        },
        {
          question: {
            en: "Which battle in September 1792 marked the first victory of the French volunteer army and saved the revolution?",
            tr: "Eylül 1792'de gerçekleşen, Fransız gönüllü ordusunun ilk zaferi olan ve devrimi kurtaran askeri çarpışma hangisidir?"
          },
          options: [
            { text: { en: "Battle of Valmy", tr: "Valmy Savaşı (Valmy)" }, correct: true },
            { text: { en: "Battle of Waterloo", tr: "Waterloo Savaşı" }, correct: false },
            { text: { en: "Battle of Jemappes", tr: "Jemappes Savaşı" }, correct: false },
            { text: { en: "Battle of Marengo", tr: "Marengo Savaşı" }, correct: false }
          ],
          explanation: {
            en: "At Valmy, French forces stopped the invading Austro-Prussian army, leading to the Republic's declaration the next day.",
            tr: "Valmy'de istilacı Prusya ordusunun durdurulması, ertesi gün Fransa Cumhuriyeti'nin ilan edilmesini sağlamıştır."
          }
        },
        {
          question: {
            en: "In what month and year was King Louis XVI executed by the guillotine for high treason?",
            tr: "Kral XVI. Louis vatana ihanet suçundan hangi ay ve yılda giyotinle idam edilmiştir?"
          },
          options: [
            { text: { en: "January 1793", tr: "Ocak 1793" }, correct: true },
            { text: { en: "September 1792", tr: "Eylül 1792" }, correct: false },
            { text: { en: "July 1794", tr: "Temmuz 1794" }, correct: false },
            { text: { en: "October 1793", tr: "Ekim 1793" }, correct: false }
          ],
          explanation: {
            en: "Louis XVI was guillotined on January 21, 1793, following his trial by the National Convention.",
            tr: "XVI. Louis, Ulusal Konvansiyon tarafından yargılandıktan sonra 21 Ocak 1793'te giyotinle idam edildi."
          }
        },
        {
          question: {
            en: "What French term described the 'active citizens' who held voting rights under the 1791 Constitution?",
            tr: "1791 Anayasası'na göre oy kullanma hakkına sahip olan mülk sahibi 'aktif vatandaşlar' için hangi terim kullanılmıştır?"
          },
          options: [
            { text: { en: "Citoyens actifs", tr: "Citoyens actifs (Aktif Vatandaşlar)" }, correct: true },
            { text: { en: "Citoyens passifs", tr: "Citoyens passifs" }, correct: false },
            { text: { en: "Sans-culottes", tr: "Sans-culottes" }, correct: false },
            { text: { en: "Bourgeoisie", tr: "Burjuvazi" }, correct: false }
          ],
          explanation: {
            en: "Active citizens were men over 25 who paid direct taxes equal to three days' labor, excluding poor men and women.",
            tr: "Aktif vatandaşlar, belirli bir vergi ödeyen 25 yaş üstü erkeklerdi; yoksullar ve kadınlar pasif vatandaş sayılmıştı."
          }
        },
        {
          question: {
            en: "Which act of the National Assembly nationalized all lands of the Catholic Church in France in 1789?",
            tr: "Ulusal Meclis'in 1789'da kabul ettiği ve Fransa'daki tüm Katolik Kilisesi topraklarını kamulaştıran karar hangisidir?"
          },
          options: [
            { text: { en: "The Civil Constitution of the Clergy", tr: "Rahiplerin Medeni Anayasası (Civil Constitution of the Clergy)" }, correct: true },
            { text: { en: "The Concordat", tr: "Konkordat" }, correct: false },
            { text: { en: "The Decree on Feudalism", tr: "Feodalizm Kararnamesi" }, correct: false },
            { text: { en: "The Declaration of Rights", tr: "Haklar Bildirgesi" }, correct: false }
          ],
          explanation: {
            en: "The Civil Constitution of the Clergy nationalized church assets and made priests paid employees of the state.",
            tr: "Medeni Anayasa ile kilise malları kamulaştırılmış, rahipler devlete bağlılık yemini etmek zorunda bırakılmıştır."
          }
        },
        {
          question: {
            en: "Who wrote the highly influential pamphlet 'What is the Third Estate?' in January 1789?",
            tr: "Ocak 1789'da 'Üçüncü Tabaka Nedir?' (What is the Third Estate?) başlıklı etkili broşürü yazan din adamı kimdir?"
          },
          options: [
            { text: { en: "Abbé Emmanuel-Joseph Sieyès", tr: "Abbe Emmanuel-Joseph Sieyes" }, correct: true },
            { text: { en: "Abbé Raynal", tr: "Abbe Raynal" }, correct: false },
            { text: { en: "Maximilien Robespierre", tr: "Maximilien Robespierre" }, correct: false },
            { text: { en: "Jean-Paul Marat", tr: "Jean-Paul Marat" }, correct: false }
          ],
          explanation: {
            en: "Sieyès argued that the Third Estate was everything, had been nothing politically, and demanded to become something.",
            tr: "Sieyès, Üçüncü Tabaka'nın her şey olduğunu, şimdiye kadar hiçbir şey sayılmadığını ve bir şey olmak istediğini yazdı."
          }
        },
        {
          question: {
            en: "What salt tax under the Ancien Régime was hated as a symbol of royal monopoly and fiscal oppression?",
            tr: "Eski Rejim'de kraliyet tekelinin ve mali baskının en çok nefret edilen sembolü olan tuz vergisinin adı nedir?"
          },
          options: [
            { text: { en: "Gabelle", tr: "Gabelle (Tuz Vergisi)" }, correct: true },
            { text: { en: "Corvée", tr: "Corvee" }, correct: false },
            { text: { en: "Taille", tr: "Taille" }, correct: false },
            { text: { en: "Aides", tr: "Aides" }, correct: false }
          ],
          explanation: {
            en: "The gabelle forced subjects to purchase a minimum amount of salt at inflated royal prices, heavily penalizing peasants.",
            tr: "Gabelle, sömürü düzeninin bir tuz tekeli vergisidir ve yoksul köylüleri her yıl tuz almaya zorlardı."
          }
        },
        {
          question: {
            en: "Which radical faction of the Jacobin Club, led by Robespierre, dominated the National Convention during the Terror?",
            tr: "Jakoben Kulübü'nün Robespierre önderliğindeki ve Terör Dönemi'nde meclisi domine eden radikal kanadı hangisidir?"
          },
          options: [
            { text: { en: "The Mountain (Montagnards)", tr: "Dağ Kanadı (Montagnards)" }, correct: true },
            { text: { en: "The Girondins", tr: "Jirondenler" }, correct: false },
            { text: { en: "The Feuillants", tr: "Feuillants" }, correct: false },
            { text: { en: "The Thermidorians", tr: "Termidorcular" }, correct: false }
          ],
          explanation: {
            en: "The Montagnards sat on the highest benches on the left of the convention, allied with the sans-culottes.",
            tr: "Dağ Kanadı, meclisin solunda en üst sıralarda oturuyordu ve kent yoksullarıyla (sans-culottes) ittifak kurmuştu."
          }
        },
        {
          question: {
            en: "What was the name of the new calendar introduced by the Republic in 1793 to replace the Gregorian calendar?",
            tr: "Fransız Cumhuriyeti'nin 1793'te Hristiyanlık izlerini silmek için Gregoryen takvimi yerine çıkardığı yeni takvim nedir?"
          },
          options: [
            { text: { en: "The French Republican Calendar", tr: "Fransız Cumhuriyetçi Takvimi" }, correct: true },
            { text: { en: "The Secular Calendar", tr: "Seküler Takvim" }, correct: false },
            { text: { en: "The Jacobin Calendar", tr: "Jakoben Takvimi" }, correct: false },
            { text: { en: "The Thermidorian Calendar", tr: "Termidor Takvimi" }, correct: false }
          ],
          explanation: {
            en: "The Republican calendar renamed months based on nature (e.g. Brumaire, Thermidor) and instituted 10-day weeks.",
            tr: "Cumhuriyet Takvimi ayları doğa olaylarına göre adlandırmış ve haftaları 10 günlük periyotlara bölmüştür."
          }
        },
        {
          question: {
            en: "Which counter-revolutionary civil war in western France (1793-1796) resulted in brutal massacres by republican forces?",
            tr: "Batı Fransa'da 1793-1796 yıllarında cumhuriyete karşı rahiplerin ve kraliyetçilerin başlattığı iç savaş bölgesi hangisidir?"
          },
          options: [
            { text: { en: "The Vendée Uprising", tr: "Vendee İsyanı (Vendée)" }, correct: true },
            { text: { en: "The Lyon Revolt", tr: "Lyon Ayaklanması" }, correct: false },
            { text: { en: "The Federalist Revolt", tr: "Federalist Ayaklanma" }, correct: false },
            { text: { en: "The Chouannerie", tr: "Chouannerie Ayaklanması" }, correct: false }
          ],
          explanation: {
            en: "The Vendée war was triggered by conscription and the Civil Constitution of the Clergy, leading to massive bloodbath.",
            tr: "Vendee İsyanı, zorunlu askerliğe ve din karşıtı politikalara tepki olarak doğmuş ve kanlı bir şekilde bastırılmıştır."
          }
        },
        {
          question: {
            en: "In what year did the National Assembly officially nationalize all property of the Catholic Church in France?",
            tr: "Fransa'da Ulusal Meclis Katolik Kilisesi'nin tüm mülklerini hangi yılda resmen kamulaştırmıştır?"
          },
          options: [
            { text: { en: "1789 (November)", tr: "1789 (Kasım)" }, correct: true },
            { text: { en: "1791", tr: "1791" }, correct: false },
            { text: { en: "1793", tr: "1793" }, correct: false },
            { text: { en: "1790", tr: "1790" }, correct: false }
          ],
          explanation: {
            en: "In November 1789, Talleyrand proposed nationalizing church property to pay off the massive royal debt.",
            tr: "Kasım 1789'da meclis, devlet borçlarını kapatmak için kilise topraklarını kamulaştırma kararı aldı."
          }
        },
        {
          question: {
            en: "What French term described the working-class radical militants of Paris who wore long trousers instead of knee-breeches?",
            tr: "Paris'in diz üstü pantolon giyen elitlere inat uzun pantolon giyen radikal işçi sınıfı militanlarına ne ad verilir?"
          },
          options: [
            { text: { en: "Sans-culottes", tr: "Sans-culottes" }, correct: true },
            { text: { en: "Bourgeoisie", tr: "Burjuvazi" }, correct: false },
            { text: { en: "Émigrés", tr: "Göçmenler (Emigres)" }, correct: false },
            { text: { en: "Girondins", tr: "Jirondenler" }, correct: false }
          ],
          explanation: {
            en: "The sans-culottes (literally 'without knee-breeches') were the driving force of street violence in Paris.",
            tr: "Sans-culottes (diz pantolonsuzlar), Paris'teki sokak eylemlerinin ve radikalleşmenin ana gücüydü."
          }
        },
        {
          question: {
            en: "Who was the radical journalist of 'L'Ami du Peuple' (Friend of the People) assassinated in his bath in July 1793?",
            tr: "1793 Temmuz ayında banyosunda Charlotte Corday tarafından suikasta uğrayan 'L'Ami du Peuple' gazetesinin radikal yazarı kimdir?"
          },
          options: [
            { text: { en: "Jean-Paul Marat", tr: "Jean-Paul Marat" }, correct: true },
            { text: { en: "Georges Danton", tr: "Georges Danton" }, correct: false },
            { text: { en: "Camille Desmoulins", tr: "Camille Desmoulins" }, correct: false },
            { text: { en: "Jacques Hébert", tr: "Jacques Hebert" }, correct: false }
          ],
          explanation: {
            en: "Marat's assassination turned him into a secular martyr of the revolution, immortalized by painter Jacques-Louis David.",
            tr: "Marat'nın suikastı onu devrimin seküler bir şehidine dönüştürdü ve David'in tablosuyla ölümsüzleşti."
          }
        },
        {
          question: {
            en: "Which governing committee, established in April 1793, wielded dictatorial power in France during the Reign of Terror?",
            tr: "Nisan 1793'te kurulan ve Terör Dönemi boyunca Fransa'da diktatörlük yetkilerini elinde tutan komite hangisidir?"
          },
          options: [
            { text: { en: "Committee of Public Safety", tr: "Kamu Güvenliği Komitesi (Committee of Public Safety)" }, correct: true },
            { text: { en: "Committee of General Security", tr: "Genel Güvenlik Komitesi" }, correct: false },
            { text: { en: "The Directory", tr: "Direktörlük" }, correct: false },
            { text: { en: "The Consulate", tr: "Konsüllük" }, correct: false }
          ],
          explanation: {
            en: "The Committee of Public Safety, dominated by Robespierre, suspended the constitution to wage total war.",
            tr: "Kamu Güvenliği Komitesi, dış tehditler ve iç isyanlar gerekçesiyle anayasayı askıya alıp terör rejimi yürütmüştür."
          }
        },
        {
          question: {
            en: "What decree passed in September 1793 authorized the arrest of anyone defined as a counter-revolutionary suspect?",
            tr: "Eylül 1793'te kabul edilen ve devrim karşıtı olduğundan şüphelenilen herkesin tutuklanmasına izin veren yasa hangisidir?"
          },
          options: [
            { text: { en: "The Law of Suspects", tr: "Şüpheliler Yasası (Law of Suspects)" }, correct: true },
            { text: { en: "The Law of 22 Prairial", tr: "22 Prairial Yasası" }, correct: false },
            { text: { en: "The Le Chapelier Law", tr: "Le Chapelier Yasası" }, correct: false },
            { text: { en: "The Law of the Maximum", tr: "Maksimum Fiyat Yasası" }, correct: false }
          ],
          explanation: {
            en: "The Law of Suspects filled prisons, allowing municipal committees to arrest anyone without trials.",
            tr: "Şüpheliler Yasası zindanları doldurdu ve yerel komitelere yargı kararı olmaksızın tutuklama yetkisi verdi."
          }
        },
        {
          question: {
            en: "Who was the moderate Jacobin leader who argued for ending the Terror, leading to his execution in April 1794?",
            tr: "Terörün sona erdirilmesini ve ılımlı politikaya geçilmesini savunduğu için Nisan 1794'te idam edilen Jakoben lider kimdir?"
          },
          options: [
            { text: { en: "Georges Danton", tr: "Georges Danton" }, correct: true },
            { text: { en: "Maximilien Robespierre", tr: "Maximilien Robespierre" }, correct: false },
            { text: { en: "Saint-Just", tr: "Saint-Just" }, correct: false },
            { text: { en: "Jacques Hébert", tr: "Jacques Hebert" }, correct: false }
          ],
          explanation: {
            en: "Danton and his supporters (the Indulgents) were guillotined when they challenged Robespierre's monopoly of power.",
            tr: "Danton ve destekçileri (Indulgents), Robespierre'in sert politikalarını eleştirince giyotine gönderilmiştir."
          }
        },
        {
          question: {
            en: "What coup in July 1794 overthrew Robespierre, ending the Reign of Terror?",
            tr: "Temmuz 1794'te Robespierre'in devrilmesini sağlayan ve Terör Dönemi'ni bitiren darbe sürecine ne ad verilir?"
          },
          options: [
            { text: { en: "The Thermidorian Reaction", tr: "Termidor Reaksiyonu (Thermidorian)" }, correct: true },
            { text: { en: "The Coup of 18 Brumaire", tr: "18 Brumaire Darbesi" }, correct: false },
            { text: { en: "The September Massacres", tr: "Eylül Katliamları" }, correct: false },
            { text: { en: "The Brunswick Manifesto", tr: "Brunswick Manifestosu" }, correct: false }
          ],
          explanation: {
            en: "The Thermidorian Reaction (9 Thermidor Year II) led to Robespierre's arrest and execution the next day.",
            tr: "Termidor Reaksiyonu (9 Termidor), Robespierre'in mecliste susturulup tutuklanmasını ve ertesi gün idamını sağladı."
          }
        },
        {
          question: {
            en: "Who was the French general who overthrew the Directory in November 1799, ending the revolution?",
            tr: "Kasım 1799'da Direktörlük yönetimini yıkarak devrim sürecini bitiren Fransız general kimdir?"
          },
          options: [
            { text: { en: "Napoleon Bonaparte", tr: "Napolyon Bonapart (Napoleon)" }, correct: true },
            { text: { en: "Joachim Murat", tr: "Joachim Murat" }, correct: false },
            { text: { en: "Marquis de Lafayette", tr: "Marquis de Lafayette" }, correct: false },
            { text: { en: "General Dumouriez", tr: "General Dumouriez" }, correct: false }
          ],
          explanation: {
            en: "Napoleon's coup of 18 Brumaire established the Consulate, making him First Consul and later Emperor.",
            tr: "Napolyon'un 18 Brumaire Darbesi Konsüllük rejimini kurmuş ve onu ülkenin mutlak lideri yapmıştır."
          }
        },
        {
          question: {
            en: "What was the name of the paper money issued by the revolutionary government backed by nationalized church lands?",
            tr: "Kamulaştırılan kilise toprakları teminat gösterilerek basılan Fransız kağıt parasının adı nedir?"
          },
          options: [
            { text: { en: "Assignats", tr: "Assignats (Kağıt Para Assinyat)" }, correct: true },
            { text: { en: "Francs", tr: "Frank" }, correct: false },
            { text: { en: "Livres", tr: "Livre" }, correct: false },
            { text: { en: "Florins", tr: "Florin" }, correct: false }
          ],
          explanation: {
            en: "Assignats suffered from hyperinflation, losing all value due to excessive printing by the Republic.",
            tr: "Assinyatlar (Assignats), aşırı miktarda basılması sonucu hiperenflasyona uğrayarak değerini tamamen yitirmiştir."
          }
        },
        {
          question: {
            en: "Which French King was forced to convoke the Estates General in May 1789 due to state bankruptcy?",
            tr: "Devletin iflas etmesi üzerine Mayıs 1789'da Estates General'ı toplamak zorunda kalan Fransız kralı kimdir?"
          },
          options: [
            { text: { en: "Louis XVI", tr: "XVI. Louis" }, correct: true },
            { text: { en: "Louis XIV", tr: "XIV. Louis" }, correct: false },
            { text: { en: "Louis XV", tr: "XV. Louis" }, correct: false },
            { text: { en: "Charles X", tr: "X. Charles" }, correct: false }
          ],
          explanation: {
            en: "Louis XVI was well-meaning but weak, failing to reform the tax system before the fiscal crash.",
            tr: "XVI. Louis, soylulardan vergi alacak reformları yapamayınca meclisi 175 yıl sonra toplamak zorunda kaldı."
          }
        },
        {
          question: {
            en: "Who was the Swiss banker who served as Louis XVI's popular finance minister, whose dismissal sparked the storming of the Bastille?",
            tr: "XVI. Louis'nin halk tarafından çok sevilen İsviçreli maliye bakanı kimdir (görevden alınması Bastille Baskını'nı tetiklemiştir)?"
          },
          options: [
            { text: { en: "Jacques Necker", tr: "Jacques Necker" }, correct: true },
            { text: { en: "Charles Alexandre de Calonne", tr: "Charles Alexandre de Calonne" }, correct: false },
            { text: { en: "Etienne Charles de Loménie de Brienne", tr: "Lomenie de Brienne" }, correct: false },
            { text: { en: "Jean-Baptiste Colbert", tr: "Jean-Baptiste Colbert" }, correct: false }
          ],
          explanation: {
            en: "Necker's dismissal on July 11 convinced Parisians that the king planned to crush the National Assembly.",
            tr: "Necker'in 11 Temmuz'da görevden alınması, halkın kralın meclisi dağıtacağına inanmasına yol açarak isyanı körükledi."
          }
        },
        {
          question: {
            en: "Which Austrian-born Queen of France was widely hated for her lavish spending and opposition to reforms?",
            tr: "Fransa'nın Avusturya kökenli, lüks harcamaları ve reform karşıtlığı nedeniyle nefret edilen Kraliçesi kimdir?"
          },
          options: [
            { text: { en: "Marie Antoinette", tr: "Marie Antoinette" }, correct: true },
            { text: { en: "Maria Theresa", tr: "Maria Theresa" }, correct: false },
            { text: { en: "Marie de' Medici", tr: "Marie de Medici" }, correct: false },
            { text: { en: "Anne of Austria", tr: "Anne of Austria" }, correct: false }
          ],
          explanation: {
            en: "Marie Antoinette was labeled 'Madame Déficit' and accused of treason before her execution in October 1793.",
            tr: "Marie Antoinette, bütçe açığının sorumlusu görülmüş ve vatan hainliği suçlamasıyla Ekim 1793'te idam edilmiştir."
          }
        },
        {
          question: {
            en: "What march in October 1789 forced the royal family to leave Versailles and reside in Paris under popular surveillance?",
            tr: "Ekim 1789'da gerçekleşen ve kraliyet ailesini Versailles Sarayı'nı terk edip Paris'e taşınmaya zorlayan halk yürüyüşü hangisidir?"
          },
          options: [
            { text: { en: "The Women's March on Versailles", tr: "Kadınların Versailles Yürüyüşü" }, correct: true },
            { text: { en: "The Day of the Tiles", tr: "Kiremit Günü Yürüyüşü" }, correct: false },
            { text: { en: "The Flight to Varennes", tr: "Varennes Kaçışı Yürüyüşü" }, correct: false },
            { text: { en: "The Insurrection of August 10", tr: "10 Ağustos Ayaklanması" }, correct: false }
          ],
          explanation: {
            en: "Armed Parisian women marched to Versailles demanding bread, forcing the king to move to the Tuileries Palace.",
            tr: "Ekmek talebiyle Versailles'a yürüyen Parisli kadınlar, kralı Tuileries Sarayı'na taşınmaya zorlamıştır."
          }
        },
        {
          question: {
            en: "Which law passed in 1791 banned workers' guilds and trade unions (strikes) in revolutionary France?",
            tr: "Fransa'da 1791'de kabul edilen ve işçi loncalarını ve sendikal grev haklarını yasaklayan liberal yasa hangisidir?"
          },
          options: [
            { text: { en: "The Le Chapelier Law", tr: "Le Chapelier Yasası (Le Chapelier Law)" }, correct: true },
            { text: { en: "The Civil Code", tr: "Medeni Kanun" }, correct: false },
            { text: { en: "The Law of the Maximum", tr: "Maksimum Fiyat Yasası" }, correct: false },
            { text: { en: "The Law of Suspects", tr: "Şüpheliler Yasası" }, correct: false }
          ],
          explanation: {
            en: "The Le Chapelier Law outlawed all coalitions of workers as contrary to the free market and national sovereignty.",
            tr: "Le Chapelier Yasası, serbest ticaret ilkelerine aykırı olduğu gerekçesiyle işçi örgütlenmelerini yasaklamıştır."
          }
        },
        {
          question: {
            en: "What was the main purpose of the Brunswick Manifesto issued by Austro-Prussian forces in July 1792?",
            tr: "Temmuz 1792'de Prusya-Avusturya ordusunun yayınladığı Brunswick Manifestosu'nun temel amacı neydi?"
          },
          options: [
            { text: { en: "To threaten Paris with total destruction if the French royal family was harmed.", tr: "Kraliyet ailesine zarar verilmesi halinde Paris'i tamamen yerle bir etmekle tehdit etmek." }, correct: true },
            { text: { en: "To declare war on Great Britain.", tr: "İngiltere'ye savaş ilan etmek." }, correct: false },
            { text: { en: "To support the Jacobin republicans.", tr: "Jakoben cumhuriyetçileri desteklemek." }, correct: false },
            { text: { en: "To annex Alsace-Lorraine.", tr: "Alsas-Loren bölgesini ilhak etmek." }, correct: false }
          ],
          explanation: {
            en: "The manifesto intended to terrify Parisians, but backfired, driving them to storm the palace and depose the king.",
            tr: "Manifesto halkı korkutmayı amaçlıyordu; ancak ters tepti ve halkın sarayı basıp krallığı yıkmasına yol açtı."
          }
        },
        {
          question: {
            en: "Which event on August 10, 1792, marked the effective fall of the French monarchy?",
            tr: "10 Ağustos 1792'de gerçekleşen hangi olay Fransız monarşisinin fiilen yıkılmasını sağlamıştır?"
          },
          options: [
            { text: { en: "The Storming of the Tuileries Palace", tr: "Tuileries Sarayı'nın Basılması (Tuileries)" }, correct: true },
            { text: { en: "The Storming of the Bastille", tr: "Bastille Kalesi'nin Basılması" }, correct: false },
            { text: { en: "The Execution of Louis XVI", tr: "XVI. Louis'nin İdam Edilmesi" }, correct: false },
            { text: { en: "The Flight to Varennes", tr: "Kralın Varennes'e Kaçması" }, correct: false }
          ],
          explanation: {
            en: "Crowds and provincial guards stormed the Tuileries, forcing the assembly to suspend Louis XVI.",
            tr: "Halk ve milisler Tuileries Sarayı'nı basarak İsviçreli Muhafızları katletti ve meclisi kralı görevden almaya zorladı."
          }
        },
        {
          question: {
            en: "What was the name of the legislative assembly that ruled France from September 1792 to October 1795?",
            tr: "Eylül 1792 ile Ekim 1795 arasında Fransa'yı yöneten ve Cumhuriyeti kuran kurucu meclisin adı nedir?"
          },
          options: [
            { text: { en: "The National Convention", tr: "Ulusal Konvansiyon (National Convention)" }, correct: true },
            { text: { en: "The Legislative Assembly", tr: "Yasama Meclisi" }, correct: false },
            { text: { en: "The National Assembly", tr: "Ulusal Meclis" }, correct: false },
            { text: { en: "The Council of Five Hundred", tr: "Beşyüzler Meclisi" }, correct: false }
          ],
          explanation: {
            en: "The National Convention abolished the monarchy, drafted a new constitution, and established the Republic.",
            tr: "Ulusal Konvansiyon, krallığı kaldırmış, kralı yargılamış ve cumhuriyeti yöneten meclis olmuştur."
          }
        },
        {
          question: {
            en: "Which composer wrote 'La Marseillaise' in Strasbourg in April 1792, which became the national anthem?",
            tr: "Nisan 1792'de Strasburg'da devrim ordusu için savaş marşını (Marseillaise) besteleyen subay/müzisyen kimdir?"
          },
          options: [
            { text: { en: "Claude Joseph Rouget de Lisle", tr: "Rouget de Lisle" }, correct: true },
            { text: { en: "Ludwig van Beethoven", tr: "Ludwig van Beethoven" }, correct: false },
            { text: { en: "Wolfgang Amadeus Mozart", tr: "Wolfgang Amadeus Mozart" }, correct: false },
            { text: { en: "Jean-Baptiste Lully", tr: "Jean-Baptiste Lully" }, correct: false }
          ],
          explanation: {
            en: "Rouget de Lisle wrote the song to rally troops marching against Austria; volunteers from Marseille popularized it in Paris.",
            tr: "Rouget de Lisle marşı besteleyen subaydı; Marsilyalı gönüllülerin Paris'e girerken okumasıyla adı Marseillaise kaldı."
          }
        },
        {
          question: {
            en: "What was the primary function of the Revolutionary Tribunal established in March 1793?",
            tr: "Mart 1793'te Paris'te kurulan Devrim Mahkemesi'nin (Revolutionary Tribunal) temel işlevi neydi?"
          },
          options: [
            { text: { en: "To try political enemies and counter-revolutionaries with simplified legal procedures.", tr: "Devrim düşmanlarını ve kraliyetçi şüphelileri basitleştirilmiş yollarla yargılamak." }, correct: true },
            { text: { en: "To regulate bread prices.", tr: "Ekmek fiyatlarını denetlemek." }, correct: false },
            { text: { en: "To draft international peace treaties.", tr: "Uluslararası barış antlaşmaları hazırlamak." }, correct: false },
            { text: { en: "To resolve tax disputes.", tr: "Vergi uyuşmazlıklarını çözmek." }, correct: false }
          ],
          explanation: {
            en: "The Tribunal was the primary tool of the Reign of Terror, executing over 16,000 people under expedited laws.",
            tr: "Devrim Mahkemesi, Terör Dönemi'nin ana yargı aracıydı ve savunma hakkını kısıtlayarak binlerce insanı ölüme yolladı."
          }
        },
        {
          question: {
            en: "Which law passed in June 1794 (22 Prairial) eliminated witnesses and counsel from trials in the Tribunal?",
            tr: "Haziran 1794'te (22 Prairial) çıkarılan ve sanıkların avukat tutma ve tanık çağırma haklarını kaldıran yasa hangisidir?"
          },
          options: [
            { text: { en: "The Law of 22 Prairial", tr: "22 Prairial Yasası (Law of 22 Prairial)" }, correct: true },
            { text: { en: "The Law of Suspects", tr: "Şüpheliler Yasası" }, correct: false },
            { text: { en: "The Hostage Law", tr: "Rehineler Yasası" }, correct: false },
            { text: { en: "The Maximum Law", tr: "Maksimum Fiyat Yasası" }, correct: false }
          ],
          explanation: {
            en: "The Law of 22 Prairial initiated the 'Great Terror', leaving the court with only two choices: acquittal or death.",
            tr: "22 Prairial Yasası, 'Büyük Terör' dönemini başlatarak mahkemenin beraat ya da idam dışında karar almasını yasaklamıştır."
          }
        },
        {
          question: {
            en: "What was the Cult of the Supreme Being introduced by Robespierre in June 1794?",
            tr: "Haziran 1794'te Robespierre tarafından Hristiyanlığın yerine kurulan deist devlet dininin adı nedir?"
          },
          options: [
            { text: { en: "Cult of the Supreme Being", tr: "Yüce Varlık Kültü (Supreme Being)" }, correct: true },
            { text: { en: "Cult of Reason", tr: "Akıl Kültü" }, correct: false },
            { text: { en: "Theophilanthropy", tr: "Teofilantropi" }, correct: false },
            { text: { en: "Civil Religion", tr: "Sivil Din" }, correct: false }
          ],
          explanation: {
            en: "Robespierre designed the cult to promote civic virtue and morality, holding a massive festival in Paris.",
            tr: "Yüce Varlık Kültü, Robespierre'in erdem ve seküler ahlakı birleştirmek için tasarladığı deist bir devlet inancıydı."
          }
        },
        {
          question: {
            en: "Which French philosopher and mathematician died in a revolutionary prison in 1794 after being outlawed?",
            tr: "1794'te Jakoben meclisi tarafından tutuklandıktan sonra zindanda ölü bulunan ünlü Aydınlanma filozofu ve matematikçi kimdir?"
          },
          options: [
            { text: { en: "Marquis de Condorcet", tr: "Marquis de Condorcet" }, correct: true },
            { text: { en: "Denis Diderot", tr: "Denis Diderot" }, correct: false },
            { text: { en: "Jean le Rond d'Alembert", tr: "d'Alembert" }, correct: false },
            { text: { en: "Montesquieu", tr: "Montesquieu" }, correct: false }
          ],
          explanation: {
            en: "Condorcet drafted constitutional education reforms before being targeted during the Jacobin purges.",
            tr: "Condorcet, sömürge karşıtı Amis des Noirs üyesiydi ve Jakobenlerin tasfiyesi sırasında hapishanede ölmüştür."
          }
        },
        {
          question: {
            en: "What was the main purpose of the maximum price controls (Law of the General Maximum) in 1793?",
            tr: "1793'te çıkarılan Genel Maksimum Yasası'nın (Law of the General Maximum) temel amacı neydi?"
          },
          options: [
            { text: { en: "To set price ceilings on essential foods like bread and flour to satisfy urban poor.", tr: "Kent yoksullarını yatıştırmak için ekmek ve un gibi temel gıdalara tavan fiyat koymak." }, correct: true },
            { text: { en: "To maximize export profits.", tr: "İhracat karlarını maksimize etmek." }, correct: false },
            { text: { en: "To tax luxury commodities.", tr: "Lüks tüketim maddelerini vergilendirmek." }, correct: false },
            { text: { en: "To control paper currency inflation.", tr: "Kağıt para enflasyonunu kontrol etmek." }, correct: false }
          ],
          explanation: {
            en: "The Maximum was passed under pressure from the sans-culottes to prevent urban starvation during the war.",
            tr: "Genel Maksimum Yasası, savaş ve kıtlık döneminde ekmek fiyatlarının yükselmesini engellemek için çıkarılmıştı."
          }
        },
        {
          question: {
            en: "Which French city was renamed 'Ville-Affranchie' after its counter-revolutionary rebellion was brutally crushed in 1793?",
            tr: "1793'teki devrim karşıtı isyanın bastırılmasının ardından adı 'Özgürleştirilmiş Şehir' (Ville-Affranchie) yapılan kent hangisidir?"
          },
          options: [
            { text: { en: "Lyon", tr: "Lyon (Ville-Affranchie)" }, correct: true },
            { text: { en: "Marseille", tr: "Marsilya" }, correct: false },
            { text: { en: "Toulon", tr: "Toulon" }, correct: false },
            { text: { en: "Bordeaux", tr: "Bordeaux" }, correct: false }
          ],
          explanation: {
            en: "The National Convention decreed the partial destruction of Lyon, executing thousands of citizens with cannon-fire.",
            tr: "Lyon isyanı son derece sert bastırılmış ve meclis kararıyla şehrin şatoları yıkılıp adı geçici olarak değiştirilmiştir."
          }
        },
        {
          question: {
            en: "Who was the radical journalist who advocated extreme de-Christianization and was guillotined by Robespierre in March 1794?",
            tr: "Aşırı Hristiyanlık karşıtı politikaları savunan ve Mart 1794'te Robespierre tarafından idam edilen 'Hébertist' lider kimdir?"
          },
          options: [
            { text: { en: "Jacques Hébert", tr: "Jacques Hebert" }, correct: true },
            { text: { en: "Jean-Paul Marat", tr: "Jean-Paul Marat" }, correct: false },
            { text: { en: "Camille Desmoulins", tr: "Camille Desmoulins" }, correct: false },
            { text: { en: "Anacharsis Cloots", tr: "Anacharsis Cloots" }, correct: false }
          ],
          explanation: {
            en: "Hébert's newspaper 'Le Père Duchesne' was popular among the sans-culottes, pushing the convention to radikal measures.",
            tr: "Hebert, halk tabanını arkasına alarak kiliselerin kapatılmasını savunmuş ancak Robespierre tarafından tasfiye edilmiştir."
          }
        },
        {
          question: {
            en: "What was the name of the executive body of five directors that ruled France from 1795 to 1799?",
            tr: "1795 ile 1799 yılları arasında Fransa'yı yöneten beş üyeli yürütme organının (rejimin) adı nedir?"
          },
          options: [
            { text: { en: "The Directory (Directoire)", tr: "Direktörlük (Directory)" }, correct: true },
            { text: { en: "The Consulate", tr: "Konsüllük" }, correct: false },
            { text: { en: "The Committee of Public Safety", tr: "Kamu Güvenliği Komitesi" }, correct: false },
            { text: { en: "The Senate", tr: "Senato" }, correct: false }
          ],
          explanation: {
            en: "The Directory was characterized by corruption, unstable elections, and reliance on military power to maintain order.",
            tr: "Direktörlük dönemi, rüşvet skandalları, istikrarsız seçimler ve ordunun müdahale ettiği darbe girişimleriyle geçmiştir."
          }
        },
        {
          question: {
            en: "Which famous oath is depicted in Jacques-Louis David's unfinished painting representing the birth of national sovereignty?",
            tr: "Jacques-Louis David'in yarım kalan ünlü tablosunda resmedilen ve ulusal egemenliğin doğuşunu temsil eden yemin hangisidir?"
          },
          options: [
            { text: { en: "The Tennis Court Oath", tr: "Tenis Kortu Yemini" }, correct: true },
            { text: { en: "The Oath of the Horatii", tr: "Horas Kardeşlerin Yemini" }, correct: false },
            { text: { en: "The Coronation Oath", tr: "Taç Giyme Yemini" }, correct: false },
            { text: { en: "The Civil Oath", tr: "Medeni Yemin" }, correct: false }
          ],
          explanation: {
            en: "David's painting 'The Tennis Court Oath' depicted the unity of the delegates pledging to write the constitution.",
            tr: "David'in 'Tenis Kortu Yemini' tablosu, meclis üyelerinin el ele vererek ortak amaca yemin ettiği tarihi anı tasvir eder."
          }
        },
        {
          question: {
            en: "What was the name of the taxation system where private syndicates purchased the right to collect taxes for the Crown?",
            tr: "Kraliyet adına vergi toplama hakkının şahıslara ve şirketlere ihale edildiği Eski Rejim sisteminin adı nedir?"
          },
          options: [
            { text: { en: "Tax Farming (Ferme générale)", tr: "Vergi İltizamı (Tax Farming / Ferme Generale)" }, correct: true },
            { text: { en: "Seigneurial Dues", tr: "Senyörlük Hakları" }, correct: false },
            { text: { en: "Corvée", tr: "Corvee" }, correct: false },
            { text: { en: "Tithes", tr: "Aşar / Öşür" }, correct: false }
          ],
          explanation: {
            en: "The Ferme Générale was highly corrupt, as tax farmers kept whatever surplus they collected beyond their contract bid.",
            tr: "Ferme Generale, vergi toplayıcılarının halktan zorla fazla para toplayarak zenginleştiği yolsuz bir ihale düzeniydi."
          }
        },
        {
          question: {
            en: "Which battle in November 1799 completed Napoleon's seizure of power and the fall of the Directory?",
            tr: "Kasım 1799'da Napolyon'un iktidarı ele geçirmesini ve Direktörlük rejiminin yıkılmasını sağlayan darbe günü hangisidir?"
          },
          options: [
            { text: { en: "The Coup of 18 Brumaire", tr: "18 Brumaire Darbesi" }, correct: true },
            { text: { en: "The Thermidorian Reaction", tr: "Termidor Reaksiyonu" }, correct: false },
            { text: { en: "The Battle of Marengo", tr: "Marengo Savaşı" }, correct: false },
            { text: { en: "The Battle of Valmy", tr: "Valmy Savaşı" }, correct: false }
          ],
          explanation: {
            en: "On 18 Brumaire Year VIII, Napoleon dissolved the legislature with bayonets, establishing the Consulate.",
            tr: "18 Brumaire Darbesi ile Napolyon meclisi süngü zoruyla dağıtmış ve üç konsülden oluşan yürütmeyi kurmuştur."
          }
        },
        {
          question: {
            en: "What percentage of the land was owned by the Catholic Church in pre-revolutionary France?",
            tr: "Devrim öncesi Fransa'da Katolik Kilisesi (Birinci Tabaka) toprakların yaklaşık yüzde kaçına sahipti?"
          },
          options: [
            { text: { en: "10%", tr: "%10" }, correct: true },
            { text: { en: "30%", tr: "%30" }, correct: false },
            { text: { en: "5%", tr: "%5" }, correct: false },
            { text: { en: "50%", tr: "%50" }, correct: false }
          ],
          explanation: {
            en: "The Church held 10% of French agricultural lands, collecting tithes while paying no taxes to the state.",
            tr: "Kilise toprakların %10'una sahipti; ayrıca halktan öşür toplar ancak devlete doğrudan vergi vermezdi."
          }
        }
      ]
    },
    6: {
      id: 6,
      themeColor: "#0d9488", // Dark Teal
      title: {
        en: "The Haitian Revolution",
        tr: "Haiti Devrimi"
      },
      video: {
        src: "https://drive.google.com/file/d/1OdsOHZMM0mnb7I6w3EcWv62JwZT1riM1/view?usp=sharing",
        desc: {
          tr: "Haiti Devrimi: Tarihteki tek başarılı köle ayaklanması ve bağımsız ilk siyah cumhuriyetin kuruluşu.",
          en: "The Haitian Revolution: The only successful slave revolt in history and the establishment of the first independent black republic."
        }
      },
      slides: [
        {
          title: {
            en: "Universal Rights & Colonial Reality",
            tr: "Evrensel Haklar ve Sömürge Gerçekliği"
          },
          text: {
            en: `<p><strong>Universal Principles vs. Colonial Reality:</strong> The French Revolution confronted hard contradictions when its universal Rights of Man exported to colonial slave societies like San Domingo (Saint-Domingue).</p>
                 <p><strong>Property vs. Human Emancipation:</strong> A fundamental tension arose between Article 17 protecting property (since slaves were legally defined as property) and abstract human liberty demanding universal enfranchisement.</p>
                 <p><strong>Race as Axial Line:</strong> Exporting revolutionary principles to San Domingo added racial caste lines on top of class divisions, sparking the most profound revolution in the Atlantic world.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Core Problem:</strong> Could slaves be freed without violating the property rights of French bourgeois slave owners who led the Revolution?
                 </div>`,
            tr: `<p><strong>Evrensel İlkeler ve Sömürge Gerçekliği:</strong> Fransız Devrimi'nin İnsan Hakları ilkeleri San Domingo gibi köle toplumlarına ihraç edildiğinde büyük çelişkiler doğdu.</p>
                 <p><strong>Mülkiyet ve İnsani Özgürlük Çatışması:</strong> Mülkiyeti koruyan Madde 17 (köleler kanunen mülk sayıldığı için) ile herkese özgürlük talep eden soyut insan hakları arasında çatışma çıktı.</p>
                 <p><strong>Eksenel Çizgi Olarak Irk:</strong> Devrimci ilkelerin sömürgeye ulaşması, sınıf ayrımının üzerine ırk ayrımını da ekleyerek Atlantik dünyasının en radikal devrimini ateşledi.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Temel Sorun:</strong> Devrimi yapan Fransız burjuva köle sahiplerinin mülkiyet hakları ihlal edilmeden köleler özgürleştirilebilir miydi?
                 </div>`
          },
          mapState: {
            zoom: "caribbean",
            highlightRegions: ["americas", "europe"],
            activeRoutes: [],
            markers: ["cap_francais", "paris"]
          }
        },
        {
          title: {
            en: "San Domingo & The Plantation Economy",
            tr: "San Domingo ve Plantasyon Ekonomisi"
          },
          text: {
            en: `<p><strong>From Hispaniola to Saint-Domingue:</strong> Spanish contact devastated native Arawak/Taino populations (dropping from 500,000 to 60,000 in 15 years). France seized the western third of the island, officially confirmed by the 1697 Treaty of Ryswick.</p>
                 <p><strong>The World's Richest Colony:</strong> Under French rule, San Domingo turned into an intensive plantation engine producing sugar, indigo, and coffee. By 1754, the island housed 599 sugar plantations and 3,379 indigo estates, becoming the most lucrative colony on Earth.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Treaty of Ryswick (1697):</strong> Formally ceded western Hispaniola to France, laying the foundation for Saint-Domingue's sugar boom.
                 </div>`,
            tr: `<p><strong>Hispaniola'dan Saint-Domingue'e:</strong> İspanyolların yerli Taino nüfusunu yok etmesinin ardından Fransa adanın batı üçte birini ele geçirdi (1697 Ryswick Antlaşması ile tescillendi).</p>
                 <p><strong>Dünyanın En Zengin Sömürgesi:</strong> Fransa yönetiminde adada yoğun şeker, çivit otu ve kahve plantasyonları kuruldu. 1754'te 599 şeker ve 3.379 çivit plantasyonuyla adası dünyanın en karlı kolonisine dönüştü.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Ryswick Antlaşması (1697):</strong> Adanın batısını resmen Fransa'ya devrederek devasa şeker patlamasının hukuki zeminini hazırlamıştır.
                 </div>`
          },
          mapState: {
            zoom: "caribbean",
            highlightRegions: ["americas"],
            activeRoutes: [],
            markers: ["cap_francais", "port_au_prince"]
          }
        },
        {
          title: {
            en: "The Slave System & Code Noir",
            tr: "Kölelik Sistemi ve Code Noir"
          },
          text: {
            en: `<p><strong>Massive Slave Imports:</strong> Slaves were imported predominantly from Guinea, Congo, and Mozambique. By 1789, 500,000 black slaves worked the fields under 40,000 whites.</p>
                 <p><strong>Code Noir (1685) Ignored:</strong> Promulgated by Louis XIV to regulate food and punishment, planters entirely ignored the <em>Code Noir</em>, subjecting slaves to extreme cruelty to prevent revolts among outnumbering captives.</p>
                 <p><strong>Systematic Literacy Ban:</strong> Planters strictly banned teaching slaves to read and write to prevent political organization and maintain white supremacy.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Demographic Imbalance:</strong> Slaves outnumbered whites 12-to-1, prompting planters to rely on extreme terror to maintain security.
                 </div>`,
            tr: `<p><strong>Kitlesel Köle İthalatı:</strong> Köleler çoğunlukla Gine, Kongo ve Mozambik'ten getiriliyordu. 1789'da 40.000 beyaza karşı 500.000 siyah köle tarlalarda çalışıyordu.</p>
                 <p><strong>Code Noir'ın Çiğnenmesi:</strong> XIV. Louis'nin çıkardığı <em>Code Noir (Siyah Yasa)</em> plantasyon sahiplerince tamamen çiğnendi; sayıca üstün köleleri bastırmak için sistematik şiddet uygulandı.</p>
                 <p><strong>Okuma-Yazma Yasağı:</strong> Kölelerin okuma yazma öğrenmesi, siyasi örgütlenmeyi önlemek ve beyaz üstünlüğünü korumak amacıyla kesinlikle yasaklandı.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Demografik Dengesizlik:</strong> Köle sayısı beyazların 12 katıydı; bu durum sahipleri şiddet ve dehşet politikasına zorluyordu.
                 </div>`
          },
          mapState: {
            zoom: "caribbean",
            highlightRegions: ["americas", "africa"],
            activeRoutes: ["triangular_trade"],
            markers: ["cap_francais", "whydah"]
          }
        },
        {
          title: {
            en: "Slave Culture, Domestic Servants & Maroon Resistance",
            tr: "Köle Kültürü ve Maron Direnişi"
          },
          text: {
            en: `<p><strong>Autonomous Culture:</strong> Slaves forged Haitian Creole and Vodou religious rituals as autonomous spaces of unity away from masters' control.</p>
                 <p><strong>Privileged Servant Caste:</strong> A caste of house servants, cooks, and foremen acquired education forbidden to field workers. Toussaint Louverture (born Toussaint Bréda), an educated ex-slave driver, emerged from this group.</p>
                 <p><strong>Maroon Resistance & Mackandal:</strong> Escaped slaves built mountain <em>Maroon</em> communities (3,000 by 1751). Maroon leader François Mackandal led a legendary 1750s poison campaign targeting white plantation owners.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Mackandal:</strong> Mackandal created a secret poisoning network that struck terror into French planters before he was captured and executed.
                 </div>`,
            tr: `<p><strong>Özerk Kültür:</strong> Köleler, efendilerin kontrolünden uzak bağımsız bir birlik alanı olarak Haiti Kreyol dilini ve Vodou ritüellerini yarattılar.</p>
                 <p><strong>Ev Hizmetlileri Sınıfı:</strong> Aşçı, kahyalar ve ev hizmetlilerinden oluşan grup gizlice okuma yazma öğrendi. Toussaint Louverture (Toussaint Bréda) bu okumuş azatlı gruptan yetişti.</p>
                 <p><strong>Maronlar ve Mackandal:</strong> Dağlara kaçan köleler <em>Maron</em> toplulukları kurdu. Efsanevi lider François Mackandal 1750'lerde sahipleri zehirleme kampanyası yürüttü.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Mackandal:</strong> Mackandal, diri diri yakılmadan önce plantasyon sahiplerinin kâbusu olan gizli bir zehirleme ağı örgütlemişti.
                 </div>`
          },
          mapState: {
            zoom: "caribbean",
            highlightRegions: ["americas"],
            activeRoutes: [],
            markers: ["cap_francais", "port_au_prince"]
          }
        },
        {
          title: {
            en: "Colonial Social Hierarchy & Racial Divisions",
            tr: "Sömürge Toplumsal Hiyerarşisi ve Irk"
          },
          text: {
            en: `<p><strong>Four Conflicting Classes:</strong></p>
                 <p><ul>
                   <li><strong>Grand Blancs:</strong> Wealthy plantation owners who used race to preserve privilege against royal control.</li>
                   <li><strong>French Royal Bureaucracy:</strong> Administrators representing King Louis XVI, resented by planters.</li>
                   <li><strong>Petit Blancs:</strong> Poor white artisans, clerks, and shopkeepers who fiercely defended skin-color privileges.</li>
                   <li><strong>Free Mulattoes (Gens de Couleur):</strong> Mixed-heritage property owners who amassed land and wealth but faced 128 oppressive racial caste laws.</li>
                 </ul></p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Racial Classifications:</strong> Anxious whites created absurd legal categories (quadroons, octoroons) to restrict free mulatto political rights.
                 </div>`,
            tr: `<p><strong>Dört Çatışan Sınıf:</strong></p>
                 <p><ul>
                   <li><strong>Büyük Beyazlar (Grand Blancs):</strong> Zengin plantasyon sahipleri, krallığa karşı ırk ayrıcalığını savundu.</li>
                   <li><strong>Fransız Bürokrasi:</strong> Krallığı temsil eden yetkililer (plantasyon sahipleriyle sürekli çatışıyorlardı).</li>
                   <li><strong>Küçük Beyazlar (Petit Blancs):</strong> Yoksul zanaatkar ve dükkan sahipleri; ten rengi ayrıcalıklarına sımsıkı sarıldılar.</li>
                   <li><strong>Özgür Melezler (Gens de Couleur):</strong> Zenginleşip mülk edinen ancak 128 ırkçı kanunla baskı gören grup.</li>
                 </ul></p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Irksal Sınıflandırma:</strong> Tedirgin beyazlar, zengin melezlerin haklarını kısmak için 128 parçalık absürt ırk kanunları icat etmişlerdir.
                 </div>`
          },
          mapState: {
            zoom: "caribbean",
            highlightRegions: ["americas"],
            activeRoutes: [],
            markers: ["cap_francais", "port_au_prince"]
          }
        },
        {
          title: {
            en: "Colonial Wealth & European Abolitionism",
            tr: "Sömürge Zenginliği ve Avrupa İptal Hareketi"
          },
          text: {
            en: `<p><strong>Enriching French Port Cities:</strong> Trade with San Domingo built the fortunes of French maritime bourgeois cities (Bordeaux, Nantes, Marseille), where sugar refining and colonial trade funded the French Revolution.</p>
                 <p><strong>British Abolitionism:</strong> In Britain, loss of the American colonies shift commercial focus toward India. Industrialists led by William Wilberforce attacked the slave trade (influenced by commercial rivalries with French sugar profits).</p>
                 <p><strong>French Enlightenment Attacks:</strong> Voltaire (<em>Candide</em>) and Abbé Raynal attacked slavery. In 1788, Abbé Grégoire, Condorcet, and Brissot founded the anti-slavery <em>Société des Amis des Noirs</em> in Paris.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Abbé Raynal:</strong> Raynal's anti-slavery writings directly inspired Toussaint Louverture to lead the slave struggle for emancipation.
                 </div>`,
            tr: `<p><strong>Fransız Limanlarının Zenginleşmesi:</strong> San Domingo ticareti Bordeaux, Nantes ve Marsilya tüccarlarını zenginleştirdi; Fransız Devrimi'ni yapan burjuvazi bu şeker sermayesiyle beslendi.</p>
                 <p><strong>İngiliz İptal Hareketi (Abolitionism):</strong> Amerika'yı kaybedip Hindistan'a yönelen İngiliz sanayicileri ve William Wilberforce köle ticaretine karşı kampanya başlattı.</p>
                 <p><strong>Fransız Aydınlanma Eleştirisi:</strong> Voltaire ve Abbé Raynal köleliği sertçe eleştirdi. 1788'de Paris'te <em>Siyahların Dostları Derneği (Société des Amis des Noirs)</em> kuruldu.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Abbé Raynal:</strong> Raynal'ın kölelik karşıtı eserleri, Toussaint Louverture'e ilham vererek özgürlük mücadelesine yöneltmiştir.
                 </div>`
          },
          mapState: {
            zoom: "europe",
            highlightRegions: ["europe"],
            activeRoutes: [],
            markers: ["bordeaux", "nantes", "paris", "london"]
          }
        },
        {
          title: {
            en: "Outbreak of Revolution in San Domingo",
            tr: "San Domingo'da Devrimin Patlak Vermesi"
          },
          text: {
            en: `<p><strong>Mulatto Revolt (1790):</strong> When the French Assembly refused voting rights to free mulattoes, Vincent Ogé led a mulatto revolt in 1790 and was brutally executed. France granted a compromise giving vote to mulattoes born of two free parents (benefiting just 400 men).</p>
                 <p><strong>The Great Slave Insurrection (August 1791):</strong> Led by Vodou priest Dutty Boukman, 100,000 black slaves rose in rebellion, burning plantations. Toussaint Bréda (Louverture) joined at age 45.</p>
                 <p><strong>Three-Way Conflict:</strong> Big whites sought autonomy; mulattoes fought for political equality; black slaves fought for total emancipation. hesitations pushed Toussaint to temporarily ally with Spain.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Robespierre's Quote:</strong> In April 1791, Robespierre famously declared in Parliament: "May the colonies perish rather than our principles!"
                 </div>`,
            tr: `<p><strong>Melez İsyanı (1790):</strong> Meclis oy hakkını reddedince Vincent Ogé 1790'da melez ayaklanması başlattı ve idam edildi. Fransa sadece iki özgür ebeveyni olan melezlere oy hakkı tanıdı (400 kişi).</p>
                 <p><strong>Büyük Köle Ayaklanması (Ağustos 1791):</strong> Vodou rahibi Dutty Boukman önderliğinde 100.000 köle plantasyonları yakarak isyan etti. 45 yaşındaki Toussaint Bréda (Louverture) isyana katıldı.</p>
                 <p><strong>Üç Taraflı Çatışma:</strong> Büyük beyazlar özerklik, melezler eşitlik, siyah köleler ise tam özgürlük için savaştı. Fransa'nın bocalayışı Toussaint'i İspanya ile ittifaka itti.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Robespierre'in Sözü:</strong> Nisan 1791'de Robespierre mecliste haykırmıştı: "İlkelerimiz feda edileceğine sömürgeler yok olsun daha iyi!"
                 </div>`
          },
          mapState: {
            zoom: "caribbean",
            highlightRegions: ["americas"],
            activeRoutes: [],
            markers: ["cap_francais", "gonaivers", "santo_domingo"]
          }
        },
        {
          title: {
            en: "Sonthonax & The Emancipation Decree of 1794",
            tr: "Sonthonax ve 1794 Özgürlük Kararnamesi"
          },
          text: {
            en: `<p><strong>Sonthonax's Radical Decree:</strong> Facing royalist white rebellions, French Republican Commissioner Léger-Félicité Sonthonax armed black slaves and declared the abolition of slavery in San Domingo on August 29, 1793.</p>
                 <p><strong>Decree of 16 Pluviôse (Feb 4, 1794):</strong> San Domingo sent three deputies to the National Convention in Paris: a former slave (Jean-Baptiste Belley), a mulatto (Jean-Baptiste Mills), and a white man (Louis-Pierre Dufay). The Convention officially abolished slavery across all French colonies.</p>
                 <p><strong>Toussaint Joins the Republic:</strong> Learning of the abolition decree, Toussaint Louverture immediately left Spanish service, joined the French Republic, and was named Lieutenant-General of San Domingo in 1796.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Historic Delegation:</strong> Jean-Baptiste Belley became the first black deputy to sit in a European national parliament.
                 </div>`,
            tr: `<p><strong>Sonthonax'ın Radikal Kararı:</strong> Krallık yanlısı beyaz isyanıyla karşılaşan Fransız Komiser Sonthonax, siyahları silahlandırarak 29 Ağustos 1793'te köleliği kaldırdı.</p>
                 <p><strong>4 Şubat 1794 Genel İptal Kararı:</strong> Paris'teki Ulusal Konvansiyon'a gönderilen 3 temsilcinin (eski köle Jean-Baptiste Belley, melez Mills, beyaz Dufay) çabasıyla Konvansiyon tüm sömürgelerde köleliği kaldırdı.</p>
                 <p><strong>Toussaint Fransa'ya Katılıyor:</strong> Özgürlük kararnamesini öğrenen Toussaint Louverture derhal İspanya'yı terk edip Fransa Cumhuriyeti'ne katıldı ve 1796'da Tümgeneral oldu.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Tarihi Heyet:</strong> Jean-Baptiste Belley, bir Avrupa meclisinde milletvekili olarak oturan ilk siyah temsilci olmuştur.
                 </div>`
          },
          mapState: {
            zoom: "caribbean",
            highlightRegions: ["americas", "europe"],
            activeRoutes: ["toussaint_switch"],
            markers: ["gonaives", "cap_francais", "paris"]
          }
        },
        {
          title: {
            en: "Toussaint's Rule & Bonaparte's Threat",
            tr: "Toussaint'in Özerkliği ve Bonapart'ın Karşı Hamlesi"
          },
          text: {
            en: `<p><strong>Toussaint's Governance:</strong> Toussaint ousted rival generals (Hédouville and Rigaud), reorganized agriculture, built schools, and annexed Spanish Santo Domingo in January 1800.</p>
                 <p><strong>1801 Constitution:</strong> Toussaint promulgated an autonomous constitution naming himself Governor-for-Life, establishing virtual independence while maintaining nominal ties to France.</p>
                 <p><strong>Bonaparte's Expedition (1801):</strong> Napoleon Bonaparte, urged by French merchants wanting to restore colonial profits, dispatched 20,000 troops under General Charles Leclerc in December 1801 to crush Toussaint.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Virtual Independence:</strong> Toussaint's 1801 Constitution made San Domingo self-governing, provoking Napoleon's imperial intervention.
                 </div>`,
            tr: `<p><strong>Toussaint Yönetimi:</strong> Toussaint rakiplerini (Hédouville ve Rigaud) tasfiye etti, eğitimi ve tarımı yeniden örgütledi, Ocak 1800'de İspanyol Santo Domingo'yu adaya bağladı.</p>
                 <p><strong>1801 Anayasası:</strong> Kendisini ömür boyu vali ilan eden özerk bir anayasa çıkararak fiili bağımsızlığı kurdu.</p>
                 <p><strong>Bonapart'ın İstilası (1801):</strong> Sömürge karlarını ve köleliği geri getirmek isteyen tüccarların baskısıyla Napolyon, Aralık 1801'de General Leclerc komutasında 20.000 kişilik bir ordu gönderdi.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Fiili Bağımsızlık:</strong> Toussaint'in 1801 Anayasası adayı özerk kılmış, bu durum Napolyon'un askeri müdahalesini tetiklemiştir.
                 </div>`
          },
          mapState: {
            zoom: "caribbean",
            highlightRegions: ["americas", "europe"],
            activeRoutes: ["leclerc_expedition"],
            markers: ["gonaives", "santo_domingo", "paris"]
          }
        },
        {
          title: {
            en: "War of Independence & Proclamation of Haiti",
            tr: "Bağımsızlık Savaşı ve Haiti Cumhuriyeti"
          },
          text: {
            en: `<p><strong>Toussaint's Trap & Death:</strong> Haitians practiced scorched-earth tactics. On June 7, 1802, Toussaint was lured into a trap, arrested, and shipped to France, where he died in prison in 1803.</p>
                 <p><strong>Reinstatement of Slavery & Race War:</strong> When Napoleon restored slavery in Guadeloupe and Martinique (May 1802), General Jean-Jacques Dessalines launched an all-out race war against French forces under Rochambeau.</p>
                 <p><strong>Independence Proclamation (Dec 31, 1803):</strong> Aided by British naval blockades and yellow fever decimating French troops, Dessalines unfurled the new Haitian flag ("Liberty or Death"). On December 31, 1803, independence was proclaimed, and Dessalines crowned himself Emperor in October 1804.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Haitian Flag:</strong> Dessalines tore the white stripe from the French tricolor, leaving blue and red to symbolize the ejection of white colonial rule.
                 </div>`,
            tr: `<p><strong>Toussaint'in Tuzağa Düşürülmesi:</strong> Yakılmış toprak taktiği uygulandı. 7 Haziran 1802'de Toussaint tuzağa düşürülüp Fransa'ya götürüldü ve 1803'te zindanda öldü.</p>
                 <p><strong>Köleliğin Geri Gelmesi ve Irk Savaşı:</strong> Napolyon Mayıs 1802'de Guadeloupe'ta köleliği yeniden getirince, Jean-Jacques Dessalines Fransızlara karşı nihayi bir kurtuluş savaşı başlattı.</p>
                 <p><strong>Haiti Bağımsızlık İlanı (31 Aralık 1803):</strong> Sarıhumma ve İngiliz donanmasının desteğiyle Fransızlar teslim oldu. 31 Aralık 1803'te bağımsızlık ilan edildi; Dessalines Ekim 1804'te kendisini İmparator taçlandırdı.</p>
                 <div class="extra-info" style="margin-top: 1rem; border-top: 1px dashed var(--theme-accent); padding-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                   <strong>Haiti Bayrağı:</strong> Dessalines Fransız bayrağındaki beyaz şeridi yırtıp atarak mavi ve kırmızı renklerle sömürgeciliğin kovuluşunu simgelemiştir.
                 </div>`
          },
          mapState: {
            zoom: "caribbean",
            highlightRegions: ["americas"],
            activeRoutes: ["british_aid_blockade"],
            markers: ["cap_francais", "gonaives", "port_au_prince"]
          }
        }
      ],
      quiz: [
        {
          question: {
            en: "What was the French name of the western third of Hispaniola before its independence in 1804?",
            tr: "1804'teki bağımsızlığından önce Hispaniola adasının batı kısmındaki Fransız sömürgesinin adı neydi?"
          },
          options: [
            { text: { en: "Saint-Domingue", tr: "Saint-Domingue" }, correct: true },
            { text: { en: "Santo Domingo", tr: "Santo Domingo" }, correct: false },
            { text: { en: "Ayiti", tr: "Ayiti" }, correct: false },
            { text: { en: "Hispaniola", tr: "Hispaniola" }, correct: false }
          ],
          explanation: {
            en: "Saint-Domingue was the French official colonial name, changed to Haiti upon independence in 1804.",
            tr: "Fransız yönetimi altındayken sömürgeye Saint-Domingue denmiş, 1804'te ise yerli adı olan Haiti verilmiştir."
          }
        },
        {
          question: {
            en: "What was the ratio of enslaved people to the free white population in Saint-Domingue by 1789?",
            tr: "1789 yılına gelindiğinde, Saint-Domingue sömürgesindeki köle nüfusunun beyazlara oranı yaklaşık ne kadardı?"
          },
          options: [
            { text: { en: "10 to 1", tr: "10'a 1" }, correct: true },
            { text: { en: "2 to 1", tr: "2'ye 1" }, correct: false },
            { text: { en: "20 to 1", tr: "20'a 1" }, correct: false },
            { text: { en: "5 to 1", tr: "5'e 1" }, correct: false }
          ],
          explanation: {
            en: "The demographic imbalance was extreme: 500,000 enslaved Africans lived alongside only 40,000 whites.",
            tr: "Adada aşırı bir demografik dengesizlik vardı: 500.000 Afrikalı köleye karşılık yalnızca 40.000 beyaz yaşıyordu."
          }
        },
        {
          question: {
            en: "What was the name of the wealthy free mixed-race population in Saint-Domingue?",
            tr: "Saint-Domingue sömürgesinde yaşayan ve mülk sahibi olan özgür melez nüfus için kullanılan terim hangisidir?"
          },
          options: [
            { text: { en: "Gens de Couleur (free people of color)", tr: "Gens de Couleur (Özgür Melezler)" }, correct: true },
            { text: { en: "Grand Blancs", tr: "Büyük Beyazlar" }, correct: false },
            { text: { en: "Sans-culottes", tr: "Sans-culottes" }, correct: false },
            { text: { en: "Maroons", tr: "Maronlar" }, correct: false }
          ],
          explanation: {
            en: "The Gens de Couleur were often educated and owned property and slaves, but were denied legal and civic equality.",
            tr: "Gens de Couleur, mülk ve köle sahibi olmalarına rağmen beyaz sömürgecilerce yasal ve siyasi haklardan dışlanmıştı."
          }
        },
        {
          question: {
            en: "Which free person of color led a failed armed rebellion in October 1790 demanding voting rights, resulting in his execution?",
            tr: "Ekim 1790'da melezlerin oy hakkı için başarısız bir isyan başlatıp tekerlek üzerinde kırılarak idam edilen lider kimdir?"
          },
          options: [
            { text: { en: "Vincent Ogé", tr: "Vincent Ogé" }, correct: true },
            { text: { en: "Toussaint Louverture", tr: "Toussaint Louverture" }, correct: false },
            { text: { en: "Jean-Jacques Dessalines", tr: "Jean-Jacques Dessalines" }, correct: false },
            { text: { en: "Andre Rigaud", tr: "Andre Rigaud" }, correct: false }
          ],
          explanation: {
            en: "Vincent Ogé's execution by the wheel shocked Paris and radicalized the free people of color against the white assembly.",
            tr: "Vincent Ogé'nin korkunç şekilde idam edilmesi, özgür melezleri beyaz plantasyon sahiplerine karşı tamamen radikalleştirdi."
          }
        },
        {
          question: {
            en: "Which voodoo priest initiated the Haitian Revolution during a religious ceremony at Bois Caïman in August 1791?",
            tr: "Ağustos 1791'de Bois Caiman'da yaptığı Voodoo töreniyle köle ayaklanmasının fitilini ateşleyen isyan lideri kimdir?"
          },
          options: [
            { text: { en: "Dutty Boukman", tr: "Dutty Boukman" }, correct: true },
            { text: { en: "Toussaint Louverture", tr: "Toussaint Louverture" }, correct: false },
            { text: { en: "François Mackandal", tr: "François Mackandal" }, correct: false },
            { text: { en: "Jean-Jacques Dessalines", tr: "Jean-Jacques Dessalines" }, correct: false }
          ],
          explanation: {
            en: "Dutty Boukman led the oath at Bois Caïman, which sparked the burning of northern plantations within days.",
            tr: "Dutty Boukman, Bois Caiman'daki Voodoo ayinini yöneterek kölelerin plantasyonları yakma isyanını başlatmıştır."
          }
        },
        {
          question: {
            en: "What was Toussaint Louverture's original name before he took the name 'L'Ouverture' (the opening)?",
            tr: "Toussaint, askeri dehasıyla 'L'Ouverture' (Açıklık/Yol Açan) adını almadan önce hangi isimle biliniyordu?"
          },
          options: [
            { text: { en: "Toussaint Bréda", tr: "Toussaint Breda" }, correct: true },
            { text: { en: "Toussaint Dessalines", tr: "Toussaint Dessalines" }, correct: false },
            { text: { en: "Toussaint Christophe", tr: "Toussaint Christophe" }, correct: false },
            { text: { en: "Toussaint Ogé", tr: "Toussaint Ogé" }, correct: false }
          ],
          explanation: {
            en: "Born on the Bréda plantation, Toussaint was a trusted coachman and steward before the revolution.",
            tr: "Breda plantasyonunda köle olarak doğan Toussaint, devrimden önce okuma yazması olan bir arabacı ve kahyaydı."
          }
        },
        {
          question: {
            en: "Which European nation did Toussaint and the slave generals ally with between 1793 and 1794 to fight France?",
            tr: "Fransa köleliği kaldırmayı reddedince, Toussaint ve generaller 1793-1794'te hangi ülkenin ordusunda albay olarak savaştı?"
          },
          options: [
            { text: { en: "Spain", tr: "İspanya (Spain)" }, correct: true },
            { text: { en: "Great Britain", tr: "İngiltere" }, correct: false },
            { text: { en: "Netherlands", tr: "Hollanda" }, correct: false },
            { text: { en: "United States", tr: "Amerika Birleşik Devletleri" }, correct: false }
          ],
          explanation: {
            en: "Toussaint allied with Spain (which held Santo Domingo), earning military ranks before switching back to France.",
            tr: "Toussaint, özgürlük vaadi karşılığında İspanya safına katılarak İspanyol Kıta Albayı rütbesiyle savaşmıştır."
          }
        },
        {
          question: {
            en: "Who was the French civil commissioner who unilaterally declared the abolition of slavery in Saint-Domingue in August 1793?",
            tr: "Ağustos 1793'te işgallere karşı kölelerin desteğini almak için sömürgede köleliği kaldıran Fransız komiser kimdir?"
          },
          options: [
            { text: { en: "Léger-Félicité Sonthonax", tr: "Leger-Felicite Sonthonax" }, correct: true },
            { text: { en: "General Leclerc", tr: "General Leclerc" }, correct: false },
            { text: { en: "General Rochambeau", tr: "General Rochambeau" }, correct: false },
            { text: { en: "General Hédouville", tr: "General Hedouville" }, correct: false }
          ],
          explanation: {
            en: "Sonthonax freed the slaves in the Northern Province to secure their loyalty against invading British and Spanish armies.",
            tr: "Sonthonax, İngiliz ve İspanyol işgallerine karşı kölelerin desteğini kazanmak için adada köleliği tek taraflı kaldırdı."
          }
        },
        {
          question: {
            en: "On what date did the French National Convention in Paris formally abolish slavery throughout all its colonies?",
            tr: "Paris'teki Ulusal Konvansiyon, tüm Fransız sömürgelerinde köleliği kaldıran tarihi kanunu hangi gün kabul etmiştir?"
          },
          options: [
            { text: { en: "February 4, 1794", tr: "4 Şubat 1794" }, correct: true },
            { text: { en: "August 29, 1793", tr: "29 Ağustos 1793" }, correct: false },
            { text: { en: "July 14, 1789", tr: "14 Temmuz 1789" }, correct: false },
            { text: { en: "December 31, 1803", tr: "31 Aralık 1803" }, correct: false }
          ],
          explanation: {
            en: "The Convention formally abolished slavery on 16 Pluviôse Year II (February 4, 1794), welcoming black deputies.",
            tr: "Meclis, 4 Şubat 1794'te köleliği tamamen kaldırmış ve sömürgeden gelen siyah ve melez vekilleri meclise kabul etmiştir."
          }
        },
        {
          question: {
            en: "Who was the black former slave elected as deputy to the French National Assembly representing Saint-Domingue in 1794?",
            tr: "1794 yılında Saint-Domingue'i temsilen Paris'teki Fransız meclisine giren eski siyah köle milletvekili kimdir?"
          },
          options: [
            { text: { en: "Jean-Baptiste Belley", tr: "Jean-Baptiste Belley" }, correct: true },
            { text: { en: "Jean-Baptiste Mills", tr: "Jean-Baptiste Mills" }, correct: false },
            { text: { en: "Vincent Ogé", tr: "Vincent Ogé" }, correct: false },
            { text: { en: "Toussaint Louverture", tr: "Toussaint Louverture" }, correct: false }
          ],
          explanation: {
            en: "Jean-Baptiste Belley was a former slave who bought his freedom, fought in Savannah, and became a deputy.",
            tr: "Belley, özgürlüğünü satın almış, Amerika'da savaşmış ve Paris meclisinde yer almış ilk siyah vekillerdendir."
          }
        },
        {
          question: {
            en: "What constitution drafted by Toussaint in 1801 declared him governor-general for life and banned slavery forever?",
            tr: "Toussaint'ın 1801'de çıkardığı ve kendisini ömür boyu vali ilan eden tarihi sömürge anayasası hangisidir?"
          },
          options: [
            { text: { en: "The Constitution of 1801", tr: "1801 Haiti Anayasası (Constitution of 1801)" }, correct: true },
            { text: { en: "The Code Rural", tr: "Kırsal Kanun" }, correct: false },
            { text: { en: "Code Noir", tr: "Kara Kanun" }, correct: false },
            { text: { en: "The Imperial Constitution", tr: "İmparatorluk Anayasası" }, correct: false }
          ],
          explanation: {
            en: "The 1801 Constitution declared Saint-Domingue virtually independent from France, provoking Napoleon's reaction.",
            tr: "1801 Anayasası adayı fiilen bağımsız kılmış ve Napolyon'un adaya ordu göndermesine gerekçe oluşturmuştur."
          }
        },
        {
          question: {
            en: "Which French general did Napoleon Bonaparte send in December 1801 with 20,000 troops to reclaim Saint-Domingue?",
            tr: "Aralık 1801'de Napolyon'un adayı geri almak ve köleliği yeniden kurmak için gönderdiği ordunun komutanı kimdir?"
          },
          options: [
            { text: { en: "General Charles Leclerc", tr: "General Charles Leclerc" }, correct: true },
            { text: { en: "General Donatien de Rochambeau", tr: "General Rochambeau" }, correct: false },
            { text: { en: "General Hédouville", tr: "General Hedouville" }, correct: false },
            { text: { en: "General Dumouriez", tr: "General Dumouriez" }, correct: false }
          ],
          explanation: {
            en: "General Leclerc was Napoleon's brother-in-law, instructed to disarm the black generals and restore slavery.",
            tr: "General Leclerc, Napolyon'un eniştesi olup subayları silahsızlandırmak ve köleliği geri getirmek üzere gönderilmişti."
          }
        },
        {
          question: {
            en: "In which cold fortress in the Jura mountains of France was Toussaint Louverture imprisoned, where he died in April 1803?",
            tr: "Toussaint Louverture, Fransa'ya kaçırıldıktan sonra hapsedildiği ve Nisan 1803'te öldüğü dağ zindanı hangisidir?"
          },
          options: [
            { text: { en: "Fort de Joux", tr: "Fort de Joux (Jura Dağları)" }, correct: true },
            { text: { en: "Château d'If", tr: "Chateau d'If" }, correct: false },
            { text: { en: "Bastille", tr: "Bastille Kalesi" }, correct: false },
            { text: { en: "Fort Boyard", tr: "Fort Boyard" }, correct: false }
          ],
          explanation: {
            en: "Toussaint was held in isolation at Fort de Joux in Jura, dying of pneumonia and starvation in April 1803.",
            tr: "Toussaint, Jura dağlarındaki Fort de Joux zindanında dondurucu soğukta zatürreden hayatını kaybetmiştir."
          }
        },
        {
          question: {
            en: "What strategic military tactic did the Haitian generals use to deny resources to the invading French army?",
            tr: "Haiti generallerinin, sömürgeci Fransız ordusunun ikmal yollarını kesmek için kullandığı askeri taktik hangisidir?"
          },
          options: [
            { text: { en: "Scorched-earth policy (burning cities and plantations)", tr: "Yakıp yıkma taktiği (şehirleri ve tarlaları ateşe verme)" }, correct: true },
            { text: { en: "Trench warfare", tr: "Siper savaşı" }, correct: false },
            { text: { en: "Frontal cavalry charge", tr: "Cepheden süvari taarruzu" }, correct: false },
            { text: { en: "Naval ambush", tr: "Deniz pususu" }, correct: false }
          ],
          explanation: {
            en: "Haitians burned their own cities (such as Cap-Français) before retreating to the secure mountains.",
            tr: "Haitililer kendi şehirlerini (örn. Cap-Français) ateşe vererek Fransız ordusuna barınak bırakmamışlardır."
          }
        },
        {
          question: {
            en: "Which disease decimated Napoleon's veteran troops, killing General Leclerc himself in November 1802?",
            tr: "Napolyon'un adaya gönderdiği orduyu kırıp geçiren ve Kasım 1802'de General Leclerc'i de öldüren salgın hastalık hangisidir?"
          },
          options: [
            { text: { en: "Yellow Fever", tr: "Sarı Humma (Yellow Fever)" }, correct: true },
            { text: { en: "Malaria", tr: "Sıtma" }, correct: false },
            { text: { en: "Smallpox", tr: "Çiçek Hastalığı" }, correct: false },
            { text: { en: "Dysentery", tr: "Dizanteri" }, correct: false }
          ],
          explanation: {
            en: "Yellow fever wiped out over 80% of the French soldiers, who had no immunity to tropical pathogens.",
            tr: "Sarı humma salgını, tropikal hastalıklara bağışıklığı olmayan Fransız ordusunun %80'ini yok etmiştir."
          }
        },
        {
          question: {
            en: "Who succeeded Leclerc as commander of the French army, becoming notorious for extreme atrocities and torture?",
            tr: "Leclerc'in sarı hummadan ölmesinin ardından yerine geçen ve uyguladığı işkenceler ve vahşetle tanınan Fransız general kimdir?"
          },
          options: [
            { text: { en: "General Donatien de Rochambeau", tr: "General Rochambeau" }, correct: true },
            { text: { en: "General Hédouville", tr: "General Hedouville" }, correct: false },
            { text: { en: "General Andre Rigaud", tr: "General Rigaud" }, correct: false },
            { text: { en: "General Sonthonax", tr: "General Sonthonax" }, correct: false }
          ],
          explanation: {
            en: "Rochambeau waged a war of extermination, drowning captives and using trained dogs to kill black soldiers.",
            tr: "Rochambeau, esirleri suda boğmak ve üzerlerine vahşi köpekler salmak gibi yöntemlerle soykırım savaşı yürütmüştür."
          }
        },
        {
          question: {
            en: "What event in May 1802 convinced Toussaint's generals that France intended to re-establish slavery?",
            tr: "Mayıs 1802'de gerçekleşen hangi olay, Haiti generallerinin Fransa'nın köleliği geri getireceğini anlamasını sağlamıştır?"
          },
          options: [
            { text: { en: "Napoleon officially reinstated slavery in Martinique and Réunion.", tr: "Napolyon'un Martinik ve Reunion'da köleliği ve köle ticaretini resmen geri getirmesi." }, correct: true },
            { text: { en: "Toussaint's arrest.", tr: "Toussaint'ın tutuklanması." }, correct: false },
            { text: { en: "The arrival of British reinforcements.", tr: "İngiliz ordusunun adaya çıkması." }, correct: false },
            { text: { en: "The burning of Cap-Français.", tr: "Cap-Français şehrinin yanması." }, correct: false }
          ],
          explanation: {
            en: "When Napoleon restored slavery in other French colonies, black generals realized Saint-Domingue was next.",
            tr: "Napolyon komşu Fransız adalarında köleliği resmen geri getirince generaller sıranın kendilerine geldiğini anladılar."
          }
        },
        {
          question: {
            en: "Who was the revolutionary general who united the black forces to win the final war and proclaim independence?",
            tr: "Savaşın son safhasında dağınık birlikleri birleştirerek bağımsızlığı ilan eden ve Haiti'nin kurucu babası olan lider kimdir?"
          },
          options: [
            { text: { en: "Jean-Jacques Dessalines", tr: "Jean-Jacques Dessalines" }, correct: true },
            { text: { en: "Toussaint Louverture", tr: "Toussaint Louverture" }, correct: false },
            { text: { en: "Henri Christophe", tr: "Henri Christophe" }, correct: false },
            { text: { en: "Alexandre Pétion", tr: "Alexandre Petion" }, correct: false }
          ],
          explanation: {
            en: "Dessalines led the army to victory at Vertières, declaring independence at Gonaïves on December 31, 1803.",
            tr: "Dessalines, Fransız ordusunu tamamen yenerek 31 Aralık 1803'te Gonaives'te bağımsızlık ilan etmiştir."
          }
        },
        {
          question: {
            en: "At which town was the Independence of Haiti officially proclaimed on December 31, 1803?",
            tr: "Haiti'nin bağımsızlık belgesi 31 Aralık 1803'te resmi olarak hangi kasabada imzalanmış ve ilan edilmiştir?"
          },
          options: [
            { text: { en: "Gonaïves", tr: "Gonaïves (Gonaives)" }, correct: true },
            { text: { en: "Cap-Français", tr: "Cap-Français" }, correct: false },
            { text: { en: "Port-au-Prince", tr: "Port-au-Prince" }, correct: false },
            { text: { en: "Saint-Marc", tr: "Saint-Marc" }, correct: false }
          ],
          explanation: {
            en: "Dessalines read the Act of Independence at Gonaïves, renaming the colony the indigenous name 'Haiti'.",
            tr: "Dessalines, Gonaives'te bağımsızlık bildirisini okumuş ve adaya Taino dilinde 'Haiti' adını geri vermiştir."
          }
        },
        {
          question: {
            en: "What indigenous Taino name did Dessalines choose for the newly independent nation in 1804?",
            tr: "Dessalines, bağımsızlığını ilan ettiği ülkeye yerli Taino dilinde hangi özgün adı vermiştir?"
          },
          options: [
            { text: { en: "Haiti (Ayiti)", tr: "Haiti (Ayiti)" }, correct: true },
            { text: { en: "Santo Domingo", tr: "Santo Domingo" }, correct: false },
            { text: { en: "Cibao", tr: "Cibao" }, correct: false },
            { text: { en: "Quisqueya", tr: "Quisqueya" }, correct: false }
          ],
          explanation: {
            en: "Haiti, or Ayiti, was the Taino name meaning 'mountainous land', rejecting all European nomenclature.",
            tr: "Haiti (Ayiti), Taino dilinde 'dağlık ülke' anlamına gelen yerli addır ve sömürge isimlerinin reddini simgeler."
          }
        },
        {
          question: {
            en: "How did Dessalines symbolically design the new Haitian national flag in May 1803?",
            tr: "Mayıs 1803'te Dessalines, Fransız sömürge bayrağını yırtarak yeni Haiti bayrağını nasıl tasarlamıştır?"
          },
          options: [
            { text: { en: "He ripped the white stripe out of the French tricolor, leaving blue and red.", tr: "Fransız bayrağındaki beyaz şeridi yırtıp atarak mavi ve kırmızı renkleri birleştirmiştir." }, correct: true },
            { text: { en: "He added a yellow star.", tr: "Üzerine sarı bir yıldız eklemiştir." }, correct: false },
            { text: { en: "He created a black and red stripe flag.", tr: "Siyah ve kırmızı şeritlerden oluşan bir bayrak yapmıştır." }, correct: false },
            { text: { en: "He painted a white cross.", tr: "Ortasına beyaz bir haç çizmiştir." }, correct: false }
          ],
          explanation: {
            en: "Ripping out the white symbolized the final ejection of white colonial rule under the motto 'Liberty or Death'.",
            tr: "Beyaz şeridin atılması, sömürgeci beyaz egemenliğinin tamamen reddedilip kovulmasını simgeliyordu."
          }
        },
        {
          question: {
            en: "In what year did Dessalines crown himself Emperor Jacques I of Haiti?",
            tr: "Jean-Jacques Dessalines, bağımsızlıktan sonra hangi yılda kendisini Haiti İmparatoru I. Jacques olarak taçlandırmıştır?"
          },
          options: [
            { text: { en: "1804 (October)", tr: "1804 (Ekim)" }, correct: true },
            { text: { en: "1803", tr: "1803" }, correct: false },
            { text: { en: "1805", tr: "1805" }, correct: false },
            { text: { en: "1806", tr: "1806" }, correct: false }
          ],
          explanation: {
            en: "Dessalines crowned himself Emperor in October 1804, matching Napoleon's imperial moves in France.",
            tr: "Dessalines, Napolyon'un adımlarına benzer şekilde Ekim 1804'te kendisini İmparator ilan etmiştir."
          }
        },
        {
          question: {
            en: "Which treaty in 1695 officially recognized French control of the western third of Hispaniola (Saint-Domingue)?",
            tr: "1695 yılında imzalanan hangi antlaşma ile İspanya, Hispaniola adasının batı üçte birini resmen Fransa'ya devretmiştir?"
          },
          options: [
            { text: { en: "Treaty of Ryswick", tr: "Ryswick Antlaşması (Treaty of Ryswick)" }, correct: true },
            { text: { en: "Treaty of Utrecht", tr: "Utrecht Antlaşması" }, correct: false },
            { text: { en: "Treaty of Tordesillas", tr: "Tordesillas Antlaşması" }, correct: false },
            { text: { en: "Treaty of Paris", tr: "Paris Antlaşması" }, correct: false }
          ],
          explanation: {
            en: "The Treaty of Ryswick ended the War of the Grand Alliance, validating French pirates' claims to the island.",
            tr: "Ryswick Antlaşması ile Fransa adadaki korsan yerleşimlerini yasallaştırmış ve sömürgeyi kurmuştur."
          }
        },
        {
          question: {
            en: "What was the name of the runaway slave leader who used poison against white planters in the 1750s?",
            tr: "1750'lerde beyaz plantasyon sahiplerini zehirleme kampanyası yürüten ünlü kaçak köle (Maron) lideri kimdir?"
          },
          options: [
            { text: { en: "François Mackandal", tr: "François Mackandal" }, correct: true },
            { text: { en: "Dutty Boukman", tr: "Dutty Boukman" }, correct: false },
            { text: { en: "Toussaint Louverture", tr: "Toussaint Louverture" }, correct: false },
            { text: { en: "Vincent Ogé", tr: "Vincent Ogé" }, correct: false }
          ],
          explanation: {
            en: "Mackandal was a charismatic maroon leader who organized a secret poisoning network before being burned at the stake.",
            tr: "Mackandal, kazığa bağlanarak yakılmadan önce sahipleri zehirleyen gizli bir direniş ağı kurmuştu."
          }
        },
        {
          question: {
            en: "Which group of whites in Saint-Domingue owned minor shops, worked as artisans, and hated both free mulattoes and big whites?",
            tr: "Sömürgede dükkan işleten, zanaatkarlık yapan ve hem melezlerden hem de büyük zenginlerden nefret eden beyaz zümre kimdir?"
          },
          options: [
            { text: { en: "Petit Blancs (Small Whites)", tr: "Küçük Beyazlar (Petit Blancs)" }, correct: true },
            { text: { en: "Grand Blancs", tr: "Büyük Beyazlar" }, correct: false },
            { text: { en: "Gens de Couleur", tr: "Gens de Couleur" }, correct: false },
            { text: { en: "Affranchis", tr: "Azatlılar (Affranchis)" }, correct: false }
          ],
          explanation: {
            en: "The Petit Blancs were poor whites who resented the wealth of free colored property owners and demanded racial caste laws.",
            tr: "Küçük Beyazlar, zengin melezlerin mülk edinmesini hazmedemeyen ve ırkçılık yasalarını savunan yoksul gruptu."
          }
        },
        {
          question: {
            en: "What was the main commercial trade rule ('Exclusif') imposed by France on Saint-Domingue?",
            tr: "Fransa'nın Saint-Domingue sömürgesine dayattığı ve yalnızca Fransa ile ticareti zorunlu kılan kuralın adı nedir?"
          },
          options: [
            { text: { en: "The Exclusif", tr: "Tekel Sözleşmesi (Exclusif)" }, correct: true },
            { text: { en: "Mercantilism Code", tr: "Merkantilizm Yasası" }, correct: false },
            { text: { en: "The Colonial Compact", tr: "Sömürge Anlaşması" }, correct: false },
            { text: { en: "The Free Trade Act", tr: "Serbest Ticaret Yasası" }, correct: false }
          ],
          explanation: {
            en: "The Exclusif forced planters to export sugarcane exclusively to France and import all goods in French ships.",
            tr: "Exclusif (Tekel), şeker üreticilerinin mallarını sadece Fransa'ya ve Fransız gemileriyle satmasını şart koşuyordu."
          }
        },
        {
          question: {
            en: "How did the French National assembly react initially to Vincent Ogé's rebellion and execution?",
            tr: "Fransa meclisi, Vincent Ogé isyanına ve idamına ilk olarak nasıl tepki göstermiştir?"
          },
          options: [
            { text: { en: "It granted voting rights to free people of color born of two free parents.", tr: "Yalnızca iki özgür ebeveynden doğan az sayıda özgür meleze oy hakkı verdi." }, correct: true },
            { text: { en: "It immediately abolished slavery in the colonies.", tr: "Sömürgelerde köleliği derhal kaldırdı." }, correct: false },
            { text: { en: "It sent an army to execute all mulattoes.", tr: "Tüm melezleri idam etmek için ordu gönderdi." }, correct: false },
            { text: { en: "It ignored the event completely.", tr: "Olayı tamamen görmezden geldi." }, correct: false }
          ],
          explanation: {
            en: "The assembly passed a limited decree granting franchise to only about 400 wealthy free men of color.",
            tr: "Meclis, yalnızca iki ebeveyni de özgür olan çok az sayıda meleze oy hakkı tanıyan sınırlı bir yasa çıkardı."
          }
        },
        {
          question: {
            en: "Which battle in November 1803 saw the final defeat of Rochambeau's French army by Dessalines' forces?",
            tr: "Kasım 1803'te Dessalines kuvvetlerinin Fransız general Rochambeau ordusunu kesin olarak yendiği tarihi muharebe hangisidir?"
          },
          options: [
            { text: { en: "Battle of Vertières", tr: "Vertières Savaşı (Vertieres)" }, correct: true },
            { text: { en: "Battle of Valmy", tr: "Valmy Savaşı" }, correct: false },
            { text: { en: "Battle of Saratoga", tr: "Saratoga Savaşı" }, correct: false },
            { text: { en: "Battle of Ravine-à-Couleuvres", tr: "Ravine-a-Couleuvres Savaşı" }, correct: false }
          ],
          explanation: {
            en: "The Battle of Vertières was the final showdown where French troops were decisively crushed, forcing their evacuation.",
            tr: "Vertières Savaşı, Fransız ordusunun kesin olarak imha edildiği ve adayı terk etmek zorunda kaldığı son savaştır."
          }
        },
        {
          question: {
            en: "What was the primary global economic consequence of the independence of Haiti?",
            tr: "Haiti'nin bağımsızlığını kazanmasının küresel ekonomideki en büyük doğrudan sonucu ne olmuştur?"
          },
          options: [
            { text: { en: "Other nations expanded sugar production in Cuba and Brazil to fill the market void.", tr: "Piyasa boşluğunu doldurmak için Küba ve Brezilya'da şeker üretimi hızla genişledi." }, correct: true },
            { text: { en: "The price of sugar dropped globally.", tr: "Şeker fiyatları dünya genelinde düştü." }, correct: false },
            { text: { en: "Global slave trade ended instantly.", tr: "Küresel köle ticareti anında sona erdi." }, correct: false },
            { text: { en: "Haiti became the wealthiest trading nation in America.", tr: "Haiti Amerika'nın en zengin ticaret ülkesi oldu." }, correct: false }
          ],
          explanation: {
            en: "Haiti's sugar production collapsed. Slavers in Cuba and Brazil expanded their industries to meet the high demand.",
            tr: "Haiti'de şeker üretimi çöktü; bu boşluğu doldurmak için Küba ve Brezilya'da köle şeker üretimi patladı."
          }
        },
        {
          question: {
            en: "Which French writer and member of the 'Société des Amis des Noirs' actively campaigned for colonial reform in Paris?",
            tr: "Paris'te sömürge reformları ve melez hakları için lobi yürüten 'Amis des Noirs' üyesi ünlü rahip ve yazar kimdir?"
          },
          options: [
            { text: { en: "Abbé Henri Grégoire", tr: "Abbe Henri Gregoire" }, correct: true },
            { text: { en: "Abbé Raynal", tr: "Abbe Raynal" }, correct: false },
            { text: { en: "Vincent Ogé", tr: "Vincent Ogé" }, correct: false },
            { text: { en: "Jean-Baptiste Belley", tr: "Jean-Baptiste Belley" }, correct: false }
          ],
          explanation: {
            en: "Abbé Grégoire published treatises defending racial equality and arguing against colonial slaveholders.",
            tr: "Abbe Gregoire, ırksal eşitliği savunan yazılar yazmış ve sömürgeci köle lobisine karşı mücadele etmiştir."
          }
        },
        {
          question: {
            en: "What happened to the white French population remaining in Haiti after the declaration of independence in 1804?",
            tr: "1804 bağımsızlık ilanından sonra Haiti'de kalan beyaz Fransız nüfusa ne olmuştur?"
          },
          options: [
            { text: { en: "Dessalines ordered their systematic massacre, with few exceptions.", tr: "Dessalines, çok az istisna dışında hepsinin sistemli şekilde katledilmesini emretti." }, correct: true },
            { text: { en: "They were granted full citizenship and kept their lands.", tr: "Hepsine vatandaşlık verildi ve toprakları korundu." }, correct: false },
            { text: { en: "They emigrated peacefully to France.", tr: "Barışçıl bir şekilde Fransa'ya göç ettiler." }, correct: false },
            { text: { en: "They became sharecroppers on state farms.", tr: "Devlet çiftliklerinde ortakçı işçi yapıldılar." }, correct: false }
          ],
          explanation: {
            en: "Dessalines carried out a bloody purge of remaining whites to prevent any return of colonial power.",
            tr: "Dessalines, sömürgecilerin geri dönmesini önlemek için adada kalan beyazların temizlenmesini emretmiştir."
          }
        },
        {
          question: {
            en: "Which neighboring island served as a British naval base from which they aided the Haitian forces in 1803?",
            tr: "1803'te Haiti güçlerine silah yardımı yapan İngiliz donanmasının konuşlandığı komşu ada hangisidir?"
          },
          options: [
            { text: { en: "Jamaica (Kingston)", tr: "Jamaika (Kingston)" }, correct: true },
            { text: { en: "Cuba (Havana)", tr: "Küba (Havana)" }, correct: false },
            { text: { en: "Puerto Rico", tr: "Porto Riko" }, correct: false },
            { text: { en: "Martinique", tr: "Martinik" }, correct: false }
          ],
          explanation: {
            en: "British naval forces in Jamaica blockaded French supply lines, arming Dessalines to defeat Rochambeau.",
            tr: "Jamaika'daki İngiliz donanması, Fransız gemilerini ablukaya alıp Dessalines'i silahlandırarak zafere katkı sundu."
          }
        },
        {
          question: {
            en: "In what year did the French king Louis XIV issue the Code Noir regulating slave control in the colonies?",
            tr: "Fransız kralı XIV. Louis, sömürgelerdeki köle denetimlerini düzenleyen Kara Kanun'u (Code Noir) hangi yılda yayınlamıştır?"
          },
          options: [
            { text: { en: "1685", tr: "1685" }, correct: true },
            { text: { en: "1659", tr: "1659" }, correct: false },
            { text: { en: "1715", tr: "1715" }, correct: false },
            { text: { en: "1750", tr: "1750" }, correct: false }
          ],
          explanation: {
            en: "The Code Noir was signed by Louis XIV in 1685, setting harsh rules for slave control and baptism.",
            tr: "Code Noir, 1685'te XIV. Louis tarafından imzalanarak sömürge köle denetiminin hukuki çerçevesini çizmiştir."
          }
        },
        {
          question: {
            en: "What was the primary language of communication created by the enslaved people of Saint-Domingue?",
            tr: "Farklı kabilelerden gelen esirlerin Saint-Domingue'de geliştirdiği ortak iletişim dili hangisidir?"
          },
          options: [
            { text: { en: "Haitian Creole", tr: "Haiti Kreyol Dili (Haitian Creole)" }, correct: true },
            { text: { en: "French patois", tr: "Fransız Patoisi" }, correct: false },
            { text: { en: "Nahuatl", tr: "Nahuatl" }, correct: false },
            { text: { en: "Spanish-Creole", tr: "İspanyol Kreyolü" }, correct: false }
          ],
          explanation: {
            en: "Haitian Creole synthesized French vocabulary with West African grammar structures, forming an autonomous language.",
            tr: "Haiti Kreyolü, Fransızca kelimeleri Afrika dillerinin gramer yapısıyla birleştiren özgün bir dildir."
          }
        },
        {
          question: {
            en: "Which crop did Saint-Domingue produce more than any other region, supplying 60% of European consumption?",
            tr: "Saint-Domingue sömürgesi, Avrupa'da tüketilen miktarın %60'ını karşılayarak hangi üründe dünya lideri olmuştur?"
          },
          options: [
            { text: { en: "Coffee", tr: "Kahve (Coffee)" }, correct: true },
            { text: { en: "Sugar", tr: "Şeker" }, correct: false },
            { text: { en: "Tobacco", tr: "Tütün" }, correct: false },
            { text: { en: "Indigo", tr: "Çivit Otu" }, correct: false }
          ],
          explanation: {
            en: "Saint-Domingue produced 60% of the coffee and 40% of the sugar consumed in Europe in the late 18th century.",
            tr: "18. yüzyıl sonlarında sömürge, Avrupa kahve tüketiminin %60'ını, şeker tüketiminin %40'ını tek başına üretiyordu."
          }
        },
        {
          question: {
            en: "What was the main legal argument Vincent Ogé used in Paris to demand voting rights for free men of color?",
            tr: "Vincent Ogé, Paris meclisinde melezler için oy hakkı talep ederken hangi yasal argümanı öne sürmüştür?"
          },
          options: [
            { text: { en: "The Declaration of the Rights of Man applied to all free citizens, regardless of race.", tr: "İnsan Hakları Bildirisi'nin ırk ayrımı gözetmeksizin tüm özgür yurttaşları kapsadığı tezi." }, correct: true },
            { text: { en: "Slaves should be emancipated immediately.", tr: "Kölelerin derhal serbest bırakılması gerektiği tezi." }, correct: false },
            { text: { en: "Mulattoes owned more land than whites.", tr: "Melezlerin beyazlardan daha çok toprağa sahip olduğu tezi." }, correct: false },
            { text: { en: "He represented the French King directly.", tr: "Doğrudan Fransız Kralı'nı temsil ettiği tezi." }, correct: false }
          ],
          explanation: {
            en: "Ogé argued that free property-owners of color were citizens under the terms of the 1789 Declaration.",
            tr: "Ogé, mülk sahibi özgür melezlerin 1789 Bildirisi'ne göre eşit yurttaşlık haklarına sahip olduğunu savundu."
          }
        },
        {
          question: {
            en: "Which group of white residents supported Vincent Ogé's brutal execution to defend the racial caste system?",
            tr: "Irksal kast düzenini savunmak için Vincent Ogé'nin tekerlekte kırılması şeklinde vahşice idam edilmesini en çok kim destekledi?"
          },
          options: [
            { text: { en: "White colonial planters and assembly members in Le Cap.", tr: "Le Cap'teki beyaz plantasyon sahipleri ve sömürge meclisi üyeleri." }, correct: true },
            { text: { en: "Jacobin politicians in Paris.", tr: "Paris'teki Jakoben siyasetçiler." }, correct: false },
            { text: { en: "The free people of color.", tr: "Özgür melezler." }, correct: false },
            { text: { en: "French royal commissioners.", tr: "Fransız kraliyet komiserleri." }, correct: false }
          ],
          explanation: {
            en: "Planters wanted to make an example of Ogé to terrify any other free colored people demanding equality.",
            tr: "Sömürgeci beyazlar, eşitlik isteyen diğer melezleri korkutmak amacıyla Ogé'yi ibretlik şekilde idam ettirdiler."
          }
        },
        {
          question: {
            en: "Approximately how many sugar plantations were burned during the first week of the August 1791 slave uprising?",
            tr: "Ağustos 1791'deki köle ayaklanmasının ilk haftasında yaklaşık kaç adet şeker plantasyonu ateşe verilmiştir?"
          },
          options: [
            { text: { en: "Over 100 plantations", tr: "100'den fazla plantasyon" }, correct: true },
            { text: { en: "10 plantations", tr: "10 plantasyon" }, correct: false },
            { text: { en: "500 plantations", tr: "500 plantasyon" }, correct: false },
            { text: { en: "50 plantations", tr: "50 plantasyon" }, correct: false }
          ],
          explanation: {
            en: "Enslaved workers targeted sugar estates systematically, burning over 100 plantations in the northern plains.",
            tr: "Ayaklanan köleler ilk hafta içinde kuzey ovalarındaki 100'den fazla şeker plantasyonunu ateşe verdi."
          }
        },
        {
          question: {
            en: "What was the name of the mulatto general who controlled the southern department of Saint-Domingue, later defeated by Toussaint?",
            tr: "Sömürgenin güney eyaletini kontrol eden ve daha sonra Toussaint tarafından yenilgiye uğratılan melez general kimdir?"
          },
          options: [
            { text: { en: "André Rigaud", tr: "Andre Rigaud" }, correct: true },
            { text: { en: "Vincent Ogé", tr: "Vincent Ogé" }, correct: false },
            { text: { en: "Alexandre Pétion", tr: "Alexandre Petion" }, correct: false },
            { text: { en: "Jean-Jacques Dessalines", tr: "Jean-Jacques Dessalines" }, correct: false }
          ],
          explanation: {
            en: "Rigaud led the mulatto forces in the 'War of the Knives' civil conflict against Toussaint's black army in 1799.",
            tr: "Rigaud, 1799'da Toussaint'ın siyah ordusuna karşı yapılan 'Bıçaklar Savaşı' melez ordusunun lideriydi."
          }
        },
        {
          question: {
            en: "Who was the French minister of marine who led the pro-colonial lobby (Club Massiac) defending slavery in Paris?",
            tr: "Paris'te köleliği ve sömürge çıkarlarını savunan 'Club Massiac' lobisinin önde gelen isimlerinden biri kimdir?"
          },
          options: [
            { text: { en: "Moreau de Saint-Méry", tr: "Moreau de Saint-Mery" }, correct: true },
            { text: { en: "Abbé Grégoire", tr: "Abbe Gregoire" }, correct: false },
            { text: { en: "Lafayette", tr: "Lafayette" }, correct: false },
            { text: { en: "Robespierre", tr: "Robespierre" }, correct: false }
          ],
          explanation: {
            en: "Saint-Mery classified 128 racial combinations and actively lobbied against granting rights to free people of color.",
            tr: "Saint-Mery, melezlerin haklarını engellemek ve sömürge çıkarlarını korumak için yoğun lobi yürütmüştür."
          }
        },
        {
          question: {
            en: "Which French civil commissioner was Sonthonax's main political rival in Saint-Domingue, who was eventually expelled by Toussaint?",
            tr: "Saint-Domingue'de Sonthonax'ın en büyük siyasi rakibi olan ve sonunda Toussaint tarafından adadan sürülen Fransız sivil komiser kimdir?"
          },
          options: [
            { text: { en: "Gabriel d'Hédouville", tr: "Gabriel d'Hédouville" }, correct: true },
            { text: { en: "Léger-Félicité Sonthonax", tr: "Leger-Felicite Sonthonax" }, correct: false },
            { text: { en: "General Leclerc", tr: "General Leclerc" }, correct: false },
            { text: { en: "Moreau de Saint-Méry", tr: "Moreau de Saint-Mery" }, correct: false }
          ],
          explanation: {
            en: "Hédouville attempted to undermine Toussaint by sowing division between black and mulatto generals, but failed.",
            tr: "Hédouville, siyah ve melez generaller arasında ikilik çıkararak Toussaint'ın gücünü kırmaya çalışmış ancak başarısız olmuştur."
          }
        },
        {
          question: {
            en: "Who was the general of mixed race who controlled the southern peninsula and lost the Civil War of 1799 to Toussaint?",
            tr: "Güney yarımadayı kontrol eden ve 1799 yılındaki İç Savaş'ı Toussaint'a kaybeden melez general kimdir?"
          },
          options: [
            { text: { en: "André Rigaud", tr: "Andre Rigaud" }, correct: true },
            { text: { en: "Alexandre Pétion", tr: "Alexandre Pétion" }, correct: false },
            { text: { en: "Henri Christophe", tr: "Henri Christophe" }, correct: false },
            { text: { en: "Vincent Ogé", tr: "Vincent Ogé" }, correct: false }
          ],
          explanation: {
            en: "André Rigaud fought Toussaint in the War of the Knives, representing the mixed-race elite, but was defeated.",
            tr: "André Rigaud, melez elitleri temsil ederek Toussaint'a karşı Bıçaklar Savaşı'nda savaşmış ancak yenilmiştir."
          }
        },
        {
          question: {
            en: "Which revolutionary leader partition Haiti after Dessalines' death, ruling the southern Republic of Haiti?",
            tr: "Dessalines'in ölümünden sonra Haiti'yi ikiye bölerek güneydeki Haiti Cumhuriyeti'ni yöneten melez lider kimdir?"
          },
          options: [
            { text: { en: "Alexandre Pétion", tr: "Alexandre Pétion" }, correct: true },
            { text: { en: "Henri Christophe", tr: "Henri Christophe" }, correct: false },
            { text: { en: "André Rigaud", tr: "Andre Rigaud" }, correct: false },
            { text: { en: "Jean-Jacques Dessalines", tr: "Jean-Jacques Dessalines" }, correct: false }
          ],
          explanation: {
            en: "Pétion ruled the southern republic, establishing a peasant land distribution system, while Christophe ruled the north.",
            tr: "Pétion güney cumhuriyetini yönetip toprak dağıtırken, Christophe ise kuzeyde krallık kurup plantasyon düzenini sürdürmüştür."
          }
        },
        {
          question: {
            en: "What was the name of the brutal civil war fought in 1799-1800 between Toussaint's black forces and Rigaud's mixed-race forces?",
            tr: "1799-1800 yıllarında Toussaint'ın siyah ordusu ile Rigaud'nun melez ordusu arasında yapılan kanlı iç savaşın adı nedir?"
          },
          options: [
            { text: { en: "The War of the Knives", tr: "Bıçaklar Savaşı (War of the Knives)" }, correct: true },
            { text: { en: "The War of the Castes", tr: "Kastlar Savaşı" }, correct: false },
            { text: { en: "The Maroon Uprising", tr: "Maron Ayaklanması" }, correct: false },
            { text: { en: "The Saint-Domingue Rebellion", tr: "Saint-Domingue İsyanı" }, correct: false }
          ],
          explanation: {
            en: "The War of the Knives (Guerre des Couteaux) was a brutal struggle for regional and racial supremacy in the colony.",
            tr: "Bıçaklar Savaşı (Guerre des Couteaux), kolonide bölgesel ve ırksal üstünlük sağlamak için yapılan kanlı bir savaştı."
          }
        },
        {
          question: {
            en: "Prior to 1789, how did Saint-Domingue's export wealth compare to the total exports of all British North American colonies?",
            tr: "1789 öncesinde Saint-Domingue'in ihraç zenginliği, tüm İngiliz Kuzey Amerika kolonilerinin toplam ihracatı ile nasıl karşılaştırılırdı?"
          },
          options: [
            { text: { en: "Saint-Domingue's exports exceeded all 13 British colonies combined.", tr: "Saint-Domingue'in ihracatı, 13 İngiliz kolonisinin toplamından daha fazlaydı." }, correct: true },
            { text: { en: "They were roughly equal.", tr: "Kabaca eşitti." }, correct: false },
            { text: { en: "The 13 colonies exported ten times more.", tr: "13 koloni on kat fazla ihraç ediyordu." }, correct: false },
            { text: { en: "Saint-Domingue had negligible exports.", tr: "Saint-Domingue'in ihracatı önemsiz düzeydeydi." }, correct: false }
          ],
          explanation: {
            en: "Saint-Domingue was the wealthiest colony in the world, exporting sugar and coffee worth more than the combined output of British America.",
            tr: "Saint-Domingue dünyanın en zengin sömürgesiydi ve tek başına tüm 13 İngiliz kolonisinden daha fazla zenginlik ihraç ediyordu."
          }
        },
        {
          question: {
            en: "Which general of Toussaint led the heroic defense of the fort during the famous Siege of Crête-à-Pierrot in 1802?",
            tr: "1802 yılındaki ünlü Crête-à-Pierrot Kuşatması'nda kalenin kahramanca savunmasını yöneten Toussaint generali kimdir?"
          },
          options: [
            { text: { en: "Jean-Jacques Dessalines", tr: "Jean-Jacques Dessalines" }, correct: true },
            { text: { en: "Henri Christophe", tr: "Henri Christophe" }, correct: false },
            { text: { en: "Charles Belair", tr: "Charles Belair" }, correct: false },
            { text: { en: "Alexandre Pétion", tr: "Alexandre Pétion" }, correct: false }
          ],
          explanation: {
            en: "Dessalines led the defense of Crête-à-Pierrot, executing a daring breakout despite being outnumbered by French forces.",
            tr: "Dessalines, Fransız ordusuna karşı Crête-à-Pierrot kalesini savunmuş ve kuşatmayı yararak efsanevi bir geri çekilme yapmıştır."
          }
        },
        {
          question: {
            en: "In what year did France finally recognize Haitian independence in exchange for a crushing 150 million franc indemnity?",
            tr: "Fransa, ağır bir 150 milyon franklık tazminat karşılığında Haiti'nin bağımsızlığını hangi yılda resmen tanımıştır?"
          },
          options: [
            { text: { en: "1825", tr: "1825" }, correct: true },
            { text: { en: "1804", tr: "1804" }, correct: false },
            { text: { en: "1848", tr: "1848" }, correct: false },
            { text: { en: "1860", tr: "1860" }, correct: false }
          ],
          explanation: {
            en: "King Charles X of France sent warships in 1825 to force Haiti into paying the indemnity for lost colonist properties.",
            tr: "Fransa Kralı X. Charles, 1825'te savaş gemileri göndererek sömürgecilerin mülk kayıpları için Haiti'yi tazminata zorlamıştır."
          }
        },
        {
          question: {
            en: "What did the Haitian Constitution of 1805 declare regarding the official racial classification of all citizens?",
            tr: "1805 Haiti Anayasası, tüm vatandaşların resmi ırk sınıflandırması hakkında ne hükmetmiştir?"
          },
          options: [
            { text: { en: "All citizens were declared to be 'black' to eliminate racial hierarchy.", tr: "Irksal kast sistemini yıkmak için tüm vatandaşlar 'siyah' ilan edilmiştir." }, correct: true },
            { text: { en: "Citizens were divided by skin tone categories.", tr: "Vatandaşlar ten rengi kategorilerine bölünmüştür." }, correct: false },
            { text: { en: "Only those born in Africa were citizens.", tr: "Sadece Afrika'da doğanlar vatandaş kabul edilmiştir." }, correct: false },
            { text: { en: "White landowners kept their European status.", tr: "Beyaz toprak sahipleri Avrupalı statüsünü korumuştur." }, correct: false }
          ],
          explanation: {
            en: "The 1805 constitution declared all Haitians 'black' (noir) as a political statement to forge national unity.",
            tr: "1805 anayasası, sömürgeci kast sisteminin izlerini silmek için tüm Haiti vatandaşlarını 'siyah' ilan etmiştir."
          }
        },
        {
          question: {
            en: "Which leader of Toussaint's army surrendered to Leclerc but later defected to lead the final victory with Dessalines?",
            tr: "Toussaint'ın ordusunda yer alıp Leclerc'e teslim olan, ancak daha sonra taraf değiştirerek Dessalines ile zafere yürüyen komutan kimdir?"
          },
          options: [
            { text: { en: "Henri Christophe", tr: "Henri Christophe" }, correct: true },
            { text: { en: "Vincent Ogé", tr: "Vincent Ogé" }, correct: false },
            { text: { en: "André Rigaud", tr: "Andre Rigaud" }, correct: false },
            { text: { en: "Gabriel d'Hédouville", tr: "Gabriel d'Hédouville" }, correct: false }
          ],
          explanation: {
            en: "Henri Christophe surrendered to Leclerc in 1802 but defected in October after learning of plans to restore slavery.",
            tr: "Henri Christophe, 1802'de Leclerc'e teslim olmuş ancak köleliğin geri getirileceğini öğrenince Ekim'de taraf değiştirmiştir."
          }
        },
        {
          question: {
            en: "Who was the French general and politician who drafted the famous racial hierarchy table containing 128 combinations?",
            tr: "Paris'teki köleci lobide yer alan ve 128 farklı ırk kombinasyonu içeren ırkçı hiyerarşi tablosunu hazırlayan yazar kimdir?"
          },
          options: [
            { text: { en: "Moreau de Saint-Mery", tr: "Moreau de Saint-Mery" }, correct: true },
            { text: { en: "Abbé Raynal", tr: "Abbe Raynal" }, correct: false },
            { text: { en: "General Rochambeau", tr: "General Rochambeau" }, correct: false },
            { text: { en: "Gabriel d'Hédouville", tr: "Gabriel d'Hédouville" }, correct: false }
          ],
          explanation: {
            en: "Moreau de Saint-Mery constructed a detailed mathematical table of racial purity to justify mulatto disenfranchisement.",
            tr: "Moreau de Saint-Mery, melezlerin haklarını ellerinden almak için matematiksel bir ırk saflığı tablosu hazırlamıştır."
          }
        }
      ]
    }
  },

  // Coordinates and path definitions mapped to real Latitudes and Longitudes
  map: {
    markers: {
      seville: { coords: [37.3891, -5.9845], label: { en: 'Seville', tr: 'Sevilla' }, placement: 'bottom' },
      lisbon: { coords: [38.7223, -9.1393], label: { en: 'Lisbon', tr: 'Lizbon' }, placement: 'left' },
      london: { coords: [51.5074, -0.1278], label: { en: 'London', tr: 'Londra' }, placement: 'right' },
      bristol: { coords: [51.4545, -2.5879], label: { en: 'Bristol', tr: 'Bristol' }, placement: 'left' },
      liverpool: { coords: [53.4084, -2.9916], label: { en: 'Liverpool', tr: 'Liverpool' }, placement: 'top' },
      paris: { coords: [48.8566, 2.3522], label: { en: 'Paris', tr: 'Paris' }, placement: 'top' },
      nantes: { coords: [47.2184, -1.5536], label: { en: 'Nantes', tr: 'Nantes' }, placement: 'left' },
      bordeaux: { coords: [44.8378, -0.5792], label: { en: 'Bordeaux', tr: 'Bordeaux' }, placement: 'left' },
      naples: { coords: [40.8518, 14.2681], label: { en: 'Naples', tr: 'Napoli' }, placement: 'right' },
      valmy: { coords: [49.0833, 4.7667], label: { en: 'Valmy', tr: 'Valmy' }, placement: 'top' },
      varennes: { coords: [49.2069, 5.0331], label: { en: 'Varennes', tr: 'Varennes' }, placement: 'right' },
      versailles: { coords: [48.8014, 2.1301], label: { en: 'Versailles', tr: 'Versay' }, placement: 'bottom' },
      
      virginia: { coords: [37.2089, -76.7744], label: { en: 'Virginia (Jamestown)', tr: 'Virginia (Jamestown)' }, placement: 'left' },
      boston: { coords: [42.3601, -71.0589], label: { en: 'Boston', tr: 'Boston' }, placement: 'top' },
      philadelphia: { coords: [39.9526, -75.1652], label: { en: 'Philadelphia', tr: 'Filadelfiya' }, placement: 'left' },
      yorktown: { coords: [37.2388, -76.5097], label: { en: 'Yorktown', tr: 'Yorktown' }, placement: 'bottom' },
      maryland: { coords: [38.9784, -76.4922], label: { en: 'Maryland', tr: 'Maryland' }, placement: 'right' },
      carolina: { coords: [32.7765, -79.9311], label: { en: 'Carolinas', tr: 'Carolinalar' }, placement: 'bottom' },
      
      tenochtitlan: { coords: [19.4326, -99.1332], label: { en: 'Tenochtitlan (Mexico)', tr: 'Tenochtitlan (Meksika)' }, placement: 'left' },
      santo_domingo: { coords: [18.4861, -69.9312], label: { en: 'Santo Domingo', tr: 'Santo Domingo' }, placement: 'right' },
      cap_francais: { coords: [19.7599, -72.2008], label: { en: 'Cap-Français', tr: 'Cap-Français' }, placement: 'top' },
      port_au_prince: { coords: [18.5392, -72.3350], label: { en: 'Port-au-Prince', tr: 'Port-au-Prince' }, placement: 'bottom' },
      gonaives: { coords: [19.4470, -72.6826], label: { en: 'Gonaives', tr: 'Gonaives' }, placement: 'left' },
      havana: { coords: [23.1136, -82.3666], label: { en: 'Havana', tr: 'Havana' }, placement: 'top' },
      esmeraldas: { coords: [0.9682, -79.6517], label: { en: 'Esmeraldas (Colombia)', tr: 'Esmeraldas (Kolombiya)' }, placement: 'left' },
      andes: { coords: [-13.5319, -71.9675], label: { en: 'Andes Mountains', tr: 'And Dağları' }, placement: 'left' },
      brazil: { coords: [-12.9777, -38.5016], label: { en: 'Bahia (Brazil)', tr: 'Bahia (Brezilya)' }, placement: 'right' },
      potosi: { coords: [-19.5888, -65.7531], label: { en: 'Potosí', tr: 'Potosi' }, placement: 'bottom' },
      
      elmina: { coords: [5.0831, -1.3503], label: { en: 'Elmina Castle', tr: 'Elmina Kalesi' }, placement: 'bottom' },
      benin: { coords: [6.3631, 2.0850], label: { en: 'Bight of Benin', tr: 'Benin Körfezi' }, placement: 'right' },
      gambia: { coords: [13.4616, -16.5779], label: { en: 'River Gambia', tr: 'Gambia Nehri' }, placement: 'left' },
      luanda: { coords: [-8.8390, 13.2894], label: { en: 'Luanda (Angola)', tr: 'Luanda (Angola)' }, placement: 'right' },
      congo: { coords: [-5.8033, 13.4500], label: { en: 'Congo Free State', tr: 'Kongo Bağımsız Devleti' }, placement: 'bottom' },
      
      goa: { coords: [15.4909, 73.8278], label: { en: 'Goa (India)', tr: 'Goa (Hindistan)' }, placement: 'right' },
      china: { coords: [23.1291, 113.2644], label: { en: 'Canton (China)', tr: 'Kanton (Çin)' }, placement: 'top' },
      ireland: { coords: [53.1424, -7.6921], label: { en: 'Ireland', tr: 'İrlanda' }, placement: 'left' },
      valladolid: { coords: [41.6523, -4.7286], label: { en: 'Valladolid (Spain)', tr: 'Valladolid (İspanya)' }, placement: 'top' },
      jura: { coords: [46.8722, 6.3725], label: { en: 'Jura (France)', tr: 'Jura (Fransa)' }, placement: 'right' },
      kingston: { coords: [17.9714, -76.7936], label: { en: 'Kingston (Jamaica)', tr: 'Kingston (Jamaika)' }, placement: 'bottom' }
    },
    
    routes: {
      columbian_exchange_east: {
        coords: [[18.4861, -69.9312], [28.0, -50.0], [35.0, -25.0], [37.3891, -5.9845]],
        label: { en: 'New World Crops & Syphilis', tr: 'Yeni Dünya Mahsulleri ve Frengi' },
        color: '#10b981'
      },
      columbian_exchange_west: {
        coords: [[37.3891, -5.9845], [28.0, -16.0], [20.0, -45.0], [18.4861, -69.9312]],
        label: { en: 'Old World Crops, Livestock & Diseases', tr: 'Eski Dünya Mahsulleri, Evcil Hayvanlar ve Hastalıklar' },
        color: '#ef4444'
      },
      atlantic_winds_loop: {
        coords: [[38.7223, -9.1393], [28.0, -16.0], [15.0, -45.0], [18.4861, -69.9312], [37.2089, -76.7744], [45.0, -45.0], [49.5, -6.0], [50.5, 1.5], [51.5074, -0.1278]],
        label: { en: 'Atlantic Wind & Current System', tr: 'Atlantik Rüzgarları ve Akıntı Sistemi' },
        color: '#3b82f6'
      },
      treasure_fleet: {
        coords: [[-19.5888, -65.7531], [-12.0464, -77.0428], [9.0, -79.5], [10.0, -78.0], [18.4861, -69.9312], [32.0, -45.0], [37.3891, -5.9845]],
        label: { en: 'Treasure Fleets (Gold & Silver)', tr: 'Hazine Filoları (Altın ve Gümüş)' },
        color: '#d97706'
      },
      crop_flow_east: {
        coords: [[37.2089, -76.7744], [48.0, -40.0], [51.5074, -0.1278], [38.0, -10.0], [15.0, -25.0], [-35.0, 18.0], [-15.0, 45.0], [5.0, 80.0], [23.1291, 113.2644]],
        label: { en: 'Maize and Tobacco Flow to Asia', tr: 'Mısır ve Tütünün Asya\'ya Akışı' },
        color: '#10b981'
      },
      sugar_flow: {
        coords: [[38.7223, -9.1393], [25.0, -40.0], [18.4861, -69.9312], [0.0, -50.0], [-12.9777, -38.5016], [15.0, -30.0], [47.2184, -1.5536]],
        label: { en: 'Sugar Flow & Trade Rivalry', tr: 'Şeker Akışı ve Ticari Rekabet' },
        color: '#ec4899'
      },
      disease_flow_west: {
        coords: [[37.3891, -5.9845], [28.0, -16.0], [18.4861, -69.9312]],
        label: { en: 'Smallpox & Measles Vector', tr: 'Çiçek ve Kızamık Salgın Yolu' },
        color: '#ef4444'
      },
      disease_flow_east: {
        coords: [[18.4861, -69.9312], [32.0, -40.0], [37.7, -9.1], [40.8518, 14.2681]],
        label: { en: 'Syphilis Vector (Naples Campaign)', tr: 'Frengi Salgın Yolu (Napoli Seferi)' },
        color: '#e11d48'
      },
      quinine_flow: {
        coords: [[-13.5319, -71.9675], [15.0, -60.0], [40.0, -30.0], [51.5074, -0.1278], [49.5, -6.0], [38.0, -10.0], [15.0, -25.0], [13.4616, -16.5779]],
        label: { en: 'Quinine Imperial Pipeline', tr: 'Kinin Sömürge İletim Yolu' },
        color: '#0d9488'
      },
      middle_passage: {
        coords: [[-8.8390, 13.2894], [5.0831, -1.3503], [18.4861, -69.9312], [37.2089, -76.7744]],
        label: { en: 'The Middle Passage (Slaves)', tr: 'Orta Geçit (Köle Taşımacılığı)' },
        color: '#d97706'
      },
      labor_shift_flow: {
        coords: [[13.4616, -16.5779], [15.0, -40.0], [18.4861, -69.9312]],
        label: { en: 'Wolof & Fula Skilled Herders Shift', tr: 'Uzman Wolof ve Fula Sığırcıların Nakli' },
        color: '#d97706'
      },
      sugar_routes: {
        coords: [[5.0831, -1.3503], [12.0, -35.0], [18.4861, -69.9312], [-5.0, -34.0], [-12.9777, -38.5016]],
        label: { en: 'Sugar Slave Delivery Lanes', tr: 'Şeker Köle Nakil Yolları' },
        color: '#b45309'
      },
      triangular_trade_guns: {
        coords: [[53.4084, -2.9916], [51.5, -6.0], [38.0, -10.0], [30.0, -15.0], [5.0831, -1.3503], [18.4861, -69.9312]],
        label: { en: 'Guns/Textiles to Africa, Slaves to Americas', tr: 'Afrika\'ya Silah/Tekstil, Amerika\'ya Köle' },
        color: '#ef4444'
      },
      middle_passage_detail: {
        coords: [[5.0831, -1.3503], [12.0, -35.0], [18.4861, -69.9312]],
        label: { en: 'Branded Cargo Middle Passage', tr: 'Damgalanmış Kargo Orta Geçidi' },
        color: '#d97706'
      },
      blockade_lines: {
        coords: [[43.36, -69.5], [37.2, -75.5], [32.7, -79.0]],
        label: { en: 'British Royal Navy Blockade (1775)', tr: 'İngiliz Kraliyet Donanması Ablukası (1775)' },
        color: '#ef4444'
      },
      french_navy_route: {
        coords: [[47.2184, -1.5536], [35.0, -45.0], [37.2388, -76.5097]],
        label: { en: 'Admiral de Grasse Fleet to Yorktown (1781)', tr: 'Amiral de Grasse Filosunun Yorktown Seferi (1781)' },
        color: '#2563eb'
      },
      revolutionary_ideas_flow: {
        coords: [[39.9526, -75.1652], [45.0, -40.0], [48.8566, 2.3522]],
        label: { en: 'Declaration of Rights & Veterans Return', tr: 'Haklar Bildirisi ve Gazilerin Dönüşü' },
        color: '#8b5cf6'
      },
      foreign_invasion_routes: {
        coords: [[48.2, 16.3], [50.1, 8.6], [49.0833, 4.7667], [48.8566, 2.3522]],
        label: { en: 'Austro-Prussian Invasion stopped at Valmy', tr: 'Valmy\'de Durdurulan Avusturya-Prusya İstilası' },
        color: '#dc2626'
      },
      toussaint_switch: {
        coords: [[48.8566, 2.3522], [35.0, -40.0], [19.4470, -72.6826]],
        label: { en: 'Toussaint Joins France after 1794 Decree', tr: 'Toussaint 1794 Kararından Sonra Fransa\'ya Katılır' },
        color: '#0d9488'
      },
      leclerc_expedition: {
        coords: [[48.3903, -4.4861], [35.0, -40.0], [19.7599, -72.2008]],
        label: { en: 'Napoleon\'s 20,000 Troops Leclerc Fleet', tr: 'Napolyon\'un 20.000 Kişilik Leclerc Donanması' },
        color: '#dc2626'
      },
      british_aid_blockade: {
        coords: [[17.9714, -76.7936], [18.4, -74.5], [19.8, -73.4], [19.7599, -72.2008]],
        label: { en: 'British Fleet Arms Dessalines Rebels (1803)', tr: 'İngiliz Donanmasının Dessalines\'e Silah Yardımı (1803)' },
        color: '#3b82f6'
      }
    }
  }
};
