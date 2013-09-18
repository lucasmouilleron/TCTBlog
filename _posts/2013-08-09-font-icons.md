---
layout: post
title: Polices de pictogrammes
tags: [responsive, fonts]
picture: font-icons.jpg
---
{% include JB/setup %}

**Si la gestion des pictogrammes d'un site web était déjà une problématique** (transparence sur vieux navigateurs, optimisation du nombre de requêtes via sprite sheets css, plusieurs versions par taille, etc.), les écrans à haute densité à la Rétina d'Apple confirment **la nécessité d'une solution cross-browser, cross-scale, et optimisée pour le réseau.**

##Polices de pictogrammes
L'idée est de générer une police de pictogrammes (a = mail, b = ampoule, c = lion, etc.) pour bénéficier des avantges d'une police : 

- Insensible à la taille
- Insensible aux densités
- Transparence et ombre cross-browser
- Un seul fichier pour tous les charactères
- Manipulation CSS : opacité, rotation, etc.

##Implémentation
- HTML : `<h3><span aria-hidden="true" data-icon="&#x21dd;"></span> Stats</h3>`
- CSS : `[data-icon]:before {  font-family: icons;  content: attr(data-icon);  speak: none;}`
- Génération de la police : à partir d'un logiciel de typographie, ou depuis des services en lignes gratuits ou payants

##Limites
- Encore quelques hacks à mettre en place pour l'accessiblité et la lecture à voix haute
- Nécessite un workflow fluide et industrielle entre la création et la production

##Ressources :
- [Article CSS Tricks](http://css-tricks.com/examples/IconFont)
- [FontAwesome](http://fontawesome.io)
- [Fontello.com, génération de pictogrammes](http://fontello.com)