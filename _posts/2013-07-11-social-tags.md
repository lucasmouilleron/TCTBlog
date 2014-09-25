---
layout: post
title: Meta données sociales
categories: [code]
tags: [social]
picture: social-tags.jpg
---

L'apparence des contenus partageables et partagés sur les réseaux sociaux peut être contrôlée par leurs auteurs.

Des méta données peuvent être associées aux contenus et interprétée par les réseaux sociaux. Ce sont les _social tags_ ou _méta données sociales_

**La plus-value de ces tags est inestimable puisqu'ils permettent aux contenus partagés d'être représentés à la manière de leur auteur ou de leur marque.**

##Formats

###OpenGraph pour Facebook, Google + et Pinterest
- Balises `<meta property="og:description" content="la description de mon contenu"/>`, `<meta property="og:image" content=”http://url-vers-une-image.com/image.png”/>`, etc
- Standardisé et commun à Facebook, Google + et Pinterest
- Un seul contenu possible par page

###Twitter cards
- Balises `<meta name="twitter:card" content="summary">`, `<meta name="twitter:site" content="http://url-vers-site.com">`, etc
- Types principaux : résumé / summary, photo, produit

###Pinterest rich pins
- cf article [Rich Pins ou comment vraiment convertir Pinterest en supermarché]({% post_url 2013-06-17-rich-pins %})
- Similaire au Twitter Cards
- Implémentable avec OpenGraph tags ou via oEmbed

##Ressources :
- [Documentation OpenGraph](http://ogp.me)
- [Documentation Twitter Cards](https://dev.twitter.com/docs/cards)
- [Documentation Pinterest Rich Pins](http://business.pinterest.com/rich-pins/)