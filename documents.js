// documents.js - Direct Page Reader (No inner scroll boxes, no forced labels)
let activeDocLang = 'tr';
let activeWeekFilter = 'all';
let activeSearchQuery = '';
let activeSelectedDocId = 'cortes_1520';

const i18n = {
  tr: {
    back: "Atlas'a Dön",
    searchPlaceholder: "Belgelerde Ara...",
    all: "Tümü",
    week: "Hafta",
    docBadge: "Hafta"
  },
  en: {
    back: "Back to Atlas",
    searchPlaceholder: "Search Documents...",
    all: "All",
    week: "Week",
    docBadge: "Week"
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
        <div class="badge">${t.docBadge} ${doc.week} (${doc.date})</div>
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
  const proseHtml = (typeof doc.formattedHtml === "object" ? (doc.formattedHtml[activeDocLang] || doc.formattedHtml["tr"]) : doc.formattedHtml) || `<p>${doc.fullText}</p>`;

  canvas.innerHTML = `
    <header class="doc-meta-header">
      <span class="badge-tag">Hafta ${doc.week} • Tarihi Belge (${doc.date})</span>
      <h2>${title}</h2>
      <div class="author-info">${author}</div>
    </header>

    <div style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; border-left: 3px solid var(--theme-accent); padding-left: 1rem; margin: 0.5rem 0 1rem 0;">
      ${summary}
    </div>

    <div class="doc-prose">
      ${proseHtml}
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  initPage();
});
