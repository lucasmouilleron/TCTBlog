---
layout: post
title: Expériences multi screen web
categories: [reflexion]
tags: [websocket, multi screen, device]
picture: multi-screen.jpg
---
{% include JB/setup %}

Une application intéressante pour le web des technologies temps réel bidirectionnelles est l'expérience multi screen : contrôler un site ou une webapp avec son téléphone.
L'utilisation du GPS, de l'accéléromètre et de l'écran tactile permet de proposer au visiteur une expérience sensorielle inaccessible avec un ordinateur.

##Le setup de l'expérience multi screen web
- Au moins _deux navigateurs_ : desktop et device
- Un serveur capable de _maintenir une communication bidirectionnelle_

##La mécanique
- Tous les utilisateurs (navigateurs) sont _connectés bi-directionnellement au serveur_
- Le serveur envoie _à chacun des utilisateurs_ des mises à jour en temps réel
- L’utilisateur A envoie au serveur « bouger vers la droite »
- Le serveur propage le message à l’utilisateur B
- L’utilisateur B reçoit le message et y réagit, en bougeant un objet vers la droite par exemple
- Les utilisateurs _semblent_ communiquer et être reliés ensemble en temps réel

##Focus technologique
- Node.js est un serveur qui permet de maintenir des connections WebSockets temps réel avec le module sockets.io
- Certains firewall peuvent interdire les WebSockets, mais c’est très rare
- Compatibilité des navigateurs : IE 10 +, Firefox, Safari, iOS 6, Chrome
- Alertnatives : Firebase, qui est un une base de données répliquées en temps réel chez tous ces abonnées

##Ressources :
- [Site Diplomatic Cover](http://diplomatic-cover.com)
- [Google Maze](http://chrome.com/maze)
- [Exemple Firebase](http://www.firepad.io)