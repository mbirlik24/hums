const learningData = {
  activeLanguage: 'tr', // default language
  activeWeek: 2, // default week
  
  weeks: {
    2: {
      id: 2,
      themeColor: '#10b981', // Emerald
      title: {
        en: 'Week 2: The Columbian Exchange',
        tr: '2. Hafta: Kolomb Değişimi'
      },
      slides: [
        {
          title: {
            en: 'Modernization & The Rise of Europe',
            tr: 'Modernleşme ve Avrupa\'nın Yükselişi'
          },
          text: {
            en: '<p><strong>Global Expansion & The Asian Giants:</strong> The pathways of modernization and Westernization are historically anchored in European maritime expansion. Until the late 15th century, Europe remained an economically marginal, resource-scarce periphery compared to the manufacturing powerhouses of China and India.</p><p><strong>Sovereign Wealth Injection:</strong> The colonization of the Americas and entry into Asian maritime routes injected massive liquid wealth (silver and gold) and primary ecological assets into European economies. This capital accumulation drove the <em>"Great Divergence"</em>, enabling Europe to eventually surpass the dominant Asian empires.</p>',
            tr: '<p><strong>Küresel Genişleme ve Avrasya Devleri:</strong> Modernleşme ve Batılılaşma süreçleri, tarihsel olarak Avrupa\'nın küresel coğrafi genişlemesine göbekten bağlıdır. 15. yüzyıl sonuna kadar Avrupa, Çin ve Hindistan gibi üretim devleri karşısında oldukça yoksul, kaynakları kıt ve çevre konumda bir coğrafyaydı.</p><p><strong>Zenginlik Enjeksiyonu:</strong> Amerika kıtalarının sömürgeleştirilmesi ve Asya deniz ticaret yollarının kontrol altına alınması, Avrupa ekonomisine devasa gümüş, altın ve yeni ticari varlıklar enjekte etti. Bu sermaye ve kaynak birikimi, Avrupa\'nın Pomeranz\'ın ifadesiyle <em>"Büyük Ayrışma" (Great Divergence)</em> sürecini başlatarak küresel Asya güçlerine meydan okumasının temel taşı oldu.</p>'
          },
          mapState: {
            zoom: 'world',
            highlightRegions: ['europe', 'americas', 'asia'],
            activeRoutes: [],
            markers: ['seville', 'lisbon', 'goa', 'tenochtitlan']
          }
        },
        {
          title: {
            en: 'What is the Columbian Exchange?',
            tr: 'Kolomb Değişimi Nedir?'
          },
          text: {
            en: '<p><strong>The Ecological Reunion:</strong> Coined by historian Alfred Crosby in 1972, the <em>"Columbian Exchange"</em> describes the massive, unprecedented transfer of biological entities between the Eastern and Western hemispheres following Columbus\'s landfall in 1492.</p><p><strong>Vectors of Exchange:</strong> This exchange encompassed not just commercial goods, but food crops, domesticated livestock, human populations, ideas, and deadly microbial pathogens. It stands as one of the most transformative ecological and demographic events in human history.</p>',
            tr: '<p><strong>Ekolojik Karşılaşma:</strong> Tarihçi Alfred Crosby tarafından 1972\'de kavramsallaştırılan <em>"Kolomb Değişimi" (Columbian Exchange)</em>, 1492 sonrasında Doğu (Avrasya/Afrika) ve Batı (Amerika) yarımküreleri arasında gerçekleşen benzeri görülmemiş biyolojik transferdir.</p><p><strong>Transfer Edilen Unsurlar:</strong> Bu süreç sadece ticari emtiaları değil; tarım bitkilerini, evcil hayvanları, insan topluluklarını, kültürleri ve en önemlisi ölümcül mikrobiyolojik patojenleri içermiştir. Kolomb Değişimi, insanlık tarihindeki en büyük ekolojik ve demografik devrim olarak kabul edilir.</p>'
          },
          mapState: {
            zoom: 'atlantic',
            highlightRegions: [],
            activeRoutes: ['columbian_exchange_east', 'columbian_exchange_west'],
            markers: ['santo_domingo', 'seville']
          }
        },
        {
          title: {
            en: 'Spanish Conquest of the Empires',
            tr: 'İspanyol İmparatorluk Fetihleri'
          },
          text: {
            en: '<p><strong>Asymmetric Conquests:</strong> Spanish conquistadors subdued the highly organized and populous Aztec Empire in Mexico (led by Cortés in the 1520s) and the Inca Empire in Peru (under Pizarro).</p><p><strong>Strategic Leverage Factors:</strong> Despite their minuscule numbers, the Spaniards succeeded by exploiting structural vulnerabilities:<ul><li><strong>Indigenous Alliances:</strong> Partnering with local rivals of the ruling dynasties, such as the Tlaxcaltecs.</li><li><strong>Military Disparity:</strong> Using superior Toledo steel blades, armor, and gunpowder weaponry.</li><li><strong>Civil Fractures:</strong> Capitalizing on dynastic civil wars within the Inca elite.</li><li><strong>Translation & Intelligence:</strong> Using skilled indigenous interpreters like La Malinche to navigate local politics.</li></ul></p>',
            tr: '<p><strong>Asimetrik Fetihler:</strong> İspanyol fatihleri (conquistadors), Meksika\'daki yoğun nüfuslu Aztek İmparatorluğu\'nu (1520\'ler, Cortés önderliğinde) ve Peru\'daki İnka İmparatorluğu\'nu (Pizarro önderliğinde) fethetmeyi başardılar.</p><p><strong>Başarıyı Getiren Faktörler:</strong> Sayıca çok az olmalarına rağmen İspanyolların başarısı şu faktörlere dayanıyordu:<ul><li><strong>Yerel Müttefikler:</strong> Tlaxcalteca gibi yönetici imparatorlukların düşmanlarıyla ittifaklar kurulması.</li><li><strong>Askeri Teknoloji:</strong> Çelik zırhlar, kılıçlar ve barutlu silahlar.</li><li><strong>İç Savaşlar:</strong> İnka taht kavgalarının manipüle edilmesi.</li><li><strong>Tercümanlık:</strong> La Malinche (Doña Marina) gibi yerli dilleri bilen kilit figürlerin diplomatik arabuluculuğu.</li></ul></p>'
          },
          mapState: {
            zoom: 'americas',
            highlightRegions: ['aztec', 'inca'],
            activeRoutes: [],
            markers: ['tenochtitlan', 'potosi']
          }
        },
        {
          title: {
            en: 'Establishing Global Trade Currents',
            tr: 'Küresel Ticaret Akıntılarının Kurulması'
          },
          text: {
            en: '<p><strong>Navigating the Gyres:</strong> Sustainable trans-Atlantic trade relied on mastering prevailing wind and ocean currents. In 1513, Spanish navigators identified and charted the powerful Gulf Stream current.</p><p><strong>The Circular Maritime Route:</strong> Ships sailed southwest to the Caribbean riding the easterly trade winds, and returned by sailing north along the Gulf Stream to catch the westerlies back to Europe. The highly organized <strong>Spanish Treasure Fleets (Convoys)</strong> transported silver from Potosí and Zacatecas, triggering the European inflation known as the Price Revolution while financing global trade pipelines.</p>',
            tr: '<p><strong>Doğal Akıntıların Keşfi:</strong> Atlantik ticaretinin sürdürülebilirliği, rüzgar sistemlerinin ve okyanus akıntılarının haritalandırılmasına bağlıydı. 1513\'te İspanyol denizciler Golfstrim (Gulf Stream) akıntısını keşfettiler.</p><p><strong>Dairesel Ulaşım Ağları:</strong> Karayipler\'e gitmek için doğu yönlü alize rüzgarları kullanılırken; Avrupa\'ya dönmek için Golfstrim akıntısıyla kuzeye çıkılarak batı rüzgarları yakalanıyordu. Bu döngü üzerine kurulan <strong>İspanyol Hazine Filoları (Gümüş Konvoyları)</strong>, Yeni Dünya gümüşünü Sevilla\'ya taşıyarak Avrupa\'da Fiyat Devrimi adıyla bilinen enflasyonu tetikledi, ancak küresel ticaret likiditesini de patlattı.</p>'
          },
          mapState: {
            zoom: 'atlantic',
            highlightRegions: [],
            activeRoutes: ['atlantic_winds_loop', 'treasure_fleet'],
            markers: ['seville', 'santo_domingo', 'virginia']
          }
        },
        {
          title: {
            en: 'New World Staple Crops',
            tr: 'Yeni Dünya\'nın Temel Gıdaları'
          },
          text: {
            en: '<p><strong>The Nutritional Revolution:</strong> The Old World acquired exceptionally productive crops native to the Americas: potatoes, sweet potatoes, maize (corn), cassava, tomatoes, chili peppers, and cacao.</p><p><strong>Demographic Impact & Cash Crops:</strong> <ul><li><strong>The Potato:</strong> Provided a dense calorie source for European peasantry. Growing underground, it protected harvests from confiscation by passing armies.</li><li><strong>Maize:</strong> Spread rapidly to China, colonizing dry hillsides and driving a massive population surge under the Qing dynasty.</li><li><strong>Tobacco:</strong> Introduced commercially by John Rolfe (who married Pocahontas), it became Virginia\'s highly profitable export monoculture.</li></ul></p>',
            tr: '<p><strong>Kalori Devrimi:</strong> Kolomb Değişimi ile Eski Dünya, tarımsal verimliliği son derece yüksek olan Yeni Dünya bitkileriyle tanıştı: patates, tatlı patates, mısır, manyok, domates, acı biber, yer fıstığı ve kakao.</p><p><strong>Nüfus Artışı ve Monokültür:</strong> <ul><li><strong>Patates:</strong> İrlanda\'dan Rusya\'ya kadar köylülerin temel kalori kaynağı oldu. Yer altında yetiştiği için savaşlarda yağmacı ordulardan korunabildi.</li><li><strong>Mısır:</strong> Hızla Çin\'e yayılarak marjinal toprakların ekilmesini ve Qing Hanedanlığı döneminde nüfusun ikiye katlanmasını sağladı.</li><li><strong>Tütün:</strong> John Rolfe\'un yerel tütün tohumlarını ıslah etmesiyle Virginia kolonisinin ana zenginlik kaynağı ve tek mahsullü (monokültür) ihracat motoru oldu.</li></ul></p>'
          },
          mapState: {
            zoom: 'world',
            highlightRegions: [],
            activeRoutes: ['crop_flow_east'],
            markers: ['virginia', 'china', 'ireland']
          }
        },
        {
          title: {
            en: 'Old World Imports: The Sugar Revolution',
            tr: 'Eski Dünya İthalatları: Şeker Devrimi'
          },
          text: {
            en: '<p><strong>Importing Eurasian Biota:</strong> Europeans introduced Old World staples (wheat, sugar, coffee, bananas) and domesticated livestock (horses, cattle, sheep) to the American landscape.</p><p><strong>White Gold & Plantation Slavery:</strong> Sugarcane, introduced during Columbus\'s second voyage, became the supreme cash crop in Brazil and the Caribbean. Because sugar processing was hazardous and required massive labor inputs, the sugar boom became the primary driver for the expansion of the transatlantic slave trade, transforming islands into hyper-exploitative labor camps.</p>',
            tr: '<p><strong>Avrasya Mahsulleri ve Hayvancılık Amerika\'da:</strong> Avrupalılar Amerika\'ya buğday, şeker kamışı, kahve, muz, narenciye gibi mahsulleri ve at, sığır, koyun, domuz gibi büyükbaş/küçükbaş hayvanları ithal ettiler.</p><p><strong>Beyaz Altın ve Köle Emeği:</strong> Kolomb\'un 1492\'deki ikinci seyahatinde getirdiği şeker kamışı, Karayipler ve Brezilya\'da sömürgeciliğin en karlı "Beyaz Altın" ürünü oldu. Şeker üretimi son derece ağır, tehlikeli ve emek-yoğun bir rafinasyon süreci gerektirdiğinden, sömürgeciler şeker plantasyonlarının iş gücü ihtiyacını karşılamak amacıyla transatlantik köle ticaretini devasa boyutlarda başlattılar.</p>'
          },
          mapState: {
            zoom: 'atlantic',
            highlightRegions: [],
            activeRoutes: ['sugar_flow'],
            markers: ['santo_domingo', 'brazil', 'lisbon']
          }
        },
        {
          title: {
            en: 'Microbiological Devastation',
            tr: 'Mikrobiyolojik Yıkım'
          },
          text: {
            en: '<p><strong>Biological Contact and Demographic Disaster:</strong> Native Americans had no history of contact with Eurasian domesticated beasts (cattle, pigs, sheep), which were the evolutionary hosts for most human viruses. Thus, they possessed no immunological memory against pathogens like smallpox, measles, and cholera.</p><p><strong>The Great Dying:</strong> This vulnerability triggered a demographic collapse that wiped out 80% to 95% of the indigenous population (an estimated 50-60 million lives) within 150 years. This vacuum directly forced colonizers to import African slaves.</p><p><strong>Pathogen Flow to the Old World:</strong> Conversely, Columbus\'s crew carried syphilis back from Hispaniola to Europe. The disease rapidly spread through the continent starting with the French invasion of Naples in 1495, causing a massive, painful epidemic.</p>',
            tr: '<p><strong>Biyolojik Karşılaşma ve Demografik Afet:</strong> Amerikan yerli nüfusunun Avrasya kökenli evcil hayvanlarla (sığır, domuz, koyun) binlerce yıllık bir teması yoktu. Kızamık, çiçek, tifüs ve kolera gibi ölümcül virüsler bu hayvanlardan insanlara geçmişti ve Avrasya toplumlarında bağışıklık geliştirmişti.</p><p><strong>Büyük Ölüm (The Great Dying):</strong> Yerlilerin ise bu patojenlere karşı hiçbir bağışıklık koruması yoktu. Bu durum, 150 yıl içinde yerli nüfusunun %80 ila %95\'ini (yaklaşık 50-60 milyon insanı) yok eden küresel ölçekteki en büyük demografik felakete yol açtı.</p><p><strong>Eski Dünya\'ya Taşınan Hastalık:</strong> Buna karşılık, Kolomb\'un mürettebatı Yeni Dünya\'dan (muhtemelen Hispaniola\'dan) frengi (syphilis) patojenini Avrupa\'ya taşıdı. Frengi, 1495 yılında Napoli Savaşı ile tüm Avrupa kıtasına hızla yayılarak büyük bir salgına ve ahlaki tartışmalara neden oldu.</p>'
          },
          mapState: {
            zoom: 'atlantic',
            highlightRegions: [],
            activeRoutes: ['disease_flow_west', 'disease_flow_east'],
            markers: ['santo_domingo', 'naples']
          }
        },
        {
          title: {
            en: 'Tools of Empire: Quinine & Rubber',
            tr: 'İmparatorluk Araçları: Kinin ve Kauçuk'
          },
          text: {
            en: '<p><strong>Quinine and the African Interior:</strong> Derived from the bark of the Andean cinchona tree, quinine was the first effective treatment and prophylactic against malaria. Quinine served as a vital "tool of empire," dismantling the demographic barrier of disease that had previously earned tropical Africa the moniker "White Man\'s Grave."</p><p><strong>Industrial Rubber & The Congo:</strong> With the rise of electricity and the automotive industry, rubber became an essential industrial commodity. This demand triggered the brutal exploitation of the Congo Free State under King Leopold II, where millions of Africans were subjected to forced labor and mutilation to harvest wild rubber.</p>',
            tr: '<p><strong>Kinin Sıtma Kalkanı:</strong> And Dağları\'na özgü kınakına ağacının kabuğundan elde edilen kinin, sıtmaya karşı bulunan ilk etkili ilaç oldu. Kinin, Avrupalıların sıtma nedeniyle "Beyaz Adamın Mezarı" olarak bilinen tropikal Afrika içlerini sömürgeleştirmesini sağlayan en önemli <strong>"imparatorluk aracı"</strong> olmuştur.</p><p><strong>Endüstriyel Kauçuk ve Kongo Sömürüsü:</strong> Elektriğin ve otomotiv sektörünün yükselişiyle birlikte, Yeni Dünya kökenli kauçuk bitkisi yalıtım ve lastik üretimi için kritik hale geldi. Bu talep, Belçika Kralı II. Leopold\'un Kongo Serbest Devleti\'nde kauçuk toplamak için milyonlarca Afrikalıyı katlettiği vahşi bir emek sömürüsü rejimini doğurdu.</p>'
          },
          mapState: {
            zoom: 'world',
            highlightRegions: ['congo'],
            activeRoutes: ['quinine_flow'],
            markers: ['andes', 'london', 'congo']
          }
        }
      ],
      quiz: [
        {
          question: {
            en: 'Who coined the term "Columbian Exchange"?',
            tr: '"Kolomb Değişimi" terimini ilk kez hangi tarihçi kullanmıştır?'
          },
          options: [
            { text: { en: 'Alfred Crosby', tr: 'Alfred Crosby' }, correct: true },
            { text: { en: 'Fernandez-Armesto', tr: 'Fernandez-Armesto' }, correct: false },
            { text: { en: 'John Rolfe', tr: 'John Rolfe' }, correct: false },
            { text: { en: 'Bartolomé de Las Casas', tr: 'Bartolomé de Las Casas' }, correct: false }
          ],
          explanation: {
            en: 'Historian Alfred Crosby published "The Columbian Exchange" in 1972, defining the biological and cultural transfers between the Old and New Worlds.',
            tr: 'Tarihçi Alfred Crosby, 1972 yılında yayınladığı "The Columbian Exchange" adlı kitabıyla Eski ve Yeni Dünya arasındaki biyolojik ve kültürel transferleri bu isimle tanımlamıştır.'
          }
        },
        {
          question: {
            en: 'Why were Native Americans so uniquely vulnerable to Old World diseases like smallpox?',
            tr: 'Amerikan yerlileri neden çiçek hastalığı gibi Eski Dünya hastalıklarına karşı bu kadar savunmasızdı?'
          },
          options: [
            { text: { en: 'They did not practice agriculture.', tr: 'Tarım yapmadıkları için.' }, correct: false },
            { text: { en: 'They had not domesticated large animals, which are the evolutionary source of these viruses.', tr: 'Virüslerin evrimsel kaynağı olan büyük hayvanları evcilleştirmedikleri için.' }, correct: true },
            { text: { en: 'The tropical climate of the Americas weakened their immune systems.', tr: 'Amerika\'nın tropikal iklimi bağışıklık sistemlerini zayıflattığı için.' }, correct: false },
            { text: { en: 'They refused European medical treatments.', tr: 'Avrupa tıp tedavilerini reddettikleri için.' }, correct: false }
          ],
          explanation: {
            en: 'Many deadly human viruses evolved from diseases in domesticated animals. Eurasian societies had close contact with cattle, sheep, and pigs for millennia, developing immunities that Native Americans completely lacked due to a lack of domestic beasts (except llamas).',
            tr: 'Ölümcül insan virüslerinin çoğu, evcilleştirilmiş hayvanlardaki hastalıklardan evrimleşmiştir. Avrasya toplumları binlerce yıldır sığır, koyun ve domuzlarla yakın temasta bulunarak bağışıklık geliştirmişti; Amerikan yerlileri ise (lama hariç) evcil hayvanları olmadığı için bu bağışıklığa sahip değildi.'
          }
        },
        {
          question: {
            en: 'Which crop acted as a critical population-growth catalyst for the European working class and peasantry during wartime?',
            tr: 'Savaş dönemlerinde Avrupa işçi sınıfı ve köylüleri için kritik bir nüfus artışı katalizörü olan mahsul hangisiydi?'
          },
          options: [
            { text: { en: 'Sugar cane', tr: 'Şeker kamışı' }, correct: false },
            { text: { en: 'Tobacco', tr: 'Tütün' }, correct: false },
            { text: { en: 'The potato', tr: 'Patates' }, correct: true },
            { text: { en: 'Wheat', tr: 'Buğday' }, correct: false }
          ],
          explanation: {
            en: 'The potato grows underground, making it easy to conceal from pillaging armies. It provided an abundant supply of nutrients, sustaining large populations across Northern and Eastern Europe.',
            tr: 'Patates yer altında yetiştiği için yağmacı ordulardan kolayca gizlenebiliyordu. Bol miktarda besin ve kalori sağlayarak Kuzey ve Doğu Avrupa\'da büyük nüfusları besledi.'
          }
        },
        {
          question: {
            en: 'What discovery in 1513 established the main maritime trade route back to Europe?',
            tr: '1513\'te yapılan hangi keşif, Avrupa\'ya dönüş için ana deniz ticaret yolunu belirledi?'
          },
          options: [
            { text: { en: 'The Panama Canal route', tr: 'Panama Kanalı güzergahı' }, correct: false },
            { text: { en: 'The Gulf Stream current', tr: 'Golfstrim (Gulf Stream) akıntısı' }, correct: true },
            { text: { en: 'The Magellan Strait', tr: 'Macellan Boğazı' }, correct: false },
            { text: { en: 'The Suez passage', tr: 'Süveyş geçidi' }, correct: false }
          ],
          explanation: {
            en: 'The Gulf Stream allowed ships to travel north along the American coast and catch the westerly winds, which reliably blew back to Western Europe.',
            tr: 'Golfstrim akıntısı, gemilerin Amerika kıyıları boyunca kuzeye ilerlemesini ve Batı Avrupa\'ya doğru esen batı rüzgarlarını yakalamasını sağladı.'
          }
        },
        {
          question: {
            en: 'How did quinine act as a "tool of empire" for European states?',
            tr: 'Kinin, Avrupa devletleri için nasıl bir "imparatorluk aracı" işlevi görmüştür?'
          },
          options: [
            { text: { en: 'It was used as a high-value currency in Asia.', tr: 'Asya\'da yüksek değerli bir para birimi olarak kullanıldı.' }, correct: false },
            { text: { en: 'It was a chemical component in early vulcanized rubber.', tr: 'Erken dönem vulkanize kauçukta kimyasal bir bileşendi.' }, correct: false },
            { text: { en: 'It prevented and treated malaria, enabling the colonization of Africa.', tr: 'Sıtmayı önleyip tedavi ederek Afrika\'nın sömürgeleştirilmesini sağladı.' }, correct: true },
            { text: { en: 'It preserved food during long sea voyages.', tr: 'Uzun deniz yolculuklarında yiyecekleri muhafaza etti.' }, correct: false }
          ],
          explanation: {
            en: 'Derived from Andean cinchona bark, quinine acted as a malaria prophylactic. Without it, European exploration and colonization of tropical West and Central Africa would have been demographically impossible.',
            tr: 'And Dağları\'ndaki kınakına ağacı kabuğundan elde edilen kinin, sıtmaya karşı koruyucu oldu. O olmadan, Avrupalıların sıtma yoğun tropikal Batı ve Orta Afrika\'yı sömürgeleştirmesi demografik olarak imkansız olurdu.'
          }
        }
      ]
    },
    3: {
      id: 3,
      themeColor: '#d97706', // Amber
      title: {
        en: 'Week 3: The Transatlantic Slave Trade',
        tr: '3. Hafta: Transatlantik Köle Ticareti'
      },
      slides: [
        {
          title: {
            en: 'The Origins of the Trade (1519-1867)',
            tr: 'Ticaretin Kökenleri (1519-1867)'
          },
          text: {
            en: '<p><strong>The Scale of Forced Migration:</strong> The transatlantic slave trade, spanning from the first recorded voyage to Hispaniola (1519) to the final contraband ships to Cuba (1867), forcibly transported over 12.5 million Africans across the Atlantic, representing the largest forced oceanic migration in history.</p><p><strong>Hereditary Chattel Slavery:</strong> Unlike ancient forms of servitude (e.g., Roman or Ottoman systems) which were often temporary or debt-based, Atlantic slavery evolved into a permanent, racialized, and hereditary status. Slaves were legally defined as <strong>chattel property</strong>, stripped of legal rights, with their status passed down through maternal lines in perpetuity.</p>',
            tr: '<p><strong>Demografik Zorunlu Göç Dalgası:</strong> Transatlantik köle ticareti, Hispaniola\'ya yapılan ilk belgelenmiş sefer (1519) ile Küba\'ya ulaşan son kaçak sefer (1867) arasında Atlantik Okyanusu boyunca 12.5 milyondan fazla Afrikalının zorla Amerika kıtalarına taşındığı tarihin en büyük zorunlu göç dalgasıdır.</p><p><strong>Irksal ve Kalıtsal Kölelik Sistemi:</strong> Roma İmparatorluğu veya Osmanlı\'daki geçici, borca veya savaşa dayalı geleneksel kölelik biçimlerinin aksine; transatlantik köleliği tamamen <strong>ırksal, ömür boyu süren, kalıtsal ve hukuken mal/mülk (chattel)</strong> statüsünde bir sömürü rejimine dönüştürülmüştür. Kölelerin özgürlüğe kavuşma yolları yasal olarak neredeyse tamamen kapatılmış ve statü anneden çocuğa geçecek şekilde kilitlenmiştir.</p>'
          },
          mapState: {
            zoom: 'atlantic',
            highlightRegions: [],
            activeRoutes: ['middle_passage'],
            markers: ['santo_domingo', 'havana', 'luanda']
          }
        },
        {
          title: {
            en: 'Transition from Native to African Labor',
            tr: 'Yerli İş Gücünden Afrika İş Gücüne Geçiş'
          },
          text: {
            en: '<p><strong>Limits of the Encomienda System:</strong> Spanish colonizers initially exploited Native Americans through the <em>encomienda</em> system. However, the catastrophic native demographic collapse from diseases and legal interventions (such as the 1550 Valladolid Controversy where Las Casas argued against Native American enslavement) forced the Spanish Crown to restrict indigenous servitude.</p><p><strong>The Turn to West Africa:</strong> Landowners turned to West Africa to fill the labor void. West Africans possessed strong immunities to tropical diseases like malaria and yellow fever. Furthermore, populations from regions like Senegambia (such as the Wolof and Fula) brought expert knowledge of cattle rearing, ironworking, and wet-rice cultivation, making them highly sought after by planters.</p>',
            tr: '<p><strong>Encomienda Rejiminin Sınırları:</strong> İspanyol fatihler başlangıçta yerli halkları <em>encomienda</em> sistemiyle zorla çalıştırdılar. Ancak yerli nüfusun salgın hastalıklarla kırılması ve Bartolomé de las Casas gibi din adamlarının yerli haklarını savunan çabaları sonucu (1550 Valladolid Tartışması) İspanyol Krallığı yerli köleliğini yasakladı.</p><p><strong>Afrika Emeğine Yöneliş:</strong> Tarım plantasyon sahipleri, iş gücü açığını kapatmak için Batı Afrika\'dan (Gambia, Angola) köle ithalatına başladılar. Batı Afrikalıların Eski Dünya hastalıklarına karşı (sıtma, sarıhumma) bağışıklığının bulunması ve Wolof, Fula gibi halkların tropikal tarım, hayvancılık ve demircilik konularında sahip olduğu ileri düzey uzmanlık, onları plantasyon sahipleri için birincil hedef haline getirdi.</p>'
          },
          mapState: {
            zoom: 'atlantic',
            highlightRegions: [],
            activeRoutes: ['labor_shift_flow'],
            markers: ['santo_domingo', 'valladolid', 'gambia']
          }
        },
        {
          title: {
            en: 'The Centrality of Sugar',
            tr: 'Şekerin Merkezi Rolü'
          },
          text: {
            en: '<p><strong>The Sugar Commodity Engine:</strong> While tobacco in the Chesapeake, rice in Carolina, and mining in Brazil employed enslaved labor, sugar was the primary economic driver of the trade. Between the late 16th century and 1820, approximately <strong>90%</strong> of all enslaved Africans were shipped to the Caribbean (such as French Saint-Domingue and British Jamaica) and Brazil to produce sugar.</p><p><strong>Industrial Agro-complexes:</strong> Sugar plantations (known as <em>engenhos</em> in Brazil) operated as early industrial complexes, combining agricultural labor with dangerous, non-stop chemical refining, resulting in high mortality rates and an insatiable demand for new slave imports.</p>',
            tr: '<p><strong>Tütün ve Madenciliğin Ötesinde:</strong> Amerika kıtalarındaki sömürgelerde tütün (Chesapeake), pirinç (Carolina) ve gümüş madenleri (Potosi) köle emeği kullansa da, transatlantik köle ticaretini besleyen esas devasa motor şekerdi.</p><p><strong>Şeker Plantasyonları (Engenhos):</strong> 16. yüzyıl sonlarından 1820\'ye kadar Amerika\'ya taşınan tüm Afrikalı kölelerin yaklaşık <strong>%90\'ı</strong> şeker kamışı üretmek veya şeker ekonomisini desteklemek amacıyla doğrudan Karayıpler (özellikle Fransız Saint-Domingue ve İngiliz Jamaika) ile Portekiz Brezilyası\'na gönderildi. Şeker plantasyonları, sanayileşmiş fabrikalar gibi 24 saat aralıksız çalışan son derece tehlikeli ve ölümcül emek merkezleriydi.</p>'
          },
          mapState: {
            zoom: 'atlantic',
            highlightRegions: [],
            activeRoutes: ['sugar_routes'],
            markers: ['santo_domingo', 'brazil', 'carolina']
          }
        },
        {
          title: {
            en: 'Organization and African States',
            tr: 'Organizasyon ve Afrika Devletleri'
          },
          text: {
            en: '<p><strong>Coastal Enclaves & Sovereignty:</strong> The slave trade was a commercial transaction between European merchants and sovereign African states. Due to tropical diseases like malaria and formidable military resistance (e.g., Queen Nzinga of Ndongo), Europeans were restricted to the coast and could not colonize the interior.</p><p><strong>Commercial Fortresses:</strong> Europeans constructed 64 heavily fortified coastal trading posts (such as Elmina Castle). Inside these outposts, merchants bartered manufactured goods, firearms, textiles, brassware, and cowrie shells for captives captured in interior conflicts by regional African kings.</p>',
            tr: '<p><strong>Kıyı Ticareti ve Kaleler:</strong> Transatlantik köle ticareti, Avrupalı tüccarlar ile Afrika kıyısındaki egemen devletler arasında yürütülen ticari bir ortaklıktı. Avrupalılar, sıtma gibi hastalıklar ve yerel krallıkların (örneğin Ndongo Kraliçesi Nzinga) sert askeri direnişi nedeniyle Afrika içlerini işgal edemediler.</p><p><strong>Kıyı Ticaret Karargahları:</strong> Avrupalılar, kıyı boyunca (örneğin Elmina Kalesi) 64 korunaklı ticaret kalesi inşa ettiler. Bu kalelerde, Afrika içlerindeki savaşlarda veya baskınlarda esir alınan insanlar karşılığında yerel krallıklara ateşli silahlar, metal eşyalar, tekstil ürünleri, alkol ve deniz kabukları (cowrie) satıldı.</p>'
          },
          mapState: {
            zoom: 'africa',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['elmina', 'benin', 'luanda', 'gambia']
          }
        },
        {
          title: {
            en: 'The Gun-Slave Cycle & Maritime Powers',
            tr: 'Silah-Köle Sarmalı ve Denizci Güçler'
          },
          text: {
            en: '<p><strong>The Gun-Slave Cycle:</strong> This geopolitical dynamic forced African states to exchange captives for European muskets to protect themselves from rival kingdoms. The possession of firearms, in turn, enabled more successful military raids, yielding more captives to trade for more weapons, destabilizing the West African interior.</p><p><strong>Maritime Dominance:</strong> Portugal and Britain dominated the trade, controlling over <strong>75%</strong> of all voyages. British ports like Liverpool and Bristol accrued immense capital through shipping, banking, and insurance, laying the financial foundation for Britain\'s Industrial Revolution.</p>',
            tr: '<p><strong>Silah-Köle Sarmalı (Gun-Slave Cycle):</strong> Tarihçiler, Afrika devletlerinin komşu devletlere karşı kendilerini korumak için Avrupalılardan ateşli silah satın almak zorunda kaldıklarını, bunun karşılığında ise daha fazla köle satmaya itildiklerini belirtir. Bu döngü Afrika genelinde militarizasyonu ve istikrarsızlığı körüklemiştir.</p><p><strong>Denizci Güçlerin Tekeli:</strong> Ticareti domine eden iki büyük güç İngiltere ve Portekiz\'dir; iki devlet tüm köle seferlerinin <strong>3/4\'ünü</strong> gerçekleştirmiştir. Liverpool ve Bristol gibi İngiliz liman şehirleri, gemi inşası, sigortacılık ve finans ağlarını geliştirerek köle ticareti sayesinde devasa zenginlik biriktirmiş ve Lizbon\'u geride bırakmıştır.</p>'
          },
          mapState: {
            zoom: 'atlantic',
            highlightRegions: [],
            activeRoutes: ['triangular_trade_guns'],
            markers: ['liverpool', 'bristol', 'lisbon', 'elmina']
          }
        },
        {
          title: {
            en: 'The Middle Passage and Control',
            tr: 'Orta Geçit (The Middle Passage) ve Kontrol'
          },
          text: {
            en: '<p><strong>The Middle Passage Logistics:</strong> The trans-Atlantic crossing was a brutal logistical operation. Slavers maximized cargo space using <strong>"Tight Pack"</strong> methods, chaining captives shoulder-to-shoulder in dark, unventilated holds with low clearance.</p><p><strong>Insecurity and Surveillance:</strong> A crew of 30 managed up to 300 captives. Slavers intentionally mixed captives from different ethnic groups and language backgrounds to prevent communication and lower the risk of coordinated mutinies. Despite these barriers, shipboard insurrections were frequent and feared, and disease epidemics (dysentery, smallpox) led to a 15-20% shipboard mortality rate.</p>',
            tr: '<p><strong>Orta Geçit Dehşeti:</strong> Köle gemilerindeki Atlantik geçişi (Middle Passage), tarihin en vahşi lojistik operasyonlarından biridir. Gemiler, daha fazla insan sığdırmak için <strong>"Sıkı İstifleme" (Tight Pack)</strong> yöntemiyle tasarlanmıştır. Köleler güverte altında zincirlenerek üst üste yatırılmıştır.</p><p><strong>İsyan Önleme Stratejileri:</strong> Yaklaşık 300 köleyi kontrol eden 30 kişilik mürettebat, isyan riskini azaltmak amacıyla kasıtlı olarak farklı dilleri konuşan ve farklı kabilelerden olan esirleri bir araya getirmiştir. İletişimsizlik isyanları zorlaştırsa da, gemilerde intiharlar, salgın hastalıklar (dizanteri, çiçek) eksik olmamış ve kölelerin %15-20\'si yolda hayatını kaybetmiştir.</p>'
          },
          mapState: {
            zoom: 'atlantic',
            highlightRegions: [],
            activeRoutes: ['middle_passage_detail'],
            markers: ['santo_domingo', 'elmina']
          }
        },
        {
          title: {
            en: 'The "Slave Societies" of the Americas',
            tr: 'Amerika\'daki "Köle Toplumları"'
          },
          text: {
            en: '<p><strong>The Rise of Slave Societies:</strong> In plantation zones, societies transitioned from "societies with slaves" to outright <strong>"slave societies"</strong>, where slavery was the primary economic engine and social structure. Enslaved populations vastly outnumbered whites, sometimes by 10 to 1.</p><p><strong>Cultural Adaptation & Maroonage:</strong> To survive, enslaved people synthesized new syncretic religions (Voodoo, Santería) and creole languages. Resistance was constant, culminating in the establishment of independent, self-governing communities of escaped slaves known as <strong>Maroon Communities</strong> (e.g., Quilombo dos Palmares in Brazil or the Maroon Kingdom of Esmeraldas in Colombia), which fought colonial armies to secure treaties.</p>',
            tr: '<p><strong>Köle Sahibi Toplum vs. Köle Toplumu:</strong> Tarihçi Ira Berlin\'in kavramsallaştırmasına göre Karayıpler ve Güney Amerika, ekonominin ve tüm toplumsal yapının köle emeği etrafında şekillendiği <strong>"Köle Toplumları"</strong> haline gelmiştir. Nüfus oranlarında siyah köleler beyazları 10\'a 1 gibi oranlarla geride bırakmıştır.</p><p><strong>Kültürel Direniş ve Maronlar:</strong> Köleler, dil ve kültür engellerini aşmak için voodoo, santeria gibi melez dinler ve kreyol diller geliştirdiler. Baskılara karşı en büyük direnişlerden biri de kaçak kölelerin kurduğu bağımsız <strong>Maron Toplulukları (Cimarrones)</strong> olmuştur. Brezilya\'daki Quilombo dos Palmares ve Kolombiya\'daki Esmeraldas Maron Krallığı (1599) gibi topluluklar İspanyol/Portekiz ordularını yenerek bağımsızlık anlaşmaları imzalamışlardır.</p>'
          },
          mapState: {
            zoom: 'americas',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['esmeraldas', 'santo_domingo', 'virginia']
          }
        },
        {
          title: {
            en: 'Virginia & Bacon\'s Rebellion (1676)',
            tr: 'Virginia ve Bacon İsyanı (1676)'
          },
          text: {
            en: '<p><strong>Indentured Labor in early Virginia:</strong> In the early 17th century, Virginia relied primarily on white and black indentured servants. Social status was defined by property rather than skin color, allowing some black servants, like Anthony Johnson, to gain freedom and acquire land and servants of their own.</p><p><strong>Bacon\'s Rebellion (1676):</strong> As elite land consolidation left poor freedmen landless, Nathaniel Bacon led a joint armed rebellion of black slaves and white indentured servants against the colonial government, burning Jamestown. Although crushed, this multi-racial class uprising terrified the planter elite, who realized the danger of a unified lower class.</p>',
            tr: '<p><strong>Erken Virginia\'nın Sınıfsal Yapısı:</strong> 17. yüzyıl ortalarına kadar Virginia kolonisinde kölelik ırksal olmaktan ziyade sözleşmeli işçiliğe (indentured servitude) dayanıyordu. Anthony Johnson gibi bazı siyahlar sözleşmelerini tamamlayıp mülk sahibi olabiliyor, hatta kendileri de beyaz ve siyah işçiler çalıştırabiliyordu.</p><p><strong>Bacon İsyanı (1676):</strong> Sömürge elitlerinin toprakları tekelleştirmesi sonucu, serbest kalmış ancak topraksız yoksul beyaz ve siyah işçiler Nathaniel Bacon liderliğinde birleşerek elitlere karşı silahlı ayaklanma başlattılar ve Jamestown\'ı yaktılar. Bu isyan bastırılsa da, yoksul sınıfların ırk ayrımı gözetmeksizin bir araya gelebilmesi zengin plantasyon sahiplerini dehşete düşürdü.</p>'
          },
          mapState: {
            zoom: 'virginia_focus',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['virginia']
          }
        },
        {
          title: {
            en: 'The Invention of Racial Slavery',
            tr: 'Irksal Köleliğin İcadı'
          },
          text: {
            en: '<p><strong>The Destruction of Class Unity:</strong> To prevent future class-based alliances, the planter assembly systematically divided poor laborers by race. They granted poor whites legal privileges while codifying lifetime, hereditary chattel slavery for people of African descent between 1676 and 1708.</p><p><strong>Legal Institutionalization:</strong> Freeing slaves was banned in Virginia in 1691. Under the legal doctrine of <em>Partus sequitur ventrem</em>, the status of children followed that of the mother, ensuring that the offspring of enslaved women remained slaves forever. In 1672, the King chartered the Royal African Company (with philosopher John Locke as a prominent investor) to scale up and monopolize the trade, cementing a permanent racial caste.</p>',
            tr: '<p><strong>Böl ve Yönet Stratejisi:</strong> Bacon İsyanı\'nın ardından sömürge elitleri, yoksul sınıfların birliğini bozmak için yasal düzenlemelerle ırk ayrımını kurumsallaştırdılar. Yoksul beyazlara oy hakkı ve küçük imtiyazlar verilerek sistemle bütünleşmeleri sağlanırken; siyahlar tamamen haklarından mahrum bırakılarak <strong>ömür boyu ve kalıtsal köleliğe</strong> mahkum edildi.</p><p><strong>Yasal Kilitler:</strong> 1691\'de siyah kölelerin serbest bırakılması yasaklandı. 1672\'de İngiliz Kraliyeti, filozof John Locke\'un da büyük hissedarı olduğu Kraliyet Afrika Şirketi\'ni kurarak köle ticaretini tekelleştirdi. Çocuğun durumunun annenin statüsüne bağlı olacağını belirleyen <em>"Partus sequitur ventrem"</em> yasasıyla ırk temelli kölelik nesiller boyu aktarılacak şekilde hukuksal olarak icat edildi.</p>'
          },
          mapState: {
            zoom: 'virginia_focus',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['virginia', 'london']
          }
        }
      ],
      quiz: [
        {
          question: {
            en: 'What did the 1676 Bacon\'s Rebellion represent in the transition of American slavery?',
            tr: '1676 Bacon İsyanı, Amerikan köleliğine geçişte neyi temsil ediyordu?'
          },
          options: [
            { text: { en: 'A successful Native American resistance movement.', tr: 'Başarılı bir Amerikan yerlisi direniş hareketini.' }, correct: false },
            { text: { en: 'A joint uprising of white and black indentured servants, pushing elites to divide them by race.', tr: 'Beyaz ve siyah sözleşmeli işçilerin ortak ayaklanmasını; bu da elitleri onları ırk temelinde bölmeye itti.' }, correct: true },
            { text: { en: 'The initial establishment of the Royal African Company.', tr: 'Kraliyet Afrika Şirketi\'nin ilk kuruluşunu.' }, correct: false },
            { text: { en: 'A rebellion led by Spanish treasure fleets.', tr: 'İspanyol hazine filoları tarafından başlatılan bir isyanı.' }, correct: false }
          ],
          explanation: {
            en: 'Bacon\'s Rebellion united white and black indentured servants. To prevent future alliances that threatened their property, the ruling class passed laws defining status by race rather than class, establishing hereditary lifetime black slavery.',
            tr: 'Bacon İsyanı, beyaz ve siyah sözleşmeli işçileri bir araya getirmişti. Mülklerini tehdit eden bu tür ortaklıkları önlemek için egemen sınıf, statüyü sınıf yerine ırka göre tanımlayan yasalar çıkardı ve kalıtsal, ömür boyu siyah köleliğini başlattı.'
          }
        },
        {
          question: {
            en: 'Which European nations accounted for nearly 3/4 of all transatlantic slaving voyages?',
            tr: 'Transatlantik köle seferlerinin neredeyse 3/4\'ünü hangi Avrupa ulusları gerçekleştirmiştir?'
          },
          options: [
            { text: { en: 'Spain and France', tr: 'İspanya ve Fransa' }, correct: false },
            { text: { en: 'Britain and Portugal/Brazil', tr: 'İngiltere ve Portekiz/Brezilya' }, correct: true },
            { text: { en: 'The Netherlands and Denmark', tr: 'Hollanda ve Danimarka' }, correct: false },
            { text: { en: 'France and the United States', tr: 'Fransa ve Amerika Birleşik Devletleri' }, correct: false }
          ],
          explanation: {
            en: 'The British and the Portuguese dominated the trade, accounting for about 7 out of 10 voyages and transporting nearly 3/4 of all enslaved Africans across the Atlantic.',
            tr: 'İngilizler ve Portekizliler ticareti domine ederek seferlerin yaklaşık 10\'da 7\'sini gerçekleştirmiş ve transatlantikten taşınan tüm kölelerin neredeyse 3/4\'ünü taşımışlardır.'
          }
        },
        {
          question: {
            en: 'Why did European slave traders remain largely on the African coast instead of occupying the interior before 1800?',
            tr: 'Avrupalı köle tüccarları neden 1800\'den önce iç kesimleri işgal etmek yerine büyük ölçüde Afrika kıyılarında kaldı?'
          },
          options: [
            { text: { en: 'Lack of ships suitable for rivers.', tr: 'Nehirlere uygun gemilerinin olmaması.' }, correct: false },
            { text: { en: 'They lacked commercial goods that interior populations wanted.', tr: 'İç kesimlerdeki nüfusun istediği ticari mallara sahip olmadıkları için.' }, correct: false },
            { text: { en: 'High mortality from malaria/yellow fever and fierce African military resistance.', tr: 'Sıtma/sarı hummadan kaynaklanan yüksek ölüm oranları ve sert Afrikalı askeri direnişi.' }, correct: true },
            { text: { en: 'A papal decree prohibited interior exploration.', tr: 'Bir papalık kararnamesi iç kesimlerin keşfedilmesini yasakladığı için.' }, correct: false }
          ],
          explanation: {
            en: 'Europeans lacked immunity to malaria and yellow fever in West Africa and faced powerful African kingdoms (like Ndongo under Queen Nzinga) capable of defending their territories.',
            tr: 'Avrupalılar Batı Afrika\'daki sıtma ve sarı hummaya karşı bağışıklığa sahip değildi ve topraklarını savunabilen güçlü Afrika krallıklarıyla (Kraliçe Nzinga yönetimindeki Ndongo gibi) karşı karşıyaydılar.'
          }
        },
        {
          question: {
            en: 'What crop drove the vast majority (nearly 90%) of the slave trade demand?',
            tr: 'Köle ticareti talebinin ezici çoğunluğunu (yaklaşık %90) hangi ürün yönlendirmiştir?'
          },
          options: [
            { text: { en: 'Tobacco', tr: 'Tütün' }, correct: false },
            { text: { en: 'Cotton', tr: 'Pamuk' }, correct: false },
            { text: { en: 'Sugar cane', tr: 'Şeker kamışı' }, correct: true },
            { text: { en: 'Rice', tr: 'Pirinç' }, correct: false }
          ],
          explanation: {
            en: 'Sugar cane was extremely labor-intensive and highly lucrative. The expansion of sugar plantations in Brazil and the Caribbean was the primary engine driving transatlantic slave voyages.',
            tr: 'Şeker kamışı son derece yoğun iş gücü gerektiren ve çok kazançlı bir üründü. Brezilya ve Karayipler\'deki şeker plantasyonlarının genişlemesi, transatlantik köle seferlerini yönlendiren ana motor oldu.'
          }
        },
        {
          question: {
            en: 'Who was a famous major stockholder of the Royal African Company chartered in 1672?',
            tr: '1672\'de kurulan Kraliyet Afrika Şirketi\'nin ünlü büyük hissedarlarından biri kimdir?'
          },
          options: [
            { text: { en: 'Nathaniel Bacon', tr: 'Nathaniel Bacon' }, correct: false },
            { text: { en: 'John Locke', tr: 'John Locke' }, correct: true },
            { text: { en: 'Thomas Jefferson', tr: 'Thomas Jefferson' }, correct: false },
            { text: { en: 'William Penn', tr: 'William Penn' }, correct: false }
          ],
          explanation: {
            en: 'The English philosopher John Locke, famous for advocating universal liberty and human rights, was a significant stockholder in the Royal African Company, illustrating the paradox of Enlightenment liberties alongside racial slavery.',
            tr: 'Evrensel özgürlük ve insan haklarını savunmasıyla ünlü İngiliz filozof John Locke, Kraliyet Afrika Şirketi\'nin önemli bir hissedarıydı; bu durum ırksal kölelikle bir arada var olan Aydınlanma özgürlüklerinin çelişkisini gösterir.'
          }
        }
      ]
    },
    4: {
      id: 4,
      themeColor: '#2563eb', // Royal Blue
      title: {
        en: 'Week 4: The American Revolution',
        tr: '4. Hafta: Amerika Devrimi'
      },
      slides: [
        {
          title: {
            en: 'The 13 British Colonies',
            tr: '13 İngiliz Kolonisi'
          },
          text: {
            en: '<p><strong>Demographics and British Identity:</strong> By the mid-18th century, the thirteen British colonies lining the Atlantic seaboard had grown to over 2 million residents. These colonists strongly identified as proud British subjects, sharing in the wealth and prestige of the empire.</p><p><strong>"Salutary Neglect" and Political Autonomy:</strong> Due to London\'s hands-off administrative approach, the colonies developed deep traditions of self-governance. Wide land ownership enabled <strong>60% to 80%</strong> of white adult males to vote, compared to just 20% in Great Britain. Each colony had its own elected legislature that controlled local taxes and budgets, fostering a strong sense of local representation.</p>',
            tr: '<p><strong>Atlantik Kıyısındaki Demografik Yükseliş:</strong> 18. yüzyılda Atlantik kıyısında yer alan 13 İngiliz kolonisi, hızlı bir nüfus artışı ile yaklaşık 2 milyon nüfusa ulaşmıştı. Bu nüfus kendilerini yasal olarak İngiliz tebaası olarak görüyor ve Britanya İmparatorluğu\'nun bir parçası olmaktan gurur duyuyordu.</p><p><strong>"Faydalı İhmal" (Salutary Neglect):</strong> Londra yönetimi, kolonileri uzun süre gevşek ve kendi haline bırakan bir idari politika yürütmüştü. Bu durum, kolonilerde benzersiz bir yerel siyasi özerklik ve temsil gücü doğurdu: İngiltere\'de toprak sahibi beyaz erkeklerin sadece %20\'si oy kullanabilirken, kolonilerde geniş mülk sahipliği sayesinde bu oran <strong>%60 ila %80</strong> arasındaydı. Her koloni kendi yerel meclisini (assemblies) seçiyor ve yerel vergileri bu meclisler belirliyordu.</p>'
          },
          mapState: {
            zoom: 'north_america',
            highlightRegions: ['thirteen_colonies'],
            activeRoutes: [],
            markers: ['boston', 'philadelphia', 'virginia']
          }
        },
        {
          title: {
            en: 'Diversity of Colonial Structure',
            tr: 'Koloni Yapılarının Çeşitliliği'
          },
          text: {
            en: '<p><strong>Structural Division of the Colonies:</strong> The colonies operated under three distinct institutional models:<ul><li><strong>Charter/Corporate Colonies:</strong> Highly autonomous colonies like Connecticut and Rhode Island that elected their own governors.</li><li><strong>Proprietary Colonies:</strong> Land grants managed by individuals or families, such as Pennsylvania (William Penn) and Maryland (Lord Baltimore).</li><li><strong>Royal Colonies:</strong> Directly overseen by the Crown with royal governors, including New York, Massachusetts, and the Carolinas.</li></ul></p><p><strong>Religious Havens & Risk Culture:</strong> The colonies served as refuges for persecuted religious groups (Puritans in New England, Quakers in Pennsylvania, and Catholics in Maryland). This religious plurality, combined with abundant land, cultivated a distinct culture of individualism and local independence.</p>',
            tr: '<p><strong>Farklı Kurumsal Yapılar:</strong> 13 koloni homojen olmayıp üç ana kurumsal modele göre örgütlenmişti:<ul><li><strong>Şirket Kolonileri:</strong> Kendi valilerini seçen Connecticut ve Rhode Island gibi özerk yapılar.</li><li><strong>Şahıs/Mülkiyet Kolonileri:</strong> Pennsylvania (William Penn) ve Maryland (Lord Baltimore) gibi kralın şahıslara veya ailelere hibe ettiği koloniler.</li><li><strong>Kraliyet Kolonileri:</strong> Valisi doğrudan Londra tarafından atanan New York, Massachusetts ve Carolinalar.</li></ul></p><p><strong>Dini Sığınaklar ve Girişimcilik:</strong> Koloniler İngiltere\'deki dini baskılardan kaçan Püritenler (New England), Kuakerlar (Pennsylvania) ve Katolikler (Maryland) için sığınak olmuştu. Bu inanç çeşitliliği ve ucuz toprağa erişim, kolonilerde bağımsız hareket etme ve risk alma kültürünü besledi.</p>'
          },
          mapState: {
            zoom: 'north_america',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['boston', 'philadelphia', 'maryland', 'carolina']
          }
        },
        {
          title: {
            en: 'The Spark: The Financial Debt of War',
            tr: 'Kıvılcım: Savaşın Finansal Borcu'
          },
          text: {
            en: '<p><strong>The Cost of Global Victory:</strong> The French and Indian War (the North American theater of the Seven Years\' War) ended in 1763 with a total British victory, ejecting France from Canada. However, the military campaign doubled Britain\'s national debt and drained the royal treasury.</p><p><strong>The End of Neglect:</strong> To finance the debt and fund British troops stationed on the frontier, Parliament abandoned "salutary neglect." The <strong>1765 Stamp Act</strong> was the first direct tax levied on internal colonial commerce, requiring tax stamps on all legal documents, newspapers, and playing cards. It united and angered the most vocal colonists: lawyers, printers, and merchants.</p>',
            tr: '<p><strong>Yedi Yıl Savaşlarının Faturası:</strong> İngiltere ile Fransa arasında küresel ölçekte gerçekleşen Yedi Yıl Savaşları (Amerika\'daki adıyla Fransız ve Kızılderili Savaşları) 1763\'te İngiliz zaferiyle sonuçlanmış ve Fransa Kuzey Amerika\'dan atılmıştı. Ancak bu zafer Britanya kraliyet hazinesini iflasın eşiğine getirdi.</p><p><strong>Doğrudan Vergilendirme Dönemi:</strong> Savaşın borçlarını ödemek ve kolonileri korumak amacıyla kurulan ordunun masraflarını karşılamak için İngiliz Parlamentosu, kolonileri doğrudan vergilendirmeye karar verdi. 1765 yılında çıkarılan <strong>Damga Vergisi Yasası (Stamp Act)</strong>, koloni içindeki her türlü kağıt, gazete ve yasal evrakı vergilendiren ilk doğrudan yasa oldu. Bu yasa, direnişi örgütleyecek araçlara ve finansal güce sahip olan avukatları, matbaacıları ve tüccarları doğrudan hedef alarak büyük bir infiale yol açtı.</p>'
          },
          mapState: {
            zoom: 'atlantic',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['london', 'boston', 'paris']
          }
        },
        {
          title: {
            en: 'No Taxation Without Representation',
            tr: 'Temsili Olmayan Vergilendirmeye Hayır'
          },
          text: {
            en: '<p><strong>Property as the Foundation of Liberty:</strong> Colonists argued that under the English Bill of Rights, property was the basis of liberty. Taking property (through taxes) without consent was deemed equivalent to slavery.</p><p><strong>"No Taxation Without Representation":</strong> Since the colonies sent no representatives to the Westminster Parliament, they declared all parliamentary taxes unconstitutional. Protests spread from Virginia, and in Boston, mob actions forced stamp agents to resign. In 1773, political escalation culminated in the <strong>Boston Tea Party</strong>, where colonists disguised as Mohawk Indians dumped 342 chests of British East India Company tea into the harbor to protest the Tea Act.</p>',
            tr: '<p><strong>Mülkiyet ve Hürriyet Bağı:</strong> Kolonistler, İngiliz anayasal haklarına göre mülkiyetin özgürlüğün temeli olduğunu; bir insanın rızası olmadan mülkünün elinden alınmasının (vergilendirilmesinin) onu köle durumuna düşüreceğini savundular.</p><p><strong>Temsili Olmayan Vergilendirme:</strong> İngiliz Parlamentosu\'nda tek bir koloni temsilcisi bile yoktu. Bu yüzden <strong>"Temsil Yoksa Vergi de Yok" (No Taxation Without Representation)</strong> sloganı etrafında birleştiler. Direniş Virginia Meclisi\'nden başlayarak tüm kolonilere yayıldı. Boston\'da isyanlar patlak verdi ve 1773\'te Doğu Hindistan Şirketi\'nin çay tekeline karşı çay sandıklarının limana döküldüğü ünlü <strong>Boston Çay Partisi (Boston Tea Party)</strong> ile zirveye ulaştı.</p>'
          },
          mapState: {
            zoom: 'boston_focus',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['boston']
          }
        },
        {
          title: {
            en: 'Escalation to Armed Rebellion',
            tr: 'Silahlı İsyana Doğru Tırmanış'
          },
          text: {
            en: '<p><strong>The Intolerable Acts & Armed Clashes:</strong> In retaliation for the tea protest, Parliament passed the Coercive Acts (called "Intolerable Acts" in America) in 1774, suspending the Massachusetts charter and closing Boston Harbor. British troops occupied the city.</p><p><strong>Point of No Return:</strong> The colonies formed the Continental Congress to coordinate a joint boycott. In April 1775, armed militia clashed with British regulars at Lexington and Concord. In August, King George III issued a Proclamation of Rebellion, and in December, Parliament passed the <strong>Prohibitory Act</strong>, placing a naval blockade on all American trade and declaring colonial ships open to capture, making independence the sole option for survival.</p>',
            tr: '<p><strong>Askeri Baskı ve Coercive Acts:</strong> Boston Çay Partisi\'ne yanıt olarak İngiltere, Boston Limanı\'nı kapatan ve yerel meclisleri fesheden sert <em>"Çekilmez Yasalar" (Coercive/Intolerable Acts)</em> çıkardı. Boston askeri işgal altına alındı.</p><p><strong>İsyanın İlanı:</strong> Koloniler, ortak hareket etmek için 1774\'te I. Kıtasal Kongre\'yi (Continental Congress) topladılar. Nisan 1775\'te Lexington ve Concord\'da ilk silahlar patladı. Ağustos 1775\'te Kral III. George, kolonilerin açıkça isyan durumunda olduğunu ilan etti. Aralık 1775\'te çıkarılan <strong>Yasaklayıcı Yasa (Prohibitory Act)</strong> ile tüm koloni limanları abluka altına alındı ve koloni gemileri düşman ilan edildi. Bu durum, koloniler için bağımsızlık ilan etmekten başka bir yol bırakmadı.</p>'
          },
          mapState: {
            zoom: 'north_america',
            highlightRegions: [],
            activeRoutes: ['blockade_lines'],
            markers: ['boston', 'philadelphia']
          }
        },
        {
          title: {
            en: 'Declaration of Independence (1776)',
            tr: 'Bağımsızlık Bildirgesi (1776)'
          },
          text: {
            en: '<p><strong>Enlightenment Principles:</strong> In June 1776, the Continental Congress appointed a committee to draft a formal separation statement. Drafted by Thomas Jefferson and ratified on <strong>July 4, 1776</strong>, the Declaration of Independence combined Locke\'s social contract theory with the assertion of inalienable rights: "Life, Liberty, and the pursuit of Happiness."</p><p><strong>Sovereignty and the Continental Army:</strong> The document declared that governments derive their just powers from the consent of the governed, asserting the right to overthrow tyrannical rule. To wage the war, Congress appointed George Washington of Virginia as Commander-in-Chief of the newly organized Continental Army.</p>',
            tr: '<p><strong>Aydınlanma ve Doğal Haklar:</strong> Kıtasal Kongre, Haziran 1776\'da bağımsızlığı taslak haline getirmek üzere Thomas Jefferson, Benjamin Franklin ve John Adams\'ın da yer aldığı bir komite kurdu. <strong>4 Temmuz 1776</strong>\'da kabul edilen bildirge, John Locke\'un fikirlerinden esinlenerek insanın "yaşam, özgürlük ve mutluluğu arama" gibi devredilemez doğal haklarını ilan etti.</p><p><strong>Kıta Ordusu ve George Washington:</strong> Bildirge, meşruiyetini halkın rızasından almayan hükümetlerin yıkılabileceğini savunarak kralın egemenliğini reddetti. Savaşın yönetimini üstlenmek üzere Virginia\'lı aristokrat çiftçi ve asker George Washington, yeni kurulan Kıta Ordusu\'nun (Continental Army) Başkomutanı olarak atandı.</p>'
          },
          mapState: {
            zoom: 'north_america',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['philadelphia', 'virginia']
          }
        },
        {
          title: {
            en: 'French Alliance and Victory (1778-1783)',
            tr: 'Fransız İttifakı ve Zafer (1778-1783)'
          },
          text: {
            en: '<p><strong>Globalizing the Conflict:</strong> The conflict transformed into a global war after the American victory at Saratoga (1777) convinced France to sign a formal alliance in 1778. Spain and the Dutch Republic subsequently joined the coalition against Britain.</p><p><strong>Yorktown & The Treaty of Paris:</strong> French financial subsidies, infantry, and crucial naval power turned the tide. In 1781, joint French-American forces trapped Cornwallis at Yorktown, cutting off British escape by sea and forcing their surrender. In the <strong>1783 Treaty of Paris</strong>, Great Britain formally recognized the independence of the United States, ceding all territory east of the Mississippi River.</p>',
            tr: '<p><strong>Savaşın Küreselleşmesi:</strong> Amerika Devrimi, 1777 Saratoga Zaferi\'nin ardından Fransa\'nın 1778\'de ABD ile resmi ittifak kurmasıyla küresel bir savaşa dönüştü. Fransa, Yedi Yıl Savaşı\'nın intikamını almak ve İngiltere\'yi zayıflatmak için savaşa girdi.</p><p><strong>Yorktown ve Paris Antlaşması:</strong> Fransız mali yardımı, kara ordusu (Rochambeau komutasında) ve en önemlisi Fransız donanması savaşın kaderini belirledi. 1781\'de Fransız-Amerikan birleşik kuvvetleri General Cornwallis komutasındaki İngiliz ordusunu Yorktown Yarımadası\'nda kuşatarak teslim olmaya zorladı. 1783\'te imzalanan <strong>Paris Antlaşması (Treaty of Paris)</strong> ile İngiltere, ABD\'nin bağımsızlığını ve Mississippi Nehri\'ne kadar uzanan topraklarını resmen tanıdı.</p>'
          },
          mapState: {
            zoom: 'atlantic',
            highlightRegions: [],
            activeRoutes: ['french_navy_route'],
            markers: ['yorktown', 'paris', 'london']
          }
        },
        {
          title: {
            en: 'Drafting the Constitution (1787)',
            tr: 'Anayasanın Hazırlanması (1787)'
          },
          text: {
            en: '<p><strong>Replacing the Articles of Confederation:</strong> The initial wartime government framework was weak, leaving the federal government without the power to tax. To create a stronger union, delegates met at the Constitutional Convention in Philadelphia in 1787.</p><p><strong>Separation of Powers & The Great Compromise:</strong> To balance small and large states, the Connecticut Compromise created a bicameral Congress: a House based on population and a Senate with equal state representation. Fearful of a new monarchy, they engineered a presidency regulated by electors, establishing a strict <strong>separation of powers (Legislative, Executive, Judicial)</strong> with checks and balances. However, to keep southern states in the Union, they compromised on slavery, codifying the 3/5ths representation clause.</p>',
            tr: '<p><strong>Konfederasyonun Zayıflığı ve Konvansiyon:</strong> İlk yönetim anayasası olan Konfederasyon Maddeleri, federal hükümete vergi toplama yetkisi vermediği için zayıf kalmış ve borçlar ödenememişti. Bunu düzeltmek amacıyla 1787\'de Philadelphia\'da Federal Konvansiyon toplandı.</p><p><strong>Kurumsal Denge ve Güçler Ayrılığı:</strong> Anayasa hazırlanırken büyük ve küçük eyaletlerin temsil sorununu çözmek için <em>Connecticut Uzlaşması</em> ile iki meclisli parlamento kuruldu. Monarşiden kaçınmak için seçiciler kurulu ile seçilen güçlü bir Başkanlık makamı yaratıldı ve Montesquieu\'nun fikirlerine uygun olarak <strong>Yasama, Yürütme ve Yargı güçler ayrılığı</strong> ile "denetleme ve dengeleme" (checks and balances) sistemi kuruldu. Kölelik konusu ise birliği korumak amacıyla güney eyaletlerine taviz verilerek (3/5 kuralı vb.) ertelendi.</p>'
          },
          mapState: {
            zoom: 'north_america',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['philadelphia']
          }
        }
      ],
      quiz: [
        {
          question: {
            en: 'What was the primary goal of the 1765 Stamp Act introduced by the British Parliament?',
            tr: 'İngiliz Parlamentosu tarafından çıkarılan 1765 Damga Vergisi Yasası\'nın temel amacı neydi?'
          },
          options: [
            { text: { en: 'To fund public education in the colonies.', tr: 'Kolonilerde kamu eğitimini finanse etmek.' }, correct: false },
            { text: { en: 'To raise revenue to pay off British war debts from the French and Indian Wars.', tr: 'Fransız ve Kızılderili Savaşları\'ndan kalan İngiliz savaş borçlarını ödemek için gelir elde etmek.' }, correct: true },
            { text: { en: 'To regulate the shipping of sugar from the Caribbean.', tr: 'Karayipler\'den gelen şeker sevkiyatını düzenlemek.' }, correct: false },
            { text: { en: 'To suppress the printing of anti-royalist newspapers.', tr: 'Kraliyet karşıtı gazetelerin basılmasını engellemek.' }, correct: false }
          ],
          explanation: {
            en: 'The Seven Years\' War (French and Indian Wars) left Britain victorious but deeply in debt. The Parliament sought to recoup these expenses by taxing internal colonial transactions via the Stamp Act.',
            tr: 'Yedi Yıl Savaşı (Fransız ve Kızılderili Savaşları) İngiltere\'yi galip ancak borç içinde bıraktı. Parlamento, Damga Vergisi Yasası ile koloni içi işlemleri vergilendirerek bu giderleri karşılamaya çalıştı.'
          }
        },
        {
          question: {
            en: 'Why did the Stamp Act provoke anger specifically from influential colonial figures like lawyers and merchants?',
            tr: 'Damga Vergisi Yasası neden özellikle avukatlar ve tüccarlar gibi nüfuzlu koloni figürlerinin öfkesini çekti?'
          },
          options: [
            { text: { en: 'It restricted their travel to England.', tr: 'İngiltere\'ye seyahatlerini kısıtladığı için.' }, correct: false },
            { text: { en: 'It taxed physical paper used for contracts, newspapers, and legal documents.', tr: 'Sözleşmeler, gazeteler ve yasal belgeler için kullanılan fiziksel kağıdı vergilendirdiği için.' }, correct: true },
            { text: { en: 'It outlawed the legal profession in the colonies.', tr: 'Kolonilerde avukatlık mesleğini yasa dışı kıldığı için.' }, correct: false },
            { text: { en: 'It forced them to enlist in the Royal Army.', tr: 'Kraliyet Ordusu\'na yazılmaya zorladığı için.' }, correct: false }
          ],
          explanation: {
            en: 'The Stamp Act required stamped paper for all official documents, direct hits on lawyers, printers, and merchants. These groups had the financial means and literacy to organize effective political resistance.',
            tr: 'Damga Vergisi Yasası, tüm resmi belgeler için damgalı kağıt kullanılmasını şart koşuyordu; bu da doğrudan avukatları, matbaacıları ve tüccarları vurdu. Bu gruplar etkili siyasi direniş örgütleyecek mali güce ve okuryazarlığa sahipti.'
          }
        },
        {
          question: {
            en: 'What did the 1775 Prohibitory Act do that accelerated the push for American independence?',
            tr: '1775 tarihli Yasaklayıcı Yasa (Prohibitory Act) Amerikan bağımsızlık arayışını hızlandıran ne yaptı?'
          },
          options: [
            { text: { en: 'It banned the import of tea.', tr: 'Çay ithalatını yasakladı.' }, correct: false },
            { text: { en: 'It declared slavery illegal in the colonies.', tr: 'Kolonilerde köleliği yasa dışı ilan etti.' }, correct: false },
            { text: { en: 'It banned commerce with the colonies and removed colonial ships from British protection.', tr: 'Kolonilerle ticareti yasakladı ve koloni gemilerini İngiliz korumasından çıkardı.' }, correct: true },
            { text: { en: 'It appointed George Washington as governor of Virginia.', tr: 'George Washington\'ı Virginia valisi olarak atadı.' }, correct: false }
          ],
          explanation: {
            en: 'Passed by Parliament in December 1775, the Prohibitory Act shut down colonial commerce and treated colonial vessels as enemy ships, making armed conflict and independence inevitable.',
            tr: 'Aralık 1775\'te Parlamento tarafından kabul edilen Yasaklayıcı Yasa, koloni ticaretini durdurdu ve koloni gemilerine düşman gemisi muamelesi yaparak silahlı çatışmayı ve bağımsızlığı kaçınılmaz hale getirdi.'
          }
        },
        {
          question: {
            en: 'Which compromise resolved the debate on state representation in Congress at the 1787 Federal Convention?',
            tr: '1787 Federal Konvansiyonu\'nda Kongre\'deki eyalet temsili tartışmasını hangi uzlaşma çözmüştür?'
          },
          options: [
            { text: { en: 'The Virginia Plan', tr: 'Virginia Planı' }, correct: false },
            { text: { en: 'The New Jersey Accord', tr: 'New Jersey Anlaşması' }, correct: false },
            { text: { en: 'The Connecticut Compromise', tr: 'Connecticut Uzlaşması' }, correct: true },
            { text: { en: 'The Three-Fifths Clause', tr: 'Beşte Üç Maddesi' }, correct: false }
          ],
          explanation: {
            en: 'The Connecticut Compromise (Great Compromise) created a bicameral Congress: a House of Representatives based on population (favoring large states) and a Senate with equal two-senator representation per state (favoring small states). This broke the deadlock between the Virginia and New Jersey plans.',
            tr: 'Connecticut Uzlaşması (Büyük Uzlaşma), iki meclisli bir Kongre yarattı: nüfusa dayalı bir Temsilciler Meclisi (büyük eyaletleri destekleyen) ve eyalet başına eşit iki senatör temsili olan bir Senato (küçük eyaletleri destekleyen). Bu Virginia ve New Jersey planları arasındaki çıkmazı kırdı.'
          }
        }
      ]
    },
    5: {
      id: 5,
      themeColor: '#7c3aed', // Violet
      title: {
        en: 'Week 5: The French Revolution',
        tr: '5. Hafta: Fransız Devrimi'
      },
      slides: [
        {
          title: {
            en: 'Deep Connections to America',
            tr: 'Amerika ile Derin Bağlar'
          },
          text: {
            en: '<p><strong>Intellectual & Personal Networks:</strong> The French and American revolutions were structurally interconnected. French officers like the Marquis de Lafayette fought alongside American forces, returning to France with practical experience in revolutionary mobilization and republican ideals. Thinkers of the <em>"Republic of Letters"</em> engaged in transnational dialogue, shaping public opinion.</p><p><strong>The Fiscal Trigger:</strong> The most decisive link was financial. France\'s extensive military and monetary aid to the American rebels bankrupt the French state. This staggering debt precipitated the domestic fiscal crisis that forced the monarchy to call the Estates General, opening the door to revolution.</p>',
            tr: '<p><strong>Fikirlerin ve İnsanların Dolaşımı:</strong> Fransız ve Amerikan devrimleri Atlantik dünyasında birbirine derinden bağlıydı. Amerikan Bağımsızlık Savaşı\'nda Amerikalıların safında savaşan Marquis de Lafayette gibi Fransız subaylar, ülkelerine döndüklerinde anayasal özgürlük ve halk egemenliği fikirlerinin ateşli savunucuları oldular. Entelektüeller, <em>"Edebiyat Cumhuriyeti" (Republic of Letters)</em> çerçevesinde yoğun bir yazışma ağı kurdular.</p><p><strong>Finansal İflasın Tetikleyicisi:</strong> İlişkinin en somut ve yıkıcı sonucu ise finansal oldu. Fransa Krallığı\'nın İngiltere\'yi zayıflatmak amacıyla Amerika\'ya gönderdiği devasa mali ve askeri yardımlar (donanma ve ordu masrafları) Fransız hazinesini tamamen kuruttu. Bu borç yükü, devrimi fiilen başlatan derin mali ve anayasal krizi tetikledi.</p>'
          },
          mapState: {
            zoom: 'atlantic',
            highlightRegions: [],
            activeRoutes: ['revolutionary_ideas_flow'],
            markers: ['paris', 'philadelphia', 'versailles']
          }
        },
        {
          title: {
            en: 'The Ancien Régime: A Society of Privilege',
            tr: 'Eski Rejim: Ayrıcalıklar Toplumu'
          },
          text: {
            en: '<p><strong>The Estates System:</strong> Pre-revolutionary France (the <em>Ancien Régime</em>) was legally divided into three rigid orders or Estates:<ul><li><strong>The First Estate:</strong> The Catholic Clergy (0.5% of the population), owning 10% of the land and exempt from direct taxes.</li><li><strong>The Second Estate:</strong> The Nobility (1.5% of the population), holding feudal rights, monopolies on top offices, and tax exemptions.</li><li><strong>The Third Estate:</strong> The remaining <strong>98%</strong> of the population, ranging from wealthy merchants (bourgeoisie) to impoverished rural peasants and urban workers.</li></ul></p><p><strong>Systemic Inequality:</strong> The entire tax burden (including the hated salt tax, <em>gabelle</em>) fell on the Third Estate, which possessed no political voice. Political power was absolute and centralized in the King\'s court at Versailles.</p>',
            tr: '<p><strong>Ancien Régime ve Üç Tabaka:</strong> Devrim öncesi Fransız mutlakiyetçi toplumu (Eski Rejim), hukuksal olarak keskin sınırlarla ayrılmış Üç Zümre (Estates) üzerine kuruluydu:<ul><li><strong>Birinci Tabaka:</strong> Nüfusun %0.5\'ini oluşturan, devasa topraklara sahip olan ve vergi ödemeyen Ruhban sınıfı (Clergy).</li><li><strong>İkinci Tabaka:</strong> Nüfusun %1.5\'ini oluşturan, orduda ve devlette tekel sahibi olan, yine vergi ödemeyen Soylular (Nobility).</li><li><strong>Üçüncü Tabaka:</strong> Köylüler, zanaatkarlar ve burjuvaziyi barındıran, nüfusun <strong>%98\'ini</strong> oluşturan ancak hiçbir ayrıcalığı olmayan halk tabakası.</li></ul></p><p><strong>Vergi Adaletsizliği:</strong> Devletin tüm vergi yükü (tuz vergisi gabelle, toprak vergisi taille dahil) en yoksul olan Üçüncü Tabaka\'nın omuzlarındaydı. Tüm idari ve siyasi güç ise Versailles Sarayı\'nda Kral\'ın şahsında merkezileşmişti.</p>'
          },
          mapState: {
            zoom: 'france_focus',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['versailles', 'paris']
          }
        },
        {
          title: {
            en: 'Enlightenment and the Public Sphere',
            tr: 'Aydınlanma ve Kamusal Alan'
          },
          text: {
            en: '<p><strong>The Critique of Absolutism:</strong> The rise of the new commercial bourgeoisie coincided with the peak of the Enlightenment. Philosophers like Montesquieu (separation of powers), Voltaire (rationalism and religious tolerance), and Rousseau (social contract and popular sovereignty) undermined the divine right of kings.</p><p><strong>The Desacralization of Authority:</strong> These radical ideas spread through a new <strong>"public sphere"</strong> of salons, cafés, printing shops, and Masonic lodges. Concurrently, a massive underground press distributed satirical pamphlets and scandals targeting the royal family, stripping the monarchy of its sacred aura and making republicanism thinkable.</p>',
            tr: '<p><strong>Felsefe ve Siyasi Alternatifler:</strong> Burjuvazinin ekonomik olarak güçlenmesi, 18. yüzyıl Aydınlanma hareketiyle çakıştı. Montesquieu (güçler ayrılığı), Voltaire (akılcılık ve dini hoşgörü) ve Rousseau (toplum sözleşmesi ve genel irade) gibi düşünürler, mevcut teokratik ve feodal düzenin meşruiyetini entelektüel düzeyde sarstılar.</p><p><strong>Kutsallıktan Arındırma (Desacralization):</strong> Bu yeni fikirler sadece akademik çevrelerde kalmadı; kahvehaneler, salonlar, okuma kulüpleri ve mason locaları gibi yeni <strong>"kamusal alanlarda"</strong> tartışıldı. Ayrıca yeraltında basılan hiciv broşürleri (satirical pamphlets) ve saray skandallarını anlatan yayınlar, monarşinin kutsallığını halkın gözünde yerle bir ederek Kral\'sız bir dünya hayalini gerçeğe dönüştürdü.</p>'
          },
          mapState: {
            zoom: 'france_focus',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['paris']
          }
        },
        {
          title: {
            en: 'From Estates General to National Assembly',
            tr: 'Etats Généraux\'dan Ulusal Meclis\'e'
          },
          text: {
            en: '<p><strong>The Voting Deadlock:</strong> Facing bankruptcy, Louis XVI convoked the Estates General in May 1789. Although the Third Estate was granted double representation, voting remained by order (one vote per Estate). This allowed the Clergy and Nobility to easily align and outvote the Third Estate (98% of the nation) 2-to-1.</p><p><strong>The Tennis Court Oath:</strong> Rejecting this deadlock, the Third Estate declared itself the <strong>National Assembly</strong> in June 1789, claiming sole sovereignty. Locked out of their meeting hall, they gathered at a nearby indoor tennis court, swearing the Tennis Court Oath: a pledge not to disband until they had drafted a constitution for France.</p>',
            tr: '<p><strong>Kilitlenen Meclis:</strong> Mali olarak tıkanan XVI. Louis, soylulardan vergi talep etme girişimleri reddedilince 175 yıldır toplanmayan <em>Etats Généraux</em>\'yu (Sınıflar Meclisi) Mayıs 1789\'da Versailles\'da topladı. Ancak oy sistemi adaletsizdi: Her tabakanın nüfus oranına bakılmaksızın tek bir toplu oy hakkı vardı, bu da soylular ve ruhbanların birleşerek Üçüncü Tabaka\'yı (nüfusun %98\'i) her zaman 2\'ye 1 mağlup etmesi demekti.</p><p><strong>Tenis Kortu Yemini:</strong> Üçüncü Tabaka temsilcileri bu adaletsizliği reddederek Haziran 1789\'da kendilerini tüm ulusun gerçek temsilcisi olan <strong>Ulusal Meclis (National Assembly)</strong> ilan ettiler. Toplantı salonlarından kilitlenerek dışarı atılınca, yakındaki kapalı bir tenis kortuna sığınarak Fransa\'ya bir anayasa kazandırana kadar asla dağılmayacaklarına dair ant içtiler (Tenis Kortu Yemini).</p>'
          },
          mapState: {
            zoom: 'france_focus',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['versailles']
          }
        },
        {
          title: {
            en: 'The Storming of the Bastille & Feudal Collapse',
            tr: 'Bastille Baskını ve Feodalizmin Çöküşü'
          },
          text: {
            en: '<p><strong>Popular Insurrection & The Bastille:</strong> As rumors spread that the King was assembling troops to dissolve the Assembly, Parisian crowds mobilized. On <strong>July 14, 1789</strong>, they stormed the Bastille, a medieval fortress and state prison representing royal tyranny, seizing gunpowder and establishing municipal control.</p><p><strong>"The Great Fear" & Feudal Abolition:</strong> In the countryside, rumors of aristocratic plots prompted peasants to sack manor houses and burn feudal debt registries. To quell the chaos, the National Assembly acted decisively on the night of August 4, 1789, formally abolishing feudalism, personal servitude, seigneurial privileges, and noble tax exemptions, establishing civic equality.</p>',
            tr: '<p><strong>Halkın Müdahalesi ve Bastille:</strong> Kral\'ın meclisi dağıtmak için Paris çevresine asker yığması üzerine halk, <strong>14 Temmuz 1789</strong>\'da kraliyet otoritesinin ve zulmünün sembolü olan Bastille Kalesi\'ni basarak silah ve barut ele geçirdi. Bu olay, devrimin halk tabanına yayılmasını ve geri dönülmez yola girilmesini sağladı.</p><p><strong>"Büyük Korku" (La Grande Peur):</strong> Paris\'teki olaylar kırsala sıçradı. Köylüler, soyluların kendilerini katletmek için haydut kiraladığı söylentileri üzerine şatolara saldırdı ve feodal borç kayıtlarını yaktı. Kırsaldaki bu şiddet karşısında dehşete düşen meclis, 4 Ağustos 1789 gecesi feodalizmi, senyörlük haklarını ve aristokratik vergi muafiyetlerini tamamen kaldırdı. Soy yerine liyakat ve mülkiyet düzeni kuruldu.</p>'
          },
          mapState: {
            zoom: 'france_focus',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['paris']
          }
        },
        {
          title: {
            en: 'Declaration of the Rights of Man (1789)',
            tr: 'İnsan ve Yurttaş Hakları Bildirisi (1789)'
          },
          text: {
            en: '<p><strong>Universal Declaration of Rights:</strong> On August 26, 1789, the Assembly adopted the Declaration of the Rights of Man and of the Citizen. Rooted in Enlightenment principles, it proclaimed liberty, equality, and the sacred right to private property, stating that sovereignty resides in the nation rather than the monarch.</p><p><strong>The Franchise Divide:</strong> Despite its universal rhetoric, the Assembly introduced a class division:<ul><li><strong>Active Citizens:</strong> Property-owning men who paid a minimum tax and held the right to vote.</li><li><strong>Passive Citizens:</strong> Landless men and all women, who were denied political rights. In response, Olympe de Gouges drafted the Declaration of the Rights of Woman and of the Female Citizen in 1791, demanding political equality.</li></ul></p>',
            tr: '<p><strong>Evrensel Haklar Manifestosu:</strong> Ulusal Meclis, 26 Ağustos 1789\'da devrimin temel felsefesini çizen <em>İnsan ve Yurttaş Hakları Bildirisi</em>\'ni kabul etti. Bildirge; insanların özgür ve haklar yönünden eşit doğduğunu, egemenliğin kaynağının kral değil ulus olduğunu ve özel mülkiyetin dokunulmaz olduğunu ilan etti.</p><p><strong>Siyasi Hakların Sınırları:</strong> Ancak bu evrensel ilkelerin pratik uygulaması sınırlı kaldı:<ul><li><strong>Aktif ve Pasif Vatandaşlar:</strong> Sadece belirli miktarda vergi ödeyen mülk sahibi erkeklere (Aktif Vatandaşlar) seçme seçilme hakkı verildi.</li><li><strong>Yoksullar ve Kadınlar:</strong> Kadınlar ve yoksullar (Pasif Vatandaşlar) siyasi haklardan mahrum bırakıldı. Bu adaletsizliğe karşı Olympe de Gouges 1791\'de <em>Kadın ve Kadın Yurttaş Hakları Bildirisi</em>\'ni yayınlayarak kadın haklarını savundu.</li></ul></p>'
          },
          mapState: {
            zoom: 'france_focus',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['paris']
          }
        },
        {
          title: {
            en: 'Constitutional Monarchy and Left vs. Right',
            tr: 'Anayasal Monarşi ve Sol - Sağ Kavramı'
          },
          text: {
            en: '<p><strong>The Constitutional Compromise:</strong> The Constitution of 1791 established a constitutional monarchy, stripping the King of absolute power and redefining him as the "King of the French." The Assembly also nationalized Catholic Church property and required clergy to swear allegiance to the state.</p><p><strong>Origin of "Left" and "Right":</strong> Seating arrangements in the new Legislative Assembly (October 1791) birthed modern political terminology:<ul><li><strong>The Right:</strong> Constitutional monarchists sitting on the assembly president\'s right, favoring stability and royal prerogative.</li><li><strong>The Left:</strong> Radical republicans (Jacobins and Girondins) sitting on the left, demanding the complete abolition of the monarchy and further democratic reforms.</li></ul></p>',
            tr: '<p><strong>Anayasal Monarşinin Kurulması:</strong> 1791 Anayasası ile Fransa\'da mutlakiyet sona erdi ve anayasal monarşi rejimi kuruldu. Kral\'ın unvanı "Fransa Kralı"ndan "Fransızların Kralı"na dönüştürülerek meşruiyeti ulusa bağlandı. Kilise mülkleri kamulaştırıldı ve rahipler devlet memuru yapıldı.</p><p><strong>Sol-Sağ Siyasi Terminolojisinin Doğuşu:</strong> Ekim 1791\'de toplanan yeni Yasama Meclisi\'ndeki oturma düzeni, dünya siyaset tarihine "Sol ve Sağ" kavramlarını kazandırdı:<ul><li><strong>Sağ Kanat:</strong> Meclis başkanının sağında oturan ve monarşiyi korumak, devrimi yavaşlatmak isteyen ılımlı muhafazakarlar (Fevyanlar).</li><li><strong>Sol Kanat:</strong> Başkanın solunda oturan, monarşiyi tamamen yıkıp cumhuriyet kurmak isteyen radikal değişimciler (Jakobenler ve Jirondenler).</li></ul></p>'
          },
          mapState: {
            zoom: 'france_focus',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['paris']
          }
        },
        {
          title: {
            en: 'Radicalization, War, and the Republic',
            tr: 'Radikalleşme, Savaş ve Cumhuriyet'
          },
          text: {
            en: '<p><strong>The Flight to Varennes:</strong> Unwilling to accept constitutional limitations, Louis XVI attempted to flee Paris in June 1791 to rally royalist forces at the border (the Flight to Varennes). Recognized and arrested, his betrayal shattered the illusion of a loyal king.</p><p><strong>War and the Proclamation of the Republic:</strong> In April 1792, France declared war on Austria and Prussia to defend the revolution. Facing imminent invasion, a newly mobilized French volunteer army won a miraculous victory at Valmy in September 1792. The monarchy was immediately abolished, and the First French Republic was declared. The National Convention tried Louis XVI for high treason, executing him by guillotine in January 1793.</p>',
            tr: '<p><strong>Kralın İhaneti ve Varennes Kaçışı:</strong> XVI. Louis, devrimi kabullenmeyerek mutlak gücünü dış müdahaleyle geri kazanmak amacıyla Haziran 1791\'de Avusturya sınırına doğru gizlice kaçmaya çalıştı (Varennes Kaçışı). Yakalanarak Paris\'e geri getirilen kral, halkın gözünde vatan haini durumuna düştü.</p><p><strong>Savaşın Patlak Vermesi ve Cumhuriyet:</strong> Nisan 1792\'de devrim düşmanlarına karşı Avusturya ve Prusya\'ya savaş ilan edildi. Fransa toprakları işgal edilirken, Eylül 1792\'de Valmy Savaşı\'nda Fransız gönüllü ordusunun kazandığı zafer devrimi kurtardı. Ertesi gün monarşi kaldırılarak Fransa Birinci Cumhuriyeti ilan edildi. Yeni meclis (Ulusal Konvansiyon) XVI. Louis\'yi vatana ihanetten yargıladı ve Ocak 1793\'te <strong>giyotinle idam etti</strong>. Bu idam, devrimi geri dönülmez bir radikal aşamaya taşıdı.</p>'
          },
          mapState: {
            zoom: 'europe_focus',
            highlightRegions: [],
            activeRoutes: ['foreign_invasion_routes'],
            markers: ['paris', 'varennes', 'valmy']
          }
        }
      ],
      quiz: [
        {
          question: {
            en: 'How did France\'s support of the American Revolution affect its internal affairs?',
            tr: 'Fransa\'nın Amerikan Devrimi\'ni desteklemesi kendi içişlerini nasıl etkiledi?'
          },
          options: [
            { text: { en: 'It stabilized the French currency.', tr: 'Fransız para birimini istikrara kavuşturdu.' }, correct: false },
            { text: { en: 'It left France heavily in debt, precipitating a fiscal crisis that triggered the revolution.', tr: 'Fransa\'yı ağır bir borç yükü altında bırakarak devrimi tetikleyen mali krize yol açtı.' }, correct: true },
            { text: { en: 'It convinced Louis XVI to voluntarily abdicate.', tr: 'XVI. Louis\'yi gönüllü olarak tahttan çekilmeye ikna etti.' }, correct: false },
            { text: { en: 'It led to immediate industrialization in Bordeaux.', tr: 'Bordeaux\'da ani bir sanayileşmeye yol açtı.' }, correct: false }
          ],
          explanation: {
            en: 'Funding and fighting alongside the Americans cost huge sums. Combined with an archaic tax system where nobles paid nothing, this debt forced the Crown to convoke the Estates General to find new taxes.',
            tr: 'Amerikalıların yanında savaşmak ve onları finanse etmek devasa meblağlara mal oldu. Soyluların vergi ödemediği eski vergi sistemiyle birleşen bu borç, Kraliyet\'i yeni vergiler bulmak için Estates General\'ı toplamaya zorladı.'
          }
        },
        {
          question: {
            en: 'What was the major voting system conflict during the Estates General meeting in May 1789?',
            tr: 'Mayıs 1789\'daki Estates General toplantısı sırasındaki temel oy verme sistemi çatışması neydi?'
          },
          options: [
            { text: { en: 'The king wanted to exclude the clergy.', tr: 'Kralın ruhban sınıfını dışarıda bırakmak istemesi.' }, correct: false },
            { text: { en: 'The Third Estate demanded voting by head (individual) rather than by Estate (collectively).', tr: 'Üçüncü Tabaka\'nın Sınıf temelinde (toplu) değil, kişi başına (bireysel) oy kullanılmasını talep etmesi.' }, correct: true },
            { text: { en: 'The nobility demanded a military draft.', tr: 'Soyluların askeri zorunluluk talep etmesi.' }, correct: false },
            { text: { en: 'Women demanded voting representation.', tr: 'Kadınların oy kullanma hakkı talep etmesi.' }, correct: false }
          ],
          explanation: {
            en: 'Each of the three Estates got one collective vote. The Nobility and Clergy could always outvote the Third Estate (97% of the population) 2-to-1. The Third Estate demanded individual voting by head.',
            tr: 'Üç zümrenin her birinin bir toplu oy hakkı vardı. Soylular ve Ruhbanlar, Üçüncü Tabaka\'yı (nüfusun %97\'si) her zaman 2\'ye 1 oyla bastırabiliyordu. Üçüncü Tabaka kişi başına bireysel oylama talep etti.'
          }
        },
        {
          question: {
            en: 'How did modern political terminology of "Left" and "Right" originate during the French Revolution?',
            tr: 'Modern siyasi terminolojideki "Sol" ve "Sağ" kavramları Fransız Devrimi sırasında nasıl ortaya çıkmıştır?'
          },
          options: [
            { text: { en: 'It referred to the left and right banks of the Seine River.', tr: 'Seine Nehri\'nin sol ve sağ yakalarını ifade ediyordu.' }, correct: false },
            { text: { en: 'The physical seating arrangement in the Legislative Assembly of 1791.', tr: '1791 Yasama Meclisi\'ndeki fiziksel oturma düzeninden.' }, correct: true },
            { text: { en: 'Military formations at the Battle of Valmy.', tr: 'Valmy Savaşı\'ndaki askeri düzenlerden.' }, correct: false },
            { text: { en: 'The hand used to sign constitutional documents.', tr: 'Anayasa belgelerini imzalamak için kullanılan elden.' }, correct: false }
          ],
          explanation: {
            en: 'In the 1791 Legislative Assembly, delegates who supported the King and the preservation of constitutional monarchy sat on the right of the assembly president. The radical Republicans who wanted a republic sat on the left.',
            tr: '1791 Yasama Meclisi\'nde, Kral\'ı ve anayasal monarşinin korunmasını destekleyen delegeler meclis başkanının sağında oturdu. Cumhuriyet isteyen radikal Cumhuriyetçiler ise sol tarafa yerleşti.'
          }
        },
        {
          question: {
            en: 'What did the 1789 Declaration of the Rights of Man establish as the new basis of social and political order in France?',
            tr: '1789 İnsan Hakları Bildirisi, Fransa\'da toplumsal ve siyasi düzenin yeni temeli olarak neyi belirledi?'
          },
          options: [
            { text: { en: 'Hereditary bloodlines and nobility.', tr: 'Kalıtsal soy ve soyluluk.' }, correct: false },
            { text: { en: 'Religious affiliation to the Catholic Church.', tr: 'Katolik Kilisesi\'ne dini bağlılık.' }, correct: false },
            { text: { en: 'Wealth, talent, and individual merit instead of birth privilege.', tr: 'Doğum ayrıcalığı yerine zenginlik, yetenek ve bireysel liyakat.' }, correct: true },
            { text: { en: 'Equal voting rights for all citizens, including women and slaves.', tr: 'Kadınlar ve köleler dahil tüm vatandaşlar için eşit oy hakkı.' }, correct: false }
          ],
          explanation: {
            en: 'The Declaration abolished aristocratic birth privilege. It established civic equality before the law, making wealth, talent, and property ownership the new criteria for social status and political enfranchisement.',
            tr: 'Bildiri aristokratik doğum ayrıcalıklarını kaldırdı. Kanun önünde yurttaşlık eşitliğini kurarak zenginliği, yeteneği ve mülk sahipliğini toplumsal statü ve siyasi hakların yeni kriteri haline getirdi.'
          }
        },
        {
          question: {
            en: 'Which military event in September 1792 marked the first victory of the French volunteer army and saved the revolution?',
            tr: 'Eylül 1792\'deki hangi askeri olay, Fransız gönüllü ordusunun ilk zaferi oldu ve devrimi kurtardı?'
          },
          options: [
            { text: { en: 'The Siege of Paris', tr: 'Paris Kuşatması' }, correct: false },
            { text: { en: 'The Storming of the Bastille', tr: 'Bastille Baskını' }, correct: false },
            { text: { en: 'The Battle of Valmy', tr: 'Valmy Savaşı' }, correct: true },
            { text: { en: 'The execution of Louis XVI', tr: 'XVI. Louis\'nin idamı' }, correct: false }
          ],
          explanation: {
            en: 'At the Battle of Valmy (20 September 1792), a motivated French army of regular troops and volunteers stopped the invading Austro-Prussian forces, leading to the proclamation of the Republic the next day.',
            tr: 'Valmy Savaşı\'nda (20 Eylül 1792), düzenli birlikler ve gönüllülerden oluşan motivasyonu yüksek Fransız ordusu, istilacı Avusturya-Prusya kuvvetlerini durdurdu ve ertesi gün Cumhuriyet\'in ilan edilmesini sağladı.'
          }
        }
      ]
    },
    6: {
      id: 6,
      themeColor: '#0d9488', // Dark Teal
      title: {
        en: 'Week 6: The Haitian Revolution',
        tr: '6. Hafta: Haiti Devrimi'
      },
      slides: [
        {
          title: {
            en: 'Saint-Domingue: The Pearl of the Antilles',
            tr: 'Saint-Domingue: Antiller\'in İncisi'
          },
          text: {
            en: 'Originally Hispaniola, the French acquired the western third of the island from Spain via the Treaty of Ryswick (1695). Renamed Saint-Domingue, it became a highly productive plantation economy cultivating indigo, coffee, and sugar. Cultivated by a massive slave population, Saint-Domingue was the most lucrative colony in the world. The maritime bourgeoisie of French ports (Bordeaux, Nantes) grew wealthy refining its sugar.',
            tr: 'Başlangıçta Hispaniola olan adanın batı üçte birlik kısmı, 1695 Ryswick Antlaşması ile Fransa tarafından İspanya\'dan alındı. Saint-Domingue adı verilen bölge; çivit otu, kahve ve şeker yetiştirilen son derece verimli bir plantasyon ekonomisine dönüştü. Devasa bir köle nüfusu tarafından işlenen Saint-Domingue, dünyanın en kazançlı sömürgesiydi. Fransız limanlarının (Bordeaux, Nantes) denizci burjuvazisi, buradaki şekeri rafine ederek zenginleşti.'
          },
          mapState: {
            zoom: 'hispaniola',
            highlightRegions: ['saint_domingue'],
            activeRoutes: [],
            markers: ['cap_francais', 'port_au_prince', 'nantes', 'bordeaux']
          }
        },
        {
          title: {
            en: 'Social Structure and Code Noir',
            tr: 'Toplumsal Yapı ve Kara Kanun (Code Noir)'
          },
          text: {
            en: 'In 1789, the island housed 500,000 slaves and only 40,000 whites. The Code Noir (promulgated in 1685) theoretically mandated nutrition standards but permitted whipping, and was entirely ignored by owners who used extreme violence to prevent rebellions and maintain a distinction. Slaves created Haitian Creole and utilized Voodoo rituals to form an autonomous, unifying cultural space.',
            tr: '1789 yılında adada 500.000 köleye karşılık yalnızca 40.000 beyaz yaşıyordu. 1685\'te yürürlüğe giren Code Noir (Kara Kanun) teoride beslenme standartları getirse de kırbaçlamaya izin veriyordu; isyanları önlemek ve üstünlüklerini korumak için aşırı şiddete başvuran sahipler tarafından ise tamamen görmezden geliniyordu. Köleler, birleştirici bir kültürel alan yaratmak için Haiti Kreyolu\'nu ve Voodoo ritüellerini kullandı.'
          },
          mapState: {
            zoom: 'hispaniola',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['cap_francais']
          }
        },
        {
          title: {
            en: 'Tensions Among the Free Population',
            tr: 'Özgür Nüfus Arasındaki Gerilimler'
          },
          text: {
            en: 'The free population was fractured: Big Whites (aristocratic plantation owners who hated French trade monopolies), Royal Bureaucracy, and Small Whites (clerks, artisans). There was also a growing class of free mixed-heritage people (Mulattoes) who owned property and slaves. Anxious whites created a complex, racialized system of 128 classifications of mixed heritage to deny Mulattoes political rights.',
            tr: 'Özgür nüfus bölünmüştü: Büyük Beyazlar (Fransız ticaret tekellerinden nefret eden aristokrat plantasyon sahipleri), Kraliyet Bürokrasisi ve Küçük Beyazlar (memurlar, zanaatkarlar). Ayrıca mülk ve köle sahibi olan, büyüyen bir özgür melez (Malato) sınıfı vardı. Tedirgin olan beyazlar, Malatoların siyasi haklarını engellemek için melezliği 128 farklı ırksal sınıfa ayıran karmaşık bir sistem yarattı.'
          },
          mapState: {
            zoom: 'hispaniola',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['port_au_prince']
          }
        },
        {
          title: {
            en: 'Effects of the French Revolution',
            tr: 'Fransız Devrimi\'nin Etkileri'
          },
          text: {
            en: 'When the French Revolution began, Big Whites sought autonomy from France. Small Whites revolted against both Big Whites and wealthy Mulattoes. In October 1790, Vincent Ogé led a failed Mulatto rebellion demanding voting rights. In France, the Jacobins opposed slavery (Robespierre: "May the colonies perish rather than our principles"), but the colonial lobby (Club Massiac) successfully delayed abolition.',
            tr: 'Fransız Devrimi başladığında Büyük Beyazlar, Fransa\'dan özerklik talep etti. Küçük Beyazlar ise hem Büyük Beyazlara hem de zengin Malatolara karşı ayaklandı. Ekim 1790\'da Vincent Ogé, oy hakları talep eden başarısız bir Malato isyanı başlattı. Fransa\'da Yakobenler köleliğe karşı çıkarken (Robespierre: "İlkelerimiz yerine sömürgeler yok olsun"), sömürge lobisi (Club Massiac) köleliğin kaldırılmasını geciktirmeyi başardı.'
          },
          mapState: {
            zoom: 'atlantic',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['paris', 'cap_francais']
          }
        },
        {
          title: {
            en: 'The 1791 Uprising & Toussaint L\'Ouverture',
            tr: '1791 Ayaklanması ve Toussaint L\'Ouverture'
          },
          text: {
            en: 'In August 1791, slave leaders (led by Dutty Boukman) organized a massive rebellion, burning plantations. Toussaint L\'Ouverture, an educated former slave coachman, joined them. Due to French hesitation, Toussaint allied with Spain (which was at war with France), becoming a Spanish colonel. Meanwhile, Mulattoes and whites fought, and the colony fractured into three distinct revolts.',
            tr: 'Ağustos 1791\'de köle liderleri (Dutty Boukman önderliğinde) plantasyonları yakarak büyük bir ayaklanma başlattı. Eğitimli eski bir köle olan Toussaint L\'Ouverture onlara katıldı. Fransa\'nın tereddütleri yüzünden Toussaint, Fransa ile savaşta olan İspanya ile ittifak kurarak İspanyol albayı oldu. Bu sırada Malatolar ile beyazlar savaşıyor ve sömürge üç farklı isyana bölünüyordu.'
          },
          mapState: {
            zoom: 'hispaniola',
            highlightRegions: [],
            activeRoutes: [],
            markers: ['cap_francais', 'gonaives']
          }
        },
        {
          title: {
            en: 'Abolition and Toussaint\'s Realignment',
            tr: 'Köleliğin Kaldırılması ve Toussaint\'ın İttifakı'
          },
          text: {
            en: 'To gain the support of the black majority, French commissioner Sonthonax abolished slavery in August 1793. In Paris, the National Convention ratified this on February 4, 1794. Upon hearing this, Toussaint rejoined France, routing Spanish and British invaders. He was named Lieutenant-General in 1796, developing schools, banning corporal punishment, and organizing labor.',
            tr: 'Siyah çoğunluğun desteğini kazanmak için Fransız komiser Sonthonax, Ağustos 1793\'te köleliği kaldırdı. Paris\'teki Ulusal Konvansiyon bunu 4 Şubat 1794\'te onayladı. Bunu duyan Toussaint, İspanyol ve İngiliz işgalcileri bozguna uğratarak Fransa\'ya yeniden katıldı. 1796\'da Korgeneral atandı; okullar açtı, fiziksel cezaları yasakladı ve iş gücünü organize etti.'
          },
          mapState: {
            zoom: 'atlantic',
            highlightRegions: [],
            activeRoutes: ['toussaint_switch'],
            markers: ['paris', 'gonaives', 'santo_domingo']
          }
        },
        {
          title: {
            en: 'Napoleon\'s Leclerc Expedition (1801)',
            tr: 'Napolyon\'un Leclerc Seferi (1801)'
          },
          text: {
            en: 'Suspicious that Toussaint sought independence (he drafted a constitution in 1801 and annexed Spanish Santo Domingo), Napoleon Bonaparte sent 20,000 soldiers under General Leclerc. The Haitians fought back using scorched-earth tactics. In June 1802, Toussaint was lured into a trap, arrested, and sent to France, where he died in prison a year later.',
            tr: 'Toussaint\'ın bağımsızlık istediğinden şüphelenen (1801\'de bir anayasa taslağı hazırlamış ve İspanyol Santo Domingo\'yu ilhak etmişti) Napolyon Bonapart, General Leclerc komutasında 20.000 asker gönderdi. Haitililer yakıp yıkma (scorched-earth) taktiğiyle karşı koydu. Haziran 1802\'de Toussaint bir tuzağa düşürülerek tutuklandı ve Fransa\'ya gönderildi, bir yıl sonra orada zindanda öldü.'
          },
          mapState: {
            zoom: 'atlantic',
            highlightRegions: [],
            activeRoutes: ['leclerc_expedition'],
            markers: ['paris', 'cap_francais', 'jura']
          }
        },
        {
          title: {
            en: 'The Final War & Independence (1803)',
            tr: 'Son Savaş ve Bağımsızlık (1803)'
          },
          text: {
            en: 'When Napoleon officially reinstated slavery in other colonies in May 1802, a brutal race war erupted in Haiti under Jean-Jacques Dessalines. Yellow fever decimated the French army. Aided by British blockades (who resumed war with France), Dessalines defeated the French forces (under Rochambeau). On December 31, 1803, Haiti declared independence, and Dessalines crowned himself Emperor in 1804.',
            tr: 'Mayıs 1802\'de Napolyon diğer sömürgelerde köleliği resmen geri getirdiğinde, Jean-Jacques Dessalines önderliğinde Haiti\'de acımasız bir ırk savaşı patlak verdi. Sarı humma Fransız ordusunu kırdı geçirildi. Fransa ile yeniden savaşa giren İngilizlerin ablukalarından yardım alan Dessalines, (Rochambeau komutasındaki) Fransız kuvvetlerini yendi. 31 Aralık 1803\'te Haiti bağımsızlığını ilan etti ve Dessalines 1804\'te kendisini İmparator ilan etti.'
          },
          mapState: {
            zoom: 'hispaniola',
            highlightRegions: [],
            activeRoutes: ['british_aid_blockade'],
            markers: ['cap_francais', 'kingston']
          }
        }
      ],
      quiz: [
        {
          question: {
            en: 'Which treaty granted the western third of Hispaniola to France, creating Saint-Domingue?',
            tr: 'Hangi antlaşma Hispaniola\'nın batı üçte birini Fransa\'ya vererek Saint-Domingue\'i oluşturmuştur?'
          },
          options: [
            { text: { en: 'Treaty of Paris (1783)', tr: 'Paris Antlaşması (1783)' }, correct: false },
            { text: { en: 'Treaty of Ryswick (1695)', tr: 'Ryswick Antlaşması (1695)' }, correct: true },
            { text: { en: 'Treaty of Tordesillas (1494)', tr: 'Tordesillas Antlaşması (1494)' }, correct: false },
            { text: { en: 'Treaty of Versailles (1787)', tr: 'Versailles Antlaşması (1787)' }, correct: false }
          ],
          explanation: {
            en: 'The Treaty of Ryswick in 1695 ended the War of the Grand Alliance and saw Spain formally cede the western third of Hispaniola to France, which developed it into the sugar colony Saint-Domingue.',
            tr: '1695\'teki Ryswick Antlaşması, Büyük İttifak Savaşı\'nı sona erdirdi ve İspanya, Hispaniola\'nın batı üçte birini resmen Fransa\'ya devretti, Fransa da burayı şeker sömürgesi Saint-Domingue olarak geliştirdi.'
          }
        },
        {
          question: {
            en: 'Why did free Mulattoes (people of mixed heritage) initially ally with white planters during early conflicts?',
            tr: 'Melezler (Malatolar) ilk çatışmalar sırasında neden başlangıçta beyaz plantasyon sahipleriyle ittifak kurdu?'
          },
          options: [
            { text: { en: 'They shared a common interest as property and slave owners.', tr: 'Mülk ve köle sahibi olarak ortak çıkarları paylaştıkları için.' }, correct: true },
            { text: { en: 'They did not speak French.', tr: 'Fransızca konuşmadıkları için.' }, correct: false },
            { text: { en: 'The King of France ordered it.', tr: 'Fransa Kralı öyle emrettiği için.' }, correct: false },
            { text: { en: 'They wanted to return to Africa.', tr: 'Afrika\'ya dönmek istedikleri için.' }, correct: false }
          ],
          explanation: {
            en: 'Many free Mulattoes had amassed significant property and owned slaves. Consequently, they shared economic interests with white planters regarding property rights, only breaking the alliance when whites refused to grant them civic equality.',
            tr: 'Birçok özgür Malato önemli ölçüde mülk biriktirmişti ve köle sahibiydi. Bu nedenle, mülkiyet hakları konusunda beyaz plantasyon sahipleriyle ortak ekonomik çıkarları paylaştılar; bu ittifak ancak beyazlar onlara yurttaşlık eşitliği vermeyi reddettiğinde bozuldu.'
          }
        },
        {
          question: {
            en: 'Why did Toussaint L\'Ouverture initially fight as a colonel for Spain in 1791-1793?',
            tr: 'Toussaint L\'Ouverture neden başlangıçta 1791-1793 yıllarında İspanya için bir albay olarak savaştı?'
          },
          options: [
            { text: { en: 'He was captured by Spanish forces.', tr: 'İspanyol kuvvetleri tarafından esir alındığı için.' }, correct: false },
            { text: { en: 'The French revolutionary government refused to abolish slavery, pushing him to ally with Spain.', tr: 'Fransız devrimci hükümeti köleliği kaldırmayı reddettiği için onu İspanya ile ittifak kurmaya itti.' }, correct: true },
            { text: { en: 'Spain offered him a position in Madrid.', tr: 'İspanya ona Madrid\'de bir görev teklif ettiği için.' }, correct: false },
            { text: { en: 'He wanted to establish Spanish rule over the entire island.', tr: 'Tüm ada üzerinde İspanyol egemenliğini kurmak istediği için.' }, correct: false }
          ],
          explanation: {
            en: 'The French National Assembly hesitated to emancipate the slaves. Believing Spain (which promised freedom to defecting slave soldiers) was a more reliable partner for liberty, Toussaint joined the Spanish forces, only returning to France when the National Convention declared complete abolition in 1794.',
            tr: 'Fransız Ulusal Meclisi köleleri özgürleştirmekte tereddüt etti. İltica eden köle askerlere özgürlük vadeden İspanya\'nın özgürlük için daha güvenilir bir ortak olduğuna inanan Toussaint, İspanyol kuvvetlerine katıldı ve ancak 1794\'te Ulusal Konvansiyon tam kaldırma kararı aldığında Fransa\'ya geri döndü.'
          }
        },
        {
          question: {
            en: 'What tactical method did the Haitian forces use to defeat Napoleon\'s Leclerc expedition?',
            tr: 'Haiti güçleri Napolyon\'un Leclerc seferini yenmek için hangi taktik yöntemi kullandı?'
          },
          options: [
            { text: { en: 'Trench warfare and chemical weapons.', tr: 'Siper savaşı ve kimyasal silahlar.' }, correct: false },
            { text: { en: 'Scorched-earth policy, destroying their own cities to deny resources.', tr: 'Kendi şehirlerini yıkarak kaynakları yok eden yakıp yıkma (scorched-earth) politikasını.' }, correct: true },
            { text: { en: 'A direct naval assault on French fleets.', tr: 'Fransız filolarına doğrudan deniz taarruzunu.' }, correct: false },
            { text: { en: 'Guerrilla warfare using poisoned arrows.', tr: 'Zehirli oklar kullanan gerilla savaşını.' }, correct: false }
          ],
          explanation: {
            en: 'Haitians burned their own cities and plantations, retreating into the mountainous interior. This cut off food and supplies to the French army, who were then weakened and decimated by yellow fever.',
            tr: 'Haitililer kendi şehirlerini ve plantasyonlarını yakarak dağlık iç kesimlere çekildiler. Bu durum, daha sonra sarı humma salgınıyla zayıflayan ve kırılan Fransız ordusunun yiyecek ve ikmal yollarını kesti.'
          }
        },
        {
          question: {
            en: 'What event in May 1802 immediately radicalized the Haitian resistance, leading to the final war for independence?',
            tr: 'Mayıs 1802\'deki hangi olay Haiti direnişini anında radikalleştirerek nihai bağımsızlık savaşına yol açtı?'
          },
          options: [
            { text: { en: 'Toussaint\'s death in France.', tr: 'Toussaint\'ın Fransa\'da ölmesi.' }, correct: false },
            { text: { en: 'Napoleon officially authorized slavery to continue in Martinique and Reunion, signaling his intent to restore it in Saint-Domingue.', tr: 'Napolyon\'un Martinik ve Reunion\'da köleliğin devam etmesine resmen izin vermesi; bu da Saint-Domingue\'de köleliği geri getirme niyetini gösterdi.' }, correct: true },
            { text: { en: 'The British blockade ended.', tr: 'İngiliz ablukasının sona ermesi.' }, correct: false },
            { text: { en: 'Dessalines was arrested by Rochambeau.', tr: 'Dessalines\'in Rochambeau tarafından tutuklanması.' }, correct: false }
          ],
          explanation: {
            en: 'When Napoleon reinstated slavery and the slave trade in other colonies (Martinique, Reunion), it became clear to the black generals that France intended to re-enslave Saint-Domingue. Toussaint\'s generals immediately defected and launched the war for full independence.',
            tr: 'Napolyon diğer sömürgelerde (Martinik, Reunion) köleliği ve köle ticaretini yeniden başlattığında, siyah generaller için Fransa\'nın Saint-Domingue\'i yeniden köleleştirmek niyetinde olduğu açıkça belli oldu. Toussaint\'ın generalleri hemen taraf değiştirerek tam bağımsızlık savaşı başlattı.'
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
        coords: [[38.7223, -9.1393], [28.0, -16.0], [15.0, -45.0], [18.4861, -69.9312], [37.2089, -76.7744], [45.0, -45.0], [51.5074, -0.1278]],
        label: { en: 'Atlantic Wind & Current System', tr: 'Atlantik Rüzgarları ve Akıntı Sistemi' },
        color: '#3b82f6'
      },
      treasure_fleet: {
        coords: [[-19.5888, -65.7531], [-5.0, -75.0], [10.0, -75.0], [18.4861, -69.9312], [32.0, -45.0], [37.3891, -5.9845]],
        label: { en: 'Treasure Fleets (Gold & Silver)', tr: 'Hazine Filoları (Altın ve Gümüş)' },
        color: '#d97706'
      },
      crop_flow_east: {
        coords: [[37.2089, -76.7744], [48.0, -40.0], [51.5074, -0.1278], [15.0, 15.0], [-15.0, 45.0], [5.0, 80.0], [23.1291, 113.2644]],
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
        coords: [[-13.5319, -71.9675], [15.0, -60.0], [40.0, -30.0], [51.5074, -0.1278], [13.4616, -16.5779]],
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
        coords: [[5.0831, -1.3503], [12.0, -35.0], [18.4861, -69.9312], [-12.9777, -38.5016]],
        label: { en: 'Sugar Slave Delivery Lanes', tr: 'Şeker Köle Nakil Yolları' },
        color: '#b45309'
      },
      triangular_trade_guns: {
        coords: [[53.4084, -2.9916], [30.0, -15.0], [5.0831, -1.3503], [18.4861, -69.9312]],
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
        coords: [[48.8566, 2.3522], [35.0, -40.0], [19.7599, -72.2008]],
        label: { en: 'Napoleon\'s 20,000 Troops Leclerc Fleet', tr: 'Napolyon\'un 20.000 Kişilik Leclerc Donanması' },
        color: '#dc2626'
      },
      british_aid_blockade: {
        coords: [[17.9714, -76.7936], [19.7599, -72.2008]],
        label: { en: 'British Fleet Arms Dessalines Rebels (1803)', tr: 'İngiliz Donanmasının Dessalines\'e Silah Yardımı (1803)' },
        color: '#3b82f6'
      }
    }
  }
};
