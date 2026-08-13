import json

# Read data.js
with open("data.js", "r", encoding="utf-8") as f:
    content = f.read()

prefix = "var learningData = window.learningData = "
if content.startswith(prefix):
    json_str = content[len(prefix):].rstrip()
    if json_str.endswith(";"):
        json_str = json_str[:-1]

data = json.loads(json_str)

# Deep, complete slide texts for Weeks 8-12
ultra_slides = {
    "8": [
        {
            "tr": "<p><strong>Tarihsel Arka Plan ve Fransız Devrimi Etkisi:</strong> Fransız Devrim savaşları ve Napolyon Bonaparte'ın 1798 Mısır Seferi, milliyetçilik, ulusal egemenlik ve yurttaşlık ilkelerini Akdeniz ve Doğu Avrupa'ya yaydı.</p>\n<p><strong>İmparatorluklara Varoluşsal Tehdit:</strong> Çok etnikli ve çok dinli Osmanlı, Avusturya-Macaristan ve Rusya imparatorlukları, hanedan sadakatini yıkan ve etnik grupları ayrıştıran bu milliyetçilik dalgası karşısında savunmasız kaldı.</p>\n<p><strong>Doğu Sorunu'nun Doğuşu:</strong> Osmanlı Devleti'nin askeri ve idari zayıflamasıyla birlikte, Avrupalı Büyük Güçler (Rusya, İngiltere, Fransa, Avusturya) arasında Osmanlı topraklarını paylaşma ve Doğu Akdeniz'deki stratejik dengeleri kontrol etme rekabeti doğdu.</p>\n<div class=\"extra-info\" style=\"margin-top:0.75rem; border-top:1px dashed var(--theme-accent); padding-top:0.5rem; font-size:0.85rem;\"><strong>Tarihyazımsal Bağlam:</strong> Mark Mazower'ın belirttiği üzere, Balkanlar'da Osmanlı millet sisteminin sunduğu çok dinli bir arada yaşam yapısı, 19. yüzyılda Batı etkisindeki aydınlar eliyle dışlayıcı etnik milliyetçiliklere dönüştürülmüştür.</div>",
            "en": "<p><strong>Historical Context & French Revolutionary Impact:</strong> The Napoleonic Wars and Napoleon's 1798 Egyptian expedition diffused secular nationalism and popular sovereignty across the Mediterranean basin.</p>\n<p><strong>Existential Threat to Dynastic Empires:</strong> Multiethnic empires (Ottoman, Austrian, Russian) faced severe disruption as traditional religious allegiance gave way to exclusive ethnic nationalisms.</p>\n<p><strong>Emergence of the Eastern Question:</strong> As Ottoman power waned, European Great Powers (Russia, Britain, France, Austria) entered into intense geopolitical rivalry over the future and partition of Ottoman territories.</p>\n<div class=\"extra-info\" style=\"margin-top:0.75rem; border-top:1px dashed var(--theme-accent); padding-top:0.5rem; font-size:0.85rem;\"><strong>Historiographical Context:</strong> As historian Mark Mazower emphasizes, 19th-century Balkan nationalism systematically transformed pluralistic Ottoman religious communities into rigid, mutually exclusive ethnic identities.</div>"
        },
        {
            "tr": "<p><strong>1774 Küçük Kaynarca Antlaşması:</strong> Osmanlı-Rus Savaşı sonrası imzalanan bu antlaşma, Doğu Akdeniz jeopolitiğinde tarihi bir kırılma noktası oluşturdu.</p>\n<p><strong>Rusya'nın Kazanımları:</strong> Rusya Kırım'ı Osmanlı denetiminden çıkardı, Karadeniz ve Boğazlar'da serbest seyrüsefer ticareti yapma ve Osmanlı ülkesindeki Ortodoks tebaa üzerinde resmi hamilik hakkı elde etti.</p>\n<p><strong>Doğu Sorunu'nun Başlangıcı:</strong> Rusya'nın sıcak denizlere inme ve Ortodoksları himaye etme iddiası, İngiltere ve Fransa'yı Osmanlı'nın toprak bütünlüğünü savunmaya iterek Doğu Sorunu'nu uluslararası diplomasinin odağına yerleştirdi.</p>",
            "en": "<p><strong>Treaty of Küçük Kaynarca (1774):</strong> Followed a devastating Ottoman war against Catherine the Great's Russia, marking a watershed in imperial balance of power.</p>\n<p><strong>Russian Strategic Gains:</strong> Granted Russia access to the Black Sea, maritime passage through the Straits, and formal protectorate claims over Ottoman Orthodox Christians.</p>\n<p><strong>Diplomatic Catalyst:</strong> Russian expansion southward compelled Britain and France to adopt policies protecting Ottoman integrity, solidifying the Eastern Question.</p>"
        },
        {
            "tr": "<p><strong>Fenerli Rumlar (Phanariotes):</strong> İstanbul Fener çeyreğinde mukim zengin Rum tüccar ve bürokrat sınıfı, Osmanlı hariciyesinde baştercümanlık (Divan-ı Hümayun tercümanlığı) ve Eflak-Boğdan voyvodalıklarını ellerinde topladı.</p>\n<p><strong>Ticaret Tekeli ve Akdeniz Dominasyonu:</strong> 18. yüzyılda Fransız ve İngiliz filolarının savaşlar nedeniyle çekilmesiyle Rum tüccarlar Doğu Akdeniz ve Karadeniz deniz ticaretini tekellerine aldı.</p>\n<p><strong>Aydınlanma ve Milli Bilinç:</strong> Avrupa diasporası ve ticaret ağları sayesinde Batı Aydınlanması fikirleriyle tanışan Fenerliler, Yunan okullarını, haritalarını ve bağımsızlık cemiyetlerini finanse etti.</p>",
            "en": "<p><strong>The Phanariotes:</strong> Wealthy Greek elites from Istanbul's Phanar district monopolized key Ottoman diplomatic posts, Danubian hospodarships, and the Orthodox Patriarchate.</p>\n<p><strong>Commercial Hegemony:</strong> 18th-century European naval wars disrupted Western shipping, allowing Greek merchant fleets to capture Mediterranean and Black Sea trade.</p>\n<p><strong>Enlightenment Infrastructure:</strong> Wealthy merchants and diaspora intellectuals funded Greek academies, publishing houses, and revolutionary networks across Europe.</p>"
        },
        {
            "tr": "<p><strong>Filiki Eterya (Dostlar Cemiyeti) Kuruluşu:</strong> 1814 yılında Odessa'da üç Rum tüccar tarafından kurulan gizli örgüt, masonik hücresel yapıda hızla genişledi.</p>\n<p><strong>Fikri Altyapı ve Örgütlenme:</strong> Fransız Devrimi'nin kanun hakimiyeti, hürriyet ve ulusal egemenlik ilkelerini benimseyerek Balkanlar genelinde 10.000'den fazla üyeye ulaştı.</p>\n<p><strong>Bağımsızlık Amacı:</strong> Osmanlı yönetiminden tamamen bağımsız, medeni dünyaca tanınmış, laik ve ulusal bir Yunan devleti kurmayı hedefledi.</p>",
            "en": "<p><strong>Philiki Etaireia (1814):</strong> A secret revolutionary society founded in Odessa by Greek merchants, structured on clandestine Masonic organizational lines.</p>\n<p><strong>Rapid Expansion:</strong> Mobilized over 10,000 members across the Balkans, Russia, and the Mediterranean, backed by wealthy shipping magnates.</p>\n<p><strong>Ideological Vision:</strong> Dedicated to organizing a comprehensive national uprising to achieve full independence from Ottoman rule.</p>"
        },
        {
            "tr": "<p><strong>Mora Ayaklanması (25 Mart 1821):</strong> Piskopos Germanos'un Kalavryta'da haçlı sancağı kaldırmasıyla Mora Yarımadası'nda genel ayaklanma başladı.</p>\n<p><strong>İsyanın Yayılması:</strong> Ayaklanma hızla Orta Yunanistan, Atina, Missolonghi, İdra ve Spetses adalarına sıçradı; Rum denizciler Osmanlı gemilerine deniz gerillası uyguladı.</p>\n<p><strong>Etnik Hatların Sertleşmesi:</strong> İsyan sürecinde dini cemaat kimliği yerini dışlayıcı ve şiddetli etnik milliyetçiliğe bıraktı; karşılıklı çatışmalar tırmandı.</p>",
            "en": "<p><strong>Peloponnesian Uprising (March 25, 1821):</strong> Bishop Germanos raised the revolutionary standard at Kalavryta, launching widespread armed resistance.</p>\n<p><strong>Maritime Mobilization:</strong> Insurrection spread to Hydra, Spetses, Athens, and Missolonghi, using fireships to disrupt Ottoman supply lines.</p>\n<p><strong>Polarization:</strong> The conflict rapidly escalated into uncompromising ethnic warfare, replacing traditional Ottoman millet co-existence.</p>"
        },
        {
            "tr": "<p><strong>Dervenakia Zaferi (1822):</strong> Theodoros Kolokotronis komutasındaki Rum gerilla güçleri, Mora'ya giren Dramalı Paşa ordusunu Dervenakia Geçidi'nde pusuya düşürdü.</p>\n<p><strong>Stratejik Sonuç:</strong> Osmanlı ordusu ağır zayiat vererek imha edildi; Mora üzerindeki Osmanlı askeri denetimi fiilen sona erdi ve ihtilal hükümeti kuruldu.</p>",
            "en": "<p><strong>Battle of Dervenakia (1822):</strong> Theodoros Kolokotronis executed a brilliant tactical ambush, annihilating Dramali Pasha's 20,000-strong Ottoman army.</p>\n<p><strong>Strategic Impact:</strong> Secured revolutionary control over the Peloponnese and cemented Kolokotronis as the prime military commander.</p>"
        },
        {
            "tr": "<p><strong>Osmanlı Misillemeleri ve Patrik İdamı:</strong> İsyanı bastırmak amacıyla Patrik V. Gregorios İstanbul'da idam edildi, Anadolu ve Ege'de sert tedbirler alındı.</p>\n<p><strong>1822 Sakız Adası Olayları:</strong> Osmanlı birliklerinin Sakız Adası'ndaki harekatı ve can kayıpları Batı Avrupa kamuoyunda devasa infial yarattı.</p>\n<p><strong>Avrupa Kamuoyu ve Sanat:</strong> Delacroix'nın *Sakız Katliamı* tablosu gibi sanat eserleri Batı'da Yunan mücadelesine kamuoyu desteğini zirveye çıkardı.</p>",
            "en": "<p><strong>Ottoman Reprisals:</strong> Execution of Patriarch Gregory V in Istanbul and stern pacification campaigns aimed to deter revolutionary support.</p>\n<p><strong>Chios Massacre (1822):</strong> The devastation of Chios sparked international outcry, immortalized by Eugène Delacroix's famous canvas.</p>\n<p><strong>Diplomatic Backlash:</strong> European public outrage pressured allied governments to shift from strict neutrality toward active intervention.</p>"
        },
        {
            "tr": "<p><strong>Mısır Valisi Mehmet Ali Paşa'nın Çağrılması:</strong> İsyanı kendi imkanlarıyla bastıramayan Sultan II. Mahmud, Mısır Valisi Mehmet Ali Paşa'dan askeri yardım istedi.</p>\n<p><strong>İbrahim Paşa Seferi (1825):</strong> İbrahim Paşa, Fransız subaylarca eğitilmiş disiplinli Mısır ordusuyla Mora'ya çıktı; 1826'da Missolonghi'yi, 1827'de Atina'yı ele geçirdi.</p>\n<p><strong>Büyük Güçlerin Müdahalesi:</strong> Mısır ordusunun kesin askeri üstünlüğü Yunan hareketini çökme noktasına getirince İngiltere, Fransa ve Rusya askeri müdahale kararı aldı.</p>",
            "en": "<p><strong>Egyptian Intervention:</strong> Sultan Mahmud II summoned his vassal Mehmed Ali Pasha, offering Morea and Crete in exchange for military suppression.</p>\n<p><strong>Ibrahim Pasha's Campaign (1825–27):</strong> Ibrahim Pasha landed modernized Egyptian conscript forces, capturing Missolonghi and Athens by 1827.</p>\n<p><strong>Geopolitical Crisis:</strong> Imminent Greek military collapse compelled Britain, France, and Russia to intervene to preserve regional stability.</p>"
        },
        {
            "tr": "<p><strong>Filhelenizm Hareketi:</strong> Batılı şairler, akademisyenler ve muhafazakar elitler, antik Yunan mirasını medeniyetin beşiği görerek uluslararası yardım kampanyaları başlattı.</p>\n<p><strong>Lord Byron'ın Şehadeti:</strong> İngiliz şair Lord Byron kendi servetiyle silah ve erzak satın alarak savaşa katıldı, 1824'te Missolonghi'de öldü ve uluslararası simge oldu.</p>\n<p><strong>Hükümetlere Baskı:</strong> Filhelenizm hareketi İngiliz, Fransız ve Rus hükümetlerini kamuoyu baskısıyla askeri eyleme zorladı.</p>",
            "en": "<p><strong>Philhellenic Movement:</strong> European romanticism framed the conflict as a crusade of classical civilization and freedom against Eastern despotism.</p>\n<p><strong>Lord Byron's Legacy:</strong> The famed English poet financed supplies and died at Missolonghi in 1824, becoming a global martyr for freedom.</p>\n<p><strong>Public Pressure:</strong> Widespread popular sympathy forced Western governments to abandon non-intervention policies.</p>"
        },
        {
            "tr": "<p><strong>Navarin Deniz Savaşı (20 Ekim 1827):</strong> Müttefik İngiliz, Fransız ve Rus donanması Navarin Limanı'nda Osmanlı-Mısır donanmasını baskınla imha etti.</p>\n<p><strong>1828-1829 Osmanlı-Rus Savaşı ve Edirne Antlaşması:</strong> Deniz gücünü kaybeden Osmanlı Devleti Rusya karşısında yenilerek Edirne Antlaşması'nı imzalamak zorunda kaldı.</p>\n<p><strong>Bağımsız Yunanistan (1830):</strong> 1830 Londra Protokolü ile Yunanistan, Osmanlı İmparatorluğu'ndan ayrılan ilk bağımsız ulus-devlet olarak haritadaki yerini aldı.</p>",
            "en": "<p><strong>Battle of Navarino (1827):</strong> Allied British, French, and Russian fleets destroyed the joint Ottoman-Egyptian navy in Navarino Bay.</p>\n<p><strong>Russo-Turkish War (1828–29):</strong> Loss of naval control led directly to Russian victory and the Treaty of Adrianople.</p>\n<p><strong>Independence (1830):</strong> The 1830 London Protocol formally established the sovereign Kingdom of Greece, the first independent state carved from Ottoman lands.</p>"
        }
    ],
    "9": [
        {
            "tr": "<p><strong>Sanayileşmenin Doğuşu:</strong> 18. yüzyıl sonlarında İngiltere'de başlayan I. Sanayi Devrimi, mekanize tekstil üretimi ve dokuma makineleriyle üretimde devrim yaptı.</p>\n<p><strong>Buhar Gücü ve Fabrika Sistemi:</strong> James Watt'ın buhar makinesi; su ve kas gücüne olan bağımlılığı bitirerek merkezi fabrika disiplinini kurdu.</p>\n<p><strong>Demografik Patlama:</strong> Tarımsal ve sanayi üretimi Avrupa nüfusunu 1800'de 187 milyondan 1866'da 266 milyona yükseltti.</p>\n<div class=\"extra-info\" style=\"margin-top:0.75rem; border-top:1px dashed var(--theme-accent); padding-top:0.5rem; font-size:0.85rem;\"><strong>Tarihsel Dönüşüm:</strong> Sanayileşme lonca sistemini ve zanaatkarları tasfiye ederek kitlesel makine üretimi ve ücretli emegi hakim kılmıştır.</div>",
            "en": "<p><strong>Origins in Britain:</strong> The First Industrial Revolution originated in late 18th-century Britain, initially transforming textile and cotton production.</p>\n<p><strong>Steam Engine & Factory System:</strong> James Watt's steam engine replaced waterwheels, centralizing labor under strict factory routines.</p>\n<p><strong>Demographic Expansion:</strong> Sustained productivity supported massive population growth, expanding Europe from 187M in 1800 to 266M by 1866.</p>\n<div class=\"extra-info\" style=\"margin-top:0.75rem; border-top:1px dashed var(--theme-accent); padding-top:0.5rem; font-size:0.85rem;\"><strong>Economic Impact:</strong> Mechanization undercut traditional artisan guilds, replacing independent craftsmen with wage-earning factory operatives.</div>"
        },
        {
            "tr": "<p><strong>Finansal Kurumlar ve Bankacılık:</strong> Ticaret ve sömürge birikimi şahsi borçlanmanın yerini alan kurumsal mevduat ve yatırım bankalarına aktarıldı.</p>\n<p><strong>Sermaye Birikimi:</strong> Kurumsal bankalar madencilik, demiryolu inşası ve ağır sanayi tesisleri için uzun vadeli düşük faizli kredi sağladı.</p>",
            "en": "<p><strong>Financial Modernization:</strong> Wealth accumulated from overseas trade was channeled into formal commercial banking institutions.</p>\n<p><strong>Capital Mobilization:</strong> Corporate investment banks replaced private moneylenders, financing large-scale industrial enterprises and infrastructure.</p>"
        },
        {
            "tr": "<p><strong>Çitletme (Enclosure) Yasaları:</strong> İngiltere'de yürürlüğe giren yasalar ortak köylü meralarını ve arazilerini kamulaştırarak büyük ticari çiftlikler oluşturdu.</p>\n<p><strong>Proleterleşme ve Göç:</strong> Topraksız kalan köylüler kitlesel halde sanayi kentlerine göç ederek fabrika işçisi (şehir proletaryası) haline geldi.</p>",
            "en": "<p><strong>Parliamentary Enclosure Acts:</strong> Privatized communal lands, consolidating small plots into large-scale commercial agricultural estates.</p>\n<p><strong>Proletarianization:</strong> Landless peasants were forced off the land, migrating to growing cities to supply cheap factory labor.</p>"
        },
        {
            "tr": "<p><strong>Ulaşım Devrimi ve Demiryolları:</strong> 1830 Liverpool-Manchester hattı ile başlayan demiryolu ağı İngiltere'de 1852'de 6.600 mile ulaştı.</p>\n<p><strong>Sanayi Katalizörü:</strong> Demiryolları karasal nakliye maliyetlerini düşürdü; kömür, demir ve çelik sektörlerine devasa talep yaratarak özel yatırımları patlattı.</p>",
            "en": "<p><strong>Railway Boom:</strong> The 1830 Liverpool-Manchester line launched a transport revolution; British rail expanded from 100 miles in 1830 to 6,600 by 1852.</p>\n<p><strong>Economic Engine:</strong> Drastically reduced freight costs while stimulating unprecedented private investment in heavy metallurgy and coal extraction.</p>"
        },
        {
            "tr": "<p><strong>Bessemer Yöntemi (1856):</strong> Henry Bessemer'in icat ettiği yöntem dökme demir yerine ucuz ve mukavemetli kütlesel çelik üretimini mümkün kıldı.</p>\n<p><strong>Ağır Sanayi Kartelleri:</strong> Almanya'da Krupp gibi çelik ve silah devleri doğdu; demiryolları, köprüler ve ilk çelik gövdeli buharlı gemiler inşa edildi.</p>",
            "en": "<p><strong>Bessemer Process (1856):</strong> Enabled the mass production of high-strength, low-cost steel, superseding brittle wrought iron.</p>\n<p><strong>Industrial Empires:</strong> Catalyzed giant metallurgical cartels like Krupp, building heavy machinery, artillery, and steel-hulled steamships.</p>"
        },
        {
            "tr": "<p><strong>Elektrik ve Enerji Esnekliği:</strong> Elektrik gücü üretimi su ve kömüre bağımlı kalmaktan kurtararak şehir içlerinde fabrikalar açılmasını sağladı.</p>\n<p><strong>Edison Ampulü (1879) ve Gece Üretimi:</strong> Akkor ampulün icadıyla fabrikalarda 24 saat vardiyalı kesintisiz üretim ve şehir aydınlatması dönemi başladı.</p>",
            "en": "<p><strong>Power Decentralization:</strong> Electricity freed factories from proximity to coalfields or rivers, allowing flexible industrial urban location.</p>\n<p><strong>Edison's Incandescent Lamp (1879):</strong> Illuminated factories and urban centers, introducing non-stop 24-hour shift work.</p>"
        },
        {
            "tr": "<p><strong>Kentsel Kitle Ulaşımı:</strong> 1863 Londra Yeraltı Demiryolu ve 1900 Paris Metrosu kentsel kitle ulaşımını kurdu.</p>\n<p><strong>Mekânsal Genişleme:</strong> Elektrikli tramvaylar ve metrolar işçilerin banliyölerden şehir merkezindeki fabrikalara günlük ulaşımını kolaylaştırdı.</p>",
            "en": "<p><strong>Urban Mass Transit:</strong> The 1863 London Underground and 1900 Paris Metro revolutionized inner-city passenger movement.</p>\n<p><strong>Metropolitan Sprawl:</strong> Electric trams and subways reshaped urban geography, separating suburban residential zones from industrial centers.</p>"
        },
        {
            "tr": "<p><strong>İçten Yanmalı Motor:</strong> Carl Benz'in 1885 otomobili petrokimya, benzin ve kauçuk sektörlerini sanayinin merkezine taşıdı.</p>\n<p><strong>Taylorizm ve Seri Üretim:</strong> Frederick Taylor'ın bilimsel yönetim ilkeleri ve montaj hattı üretimi standartlaştırarak işçi verimliliğini maksimuma çıkardı.</p>",
            "en": "<p><strong>Internal Combustion Engine:</strong> Carl Benz's 1885 car birthed the automotive, petroleum refining, and synthetic rubber industries.</p>\n<p><strong>Scientific Management:</strong> Taylorism and assembly lines standardized worker motions, maximizing throughput in mass manufacturing.</p>"
        },
        {
            "tr": "<p><strong>Kentsel Mekânsal Ayrışma:</strong> Hızlı kentleşme burjuvaziyi lüks bulvarlara toplarken işçileri altyapısız ve hava kirliliği olan gecekondu (slum) semtlerine itti.</p>\n<p><strong>Sağlık ve Sefalet:</strong> Engels'in belirlediği üzere işçi mahallelerinde tifüs ve kolera salgınları yaşandı; çalışma süreleri günde 14-16 saate ulaştı.</p>",
            "en": "<p><strong>Spatial Segregation:</strong> Rapid urban expansion divided cities into opulent bourgeois districts and impoverished worker slums.</p>\n<p><strong>Living Standards:</strong> Densely packed worker tenements endured severe cholera outbreaks, toxic pollution, and grueling 14-to-16-hour shifts.</p>"
        },
        {
            "tr": "<p><strong>Ferry Yasaları (1879-1881):</strong> Fransa'da ilköğretimi parasız, zorunlu ve seküler yapan yasalar kabul edildi.</p>\n<p><strong>Milli İntegrasyon ve Okuryazarlık:</strong> Devlet okulları okuryazar, disiplinli, seküler ve ulusal kimliğe bağlı bir sanayi işgücü ve bürokrasi yetiştirdi.</p>",
            "en": "<p><strong>French Ferry Laws (1879–81):</strong> Established free, compulsory, and secular primary education across the French Republic.</p>\n<p><strong>Civic Integration:</strong> Public schooling trained a disciplined, literate industrial workforce while inculcating secular national patriotism.</p>"
        }
    ],
    "10": [
        {
            "tr": "<p><strong>Sanayi Sınıflarının Oluşumu:</strong> Sanayileşme toplumda mülkiyet temelinde iki ana sınıf yarattı: Üretim araçlarının sahibi Burjuvazi ve mülksüz Proletarya.</p>\n<p><strong>Engels ve Manchester Raporu (1845):</strong> Friedrich Engels *İngiltere'de Emekçi Sınıfın Durumu* eserinde işçilerin açlık sınırında yaşamasını, çocuk işçiliğini ve hava kirliliğini belgeledi.</p>",
            "en": "<p><strong>Class Polarization:</strong> Industrialization bifurcated European society into capital-owning Bourgeoisie and propertyless Proletariat.</p>\n<p><strong>Engels's Manchester Account (1845):</strong> Friedrich Engels documented severe urban poverty, child labor, and malnutrition in British factories.</p>"
        },
        {
            "tr": "<p><strong>Sosyalist Teorinin Gelişimi:</strong> Fransız Devrimi eşitlikçiliğinden doğan ütopyacı sosyalizm, Karl Marx ve Friedrich Engels ile *Bilimsel Sosyalizm* halini aldı.</p>\n<p><strong>Sınıf Mücadelesi ve Komünizm:</strong> Marx, özel mülkiyetin lağvedilmesini ve tüm üretimin emekçilerce ortaklaşa yönetildiği sınıfsız toplumu savundu.</p>",
            "en": "<p><strong>Socialist Ideology:</strong> Evolved from 19th-century French utopian ideals into Karl Marx and Friedrich Engels's *Scientific Socialism*.</p>\n<p><strong>Class Struggle:</strong> Advocated abolishing private property and capitalist exploitation through collective proletarian governance.</p>"
        },
        {
            "tr": "<p><strong>Fransa-Prusya Savaşı (1870) ve Sedan Bozgunu:</strong> Sedan Savaşı'nda Prusya ordusu İmparator III. Napolyon'u esir alarak Fransız ordusunu çökertti.</p>\n<p><strong>İkinci İmparatorluk'un Çöküşü ve III. Cumhuriyet:</strong> 4 Eylül 1870'te Parisli işçiler ve halk belediyeyi basarak III. Cumhuriyet'i ilan etti ve şehri Prusya kuşatmasına karşı savunmaya başladı.</p>",
            "en": "<p><strong>Franco-Prussian War (1870):</strong> Prussian forces smashed the French army at Sedan, capturing Emperor Napoleon III.</p>\n<p><strong>Proclamation of the Republic:</strong> On September 4, 1870, Parisian crowds stormed the Hôtel de Ville, proclaiming the Third Republic to defend Paris.</p>"
        },
        {
            "tr": "<p><strong>Paris Kuşatması ve Ulusal Muhafızlar:</strong> Prusya ordusu Paris'i aylarca kuşattı; şehri savunan 200.000 kişilik Ulusal Muhafızlar çoğunlukla Parisli işçilerden oluştu.</p>\n<p><strong>Halkın İnfiali:</strong> Muhafazakar Ulusal Meclis'in Prusya ile ağır teslimiyet ve silahsızlanma antlaşması imzalaması Paris halkında hıyanet öfkesi yarattı.</p>",
            "en": "<p><strong>Siege of Paris:</strong> A grueling Prussian blockade starved Paris while the armed working-class National Guard defended the ramparts.</p>\n<p><strong>Popular Anger:</strong> The conservative Assembly's humiliating capitulation and armistice ignited intense working-class outrage.</p>"
        },
        {
            "tr": "<p><strong>18 Mart 1871 Ayaklanması:</strong> Başbakan Adolphe Thiers, halkın parasıyla alınan Montmartre tepesindeki toplara el koymak için gece orduyu gönderdi.</p>\n<p><strong>Hükümetin Kaçışı:</strong> İşçi kadınlar ve Ulusal Muhafızlar askerleri ikna etti; generaller vuruldu, Thiers hükümeti ve zenginler Versay'a kaçtı.</p>",
            "en": "<p><strong>Montmartre Outpost (March 18, 1871):</strong> Thiers sent troops to seize the National Guard's cannons on Montmartre hill.</p>\n<p><strong>Insurrection:</strong> Parisian women and workers blocked the troops; the army fraternized with rebels, driving Thiers to flee to Versailles.</p>"
        },
        {
            "tr": "<p><strong>Paris Komünü'nün Kuruluşu:</strong> 28 Mart 1871'de yapılan demokratik seçimlerle Komün Konseyi ilan edildi.</p>\n<p><strong>Tarihteki İlk İşçi Hükümeti:</strong> Paris kendi kendini yöneten radikal, eşitlikçi ve özgürlükçü bir siyasi ve sosyal laboratuvara dönüştü.</p>",
            "en": "<p><strong>Establishment of the Commune (March 28, 1871):</strong> Democratic elections inaugurated the world's first working-class municipal government.</p>\n<p><strong>Direct Democracy:</strong> Transformed Paris into a self-governing political laboratory rooted in worker control and civic freedom.</p>"
        },
        {
            "tr": "<p><strong>Radikal Sosyal Reformlar:</strong> Sürekli ordu lağvedilerek silahlı halk milisi kuruldu; din ve devlet işleri ayrıldı, kilise malları kamulaştırıldı.</p>\n<p><strong>İşçi Hakları ve Eğitim:</strong> Fırınlarda gece çalışması yasaklandı, terkedilmiş fabrikalar işçi kooperatiflerine devredildi, memur maaşları işçi ücretine eşitlendi.</p>",
            "en": "<p><strong>Social Legislation:</strong> Replaced standing army with armed citizens, separated Church and State, and secularized public education.</p>\n<p><strong>Worker Protection:</strong> Abolished night baking, transferred abandoned factories to worker cooperatives, and capped official salaries.</p>"
        },
        {
            "tr": "<p><strong>Kadın Katılımı ve Louise Michel:</strong> Kadınlar barikatlarda ve yönetimde aktif rol aldı; Louise Michel liderliğinde *Kadınlar Birliği* kuruldu.</p>\n<p><strong>Eşitlik Talebi:</strong> Parasız seküler kız eğitimi, kreşler ve kadınlar için eşit siyasi ve hukuki haklar talep edildi.</p>",
            "en": "<p><strong>Women's Union & Louise Michel:</strong> Women organized defense committees, built barricades, and demanded full political rights.</p>\n<p><strong>Egalitarian Reforms:</strong> Established public nurseries for working mothers, female technical academies, and equal pay principles.</p>"
        },
        {
            "tr": "<p><strong>Kanlı Hafta (La Semaine Sanglante - 21-28 Mayıs 1871):</strong> Versay ordusu Haussmann bulvarlarını kullanarak Paris'e girdi ve barikatları aştı.</p>\n<p><strong>Ağır Katliam:</strong> 15.000 ila 25.000 komünar (özellikle siyasileşen kadınlar ve işçiler) acımasızca katledildi, Père Lachaise duvarında kurşuna dizildi.</p>",
            "en": "<p><strong>Bloody Week (May 21–28, 1871):</strong> Versailles troops breached Paris, using Haussmann's wide boulevards to overwhelm barricades.</p>\n<p><strong>Mass Execution:</strong> Between 15,000 and 25,000 Communards were summarily executed, ending in the Père Lachaise wall massacre.</p>"
        },
        {
            "tr": "<p><strong>Kızıl Bayrak ve Semboller:</strong> Kızıl Bayrak uluslararası işçi hareketinin ve devrimin evrensel simgesi haline geldi; Vendôme Sütunu yıkıldı.</p>\n<p><strong>Tarihsel Etki:</strong> Komün, Marx ve Lenin tarafından \"proletarya diktatörlüğünün ve konsey demokrasisinin ilk örneği\" kabul edildi.</p>",
            "en": "<p><strong>Revolutionary Legacy:</strong> The Red Flag became the enduring universal symbol of international socialist working-class solidarity.</p>\n<p><strong>Historical Impact:</strong> Analyzed by Marx and Lenin as the foundational prototype for modern socialist democracy and council rule.</p>"
        }
    ],
    "11": [
        {
            "tr": "<p><strong>İktidara Yükseliş:</strong> 1801'de Fransızları Mısır'dan çıkarmak için gelen Arnavut birliğinin komutanı Mehmet Ali Paşa, 1805'te Osmanlı Sultanı tarafından Mısır Valisi atandı.</p>\n<p><strong>Avrupalı Model ve Devlet Reformu:</strong> Napolyon ordusunun askeri ve mühendislik gücünden etkilenerek Mısır'da radikal bir merkezileşme başlattı.</p>",
            "en": "<p><strong>Rise of Muhammad Ali (1805):</strong> Ottoman-Albanian commander Muhammad Ali seized power after the 1801 French withdrawal, recognized as Governor in 1805.</p>\n<p><strong>European Model:</strong> Impressed by French military engineering, he launched comprehensive state-building initiatives across Egypt.</p>"
        },
        {
            "tr": "<p><strong>Memlüklerin Tasfiyesi (1811):</strong> Kahire Kalesi baskınında 74 Memlük liderini yok ederek feodal askeri derebeyliği tamamen tasfiye etti.</p>\n<p><strong>Modern Askeri Okullar:</strong> Fransız subayların ders verdiği Aswan Askeri Okulu'nu açarak modern subay kadrosunu yetiştirdi.</p>",
            "en": "<p><strong>Citadel Massacre (1811):</strong> Eliminated 74 Mamluk leaders, destroying the centuries-old feudal military aristocracy.</p>\n<p><strong>Officer Academies:</strong> Established the Aswan Military Academy, employing French officers to train a native officer corps.</p>"
        },
        {
            "tr": "<p><strong>Dil Okulu (Madrasat al-Alsun):</strong> 1835'te Rifa'a el-Tahtavi yönetiminde kurularak Batı teknik, tıp ve askeri eserleri Arapça'ya çevrildi.</p>\n<p><strong>Bulak Matbaası:</strong> Devletin resmi gazetesi *Vekayi-i Mısriyye* ve teknik kitaplar basılarak geleneksel Osmanlı bürokrasisinden ayrışıldı.</p>",
            "en": "<p><strong>School of Languages (1835):</strong> Directed by Rifa'a al-Tahtawi to translate Western scientific, medical, and military works into Arabic.</p>\n<p><strong>Bulaq Press:</strong> Established state printing and the gazette *al-Waqai al-Misriyya*, fostering educational literacy and state authority.</p>"
        },
        {
            "tr": "<p><strong>Zorunlu Askerlik (Fellahlar):</strong> Mısır yerlisi fellahlar (köylüler) ilk kez zorunlu askerlikle orduya alındı; 1830'da disiplinli ordu 130.000 kişiye ulaştı.</p>\n<p><strong>Bürokratik Nüfus Sayımı:</strong> Asker toplama ve vergi idaresi için modern istatistik büroları ve nüfus sayım sistemi kuruldu.</p>",
            "en": "<p><strong>Peasant Conscription:</strong> Drafted native Egyptian fellahin into a professional standing army numbering 130,000 by 1830.</p>\n<p><strong>Bureaucratic Registries:</strong> Conducted systematic population censuses and land surveys for effective taxation and conscription.</p>"
        },
        {
            "tr": "<p><strong>Nakit Ürün Monopolü:</strong> Uzun elyaflı İskender pamuğu (Jumel) ekilerek Avrupa sanayisine ihraç edilen devlet tekeli kuruldu.</p>\n<p><strong>Vergi ve Vakıflar:</strong> Vakıf toprakları vergilendirilerek ulema sınıfının siyasi ve ekonomik bağımsızlığı zayıflatıldı.</p>",
            "en": "<p><strong>Cash Crop Monopolies:</strong> Introduced long-staple Jumel cotton, establishing a lucrative state export monopoly for European textile mills.</p>\n<p><strong>Fiscal Reform:</strong> Taxed religious endowments (Waqf), undermining the independent economic power of traditional Islamic scholars (Ulama).</p>"
        },
        {
            "tr": "<p><strong>İmparatorluk Genişlemesi:</strong> Mısır ordusu Sudan'ı (1820), Hicaz'ı, Mora'yı (1825) ve Suriye'yi fethetti.</p>\n<p><strong>Kütahya ve Nizip Zaferleri:</strong> 1832 Kütahya ve 1839 Nizip savaşlarında Osmanlı ordularını bozguna uğratarak Anadolu'ya ilerledi.</p>",
            "en": "<p><strong>Imperial Conquests:</strong> Egyptian armies conquered Sudan (1820), the Hijaz, Syria, and invaded Ottoman Anatolia.</p>\n<p><strong>Military Triumphs:</strong> Defeated Ottoman imperial armies at Kütahya (1832) and Nezib (1839), threatening Istanbul itself.</p>"
        },
        {
            "tr": "<p><strong>Büyük Güç Müdahalesi:</strong> Mısır'ın İstanbul'u tehdit etmesi üzerine İngiltere, Rusya ve Avusturya müdahale etti.</p>\n<p><strong>1840 Londra Antlaşması ve Hıdivlik:</strong> Mısır ordusu küçültüldü; ancak Mısır valiliği Mehmet Ali Paşa ailesine irsi (Hıdivlik) olarak verildi.</p>",
            "en": "<p><strong>Great Power Intervention:</strong> Britain and Austria intervened in 1840 to preserve Ottoman integrity and curtail Egyptian power.</p>\n<p><strong>Treaty of London (1840):</strong> Reduced Egypt's army but recognized Mehmed Ali's hereditary dynasty (Khedivate) over Egypt.</p>"
        },
        {
            "tr": "<p><strong>Süveyş Kanalı'nın Açılması (1869):</strong> Hıdiv İsmail Paşa döneminde Fransız mühendis Lesseps ile Süveyş Kanalı açıldı.</p>\n<p><strong>Mali Kriz ve Borçlar:</strong> Aşırı altyapı ve kanal harcamaları Mısır'ı Avrupalı bankalara yüksek faizle borçlandırarak krize soktu.</p>",
            "en": "<p><strong>Suez Canal (1869):</strong> Constructed under Khedive Ismail, revolutionizing global maritime trade between Europe and Asia.</p>\n<p><strong>Debt Spiral:</strong> Substantial infrastructure loans forced Egypt into financial insolvency with European creditors.</p>"
        },
        {
            "tr": "<p><strong>Çifte Kontrol (1876):</strong> Mısır borçlarını ödeyemeyince İngiliz ve Fransız bakanlardan oluşan mali denetim idaresi kuruldu.</p>\n<p><strong>Urabi Paşa İsyanı (1881):</strong> Mısırlı subay Ahmed Urabi \"Mısır Mısırlılarındır\" sloganıyla sömürgeci müdahaleye karşı ulusal ayaklanma başlattı.</p>",
            "en": "<p><strong>Dual Control (1876):</strong> Anglo-French financial commissioners assumed control over Egyptian state revenues to service foreign debts.</p>\n<p><strong>Urabi Revolt (1881):</strong> Colonel Ahmad Urabi led a nationalist military rebellion demanding constitutional government and an end to foreign control.</p>"
        },
        {
            "tr": "<p><strong>1882 İngiliz İşgali:</strong> İngiltere İskenderiye'yi bombaladı ve Tell el-Kebir Savaşı'nda Urabi ordusunu mağlup etti.</p>\n<p><strong>Fiili İşgal (Örtülü Koruma):</strong> Mısır kağıt üzerinde Osmanlı eyaleti kalsa da İngiltere'nin fiili sömürgesi (Veiled Protectorate) haline geldi.</p>",
            "en": "<p><strong>British Invasion (1882):</strong> British naval forces bombarded Alexandria and defeated Urabi's army at Tel el-Kebir.</p>\n<p><strong>Veiled Protectorate:</strong> Britain established de facto imperial control over Egypt while maintaining nominal Ottoman suzerainty.</p>"
        }
    ],
    "12": [
        {
            "tr": "<p><strong>Görülmemiş Ölçek:</strong> 1880-1914 arasında Avrupa güçleri dünya karalarının %75'ini sömürgeleştirdi; Afrika kıtasının neredeyse tamamı conquered edildi.</p>\n<p><strong>Küresel Etki:</strong> Günümüz ülke sınırları, dil haritası ve küresel ekonomik bağımlılık ilişkileri bu dönemde şekillendi.</p>",
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
            "tr": "<p><strong>Şirket Sömürgeciliği:</strong> Cecil Rhodes Güney Afrika elmas madenlerini tekelleyen De Beers şirketini kurdu; kendi adına Rodezya kolonisini oluşturdu.</p>\n<p><strong>Devlet Desteği:</strong> \"Bayrak ticareti, ticaret de bayrağı takip eder\" ilkesiyle özel şirket mülkleri devlet kolonilerine dönüştürüldü.</p>",
            "en": "<p><strong>Chartered Companies:</strong> Tycoons like Cecil Rhodes consolidated diamond monopolies (De Beers) and founded Rhodesia.</p>\n<p><strong>State Support:</strong> Private corporate conquests were rapidly absorbed into formal crown and state colonial administrations.</p>"
        },
        {
            "tr": "<p><strong>Diplomatik Talan:</strong> Bismarck liderliğinde Berlin'de toplanan 14 Avrupa devleti Afrika'yı masa başında paylaştı.</p>\n<p><strong>Fiili İşgal Kuralı:</strong> Bir bölgede hak iddia etmek için kıyıda fiili askeri ve idari varlık (Effective Occupation) şartı getirildi.</p>",
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

weeks = data.get("weeks", {})
for wk_id, new_slides in ultra_slides.items():
    if wk_id in weeks:
        slides = weeks[wk_id].get("slides", [])
        for i, s_item in enumerate(slides):
            if i < len(new_slides):
                s_item["text"] = new_slides[i]

new_content = "var learningData = window.learningData = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"

with open("data.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print("data.js updated with ultra-rich slides!")
