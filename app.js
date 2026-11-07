const ORDER_URL = 'https://restaurant.lcdigitale.fr/istanbul-aucamville?src=link';

// Catalogue vitrine uniquement : les prix et disponibilités sont gérés sur la plateforme.
const CATALOG = {
  burgers: [
    ['Double Cheese', 'Deux steaks, cornichon, oignon caramélisé, deux cheddars, ketchup et mayonnaise. Frites et boisson incluses.'],
    ['Big Géant', 'Deux steaks, salade, oignon caramélisé, deux cheddars et sauce Biggy. Frites et boisson incluses.'],
    ['Big Chicken', 'Tenders, salade, oignon caramélisé, cornichon, deux cheddars, sauce algérienne et Biggy. Frites et boisson incluses.'],
    ['Big Burger', 'Deux steaks, salade, oignon, tomate, deux cheddars, sauce algérienne et sauce Biggy. Frites et boisson incluses.'],
    ['Country', 'Deux steaks, rousty, oignon caramélisé, oignon frit, cheddar, Biggy et mayonnaise. Frites et boisson incluses.'],
    ['Smash Crispy', 'Deux tenders, oignon caramélisé, cheddar, oignon crispy et sauce Biggy. Frites et boisson incluses.'],
    ['Smash Mountain', 'Deux steaks, oignon caramélisé, raclette, oignon frit et sauce Biggy. Frites et boisson incluses.'],
    ['Américain', 'Deux steaks, bacon, œuf, oignon frit, cornichon, cheddars et sauce Biggy. Frites et boisson incluses.'],
    ['Golden', 'Deux tenders, bacon, œuf, salade coleslaw et cheddar. Frites et boisson incluses.']
  ],
  tacos: [
    ['Tacos au choix', 'Une viande et une sauce au choix.'],
    ['Tacos Simple — 2 viandes', 'Deux viandes et une sauce au choix.'],
    ['Tacos Simple — 3 viandes', 'Trois viandes et une sauce au choix.'],
    ['Tacos XL — 1 viande', 'Une viande et une sauce au choix.'],
    ['Tacos XL — 2 viandes', 'Deux viandes et une sauce au choix.'],
    ['Tacos XL — 3 viandes', 'Trois viandes et une sauce au choix.'],
    ['Tacos XXL — 1 viande', 'Une viande et une sauce au choix.'],
    ['Tacos XXL — 2 viandes', 'Deux viandes et une sauce au choix.'],
    ['Tacos XXL — 3 viandes', 'Trois viandes et une sauce au choix.']
  ],
  sandwichs: [
    ['Kebab Maison — Seul', 'Pain au choix : naan, pain rond ou galette.'],
    ['Kebab Maison — Menu', 'Pain au choix : naan, pain rond ou galette.'],
    ['Steak Haché — Seul', 'Pain au choix : naan, pain rond ou galette.'],
    ['Steak Haché — Menu', 'Pain au choix : naan, pain rond ou galette.'],
    ['Poulet — Seul', 'Poulet nature, Red ou Curry. Pain au choix : naan, pain rond ou galette.'],
    ['Poulet — Menu', 'Poulet nature, Red ou Curry. Pain au choix : naan, pain rond ou galette.'],
    ['Merguez — Seul', 'Pain au choix : naan, pain rond ou galette.'],
    ['Merguez — Menu', 'Pain au choix : naan, pain rond ou galette.'],
    ['Falafel Végé — Seul', 'Pain au choix : naan, pain rond ou galette.'],
    ['Falafel Végé — Menu', 'Pain au choix : naan, pain rond ou galette.'],
    ['Tenders / Nuggets — Seul', 'Pain au choix : naan, pain rond ou galette.'],
    ['Tenders / Nuggets — Menu', 'Pain au choix : naan, pain rond ou galette.'],
    ['Cordon Bleu — Seul', 'Pain au choix : naan, pain rond ou galette.'],
    ['Cordon Bleu — Menu', 'Pain au choix : naan, pain rond ou galette.']
  ],
  naan: [
    ['Naan Classic', 'Kebab, salade, tomate, oignon rouge, Vache qui rit, sauce algérienne et sauce blanche.'],
    ['Naan Bollywood', 'Chicken curry, salade, tomate, oignon rouge, cheddar et sauce fromagère.'],
    ['Naan Chicken Red', 'Chicken Red, salade, tomate, oignon rouge, cheddar, sauce algérienne et sauce fromagère maison.'],
    ['Naan Katsu', 'Deux tenders, salade, tomate, oignon rouge, cheddar, oignons frits et sauce Biggy.'],
    ['Crusty', 'Émincé de poulet, salade, oignon, raclette, rousty et sauce fromagère maison.'],
    ['British', 'Viande hachée, salade, tomate, oignon rouge, cheddar, rousty, œuf, sauce algérienne et Biggy.'],
    ['Royal Istanbul', 'Viande hachée, tenders, salade, tomate, oignon rouge, cheddar et sauce Biggy.'],
    ['Naan Testy', 'Viande hachée, cordon bleu, salade, tomate, oignon rouge, bacon, œuf, cheddar et sauce algérienne.']
  ],
  paninis: [
    ['Panini Seul', 'Au choix : kebab, poulet ou steak haché.'],
    ['Panini en Menu', 'Au choix : kebab, poulet ou steak haché.']
  ],
  assiettes: [
    ['Assiette Simple — Seule', 'Une viande au choix, servie avec naan fromage.'],
    ['Assiette Mixte — Seule', 'Deux viandes au choix, servies avec naan fromage.'],
    ['Assiette Simple — Menu', 'Une viande au choix, servie avec naan fromage.'],
    ['Assiette Mixte — Menu', 'Deux viandes au choix, servies avec naan fromage.']
  ],
  poulet: [
    ['6 Wings ou 6 Tenders', 'Choisis 6 wings ou 6 tenders.'],
    ['12 Wings ou 12 Tenders', 'Choisis 12 wings ou 12 tenders.'],
    ['Famille Chicken', '15 wings et 15 tenders.']
  ],
  snacks: [
    ['Frites Cheddar Lardons', 'Frites, cheddar et lardons.'],
    ['Frites Cheddar Nuggets', 'Frites, cheddar et nuggets.'],
    ['Finger Food', '4 pièces au choix : mozza, nuggets, camembert ou jalapeños.'],
    ['Combo Box', 'Assortiment de 16 pièces.']
  ],
  desserts: [
    ['Tiramisu Maison', 'Dessert fait maison.'],
    ['Tarte aux Daims', 'Tarte gourmande aux Daims.'],
    ['Panini Nutella', 'Panini sucré au Nutella.']
  ],
  boissons: [
    ...['Coca Cherry','Coca-Cola','Coca Zéro','Sprite','Fanta Dragon','Fanta Citron','Fanta Orange','Perrier','Lipton','Oasis Tropical','Oasis Pomme Cassis','Cristaline','Orangina','Tropico','Hawaï','Pepsi','7Up Mojito','7Up Citron','7Up Cherry','7Up Cocktail','Ice Tea','Fuze Tea','Schweppes','Dada Fraise','Dada Melon','Dada Litchi','Dada Mangue','Capri-Sun'].map(name => [name, 'Boisson fraîche.']),
    ['Coca-Cola 1,5 L', 'Format familial.'],
    ['Lipton 1,5 L', 'Format familial.']
  ]
};

const CATEGORY_LABELS = {
  burgers: 'Frites & boisson incluses',
  tacos: 'À personnaliser',
  sandwichs: 'Pain au choix',
  naan: 'Pâte fraîche',
  paninis: 'Préparé à la commande',
  assiettes: 'Servi avec naan fromage',
  poulet: 'Croustillant',
  snacks: 'À partager',
  desserts: 'Douceur',
  boissons: 'Boisson fraîche'
};

function createProductCard(name, description, category) {
  const card = document.createElement('article');
  card.className = 'product-card';
  card.dataset.search = `${name} ${description}`.toLocaleLowerCase('fr');

  const top = document.createElement('div');
  top.className = 'product-top';
  const title = document.createElement('h4');
  title.textContent = name;
  top.appendChild(title);

  const desc = document.createElement('p');
  desc.className = 'product-desc';
  desc.textContent = description;

  const foot = document.createElement('div');
  foot.className = 'product-foot';
  const tag = document.createElement('span');
  tag.className = 'product-tag';
  tag.textContent = CATEGORY_LABELS[category] || 'Istanbul';

  const orderLink = document.createElement('a');
  orderLink.className = 'add-btn';
  orderLink.href = ORDER_URL;
  orderLink.textContent = 'Commander ↗';
  orderLink.setAttribute('aria-label', `Commander ${name} sur la plateforme Istanbul`);

  foot.append(tag, orderLink);
  card.append(top, desc, foot);
  return card;
}

function renderMenu() {
  Object.entries(CATALOG).forEach(([category, products]) => {
    const mount = document.getElementById(`grid-${category}`);
    if (!mount) return;
    products.forEach(([name, description]) => {
      mount.appendChild(createProductCard(name, description, category));
    });
  });
}

function initMenuSearch() {
  const input = document.getElementById('menuSearch');
  const noResults = document.getElementById('noResults');
  if (!input) return;

  input.addEventListener('input', () => {
    const query = input.value.trim().toLocaleLowerCase('fr');
    let visibleCards = 0;

    document.querySelectorAll('.menu-category').forEach(section => {
      let visibleInCategory = 0;
      section.querySelectorAll('.product-card').forEach(card => {
        const visible = !query || card.dataset.search.includes(query);
        card.hidden = !visible;
        if (visible) visibleInCategory++;
      });
      section.hidden = visibleInCategory === 0;
      visibleCards += visibleInCategory;
    });

    if (noResults) noResults.hidden = visibleCards > 0;
  });

  input.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      input.value = '';
      input.dispatchEvent(new Event('input'));
      input.blur();
    }
  });

  document.addEventListener('keydown', event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      input.focus();
    }
  });
}

function init() {
  renderMenu();
  initMenuSearch();
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', init);
