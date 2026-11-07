# Istanbul Aucamville — Site vitrine

Site vitrine responsive pour Istanbul Aucamville, réalisé à partir du logo et des cartes fournis.

## Lancer le site

Aucune compilation n'est nécessaire. Ouvrir `index.html` dans un navigateur ou lancer un serveur local (par exemple Live Server dans VS Code).

## Fonctionnalités

- Page d'accueil responsive avec identité visuelle Istanbul.
- Présentation des produits et catégories : burgers, tacos, sandwichs, naans, paninis, assiettes, poulet, snacks, desserts et boissons.
- Recherche dans la carte.
- Tous les liens de commande (en-tête, hero, produits, sélection à la une, tacos et pied de page) renvoient vers la plateforme LC Digitale :
  `https://restaurant.lcdigitale.fr/istanbul-aucamville?src=link`
- Aucun prix, frais de livraison ou promotion n'est affiché ou calculé sur le front.
- Les tarifs, options et disponibilités doivent être consultés sur la plateforme de commande, qui fait foi.
- Coordonnées du restaurant et lien d'itinéraire.

## Architecture de commande

Le site est une vitrine reliée à la plateforme de commande LC Digitale par des liens directs. Le widget flottant `embed.js` et l'ancien panier de démonstration ont été retirés afin d'éviter les doublons et les informations tarifaires non synchronisées.

Le catalogue de `app.js` reprend les plats et variantes affichés sur [la carte LC Digitale](https://restaurant.lcdigitale.fr/istanbul-aucamville). Les prix, frais de livraison, promotions et disponibilités ne sont volontairement pas affichés ici : la plateforme de commande fait foi et peut être mise à jour indépendamment du site vitrine.

Pour modifier le lien de commande, remplacer la constante `ORDER_URL` dans `app.js` ainsi que les liens directs correspondants dans `index.html`.

Les informations allergènes doivent être confirmées directement auprès du restaurant.

## Identité du navigateur

Le favicon et l’icône iOS utilisent le logo Istanbul fourni (`assets/favicon.ico`, variantes PNG et `assets/apple-touch-icon.png`).
