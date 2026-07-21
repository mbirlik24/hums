// documents.js - Robust Async Text Fetching & Document Viewer
let activeDocLang = 'tr';
let activeTopicFilter = 'all';
let activeSearchQuery = '';
let activeSelectedDocId = 'cortes_1520';

const i18n = {
  tr: {
    back: "Atlas'a Dön",
    searchPlaceholder: "Belgelerde veya Konularda Ara...",
    all: "Tüm Konular",
    authorLabel: "Tarihsel Müellif: ",
    openTxt: "📄 Metin Dosyasını İndir / Aç",
    downloadDocx: "📥 Orijinal DOCX İndir"
  },
  en: {
    back: "Back to Atlas",
    searchPlaceholder: "Search Documents or Topics...",
    all: "All Topics",
    authorLabel: "Historical Author: ",
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
        <div class="badge">🏷️ ${topicTag} (${doc.date})</div>
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

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function renderReader(docId) {
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

  canvas.innerHTML = `
    <header class="doc-meta-header">
      <span class="badge-tag">🏷️ ${topicTag} • Tarihi Belge (${doc.date})</span>
      <h2>${title}</h2>
      <div class="author-info">${t.authorLabel}${author}</div>
    </header>

    <div style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; border-left: 3px solid var(--theme-accent); padding-left: 1rem; margin-bottom: 1.5rem;">
      ${summary}
    </div>

    <div class="action-toolbar">
      ${txtFile ? `<a class="btn-action" href="${encodeURI(txtFile)}" target="_blank">${t.openTxt}</a>` : ''}
      ${docxFile ? `<a class="btn-action" href="${encodeURI(docxFile)}" download>${t.downloadDocx}</a>` : ''}
    </div>

    <div id="doc-content-body" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 10px; padding: 1.5rem; min-height: 400px;">
      <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">Belge yükleniyor...</div>
    </div>
  `;

  if (txtFile) {
    try {
      const resp = await fetch(txtFile);
      if (resp.ok) {
        const text = await resp.text();
        const bodyEl = document.getElementById('doc-content-body');
        if (bodyEl) {
          bodyEl.innerHTML = `<pre style="white-space: pre-wrap; font-family: var(--font-sans); font-size: 0.95rem; line-height: 1.8; color: var(--text-primary); margin:0;">${escapeHtml(text)}</pre>`;
        }
        return;
      }
    } catch (err) {
      console.warn("Fetch failed, using iframe fallback:", err);
    }

    // Fallback if fetch is blocked by local CORS
    const bodyEl = document.getElementById('doc-content-body');
    if (bodyEl) {
      bodyEl.innerHTML = `<iframe style="width:100%; height:650px; border:none;" src="${encodeURI(txtFile)}"></iframe>`;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initPage();
});
