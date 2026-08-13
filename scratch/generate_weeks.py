import json, sys, os

# Create script that will generate weeks 8-12 JS string and insert into data.js

def create_week_8():
    return {
        "id": "8",
        "themeColor": "#ea580c",
        "title": {
            "tr": "Doğu Sorunu ve Yunanistan Bağımsızlık Hareketi",
            "en": "The Eastern Question & Greek National Liberation"
        },
        "video": {
            "src": "https://drive.google.com/file/d/1y9JMjselukGWTnJiIqU-swfdMP06Y6Cr/view?usp=sharing",
            "desc": {
                "tr": "Doğu Sorunu, Küçük Kaynarca Antlaşması ve 1821 Yunan Devrimi.",
                "en": "The Eastern Question, Treaty of Küçük Kaynarca, and the 1821 Greek Revolution."
            }
        },
        "slides": [
            {
                "title": {
                    "tr": "1. Doğu Sorunu ve Napolyon Sonrası Avrupa",
                    "en": "1. The Eastern Question & Post-Napoleonic Europe"
                },
                "text": {
                    "tr": "Fransız Devrim savaşları ve Napolyon'un Mısır seferi, milliyetçilik fikrini tüm Avrupa kıtasına yaydı. Bu gelişme, Avusturya-Macaristan, Rusya ve Osmanlı İmparatorluğu gibi çok etnikli imparatorluklar için varoluşsal bir tehdit oluşturdu. Dinsel cemaat aidiyeti yerini katı etnik milliyetçiliğe bıraktı.",
                    "en": "The Napoleonic Wars catalyzed the diffusion of nationalism across Europe, posing a severe threat to multiethnic monarchies—especially the Austrian, Russian, and Ottoman Empires. Religious identities were progressively ethnicized."
                },
                "mapState": {
                    "markers": ["athens", "peloponnesus", "kucuk_kaynarca"],
                    "routes": ["philiki_route"],
                    "view": { "center": [40.0, 25.0], "zoom": 5.2 }
                }
            },
            {
                "title": {
                    "tr": "2. Küçük Kaynarca Antlaşması (1774) ve Rus Hamiliği",
                    "en": "2. Treaty of Küçük Kaynarca (1774) & Russian Protectorate"
                },
                "text": {
                    "tr": "1774 Küçük Kaynarca Antlaşması ile Rusya, Kırım'da hakimiyet sağladı, Karadeniz ve Boğazlar'da serbest seyrüsefer hakkı kazandı ve Osmanlı Ortodoks tebaasının hamisi rolünü üstlendi. Osmanlı İmparatorluğu 'korkulan düşman' konumundan Avrupalı güçlerin paylaşım hedefi olan 'Doğu Sorunu' alanına dönüştü.",
                    "en": "The 1774 Treaty of Küçük Kaynarca established Russian influence over the Black Sea, secured Straits navigation rights, and granted Russia effective guardianship over Ottoman Orthodox subjects, birthing the 'Eastern Question'."
                },
                "mapState": {
                    "markers": ["kucuk_kaynarca", "odessa"],
                    "routes": ["philiki_route"],
                    "view": { "center": [44.5, 29.0], "zoom": 6.0 }
                }
            },
            {
                "title": {
                    "tr": "3. Fenerli Rumlar (Phanariotes) ve Akdeniz Ticareti",
                    "en": "3. The Phanariotes & Mediterranean Trade Monopoly"
                },
                "text": {
                    "tr": "18. yüzyılda diplomasi ve ticarette uzmanlaşan Fenerli Rumlar (Phanariotes), Osmanlı hariciye bürokrasisinde baştercümanlık ve voyvodalık makamlarını ele geçirdi. İngiliz-Fransız savaşları sırasında Fransız tüccar filolarının çökmesiyle, Rum tüccarlar Doğu Akdeniz ticaretini tamamen tekellerine aldı.",
                    "en": "During the 18th century, Phanariote Greeks gained elite administrative positions as dragomans and governors in the Ottoman state. The disruption of Western shipping by Revolutionary Wars enabled Greek merchants to dominate Mediterranean trade."
                },
                "mapState": {
                    "markers": ["athens", "peloponnesus", "chios"],
                    "routes": [],
                    "view": { "center": [38.0, 24.0], "zoom": 6.5 }
                }
            },
            {
                "title": {
                    "tr": "4. Aydınlanma Fikirleri ve Filiki Eterya (1814)",
                    "en": "4. Enlightenment & Philiki Etaireia (1814)"
                },
                "text": {
                    "tr": "1814 yılında Odessa'da üç tüccar tarafından masonik yapıda kurulan Filiki Eterya (Dostlar Cemiyeti), Aydınlanma'nın akılcılık ve hukuk devleti ilkelerini benimsedi. Kısa sürede on binlerce üyeye ulaşan cemiyet, dini cemaat kimliğini seküler Yunan ulusal bilincine dönüştürdü.",
                    "en": "Founded in 1814 in Odessa by Greek merchants, the secret society Philiki Etaireia (Society of Friends) utilized Masonic organization to spread Enlightenment political principles and mobilize thousands for Greek liberation."
                },
                "mapState": {
                    "markers": ["odessa", "athens"],
                    "routes": ["philiki_route"],
                    "view": { "center": [42.0, 27.0], "zoom": 5.5 }
                }
            },
            {
                "title": {
                    "tr": "5. 1821 Mora Ayaklanması ve Piskopos Germanos",
                    "en": "5. 1821 Peloponnesian Revolt & Bishop Germanos"
                },
                "text": {
                    "tr": "25 Mart 1821 tarihinde Piskopos Germanos'un Mora'da sancak açmasıyla Yunan Bağımsızlık Savaşı fiilen başladı. İsyan hızla Ege adalarına (Hydra, Spetses) ve Atina, Missolonghi gibi stratejik kentlere yayıldı.",
                    "en": "On March 25, 1821, Bishop Germanos raised the revolutionary standard in the Peloponnese, launching the war of independence. The uprising rapidly captured key strongholds including Athens and Missolonghi."
                },
                "mapState": {
                    "markers": ["peloponnesus", "athens", "missolonghi"],
                    "routes": [],
                    "view": { "center": [37.8, 22.5], "zoom": 7.0 }
                }
            },
            {
                "title": {
                    "tr": "6. Dervenakia Zaferi ve Kolokotronis",
                    "en": "6. Dervenakia Victory & Kolokotronis"
                },
                "text": {
                    "tr": "Yunan komutan Theodoros Kolokotronis, 1822 yılında Dervenakia Geçidi'nde Mahmud Dramalı Paşa komutasındaki Osmanlı ordusunu pusuya düşürerek imha etti. Bu zafer, Mora'daki insancı güçlerin askeri özgüvenini pekiştirdi.",
                    "en": "In August 1822, Theodoros Kolokotronis ambushed and destroyed Dramali Pasha's Ottoman army at the Battle of Dervenakia, securing insurgent control over the Peloponnese."
                },
                "mapState": {
                    "markers": ["peloponnesus"],
                    "routes": [],
                    "view": { "center": [37.7, 22.7], "zoom": 8.0 }
                }
            },
            {
                "title": {
                    "tr": "7. Osmanlı Misillemeleri ve Sakız Adası Katliamı (1822)",
                    "en": "7. Ottoman Reprisals & Chios Massacre (1822)"
                },
                "text": {
                    "tr": "İsyana tepki olarak Osmanlı donanması Sakız Adası'nı kuşatarak binlerce kişiyi katletti veya esir aldı. İstanbul'da Patrik V. Gregorios idam edildi. Sakız katliamı, Avrupa kamuoyunda derin bir dehşet ve Osmanlı karşıtlığı yarattı.",
                    "en": "Ottoman forces launched severe retaliatory campaigns, culminating in the 1822 Massacre of Chios and the execution of Patriarch Gregory V in Constantinople, horrifying European public opinion."
                },
                "mapState": {
                    "markers": ["chios", "athens"],
                    "routes": [],
                    "view": { "center": [38.4, 26.1], "zoom": 8.5 }
                }
            },
            {
                "title": {
                    "tr": "8. Mehmet Ali Paşa'nın Müdahalesi ve İbrahim Paşa",
                "en": "8. Egyptian Intervention under Ibrahim Pasha (1825)"
                },
                "text": {
                    "tr": "Sultan II. Mahmud'un talebi üzerine Mısır Valisi Mehmet Ali Paşa'nın oğlu İbrahim Paşa, 1825'te disiplinli Mısır ordusuyla Mora'ya çıktı. İbrahim Paşa güneyden, Osmanlı kuvvetleri kuzeyden ilerleyerek 1827'de Atina'yı ele geçirdi.",
                    "en": "Facing stalemate, Sultan Mahmud II summoned Muhammad Ali Pasha of Egypt. In 1825, Ibrahim Pasha landed modern Egyptian forces in Morea, recaptureing Athens by 1827."
                },
                "mapState": {
                    "markers": ["peloponnesus", "athens", "alexandria_port"],
                    "routes": ["ibrahim_greek_expedition"],
                    "view": { "center": [35.5, 26.0], "zoom": 5.5 }
                }
            },
            {
                "title": {
                    "tr": "9. Filhelenizm Hareketi ve Lord Byron'ın Ölümü",
                    "en": "9. Philhellenism & Death of Lord Byron (1824)"
                },
                "text": {
                    "tr": "Avrupa'da Romantik liberaller (Antik Yunan mirasçıları) ve muhafazakarlar (Hristiyan dayanışması) birleşerek Filhelenizm hareketini kurdu. İngiliz şair Lord Byron'ın 1824'te Missolonghi'de ölümü, Batılı devletlerin askeri müdahalesini kaçınılmaz kıldı.",
                    "en": "European Philhellenism merged liberal idealization of Classical Greece with conservative Christian solidarity. Lord Byron's death at Missolonghi in 1824 mobilized intense public pressure for military intervention."
                },
                "mapState": {
                    "markers": ["missolonghi", "athens"],
                    "routes": [],
                    "view": { "center": [38.3, 21.5], "zoom": 7.5 }
                }
            },
            {
                "title": {
                    "tr": "10. Navarin Savaşı (1827) ve Bağımsızlık (1830)",
                    "en": "10. Battle of Navarino (1827) & Independence (1830)"
                },
                "text": {
                    "tr": "20 Ekim 1827'de İngiliz, Fransız ve Rus birleşik donanması Navarin Limanı'nda Osmanlı-Mısır donanmasını tamamen imha etti. 3 Şubat 1830 Londra Protokolü ile Yunanistan bağımsız krallık ilan edildi; 1833'te Bavyera Prensi Otho kral yapıldı.",
                    "en": "On Oct 20, 1827, Allied fleets annihilated the Ottoman-Egyptian navy at Navarino Bay. The Feb 3, 1830 London Protocol formally established an independent Kingdom of Greece under King Otho of Bavaria."
                },
                "mapState": {
                    "markers": ["navarino", "athens"],
                    "routes": ["navarino_allied_route"],
                    "view": { "center": [37.0, 22.0], "zoom": 7.5 }
                }
            }
        ],
        "quiz": [
            {
                "question": {
                    "tr": "1774 yılında imzalanan ve Rusya'ya Osmanlı Ortodokslarının koruyuculuğu ile Boğazlar'da serbest seyrüsefer hakkı veren antlaşma hangisidir?",
                    "en": "Which 1774 treaty granted Russia rights over Black Sea navigation and guardianship of Ottoman Orthodox subjects?"
                },
                "options": [
                    { "text": { "tr": "Küçük Kaynarca Antlaşması", "en": "Treaty of Küçük Kaynarca" }, "correct": True },
                    { "text": { "tr": "Bükreş Antlaşması", "en": "Treaty of Bucharest" }, "correct": False },
                    { "text": { "tr": "Edirne Antlaşması", "en": "Treaty of Adrianople" }, "correct": False },
                    { "text": { "tr": "Yaş Antlaşması", "en": "Treaty of Jassy" }, "correct": False }
                ],
                "explanation": {
                    "tr": "Küçük Kaynarca Antlaşması (1774), Doğu Sorunu'nun başlangıcı kabul edilir.",
                    "en": "The 1774 Treaty of Küçük Kaynarca initiated the geopolitical struggle known as the Eastern Question."
                }
            },
            {
                "question": {
                    "tr": "1814 yılında Odessa kentinde tüccarlar tarafından kurulan gizli Yunan bağımsızlık örgütü hangisidir?",
                    "en": "Which secret society was founded in Odessa in 1814 to mobilize for Greek independence?"
                },
                "options": [
                    { "text": { "tr": "Filiki Eterya (Philiki Etaireia)", "en": "Philiki Etaireia" }, "correct": True },
                    { "text": { "tr": "Carbonari", "en": "Carbonari" }, "correct": False },
                    { "text": { "tr": "Genç İtalya", "en": "Young Italy" }, "correct": False },
                    { "text": { "tr": "Tümör Cemiyeti", "en": "Decembrist Society" }, "correct": False }
                ],
                "explanation": {
                    "tr": "Filiki Eterya, masonik örgütlenme modeliyle Yunan tüccarlar ve aydınlar arasında hızla yayıldı.",
                    "en": "Philiki Etaireia organized merchants and intellectuals across the Mediterranean using Masonic structures."
                }
            },
            {
                "question": {
                    "tr": "20 Ekim 1827 tarihinde müttefik İngiliz, Fransız ve Rus donanmasının Osmanlı-Mısır filosunu yaktığı deniz savaşı hangisidir?",
                    "en": "Which naval battle in Oct 1827 destroyed the combined Ottoman-Egyptian fleet?"
                },
                "options": [
                    { "text": { "tr": "Navarin Deniz Savaşı", "en": "Battle of Navarino" }, "correct": True },
                    { "text": { "tr": "İnebahtı Savaşı", "en": "Battle of Lepanto" }, "correct": False },
                    { "text": { "tr": "Çeşme Baskını", "en": "Battle of Chesma" }, "correct": False },
                    { "text": { "tr": "Trafalgar Savaşı", "en": "Battle of Trafalgar" }, "correct": False }
                ],
                "explanation": {
                    "tr": "Navarin'de müttefik müdahalesi Osmanlı askeri gücünü kırarak Yunan bağımsızlığını kesinleştirdi.",
                    "en": "The destruction of the fleet at Navarino made Greek independence militarily irreversible."
                }
            }
        ]
    }

print("Week 8 builder function defined.")
