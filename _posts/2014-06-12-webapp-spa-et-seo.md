---
layout: post
title: JS et SEO
categories: [reflexion]
tags: [web app, spa, js, seo]
picture: webapp-spa-seo.jpg
---
{% include JB/setup %}

Sans prise de dispositions, un site ou we web app JS est plus moins bien indexé par les moteurs de recherche.
En fonction du contexte applicatif, des solutions existent optimiser le SEO. Résumé.

##Frameworks MVC et snapshots HTML
- Mécanique : 
    - Une web app JS (basée sur un framework MVC) est une application JS qui génère le HTML dans le navigateur
    - Du point de vue de Google, qui n'execute pas le JS, les pages téléchargées sont vides (à l'exception du bootsrap du framework MVC)
    - Le principe est de pré-rendre les différentes pages du site par un navigateur headless sur le serveur et de stocker sur le disque ces "snapshots" HTML
    - Quand Google demande une page, le serveur lui donnera un snapshot déjà rendu plutôt que la web app
- Avantages : 
    - Aucun rendu côté serveur
    - Compatible hashbangd et pushState
- Inconvénients : 
    - Mécanique de snapshots à mettre en place (simplifiée utilisation de prerender.io)
- Resources :
    - [Méanique de génération de snapshots + angular JS](https://prerender.io/js-seo/angularjs-seo-get-your-site-indexed-and-to-the-top-of-the-search-results) : article concis
    - [Méanique de génération de snapshots + angular JS](http://www.yearofmoo.com/2012/11/angularjs-and-seo.html) : article plus détaillé
    - [prerender.io](https://prerender.io) ou [brombone.com](http://www.brombone.com) : solutions de rendering, caching et hostings de snapshots HTML
    - [Doc Google](https://developers.google.com/webmasters/ajax-crawling/docs/specification)

##Progressive enhancement
- Mécanique : 
    - En progressive enhancement, le serveur sait générer le HTML de chaque page
    - Le JS prend ensuite le relai côté navigateur pour améliorier ou ajaxifier le site
    - Techiquement, par exemple les liens peuvent être hijackés pour ne pas demander les pages complètes au serveur, mais des portions
- Avantages : 
    - SEO natif
    - La web app (ou plutôt le site) fonctionne nativement en mode dégradé sur des navigateurs sans JS (e-readers, vieux IEs)
- Inconvénients : 
    - Le serveur doit savoir rendre toutes les pages
    - Si framework MVC, il doit savoir prendre le relais sur du contenu déjà rendu
- Resources : 
    - [Pushstate et progressive enhancement](http://lostechies.com/derickbailey/2011/09/26/seo-and-accessibility-with-html5-pushstate-part-1-introducing-pushstate) : bon article qui justifie l'implémentation du progressive enhancement au cours d'une webapp ou spa
    - [progressive enhancement et backbone](http://lostechies.com/derickbailey/2011/09/26/seo-and-accessibility-with-html5-pushstate-part-2-progressive-enhancement-with-backbone-js/) : exemple de progressive enhancement avec un framework MVC JS
    - [https://github.com/defunkt/jquery-pjax](https://github.com/defunkt/jquery-pjax) : implémentation de progresssive enhancement simplifié

##Conclusions
> Dans le cas d'une *web app très fonctionnelle*, les frameworks MVC comme backbone ou angular sont le meilleur ami du développeur. Si des besoins de SEO sont présents, *le snapshoting est la bonne solution*.
 
> Dans le cas d'un *site web orienté contenus*, *le progressive enhancement n'est finalement qu'une théorisation des pratiques classiques*. 
Le progressive enhancement couplé à des frameworks MVC parait quant à lui assez lourd.