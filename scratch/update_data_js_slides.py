import json, re

# Read data.js
with open("data.js", "r", encoding="utf-8") as f:
    content = f.read()

# Define comprehensive, structured slide data for Weeks 8-12
weeks_update = {
    "8": [
        {
            "tr": "<p><strong>Tarihsel Arka Plan:</strong> Fransız Devrim savaşları ve Napolyon'un 1798 Mısır Seferi milliyetçilik ve hürriyet fikirlerini Akdeniz ve Doğu Avrupa'ya yaydı.</p>\n<p><strong>İmparatorluklara Tehdit:</strong> Avusturya-Macaristan, Rusya ve Osmanlı gibi çok etnikli imparatorluklar varoluşsal bir milliyetçilik dalgasıyla karşılaştı.</p>\n<p><strong>Doğu Sorunu:</strong> Osmanlı'nın zayıflamasıyla Avrupalı Büyük Güçler (Rusya, İngiltere, Fransa, Avusturya) arasında Osmanlı topraklarını paylaşma ve Doğu Akdeniz'de hakimiyet kurma rekabeti doğdu.</p>",
            "en": "<p><strong>Historical Context:</strong> The French Revolutionary Wars and Napoleon's 1798 Egyptian Expedition spread nationalism and republican ideals across the Mediterranean.</p>\n<p><strong>Threat to Empires:</strong> Multiethnic dynastic empires (Ottoman, Austrian, Russian) faced an existential challenge as ethnic nationalism replaced traditional religious loyalty.</p>\n<p><strong>The Eastern Question:</strong> As Ottoman authority weakened, European Great Powers competed intensely to control or partition Ottoman strategic territories and Mediterranean trade routes.</p>"
        },
        {
            "tr": "<p><strong>Jeopolitik Kırılma:</strong> 1774 Küçük Kaynarca Antlaşması Osmanlı'nın Karadeniz ve Balkanlar'daki hakimiyetinde dönüm noktası oldu.</p>\n<p><strong>Stratejik Haklar:</strong> Rusya Kırım'da hakimiyet kurdu, Karadeniz ve Boğazlar'da serbest seyrüsefer ve Osmanlı Ortodoks tebaası üzerinde resmi hamilik hakkı elde etti.</p>\n<p><strong>Balkan Dengesi:</strong> Rusya'nın Akdeniz'e inme hedefi Doğu Sorunu'nu uluslararası diplomasinin odak noktası haline getirdi.</p>",
            "en": "<p><strong>Geopolitical Turning Point:</strong> The 1774 Treaty of Küçük Kaynarca marked a fundamental shift in Eastern Mediterranean power dynamics.</p>\n<p><strong>Strategic Gains:</strong> Russia secured Black Sea access, maritime passage through the Straits, and formal protectorate claims over Ottoman Orthodox subjects.</p>\n<p><strong>Imperial Rivalry:</strong> Russian Mediterranean ambitions placed the Ottoman Empire's territorial integrity at the center of 19th-century European diplomacy.</p>"
        },
        {
            "tr": "<p><strong>Bürokratik ve Ticari Güç:</strong> Fenerli Rumlar (Phanariotes) Osmanlı hariciyesinde baştercümanlık, Eflak-Boğdan voyvodalığı ve Patrikhane idaresini ellerinde topladı.</p>\n<p><strong>Ticaret Tekeli:</strong> 18. yüzyıldaki Anglo-Fransız savaşları döneminde Fransız ticaret filosunun çekilmesiyle Rum tüccarlar Doğu Akdeniz ticaretini devraldı.</p>\n<p><strong>Ulusal Bilinç:</strong> Zenginleşen Rum tüccar ve bürokrat sınıfı Batı Aydınlanması ile temas kurarak Yunan bağımsızlık düşüncesini finanse etti ve örgütledi.</p>",
            "en": "<p><strong>Diplomatic & Commercial Dominance:</strong> Phanariote Greeks monopolized key Ottoman diplomatic posts, Danubian hospodarships, and the Orthodox Patriarchate.</p>\n<p><strong>Maritime Trade Monopoly:</strong> 18th-century European naval wars allowed Greek merchant fleets to dominate Eastern Mediterranean and Black Sea shipping.</p>\n<p><strong>Enlightenment Connection:</strong> Wealthy Greek merchants and intellectuals synthesized Western Enlightenment ideals with national liberation movements.</p>"
        },
        {
            "tr": "<p><strong>Gizli Örgütlenme:</strong> 1814'te Odessa'da tüccarlar tarafından kurulan gizli <em>Filiki Eterya</em> (Dostlar Cemiyeti) masonik modelde hücresel olarak örgütlendi.</p>\n<p><strong>Fikri Altyapı:</strong> Fransız Devrimi'nin kanun hakimiyeti, hürriyet ve ulusal egemenlik ilkelerini benimseyerek kısa sürede 10.000'den fazla üyeye ulaştı.</p>\n<p><strong>Stratejik Amac:</strong> Osmanlı yönetiminden tamamen bağımsız, medeni dünyaca tanınmış bağımsız bir Yunan devleti kurmak.</p>",
            "en": "<p><strong>Secret Revolutionary Network:</strong> Founded in Odessa in 1814 by Greek merchants, <em>Philiki Etaireia</em> (Society of Friends) organized a vast clandestine network.</p>\n<p><strong>Ideological Foundation:</strong> Grounded in French Revolutionary principles of popular sovereignty, rule of law, and secular national identity.</p>\n<p><strong>Strategic Objective:</strong> Mobilize a unified national insurrection to completely liberate Greek lands from Ottoman rule.</p>"
        },
        {
            "tr": "<p><strong>İsyanın Başlaması:</strong> 25 Mart 1821'de Piskopos Germanos Mora'da (Kalavryta) haçlı sancak açarak genel ayaklanmayı başlattı.</p>\n<p><strong>Bölgesel Yayılma:</strong> İsyan hızla Mora Yarımadası, Atina, Missolonghi, İdra ve Spetses adalarına yayıldı.</p>\n<p><strong>Dini ve Etnik Kırılma:</strong> Eski Osmanlı millet sisteminin yerini dışlayıcı ve çatışmalı etnik milliyetçilik aldı.</p>",
            "en": "<p><strong>Outbreak of Revolt:</strong> On March 25, 1821, Bishop Germanos raised the revolutionary banner at Kalavryta, initiating the Morean uprising.</p>\n<p><strong>Rapid Expansion:</strong> The revolt quickly encompassed the Peloponnese, Central Greece, Athens, Missolonghi, and key Aegean maritime islands.</p>\n<p><strong>Ethnicization of Conflict:</strong> Religious communal identity rapidly transformed into exclusive, uncompromising ethnic nationalism.</p>"
        },
        {
            "tr": "<p><strong>Askeri Başarı:</strong> Theodoros Kolokotronis liderliğindeki Rum güçleri 1822 Dervenakia Geçidi'nde Dramalı Paşa'nın Osmanlı ordusunu pusuya düşürdü.</p>\n<p><strong>Osmanlı Kaybı:</strong> Osmanlı ordusu ağır zayiat vererek imha edildi; Mora üzerindeki Osmanlı askeri denetimi fiilen sona erdi.</p>",
            "en": "<p><strong>Tactical Victory:</strong> Theodoros Kolokotronis ambushed and decimated Dramali Pasha's large Ottoman army at the Dervenakia Pass in 1822.</p>\n<p><strong>Strategic Impact:</strong> The victory secured revolutionary control over the Peloponnese and demonstrated Greek guerrilla capabilities.</p>"
        },
        {
            "tr": "<p><strong>Osmanlı Misillemeleri:</strong> Ayaklanmayı bastırmak için Patrik V. Gregorios İstanbul'da idam edildi, sert tedbirler alındı.</p>\n<p><strong>Sakız Olayları:</strong> 1822 Sakız Adası harekatı ve sivil can kayıpları Batı Avrupa kamuoyunda büyük infial yarattı.</p>\n<p><strong>Diplomatik Yansıma:</strong> Olaylar Batı'da Filhelenizm (Yunan sempatisi) hareketini zirveye taşıdı.</p>",
            "en": "<p><strong>Ottoman Reprisals:</strong> The execution of Patriarch Gregory V in Istanbul and stern pacification campaigns aimed to suppress the revolt.</p>\n<p><strong>Chios Massacre (1822):</strong> The devastation of Chios outraged European public opinion, immortalized by Delacroix's famous painting.</p>\n<p><strong>Public Backlash:</strong> European outrage galvanized international Philhellenist support and pressured Western governments to act.</p>"
        },
        {
            "tr": "<p><strong>Mısır İttifakı:</strong> Sultan II. Mahmud isyanı bastıramayınca Mısır Valisi Mehmet Ali Paşa'dan askeri yardım istedi.</p>\n<p><strong>İbrahim Paşa Seferi:</strong> İbrahim Paşa 1825'te Mısır'ın disiplinli askerleriyle Mora'ya çıktı; 1827'de Atina ve Missolonghi'yi ele geçirdi.</p>\n<p><strong>Büyük Güç Müdahalesi:</strong> Mısır'ın kesin askeri üstünlüğü İngiltere, Fransa ve Rusya'yı müdahaleye zorladı.</p>",
            "en": "<p><strong>Egyptian Alliance:</strong> Unable to quell the revolt, Sultan Mahmud II summoned his powerful vassal, Mehmed Ali Pasha of Egypt.</p>\n<p><strong>Ibrahim Pasha's Campaign:</strong> Ibrahim Pasha landed modernized Egyptian forces in 1825, recapturing Missolonghi and Athens by 1827.</p>\n<p><strong>Turning Point:</strong> Egyptian success threatened total destruction of the Greek movement, compelling Great Power intervention.</p>"
        },
        {
            "tr": "<p><strong>Batı Kamuoyu:</strong> Romantik şairler, akademisyenler ve siyasetçiler antik Yunan mirasına dayanarak uluslararası Filhelenizm hareketini kurdu.</p>\n<p><strong>Lord Byron:</strong> İngiliz şair Lord Byron kendi servetiyle silah alarak savaşa katıldı ve 1824'te Missolonghi'de öldü.</p>\n<p><strong>Kamuoyu Baskısı:</strong> Filhelenizm hareketi müttefik devletlerin askeri müdahale kararı almasında belirleyici oldu.</p>",
            "en": "<p><strong>Philhellenic Movement:</strong> European intellectuals and elites framed the revolt as a heroic struggle between classical civilization and tyranny.</p>\n<p><strong>Lord Byron's Sacrifice:</strong> Lord Byron personally funded revolutionary supplies and his death at Missolonghi in 1824 created a international martyr.</p>\n<p><strong>Diplomatic Pressure:</strong> Widespread public sympathy forced British, French, and Russian governments to intervene militarily.</p>"
        },
        {
            "tr": "<p><strong>Navarin Baskını:</strong> 20 Ekim 1827'de İngiliz, Fransız ve Rus müttefik donanması Navarin Limanı'nda Osmanlı-Mısır filosunu tümüyle imha etti.</p>\n<p><strong>1828-1829 Osmanlı-Rus Savaşı:</strong> Deniz gücünü yitiren Osmanlı Devleti Rusya karşısında Edirne Antlaşması'nı imzalamak zorunda kaldı.</p>\n<p><strong>Bağımsızlık (1830):</strong> 1830 Londra Protokolü ile Yunanistan, Osmanlı İmparatorluğu'ndan ayrılan ilk bağımsız ulus-devlet olarak kuruldu.</p>",
            "en": "<p><strong>Battle of Navarino (1827):</strong> Allied British, French, and Russian squadrons annihilated the joint Ottoman-Egyptian fleet in Navarino Bay.</p>\n<p><strong>Russo-Turkish War (1828–29):</strong> The destruction of Ottoman naval power led directly to Russian victory and the Treaty of Adrianople.</p>\n<p><strong>Greek Independence (1830):</strong> The 1830 London Protocol formally established the sovereign Kingdom of Greece, the first independent state severed from Ottoman rule.</p>"
        }
    ],
    "9": [
        {
            "tr": "<p><strong>Köken:</strong> 18. yüzyıl sonunda İngiltere'de dokuma ve tekstil sektöründe başladı.</p>\n<p><strong>Buhar Gücü:</strong> James Watt'ın buhar makinesi ve mekanize dokuma tezgahları geleneksel imalathaneleri fabrika sistemine dönüştürdü.</p>\n<p><strong>Nüfus Artışı:</strong> Avrupa nüfusu 1800'de 187 milyondan 1866'da 266 milyona yükseldi.</p>",
            "en": "<p><strong>Origins:</strong> Began in late 18th-century Britain, initially centered on mechanizing textile and cotton manufacturing.</p>\n<p><strong>Steam Engine:</strong> James Watt's steam engine replaced water and animal power, establishing centralized factory production systems.</p>\n<p><strong>Demographic Surge:</strong> Sustained industrial output expanded Europe's population from 187 million in 1800 to 266 million by 1866.</p>"
        },
        {
            "tr": "<p><strong>Finans Ticareti:</strong> Deniz ticareti ve sömürgecilikten elde edilen sermaye birikimi kurumsal bankacılık sistemine aktarıldı.</p>\n<p><strong>Yatırım Kredileri:</strong> Şahsi borçlanmanın yerini alan mevduat bankaları madencilik, demiryolu ve ağır sanayi yatırımlarını finanse etti.</p>",
            "en": "<p><strong>Capital Accumulation:</strong> Profits from global commerce and colonial trade were funneled into formal banking institutions.</p>\n<p><strong>Industrial Investment:</strong> Corporate banking replaced private moneylending, providing essential long-term credit for heavy infrastructure.</p>"
        },
        {
            "tr": "<p><strong>Tarımsal Devrim:</strong> Çitletme (Enclosure) yasaları ortak köylü meralarını kamulaştırarak büyük ticari çiftlikler kurdu.</p>\n<p><strong>Mülksüzleşme:</strong> Topraksız kalan köylüler kentlere göç ederek fabrika işçisi (şehir proletaryası) haline geldi.</p>",
            "en": "<p><strong>Agrarian Enclosures:</strong> Parliamentary Enclosure Acts privatized communal village lands into consolidated commercial farms.</p>\n<p><strong>Proletarianization:</strong> Displaced rural peasants migrated en masse to manufacturing cities, forming the urban industrial working class.</p>"
        },
        {
            "tr": "<p><strong>Demiryolu Hamlesi:</strong> 1830 Liverpool-Manchester hattı ile başlayan demiryolu ağı İngiltere'de 1852'de 6.600 mile ulaştı.</p>\n<p><strong>Sanayi Katalizörü:</strong> Nakliye maliyetlerini düşürdü, kömür ve demir-çelik talebini patlatarak özel sermaye yatırımlarını çekti.</p>",
            "en": "<p><strong>Railway Boom:</strong> Pioneered by the 1830 Liverpool-Manchester line, British rail mileage expanded from 100 miles in 1830 to 6,600 by 1852.</p>\n<p><strong>Economic Catalyst:</strong> Drastically reduced inland freight costs while driving massive demand for coal, iron, and heavy engineering.</p>"
        },
        {
            "tr": "<p><strong>Çelik Devrimi:</strong> Henry Bessemer'in 1856 yöntemi dökme demir yerine ucuz ve mukavemetli çelik kütle üretimini sağladı.</p>\n<p><strong>Dev Karteller:</strong> Almanya'da Krupp gibi ağır sanayi, silah ve demiryolu devleri ortaya çıktı; çelik gövdeli buharlı gemiler denizlere indi.</p>",
            "en": "<p><strong>Bessemer Process (1856):</strong> Enabled the first mass production of high-strength, low-cost steel, replacing brittle pig iron.</p>\n<p><strong>Industrial Conglomerates:</strong> Heavy steel cartels like Krupp dominated arms, rail, and shipbuilding industries across Europe.</p>"
        },
        {
            "tr": "<p><strong>Enerji Taşınabilirliği:</strong> Elektrik; su ve kömüre bağımlılığı bitirerek sanayi üretimini şehir merkezlerine ve her yere yaydı.</p>\n<p><strong>Gece Üretimi:</strong> Thomas Edison'ın 1879 akkor ampulü fabrikalarda 24 saat kesintisiz vardiyalı çalışmayı ve şehir aydınlatmasını sağladı.</p>",
            "en": "<p><strong>Power Flexibility:</strong> Electricity uncoupled manufacturing from riverbanks and coalfields, enabling flexible factory site selection.</p>\n<p><strong>Continuous Production:</strong> Edison's 1879 incandescent lamp turned night into day, establishing 24-hour factory shift schedules.</p>"
        },
        {
            "tr": "<p><strong>Kentsel Ağlar:</strong> Elektrikli tramvaylar, 1863 Londra Yeraltı Demiryolu ve 1900 Paris Metrosu kentsel kitle ulaşımını kurdu.</p>\n<p><strong>Mekansal Yapı:</strong> İşçilerin banliyölerden şehir merkezindeki fabrikalara ve ticaret alanlarına günlük kolay ulaşımı sağlandı.</p>",
            "en": "<p><strong>Mass Transit Networks:</strong> The 1863 London Underground and 1900 Paris Metro pioneered subterranean passenger transport.</p>\n<p><strong>Urban Expansion:</strong> Electric trams and subways transformed metropolitan spatial layouts, enabling suburban residential commuting.</p>"
        },
        {
            "tr": "<p><strong>Motor ve Petrol:</strong> Carl Benz'in 1885 içten yanmalı motoru otomotiv, petrol ve kauçuk sektörlerini doğurdu.</p>\n<p><strong>Seri Üretim:</strong> Frederick Taylor'ın bilimsel yönetim ilkeleri (Taylorizm) ve montaj hattı fabrika üretimini standartlaştırdı.</p>",
            "en": "<p><strong>Internal Combustion Engine:</strong> Carl Benz's 1885 automobile launched the global petroleum, synthetic chemistry, and rubber industries.</p>\n<p><strong>Scientific Management:</strong> Taylorism and moving assembly lines standardized specialized worker tasks to maximize factory throughput.</p>"
        },
        {
            "tr": "<p><strong>Sınıfsal Bölünme:</strong> Hızlı kentleşme zengin burjuvaziyi lüks semtlere toplarken işçileri altyapısız gecekondu (slum) mahallelerine itti.</p>\n<p><strong>Sağlık ve Sefalet:</strong> İşçi semtlerinde tifüs ve kolera salgınları yaşandı; çalışma süreleri günde 14-16 saate ulaştı.</p>",
            "en": "<p><strong>Spatial Class Segregation:</strong> Industrial urban growth sharply demarcated affluent bourgeois boulevards from polluted worker slums.</p>\n<p><strong>Living Conditions:</strong> Densely packed worker tenements endured severe cholera epidemics, toxic air, and 14-to-16-hour workdays.</p>"
        },
        {
            "tr": "<p><strong>Milli Sadakat:</strong> 1879-1881 Fransa Ferry Yasaları ilköğretimi parasız, zorunlu ve seküler yaptı.</p>\n<p><strong>İşgücü Eğitimi:</strong> Disiplinli, okuryazar ve ulusal kimliğe bağlı sanayi işgücü ve bürokrasi yetiştirildi.</p>",
            "en": "<p><strong>Ferry Laws (1879–1881):</strong> Established free, mandatory, and secular primary public education across France.</p>\n<p><strong>State Integration:</strong> Public schooling cultivated a literate, disciplined industrial workforce and reinforced national civic loyalty.</p>"
        }
    ],
    "10": [
        {
            "tr": "<p><strong>Sınıf Bölünmesi:</strong> Sanayi devrimi servet ve mülkiyet temelinde iki ana sınıf yarattı: Mülk sahibi Burjuvazi ve mülksüz Proletarya.</p>\n<p><strong>Ağır Yaşam Koşulları:</strong> Engels'in <em>İngiltere'de Emekçi Sınıfın Durumu</em> (1845) eserinde belgelediği üzere işçiler açlık sınırında, uzun saatler ve çocuk işçiliğiyle yaşadı.</p>",
            "en": "<p><strong>Social Polarization:</strong> Industrialization created rigid class divisions between capital-owning Bourgeoisie and propertyless Proletariat.</p>\n<p><strong>Grim Realities:</strong> Friedrich Engels documented severe urban poverty, child labor, and malnutrition in Manchester's factories (1845).</p>"
        },
        {
            "tr": "<p><strong>Doktrinel Gelişim:</strong> Fransız Devrimi eşitlikçiliğinden doğan ütopyacı sosyalizm, Karl Marx ve Friedrich Engels ile <em>Bilimsel Sosyalizm</em> halini aldı.</p>\n<p><strong>Sınıf Mücadelesi:</strong> Üretim araçlarının özel mülkiyetine karşı tüm emekçilerin sosyal ve ekonomik eşitliği savunuldu.</p>",
            "en": "<p><strong>Socialist Ideology:</strong> Developed from 19th-century egalitarian concepts into Karl Marx and Friedrich Engels's <em>Scientific Socialism</em>.</p>\n<p><strong>Class Struggle:</strong> Advocated abolishing private ownership of production means in favor of collective worker control and equality.</p>"
        },
        {
            "tr": "<p><strong>Askeri Bozgun:</strong> 1870 Sedan Savaşı'nda Prusya ordusu İmparator III. Napolyon'u esir aldı.</p>\n<p><strong>Cumhuriyet İlanı:</strong> 4 Eylül 1870'te Paris halkı belediyeyi basarak III. Cumhuriyet'i ilan etti ve şehri Prusya kuşatmasına karşı savunmaya başladı.</p>",
            "en": "<p><strong>Military Collapse:</strong> Prussian forces defeated the French army at Sedan (1870), capturing Emperor Napoleon III.</p>\n<p><strong>Third Republic:</strong> On September 4, 1870, Parisian crowds stormed the city hall, proclaiming the Republic to defend the besieged capital.</p>"
        },
        {
            "tr": "<p><strong>Halkın Silahlanması:</strong> Prusya ordusu Paris'i aylarca kuşattı; şehri savunan Ulusal Muhafızlar çoğunlukla Parisli işçilerden oluştu.</p>\n<p><strong>Körüklenen Öfke:</strong> Muhafazakar Ulusal Meclis'in Prusya ile ağır teslimiyet antlaşması imzalaması Paris halkında büyük infial yarattı.</p>",
            "en": "<p><strong>Siege of Paris:</strong> Prussian blockade starved Paris for months while the armed National Guard recruited over 200,000 working-class citizens.</p>\n<p><strong>Popular Betrayal:</strong> The conservative National Assembly's humiliating peace terms ignited intense working-class anger.</p>"
        },
        {
            "tr": "<p><strong>Kıvılcım:</strong> Başbakan Adolphe Thiers, 18 Mart 1871'de halkın parasıyla alınan Montmartre tepesindeki toplara el koymak için orduyu gönderdi.</p>\n<p><strong>İsyan:</strong> İşçi kadınlar ve Ulusal Muhafızlar askerleri ikna etti; generaller vuruldu, hükümet Versay'a kaçtı.</p>",
            "en": "<p><strong>Montmartre Outpost:</strong> On March 18, 1871, Thiers sent troops to seize the National Guard's cannons at Montmartre.</p>\n<p><strong>Uprising:</strong> Parisian women and workers blocked the troops; the army fraternized with rebels, driving the government to Versailles.</p>"
        },
        {
            "tr": "<p><strong>Tarihteki İlk İşçi Hükümeti:</strong> 28 Mart 1871'de demokratik seçimlerle Komün Konseyi ilan edildi.</p>\n<p><strong>Doğrudan Demokrasi:</strong> Paris kendi kendini yöneten radikal, eşitlikçi ve özgürlükçü bir siyasi laboratuvara dönüştü.</p>",
            "en": "<p><strong>First Workers' State:</strong> On March 28, 1871, democratic municipal elections formally inaugurated the Paris Commune.</p>\n<p><strong>Direct Democracy:</strong> Paris transformed into a self-governing political laboratory rooted in worker empowerment and egalitarianism.</p>"
        },
        {
            "tr": "<p><strong>Radikal Kararlar:</strong> Sürekli ordu lağvedildi, yerine halk milisi getirildi; din ve devlet işleri ayrıldı, kilise malları kamulaştırıldı.</p>\n<p><strong>İşçi Hakları:</strong> Fırınlarda gece çalışması yasaklandı, terkedilmiş fabrikalar işçi kooperatiflerine devredildi, kamu görevlilerinin maaşları işçi ücretine eşitlendi.</p>",
            "en": "<p><strong>Social Legislation:</strong> Abolished the standing army in favor of armed citizens, separated Church and State, and secularized schools.</p>\n<p><strong>Worker Protections:</strong> Banned night baking, converted abandoned workshops into worker cooperatives, and capped public service salaries.</p>"
        },
        {
            "tr": "<p><strong>Öncü Kadınlar:</strong> Kadınlar barikatlarda ve yönetimde aktif rol aldı; Louise Michel liderliğinde <em>Kadınlar Birliği</em> kuruldu.</p>\n<p><strong>Eşitlik Talebi:</strong> Parasız seküler kız eğitimi, kreşler ve kadınlar için eşit siyasi haklar talep edildi.</p>",
            "en": "<p><strong>Women's Union:</strong> Led by figures like Louise Michel, women organized defense committees and demanded full political equality.</p>\n<p><strong>Social Demands:</strong> Established nurseries for working mothers, female vocational training, and equal pay for women workers.</p>"
        },
        {
            "tr": "<p><strong>Versay Birliklerinin Saldırısı:</strong> 21 Mayıs'ta Versay ordusu Haussmann bulvarlarını kullanarak Paris'e girdi.</p>\n<p><strong>Ağır Katliam:</strong> Barikatlarda 15.000 ila 25.000 komünar (özellikle siyasileşen kadınlar ve işçiler) acımasızca katledildi, Père Lachaise duvarında infaz edildi.</p>",
            "en": "<p><strong>Bloody Week (May 21–28, 1871):</strong> Versailles troops breached Paris defences, unleashing brutal street-by-street reprisal massacres.</p>\n<p><strong>Mass Execution:</strong> Between 15,000 and 25,000 Communards were summarily shot, including wholesale executions at Père Lachaise cemetery.</p>"
        },
        {
            "tr": "<p><strong>Semboller:</strong> Kızıl Bayrak uluslararası işçi hareketinin ve devrimin evrensel simgesi haline geldi; Vendôme Sütunu yıkıldı.</p>\n<p><strong>Tarihsel Etki:</strong> Komün, Marx ve Lenin tarafından \"proletarya diktatörlüğünün ve konsey demokrasisinin ilk örneği\" kabul edildi.</p>",
            "en": "<p><strong>Revolutionary Symbols:</strong> The Red Flag became the enduring universal emblem of working-class internationalism.</p>\n<p><strong>Historical Legacy:</strong> Analyzed by Marx and Lenin as the foundational prototype for modern socialist democracy and council government.</p>"
        }
    ],
    "11": [
        {
            "tr": "<p><strong>İktidara Yükseliş:</strong> 1801'de Fransızları Mısır'dan çıkarmak için gelen Arnavut birliğinin komutanı Mehmet Ali Paşa, 1805'te Osmanlı Sultanı tarafından Mısır Valisi atandı.</p>\n<p><strong>Avrupalı Model:</strong> Fransız ordusunun askeri teknolojisinden etkilenerek radikal bir devlet reformu başlattı.</p>",
            "en": "<p><strong>Rise to Power:</strong> Ottoman-Albanian commander Muhammad Ali secured control of Egypt after the 1801 French withdrawal, recognized as Governor in 1805.</p>\n<p><strong>European Blueprint:</strong> Impressed by French military engineering, he launched comprehensive state-building initiatives.</p>"
        },
        {
            "tr": "<p><strong>Derebeyliğin Sonu:</strong> 1811 Kahire Kalesi baskınında 74 Memlük liderini yok ederek feodal güç odaklarını tasfiye etti.</p>\n<p><strong>Zabit Eğitimi:</strong> Aswan'da Fransız subayların ders verdiği modern Harp Okulu'nu (Aswan Askeri Okulu) açtı.</p>",
            "en": "<p><strong>Citadel Massacre (1811):</strong> Eliminated the feudal Mamluk military aristocracy to centralize state authority.</p>\n<p><strong>Officer Training:</strong> Established the Aswan Military Academy, employing French officers to train native Egyptian staff.</p>"
        },
        {
            "tr": "<p><strong>Tercüme Seferberliği:</strong> 1835'te Rifa'a el-Tahtavi yönetiminde Dil Okulu (<em>Madrasat al-Alsun</em>) kurularak Batı teknik ve tıp eserleri Arapça'ya çevrildi.</p>\n<p><strong>Bulak Matbaası:</strong> Devletin resmi gazetesi <em>Vekayi-i Mısriyye</em> ve teknik kitaplar basılarak Osmanlı geleneğinden ayrışıldı.</p>",
            "en": "<p><strong>School of Languages (1835):</strong> Directed by Rifa'a al-Tahtawi to translate Western scientific and medical texts into Arabic.</p>\n<p><strong>Bulaq Press:</strong> Established state publishing and the official gazette <em>al-Waqai al-Misriyya</em>, expanding literacy and bureaucracy.</p>"
        },
        {
            "tr": "<p><strong>Zorunlu Askerlik:</strong> Mısır yerlisi fellahlar (köylüler) ilk kez askere alındı; 1830'da disiplinli ordu 130.000 kişiye ulaştı.</p>\n<p><strong>Nüfus Sayımı:</strong> Asker toplama ve vergi için istatistik büroları ve nüfus sayım sistemi (bürokrasi) kuruldu.</p>",
            "en": "<p><strong>Peasant Conscription:</strong> Drafted native Egyptian fellahin into a standing army numbering 130,000 by 1830.</p>\n<p><strong>Bureaucratic Control:</strong> Implemented systematic population censuses and administrative registries for taxation and conscription.</p>"
        },
        {
            "tr": "<p><strong>Tarım Reformu:</strong> Uzun elyaflı İskender pamuğu gibi küresel sanayi hammaddeleri ekilerek devlet monopolü kuruldu.</p>\n<p><strong>Vergi ve Vakıflar:</strong> Vakıf toprakları vergilendirilerek ulema sınıfının siyasi ve ekonomik gücü zayıflatıldı.</p>",
            "en": "<p><strong>Cash Crop Monopoly:</strong> Introduced long-staple Jumel cotton as a lucrative state-monopolized export for European textile mills.</p>\n<p><strong>Fiscal Centralization:</strong> Taxed religious endowments (Waqf), curbing the political influence of traditional Islamic scholars (Ulama).</p>"
        },
        {
            "tr": "<p><strong>Fetihler:</strong> Mısır ordusu Sudan'ı (1820), Hicaz'ı, Mora'yı (1825) ve Suriye'yi fethetti.</p>\n<p><strong>Kütahya ve Nizip:</strong> 1832 Kütahya ve 1839 Nizip savaşlarında Osmanlı ordularını bozguna uğratarak Anadolu'ya ilerledi.</p>",
            "en": "<p><strong>Imperial Expansion:</strong> Conquered Sudan (1820), the Hijaz, Syria, and advanced deep into Ottoman Anatolia.</p>\n<p><strong>Military Superiority:</strong> Defeated Ottoman imperial armies at Kütahya (1832) and Nezib (1839), threatening Istanbul itself.</p>"
        },
        {
            "tr": "<p><strong>Büyük Güç Müdahalesi:</strong> Mısır'ın İstanbul'u tehdit etmesi üzerine İngiltere, Rusya ve Avusturya müdahale etti.</p>\n<p><strong>Özerk Hanedan:</strong> Mısır ordusu küçültüldü; ancak Mısır valiliği Mehmet Ali Paşa ailesine irsi (<em>Hıdivlik</em>) olarak bırakıldı.</p>",
            "en": "<p><strong>Great Power Intervention:</strong> Britain and Austria intervened in 1840 to preserve Ottoman integrity and curtail Egyptian expansion.</p>\n<p><strong>Hereditary Rule:</strong> The Treaty of London reduced Egypt's military size but recognized Mehmed Ali's hereditary dynasty (Khedivate).</p>"
        },
        {
            "tr": "<p><strong>Stratejik Kanal:</strong> Hıdiv İsmail Paşa döneminde 1869'da Fransız mühendis Lesseps ile Süveyş Kanalı açıldı.</p>\n<p><strong>Borç Sarmalı:</strong> Aşırı altyapı harcamaları Mısır'ı Avrupalı bankalara yüksek faizle borçlandırdı.</p>",
            "en": "<p><strong>Suez Canal Opening (1869):</strong> Constructed under Khedive Ismail, revolutionizing global maritime trade routes between Europe and Asia.</p>\n<p><strong>Financial Dependency:</strong> Massive infrastructure loans led to unsustainable debt owed to British and French financial markets.</p>"
        },
        {
            "tr": "<p><strong>Mali Denetim:</strong> Mısır borçlarını ödeyemeyince 1876'da İngiliz ve Fransız bakanlardan oluşan <em>Çifte Kontrol</em> borç idaresi kuruldu.</p>\n<p><strong>Milli İsyan:</strong> 1881'de Mısırlı subay Ahmed Urabi Paşa \"Mısır Mısırlılarındır\" sloganıyla sömürgeci müdahaleye karşı ulusal isyan başlattı.</p>",
            "en": "<p><strong>Dual Control (1876):</strong> Anglo-French financial commissioners assumed control over Egyptian state revenues to service foreign debts.</p>\n<p><strong>Urabi Revolt (1881):</strong> Colonel Ahmad Urabi led a nationalist military rebellion demanding constitutional government and an end to foreign domination.</p>"
        },
        {
            "tr": "<p><strong>İskenderiye Bombardımanı:</strong> İngiltere 1882'de İskenderiye'yi bombaladı ve Tell el-Kebir Savaşı'nda Urabi ordusunu yendi.</p>\n<p><strong>Fiili İşgal:</strong> Mısır kağıt üzerinde Osmanlı eyaleti kalsa da İngiltere'nin fiili sömürgesi (Örtülü Koruma) haline geldi.</p>",
            "en": "<p><strong>British Invasion (1882):</strong> British naval forces bombarded Alexandria and defeated Urabi's army at Tel el-Kebir.</p>\n<p><strong>Veiled Protectorate:</strong> Britain established de facto imperial control over Egypt while maintaining nominal Ottoman sovereignty.</p>"
        }
    ],
    "12": [
        {
            "tr": "<p><strong>Görülmemiş Ölçek:</strong> 1880-1914 arasında Avrupa güçleri dünya karalarının %75'ini sömürgeleştirdi; Afrika kıtasının neredeyse tamamı ele geçirildi.</p>\n<p><strong>Küresel Etki:</strong> Günümüz ülke sınırları, dil haritası ve küresel ekonomik bağımlılık ilişkileri bu dönemde şekillendi.</p>",
            "en": "<p><strong>Unprecedented Scale:</strong> Between 1880 and 1914, European empires partitioned and dominated three-quarters of the globe.</p>\n<p><strong>Global Legacy:</strong> Established modern international borders, linguistic spheres of influence, and global economic dependencies.</p>"
        },
        {
            "tr": "<p><strong>3G İlkesi:</strong> Tanrı (Misyonerlik), Altın (Hammadde ve Pazarlar) ve Şan (Büyük Güç Rekabeti ve Milliyetçilik).</p>\n<p><strong>Rejim Farkı:</strong> Cumhuriyetçi Fransa, Meşruti İngiltere ve İmparatorluk Almanyası aynı hırsla sömürgeciliğe girişti.</p>",
            "en": "<p><strong>The Three Gs:</strong> God (Missionary impulse), Gold (Raw materials and markets), and Glory (Imperial prestige and nationalist rivalry).</p>\n<p><strong>Universal Pursuit:</strong> Republican France, constitutional Britain, and autocratic Germany all pursued aggressive overseas colonization.</p>"
        },
        {
            "tr": "<p><strong>Söylemsel Meşrulaştırma:</strong> Jules Ferry'nin konuşmasında vurguladığı \"Üstün ırkların aşağı ırkları medenileştirme hakkı ve ödevi vardır\" anlayışı benimsendi.</p>\n<p><strong>Beyaz Adamın Yükü:</strong> Sosyal Darwinizm ile sömürgeleştirme irksal ve ahlaki bir zorunluluk olarak sunuldu.</p>",
            "en": "<p><strong>Civilizing Mission:</strong> Articulated by leaders like Jules Ferry as a moral duty of 'superior races' to civilize 'lower races'.</p>\n<p><strong>Social Darwinism:</strong> Pseudo-scientific racial hierarchies framed imperial conquest as natural evolutionary progress.</p>"
        },
        {
            "tr": "<p><strong>Büyük Depresyon (1873-1896):</strong> Avrupa sanayisi için kauçuk, bakır, petrol, elmas, pamuk ve palmiye yağı ihtiyacı doğdu.</p>\n<p><strong>Pazar Arayışı:</strong> Üretim fazlası sanayi mallarını satmak ve korumacı gümrükleri by-pass etmek için kapalı sömürge pazarları kuruldu.</p>",
            "en": "<p><strong>Resource Demand:</strong> Industrial growth required steady supplies of rubber, copper, petroleum, cotton, and palm oil.</p>\n<p><strong>Protected Markets:</strong> The Long Depression (1873–1896) drove powers to secure captive colonial markets behind tariff walls.</p>"
        },
        {
            "tr": "<p><strong>Şirket Sömürgeciliği:</strong> Cecil Rhodes Güney Afrika elmas madenlerini tekelleyen De Beers şirketini kurdu; kendi adına <em>Rodezya</em> kolonisini oluşturdu.</p>\n<p><strong>Devlet Desteği:</strong> \"Bayrak ticareti, ticaret de bayrağı takip eder\" ilkesiyle özel şirket mülkleri devlet kolonilerine dönüştürüldü.</p>",
            "en": "<p><strong>Chartered Companies:</strong> Tycoons like Cecil Rhodes consolidated diamond monopolies (De Beers) and founded Rhodesia.</p>\n<p><strong>State Support:</strong> Private corporate conquests were rapidly absorbed into formal crown and state colonial administrations.</p>"
        },
        {
            "tr": "<p><strong>Diplomatik Talan:</strong> Bismarck liderliğinde Berlin'de toplanan 14 Avrupa devleti Afrika'yı masa başında paylaştı.</p>\n<p><strong>Fiili İşgal Kuralı:</strong> Bir bölgede hak iddia etmek için kıyıda fiili askeri ve idari varlık (<em>Effective Occupation</em>) şartı getirildi.</p>",
            "en": "<p><strong>Berlin Conference (1884–85):</strong> 14 European nations convened under Bismarck to establish diplomatic rules for partitioning Africa.</p>\n<p><strong>Effective Occupation:</strong> Required powers to demonstrate actual administrative and military control before claiming territory.</p>"
        },
        {
            "tr": "<p><strong>Şahsi Mülk:</strong> Belçika Kralı II. Leopold Kongo'yu şahsi çiftliği (Kongo Serbest Devleti) ilan etti.</p>\n<p><strong>Kauçuk Sömürüsü:</strong> Zorunlu kauçuk kotasını dolduramayan milyonlarca Kongolunun elleri kesildi, 10 milyona yakın insan katledildi.</p>",
            "en": "<p><strong>Congo Free State:</strong> King Leopold II of Belgium claimed the vast Congo basin as his private personal real estate.</p>\n<p><strong>Brutal Exploitation:</strong> Forced labor for wild rubber harvesting resulted in widespread mutilations and an estimated 10 million deaths.</p>"
        },
        {
            "tr": "<p><strong>Faşoda Krizi (1898):</strong> İngiltere'nin \"Kahire-Kap\" hattı ile Fransa'nın \"Dakar-Cibuti\" hattı Sudan'da çakıştı; savaşın eşiğinden dönüldü.</p>\n<p><strong>Boer Savaşı (1899-1902):</strong> İngiltere Güney Afrika elmasları için Boerlerle savaştı; ilk kitlesel toplama kamplarını kurdu.</p>",
            "en": "<p><strong>Fashoda Incident (1898):</strong> British 'Cape-to-Cairo' and French 'Dakar-to-Djibouti' expansion axes collided in Sudan, nearly causing war.</p>\n<p><strong>Boer War (1899–1902):</strong> Britain fought Dutch-descended Boers over Transvaal gold and diamonds, pioneering concentration camps.</p>"
        },
        {
            "tr": "<p><strong>Yerli Direnişi:</strong> Alman Güneybatı Afrika'sında Herero ve Nama halkları sömürge yönetimine karşı ayaklandı.</p>\n<p><strong>20. Yüzyılın İlk Soykırımı:</strong> General von Trotha'nın imha emriyle çöle sürülen 65.000 Herero ve 10.000 Nama açlık ve zehirli kuyularla katledildi.</p>",
            "en": "<p><strong>Herero Uprising:</strong> Herero and Nama peoples revolted against land dispossession in German South West Africa (1904).</p>\n<p><strong>First 20th-Century Genocide:</strong> General von Trotha issued extermination orders, driving survivors into the desert to perish.</p>"
        },
        {
            "tr": "<p><strong>Bloklaşma:</strong> Sömürge ve donanma paylaşımı kavgası Almanya ile İngiltere-Fransa ittifakını karşı karşıya getirdi.</p>\n<p><strong>Büyük Savaş:</strong> Emperyalist rekabet 1914'te I. Dünya Savaşı'nın patlamasına doğrudan zemin hazırladı.</p>",
            "en": "<p><strong>Imperial Alliances:</strong> Disputes over colonial territories hardened European alliance blocs (Triple Entente vs. Central Powers).</p>\n<p><strong>Road to World War I:</strong> Unchecked imperial rivalry and naval arms races directly triggered the catastrophe of 1914.</p>"
        }
    ]
}

# Parse JSON inside learningData in data.js
# Note data.js starts with `const learningData = {` and ends with `};`
# Let's extract the object or manipulate learningData object in Python

# We can parse data.js using re or regex replacement for each week's slides!

for week_id, slides_list in weeks_update.items():
    print(f"Updating week {week_id}...")
    # Find week block in content
    # Look for `"8": {` or `'8': {`
    pattern = rf'(["\']?{week_id}["\']?\s*:\s*\{{\s*["\']?id["\']?\s*:\s*["\']?{week_id}["\']?.*?"slides"\s*:\s*\[)(.*?)(\]\s*,\s*["\']?quiz["\']?)'
    
    # Let's find matches using DOTALL
    match = re.search(rf'(["\']?{week_id}["\']?\s*:\s*\{{[^}}]*?["\']?slides["\']?\s*:\s*\[)(.*?)(\]\s*,\s*["\']?quiz["\']?)', content, re.DOTALL)
    if not match:
        print(f"Failed to find slide match for week {week_id}")
        continue
    
    prefix = match.group(1)
    old_slides_text = match.group(2)
    suffix = match.group(3)
    
    # We need to preserve slide title and mapState, only updating text field!
    # Let's parse individual slides from old_slides_text
    slide_objs = re.findall(r'(\{\s*["\']?title["\']?\s*:\s*\{.*?\},?\s*["\']?text["\']?\s*:\s*\{.*?\},?\s*["\']?mapState["\']?\s*:\s*\{.*?\}\s*\})', old_slides_text, re.DOTALL)
    
    if len(slide_objs) != len(slides_list):
        print(f"Warning: found {len(slide_objs)} slide objects for week {week_id}, expected {len(slides_list)}")
    
    new_slides_code_list = []
    for i, slide_code in enumerate(slide_objs):
        if i >= len(slides_list):
            break
        tr_text = slides_list[i]["tr"].replace('\n', '\\n').replace('"', '\\"')
        en_text = slides_list[i]["en"].replace('\n', '\\n').replace('"', '\\"')
        
        # Replace the text field inside slide_code
        # text: { tr: "...", en: "..." } or "text": { "tr": "...", "en": "..." }
        new_text_block = f'"text": {{\n          "tr": "{tr_text}",\n          "en": "{en_text}"\n        }}'
        
        updated_slide = re.sub(r'["\']?text["\']?\s*:\s*\{\s*["\']?tr["\']?\s*:\s*".*?",?\s*["\']?en["\']?\s*:\s*".*?"\s*\}', new_text_block, slide_code, flags=re.DOTALL)
        if updated_slide == slide_code:
            # try alternative regex if quotes/keys differed
            updated_slide = re.sub(r'["\']?text["\']?\s*:\s*\{.*?\}', new_text_block, slide_code, flags=re.DOTALL)
            
        new_slides_code_list.append(updated_slide)
    
    new_slides_str = ",\n    ".join(new_slides_code_list)
    replacement = prefix + "\n    " + new_slides_str + "\n  " + suffix
    content = content[:match.start()] + replacement + content[match.end():]

with open("data.js", "w", encoding="utf-8") as f:
    f.write(content)

print("data.js updated successfully with rich structured slide texts for weeks 8-12!")
