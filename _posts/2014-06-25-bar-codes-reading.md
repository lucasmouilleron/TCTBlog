---
layout: post
title: Lecture de codes barres et QR codes
categories: [code]
tags: [qr code, code barre]
picture: http://haveidols.com/grabs/Screen%20Shot%202014-09-09%20at%2014.00.36.png
description: Lecture de codes bars et qr codes depuis différents environnements
---

##Cas d'utilisation
- Lecture de codes barres de produits sur emballage depuis device mobile
- Flash de QR Codes depuis un site ou une application

##Lecture en applications natives
- Sur iOS, depuis la v7, plus besoin de librairies pour scanner les QR codes et codes barre, [utiliser le framework AVFoundation](http://www.ama-dev.com/iphone-qr-code-library-ios-7)
- Sur Android : [ZBar](http://sourceforge.net/projects/zbar) permet de scanner QR Codess et codes barres

##Lecture dans le navigateur
- Utilisations : web app dans le navigateur, applications via phonegapp, côté serveur avec node JS
- [Portage JS de ExactImage](http://manuels.github.io/unix-toolbox.js-exact-image/demo) : codes bars pour Chrome, Firefox et Safari (mobile et desktop)
- [BarcodeReader](https://github.com/EddieLa/BarcodeReader) : codes bars pour Chrome, Firefox et Safari Desktop (pas mobile)
- [JSQRCode](https://www.npmjs.org/package/jsqrcode) : QR codes pour node JS, Chrome et Firefox

##Lecture sur le serveur
- [php-zbarcode](https://github.com/mkoppanen/php-zbarcode) : codes bars, QR codes en PHP

> La lecture sur le serveur peut être une solution pour décoder les codes scannés depuis un device qui ne peut pas le faire (navigateur trop ancien par exemple)