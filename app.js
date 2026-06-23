// ---------- Catalog de componente UI ----------
// Fiecare componentă e un fragment HTML+CSS de sine stătător (zero dependențe).
const COMPONENTS = [
  {
    id: "btn-gradient", name: "Buton Gradient", cat: "butoane",
    desc: "Buton cu fundal gradient și umbră colorată la hover.",
    code:
`<button class="btn-grad">Apasă-mă</button>

<style>
.btn-grad {
  padding: 12px 26px;
  border: none;
  border-radius: 12px;
  font: 600 15px system-ui;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(135deg, #6c5ce7, #00d1b2);
  box-shadow: 0 8px 20px rgba(108,92,231,.4);
  transition: transform .15s, box-shadow .2s;
}
.btn-grad:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(0,209,178,.5); }
.btn-grad:active { transform: translateY(0); }
</style>`
  },
  {
    id: "btn-neon", name: "Buton Neon", cat: "butoane",
    desc: "Contur luminos care strălucește la hover.",
    code:
`<button class="btn-neon">PORNIRE</button>

<style>
.btn-neon {
  padding: 12px 28px;
  background: transparent;
  color: #00d1b2;
  border: 2px solid #00d1b2;
  border-radius: 10px;
  font: 700 14px system-ui;
  letter-spacing: 2px;
  cursor: pointer;
  transition: .25s;
}
.btn-neon:hover {
  color: #04121b;
  background: #00d1b2;
  box-shadow: 0 0 12px #00d1b2, 0 0 28px #00d1b2;
}
</style>`
  },
  {
    id: "btn-arrow", name: "Buton cu Săgeată", cat: "butoane",
    desc: "Săgeata alunecă spre dreapta la hover.",
    code:
`<button class="btn-arrow">Continuă <span>→</span></button>

<style>
.btn-arrow {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px;
  border: none; border-radius: 12px;
  background: #181b22; color: #fff;
  font: 600 15px system-ui; cursor: pointer;
  border: 1px solid #2a2f3a;
}
.btn-arrow span { transition: transform .2s; }
.btn-arrow:hover span { transform: translateX(6px); }
.btn-arrow:hover { border-color: #6c5ce7; }
</style>`
  },
  {
    id: "card-profile", name: "Card Profil", cat: "carduri",
    desc: "Card de profil cu avatar, nume și buton.",
    code:
`<div class="profile">
  <div class="avatar">N</div>
  <h3>Nami Pop</h3>
  <p>Designer UI/UX</p>
  <button>Urmărește</button>
</div>

<style>
.profile {
  width: 220px; text-align: center;
  background: #181b22; border: 1px solid #2a2f3a;
  border-radius: 16px; padding: 24px; font-family: system-ui; color: #e7e9ee;
}
.avatar {
  width: 64px; height: 64px; margin: 0 auto 12px;
  border-radius: 50%; display: grid; place-items: center;
  font: 800 26px system-ui; color: #fff;
  background: linear-gradient(135deg, #6c5ce7, #00d1b2);
}
.profile h3 { margin: 0; }
.profile p { margin: 4px 0 16px; color: #9aa1ad; font-size: 14px; }
.profile button {
  padding: 8px 20px; border: none; border-radius: 10px; cursor: pointer;
  background: #6c5ce7; color: #fff; font: 600 14px system-ui;
}
</style>`
  },
  {
    id: "card-pricing", name: "Card de Preț", cat: "carduri",
    desc: "Card de abonament cu listă de beneficii.",
    code:
`<div class="price-card">
  <span class="tag">PRO</span>
  <div class="amount">49<small>lei/lună</small></div>
  <ul>
    <li>✓ Proiecte nelimitate</li>
    <li>✓ Suport prioritar</li>
    <li>✓ Export fără watermark</li>
  </ul>
  <button>Alege planul</button>
</div>

<style>
.price-card {
  width: 230px; background: #181b22; color: #e7e9ee;
  border: 1px solid #2a2f3a; border-radius: 16px; padding: 24px; font-family: system-ui;
}
.price-card .tag { color: #00d1b2; font: 700 12px system-ui; letter-spacing: 1px; }
.amount { font: 800 38px system-ui; margin: 8px 0 16px; }
.amount small { font: 400 13px system-ui; color: #9aa1ad; }
.price-card ul { list-style: none; padding: 0; margin: 0 0 18px; display: grid; gap: 8px; font-size: 14px; }
.price-card button { width: 100%; padding: 10px; border: none; border-radius: 10px; cursor: pointer;
  background: linear-gradient(135deg, #6c5ce7, #8e7bff); color: #fff; font: 600 14px system-ui; }
</style>`
  },
  {
    id: "card-glass", name: "Card Glassmorphism", cat: "carduri",
    desc: "Efect de sticlă mată cu blur.",
    code:
`<div class="glass">
  <h3>Glassmorphism</h3>
  <p>Fundal blurat, transparență și contur fin.</p>
</div>

<style>
.glass {
  width: 240px; padding: 24px; font-family: system-ui; color: #fff;
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 18px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 30px rgba(0,0,0,.3);
}
.glass h3 { margin: 0 0 6px; }
.glass p { margin: 0; font-size: 14px; opacity: .85; }
</style>`
  },
  {
    id: "menu-navbar", name: "Bară de Navigare", cat: "meniuri",
    desc: "Navbar orizontal cu link activ.",
    code:
`<nav class="nb">
  <span class="brand">Logo</span>
  <a class="active">Acasă</a>
  <a>Produse</a>
  <a>Despre</a>
  <a>Contact</a>
</nav>

<style>
.nb {
  display: flex; align-items: center; gap: 6px;
  background: #181b22; border: 1px solid #2a2f3a;
  border-radius: 12px; padding: 8px 12px; font-family: system-ui;
}
.nb .brand { font-weight: 800; color: #00d1b2; margin-right: 12px; }
.nb a { color: #9aa1ad; padding: 8px 14px; border-radius: 8px; font-size: 14px; cursor: pointer; transition: .2s; }
.nb a:hover { color: #fff; background: #20242e; }
.nb a.active { color: #fff; background: #6c5ce7; }
</style>`
  },
  {
    id: "menu-tabs", name: "Tab-uri", cat: "meniuri",
    desc: "Comutator de tab-uri doar din CSS (radio).",
    code:
`<div class="tabs">
  <label><input type="radio" name="t" checked> Tab 1</label>
  <label><input type="radio" name="t"> Tab 2</label>
  <label><input type="radio" name="t"> Tab 3</label>
</div>

<style>
.tabs { display: inline-flex; background: #20242e; padding: 4px; border-radius: 12px; font-family: system-ui; }
.tabs label { padding: 8px 18px; border-radius: 8px; color: #9aa1ad; font-size: 14px; cursor: pointer; transition: .2s; }
.tabs input { display: none; }
.tabs label:has(input:checked) { background: #6c5ce7; color: #fff; }
</style>`
  },
  {
    id: "menu-breadcrumb", name: "Breadcrumb", cat: "meniuri",
    desc: "Fir de navigare cu separatori.",
    code:
`<nav class="crumb">
  <a>Acasă</a><span>/</span>
  <a>Categorie</a><span>/</span>
  <a class="cur">Produs</a>
</nav>

<style>
.crumb { display: flex; align-items: center; gap: 8px; font: 14px system-ui; color: #9aa1ad; }
.crumb a { color: #9aa1ad; text-decoration: none; cursor: pointer; }
.crumb a:hover { color: #00d1b2; }
.crumb .cur { color: #fff; font-weight: 600; }
.crumb span { opacity: .5; }
</style>`
  },
  {
    id: "form-toggle", name: "Toggle Switch", cat: "formulare",
    desc: "Comutator on/off animat.",
    code:
`<label class="switch">
  <input type="checkbox" checked>
  <span class="slider"></span>
</label>

<style>
.switch { position: relative; display: inline-block; width: 54px; height: 30px; }
.switch input { display: none; }
.slider {
  position: absolute; inset: 0; cursor: pointer;
  background: #2a2f3a; border-radius: 30px; transition: .3s;
}
.slider::before {
  content: ""; position: absolute; height: 22px; width: 22px; left: 4px; top: 4px;
  background: #fff; border-radius: 50%; transition: .3s;
}
.switch input:checked + .slider { background: #00d1b2; }
.switch input:checked + .slider::before { transform: translateX(24px); }
</style>`
  },
  {
    id: "form-float", name: "Input Label Flotant", cat: "formulare",
    desc: "Eticheta urcă atunci când scrii.",
    code:
`<div class="field">
  <input id="e" type="text" placeholder=" ">
  <label for="e">Adresă email</label>
</div>

<style>
.field { position: relative; font-family: system-ui; }
.field input {
  width: 240px; padding: 16px 12px 8px;
  background: #181b22; border: 1px solid #2a2f3a; border-radius: 10px;
  color: #fff; font-size: 15px; outline: none;
}
.field input:focus { border-color: #6c5ce7; }
.field label {
  position: absolute; left: 12px; top: 14px; color: #9aa1ad;
  font-size: 15px; pointer-events: none; transition: .15s;
}
.field input:focus + label,
.field input:not(:placeholder-shown) + label {
  top: 5px; font-size: 11px; color: #00d1b2;
}
</style>`
  },
  {
    id: "form-search", name: "Bară de Căutare", cat: "formulare",
    desc: "Input de căutare cu iconiță și buton.",
    code:
`<div class="search">
  <span>🔍</span>
  <input type="text" placeholder="Caută...">
  <button>Caută</button>
</div>

<style>
.search {
  display: flex; align-items: center; gap: 8px;
  background: #181b22; border: 1px solid #2a2f3a; border-radius: 12px;
  padding: 6px 6px 6px 14px; font-family: system-ui;
}
.search input { flex: 1; border: none; background: transparent; color: #fff; outline: none; font-size: 14px; width: 150px; }
.search button { border: none; border-radius: 8px; padding: 8px 16px; cursor: pointer;
  background: #6c5ce7; color: #fff; font: 600 14px system-ui; }
</style>`
  },
  {
    id: "misc-badges", name: "Badge-uri", cat: "altele",
    desc: "Etichete colorate de stare.",
    code:
`<div class="badges">
  <span class="b green">Activ</span>
  <span class="b orange">În așteptare</span>
  <span class="b red">Eroare</span>
  <span class="b purple">Nou</span>
</div>

<style>
.badges { display: flex; gap: 8px; flex-wrap: wrap; font-family: system-ui; }
.b { padding: 5px 12px; border-radius: 999px; font: 700 12px system-ui; }
.b.green  { background: rgba(0,209,178,.15);  color: #00d1b2; }
.b.orange { background: rgba(255,165,0,.15);  color: #ffa500; }
.b.red    { background: rgba(255,107,107,.15);color: #ff6b6b; }
.b.purple { background: rgba(108,92,231,.18); color: #8e7bff; }
</style>`
  },
  {
    id: "misc-progress", name: "Bară de Progres", cat: "altele",
    desc: "Indicator de progres cu gradient.",
    code:
`<div class="bar"><div class="fill"></div></div>

<style>
.bar { width: 240px; height: 12px; background: #20242e; border-radius: 999px; overflow: hidden; }
.fill {
  width: 68%; height: 100%; border-radius: 999px;
  background: linear-gradient(90deg, #6c5ce7, #00d1b2);
  animation: grow 1.4s ease forwards;
}
@keyframes grow { from { width: 0; } }
</style>`
  },
  {
    id: "misc-spinner", name: "Loader Spinner", cat: "altele",
    desc: "Indicator de încărcare rotativ.",
    code:
`<div class="spinner"></div>

<style>
.spinner {
  width: 44px; height: 44px; border-radius: 50%;
  border: 4px solid #2a2f3a; border-top-color: #00d1b2;
  animation: spin .8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>`
  },
];

const FEATURED_IDS = ["btn-gradient", "card-pricing", "form-toggle"];

// ---------- State ----------
let collection = JSON.parse(localStorage.getItem("namiui_collection") || "[]");
let activeFilter = "all";

// ---------- Helpers ----------
const $ = (sel) => document.querySelector(sel);
const byId = (id) => COMPONENTS.find((c) => c.id === id);
const saveCollection = () => localStorage.setItem("namiui_collection", JSON.stringify(collection));
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Împachetează fragmentul într-un document izolat pentru previzualizare.
function wrapPreview(code) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    html,body{margin:0;height:100%;display:grid;place-items:center;background:transparent;
      font-family:system-ui,"Segoe UI",sans-serif;padding:16px;overflow:hidden;}
  </style></head><body>${code}</body></html>`;
}

// ---------- Render carduri ----------
function cardHTML(c) {
  const inCol = collection.includes(c.id);
  return `
    <article class="card">
      <iframe class="card-preview" data-preview="${c.id}" title="Previzualizare ${c.name}" scrolling="no"></iframe>
      <div class="card-body">
        <span class="card-cat">${c.cat}</span>
        <h3 class="card-title">${c.name}</h3>
        <p class="card-desc">${c.desc}</p>
        <div class="card-foot">
          <button class="btn btn-outline btn-sm" data-view="${c.id}">&lt;/&gt; Vezi cod</button>
          <button class="btn btn-primary btn-sm" data-add="${c.id}">${inCol ? "✓ În colecție" : "+ Colecție"}</button>
        </div>
      </div>
    </article>`;
}

function hydratePreviews(scope) {
  scope.querySelectorAll("iframe[data-preview]").forEach((frame) => {
    const c = byId(frame.dataset.preview);
    if (c) frame.srcdoc = wrapPreview(c.code);
  });
}

function renderProducts() {
  const grid = $("#productGrid");
  const list = activeFilter === "all" ? COMPONENTS : COMPONENTS.filter((c) => c.cat === activeFilter);
  grid.innerHTML = list.map(cardHTML).join("");
  hydratePreviews(grid);
}

function renderFeatured() {
  const grid = $("#featuredGrid");
  grid.innerHTML = FEATURED_IDS.map((id) => cardHTML(byId(id))).join("");
  hydratePreviews(grid);
}

// ---------- Colecție ----------
function toggleCollection(id) {
  const i = collection.indexOf(id);
  if (i === -1) { collection.push(id); showToast(`„${byId(id).name}” adăugat în colecție`); }
  else { collection.splice(i, 1); showToast(`„${byId(id).name}” scos din colecție`); }
  saveCollection();
  renderProducts();
  renderFeatured();
  renderCollection();
}

function renderCollection() {
  $("#cartCount").textContent = collection.length;
  $("#cartTotal").textContent = collection.length;

  const box = $("#cartItems");
  if (collection.length === 0) {
    box.innerHTML = `<p class="cart-empty">Colecția e goală 📦<br>Adaugă componente ca să le exporți împreună.</p>`;
    return;
  }
  box.innerHTML = collection.map((id) => {
    const c = byId(id);
    return `
      <div class="cart-item">
        <div class="cart-item-info">
          <h5>${c.name}</h5>
          <span>${c.cat}</span>
        </div>
        <button data-remove="${id}" aria-label="Scoate">✕</button>
      </div>`;
  }).join("");
}

// Construiește un fișier HTML complet din componentele alese.
function buildExport() {
  const blocks = collection.map((id) => {
    const c = byId(id);
    return `  <!-- ${c.name} (${c.cat}) -->\n  <section>\n${c.code.split("\n").map((l) => "    " + l).join("\n")}\n  </section>`;
  }).join("\n\n");
  return `<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Componentele mele Nami UI</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f1115; color: #e7e9ee;
      display: flex; flex-wrap: wrap; gap: 32px; padding: 40px; align-items: flex-start; }
    section { background: #15181f; border: 1px solid #2a2f3a; border-radius: 16px; padding: 28px; }
  </style>
</head>
<body>
${blocks}
</body>
</html>`;
}

// ---------- Clipboard ----------
async function copyText(text, msg) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(msg || "Cod copiat în clipboard ✓");
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text; document.body.appendChild(ta); ta.select();
    document.execCommand("copy"); ta.remove();
    showToast(msg || "Cod copiat ✓");
  }
}

// ---------- Modal cod ----------
function openModal(id) {
  const c = byId(id);
  $("#modalTitle").textContent = c.name;
  $("#modalCode").textContent = c.code;
  $("#codeOverlay").classList.add("open");
  $("#modalCopy").dataset.copy = id;
}
function closeModal() { $("#codeOverlay").classList.remove("open"); }

// ---------- Drawer ----------
function openCart() { $("#cartDrawer").classList.add("open"); $("#overlay").classList.add("open"); }
function closeCart() { $("#cartDrawer").classList.remove("open"); $("#overlay").classList.remove("open"); }

// ---------- Toast ----------
let toastTimer;
function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

// ---------- Event delegation ----------
document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) return toggleCollection(add.dataset.add);

  const view = e.target.closest("[data-view]");
  if (view) return openModal(view.dataset.view);

  const remove = e.target.closest("[data-remove]");
  if (remove) return toggleCollection(remove.dataset.remove);

  const chip = e.target.closest(".chip");
  if (chip) {
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    activeFilter = chip.dataset.filter;
    renderProducts();
  }
});

$("#cartBtn").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#overlay").addEventListener("click", closeCart);
$("#closeModal").addEventListener("click", closeModal);
$("#codeOverlay").addEventListener("click", (e) => { if (e.target === $("#codeOverlay")) closeModal(); });
$("#modalCopy").addEventListener("click", (e) => copyText(byId(e.target.dataset.copy).code));

$("#copyAllBtn").addEventListener("click", () => {
  if (collection.length === 0) return showToast("Colecția e goală");
  copyText(buildExport(), `Cod pentru ${collection.length} componente copiat ✓`);
});

$("#downloadBtn").addEventListener("click", () => {
  if (collection.length === 0) return showToast("Colecția e goală");
  const blob = new Blob([buildExport()], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "nami-ui-componente.html";
  a.click();
  URL.revokeObjectURL(a.href);
  showToast("Fișier descărcat ✓");
});

// Hamburger menu
$("#hamburger").addEventListener("click", () => $("#navMenu").classList.toggle("open"));
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    $("#navMenu").classList.remove("open");
  });
});

// ---------- Init ----------
$("#statCount").textContent = COMPONENTS.length;
renderProducts();
renderFeatured();
renderCollection();
