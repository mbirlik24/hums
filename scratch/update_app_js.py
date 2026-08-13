import sys, os, re

# Python script to update app.js cleanly

with open('app.js', 'r', encoding='utf-8') as f:
    app_code = f.read()

# 1. Update completedWeeks and weekScores in state
old_state_completed = "completedWeeks: { 2: false, 3: false, 4: false, 5: false, 6: false },"
new_state_completed = "completedWeeks: { 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false },"

old_state_scores = "weekScores: { 2: null, 3: null, 4: null, 5: null, 6: null },"
new_state_scores = "weekScores: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null, 11: null, 12: null },"

app_code = app_code.replace(old_state_completed, new_state_completed)
app_code = app_code.replace(old_state_scores, new_state_scores)

# 2. Update mapViews
old_mapviews = """const mapViews = {
  2: { center: [10.0, -10.0], zoom: 2.3 }, // World view
  3: { center: [15.0, -32.0], zoom: 2.8 }, // Atlantic Focus
  4: { center: [39.0, -78.0], zoom: 5 }, // North America Focus
  5: { center: [47.0, 3.0], zoom: 5 }, // Europe Focus
  6: { center: [19.0, -74.0], zoom: 7.2 }, // Hispaniola Focus
  7: { center: [30.0, 31.0], zoom: 4.5 } // Egypt & Mediterranean Focus
};"""

new_mapviews = """const mapViews = {
  2: { center: [10.0, -10.0], zoom: 2.3 }, // World view
  3: { center: [15.0, -32.0], zoom: 2.8 }, // Atlantic Focus
  4: { center: [39.0, -78.0], zoom: 5 }, // North America Focus
  5: { center: [47.0, 3.0], zoom: 5 }, // Europe Focus
  6: { center: [19.0, -74.0], zoom: 7.2 }, // Hispaniola Focus
  7: { center: [30.0, 31.0], zoom: 4.5 }, // Egypt & Mediterranean Focus
  8: { center: [38.5, 23.5], zoom: 6.0 }, // Balkans & Greece Focus
  9: { center: [52.5, 10.0], zoom: 4.8 }, // Industrial Europe Focus
  10: { center: [48.85, 2.35], zoom: 11.5 }, // Paris Commune Focus
  11: { center: [27.0, 30.0], zoom: 5.5 }, // Egypt Modernization Focus
  12: { center: [5.0, 20.0], zoom: 3.2 }  // Global New Imperialism Focus
};"""

app_code = app_code.replace(old_mapviews, new_mapviews)

# 3. Inject detailed slide text for weeks 8-12 into getDetailedSlideAnalysisText
# We will inject right before `return (data[week] && data[week][slideIndex])`

analysis_injection = """
    8: { // Week 8: The Eastern Question & Greek Independence
      0: {
        tr: `<h4>Napolyon Sonrası Avrupa ve Milliyetçilik Dalgası</h4><p>Fransız Devrim savaşları çok etnikli Osmanlı, Rus ve Avusturya-Macaristan imparatorluklarında ulusal bilinci tutuşturmuştur. Dinsel cemaat aidiyeti yerini etnik kimliğe bırakmıştır.</p>`,
        en: `<h4>Post-Napoleonic Europe & The Wave of Nationalism</h4><p>The Revolutionary Wars ignited national consciousness across multiethnic empires, replacing multi-religious coexistence with ethnic identity.</p>`
      },
      1: {
        tr: `<h4>Küçük Kaynarca (1774) ve Rus Hamiliği</h4><p>Rusya, Osmanlı Ortodoks tebaasının koruyuculuğunu üstlenerek Karadeniz'de hakimiyet kurdu ve Doğu Sorunu'nun diplomatik fitilini ateşledi.</p>`,
        en: `<h4>Küçük Kaynarca (1774) & Russian Protection</h4><p>Russia acquired guardianship over Ottoman Orthodox subjects, birthing the Eastern Question in European diplomacy.</p>`
      },
      2: {
        tr: `<h4>Fenerli Rumlar ve Akdeniz Ticaret Tekeli</h4><p>18. yüzyılda Fenerli Rumlar Osmanlı hariciyesinde baştercüman ve voyvoda olurken, Rum tüccarlar Doğu Akdeniz nakliyesini tekellerine aldı.</p>`,
        en: `<h4>Phanariotes & Mediterranean Trade Dominance</h4><p>Phanariotes dominated Ottoman diplomacy and international maritime commerce across the Levant.</p>`
      },
      3: {
        tr: `<h4>Aydınlanma ve Filiki Eterya (1814)</h4><p>Odessa'da masonik modelle kurulan Filiki Eterya, Aydınlanma ideallerini bağımsızlık mücadelesine dönüştürdü.</p>`,
        en: `<h4>Enlightenment & Philiki Etaireia (1814)</h4><p>Founded in Odessa, Philiki Etaireia organized merchants and intellectuals using Masonic secret structures.</p>`
      },
      4: {
        tr: `<h4>1821 Mora İsyanı ve Piskopos Germanos</h4><p>25 Mart 1821'de Mora'da çekilen bayrakla isyan başladı; Atina ve Missolonghi ele geçirildi.</p>`,
        en: `<h4>1821 Peloponnesian Revolt & Bishop Germanos</h4><p>On March 25, 1821, Bishop Germanos initiated the armed revolution in Morea.</p>`
      },
      5: {
        tr: `<h4>Dervenakia Zaferi ve Kolokotronis</h4><p>1822'de Kolokotronis, Dramalı Paşa ordusunu Dervenakia Geçidi'nde imha etti.</p>`,
        en: `<h4>Dervenakia Victory & Kolokotronis</h4><p>Kolokotronis ambushed and destroyed Dramali Pasha's Ottoman army in August 1822.</p>`
      },
      6: {
        tr: `<h4>Sakız Katliamı (1822) ve Osmanlı Misillemeleri</h4><p>Sakız Adası'ndaki trafedi ve Patrik V. Gregorios'un idamı Avrupa'da infial yarattı.</p>`,
        en: `<h4>Chios Massacre (1822) & Reprisals</h4><p>The Chios Massacre and execution of Patriarch Gregory V horrified European public opinion.</p>`
      },
      7: {
        tr: `<h4>Mısır Ordusunun Müdahalesi: İbrahim Paşa</h4><p>1825'te Mısır Valisi Mehmet Ali Paşa'nın oğlu İbrahim Paşa modern ordusuyla Mora'ya çıktı.</p>`,
        en: `<h4>Egyptian Intervention: Ibrahim Pasha (1825)</h4><p>Ibrahim Pasha landed disciplined Egyptian troops in Morea, recapturing Athens by 1827.</p>`
      },
      8: {
        tr: `<h4>Filhelenizm ve Lord Byron'ın Ölümü</h4><p>Avrupalı Romantıklerin Filhelenizm hareketi ve Lord Byron'ın Missolonghi'de ölümü kamuoyunu sarsmıştır.</p>`,
        en: `<h4>Philhellenism & Death of Lord Byron (1824)</h4><p>Philhellenism mobilized European elites. Byron's death at Missolonghi pushed Great Powers to act.</p>`
      },
      9: {
        tr: `<h4>Navarin Savaşı (1827) ve 1830 Bağımsızlığı</h4><p>20 Ekim 1827 Navarin zaferi sonrası 1830 Londra Protokolü ile bağımsız Yunan Krallığı ilan edildi.</p>`,
        en: `<h4>Navarino (1827) & 1830 Greek Kingdom</h4><p>Allied naval victory at Navarino led directly to the 1830 London Protocol proclaiming Greek statehood.</p>`
      }
    },
    9: { // Week 9: Industrial Revolutions & Social Transformation
      0: {
        tr: `<h4>I. Sanayi Devrimi ve Buhar Gücü</h4><p>18. yüzyıl sonunda İngiltere'de buhar gücü ve kömürün kullanımı üretimi fabrikalara taşıdı.</p>`,
        en: `<h4>First Industrial Rev & Steam Power</h4><p>Steam engines and coal transformed manufacturing into the modern factory system in late 18th-century Britain.</p>`
      },
      1: {
        tr: `<h4>Kredi Kurumları ve Sermaye Birikimi</h4><p>Ticari servet kurumsal bankacılık üzerinden sanayi tesislerine yatırıldı.</p>`,
        en: `<h4>Credit Institutions & Capital Accumulation</h4><p>Commercial banks funneled international trade wealth into heavy industrial investment.</p>`
      },
      2: {
        tr: `<h4>Tarımsal Çitletme ve Proleterleşme</h4><p>Toprakların çitletilmesi köylüleri kente sürerek mülksüz işçi sınıfını kurdu.</p>`,
        en: `<h4>Enclosures & Urban Proletariat</h4><p>Land enclosure acts displaced rural peasants, generating an urban industrial working class.</p>`
      },
      3: {
        tr: `<h4>Demiryolları ve Ulaşım Devrimi</h4><p>Demiryolu patlaması nakliye maliyetlerini düşürdü ve çelik sanayisini büyüttü.</p>`,
        en: `<h4>Railway Boom & Transport Revolution</h4><p>Railways lowered freight costs and catalyzed metallurgical heavy industry expansion.</p>`
      },
      4: {
        tr: `<h4>Bessemer Çeliği ve Krupp Kartelleri</h4><p>1856 Bessemer yöntemi ucuz çelik kitle üretimini sağladı; dev sanayi kartelleri doğdu.</p>`,
        en: `<h4>Bessemer Process & Krupp Conglomerates</h4><p>The 1856 Bessemer process enabled mass steel production, spawning heavy industrial cartels.</p>`
      },
      5: {
        tr: `<h4>Elektrik Gücü ve Edison Ampulü</h4><p>1879 Edison akkor ampulü fabrikalarda 24 saat kesintisiz çalışmayı mümkün kıldı.</p>`,
        en: `<h4>Electricity & Edison's Incandescent Lamp</h4><p>Electric lighting enabled continuous 24-hour factory shifts and urban electrification.</p>`
      },
      6: {
        tr: `<h4>Kentsel Kitle Ulaşımı: Metrolar</h4><p>1863 Londra ve 1900 Paris Metroları kentsel mekan organizasyonunu değiştirdi.</p>`,
        en: `<h4>Urban Mass Transit: Subways</h4><p>Subway lines (1863 London, 1900 Paris) facilitated massive suburban commuter flows.</p>`
      },
      7: {
        tr: `<h4>Benz Otomobili ve Taylorizm</h4><p>1885 Benz otomobili petrol/kauçuk sektörünü canlandırdı; montaj hatları üretimi standartlaştırdı.</p>`,
        en: `<h4>Automobiles & Taylorist Assembly Lines</h4><p>Carl Benz's 1885 car and Taylorist scientific management standardized mass production.</p>`
      },
      8: {
        tr: `<h4>Kentleşme ve Burjuvazi Ayrışması</h4><p>Hızlı kentleşme burjuvaziyi lüks bölgelere, işçileri ise gecekondu mahallelerine ayırdı.</p>`,
        en: `<h4>Urbanization & Spatial Class Segregation</h4><p>Metropolitan growth segregated wealthy bourgeois neighborhoods from working-class slums.</p>`
      },
      9: {
        tr: `<h4>Seküler Devlet Eğitimi: Ferry Yasaları</h4><p>Fransız Ferry Yasaları ilköğretimi parasız ve seküler yaparak milli sadakat aşıladı.</p>`,
        en: `<h4>Secular Public Schooling: Ferry Laws</h4><p>French Ferry Laws (1879-1881) mandated free, secular primary schooling for national discipline.</p>`
      }
    },
    10: { // Week 10: Labor Movement, Paris Commune & Anarchism
      0: {
        tr: `<h4>19. Yüzyıl Sosyalizmi ve Marx/Engels</h4><p>Marx ve Engels komünizmi işçi sınıfının kapitalist sömürüye karşı nihai kurtuluş yolu ilan etti.</p>`,
        en: `<h4>19th Century Socialism & Marx/Engels</h4><p>Marx and Engels formulated scientific socialism, advocating working-class emancipation.</p>`
      },
      1: {
        tr: `<h4>Fransa-Prusya Savaşı ve 4 Eylül 1870</h4><p>Sedan yenilgisi sonrası III. Cumhuriyet ilan edildi; Paris halkı silahlı halk muhafızı oldu.</p>`,
        en: `<h4>Franco-Prussian War & 3rd Republic</h4><p>Following the 1870 Sedan defeat, Paris proclaimed the Third Republic and armed popular guards.</p>`
      },
      2: {
        tr: `<h4>Montmartre Topları ve 18 Mart 1871</h4><p>18 Mart'ta Montmartre toplarını alma girişimi püskürtülerek Komün kuruldu.</p>`,
        en: `<h4>Montmartre Cannons & Commune Outbreak</h4><p>Defending Montmartre cannons on March 18, 1871 launched the worker-led Paris Commune.</p>`
      },
      3: {
        tr: `<h4>Komün'ün Radikal Sosyal Reformları</h4><p>Komün sürekli orduyu kaldırdı, din ile devleti ayırdı, gece fırıncılığını yasakladı.</p>`,
        en: `<h4>Commune's Radical Social Legislation</h4><p>The Commune abolished standing armies, separated Church and State, and established a Labor Exchange.</p>`
      },
      4: {
        tr: `<h4>Kadın Komünarlar ve Kulüpler</h4><p>Louise Michel ve kadın komünarlar barikatlarda ve kulüplerde eşitlik için mücadele etti.</p>`,
        en: `<h4>Women Communards & Clubs</h4><p>Women actively commanded barricades and political clubs, demanding full gender equality.</p>`
      },
      5: {
        tr: `<h4>Semboller Savaşı: Vendôme Sütunu</h4><p>Yasaklı Kızıl Bayrak resmi simge oldu; Napolyon'un Place Vendôme Sütunu yıkıldı.</p>`,
        en: `<h4>Symbols: Red Flag & Vendôme Column</h4><p>Adopted the Red Flag and toppled the imperial Place Vendôme Column.</p>`
      },
      6: {
        tr: `<h4>Kanlı Hafta ve Versay Katliamı</h4><p>21-28 Mayıs 1871'de Versay ordusu Haussmann bulvarlarından girip 15-25 bin komünarı katletti.</p>`,
        en: `<h4>Bloody Week (Semaine Sanglante)</h4><p>Government troops breached Paris barricades, executing 15,000-25,000 communards.</p>`
      },
      7: {
        tr: `<h4>Komün Hafızası: Sacré-Cœur</h4><p>Komün'ün 'günahlarını arındırmak' bahanesiyle Montmartre'a Sacré-Cœur Bazilikası inşa edildi.</p>`,
        en: `<h4>Political Memory: Sacré-Cœur</h4><p>Sacré-Cœur Cathedral was built atop Montmartre to expiate the 'sins of the Commune'.</p>`
      },
      8: {
        tr: `<h4>Anarşizmin Siyasi Felsefesi: Proudhon</h4><p>Proudhon ('Mülkiyet hırsızlıktır!') ve Bakunin devleti tamamen ilga etmeyi savundu.</p>`,
        en: `<h4>Anarchism: Proudhon & Bakunin</h4><p>Proudhon ('Property is theft!') and Bakunin advocated direct action over state capture.</p>`
      },
      9: {
        tr: `"Eylemle Propaganda" ve Dinamit Dalgası</h4><p>Kropotkin ilkeleri ve Nobel'in 1868 dinamiti 1892-1894 anarşist suikast dalgasını besledi.</p>`,
        en: `<h4>'Propaganda by Deed' & Dynamite Wave</h4><p>Kropotkin's principles and Nobel's dynamite fueled the 1892-1894 anarchist campaign.</p>`
      }
    },
    11: { // Week 11: Egypt Modernization & British Invasion
      0: {
        tr: `<h4>Batı-Dışı Modernleşme: Şark'ta Devlet İnşası</h4><p>Mısır ve Meiji Japonyası kültürel özgünlüğünü koruyarak ordu ve bürokrasiyi modernleştirdi.</p>`,
        en: `<h4>Non-Western Modernization</h4><p>Non-Western states like Egypt modernized armies and institutions while preserving culture.</p>`
      },
      1: {
        tr: `<h4>Mehmet Ali Paşa ve 1811 Memlük Katliamı</h4><p>1805 valisi Mehmet Ali Paşa, 1811 Kahire Kalesi katliamıyla Memlük feodalizmini yok etti.</p>`,
        en: `<h4>Muhammad Ali Pasha & Citadel Massacre</h4><p>Muhammad Ali Pasha eliminated Mamluk warlord power at the Cairo Citadel in 1811.</p>`
      },
      2: {
        tr: `<h4>Askeri Okullar ve Mütercimler Okulu (1835)</h4><p>Aswan akademisi ve 1835 Mütercimler Okulu Arapça ders kitaplarıyla yerli aydın bürokrasi yetiştirdi.</p>`,
        en: `<h4>Academies & School of Languages (1835)</h4><p>The 1835 School of Languages fostered a new Arabic-speaking administrative elite.</p>`
      },
      3: {
        tr: `<h4>Fellah Askerliği ve Bulaq Matbaası</h4><p>130.000 kişilik fellah ordusu ve Bulaq Matbaası ile merkezi devlet idaresi kuruldu.</p>`,
        en: `<h4>Fellahin Conscription & Bulaq Press</h4><p>Conscription of 130,000 fellahin required modern statistics and state gazette publishing.</p>`
      },
      4: {
        tr: `<h4>Jumel Pamuğu ve Mahmutiye Kanalı</h4><p>Jumel pamuğu temel ihraç ürünü yapıldı; Mahmutiye Kanalı angaryayla kazıldı.</p>`,
        en: `<h4>Jumel Cotton & Mahmudiyyah Corvée</h4><p>Long-staple Jumel cotton became Egypt's primary export cash crop, expanded via forced labor.</p>`
      },
      5: {
        tr: `<h4>Mısır Ordusunun Suriye Seferi ve Nizip</h4><p>İbrahim Paşa Suriye'yi alıp Kütahya'ya dayandı; 1839 Nizip zaferi Avrupa'yı müdahaleye zorladı.</p>`,
        en: `<h4>Syrian Expedition & Nezib (1839)</h4><p>Ibrahim Pasha conquered Syria and routed Ottoman forces at Nezib (1839).</p>`
      },
      6: {
        tr: `<h4>Balta Limanı (1838) ve Londra Antlaşması (1841)</h4><p>1838 Balta Limanı Mısır tekelini yıktı; 1841 antlaşması irsi khedivelik tanıdı.</p>`,
        en: `<h4>Baltalimanı (1838) & 1841 Treaty</h4><p>The 1838 Baltalimanı treaty destroyed state monopolies; 1841 recognized hereditary rule.</p>`
      },
      7: {
        tr: `<h4>Tahtawi, Ali Mübarek ve Hidiv İsmail</h4><p>Tahtawi kültürel dönüşümü yönetti; Hidiv İsmail Kahire'yi Paris tarzı yeniledi.</p>`,
        en: `<h4>Tahtawi, Ali Mubarak & Khedive Isma'il</h4><p>Khedive Isma'il modernized Cairo into a European-style capital with boulevards.</p>`
      },
      8: {
        tr: `<h4>Süveyş Kanalı (1858-1869) ve De Lesseps</h4><p>1869'da açılan Süveyş Kanalı İngiltere-Hindistan deniz yolunu yarı yarıya kısalttı.</p>`,
        en: `<h4>Suez Canal (1858-1869) & Lesseps</h4><p>Opened in 1869 by Ferdinand de Lesseps, the canal halved transit times to India.</p>`
      },
      9: {
        tr: `<h4>İflas, Borçlar İdaresi ve Disraeli %44 Hisse</h4><p>1875'te Disraeli Süveyş hisselerini aldı; 1876 Borçlar Komisyonu maliyeye el koydu.</p>`,
        en: `<h4>Bankruptcy & Disraeli 44% Purchase</h4><p>Disraeli bought 44% Suez shares in 1875; European debt commission assumed control in 1876.</p>`
      },
      10: {
        tr: `<h4>Urabi İsyanı ve 1882 İngiliz İşgali</h4><p>Albay Ahmed Urabi isyanını bastıran İngiltere, 1882'de Mısır'ı Cromer vesayetinde işgal etti.</p>`,
        en: `<h4>Urabi Revolt & 1882 British Invasion</h4><p>Britain crushed Ahmed Urabi's revolt at Tel el-Kebir in 1882, occupying Egypt under Cromer.</p>`
      }
    },
    12: { // Week 12: New Imperialism
      0: {
        tr: `<h4>Yeni Emperyalizm Çağı (1882-1914)</h4><p>1882-1914 arasında Avrupalı güçler dünya karalarının 3/4'ünü fethedip Afrika'yı paylaştı.</p>`,
        en: `<h4>Age of New Imperialism (1882-1914)</h4><p>Between 1882 and 1914, European powers conquered 3/4 of the globe and partitioned Africa.</p>`
      },
      1: {
        tr: `<h4>3G İlkesi: God, Gold & Glory</h4><p>Yeni Emperyalizm: God (misyonerlik), Gold (maden ve pazar hırsı) ve Glory (büyük güç rekabeti) ile yürüdü.</p>`,
        en: `<h4>The Three G's: God, Gold & Glory</h4><p>Driven by God (missionary work), Gold (resource greed), and Glory (great power geopolitics).</p>`
      },
      2: {
        tr: `<h4>Medenileştirme Misyonu ve Jules Ferry</h4><p>Jules Ferry 1884'te 'üstün ırkların medenileştirme görevi' olduğunu savundu.</p>`,
        en: `<h4>Civilizing Mission & Jules Ferry</h4><p>Jules Ferry framed imperialism as a 'civilizing mission' of superior races over lower ones.</p>`
      },
      3: {
        tr: `<h4>Altın ve Elmas Hırsı: Cecil Rhodes ve De Beers</h4><p>Cecil Rhodes De Beers şirketiyle dünya elmas piyasasının %40'ını tekeline alıp Rodezya'yı kurdu.</p>`,
        en: `<h4>Diamond Greed: Cecil Rhodes & De Beers</h4><p>Cecil Rhodes controlled 40% of global diamonds via De Beers and founded Rhodesia.</p>`
      },
      4: {
        tr: `<h4>Büyük Güç Rekabeti ve Weltpolitik</h4><p>Kaiser II. Wilhelm'in Weltpolitik stratejisi Anglo-Alman donanma yarışını başlattı.</p>`,
        en: `<h4>Great Power Rivalry & Weltpolitik</h4><p>Kaiser Wilhelm II's Weltpolitik sparked an explosive Anglo-German naval arms race.</p>`
      },
      5: {
        tr: `<h4>Berlin Konferansı (1884-85) ve Afrika Talanı</h4><p>1884-85 Berlin Konferansı Afrika'yı paylaşarak 'fiili işgal' kuralını koydu.</p>`,
        en: `<h4>Berlin Conference (1884-85) & Scramble</h4><p>The 1884-85 Berlin Conference partitioned Africa under the 'effective occupation' rule.</p>`
      },
      6: {
        tr: `<h4>Faşoda Krizi (1898) ve Fas Krizleri</h4><p>1898 Faşoda'da İngiltere ve Fransa, 1905/1911 Fas Krizlerinde Almanya ve Fransa savaşın eşiğine geldi.</p>`,
        en: `<h4>Fashoda Incident (1898) & Moroccan Crises</h4><p>Imperial clashes at Fashoda (1898) and Morocco (1905, 1911) brought Europe to the brink of war.</p>`
      },
      7: {
        tr: `<h4>İttifak ve İtilaf Bloklaşması</h4><p>Sömürge rekabeti 1882 Üçlü İttifak karşısında 1907 Üçlü İtilaf'ı doğurdu.</p>`,
        en: `<h4>Triple Alliance vs Triple Entente</h4><p>Colonial friction solidified rival military blocs: the Triple Alliance vs the Triple Entente.</p>`
      },
      8: {
        tr: `<h4>Sömürge Vahşeti: Herero Soykırımı (1904)</h4><p>1904'te Alman imha emriyle 65 bin Herero katledildi; Boer Savaşı'nda ilk toplama kampları kuruldu.</p>`,
        en: `<h4>Herero Genocide (1904) & Boer Camps</h4><p>German forces committed the 1904 Herero Genocide, while Britain invented concentration camps.</p>`
      },
      9: {
        tr: `<h4>Sosyal Emperyalizm ve İmparatorluk Haritaları</h4><p>İç işçi huzursuzluğunu dış fethe yönlendiren Sosyal Emperyalizm, okullarda haritalarla gurur aşıladı.</p>`,
        en: `<h4>Social Imperialism & Empire Maps</h4><p>Social Imperialism used colonial conquests and red empire maps to deflect domestic labor unrest.</p>`
      },
      10: {
        tr: `<h4>İzci Hareketi (Baden-Powell 1907) ve Erkeklik Kültü</h4><p>Baden-Powell 1907'de gençleri emperyal savaşa hazırlamak için İzci Hareketi'ni kurdu.</p>`,
        en: `<h4>Boy Scouts (1907) & Virility Cult</h4><p>Baden-Powell founded the Boy Scouts in 1907 to train youth for imperial warfare and virility.</p>`
      }
    },
"""

target = "    return (data[week] && data[week][slideIndex])"
app_code = app_code.replace(target, analysis_injection + "    return (data[week] && data[week][slideIndex])")

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app_code)

print("Successfully updated app.js with state, mapViews, and slide analysis texts!")
