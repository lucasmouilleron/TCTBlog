---
layout: post
title: Réussir la conception d'un emailing
tags: [emailing, conception]
picture: emailing.jpg
---
{% include JB/setup %}

##L'ambition
Pour délivrer son message à son audience, un emailing doit d'abord arriver dans la boîte mail des destinatires, ne pas être détecté comme spam et s'afficher correctement sur la multitude des clients mails (outlook, gmail, apple mail, lotus, etc.)

Ces objectifs sont assez simples à atteindre en *respectant de bonnes pratiques techniques et de conception*.

##La référence
*Mailchimp*, le leader mondial de l'envoi d'email, partage sur son site beaucoup de ressources pour aider à mieux concevoir ses campagnes d'emailing.

Entre autres, [de précieux gabarits à l'architecture optimisée](http://publicisactiv-services.com/mailchimpGalery). *Nous recommandons leur utilisation dans la phase de **conception graphique** et dans la phase d'intégration*.

##Rédaction, conception graphique
- Sujet du mail très clair qui reprend l’information principale
- 600 px de large max
- L’information principale doit apparaître en texte dans les 300 premiers px verticaux
- Architecture simple et linéaire, pas de supperposition de blocs
- Polices standard (arial, times new roman, c’est tout)
- Pas de texte en blanc
- Pas d’image ou de formes en arrière plan de texte (à part rectangle monochromatique)
- Pas d’animation, de vidéo (par contre, une capture de la vidéo intriguante peut servir de lien vers une landing page avec la vidéo)
- Quelques règles pour éviter d'être classé en *spam* : 
    - Ne pas utiliser de phrases catchy du genre "Clickez ici!" ou "La chance de votre vie"
    - Ne pas utiliser trop de points d'excalamations!!!!!!!!!!!!!!!!!
    - NE PAS ECRIRE TOUT EN MAJUSCULE, SURTOUT DANS LE SUJET
    - Coloriser les fonts en rouge ou vert brillant

##Conception technique
- First things first, réutiliser l'existant : [Boilerplate réalisée par The Engage Group](http://htmlemailboilerplate.com)
- Pas de ```<div>```, que du ```<table>```
- Un tableau width 100% conteneur principal
- Centrer le conteneur avec ```<center>```
- Polices standards et fallbacks (cf exemples W3Schools)
- Pas de javascript
- Uploader toutes les images dans un répertoire dédié à l’email sur un serveur web accessible
- Les url des images dans les balises <img/> doivent être celles des images uploadées sur le serveur web
- Pas de couleur de fond dans <body> mais dans un tableau conteneur de width 100%
- Pas d’image en background de tableau (uniquement des couleurs, ou image dans une cellule)
- Pour les images, utiliser les alt et title pour afficher du texte alternatif si les images ne s’affichent pas (ne pas utiliser de caractères spéciaux ni de caractères protégés)
- Pas de ```<style>```, CSS uniquement en inline [utiliser l’inliner Mailchimp](http://beaker.mailchimp.com/inline-css)
- Si envoi fait via Mailchimp, ajouter manuellement un bouton de désinscription : ```<a href= »*|UNSUB|* »>Désinscription</a>```

##Campagne d'emailing
Pour envoyer correctement un email mis en forme à une liste de destinataire, il faut utiliser un *routeur de mail*, comme Mailchimp. Cette pratique, en plus de garantir le respect de la mise en forme initiale (un envoi depuis Lotus ou Outlook est catastrophique voire impossible), permet d'obtenir des statistiques sur les taux d'ouverture et de rejet d'une campagne d'emailing.

Même si le procédé est simple, *la gestion complète d'une campagne*, de la conception, la production, l'envoi et la génération d'un rapport statistique *constitue un projet qui mérite d'être **géré***.

##Resources
- [Galerie de gabarits recommandés par Mailchimp](http://publicisactiv-services.com/mailchimpGalery)
- [Recommandations de conception par Mailchimp](http://mailchimp.com/resources/guides/html/email-marketing-field-guide)
- [Boilerplate réalisée par The Engage Group](http://htmlemailboilerplate.com)