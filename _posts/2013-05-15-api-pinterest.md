---
layout: post
title: API Pinterest non officielle
categories: [code]
tags: [api, pinterest, social]
picture: api-pinterest.jpg
---
{% include JB/setup %}

Pinterest ne propose toujours d’API officielle.

Pour patienter, James Moz met à disposition une [API non officielle simple et efficace](http://pinterestapi.co.uk).

###Mise en garde :
- L’API est non officielle et le service peut être interrompu temporairement ou définitivement sans alertes préalabes
- L’API convertit les pages du site pinterest en endpoints d’API standard. Si pinterest change le html de ces pages, l’API ne fonctionne plus
- En production : refaire une API non officielle (epiphany, DOMDocument) pour maîtriser le SLA. Confgurer des alertes au changement du DOM pinterest.