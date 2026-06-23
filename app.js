// ---------- Date produse ----------
const PRODUCTS = [
  { id: 1, name: "Căști Wireless Pro", cat: "electronice", price: 349, old: 449, icon: "🎧", desc: "Sunet premium, anulare zgomot, 30h autonomie." },
  { id: 2, name: "Smartwatch Active", cat: "electronice", price: 599, old: null, icon: "⌚", desc: "Monitorizare somn, GPS și ecran AMOLED." },
  { id: 3, name: "Boxă Bluetooth", cat: "electronice", price: 229, old: 279, icon: "🔊", desc: "Bas profund, rezistentă la apă IPX7." },
  { id: 4, name: "Rucsac Urban", cat: "accesorii", price: 189, old: null, icon: "🎒", desc: "Compartiment laptop, design minimalist." },
  { id: 5, name: "Ochelari de Soare", cat: "accesorii", price: 129, old: 159, icon: "🕶️", desc: "Protecție UV400, ramă ușoară." },
  { id: 6, name: "Ceas Clasic", cat: "accesorii", price: 279, old: null, icon: "⏱️", desc: "Curea din piele, mecanism de precizie." },
  { id: 7, name: "Lampă LED Smart", cat: "casa", price: 99, old: 139, icon: "💡", desc: "16M culori, control din aplicație." },
  { id: 8, name: "Cană Termică", cat: "casa", price: 59, old: null, icon: "☕", desc: "Păstrează temperatura 12 ore." },
  { id: 9, name: "Difuzor Aromaterapie", cat: "casa", price: 119, old: 149, icon: "🪔", desc: "Umidificator cu lumină ambientală." },
];

const FEATURED_IDS = [1, 2, 7];

// ---------- State ----------
let cart = JSON.parse(localStorage.getItem("namishop_cart") || "[]");
let activeFilter = "all";

// ---------- Helpers ----------
const $ = (sel) => document.querySelector(sel);
const fmt = (n) => n.toLocaleString("ro-RO", { minimumFractionDigits: 2 }) + " lei";
const saveCart = () => localStorage.setItem("namishop_cart", JSON.stringify(cart));

// ---------- Render carduri ----------
function cardHTML(p) {
  return `
    <article class="card">
      <div class="card-media">${p.icon}</div>
      <div class="card-body">
        <span class="card-cat">${p.cat}</span>
        <h3 class="card-title">${p.name}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-foot">
          <span class="card-price">${p.price} lei ${p.old ? `<small><s>${p.old}</s></small>` : ""}</span>
          <button class="btn btn-primary" data-add="${p.id}">+ Adaugă</button>
        </div>
      </div>
    </article>`;
}

function renderProducts() {
  const grid = $("#productGrid");
  const list = activeFilter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === activeFilter);
  grid.innerHTML = list.map(cardHTML).join("");
}

function renderFeatured() {
  $("#featuredGrid").innerHTML = FEATURED_IDS.map((id) => cardHTML(PRODUCTS.find((p) => p.id === id))).join("");
}

// ---------- Coș ----------
function addToCart(id) {
  const item = cart.find((i) => i.id === id);
  if (item) item.qty++;
  else cart.push({ id, qty: 1 });
  saveCart();
  renderCart();
  const p = PRODUCTS.find((x) => x.id === id);
  showToast(`„${p.name}” adăugat în coș`);
}

function changeQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((i) => i.id !== id);
  saveCart();
  renderCart();
}

function cartTotal() {
  return cart.reduce((sum, i) => sum + PRODUCTS.find((p) => p.id === i.id).price * i.qty, 0);
}

function renderCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  $("#cartCount").textContent = count;
  $("#cartTotal").textContent = fmt(cartTotal());

  const box = $("#cartItems");
  if (cart.length === 0) {
    box.innerHTML = `<p class="cart-empty">Coșul este gol 🛒<br>Adaugă produse pentru a continua.</p>`;
    return;
  }
  box.innerHTML = cart.map((i) => {
    const p = PRODUCTS.find((x) => x.id === i.id);
    return `
      <div class="cart-item">
        <div class="cart-item-icon">${p.icon}</div>
        <div class="cart-item-info">
          <h5>${p.name}</h5>
          <span>${fmt(p.price)}</span>
        </div>
        <div class="qty">
          <button data-dec="${p.id}">−</button>
          <span>${i.qty}</span>
          <button data-inc="${p.id}">+</button>
        </div>
      </div>`;
  }).join("");
}

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
  if (add) return addToCart(+add.dataset.add);

  const inc = e.target.closest("[data-inc]");
  if (inc) return changeQty(+inc.dataset.inc, 1);

  const dec = e.target.closest("[data-dec]");
  if (dec) return changeQty(+dec.dataset.dec, -1);

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

$("#checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) return showToast("Coșul este gol");
  showToast(`Comandă plasată! Total: ${fmt(cartTotal())} 🎉`);
  cart = [];
  saveCart();
  renderCart();
  closeCart();
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
renderProducts();
renderFeatured();
renderCart();
