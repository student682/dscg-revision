// Registry of all 18 revision sheets
const FICHES_DATABASE = {
  societes: [
    { id: 'soc_1', title: 'Constitution et Vie des Groupes', file: 'Droit des sociétés fiches de révision/Fiche_Constitution_Groupes.html' },
    { id: 'soc_2', title: 'Le Financement des Sociétés', file: 'Droit des sociétés fiches de révision/Fiche_Financement.html' },
    { id: 'soc_3', title: 'Gouvernement d\'Entreprise', file: 'Droit des sociétés fiches de révision/Fiche_Gouvernement_Entreprise.html' },
    { id: 'soc_4', title: 'Régime Juridique des Groupes', file: 'Droit des sociétés fiches de révision/Fiche_Regime_Groupe.html' },
    { id: 'soc_5', title: 'Restructurations (Fusions, Scissions, APA)', file: 'Droit des sociétés fiches de révision/Fiche_Restructurations.html' },
    { id: 'soc_6', title: 'Transformation des Sociétés', file: 'Droit des sociétés fiches de révision/Fiche_Transformation.html' },
    { id: 'soc_7', title: 'Transmission à Titre Gratuit', file: 'Droit des sociétés fiches de révision/Fiche_Transmission_Gratuit.html' }
  ],
  fiscal: [
    { id: 'fisc_1', title: 'Constitution et Transformation (Fiscalité)', file: 'Droit fiscal Fiches de révision/Fiche_Constitution_transformation_societes.html' },
    { id: 'fisc_2', title: 'Fiscalité des Échanges Internationaux', file: 'Droit fiscal Fiches de révision/Fiche_Echanges_internationaux.html' },
    { id: 'fisc_3', title: 'Fiscalité du Financement de l\'Entreprise', file: 'Droit fiscal Fiches de révision/Fiche_Financement_entreprise.html' },
    { id: 'fisc_4', title: 'Fusions, Scissions, APA et TUP (Fiscalité)', file: 'Droit fiscal Fiches de révision/Fiche_Fusions_scissions_APA_TUP.html' },
    { id: 'fisc_5', title: 'Intégration Fiscale', file: 'Droit fiscal Fiches de révision/Fiche_Integration_fiscale.html' },
    { id: 'fisc_6', title: 'Régime Fiscal des Groupes', file: 'Droit fiscal Fiches de révision/Fiche_Regime_des_groupes.html' },
    { id: 'fisc_7', title: 'Transmission à Titre Gratuit (Fiscalité)', file: 'Droit fiscal Fiches de révision/Fiche_Transmission_titre_gratuit.html' }
  ],
  contrats: [
    { id: 'cont_1', title: 'Concurrence Déloyale et Parasitisme', file: 'Droit des contrats fiches de révision/Fiche_Concurrence_Deloyale.html' },
    { id: 'cont_2', title: 'Transparence et Pratiques Restrictives', file: 'Droit des contrats fiches de révision/Fiche_Transparence_Pratiques_Restrictives.html' },
    { id: 'cont_3', title: 'Pratiques Anticoncurrentielles (Ententes et Abus)', file: 'Droit des contrats fiches de révision/Fiche_Pratiques_Anticoncurrentielles.html' },
    { id: 'cont_4', title: 'Contrôle des Concentrations et Contrats d\'Affaires', file: 'Droit des contrats fiches de révision/Fiche_Concentration_Contrats_Affaires.html' }
  ],
  difficultes_penal: [
    { id: 'diff_1', title: 'Prévention des Difficultés et Sauvegarde', file: 'Droit des affaires fiches/Fiche_Prevention_Sauvegarde_Liquidation.html' },
    { id: 'diff_2', title: 'Redressement et Liquidation Judiciaire', file: 'Droit des affaires fiches/Fiche_Redressement_Liquidation_Judiciaire.html' },
    { id: 'pen_1', title: 'Droit Pénal Général et Infractions d\'Affaires', file: 'Droit des affaires fiches/Fiche_Droit_Penal_Infractions_Affaires.html' },
    { id: 'pen_2', title: 'Procédure Pénale, Enquête et Sanctions', file: 'Droit des affaires fiches/Fiche_Droit_Penal_Procedure_Poursuites.html' }
  ],
  finance: [
    { id: 'fin_1', title: 'La valeur et le risque', file: 'finance fiches de révision/Fiche_Valeur_et_Risque.html' },
    { id: 'fin_2', title: 'Gestion de la valeur de l\'action', file: 'finance fiches de révision/Fiche_Gestion_Valeur_Action.html' },
    { id: 'fin_3', title: 'La Trésorerie', file: 'finance fiches de révision/Fiche_Tresorerie.html' },
    { id: 'fin_4', title: 'Opérations sur dettes et créances', file: 'finance fiches de révision/Fiche_Operations_Dettes_Creances.html' },
    { id: 'fin_5', title: 'Politique de dividendes', file: 'finance fiches de révision/Fiche_Politique_Dividendes.html' },
    { id: 'fin_6', title: 'Fusions-Acquisitions', file: 'finance fiches de révision/Fiche_Fusions_Acquisitions.html' },
    { id: 'fin_7', title: 'Innovations financières', file: 'finance fiches de révision/Fiche_Innovations_Financieres.html' }
  ],
  evaluation: [
    { id: 'eval_1', title: 'Introduction à l\'Évaluation', file: 'Evaluation fiches de révision/Fiche_Intro_Evaluation.html' },
    { id: 'eval_2', title: 'Approche Comparative', file: 'Evaluation fiches de révision/Fiche_Approche_Comparative.html' },
    { id: 'eval_3', title: 'Approche Patrimoniale (ANCC)', file: 'Evaluation fiches de révision/Fiche_Approche_Patrimoniale.html' },
    { id: 'eval_4', title: 'Approche Mixte (GoodWill)', file: 'Evaluation fiches de révision/Fiche_Approche_Mixte.html' },
    { id: 'eval_5', title: 'Évaluations Spécifiques (Start-ups)', file: 'Evaluation fiches de révision/Fiche_Evaluations_Specifiques.html' }
  ],
  mcg: []
};

// Quiz database (Traps & Memos extracted from DSCG sheets)
const QUIZ_DATABASE = [
  {
    q: "En société anonyme cotée, l'augmentation de capital par incorporation de réserves est votée par l'AGE mais à quelles conditions de majorité ?",
    a: "Dérogation majeure : bien que décidée par l'AGE, l'incorporation de réserves est votée aux conditions de quorum et de majorité d'une AGO."
  },
  {
    q: "Quelle est la sanction automatique en cas d'omission de déclaration de franchissement de seuil légal dans les sociétés cotées ?",
    a: "Privation automatique des droits de vote excédant le seuil non déclaré pendant une durée de 2 ans à compter de la régularisation."
  },
  {
    q: "Dans une OPA obligatoire, quelle fraction du capital doit viser l'offre ?",
    a: "Elle doit porter sur 100 % du capital (aucune OPA partielle n'est permise pour la protection des minoritaires)."
  },
  {
    q: "La divulgation d'une information vraie sur un concurrent peut-elle constituer une faute de dénigrement ?",
    a: "Oui ! Même si l'information divulguée est exacte, sa jetée publique pour jeter le dissiper la clientèle reste une faute de dénigrement."
  },
  {
    q: "Quel est le délai légal maximum de prévis exigible en cas de rupture de relation commerciale établie depuis 20 ans ?",
    a: "Plafonné à 18 mois par la loi. Respecter un prévis écrit de 18 mois protège l'auteur de la rupture de toute action en durée insuffisante."
  },
  {
    q: "Une entreprise peut-elle être sanctionnée pour le seul fait d'être en position dominante sur son marché ?",
    a: "Non ! La position dominante n'est pas interdite en soi. C'est uniquement l'ABUS de cette position qui est sanctionné."
  },
  {
    q: "Quel est le montant maximum de la sanction pécuniaire encourue par un groupe pour entente ou abus de position dominante ?",
    a: "Jusqu'à 10 % du chiffre d'affaires mondial hors taxes de l'ensemble du groupe d'entreprises."
  }
];

// App State
let completedFiches = JSON.parse(localStorage.getItem('dscg_completed_fiches') || '[]');
let bookmarkedFiches = JSON.parse(localStorage.getItem('dscg_bookmarked_fiches') || '[]');
let currentTheme = localStorage.getItem('dscg_theme') || 'light';
let currentQuizIndex = 0;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderSidebars();
  updateProgressStats();
  renderBookmarks();
  initQuiz();
  setupEventListeners();
});

// Theme Toggle
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const icon = document.querySelector('.theme-toggle-btn');
  if (icon) icon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('dscg_theme', currentTheme);
  initTheme();
}

// Tab Switching
function switchTab(tabId) {
  document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
  const targetTab = document.querySelector(`[data-tab="${tabId}"]`);
  const targetContent = document.getElementById(`tab-${tabId}`);
  
  if (targetTab && targetContent) {
    targetTab.classList.add('active');
    targetContent.classList.add('active');
  }
}

// Sidebars Rendering
function renderSidebars() {
  ['societes', 'fiscal', 'contrats', 'difficultes_penal', 'finance', 'evaluation', 'mcg'].forEach(subject => {
    const container = document.getElementById(`sidebar-${subject}`);
    if (!container) return;
    
    container.innerHTML = `<div class="sidebar-title">Fiches de Révision (${FICHES_DATABASE[subject].length})</div>`;
    
    FICHES_DATABASE[subject].forEach((fiche, index) => {
      const isDone = completedFiches.includes(fiche.id);
      const isStar = bookmarkedFiches.includes(fiche.id);
      const item = document.createElement('div');
      item.className = `fiche-item ${index === 0 ? 'active' : ''}`;
      item.dataset.file = fiche.file;
      item.dataset.id = fiche.id;
      item.dataset.title = fiche.title;
      item.dataset.subject = subject;
      
      item.innerHTML = `
        <div class="fiche-item-title">${fiche.title}</div>
        ${isStar ? '<span style="color:#BF8F00;">⭐️</span>' : ''}
        ${isDone ? '<span class="fiche-check">✓</span>' : ''}
      `;
      
      item.addEventListener('click', () => loadFiche(subject, item, fiche));
      container.appendChild(item);
    });
    
    // Auto load first sheet
    if (FICHES_DATABASE[subject].length > 0) {
      const firstFiche = FICHES_DATABASE[subject][0];
      const iframe = document.getElementById(`viewer-${subject}`);
      if (iframe) {
        iframe.src = firstFiche.file;
        iframe.onload = () => updateSectionDropdown(subject);
      }
      const titleElem = document.getElementById(`viewer-title-${subject}`);
      if (titleElem) titleElem.textContent = firstFiche.title;
    }
  });
}

// Load Fiche in Viewer
function loadFiche(subject, itemElem, fiche) {
  document.querySelectorAll(`#sidebar-${subject} .fiche-item`).forEach(i => i.classList.remove('active'));
  itemElem.classList.add('active');
  
  const iframe = document.getElementById(`viewer-${subject}`);
  if (iframe) {
    iframe.src = fiche.file;
    iframe.onload = () => updateSectionDropdown(subject);
  }
  
  const titleElem = document.getElementById(`viewer-title-${subject}`);
  if (titleElem) titleElem.textContent = fiche.title;
  
  // Set data on Mark Done button
  const doneBtn = document.getElementById(`btn-done-${subject}`);
  if (doneBtn) {
    doneBtn.dataset.ficheId = fiche.id;
    const isDone = completedFiches.includes(fiche.id);
    doneBtn.textContent = isDone ? '✓ Révisé' : 'Mark Complété';
  }
  
  // Set data on Bookmark button
  const starBtn = document.getElementById(`btn-star-${subject}`);
  if (starBtn) {
    starBtn.dataset.ficheId = fiche.id;
    const isStar = bookmarkedFiches.includes(fiche.id);
    starBtn.textContent = isStar ? '★ Favori' : '☆ Enregistrer';
    if (isStar) starBtn.classList.add('active-star'); else starBtn.classList.remove('active-star');
  }
}

// Toggle Complete Status
function toggleComplete(subject) {
  const doneBtn = document.getElementById(`btn-done-${subject}`);
  if (!doneBtn) return;
  
  const ficheId = doneBtn.dataset.ficheId;
  if (!ficheId) return;
  
  if (completedFiches.includes(ficheId)) {
    completedFiches = completedFiches.filter(id => id !== ficheId);
  } else {
    completedFiches.push(ficheId);
  }
  
  localStorage.setItem('dscg_completed_fiches', JSON.stringify(completedFiches));
  renderSidebars();
  updateProgressStats();
  
  const isDone = completedFiches.includes(ficheId);
  doneBtn.textContent = isDone ? '✓ Révisé' : 'Mark Complété';
}

// Toggle Bookmark Status
function toggleBookmark(subject) {
  const starBtn = document.getElementById(`btn-star-${subject}`);
  if (!starBtn) return;
  
  const ficheId = starBtn.dataset.ficheId;
  if (!ficheId) return;
  
  if (bookmarkedFiches.includes(ficheId)) {
    bookmarkedFiches = bookmarkedFiches.filter(id => id !== ficheId);
  } else {
    bookmarkedFiches.push(ficheId);
  }
  
  localStorage.setItem('dscg_bookmarked_fiches', JSON.stringify(bookmarkedFiches));
  renderSidebars();
  renderBookmarks();
  
  const isStar = bookmarkedFiches.includes(ficheId);
  starBtn.textContent = isStar ? '★ Favori' : '☆ Enregistrer';
  if (isStar) starBtn.classList.add('active-star'); else starBtn.classList.remove('active-star');
}

// Render Dashboard Bookmarks
function renderBookmarks() {
  const container = document.getElementById('bookmark-list');
  if (!container) return;
  
  container.innerHTML = '';
  if (bookmarkedFiches.length === 0) {
    container.innerHTML = '<span style="color:var(--text-muted); font-size:13.5px;">Aucun favori enregistré. Cliquez sur "☆ Enregistrer" sur une fiche pour l\'ajouter ici !</span>';
    return;
  }
  
  bookmarkedFiches.forEach(id => {
    let foundFiche = null;
    let foundSubject = null;
    
    Object.keys(FICHES_DATABASE).forEach(subj => {
      const f = FICHES_DATABASE[subj].find(item => item.id === id);
      if (f) { foundFiche = f; foundSubject = subj; }
    });
    
    if (foundFiche) {
      const chip = document.createElement('div');
      chip.className = 'bookmark-chip';
      chip.innerHTML = `⭐️ ${foundFiche.title}`;
      chip.addEventListener('click', () => {
        switchTab(foundSubject);
        const sidebarItem = document.querySelector(`#sidebar-${foundSubject} [data-id="${foundFiche.id}"]`);
        if (sidebarItem) loadFiche(foundSubject, sidebarItem, foundFiche);
      });
      container.appendChild(chip);
    }
  });
}

// Toggle Fullscreen Mode
function toggleFullscreen(subject) {
  const container = document.getElementById(`viewer-container-${subject}`);
  if (container) {
    container.classList.toggle('fullscreen');
  }
}

// Populate Section TOC Dropdown
function updateSectionDropdown(subject) {
  const iframe = document.getElementById(`viewer-${subject}`);
  const select = document.getElementById(`select-section-${subject}`);
  if (!iframe || !select) return;
  
  try {
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    const banners = doc.querySelectorAll('h2.banner, h3');
    select.innerHTML = '<option value="">📑 Aller à la section...</option>';
    
    banners.forEach(b => {
      const option = document.createElement('option');
      option.value = b.id || b.textContent;
      option.textContent = b.textContent;
      select.appendChild(option);
    });
    
    select.onchange = (e) => {
      const val = e.target.value;
      if (!val) return;
      const targetElem = doc.getElementById(val) || Array.from(banners).find(b => b.textContent === val);
      if (targetElem) targetElem.scrollIntoView({ behavior: 'smooth' });
    };
  } catch (err) {
    console.log("Cross-origin section jump limited", err);
    // Fallback if blocked by CORS (file://)
    select.innerHTML = '<option value="">📑 Sections (Désactivé en local)</option>';
    select.onchange = (e) => {
      const val = e.target.value;
      if (!val) return;
      iframe.contentWindow.postMessage({ action: 'jump', target: val }, '*');
    };
  }
}

// Filter Fiche Content Types
function filterFicheContent(subject, type) {
  // Update active button visual state
  if (window.event && window.event.currentTarget) {
    const btn = window.event.currentTarget;
    const filterContainer = btn.closest('.filter-bar');
    if (filterContainer) {
      filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
  }

  const iframe = document.getElementById(`viewer-${subject}`);
  if (!iframe) return;
  
  try {
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    const allBoxes = doc.querySelectorAll('.box, .cas, table, .tree');
    
    if (type === 'all') {
      allBoxes.forEach(b => b.style.display = '');
      return;
    }
    
    allBoxes.forEach(b => {
      if (type === 'piege' && b.classList.contains('piege')) b.style.display = '';
      else if (type === 'memo' && b.classList.contains('memo')) b.style.display = '';
      else if (type === 'reformulation' && (b.classList.contains('simplification') || b.classList.contains('reformulation'))) b.style.display = '';
      else if (type === 'cas' && b.classList.contains('cas')) b.style.display = '';
      else b.style.display = 'none';
    });
  } catch (err) {
    console.log("Filter error, using postMessage fallback", err);
    // Fallback if blocked by CORS (file://)
    iframe.contentWindow.postMessage({ action: 'filter', type: type }, '*');
  }
}

// Reset Study Progress
function resetProgress() {
  if (confirm("Voulez-vous vraiment réinitialiser votre progression d'étude ?")) {
    completedFiches = [];
    localStorage.removeItem('dscg_completed_fiches');
    renderSidebars();
    updateProgressStats();
  }
}


// Print Current Active Fiche
function printActiveFiche(subject) {
  const iframe = document.getElementById(`viewer-${subject}`);
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.print();
  }
}

// Progress Statistics Update
function updateProgressStats() {
  const total = FICHES_DATABASE.societes.length + FICHES_DATABASE.fiscal.length + FICHES_DATABASE.contrats.length + FICHES_DATABASE.difficultes_penal.length + FICHES_DATABASE.finance.length + FICHES_DATABASE.evaluation.length;
  const doneCount = completedFiches.length;
  const percent = Math.round((doneCount / total) * 100);
  
  const doneStat = document.getElementById('stat-completed');
  if (doneStat) doneStat.innerHTML = `${doneCount} / ${total} <span onclick="resetProgress()" style="font-size:11px; color:var(--text-muted); cursor:pointer; text-decoration:underline; margin-left:4px;">(Reset)</span>`;
  
  // Update subject individual progress
  ['societes', 'fiscal', 'contrats', 'difficultes_penal', 'finance', 'evaluation', 'mcg'].forEach(subject => {
    const list = FICHES_DATABASE[subject];
    const subDone = list.length > 0 ? list.filter(f => completedFiches.includes(f.id)).length : 0;
    const subPercent = list.length > 0 ? Math.round((subDone / list.length) * 100) : 0;
    
    const fill = document.getElementById(`progress-fill-${subject}`);
    if (fill) fill.style.width = `${subPercent}%`;
    
    const text = document.getElementById(`progress-text-${subject}`);
    if (text) text.textContent = `${subDone}/${list.length} fiches (${subPercent}%)`;
  });
}

// Quiz Flash Logic
function initQuiz() {
  currentQuizIndex = Math.floor(Math.random() * QUIZ_DATABASE.length);
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const qObj = QUIZ_DATABASE[currentQuizIndex];
  const qBox = document.getElementById('quiz-question');
  const aBox = document.getElementById('quiz-answer');
  
  if (qBox) qBox.textContent = `Question : ${qObj.q}`;
  if (aBox) {
    aBox.style.display = 'none';
    aBox.textContent = `Réponse : ${qObj.a}`;
  }
}

function showQuizAnswer() {
  const aBox = document.getElementById('quiz-answer');
  if (aBox) aBox.style.display = 'block';
}

function nextQuizQuestion() {
  currentQuizIndex = (currentQuizIndex + 1) % QUIZ_DATABASE.length;
  renderQuizQuestion();
}

// Global Search Engine
function handleGlobalSearch(query) {
  const modal = document.getElementById('search-modal');
  const resultsContainer = document.getElementById('search-results');
  if (!modal || !resultsContainer) return;
  
  if (!query || query.trim().length < 2) {
    modal.classList.remove('active');
    return;
  }
  
  const q = query.toLowerCase().trim();
  resultsContainer.innerHTML = '';
  modal.classList.add('active');
  
  let matchesCount = 0;
  
  // Search through all subjects
  Object.keys(FICHES_DATABASE).forEach(subj => {
    FICHES_DATABASE[subj].forEach(fiche => {
      if (fiche.title.toLowerCase().includes(q)) {
        matchesCount++;
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.innerHTML = `
          <div class="search-result-title">${fiche.title}</div>
          <div class="search-result-snippet">Trouvé dans le titre de la fiche (${subj.toUpperCase()})</div>
        `;
        item.addEventListener('click', () => {
          modal.classList.remove('active');
          switchTab(subj);
          // find item in sidebar
          const sidebarItem = document.querySelector(`#sidebar-${subj} [data-id="${fiche.id}"]`);
          if (sidebarItem) loadFiche(subj, sidebarItem, fiche);
        });
        resultsContainer.appendChild(item);
      }
    });
  });
  
  if (matchesCount === 0) {
    resultsContainer.innerHTML = `<div style="padding:20px; text-align:center; color:var(--text-muted)">Aucun résultat trouvé pour "${query}"</div>`;
  }
}

function closeSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) modal.classList.remove('active');
}

// Setup Event Listeners
function setupEventListeners() {
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });
  
  const searchInput = document.getElementById('global-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => handleGlobalSearch(e.target.value));
  }
}
