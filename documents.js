// documents.js - Clean, Efficient Primary Sources Reader
let activeDocLang = 'tr';
let activeWeekFilter = 'all';
let activeSearchQuery = '';
let activeSelectedDocId = 'cortes_1520';

const i18n = {
  tr: {
    back: "Atlas'a Dön",
    searchPlaceholder: "Belgelerde veya Müelliflerde Ara...",
    all: "Tümü",
    week: "Hafta",
    docBadge: "Hafta",
    origDoc: "Orijinal Tarihi Belge",
    authorLabel: "Tarihsel Müellif / Aktör: ",
    summaryLabel: "Tarihsel Bağlam ve Önem:",
    quoteLabel: "Belgeden Vurucu Alıntı:",
    textLabel: "Orijinal Belge Metni:"
  },
  en: {
    back: "Back to Atlas",
    searchPlaceholder: "Search Documents or Authors...",
    all: "All",
    week: "Week",
    docBadge: "Week",
    origDoc: "Primary Historical Document",
    authorLabel: "Historical Author: ",
    summaryLabel: "Historical Context & Significance:",
    quoteLabel: "Key Historical Quote:",
    textLabel: "Original Document Text:"
  }
};

function initPage() {
  renderFilterPills();
  renderDocList();
  renderReader(activeSelectedDocId);
}

function toggleDocLanguage() {
  activeDocLang = activeDocLang === 'tr' ? 'en' : 'tr';
  
  const trBtn = document.getElementById('doc-lang-btn-tr');
  const enBtn = document.getElementById('doc-lang-btn-en');
  if (trBtn && enBtn) {
    trBtn.classList.toggle('active', activeDocLang === 'tr');
    enBtn.classList.toggle('active', activeDocLang === 'en');
  }

  const t = i18n[activeDocLang];
  document.getElementById('txt-back').textContent = t.back;
  document.getElementById('doc-search-input').placeholder = t.searchPlaceholder;

  renderFilterPills();
  renderDocList();
  renderReader(activeSelectedDocId);
}

function renderFilterPills() {
  const container = document.getElementById('filter-pills-container');
  if (!container) return;
  const t = i18n[activeDocLang];

  const weeks = ['all', 2, 3, 4, 5, 6];
  container.innerHTML = weeks.map(w => {
    const label = w === 'all' ? t.all : `${t.week} ${w}`;
    const active = activeWeekFilter === w ? 'active' : '';
    return `<button class="pill-btn ${active}" onclick="setFilter('${w}')">${label}</button>`;
  }).join('');
}

function setFilter(week) {
  activeWeekFilter = week === 'all' ? 'all' : parseInt(week);
  renderFilterPills();
  renderDocList();
}

function onSearchInput(query) {
  activeSearchQuery = query.toLowerCase().strip ? query.toLowerCase().strip() : query.toLowerCase();
  renderDocList();
}

function renderDocList() {
  const container = document.getElementById('doc-list-container');
  if (!container || !learningData.primarySources) return;
  const t = i18n[activeDocLang];

  let docs = learningData.primarySources;
  
  if (activeWeekFilter !== 'all') {
    docs = docs.filter(d => d.week === activeWeekFilter);
  }

  if (activeSearchQuery) {
    docs = docs.filter(d => {
      const title = (d.title[activeDocLang] || d.title['tr']).toLowerCase();
      const author = (d.author[activeDocLang] || d.author['tr']).toLowerCase();
      const summary = (d.summary[activeDocLang] || d.summary['tr']).toLowerCase();
      return title.includes(activeSearchQuery) || author.includes(activeSearchQuery) || summary.includes(activeSearchQuery);
    });
  }

  container.innerHTML = docs.map(doc => {
    const title = doc.title[activeDocLang] || doc.title['tr'];
    const author = doc.author[activeDocLang] || doc.author['tr'];
    const active = doc.id === activeSelectedDocId ? 'active' : '';

    return `
      <div class="doc-card ${active}" onclick="selectDoc('${doc.id}')">
        <div class="badge">📜 ${t.docBadge} ${doc.week} (${doc.date})</div>
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
}

function renderReader(docId) {
  const panel = document.getElementById('doc-reader-panel');
  if (!panel || !learningData.primarySources) return;
  const t = i18n[activeDocLang];

  const doc = learningData.primarySources.find(d => d.id === docId) || learningData.primarySources[0];
  if (!doc) return;

  const title = doc.title[activeDocLang] || doc.title['tr'];
  const author = doc.author[activeDocLang] || doc.author['tr'];
  const summary = doc.summary[activeDocLang] || doc.summary['tr'];
  const quote = doc.quote[activeDocLang] || doc.quote['tr'];
  const proseHtml = doc.formattedHtml || `<p>${doc.fullText}</p>`;

  panel.innerHTML = `
    <div class="doc-header">
      <span class="tag">📜 ${t.docBadge} ${doc.week} — ${t.origDoc} (${doc.date})</span>
      <h2>${title}</h2>
      <div class="author-line">${t.authorLabel}${author}</div>
    </div>

    <div class="section-box">
      <div style="font-weight: 700; font-size: 0.85rem; color: var(--theme-accent); margin-bottom: 0.35rem;">
        ${t.summaryLabel}
      </div>
      <div style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.55;">
        ${summary}
      </div>
    </div>

    <div class="quote-callout">
      <div style="font-weight: 700; margin-bottom: 0.3rem; color: var(--theme-accent);">
        ${t.quoteLabel}
      </div>
      <div>${quote}</div>
    </div>

    <div style="font-weight: 800; font-size: 0.95rem; color: var(--text-primary); margin-top: 0.4rem;">
      ${t.textLabel}
    </div>

    <div class="prose-container">
      ${proseHtml}
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  initPage();
});
