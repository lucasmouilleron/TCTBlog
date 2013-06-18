---
layout: post
title: Webapps temps réel avec les WebSockets
tags: [webapp, temps réel, websocket]
picture: realtime.jpg
---
{% include JB/setup %}

La technologie WebSocket permet la communication en flux bi-directionnel entre un client et un serveur.
Elle s'applique particulièrement aux sites webs et web apps.

##Les besoins croissants des web apps

Les attentes des utilisateurs conquis par les expériences sur applications mobiles et l'expansion des données et APIs disponibles convergent ensemble vers l'émergence de web apps (applications web dans le navigateur : [google mail](https://mail.google.com), [groove shark](http://grooveshark.com), [icloud](http://icloud.com), etc.). 

Ces applications nécessitent pour atteindre leurs promesses d'interactivité des échanges rapides et continus entre les navigateurs et les serveurs webs.

Les WebSockets sont la réponse à ce besoin.

##Historique de la connexion entre navigateurs (client) et serveur webs
- __HTTP classique__ : un navigateur émet une demande de page à un serveur qui la lui renvoie (mécanique _mono-directionnetlle et ponctuelle_)
- __HTTP classique + Ajax__ : en plus de la requête initiale, la page (au sein du navigateur) peut demander au serveur d'autres éléments sans se recharger (mécanique toujours mono-directionnelle mais fluidifcation des demandes)
- __WebSockets__ : une connexion _bi-directionnelle permanente_ entre le navigateur et le serveur est établie et utilisée pour transférer des données dans un sens comme dans l'autre

##Gain technologique, applications et potentiel
- La capacité à recevoir spontanément des informations des serveurs permet de présenter à l'utilisateur des informations justes : [google finance](https://www.google.com/finance?q=AAPL&ei=kB_AUfCTCaqTwQOKngE)
- Le _facteur 100_ de verbosité gagné rend possible des interactions entre plusieurs devices connectés à internet. Combiné à à l'accéléromètre et au tactile des devices mobiles, les interactions de contrôles sont envisageables : [utilisation du mobile comme contrôleur de jeu](http://chrome.com/maze/)
- Le _broadcast_ permet d'envoyer des informations à plusieurs utilisateurs en même temps qui peuvent participer à des expériences multi joueurs en temps réel comme [rumpetroll](http://rumpetroll.com)

Avec HTML5 et l'ouverture des composants des devices mobiles (accéléromètre, gps, caméra), les possibilités d'expériences utilisateurs temps réel à fortes valeurs ajoutées en web app sont grandes.

>Si Starbucks voulait lancer un nouveau produit dans une ville, nous leur conseillerions de créer une chasse au trésor en temps réel sur google maps. Sans applicaition à télécharger, les participants se connecteraient sur le site de la marque et pourraient consulter la carte de la ville, la position en temps réel des autres concurrents ainsi que celle des cadeaux et bons de réduction. Le dernier checkpoint serait finalement un magasin phare dans lequel serait organisé une cérémonie d'intrônisation du vainqeur.

##Compatibilité navigateurs 
Une révision du protocole WebSocket datant de 2011 corrige une faille de sécurité et est supportée par toutes les dernières versions de navigateurs.

- Firefox 6+, Firefox android 7+
- IE 10+
- Chrome 16+
- Safari 5+ (mac et iOS)

##Ressources :
- [Node.js](http://nodejs.org), serveur JavaScript particulièrement adapté aux WebSockets
- [Socket.io](http://socket.io), module de WebSockets pour Node.js