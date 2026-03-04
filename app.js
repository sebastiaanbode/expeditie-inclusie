/* ============================================================
   Expeditie Inclusie — App Logic
   ============================================================ */

// ── Canvas Data ──────────────────────────────────────────────
const CANVASES = [
  {
    id: 1,
    title: "Projectplan",
    backTitle: "Richting bepalen",
    icon: "🧭",
    accentColor: "#e8dff5",
    accentDark: "#6b4c9a",
    frontImage: "assets/1-1.png",
    sections: [
      {
        id: "scenarios",
        title: "Wat werkt goed als we inclusief zijn? Wat gaat fout als we het vergeten?",
        description: "Bedenk samen het droomscenario én het doemscenario. Zo zie je meteen waarom inclusie belangrijk is.",
        layout: "two-column",
        fields: [
          { id: "droomscenario", type: "textarea", label: "Droomscenario", placeholder: "Beschrijf het ideale scenario..." },
          { id: "doemscenario", type: "textarea", label: "Doemscenario", placeholder: "Beschrijf het worstcase scenario..." }
        ]
      },
      {
        id: "ervaringsdeskundigen",
        title: "Hoe en wanneer doen ervaringsdeskundigen mee?",
        description: "Wanneer en op welke manier vragen we input van mensen die zelf leven met een beperking of uitsluiting? Bijvoorbeeld bij onderzoek, ontwerp of testen.",
        layout: "four-column",
        fields: [
          { id: "discover-check", type: "checkbox", label: "Discover" },
          { id: "discover-tijd", type: "text", label: "Tijd:", placeholder: "" },
          { id: "define-check", type: "checkbox", label: "Define" },
          { id: "define-tijd", type: "text", label: "Tijd:", placeholder: "" },
          { id: "develop-check", type: "checkbox", label: "Develop" },
          { id: "develop-tijd", type: "text", label: "Tijd:", placeholder: "" },
          { id: "deliver-check", type: "checkbox", label: "Deliver" },
          { id: "deliver-tijd", type: "text", label: "Tijd:", placeholder: "" }
        ]
      },
      {
        id: "inclusiedoel",
        title: "Wat willen jullie bereiken op het gebied van inclusie in dit project?",
        description: "Praat samen over wat inclusie hier betekent. Schrijf een kort doel op dat laat zien wat jullie willen verbeteren.",
        fields: [
          { id: "inclusiedoel", type: "textarea", label: "Inclusiedoel", placeholder: "Beschrijf jullie inclusiedoel..." }
        ]
      },
      {
        id: "waarde",
        title: "Wat is de waarde van inclusie voor:",
        layout: "stacked",
        fields: [
          { id: "waarde-doelgroep", type: "textarea", label: "De doelgroep", placeholder: "", rows: 2 },
          { id: "waarde-opdrachtgever", type: "textarea", label: "De opdrachtgever", placeholder: "", rows: 2 },
          { id: "waarde-eindresultaat", type: "textarea", label: "Het eindresultaat", placeholder: "", rows: 2 }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Startbijeenkomst",
    backTitle: "Samen aan boord",
    icon: "⛵",
    accentColor: "#deeef7",
    accentDark: "#2d5f7c",
    frontImage: "assets/2-1.png",
    sections: [
      {
        id: "doel",
        title: "Herhaal het doel uit het canvas 'Richting bepalen'",
        description: "Dit is jullie kompas.",
        layout: "two-column-uneven",
        fields: [
          { id: "doel", type: "textarea", label: "Doel", placeholder: "Herhaal hier het inclusiedoel..." }
        ]
      },
      {
        id: "doelgroep",
        title: "Wie hoort bij jullie doelgroep? En welke verschillen of diversiteit zien jullie daarin?",
        description: "Gebruik het kaartenspel Diversiteitskenmerken om te verkennen:\n• Welke kenmerken, situaties of ervaringen zijn belangrijk?\n• Welke mensen of groepen komen vaak te weinig aan bod?",
        fields: [
          { id: "doelgroep", type: "textarea", label: "Doelgroep en diversiteit", placeholder: "" }
        ]
      },
      {
        id: "perspectieven",
        title: "Welke perspectieven zijn er al? Welke ontbreken nog?",
        description: "Bekijk opleiding, taal, leefwereld, ervaring en aannames. Wat zie je in het team? Wie of wat kan inzichten aanvullen?",
        fields: [
          { id: "perspectieven", type: "textarea", label: "Perspectieven", placeholder: "" }
        ]
      },
      {
        id: "inclusiedoel-gehaald",
        title: "Wanneer is het inclusiedoel gehaald? Wat zie je terug in het resultaat?",
        fields: [
          { id: "inclusiedoel-gehaald", type: "textarea", label: "Resultaat", placeholder: "" }
        ]
      },
      {
        id: "inclusie-levend",
        title: "Hoe houden we inclusie levend tijdens het project?",
        description: "Maak afspraken: hoe en wanneer controleren jullie of inclusie nog belangrijk is? Wie doet wat?",
        fields: [
          { id: "inclusie-levend", type: "textarea", label: "Afspraken", placeholder: "" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Op pad met je doelgroep",
    backTitle: "Op pad met je doelgroep",
    icon: "🥾",
    accentColor: "#e0f0e3",
    accentDark: "#3a7d4e",
    frontImage: "assets/3-1.png",
    sections: [
      {
        id: "doel",
        title: "Herhaal het doel uit het canvas 'Richting bepalen'",
        description: "Dit is jullie kompas.",
        fields: [
          { id: "doel", type: "textarea", label: "Doel", placeholder: "Herhaal hier het inclusiedoel..." }
        ]
      },
      {
        id: "doelgroep",
        title: "Wie hoort er bij onze doelgroep?",
        description: "Wie wil je bereiken? Zet je doelgroep zo breed en divers mogelijk neer. Denk aan taal, leeftijd, digitale vaardigheden, opleiding, leefwereld en ervaring.",
        fields: [
          { id: "doelgroep", type: "textarea", label: "Doelgroep", placeholder: "" }
        ]
      },
      {
        id: "drempels",
        title: "Welke drempels kunnen er zijn?",
        description: "Wat kan mensen tegenhouden om mee te doen aan jullie onderzoek? Bijvoorbeeld: iemand spreekt de taal niet goed of iemand heeft geen digitaal apparaat of internet.",
        fields: [
          { id: "drempels", type: "textarea", label: "Drempels", placeholder: "" }
        ]
      },
      {
        id: "drempels-verlagen",
        title: "Hoe verlagen we die drempels?",
        description: "Wat maakt meedoen makkelijker en aantrekkelijker? Denk aan hulp bij vervoer of kosten, duidelijke taal, tolken, vertrouwde plekken, passende beloning of verschillende manieren om mee te doen.",
        fields: [
          { id: "drempels-verlagen", type: "textarea", label: "Drempels verlagen", placeholder: "" }
        ]
      },
      {
        id: "drempels-niet-wegnemen",
        title: "Welke drempels kunnen we nu niet wegnemen?",
        description: "Iedereen bereiken lukt niet altijd. Misschien kun je niet overal in voorzien, zoals een tolk of een vergoeding. Het belangrijkste is dat je je daar bewust van bent.",
        fields: [
          { id: "drempels-niet-wegnemen", type: "textarea", label: "Niet weg te nemen drempels", placeholder: "" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Koers bijstellen",
    backTitle: "Koers bijstellen",
    icon: "🪁",
    accentColor: "#fde8d0",
    accentDark: "#c47a2a",
    frontImage: "assets/4-1.png",
    sections: [
      {
        id: "doel",
        title: "Herhaal het doel uit het canvas 'Richting bepalen'",
        description: "Dit is jullie kompas.",
        fields: [
          { id: "doel", type: "textarea", label: "Doel", placeholder: "Herhaal hier het inclusiedoel..." }
        ]
      },
      {
        id: "vertegenwoordiging",
        title: "Wie hoor je terug in je onderzoek en wie niet?",
        description: "Kijk terug naar je doelgroep van Op pad met je doelgroep. Welke mensen heb je kunnen bereiken, en wie hoor je minder of niet?",
        layout: "two-column",
        fields: [
          { id: "goed-vertegenwoordigd", type: "textarea", label: "Wie zijn goed vertegenwoordigd?", placeholder: "" },
          { id: "minder-gehoord", type: "textarea", label: "Wie hoor je minder of niet?", placeholder: "" }
        ]
      },
      {
        id: "perspectieven",
        title: "Welke minder gehoorde perspectieven zijn belangrijk om toch mee te nemen?",
        description: "Bedenk samen: welke inzichten, ook de kleine of afwijkende, zijn belangrijk genoeg om mee te nemen?",
        fields: [
          { id: "perspectieven", type: "textarea", label: "Minder gehoorde perspectieven", placeholder: "" }
        ]
      },
      {
        id: "ontwerpvraag",
        title: "Wat wordt jullie ontwerpvraag?",
        description: "Formuleer een ontwerpvraag die aanzet tot inclusief denken en doen.",
        layout: "two-column-uneven",
        fields: [
          { id: "check-verschillende-gebruikers", type: "checkbox", label: "Houdt de vraag rekening met verschillende soorten gebruikers?" },
          { id: "check-uitsluiting", type: "checkbox", label: "Sluit de vraag per ongeluk groepen uit? Bijvoorbeeld door wie je kiest, de taal of de plek." },
          { id: "check-toegankelijk", type: "checkbox", label: "Let je op of het voor iedereen toegankelijk is? Bijvoorbeeld op het gebied van gebouwen, internet, denken of kosten." },
          { id: "check-breed-genoeg", type: "checkbox", label: "Is de vraag breed genoeg, of geef je al een oplossing mee?" },
          { id: "ontwerpvraag", type: "textarea", label: "Onze inclusieve ontwerpvraag", placeholder: "" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Samen bouwen",
    backTitle: "Samen bouwen",
    icon: "🧱",
    accentColor: "#fce4ec",
    accentDark: "#c0392b",
    frontImage: "assets/5-1.png",
    sections: [
      {
        id: "doel",
        title: "Herhaal het doel uit het canvas 'Richting bepalen'",
        description: "Dit is jullie kompas.",
        fields: [
          { id: "doel", type: "textarea", label: "Doel", placeholder: "Herhaal hier het inclusiedoel..." }
        ]
      },
      {
        id: "wie-helpt",
        title: "Wie kan helpen om het ontwerp sterker en inclusiever te maken?",
        description: "Denk aan ervaringsdeskundigen, collega's met andere perspectieven of mensen uit je doelgroep. Wie betrek je en wat wordt hun rol?",
        layout: "three-column",
        fields: [
          { id: "meepraten", type: "textarea", label: "Meepraten", placeholder: "" },
          { id: "meedenken", type: "textarea", label: "Meedenken", placeholder: "" },
          { id: "meebouwen", type: "textarea", label: "Meebouwen", placeholder: "" }
        ]
      },
      {
        id: "meedoen-test",
        title: "Hoe zorgen we dat verschillende mensen kunnen meedoen aan de test?",
        description: "Bedenk samen: hoe maken we deelname leuk en laagdrempelig? Denk bijvoorbeeld aan locatie, tijd, digitale toegang, mobiliteit, taal, energie, angst om het 'fout' te doen.",
        fields: [
          { id: "meedoen-test", type: "textarea", label: "Deelname aan test", placeholder: "" }
        ]
      },
      {
        id: "bruikbaarheid",
        title: "Is je prototype of concept bruikbaar voor verschillende mensen?",
        layout: "two-col-checkboxes",
        fields: [
          { id: "check-taal", type: "checkbox", label: "Is de taal begrijpelijk voor iedereen? (geen vakjargon, korte zinnen, duidelijke structuur)" },
          { id: "check-laaggeletterd", type: "checkbox", label: "Is er rekening gehouden met laaggeletterdheid en anderstaligheid?" },
          { id: "check-beeld", type: "checkbox", label: "Wordt uitleg ondersteund met beeld, voorbeelden of iconen?" },
          { id: "check-contrast", type: "checkbox", label: "Is er voldoende contrast en visuele helderheid?" },
          { id: "check-screenreader", type: "checkbox", label: "Kan het ook getest worden zonder beeld (bv. met screenreader)?" },
          { id: "check-geluid", type: "checkbox", label: "Kan het ook getest worden zonder geluid (ondertiteling, transcript)?" },
          { id: "check-herkenning", type: "checkbox", label: "Is er herkenning voor verschillende achtergronden, leeftijden, genders of beperkingen?" },
          { id: "check-feedback", type: "checkbox", label: "Kan de tester feedback geven op meerdere manieren (mondeling, visueel, met emoji's)?" }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Klaar voor vertrek",
    backTitle: "Klaar voor vertrek",
    icon: "🧳",
    accentColor: "#e8eaf6",
    accentDark: "#3f51b5",
    frontImage: "assets/6-1.png",
    sections: [
      {
        id: "doel",
        title: "Herhaal het doel uit het canvas 'Richting bepalen'",
        description: "Dit is jullie kompas.",
        fields: [
          { id: "doel", type: "textarea", label: "Doel", placeholder: "Herhaal hier het inclusiedoel..." }
        ]
      },
      {
        id: "inclusiedoel-bereikt",
        title: "Is het inclusiedoel bereikt of is er nog iets nodig?",
        fields: [
          { id: "inclusiedoel-bereikt", type: "textarea", label: "Reflectie op inclusiedoel", placeholder: "" }
        ]
      },
      {
        id: "feedback-doelgroep",
        title: "Wat wil je nog weten van je doelgroep of een ervaringsdeskundige?",
        description: "Gebruik deze fase om te checken of de eindoplossing voor iedereen werkt.\n• Welke onderdelen hebben feedback nodig?\n• Wie kunnen we betrekken bij een korte test?\n• Hoe zorgen we dat de test toegankelijk is (tijd, ervaring, energie)?",
        fields: [
          { id: "feedback-doelgroep", type: "textarea", label: "Feedback van doelgroep", placeholder: "" }
        ]
      },
      {
        id: "eindresultaat-inclusief",
        title: "Is het eindresultaat inclusief genoeg qua inhoud én uitvoering?",
        layout: "stacked",
        fields: [
          { id: "check-beeldgebruik", type: "checkbox", label: "Beeldgebruik is representatief" },
          { id: "check-taal-doelgroep", type: "checkbox", label: "Taal is begrijpelijk voor de doelgroep" },
          { id: "check-toegankelijkheid", type: "checkbox", label: "Toegankelijkheid (technisch en visueel) is op orde" },
          { id: "check-belanghebbenden", type: "checkbox", label: "Belanghebbenden (zoals ervaringsdeskundigen of gebruikers) hebben feedback kunnen geven" },
          { id: "check-afspraken-zichtbaar", type: "checkbox", label: "Alle afspraken over inclusie zijn terug te zien in het eindresultaat" }
        ]
      },
      {
        id: "overdracht",
        title: "Wat moet je vastleggen of overdragen zodat inclusie ook na het project blijft bestaan?",
        description: "Zoals: documentatie voor collega's, een onderbouwing van je keuzes of heldere afspraken voor beheer of doorontwikkeling.",
        fields: [
          { id: "overdracht", type: "textarea", label: "Overdracht", placeholder: "" }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Samen terugblikken",
    backTitle: "Samen terugblikken",
    icon: "🫒",
    accentColor: "#fff8e1",
    accentDark: "#f9a825",
    frontImage: "assets/7-1.png",
    sections: [
      {
        id: "trots-en-anders",
        title: "Waar zijn jullie trots op? / Wat hadden jullie liever anders gedaan?",
        layout: "two-column",
        fields: [
          { id: "trots", type: "textarea", label: "Waar zijn jullie trots op?", placeholder: "Sta stil bij successen, grote of kleine. Wat werkte goed? Wat gaf energie? Wat gaf vertrouwen?" },
          { id: "anders", type: "textarea", label: "Wat hadden jullie liever anders gedaan?", placeholder: "Waar liepen jullie vast en wat zouden jullie de volgende keer anders aanpakken?" }
        ]
      },
      {
        id: "buitenaf",
        title: "Wat viel op volgens iemand van buitenaf?",
        description: "Laat iemand die meedacht, testte of betrokken was reflecteren op het proces. Wat viel op in taal, houding, communicatie of toegankelijkheid?",
        fields: [
          { id: "buitenaf", type: "textarea", label: "Reflectie van buitenaf", placeholder: "" }
        ]
      },
      {
        id: "meenemen",
        title: "Wat neem je mee?",
        description: "Vat samen wat je opnieuw zou doen, of juist anders. Wat zou je willen meegeven aan collega's of anderen in het vak?",
        fields: [
          { id: "meenemen", type: "textarea", label: "Wat neem je mee?", placeholder: "" }
        ]
      }
    ]
  }
];

// ── Supabase ─────────────────────────────────────────────────
const SUPABASE_URL = 'https://nvadbfjntfsyjjypqyrg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52YWRiZmpudGZzeWpqeXBxeXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1OTcwODMsImV4cCI6MjA4ODE3MzA4M30.SLBHl3rV5qwWwaWjbeqpw8kAQ79lyp25BN89MB11pL8';

let supabaseClient = null;
let currentUser = null;

function initSupabase() {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  supabaseClient.auth.onAuthStateChange(async (event, session) => {
    const previousUser = currentUser;
    currentUser = session?.user || null;
    renderAuthSection();

    if (event === 'SIGNED_IN' && currentUser && !previousUser) {
      await migrateLocalToCloud();
      await syncCloudToLocal();
      render();
      refreshNavChecks();
      updateProgress();
      showToast('Ingelogd!');
    }

    if (event === 'SIGNED_OUT') {
      showToast('Uitgelogd');
    }
  });
}

// ── State ────────────────────────────────────────────────────
let currentView = 'home';
let flippedCards = {};

// ── localStorage helpers ─────────────────────────────────────
function saveCanvasData(canvasId, data) {
  localStorage.setItem(`expeditie-canvas-${canvasId}`, JSON.stringify(data));

  if (currentUser) {
    saveCanvasDataToCloud(canvasId, data);
  }
}

async function saveCanvasDataToCloud(canvasId, data) {
  try {
    const { error } = await supabaseClient
      .from('canvas_data')
      .upsert(
        { user_id: currentUser.id, canvas_id: canvasId, data: data },
        { onConflict: 'user_id,canvas_id' }
      );
    if (error) throw error;
  } catch (err) {
    console.error('Cloud save failed:', err);
    showToast('Opslaan in de cloud mislukt', 'warning');
  }
}

async function syncCloudToLocal() {
  if (!currentUser) return;
  try {
    const { data, error } = await supabaseClient
      .from('canvas_data')
      .select('canvas_id, data')
      .eq('user_id', currentUser.id);
    if (error) throw error;
    if (data) {
      data.forEach(row => {
        localStorage.setItem(`expeditie-canvas-${row.canvas_id}`, JSON.stringify(row.data));
      });
    }
  } catch (err) {
    console.error('Cloud sync failed:', err);
  }
}

async function migrateLocalToCloud() {
  if (!currentUser) return;
  try {
    const { data: existing } = await supabaseClient
      .from('canvas_data')
      .select('canvas_id')
      .eq('user_id', currentUser.id);

    const existingIds = new Set((existing || []).map(r => r.canvas_id));
    const upserts = [];

    for (let i = 1; i <= 7; i++) {
      if (existingIds.has(i)) continue;
      const raw = localStorage.getItem(`expeditie-canvas-${i}`);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Object.keys(parsed).length > 0 && Object.values(parsed).some(v => v && v.toString().trim() !== '' && v !== false)) {
          upserts.push({ user_id: currentUser.id, canvas_id: i, data: parsed });
        }
      }
    }

    if (upserts.length > 0) {
      await supabaseClient.from('canvas_data').upsert(upserts, { onConflict: 'user_id,canvas_id' });
    }
  } catch (err) {
    console.error('Migration failed:', err);
  }
}

function loadCanvasData(canvasId) {
  const raw = localStorage.getItem(`expeditie-canvas-${canvasId}`);
  return raw ? JSON.parse(raw) : {};
}

function isCanvasComplete(canvasId) {
  const data = loadCanvasData(canvasId);
  return Object.keys(data).length > 0 && Object.values(data).some(v => v && v.toString().trim() !== '' && v !== false);
}

function getCompletedCount() {
  return CANVASES.filter(c => isCanvasComplete(c.id)).length;
}

// ── Router ───────────────────────────────────────────────────
function navigate(view) {
  currentView = view;
  // Reset flip state when navigating to a canvas
  if (view.startsWith('canvas-')) {
    const id = parseInt(view.split('-')[1]);
    flippedCards[id] = false;
  }
  window.location.hash = view;
  render();
  updateActiveNav();
  window.scrollTo(0, 0);
}

function handleHashChange() {
  const hash = window.location.hash.slice(1) || 'home';
  currentView = hash;
  render();
  updateActiveNav();
}

function updateActiveNav() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.view === currentView);
    link.setAttribute('aria-current', link.dataset.view === currentView ? 'page' : 'false');
  });
}

// ── Progress ─────────────────────────────────────────────────
function updateProgress() {
  const count = getCompletedCount();
  const fill = document.querySelector('.progress-fill');
  const text = document.querySelector('.progress-text');
  if (fill) fill.style.width = `${(count / 7) * 100}%`;
  if (text) text.textContent = `${count} van 7 ingevuld`;
}

// ── Renderers ────────────────────────────────────────────────
function render() {
  const main = document.getElementById('main-content');
  if (!main) return;

  if (currentView === 'home') {
    renderHome(main);
  } else if (currentView === 'overview') {
    renderOverview(main);
  } else if (currentView.startsWith('canvas-')) {
    const id = parseInt(currentView.split('-')[1]);
    renderCanvas(main, id);
  } else {
    renderHome(main);
  }

  updateProgress();
}

function renderHome(container) {
  container.innerHTML = `
    <div class="home-view">
      <div class="cover-wrapper">
        <img src="assets/front.png" alt="Expeditie Inclusie — Inclusief ontwerp toolkit" class="cover-image" onerror="this.parentElement.innerHTML = createCoverPlaceholder()">
      </div>
      <div class="home-actions">
        <button class="btn btn-primary btn-large" onclick="navigate('overview')" aria-label="Bekijk alle canvassen">
          Start de expeditie
          <span class="btn-arrow" aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  `;
}

function createCoverPlaceholder() {
  return `
    <div class="cover-placeholder">
      <div class="cover-placeholder-content">
        <h2>Expeditie Inclusie</h2>
        <p>Inclusief ontwerp toolkit</p>
        <div class="cover-road" aria-hidden="true">
          <svg viewBox="0 0 400 120" width="400" height="120">
            <path d="M0,100 Q100,20 200,60 T400,30" stroke="#2d5f7c" stroke-width="20" fill="none" stroke-linecap="round"/>
            <path d="M0,100 Q100,20 200,60 T400,30" stroke="white" stroke-width="2" fill="none" stroke-dasharray="12,12" stroke-linecap="round"/>
          </svg>
        </div>
        <p class="cover-hint">Plaats <code>cover.png</code> in de <code>assets</code> map</p>
      </div>
    </div>
  `;
}

function renderOverview(container) {
  const overviewOrder = [null, 1, 3, 2, 4, 5, 7, 6]; // null = cover

  function renderCoverCard() {
    return `
      <button class="overview-card overview-card-cover"
              onclick="openLightbox('assets/front.png', 'Expeditie Inclusie')"
              aria-label="Expeditie Inclusie — cover vergroten">
        <div class="overview-card-image">
          <img src="assets/front.png" alt="Expeditie Inclusie — cover">
        </div>
        <div class="overview-card-footer">
          <span class="overview-card-number" style="--accent: var(--color-sage-light); --accent-dark: var(--color-teal)">Cover</span>
          <span class="overview-card-title">Expeditie Inclusie</span>
        </div>
      </button>
    `;
  }

  function renderCanvasCard(canvas) {
    const complete = isCanvasComplete(canvas.id);
    return `
      <button class="overview-card ${complete ? 'complete' : ''}"
              onclick="navigate('canvas-${canvas.id}')"
              aria-label="${canvas.title}${complete ? ' (ingevuld)' : ''}"
              style="--accent: ${canvas.accentColor}; --accent-dark: ${canvas.accentDark}">
        <div class="overview-card-image">
          <img src="${canvas.frontImage}" alt="${canvas.title}"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
          <div class="overview-card-placeholder" style="display:none">
            <span class="overview-card-icon">${canvas.icon}</span>
          </div>
        </div>
        <div class="overview-card-footer">
          <span class="overview-card-number">Canvas ${canvas.id}</span>
          <span class="overview-card-title">${canvas.title}</span>
          ${complete ? '<span class="overview-card-check" aria-label="Ingevuld">✓</span>' : ''}
        </div>
      </button>
    `;
  }

  const cards = overviewOrder.map(id => {
    if (id === null) return renderCoverCard();
    const canvas = CANVASES.find(c => c.id === id);
    return canvas ? renderCanvasCard(canvas) : '';
  }).join('');

  container.innerHTML = `
    <div class="overview-view">
      <div class="overview-grid" role="list">
        ${cards}
      </div>
    </div>
  `;
}

function renderCanvas(container, canvasId) {
  const canvas = CANVASES.find(c => c.id === canvasId);
  if (!canvas) { renderHome(container); return; }

  const isFlipped = flippedCards[canvasId] || false;

  container.innerHTML = `
    <div class="canvas-view" style="--accent: ${canvas.accentColor}; --accent-dark: ${canvas.accentDark}">
      <div class="canvas-header">
        <h2><span class="canvas-number">Canvas ${canvas.id}</span> ${canvas.title}</h2>
        <div class="canvas-nav-buttons">
          ${canvasId > 1 ? `<button class="btn btn-ghost" onclick="navigate('canvas-${canvasId - 1}')" aria-label="Vorig canvas"><span aria-hidden="true">←</span> Vorige</button>` : ''}
          ${canvasId < 7 ? `<button class="btn btn-ghost" onclick="navigate('canvas-${canvasId + 1}')" aria-label="Volgend canvas">Volgende <span aria-hidden="true">→</span></button>` : ''}
        </div>
      </div>
      <div class="canvas-card-container">
        <div class="canvas-card ${isFlipped ? 'flipped' : ''}" id="canvas-card-${canvasId}">
          <div class="canvas-front">
            <img src="${canvas.frontImage}" alt="${canvas.title} — voorkant" class="canvas-front-image"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <div class="canvas-front-placeholder" style="display:none">
              <span class="canvas-front-icon">${canvas.icon}</span>
              <h3>${canvas.title}</h3>
              <p>Plaats <code>${canvas.frontImage.split('/').pop()}</code> in de <code>assets</code> map</p>
            </div>
            <button class="btn btn-primary btn-flip" onclick="flipCard(${canvasId})" aria-label="Draai canvas om naar het formulier">
              Draai om <span aria-hidden="true">↻</span>
            </button>
          </div>
          <div class="canvas-back">
            <div class="canvas-back-header" style="background: ${canvas.accentColor}">
              <span class="canvas-back-icon">${canvas.icon}</span>
              <h3>${canvas.backTitle}</h3>
            </div>
            <div class="canvas-back-body">
              ${renderForm(canvas)}
            </div>
            <div class="canvas-back-actions">
              <button class="btn btn-ghost" onclick="flipCard(${canvasId})" aria-label="Draai terug naar de voorkant">
                <span aria-hidden="true">↻</span> Terug
              </button>
              <button class="btn btn-primary" onclick="saveForm(${canvasId})" aria-label="Sla de invoer op">
                Opslaan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Load saved data
  loadFormData(canvasId);
}

function renderForm(canvas) {
  if (!canvas.sections || canvas.sections.length === 0) {
    return `
      <div class="form-placeholder">
        <p class="form-placeholder-icon">${canvas.icon}</p>
        <p>De inhoud van dit canvas wordt binnenkort toegevoegd.</p>
        <p class="form-placeholder-hint">Zodra de afbeeldingen beschikbaar zijn, wordt het formulier hier getoond.</p>
      </div>
    `;
  }

  return canvas.sections.map(section => {
    let fieldsHtml = '';

    if (section.id === 'ervaringsdeskundigen') {
      // Special layout for the Double Diamond phases
      fieldsHtml = `<div class="diamond-grid">
        ${['discover', 'define', 'develop', 'deliver'].map(phase => `
          <div class="diamond-phase">
            <label class="checkbox-label">
              <input type="checkbox" id="field-${canvas.id}-${phase}-check"
                     data-canvas="${canvas.id}" data-field="${phase}-check"
                     aria-label="${phase}">
              <span class="checkbox-custom" aria-hidden="true"></span>
              <span class="checkbox-text">${phase.charAt(0).toUpperCase() + phase.slice(1)}</span>
            </label>
            <div class="diamond-shape" aria-hidden="true">
              <svg viewBox="0 0 120 80" preserveAspectRatio="none">
                <polygon points="0,40 60,0 120,40 60,80" fill="${canvas.accentColor}" opacity="0.5"/>
              </svg>
            </div>
            <label class="field-label small" for="field-${canvas.id}-${phase}-tijd">Tijd:</label>
            <input type="text" id="field-${canvas.id}-${phase}-tijd"
                   data-canvas="${canvas.id}" data-field="${phase}-tijd"
                   class="form-input small" placeholder="">
          </div>
        `).join('')}
      </div>`;
    } else {
      const layoutClass = section.layout === 'two-column' ? 'fields-two-col' :
                          section.layout === 'three-column' ? 'fields-three-col' :
                          section.layout === 'two-col-checkboxes' ? 'fields-two-col-checks' :
                          section.layout === 'stacked' ? 'fields-stacked' : 'fields-default';
      fieldsHtml = `<div class="${layoutClass}">
        ${section.fields.map(field => renderField(canvas.id, field)).join('')}
      </div>`;
    }

    const descHtml = section.description
      ? `<p class="section-description">${section.description.replace(/\n/g, '<br>')}</p>`
      : '';

    return `
      <fieldset class="form-section">
        <legend class="section-title">${section.title}</legend>
        ${descHtml}
        ${fieldsHtml}
      </fieldset>
    `;
  }).join('');
}

function renderField(canvasId, field) {
  const fieldId = `field-${canvasId}-${field.id}`;

  if (field.type === 'textarea') {
    const rows = field.rows || 4;
    return `
      <div class="field-group">
        <label class="field-label" for="${fieldId}">${field.label}</label>
        <textarea id="${fieldId}" data-canvas="${canvasId}" data-field="${field.id}"
                  class="form-textarea" rows="${rows}" placeholder="${field.placeholder || ''}"
                  aria-label="${field.label}"></textarea>
      </div>
    `;
  }

  if (field.type === 'text') {
    return `
      <div class="field-group">
        <label class="field-label" for="${fieldId}">${field.label}</label>
        <input type="text" id="${fieldId}" data-canvas="${canvasId}" data-field="${field.id}"
               class="form-input" placeholder="${field.placeholder || ''}"
               aria-label="${field.label}">
      </div>
    `;
  }

  if (field.type === 'checkbox') {
    return `
      <div class="field-group field-checkbox">
        <label class="checkbox-label">
          <input type="checkbox" id="${fieldId}" data-canvas="${canvasId}" data-field="${field.id}"
                 aria-label="${field.label}">
          <span class="checkbox-custom" aria-hidden="true"></span>
          <span class="checkbox-text">${field.label}</span>
        </label>
      </div>
    `;
  }

  return '';
}

// ── Card Flip ────────────────────────────────────────────────
function flipCard(canvasId) {
  flippedCards[canvasId] = !flippedCards[canvasId];
  const card = document.getElementById(`canvas-card-${canvasId}`);
  if (card) {
    card.classList.toggle('flipped', flippedCards[canvasId]);
    // Move focus to the back/front
    if (flippedCards[canvasId]) {
      const firstInput = card.querySelector('.canvas-back textarea, .canvas-back input');
      if (firstInput) setTimeout(() => firstInput.focus(), 650);
    } else {
      const flipBtn = card.querySelector('.btn-flip');
      if (flipBtn) setTimeout(() => flipBtn.focus(), 650);
    }
  }
}

// ── Form Saving / Loading ────────────────────────────────────
function saveForm(canvasId) {
  const fields = document.querySelectorAll(`[data-canvas="${canvasId}"]`);
  const data = {};
  fields.forEach(field => {
    const key = field.dataset.field;
    if (field.type === 'checkbox') {
      data[key] = field.checked;
    } else {
      data[key] = field.value;
    }
  });
  saveCanvasData(canvasId, data);
  updateProgress();
  refreshNavChecks();
  showSaveConfirmation(canvasId);
}

function loadFormData(canvasId) {
  const data = loadCanvasData(canvasId);
  if (!data) return;

  Object.entries(data).forEach(([key, value]) => {
    const field = document.querySelector(`[data-canvas="${canvasId}"][data-field="${key}"]`);
    if (!field) return;
    if (field.type === 'checkbox') {
      field.checked = value;
    } else {
      field.value = value;
    }
  });
}

function showSaveConfirmation(canvasId) {
  const message = currentUser ? 'Opgeslagen!' : 'Lokaal opgeslagen';
  showToast(message);
}

function showToast(message, type = 'success') {
  const existing = document.querySelector('.save-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `save-toast ${type === 'warning' ? 'save-toast-warning' : ''}`;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('visible'));
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ── Sidebar Nav Generation ───────────────────────────────────
function generateNav() {
  const navList = document.getElementById('nav-canvas-list');
  if (!navList) return;

  CANVASES.forEach(canvas => {
    const li = document.createElement('li');
    const complete = isCanvasComplete(canvas.id);
    li.innerHTML = `
      <a href="#canvas-${canvas.id}" class="nav-link" data-view="canvas-${canvas.id}"
         aria-label="Canvas ${canvas.id}: ${canvas.title}${complete ? ' (ingevuld)' : ''}">
        <span class="nav-icon" aria-hidden="true">${canvas.icon}</span>
        <span class="nav-label">${canvas.title}</span>
        ${complete ? '<span class="nav-check" aria-label="Ingevuld">✓</span>' : ''}
      </a>
    `;
    navList.appendChild(li);
  });
}

// ── Refresh Nav Checkmarks ────────────────────────────────────
function refreshNavChecks() {
  const navList = document.getElementById('nav-canvas-list');
  if (!navList) return;
  navList.innerHTML = '';
  CANVASES.forEach(canvas => {
    const li = document.createElement('li');
    const complete = isCanvasComplete(canvas.id);
    li.innerHTML = `
      <a href="#canvas-${canvas.id}" class="nav-link" data-view="canvas-${canvas.id}"
         aria-label="Canvas ${canvas.id}: ${canvas.title}${complete ? ' (ingevuld)' : ''}">
        <span class="nav-icon" aria-hidden="true">${canvas.icon}</span>
        <span class="nav-label">${canvas.title}</span>
        ${complete ? '<span class="nav-check" aria-label="Ingevuld">✓</span>' : ''}
      </a>
    `;
    navList.appendChild(li);
  });
  updateActiveNav();
}

// ── Sidebar Toggle (mobile) ─────────────────────────────────
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}

// ── Keyboard Navigation ──────────────────────────────────────
function setupKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    // Escape closes flipped cards
    if (e.key === 'Escape') {
      const currentCanvasMatch = currentView.match(/^canvas-(\d+)$/);
      if (currentCanvasMatch) {
        const id = parseInt(currentCanvasMatch[1]);
        if (flippedCards[id]) {
          flipCard(id);
        }
      }
    }
  });
}

// ── Init ─────────────────────────────────────────────────────
function isAuthCallback() {
  return window.location.hash.includes('access_token');
}

document.addEventListener('DOMContentLoaded', async () => {
  initSupabase();

  if (isAuthCallback()) {
    const savedView = sessionStorage.getItem('expeditie-pre-auth-view') || 'home';
    sessionStorage.removeItem('expeditie-pre-auth-view');
    window.location.hash = savedView;
  }

  generateNav();
  setupKeyboardNav();
  handleHashChange();
  updateProgress();
  renderAuthSection();
});

window.addEventListener('hashchange', handleHashChange);

// ── Lightbox ─────────────────────────────────────────────────
function openLightbox(src, alt) {
  const existing = document.querySelector('.lightbox');
  if (existing) existing.remove();

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-label', alt);
  lightbox.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <div class="lightbox-content">
      <img src="${src}" alt="${alt}">
      <button class="lightbox-close" aria-label="Sluiten">&times;</button>
    </div>
  `;
  document.body.appendChild(lightbox);

  requestAnimationFrame(() => lightbox.classList.add('visible'));

  const close = () => {
    lightbox.classList.remove('visible');
    setTimeout(() => lightbox.remove(), 300);
  };

  lightbox.querySelector('.lightbox-backdrop').addEventListener('click', close);
  lightbox.querySelector('.lightbox-close').addEventListener('click', close);
  document.addEventListener('keydown', function handler(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', handler); }
  });
}

// ── Auth UI ──────────────────────────────────────────────────
function renderAuthSection() {
  const section = document.getElementById('auth-section');
  if (!section) return;

  if (currentUser) {
    section.innerHTML = `
      <div class="auth-user-info">
        <span class="auth-email" title="${currentUser.email}">${currentUser.email}</span>
        <button class="auth-logout-btn" onclick="handleLogout()">Uitloggen</button>
      </div>
    `;
  } else {
    section.innerHTML = `
      <button class="btn btn-ghost auth-login-btn" onclick="openAuthModal()">
        Inloggen
      </button>
    `;
  }
}

function openAuthModal() {
  const existing = document.querySelector('.lightbox');
  if (existing) existing.remove();

  sessionStorage.setItem('expeditie-pre-auth-view', currentView);

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-label', 'Inloggen');
  lightbox.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <div class="lightbox-content">
      <div class="auth-modal">
        <div class="auth-modal-header">
          <h3>Inloggen</h3>
          <p>Ontvang een inloglink via e-mail. Geen wachtwoord nodig.</p>
        </div>
        <form class="auth-form" id="auth-form">
          <label class="field-label" for="auth-email">E-mailadres</label>
          <input type="email" id="auth-email" class="form-input"
                 placeholder="naam@voorbeeld.nl" required autofocus>
          <button type="submit" class="btn btn-primary">
            Verstuur inloglink
          </button>
        </form>
      </div>
      <button class="lightbox-close" aria-label="Sluiten">&times;</button>
    </div>
  `;
  document.body.appendChild(lightbox);

  requestAnimationFrame(() => lightbox.classList.add('visible'));

  const close = () => {
    lightbox.classList.remove('visible');
    setTimeout(() => lightbox.remove(), 300);
  };

  lightbox.querySelector('.lightbox-backdrop').addEventListener('click', close);
  lightbox.querySelector('.lightbox-close').addEventListener('click', close);
  document.addEventListener('keydown', function handler(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', handler); }
  });

  lightbox.querySelector('#auth-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = lightbox.querySelector('#auth-email').value;
    const submitBtn = lightbox.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Versturen...';

    try {
      const { error } = await supabaseClient.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: window.location.origin + window.location.pathname }
      });

      if (error) throw error;

      lightbox.querySelector('.auth-modal').innerHTML = `
        <div class="auth-modal-header">
          <span class="auth-modal-icon">📧</span>
          <h3>Check je e-mail</h3>
          <p>We hebben een inloglink gestuurd naar <strong>${email}</strong>. Klik op de link in je e-mail om in te loggen.</p>
        </div>
        <button class="btn btn-ghost" onclick="closeAuthModal()" style="width:100%">Sluiten</button>
      `;
    } catch (err) {
      console.error('Magic link failed:', err);
      submitBtn.disabled = false;
      submitBtn.textContent = 'Verstuur inloglink';
      showToast('Versturen mislukt. Probeer het opnieuw.', 'warning');
    }
  });
}

function closeAuthModal() {
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    lightbox.classList.remove('visible');
    setTimeout(() => lightbox.remove(), 300);
  }
}

async function handleLogout() {
  await supabaseClient.auth.signOut();
  renderAuthSection();
}

// Expose for inline handlers
window.navigate = navigate;
window.flipCard = flipCard;
window.saveForm = saveForm;
window.toggleSidebar = toggleSidebar;
window.createCoverPlaceholder = createCoverPlaceholder;
window.openLightbox = openLightbox;
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.handleLogout = handleLogout;
