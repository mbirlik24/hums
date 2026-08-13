import re

with open("app.js", "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

# Update diagramTabState to include weeks 8, 9, 10, 11, 12
old_state = "const diagramTabState = { 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };"
new_state = "const diagramTabState = { 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0 };"

if old_state in content:
    content = content.replace(old_state, new_state)

# JS implementation of diagrams for Weeks 8-12
diagrams_code = """
  // ══════════════════════════════════════════════════════════════
  //  WEEK 8  –  The Eastern Question & Greek Revolution
  // ══════════════════════════════════════════════════════════════
  if (state.week === 8) {
    const tabs = [
      { en: '📉 Naval Balance (Navarino 1827)', tr: '📉 Navarin Donanma Dengesi (1827)' },
      { en: '🌐 Great Power Interests',          tr: '🌐 Büyük Güçlerin Çıkar Dengesi' }
    ];
    activeTabIdx = diagramTabState[8] || 0;
    const tabBarHtml = buildDiagramTabBar(8, tabs, L);

    if (activeTabIdx === 0) {
      container.innerHTML = tabBarHtml + `
        <div style="background:var(--bg-surface); border:1px solid var(--border-color); border-radius:12px; padding:1rem;">
          <h4 style="font-family:'Outfit',sans-serif; font-size:0.95rem; font-weight:800; color:var(--text-primary); margin-bottom:0.75rem;">
            ${T('Battle of Navarino Naval Forces (October 20, 1827)', 'Navarin Deniz Savaşı Donanma Güç Karşılaştırması (20 Ekim 1827)')}
          </h4>
          <svg viewBox="0 0 500 200" style="width:100%; height:auto;">
            <!-- Allied Fleet -->
            <rect x="50" y="30" width="180" height="35" rx="6" fill="#2563eb" opacity="0.85"/>
            <text x="60" y="52" fill="#fff" font-size="11" font-weight="700">${T('Allied Fleet (UK/FR/RU): 27 Ships', 'Müttefik Donanması (İNG/FR/RUS): 27 Gemi')}</text>
            <rect x="50" y="70" width="38" height="25" rx="4" fill="#1d4ed8"/>
            <text x="60" y="87" fill="#fff" font-size="10" font-weight="700">10 B</text>

            <!-- Ottoman-Egyptian Fleet -->
            <rect x="50" y="110" width="380" height="35" rx="6" fill="#dc2626" opacity="0.85"/>
            <text x="60" y="132" fill="#fff" font-size="11" font-weight="700">${T('Ottoman-Egyptian Fleet: 89 Ships', 'Osmanlı-Mısır Donanması: 89 Gemi')}</text>
            <rect x="50" y="150" width="360" height="25" rx="4" fill="#991b1b"/>
            <text x="60" y="167" fill="#fff" font-size="10" font-weight="700">${T('Destruction: 60 Ships Sunk / 6000 Losses', 'Zayiat: 60 Gemi Batırıldı / 6.000 Şehit')}</text>
          </svg>
          <p style="font-size:0.78rem; color:var(--text-secondary); margin-top:0.5rem; line-height:1.4;">
            ${T('Although numerically smaller, Allied heavy firepower destroyed the Ottoman-Egyptian fleet in 3 hours.', 'Müttefik donanması sayıca az olmasına rağmen ağır ateş gücüyle 3 saatte Osmanlı donanmasını imha etmiştir.')}
          </p>
        </div>`;
    } else {
      container.innerHTML = tabBarHtml + `
        <div style="background:var(--bg-surface); border:1px solid var(--border-color); border-radius:12px; padding:1rem;">
          <h4 style="font-family:'Outfit',sans-serif; font-size:0.95rem; font-weight:800; color:var(--text-primary); margin-bottom:0.75rem;">
            ${T('Eastern Question Great Power Geopolitical Axes', 'Doğu Sorununda Avrupalı Güçlerin Stratejileri')}
          </h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:0.75rem;">
            <div style="background:var(--bg-card); border:1px solid #2563eb; border-radius:8px; padding:0.75rem;">
              <strong style="color:#2563eb; font-size:0.85rem;">🇷🇺 ${T('Russian Empire', 'Rus İmparatorluğu')}</strong>
              <p style="font-size:0.75rem; color:var(--text-secondary); margin-top:0.3rem;">${T('Protect Orthodox population & gain Black Sea Straits access.', 'Ortodoksları koruma bahanesiyle Boğazlar ve Akdeniz\'e inme amacı.')}</p>
            </div>
            <div style="background:var(--bg-card); border:1px solid #059669; border-radius:8px; padding:0.75rem;">
              <strong style="color:#059669; font-size:0.85rem;">🇬🇧 ${T('British Empire', 'İngiliz İmparatorluğu')}</strong>
              <p style="font-size:0.75rem; color:var(--text-secondary); margin-top:0.3rem;">${T('Preserve Ottoman integrity to block Russian Mediterranean route.', 'Hindistan yolunu güvenceye almak için Rusya\'yı Akdeniz\'de engelleme.')}</p>
            </div>
          </div>
        </div>`;
    }
    return;
  }

  // ══════════════════════════════════════════════════════════════
  //  WEEK 9  –  Industrial Revolutions
  // ══════════════════════════════════════════════════════════════
  if (state.week === 9) {
    const tabs = [
      { en: '📈 Industrial & Demographics Growth', tr: '📈 Sanayi ve Nüfus Artış Grafiği' },
      { en: '⚙️ 1st vs 2nd Rev Comparison',     tr: '⚙️ I. vs II. Sanayi Devrimi Karşılaştırması' }
    ];
    activeTabIdx = diagramTabState[9] || 0;
    const tabBarHtml = buildDiagramTabBar(9, tabs, L);

    if (activeTabIdx === 0) {
      container.innerHTML = tabBarHtml + `
        <div style="background:var(--bg-surface); border:1px solid var(--border-color); border-radius:12px; padding:1rem;">
          <h4 style="font-family:'Outfit',sans-serif; font-size:0.95rem; font-weight:800; color:var(--text-primary); margin-bottom:0.75rem;">
            ${T('European Population & Rail Network Growth (1800-1900)', 'Avrupa Nüfusu ve Demiryolu Ağı Büyümesi (1800-1900)')}
          </h4>
          <svg viewBox="0 0 500 180" style="width:100%; height:auto;">
            <!-- Axis -->
            <line x1="40" y1="150" x2="480" y2="150" stroke="var(--border-color)" stroke-width="2"/>
            <text x="50" y="165" font-size="10" fill="var(--text-secondary)">1800 (187M)</text>
            <text x="240" y="165" font-size="10" fill="var(--text-secondary)">1850 (266M)</text>
            <text x="430" y="165" font-size="10" fill="var(--text-secondary)">1900 (435M)</text>
            
            <!-- Rail line -->
            <path d="M 50 140 Q 240 100 450 30" fill="none" stroke="#0284c7" stroke-width="3"/>
            <circle cx="450" cy="30" r="5" fill="#0284c7"/>
            <text x="320" y="45" font-size="11" fill="#0284c7" font-weight="700">${T('Rail Mileage: 50,000+ km', 'Demiryolu Ağı: 50.000+ km')}</text>
          </svg>
        </div>`;
    } else {
      container.innerHTML = tabBarHtml + `
        <div style="background:var(--bg-surface); border:1px solid var(--border-color); border-radius:12px; padding:1rem;">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
            <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:8px; padding:0.75rem;">
              <h5 style="color:#0284c7; font-weight:800;">I. Sanayi Devrimi (1780-1850)</h5>
              <ul style="font-size:0.78rem; color:var(--text-secondary); margin-top:0.4rem; padding-left:1.2rem;">
                <li>Kömür & Buhar Gücü</li>
                <li>Tekstil & Dokuma Fabrikaları</li>
                <li>İngiltere Merkezli</li>
              </ul>
            </div>
            <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:8px; padding:0.75rem;">
              <h5 style="color:#ea580c; font-weight:800;">II. Sanayi Devrimi (1850-1914)</h5>
              <ul style="font-size:0.78rem; color:var(--text-secondary); margin-top:0.4rem; padding-left:1.2rem;">
                <li>Bessemer Çeliği & Elektrik</li>
                <li>Otomotiv, Kimya & Telgraf</li>
                <li>Almanya & ABD Liderliği</li>
              </ul>
            </div>
          </div>
        </div>`;
    }
    return;
  }

  // ══════════════════════════════════════════════════════════════
  //  WEEK 10 – Labor Movement & Paris Commune
  // ══════════════════════════════════════════════════════════════
  if (state.week === 10) {
    const tabs = [
      { en: '🏛️ Paris Commune Social Decrees', tr: '🏛️ Paris Komünü Radikal Kararları' },
      { en: '📊 19th Century Class Hierarchy',   tr: '📊 19. Yüzyıl Sınıf Yapısı Piramidi' }
    ];
    activeTabIdx = diagramTabState[10] || 0;
    const tabBarHtml = buildDiagramTabBar(10, tabs, L);

    if (activeTabIdx === 0) {
      container.innerHTML = tabBarHtml + `
        <div style="background:var(--bg-surface); border:1px solid var(--border-color); border-radius:12px; padding:1rem;">
          <h4 style="font-family:'Outfit',sans-serif; font-size:0.95rem; font-weight:800; color:#dc2626; margin-bottom:0.75rem;">
            ${T('Radikal Social Reforms of the Paris Commune (1871)', 'Paris Komünü Radikal Sosyal Reformları (1871)')}
          </h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:0.6rem;">
            <div style="background:var(--bg-card); border-left:3px solid #dc2626; padding:0.5rem; font-size:0.75rem;">
              <strong>Ordu Reformu:</strong> Sürekli ordu lağvedildi, halk milisi kuruldu.
            </div>
            <div style="background:var(--bg-card); border-left:3px solid #dc2626; padding:0.5rem; font-size:0.75rem;">
              <strong>Laiklik:</strong> Din ve devlet işleri ayrıldı, kilise malları kamulaştırıldı.
            </div>
            <div style="background:var(--bg-card); border-left:3px solid #dc2626; padding:0.5rem; font-size:0.75rem;">
              <strong>İşçi Kooperatifi:</strong> Sahipsiz fabrikalar işçilere devredildi.
            </div>
            <div style="background:var(--bg-card); border-left:3px solid #dc2626; padding:0.5rem; font-size:0.75rem;">
              <strong>Kadın Hakları:</strong> Parasız seküler kız eğitimi ve Kadınlar Birliği.
            </div>
          </div>
        </div>`;
    } else {
      container.innerHTML = tabBarHtml + `
        <div style="background:var(--bg-surface); border:1px solid var(--border-color); border-radius:12px; padding:1rem;">
          <h4 style="font-family:'Outfit',sans-serif; font-size:0.95rem; font-weight:800; color:var(--text-primary); margin-bottom:0.75rem;">
            ${T('19th Century Industrial Class Structure', '19. Yüzyıl Sanayi Toplumu Sınıf Yapısı')}
          </h4>
          <div style="display:flex; flex-direction:column; align-items:center; gap:0.4rem;">
            <div style="width:40%; background:#d97706; color:#fff; text-align:center; padding:0.4rem; border-radius:6px; font-weight:700; font-size:0.75rem;">Burjuvazi & Fabrika Sahipleri (%5)</div>
            <div style="width:65%; background:#0284c7; color:#fff; text-align:center; padding:0.4rem; border-radius:6px; font-weight:700; font-size:0.75rem;">Küçük Burjuvazi & Bürokrasi (%15)</div>
            <div style="width:90%; background:#dc2626; color:#fff; text-align:center; padding:0.4rem; border-radius:6px; font-weight:700; font-size:0.75rem;">Sanayi Proletaryası & Emekçiler (%80)</div>
          </div>
        </div>`;
    }
    return;
  }

  // ══════════════════════════════════════════════════════════════
  //  WEEK 11 – Egypt Modernization
  // ══════════════════════════════════════════════════════════════
  if (state.week === 11) {
    const tabs = [
      { en: '📈 Army & Cotton Export Expansion', tr: '📈 Mısır Ordusu & Pamuk Üretim Grafiği' },
      { en: '⛵ Suez & British Occupation Axis', tr: '⛵ Süveyş ve İngiliz İşgal Süreci' }
    ];
    activeTabIdx = diagramTabState[11] || 0;
    const tabBarHtml = buildDiagramTabBar(11, tabs, L);

    if (activeTabIdx === 0) {
      container.innerHTML = tabBarHtml + `
        <div style="background:var(--bg-surface); border:1px solid var(--border-color); border-radius:12px; padding:1rem;">
          <h4 style="font-family:'Outfit',sans-serif; font-size:0.95rem; font-weight:800; color:#059669; margin-bottom:0.75rem;">
            ${T('Egyptian Conscript Army Expansion (1805-1835)', 'Mısır Düzenli Ordusu ve Asker Sayısı Artışı (1805-1835)')}
          </h4>
          <svg viewBox="0 0 500 150" style="width:100%; height:auto;">
            <rect x="50" y="100" width="80" height="30" rx="4" fill="#059669" opacity="0.4"/>
            <text x="90" y="120" fill="#fff" font-size="10" font-weight="700" text-anchor="middle">15.000</text>
            <text x="90" y="145" fill="var(--text-secondary)" font-size="9" text-anchor="middle">1811</text>

            <rect x="180" y="60" width="80" height="70" rx="4" fill="#059669" opacity="0.7"/>
            <text x="220" y="100" fill="#fff" font-size="10" font-weight="700" text-anchor="middle">80.000</text>
            <text x="220" y="145" fill="var(--text-secondary)" font-size="9" text-anchor="middle">1825</text>

            <rect x="310" y="20" width="80" height="110" rx="4" fill="#059669"/>
            <text x="350" y="70" fill="#fff" font-size="11" font-weight="700" text-anchor="middle">130.000</text>
            <text x="350" y="145" fill="var(--text-secondary)" font-size="9" text-anchor="middle">1835</text>
          </svg>
        </div>`;
    } else {
      container.innerHTML = tabBarHtml + `
        <div style="background:var(--bg-surface); border:1px solid var(--border-color); border-radius:12px; padding:1rem;">
          <h4 style="font-family:'Outfit',sans-serif; font-size:0.95rem; font-weight:800; color:var(--text-primary); margin-bottom:0.75rem;">
            ${T('Chronology of Modernization & Colonization', 'Mısır Modernleşmesi ve İşgal Süreci')}
          </h4>
          <div style="display:flex; flex-direction:column; gap:0.4rem; font-size:0.75rem;">
            <div style="background:var(--bg-card); padding:0.4rem 0.6rem; border-left:3px solid #059669;"><strong>1805:</strong> Mehmet Ali Paşa'nın vali olması ve ordu reformu.</div>
            <div style="background:var(--bg-card); padding:0.4rem 0.6rem; border-left:3px solid #0284c7;"><strong>1869:</strong> Süveyş Kanalı'nın açılması ve dış borç krizi.</div>
            <div style="background:var(--bg-card); padding:0.4rem 0.6rem; border-left:3px solid #d97706;"><strong>1876:</strong> İngiliz-Fransız Çifte Kontrol borç idaresi.</div>
            <div style="background:var(--bg-card); padding:0.4rem 0.6rem; border-left:3px solid #dc2626;"><strong>1882:</strong> Ahmed Urabi İsyanı ve İngiltere'nin Mısır'ı fiilen işgali.</div>
          </div>
        </div>`;
    }
    return;
  }

  // ══════════════════════════════════════════════════════════════
  //  WEEK 12 – New Imperialism
  // ══════════════════════════════════════════════════════════════
  if (state.week === 12) {
    const tabs = [
      { en: '🗺️ Scramble for Africa Partition', tr: '🗺️ Afrika Talanı Toprak Paylaşımı' },
      { en: '💎 3G Imperial Motives Diagram',  tr: '💎 3G Sömürgecilik İtici Güçleri' }
    ];
    activeTabIdx = diagramTabState[12] || 0;
    const tabBarHtml = buildDiagramTabBar(12, tabs, L);

    if (activeTabIdx === 0) {
      container.innerHTML = tabBarHtml + `
        <div style="background:var(--bg-surface); border:1px solid var(--border-color); border-radius:12px; padding:1rem;">
          <h4 style="font-family:'Outfit',sans-serif; font-size:0.95rem; font-weight:800; color:#7e22ce; margin-bottom:0.75rem;">
            ${T('Scramble for Africa Partition by 1914', 'Afrika Kıtasının Avrupalı Güçlerce Paylaşımı (1914)')}
          </h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(120px, 1fr)); gap:0.5rem; text-align:center;">
            <div style="background:#1e3a8a; color:#fff; padding:0.5rem; border-radius:6px; font-weight:700; font-size:0.75rem;">🇬🇧 İngiltere %30</div>
            <div style="background:#1e40af; color:#fff; padding:0.5rem; border-radius:6px; font-weight:700; font-size:0.75rem;">🇫🇷 Fransa %15</div>
            <div style="background:#854d0e; color:#fff; padding:0.5rem; border-radius:6px; font-weight:700; font-size:0.75rem;">🇧🇪 Belçika %8</div>
            <div style="background:#3f6212; color:#fff; padding:0.5rem; border-radius:6px; font-weight:700; font-size:0.75rem;">🇩🇪 Almanya %8</div>
            <div style="background:#991b1b; color:#fff; padding:0.5rem; border-radius:6px; font-weight:700; font-size:0.75rem;">Bağımsız %10</div>
          </div>
        </div>`;
    } else {
      container.innerHTML = tabBarHtml + `
        <div style="background:var(--bg-surface); border:1px solid var(--border-color); border-radius:12px; padding:1rem;">
          <h4 style="font-family:'Outfit',sans-serif; font-size:0.95rem; font-weight:800; color:var(--text-primary); margin-bottom:0.75rem;">
            ${T('The 3 Gs Driving Imperial Expansion', 'Yeni Emperyalizmin Üç Temel İtici Gücü (3G)')}
          </h4>
          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.5rem; text-align:center;">
            <div style="background:var(--bg-card); border:1px solid #d97706; padding:0.5rem; border-radius:8px;">
              <strong style="color:#d97706; font-size:0.8rem;">GOLD (Altın)</strong>
              <p style="font-size:0.7rem; color:var(--text-secondary); margin-top:0.3rem;">Kauçuk, Bakır, Petrol & Pazar Arayışı</p>
            </div>
            <div style="background:var(--bg-card); border:1px solid #2563eb; padding:0.5rem; border-radius:8px;">
              <strong style="color:#2563eb; font-size:0.8rem;">GLORY (Şan)</strong>
              <p style="font-size:0.7rem; color:var(--text-secondary); margin-top:0.3rem;">Büyük Güç Prestij & Donanma Yarışı</p>
            </div>
            <div style="background:var(--bg-card); border:1px solid #059669; padding:0.5rem; border-radius:8px;">
              <strong style="color:#059669; font-size:0.8rem;">GOD (Tanrı)</strong>
              <p style="font-size:0.7rem; color:var(--text-secondary); margin-top:0.3rem;">Medenileştirme Misyonu & Misyonerlik</p>
            </div>
          </div>
        </div>`;
    }
    return;
  }
"""

# Insert diagrams_code before the end of renderInfographic function in app.js
match_idx = content.find("function renderInfographic()")
if match_idx != -1:
    # Find insertion point right before the last closing brace or return in renderInfographic
    # Let's search for `//  WEEK 2` inside renderInfographic
    w2_idx = content.find("//  WEEK 2", match_idx)
    if w2_idx != -1:
        # We can append diagrams_code right before the closing brace of renderInfographic
        # Or right after Week 7 block!
        w7_idx = content.find("if (state.week === 7)", w2_idx)
        if w7_idx != -1:
            # Find the end of week 7 block
            w7_end = content.find("return;", w7_idx)
            if w7_end != -1:
                insert_pos = w7_end + len("return;")
                content = content[:insert_pos] + "\n" + diagrams_code + content[insert_pos:]
                print("Diagrams for Weeks 8-12 added successfully!")

with open("app.js", "w", encoding="utf-8") as f:
    f.write(content)

print("app.js updated with diagrams for all new weeks!")
