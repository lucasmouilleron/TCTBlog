---
layout: post
title: Second screens, companions
categories: [code]
tags: [compagnon, second screen, ux, xbox]
picture: secondscreens.jpg
---
{% include JB/setup %}

Les “second screens” définissent les devices (smartphone, tablette) qui proposent à l’utilisateur une expérience enrichie et des contenus additionnels associés à une première expérience “maître” (émission de télé, jeu vidéo, média center, etc.)

Les “companions” seraient les applications hébergées dans les seconds screens.

##Emissions télévisuelles, films, séries : 
- Contenus additionnels
- Votes, jeux

##Jeux vidéos : 
- Contenus additionnels (infos sur les personnages à l’écran, position sur la carte)
- Accéléromètre : le companion peut se comporter comme une manette additionnelle
- GPS, 3G : Le joueur démarre le jeu depuis sa console, le companion se lance, il quitte son domicile, le GPS traque ses mouvements et il réalise des missions dans la vie réelle

##Solution technique via cloud / API / messages : Smartglass à la Microsoft
- Smartglass est la solution Microsoft pour enrichir les contenus XBox (jeux, vidéos, musique)
- Le companion Smartglass existe sous forme d’application pour iOS, Androïd et Windows Phones et Tablets
- L’application ne se télécharge qu’une fois
- Lorsqu’un contenu “maître” XBox est diffusé depuis la XBox de l’utilisateur (jeu, épisiode d’une série, film, chanson)
- Si des contenus additionnels Smartglass sont disponibles, le companion Smartglass émet une notification
- Le contenu additionnel est poussé sans action / téléchargement de l’utilitateur dans le companion

###Architecture :
- Une application “esclave” HTML5/JS associée à chaque contenu “maître” (jeu, vidéo, groupe de vidéos)
- Cette application est lancée dans l’application Smartglass
- Le contenu “mâitre” déclenche des signaux à destination de l’application “esclave” (le personnage 48 vient d’apparaître à l’écran, la position du joueur est 48×938, etc.)
- L’application “esclave” peut télécharger les contenus associés à ces évènements sur un serveur en dehors du réseau Microsoft
- [Ppt technique Microsoft]( http://ge.tt/7iaCpwc)

###Avantages :
- Architecture robuste
- L’application Smartglass à télécharger une fois commune à tous les contenus “maîtres”
- L’application Smartglass notifie l’utilisateur quand un contenu additionnel est disponible : mode passif
- Développements simples (HTML5/JS côté “esclave”, API simple côté “maître”)
- Le contenu “maître” et l’application “ecslave” pourrait communiquer sans être sur le même réseau

Inconvénients :
- Les contenus “maîtres” doivent être diffusé depuis une XBox

##Solution technique Audio watermarking : à la M6
- L’audio watermarking est l’équivalent d’un QRCode audio
- Un tag audible ou inaudible est mélangé / inséré dans un signal audio
- Un récepteur peut détecter et lire ce tag

###Architecture :
- Une application “esclave” contient un détecteur de tags (des [SDKs existent pour iOS et Androïd](http://intrasonics.com))
- L’application réagit aux tags émits par le contenu “maître” et peut présenter / télécharger des contenus additionnels associés à ces évènements
- Les tags sont générés à priori et encapsulé dans le flux audio du contenu “maître”

###Avantages :
- Indépendant de la plateforme d’émission (télé, radio, média center, XBox)

###Inconvénients :
- Une application par contenu “maître” à développer et télécharger
- L’utilisateur doit lancer l’application pour détecter les tags : mode actif
- La détection du tag prend ~10s
- Développements natifs, ou dévelopepemnt unifié Phonegap mais architecture de plugin à mettre en place
- Les tags audio doivent être générés à priori et mélangés au flux audio du contenu “maître”
- Les tags audio ne peuvent pas être encapsulés dans des silences