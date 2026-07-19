// app.js

// Global UI Translation Dictionary
const uiTranslations = {
  tr: {
    appTitle: "Tarih Atlası",
    appSubtitle: "Kolomb Değişimi ve Devrimler Çağı (1492 - 1867)",
    progressText: "Genel İlerleme",
    modulesTitle: "Modüller",
    tabNarrative: "Anlatım",
    tabExplorer: "Harita",
    tabGraphics: "Grafik",
    tabQuiz: "Test",
    nextBtn: "İleri",
    prevBtn: "Geri",
    submitBtn: "Cevabı Gönder",
    nextQuestionBtn: "Sıradaki Soru",
    finishQuizBtn: "Testi Bitir",
    restartQuizBtn: "Testi Yeniden Başlat",
    quizCompletedTitle: "Modül Değerlendirmesi Tamamlandı!",
    quizScoreText: "Skorunuz: ",
    quizMinScoreText: "Modülü tamamlamak için en az %80 başarı göstermelisiniz (en az 40 doğru).",
    quizPassText: "Tebrikler! Bu modülü başarıyla tamamladınız.",
    quizFailText: "Başarı eşiğinin altında kaldınız. Lütfen slaytları tekrar inceleyip testi yeniden deneyin.",
    explanationTitle: "Tarihsel Açıklama",
    mapLegendTitle: "Harita Göstergesi",
    mapLegendDesc: "Harita üzerindeki yolları ve akışları incelemek için filtreleri etkinleştirebilirsiniz. Detaylar için limanlara ve şehirlere tıklayın.",
    slideWord: "Slayt",
    weekWord: "Hafta",
    completedWord: "Tamamlandı",
    scoreWord: "Skor",
    testWord: "Test",
    showOnMapBtn: "Haritada Göster",
    tabVideo: "Video"
  },
  en: {
    appTitle: "Historical Atlas",
    appSubtitle: "The Columbian Exchange & Age of Revolutions (1492 - 1867)",
    progressText: "Overall Progress",
    modulesTitle: "Modules",
    tabNarrative: "Narrative",
    tabExplorer: "Map",
    tabGraphics: "Charts",
    tabQuiz: "Quiz",
    nextBtn: "Next",
    prevBtn: "Back",
    submitBtn: "Submit Answer",
    nextQuestionBtn: "Next Question",
    finishQuizBtn: "Finish Test",
    restartQuizBtn: "Restart Test",
    quizCompletedTitle: "Module Assessment Completed!",
    quizScoreText: "Your Score: ",
    quizMinScoreText: "You must score at least 80% to complete this module (at least 40 correct answers).",
    quizPassText: "Congratulations! You have successfully completed this module.",
    quizFailText: "You fell below the passing threshold. Please review the slides and retry the test.",
    explanationTitle: "Historical Explanation",
    mapLegendTitle: "Map Legend",
    mapLegendDesc: "You can enable filters to inspect routes on the map. Click on ports and cities to explore details.",
    slideWord: "Slide",
    weekWord: "Week",
    completedWord: "Completed",
    scoreWord: "Score",
    testWord: "Test",
    showOnMapBtn: "Show on Map",
    tabVideo: "Video"
  }
};

// Detailed Historical Markers Descriptions (Bilingual)
const markerDetails = {
  seville: {
    title: { en: "Seville, Spain", tr: "Sevilla, İspanya" },
    desc: {
      en: "Seville held the royal monopoly on trade with the Spanish Americas through the 'Casa de la Contratación' (House of Trade). The Spanish Treasure Fleets (convoys) departed from here, returning filled with veins of silver from Potosí and gold, injecting massive liquidity into Europe's cash-starved economies and fueling global trade but also sparking price inflation across Europe.",
      tr: "Sevilla, 'Casa de la Contratación' (Ticaret Evi) aracılığıyla İspanyol Amerikası ile yapılan ticarette kraliyet tekeline sahipti. İspanyol Hazine Filoları (konvoylar) buradan kalkar, Potosi'den gelen gümüş damarları ve altınlarla dolu olarak geri dönerdi; bu durum Avrupa'nın nakit sıkıntısı çeken ekonomilerine devasa likidite enjekte etti, küresel ticareti körükledi ancak Avrupa genelinde fiyat enflasyonunu da başlattı."
    }
  },
  lisbon: {
    title: { en: "Lisbon, Portugal", tr: "Lizbon, Portekiz" },
    desc: {
      en: "Lisbon was the launchpad for early Atlantic exploration and Portuguese maritime dominance. Following the Treaty of Tordesillas (1494), Lisbon monopolized the eastern Atlantic route and the Indian Ocean spice lanes, establishing a critical global trading post network stretching to Goa in 1510. It became the early global leader in the sugar import and slave trade before being surpassed by the British.",
      tr: "Lizbon, erken Atlantik keşiflerinin ve Portekiz deniz üstünlüğünün fırlatma rampasıydı. Tordesillas Antlaşması'nın (1494) ardından Lizbon, Doğu Atlantik rotasını ve Hint Okyanusu baharat yollarını tekeline alarak 1510'da Goa'ya kadar uzanan kritik bir küresel ticaret karakolu ağı kurdu. İngilizler tarafından geride bırakılmadan önce, şeker ithalatı ve köle ticaretinde erken dönem küresel lideriydi."
    }
  },
  london: {
    title: { en: "London, England", tr: "Londra, İngiltere" },
    desc: {
      en: "London was the political and financial core of the British Empire. In 1672, the King chartered the Royal African Company here, granting it a monopoly on the slave trade. Philosopher John Locke was a major stockholder. London served as the administrative capital where acts to tax the American colonies (such as the Stamp Act) and eventually the Abolition Act of 1807 were debated and passed.",
      tr: "Londra, İngiliz İmparatorluğu'nun siyasi ve mali çekirdeğiydi. 1672'de Kral, köle ticareti tekelini veren Kraliyet Afrika Şirketi'ni burada beratlandırdı; filozof John Locke da şirketin önemli hissedarlarındandı. Londra, Amerikan kolonilerini vergilendiren yasaların (Damga Vergisi Yasası gibi) ve nihayetinde 1807 Köle Ticaretinin Kaldırılması Yasası'nın tartışılıp kabul edildiği idari başkentti."
    }
  },
  bristol: {
    title: { en: "Bristol, England", tr: "Bristol, İngiltere" },
    desc: {
      en: "During the peak of the transatlantic slave trade in the 18th century, Bristol was one of Britain's premier slaving ports. Merchant syndicates financed hundreds of voyages, shipping guns, brassware, and textiles to West Africa and returning with sugar, tobacco, and rum produced by enslaved labor, driving Bristol's rapid industrialization and urban expansion.",
      tr: "18. yüzyılda transatlantik köle ticaretinin zirvesinde olduğu dönemde Bristol, İngiltere'nin önde gelen köle limanlarından biriydi. Tüccar sendikaları, Batı Afrika'ya silah, pirinç eşyalar ve tekstil ürünleri gönderip köleleştirilmiş emekle üretilen şeker, tütün ve romla dönen yüzlerce seferi finanse ederek Bristol'ün hızlı sanayileşmesini ve kentsel büyümesini sağladı."
    }
  },
  liverpool: {
    title: { en: "Liverpool, England", tr: "Liverpool, İngiltere" },
    desc: {
      en: "By the late 18th century, Liverpool became the largest slave-trading port in the entire Western world. Its highly efficient shipyards and banking systems controlled over 40% of the European slave trade. The wealth accumulated from shipping over 1.5 million enslaved Africans formed the financial capital that directly launched the British Industrial Revolution.",
      tr: "18. yüzyılın sonlarında Liverpool, tüm Batı dünyasının en büyük köle ticareti limanı haline geldi. Son derece verimli tersaneleri ve bankacılık sistemleri, Avrupa köle ticaretinin %40'ından fazlasını kontrol ediyordu. 1,5 milyondan fazla Afrikalının taşınmasından elde edilen birikmiş servet, İngiliz Sanayi Devrimi'ni doğrudan başlatan finansal sermayeyi oluşturdu."
    }
  },
  paris: {
    title: { en: "Paris, France", tr: "Paris, Fransa" },
    desc: {
      en: "The intellectual epicenter of the Enlightenment (where Voltaire, Rousseau, and Diderot debated) and the political stage of the French Revolution. Key events like the Storming of the Bastille (July 14, 1789), the execution of Louis XVI, and the meetings of the National Assembly and National Convention took place here, forging modern concepts of left-versus-right and individual human rights.",
      tr: "Aydınlanma'nın entelektüel merkez üssü (Voltaire, Rousseau ve Diderot'nun tartıştığı yer) ve Fransız Devrimi'nin siyasi sahnesi. Bastille Baskını (14 Temmuz 1789), XVI. Louis'nin idamı ve Ulusal Meclis ile Ulusal Konvansiyon toplantıları gibi kritik olaylar burada gerçekleşerek modern sağ-sol kavramlarını ve bireysel insan haklarını şekillendirdi."
    }
  },
  nantes: {
    title: { en: "Nantes, France", tr: "Nantes, Fransa" },
    desc: {
      en: "Nantes was France's leading slave-trading port, responsible for organizing over 1,400 slaving voyages. The city's merchant class accumulated vast fortunes by exchanging manufactured goods for African slaves, who were shipped to Saint-Domingue to produce sugar. The wealth of Nantes's historic quarters is directly built on the transatlantic slave economy.",
      tr: "Nantes, Fransa'nın önde gelen köle ticareti limanıydı ve 1.400'den fazla köle seferinin düzenlenmesinden sorumluydu. Şehrin tüccar sınıfı, imal edilmiş ürünleri Afrika köleleriyle değiştirerek ve bunları şeker üretmek üzere Saint-Domingue'e göndererek devasa servetler edindi. Nantes'ın tarihi mahallelerinin zenginliği doğrudan transatlantik köle ekonomisine dayanır."
    }
  },
  bordeaux: {
    title: { en: "Bordeaux, France", tr: "Bordeaux, Fransa" },
    desc: {
      en: "Bordeaux was a major hub of the colonial economy. The city exported regional wines to Saint-Domingue and housed massive refineries to process imported colonial raw sugar and coffee. The maritime bourgeoisie of Bordeaux made immense fortunes through this colonial trade, funding the city's grand neoclassical architecture and supporting the rise of the revolutionary bourgeoisie.",
      tr: "Bordeaux, sömürge ekonomisinin ana merkezlerinden biriydi. Şehir, Saint-Domingue'e bölgesel şaraplar ihraç eder ve ithal edilen sömürge ham şekerini ve kahvesini işlemek için devasa rafinerilere ev sahipliği yapardı. Bordeaux'nun denizci burjuvazisi bu sömürge ticareti sayesinde büyük servetler kazanarak şehrin görkemli neoklasik mimarisini finanse etti ve devrimci burjuvazinin yükselişini destekledi."
    }
  },
  naples: {
    title: { en: "Naples, Italy", tr: "Napoli, İtalya" },
    desc: {
      en: "The historic site where Europe's first major syphilis epidemic erupted in 1495. Spanish mercenaries who had sailed with Columbus's return voyage joined the army of French King Charles VIII during the siege of Naples. They spread the New World pathogen to local prostitutes, causing a rapid, devastating European-wide epidemic within five years.",
      tr: "Avrupa'nın ilk büyük frengi salgınının 1495'te patlak verdiği tarihi yer. Kolomb'un dönüş seyahatiyle yelken açan İspanyol paralı askerleri, Napoli kuşatması sırasında Fransa Kralı VIII. Charles'ın ordusuna katıldılar. Yeni Dünya patojenini yerel hayat kadınlarına yayarak beş yıl içinde Avrupa genelinde hızlı ve yıkıcı bir salgına neden oldular."
    }
  },
  valmy: {
    title: { en: "Valmy, France", tr: "Valmy, Fransa" },
    desc: {
      en: "The location of the historic Battle of Valmy on September 20, 1792. A highly motivated French revolutionary army, composed of regular troops and volunteers, successfully halted the invading Austro-Prussian monarchist forces. This first military victory saved the revolution, leading to the formal proclamation of the First French Republic the next day.",
      tr: "20 Eylül 1792'deki tarihi Valmy Savaşı'nın gerçekleştiği yer. Düzenli birlikler ve gönüllülerden oluşan yüksek motivasyonlu Fransız devrimci ordusu, istilacı Avusturya-Prusya kraliyet güçlerini başarıyla durdurdu. Bu ilk askeri zafer devrimi kurtardı ve ertesi gün Birinci Fransız Cumhuriyeti'nin resmen ilan edilmesini sağladı."
    }
  },
  varennes: {
    title: { en: "Varennes, France", tr: "Varennes, Fransa" },
    desc: {
      en: "The small town near the border where King Louis XVI and Queen Marie Antoinette were captured during their attempted flight from revolutionary Paris in June 1791 (the 'Flight to Varennes'). Their arrest shattered the illusion of a loyal constitutional monarch, exposing their treasonous contacts with foreign powers and paving the way for the abolition of the monarchy.",
      tr: "Haziran 1791'de Kral XVI. Louis ve Kraliçe Marie Antoinette'in devrimci Paris'ten kaçmaya çalışırken yakalandıkları sınıra yakın küçük kasaba ('Varennes Kaçışı'). Yakalanmaları, sadık bir anayasal hükümdar illüzyonunu yıkarak yabancı güçlerle olan ihanet bağlantılarını ortaya çıkardı ve monarşinin kaldırılmasının yolunu açtı."
    }
  },
  versailles: {
    title: { en: "Versailles Palace, France", tr: "Versay Sarayı, Fransa" },
    desc: {
      en: "The grand monument of French absolutism built by Louis XIV to domesticate and closely supervise the aristocracy. Versailles was the administrative center where all power was concentrated. In May 1789, the Estates General met here, leading to the Third Estate's historic Tennis Court Oath and the creation of the National Assembly, initiating the revolution.",
      tr: "Soyluları evcilleştirmek ve yakın denetim altında tutmak için XIV. Louis tarafından inşa edilen Fransız mutlakiyetçiliğinin görkemli anıtı. Versay, tüm gücün toplandığı idari merkezdi. Mayıs 1789'da Etats Généraux burada toplandı, bu da Üçüncü Tabaka'nın tarihi Tenis Kortu Yemini etmesine ve Ulusal Meclis'in kurularak devrimin başlamasına yol açtı."
    }
  },
  virginia: {
    title: { en: "Virginia (Jamestown), USA", tr: "Virginia (Jamestown), ABD" },
    desc: {
      en: "Settled in 1607, Virginia was the first permanent English colony. John Rolfe introduced Spanish tobacco, establishing it as Virginia's lucrative monoculture. Initially dependent on white indentured servants, the colony shifted permanently to hereditary black slave labor following Bacon's Rebellion in 1676, passing severe racial codes that legally separated blacks and whites.",
      tr: "1607'de yerleşilen Virginia, ilk kalıcı İngiliz kolonisiydi. John Rolfe İspanyol tütününü tanıtarak burayı Virginia'nın kazançlı tek mahsullü (monokültür) tarım alanı haline getirdi. Başlangıçta beyaz sözleşmeli işçilere bağımlı olan koloni, 1676'daki Bacon İsyanı'nın ardından kalıcı olarak kalıtsal siyah köle emeğine yöneldi ve siyahlar ile beyazları yasal olarak ayıran sert ırk yasaları çıkardı."
    }
  },
  boston: {
    title: { en: "Boston, USA", tr: "Boston, ABD" },
    desc: {
      en: "The hotbed of the American Revolution. In response to British taxes like the Stamp Act and the Tea Act, local organizations like the Sons of Liberty (led by Samuel Adams) organized riots. In December 1773, they dumped British tea cargo into the harbor (the Boston Tea Party), prompting Britain to occupy the city and dissolve the Massachusetts legislature, leading to war.",
      tr: "Amerikan Devrimi'nin sıcak yuvası. Damga Yasası ve Çay Yasası gibi İngiliz vergilerine yanıt olarak, Samuel Adams liderliğindeki Sons of Liberty (Özgürlük Evlatları) gibi yerel örgütler isyanlar düzenledi. Aralık 1773'te İngiliz çay kargosunu limana döktüler (Boston Çay Partisi); bu durum İngiltere'nin şehri işgal etmesine ve Massachusetts meclisini feshederek savaşı başlatmasına neden oldu."
    }
  },
  philadelphia: {
    title: { en: "Philadelphia, USA", tr: "Filadelfiya, ABD" },
    desc: {
      en: "The revolutionary capital where the Continental Congress met to coordinate colonial resistance. The Declaration of Independence (drafted by Thomas Jefferson) was signed here on July 4, 1776. Eleven years later, in 1787, delegates met here again at the Federal Convention to draft the United States Constitution, establishing the checks-and-balances republic.",
      tr: "Kıtasal Kongre'nin koloni direnişini koordine etmek için toplandığı devrimci başkent. Thomas Jefferson tarafından hazırlanan Bağımsızlık Bildirgesi 4 Temmuz 1776'de burada imzalandı. On bir yıl sonra, 1787'de delegeler, denetleme ve dengeleme esasına dayalı cumhuriyeti kuran Amerika Birleşik Devletleri Anayasası'nı hazırlamak için Federal Konvansiyon'da burada tekrar bir araya geldi."
    }
  },
  yorktown: {
    title: { en: "Yorktown, USA", tr: "Yorktown, ABD" },
    desc: {
      en: "The site of the decisive Battle of Yorktown in 1781. General George Washington's Continental Army, reinforced by French troops and supported by Admiral de Grasse's French naval fleet (which blockaded British escape routes), trapped and defeated British General Cornwallis. This major victory effectively ended the military conflict, forcing Britain to sue for peace.",
      tr: "1781'deki belirleyici Yorktown Savaşı'nın gerçekleştiği yer. Fransız birlikleriyle takviye edilen ve (İngiliz kaçış yollarını kapatan) Amiral de Grasse'ın Fransız donanma filosu tarafından desteklenen General George Washington liderliğindeki Kıta Ordusu, İngiliz General Cornwallis'i köşeye sıkıştırarak mağlup etti. Bu büyük zafer askeri çatışmayı fiilen sona erdirdi ve İngiltere'yi barış istemeye zorladı."
    }
  },
  tenochtitlan: {
    title: { en: "Tenochtitlan, Mexico", tr: "Tenochtitlan, Meksika" },
    desc: {
      en: "The magnificent island capital of the Aztec Empire. In the 1520s, Spanish conquistador Hernan Cortés laid siege to the city, utilizing gun-carrying brigantines on the lake, steel weapons, and cavalry. Cortés succeeded by mobilizing tens of thousands of local indigenous allies (like the Tlaxcalteca) who hated Aztec rule, and was aided by a devastating smallpox outbreak that decimated the Aztec defenders.",
      tr: "Aztek İmparatorluğu'nun muhteşem ada başkenti. 1520'lerde İspanyol fatih Hernan Cortés, göl üzerinde silah taşıyan küçük yelkenliler, çelik silahlar ve süvariler kullanarak şehri kuşattı. Cortés, Aztek yönetiminden nefret eden on binlerce yerel müttefiki (Tlaxcalteca gibi) seferber ederek ve Aztek savunucularını kıran ölümcül çiçek hastalığı salgınından yararlanarak başarıya ulaştı."
    }
  },
  santo_domingo: {
    title: { en: "Santo Domingo (Hispaniola)", tr: "Santo Domingo (Hispaniola)" },
    desc: {
      en: "Founded by Columbus, it was Spain's administrative capital in the Caribbean. Sugar cane was first introduced here from the Canary Islands on Columbus's second voyage (1492). By 1509, enslaved Africans were imported to work the sugar mills. Spanish Santo Domingo occupied the eastern two-thirds of the island, and was annexed by Toussaint L'Ouverture in 1800 in defiance of Napoleon.",
      tr: "Kolomb tarafından kurulan şehir, İspanya'nın Karayipler'deki idari başkentiydi. Şeker kamışı Yeni Dünya'ya ilk kez Kolomb'un ikinci seyahatinde (1492) Kanarya Adaları'ndan buraya getirildi. 1509'a gelindiğinde, şeker değirmenlerinde çalıştırılmak üzere köleleştirilmiş Afrikalılar ithal edilmeye başlandı. İspanyol Santo Domingo adanın doğu üçte ikisini kaplıyordu ve 1800'de Napolyon'a meydan okuyan Toussaint L'Ouverture tarafından ilhak edildi."
    }
  },
  cap_francais: {
    title: { en: "Cap-Français, Saint-Domingue", tr: "Cap-Français, Saint-Domingue" },
    desc: {
      en: "The wealthy northern capital of Saint-Domingue, known as the 'Paris of the Antilles.' In August 1791, the massive slave uprising organized by Dutty Boukman began in the surrounding northern plain, burning plantations and marching on the city. Later, Toussaint L'Ouverture governed from here, and it became a primary target during Leclerc's French invasion, where Haitians burned the city to the ground in a scorched-earth strategy.",
      tr: "Saint-Domingue'in kuzeydeki zengin başkenti, 'Antiller'in Paris'i' olarak bilinirdi. Ağustos 1791'de Dutty Boukman tarafından organize edilen devasa köle ayaklanması çevreleyen kuzey ovalarında plantasyonları yakarak başladı ve şehre doğru ilerledi. Daha sonra Toussaint L'Ouverture burayı yönetti; Leclerc'in Fransız işgali sırasında ise Haitililerin yakıp yıkma stratejisiyle şehri tamamen yakması üzerine ana hedeflerden biri oldu."
    }
  },
  port_au_prince: {
    title: { en: "Port-au-Prince, Saint-Domingue", tr: "Port-au-Prince, Saint-Domingue" },
    desc: {
      en: "A vital southern port city of Saint-Domingue. During the revolution, it was a focal point of intense three-way clashes between the royalist French bureaucracy, the white planters seeking autonomy, the property-owning free Mulattoes, and the rebellious slave factions. It served as a major commercial center for sugar and coffee exports before the revolutionary wars devastated its infrastructure.",
      tr: "Saint-Domingue'in hayati bir güney liman kenti. Devrim sırasında; kraliyetçi Fransız bürokrasisi, özerklik isteyen beyaz plantasyon sahipleri, mülk sahibi özgür melezler (Malatolar) ve asi köle grupları arasındaki şiddetli üç yönlü çatışmaların odak noktası oldu. Devrim savaşları altyapısını tahrip etmeden önce şeker ve kahve ihracatı için büyük bir ticaret merkeziydi."
    }
  },
  gonaives: {
    title: { en: "Gonaïves, Saint-Domingue", tr: "Gonaïves, Saint-Domingue" },
    desc: {
      en: "The military district where Toussaint L'Ouverture was commissioned as commander of the Republic. It was a key stronghold of Toussaint's ex-slave army. Following the defeat of the French, Jean-Jacques Dessalines officially proclaimed Haiti's independence here on December 31, 1803, signing the act of independence at Gonaïves.",
      tr: "Toussaint L'Ouverture'ün Cumhuriyet komutanı olarak görevlendirildiği askeri bölge. Toussaint'ın eski kölelerden oluşan ordusunun önemli bir kalesiydi. Fransızların yenilgisinin ardından Jean-Jacques Dessalines, 31 Aralık 1803'te Haiti'nin bağımsızlığını resmen burada ilan etti ve Gonaïves'te bağımsızlık belgesini imzaladı."
    }
  },
  esmeraldas: {
    title: { en: "Maroon Kingdom of Esmeraldas", tr: "Esmeraldas Maron Krallığı" },
    desc: {
      en: "An independent society of runaway slaves (Maroons) established in the remote forests of Colombia/Ecuador. Originally formed by survivors of shipwrecked slave vessels allied with local indigenous tribes, Esmeraldas grew so militarily powerful that the Spanish Crown could not defeat them, eventually signing a formal peace and autonomy treaty in 1599.",
      tr: "Kolombiya/Ekvador'un uzak ormanlarında kurulan, kaçak kölelerin (Maronlar) bağımsız topluluğu. Başlangıçta kazaya uğrayan köle gemilerinden kurtulanlar ile yerel yerli kabilelerin ittifakıyla kurulan Esmeraldas, askeri olarak o kadar güçlendi ki İspanyol Krallığı onları yenemedi ve en nihayetinde 1599'da resmi bir barış ve özerklik antlaşması imzalamak zorunda kaldı."
    }
  },
  brazil: {
    title: { en: "Bahia, Brazil", tr: "Bahia, Brezilya" },
    desc: {
      en: "The primary sugarcane plantation hub of South America. Brazil was the largest importer of enslaved African labor in the world, receiving over 3 million captives. Bahia's sugar mills and tobacco plantations relied entirely on lifetime racial slavery, establishing deep Afro-Brazilian cultural traditions that survive to this day.",
      tr: "Güney Amerika'nın ana şeker kamışı plantasyon merkezi. Brezilya, 3 milyondan fazla esiri kabul ederek dünyada en fazla köleleştirilmiş Afrikalı iş gücü ithal eden ülkeydi. Bahia'nın şeker değirmenleri ve tütün plantasyonları tamamen ömür boyu süren ırksal köleliğe dayanıyordu ve günümüze kadar ulaşan derin Afro-Brezilya kültürel geleneklerini oluşturdu."
    }
  },
  potosi: {
    title: { en: "Potosí, Peru (Bolivia)", tr: "Potosi, Peru (Bolivya)" },
    desc: {
      en: "The location of the legendary silver mountain (Cerro Rico). Discovered in 1545, Potosí became the most densely populated city of the Spanish Empire. Millions of ounces of silver were mined here using draft labor (mita) of indigenous and African slaves, feeding the Spanish Treasure Fleets and transforming the world economy but costing countless lives in the process.",
      tr: "Efsanevi gümüş dağının (Cerro Rico) bulunduğu yer. 1545'te keşfedilen Potosi, İspanyol İmparatorluğu'nun en yoğun nüfuslu şehri haline geldi. Yerlilerin ve Afrikalı kölelerin zorunlu emeğiyle (mita) buradan milyonlarca ons gümüş çıkarıldı, bu da İspanyol Hazine Filolarını besleyerek dünya ekonomisini dönüştürdü ancak süreç boyunca sayısız cana mal oldu."
    }
  },
  elmina: {
    title: { en: "Elmina Castle, Gold Coast", tr: "Elmina Kalesi, Altın Kıyısı" },
    desc: {
      en: "Built by the Portuguese in 1482 and later captured by the Dutch and British, Elmina served as a major coastal trading post. Millions of gold ounces and captured Africans passed through its dungeons, branded by corporate marks, and loaded onto slave vessels departing for the Middle Passage across the Atlantic.",
      tr: "1482'de Portekizliler tarafından inşa edilen ve daha sonra Hollandalılar ile İngilizler tarafından ele geçirilen Elmina, büyük bir kıyı ticaret karakolu olarak hizmet verdi. Şirket markalarıyla damgalanmış ve Atlantik boyunca Orta Geçit'e gidecek köle gemilerine bindirilmiş milyonlarca ons altın ve esir alınan Afrikalı, bu kalenin zindanlarından geçti."
    }
  },
  benin: {
    title: { en: "Bight of Benin, West Africa", tr: "Benin Körfezi, Batı Afrika" },
    desc: {
      en: "Often referred to as the 'Slave Coast,' the Bight of Benin was a major slaving hub. Over 2 million enslaved Africans were shipped from ports here (such as Whydah). The region was dominated by powerful African kingdoms that traded captives for European manufactured commodities, copper rods, and cowrie shells which were used as local currency.",
      tr: "Genellikle 'Köle Kıyısı' olarak adlandırılan Benin Körfezi, büyük bir kölelik merkeziydi. Buradaki limanlardan (Whydah gibi) 2 milyondan fazla köleleştirilmiş Afrikalı sevk edildi. Bölge, esirleri Avrupa yapımı ticari mallar, bakır çubuklar ve yerel para birimi olarak kullanılan deniz kabukları karşılığında satan güçlü Afrika krallıklarının egemenliğindeydi."
    }
  },
  luanda: {
    title: { en: "Luanda, Angola", tr: "Luanda, Angola" },
    desc: {
      en: "The capital of Portuguese Angola, established in 1576. It was the single most active slaving port in Africa, supplying millions of captives specifically for the sugar plantations and mines of Portuguese Brazil. Portuguese merchants engaged directly in interior slave-raiding wars and made alliances with regional leaders to ensure constant supplies.",
      tr: "1576'da kurulan Portekiz Angolası'nın başkenti. Afrika'daki en aktif köle limanıydı ve özellikle Portekiz Brezilyası'nın şeker plantasyonları ve madenleri için milyonlarca esir sağladı. Portekizli tüccarlar, sürekli ikmal sağlamak amacıyla doğrudan iç bölgelerdeki köle akınlarına katıldılar ve bölgesel liderlerle ittifaklar kurdular."
    }
  },
  congo: {
    title: { en: "Congo Free State", tr: "Kongo Bağımsız Devleti" },
    desc: {
      en: "The territory ruled as a personal fiefdom by King Leopold II of Belgium. During the late 19th-century rubber boom (driven by electricity and automobile insulation needs), the state used extreme terror, forced labor, and mutilations to extract wild vine rubber. The native population collapsed from an estimated 25 million in the 1880s to under 8 million by 1911.",
      tr: "Belçika Kralı II. Leopold tarafından kişisel mülk olarak yönetilen bölge. 19. yüzyılın sonlarındaki kauçuk patlaması sırasında (elektrik ve otomobil yalıtım ihtiyaçlarıyla tetiklenen), devlet yabani sarmaşık kauçuğu elde etmek için aksiyonel terör, zorunlu çalıştırma ve uzuv kesme yöntemleri kullandı. Yerli nüfus 1880'lerde tahmini 25 milyondan 1911'de 8 milyonun altına düştü."
    }
  },
  ireland: {
    title: { en: "Ireland", tr: "İrlanda" },
    desc: {
      en: "The introduction of the potato from the New World transformed Ireland. Being highly productive and growing underground, it became the calorie base of the Irish peasantry. This demographic catalyst caused the population to grow rapidly, making the nation vulnerable to the Great Famine of 1845.",
      tr: "Yeni Dünya'dan getirilen patates, İrlanda'yı dönüştürdü. Son derece verimli olan ve yer altında yetişen patates, İrlanda köylüsünün temel kalori kaynağı oldu. Nüfusun hızla artmasını sağlayan bu ekolojik katalizör, 1845'teki Büyük Patates Kıtlığı'na karşı ülkeyi hassas hale getirdi."
    }
  },
  valladolid: {
    title: { en: "Valladolid, Spain", tr: "Valladolid, İspanya" },
    desc: {
      en: "The location of the famous Valladolid Controversy in 1550, where Dominican friar Bartolomé de Las Casas debated jurist Juan Ginés de Sepúlveda. Las Casas defended the human rights of Native Americans against slavery, while Sepúlveda argued they were natural slaves. The debate led to legal restrictions on native slavery, indirectly accelerating the shift to African labor.",
      tr: "1550'de Dominiken rahibi Bartolomé de Las Casas ile hukukçu Juan Ginés de Sepúlveda'nın karşı karşıya geldiği ünlü Valladolid Tartışması'nın yapıldığı yer. Las Casas, yerlilerin köleleştirilmesine karşı insan haklarını savunurken, Sepúlveda onların doğal köle olduğunu iddia etti. Tartışma, yerli köleliğine yasal kısıtlamalar getirdi ve dolaylı olarak Afrika iş gücüne geçişi hızlandırdı."
    }
  },
  jura: {
    title: { en: "Jura, France (Fort de Joux)", tr: "Jura, Fransa (Fort de Joux)" },
    desc: {
      en: "The mountainous department in eastern France housing Fort de Joux. Following his arrest by General Leclerc's forces in Saint-Domingue, Haitian revolutionary leader Toussaint L'Ouverture was imprisoned here in a cold cell without trial, where he died of pneumonia in April 1803, months before Haiti's final victory.",
      tr: "Doğu Fransa'daki dağlık Jura bölgesinde yer alan Fort de Joux kalesi. Saint-Domingue'de General Leclerc'in güçleri tarafından tutuklanmasının ardından, Haiti devriminin lideri Toussaint L'Ouverture burada dondurucu bir hücrede yargılanmadan hapsedildi ve Haiti'nin bağımsızlık zaferinden aylar önce, Nisan 1803'te zatürreden hayatını kaybetti."
    }
  },
  kingston: {
    title: { en: "Kingston, Jamaica", tr: "Kingston, Jamaika" },
    desc: {
      en: "A key British naval base and plantation colony in the Caribbean. During the final phase of the Haitian Revolution, British ships blockaded French-held ports in Saint-Domingue, cooperating with Jean-Jacques Dessalines' forces by supplying weaponry and preventing French reinforcements, helping to seal the French defeat.",
      tr: "Karayipler'deki önemli bir İngiliz deniz üssü ve plantasyon kolonisi. Haiti Devrimi'nin son safhasında İngiliz gemileri, Saint-Domingue'deki Fransız limanlarını ablukaya alarak Jean-Jacques Dessalines'in güçleriyle iş birliği yaptı, silah desteği sağladı ve Fransız takviye kuvvetlerini engelleyerek zaferin kazanılmasında rol oynadı."
    }
  }
};

// Global Application State
let state = {
  language: 'tr',
  week: 2,
  tab: 'narrative',
  slideIndex: 0,
  selectedFilters: [],
  completedWeeks: { 2: false, 3: false, 4: false, 5: false, 6: false },
  weekScores: { 2: null, 3: null, 4: null, 5: null, 6: null },
  quizAnswers: [],
  quizSubmitted: false,
  showAllLabels: false,
  diagramZoom: 1.0,
  diagramPanX: 0,
  diagramPanY: 0,
  quizState: {
    currentQuestionIndex: 0,
    score: 0,
    completed: false
  }
};

// Leaflet Map instance
let map = null;
let markersLayerGroup = null;
let routesLayerGroup = null;

// Leaflet Geographic Map View Preset Targets (lat/long centers and zoom level)
const mapViews = {
  2: { center: [10.0, -10.0], zoom: 2.3 }, // World view
  3: { center: [15.0, -32.0], zoom: 2.8 }, // Atlantic Focus
  4: { center: [39.0, -78.0], zoom: 5 }, // North America Focus
  5: { center: [47.0, 3.0], zoom: 5 }, // Europe Focus
  6: { center: [19.0, -74.0], zoom: 7.2 } // Hispaniola Focus
};

// Initialize Application on DOM Ready
window.addEventListener('DOMContentLoaded', () => {
  // Inject regional helper markers
  if (window.learningData && learningData.map && learningData.map.markers) {
    learningData.map.markers.hispaniola = {
      coords: [19.0, -70.5],
      label: { en: 'Hispaniola (La Española)', tr: 'Hispanyola (La Española)' },
      placement: 'top',
      isRegion: true
    };
    learningData.map.markers.caribbean = {
      coords: [15.0, -65.0],
      label: { en: 'Caribbean Islands (West Indies)', tr: 'Karayip Adaları (Batı Hint Adaları)' },
      placement: 'bottom',
      isRegion: true
    };
  }

  if (window.markerDetailsDescriptions) {
    markerDetailsDescriptions.hispaniola = {
      title: { en: "Hispaniola (La Española)", tr: "Hispanyola (La Española)" },
      desc: {
        en: "Historically named <strong>La Española</strong> by Christopher Columbus in 1492, it is the second-largest island in the Caribbean. Geographically divided into the French colony of <strong>Saint-Domingue</strong> (modern Haiti) in the west and the Spanish colony of <strong>Santo Domingo</strong> (modern Dominican Republic) in the east. It was the epicenter of the early sugar boom and the world's most successful slave rebellion.",
        tr: "1492'de Kristof Kolomb tarafından <strong>La Española</strong> olarak adlandırılan, Karayipler'deki en büyük ikinci adadır. Batıda Fransız sömürgesi <strong>Saint-Domingue</strong> (bugünkü Haiti) ve doğuda İspanyol sömürgesi <strong>Santo Domingo</strong> (bugünkü Dominik Cumhuriyeti) olarak bölünmüştü. Erken şeker üretiminin ve dünya tarihindeki en başarılı köle isyanının merkez üssüdür."
      }
    };
    markerDetailsDescriptions.caribbean = {
      title: { en: "Caribbean Islands (West Indies)", tr: "Karayip Adaları (Batı Hint Adaları)" },
      desc: {
        en: "Also known historically as the <strong>West Indies</strong>, this is a vast archipelago separating the Caribbean Sea from the Atlantic Ocean. In the 17th and 18th centuries, these islands became highly prized possessions of European empires (Spain, Britain, France, Netherlands) due to their tropical climate, perfect for cash crops like sugar cane, coffee, and cotton. They were the destination for the vast majority of the transatlantic slave trade.",
        tr: "Tarihsel olarak <strong>Batı Hint Adaları</strong> (West Indies) olarak da bilinir. Karayip Denizi'ni Atlantik Okyanusu'ndan ayıran geniş takımadalar topluluğudur. 17. ve 18. yüzyıllarda bu adalar; şeker kamışı, kahve ve pamuk gibi son derece kazançlı ürünlerin yetiştirilmesine uygun tropikal iklimi nedeniyle Avrupa imparatorluklarının (İspanya, İngiltere, Fransa, Hollanda) en değerli sömürgeleri haline geldi. Transatlantik köle ticaretinin büyük çoğunluğunun varış noktasıydı."
      }
    };
  }

  // Defer initMap() by one animation frame so the browser performs a
  // layout pass first. Without this, flex containers may still report
  // 0×0 dimensions and Leaflet throws "Attempted to load an infinite
  // number of tiles".
  requestAnimationFrame(() => {
    initMap();
    loadProgress();
    applyLanguage();
    switchWeek(state.week);
    initPanelResizer();
    initDiagramPanAndZoom();
  });

  window.addEventListener('resize', () => {
    safeInvalidateSize(map);
  });
});

// Safely invalidate map dimensions to prevent "Attempted to load an infinite number of tiles" error on zero-sized containers
function safeInvalidateSize(mapInstance) {
  if (!mapInstance) return;
  const container = mapInstance.getContainer();
  if (container && container.offsetWidth > 0 && container.offsetHeight > 0) {
    mapInstance.invalidateSize({ animate: false });
  }
}

// Initialize Leaflet Map
function initMap() {
  // Setup Map container with standard zoom/attributions
  map = L.map('map-canvas', {
    zoomControl: true,
    minZoom: 1.5,
    maxZoom: 12
  }).setView([15.0, -25.0], 2);
  
  // Load CartoDB Positron Basemap Tiles (Gorgeus clean Light basemap from internet)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);

  // Force Leaflet to recalculate container dimensions in case CSS layout
  // hasn't fully resolved yet (belt-and-suspenders guard).
  safeInvalidateSize(map);
  
  // Layer Groups
  markersLayerGroup = L.layerGroup().addTo(map);
  routesLayerGroup = L.layerGroup().addTo(map);
}

// Switch language toggles (TR/EN)
function toggleLanguage() {
  state.language = state.language === 'tr' ? 'en' : 'tr';
  applyLanguage();
  
  // Re-render contents depending on the active tab state
  renderWeekInfo();
  renderSlide(state.tab === 'narrative');
  
  if (state.tab === 'map-explorer') {
    renderMapMarkers(); 
    renderMapRoutes(state.selectedFilters);
    renderExplorerLocations();
  }
  
  renderMapExplorerFilters();
  renderInfographic();
  renderQuiz();
  
  if (state.tab === 'video') {
    renderVideo();
  }
}

function applyLanguage() {
  const trBtn = document.getElementById('lang-btn-tr');
  const enBtn = document.getElementById('lang-btn-en');
  
  if (state.language === 'tr') {
    trBtn.classList.add('active');
    enBtn.classList.remove('active');
  } else {
    enBtn.classList.add('active');
    trBtn.classList.remove('active');
  }
  
  const trans = uiTranslations[state.language];
  document.getElementById('progress-lbl-text').innerText = trans.progressText;
  
  const svgBook = `<svg class="tab-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`;
  const svgMap = `<svg class="tab-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg>`;
  const svgChart = `<svg class="tab-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`;
  const svgQuiz = `<svg class="tab-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`;

  document.getElementById('tab-btn-narrative').innerHTML = `${svgBook} <span id="tab-txt-narrative">${trans.tabNarrative}</span>`;
  document.getElementById('tab-btn-explorer').innerHTML = `${svgMap} <span id="tab-txt-explorer">${trans.tabExplorer}</span>`;
  document.getElementById('tab-btn-graphics').innerHTML = `${svgChart} <span id="tab-txt-graphics">${trans.tabGraphics}</span>`;
  document.getElementById('tab-btn-quiz').innerHTML = `${svgQuiz} <span id="tab-txt-quiz">${trans.tabQuiz}</span>`;
  
  const svgVideo = `<svg class="tab-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`;
  document.getElementById('tab-btn-video').innerHTML = `${svgVideo} <span id="tab-txt-video">${trans.tabVideo}</span>`;
  
  const videoTitle = document.getElementById('video-title');
  if (videoTitle) {
    videoTitle.innerText = state.language === 'tr' ? 'Video Anlatım' : 'Video Lecture';
  }
  
  // Module selector label
  const lblModuleSelect = document.getElementById('lbl-module-select');
  if (lblModuleSelect) {
    lblModuleSelect.innerText = state.language === 'tr' ? 'Modül Seçin:' : 'Select Module:';
  }

  // Map Legend
  const legendTitle = document.getElementById('map-overlay-title-text');
  if (legendTitle) {
    legendTitle.innerText = trans.mapLegendTitle;
  }
  const legendDesc = document.getElementById('map-overlay-desc-text');
  if (legendDesc) {
    legendDesc.innerText = trans.mapLegendDesc;
  }
  updateLabelsButtonState();
  
  // Explorer Titles and Search Placeholder
  const expTitle = document.getElementById('explorer-title');
  if (expTitle) {
    expTitle.innerText = state.language === 'tr' ? 'Harita Kaşifi' : 'Map Explorer';
  }
  const expRoutes = document.getElementById('explorer-lbl-routes');
  if (expRoutes) {
    expRoutes.innerText = state.language === 'tr' ? 'Yollar ve Akışlar' : 'Routes & Flows';
  }
  const expLocs = document.getElementById('explorer-lbl-locations');
  if (expLocs) {
    expLocs.innerText = state.language === 'tr' ? 'Tarihi Konumlar ve Limanlar' : 'Locations & Ports';
  }
  const searchInput = document.getElementById('location-search');
  if (searchInput) {
    searchInput.placeholder = state.language === 'tr' ? 'Konum ara...' : 'Search location...';
  }
  
  const graphTitle = document.getElementById('graphics-title');
  if (graphTitle) {
    graphTitle.innerText = state.language === 'tr' ? 'Görsel Şemalar' : 'Visual Diagrams';
  }
  const pdfBtnText = document.getElementById('pdf-btn-text');
  if (pdfBtnText) {
    pdfBtnText.innerText = state.language === 'tr' ? 'Ders Notunu İndir' : 'Download Lecture Notes';
  }
  
  // Dropdown items text & score display
  for (let w = 2; w <= 6; w++) {
    updateSidebarScoreDisplay(w);
  }
  
  updateGlobalProgressBar();
}

// Switch active study week
function switchWeek(weekNum) {
  state.week = weekNum;
  state.slideIndex = 0;
  state.selectedFilters = [];
  
  // Pause video player on week switch
  const videoPlayer = document.getElementById('module-video-player');
  if (videoPlayer) {
    videoPlayer.pause();
  }
  const videoContainer = document.querySelector('.video-container');
  if (videoContainer) {
    videoContainer.innerHTML = '';
  }
  
  // Update dropdown value to keep in sync
  const selectEl = document.getElementById('module-select');
  if (selectEl) {
    selectEl.value = weekNum.toString();
  }
  
  // Swap theme variable coloring
  const weekData = learningData.weeks[weekNum];
  document.documentElement.style.setProperty('--theme-accent', weekData.themeColor);
  document.documentElement.style.setProperty('--theme-accent-rgb', hexToRgb(weekData.themeColor));
  document.documentElement.style.setProperty('--theme-accent-glow', `rgba(${hexToRgb(weekData.themeColor)}, 0.12)`);
  
  // Fly Leaflet Map to target viewport preset
  if (map) {
    const view = mapViews[weekNum];
    map.flyTo(view.center, view.zoom, { duration: 1.5 });
  }
  
  // Update Legend badge
  document.getElementById('map-active-week').innerText = weekData.title[state.language];
  document.getElementById('map-active-week').style.background = weekData.themeColor;
  
  // Render subpanels
  renderWeekInfo();
  renderSlide();
  renderMapExplorerFilters();
  renderInfographic();
  resetQuizState();
  
  if (state.tab === 'map-explorer') {
    renderExplorerLocations();
  }
  
  if (state.tab === 'quiz') {
    renderQuiz();
  }
  
  if (state.tab === 'video') {
    renderVideo();
  }
}

// Convert Hex string color to RGB
function hexToRgb(hex) {
  const bigint = parseInt(hex.replace('#', ''), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

// Render active week title label
function renderWeekInfo() {
  const weekData = learningData.weeks[state.week];
  const trans = uiTranslations[state.language];
  document.getElementById('active-module-eyebrow').innerText = state.language === 'tr' ? 'KONU' : 'TOPIC';
  document.getElementById('active-module-title-text').innerText = weekData.title[state.language];
}

// -----------------------------------------------
// CLICKABLE LOCATION LINKS IN NARRATIVE TEXT
// -----------------------------------------------

// Location alias dictionary: maps place name text strings (both TR and EN) to marker keys in learningData.map.markers
const locationAliases = {
  // --- Marker label-based (auto-derived) ---
  // EN labels
  'Seville': 'seville', 'Lisbon': 'lisbon', 'London': 'london', 'Bristol': 'bristol',
  'Liverpool': 'liverpool', 'Paris': 'paris', 'Nantes': 'nantes', 'Bordeaux': 'bordeaux',
  'Naples': 'naples', 'Valmy': 'valmy', 'Varennes': 'varennes', 'Versailles': 'versailles',
  'Virginia': 'virginia', 'Boston': 'boston', 'Philadelphia': 'philadelphia',
  'Yorktown': 'yorktown', 'Maryland': 'maryland', 'Carolinas': 'carolina',
  'Tenochtitlan': 'tenochtitlan', 'Santo Domingo': 'santo_domingo',
  'Cap-Français': 'cap_francais', 'Port-au-Prince': 'port_au_prince',
  'Gonaives': 'gonaives', 'Havana': 'havana', 'Esmeraldas': 'esmeraldas',
  'Andes Mountains': 'andes', 'Andes': 'andes', 'Potosí': 'potosi', 'Potosi': 'potosi',
  'Elmina Castle': 'elmina', 'Elmina': 'elmina',
  'Bight of Benin': 'benin', 'Benin': 'benin',
  'River Gambia': 'gambia', 'Gambia': 'gambia', 'Senegambia': 'gambia',
  'Luanda': 'luanda', 'Angola': 'luanda',
  'Congo Free State': 'congo', 'Congo': 'congo',
  'Goa': 'goa', 'Canton': 'china', 'Ireland': 'ireland',
  'Valladolid': 'valladolid', 'Jura': 'jura', 'Kingston': 'kingston',
  'Jamaica': 'kingston', 'Carolina': 'carolina',
  // TR labels
  'Sevilla': 'seville', 'Lizbon': 'lisbon', 'Londra': 'london',
  'Napoli': 'naples', 'Versay': 'versailles',
  'Filadelfiya': 'philadelphia', 'Carolinalar': 'carolina',
  'And Dağları': 'andes', 'Kongo': 'congo',
  'Elmina Kalesi': 'elmina', 'Benin Körfezi': 'benin',
  'Gambia Nehri': 'gambia', 'İrlanda': 'ireland',
  'Kanton': 'china',
  // --- Additional aliases found in slide text ---
  'Saint-Domingue': 'santo_domingo', 'Hispaniola': 'santo_domingo',
  'Karayipler': 'santo_domingo', 'Caribbean': 'santo_domingo',
  'Jamestown': 'virginia', 'Chesapeake': 'virginia',
  'Meksika': 'tenochtitlan', 'Mexico': 'tenochtitlan',
  'Peru': 'potosi', 'Brazil': 'brazil', 'Brezilya': 'brazil',
  'Bahia': 'brazil', 'Küba': 'havana', 'Cuba': 'havana',
  'Kolombiya': 'esmeraldas', 'Colombia': 'esmeraldas',
  'Belçika': 'congo', 'Belgium': 'congo',
  'Hindistan': 'goa', 'India': 'goa',
  'Çin': 'china', 'China': 'china',
  'Haiti': 'port_au_prince',
  'Jamaika': 'kingston',
  'Zacatecas': 'potosi',
  'Ndongo': 'luanda',
  'Bastille': 'paris',
  'Andean': 'andes',
};

// Process narrative HTML text to wrap recognized location names as clickable links
function processLocationLinks(htmlText) {
  if (!htmlText) return htmlText;
  
  // Sort aliases by length descending so longest matches take priority (e.g. "And Dağları" before "And")
  const sortedAliases = Object.keys(locationAliases).sort((a, b) => b.length - a.length);
  
  // Build a single regex that matches any alias
  // Escape special regex chars in aliases
  const escaped = sortedAliases.map(a => a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  // Negative lookahead: skip if we're inside an HTML tag (between < and >) or already inside an <a> tag
  const pattern = new RegExp('(' + escaped.join('|') + ')(?![^<]*>)(?!</a)', 'g');
  
  // Track which marker keys have already been linked to avoid duplicate links for same marker
  const linkedMarkers = new Set();
  
  const result = htmlText.replace(pattern, (match) => {
    const markerKey = locationAliases[match];
    if (!markerKey) return match;
    
    // Only link first occurrence of each unique marker
    if (linkedMarkers.has(markerKey)) return match;
    linkedMarkers.add(markerKey);
    
    // Verify the marker actually exists in data
    if (!learningData.map.markers[markerKey]) return match;
    
    return `<a class="location-link" data-marker-key="${markerKey}" href="javascript:void(0)" onclick="flyToLocation('${markerKey}')">${match}</a>`;
  });
  
  return result;
}

// Fly map to a specific marker location when user clicks a location link
function flyToLocation(markerKey) {
  const marker = learningData.map.markers[markerKey];
  if (!marker || !map) return;
  
  // Show the marker on the map with pulsing highlight
  renderMapMarkers([markerKey]);
  
  // Calculate appropriate zoom level
  const baseZoom = mapViews[state.week] ? mapViews[state.week].zoom : 3;
  const targetZoom = Math.max(baseZoom + 1.5, 5);
  
  // Fly to the location
  map.flyTo(marker.coords, targetZoom, { duration: 1.2 });
}

// Render narrative slides content
function renderSlide(updateMap = true) {
  const slide = learningData.weeks[state.week].slides[state.slideIndex];
  const trans = uiTranslations[state.language];
  
  const svgPin = `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:13px; height:13px; display:inline-block; vertical-align:middle; margin-right:4px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
  
  document.getElementById('narrative-title').innerText = slide.title[state.language];
  document.getElementById('narrative-text').innerHTML = `
    <div class="narrative-inner-scroll">${slide.text[state.language]}</div>
    <div class="narrative-actions-container">
      <button class="narrative-action-btn" onclick="focusSlideMapState()">
        ${svgPin} <span>${trans.showOnMapBtn}</span>
      </button>
      <button class="narrative-action-btn secondary" onclick="showDetailedSlideAnalysis()">
        <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
        <span>${state.language === 'tr' ? 'Detaylı Analiz' : 'Detailed Analysis'}</span>
      </button>
    </div>
  `;
  
  document.getElementById('slide-counter-text').innerText = `${trans.slideWord} ${state.slideIndex + 1} / ${learningData.weeks[state.week].slides.length}`;
  
  document.getElementById('slide-btn-prev').disabled = state.slideIndex === 0;
  document.getElementById('slide-btn-next').disabled = state.slideIndex === learningData.weeks[state.week].slides.length - 1;
  
  if (updateMap) {
    applySlideMapState(slide);
  }
}

// Next/Prev nav helpers
function prevSlide() {
  if (state.slideIndex > 0) {
    state.slideIndex--;
    renderSlide();
  }
}

function nextSlide() {
  if (state.slideIndex < learningData.weeks[state.week].slides.length - 1) {
    state.slideIndex++;
    renderSlide();
  }
}

// Render Markers & Routes corresponding to current slide
function applySlideMapState(slide) {
  if (!slide.mapState || !map) return;
  const mapState = slide.mapState;
  
  // Render slide-specific markers
  renderMapMarkers(mapState.markers);
  
  // Render slide-specific routes
  renderMapRoutes(mapState.activeRoutes);
}

function focusSlideMapState() {
  const slide = learningData.weeks[state.week].slides[state.slideIndex];
  applySlideMapState(slide);
  
  if (map) {
    let points = [];
    
    // Collect active marker coordinates
    if (slide.mapState && slide.mapState.markers) {
      slide.mapState.markers.forEach(key => {
        const marker = learningData.map.markers[key];
        if (marker && marker.coords) {
          points.push(L.latLng(marker.coords));
        }
      });
    }
    
    // Collect active route coordinates
    if (slide.mapState && slide.mapState.activeRoutes) {
      slide.mapState.activeRoutes.forEach(key => {
        const route = learningData.map.routes[key];
        if (route && route.coords) {
          route.coords.forEach(coord => {
            points.push(L.latLng(coord));
          });
        }
      });
    }
    
    if (points.length > 0) {
      // Fit bounds to show all active markers & routes!
      const bounds = L.latLngBounds(points);
      // Ensure we don't zoom in too tightly if there is only a single point
      const maxZoom = mapViews[state.week] ? mapViews[state.week].zoom + 1.2 : 5;
      map.flyToBounds(bounds, {
        padding: [50, 50],
        maxZoom: maxZoom,
        duration: 1.2
      });
    } else {
      // Fallback to default week view if no markers or routes are active on the slide
      const view = mapViews[state.week] || { center: [15.0, -25.0], zoom: 2 };
      map.flyTo(view.center, view.zoom, { duration: 1.2 });
    }
  }
}

// Switch tabs: Narrative, Map Explorer, Charts, Quiz, Video
function switchTab(tabId) {
  state.tab = tabId;
  
  // Pause video player if leaving video tab
  if (tabId !== 'video') {
    const videoPlayer = document.getElementById('module-video-player');
    if (videoPlayer) {
      videoPlayer.pause();
    }
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
      videoContainer.innerHTML = '';
    }
  }
  
  const tabs = ['narrative', 'explorer', 'graphics', 'quiz', 'video'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tab-btn-${t}`);
    if (btn) {
      if (t === (tabId === 'map-explorer' ? 'explorer' : tabId)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  });
  
  document.getElementById('card-narrative').style.display = 'none';
  document.getElementById('card-map-explorer').style.display = 'none';
  document.getElementById('card-graphics').style.display = 'none';
  document.getElementById('card-quiz').style.display = 'none';
  document.getElementById('card-video').style.display = 'none';
  
  if (tabId === 'narrative') {
    document.getElementById('card-narrative').style.display = 'flex';
    renderSlide();
  } else if (tabId === 'map-explorer') {
    document.getElementById('card-map-explorer').style.display = 'flex';
    renderMapMarkers(); // Show all markers in explorer mode
    renderMapRoutes(state.selectedFilters); // Show selected filters
    renderExplorerLocations(); // Populate locations grid
    // Reset camera to default week view
    const view = mapViews[state.week];
    map.flyTo(view.center, view.zoom, { duration: 1 });
  } else if (tabId === 'graphics') {
    document.getElementById('card-graphics').style.display = 'flex';
    renderInfographic();
  } else if (tabId === 'quiz') {
    document.getElementById('card-quiz').style.display = 'flex';
    renderQuiz();
  } else if (tabId === 'video') {
    document.getElementById('card-video').style.display = 'flex';
    renderVideo();
  }
}

// Render dynamic video contents (supports both local files and Google Drive embedded players)
function renderVideo() {
  const weekData = learningData.weeks[state.week];
  const videoContainer = document.querySelector('.video-container');
  const videoDesc = document.getElementById('video-desc');
  
  if (!weekData || !weekData.video) {
    if (videoContainer) {
      videoContainer.innerHTML = state.language === 'tr' ? 
        '<div style="color:var(--text-secondary); font-size:0.85rem;">Bu modül için video bulunmamaktadır.</div>' : 
        '<div style="color:var(--text-secondary); font-size:0.85rem;">No video is available for this module.</div>';
    }
    if (videoDesc) {
      videoDesc.innerText = state.language === 'tr' ? 'Bu modül için video bulunmamaktadır.' : 'No video is available for this module.';
    }
    return;
  }
  
  const src = weekData.video.src;
  
  if (videoContainer) {
    if (src.includes('drive.google.com')) {
      // Extract File ID from Google Drive share link
      let fileId = '';
      const match = src.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (match) {
        fileId = match[1];
      }
      
      if (fileId) {
        // Embed Google Drive Video Player inside iframe
        videoContainer.innerHTML = `
          <iframe id="module-video-iframe" src="https://drive.google.com/file/d/${fileId}/preview" style="width: 100%; height: 100%; border: none; border-radius: 12px;" allow="autoplay" allowfullscreen></iframe>
        `;
      } else {
        videoContainer.innerHTML = `
          <div style="color:var(--error); font-size:0.85rem;">Geçersiz Google Drive Linki / Invalid Google Drive URL</div>
        `;
      }
    } else {
      // Render standard local HTML5 video player
      videoContainer.innerHTML = `
        <video id="module-video-player" controls style="width: 100%; height: 100%; object-fit: contain; border-radius: 12px;">
          <source id="module-video-source" src="${src}" type="video/mp4">
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      `;
      const player = document.getElementById('module-video-player');
      if (player) {
        player.load();
      }
    }
  }
  
  if (videoDesc) {
    videoDesc.innerText = weekData.video.desc[state.language];
  }
}

// Get Custom Illustrative Emoji for Map Markers based on Text Keywords and Categories
function getMarkerEmoji(key, marker, slideTitle, slideText, lang) {
  const markerName = (marker.label && marker.label[lang]) || '';
  const searchStr = `${key} ${markerName} ${slideTitle || ''} ${slideText || ''}`.toLowerCase();
  
  // 1. Chains / Slavery / Captives (Week 3, Slave Trade)
  if (searchStr.includes('köle') || searchStr.includes('slave') || searchStr.includes('slavery') || 
      searchStr.includes('esir') || searchStr.includes('captiv') || searchStr.includes('zincir') || 
      searchStr.includes('chain') || searchStr.includes('middle passage') || searchStr.includes('insan tic') ||
      key.includes('elmina') || key.includes('luanda') || key.includes('dahomey') || key.includes('ouidah') || key.includes('whydah')) {
    return '⛓️';
  }
  
  // 2. Sugar / Plantations
  if (searchStr.includes('şeker') || searchStr.includes('sugar') || searchStr.includes('melas') || 
      searchStr.includes('molasses') || searchStr.includes('plantation') || searchStr.includes('çiftlik') ||
      key.includes('cuba') || key.includes('jamaica') || key.includes('barbados') || key.includes('santo_domingo') ||
      key.includes('saint_domingue') || key.includes('brazil') || key.includes('bahia') || key.includes('pernambuco')) {
    return '🍯';
  }

  // 3. Cotton
  if (searchStr.includes('pamuk') || searchStr.includes('cotton') || key.includes('georgia') || key.includes('carolina')) {
    return '🌾';
  }

  // 4. Gold / Silver / Money / Coins / Mines / Wealth / Potosi
  if (searchStr.includes('altın') || searchStr.includes('gold') || searchStr.includes('gümüş') || 
      searchStr.includes('silver') || searchStr.includes('potosi') || searchStr.includes('maden') || 
      searchStr.includes('mine') || searchStr.includes('hazine') || searchStr.includes('treasure') || 
      searchStr.includes('para') || searchStr.includes('money') || searchStr.includes('coins') || 
      searchStr.includes('vergi') || searchStr.includes('tax') || searchStr.includes('ticaret') || 
      searchStr.includes('trade') || searchStr.includes('zengin') || key.includes('potosi') || key.includes('zacatecas') || key.includes('lima')) {
    return '🪙';
  }

  // 5. Disease / Smallpox / Death (Week 2, Columbian Exchange, etc.)
  if (searchStr.includes('disease') || searchStr.includes('hastalık') || searchStr.includes('smallpox') || 
      searchStr.includes('çiçek') || searchStr.includes('salgın') || searchStr.includes('epidemic') || 
      searchStr.includes('plague') || searchStr.includes('veba') || searchStr.includes('death') || 
      searchStr.includes('ölüm') || searchStr.includes('nüfus kayb') || searchStr.includes('depopulation')) {
    return '🦠';
  }
  
  // 6. War / Battle / Siege / Swords / Revolution / Execution / Bastille
  if (searchStr.includes('savaş') || searchStr.includes('war') || searchStr.includes('battle') || 
      searchStr.includes('isyan') || searchStr.includes('rebel') || searchStr.includes('revolution') || 
      searchStr.includes('ihtilal') || searchStr.includes('kuşatma') || searchStr.includes('siege') || 
      searchStr.includes('valmy') || searchStr.includes('bastille') || searchStr.includes('guillotine') || 
      searchStr.includes('giyotin') || searchStr.includes('ordu') || searchStr.includes('army') || 
      searchStr.includes('savaşçı') || searchStr.includes('conquest') || searchStr.includes('fetih') ||
      searchStr.includes('haiti') || searchStr.includes('toussaint') || searchStr.includes('napoleon') ||
      searchStr.includes('leclerc') || key.includes('valmy') || key.includes('varennes') || key.includes('yorktown') ||
      key.includes('lexington') || key.includes('concord') || key.includes('saratoga') || key.includes('waterloo')) {
    return '⚔️';
  }
  
  // 7. Ships / Voyage / Sea / Port / Fleet
  if (searchStr.includes('gemi') || searchStr.includes('ship') || searchStr.includes('voyage') || 
      searchStr.includes('donanma') || searchStr.includes('filo') || searchStr.includes('fleet') || 
      searchStr.includes('deniz') || searchStr.includes('sea') || searchStr.includes('port') || 
      searchStr.includes('liman') || searchStr.includes('okyanus') || searchStr.includes('ocean') || 
      searchStr.includes('seyahat') || searchStr.includes('navig') || searchStr.includes('columbus') || 
      searchStr.includes('keşif') || searchStr.includes('exploration') || key.includes('nantes') ||
      key.includes('bordeaux') || key.includes('bristol') || key.includes('liverpool') || key.includes('seville') ||
      key.includes('lisbon') || key.includes('boston') || key.includes('new_york') || key.includes('philadelphia') ||
      key.includes('charleston')) {
    return '🚢';
  }

  // 8. Potato / Crops / Maize / Corn / Foods
  if (searchStr.includes('patates') || searchStr.includes('potato') || searchStr.includes('mısır') || 
      searchStr.includes('maize') || searchStr.includes('corn') || searchStr.includes('tarım') || 
      searchStr.includes('agriculture') || searchStr.includes('besin') || searchStr.includes('gıda') || 
      searchStr.includes('food') || searchStr.includes('bitki') || searchStr.includes('plant')) {
    return '🌽';
  }

  // 9. Tea / Coffee / Spices / Tobacco
  if (searchStr.includes('kahve') || searchStr.includes('coffee') || searchStr.includes('çay') || 
      searchStr.includes('tea') || searchStr.includes('baharat') || searchStr.includes('spice') || 
      searchStr.includes('tütün') || searchStr.includes('tobacco') || searchStr.includes('ipek') || 
      searchStr.includes('silk') || key.includes('canton') || key.includes('calcutta') || key.includes('java')) {
    return '☕';
  }
  
  // 10. Kings / Queens / Monarchy / Palace / Versailles
  if (searchStr.includes('kral') || searchStr.includes('king') || searchStr.includes('monarş') || 
      searchStr.includes('monarch') || searchStr.includes('saray') || searchStr.includes('palace') || 
      searchStr.includes('versailles') || searchStr.includes('louis') || searchStr.includes('kraliçe') || 
      searchStr.includes('queen') || key.includes('versailles') || key.includes('paris') || key.includes('london')) {
    return '👑';
  }

  return '📍';
}

function getMarkerSvgIcon(key, themeColor) {
  // Map markers to relevant 3D commodity SVG drawings
  let svgContent = null;
  let accent = themeColor || 'var(--theme-accent)';

  switch (key) {
    case 'potosi':
    case 'lima':
      svgContent = `
        <defs><linearGradient id="slv" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e5e7eb"/><stop offset="100%" stop-color="#9ca3af"/></linearGradient></defs>
        <circle cx="50" cy="50" r="28" fill="url(#slv)" stroke="#4b5563" stroke-width="1.5"/>
        <circle cx="50" cy="50" r="22" fill="none" stroke="#d1d5db" stroke-width="1.5" stroke-dasharray="2,2"/>
        <text x="50" y="57" font-family="Outfit" font-size="20" font-weight="900" fill="#374151" text-anchor="middle">$</text>
      `;
      accent = '#9ca3af';
      break;

    case 'brazil':
    case 'cuba':
    case 'santo_domingo':
    case 'saint_domingue':
      svgContent = `
        <defs><linearGradient id="sg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#84cc16"/><stop offset="100%" stop-color="#4d7c0f"/></linearGradient></defs>
        <rect x="42" y="15" width="16" height="70" rx="4" fill="url(#sg1)"/>
        <path d="M 35,30 Q 20,25 15,15 Q 25,25 35,30 Z" fill="#84cc16"/>
        <path d="M 65,30 Q 80,25 85,15 Q 75,25 65,30 Z" fill="#4d7c0f"/>
        <line x1="42" y1="40" x2="58" y2="40" stroke="#a3e635" stroke-width="1.5"/>
        <line x1="42" y1="60" x2="58" y2="60" stroke="#a3e635" stroke-width="1.5"/>
      `;
      accent = '#84cc16';
      break;

    case 'port_au_prince':
      svgContent = `
        <defs><linearGradient id="cop1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#b45309"/><stop offset="100%" stop-color="#7c2d12"/></linearGradient></defs>
        <ellipse cx="50" cy="35" rx="26" ry="10" fill="url(#cop1)" stroke="#ea580c"/>
        <rect x="22" y="35" width="56" height="35" fill="url(#cop1)" stroke="#ea580c"/>
        <ellipse cx="50" cy="70" rx="26" ry="10" fill="#7c2d12" stroke="#ea580c"/>
      `;
      accent = '#b45309';
      break;

    case 'elmina':
    case 'benin':
    case 'luanda':
    case 'kingston':
      svgContent = `
        <defs><linearGradient id="wtr" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#1d4ed8" stop-opacity="0.6"/><stop offset="100%" stop-color="#1e3a8a" stop-opacity="0.9"/></linearGradient></defs>
        <ellipse cx="50" cy="68" rx="35" ry="10" fill="url(#wtr)"/>
        <path d="M 20,68 C 20,58 80,58 80,68 L 75,78 C 75,83 25,83 25,78 Z" fill="#78350f"/>
        <line x1="50" y1="30" x2="50" y2="64" stroke="#92400e" stroke-width="3"/>
        <path d="M 50,30 C 30,40 50,55 50,55 Z" fill="#f3f4f6" opacity="0.9"/>
      `;
      accent = '#1d4ed8';
      break;

    case 'virginia':
      svgContent = `
        <defs><linearGradient id="br1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#92400e"/><stop offset="100%" stop-color="#451a03"/></linearGradient></defs>
        <ellipse cx="50" cy="32" rx="22" ry="10" fill="#b45309"/>
        <rect x="28" y="32" width="44" height="44" fill="url(#br1)"/>
        <ellipse cx="50" cy="76" rx="22" ry="10" fill="#78350f"/>
        <line x1="28" y1="46" x2="72" y2="46" stroke="#92400e" stroke-width="1.5" opacity="0.6"/>
      `;
      accent = '#92400e';
      break;

    case 'boston':
    case 'london':
      svgContent = `
        <defs><linearGradient id="wtt" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#b45309"/><stop offset="100%" stop-color="#92400e"/></linearGradient></defs>
        <rect x="25" y="25" width="50" height="50" rx="3" fill="url(#wtt)"/>
        <line x1="25" y1="25" x2="75" y2="75" stroke="#78350f" stroke-width="3"/>
        <line x1="75" y1="25" x2="25" y2="75" stroke="#78350f" stroke-width="3"/>
      `;
      accent = '#b45309';
      break;

    case 'yorktown':
      svgContent = `
        <defs><linearGradient id="can1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#374151"/><stop offset="100%" stop-color="#111827"/></linearGradient></defs>
        <ellipse cx="52" cy="52" rx="24" ry="10" fill="url(#can1)" transform="rotate(-20,52,52)"/>
        <circle cx="32" cy="65" r="5" fill="#1f2937"/>
        <rect x="22" y="68" width="56" height="8" rx="2" fill="#78350f"/>
      `;
      accent = '#374151';
      break;

    case 'paris':
      svgContent = `
        <rect x="36" y="15" width="4" height="65" fill="#78350f"/>
        <rect x="60" y="15" width="4" height="65" fill="#78350f"/>
        <polygon points="40,30 60,42 60,30" fill="#9ca3af" stroke="#4b5563" stroke-width="1"/>
      `;
      accent = '#dc2626';
      break;

    case 'gonaives':
      svgContent = `
        <rect x="22" y="26" width="56" height="24" fill="#1d4ed8"/>
        <rect x="22" y="50" width="56" height="24" fill="#dc2626"/>
        <line x1="22" y1="26" x2="22" y2="74" stroke="#78350f" stroke-width="3"/>
      `;
      accent = '#1d4ed8';
      break;

    case 'ireland':
      svgContent = `
        <defs><radialGradient id="pg1" cx="40%" cy="35%" r="60%"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#92400e"/></radialGradient></defs>
        <ellipse cx="42" cy="50" rx="18" ry="12" fill="url(#pg1)" transform="rotate(-15,42,50)"/>
      `;
      accent = '#d97706';
      break;

    case 'jura':
      svgContent = `
        <circle cx="36" cy="50" r="14" fill="none" stroke="#6b7280" stroke-width="6"/>
        <circle cx="64" cy="50" r="14" fill="none" stroke="#6b7280" stroke-width="6"/>
      `;
      accent = '#6b7280';
      break;

    case 'congo':
      svgContent = `
        <path d="M 25,65 L 68,22 C 72,18 78,22 75,26 L 35,75 Z" fill="#9ca3af" stroke="#4b5563" stroke-width="0.5"/>
        <rect x="20" y="65" width="8" height="12" rx="1" fill="#78350f" transform="rotate(45,24,71)"/>
      `;
      accent = '#9ca3af';
      break;

    case 'esmeraldas':
      svgContent = `
        <circle cx="36" cy="50" r="12" fill="none" stroke="#6b7280" stroke-width="5"/>
        <circle cx="64" cy="50" r="12" fill="none" stroke="#6b7280" stroke-width="5"/>
        <line x1="48" y1="44" x2="52" y2="56" stroke="var(--bg-card)" stroke-width="7"/>
      `;
      accent = '#6b7280';
      break;

    case 'valladolid':
      svgContent = `
        <defs><linearGradient id="sc1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fef9c3"/><stop offset="100%" stop-color="#fde68a"/></linearGradient></defs>
        <path d="M 32,22 Q 30,50 32,78 L 68,78 Q 70,50 68,22 Z" fill="url(#sc1)" stroke="#d97706" stroke-width="1"/>
      `;
      accent = '#d97706';
      break;

    case 'dahomey':
    case 'ouidah':
      svgContent = `
        <defs><linearGradient id="ibl" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4b5563"/><stop offset="100%" stop-color="#1f2937"/></linearGradient></defs>
        <rect x="25" y="44" width="50" height="6" rx="1" fill="url(#ibl)" transform="rotate(-15,50,47)"/>
      `;
      accent = '#4b5563';
      break;
  }

  return svgContent ? { svg: svgContent, accent } : null;
}

// Render Map Markers using Leaflet's L.marker
function renderMapMarkers(filterList = null) {
  if (!map || !markersLayerGroup) return;
  markersLayerGroup.clearLayers();
  
  const markerKeys = Object.keys(learningData.map.markers);
  
  // Find all markers relevant to the current week
  const weekSlides = learningData.weeks[state.week].slides;
  const weekMarkers = [];
  weekSlides.forEach(slide => {
    if (slide.mapState && slide.mapState.markers) {
      slide.mapState.markers.forEach(m => {
        if (!weekMarkers.includes(m)) weekMarkers.push(m);
      });
    }
  });

  // Always show Caribbean and Hispaniola for relevant weeks
  if (state.week === 2 || state.week === 3 || state.week === 6) {
    if (!weekMarkers.includes('caribbean')) weekMarkers.push('caribbean');
    if (!weekMarkers.includes('hispaniola')) weekMarkers.push('hispaniola');
  }

  // Get active slide title and text to match context emojis
  const slideObj = learningData.weeks[state.week].slides[state.slideIndex];
  const slideTitle = slideObj ? slideObj.title[state.language] : '';
  const slideText = slideObj ? slideObj.text[state.language] : '';

  markerKeys.forEach(key => {
    const marker = learningData.map.markers[key];
    
    // In narrative tab, ONLY show markers that are explicitly discussed in the active slide (or regions of the active week)
    if (state.tab === 'narrative') {
      if (marker.isRegion) {
        if (!weekMarkers.includes(key)) return;
      } else if (!filterList || !filterList.includes(key)) {
        return; // Hide completely
      }
    } else {
      // In other tabs (explorer, quiz, graphics), show all week markers
      if (!weekMarkers.includes(key)) {
        return;
      }
    }
    
    const isPulsing = filterList && filterList.includes(key);
    
    let shouldShowLabel = false;
    if (state.showAllLabels) {
      shouldShowLabel = true;
    } else {
      if (state.tab === 'narrative') {
        shouldShowLabel = !!(filterList && filterList.includes(key));
      } else { // 'map-explorer' tab
        if (state.selectedFilters && state.selectedFilters.length > 0) {
          shouldShowLabel = isMarkerInSelectedRoutes(key);
        } else {
          shouldShowLabel = true;
        }
      }
    }
    
    const placement = marker.placement || 'right';

    const themeColor = `var(--theme-accent)`;
    const svgIcon = getMarkerSvgIcon(key, themeColor);
    
    let markerHtml = '';
    let iconSize = [12, 12];
    let iconAnchor = [6, 6];
    
    if (marker.isRegion) {
      iconSize = [28, 28];
      iconAnchor = [14, 14];
      markerHtml = `
        <div class="leaflet-custom-pin-wrapper show-label" style="transform: translate(-14px, -14px);">
          <div class="leaflet-custom-svg-pin" style="border-color: var(--border-color) !important; border-style: dashed !important; background: transparent !important;" onclick="event.stopPropagation(); showMarkerDetails('${key}')">
            <svg viewBox="0 0 100 100" width="18" height="18" style="opacity: 0.7;">
              <circle cx="50" cy="50" r="28" fill="none" stroke="var(--text-secondary)" stroke-width="1.5" stroke-dasharray="3,3"/>
              <path d="M 50,22 L 50,78 M 22,50 L 78,50" stroke="var(--text-secondary)" stroke-width="1" opacity="0.6"/>
              <circle cx="50" cy="50" r="12" fill="none" stroke="var(--text-secondary)" stroke-width="1" opacity="0.6"/>
            </svg>
          </div>
          <span class="leaflet-custom-pin-label placement-${placement}" style="
            font-style: italic;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            font-size: 0.65rem;
            color: var(--text-secondary);
            background: var(--bg-surface);
            border: 1px dashed var(--border-color);
            opacity: 1 !important;
            transform: scale(1) translateY(-50%) translateX(0) !important;
          " onclick="event.stopPropagation(); showMarkerDetails('${key}')">${marker.label[state.language]}</span>
        </div>
      `;
    } else if (svgIcon) {
      iconSize = [28, 28];
      iconAnchor = [14, 14];
      markerHtml = `
        <div class="leaflet-custom-pin-wrapper ${shouldShowLabel ? 'show-label' : ''}" style="transform: translate(-14px, -14px);">
          <div class="leaflet-custom-svg-pin ${isPulsing ? 'pulsing' : ''}" style="border-color: ${svgIcon.accent} !important;" onclick="event.stopPropagation(); showMarkerDetails('${key}')">
            <svg viewBox="0 0 100 100" width="18" height="18" style="filter: drop-shadow(0 1px 2.5px rgba(0,0,0,0.18))">
              ${svgIcon.svg}
            </svg>
          </div>
          <span class="leaflet-custom-pin-label placement-${placement}" onclick="event.stopPropagation(); showMarkerDetails('${key}')">${marker.label[state.language]}</span>
        </div>
      `;
    } else {
      markerHtml = `
        <div class="leaflet-custom-pin-wrapper ${shouldShowLabel ? 'show-label' : ''}">
          <div class="leaflet-custom-pin ${isPulsing ? 'pulsing' : ''}"></div>
          <span class="leaflet-custom-pin-label placement-${placement}" onclick="event.stopPropagation(); showMarkerDetails('${key}')">${marker.label[state.language]}</span>
        </div>
      `;
    }

    const customIcon = L.divIcon({
      className: 'leaflet-marker-custom-icon',
      html: markerHtml,
      iconSize: iconSize,
      iconAnchor: iconAnchor
    });
    
    // Create and add Marker
    L.marker(marker.coords, { icon: customIcon })
      .addTo(markersLayerGroup)
      .on('click', () => {
        showMarkerDetails(key);
      });
  });
}

let routeAnimationInterval = null;
let routeAnimations = [];

function interpolateCoords(c1, c2, t) {
  return [
    c1[0] + (c2[0] - c1[0]) * t,
    c1[1] + (c2[1] - c1[1]) * t
  ];
}

function getPositionAtProgress(coords, progress) {
  if (!coords || coords.length === 0) return null;
  if (coords.length === 1) return coords[0];
  const totalSegments = coords.length - 1;
  const rawIndex = progress * totalSegments;
  const segmentIndex = Math.min(Math.floor(rawIndex), totalSegments - 1);
  const segmentT = rawIndex - segmentIndex;
  return interpolateCoords(coords[segmentIndex], coords[segmentIndex + 1], segmentT);
}

const COIN_SVG = (color) => `
<svg viewBox="0 0 36 36" width="24" height="24" style="background:var(--bg-surface); border-radius:50%; padding:2px; box-shadow:0 2px 5px rgba(0,0,0,0.15); display:block;">
  <circle cx="18" cy="18" r="14" fill="#facc15" stroke="${color}" stroke-width="1.5"></circle>
  <circle cx="18" cy="18" r="11" fill="#fef08a" stroke="${color}" stroke-width="1"></circle>
  <polygon points="18,10 19.5,14.5 24.5,15 20.5,18.5 22,23.5 18,21 14,23.5 15.5,18.5 11.5,15 16.5,14.5" fill="#facc15" stroke="${color}" stroke-width="1"></polygon>
</svg>
`;

const CHAIN_SVG = (color) => `
<svg viewBox="0 0 36 36" width="24" height="24" style="background:var(--bg-surface); border-radius:50%; padding:2px; box-shadow:0 2px 5px rgba(0,0,0,0.15); display:block;">
  <rect x="11" y="18" width="14" height="11" rx="2" fill="#cbd5e1" stroke="${color}" stroke-width="1.5"></rect>
  <path d="M14 18v-4c0-2.2 1.8-4 4-4s4 1.8 4 4v4" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"></path>
  <circle cx="18" cy="23" r="2" fill="#475569"></circle>
</svg>
`;

const DISEASE_SVG = (color) => `
<svg viewBox="0 0 36 36" width="24" height="24" style="background:var(--bg-surface); border-radius:50%; padding:2px; box-shadow:0 2px 5px rgba(0,0,0,0.15); display:block;">
  <polygon points="18,6 30,28 6,28" fill="#f59e0b" stroke="${color}" stroke-width="1.8" stroke-linejoin="round"></polygon>
  <line x1="18" y1="13" x2="18" y2="21" stroke="#fff" stroke-width="3" stroke-linecap="round"></line>
  <circle cx="18" cy="25" r="2" fill="#fff"></circle>
</svg>
`;

const PLANT_SVG = (color) => `
<svg viewBox="0 0 36 36" width="24" height="24" style="background:var(--bg-surface); border-radius:50%; padding:2px; box-shadow:0 2px 5px rgba(0,0,0,0.15); display:block;">
  <path d="M10 28c0-3 4-4 8-4s8 1 8 4H10z" fill="#78350f"></path>
  <path d="M18 26V14" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round"></path>
  <path d="M18 18c-4-1-6-4-6-7 0 4 3 7 6 7z" fill="#4ade80" stroke="${color}" stroke-width="1"></path>
  <path d="M18 15c4-1 6-4 6-7 0 4-3 7-6 7z" fill="#22c55e" stroke="${color}" stroke-width="1"></path>
</svg>
`;

const SAILBOAT_SVG = (color) => `
<svg viewBox="0 0 36 36" width="24" height="24" style="background:var(--bg-surface); border-radius:50%; padding:2px; box-shadow:0 2px 5px rgba(0,0,0,0.15); display:block;">
  <path d="M4 28c3 0 4-2 7-2s4 2 7 2 4-2 7-2 4 2 7 2" fill="none" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round"></path>
  <path d="M6 22l3 5h18l3-5H6z" fill="#b45309" stroke="${color}" stroke-width="1.2"></path>
  <line x1="18" y1="6" x2="18" y2="22" stroke="#78350f" stroke-width="2" stroke-linecap="round"></line>
  <path d="M18 6c-5 4-5 12-5 14h5V6z" fill="#fef08a" stroke="${color}" stroke-width="1"></path>
  <path d="M18 8c4 3 4 10 4 12h-4V8z" fill="#f87171" stroke="${color}" stroke-width="1"></path>
</svg>
`;

const DOCUMENT_SVG = (color) => `
<svg viewBox="0 0 36 36" width="24" height="24" style="background:var(--bg-surface); border-radius:50%; padding:2px; box-shadow:0 2px 5px rgba(0,0,0,0.15); display:block;">
  <rect x="9" y="7" width="18" height="22" rx="1.5" fill="#fef08a" stroke="${color}" stroke-width="1.5"></rect>
  <line x1="13" y1="12" x2="23" y2="12" stroke="${color}" stroke-width="1.5" stroke-linecap="round"></line>
  <line x1="13" y1="17" x2="23" y2="17" stroke="${color}" stroke-width="1.5" stroke-linecap="round"></line>
  <line x1="13" y1="22" x2="20" y2="22" stroke="${color}" stroke-width="1.5" stroke-linecap="round"></line>
  <circle cx="23" cy="23" r="3" fill="#ef4444"></circle>
</svg>
`;

const SWORDS_SVG = (color) => `
<svg viewBox="0 0 36 36" width="24" height="24" style="background:var(--bg-surface); border-radius:50%; padding:2px; box-shadow:0 2px 5px rgba(0,0,0,0.15); display:block;">
  <line x1="8" y1="28" x2="28" y2="8" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"></line>
  <line x1="8" y1="28" x2="6" y2="30" stroke="#b45309" stroke-width="3" stroke-linecap="round"></line>
  <line x1="10" y1="26" x2="7" y2="29" stroke="${color}" stroke-width="2" stroke-linecap="round"></line>
  
  <line x1="28" y1="28" x2="8" y2="8" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round"></line>
  <line x1="28" y1="28" x2="30" y2="30" stroke="#b45309" stroke-width="3" stroke-linecap="round"></line>
  <line x1="26" y1="26" x2="29" y2="29" stroke="${color}" stroke-width="2" stroke-linecap="round"></line>
</svg>
`;

function getRouteSVG(key, route) {
  const lower = key.toLowerCase();
  const color = route.color || '#3b82f6';
  
  if (lower.includes('ideas') || lower.includes('declaration') || lower.includes('book') || lower.includes('pamphlet') || lower.includes('revolutionary')) {
    return DOCUMENT_SVG(color);
  }
  if (lower.includes('invasion') || lower.includes('toussaint_switch') || lower.includes('march') || lower.includes('military') || lower.includes('troops') || lower.includes('retreat')) {
    return SWORDS_SVG(color);
  }
  if (lower.includes('silver') || lower.includes('altin') || lower.includes('gumus') || lower.includes('wealth') || lower.includes('finance')) {
    return COIN_SVG(color);
  }
  if (lower.includes('slave') || lower.includes('kole') || lower.includes('triangular') || lower.includes('human')) {
    return CHAIN_SVG(color);
  }
  if (lower.includes('disease') || lower.includes('hastalik') || lower.includes('smallpox')) {
    return DISEASE_SVG(color);
  }
  if (lower.includes('sugar') || lower.includes('seker') || lower.includes('rum') || lower.includes('melas') || 
      lower.includes('cotton') || lower.includes('pamuk') || lower.includes('food') || 
      lower.includes('potato') || lower.includes('patates') || lower.includes('maize') || lower.includes('misir')) {
    return PLANT_SVG(color);
  }
  return SAILBOAT_SVG(color);
}

function clearRouteAnimations() {
  if (routeAnimationInterval) {
    clearInterval(routeAnimationInterval);
    routeAnimationInterval = null;
  }
  routeAnimations.forEach(anim => {
    if (anim.marker && map) {
      try {
        map.removeLayer(anim.marker);
      } catch (e) {
        console.warn(e);
      }
    }
  });
  routeAnimations = [];
}

// Render Map Routes using Leaflet's L.polyline
function renderMapRoutes(filterList = []) {
  if (!map || !routesLayerGroup) return;
  routesLayerGroup.clearLayers();
  clearRouteAnimations();
  
  if (!filterList || filterList.length === 0) return;
  
  filterList.forEach(key => {
    const route = learningData.map.routes[key];
    if (!route || !route.coords) return;
    
    const polyline = L.polyline(route.coords, {
      color: route.color,
      weight: 3,
      opacity: 0.8,
      className: 'leaflet-animated-route', // Binds marching ants animation from styles.css
      lineJoin: 'round'
    }).addTo(routesLayerGroup);
    
    polyline.bindTooltip(`
      <div style="font-family: var(--font-sans); font-size: 0.7rem; font-weight: 600;">
        ${route.label[state.language]}
      </div>
    `, { sticky: true });

    // Setup animated traveling marker for this route
    const routeSVG = getRouteSVG(key, route);
    const customIcon = L.divIcon({
      className: 'leaflet-animated-flow-marker',
      html: `<div class="route-animated-emoji">${routeSVG}</div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });
    
    // Start at a randomized progress so multiple routes don't synchronize
    const startProgress = Math.random();
    const startPos = getPositionAtProgress(route.coords, startProgress);
    if (startPos) {
      const animMarker = L.marker(startPos, { icon: customIcon, zIndexOffset: 2000 }).addTo(map);
      routeAnimations.push({
        marker: animMarker,
        coords: route.coords,
        progress: startProgress
      });
    }
  });

  // Start animation timer if we have active paths
  if (routeAnimations.length > 0) {
    const speed = 0.004; // Speed fraction per frame
    routeAnimationInterval = setInterval(() => {
      routeAnimations.forEach(anim => {
        anim.progress += speed;
        if (anim.progress > 1) {
          anim.progress = 0;
        }
        const nextPos = getPositionAtProgress(anim.coords, anim.progress);
        if (nextPos) {
          anim.marker.setLatLng(nextPos);
        }
      });
    }, 40); // 25 FPS is highly performant and smooth
  }
}

// Render explorer filter badges
function renderMapExplorerFilters() {
  const filterBox = document.getElementById('explorer-filter-list');
  filterBox.innerHTML = '';
  
  const weekSlides = learningData.weeks[state.week].slides;
  const activeWeekRouteKeys = new Set();
  
  weekSlides.forEach(slide => {
    if (slide.mapState && slide.mapState.activeRoutes) {
      slide.mapState.activeRoutes.forEach(r => activeWeekRouteKeys.add(r));
    }
  });
  
  activeWeekRouteKeys.forEach(key => {
    const route = learningData.map.routes[key];
    if (!route) return;
    
    const badge = document.createElement('div');
    const isActive = state.selectedFilters.includes(key);
    badge.className = `map-filter-badge ${isActive ? 'active' : ''}`;
    badge.style.borderColor = route.color;
    if (isActive) {
      badge.style.background = route.color;
    }
    
    badge.innerText = route.label[state.language];
    badge.onclick = () => {
      if (state.selectedFilters.includes(key)) {
        state.selectedFilters = state.selectedFilters.filter(f => f !== key);
      } else {
        state.selectedFilters.push(key);
      }
      renderMapExplorerFilters();
      renderMapRoutes(state.selectedFilters);
    };
    
    filterBox.appendChild(badge);
  });
}

// Render marker popup modal
function showMarkerDetails(markerKey) {
  const details = markerDetails[markerKey];
  if (!details) return;
  
  document.getElementById('modal-title-text').innerText = details.title[state.language];
  document.getElementById('modal-body-text').innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <img src="images/${markerKey}.jpg" alt="${details.title[state.language]}" style="width: 100%; height: 220px; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid var(--border-color);" onerror="this.style.display='none'">
      <p style="margin: 0; line-height: 1.6; font-size: 0.95rem; color: var(--text-secondary);">${details.desc[state.language]}</p>
    </div>
  `;
  document.getElementById('modal-container').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-container').classList.remove('open');
}

// Zoom map coordinates
function zoomMap(action) {
  if (!map) return;
  if (action === 'in') {
    map.zoomIn();
  } else if (action === 'out') {
    map.zoomOut();
  } else if (action === 'reset') {
    const preset = mapViews[state.week];
    map.setView(preset.center, preset.zoom);
  }
}

// RENDER INTERACTIVE INFOGRAPHICS (DIAGRAMS) - Optimized for Light Theme
// ─────────────────────────────────────────────────────────────────
//  DIAGRAM TAB STATE  (persists per week, resets on week switch)
// ─────────────────────────────────────────────────────────────────
const diagramTabState = { 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

function switchDiagramTab(week, idx) {
  diagramTabState[week] = idx;
  renderInfographic();
}

// Helper: build the shared tab-bar HTML
function buildDiagramTabBar(week, tabs, lang) {
  return `
    <div style="display:flex; gap:0.5rem; margin-bottom:0.75rem; flex-wrap:wrap;">
      ${tabs.map((t, i) => `
        <button
          onclick="switchDiagramTab(${week}, ${i})"
          style="
            padding: 0.35rem 0.85rem;
            border-radius: 8px;
            border: 1.5px solid ${diagramTabState[week] === i ? 'var(--theme-accent)' : 'var(--border-color)'};
            background: ${diagramTabState[week] === i ? 'var(--theme-accent)' : 'var(--bg-surface)'};
            color: ${diagramTabState[week] === i ? '#fff' : 'var(--text-secondary)'};
            font-family: 'Outfit', sans-serif;
            font-size: 0.72rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.18s;
            letter-spacing: 0.03em;
          "
        >${lang === 'tr' ? t.tr : t.en}</button>`).join('')}
    </div>`;
}

// Helper: shared 3-D commodity card HTML
function commodityCard(popupKey, label, svgContent, accent) {
  return `
    <div class="commodity-card"
      style="flex:1; min-width:120px; max-width:135px; background:var(--bg-card);
             border:1.5px solid var(--border-color); border-radius:12px; padding:0.65rem;
             display:flex; flex-direction:column; align-items:center; justify-content:center;
             text-align:center; cursor:pointer; transition:all 0.2s ease;
             box-shadow:0 4px 12px rgba(0,0,0,0.04);"
      onclick="showDiagramDetailPopup('${popupKey}')"
      onmouseover="this.style.borderColor='${accent}'; this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.08)'"
      onmouseout="this.style.borderColor='var(--border-color)'; this.style.transform='none'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.04)'"
    >
      <svg viewBox="0 0 100 100" width="52" height="52"
           style="filter:drop-shadow(0 3px 6px rgba(0,0,0,0.14))">${svgContent}</svg>
      <span style="font-family:'Outfit',sans-serif; font-size:0.72rem; font-weight:700;
                   color:var(--text-primary); margin-top:0.4rem; line-height:1.2;">${label}</span>
    </div>`;
}

function renderInfographic() {
  const container = document.getElementById('graphics-diagram-box');
  container.innerHTML = '';

  // Reset zoom & pan on new render
  state.diagramZoom = 1.0;
  state.diagramPanX = 0;
  state.diagramPanY = 0;

  const L = state.language; // 'tr' | 'en'
  const T = (en, tr) => L === 'tr' ? tr : en; // bilingual helper

  let activeTabs = [];
  let activeSvgs = [];
  let activeCards = [];
  let activeTabIdx = 0;

  // ══════════════════════════════════════════════════════════════
  //  WEEK 2  –  Columbian Exchange
  // ══════════════════════════════════════════════════════════════
  if (state.week === 2) {
    const tabs = [
      { en: '⇄ Exchange Flow',      tr: '⇄ Değişim Akışı' },
      { en: '📉 Population Collapse', tr: '📉 Nüfus Çöküşü' },
      { en: '🔺 Trade Triangle',      tr: '🔺 Ticaret Üçgeni' },
      { en: '📈 Population Growth',   tr: '📈 Nüfus Patlaması' }
    ];
    const tab = diagramTabState[2];

    // ── Diagram 1: classic new-world / old-world flow (original) ──
    const svg1 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <defs>
          <linearGradient id="nw-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.10"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.02"/>
          </linearGradient>
          <linearGradient id="ow-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ef4444" stop-opacity="0.10"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.02"/>
          </linearGradient>
          <filter id="sh2"><feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#000" flood-opacity="0.04"/></filter>
          <marker id="arr-g" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
          </marker>
          <marker id="arr-r" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/>
          </marker>
        </defs>
        <!-- New World Card -->
        <rect x="18" y="18" width="188" height="300" rx="10" fill="url(#nw-g)" stroke="#10b981" stroke-width="1.5" filter="url(#sh2)" style="cursor:pointer" onclick="showDiagramDetailPopup('w2_newworld')"/>
        <text x="32" y="40" font-family="Outfit" font-size="10" font-weight="800" fill="#047857" letter-spacing="0.04em">${T('NEW WORLD', 'YENİ DÜNYA')}</text>
        <line x1="32" y1="50" x2="194" y2="50" stroke="#10b981" stroke-width="0.8" opacity="0.3"/>
        <g transform="translate(32,68)" fill="var(--text-secondary)" font-size="9.5" font-weight="600" font-family="Inter">
          <text y="0"><tspan fill="#10b981" font-weight="900">•</tspan> Potato / Patates</text>
          <text y="20"><tspan fill="#10b981" font-weight="900">•</tspan> Maize / Mısır</text>
          <text y="40"><tspan fill="#10b981" font-weight="900">•</tspan> Tobacco / Tütün</text>
          <text y="60"><tspan fill="#10b981" font-weight="900">•</tspan> Tomato / Domates</text>
          <text y="80"><tspan fill="#10b981" font-weight="900">•</tspan> Chili / Acı Biber</text>
          <text y="100"><tspan fill="#10b981" font-weight="900">•</tspan> Cacao / Kakao</text>
          <text y="120"><tspan fill="#10b981" font-weight="900">•</tspan> Quinine / Kinin</text>
          <text y="140"><tspan fill="#10b981" font-weight="900">•</tspan> Rubber / Kauçuk</text>
          <text y="160"><tspan fill="#ef4444" font-weight="900">•</tspan> Syphilis / Frengi</text>
        </g>
        <!-- Arrows -->
        <path d="M 216,125 Q 250,105 284,125" stroke="#10b981" stroke-width="2.5" fill="none" marker-end="url(#arr-g)"/>
        <path d="M 284,205 Q 250,225 216,205" stroke="#ef4444" stroke-width="2.5" fill="none" marker-end="url(#arr-r)"/>
        <text x="250" y="115" font-family="Inter" font-size="7.5" font-weight="700" fill="#047857" text-anchor="middle">${T('TO EUROPE →', 'AVRUPA\'YA →')}</text>
        <text x="250" y="222" font-family="Inter" font-size="7.5" font-weight="700" fill="#b91c1c" text-anchor="middle">${T('← FROM EUROPE', '← AVRUPA\'DAN')}</text>
        <!-- Old World Card -->
        <rect x="294" y="18" width="188" height="300" rx="10" fill="url(#ow-g)" stroke="#ef4444" stroke-width="1.5" filter="url(#sh2)" style="cursor:pointer" onclick="showDiagramDetailPopup('w2_oldworld')"/>
        <text x="308" y="40" font-family="Outfit" font-size="10" font-weight="800" fill="#b91c1c" letter-spacing="0.04em">${T('OLD WORLD', 'ESKİ DÜNYA')}</text>
        <line x1="308" y1="50" x2="470" y2="50" stroke="#ef4444" stroke-width="0.8" opacity="0.3"/>
        <g transform="translate(308,68)" fill="var(--text-secondary)" font-size="9.5" font-weight="600" font-family="Inter">
          <text y="0"><tspan fill="#ef4444" font-weight="900">•</tspan> Sugar / Şeker Kamışı</text>
          <text y="20"><tspan fill="#ef4444" font-weight="900">•</tspan> Coffee / Kahve</text>
          <text y="40"><tspan fill="#ef4444" font-weight="900">•</tspan> Wheat &amp; Rice / Buğday</text>
          <text y="60"><tspan fill="#ef4444" font-weight="900">•</tspan> Horses / At, Sığır</text>
          <text y="80"><tspan fill="#ef4444" font-weight="900">•</tspan> Sheep &amp; Pigs / Koyun</text>
          <text y="100"><tspan fill="#ef4444" font-weight="900">•</tspan> Smallpox / Çiçek H.</text>
          <text y="120"><tspan fill="#ef4444" font-weight="900">•</tspan> Measles / Kızamık</text>
          <text y="140"><tspan fill="#ef4444" font-weight="900">•</tspan> Christianity / Hristiyanlık</text>
          <text y="160"><tspan fill="#ef4444" font-weight="900">•</tspan> Euro Languages / Diller</text>
        </g>
      </svg>`;

    // ── Diagram 2: Indigenous Population Collapse bar chart ──
    const svg2 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <defs>
          <linearGradient id="bar-before" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#10b981"/>
            <stop offset="100%" stop-color="#047857"/>
          </linearGradient>
          <linearGradient id="bar-after" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ef4444"/>
            <stop offset="100%" stop-color="#b91c1c"/>
          </linearGradient>
        </defs>
        <text x="250" y="26" font-family="Outfit" font-size="13" font-weight="800" fill="#ef4444" text-anchor="middle" letter-spacing="0.04em">
          ${T('INDIGENOUS POPULATION COLLAPSE (1500–1600)', 'YERLİ NÜFUS ÇÖKÜŞÜ (1500–1600)')}
        </text>
        <text x="250" y="42" font-family="Inter" font-size="8.5" fill="var(--text-secondary)" text-anchor="middle">
          ${T('Diseases killed up to 90% of the native population within a century', 'Hastalıklar bir yüzyıl içinde yerli nüfusun %90\'ını yok etti')}
        </text>
        <!-- Y axis -->
        <line x1="70" y1="60" x2="70" y2="280" stroke="var(--border-color)" stroke-width="1"/>
        <line x1="70" y1="280" x2="460" y2="280" stroke="var(--border-color)" stroke-width="1"/>
        <!-- Y labels -->
        <text x="62" y="64" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="end">60M</text>
        <text x="62" y="114" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="end">50M</text>
        <text x="62" y="164" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="end">30M</text>
        <text x="62" y="214" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="end">15M</text>
        <text x="62" y="264" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="end">5M</text>
        <!-- Grid lines -->
        <line x1="70" y1="64" x2="460" y2="64" stroke="var(--border-color)" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.5"/>
        <line x1="70" y1="114" x2="460" y2="114" stroke="var(--border-color)" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.5"/>
        <line x1="70" y1="164" x2="460" y2="164" stroke="var(--border-color)" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.5"/>
        <line x1="70" y1="214" x2="460" y2="214" stroke="var(--border-color)" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.5"/>
        <line x1="70" y1="264" x2="460" y2="264" stroke="var(--border-color)" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.5"/>
        <!-- Bar: 1500 Mexico ~25M  -->
        <rect x="95" y="115" width="55" height="165" fill="url(#bar-before)" rx="3" style="cursor:pointer" onclick="showDiagramDetailPopup('w2_pop1500')"/>
        <text x="122" y="110" font-family="Outfit" font-size="9" font-weight="800" fill="#047857" text-anchor="middle">~25M</text>
        <text x="122" y="294" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">Mexico 1500</text>
        <!-- Bar: 1600 Mexico ~1M -->
        <rect x="165" y="258" width="55" height="22" fill="url(#bar-after)" rx="3" style="cursor:pointer" onclick="showDiagramDetailPopup('w2_pop1600')"/>
        <text x="192" y="253" font-family="Outfit" font-size="9" font-weight="800" fill="#b91c1c" text-anchor="middle">~1M</text>
        <text x="192" y="294" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">Mexico 1600</text>
        <!-- Bar: Caribbean 1492 ~1M -->
        <rect x="250" y="258" width="55" height="22" fill="url(#bar-before)" rx="3" style="cursor:pointer" onclick="showDiagramDetailPopup('w2_carib_before')"/>
        <text x="277" y="253" font-family="Outfit" font-size="9" font-weight="800" fill="#047857" text-anchor="middle">~1M</text>
        <text x="277" y="294" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">Caribbean 1492</text>
        <!-- Bar: Caribbean 1550 ~0 (effectively 0) -->
        <rect x="320" y="275" width="55" height="5" fill="url(#bar-after)" rx="2" style="cursor:pointer" onclick="showDiagramDetailPopup('w2_carib_after')"/>
        <text x="347" y="270" font-family="Outfit" font-size="9" font-weight="800" fill="#b91c1c" text-anchor="middle">~0</text>
        <text x="347" y="294" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">Caribbean 1550</text>
        <!-- Decline arrow -->
        <path d="M 147,120 Q 180,145 190,255" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3" fill="none" marker-end="url(#arr-r)"/>
        <!-- Legend -->
        <rect x="390" y="80" width="10" height="10" fill="url(#bar-before)" rx="2"/>
        <text x="405" y="89" font-family="Inter" font-size="8" fill="var(--text-secondary)">${T('Before Contact','Temas Öncesi')}</text>
        <rect x="390" y="98" width="10" height="10" fill="url(#bar-after)" rx="2"/>
        <text x="405" y="107" font-family="Inter" font-size="8" fill="var(--text-secondary)">${T('After 1 Century','1 Yüzyıl Sonra')}</text>
        <!-- 90% label -->
        <text x="250" y="320" font-family="Outfit" font-size="11" font-weight="800" fill="#ef4444" text-anchor="middle">
          ${T('⚠ Up to 90% population decline due to epidemic disease', '⚠ Salgın hastalıklar nedeniyle %90\'a kadar nüfus kaybı')}
        </text>
      </svg>`;

    // ── Diagram 3: Triangular Trade flow ──
    const svg3 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <defs>
          <marker id="arr-tri" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--text-secondary)"/>
          </marker>
          <marker id="arr-gold" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/>
          </marker>
          <marker id="arr-red2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/>
          </marker>
          <marker id="arr-grn2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
          </marker>
          <filter id="sh3"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#000" flood-opacity="0.07"/></filter>
        </defs>
        <text x="250" y="26" font-family="Outfit" font-size="13" font-weight="800" fill="#f59e0b" text-anchor="middle" letter-spacing="0.04em">
          ${T('TRIANGULAR TRADE SYSTEM (1500–1800)', 'TİCARET ÜÇGENI SİSTEMİ (1500–1800)')}
        </text>
        <!-- Node: EUROPE -->
        <g style="cursor:pointer" onclick="showDiagramDetailPopup('w2_trade_europe')">
          <rect x="185" y="48" width="130" height="48" rx="10" fill="var(--bg-surface)" stroke="#1d4ed8" stroke-width="2" filter="url(#sh3)"/>
          <text x="250" y="70" font-family="Outfit" font-size="11" font-weight="800" fill="#1d4ed8" text-anchor="middle">${T('EUROPE', 'AVRUPA')}</text>
          <text x="250" y="86" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">${T('Textiles · Guns · Rum','Tekstil · Silah · Ром')}</text>
        </g>
        <!-- Node: WEST AFRICA -->
        <g style="cursor:pointer" onclick="showDiagramDetailPopup('w2_trade_africa')">
          <rect x="30" y="220" width="140" height="48" rx="10" fill="var(--bg-surface)" stroke="#f59e0b" stroke-width="2" filter="url(#sh3)"/>
          <text x="100" y="242" font-family="Outfit" font-size="11" font-weight="800" fill="#d97706" text-anchor="middle">WEST AFRICA</text>
          <text x="100" y="258" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">${T('Enslaved People','Köleleştirilen İnsanlar')}</text>
        </g>
        <!-- Node: AMERICAS -->
        <g style="cursor:pointer" onclick="showDiagramDetailPopup('w2_trade_americas')">
          <rect x="330" y="220" width="140" height="48" rx="10" fill="var(--bg-surface)" stroke="#10b981" stroke-width="2" filter="url(#sh3)"/>
          <text x="400" y="242" font-family="Outfit" font-size="11" font-weight="800" fill="#047857" text-anchor="middle">${T('AMERICAS', 'AMERİKA')}</text>
          <text x="400" y="258" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">${T('Sugar · Tobacco · Silver','Şeker · Tütün · Gümüş')}</text>
        </g>
        <!-- Arrow Europe → Africa (Manufactured Goods) -->
        <path d="M 200,96 Q 90,155 100,220" stroke="#f59e0b" stroke-width="2.5" fill="none" marker-end="url(#arr-gold)"/>
        <text x="108" y="158" font-family="Inter" font-size="8" font-weight="700" fill="#d97706" text-anchor="middle" transform="rotate(-60,108,158)">${T('Manuf. Goods','İmalat Ürünleri')}</text>
        <!-- Arrow Africa → Americas (Enslaved People) -->
        <path d="M 170,250 L 330,250" stroke="#ef4444" stroke-width="2.5" fill="none" marker-end="url(#arr-red2)"/>
        <text x="250" y="242" font-family="Inter" font-size="8" font-weight="700" fill="#b91c1c" text-anchor="middle">${T('Middle Passage – Enslaved People','Orta Geçit – Köleleştirilen İnsanlar')}</text>
        <!-- Arrow Americas → Europe (Raw Goods) -->
        <path d="M 400,220 Q 380,155 300,96" stroke="#10b981" stroke-width="2.5" fill="none" marker-end="url(#arr-grn2)"/>
        <text x="385" y="155" font-family="Inter" font-size="8" font-weight="700" fill="#047857" text-anchor="middle" transform="rotate(60,385,155)">${T('Raw Materials','Hammadde')}</text>
        <!-- Center label -->
        <text x="250" y="175" font-family="Outfit" font-size="10" font-weight="800" fill="var(--text-secondary)" text-anchor="middle" opacity="0.5">ATLANTIC</text>
        <text x="250" y="190" font-family="Outfit" font-size="10" font-weight="800" fill="var(--text-secondary)" text-anchor="middle" opacity="0.5">OCEAN</text>
        <!-- profit note -->
        <text x="250" y="318" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">
          ${T('Each leg generated profit for European merchants — funded by enslaved labor','Her bacak Avrupalı tüccarlara kâr sağladı — köle emeğiyle finanse edildi')}
        </text>
      </svg>`;

        const svg4 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <defs>
          <linearGradient id="pop-g" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#059669" stop-opacity="0.3"/>
          </linearGradient>
        </defs>
        <text x="250" y="26" font-family="Outfit" font-size="12" font-weight="800" fill="#10b981" text-anchor="middle" letter-spacing="0.04em">
          ${T('EUROPEAN POPULATION BOOM (1700-1900)','AVRUPA NÜFUS PATLAMASI (1700-1900)')}
        </text>
        <text x="250" y="42" font-family="Inter" font-size="8" font-weight="500" fill="var(--text-secondary)" text-anchor="middle">
          ${T('Driven by New World staple crops (Potato & Maize)','Yeni Dünya mahsullerinin (Patates ve Mısır) etkisiyle')}
        </text>
        <line x1="60" y1="80" x2="60" y2="280" stroke="var(--border-color)" stroke-width="1.5"/>
        <line x1="60" y1="280" x2="450" y2="280" stroke="var(--border-color)" stroke-width="1.5"/>
        
        <text x="50" y="284" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">0</text>
        <text x="50" y="234" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">100M</text>
        <text x="50" y="184" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">200M</text>
        <text x="50" y="134" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">300M</text>
        <text x="50" y="84" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">400M</text>
        
        <text x="120" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1700</text>
        <text x="220" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1800</text>
        <text x="320" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1850</text>
        <text x="420" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1900</text>
        
        <path d="M 60,280 L 120,240 L 220,195 L 320,140 L 420,80 L 420,280 Z" fill="url(#pop-g)" stroke="#10b981" stroke-width="2"/>
        
        <text x="120" y="232" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">125M</text>
        <text x="220" y="187" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">180M</text>
        <text x="320" y="132" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">266M</text>
        <text x="420" y="72" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">400M</text>
        
        <g transform="translate(140, 110)" style="cursor:pointer" onclick="showDiagramDetailPopup('w2_pop_detail')">
          <rect x="0" y="0" width="160" height="42" rx="4" fill="var(--bg-surface)" stroke="#10b981" stroke-width="1"/>
          <text x="80" y="15" font-family="Outfit" font-size="7.5" font-weight="700" fill="#047857" text-anchor="middle">${T('THE POTATO EFFECT','PATATES ETKİSİ')}</text>
          <text x="80" y="26" font-family="Inter" font-size="6.5" fill="var(--text-secondary)" text-anchor="middle">${T('Provided cheap, dense calories','Ucuz ve yoğun kalori sağladı,')}</text>
          <text x="80" y="34" font-family="Inter" font-size="6.5" fill="var(--text-secondary)" text-anchor="middle">${T('fueling the Industrial Revolution','Endüstri Devrimi\'ni besledi')}</text>
        </g>
      </svg>`;
    const svgs = [svg1, svg2, svg3, svg4];

    // 3D Commodity cards (6 cards)
    const cards = [
      commodityCard('commodity_corn', T('Maize / Corn','Mısır'), `
        <defs>
          <linearGradient id="cl1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#047857"/></linearGradient>
          <linearGradient id="cc1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fef08a"/><stop offset="100%" stop-color="#eab308"/></linearGradient>
        </defs>
        <path d="M 30,80 C 10,60 20,30 45,15 C 35,40 35,65 30,80 Z" fill="url(#cl1)"/>
        <path d="M 70,80 C 90,60 80,30 55,15 C 65,40 65,65 70,80 Z" fill="#34d399"/>
        <ellipse cx="50" cy="25" rx="12" ry="6" fill="#fbbf24"/>
        <path d="M 38,25 L 38,70 C 38,82 62,82 62,70 L 62,25 Z" fill="url(#cc1)"/>
        <circle cx="44" cy="33" r="2" fill="#f59e0b"/><circle cx="50" cy="33" r="2" fill="#fde68a"/>
        <circle cx="56" cy="33" r="2" fill="#f59e0b"/><circle cx="44" cy="43" r="2" fill="#fde68a"/>
        <circle cx="50" cy="43" r="2" fill="#f59e0b"/><circle cx="56" cy="43" r="2" fill="#fde68a"/>
        <circle cx="44" cy="53" r="2" fill="#f59e0b"/><circle cx="50" cy="53" r="2" fill="#fde68a"/>
        <circle cx="56" cy="53" r="2" fill="#f59e0b"/>`, '#10b981'),
      commodityCard('commodity_tobacco', T('Tobacco','Tütün'), `
        <defs><linearGradient id="tl1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#a16207"/><stop offset="100%" stop-color="#713f12"/></linearGradient></defs>
        <path d="M 50,90 C 25,60 25,25 50,10 C 75,25 75,60 50,90 Z" fill="url(#tl1)"/>
        <path d="M 50,10 L 50,90" stroke="#fef08a" stroke-width="1.5" opacity="0.4"/>
        <path d="M 50,30 L 35,45 M 50,45 L 32,60 M 50,60 L 38,75" stroke="#fef08a" stroke-width="1" opacity="0.3"/>
        <path d="M 50,30 L 65,45 M 50,45 L 68,60 M 50,60 L 62,75" stroke="#fef08a" stroke-width="1" opacity="0.3"/>`, '#d97706'),
      commodityCard('commodity_sugar', T('Sugar Cane','Şeker Kamışı'), `
        <defs><linearGradient id="sg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#84cc16"/><stop offset="100%" stop-color="#4d7c0f"/></linearGradient></defs>
        <rect x="42" y="15" width="8" height="70" rx="3" fill="url(#sg1)"/>
        <rect x="53" y="25" width="6" height="55" rx="2" fill="url(#sg1)" opacity="0.7"/>
        <line x1="42" y1="35" x2="50" y2="35" stroke="#ecfdf5" stroke-width="1.5" opacity="0.6"/>
        <line x1="42" y1="55" x2="50" y2="55" stroke="#ecfdf5" stroke-width="1.5" opacity="0.6"/>
        <line x1="42" y1="70" x2="50" y2="70" stroke="#ecfdf5" stroke-width="1.5" opacity="0.6"/>
        <path d="M 45,35 C 20,25 15,45 35,50" stroke="#84cc16" stroke-width="2.5" fill="none" stroke-linecap="round"/>`, '#84cc16'),
      commodityCard('commodity_potato', T('Potato','Patates'), `
        <defs><radialGradient id="pg1" cx="40%" cy="35%" r="60%"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#92400e"/></radialGradient></defs>
        <ellipse cx="42" cy="50" rx="18" ry="22" fill="url(#pg1)"/>
        <ellipse cx="62" cy="55" rx="15" ry="18" fill="url(#pg1)" opacity="0.9"/>
        <circle cx="38" cy="42" r="2" fill="#78350f" opacity="0.6"/>
        <circle cx="58" cy="48" r="2" fill="#78350f" opacity="0.6"/>
        <circle cx="48" cy="62" r="2" fill="#78350f" opacity="0.5"/>
        <path d="M 42,28 Q 46,20 50,15 Q 52,10 54,15" stroke="#84cc16" stroke-width="2" fill="none" stroke-linecap="round"/>`, '#d97706'),
      commodityCard('commodity_tomato', T('Tomato','Domates'), `
        <defs><radialGradient id="tg1" cx="35%" cy="30%" r="65%"><stop offset="0%" stop-color="#f87171"/><stop offset="100%" stop-color="#dc2626"/></radialGradient></defs>
        <circle cx="50" cy="55" r="28" fill="url(#tg1)"/>
        <path d="M 50,27 C 46,20 50,14 50,27" stroke="#16a34a" stroke-width="2.5" fill="none"/>
        <path d="M 50,27 C 40,18 36,14 40,22" stroke="#16a34a" stroke-width="2" fill="none"/>
        <path d="M 50,27 C 60,18 64,14 60,22" stroke="#16a34a" stroke-width="2" fill="none"/>
        <path d="M 28,50 Q 50,45 72,50" stroke="#f9a8d4" stroke-width="1.5" opacity="0.4" fill="none"/>`, '#dc2626'),
      commodityCard('commodity_cacao', T('Cacao','Kakao'), `
        <defs><linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#92400e"/><stop offset="100%" stop-color="#451a03"/></linearGradient></defs>
        <ellipse cx="50" cy="60" rx="22" ry="28" fill="url(#cg1)"/>
        <path d="M 35,40 L 50,32 L 65,40" stroke="#a16207" stroke-width="2" fill="none"/>
        <line x1="50" y1="32" x2="50" y2="18" stroke="#4d7c0f" stroke-width="3" stroke-linecap="round"/>
        <path d="M 32,55 Q 50,48 68,55 M 32,65 Q 50,58 68,65 M 32,75 Q 50,68 68,75" stroke="#fef08a" stroke-width="1" opacity="0.35" fill="none"/>`, '#92400e'),
    ];

    activeTabs = tabs;
    activeSvgs = svgs;
    activeCards = cards;
    activeTabIdx = tab;

  // ══════════════════════════════════════════════════════════════
  //  WEEK 3  –  Slavery & Bacon's Rebellion
  // ══════════════════════════════════════════════════════════════
  } else if (state.week === 3) {
    const tabs = [
      { en: '🔗 Path to Slavery',    tr: '🔗 Köleliğe Giden Yol' },
      { en: '⚓ Atlantic Trade',      tr: '⚓ Atlantik Köle Ticareti' },
      { en: '📈 Slave Population',   tr: '📈 Köle Nüfusu' },
      { en: '⚖️ Codification Laws',   tr: '⚖️ Kölelik Yasaları' }
    ];
    const tab = diagramTabState[3];
    const accentW3 = '#d97706';

    // ── Diagram 1: Bacon's Rebellion causal chain (original) ──
    const svg1 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <defs>
          <filter id="sh3d"><feDropShadow dx="0" dy="5" stdDeviation="3" flood-color="#000" flood-opacity="0.06"/></filter>
          <marker id="arr-a" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="${accentW3}"/>
          </marker>
        </defs>
        <text x="250" y="26" font-family="Outfit" font-size="13" font-weight="800" fill="${accentW3}" text-anchor="middle" letter-spacing="0.04em">
          ${T('TRANSITION TO RACIAL SLAVERY','IRKSAL KÖLELİĞE GEÇİŞ')}
        </text>
        <g transform="translate(45,48)" filter="url(#sh3d)" style="cursor:pointer" onclick="showDiagramDetailPopup('w3_step1')">
          <rect x="0" y="4" width="410" height="30" rx="6" fill="#b45309"/>
          <rect x="0" y="0" width="410" height="30" rx="6" fill="var(--bg-surface)" stroke="var(--border-color)" stroke-width="1"/>
          <text x="205" y="19" font-family="Outfit" font-size="9.5" font-weight="700" fill="var(--text-primary)" text-anchor="middle">1. ${T('LAND CONSOLIDATION — Tobacco prices fall, planters squeeze indentured servants','TOPRAK TEKELLEŞMESİ — Tütün fiyatları düşer, toprak sahipleri işçileri ezer')}</text>
        </g>
        <path d="M 250,82 L 250,97" stroke="${accentW3}" stroke-width="1.5" fill="none" marker-end="url(#arr-a)"/>
        <g transform="translate(45,100)" filter="url(#sh3d)" style="cursor:pointer" onclick="showDiagramDetailPopup('w3_step2')">
          <rect x="0" y="4" width="410" height="30" rx="6" fill="#b45309"/>
          <rect x="0" y="0" width="410" height="30" rx="6" fill="var(--bg-surface)" stroke="var(--border-color)" stroke-width="1"/>
          <text x="205" y="19" font-family="Outfit" font-size="9.5" font-weight="700" fill="var(--text-primary)" text-anchor="middle">2. ${T('DISCONTENTED SERVANTS — Indentured servants free but landless','MEMNUNSUZ İŞÇİLER — Sözleşmeli işçiler özgür ama topraksız')}</text>
        </g>
        <path d="M 250,134 L 250,149" stroke="${accentW3}" stroke-width="1.5" fill="none" marker-end="url(#arr-a)"/>
        <g transform="translate(45,152)" filter="url(#sh3d)" style="cursor:pointer" onclick="showDiagramDetailPopup('w3_step3')">
          <rect x="0" y="4" width="410" height="30" rx="6" fill="#d97706"/>
          <rect x="0" y="0" width="410" height="30" rx="6" fill="rgba(217,119,6,0.05)" stroke="#d97706" stroke-width="1.5"/>
          <text x="205" y="19" font-family="Outfit" font-size="9.5" font-weight="750" fill="#b45309" text-anchor="middle">3. ${T('ARMED UPRISING — Bacon\'s Rebellion 1676: black + white servants unite','SİLAHLI İSYAN — Bacon İsyanı 1676: siyah + beyaz işçiler birleşir')}</text>
        </g>
        <path d="M 250,186 L 250,201" stroke="${accentW3}" stroke-width="1.5" fill="none" marker-end="url(#arr-a)"/>
        <g transform="translate(45,204)" filter="url(#sh3d)" style="cursor:pointer" onclick="showDiagramDetailPopup('w3_step4')">
          <rect x="0" y="4" width="410" height="30" rx="6" fill="#b45309"/>
          <rect x="0" y="0" width="410" height="30" rx="6" fill="var(--bg-surface)" stroke="var(--border-color)" stroke-width="1"/>
          <text x="205" y="19" font-family="Outfit" font-size="9.5" font-weight="700" fill="var(--text-primary)" text-anchor="middle">4. ${T('ELITE RESPONSE — Divide & Rule: racial laws separate black/white labor','ELİT YANITI — Böl-Yönet: ırksal yasalar siyah/beyaz emeği ayırır')}</text>
        </g>
        <path d="M 250,238 L 250,253" stroke="${accentW3}" stroke-width="1.5" fill="none" marker-end="url(#arr-a)"/>
        <g transform="translate(45,256)" filter="url(#sh3d)" style="cursor:pointer" onclick="showDiagramDetailPopup('w3_step5')">
          <rect x="0" y="4" width="410" height="38" rx="6" fill="#dc2626"/>
          <rect x="0" y="0" width="410" height="38" rx="6" fill="rgba(239,68,68,0.05)" stroke="#ef4444" stroke-width="1.5"/>
          <text x="205" y="17" font-family="Outfit" font-size="10" font-weight="800" fill="#b91c1c" text-anchor="middle">5. ${T('HEREDITARY RACIAL SLAVERY — Lifetime chattel slavery codified by law','ÖMÜR BOYU IRKSAL KÖLELİK — Hukuki kölelik kalıcı hale getirildi')}</text>
          <text x="205" y="30" font-family="Inter" font-size="7.5" font-weight="600" fill="var(--text-secondary)" text-anchor="middle">${T('Race-based labor replaced class conflict as the tool of social control','Sınıf çatışması yerine ırk temelli emek sosyal kontrolün aracı haline geldi')}</text>
        </g>
      </svg>`;

    // ── Diagram 2: Transatlantic Slave Trade triangle ──
    const svg2 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <defs>
          <marker id="arr-sl1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/>
          </marker>
          <marker id="arr-sl2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/>
          </marker>
          <marker id="arr-sl3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
          </marker>
          <filter id="sh-sl"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#000" flood-opacity="0.07"/></filter>
        </defs>
        <text x="250" y="26" font-family="Outfit" font-size="13" font-weight="800" fill="#ef4444" text-anchor="middle" letter-spacing="0.04em">
          ${T('TRANSATLANTIC SLAVE TRADE (1500–1808)','TRANSATLANTİK KÖLE TİCARETİ (1500–1808)')}
        </text>
        <!-- EUROPE node -->
        <g style="cursor:pointer" onclick="showDiagramDetailPopup('w3_europe')">
          <rect x="180" y="46" width="140" height="52" rx="10" fill="var(--bg-surface)" stroke="#1d4ed8" stroke-width="2" filter="url(#sh-sl)"/>
          <text x="250" y="66" font-family="Outfit" font-size="10.5" font-weight="800" fill="#1d4ed8" text-anchor="middle">${T('EUROPE', 'AVRUPA')}</text>
          <text x="250" y="80" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('Ships · Guns · Rum · Textiles','Gemi · Silah · Rom · Tekstil')}</text>
          <text x="250" y="92" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('Britain · Portugal · France · Netherlands','İngiltere · Portekiz · Fransa')}</text>
        </g>
        <!-- AFRICA node -->
        <g style="cursor:pointer" onclick="showDiagramDetailPopup('w3_africa')">
          <rect x="25" y="230" width="145" height="52" rx="10" fill="var(--bg-surface)" stroke="#f59e0b" stroke-width="2" filter="url(#sh-sl)"/>
          <text x="97" y="250" font-family="Outfit" font-size="10.5" font-weight="800" fill="#d97706" text-anchor="middle">WEST AFRICA</text>
          <text x="97" y="264" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('12.5M enslaved people deported','12.5 Milyon insan kaçırıldı')}</text>
          <text x="97" y="276" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">Senegambia · Gold Coast · Congo</text>
        </g>
        <!-- AMERICAS node -->
        <g style="cursor:pointer" onclick="showDiagramDetailPopup('w3_americas')">
          <rect x="330" y="230" width="145" height="52" rx="10" fill="var(--bg-surface)" stroke="#10b981" stroke-width="2" filter="url(#sh-sl)"/>
          <text x="402" y="250" font-family="Outfit" font-size="10.5" font-weight="800" fill="#047857" text-anchor="middle">AMERICAS</text>
          <text x="402" y="264" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('Plantations: Sugar · Cotton · Coffee','Plantasyon: Şeker · Pamuk · Kahve')}</text>
          <text x="402" y="276" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">Brazil · Caribbean · Virginia</text>
        </g>
        <!-- LEG 1: Europe → Africa -->
        <path d="M 210,98 Q 100,155 100,230" stroke="#f59e0b" stroke-width="2.5" fill="none" marker-end="url(#arr-sl2)"/>
        <text x="112" y="165" font-family="Inter" font-size="8" font-weight="700" fill="#d97706" transform="rotate(-70,112,165)" text-anchor="middle">${T('Manufactured Goods','İmalat Ürünleri')}</text>
        <!-- LEG 2: Africa → Americas (Middle Passage) -->
        <path d="M 170,262 L 330,262" stroke="#ef4444" stroke-width="3" fill="none" marker-end="url(#arr-sl1)"/>
        <text x="250" y="252" font-family="Outfit" font-size="9.5" font-weight="800" fill="#b91c1c" text-anchor="middle">${T('MIDDLE PASSAGE','ORTA GEÇİT')}</text>
        <text x="250" y="278" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('~2M died en route · 6–8 week voyage','~2M kişi yolda hayatını kaybetti · 6-8 hafta yolculuk')}</text>
        <!-- LEG 3: Americas → Europe -->
        <path d="M 400,230 Q 400,155 300,98" stroke="#10b981" stroke-width="2.5" fill="none" marker-end="url(#arr-sl3)"/>
        <text x="395" y="162" font-family="Inter" font-size="8" font-weight="700" fill="#047857" transform="rotate(70,395,162)" text-anchor="middle">${T('Raw Materials + Profit','Hammadde + Kâr')}</text>
        <!-- Stats -->
        <text x="250" y="315" font-family="Outfit" font-size="9.5" font-weight="800" fill="var(--text-secondary)" text-anchor="middle">
          ${T('12.5M deported · 2M dead at sea · £3B+ wealth generated for Europe','12.5M sürgün · 2M denizde hayatını kaybetti · 3 milyar+ İngiliz sterlini')}
        </text>
      </svg>`;

    // ── Diagram 3: Slave population growth chart ──
    const svg3 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <text x="250" y="26" font-family="Outfit" font-size="13" font-weight="800" fill="#b91c1c" text-anchor="middle" letter-spacing="0.04em">
          ${T('ENSLAVED POPULATION IN BRITISH COLONIES (1650–1790)','İNGİLİZ KOLONİLERİNDE KÖLE NÜFUSU (1650–1790)')}
        </text>
        <!-- axes -->
        <line x1="70" y1="55" x2="70" y2="270" stroke="var(--border-color)" stroke-width="1.2"/>
        <line x1="70" y1="270" x2="470" y2="270" stroke="var(--border-color)" stroke-width="1.2"/>
        <!-- y labels -->
        <text x="62" y="59" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="end">500k</text>
        <text x="62" y="109" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="end">400k</text>
        <text x="62" y="159" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="end">300k</text>
        <text x="62" y="209" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="end">200k</text>
        <text x="62" y="259" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="end">100k</text>
        <!-- grid -->
        <line x1="70" y1="59" x2="470" y2="59" stroke="var(--border-color)" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.4"/>
        <line x1="70" y1="109" x2="470" y2="109" stroke="var(--border-color)" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.4"/>
        <line x1="70" y1="159" x2="470" y2="159" stroke="var(--border-color)" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.4"/>
        <line x1="70" y1="209" x2="470" y2="209" stroke="var(--border-color)" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.4"/>
        <line x1="70" y1="259" x2="470" y2="259" stroke="var(--border-color)" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.4"/>
        <!-- x labels (years) -->
        <text x="115" y="284" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1650</text>
        <text x="190" y="284" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1680</text>
        <text x="265" y="284" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1710</text>
        <text x="340" y="284" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1750</text>
        <text x="440" y="284" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1790</text>
        <!-- Data polyline: approx values  1650→800, 1680→7k, 1710→50k, 1750→240k, 1790→500k -->
        <!-- scaled: 500k=59, 0=270 → scale=(270-59)/500000 * val, y=270-scaled -->
        <!-- 1650: 800 → y=270-0.3=269.7 x=115 -->
        <!-- 1680: 7000 → y=270-3=267 x=190 -->
        <!-- 1710: 50000 → y=270-21.1=249 x=265 -->
        <!-- 1750: 240000 → y=270-101=169 x=340 -->
        <!-- 1790: 500000 → y=59 x=440 -->
        <polyline points="115,270 190,267 265,249 340,169 440,59"
          fill="none" stroke="#ef4444" stroke-width="3" stroke-linejoin="round"/>
        <!-- area fill -->
        <polygon points="115,270 190,267 265,249 340,169 440,59 440,270 115,270"
          fill="#ef4444" fill-opacity="0.08"/>
        <!-- data points -->
        <circle cx="115" cy="270" r="4" fill="#ef4444" style="cursor:pointer" onclick="showDiagramDetailPopup('w3_1650')"/>
        <circle cx="190" cy="267" r="4" fill="#ef4444" style="cursor:pointer" onclick="showDiagramDetailPopup('w3_1680')"/>
        <circle cx="265" cy="249" r="5" fill="#ef4444" style="cursor:pointer" onclick="showDiagramDetailPopup('w3_1710')"/>
        <circle cx="340" cy="169" r="5" fill="#ef4444" style="cursor:pointer" onclick="showDiagramDetailPopup('w3_1750')"/>
        <circle cx="440" cy="59" r="6" fill="#b91c1c" style="cursor:pointer" onclick="showDiagramDetailPopup('w3_1790')"/>
        <!-- Bacon's Rebellion vertical marker -->
        <line x1="148" y1="55" x2="148" y2="270" stroke="#d97706" stroke-width="1.5" stroke-dasharray="4,3"/>
        <text x="152" y="72" font-family="Outfit" font-size="7.5" font-weight="700" fill="#d97706">${T('Bacon\'s','Bacon')}</text>
        <text x="152" y="82" font-family="Outfit" font-size="7.5" font-weight="700" fill="#d97706">${T('Rebellion 1676','İsyanı 1676')}</text>
        <!-- value labels -->
        <text x="125" y="262" font-family="Inter" font-size="7" fill="#ef4444">800</text>
        <text x="200" y="258" font-family="Inter" font-size="7" fill="#ef4444">7k</text>
        <text x="270" y="240" font-family="Inter" font-size="7" fill="#ef4444">50k</text>
        <text x="345" y="160" font-family="Inter" font-size="7" fill="#ef4444">240k</text>
        <text x="443" y="50" font-family="Inter" font-size="8" font-weight="700" fill="#b91c1c">500k</text>
      </svg>`;

        const svg4 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <defs>
          <linearGradient id="pop-g" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#059669" stop-opacity="0.3"/>
          </linearGradient>
        </defs>
        <text x="250" y="26" font-family="Outfit" font-size="12" font-weight="800" fill="#10b981" text-anchor="middle" letter-spacing="0.04em">
          ${T('EUROPEAN POPULATION BOOM (1700-1900)','AVRUPA NÜFUS PATLAMASI (1700-1900)')}
        </text>
        <text x="250" y="42" font-family="Inter" font-size="8" font-weight="500" fill="var(--text-secondary)" text-anchor="middle">
          ${T('Driven by New World staple crops (Potato & Maize)','Yeni Dünya mahsullerinin (Patates ve Mısır) etkisiyle')}
        </text>
        <line x1="60" y1="80" x2="60" y2="280" stroke="var(--border-color)" stroke-width="1.5"/>
        <line x1="60" y1="280" x2="450" y2="280" stroke="var(--border-color)" stroke-width="1.5"/>
        
        <text x="50" y="284" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">0</text>
        <text x="50" y="234" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">100M</text>
        <text x="50" y="184" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">200M</text>
        <text x="50" y="134" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">300M</text>
        <text x="50" y="84" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">400M</text>
        
        <text x="120" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1700</text>
        <text x="220" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1800</text>
        <text x="320" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1850</text>
        <text x="420" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1900</text>
        
        <path d="M 60,280 L 120,240 L 220,195 L 320,140 L 420,80 L 420,280 Z" fill="url(#pop-g)" stroke="#10b981" stroke-width="2"/>
        
        <text x="120" y="232" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">125M</text>
        <text x="220" y="187" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">180M</text>
        <text x="320" y="132" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">266M</text>
        <text x="420" y="72" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">400M</text>
        
        <g transform="translate(140, 110)" style="cursor:pointer" onclick="showDiagramDetailPopup('w2_pop_detail')">
          <rect x="0" y="0" width="160" height="42" rx="4" fill="var(--bg-surface)" stroke="#10b981" stroke-width="1"/>
          <text x="80" y="15" font-family="Outfit" font-size="7.5" font-weight="700" fill="#047857" text-anchor="middle">${T('THE POTATO EFFECT','PATATES ETKİSİ')}</text>
          <text x="80" y="26" font-family="Inter" font-size="6.5" fill="var(--text-secondary)" text-anchor="middle">${T('Provided cheap, dense calories','Ucuz ve yoğun kalori sağladı,')}</text>
          <text x="80" y="34" font-family="Inter" font-size="6.5" fill="var(--text-secondary)" text-anchor="middle">${T('fueling the Industrial Revolution','Endüstri Devrimi\'ni besledi')}</text>
        </g>
      </svg>`;
    const svgs = [svg1, svg2, svg3, svg4];

    // 3D cards (6)
    const cards = [
      commodityCard('commodity_cotton', T('Cotton','Pamuk'), `
        <defs><radialGradient id="cot1" cx="50%" cy="30%" r="70%"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#e5e7eb"/></radialGradient></defs>
        <path d="M 50,85 L 50,65" stroke="#78350f" stroke-width="3" stroke-linecap="round"/>
        <path d="M 32,65 C 38,75 58,75 64,65 C 57,63 41,63 32,65 Z" fill="#78350f"/>
        <path d="M 28,60 L 40,70 L 33,50 Z" fill="#92400e"/>
        <path d="M 68,60 L 56,70 L 63,50 Z" fill="#92400e"/>
        <circle cx="38" cy="44" r="13" fill="url(#cot1)"/>
        <circle cx="58" cy="44" r="13" fill="url(#cot1)"/>
        <circle cx="48" cy="34" r="15" fill="url(#cot1)"/>`, '#d97706'),
      commodityCard('commodity_cotton_gin', T('Cotton Gin','Çırçır Makinesi'), `
        <defs>
          <linearGradient id="wd1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#b45309"/><stop offset="100%" stop-color="#78350f"/></linearGradient>
          <linearGradient id="wd2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#78350f"/><stop offset="100%" stop-color="#451a03"/></linearGradient>
        </defs>
        <polygon points="50,22 75,34 50,47 25,34" fill="url(#wd1)"/>
        <polygon points="25,34 50,47 50,75 25,62" fill="url(#wd2)"/>
        <polygon points="50,47 75,34 75,62 50,75" fill="#92400e"/>
        <path d="M 75,48 L 84,53 L 84,66 L 75,61 Z" fill="#9ca3af"/>
        <ellipse cx="50" cy="34" rx="10" ry="5" fill="#1f2937" opacity="0.8"/>`, '#b45309'),
      commodityCard('commodity_shackles', T('Iron Shackles','Demir Bukağı'), `
        <circle cx="36" cy="50" r="14" fill="none" stroke="#6b7280" stroke-width="6"/>
        <circle cx="64" cy="50" r="14" fill="none" stroke="#6b7280" stroke-width="6"/>
        <line x1="50" y1="50" x2="50" y2="50" stroke="#6b7280" stroke-width="4"/>
        <path d="M 42,50 L 58,50" stroke="#4b5563" stroke-width="4" stroke-linecap="round"/>
        <circle cx="36" cy="50" r="4" fill="#374151"/>
        <circle cx="64" cy="50" r="4" fill="#374151"/>`, '#6b7280'),
      commodityCard('commodity_weapons', T('Weapons','Silahlar'), `
        <defs><linearGradient id="ibl" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4b5563"/><stop offset="100%" stop-color="#1f2937"/></linearGradient></defs>
        <rect x="25" y="44" width="50" height="6" rx="1" fill="url(#ibl)" transform="rotate(-15,50,47)"/>
        <rect x="20" y="47" width="16" height="10" rx="2" fill="#78350f" transform="rotate(-15,50,47)"/>
        <circle cx="70" cy="40" r="1.5" fill="#f59e0b"/>`, '#4b5563'),
      commodityCard('commodity_slave_ship', T('Slave Ship','Köle Gemisi'), `
        <defs><linearGradient id="wtr" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#1d4ed8" stop-opacity="0.6"/><stop offset="100%" stop-color="#1e3a8a" stop-opacity="0.9"/></linearGradient></defs>
        <ellipse cx="50" cy="68" rx="35" ry="10" fill="url(#wtr)"/>
        <path d="M 20,68 C 20,58 80,58 80,68 L 75,78 C 75,83 25,83 25,78 Z" fill="#78350f"/>
        <line x1="50" y1="30" x2="50" y2="64" stroke="#92400e" stroke-width="3"/>
        <path d="M 50,30 C 30,40 50,55 50,55 Z" fill="#f3f4f6" opacity="0.9"/>
        <path d="M 50,30 C 70,40 50,55 50,55 Z" fill="#e5e7eb" opacity="0.7"/>`, '#1d4ed8'),
      commodityCard('commodity_tobacco_barrel', T('Tobacco Barrel','Tütün Fıçısı'), `
        <defs><linearGradient id="br1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#92400e"/><stop offset="100%" stop-color="#451a03"/></linearGradient></defs>
        <ellipse cx="50" cy="32" rx="22" ry="10" fill="#b45309"/>
        <rect x="28" y="32" width="44" height="44" fill="url(#br1)"/>
        <ellipse cx="50" cy="76" rx="22" ry="10" fill="#78350f"/>
        <line x1="28" y1="46" x2="72" y2="46" stroke="#92400e" stroke-width="1.5" opacity="0.6"/>
        <line x1="28" y1="60" x2="72" y2="60" stroke="#92400e" stroke-width="1.5" opacity="0.6"/>
        <line x1="36" y1="30" x2="36" y2="78" stroke="#fef08a" stroke-width="1" opacity="0.2"/>
        <line x1="64" y1="30" x2="64" y2="78" stroke="#fef08a" stroke-width="1" opacity="0.2"/>`, '#92400e'),
    ];

    activeTabs = tabs;
    activeSvgs = svgs;
    activeCards = cards;
    activeTabIdx = tab;

  // ══════════════════════════════════════════════════════════════
  //  WEEK 4  –  American Revolution
  // ══════════════════════════════════════════════════════════════
  } else if (state.week === 4) {
    const tabs = [
      { en: '🏛 Congress Structure',   tr: '🏛 Kongre Yapısı' },
      { en: '⚖ Separation of Powers', tr: '⚖ Güçler Ayrılığı' },
      { en: '📅 Road to Revolution',   tr: '📅 Devrime Giden Yol' }
    ];
    const tab = diagramTabState[4];

    // ── Diagram 1: Greek Temple (original) ──
    const svg1 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <defs>
          <linearGradient id="tp-rf" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1d4ed8"/><stop offset="100%" stop-color="#3b82f6"/></linearGradient>
          <linearGradient id="col-g" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#f8fafc"/><stop offset="50%" stop-color="#f1f5f9"/><stop offset="100%" stop-color="#e2e8f0"/></linearGradient>
        </defs>
        <text x="250" y="26" font-family="Outfit" font-size="13" font-weight="800" fill="#1d4ed8" text-anchor="middle" letter-spacing="0.04em">
          ${T('TEMPLE OF U.S. LEGISLATURE (1787)','KONGRE YAPISI (1787)')}
        </text>
        <!-- Pediment -->
        <polygon points="250,55 95,98 405,98" fill="url(#tp-rf)" stroke="#1e40af" stroke-width="1" style="cursor:pointer" onclick="showDiagramDetailPopup('w4_congress')"/>
        <polygon points="250,55 405,98 415,93 260,50" fill="#1e3a8a" style="cursor:pointer" onclick="showDiagramDetailPopup('w4_congress')"/>
        <text x="250" y="85" font-family="Outfit" font-size="11" font-weight="800" fill="#fff" text-anchor="middle">${T('CONGRESS', 'KONGRE')}</text>
        <!-- Architrave -->
        <rect x="84" y="100" width="326" height="14" fill="#d1d5db" stroke="#9ca3af" stroke-width="0.5"/>
        <polygon points="410,100 410,114 420,109 420,96" fill="#9ca3af"/>
        <!-- Column: House -->
        <g transform="translate(108,114)" style="cursor:pointer" onclick="showDiagramDetailPopup('w4_reps')">
          <rect x="0" y="0" width="88" height="128" fill="url(#col-g)" stroke="#bdc3c7" stroke-width="0.5"/>
          <polygon points="88,0 88,128 96,124 96,4" fill="#9ca3af"/>
          <text x="44" y="44" font-family="Outfit" font-size="8.5" font-weight="700" fill="var(--text-primary)" text-anchor="middle">HOUSE OF REPS.</text>
          <text x="44" y="57" font-family="Inter" font-size="7.5" font-weight="600" fill="var(--text-secondary)" text-anchor="middle">Temsilciler Meclisi</text>
          <line x1="10" y1="68" x2="78" y2="68" stroke="#bdc3c7" stroke-width="0.5"/>
          <text x="44" y="85" font-family="Inter" font-size="7.5" font-weight="700" fill="#1d4ed8" text-anchor="middle">By Population</text>
          <text x="44" y="97" font-family="Inter" font-size="7" fill="var(--text-secondary)" text-anchor="middle">Nüfusa Dayalı</text>
          <text x="44" y="110" font-family="Inter" font-size="7" fill="var(--text-secondary)" text-anchor="middle">${T('435 Members', '435 Üye')}</text>
        </g>
        <!-- Column: Senate -->
        <g transform="translate(302,114)" style="cursor:pointer" onclick="showDiagramDetailPopup('w4_senate')">
          <rect x="0" y="0" width="88" height="128" fill="url(#col-g)" stroke="#bdc3c7" stroke-width="0.5"/>
          <polygon points="88,0 88,128 96,124 96,4" fill="#9ca3af"/>
          <text x="44" y="44" font-family="Outfit" font-size="8.5" font-weight="700" fill="var(--text-primary)" text-anchor="middle">${T('SENATE', 'SENATO')}</text>
          <text x="44" y="57" font-family="Inter" font-size="7.5" font-weight="600" fill="var(--text-secondary)" text-anchor="middle">Üst Meclis</text>
          <line x1="10" y1="68" x2="78" y2="68" stroke="#bdc3c7" stroke-width="0.5"/>
          <text x="44" y="85" font-family="Inter" font-size="7.5" font-weight="700" fill="#1d4ed8" text-anchor="middle">Equal (2 per State)</text>
          <text x="44" y="97" font-family="Inter" font-size="7" fill="var(--text-secondary)" text-anchor="middle">Eyalet Başına Eşit</text>
          <text x="44" y="110" font-family="Inter" font-size="7" fill="var(--text-secondary)" text-anchor="middle">${T('100 Members', '100 Üye')}</text>
        </g>
        <!-- Base -->
        <rect x="78" y="246" width="342" height="22" fill="#bdc3c7" stroke="#7f8c8d" stroke-width="0.5" style="cursor:pointer" onclick="showDiagramDetailPopup('w4_compromise')"/>
        <polygon points="420,246 420,268 435,260 435,238" fill="#7f8c8d"/>
        <polygon points="78,246 420,246 435,238 93,238" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="0.5"/>
        <text x="250" y="260" font-family="Outfit" font-size="9.5" font-weight="800" fill="var(--text-primary)" text-anchor="middle">
          ${T('CONNECTICUT COMPROMISE / THE GREAT COMPROMISE (1787)','CONNECTICUT UZLAŞMASI — ANAYASAL DENGE (1787)')}
        </text>
      </svg>`;

    // ── Diagram 2: Separation of Powers radial wheel ──
    const svg2 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <defs>
          <filter id="sh4"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#000" flood-opacity="0.07"/></filter>
        </defs>
        <text x="250" y="26" font-family="Outfit" font-size="13" font-weight="800" fill="#1d4ed8" text-anchor="middle" letter-spacing="0.04em">
          ${T('SEPARATION OF POWERS (MONTESQUIEU)','GÜÇLERİN AYRILMASI (MONTESQUİEU)')}
        </text>
        <!-- Center circle -->
        <circle cx="250" cy="178" r="38" fill="var(--bg-surface)" stroke="#1d4ed8" stroke-width="2" filter="url(#sh4)"/>
        <text x="250" y="173" font-family="Outfit" font-size="9" font-weight="800" fill="#1d4ed8" text-anchor="middle">CHECKS &amp;</text>
        <text x="250" y="185" font-family="Outfit" font-size="9" font-weight="800" fill="#1d4ed8" text-anchor="middle">BALANCES</text>
        <!-- LEGISLATIVE: top left -->
        <g style="cursor:pointer" onclick="showDiagramDetailPopup('w4_legislative')">
          <path d="M 250,178 L 100,80" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.6"/>
          <rect x="25" y="42" width="150" height="62" rx="10" fill="var(--bg-surface)" stroke="#1d4ed8" stroke-width="2" filter="url(#sh4)"/>
          <text x="100" y="64" font-family="Outfit" font-size="10" font-weight="800" fill="#1d4ed8" text-anchor="middle">LEGISLATIVE</text>
          <text x="100" y="77" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('Congress: Senate + House','Kongre: Senato + Meclis')}</text>
          <text x="100" y="89" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('Makes Laws / Yasa Yapar','Yasa Yapar')}</text>
          <text x="100" y="101" font-family="Inter" font-size="7" fill="#1d4ed8" text-anchor="middle">${T('Can override Presidential veto','Cumhurbaşkanı vetosunu ezer')}</text>
        </g>
        <!-- EXECUTIVE: top right -->
        <g style="cursor:pointer" onclick="showDiagramDetailPopup('w4_executive')">
          <path d="M 250,178 L 400,80" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.6"/>
          <rect x="325" y="42" width="150" height="62" rx="10" fill="var(--bg-surface)" stroke="#dc2626" stroke-width="2" filter="url(#sh4)"/>
          <text x="400" y="64" font-family="Outfit" font-size="10" font-weight="800" fill="#dc2626" text-anchor="middle">EXECUTIVE</text>
          <text x="400" y="77" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('President + Cabinet','Başkan + Kabine')}</text>
          <text x="400" y="89" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('Enforces Laws / Yasa Uygular','Yasa Uygular')}</text>
          <text x="400" y="101" font-family="Inter" font-size="7" fill="#dc2626" text-anchor="middle">${T('Can veto legislation','Yasaları veto edebilir')}</text>
        </g>
        <!-- JUDICIAL: bottom center -->
        <g style="cursor:pointer" onclick="showDiagramDetailPopup('w4_judicial')">
          <path d="M 250,178 L 250,285" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.6"/>
          <rect x="175" y="285" width="150" height="44" rx="10" fill="var(--bg-surface)" stroke="#059669" stroke-width="2" filter="url(#sh4)"/>
          <text x="250" y="304" font-family="Outfit" font-size="10" font-weight="800" fill="#059669" text-anchor="middle">JUDICIAL</text>
          <text x="250" y="317" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('Supreme Court — Interprets Laws / Yüksek Mahkeme','Yüksek Mahkeme — Yasaları Yorumlar')}</text>
        </g>
        <!-- Check arrows between branches -->
        <path d="M 175,73 C 200,73 215,140 235,145" stroke="#475569" stroke-width="1.2" fill="none" stroke-dasharray="2,2" marker-end="url(#arr-tri2)"/>
        <path d="M 325,73 C 300,73 285,140 265,145" stroke="#475569" stroke-width="1.2" fill="none" stroke-dasharray="2,2"/>
        <path d="M 245,217 C 200,230 160,270 200,300" stroke="#475569" stroke-width="1.2" fill="none" stroke-dasharray="2,2"/>
        <path d="M 255,217 C 300,230 340,270 300,300" stroke="#475569" stroke-width="1.2" fill="none" stroke-dasharray="2,2"/>
        <defs>
          <marker id="arr-tri2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/>
          </marker>
        </defs>
      </svg>`;

    // ── Diagram 3: Road to Revolution timeline ──
    const svg3 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <text x="250" y="24" font-family="Outfit" font-size="13" font-weight="800" fill="#2563eb" text-anchor="middle" letter-spacing="0.04em">
          ${T('ROAD TO REVOLUTION (1763–1783)','DEVRİME GİDEN YOL (1763–1783)')}
        </text>
        <!-- Spine line -->
        <line x1="250" y1="42" x2="250" y2="312" stroke="#2563eb" stroke-width="2.5" opacity="0.25"/>
        <!-- Events left side -->
        <!-- 1763 -->
        <circle cx="250" cy="55" r="6" fill="#2563eb" style="cursor:pointer" onclick="showDiagramDetailPopup('w4_ev1763')"/>
        <line x1="244" y1="55" x2="190" y2="55" stroke="#2563eb" stroke-width="1.2" opacity="0.5"/>
        <text x="186" y="51" font-family="Outfit" font-size="8.5" font-weight="800" fill="#2563eb" text-anchor="end">1763</text>
        <text x="186" y="62" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">${T('End of 7 Years\' War — Debt crisis','7 Yıl Savaşı Biter — Borç krizi')}</text>
        <!-- 1765 -->
        <circle cx="250" cy="95" r="6" fill="#1d4ed8" style="cursor:pointer" onclick="showDiagramDetailPopup('w4_ev1765')"/>
        <line x1="256" y1="95" x2="310" y2="95" stroke="#1d4ed8" stroke-width="1.2" opacity="0.5"/>
        <text x="314" y="91" font-family="Outfit" font-size="8.5" font-weight="800" fill="#1d4ed8">1765</text>
        <text x="314" y="102" font-family="Inter" font-size="7.5" fill="var(--text-secondary)">${T('Stamp Act — "No taxation without','Damga Vergisi — "Temsil yoksa')}</text>
        <text x="314" y="112" font-family="Inter" font-size="7.5" fill="var(--text-secondary)">${T('representation"','vergi de yok"')}</text>
        <!-- 1770 -->
        <circle cx="250" cy="143" r="6" fill="#ef4444" style="cursor:pointer" onclick="showDiagramDetailPopup('w4_ev1770')"/>
        <line x1="244" y1="143" x2="190" y2="143" stroke="#ef4444" stroke-width="1.2" opacity="0.5"/>
        <text x="186" y="139" font-family="Outfit" font-size="8.5" font-weight="800" fill="#ef4444" text-anchor="end">1770</text>
        <text x="186" y="150" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">${T('Boston Massacre — 5 killed','Boston Katliamı — 5 ölü')}</text>
        <!-- 1773 -->
        <circle cx="250" cy="183" r="6" fill="#d97706" style="cursor:pointer" onclick="showDiagramDetailPopup('w4_ev1773')"/>
        <line x1="256" y1="183" x2="310" y2="183" stroke="#d97706" stroke-width="1.2" opacity="0.5"/>
        <text x="314" y="179" font-family="Outfit" font-size="8.5" font-weight="800" fill="#d97706">1773</text>
        <text x="314" y="190" font-family="Inter" font-size="7.5" fill="var(--text-secondary)">${T('Boston Tea Party — 342 chests','Boston Çay Partisi — 342 sandık')}</text>
        <!-- 1775 -->
        <circle cx="250" cy="225" r="7" fill="#dc2626" style="cursor:pointer" onclick="showDiagramDetailPopup('w4_ev1775')"/>
        <line x1="244" y1="225" x2="190" y2="225" stroke="#dc2626" stroke-width="1.2" opacity="0.5"/>
        <text x="186" y="221" font-family="Outfit" font-size="8.5" font-weight="800" fill="#dc2626" text-anchor="end">1775</text>
        <text x="186" y="232" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">${T('Lexington &amp; Concord — First shots','Lexington &amp; Concord — İlk ateş')}</text>
        <!-- 1776 -->
        <circle cx="250" cy="262" r="8" fill="#1d4ed8" style="cursor:pointer" onclick="showDiagramDetailPopup('w4_ev1776')"/>
        <line x1="256" y1="262" x2="310" y2="262" stroke="#1d4ed8" stroke-width="1.2" opacity="0.5"/>
        <text x="314" y="258" font-family="Outfit" font-size="8.5" font-weight="800" fill="#1d4ed8">1776</text>
        <text x="314" y="269" font-family="Inter" font-size="7.5" fill="var(--text-secondary)">${T('Declaration of Independence — July 4','Bağımsızlık Bildirisi — 4 Temmuz')}</text>
        <!-- 1783 -->
        <circle cx="250" cy="300" r="9" fill="#059669" style="cursor:pointer" onclick="showDiagramDetailPopup('w4_ev1783')"/>
        <line x1="244" y1="300" x2="190" y2="300" stroke="#059669" stroke-width="1.2" opacity="0.5"/>
        <text x="186" y="296" font-family="Outfit" font-size="8.5" font-weight="800" fill="#059669" text-anchor="end">1783</text>
        <text x="186" y="307" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">${T('Treaty of Paris — Independence recognized','Paris Antlaşması — Bağımsızlık tanındı')}</text>
      </svg>`;

        const svg4 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <defs>
          <linearGradient id="pop-g" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#059669" stop-opacity="0.3"/>
          </linearGradient>
        </defs>
        <text x="250" y="26" font-family="Outfit" font-size="12" font-weight="800" fill="#10b981" text-anchor="middle" letter-spacing="0.04em">
          ${T('EUROPEAN POPULATION BOOM (1700-1900)','AVRUPA NÜFUS PATLAMASI (1700-1900)')}
        </text>
        <text x="250" y="42" font-family="Inter" font-size="8" font-weight="500" fill="var(--text-secondary)" text-anchor="middle">
          ${T('Driven by New World staple crops (Potato & Maize)','Yeni Dünya mahsullerinin (Patates ve Mısır) etkisiyle')}
        </text>
        <line x1="60" y1="80" x2="60" y2="280" stroke="var(--border-color)" stroke-width="1.5"/>
        <line x1="60" y1="280" x2="450" y2="280" stroke="var(--border-color)" stroke-width="1.5"/>
        
        <text x="50" y="284" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">0</text>
        <text x="50" y="234" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">100M</text>
        <text x="50" y="184" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">200M</text>
        <text x="50" y="134" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">300M</text>
        <text x="50" y="84" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">400M</text>
        
        <text x="120" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1700</text>
        <text x="220" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1800</text>
        <text x="320" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1850</text>
        <text x="420" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1900</text>
        
        <path d="M 60,280 L 120,240 L 220,195 L 320,140 L 420,80 L 420,280 Z" fill="url(#pop-g)" stroke="#10b981" stroke-width="2"/>
        
        <text x="120" y="232" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">125M</text>
        <text x="220" y="187" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">180M</text>
        <text x="320" y="132" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">266M</text>
        <text x="420" y="72" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">400M</text>
        
        <g transform="translate(140, 110)" style="cursor:pointer" onclick="showDiagramDetailPopup('w2_pop_detail')">
          <rect x="0" y="0" width="160" height="42" rx="4" fill="var(--bg-surface)" stroke="#10b981" stroke-width="1"/>
          <text x="80" y="15" font-family="Outfit" font-size="7.5" font-weight="700" fill="#047857" text-anchor="middle">${T('THE POTATO EFFECT','PATATES ETKİSİ')}</text>
          <text x="80" y="26" font-family="Inter" font-size="6.5" fill="var(--text-secondary)" text-anchor="middle">${T('Provided cheap, dense calories','Ucuz ve yoğun kalori sağladı,')}</text>
          <text x="80" y="34" font-family="Inter" font-size="6.5" fill="var(--text-secondary)" text-anchor="middle">${T('fueling the Industrial Revolution','Endüstri Devrimi\'ni besledi')}</text>
        </g>
      </svg>`;
    const svgs = [svg1, svg2, svg3, svg4];

    const cards = [
      commodityCard('commodity_tea_crate', T('Tea Crate','Çay Sandığı'), `
        <defs>
          <linearGradient id="wtt" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#b45309"/><stop offset="100%" stop-color="#92400e"/></linearGradient>
          <linearGradient id="wtl" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#78350f"/><stop offset="100%" stop-color="#451a03"/></linearGradient>
        </defs>
        <polygon points="50,22 75,34 50,47 25,34" fill="url(#wtt)"/>
        <polygon points="25,34 50,47 50,75 25,62" fill="url(#wtl)"/>
        <polygon points="50,47 75,34 75,62 50,75" fill="#78350f"/>
        <text x="50" y="62" font-family="Outfit" font-size="9" font-weight="900" fill="#fff" opacity="0.3" text-anchor="middle" transform="skewY(25)">TEA</text>`, '#b45309'),
      commodityCard('commodity_stamp', T('Stamp Act Seal','Vergi Damgası'), `
        <circle cx="50" cy="50" r="28" fill="#dc2626"/>
        <circle cx="50" cy="50" r="24" fill="none" stroke="#fecaca" stroke-width="1.5" stroke-dasharray="3,3"/>
        <text x="50" y="46" font-family="Outfit" font-size="9" font-weight="900" fill="#fff" text-anchor="middle">NO</text>
        <text x="50" y="58" font-family="Outfit" font-size="7" font-weight="700" fill="#fecaca" text-anchor="middle">TAXATION</text>`, '#dc2626'),
      commodityCard('commodity_musket', T('Flintlock Musket','Misket Tüfeği'), `
        <rect x="20" y="46" width="60" height="4" rx="1" fill="#4b5563" transform="rotate(-25,50,48)"/>
        <rect x="15" y="47" width="18" height="8" rx="2" fill="#92400e" transform="rotate(-25,50,48)"/>
        <circle cx="75" cy="35" r="1.5" fill="#9ca3af"/>`, '#4b5563'),
      commodityCard('commodity_declaration', T('Declaration','Bağımsızlık Bildirisi'), `
        <rect x="28" y="18" width="44" height="62" rx="3" fill="#fef9c3" stroke="#d97706" stroke-width="1.5"/>
        <line x1="34" y1="30" x2="66" y2="30" stroke="#92400e" stroke-width="1.2" opacity="0.5"/>
        <line x1="34" y1="38" x2="66" y2="38" stroke="#92400e" stroke-width="0.8" opacity="0.4"/>
        <line x1="34" y1="46" x2="66" y2="46" stroke="#92400e" stroke-width="0.8" opacity="0.4"/>
        <line x1="34" y1="54" x2="66" y2="54" stroke="#92400e" stroke-width="0.8" opacity="0.4"/>
        <line x1="34" y1="62" x2="58" y2="62" stroke="#92400e" stroke-width="0.8" opacity="0.4"/>
        <path d="M 40,72 Q 42,78 46,74 Q 48,80 52,76" stroke="#1d4ed8" stroke-width="1.5" fill="none"/>`, '#d97706'),
      commodityCard('commodity_cannon', T('Cannon','Top'), `
        <defs><linearGradient id="can1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#374151"/><stop offset="100%" stop-color="#111827"/></linearGradient></defs>
        <ellipse cx="52" cy="52" rx="24" ry="10" fill="url(#can1)" transform="rotate(-20,52,52)"/>
        <circle cx="32" cy="65" r="5" fill="#1f2937"/>
        <circle cx="68" cy="43" r="3" fill="#374151"/>
        <rect x="22" y="68" width="56" height="8" rx="2" fill="#78350f"/>
        <circle cx="25" cy="72" r="6" fill="#4b5563"/>
        <circle cx="75" cy="72" r="6" fill="#4b5563"/>`, '#374151'),
      commodityCard('commodity_flag', T('Colonial Flag','Koloni Bayrağı'), `
        <rect x="28" y="20" width="58" height="38" fill="#dc2626"/>
        <rect x="28" y="20" width="58" height="12" fill="#f9fafb"/>
        <rect x="28" y="32" width="58" height="14" fill="#dc2626"/>
        <rect x="28" y="46" width="58" height="12" fill="#f9fafb"/>
        <rect x="28" y="20" width="24" height="24" fill="#1d4ed8"/>
        <text x="40" y="36" font-family="Outfit" font-size="14" font-weight="900" fill="#fff" text-anchor="middle">☆</text>
        <line x1="28" y1="20" x2="28" y2="80" stroke="#78350f" stroke-width="3"/>`, '#dc2626'),
    ];

    activeTabs = tabs;
    activeSvgs = svgs;
    activeCards = cards;
    activeTabIdx = tab;

  // ══════════════════════════════════════════════════════════════
  //  WEEK 5  –  French Revolution
  // ══════════════════════════════════════════════════════════════
  } else if (state.week === 5) {
    const tabs = [
      { en: '🔺 Estates Pyramid',    tr: '🔺 3 Zümre Piramidi' },
      { en: '📅 Revolution Timeline', tr: '📅 Devrim Takvimi' },
      { en: '🗳 Voting Power',        tr: '🗳 Oy Gücü' }
    ];
    const tab = diagramTabState[5];

    // ── Diagram 1: Estates pyramid (original) ──
    const svg1 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <text x="250" y="24" font-family="Outfit" font-size="13" font-weight="800" fill="#dc2626" text-anchor="middle" letter-spacing="0.04em">
          ${T('3D ESTATES PYRAMID (1789)','ÜÇ ZÜMRE 3D PİRAMİDİ (1789)')}
        </text>
        <!-- CLERGY top block -->
        <polygon points="250,55 198,107 250,126" fill="#f9fafb" stroke="#e5e7eb" stroke-width="0.5" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_clergy')"/>
        <polygon points="250,55 250,126 302,107" fill="#e5e7eb" stroke="#d1d5db" stroke-width="0.5" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_clergy')"/>
        <path d="M 278,82 L 358,72" stroke="var(--text-muted)" stroke-width="0.75" stroke-dasharray="2,2"/>
        <text x="368" y="68" font-family="Outfit" font-size="9" font-weight="700" fill="var(--text-primary)" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_clergy')">${T('I. CLERGY', 'I. RUHBANLAR')}</text>
        <text x="368" y="79" font-family="Inter" font-size="7.5" fill="var(--text-secondary)">0.5% Pop · Tax-Exempt · Land Owners</text>
        <!-- NOBILITY middle -->
        <polygon points="198,111 148,171 250,208 250,130" fill="#f3f4f6" stroke="#d1d5db" stroke-width="0.5" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_nobility')"/>
        <polygon points="250,130 250,208 352,171 302,111" fill="#d1d5db" stroke="#9ca3af" stroke-width="0.5" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_nobility')"/>
        <path d="M 188,142 L 38,142" stroke="var(--text-muted)" stroke-width="0.75" stroke-dasharray="2,2"/>
        <text x="30" y="138" font-family="Outfit" font-size="9" font-weight="700" fill="var(--text-primary)" text-anchor="end">${T('II. NOBILITY', 'II. SOYLULAR')}</text>
        <text x="30" y="149" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">1.5% Pop · Feudal Privileges · Tax-Exempt</text>
        <!-- THIRD ESTATE bottom -->
        <polygon points="148,175 88,268 250,320 250,212" fill="rgba(220,38,38,0.06)" stroke="#dc2626" stroke-width="0.75" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_third')"/>
        <polygon points="250,212 250,320 412,268 352,175" fill="rgba(220,38,38,0.14)" stroke="#b91c1c" stroke-width="0.75" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_third')"/>
        <path d="M 312,248 L 368,258" stroke="var(--text-muted)" stroke-width="0.75" stroke-dasharray="2,2"/>
        <text x="378" y="255" font-family="Outfit" font-size="9" font-weight="700" fill="#dc2626">${T('III. THIRD ESTATE', 'III. HALK')}</text>
        <text x="378" y="267" font-family="Inter" font-size="7.5" font-weight="700" fill="var(--text-primary)">98% Pop — Paid 100% of Taxes</text>
        <text x="378" y="278" font-family="Inter" font-size="7.5" fill="var(--text-secondary)">Peasants · Bourgeoisie · Artisans</text>
      </svg>`;

    // ── Diagram 2: French Revolution Timeline 1789-1793 ──
    const svg2 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <text x="250" y="24" font-family="Outfit" font-size="13" font-weight="800" fill="#7c3aed" text-anchor="middle" letter-spacing="0.04em">
          ${T('FRENCH REVOLUTION TIMELINE (1789–1794)','FRANSIZ DEVRİMİ TAKVİMİ (1789–1794)')}
        </text>
        <!-- Spine -->
        <line x1="250" y1="40" x2="250" y2="316" stroke="#7c3aed" stroke-width="2.5" opacity="0.22"/>
        <!-- May 1789 -->
        <circle cx="250" cy="52" r="6" fill="#7c3aed" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_ev1789a')"/>
        <line x1="256" y1="52" x2="310" y2="52" stroke="#7c3aed" stroke-width="1.2" opacity="0.5"/>
        <text x="314" y="48" font-family="Outfit" font-size="8" font-weight="800" fill="#7c3aed">Mai 1789</text>
        <text x="314" y="59" font-family="Inter" font-size="7.5" fill="var(--text-secondary)">${T('Estates General convenes — Voting deadlock','Estates General toplandı — Oy krizi')}</text>
        <!-- Jun 1789 -->
        <circle cx="250" cy="92" r="6" fill="#6d28d9" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_ev1789b')"/>
        <line x1="244" y1="92" x2="190" y2="92" stroke="#6d28d9" stroke-width="1.2" opacity="0.5"/>
        <text x="186" y="88" font-family="Outfit" font-size="8" font-weight="800" fill="#6d28d9" text-anchor="end">Haz 1789</text>
        <text x="186" y="99" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">${T('Tennis Court Oath — National Assembly','Tenis Kortu Yemini — Ulusal Meclis')}</text>
        <!-- Jul 1789 -->
        <circle cx="250" cy="132" r="7" fill="#dc2626" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_ev1789c')"/>
        <line x1="256" y1="132" x2="310" y2="132" stroke="#dc2626" stroke-width="1.2" opacity="0.5"/>
        <text x="314" y="128" font-family="Outfit" font-size="8" font-weight="800" fill="#dc2626">14 Tem 1789</text>
        <text x="314" y="139" font-family="Inter" font-size="7.5" fill="var(--text-secondary)">${T('Storming of the Bastille','Bastille Baskını — Devrim Başlıyor')}</text>
        <!-- Aug 1789 -->
        <circle cx="250" cy="172" r="6" fill="#1d4ed8" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_ev1789d')"/>
        <line x1="244" y1="172" x2="190" y2="172" stroke="#1d4ed8" stroke-width="1.2" opacity="0.5"/>
        <text x="186" y="168" font-family="Outfit" font-size="8" font-weight="800" fill="#1d4ed8" text-anchor="end">Ağu 1789</text>
        <text x="186" y="179" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">${T('Declaration of Rights of Man','İnsan Hakları Bildirisi')}</text>
        <!-- Jun 1791 -->
        <circle cx="250" cy="212" r="6" fill="#d97706" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_ev1791')"/>
        <line x1="256" y1="212" x2="310" y2="212" stroke="#d97706" stroke-width="1.2" opacity="0.5"/>
        <text x="314" y="208" font-family="Outfit" font-size="8" font-weight="800" fill="#d97706">Haz 1791</text>
        <text x="314" y="219" font-family="Inter" font-size="7.5" fill="var(--text-secondary)">${T('Flight to Varennes — King\'s betrayal','Varennes Kaçışı — Kral\'ın İhaneti')}</text>
        <!-- Sep 1792 -->
        <circle cx="250" cy="252" r="6" fill="#059669" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_ev1792')"/>
        <line x1="244" y1="252" x2="190" y2="252" stroke="#059669" stroke-width="1.2" opacity="0.5"/>
        <text x="186" y="248" font-family="Outfit" font-size="8" font-weight="800" fill="#059669" text-anchor="end">Eyl 1792</text>
        <text x="186" y="259" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">${T('Battle of Valmy — Republic declared','Valmy Savaşı — Cumhuriyet ilan edildi')}</text>
        <!-- Jan 1793 -->
        <circle cx="250" cy="294" r="8" fill="#b91c1c" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_ev1793')"/>
        <line x1="256" y1="294" x2="310" y2="294" stroke="#b91c1c" stroke-width="1.2" opacity="0.5"/>
        <text x="314" y="290" font-family="Outfit" font-size="8" font-weight="800" fill="#b91c1c">Oca 1793</text>
        <text x="314" y="301" font-family="Inter" font-size="7.5" fill="var(--text-secondary)">${T('Execution of Louis XVI — Reign of Terror begins','XVI. Louis idam edildi — Terör başladı')}</text>
      </svg>`;

    // ── Diagram 3: Voting Power donut-like chart ──
    const svg3 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <defs>
          <filter id="sh5"><feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000" flood-opacity="0.07"/></filter>
        </defs>
        <text x="250" y="24" font-family="Outfit" font-size="13" font-weight="800" fill="#dc2626" text-anchor="middle" letter-spacing="0.04em">
          ${T('VOTING POWER vs POPULATION (1789)','OY GÜCÜ vs NÜFUS — ESTATES GENERAL (1789)')}
        </text>
        <!-- Population pie left -->
        <text x="130" y="58" font-family="Outfit" font-size="10" font-weight="800" fill="var(--text-secondary)" text-anchor="middle">${T('POPULATION','NÜFUS')}</text>
        <!-- 98% arc for Third Estate -->
        <path d="M 130,90 L 130,180 A 90,90 0 1 1 129.9,180 Z" fill="rgba(220,38,38,0.15)" stroke="#dc2626" stroke-width="1.5" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_pop_third')"/>
        <!-- 1.5% arc Nobility -->
        <path d="M 130,90 L 185,96 A 90,90 0 0 0 185.5,95 L 130,90 Z" fill="#d1d5db" stroke="#9ca3af" stroke-width="1" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_pop_nobility')"/>
        <!-- 0.5% arc Clergy -->
        <path d="M 130,90 L 184,88 A 90,90 0 0 0 183,84 L 130,90 Z" fill="#f3f4f6" stroke="#e5e7eb" stroke-width="1" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_pop_clergy')"/>
        <text x="130" y="95" font-family="Outfit" font-size="22" font-weight="900" fill="#dc2626" text-anchor="middle">98%</text>
        <text x="130" y="115" font-family="Inter" font-size="9" fill="var(--text-secondary)" text-anchor="middle">${T('Third Estate','3. Zümre')}</text>
        <!-- Voting power pie right -->
        <text x="370" y="58" font-family="Outfit" font-size="10" font-weight="800" fill="var(--text-secondary)" text-anchor="middle">${T('VOTING POWER','OY GÜCÜ')}
        </text>
        <!-- 1/3 Third Estate arc -->
        <path d="M 370,90 L 370,180 A 90,90 0 0 1 282,136 Z" fill="rgba(220,38,38,0.15)" stroke="#dc2626" stroke-width="1.5" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_vote_third')"/>
        <!-- 1/3 Clergy arc -->
        <path d="M 370,90 L 458,136 A 90,90 0 0 1 414,204 Z" fill="#f9fafb" stroke="#e5e7eb" stroke-width="1.5" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_vote_clergy')"/>
        <!-- 1/3 Nobility arc -->
        <path d="M 370,90 L 414,204 A 90,90 0 0 1 282,136 Z" fill="#d1d5db" stroke="#9ca3af" stroke-width="1.5" style="cursor:pointer" onclick="showDiagramDetailPopup('w5_vote_nobility')"/>
        <text x="370" y="95" font-family="Outfit" font-size="22" font-weight="900" fill="#dc2626" text-anchor="middle">1/3</text>
        <text x="370" y="115" font-family="Inter" font-size="9" fill="var(--text-secondary)" text-anchor="middle">${T('vs 2/3 for 2% of pop.','2% nüfusa 2/3 oy gücü')}</text>
        <!-- Labels -->
        <text x="310" y="200" font-family="Inter" font-size="7.5" fill="#9ca3af" text-anchor="middle">${T('Clergy 0.5%','Ruhb. %0.5')}</text>
        <text x="432" y="205" font-family="Inter" font-size="7.5" fill="#6b7280" text-anchor="middle">${T('Nobility 1.5%','Soy. %1.5')}</text>
        <!-- VS label -->
        <text x="250" y="155" font-family="Outfit" font-size="18" font-weight="900" fill="var(--text-secondary)" text-anchor="middle" opacity="0.35">VS</text>
        <!-- Explanation -->
        <text x="250" y="245" font-family="Outfit" font-size="10" font-weight="800" fill="#dc2626" text-anchor="middle">
          ${T('⚠ 98% of people held only 33% of votes — systemic injustice','⚠ Nüfusun %98\'i oy gücünün sadece %33\'üne sahipti — yapısal adaletsizlik')}
        </text>
        <text x="250" y="262" font-family="Inter" font-size="8.5" fill="var(--text-secondary)" text-anchor="middle">
          ${T('Clergy + Nobility could always outvote Third Estate 2-to-1','Ruhbanlar + Soylular her zaman Halk\'ı 2\'ye 1 geçebilirdi')}
        </text>
        <!-- Legend -->
        <rect x="120" y="278" width="10" height="10" fill="rgba(220,38,38,0.2)" stroke="#dc2626" stroke-width="1" rx="2"/>
        <text x="135" y="287" font-family="Inter" font-size="8" fill="var(--text-secondary)">${T('Third Estate / 3. Zümre','3. Zümre')}</text>
        <rect x="215" y="278" width="10" height="10" fill="#f3f4f6" stroke="#e5e7eb" stroke-width="1" rx="2"/>
        <text x="230" y="287" font-family="Inter" font-size="8" fill="var(--text-secondary)">${T('Clergy','Ruhbanlar')}</text>
        <rect x="280" y="278" width="10" height="10" fill="#d1d5db" stroke="#9ca3af" stroke-width="1" rx="2"/>
        <text x="295" y="287" font-family="Inter" font-size="8" fill="var(--text-secondary)">${T('Nobility','Soylular')}</text>
      </svg>`;

        const svg4 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <defs>
          <linearGradient id="pop-g" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#059669" stop-opacity="0.3"/>
          </linearGradient>
        </defs>
        <text x="250" y="26" font-family="Outfit" font-size="12" font-weight="800" fill="#10b981" text-anchor="middle" letter-spacing="0.04em">
          ${T('EUROPEAN POPULATION BOOM (1700-1900)','AVRUPA NÜFUS PATLAMASI (1700-1900)')}
        </text>
        <text x="250" y="42" font-family="Inter" font-size="8" font-weight="500" fill="var(--text-secondary)" text-anchor="middle">
          ${T('Driven by New World staple crops (Potato & Maize)','Yeni Dünya mahsullerinin (Patates ve Mısır) etkisiyle')}
        </text>
        <line x1="60" y1="80" x2="60" y2="280" stroke="var(--border-color)" stroke-width="1.5"/>
        <line x1="60" y1="280" x2="450" y2="280" stroke="var(--border-color)" stroke-width="1.5"/>
        
        <text x="50" y="284" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">0</text>
        <text x="50" y="234" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">100M</text>
        <text x="50" y="184" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">200M</text>
        <text x="50" y="134" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">300M</text>
        <text x="50" y="84" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">400M</text>
        
        <text x="120" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1700</text>
        <text x="220" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1800</text>
        <text x="320" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1850</text>
        <text x="420" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1900</text>
        
        <path d="M 60,280 L 120,240 L 220,195 L 320,140 L 420,80 L 420,280 Z" fill="url(#pop-g)" stroke="#10b981" stroke-width="2"/>
        
        <text x="120" y="232" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">125M</text>
        <text x="220" y="187" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">180M</text>
        <text x="320" y="132" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">266M</text>
        <text x="420" y="72" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">400M</text>
        
        <g transform="translate(140, 110)" style="cursor:pointer" onclick="showDiagramDetailPopup('w2_pop_detail')">
          <rect x="0" y="0" width="160" height="42" rx="4" fill="var(--bg-surface)" stroke="#10b981" stroke-width="1"/>
          <text x="80" y="15" font-family="Outfit" font-size="7.5" font-weight="700" fill="#047857" text-anchor="middle">${T('THE POTATO EFFECT','PATATES ETKİSİ')}</text>
          <text x="80" y="26" font-family="Inter" font-size="6.5" fill="var(--text-secondary)" text-anchor="middle">${T('Provided cheap, dense calories','Ucuz ve yoğun kalori sağladı,')}</text>
          <text x="80" y="34" font-family="Inter" font-size="6.5" fill="var(--text-secondary)" text-anchor="middle">${T('fueling the Industrial Revolution','Endüstri Devrimi\'ni besledi')}</text>
        </g>
      </svg>`;
    const svgs = [svg1, svg2, svg3, svg4];

    const cards = [
      commodityCard('commodity_guillotine', T('Guillotine','Giyotin'), `
        <rect x="36" y="15" width="4" height="65" fill="#78350f"/>
        <rect x="60" y="15" width="4" height="65" fill="#78350f"/>
        <rect x="32" y="15" width="36" height="4" fill="#78350f"/>
        <polygon points="40,30 60,40 60,44 40,34" fill="#9ca3af" stroke="#4b5563" stroke-width="0.5"/>
        <rect x="30" y="75" width="40" height="8" rx="2" fill="#92400e"/>`, '#dc2626'),
      commodityCard('commodity_bastille', T('Bastille Fortress','Bastille Kalesi'), `
        <defs><linearGradient id="st1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#9ca3af"/><stop offset="100%" stop-color="#4b5563"/></linearGradient></defs>
        <rect x="32" y="25" width="36" height="55" rx="3" fill="url(#st1)"/>
        <rect x="28" y="20" width="44" height="8" rx="1" fill="#4b5563"/>
        <polygon points="32,20 36,15 42,15 46,20" fill="#374151"/>
        <polygon points="54,20 58,15 64,15 68,20" fill="#374151"/>
        <path d="M 44,80 L 44,68 C 44,65 56,65 56,68 L 56,80 Z" fill="#1f2937"/>`, '#4b5563'),
      commodityCard('commodity_cockade', T('Tricolor Cockade','Devrim Kokartı'), `
        <circle cx="50" cy="50" r="28" fill="#dc2626"/>
        <path d="M 50,50 L 50,22 M 50,50 L 22,50 M 50,50 L 50,78 M 50,50 L 78,50 M 50,50 L 30,30 M 50,50 L 70,30 M 50,50 L 30,70 M 50,50 L 70,70" stroke="#b91c1c" stroke-width="1.5"/>
        <circle cx="50" cy="50" r="18" fill="#f9fafb"/>
        <circle cx="50" cy="50" r="9" fill="#1d4ed8"/>`, '#dc2626'),
      commodityCard('commodity_scroll', T('Declaration Scroll','Bildirge Tomarı'), `
        <defs><linearGradient id="sc1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fef9c3"/><stop offset="100%" stop-color="#fde68a"/></linearGradient></defs>
        <path d="M 32,22 Q 30,50 32,78 L 68,78 Q 70,50 68,22 Z" fill="url(#sc1)" stroke="#d97706" stroke-width="1"/>
        <ellipse cx="50" cy="22" rx="18" ry="5" fill="#fbbf24"/>
        <ellipse cx="50" cy="78" rx="18" ry="5" fill="#fbbf24"/>
        <line x1="38" y1="36" x2="62" y2="36" stroke="#92400e" stroke-width="1" opacity="0.5"/>
        <line x1="38" y1="44" x2="62" y2="44" stroke="#92400e" stroke-width="0.8" opacity="0.4"/>
        <line x1="38" y1="52" x2="62" y2="52" stroke="#92400e" stroke-width="0.8" opacity="0.4"/>
        <line x1="38" y1="60" x2="55" y2="60" stroke="#92400e" stroke-width="0.8" opacity="0.4"/>`, '#d97706'),
      commodityCard('commodity_tricolor', T('French Tricolor','Fransız Bayrağı'), `
        <rect x="22" y="24" width="20" height="50" fill="#1d4ed8" rx="1"/>
        <rect x="42" y="24" width="20" height="50" fill="#f9fafb" rx="1"/>
        <rect x="62" y="24" width="20" height="50" fill="#dc2626" rx="1"/>
        <line x1="22" y1="24" x2="22" y2="80" stroke="#78350f" stroke-width="3"/>`, '#1d4ed8'),
      commodityCard('commodity_phrygian', T('Liberty Cap','Özgürlük Kasketi'), `
        <defs><radialGradient id="ph1" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#b91c1c"/></radialGradient></defs>
        <path d="M 50,20 C 38,20 32,30 32,45 L 32,65 C 32,70 68,70 68,65 L 68,45 C 68,30 62,20 50,20 Z" fill="url(#ph1)"/>
        <path d="M 50,20 C 46,10 42,8 44,18" stroke="#b91c1c" stroke-width="2" fill="none" stroke-linecap="round"/>
        <line x1="32" y1="64" x2="68" y2="64" stroke="#fecaca" stroke-width="1.5" opacity="0.6"/>`, '#dc2626'),
    ];

    activeTabs = tabs;
    activeSvgs = svgs;
    activeCards = cards;
    activeTabIdx = tab;

  // ══════════════════════════════════════════════════════════════
  //  WEEK 6  –  Haitian Revolution
  // ══════════════════════════════════════════════════════════════
  } else if (state.week === 6) {
    const tabs = [
      { en: '🔺 Social Conflict Prism', tr: '🔺 Çatışma Prismi' },
      { en: '📅 Revolution Phases',     tr: '📅 Devrim Aşamaları' },
      { en: '🏭 Plantation Hierarchy',  tr: '🏭 Plantasyon Hiyerarşisi' }
    ];
    const tab = diagramTabState[6];

    // ── Diagram 1: 3-way tension prism (original) ──
    const svg1 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <defs>
          <linearGradient id="gw-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0d9488" stop-opacity="0.2"/>
            <stop offset="100%" stop-color="#0d9488" stop-opacity="0.01"/>
          </linearGradient>
          <filter id="sh6"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#000" flood-opacity="0.07"/></filter>
        </defs>
        <text x="250" y="24" font-family="Outfit" font-size="13" font-weight="800" fill="#0d9488" text-anchor="middle" letter-spacing="0.04em">
          ${T('SOCIODEMOGRAPHIC CONFLICT PRISM (SAINT-DOMINGUE)','ÇATIŞMA DİNAMİKLERİ PRİZMASI — SAINT-DOMINGUE')}
        </text>
        <!-- Prism fill -->
        <polygon points="120,115 380,115 250,235" fill="url(#gw-g)"/>
        <!-- Edges -->
        <path d="M 120,115 L 380,115" stroke="#d97706" stroke-width="1.8" stroke-dasharray="4,4"/>
        <text x="250" y="108" font-family="Inter" font-size="8" font-weight="700" fill="#b45309" text-anchor="middle">${T('Allied by Property Rights (Fragile Tension)','Mülkiyet Hakları Birliği (Kırılgan Gerilim)')}</text>
        <path d="M 120,115 L 250,235" stroke="#ef4444" stroke-width="2.2"/>
        <text x="150" y="185" font-family="Inter" font-size="7.5" font-weight="700" fill="#b91c1c" text-anchor="middle" transform="rotate(42,150,185)">${T('Extreme Violence / Aşırı Şiddet','Kölelik Baskısı')}</text>
        <path d="M 380,115 L 250,235" stroke="#0d9488" stroke-width="2.2"/>
        <text x="352" y="185" font-family="Inter" font-size="7.5" font-weight="700" fill="#0f766e" text-anchor="middle" transform="rotate(-42,352,185)">${T('1791 Rebellion Alliance','1791 İsyan İttifakı')}</text>
        <!-- BIG WHITES node -->
        <g transform="translate(120,115)" style="cursor:pointer" onclick="showDiagramDetailPopup('w6_whites')">
          <circle r="26" fill="var(--bg-surface)" stroke="var(--border-color)" stroke-width="1.5" filter="url(#sh6)"/>
          <circle r="5" fill="var(--text-muted)"/>
          <text y="-34" font-family="Outfit" font-size="9.5" font-weight="800" fill="var(--text-primary)" text-anchor="middle">${T('BIG WHITES', 'BÜYÜK BEYAZLAR')}</text>
          <text y="-23" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('~30k · Planters', '~30k · Plantasyon Sahibi')}</text>
        </g>
        <!-- MULATTOES node -->
        <g transform="translate(380,115)" style="cursor:pointer" onclick="showDiagramDetailPopup('w6_mulattoes')">
          <circle r="26" fill="var(--bg-surface)" stroke="#0d9488" stroke-width="1.5" filter="url(#sh6)"/>
          <circle r="5" fill="#0d9488"/>
          <text y="-34" font-family="Outfit" font-size="9.5" font-weight="800" fill="#0f766e" text-anchor="middle">${T('MULATTOES', 'ÖZGÜR MELEZLER')}</text>
          <text y="-23" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('~30k · Slave-owners', '~30k · Köle Sahibi')}</text>
        </g>
        <!-- BLACK SLAVES node -->
        <g transform="translate(250,235)" style="cursor:pointer" onclick="showDiagramDetailPopup('w6_slaves')">
          <circle r="28" fill="rgba(239,68,68,0.04)" stroke="#ef4444" stroke-width="1.5" filter="url(#sh6)"/>
          <circle r="5" fill="#ef4444"/>
          <text y="38" font-family="Outfit" font-size="10" font-weight="800" fill="#b91c1c" text-anchor="middle">${T('BLACK SLAVES', 'SİYAH KÖLELER')}</text>
          <text y="49" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('500,000 · 90% of pop.', '500.000 · Nüfusun %90\'ı')}</text>
        </g>
      </svg>`;

    // ── Diagram 2: Haitian Revolution phases timeline ──
    const svg2 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <text x="250" y="24" font-family="Outfit" font-size="13" font-weight="800" fill="#0d9488" text-anchor="middle" letter-spacing="0.04em">
          ${T('HAITIAN REVOLUTION PHASES (1791–1804)','HAİTİ DEVRİMİNİN AŞAMALARI (1791–1804)')}
        </text>
        <line x1="250" y1="42" x2="250" y2="318" stroke="#0d9488" stroke-width="2.5" opacity="0.22"/>
        <!-- Aug 1791 -->
        <circle cx="250" cy="55" r="7" fill="#0d9488" style="cursor:pointer" onclick="showDiagramDetailPopup('w6_ev1791')"/>
        <line x1="256" y1="55" x2="310" y2="55" stroke="#0d9488" stroke-width="1.2" opacity="0.5"/>
        <text x="314" y="51" font-family="Outfit" font-size="8" font-weight="800" fill="#0d9488">Ağu 1791</text>
        <text x="314" y="62" font-family="Inter" font-size="7.5" fill="var(--text-secondary)">${T('Bois Caïman Ceremony — Toussaint rises','Bois Caïman Töreni — Toussaint örgütleniyor')}</text>
        <!-- 1793 -->
        <circle cx="250" cy="103" r="6" fill="#1d4ed8" style="cursor:pointer" onclick="showDiagramDetailPopup('w6_ev1793')"/>
        <line x1="244" y1="103" x2="190" y2="103" stroke="#1d4ed8" stroke-width="1.2" opacity="0.5"/>
        <text x="186" y="99" font-family="Outfit" font-size="8" font-weight="800" fill="#1d4ed8" text-anchor="end">1793</text>
        <text x="186" y="110" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">${T('France abolishes slavery to gain rebel support','Fransa isyancıların desteğini kazanmak için köleliği kaldırdı')}</text>
        <!-- 1798 -->
        <circle cx="250" cy="151" r="6" fill="#d97706" style="cursor:pointer" onclick="showDiagramDetailPopup('w6_ev1798')"/>
        <line x1="256" y1="151" x2="310" y2="151" stroke="#d97706" stroke-width="1.2" opacity="0.5"/>
        <text x="314" y="147" font-family="Outfit" font-size="8" font-weight="800" fill="#d97706">1798</text>
        <text x="314" y="158" font-family="Inter" font-size="7.5" fill="var(--text-secondary)">${T('British forces expelled — Toussaint controls island','İngiliz kuvvetleri kovuldu — Toussaint adayı kontrol ediyor')}</text>
        <!-- 1801 -->
        <circle cx="250" cy="199" r="6" fill="#7c3aed" style="cursor:pointer" onclick="showDiagramDetailPopup('w6_ev1801')"/>
        <line x1="244" y1="199" x2="190" y2="199" stroke="#7c3aed" stroke-width="1.2" opacity="0.5"/>
        <text x="186" y="195" font-family="Outfit" font-size="8" font-weight="800" fill="#7c3aed" text-anchor="end">1801</text>
        <text x="186" y="206" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">${T('Toussaint\'s Constitution — Governor-for-life','Toussaint Anayasası — Ömür boyu valilik')}</text>
        <!-- 1802 -->
        <circle cx="250" cy="247" r="6" fill="#ef4444" style="cursor:pointer" onclick="showDiagramDetailPopup('w6_ev1802')"/>
        <line x1="256" y1="247" x2="310" y2="247" stroke="#ef4444" stroke-width="1.2" opacity="0.5"/>
        <text x="314" y="243" font-family="Outfit" font-size="8" font-weight="800" fill="#ef4444">1802</text>
        <text x="314" y="254" font-family="Inter" font-size="7.5" fill="var(--text-secondary)">${T('Napoleon\'s Leclerc fleet — Yellow Fever defeats French','Napolyon\'un ordusu — Sarı Humma Fransızları çökertti')}</text>
        <!-- Jan 1804 -->
        <circle cx="250" cy="300" r="9" fill="#b91c1c" style="cursor:pointer" onclick="showDiagramDetailPopup('w6_ev1804')"/>
        <line x1="244" y1="300" x2="190" y2="300" stroke="#b91c1c" stroke-width="1.2" opacity="0.5"/>
        <text x="186" y="296" font-family="Outfit" font-size="8" font-weight="800" fill="#b91c1c" text-anchor="end">1 Oca 1804</text>
        <text x="186" y="307" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">${T('Independence declared — Haiti: 1st Black Republic','Bağımsızlık ilan edildi — Haiti: İlk Siyah Cumhuriyeti')}</text>
      </svg>`;

    // ── Diagram 3: Plantation hierarchy org-chart ──
    const svg3 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <defs>
          <filter id="sh7"><feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#000" flood-opacity="0.06"/></filter>
          <marker id="arr-h" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--text-secondary)"/>
          </marker>
        </defs>
        <text x="250" y="24" font-family="Outfit" font-size="13" font-weight="800" fill="#0d9488" text-anchor="middle" letter-spacing="0.04em">
          ${T('PLANTATION ECONOMY HIERARCHY','PLANTASYON EKONOMİSİ HİYERARŞİSİ')}
        </text>
        <!-- Level 1: France -->
        <g style="cursor:pointer" onclick="showDiagramDetailPopup('w6_france')">
          <rect x="170" y="42" width="160" height="38" rx="8" fill="var(--bg-surface)" stroke="#1d4ed8" stroke-width="2" filter="url(#sh7)"/>
          <text x="250" y="60" font-family="Outfit" font-size="10" font-weight="800" fill="#1d4ed8" text-anchor="middle">${T('FRANCE', 'FRANSA')}</text>
          <text x="250" y="73" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('Colonial Power — Monopoly Trade','Sömürge Gücü — Ticaret Tekeli')}</text>
        </g>
        <!-- connector -->
        <line x1="250" y1="80" x2="250" y2="98" stroke="var(--border-color)" stroke-width="1.5" marker-end="url(#arr-h)"/>
        <!-- Level 2: Big Whites / Royal Gov -->
        <g style="cursor:pointer" onclick="showDiagramDetailPopup('w6_bigwhites')">
          <rect x="80" y="100" width="155" height="38" rx="8" fill="var(--bg-surface)" stroke="var(--border-color)" stroke-width="1.5" filter="url(#sh7)"/>
          <text x="157" y="117" font-family="Outfit" font-size="9" font-weight="800" fill="var(--text-primary)" text-anchor="middle">${T('BIG WHITES','BÜYÜK BEYAZLAR')}</text>
          <text x="157" y="130" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('Plantation Owners · ~30k','Plantasyon Sahipleri · ~30k')}</text>
        </g>
        <g style="cursor:pointer" onclick="showDiagramDetailPopup('w6_royalgov')">
          <rect x="265" y="100" width="155" height="38" rx="8" fill="var(--bg-surface)" stroke="var(--border-color)" stroke-width="1.5" filter="url(#sh7)"/>
          <text x="342" y="117" font-family="Outfit" font-size="9" font-weight="800" fill="var(--text-primary)" text-anchor="middle">${T('ROYAL GOVERNOR','KRALİYET VALİSİ')}</text>
          <text x="342" y="130" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('Sent from France · Administrator','Fransa\'dan atandı')}</text>
        </g>
        <line x1="210" y1="100" x2="250" y2="80" stroke="var(--border-color)" stroke-width="1" opacity="0.5"/>
        <line x1="290" y1="100" x2="250" y2="80" stroke="var(--border-color)" stroke-width="1" opacity="0.5"/>
        <!-- connectors level 3 -->
        <line x1="157" y1="138" x2="157" y2="155" stroke="var(--border-color)" stroke-width="1.2" marker-end="url(#arr-h)"/>
        <line x1="342" y1="138" x2="342" y2="155" stroke="var(--border-color)" stroke-width="1.2" marker-end="url(#arr-h)"/>
        <!-- Level 3 -->
        <g style="cursor:pointer" onclick="showDiagramDetailPopup('w6_smallwhites')">
          <rect x="60" y="157" width="195" height="36" rx="8" fill="var(--bg-surface)" stroke="var(--border-color)" stroke-width="1.5" filter="url(#sh7)"/>
          <text x="157" y="173" font-family="Outfit" font-size="9" font-weight="700" fill="var(--text-primary)" text-anchor="middle">${T('SMALL WHITES + MULATTOES','KÜÇÜK BEYAZLAR + MELEZLER')}</text>
          <text x="157" y="185" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('Artisans · Merchants · Free Colored','Esnaf · Tüccar · Özgür Melezler')}</text>
        </g>
        <g style="cursor:pointer" onclick="showDiagramDetailPopup('w6_overseers')">
          <rect x="265" y="157" width="155" height="36" rx="8" fill="var(--bg-surface)" stroke="var(--border-color)" stroke-width="1.5" filter="url(#sh7)"/>
          <text x="342" y="173" font-family="Outfit" font-size="9" font-weight="700" fill="var(--text-primary)" text-anchor="middle">${T('OVERSEERS','GÖZETÇİLER')}</text>
          <text x="342" y="185" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('Plantation supervisors','Plantasyon denetçileri')}</text>
        </g>
        <!-- connector -->
        <line x1="250" y1="193" x2="250" y2="213" stroke="var(--border-color)" stroke-width="1.5" marker-end="url(#arr-h)"/>
        <line x1="157" y1="193" x2="250" y2="213" stroke="var(--border-color)" stroke-width="1" opacity="0.4"/>
        <line x1="342" y1="193" x2="250" y2="213" stroke="var(--border-color)" stroke-width="1" opacity="0.4"/>
        <!-- Level 4: Enslaved -->
        <g style="cursor:pointer" onclick="showDiagramDetailPopup('w6_enslaved')">
          <rect x="105" y="215" width="290" height="48" rx="8" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="2" filter="url(#sh7)"/>
          <text x="250" y="235" font-family="Outfit" font-size="11" font-weight="800" fill="#b91c1c" text-anchor="middle">${T('ENSLAVED BLACK POPULATION','KÖLELEŞTİRİLMİŞ SİYAH NÜFUS')}</text>
          <text x="250" y="249" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="middle">${T('500,000 people — 90% of population — Generated all plantation wealth','500.000 kişi — Nüfusun %90\'ı — Tüm servetin kaynağı')}</text>
        </g>
        <!-- Economic output -->
        <text x="250" y="290" font-family="Outfit" font-size="9.5" font-weight="800" fill="#0d9488" text-anchor="middle">
          ${T('Saint-Domingue = 40% of France\'s foreign trade income','Saint-Domingue = Fransa\'nın dış ticaret gelirinin %40\'ı')}
        </text>
        <text x="250" y="307" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">
          ${T('World\'s #1 producer of sugar &amp; coffee in 1789','1789\'da dünyanın 1 numaralı şeker ve kahve üreticisi')}</text>
      </svg>`;

        const svg4 = `
      <svg viewBox="0 0 500 340" class="infographic-svg">
        <defs>
          <linearGradient id="pop-g" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#059669" stop-opacity="0.3"/>
          </linearGradient>
        </defs>
        <text x="250" y="26" font-family="Outfit" font-size="12" font-weight="800" fill="#10b981" text-anchor="middle" letter-spacing="0.04em">
          ${T('EUROPEAN POPULATION BOOM (1700-1900)','AVRUPA NÜFUS PATLAMASI (1700-1900)')}
        </text>
        <text x="250" y="42" font-family="Inter" font-size="8" font-weight="500" fill="var(--text-secondary)" text-anchor="middle">
          ${T('Driven by New World staple crops (Potato & Maize)','Yeni Dünya mahsullerinin (Patates ve Mısır) etkisiyle')}
        </text>
        <line x1="60" y1="80" x2="60" y2="280" stroke="var(--border-color)" stroke-width="1.5"/>
        <line x1="60" y1="280" x2="450" y2="280" stroke="var(--border-color)" stroke-width="1.5"/>
        
        <text x="50" y="284" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">0</text>
        <text x="50" y="234" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">100M</text>
        <text x="50" y="184" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">200M</text>
        <text x="50" y="134" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">300M</text>
        <text x="50" y="84" font-family="Inter" font-size="7.5" fill="var(--text-secondary)" text-anchor="end">400M</text>
        
        <text x="120" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1700</text>
        <text x="220" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1800</text>
        <text x="320" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1850</text>
        <text x="420" y="295" font-family="Inter" font-size="8" fill="var(--text-secondary)" text-anchor="middle">1900</text>
        
        <path d="M 60,280 L 120,240 L 220,195 L 320,140 L 420,80 L 420,280 Z" fill="url(#pop-g)" stroke="#10b981" stroke-width="2"/>
        
        <text x="120" y="232" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">125M</text>
        <text x="220" y="187" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">180M</text>
        <text x="320" y="132" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">266M</text>
        <text x="420" y="72" font-family="Outfit" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">400M</text>
        
        <g transform="translate(140, 110)" style="cursor:pointer" onclick="showDiagramDetailPopup('w2_pop_detail')">
          <rect x="0" y="0" width="160" height="42" rx="4" fill="var(--bg-surface)" stroke="#10b981" stroke-width="1"/>
          <text x="80" y="15" font-family="Outfit" font-size="7.5" font-weight="700" fill="#047857" text-anchor="middle">${T('THE POTATO EFFECT','PATATES ETKİSİ')}</text>
          <text x="80" y="26" font-family="Inter" font-size="6.5" fill="var(--text-secondary)" text-anchor="middle">${T('Provided cheap, dense calories','Ucuz ve yoğun kalori sağladı,')}</text>
          <text x="80" y="34" font-family="Inter" font-size="6.5" fill="var(--text-secondary)" text-anchor="middle">${T('fueling the Industrial Revolution','Endüstri Devrimi\'ni besledi')}</text>
        </g>
      </svg>`;
    const svgs = [svg1, svg2, svg3, svg4];

    const cards = [
      commodityCard('commodity_sugar_vat', T('Sugar Boiling Vat','Şeker Kazanı'), `
        <defs><linearGradient id="cop1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#b45309"/><stop offset="100%" stop-color="#7c2d12"/></linearGradient></defs>
        <ellipse cx="50" cy="35" rx="20" ry="8" fill="#ea580c"/>
        <path d="M 30,35 L 34,70 C 34,78 66,78 66,70 L 70,35 Z" fill="url(#cop1)"/>
        <circle cx="42" cy="33" r="2.5" fill="#fdba74"/>
        <circle cx="50" cy="31" r="3" fill="#ffedd5"/>
        <circle cx="57" cy="34" r="2" fill="#fdba74"/>`, '#b45309'),
      commodityCard('commodity_machete', T('Sugar Machete','Pala'), `
        <path d="M 25,65 L 68,22 C 72,18 78,22 75,26 L 35,75 Z" fill="#9ca3af" stroke="#4b5563" stroke-width="0.5"/>
        <rect x="20" y="65" width="8" height="12" rx="1" fill="#78350f" transform="rotate(45,24,71)"/>`, '#9ca3af'),
      commodityCard('commodity_voodoo_drum', T('Voodoo Drum','Voodoo Davulu'), `
        <defs><linearGradient id="vd1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#78350f"/><stop offset="100%" stop-color="#451a03"/></linearGradient></defs>
        <ellipse cx="50" cy="30" rx="16" ry="6" fill="#fed7aa"/>
        <path d="M 34,30 L 38,72 C 38,78 62,78 62,72 L 66,30 Z" fill="url(#vd1)"/>
        <path d="M 34,30 L 50,75 L 66,30 M 42,30 L 50,75 L 58,30" stroke="#f59e0b" stroke-width="1" fill="none" opacity="0.6"/>`, '#d97706'),
      commodityCard('commodity_haiti_flag', T('Haiti Flag (1803)','Haiti Bayrağı (1803)'), `
        <rect x="22" y="26" width="56" height="24" fill="#1d4ed8"/>
        <rect x="22" y="50" width="56" height="24" fill="#dc2626"/>
        <line x1="22" y1="26" x2="22" y2="74" stroke="#78350f" stroke-width="3"/>
        <!-- Torn center -->
        <rect x="40" y="34" width="20" height="16" fill="#1f2937" opacity="0.6"/>
        <text x="50" y="46" font-family="Outfit" font-size="8" font-weight="900" fill="#fbbf24" text-anchor="middle">L'U</text>`, '#1d4ed8'),
      commodityCard('commodity_torch', T('Freedom Torch','Özgürlük Meşalesi'), `
        <defs><radialGradient id="fr1" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#fef08a"/><stop offset="100%" stop-color="#f97316"/></radialGradient></defs>
        <path d="M 50,18 C 38,25 30,40 38,55 C 44,48 56,48 62,55 C 70,40 62,25 50,18 Z" fill="url(#fr1)"/>
        <ellipse cx="50" cy="54" rx="12" ry="6" fill="#f97316" opacity="0.8"/>
        <rect x="46" y="58" width="8" height="26" rx="2" fill="#4b5563"/>
        <rect x="40" y="82" width="20" height="4" rx="1" fill="#374151"/>`, '#f97316'),
      commodityCard('commodity_broken_chain', T('Broken Chain','Kırık Zincir'), `
        <circle cx="36" cy="50" r="12" fill="none" stroke="#6b7280" stroke-width="5"/>
        <circle cx="64" cy="50" r="12" fill="none" stroke="#6b7280" stroke-width="5"/>
        <!-- Break in center -->
        <line x1="48" y1="44" x2="52" y2="56" stroke="var(--bg-card)" stroke-width="7"/>
        <path d="M 46,42 L 54,58" stroke="#ef4444" stroke-width="2" stroke-dasharray="2,2"/>`, '#6b7280'),
    ];

    activeTabs = tabs;
    activeSvgs = svgs;
    activeCards = cards;
    activeTabIdx = tab;
  }

  // Unified render block
  const tabsBar = document.getElementById('graphics-tabs-bar');
  const cardsSection = document.getElementById('graphics-cards-section');
  const cardsGrid = document.getElementById('graphics-cards-grid');
  
  if (tabsBar) {
    tabsBar.innerHTML = buildDiagramTabBar(state.week, activeTabs, L);
  }
  
  container.innerHTML = activeSvgs[activeTabIdx] || '';
  
  if (cardsSection && cardsGrid) {
    if (activeCards && activeCards.length > 0) {
      cardsSection.style.display = 'block';
      cardsGrid.innerHTML = activeCards.join('');
    } else {
      cardsSection.style.display = 'none';
    }
  }

  // Re-apply the zoom scale after rendering
  applyDiagramTransform();
}

// RENDER INTERACTIVE ASSESSMENT QUIZ
function resetQuizState() {
  state.quizAnswers = [];
  state.quizSubmitted = false;
  state.quizState = {
    currentQuestionIndex: 0,
    score: 0,
    completed: false
  };
}

function renderQuiz() {
  const body = document.getElementById('quiz-body');
  const hud = document.getElementById('quiz-hud');
  const hudLeft = document.getElementById('quiz-hud-left');
  const hudCorrect = document.getElementById('quiz-hud-correct');
  const hudWrong = document.getElementById('quiz-hud-wrong');
  const hudLblCorrect = document.getElementById('quiz-hud-lbl-correct');
  const hudLblWrong = document.getElementById('quiz-hud-lbl-wrong');
  const nav = document.getElementById('quiz-nav');
  const btnBack = document.getElementById('quiz-btn-back');
  const btnNext = document.getElementById('quiz-btn-next');
  
  body.innerHTML = '';
  
  const trans = uiTranslations[state.language];
  const weekData = learningData.weeks[state.week];
  const quizData = weekData.quiz;
  const qIndex = state.quizState.currentQuestionIndex;
  
  if (state.quizState.completed) {
    // Hide HUD and Nav Bar for results
    hud.style.display = 'none';
    nav.style.display = 'none';
    
    const passed = state.quizState.score >= Math.ceil(quizData.length * 0.8);
    if (passed) {
      state.completedWeeks[state.week] = true;
    }
    state.weekScores[state.week] = state.quizState.score;
    saveProgress();
    updateSidebarScoreDisplay(state.week);
    updateGlobalProgressBar();
    
    body.innerHTML = `
      <div class="quiz-results-summary fade-in" style="padding: 1.0rem 0;">
        <h3 class="modal-title" style="font-size: 1.0rem; margin-bottom: 0.35rem;">${trans.quizCompletedTitle}</h3>
        <div class="quiz-results-score" style="font-size: 1.8rem; margin-bottom: 0.35rem;">${state.quizState.score} / ${quizData.length}</div>
        <p style="color: var(--text-secondary); max-width: 300px; font-size: 0.7rem; line-height: 1.35; margin: 0 auto 0.6rem;">
          ${trans.quizScoreText} <strong>${Math.round((state.quizState.score / quizData.length) * 100)}%</strong>. 
          ${trans.quizMinScoreText}
        </p>
        <div style="margin: 0.6rem 0; font-size: 0.75rem; font-weight: 700; color: ${passed ? 'var(--success)' : 'var(--error)'}">
          ${passed ? trans.quizPassText : trans.quizFailText}
        </div>
        <button class="quiz-submit-btn" style="padding: 0.35rem 1.0rem; font-size: 0.7rem; border-radius: 5px; margin-top: 0.35rem;" onclick="restartQuiz()">${trans.restartQuizBtn}</button>
      </div>
    `;
    return;
  }
  
  // Make sure HUD and Nav Bar are shown
  hud.style.display = 'flex';
  nav.style.display = 'flex';
  
  // Sync state.quizSubmitted dynamically
  state.quizSubmitted = (state.quizAnswers[qIndex] !== undefined && state.quizAnswers[qIndex] !== null);
  
  // Calculate correct and wrong count dynamically
  let correctCount = 0;
  let wrongCount = 0;
  for (let i = 0; i < state.quizAnswers.length; i++) {
    const ansIdx = state.quizAnswers[i];
    if (ansIdx !== undefined && ansIdx !== null) {
      const q = quizData[i];
      if (q && q.options[ansIdx]) {
        if (q.options[ansIdx].correct) {
          correctCount++;
        } else {
          wrongCount++;
        }
      }
    }
  }
  
  // Update HUD
  const questionNumText = state.language === 'tr' ? 'Soru' : 'Question';
  hudLeft.innerHTML = `<span style="color: var(--theme-accent); font-weight: 800;">${questionNumText}:</span> ${qIndex + 1} / ${quizData.length}`;
  
  hudLblCorrect.innerText = state.language === 'tr' ? '✓ Doğru:' : '✓ Correct:';
  hudLblWrong.innerText = state.language === 'tr' ? '✗ Yanlış:' : '✗ Wrong:';
  hudCorrect.innerText = correctCount;
  hudWrong.innerText = wrongCount;
  
  // Render Question
  const currentQ = quizData[qIndex];
  const questionDiv = document.createElement('div');
  questionDiv.className = 'quiz-question fade-in';
  questionDiv.innerText = `${qIndex + 1}. ${currentQ.question[state.language]}`;
  body.appendChild(questionDiv);
  
  // Render Options Container
  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'quiz-options';
  
  currentQ.options.forEach((opt, oIdx) => {
    // Use DIV instead of LABEL to prevent nested-click event anomalies in browsers
    const optDiv = document.createElement('div');
    optDiv.className = 'quiz-option fade-in';
    optDiv.id = `opt-label-${oIdx}`;
    
    // Highlight options if already answered
    if (state.quizSubmitted) {
      const selectedIdx = state.quizAnswers[qIndex];
      if (opt.correct) {
        optDiv.classList.add('correct');
      } else if (oIdx === selectedIdx) {
        optDiv.classList.add('incorrect');
      }
    }
    
    // Hidden radio input
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz-choice';
    radio.value = oIdx;
    radio.disabled = state.quizSubmitted;
    radio.style.display = 'none';
    if (state.quizAnswers[qIndex] === oIdx) {
      radio.checked = true;
    }
    
    const indicator = document.createElement('div');
    indicator.className = 'quiz-option-indicator';
    
    // Draw the dot/check mark style
    if (state.quizSubmitted) {
      indicator.style.borderColor = opt.correct ? 'var(--success)' : (oIdx === state.quizAnswers[qIndex] ? 'var(--error)' : 'var(--text-muted)');
    } else if (radio.checked) {
      indicator.style.borderColor = 'var(--theme-accent)';
    }
    
    const textSpan = document.createElement('span');
    textSpan.innerText = opt.text[state.language];
    
    optDiv.appendChild(radio);
    optDiv.appendChild(indicator);
    optDiv.appendChild(textSpan);
    
    // Answer immediately on option click
    optDiv.onclick = () => {
      if (!state.quizSubmitted) {
        radio.checked = true;
        selectAndSubmitAnswer(oIdx);
      }
    };
    
    optionsDiv.appendChild(optDiv);
  });
  body.appendChild(optionsDiv);
  
  // Render Explanation if submitted
  if (state.quizSubmitted) {
    const selectedIdx = state.quizAnswers[qIndex];
    if (selectedIdx !== undefined && selectedIdx !== null && currentQ.options[selectedIdx]) {
      const isCorrect = currentQ.options[selectedIdx].correct;
      
      const explanationBox = document.createElement('div');
      explanationBox.className = 'quiz-explanation-box';
      explanationBox.innerHTML = `
        <div class="quiz-explanation-title" style="color: ${isCorrect ? 'var(--success)' : 'var(--error)'}">
          ${isCorrect ? '✓ CORRECT / DOĞRU' : '✗ INCORRECT / YANLIŞ'} - ${trans.explanationTitle}
        </div>
        <p>${currentQ.explanation[state.language]}</p>
      `;
      body.appendChild(explanationBox);
    }
  }
  
  // Update Nav Bar Buttons
  btnBack.innerText = `← ${state.language === 'tr' ? 'Geri' : 'Back'}`;
  btnBack.disabled = qIndex === 0;
  btnBack.onclick = () => {
    state.quizState.currentQuestionIndex--;
    renderQuiz();
  };
  
  if (state.quizSubmitted) {
    const isLastQ = qIndex === quizData.length - 1;
    btnNext.disabled = false;
    btnNext.innerText = isLastQ ? trans.finishQuizBtn : trans.nextQuestionBtn;
    btnNext.onclick = () => {
      if (isLastQ) {
        state.quizState.completed = true;
      } else {
        state.quizState.currentQuestionIndex++;
      }
      renderQuiz();
    };
  } else {
    btnNext.disabled = true;
    btnNext.innerText = state.language === 'tr' ? 'Bir Şık Seçin' : 'Select an Option';
    btnNext.onclick = null;
  }

  // Auto-scroll back to top on new/unsubmitted questions
  if (!state.quizSubmitted) {
    setTimeout(() => {
      const bodyEl = document.getElementById('quiz-body');
      if (bodyEl) bodyEl.scrollTop = 0;
    }, 30);
  }
}

function selectAndSubmitAnswer(selectedVal) {
  const qIndex = state.quizState.currentQuestionIndex;
  const weekData = learningData.weeks[state.week];
  const quizData = weekData.quiz;
  const currentQ = quizData[qIndex];
  
  state.quizAnswers[qIndex] = selectedVal;
  state.quizSubmitted = true;
  
  if (currentQ.options[selectedVal].correct) {
    state.quizState.score++;
  }
  
  renderQuiz();

  // Smooth scroll to bottom to show description box and next button
  setTimeout(() => {
    const bodyEl = document.getElementById('quiz-body');
    if (bodyEl) {
      bodyEl.scrollTo({
        top: bodyEl.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, 100);
}

function submitAnswer() {
  const radios = document.getElementsByName('quiz-choice');
  let selectedVal = null;
  for (let r of radios) {
    if (r.checked) {
      selectedVal = parseInt(r.value);
      break;
    }
  }
  if (selectedVal !== null) {
    selectAndSubmitAnswer(selectedVal);
  }
}

function restartQuiz() {
  resetQuizState();
  renderQuiz();
}

// Local Storage persistency
function saveProgress() {
  const progressData = {
    completedWeeks: state.completedWeeks,
    weekScores: state.weekScores
  };
  localStorage.setItem('history_atlas_progress', JSON.stringify(progressData));
}

function loadProgress() {
  const stored = localStorage.getItem('history_atlas_progress');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      state.completedWeeks = parsed.completedWeeks || state.completedWeeks;
      state.weekScores = parsed.weekScores || state.weekScores;
      
      for (let w = 2; w <= 6; w++) {
        if (state.completedWeeks[w]) {
          document.getElementById(`week-card-${w}`).classList.add('completed');
        }
      }
    } catch (e) {
      console.error("Error loading progress: ", e);
    }
  }
}

function updateSidebarScoreDisplay(weekNum) {
  const opt = document.getElementById(`opt-week-${weekNum}`);
  if (opt) {
    const weekTitle = learningData.weeks[weekNum].title[state.language];
    const score = state.weekScores[weekNum];
    const isCompleted = state.completedWeeks[weekNum];
    const scoreSuffix = score !== null ? ` [${score}/${learningData.weeks[weekNum].quiz.length}]` : '';
    const checkMark = isCompleted ? ' ✓' : '';
    opt.text = `${weekTitle}${scoreSuffix}${checkMark}`;
  }
}

function updateGlobalProgressBar() {
  let completedCount = 0;
  for (let w = 2; w <= 6; w++) {
    if (state.completedWeeks[w]) completedCount++;
  }
  const percentage = Math.round((completedCount / 5) * 100);
  
  document.getElementById('progress-percent').innerText = percentage + '%';
  document.getElementById('progress-bar-fill').style.width = percentage + '%';
}

// UI/UX Map Enhancements
function toggleMapFullscreen() {
  const panel = document.querySelector('.map-panel');
  const btn = document.getElementById('map-fullscreen-btn');
  panel.classList.toggle('fullscreen-active');
  
  if (panel.classList.contains('fullscreen-active')) {
    btn.innerText = '✕';
    btn.title = state.language === 'tr' ? 'Tam Ekrandan Çık' : 'Exit Fullscreen';
  } else {
    btn.innerText = '⛶';
    btn.title = state.language === 'tr' ? 'Tam Ekran' : 'Fullscreen';
  }
  
  // Recalculate Leaflet map sizes after CSS transition completes
  setTimeout(() => {
    safeInvalidateSize(map);
  }, 350);
}

function toggleMapLabelsMode() {
  const chk = document.getElementById('chk-toggle-labels');
  if (chk) {
    state.showAllLabels = chk.checked;
  } else {
    state.showAllLabels = !state.showAllLabels;
  }
  updateLabelsButtonState();
  
  if (state.tab === 'narrative') {
    const slide = learningData.weeks[state.week].slides[state.slideIndex];
    renderMapMarkers(slide.mapState.markers);
  } else {
    renderMapMarkers();
  }
}

function updateLabelsButtonState() {
  const chk = document.getElementById('chk-toggle-labels');
  const btnText = document.getElementById('lbl-toggle-labels-text');
  if (chk) {
    chk.checked = state.showAllLabels;
  }
  if (btnText) {
    btnText.innerText = state.language === 'tr' ? 'Hepsini Göster' : 'Show All';
  }
}

function isMarkerInSelectedRoutes(markerKey) {
  const marker = learningData.map.markers[markerKey];
  if (!marker) return false;
  
  for (let routeKey of state.selectedFilters) {
    const route = learningData.map.routes[routeKey];
    if (route && route.coords) {
      const matched = route.coords.some(pt => {
        return Math.abs(pt[0] - marker.coords[0]) < 0.01 && 
               Math.abs(pt[1] - marker.coords[1]) < 0.01;
      });
      if (matched) return true;
    }
  }
  return false;
}

function searchLocations(val) {
  renderExplorerLocations(val);
}

function renderExplorerLocations(searchQuery = '') {
  const grid = document.getElementById('explorer-location-list');
  if (!grid) return;
  grid.innerHTML = '';
  
  const markers = learningData.map.markers;
  const keys = Object.keys(markers);
  let count = 0;
  
  keys.forEach(key => {
    const marker = markers[key];
    const labelText = marker.label[state.language].toLowerCase();
    const query = searchQuery.toLowerCase();
    
    if (query && !labelText.includes(query)) {
      return;
    }
    
    count++;
    const item = document.createElement('div');
    item.className = 'location-item';
    item.innerText = marker.label[state.language];
    item.title = marker.label[state.language];
    
    item.onclick = () => {
      if (map) {
        // Zoom in close to location
        map.flyTo(marker.coords, 6.5, { duration: 1.2 });
        // Show detailed description popup after fly completes
        setTimeout(() => {
          showMarkerDetails(key);
        }, 1200);
      }
    };
    
    grid.appendChild(item);
  });
  
  if (count === 0) {
    const fallback = document.createElement('div');
    fallback.style.gridColumn = '1 / -1';
    fallback.style.fontSize = '0.75rem';
    fallback.style.color = 'var(--text-muted)';
    fallback.style.padding = '0.5rem';
    fallback.innerText = state.language === 'tr' ? 'Sonuç bulunamadı.' : 'No results found.';
    grid.appendChild(fallback);
  }
}

// ----------------------------------------------------
// INTERACTIVE DIAGRAM CONTROLS (ZOOM, FS & POPUPS)
// ----------------------------------------------------

function adjustDiagramZoom(amount) {
  state.diagramZoom = Math.min(Math.max(state.diagramZoom + amount, 0.4), 4.0);
  const svg = document.querySelector('.infographic-svg');
  if (svg) {
    svg.style.transition = 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)';
  }
  applyDiagramTransform();
}

function resetDiagramZoom() {
  state.diagramZoom = 1.0;
  state.diagramPanX = 0;
  state.diagramPanY = 0;
  const svg = document.querySelector('.infographic-svg');
  if (svg) {
    svg.style.transition = 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)';
  }
  applyDiagramTransform();
}

function applyDiagramTransform() {
  const svg = document.querySelector('.infographic-svg');
  if (svg) {
    svg.style.transform = `translate(${state.diagramPanX}px, ${state.diagramPanY}px) scale(${state.diagramZoom})`;
  }
}

function initDiagramPanAndZoom() {
  const container = document.getElementById('graphics-diagram-box');
  if (!container) return;
  
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  
  container.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    if (e.target.closest('button') || e.target.closest('.commodity-card') || e.target.closest('polygon') || e.target.closest('circle') || e.target.closest('text')) {
      // Let standard SVG interactive clicks work
      if (e.target.tagName !== 'svg') {
        return;
      }
    }
    
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    container.style.cursor = 'grabbing';
    e.preventDefault();
  });
  
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    
    state.diagramPanX += dx;
    state.diagramPanY += dy;
    
    startX = e.clientX;
    startY = e.clientY;
    
    const svg = document.querySelector('.infographic-svg');
    if (svg) {
      svg.style.transition = 'none';
    }
    
    applyDiagramTransform();
  });
  
  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      container.style.cursor = 'grab';
    }
  });
  
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomDelta = e.deltaY < 0 ? 0.08 : -0.08;
    
    const svg = document.querySelector('.infographic-svg');
    if (svg) {
      svg.style.transition = 'transform 0.1s ease-out';
    }
    
    state.diagramZoom = Math.min(Math.max(state.diagramZoom + zoomDelta, 0.4), 4.0);
    applyDiagramTransform();
  }, { passive: false });

  // Touch Support
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    if (e.target.closest('button') || e.target.closest('.commodity-card') || e.target.closest('polygon') || e.target.closest('circle') || e.target.closest('text')) {
      if (e.target.tagName !== 'svg') {
        return;
      }
    }
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });
  
  container.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    
    state.diagramPanX += dx;
    state.diagramPanY += dy;
    
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    
    const svg = document.querySelector('.infographic-svg');
    if (svg) {
      svg.style.transition = 'none';
    }
    
    applyDiagramTransform();
    e.preventDefault();
  }, { passive: false });
  
  container.addEventListener('touchend', () => {
    isDragging = false;
  });
}

function toggleDiagramFullscreen() {
  const container = document.getElementById('graphics-diagram-box');
  const btn = document.getElementById('diagram-fs-btn');
  if (!container) return;
  
  if (container.classList.contains('fullscreen-active')) {
    container.classList.remove('fullscreen-active');
    btn.innerText = '⛶';
    document.body.style.overflow = '';
  } else {
    container.classList.add('fullscreen-active');
    btn.innerText = '✕';
    document.body.style.overflow = 'hidden';
  }
}

function showDiagramDetailPopup(nodeKey) {
  const details = diagramNodeDetails[nodeKey];
  if (!details) return;
  
  document.getElementById('modal-title-text').innerText = details.title[state.language];
  document.getElementById('modal-body-text').innerHTML = `
    <div style="font-family: var(--font-display); line-height: 1.6; color: var(--text-primary); font-size: 0.9rem;">
      ${details.body[state.language]}
    </div>
  `;
  document.getElementById('modal-container').classList.add('open');
}

// ----------------------------------------------------
// ACADEMIC NOTES PDF DOWNLOAD GENERATION
// ----------------------------------------------------

function getWeekDiagramsForPrint(weekNum, lang) {
  const originalWeek = state.week;
  const originalTab = state.tab;
  const originalDiagramTab = diagramTabState[weekNum];
  
  const diagrams = [];
  
  // Set current week temporarily so renderInfographic generates the correct data
  state.week = weekNum;
  
  // Loop through all 3 tabs (0, 1, 2)
  for (let idx = 0; idx < 3; idx++) {
    diagramTabState[weekNum] = idx;
    renderInfographic();
    
    // Get the generated content inside 'graphics-diagram-box'
    const container = document.getElementById('graphics-diagram-box');
    if (container) {
      let title = "";
      if (weekNum === 2) {
        const tabs = [
          { en: 'Exchange Flow',      tr: 'Değişim Akışı' },
          { en: 'Population Collapse', tr: 'Nüfus Çöküşü' },
          { en: 'Trade Triangle',      tr: 'Ticaret Üçgeni' }
        ];
        title = lang === 'tr' ? tabs[idx].tr : tabs[idx].en;
      } else if (weekNum === 3) {
        const tabs = [
          { en: 'Path to Slavery',    tr: 'Köleliğe Giden Yol' },
          { en: 'Atlantic Trade',      tr: 'Atlantik Köle Ticareti' },
          { en: 'Slave Population',   tr: 'Köle Nüfusu' }
        ];
        title = lang === 'tr' ? tabs[idx].tr : tabs[idx].en;
      } else if (weekNum === 4) {
        const tabs = [
          { en: 'Congress Structure',   tr: 'Kongre Yapısı' },
          { en: 'Separation of Powers', tr: 'Güçler Ayrılığı' },
          { en: 'Road to Revolution',   tr: 'Devrime Giden Yol' }
        ];
        title = lang === 'tr' ? tabs[idx].tr : tabs[idx].en;
      } else if (weekNum === 5) {
        const tabs = [
          { en: 'Estates Pyramid',    tr: '3 Zümre Piramidi' },
          { en: 'Revolution Timeline', tr: 'Devrim Takvimi' },
          { en: 'Voting Power',        tr: 'Oy Gücü' }
        ];
        title = lang === 'tr' ? tabs[idx].tr : tabs[idx].en;
      } else if (weekNum === 6) {
        const tabs = [
          { en: 'Social Conflict Prism', tr: 'Çatışma Prismi' },
          { en: 'Revolution Phases',     tr: 'Devrim Aşamaları' },
          { en: 'Plantation Hierarchy',  tr: 'Plantasyon Hiyerarşisi' }
        ];
        title = lang === 'tr' ? tabs[idx].tr : tabs[idx].en;
      }
      
      diagrams.push({
        title: title,
        html: container.innerHTML
      });
    }
  }
  
  // Restore original states
  state.week = originalWeek;
  state.tab = originalTab;
  diagramTabState[weekNum] = originalDiagramTab;
  renderInfographic(); // re-render original UI view
  
  return diagrams;
}

function downloadStudyGuidePDF() {
  const trans = uiTranslations[state.language];
  const weekNum = state.week;
  const weekData = learningData.weeks[weekNum];
  
  // Extract interactive week diagrams
  const weekDiagrams = getWeekDiagramsForPrint(weekNum, state.language);
  
  // Precompute marker details (with correct emojis) and route details for print.html
  const slidesForPrint = weekData.slides.map(slide => {
    const printSlide = JSON.parse(JSON.stringify(slide));
    
    // Resolve slide-specific markers
    if (printSlide.mapState && printSlide.mapState.markers) {
      printSlide.mapState.markerDetails = printSlide.mapState.markers.map(key => {
        const marker = learningData.map.markers[key];
        if (marker) {
          const emoji = getMarkerEmoji(key, marker, slide.title[state.language], slide.text[state.language], state.language);
          return {
            key: key,
            coords: marker.coords,
            placement: marker.placement || 'right',
            label: marker.label,
            emoji: emoji
          };
        }
        return null;
      }).filter(Boolean);
    }
    
    // Resolve slide-specific routes
    if (printSlide.mapState && printSlide.mapState.activeRoutes) {
      printSlide.mapState.routeDetails = printSlide.mapState.activeRoutes.map(key => {
        const route = learningData.map.routes[key];
        if (route) {
          return {
            key: key,
            coords: route.coords,
            label: route.label
          };
        }
        return null;
      }).filter(Boolean);
    }
    
    return printSlide;
  });
  
  // Save all print configurations to localStorage for print.html to consume
  localStorage.setItem('print_weekNum', weekNum);
  localStorage.setItem('print_language', state.language);
  localStorage.setItem('print_diagrams', JSON.stringify(weekDiagrams));
  localStorage.setItem('print_themeColor', weekData.themeColor);
  localStorage.setItem('print_weekTitle', weekData.title[state.language]);
  localStorage.setItem('print_slides', JSON.stringify(slidesForPrint));
  localStorage.setItem('print_mapCenter', JSON.stringify(mapViews[weekNum].center));
  localStorage.setItem('print_mapZoom', mapViews[weekNum].zoom);
  localStorage.setItem('print_mapPresetData', JSON.stringify(learningData.map));
  localStorage.setItem('print_detailedNotes', getDetailedAcademicNotes(weekNum, state.language));
  
  // Open the dedicated local print.html page in a new tab
  const printWindow = window.open('print.html', '_blank');
  if (printWindow) {
    printWindow.focus();
  } else {
    alert(state.language === 'tr' ? 'Lütfen tarayıcınızın pop-up engelleyicisini kaldırın.' : 'Please disable your browser\'s pop-up blocker.');
  }
}

function getDetailedAcademicNotes(weekNum, lang) {
  if (weekNum === 2) {
    return lang === 'tr' ? `
      <p>Bu ders, modernleşme ile Batılılaşma arasındaki tarihsel bağlantıyı incelemektedir. Avrupa'nın küresel yükselişinin arkasındaki temel dinamik, Amerika kıtalarını kontrol etmesi ve ardından Asya pazarlarına girmesidir. Bu süreç, geleneksel olarak yoksul olan Avrupa ekonomilerine devasa kaynaklar, gıda maddeleri ve değerli metaller kazandırmıştır.</p>
      
      <div class="note-card">
        <strong>Kolomb Değişimi'nin (Columbian Exchange) Temelleri:</strong>
        <p>Tarihçi Alfred Crosby tarafından tanımlanan bu kavram, 1492'den sonra Eski ve Yeni Dünya arasında gerçekleşen ekolojik transferi ifade eder. Bu değişim kapsamında mısır, patates ve tütün Avrupa'ya taşınırken; buğday, şeker kamışı, atlar ve ölümcül çiçek hastalığı Amerika'ya getirilmiştir.</p>
      </div>
      
      <h3>Detaylı Analiz Konuları:</h3>
      <ul>
        <li><strong>Fiziksel Keşif ve Golfstrim:</strong> 1513'te Golfstrim akıntısının haritalandırılmasıyla Atlantik rüzgar sistemleri çözülmüş ve dairesel ticaret rotaları kurulmuştur.</li>
        <li><strong>İspanyol Hazine Filoları:</strong> Aztek ve İnka imparatorluklarının fethiyle Potosi gümüş madenleri yağmalanmış ve Avrupa hazinelerine devasa likidite sağlanarak enflasyonist bir dönem başlatılmıştır.</li>
        <li><strong>Demografik Felaket:</strong> Amerika yerlilerinin Eski Dünya virüslerine (çiçek, kızamık) karşı hiçbir bağışıklığı yoktu. Nüfusun %80-95'i 150 yıl içinde yok olmuştur.</li>
        <li><strong>Avrupa'da Patates Devrimi:</strong> Patates yer altında yetiştiği için talancı ordulardan saklanabilmiş, bu sayede İrlanda, Rusya ve Almanya köylü nüfusu için en önemli kalori kaynağı haline gelmiştir.</li>
        <li><strong>Kininin Rolü:</strong> And Dağları'ndan getirilen kinin sıtmayı önleyerek Avrupalıların tropikal Afrika içlerini sömürgeleştirmesini sağlamıştır.</li>
      </ul>
    ` : `
      <p>This lecture explores the link between modernization and Westernization, identifying the colonization of the Americas and entry into Asia as the Long-term engines of European rise. Traditionally cash-starved, Europe imported immense ecological wealth, liquidity, and resources.</p>
      
      <div class="note-card">
        <strong>The Concept of the Columbian Exchange:</strong>
        <p>Coined by Alfred Crosby, it represents the massive transfer of diseases, populations, food crops, and ideas following Columbus's voyage in 1492. Maize, potatoes, and tobacco crossed to the Old World, while sugar, wheat, horses, and smallpox invaded the New World.</p>
      </div>
      
      <h3>Key Academic Focus Areas:</h3>
      <ul>
        <li><strong>The Wind System & Gulf Stream:</strong> Discovered in 1513, the Gulf Stream mapping completed the Atlantic shipping routes: outward with trade winds, returning with westerlies.</li>
        <li><strong>Treasure Fleets & Liquidity:</strong> Conquests of Aztec and Inca empires funneled silver from Potosi, causing major price inflation in Europe while financing commercial bourgeoisie.</li>
        <li><strong>Microbiological Collapse:</strong> Native Americans lacked genetic immunity to domesticated animal pathogens. Eurasian diseases (smallpox, measles) killed 80-95% of the Native population.</li>
        <li><strong>Peasantry & The Potato:</strong> Being an underground crop, potatoes escaped military plunder, serving as the essential calorie base for Northern Europe's war-torn peasantries.</li>
        <li><strong>Quinine as an Imperial Tool:</strong> Cinchona bark extract (quinine) treated malaria, enabling the partition of tropical Africa.</li>
      </ul>
    `;
  } else if (weekNum === 3) {
    return lang === 'tr' ? `
      <p>Transatlantik köle ticareti (1519-1867), 12 milyondan fazla Afrikalının Amerika kıtalarına zorla taşındığı insanlık tarihindeki en büyük zorunlu göç dalgasıdır. Bu ticaret sömürge plantasyon ekonomilerini beslemiş ve Avrupa burjuvazisinin yükselişini finanse etmiştir.</p>
      
      <div class="note-card">
        <strong>Bacon İsyanı (1676) ve Irksal Köleliğin İcadı:</strong>
        <p>Virginia sömürgesinde, topraksız kalmış beyaz ve siyah sözleşmeli işçiler Nathaniel Bacon önderliğinde bir araya gelerek elitlere karşı ayaklandılar. Bu ortak sınıf bilinci plantasyon sahiplerini dehşete düşürdü. İsyanın ardından elitler, sınıf ittifakını bölmek amacıyla yasalarla ırk ayrımlarını keskinleştirdi; beyazlara ayrıcalıklar tanınırken siyahlar ömür boyu kalıtsal köleliğe mahkum edildi.</p>
      </div>
      
      <h3>Temel Konular:</h3>
      <ul>
        <li><strong>Köleliğin Karakteri:</strong> Roma veya Osmanlı'daki geçici köleliğin aksine, transatlantik köleliği ırksal, kalıtsal ve ömür boyu süren kalıcı bir niteliğe sahipti.</li>
        <li><strong>Yerli Emeğinden Afrika Emeğine Geçiş:</strong> Yerli nüfusun salgınlarla kırılması ve Valladolid Tartışması (1550) gibi tartışmalarla yerli köleliğine sınırlama getirilmesi, plantasyon sahiplerini Batı Afrika'daki (Wolof, Fula) binicilik ve hayvancılık uzmanlığı olan iş gücüne yöneltti.</li>
        <li><strong>Şeker Kamışı Motoru:</strong> Amerika'ya getirilen kölelerin %90'ı şeker plantasyonlarında (Brezilya ve Saint-Domingue) çalıştırılmak üzere taşındı.</li>
        <li><strong>Silah-Köle Sarmalı:</strong> Afrikalı krallıklar, kendilerini komşu devletlere karşı korumak için Avrupalılardan ateşli silah satın almak zorunda kaldılar ve bunun karşılığında esir ticareti yaptılar.</li>
      </ul>
    ` : `
      <p>The Transatlantic Slave Trade (1519-1867) forced over 12 million Africans across the ocean. This trade formed the bedrock of the Atlantic plantation system and accumulated capital that funded the Industrial Revolution.</p>
      
      <div class="note-card">
        <strong>Bacon's Rebellion (1676) and the Creation of Race:</strong>
        <p>In Virginia, landless white and black indentured servants united under Nathaniel Bacon to burn Jamestown. To prevent future cross-racial class uprisings, the planter assembly passed legal codes dividing laborers by race, co-opting poor whites with legal privileges and locking blacks into hereditary lifetime slavery.</p>
      </div>
      
      <h3>Extended Study Themes:</h3>
      <ul>
        <li><strong>Permanent Chattel Slavery:</strong> Unlike ancient forms of slavery, Atlantic slavery was legally defined as lifelong, inheritable, and based strictly on race.</li>
        <li><strong>Shift from Native to African Labor:</strong> Driven by Native demographic collapse and Spanish crown restrictions (e.g. Valladolid Controversy 1550). West Africans (Wolof, Fula) also brought crucial agricultural and cattle-herding skills.</li>
        <li><strong>The Sugar Industry:</strong> Nearly 90% of enslaved Africans were shipped to Brazil and the Caribbean to produce sugar, the cash crop of the era.</li>
        <li><strong>Gun-Slave Cycle:</strong> African states traded war captives for European firearms to protect themselves, which in turn fueled further capture and destabilized the West African interior.</li>
      </ul>
    `;
  } else if (weekNum === 4) {
    return lang === 'tr' ? `
      <p>Amerikan Devrimi (1775-1783), İngiliz sömürge tebaasının modern siyasi vatandaşlara dönüşümünü ve Aydınlanma fikirlerinin ilk kez anayasal bir devlete uygulanmasını temsil eder.</p>
      
      <div class="note-card">
        <strong>Connecticut (Büyük) Uzlaşması (1787):</strong>
        <p>Anayasa hazırlanırken büyük eyaletler nüfus oranına göre temsil (Virginia Planı), küçük eyaletler ise eşit temsil (New Jersey Planı) talep etti. Roger Sherman, iki kanatlı bir meclis kurarak uzlaşma sağladı: Temsilciler Meclisi nüfusa göre, Senato ise eşit temsil (her eyalete 2 senatör) esasına göre şekillendirildi.</p>
      </div>
      
      <h3>Temel Konular:</h3>
      <ul>
        <li><strong>Sömürge Toplumunun Yapısı:</strong> Amerika'da İngiltere'deki gibi katı bir aristokrasi veya feodal köylü sınıfı yoktu. Geniş toprak sahipliği bağımsızlık duygusunu pekiştirdi.</li>
        <li><strong>Temsiliyetsiz Vergilendirme:</strong> Yedi Yıl Savaşları'nın borçlarını kapatmak isteyen İngiltere, kolonilere ağır vergiler (Damga, Çay Yasaları) koydu. Koloniler, İngiliz Parlamentosu'nda temsil edilmedikleri gerekçesiyle isyan ettiler.</li>
        <li><strong>Yorktown Zaferi:</strong> General Washington liderliğindeki ordu, Fransız donanması ve birliklerinin desteğiyle 1781'de Yorktown'da İngilizleri mağlup ederek savaşı bitirdi.</li>
        <li><strong>Güçler Ayrılığı:</strong> Anayasa, yasama, yürütme ve yargı organlarını ayırarak, cumhuriyetin diktatörlüğe dönüşmesini engelleyen denge ve denetleme (checks & balances) sistemini kurdu.</li>
      </ul>
    ` : `
      <p>The American Revolution (1775-1783) demonstrated the practical application of Enlightenment ideals on popular sovereignty, turning loyal British colonists into rights-bearing citizens.</p>
      
      <div class="note-card">
        <strong>The Connecticut Compromise (1787):</strong>
        <p>During the Constitutional Convention, large states demanded representation by population (Virginia Plan), while small states demanded equal representation (New Jersey Plan). Roger Sherman compromised by proposing a bicameral Congress: the House (proportional) and the Senate (equal with 2 seats per state).</p>
      </div>
      
      <h3>Extended Study Themes:</h3>
      <ul>
        <li><strong>Colonial Social Mobility:</strong> Lacking a rigid hereditary aristocracy and land-locked peasantry, colonial America boasted wide landownership and higher rates of political franchise.</li>
        <li><strong>No Taxation Without Representation:</strong> British attempts to cover Seven Years' War debts via Stamp and Tea Acts met resistance, as colonists claimed only local legislatures could tax them.</li>
        <li><strong>French Alliance:</strong> French naval blockade and troops under Lafayette secure the decisive victory at Yorktown (1781).</li>
        <li><strong>Checks and Balances:</strong> Madisonian architecture separated the Legislative, Executive, and Judicial branches to protect the republic from centralized tyranny.</li>
      </ul>
    `;
  } else if (weekNum === 5) {
    return lang === 'tr' ? `
      <p>Fransız Devrimi (1789-1799), Avrupa'daki mutlak monarşiyi ve feodal ayrıcalıklar düzenini (Eski Rejim) yıkarak, egemenliğin kraldan alınıp 'Ulus'a verildiği modern ulus-devlet modelini doğurmuştur.</p>
      
      <div class="note-card">
        <strong>Eski Rejim'in Üç Tabakası (Three Estates):</strong>
        <p>Fransız toplumu üç zümreye ayrılmıştı: Ruhbanlar (%0.5), Soylular (%1.5) ve Halk (%98). İlk iki zümre toprakların çoğunu elinde tutup vergiden muafken; devletin tüm vergi yükünü (taille, gabelle) siyasi hakları olmayan Halk (Üçüncü Zümre) ödüyordu. Bu adaletsizlik devrimin patlama noktası oldu.</p>
      </div>
      
      <h3>Temel Konular:</h3>
      <ul>
        <li><strong>Mali Kriz:</strong> Yedi Yıl Savaşları ve Amerikan Devrimi'ne verilen askeri finansal destek Fransa'yı iflasın eşiğine getirdi. Kral XVI. Louis, vergi reformu için Etats Généraux'yu (Sınıflar Meclisi) toplamak zorunda kaldı.</li>
        <li><strong>Bastille Baskını:</strong> 14 Temmuz 1789'da Paris halkı, kralın askeri yığınağına karşı Bastille hapishanesini basarak silahlandı ve devrimi sokaklara taşıdı.</li>
        <li><strong>İnsan ve Yurttaş Hakları Bildirisi:</strong> İnsanların özgür doğduğunu ve eşit haklara sahip olduğunu, egemenliğin ulusa ait olduğunu ilan eden tarihi belgedir.</li>
        <li><strong>Milliyetçiliğin Yükselişi:</strong> Devrim, ortak bir vatan savunması (levée en masse - genel seferberlik) yaratarak tebaa kimliğini vatandaşlık ve Fransız ulusal kimliğine dönüştürdü.</li>
      </ul>
    ` : `
      <p>The French Revolution (1789-1799) shattered the absolute feudal structures of the Ancien Régime, shifting sovereignty from the King to the 'Nation' and initiating the modern nation-state.</p>
      
      <div class="note-card">
        <strong>The Inequality of the Three Estates:</strong>
        <p>French society was divided into the First Estate (Clergy, 0.5%), Second Estate (Nobility, 1.5%), and Third Estate (Commoners, 98%). The first two held vast land and tax exemptions, leaving the entire tax burden (taille) on the politically disenfranchised Third Estate.</p>
      </div>
      
      <h3>Extended Study Themes:</h3>
      <ul>
        <li><strong>Fiscal Collapse:</strong> French funding of the American Revolutionary War compounded heavy Crown debts, forcing Louis XVI to convoke the Estates-General in May 1789.</li>
        <li><strong>Storming of the Bastille:</strong> On July 14, 1789, Parisian crowds stormed the medieval fortress to secure gunpowder, turning a constitutional crisis into a popular revolution.</li>
        <li><strong>Declaration of the Rights of Man:</strong> Proclaimed liberty, equality, and national sovereignty. However, it featured deep tensions regarding property qualifications for active citizenship.</li>
        <li><strong>Rise of Nationalism:</strong> The threat of foreign monarchical invasion triggered the 'levée en masse' (conscription), creating a militarized national consciousness.</li>
      </ul>
    `;
  } else if (weekNum === 6) {
    return lang === 'tr' ? `
      <p>Haiti Devrimi (1791-1804), Fransız sömürgesi Saint-Domingue'de gerçekleşen, dünya tarihindeki tek başarılı köle devrimidir. Devrim, ırksal kast düzenini yıkarak ilk bağımsız siyah cumhuriyeti kurmuştur.</p>
      
      <div class="note-card">
        <strong>Saint-Domingue Çatışma Üçgeni:</strong>
        <p>Sömürge toplumu üç zıt grup arasındaydı: plantasyonları kontrol eden beyaz elitler (Grand Blancs), mülk sahibi olan ancak vatandaşlık hakları reddedilen özgür melezler (Gens de Couleur) ve nüfusun %90'ını oluşturan 500.000 siyah köle. Fransız Devrimi'nin 'Eşitlik' söylemi bu gruplar arasındaki gerilimi patlattı.</p>
      </div>
      
      <h3>Temel Konular:</h3>
      <ul>
        <li><strong>Dutty Boukman Ayaklanması:</strong> Ağustos 1791'de voodoo töreniyle başlayan isyan, kuzey ovalarındaki plantasyonları yakarak sömürge genelinde büyük bir köle savaşı başlattı.</li>
        <li><strong>Toussaint Louverture:</strong> Eski bir köle olan Toussaint, disiplinli bir ordu kurdu; İspanyol ve İngiliz işgallerine karşı savaşı yönetti. Ancak 1802'de Napolyon'un gönderdiği Leclerc ordu düzeniyle tutuklanarak Fransa'da (Fort de Joux) dondurucu bir hücrede ölüme terk edildi.</li>
        <li><strong>Bağımsızlık İlanı:</strong> Toussaint'ın ölümünün ardından Jean-Jacques Dessalines liderliğindeki güçler Fransız ordusunu tamamen yendi. 31 Aralık 1803'te Gonaives'te bağımsızlık ilan edildi ve ülkeye yerli adı olan 'Haiti' verildi.</li>
        <li><strong>Devrimin Küresel Etkisi:</strong> Haiti, köleliğin tamamen kaldırıldığı ilk ülke oldu. Bu durum tüm Atlantik dünyasında köle sahiplerini dehşete düşürdü ve köle isyanı korkusunu körükledi.</li>
      </ul>
    ` : `
      <p>The Haitian Revolution (1791-1804) in the French colony of Saint-Domingue is the only successful slave rebellion in world history, establishing the first free black republic.</p>
      
      <div class="note-card">
        <strong>The Sociodemographic Conflict Triangle:</strong>
        <p>The colony was divided between white planters (Grand Blancs), wealthy mixed-race free people of color (Gens de Couleur) denied civil rights, and 500,000 enslaved Africans (90% of population) working under the brutal Code Noir. French slogans of liberty ignited this powder keg.</p>
      </div>
      
      <h3>Extended Study Themes:</h3>
      <ul>
        <li><strong>The Insurrection of 1791:</strong> Begun in August with Dutty Boukman's ceremony, enslaved workers systematically burned sugar plantations across the northern plains.</li>
        <li><strong>Toussaint Louverture's Leadership:</strong> A self-educated former slave, he built a disciplined army, defeated British and Spanish invasions, and became Governor-General. He was captured by Napoleon's general Leclerc in 1802 and died in Fort de Joux (Jura).</li>
        <li><strong>Independence Declaration:</strong> Following Toussaint's arrest, Jean-Jacques Dessalines united mixed-race and black forces to expel the French, declaring independence at Gonaïves on Dec 31, 1803, reclaiming the indigenous Taino name "Haiti".</li>
        <li><strong>Global Geopolitical Shock:</strong> Haiti proved that chattel slavery could be militarily defeated. This terrified slaveholders throughout the Americas, leading to trade embargos and defensive slavery laws.</li>
      </ul>
    `;
  }
  return '';
}

// ----------------------------------------------------
// DETAILED DIAGRAM NODE TEXTS LOOKUP
// ----------------------------------------------------

const diagramNodeDetails = {
  w2_pop_detail: {
    title: {
      tr: "Nüfus ve Patates Etkisi",
      en: "Population & The Potato Effect"
    },
    body: {
      tr: `<h4>Patatesin Demografik Devrimi:</h4>
           <ul>
             <li><strong>Yoğun Kalori:</strong> Patates, diğer tüm gıdalardan daha az alanda daha fazla kalori ve besin sağlar. Sadece patates yiyerek hayatta kalmak mümkündür.</li>
             <li><strong>Nüfus Artışı:</strong> Patatesin Kuzey ve Doğu Avrupa'da yaygınlaşması, 1700-1900 yılları arasında Avrupa nüfusunun 125 milyondan 400 milyona fırlamasının ana nedeni oldu.</li>
             <li><strong>Sanayi Devrimi Yakıtı:</strong> Şehirlerdeki ucuz işçi sınıfının beslenmesi ve dolayısıyla Sanayi Devrimi'nin gerçekleşebilmesi bu kalori bolluğu sayesinde mümkün oldu.</li>
           </ul>`,
      en: `<h4>The Demographic Impact of Potatoes:</h4>
           <ul>
             <li><strong>Dense Nutrition:</strong> Potatoes provide more calories and nutrients per acre than any other staple. It is possible to sustain life solely on potatoes.</li>
             <li><strong>Population Explosion:</strong> Adoption in Northern & Eastern Europe was the primary driver of Europe's population jumping from 125M to 400M between 1700 and 1900.</li>
             <li><strong>Industrial Revolution Catalyst:</strong> The calorie surplus fueled the rapid urbanization and provided cheap food for the growing industrial working class.</li>
           </ul>`
    }
  },
  w3_law1662: {
    title: {
      tr: "Kalıtsal Kölelik Yasası (1662)",
      en: "Hereditary Slavery Law (1662)"
    },
    body: {
      tr: `<h4>Partus Sequitur Ventrem Kararnamesi:</h4>
           <p>Virginia Genel Meclisi, çocukların özgürlük durumunun babaya değil, anneye bağlı olduğunu yasa altına aldı.</p>
           <ul>
             <li><strong>Sürekli Emek Gücü:</strong> Köleleştirilmiş annelerden doğan her çocuk ömür boyu köle sayılmaya başlandı, bu da plantasyon sahiplerine sürekli ve bedava bir iş gücü sağladı.</li>
             <li><strong>Irksal Sınır:</strong> Özgürlük ile kölelik arasındaki çizgi tamamen ırksal hale getirildi.</li>
           </ul>`,
      en: `<h4>Partus Sequitur Ventrem Decree:</h4>
           <p>The Virginia General Assembly ruled that the status of a newborn child follows that of the mother, rather than the father.</p>
           <ul>
             <li><strong>Perpetual Labor:</strong> Every child born to an enslaved woman was born into lifetime slavery, guaranteeing a self-reproducing slave labor force.</li>
             <li><strong>Racial Border:</strong> Solidified the boundary between freedom and enslavement along strictly maternal/racial lines.</li>
           </ul>`
    }
  },
  w3_law1667: {
    title: {
      tr: "Vaftiz ve Kölelik Yasası (1667)",
      en: "Baptism & Slavery Law (1667)"
    },
    body: {
      tr: `<h4>Hristiyanlık ve Kölelik İlişkisi:</h4>
           <p>Yasa, kölelerin Hristiyan vaftizi almasının onları kölelikten azat etmeyeceğini hükme bağladı.</p>
           <ul>
             <li><strong>Hukuki Boşluğun Kapatılması:</strong> Daha önce kölelerin Hristiyan olarak özgür kalabileceği yönündeki yaygın dini inanç ve yasal boşluklar ortadan kaldırıldı.</li>
             <li><strong>Dini Sömürünün Önü Açıldı:</strong> Toprak sahipleri, kölelerini ruhsal olarak Hristiyanlaştırmaya devam ederken mülkiyet haklarını korudular.</li>
           </ul>`,
      en: `<h4>Christianity and Bondage:</h4>
           <p>The law declared that the spiritual transition of baptism into Christianity did not alter the temporal status of a slave as property.</p>
           <ul>
             <li><strong>Closing Loop-holes:</strong> Eliminated the legal argument that a Christian convert could not be held in perpetual bondage.</li>
             <li><strong>Property Security:</strong> Allowed slave owners to convert their slaves to Christianity without losing their property rights.</li>
           </ul>`
    }
  },
  w3_law1680: {
    title: {
      tr: "İsyan Önleme Kanunu (1680)",
      en: "Negro Insurrections Prevention Act (1680)"
    },
    body: {
      tr: `<h4>Güvenlik Kontrolü ve Yasaklar:</h4>
           <p>Bacon İsyanı'ndan sonra siyah ve beyaz işçilerin bir araya gelmesini engellemek için çıkarılan ağır kısıtlamalardır.</p>
           <ul>
             <li><strong>Silah Yasağı:</strong> Köleleştirilmiş siyahilerin herhangi bir silah taşıması tamamen yasaklandı.</li>
             <li><strong>Seyahat Kısıtlaması:</strong> Sahibinden yazılı izin belgesi almayan kölelerin plantasyon dışına çıkması yasaklandı ve kaçanlara ağır cezalar getirildi.</li>
           </ul>`,
      en: `<h4>Security Controls & Bans:</h4>
           <p>Passed in the wake of Bacon's Rebellion to prevent collective gatherings and armed resistance among laborers.</p>
           <ul>
             <li><strong>Weapons Ban:</strong> Enslaved individuals were strictly forbidden from carrying any offensive weapons.</li>
             <li><strong>Movement Restrictions:</strong> Slaves could not leave their owner's plantation without a written pass, instituting early police controls.</li>
           </ul>`
    }
  },
  w3_law1705: {
    title: {
      tr: "Virginia Kölelik Kanunnamesi (1705)",
      en: "Virginia Slave Code (1705)"
    },
    body: {
      tr: `<h4>Sistemik Kodlama ve Mülkiyet Rejimi:</h4>
           <p>Tüm parçalı kölelik kurallarını tek bir büyük yasada toplayarak köleliği resmi mülkiyet (chattel) haline getiren kanundur.</p>
           <ul>
             <li><strong>Taşınır Mal (Chattel):</strong> Köleler tamamen taşınabilir mülk olarak tanımlandı ve alınıp satılabilmeleri kolaylaştırıldı.</li>
             <li><strong>Elit Stratejisi:</strong> Beyaz sözleşmeli işçilere bazı imtiyazlar verilerek siyah kölelerden ayrıştırıldılar, böylece ortak bir alt sınıf isyanı kalıcı olarak engellendi.</li>
           </ul>`,
      en: `<h4>Systemic chattel slavery:</h4>
           <p>Consolidated decades of piecemeal legislation into a single comprehensive legal code, cementing chattel slavery.</p>
           <ul>
             <li><strong>Chattel Property:</strong> Formally defined all non-Christian servants brought into the colony as real estate/chattel property.</li>
             <li><strong>Dividing Labor:</strong> Granted privileges to poor white indentured servants to separate them from black slaves, successfully preventing future united class rebellions.</li>
           </ul>`
    }
  },
  w2_newworld: {
    title: {
      tr: "Yeni Dünya Ekolojik Varlıkları",
      en: "New World Ecological Wealth"
    },
    body: {
      tr: `<h4>Yeni Dünya Ekolojik Devrimi:</h4>
           <ul>
             <li><strong>Patates:</strong> İrlanda'dan Rusya'ya kadar Kuzey ve Doğu Avrupa köylü sınıfının kalori kaynağı oldu. Yer altında yetiştiği için talancı ordulardan saklanabildi ve savaş dönemlerinde nüfusu korudu.</li>
             <li><strong>Mısır:</strong> Çok az iş gücü gerektirmesi ve dayanıklılığı sayesinde hızla Çin'e yayılarak büyük bir nüfus artışını tetikledi.</li>
             <li><strong>Tütün:</strong> John Rolfe tarafından Virginia sömürgesine getirilmesiyle buranın tek mahsullü (monokültür) zenginlik kaynağı haline geldi.</li>
             <li><strong>Kinin (Sıtma İlacı):</strong> And Dağları'ndaki kınakına ağacının kabuğundan elde edildi. Avrupalıların sıtmaya karşı hayatta kalmasını sağlayarak Afrika'nın sömürgeleştirilmesinde hayati bir imparatorluk aracı oldu.</li>
             <li><strong>Frengi (Syphilis):</strong> Kolomb'un mürettebatı tarafından Amerika'dan Avrupa'ya (Napoli salgınıyla) taşınan ve Avrupa'da büyük bir demografik etki yapan tek büyük hastalıktır.</li>
           </ul>`,
      en: `<h4>New World Ecological Revolution:</h4>
           <ul>
             <li><strong>Potato:</strong> Became the staple food base for the peasantry across Northern and Eastern Europe (Ireland, Germany, Poland, Russia). Because it grows underground, it could be concealed from pillaging armies.</li>
             <li><strong>Maize (Corn):</strong> Extremely resistant and required little labor. Spread rapidly to China, sparking massive population growth.</li>
             <li><strong>Tobacco:</strong> Introduced by John Rolfe to Virginia, establishing a highly lucrative monoculture.</li>
             <li><strong>Quinine:</strong> Extracted from the cinchona bark in the Andes. Protected Europeans from malaria, serving as a critical imperial tool for colonizing tropical Africa.</li>
             <li><strong>Syphilis:</strong> The only major disease brought from the New World back to Europe (Naples epidemic of 1495), resulting in five years of rapid European transmission.</li>
           </ul>`
    }
  },
  w2_oldworld: {
    title: {
      tr: "Eski Dünya İthalat ve Patojenleri",
      en: "Old World Imports & Pathogens"
    },
    body: {
      tr: `<h4>Eski Dünya'nın Ekolojik ve Biyolojik Etkisi:</h4>
           <ul>
             <li><strong>Şeker Kamışı:</strong> Karayipler ve Brezilya plantasyon ekonomisinin ana motoru haline geldi. Bu şeker patlaması, transatlantik köle ticaretinin başlamasının asıl nedeniydi.</li>
             <li><strong>Evcil Hayvanlar:</strong> At, sığır, koyun ve domuz Amerika kıtasına getirildi. Bu durum yerlilerin tarım ve ulaşım biçimini değiştirse de, ölümcül patojenleri de beraberinde taşıdı.</li>
             <li><strong>Ölümcül Patojenler:</strong> Çiçek hastalığı, kızamık, tifüs ve kolera, bağışıklığı olmayan yerli nüfusunun %80-95'ini 150 yıl içinde yok etti. Bu durum insanlık tarihindeki en büyük demografik felakettir.</li>
             <li><strong>Buğday ve Pirinç:</strong> Amerika topraklarında geniş tarım alanları oluşturdu.</li>
             <li><strong>Diller ve Din:</strong> Avrupalı dilleri ve Hristiyanlık sömürge yollarıyla yerli kültürlere dayatıldı.</li>
           </ul>`,
      en: `<h4>Old World Ecological and Biological Impact:</h4>
           <ul>
             <li><strong>Sugar Cane:</strong> The chief driver of the Caribbean and Brazilian plantation economies. The sugar boom directly triggered the transatlantically forced labor migration.</li>
             <li><strong>Livestock:</strong> Horses, cattle, sheep, and pigs were introduced to the Americas. This transformed Native agriculture and mobility but also hosted deadly viruses.</li>
             <li><strong>Deadly Diseases:</strong> Smallpox, measles, typhus, and cholera devastated the Native American population (which lacked immunity from large domestic animals), wiping out 80-95% of the population within 150 years.</li>
             <li><strong>Wheat & Rice:</strong> Established vast agricultural zones across the Americas.</li>
             <li><strong>Language & Religion:</strong> European languages and Christianity were systematically introduced through administrative structures.</li>
           </ul>`
    }
  },
  w3_step1: {
    title: {
      tr: "1. Toprak Tekelleşmesi (Virginia)",
      en: "1. Land Consolidation (Virginia)"
    },
    body: {
      tr: `<h4>Toprak Tekelleşmesi ve İlk Dönem Sömürge Sınıfı:</h4>
           <p>17. yüzyılın başlarında Virginia'da, John Rolfe'un tütün tarımını başlatmasıyla büyük bir tütün patlaması yaşandı. Tütün, sömürgecilerin en büyük gelir kaynağı oldu. Zengin plantasyon sahipleri, nehir kıyısındaki en verimli toprakları kapatarak tekelleştirdiler. Bu süreç, yeni gelen beyaz göçmenler ve özgürlüğünü kazanan eski sözleşmeli işçiler için işlenebilir serbest toprak kalmamasına yol açtı.</p>`,
      en: `<h4>Land Consolidation and Colonial Class Structure:</h4>
           <p>In the early 17th century, the tobacco boom initiated by John Rolfe transformed Virginia into a highly profitable crop colony. Wealthy planters consolidated all fertile riverfront land, leading to land scarcity. Newly arrived immigrants and freed indentured servants found themselves landless and disenfranchised, laying the groundwork for severe class tensions.</p>`
    }
  },
  w3_step2: {
    title: {
      tr: "2. Memnunsuz Topraksız İşçiler",
      en: "2. Discontented Landless Servants"
    },
    body: {
      tr: `<h4>Sözleşmeli İşçilik ve Ortak Memnuniyetsizlik:</h4>
           <p>O dönemde Virginia'da çalışanların çoğunluğunu beyaz ve siyah "sözleşmeli işçiler" (indentured servants) oluşturuyordu. Bu işçiler, Amerika'ya geçiş ücretleri karşılığında 5-7 yıl boyunca ücretsiz çalışmayı kabul etmişlerdi. Süreleri dolup özgür kaldıklarında, toprak bulamadıkları için hayal kırıklığına uğradılar. Hem beyaz hem de siyah işçiler, vergilerin yüksekliğinden ve elitlerin korumasız sınır politikalarından şikayetçiydi; bu da ortak bir sınıf bilinci oluşturdu.</p>`,
      en: `<h4>Indentured Servitudes and Class Solidarity:</h4>
           <p>Most laborers in Virginia at this time were indentured servants (both white and black) who worked 5 to 7 years in exchange for passage. Once freed, they found themselves landless, heavily taxed, and ignored by the colonial elite. This shared grievance formed a cross-racial class solidarity between poor whites and blacks.</p>`
    }
  },
  w3_step3: {
    title: {
      tr: "3. Bacon İsyanı (1676)",
      en: "3. Bacon's Rebellion (1676)"
    },
    body: {
      tr: `<h4>Nathaniel Bacon Liderliğindeki Ortak Ayaklanma:</h4>
           <p>1676'da Nathaniel Bacon adlı bir mülk sahibi, topraksız beyaz ve siyah işçileri bir araya getirerek sömürge yönetimine ve Vali Berkeley'e karşı büyük bir isyan başlattı. İsyancılar, sömürge başkenti Jamestown'ı yaktılar ve elitlerin karargahlarını hedef aldılar. Bu ayaklanma, sömürgeci egemen sınıfı dehşete düşürdü. Zira mülksüz beyaz ve siyah yoksulların silahlı ittifakı, elitlerin gücünü doğrudan tehdit ediyordu.</p>`,
      en: `<h4>The Armed Cross-Racial Rebellion:</h4>
           <p>In 1676, Nathaniel Bacon organized landless white and black former servants into an armed rebellion against Governor Berkeley and the planter elite. The rebels successfully burned down the colonial capital of Jamestown. This rebellion terrified the ruling class because it proved that poor whites and blacks could unite as a single class to overthrow elite rule.</p>`
    }
  },
  w3_step4: {
    title: {
      tr: "4. Elitlerin Böl ve Yönet Hamlesi",
      en: "4. Elite Divide-and-Rule Laws"
    },
    body: {
      tr: `<h4>Sınıf Ayrımından Irk Ayrımına Geçiş:</h4>
           <p>İsyan bastırıldıktan sonra sömürge meclisi ve plantasyon sahipleri, fakirlerin bir daha ortak hareket etmesini önlemek amacıyla yasal düzenlemelere gitti. Sınıfsal ortaklığı kırmak için "ırk" kavramı icat edildi. Beyaz yoksullara oy hakkı, küçük toprak hakları ve kamusal korumalar verilerek sistemle bütünleşmeleri sağlandı; siyahlar ise tamamen sistem dışına itildi.</p>`,
      en: `<h4>Creating the Ideology of Race:</h4>
           <p>After suppressing the rebellion, the planter elite systematically replaced class solidarity with racial division. They passed laws giving poor white men legal privileges, voting rights, and social superiority, while stripping black residents of their basic rights. This co-opted poor whites into defending the elite-ruled system.</p>`
    }
  },
  w3_step5: {
    title: {
      tr: "5. Kalıtsal Irksal Kölelik Yasaları",
      en: "5. Hereditary Lifetime Racial Slavery"
    },
    body: {
      tr: `<h4>Kalıcı Kölelik Yasalarının Çıkarılması:</h4>
           <p>1680'ler ile 1705 Virginia Kölelik Yasaları (Slave Codes) arasında meclis, siyahların durumunu tamamen "ömür boyu ve kalıtsal kölelik" olarak tanımladı. Hristiyanlığa geçişin köleliği kaldırmayacağı kabul edildi, annenin statüsünün çocuğa geçeceği karara bağlandı (partus sequitur ventrem) ve siyahların silah taşıması yasaklandı. Böylece, sınıf çatışması ırksal kast sistemiyle kontrol altına alındı.</p>`,
      en: `<h4>Systematizing Lifelong Chattel Slavery:</h4>
           <p>Between 1680 and the Virginia Slave Codes of 1705, the assembly enacted permanent racial slavery. Laws established that conversion to Christianity did not grant freedom, the child's status followed the mother (partus sequitur ventrem), and black people were forbidden from owning weapons. Class division was successfully managed by locking black people into lifelong chattel slavery.</p>`
    }
  },
  w4_reps: {
    title: {
      tr: "Temsilciler Meclisi (Virginia Planı)",
      en: "House of Representatives (Virginia Plan)"
    },
    body: {
      tr: `<h4>Nüfusa Dayalı Temsiliyet İlkesi:</h4>
           <p>Federal Konvansiyon'da Virginia gibi büyük eyaletlerin savunduğu Virginia Planı, yasama organındaki temsiliyetin doğrudan eyaletlerin nüfusu oranında olmasını talep ediyordu. Bu yapı, demokratik olarak kalabalık eyaletlerin federal hükümette daha fazla oy gücüne sahip olmasını savunuyordu. Bugün Temsilciler Meclisi, bu ilkeye göre çalışır; her eyalet nüfusuna göre temsilci gönderir.</p>`,
      en: `<h4>Proportional Representation Principle:</h4>
           <p>Supported by large states (e.g. Virginia), the Virginia Plan argued that legislative representation should be based directly on each state's population. This gave populous states greater federal legislative power. Today, the House of Representatives reflects this plan, distributing seats based on decennial census data.</p>`
    }
  },
  w4_senate: {
    title: {
      tr: "Senato (New Jersey Planı)",
      en: "Senate (New Jersey Plan)"
    },
    body: {
      tr: `<h4>Eşit Temsiliyet İlkesi:</h4>
           <p>New Jersey gibi küçük eyaletler, nüfus esaslı temsilin kendilerini büyük eyaletlerin boyunduruğu altında bırakacağını savunarak New Jersey Planı'nı önerdiler. Buna göre, nüfusu ne olursa olsun her eyaletin federal mecliste eşit oya sahip olması gerekiyordu. Bugün Senato'da her eyalet, nüfusuna bakılmaksızın (California veya Wyoming fark etmeksizin) eşit olarak tam 2 senatörle temsil edilir.</p>`,
      en: `<h4>Equal Representation Principle:</h4>
           <p>Defended by smaller states (e.g. New Jersey) fearing domination by large states, the New Jersey Plan proposed that each state retain equal voting power regardless of population. Today, the U.S. Senate embodies this compromise, granting exactly two senators to every state, from California to Wyoming.</p>`
    }
  },
  w4_congress: {
    title: {
      tr: "Kongre (İki Kanatlı Meclis)",
      en: "Congress (Bicameral Compromise)"
    },
    body: {
      tr: `<h4>Büyük Uzlaşma (Connecticut Uzlaşması):</h4>
           <p>Roger Sherman öncülüğünde hazırlanan Connecticut Uzlaşması, büyük ve küçük eyaletlerin tezlerini birleştirerek iki kanatlı (bicameral) bir Kongre yapısı kurdu. Yasalar ancak hem nüfus esaslı Temsilciler Meclisi'nden hem de eyalet eşitliği esaslı Senato'dan onay alırsa yürürlüğe girebiliyordu. Bu, federal sistemin kalbini oluşturur.</p>`,
      en: `<h4>The Connecticut Compromise of 1787:</h4>
           <p>Proposed by Roger Sherman, this compromise merged the Virginia and New Jersey plans into a bicameral Congress. To pass, a bill must obtain approval from both the House (proportional representation) and the Senate (equal representation), balancing national and federal sovereignty.</p>`
    }
  },
  w4_compromise: {
    title: {
      tr: "Güçler Ayrılığı (Checks & Balances)",
      en: "Separation of Powers (Checks & Balances)"
    },
    body: {
      tr: `<h4>Anayasal Denge ve Denetleme Mekanizması:</h4>
           <p>Amerika Birleşik Devletleri Anayasası, gücün tek bir organda toplanmasını önlemek amacıyla yasama (Kongre), yürütme (Başkan) ve yargı (Yüksek Mahkeme) güçlerini kesin olarak ayırmıştır. Her bir organ, diğerinin yetkilerini sınırlandırabilir (örneğin Başkanın yasaları veto etmesi, Senatonun atamaları onaylaması, Yüksek Mahkemenin yasaları anayasaya aykırı bulması). Bu yapı, istikrarlı bir cumhuriyetin temel koruyucusudur.</p>`,
      en: `<h4>Constitutional Checks and Balances:</h4>
           <p>The U.S. Constitution separated federal power into three independent branches: Legislative (Congress), Executive (President), and Judicial (Supreme Court). Each branch possesses explicit checks over the others (e.g. presidential veto, senatorial confirmation, judicial review) to prevent autocracy.</p>`
    }
  },
  w5_clergy: {
    title: {
      tr: "I. Zümre: Ruhban Sınıfı (Clergy)",
      en: "I. Estate: Clergy"
    },
    body: {
      tr: `<h4>Katolik Kilisesi ve Ruhban Sınıfı:</h4>
           <p>Devrim öncesi Fransa'da (Eski Rejim) Katolik Kilisesi mensupları nüfusun yalnızca %0.5'ini oluşturuyordu. Ancak ülke topraklarının yaklaşık %10'unu elinde bulunduruyor ve köylülerden her yıl 'öşür' (tithe - onda bir vergi) topluyorlardı. Kilise, devlet vergilerinden tamamen muaf kılınmıştı; sadece krala belirli dönemlerde sembolik bir bağış (don gratuit) yapardı. Bu ayrıcalıklı konum, halkın büyük tepkisini çekiyordu.</p>`,
      en: `<h4>The Privileged First Estate:</h4>
           <p>Representing only 0.5% of the population, the clergy owned roughly 10% of French land and extracted annual tithes (10% agricultural tax) from the peasantry. The Church paid no direct taxes, contributing only a periodic voluntary gift (don gratuit) to the Crown, fueling widespread resentment.</p>`
    }
  },
  w5_nobility: {
    title: {
      tr: "II. Zümre: Soylular Sınıfı (Nobility)",
      en: "II. Estate: Nobility"
    },
    body: {
      tr: `<h4>Aristokrasi ve Feodal Ayrıcalıklar:</h4>
           <p>Soylular, Fransa nüfusunun yaklaşık %1.5'ini temsil ediyordu ancak tarım arazilerinin %20-25'ini kontrol etmekteydiler. Ordu, kilise ve yargıdaki tüm üst düzey makamlar soylulara ayrılmıştı. En önemlisi, soylular doğrudan devlet vergilerinden (özellikle toprak vergisi olan taille'den) muaftı ve köylüler üzerinde feodal yargılama ve vergilendirme haklarına sahiptiler.</p>`,
      en: `<h4>The Feudal Second Estate:</h4>
           <p>Accounting for 1.5% of the population, the nobility owned 20-25% of the land. They held a virtual monopoly on high-ranking military, judicial, and ecclesiastical offices, and enjoyed complete exemption from the primary land tax (taille) while retaining local feudal dues.</p>`
    }
  },
  w5_third: {
    title: {
      tr: "III. Zümre: Halk Sınıfı (Third Estate)",
      en: "III. Estate: Third Estate"
    },
    body: {
      tr: `<h4>Vergi Yükünü Sırtlayan %98:</h4>
           <p>Halk zümresi, Fransa nüfusunun %98'ini kapsıyordu ve kendi içinde büyük farklılıklar barındırıyordu: zengin burjuvalar, esnaflar, şehir işçileri ve en alttaki yoksul köylüler. Ayrıcalıklı zümrelerin aksine, devletin tüm vergi yükünü (taille, gabelle - tuz vergisi, corvée - zorunlu ücretsiz çalışma) bu tabaka ödüyordu. Siyasi hakları bulunmayan bu zümrenin temsilcileri, Mayıs 1789'da kendilerini Ulusal Meclis ilan ederek devrimi başlattılar.</p>`,
      en: `<h4>The Burden-Bearing 98%:</h4>
           <p>Comprising 98% of the population, the Third Estate was highly diverse, including wealthy merchants (bourgeoisie), urban workers, and impoverished peasants. They bore the entire tax burden of the kingdom (taille, gabelle, corvée) while holding zero political power, initiating the revolution by forming the National Assembly in May 1789.</p>`
    }
  },
  w6_whites: {
    title: {
      tr: "Büyük Beyazlar (Grand Blancs)",
      en: "Big Whites (Grand Blancs)"
    },
    body: {
      tr: `<h4>Saint-Domingue Plantasyon Sahipleri:</h4>
           <p>Saint-Domingue (Haiti) sömürgesinin en üst tabakasını oluşturan Fransız plantasyon sahipleri, zengin tüccarlar ve sömürge bürokratlarıdır. Köle emeğine dayalı şeker ve kahve plantasyonlarının sahipleriydiler. Fransız Devrimi başladığında, insan hakları ilkelerine karşı çıktılar; köleliğin aynen devam etmesini ve sömürgede Fransa'dan bağımsız bir özerklik kurulmasını talep ettiler.</p>`,
      en: `<h4>Colonial Ruling Class:</h4>
           <p>The wealthy white elite (planters and royal officials) who owned the sugar and coffee plantations. Upon the start of the French Revolution, they opposed the Declaration of the Rights of Man for slaves, demanding colonial autonomy to protect slavery from Parisian legislation.</p>`
    }
  },
  w6_mulattoes: {
    title: {
      tr: "Özgür Melezler (Gens de Couleur)",
      en: "Mulattoes (Gens de Couleur)"
    },
    body: {
      tr: `<h4>Mülk Sahibi Özgür Melezler:</h4>
           <p>Saint-Domingue'de beyaz babalar ile siyah annelerden doğan, hukuken özgür olan melez nüfustur. Birçoğu eğitimliydi, plantasyon ve köle sahibiydi. Ancak soyluluk ve devlet dairelerine girmeleri yasaktı. Fransız Devrimi'nin 'Eşitlik' ilkesini kendilerine uygulayarak beyazlarla tam medeni ve siyasi eşitlik talep ettiler. Bu talep reddedilince, sömürge yönetimine karşı isyan ettiler.</p>`,
      en: `<h4>Free People of Color:</h4>
           <p>Educated, wealthy mixed-race colonists who owned land and slaves but faced racial discrimination. They seized on the French Revolution to demand civic equality under the Rights of Man, eventually taking up arms when their demands were rejected by white planters.</p>`
    }
  },
  w6_slaves: {
    title: {
      tr: "Siyah Köleler (Black Slaves)",
      en: "Black Enslaved Population"
    },
    body: {
      tr: `<h4>Köleleştirilmiş Nüfusun Toplumsal Devrimi:</h4>
           <p>Nüfusu 500.000'i bulan, sömürgedeki en ezilen tabakadır (toplam nüfusun %90'ı). Ağır plantasyon şartlarında, Fransızların Code Noir (Kara Yasa) ile getirdiği şiddet ve baskı altında çalışıyorlardı. Ağustos 1791'de Dutty Boukman'ın voodoo töreniyle başlattığı büyük isyan, plantasyonları yakıp yıkarak Toussaint Louverture liderliğindeki Haiti Devrimi'ne dönüştü ve tarihteki ilk başarılı köle devrimiyle sonuçlandı.</p>`,
      en: `<h4>Enslaved Majority:</h4>
           <p>Consisted of 500,000 enslaved Africans (90% of the population) enduring brutal plantation labor. In August 1791, initiated by Dutty Boukman, they launched a massive insurrection. Led by Toussaint Louverture, this evolved into the first and only successful slave revolution in global history.</p>`
    }
  },
  commodity_corn: {
    title: {
      tr: "Mısır (Maize / Corn)",
      en: "Maize (Corn)"
    },
    body: {
      tr: `<h4>Mısırın Küreselleşmesi ve Beslenme Devrimi:</h4>
           <p>Amerika kıtasına özgü olan mısır, Kolomb Değişimi ile tüm dünyaya yayıldı. Avrupa, Asya ve Afrika'ya taşınan mısır, zorlu iklim koşullarında yetişebilmesi ve yüksek kalori değeri sayesinde küresel nüfus patlamasında başrolü oynadı. Çin'de Qing Hanedanlığı döneminde marjinal arazilerin tarıma açılmasını sağladı, Avrupa'da ise köylülerin kıtlıktan korunmasına yardımcı oldu.</p>`,
      en: `<h4>Global Expansion of Maize & Dietary Revolution:</h4>
           <p>Indigenous to the Americas, maize spread globally via the Columbian Exchange. Highly adaptable and calorie-dense, it allowed marginal lands in Europe, Asia, and Africa to be cultivated, catalyzing a massive global demographic expansion, particularly under the Qing dynasty in China.</p>`
    }
  },
  commodity_tobacco: {
    title: {
      tr: "Tütün (Tobacco)",
      en: "Tobacco"
    },
    body: {
      tr: `<h4>Sömürgeci Ekonominin Lokomotifi Tütün:</h4>
           <p>Yerli halklar tarafından dini ve tıbbi amaçlarla kullanılan tütün, Avrupalılar için hızla bağımlılık yaratan ticari bir meta haline geldi. Virginia ve Maryland sömürgelerinde tütün tarımı, İngiliz İmparatorluğu'na devasa zenginlik sağladı. Ancak tütün toprağı hızla tükettiği için sömürgecileri sürekli yeni yerli topraklarını işgal etmeye ve iş gücü ihtiyacı için köleliğe yöneltti.</p>`,
      en: `<h4>Engine of Colonial Commerce:</h4>
           <p>Initially used in indigenous rituals, tobacco became a global addiction and the cash-crop backbone of British Virginia and Maryland. Its high soil nutrient depletion drove constant westward expansion into Native lands and stimulated an insatiable demand for enslaved labor.</p>`
    }
  },
  commodity_sugar: {
    title: {
      tr: "Şeker Kamışı (Sugar Cane)",
      en: "Sugar Cane"
    },
    body: {
      tr: `<h4>Beyaz Altın ve Transatlantik Köle Ticareti:</h4>
           <p>Asya kökenli olan şeker kamışı, Akdeniz üzerinden Amerika'ya getirildi. Karayipler ve Brezilya'da kurulan şeker plantasyonları ("şeker fabrikaları"), tarihin en karlı ve en vahşi tarım rejimini oluşturdu. Şeker üretimi aşırı iş gücü gerektirdiğinden ve ömür beklentisini düşürdüğünden, Afrika'dan milyonlarca insanın zorla kaçırılarak köleleştirilmesinin temel motoru oldu.</p>`,
      en: `<h4>White Gold & The Slave Trade:</h4>
           <p>Originally from Asia, sugarcane flourished in Brazil and the Caribbean, generating immense wealth for European empires. The brutal, labor-intensive cultivation and processing of sugar directly powered the transatlantic slave trade, driving millions of captive Africans to plantations where lifespans were notoriously short.</p>`
    }
  },
  commodity_cotton: {
    title: {
      tr: "Pamuk (Cotton)",
      en: "Cotton"
    },
    body: {
      tr: `<h4>Sanayi Devrimi ve Pamuk Krallığı:</h4>
           <p>Pamuk, Sanayi Devrimi'nin tekstil merkezlerini besleyen en önemli ham maddeydi. İngiltere'deki dokuma tezgahlarının talebi, ABD'nin güney eyaletlerinde "Pamuk Krallığı" (Cotton Kingdom) adıyla devasa bir plantasyon imparatorluğu kurdu. Bu ham madde akışı, sanayileşmiş Kuzey ile köleci Güney'i birbirine bağladı ve köleliğin ekonomik olarak vazgeçilmez kalmasını sağladı.</p>`,
      en: `<h4>Cotton Kingdom & Industrialization:</h4>
      <p>Cotton served as the fundamental raw material fueling the factories of the Industrial Revolution. Skyrocketing British demand established a vast "Cotton Kingdom" in the American South, binding Northern textile mills to Southern slave labor and reinforcing the economic necessity of human bondage.</p>`
    }
  },
  commodity_cotton_gin: {
    title: {
      tr: "Çırçır Makinesi (Cotton Gin)",
      en: "Eli Whitney's Cotton Gin (1793)"
    },
    body: {
      tr: `<h4>Çırçır Makinesi ve Köleliğin Kalıcılaşması:</h4>
           <p>Eli Whitney tarafından 1793 yılında icat edilen çırçır makinesi, pamuk liflerini çekirdeğinden ayıran mekanik bir aygıttır. Elle yapılan temizliği 50 kat hızlandıran bu makine, pamuk üretimini son derece karlı hale getirdi. Ancak beklentilerin aksine, çırçır makinesi iş gücü ihtiyacını azaltmak yerine pamuk ekim alanlarını patlatarak köleliğin güneyde derinleşmesine ve milyonlarca kölenin iç göçle güneye satılmasına neden oldu.</p>`,
      en: `<h4>Mechanization of Cotton & Slavery Expansion:</h4>
           <p>Invented by Eli Whitney in 1793, the cotton gin mechanized the tedious process of separating seeds from short-staple cotton fiber, multiplying daily output fiftyfold. Instead of reducing the need for labor, it made cotton highly profitable, triggering a massive territorial expansion of plantations and driving the forced migration of over one million enslaved people to the Deep South.</p>`
    }
  },
  commodity_weapons: {
    title: {
      tr: "Ateşli Silahlar (Guns / Muskets)",
      en: "Guns and Muskets"
    },
    body: {
      tr: `<h4>Silah-Köle Sarmalı (Gun-Slave Cycle):</h4>
           <p>Avrupalı tüccarlar, Batı Afrika kıyılarındaki krallıklara barut ve tüfek satarak karşılığında köle talep ettiler. Silah alan krallıklar, komşu topluluklara karşı askeri üstünlük kurup daha fazla savaş esiri (köle) ele geçirdiler. Bu döngü, Batı Afrika'da militarizasyonu artırdı, sömürgeci güçlere bağımlılık yarattı ve tüm kıtada büyük bir yıkıma neden oldu.</p>`,
      en: `<h4>The Gun-Slave Cycle:</h4>
           <p>European traders bartered muskets and gunpowder with West African coastal states in exchange for captives. Access to firearms granted these kingdoms military dominance over their neighbors, encouraging more raids to capture slaves. This cycle destabilized West African societies and reinforced reliance on European military imports.</p>`
    }
  },
  commodity_tea_crate: {
    title: {
      tr: "Boston Çay Sandığı (Tea Crate)",
      en: "Boston Tea Crate"
    },
    body: {
      tr: `<h4>Boston Çay Partisi ve Temsiliyetsiz Vergilendirme:</h4>
           <p>1773 Çay Yasası, sömürgecilerin tepkisine yol açtı. İngiliz Doğu Hindistan Şirketi'ne çay tekel hakkı verilmesi üzerine, Boston'daki sömürgeciler yerli kılığına girerek gemilerdeki 342 sandık çayı denize döktüler. Bu eylem, Amerikan Devrimi'ni tetikleyen en büyük sivil itaatsizlik oldu.</p>`,
      en: `<h4>Boston Tea Party & Taxation Without Representation:</h4>
           <p>The Tea Act of 1773 granted a monopoly to the British East India Company. In protest, colonists disguised as Mohawks dumped 342 chests of tea into Boston Harbor, provoking the British Intolerable Acts and accelerating the path to revolution.</p>`
    }
  },
  commodity_stamp: {
    title: {
      tr: "Pul Yasası Damgası (Stamp Act)",
      en: "Stamp Act Seal"
    },
    body: {
      tr: `<h4>Pul Kanunu ve Temsiliyet İlkesi:</h4>
           <p>1765 Pul Kanunu, sömürgelerdeki tüm basılı kağıtlar, gazeteler ve yasal belgeler üzerine bir vergi damgası yapıştırılmasını zorunlu kıldı. İngiliz Parlamentosu'nda hiç temsilcisi bulunmayan sömürgeciler, 'No taxation without representation' (Temsiliyetsiz vergilendirme olamaz) sloganıyla isyanı başlattılar.</p>`,
      en: `<h4>The Stamp Act Crisis (1765):</h4>
           <p>This act imposed a direct tax on all paper documents in the colonies. Lacking representation in Parliament, colonists resisted, establishing the foundational principle: 'No taxation without representation.'</p>`
    }
  },
  commodity_musket: {
    title: {
      tr: "Flintlock Misket Tüfeği (Musket)",
      en: "Flintlock Musket"
    },
    body: {
      tr: `<h4>Devrim Savaşının Askeri Cephesi:</h4>
           <p>Flintlock (çakmaktaşlı) misket tüfekleri, Amerikan Bağımsızlık Savaşı boyunca hem Kıta Ordusu hem de İngiliz askerleri tarafından kullanılan temel silahtı. Savaşın gidişatını, sömürgelere yapılan Fransız silah ve mühimmat yardımları belirledi.</p>`,
      en: `<h4>Weapons of Independence:</h4>
           <p>The flintlock musket was the standard infantry weapon of both the Continental Army and British forces. French military shipments of muskets and gunpowder to the colonies proved vital for the American victory.</p>`
    }
  },
  commodity_guillotine: {
    title: {
      tr: "Giyotin (Guillotine)",
      en: "The Guillotine"
    },
    body: {
      tr: `<h4>Giyotin ve Terör Dönemi:</h4>
           <p>Dr. Joseph-Ignace Guillotin tarafından eşitlikçi bir idam yöntemi olarak önerilen giyotin, Fransız Devrimi'nin en dehşet verici simgesi haline geldi. Terör Dönemi (1793-1794) boyunca Kral XVI. Louis, Kraliçe Marie Antoinette ve binlerce devrim karşıtı giyotinle idam edildi.</p>`,
      en: `<h4>Symbol of the Reign of Terror:</h4>
           <p>Introduced as an egalitarian method of execution, the guillotine became the ultimate symbol of revolutionary justice. During the Reign of Terror, it claimed King Louis XVI, Marie Antoinette, and over 17,000 victims.</p>`
    }
  },
  commodity_bastille: {
    title: {
      tr: "Bastille Hapishanesi (Bastille Fortress)",
      en: "Bastille Fortress"
    },
    body: {
      tr: `<h4>Bastille Baskını ve Mutlakiyetin Çöküşü:</h4>
           <p>14 Temmuz 1789'da Paris halkı, kraliyet cephaneliği ve hapishanesi olan Bastille Kalesi'ne saldırdı. Kalenin düşmesi, mutlak monarşinin baskıcı gücünün yıkılışını simgeledi ve Fransız Devrimi'nin fiilen halk tabanına yayılmasını başlattı.</p>`,
      en: `<h4>Storming of the Bastille (July 14, 1789):</h4>
           <p>A Parisian mob stormed the medieval fortress and prison, seeking gunpowder and protesting royal despotism. Its fall symbolized the collapse of absolute monarchy, triggering nationwide popular uprisings.</p>`
    }
  },
  commodity_cockade: {
    title: {
      tr: "Devrim Kokartı (Tricolor Cockade)",
      en: "Tricolor Cockade"
    },
    body: {
      tr: `<h4>Eşitlik ve Özgürlüğün Simgesi:</h4>
           <p>Paris'in renkleri olan mavi ve kırmızı ile kraliyet rengi olan beyazın birleşmesiyle oluşan üç renkli (tricolor) rozet, devrimci vatanseverliğin temel simgesiydi. Kokart taşımak, cumhuriyete sadakatin zorunlu bir işareti haline gelmişti.</p>`,
      en: `<h4>Badge of the Republic:</h4>
           <p>Blending the royal white with the Parisian red and blue, the tricolor cockade became the ubiquitous symbol of French revolutionary patriotism and civic loyalty.</p>`
    }
  },
  commodity_sugar_vat: {
    title: {
      tr: "Şeker Kaynatma Kazanı (Sugar Vat)",
      en: "Sugar Boiling Vat"
    },
    body: {
      tr: `<h4>Plantasyon İşçiliğinin Vahşeti:</h4>
           <p>Saint-Domingue'de köleler, şeker kamışı sularını devasa metal kazanlarda aşırı sıcak altında kaynatırlardı. Bu kazanlarda çalışmak uzuv kayıplarına ve ölümcül yanıklara yol açardı. Şeker kazanı, köle emeğinin sömürülmesinin en çıplak göstergesidir.</p>`,
      en: `<h4>Brutality of Sugarcane Refining:</h4>
           <p>Enslaved laborers boiled raw cane juice in massive, boiling copper vats under extreme heat. Accidents frequently led to severe burns and amputations, making the boiling house the most dangerous place on the plantation.</p>`
    }
  },
  commodity_machete: {
    title: {
      tr: "Pala (Machete)",
      en: "Sugar Machete"
    },
    body: {
      tr: `<h4>Tarım Aracından Devrim Silahına:</h4>
           <p>Normalde şeker kamışı hasadı için kullanılan geniş palalar, Ağustos 1791'de köle isyanı başladığında hızla sömürge ordusuna karşı etkili birer devrim silahına dönüştü. Kurtuluş mücadelesinin en önemli sembollerinden biridir.</p>`,
      en: `<h4>Tool of Labor and Revolt:</h4>
           <p>Used daily to harvest sugarcane, the heavy steel machete was instantly repurposed into a lethal weapon of liberation when the enslaved population rose in rebellion in August 1791.</p>`
    }
  },
  commodity_voodoo_drum: {
    title: {
      tr: "Voodoo Tören Davulu (Voodoo Drum)",
      en: "Voodoo Ceremonial Drum"
    },
    body: {
      tr: `<h4>Bois Caïman Töreni ve İsyanın Başlangıcı:</h4>
           <p>Ağustos 1791'de Dutty Boukman liderliğinde yapılan Bois Caïman voodoo töreninde davullar çalındı, antlar içildi. Voodoo inancı, farklı kabilelerden gelen köleleri birleştiren ortak bir kültürel ve manevi zemin sağlayarak devrimin fitilini ateşledi.</p>`,
      en: `<h4>The Bois Caïman Ceremony (1791):</h4>
           <p>Voodoo drums accompanied the historic Bois Caïman religious ceremony led by Dutty Boukman. Voodoo provided a common spiritual, language, and cultural bond that united diverse enslaved Africans to launch the revolution.</p>`
    }
  }
};

// Resizable Panel Divider Logic
function initPanelResizer() {
  const resizer = document.getElementById('drag-resizer');
  const panel = document.querySelector('.workspace-panel');
  if (!resizer || !panel) return;

  let isDragging = false;
  let resizeAnimationFrame = null;

  resizer.addEventListener('mousedown', (e) => {
    isDragging = true;
    resizer.classList.add('dragging');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const newWidth = window.innerWidth - e.clientX; // Calculated from the right boundary!
    if (newWidth >= 320 && newWidth <= 650) {
      panel.style.width = `${newWidth}px`;
      if (map) {
        if (!resizeAnimationFrame) {
          resizeAnimationFrame = requestAnimationFrame(() => {
            safeInvalidateSize(map);
            resizeAnimationFrame = null;
          });
        }
      }
    }
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      resizer.classList.remove('dragging');
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      if (resizeAnimationFrame) {
        cancelAnimationFrame(resizeAnimationFrame);
        resizeAnimationFrame = null;
      }
      safeInvalidateSize(map);
    }
  });

  // Mobile/Touch Support
  resizer.addEventListener('touchstart', (e) => {
    isDragging = true;
    resizer.classList.add('dragging');
  });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const newWidth = window.innerWidth - touch.clientX; // Calculated from the right boundary!
    if (newWidth >= 320 && newWidth <= 650) {
      panel.style.width = `${newWidth}px`;
      if (map) {
        if (!resizeAnimationFrame) {
          resizeAnimationFrame = requestAnimationFrame(() => {
            safeInvalidateSize(map);
            resizeAnimationFrame = null;
          });
        }
      }
    }
  });

  document.addEventListener('touchend', () => {
    if (isDragging) {
      isDragging = false;
      resizer.classList.remove('dragging');
      if (resizeAnimationFrame) {
        cancelAnimationFrame(resizeAnimationFrame);
        resizeAnimationFrame = null;
      }
      safeInvalidateSize(map);
    }
  });
}

// Detailed Slide-Specific Academic Analysis Modal
function showDetailedSlideAnalysis() {
  const slide = learningData.weeks[state.week].slides[state.slideIndex];
  if (!slide) return;
  
  const title = slide.title[state.language];
  const lang = state.language;
  
  const detailedText = getDetailedSlideAnalysisText(state.week, state.slideIndex, lang);
  
  document.getElementById('modal-title-text').innerText = title;
  document.getElementById('modal-body-text').innerHTML = `
    <div style="font-family: var(--font-display); line-height: 1.6; color: var(--text-primary); font-size: 0.95rem; max-height: 70vh; overflow-y: auto; padding-right: 0.5rem;">
      ${detailedText}
    </div>
  `;
  
  document.getElementById('modal-container').classList.add('open');
}

function getDetailedSlideAnalysisText(week, slideIndex, lang) {
  const data = {
    2: { // Week 2: Columbian Exchange
      0: {
        tr: `<h4>Büyük Düşüş ve Avrupa’nın Sermaye Birikimi</h4>
             <p>Avrupa'nın 15. yüzyıl sonlarında coğrafi keşiflerle başlayan yükselişi, küresel güç dengesini tamamen değiştiren kurumsal ve ekonomik dönüşümler içerir. Kenneth Pomeranz gibi tarihçilerin <i>"Büyük Ayrışma" (Great Divergence)</i> olarak adlandırdığı süreç, Avrupa'nın kaynak kıtlığı sınırlarını Amerika kıtalarının zengin toprakları ve gümüş madenleri sayesinde aşmasıyla başlamıştır.</p>
             <p>Aztek ve İnka imparatorluklarının sömürgeleştirilmesiyle İspanyol imparatorluğu, Potosi ve Zacatecas madenlerinden tonlarca gümüş elde etmiştir. Bu gümüşler, Avrupa genelinde enflasyonist bir <i>"Fiyat Devrimi"</i>ne yol açarken, aynı zamanda Avrupa'nın Asya (özellikle Çin) ile olan kronik dış ticaret açığını kapatmasını sağlamıştır. Gümüş, küresel ticaretin ilk ortak para birimi haline gelmiştir.</p>`,
        en: `<h4>The Great Divergence & European Capital Accumulation</h4>
             <p>Europe's rise starting in the late 15th century represents a profound institutional and economic pivot in global history. Historians like Kenneth Pomeranz describe this as the <i>"Great Divergence"</i>, wherein Europe overcame its ecological and resource constraints by colonizing the vast land and mineral resources of the Americas.</p>
             <p>The conquest of the Aztec and Inca Empires yielded unprecedented quantities of silver from mines like Potosí and Zacatecas. This silver triggered a pan-European inflation known as the <i>"Price Revolution"</i>, while simultaneously acting as the primary liquidity that European merchants used to settle trade deficits with imperial China. Silver thus became the first truly global currency.</p>`
      },
      1: {
        tr: `<h4>Kolomb Değişimi’nin Ekolojik ve Etnik Boyutları</h4>
             <p>Tarihçi Alfred Crosby tarafından ortaya atılan <i>"Kolomb Değişimi" (Columbian Exchange)</i>, sadece ticari bir alışveriş değil, dünya tarihindeki en büyük ekolojik ve biyolojik devrimdir. 1492'den sonra Doğu ve Batı Yarımküreler milyonlarca yıldır ilk kez doğrudan temas kurmuştur.</p>
             <p>Bu temasın en trajik sonucu, Amerika yerlilerinin Eski Dünya hastalıklarına (çiçek, suçiçeği, kızamık, grip) karşı bağışıklığının bulunmaması nedeniyle maruz kaldığı kitlesel kırımlardır. Tarihçilerin <i>"Büyük Ölüm" (The Great Dying)</i> olarak adlandırdığı bu süreçte, yerli nüfusun yaklaşık %80 ila %95'i (yaklaşık 50-60 milyon insan) yok olmuştur. Bu demografik çöküş, Amerika'da iş gücü açığı yaratarak Transatlantik Köle Ticareti'nin başlamasına doğrudan zemin hazırlamıştır.</p>`,
        en: `<h4>Ecological and Biyological Imperialism</h4>
             <p>Coined by Alfred Crosby, the <i>"Columbian Exchange"</i> represents the most monumental ecological and biological revolution in human history. Following 1492, the Eastern and Western Hemispheres were reunited after millennia of separation.</p>
             <p>The most immediate and catastrophic consequence of this contact was the introduction of Old World pathogens (smallpox, measles, influenza) to the immunological virgin soil of the Native Americans. This demographic catastrophe, known as the <i>"Great Dying"</i>, wiped out 80% to 95% of the indigenous population (an estimated 50-60 million lives). The resulting labor vacuum directly triggered the transatlantic slave trade to fuel plantation labor.</p>`
      },
      2: {
        tr: `<h4>Yeni Dünya Gıdaları ve Avrupa Demografik Devrimi</h4>
             <p>Yeni Dünya'dan getirilen mahsuller, özellikle patates ve mısır, Avrasya ve Afrika nüfuslarının beslenmesinde devrim yapmıştır. Patates, birim alanda buğdaya göre dört kat daha fazla kalori sağlamaktadır. Ayrıca yer altında büyüdüğü için askeri talanlardan ve vergilerden saklanabilmiştir.</p>
             <p>Patates tarımının yaygınlaşması, İrlanda'dan Rusya'ya kadar uzanan coğrafyada kıtlıkları azaltmış, çocuk ölüm oranlarını düşürmüş ve endüstri devrimini besleyen kentli işçi sınıfının oluşmasına olanak tanıyan bir nüfus patlamasına yol açmıştır. Çin'de ise mısır ve tatlı patates, tarıma elverişsiz yamaçların ekilmesini sağlayarak Qing Hanedanlığı döneminde nüfusun ikiye katlanmasını sağlamıştır.</p>`,
        en: `<h4>New World Food Crops & The European Demographic Revolution</h4>
             <p>Crops imported from the Americas, particularly the potato and maize, revolutionized the nutritional landscape of Eurasia and Africa. The potato yields four times the calories per acre compared to wheat and grows underground, protecting it from raiding armies and tax collectors.</p>
             <p>The expansion of potato cultivation mitigated famines from Ireland to Russia, lowered infant mortality, and drove a massive population boom that supplied the urban labor force required for the Industrial Revolution. In China, sweet potatoes and maize allowed the cultivation of marginal lands, doubling the population during the Qing Dynasty.</p>`
      },
      3: {
        tr: `<h4>Eski Dünya Hayvancılığı ve Plantasyon Ekonomisi</h4>
             <p>Eski Dünya'dan Amerika'ya getirilen at, sığır, koyun ve domuz gibi evcil hayvanlar, Yeni Dünya ekolojisini hızla dönüştürmüştür. Yırtıcı düşmanları olmayan bu hayvanlar Amerika pampalarında milyonlarca üreyerek yerli tarım alanlarını tahrip etmiş, ancak yerliler için yeni bir protein ve ulaşım kaynağı olmuştur.</p>
             <p>Diğer yandan şeker kamışı ve tütün gibi ticari bitkiler, Amerika'da geniş arazilerde tek tip tarım yapılan <i>"Plantasyon Sistemi"</i>ni doğurmuştur. Şeker üretimi, aşırı emek-yoğun ve tehlikeli bir süreç olduğu için, sömürgeci güçler milyonlarca Afrikalıyı köleleştirerek bu tarlalarda çalışmaya zorlamıştır. Şeker, küresel kapitalizmin ilk büyük endüstriyel hammaddesi olmuştur.</p>`,
        en: `<h4>Old World Livestock & The Plantation Economy</h4>
             <p>The introduction of horses, cattle, sheep, and pigs from the Old World radically altered the American landscape. Lacking natural predators, these animals multiplied exponentially in the pampas, destroying native agriculture but introducing new forms of transport, pastoralism, and protein.</p>
             <p>Conversely, cash crops like sugarcane and tobacco led to the rise of the <i>"Plantation System"</i>—monocultural, large-scale agricultural enterprises in the Americas. Because sugar refining was highly labor-intensive and hazardous, it became the primary driver for the enslavement of millions of Africans, positioning sugar as the first global industrial commodity.</p>`
      },
      4: {
        tr: `<h4>Rüzgar Sistemleri, Golfstrim ve Gümüş Filoları</h4>
             <p>Atlantik ticaretinin sürdürülebilirliği, rüzgar sistemlerinin ve deniz akıntılarının keşfedilmesine bağlıydı. 1513'te İspanyol denizci Antón de Alaminos'un Golfstrim (Gulf Stream) akıntısını keşfetmesi, Karayipler'den Avrupa'ya dönüş yolculuklarını son derece hızlandırmıştır.</p>
             <p>İspanyol krallığı, Yeni Dünya gümüşlerini korsanlardan ve rakip devletlerden korumak için <i>"Flota de Indias" (Hazine Filosu)</i> adında askeri eskortlu bir konvoy sistemi kurmuştur. Bu sistem, Sevilla ile Veracruz/Portobelo limanları arasında dairesel rüzgarları kullanarak dönemsel seferler yapmış ve küresel ticaret hatlarının güvenliğini sağlamıştır.</p>`,
        en: `<h4>Wind Systems, The Gulf Stream & Silver Fleets</h4>
             <p>The viability of Atlantic trade depended entirely on mastering wind patterns and ocean currents. The identification of the Gulf Stream in 1513 by Spanish pilot Antón de Alaminos revolutionized return voyages from the Caribbean back to Europe, cutting travel times in half.</p>
             <p>To protect precious silver shipments from pirates and privateers, Spain established the <i>"Flota de Indias" (Indies Treasure Fleet)</i>, a militarized convoy system. Utilizing circular Atlantic wind currents (Gyres), these fleets sailed periodically between Seville and ports like Veracruz and Portobelo, securing the lifeline of early global capitalism.</p>`
      }
    },
    3: { // Week 3: Slave Trade
      0: {
        tr: `<h4>Batı Afrika Kıyıları ve Silah-Köle Sarmalı</h4>
             <p>Avrupalıların Batı Afrika kıyılarında kurduğu ticaret karakolları (örneğin Elmina Kalesi), başlangıçta altın ticareti için tasarlanmışken zamanla insan ticaretinin merkezleri haline gelmiştir. Avrupalılar iç bölgelere girmek yerine, kıyılardaki yerel krallıklarla (Dahomey, Ashanti) ittifaklar kurmuşlardır.</p>
             <p>Bu süreç, yıkıcı bir <i>"Silah-Köle Sarmalı" (Gun-Slave Cycle)</i> yaratmıştır. Avrupalı tüccarlar yerel krallıklara ateşli silahlar ve barut satmış, bu silahları alan krallıklar komşularına saldırarak savaş esirleri ele geçirmiş ve bu esirleri köle olarak Avrupalılara satarak daha fazla silah satın almışlardır. Bu durum Afrika içlerinde militarizasyonu artırmış ve büyük toplumsal yıkımlara yol açmıştır.</p>`,
        en: `<h4>West African Coast & The Gun-Slave Cycle</h4>
             <p>European trading posts along the West African coast, such as Elmina Castle, were initially built for the gold trade but rapidly transitioned into human processing centers. Rather than invading the interior, Europeans allied with coastal kingdoms like Dahomey and Ashanti.</p>
             <p>This dynamic fostered the destabilizing <i>"Gun-Slave Cycle"</i>. European merchants traded muskets and gunpowder for captives. Coastal states used these firearms to launch military raids on neighboring groups, capturing war prisoners to sell back to Europeans for more weapons. This self-reinforcing cycle militarized West African societies, devastating local economies.</p>`
      },
      1: {
        tr: `<h4>Orta Geçit (Middle Passage) Lojistiği ve Dehşeti</h4>
             <p>Orta Geçit, köleleştirilen Afrikalıların Atlantik boyunca Amerika plantasyonlarına taşındığı deniz yolculuğudur. Köle gemileri, maksimum kar elde etmek amacıyla insani sınırları yok sayan lojistik yöntemlerle tasarlanmıştır.</p>
             <p>Tüccarlar, gemilere daha fazla insan sığdırmak için <i>"Sıkı İstifleme" (Tight Pack)</i> yöntemini kullanmış, köleleri zincirlerle bağlayarak havalandırmasız güvertelerde üst üste taşımışlardır. Yolculuk boyunca yetersiz beslenme, salgın hastalıklar ve intiharlar nedeniyle kölelerin %15 ila %20'si hayatını kaybetmiştir. Tarihteki en büyük insanlık trajedilerinden biri olan bu süreçte, sigorta tazminatı almak için hasta köleleri denize döken <i>"Zong Katliamı" (1781)</i> gibi olaylar yaşanmıştır.</p>`,
        en: `<h4>The Middle Passage: Logistics of Commodification</h4>
             <p>The Middle Passage refers to the horrific voyage across the Atlantic transporting enslaved Africans to the Americas. Slave ships were designed as floating prisons optimized to maximize profit by disregarding human life.</p>
             <p>Ship captains employed <i>"Tight Packing"</i> methods, chaining captives side-by-side in dark, unventilated holds. Due to dehydration, dysentery, and suicide, 15% to 20% of the captives died during the voyage. The cold-blooded commodification of human beings is exemplified by the <i>Zong Massacre (1781)</i>, where crew members threw sick slaves overboard to collect insurance write-offs.</p>`
      },
      2: {
        tr: `<h4>Plantasyon Emek Rejimi ve Demografik Açık</h4>
             <p>Amerika'ya ulaşabilen Afrikalılar, şeker kamışı, kahve, tütün ve daha sonra pamuk plantasyonlarında ölümcül koşullar altında çalıştırılmıştır. Karayipler ve Brezilya'daki şeker plantasyonları, aşırı sıcak, salgın hastalıklar ve ağır iş yükü nedeniyle ortalama bir kölenin hayatta kalma süresinin sadece 5-7 yıl olduğu birer ölüm kampı niteliğindeydi.</p>
             <p>Bu yüksek ölüm oranı ve düşük doğum oranları, plantasyonlarda kalıcı bir <i>"Demografik Açık"</i> yaratmıştır. Sömürgeciler sistemi sürdürebilmek için sürekli olarak Afrika'dan yeni köleler ithal etmek zorunda kalmışlardır. Brezilya ve Karayipler bu nedenle transatlantik köle ticaretinin %85'inden fazlasını emmiştir.</p>`,
        en: `<h4>The Plantation Labor Regime & Demographic Deficit</h4>
             <p>Enslaved Africans who survived the voyage were put to work under brutal, mechanized regimes on sugar, coffee, tobacco, and later cotton plantations. Sugarcane estates in Brazil and the Caribbean were notoriously deadly; the life expectancy of a newly arrived slave was only 5 to 7 years due to tropical diseases and grueling labor.</p>
             <p>This high mortality rate, combined with low birth rates, generated a persistent <i>"Demographic Deficit"</i>. Planters maintained production levels not by natural population growth, but by importing new waves of captives from Africa. Consequently, Brazil and the Caribbean absorbed over 85% of all trans-Atlantic slave voyages.</p>`
      },
      3: {
        tr: `<h4>Bacon İsyanı (1676) ve Irksal Kast Sisteminin İcadı</h4>
             <p>1676 yılında Virginia'da yaşanan Bacon İsyanı, Amerikan toplumsal yapısının şekillenmesinde dönüm noktasıdır. Nathaniel Bacon önderliğindeki isyan, yoksul beyaz sözleşmeli işçiler (indentured servants) ile siyah kölelerin zengin plantasyon sahiplerine karşı omuz omuza savaşıp Jamestown'ı yakmasıyla sonuçlanmıştır.</p>
             <p>Bu sınıfsal ittifak, sömürgeci elitleri dehşete düşürmüştür. İsyan bastırıldıktan sonra, yoksul beyazlar ile siyahların bir daha ortak hareket etmesini önlemek amacıyla elitler bilinçli bir "Böl ve Yönet" politikası uygulamışlardır. Yoksul beyazlara küçük imtiyazlar, oy hakkı ve yasal üstünlük verilerek sistemle bütünleşmeleri sağlanırken; siyahlar tamamen haklarından arındırılarak sistem dışına itilmiş ve böylece "Irk" kavramı yasal olarak inşa edilmiştir.</p>`,
        en: `<h4>Bacon's Rebellion (1676) & The Invention of Race</h4>
             <p>Bacon's Rebellion in Virginia is a crucial turning point in American social history. Led by Nathaniel Bacon, the uprising saw poor white indentured servants and black slaves unite to fight their wealthy landlord elite, eventually burning down Jamestown.</p>
             <p>This multi-racial class alliance terrified the planter elite. In the rebellion's aftermath, the colonial assembly enacted deliberate "Divide and Rule" strategies. They granted poor white men voting privileges, land access, and legal superiority, co-opting them into the white elite-ruled system, while systematically stripping black residents of their rights, inventing the ideology of race to divide the working class.</p>`
      },
      4: {
        tr: `<h4>Virginia Kölelik Yasaları (1705) ve Kalıtsal Kölelik</h4>
             <p>1680'ler ile 1705 Virginia Köle Yasaları (Slave Codes) arasında meclis, siyahların durumunu tamamen "ömür boyu ve kalıtsal kölelik" olarak tanımlayan yasalar çıkarmıştır. Bu yasalarla kölelik ırksal bir kimliğe dönüştürülmüştür.</p>
             <p>En kritik yasal düzenleme, çocuğun statüsünün babaya değil, annenin statüsüne bağlı olacağını belirleyen <i>"Partus sequitur ventrem"</i> yasasıdır. Bu yasa, plantasyon sahiplerinin köle kadınlardan doğan çocuklarını da otomatik olarak köle haline getirmesini sağlamış ve köleliği nesiller boyu aktarılan kalıtsal bir mülkiyet ilişkisi yapmıştır. Hristiyanlığa geçişin özgürlük getirmeyeceği de kabul edilerek köleliğin tüm kaçış yolları kapatılmıştır.</p>`,
        en: `<h4>Virginia Slave Codes (1705) & Hereditary Chattelhood</h4>
             <p>Between 1680 and the codification of the Virginia Slave Codes of 1705, the colony codified racial, hereditary, and lifelong chattel slavery. These laws locked African-descended people into a permanent legal underclass.</p>
             <p>The cornerstone of this system was the legal doctrine of <i>"Partus sequitur ventrem"</i>, declaring that a child's legal status followed that of the mother. This guaranteed that children born to enslaved women, even if fathered by white masters, remained slaves, providing a self-reproducing labor supply. The codes also decreed that conversion to Christianity did not alter slave status, closing all legal avenues of escape.</p>`
      }
    },
    4: { // Week 4: American Revolution
      0: {
        tr: `<h4>Yedi Yıl Savaşları (1756-1763) ve Mali Bunalım</h4>
             <p>Amerikan Devrimi'nin kökleri, İngiltere ile Fransa arasında küresel hegemonya için yapılan Yedi Yıl Savaşları'na dayanır. Savaş İngiltere'nin zaferiyle sonuçlanmış ve Fransa Kuzey Amerika'dan çekilmiştir.</p>
             <p>Ancak bu askeri zafer, İngiltere'ye devasa bir ulusal borç yükü (yaklaşık 130 milyon sterlin) getirmiştir. İngiliz hükümeti, savaşı sömürgeleri korumak için yaptığını savunarak, borç yükünü hafifletmek amacıyla kolonileri doğrudan vergilendirme kararı almıştır. Bu durum, yüzyılı aşkın süredir kendi kendilerini yöneten Amerikan kolonileriyle Londra arasında büyük bir siyasi krizi tetiklemiştir.</p>`,
        en: `<h4>The Seven Years' War (1756–1763) & Fiscal Crisis</h4>
             <p>The structural roots of the American Revolution lie in the global conflict of the Seven Years' War between Britain and France. Although Britain won, expelling France from North America, the military victory left the British Empire with a staggering national debt of £130 million.</p>
             <p>The British government argued that the war had been fought to defend the American colonists, and therefore, the colonies should pay for their defense through direct taxes. This decision disrupted a century of British policy of "salutary neglect", during which colonies governed and taxed themselves, igniting a constitutional crisis.</p>`
      },
      1: {
        tr: `<h4>Temsiliyetsiz Vergilendirme ve Sivil İtaatsizlik</h4>
             <p>İngiliz Parlamentosu'nun 1765'te çıkardığı Pul Kanunu (Stamp Act) ve ardından gelen vergiler sömürgecilerin sert tepkisine yol açmıştır. Kolonistler, İngiltere Parlamentosu'nda kendilerini temsil eden hiçbir milletvekili olmadığı için bu vergilerin yasadışı olduğunu savunmuşlardır.</p>
             <p>Bu direnç, <i>"Temsiliyetsiz vergilendirme olamaz!" (No taxation without representation)</i> sloganıyla kavramsallaştırılmıştır. Boston Çay Partisi (1773) gibi eylemlerle sömürgeciler, Doğu Hindistan Şirketi'ne ait çay sandıklarını denize dökerek sivil itaatsizlik göstermişlerdir. İngiltere'nin bu eylemlere askeri baskıyla yanıt vermesi, devrimin fitilini ateşlemiştir.</p>`,
        en: `<h4>Taxation Without Representation & Civil Disobedience</h4>
             <p>The passage of the Stamp Act in 1765 and subsequent duties triggered resistance in the colonies. The colonists argued that because they had no elected representatives in the British Parliament in London, Parliament had no constitutional right to levy direct taxes on them.</p>
             <p>This principle was popularized as <i>"No taxation without representation"</i>. Tensions escalated into acts of civil disobedience, culminating in the Boston Tea Party of 1773, where colonists threw British tea into the harbor. London's heavy-handed military reaction closed Boston's port, making war inevitable.</p>`
      },
      2: {
        tr: `<h4>Doğal Haklar ve Bağımsızlık Bildirgesi (1776)</h4>
             <p>4 Temmuz 1776'da ilan edilen Bağımsızlık Bildirgesi, Aydınlanma Çağı felsefesinin pratik bir uygulamasıdır. Thomas Jefferson tarafından kaleme alınan metin, John Locke'un "doğal haklar" teorisine dayanır.</p>
             <p>Bildirgede, tüm insanların eşit yaratıldığı, yaratıcıları tarafından kendilerine "yaşam, özgürlük ve mutluluğu arama" gibi devredilemez haklar verildiği ilan edilmiştir. Hükümetlerin bu hakları korumakla yükümlü olduğu, koruyamadıkları takdirde halkın o hükümeti yıkıp yenisini kurma hakkı (direnme hakkı) olduğu belirtilmiştir. Bu ilkeler sömürgelerin ayrılığını ahlaki ve hukuki olarak meşrulaştırmıştır.</p>`,
        en: `<h4>Natural Rights & The Declaration of Independence (1776)</h4>
             <p>Adopted on July 4, 1776, the Declaration of Independence is a seminal application of Enlightenment political philosophy. Written primarily by Thomas Jefferson, the document drew heavily on John Locke's concept of natural rights.</p>
             <p>The Declaration asserted that all men are created equal and endowed with unalienable rights, including "Life, Liberty, and the pursuit of Happiness." It argued that governments derive their legitimacy from the consent of the governed, and when a government fails to protect these rights, the people have a right to alter or abolish it, morally justifying separation from the British Crown.</p>`
      },
      3: {
        tr: `<h4>Fransa İttifakı ve Saratoga’nın Askeri Dönüşümü</h4>
             <p>Savaşın askeri gidişatını değiştiren en önemli olay, 1777'de sömürge ordusunun İngilizlere karşı kazandığı Saratoga Savaşı'dır. Bu zafer, Amerikan ordusunun düzenli bir orduya karşı kazanabileceğini kanıtlamış ve Fransa'yı savaşa girmeye ikna etmiştir.</p>
             <p>1778'de kurulan resmi Fransız-Amerikan ittifakı, sömürgelere devasa finansal yardımlar, barut, donanma desteği ve Marquis de Lafayette gibi askeri dehaları kazandırmıştır. 1781'deki Yorktown Kuşatması'nda Fransız donanmasının İngiliz destek hatlarını kesmesi ve Amerikan-Fransız kara kuvvetlerinin ortak taarruzu, İngiliz ordusunu teslim olmaya zorlayarak savaşı fiilen bitirmiştir.</p>`,
        en: `<h4>The French Alliance & Military Turning Points</h4>
             <p>The military turning point of the Revolutionary War occurred at the Battle of Saratoga in 1777. The American victory proved that the continental army could capture an entire British field army, convincing the French monarchy to enter the war openly.</p>
             <p>The formal Franco-American alliance of 1778 provided the colonies with crucial capital, naval support, gunpowder, and military strategists like the Marquis de Lafayette. In 1781, at the Battle of Yorktown, the French navy blockaded the British army by sea while George Washington's combined Franco-American forces besieged them by land, forcing the British surrender.</p>`
      },
      4: {
        tr: `<h4>1787 Anayasası, Güçler Ayrılığı ve Büyük Uzlaşma</h4>
             <p>Bağımsızlığın kazanılmasının ardından 1787'de toplanan Kurucu Meclis, federal bir devlet yapısı tasarlamıştır. Yeni anayasa, Montesquieu'nun "Güçler Ayrılığı" ilkesine dayanarak Yasama (Kongre), Yürütme (Başkan) ve Yargı (Yüksek Mahkeme) olmak üzere üç bağımsız organdan oluşmuştur.</p>
             <p>Anayasa görüşmelerinde büyük ve küçük eyaletler arasındaki temsil krizi, <i>"Connecticut Uzlaşması" (Büyük Uzlaşma)</i> ile çözülmüştür. Buna göre Kongre iki kamaralı yapılmış; Temsilciler Meclisi'nde eyaletlerin temsil oranı nüfuslarına göre belirlenirken (büyük eyaletlerin lehine), Senato'da her eyalete nüfusa bakılmaksızın eşit 2 koltuk verilmiştir (küçük eyaletlerin lehine). Haklar Bildirgesi'nin (Bill of Rights) eklenmesiyle bireysel özgürlükler anayasal güvenceye alınmıştır.</p>`,
        en: `<h4>The 1787 Constitution, Separation of Powers & The Great Compromise</h4>
             <p>Following independence, the Constitutional Convention of 1787 gathered in Philadelphia to replace the weak Articles of Confederation. The new Constitution applied Montesquieu's doctrine of the separation of powers, creating three co-equal branches: the Legislative (Congress), Executive (President), and Judicial (Supreme Court).</p>
             <p>Debates over representation between large and small states were resolved by the <i>"Connecticut Compromise" (Great Compromise)</i>. It created a bicameral legislature: the House of Representatives allocated seats based on population (favoring larger states), while the Senate granted two seats per state regardless of size (favoring smaller states). The addition of the Bill of Rights in 1791 guaranteed fundamental civil liberties.</p>`
      }
    },
    5: { // Week 5: French Revolution
      0: {
        tr: `<h4>Fransız Mali Krizi ve Üç Zümre (Estates) Sistemi</h4>
             <p>Fransız Devrimi'nin en yakın nedeni, krallığın içine düştüğü derin borç krizidir. Amerikan Bağımsızlık Savaşı'na verilen finansal destek, Fransa hazinesini iflasın eşiğine getirmiştir. Kral XVI. Louis, yeni vergiler toplamak amacıyla 175 yıldır toplanmayan <i>Estates-General (Zümreler Meclisi)</i>'ni 1789'da göreve çağırmıştır.</p>
             <p>Bu meclis, Orta Çağ'dan kalma adaletsiz bir zümre sistemine dayanıyordu: I. Zümre (Ruhbanlar) ve II. Zümre (Soylular), nüfusun sadece %2'sini oluşturmasına rağmen mecliste 3 oyun 2'sine sahipti ve tüm vergilerden muaftı. Nüfusun %98'ini temsil eden ve tüm vergileri ödeyen III. Zümre (Halk, burjuvazi, köylüler) ise tek oyla azınlıkta bırakılıyordu. Bu adaletsizlik, halk temsilcilerinin meclisi terk ederek kendi ulusal meclislerini kurmalarına yol açmıştır.</p>`,
        en: `<h4>French Fiscal Collapse & The Three Estates System</h4>
             <p>The immediate trigger of the French Revolution was a sovereign debt crisis. France's heavy financial investments to support the American Revolutionary War pushed the monarchy to the brink of bankruptcy, forcing King Louis XVI to summon the <i>Estates-General</i> in 1789 for the first time in 175 years.</p>
             <p>The assembly reflected an outdated, inequitable feudal order: the First Estate (Clergy) and Second Estate (Nobility) comprised just 2% of the population but held two-thirds of the votes and were exempt from taxes. The Third Estate (Commoners, peasants, and bourgeoisie) represented 98% of the population and paid all the taxes but held only one vote. This systemic exploitation drove the Third Estate to break away and form the National Assembly.</p>`
      },
      1: {
        tr: `<h4>Bastille Baskını (14 Temmuz 1789) ve Halkın Direnişi</h4>
             <p>Kralın Ulusal Meclis'i bastırmak için Paris çevresine asker yığması üzerine, 14 Temmuz 1789'da Paris halkı ayaklanmıştır. Halk, barut ve silah ele geçirmek amacıyla krallık otoritesinin ve mutlakiyetin en büyük simgesi olan Bastille Hapishanesi'ne saldırdı.</p>
             <p>Bastille Kalesi'nin halk tarafından ele geçirilmesi ve yıkılması, monarşinin baskıcı gücünün fiilen çöktüğünü ilan etmiştir. Bu olay, devrimi entelektüel bir meclis tartışmasından çıkarıp silahlı bir halk hareketine dönüştürmüş, köylülerin taşradaki derebeyi şatolarına saldırmasını tetiklemiş ve feodal düzenin ayrıcalıklarını tamamen ortadan kaldırmıştır.</p>`,
        en: `<h4>The Storming of the Bastille (July 14, 1789)</h4>
             <p>Fearing a royal military crackdown against the National Assembly, the working-class people of Paris rose in arms on July 14, 1789. They stormed the Bastille, a medieval fortress and prison, to seize gunpowder and ammunition.</p>
             <p>The fall of the Bastille marked the collapse of royal municipal authority and symbolized the end of absolute tyranny. This direct action transformed the revolution from an intellectual assembly debate into a massive, armed popular rebellion, triggering peasant revolts in the countryside that dismantled feudal dues overnight.</p>`
      },
      2: {
        tr: `<h4>Aydınlanma İlkeleri ve İnsan Hakları Bildirgesi</h4>
             <p>Ağustos 1789'da kabul edilen İnsan ve Yurttaş Hakları Bildirgesi, devrimin ideolojik temelini oluşturur. Bildirge, insanların özgür doğduğunu, haklar bakımından eşit olduğunu ve egemenliğin krala değil, millete ait olduğunu ilan etmiştir.</p>
             <p><i>"Özgürlük, Eşitlik, Kardeşlik" (Liberté, Égalité, Fraternité)</i> sloganıyla özetlenen bu ilkeler, soyluların ve ruhbanların yüzyıllardır sahip olduğu tüm feodal imtiyazları yasal olarak lağvetmiştir. Kanun önünde eşitlik, ifade ve basın özgürlüğü gibi kavramlar, Avrupa genelinde mutlak monarşilerin dayandığı feodal hukuk sistemini sarsmıştır.</p>`,
        en: `<h4>Enlightenment Philosophy & The Rights of Man (1789)</h4>
             <p>Approved in August 1789, the Declaration of the Rights of Man and of the Citizen served as the ideological blueprint of the revolution. It proclaimed that all human beings are born free and equal in rights, and that sovereignty resides in the nation rather than the monarch.</p>
             <p>Summarized in the motto <i>"Liberty, Equality, Fraternity"</i>, the declaration dismantled the legal framework of feudal privilege, establishing freedom of speech, freedom of the press, and equality before the law, shaking the foundations of autocratic regimes across Europe.</p>`
      },
      3: {
        tr: `<h4>Konvansiyon Dönemi, Jakobenler ve Terör (1793-1794)</h4>
             <p>1792'de monarşinin tamamen kaldırılması ve Fransa Cumhuriyeti'nin ilanıyla devrim daha radikal bir faza girmiştir. Dışarıda Avusturya ve Prusya gibi krallıklarla yapılan savaşlar, içeride ise köylü isyanları ve ekonomik kriz, iktidarı radikal Jakobenlerin (Robespierre) eline geçirmiştir.</p>
             <p>1793-1794 yılları arasında uygulanan <i>"Terör Dönemi" (Reign of Terror)</i> boyunca Jakobenler, Kamu Güvenliği Komitesi aracılığıyla devrimi korumak adına tüm muhalifleri giyotinle idam etmişlerdir. Kral XVI. Louis ve Kraliçe Marie Antoinette başta olmak üzere yaklaşık 17.000'den fazla insan "devrim karşıtı" olmakla suçlanarak yargılanmadan idam edilmiş, bu durum devrimin kendi çocuklarını yediği bir şiddet sarmalına yol açmıştır.</p>`,
        en: `<h4>The Jacobin Convention & The Reign of Terror (1793–1794)</h4>
             <p>With the abolition of the monarchy in 1792 and the declaration of the French Republic, the revolution entered its most radical phase. Facing foreign invasions by European coalitions and internal counter-revolutionary uprisings, power shifted to the radical Jacobins led by Maximilien Robespierre.</p>
             <p>During the <i>"Reign of Terror"</i>, the Committee of Public Safety suspended constitutional rights to suppress dissent. King Louis XVI and Queen Marie Antoinette were executed, and over 17,000 alleged counter-revolutionaries were sent to the guillotine. This period demonstrated how revolutionary zeal could devolve into state-sponsored terror.</p>`
      },
      4: {
        tr: `<h4>Napolyon’un Yükselişi ve Devrim İlkelerinin Yayılması</h4>
             <p>Jakobenlerin düşüşünün ardından yaşanan siyasi istikrarsızlık ve Direktör yönetimi, ordunun siyasetteki gücünü artırmıştır. 1799'da başarılı bir askeri darbeyle başa geçen General Napolyon Bonapart, kendini önce Konsül ardından da İmparator ilan etmiştir.</p>
             <p>Napolyon, çıkardığı <i>"Napolyon Kanunları" (Code Napoléon)</i> ile devrimin feodalizmi kaldırma, kanun önünde eşitlik, din özgürlüğü ve mülkiyet hakkı gibi temel ilkelerini yasal olarak kurumsallaştırmıştır. Napolyon Savaşları boyunca Fransız orduları, fethettikleri İtalya, Almanya ve İspanya gibi ülkelerde feodal hukuk sistemlerini yıkarak devrimci milliyetçilik ve eşitlik ideallerini tüm Avrupa kıtasına yaymışlardır.</p>`,
        en: `<h4>Napoleon Bonaparte & The Institutionalization of the Revolution</h4>
             <p>Years of political corruption and instability under the Directory paved the way for the military. In 1799, General Napoleon Bonaparte seized power in a coup d'état, establishing the Consulate and eventually crowning himself Emperor.</p>
             <p>Napoleon institutionalized core revolutionary gains through the <i>"Napoleonic Code"</i>, which guaranteed equality before the law, religious tolerance, and the abolition of feudalism. Through the Napoleonic Wars, French armies dismantled feudal structures across Germany, Italy, and Spain, export-importing nationalism and civil equality to the rest of the continent.</p>`
      }
    },
    6: { // Week 6: Haiti Revolution
      0: {
        tr: `<h4>Saint-Domingue Plantasyon Cenneti ve Vahşet</h4>
             <p>18. yüzyılda Saint-Domingue (bugünkü Haiti), dünyadaki şeker ve kahve üretiminin neredeyse yarısını karşılayan, Fransa'nın en zengin sömürgesiydi. Bu zenginliğin arkasında, yaklaşık 30.000 beyaz sömürgecinin 500.000 Afrikalı köleyi vahşi koşullarda çalıştırdığı aşırı baskıcı bir plantasyon rejimi yatıyordu.</p>
             <p>Kölelerin haklarını düzenlemek amacıyla çıkarılan Fransız <i>"Code Noir" (Kara Yasa)</i>, kağıt üzerinde bazı sınırlar çizse de plantasyon sahipleri köleleri ölümüne çalıştırmış ve en küçük itaatsizlikleri işkence ve infazla cezalandırmışlardır. Nüfus yapısındaki bu aşırı dengesizlik (kölelerin beyazlara oranı 10'a 1) ve Fransız Devrimi'nin "insan hakları" sloganının sömürgeye ulaşması, büyük bir patlamayı kaçınılmaz kılmıştır.</p>`,
        en: `<h4>Saint-Domingue: The Capitalist Sugar Machine</h4>
             <p>In the 18th century, Saint-Domingue (modern Haiti) was the most profitable colony in the world, supplying half of Europe's sugar and coffee. This immense wealth rested on a regime where approximately 30,000 French colonists enslaved 500,000 Africans.</p>
             <p>Although the French <i>"Code Noir"</i> theoretically regulated slavery, planters ignored restrictions, working enslaved laborers to death and using terror to maintain discipline. The extreme demographic imbalance (slaves outnumbered whites 10 to 1), combined with the export of French revolutionary ideals, created a volatile social environment.</p>`
      },
      1: {
        tr: `<h4>Bois Caïman Töreni ve Köle İsyanının Başlaması</h4>
             <p>Ağustos 1791'de sömürgedeki köle önderleri, Bois Caïman adlı ormanlık alanda voodoo rahibi Dutty Boukman liderliğinde gizli bir dini tören düzenlemiştir. Bu törende, sömürgeci beyazlara karşı topyekun bir kurtuluş savaşı başlatılacağına dair ant içilmiştir.</p>
             <p>Voodoo inancı, Afrika'nın farklı kabilelerinden getirilen ve ortak bir dilleri olmayan köleler arasında birleştirici bir bağ ve manevi güç sağlamıştır. Törenin ardından başlayan koordineli isyanla köleler, şeker plantasyonlarını ateşe vermiş, plantasyon sahiplerini cezalandırmış ve sömürge ordusunu felç etmiştir. Bu olay, tarihteki en büyük ve tek başarılı köle isyanının fiili başlangıcıdır.</p>`,
        en: `<h4>The Bois Caïman Ceremony & Outbreak of Rebellion</h4>
             <p>In August 1791, enslaved leaders convened a secret spiritual gathering at Bois Caïman, led by Voodoo priest Dutty Boukman. They swore an oath to rise against their masters and fight to the death for freedom.</p>
             <p>Voodoo served as a crucial cultural, linguistic, and spiritual bond that united diverse African ethnic groups who lacked a common language. Days later, a massive, coordinated insurrection broke out, with enslaved laborers burning sugarcane plantations to the ground, paralyzing French colonial forces and initiating the Haitian Revolution.</p>`
      },
      2: {
        tr: `<h4>Toussaint Louverture ve Askeri-Diplomatik Deha</h4>
             <p>İsyanın içinden çıkan en önemli lider, okuma yazma bilen ve eski bir köle olan Toussaint Louverture'dir. Louverture, disiplinsiz köle kitlelerini organize ederek kısa sürede disiplinli, taktiksel savaşabilen profesyonel bir ordu inşa etmiştir.</p>
             <p>Fransa, İngiltere ve İspanya'nın Saint-Domingue'i ele geçirmek için savaştığı bu dönemde Louverture, dahi bir diplomat gibi bu üç imparatorluğu birbirine karşı kullanmıştır. 1794'te Fransa'daki Jakoben hükümetinin köleliği tamamen kaldırması üzerine Fransız ordusuna katılarak İspanyol ve İngiliz işgalcileri adadan atmıştır. 1801'de adanın kontrolünü ele geçirip köleliği yasaklayan ilk anayasayı hazırlamıştır.</p>`,
        en: `<h4>Toussaint Louverture: The Military Genius</h4>
             <p>The defining figure of the revolution was Toussaint Louverture, a literate former slave. Louverture reorganized the disparate rebel bands into a disciplined, highly effective guerrilla and conventional army.</p>
             <p>Operating during the global conflict between France, Spain, and Britain, Louverture masterfully played the three empires against one another. When the French National Convention abolished slavery in 1794, Louverture allied with France to defeat invading British and Spanish forces. By 1801, he controlled the entire island and drafted an autonomous constitution prohibiting slavery.</p>`
      },
      3: {
        tr: `<h4>Napolyon’un Leclerc Seferi ve Köleliğin İadesi Tehdidi</h4>
             <p>1802 yılında Fransa'da iktidarı ele geçiren Napolyon Bonapart, Saint-Domingue üzerindeki Fransız kontrolünü yeniden kurmak ve kölelik rejimini geri getirmek amacıyla kayınbiraderi General Leclerc komutasında 20.000 kişilik devasa bir ordu göndermiştir.</p>
             <p>Louverture, barış görüşmeleri sırasında İspanyollarla iş birliği yapan Fransızlar tarafından haince esir alınmış ve Fransa'da soğuk bir zindanda ölüme terk edilmiştir. Ancak Napolyon'un komşu kolonilerde köleliği yeniden kurduğunu öğrenen Saint-Domingue siyahları ve melezleri, Louverture'in generalleri Jean-Jacques Dessalines liderliğinde birleşerek Fransızlara karşı topyekun bir imha savaşı başlatmışlardır.</p>`,
        en: `<h4>Napoleon's Leclerc Expedition & Louverture's Betrayal</h4>
             <p>In 1802, Napoleon Bonaparte sought to restore direct French rule and reintroduce slavery. He dispatched a massive expeditionary force of 20,000 veterans led by his brother-in-law, General Charles Leclerc.</p>
             <p>Louverture was captured through treachery during peace negotiations and shipped to France, where he died in a cold prison cell in the Jura Mountains. However, when news arrived that Napoleon had restored slavery in neighboring colonies, black and mulatto forces united under Jean-Jacques Dessalines, launching a war of total extermination against the French.</p>`
      },
      4: {
        tr: `<h4>Vertières Zaferi ve 1804 Haiti Bağımsızlık Bildirisi</h4>
             <p>Dessalines önderliğindeki devrimci ordu, Fransız askerlerini sarıhumma salgınının da yardımıyla yıpratmış ve Kasım 1803'teki Vertières Savaşı'nda kesin olarak mağlup etmiştir. Fransız ordusunun kalan kısımları adayı tamamen terk etmek zorunda kalmıştır.</p>
             <p>1 Ocak 1804'te Jean-Jacques Dessalines, sömürgenin yerli adı olan "Haiti" (Dağlık Ülke) adını geri vererek bağımsızlığı ilan etmiştir. Haiti, tarihte kölelerin kendi mücadeleleriyle kurduğu ilk bağımsız siyah cumhuriyet ve Amerika kıtasında ABD'den sonra bağımsızlığını kazanan ikinci devlet olmuştur. Bu zafer, köle sahiplerinin zihninde büyük bir korku (Haiti Korkusu) yaratmış ve küresel kölelik karşıtı hareketi hızlandırmıştır.</p>`,
        en: `<h4>Battle of Vertières & The 1804 Declaration of Independence</h4>
             <p>Led by Dessalines, the revolutionary army, aided by a yellow fever epidemic that decimated French troops, won a decisive victory at the Battle of Vertières in November 1803. The surviving French forces evacuated the island.</p>
             <p>On January 1, 1804, Dessalines officially declared independence, renaming the colony "Haiti" (its indigenous Taíno name, meaning "Land of Mountains"). Haiti became the first independent black republic founded by formerly enslaved people and the second independent nation in the Americas, instilling fear in slaveholders worldwide.</p>`
      }
    }
  };
  return data[week] && data[week][slideIndex] ? data[week][slideIndex][lang] : '';
}

// Keyboard navigation support for slides
window.addEventListener('keydown', (e) => {
  if (state.tab === 'narrative') {
    const activeTag = document.activeElement ? document.activeElement.tagName : '';
    if (activeTag !== 'INPUT' && activeTag !== 'SELECT' && activeTag !== 'TEXTAREA') {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    }
  }
});

