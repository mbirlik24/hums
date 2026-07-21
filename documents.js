// documents.js - Direct Document Redirect Portal
let activeDocLang = 'tr';
let activeTopicFilter = 'all';
let activeSearchQuery = '';

const i18n = {
  tr: {
    back: "Atlas'a Dön",
    portalTitle: "Tarihi Birincil Belgeler Arşivi",
    portalSubtitle: "Ders kapsamında incelenen tüm tarihi metinlerin orijinallerine, akademik arşivlerine ve kaynak kütüphanelerine doğrudan erişin.",
    searchPlaceholder: "Belgelerde veya Konularda Ara...",
    all: "Tüm Konular",
    authorLabel: "Müellif: ",
    dateLabel: "Tarih: ",
    gotoSource: "🔗 Belgenin Orijinal Kaynağına Git ↗",
    openTxt: "📄 Metin Dosyasını Aç (.txt)",
    downloadDocx: "📥 Orijinal Dersi Veren Hoca Belgesi (.docx)"
  },
  en: {
    back: "Back to Atlas",
    portalTitle: "Historical Primary Sources Archive",
    portalSubtitle: "Directly access original manuscripts, academic repositories, and primary source archives studied in class.",
    searchPlaceholder: "Search Documents or Topics...",
    all: "All Topics",
    authorLabel: "Author: ",
    dateLabel: "Date: ",
    gotoSource: "🔗 Open Original Source ↗",
    openTxt: "📄 Open TXT File (.txt)",
    downloadDocx: "📥 Download Original DOCX (.docx)"
  }
};

function initPage() {
  renderFilterPills();
  renderPortalGrid();
}

function toggleDocLanguage(lang) {
  if (lang) activeDocLang = lang;
  else activeDocLang = activeDocLang === 'tr' ? 'en' : 'tr';
  
  const trBtn = document.getElementById('doc-lang-btn-tr');
  const enBtn = document.getElementById('doc-lang-btn-en');
  if (trBtn && enBtn) {
    trBtn.classList.toggle('active', activeDocLang === 'tr');
    enBtn.classList.toggle('active', activeDocLang === 'en');
  }

  const t = i18n[activeDocLang];
  const backEl = document.getElementById('txt-back');
  const searchEl = document.getElementById('doc-search-input');
  const titleEl = document.getElementById('portal-title');
  const subEl = document.getElementById('portal-subtitle');

  if (backEl) backEl.textContent = t.back;
  if (searchEl) searchEl.placeholder = t.searchPlaceholder;
  if (titleEl) titleEl.textContent = t.portalTitle;
  if (subEl) subEl.textContent = t.portalSubtitle;

  renderFilterPills();
  renderPortalGrid();
}

function renderFilterPills() {
  const container = document.getElementById('filter-pills-container');
  if (!container || !learningData.primarySources) return;

  const categories = [
    { key: 'all', label: { tr: 'Tüm Konular', en: 'All Topics' } },
    { key: 'columbian', label: { tr: 'Kolomb Değişimi', en: 'Columbian Exchange' } },
    { key: 'trade_slave', label: { tr: 'Köle Ticareti', en: 'Slave Trade' } },
    { key: 'american_rev', label: { tr: 'Amerikan Devrimi', en: 'American Revolution' } },
    { key: 'french_rev', label: { tr: 'Fransız Devrimi', en: 'French Revolution' } },
    { key: 'haitian_rev', label: { tr: 'Haiti Devrimi', en: 'Haitian Revolution' } }
  ];

  container.innerHTML = categories.map(cat => {
    const label = cat.label[activeDocLang] || cat.label['tr'];
    const active = activeTopicFilter === cat.key ? 'active' : '';
    return `<button class="pill-btn ${active}" onclick="setTopicFilter('${cat.key}')">${label}</button>`;
  }).join('');
}

function setTopicFilter(catKey) {
  activeTopicFilter = catKey;
  renderFilterPills();
  renderPortalGrid();
}

function onSearchInput(query) {
  activeSearchQuery = (query || '').toLowerCase().trim();
  renderPortalGrid();
}

function renderPortalGrid() {
  const grid = document.getElementById('portal-cards-grid');
  if (!grid || !learningData.primarySources) return;
  const t = i18n[activeDocLang];

  let docs = learningData.primarySources;
  
  if (activeTopicFilter !== 'all') {
    docs = docs.filter(d => {
      if (activeTopicFilter === 'columbian') return d.week === 2;
      if (activeTopicFilter === 'trade_slave') return d.week === 3;
      if (activeTopicFilter === 'american_rev') return d.week === 4;
      if (activeTopicFilter === 'french_rev') return d.week === 5;
      if (activeTopicFilter === 'haitian_rev') return d.week === 6;
      return true;
    });
  }

  if (activeSearchQuery) {
    docs = docs.filter(d => {
      const title = (d.title[activeDocLang] || d.title['tr']).toLowerCase();
      const author = (d.author[activeDocLang] || d.author['tr']).toLowerCase();
      const topic = d.topic ? (d.topic[activeDocLang] || d.topic['tr']).toLowerCase() : '';
      return title.includes(activeSearchQuery) || author.includes(activeSearchQuery) || topic.includes(activeSearchQuery);
    });
  }

  grid.innerHTML = docs.map(doc => {
    const title = doc.title[activeDocLang] || doc.title['tr'];
    const author = doc.author[activeDocLang] || doc.author['tr'];
    const summary = doc.summary[activeDocLang] || doc.summary['tr'];
    const topicTag = doc.topic ? (doc.topic[activeDocLang] || doc.topic['tr']) : `Hafta ${doc.week}`;
    const targetUrl = doc.sourceUrl || doc.localTxt || '#';

    return `
      <div class="portal-card">
        <div class="card-top">
          <span class="card-badge">${topicTag}</span>
          <h3 class="card-title">${title}</h3>
          <div class="card-meta">
            <span><strong>${t.dateLabel}</strong>${doc.date}</span> • 
            <span><strong>${t.authorLabel}</strong>${author}</span>
          </div>
          <p class="card-summary">${summary}</p>
        </div>

        <div class="card-actions">
          <a class="btn-redirect" href="${encodeURI(targetUrl)}" target="_blank" rel="noopener">
            ${t.gotoSource}
          </a>
          ${doc.localTxt ? `<a class="btn-secondary" href="${encodeURI(doc.localTxt)}" target="_blank">${t.openTxt}</a>` : ''}
          ${doc.localDocx ? `<a class="btn-secondary" href="${encodeURI(doc.localDocx)}" download>${t.downloadDocx}</a>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  initPage();
});
