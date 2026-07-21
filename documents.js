// documents.js - Clean Instant Rendering & Elegant Layout
let activeDocLang = 'tr';
let activeTopicFilter = 'all';
let activeSearchQuery = '';
let activeSelectedDocId = 'cortes_1520';

const i18n = {
  tr: {
    back: "Atlas'a Dön",
    searchPlaceholder: "Belgelerde veya Konularda Ara...",
    all: "Tüm Konular",
    dateLabel: "Tarih: ",
    authorLabel: "Müellif: ",
    topicLabel: "Konu: ",
    openTxt: "📄 Metin Dosyasını İndir / Aç",
    downloadDocx: "📥 Orijinal DOCX İndir"
  },
  en: {
    back: "Back to Atlas",
    searchPlaceholder: "Search Documents or Topics...",
    all: "All Topics",
    dateLabel: "Date: ",
    authorLabel: "Author: ",
    topicLabel: "Topic: ",
    openTxt: "📄 Download / Open TXT",
    downloadDocx: "📥 Download Original DOCX"
  }
};

function initPage() {
  renderFilterPills();
  renderDocList();
  renderReader(activeSelectedDocId);
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
  if (backEl) backEl.textContent = t.back;
  if (searchEl) searchEl.placeholder = t.searchPlaceholder;

  renderFilterPills();
  renderDocList();
  renderReader(activeSelectedDocId);
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
  renderDocList();
}

function onSearchInput(query) {
  activeSearchQuery = (query || '').toLowerCase().trim();
  renderDocList();
}

function renderDocList() {
  const container = document.getElementById('doc-list-container');
  if (!container || !learningData.primarySources) return;

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

  container.innerHTML = docs.map(doc => {
    const title = doc.title[activeDocLang] || doc.title['tr'];
    const author = doc.author[activeDocLang] || doc.author['tr'];
    const topicTag = doc.topic ? (doc.topic[activeDocLang] || doc.topic['tr']) : `Hafta ${doc.week}`;
    const active = doc.id === activeSelectedDocId ? 'active' : '';

    return `
      <div class="doc-card ${active}" onclick="selectDoc('${doc.id}')">
        <div class="badge">${topicTag} (${doc.date})</div>
        <div class="title">${title}</div>
        <div class="author">${author}</div>
      </div>
    `;
  }).join('');
}

function selectDoc(docId) {
  activeSelectedDocId = docId;
  renderDocList();
  renderReader(docId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderReader(docId) {
  const canvas = document.getElementById('doc-reader-canvas');
  if (!canvas || !learningData.primarySources) return;
  const t = i18n[activeDocLang];

  const doc = learningData.primarySources.find(d => d.id === docId) || learningData.primarySources[0];
  if (!doc) return;

  const title = doc.title[activeDocLang] || doc.title['tr'];
  const author = doc.author[activeDocLang] || doc.author['tr'];
  const summary = doc.summary[activeDocLang] || doc.summary['tr'];
  const topicTag = doc.topic ? (doc.topic[activeDocLang] || doc.topic['tr']) : `Hafta ${doc.week}`;
  const txtFile = doc.fileUrls ? doc.fileUrls.txt : '';
  const docxFile = doc.fileUrls ? doc.fileUrls.docx : '';

  // Get pre-formatted HTML text directly from data.js
  const proseHtml = (typeof doc.formattedHtml === "object" ? (doc.formattedHtml[activeDocLang] || doc.formattedHtml["tr"]) : doc.formattedHtml) || `<p>${doc.fullText || ''}</p>`;

  canvas.innerHTML = `
    <header class="doc-meta-header" style="border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; margin-bottom: 1.2rem;">
      <h2 style="font-family: 'Outfit', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin: 0 0 0.6rem 0; line-height: 1.3;">${title}</h2>
      <div style="font-size: 0.88rem; color: var(--text-secondary); display: flex; flex-wrap: wrap; gap: 0.8rem; align-items: center;">
        <span><strong>${t.dateLabel}</strong>${doc.date}</span>
        <span>•</span>
        <span><strong>${t.authorLabel}</strong>${author}</span>
        <span>•</span>
        <span><strong>${t.topicLabel}</strong>${topicTag}</span>
      </div>
    </header>

    <div style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; border-left: 3px solid var(--theme-accent); padding-left: 1rem; margin-bottom: 1.4rem;">
      ${summary}
    </div>

    ${(txtFile || docxFile) ? `
      <div class="action-toolbar" style="margin-bottom: 1.4rem; display:flex; gap:0.8rem; flex-wrap:wrap;">
        ${txtFile ? `<a class="btn-action" href="${encodeURI(txtFile)}" target="_blank">${t.openTxt}</a>` : ''}
        ${docxFile ? `<a class="btn-action" href="${encodeURI(docxFile)}" download>${t.downloadDocx}</a>` : ''}
      </div>
    ` : ''}

    <div class="doc-prose" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 10px; padding: 1.8rem; font-size: 0.96rem; line-height: 1.8; color: var(--text-primary);">
      ${proseHtml}
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  initPage();
});
