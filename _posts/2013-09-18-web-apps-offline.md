---
layout: post
title: WebApps Offlines
categories: [thoughts]
tags: [webapp, offline, api, html5, mvc]
picture: webapp-offline.jpg
---
{% include JB/setup %}

Une WebApp est une application exécutée depuis le navigateur. Une WebApp Offline est une WebApp qui peut continuer à fonctionner sans connection à Internet.

##Avantages des WebApps
Les développeurs, éditeurs et agences proposent de plus en plus WebApps, à l'instar des clients lourds classiques (par exemple en c# ou java) :

- **Stack technologique matûre, documentée, maintenue** : 
    - Frontend : uniformisation des moteurs JS des navigateurs, frameworks JS MVC
    - Backend : facilité de mise en place d'API REST (rails, epiphany, etc.)
- **Distribution :** la WebApp s'installe en allant à l'url de l'application depuis le navigateur
- **Maintenance :** la mise à jour de la WebApp est identique à la mise à jour d'un site web, pas de mise à jour à installer
- **Portabilité :**  la WebApp peut être utilisée sur mobiles, tablettes et desktops. La WebApp peut également être embarquée dans un conteneur d'application native à la PhoneGapp.


##Implémentation Offline
HTML5 permet d'utiliser un fichier cache manifest dans lequel sont déclarés les resources à conserver dans le cache du navigateur.

- L'utilisateur se connecte une première fois à l'url de la WebApp
- Les contenus _déclarés dans le fichier cache manifest_ sont téléchargés et _stockés dans le cache du navigateur_
- Dès lors, les _contenus cachés ne sont plus demandés au serveur_
- Pour réaliser une mise à jour de ces contenus, le _fichier cache manifest doit être mis à jour_ (un commentaire suffit). Sur Chrome et Firefox, l'option `Prefer Online` permet de télécharger les nouveaux contenus _automatiquement et sans mise à jour du fichier manifest_ si l'utilisateur est connecté à Internet.
- Les routes REST de l'API peuvent être déclarées dans le fichier manifest
- Pour détecter en JS l'état online ou offline de l'utilisateur, une route REST non cachée `ping` peut être interrogée : `success = online`, `failure = offline`
- La mise à jour du commentaire du fichier manifest peut être réalisée périodiquement (toutes les minutes) ou sur évènement (des contenus ont été modifés côté serveur)

##Limites
- Quantité de stockage : tous les navigateurs ne proposent pas la même quantité de stockage pour les contenus offline. **Le dénominateur commun est 5MB.** Si la cible est un navigateur spécifique, consulter cet [article](http://grinninggecko.com/developing-cross-platform-html5-offline-app-1/) qui précise les quotas par navigateurs
- Sur Safari, le fichier manifest doit être mis à jour pour que les nouveaux contenus soit téléchargeables par les utilisateurs
- Les resources à cacher doivent être déclarées une à une (les * ou répertoires ne sont pas pris en compte)
- Comme les WebApps, les WebApps Offlines sont limitées en performances graphiques (animations)

##Ressources :
- [Let's Take This Offline](http://diveintohtml5.info/offline.html)
- [Guide du cache manifest](http://www.html5rocks.com/en/tutorials/appcache/beginner/)