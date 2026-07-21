// documents.js - Standalone Primary Sources Archive Reader
let activeDocLang = 'tr';
let activeDocWeekFilter = 'all';
let activeSelectedDocId = 'cortes_1520';

const docTranslations = {
  tr: {
    backTxt: "Atlas'a Dön",
    heroTitle: "📜 Birincil Tarihsel Kaynaklar Arşivi",
    heroSubtitle: "1492–1867 Dönemine Ait Orijinal Tarihi Belgeler, Bildirgeler, Mektuplar ve Anayasalar",
    lblFilterWeek: "Modül Filtresi:",
    filterAll: "Tümü",
    weekPrefix: "Hafta",
    docBadgePrefix: "📜 Hafta",
    docBadgeSuffix: "— Orijinal Belge",
    authorPrefix: "✍️ Tarihsel Müellif: ",
    quoteTitle: "📜 Belgeden Vurucu Tarihi Alıntı: ",
    textTitle: "📄 Orijinal Dönem Metni (Arşiv Kaydı):"
  },
  en: {
    backTxt: "Back to Atlas",
    heroTitle: "📜 Primary Historical Source Archive",
    heroSubtitle: "Original Historical Texts, Declarations, Letters, and Constitutions (1492–1867)",
    lblFilterWeek: "Module Filter:",
    filterAll: "All",
    weekPrefix: "Week",
    docBadgePrefix: "📜 Week",
    docBadgeSuffix: "— Primary Document",
    authorPrefix: "✍️ Historical Author: ",
    quoteTitle: "📜 Key Historical Quote: ",
    textTitle: "📄 Original Document Text (Full Archive):"
  }
};

function initDocumentsPage() {
  renderFilterButtons();
  renderDocsList();
  if (learningData.primarySources && learningData.primarySources.length > 0) {
    renderReaderView(activeSelectedDocId);
  }
}

function toggleDocLanguage() {
  activeDocLang = activeDocLang === 'tr' ? 'en' : 'tr';
  
  const trBtn = document.getElementById('doc-lang-btn-tr');
  const enBtn = document.getElementById('doc-lang-btn-en');
  if (trBtn && enBtn) {
    if (activeDocLang === 'tr') {
      trBtn.classList.add('active');
      enBtn.classList.remove('active');
    } else {
      enBtn.classList.add('active');
      trBtn.classList.remove('active');
    }
  }

  // Update static texts
  const t = docTranslations[activeDocLang];
  document.getElementById('back-txt').textContent = t.backTxt;
  document.getElementById('docs-hero-title').textContent = t.heroTitle;
  document.getElementById('docs-hero-subtitle').textContent = t.heroSubtitle;
  document.getElementById('lbl-filter-week').textContent = t.lblFilterWeek;

  renderFilterButtons();
  renderDocsList();
  renderReaderView(activeSelectedDocId);
}

function renderFilterButtons() {
  const container = document.getElementById('docs-filter-bar');
  if (!container) return;
  const t = docTranslations[activeDocLang];
  
  const weeks = ['all', 2, 3, 4, 5, 6];
  container.innerHTML = weeks.map(w => {
    const label = w === 'all' ? t.filterAll : `${t.weekPrefix} ${w}`;
    const isActive = activeDocWeekFilter === w ? 'active' : '';
    return `<button class="docs-filter-btn ${isActive}" onclick="filterDocs('${w}')">${label}</button>`;
  }).join('');
}

function filterDocs(week) {
  activeDocWeekFilter = week === 'all' ? 'all' : parseInt(week);
  renderFilterButtons();
  renderDocsList();
}

function renderDocsList() {
  const container = document.getElementById('docs-list-container');
  if (!container || !learningData.primarySources) return;
  const t = docTranslations[activeDocLang];

  let docs = learningData.primarySources;
  if (activeDocWeekFilter !== 'all') {
    docs = docs.filter(d => d.week === activeDocWeekFilter);
  }

  container.innerHTML = docs.map(doc => {
    const title = doc.title[activeDocLang] || doc.title['tr'];
    const author = doc.author[activeDocLang] || doc.author['tr'];
    const isActive = doc.id === activeSelectedDocId ? 'active' : '';
    
    return `
      <div class="doc-card-item ${isActive}" onclick="selectDocument('${doc.id}')">
        <div class="item-badge">${t.docBadgePrefix} ${doc.week} (${doc.date})</div>
        <h4 class="item-title">${title}</h4>
        <div class="item-author">${author}</div>
      </div>
    `;
  }).join('');
}

function selectDocument(docId) {
  activeSelectedDocId = docId;
  renderDocsList();
  renderReaderView(docId);
}

function renderReaderView(docId) {
  const container = document.getElementById('docs-reader-container');
  if (!container || !learningData.primarySources) return;
  const t = docTranslations[activeDocLang];

  const doc = learningData.primarySources.find(d => d.id === docId) || learningData.primarySources[0];
  if (!doc) return;

  const title = doc.title[activeDocLang] || doc.title['tr'];
  const author = doc.author[activeDocLang] || doc.author['tr'];
  const summary = doc.summary[activeDocLang] || doc.summary['tr'];
  const quote = doc.quote[activeDocLang] || doc.quote['tr'];

  container.innerHTML = `
    <div class="reader-header">
      <div class="reader-badge">${t.docBadgePrefix} ${doc.week} ${t.docBadgeSuffix} (${doc.date})</div>
      <h2 class="reader-title">${title}</h2>
      <div class="reader-author">${t.authorPrefix}${author}</div>
    </div>

    <div class="reader-summary">
      ${summary}
    </div>

    <div class="reader-quote-box">
      <div style="font-weight: 700; font-family: 'Outfit', sans-serif; margin-bottom: 0.35rem; color: var(--theme-accent);">
        ${t.quoteTitle}
      </div>
      <div>${quote}</div>
    </div>

    <div style="font-weight: 800; font-size: 0.95rem; color: var(--text-primary); margin-top: 0.5rem;">
      ${t.textTitle}
    </div>

    <div class="reader-text-container">${doc.fullText}</div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  initDocumentsPage();
});
