---
layout: post
title: Offline web apps
categories: [thoughts]
tags: [web app, offline, api, html5]
description: Why and how to implement offline web apps
picture: webapp-offline.jpg
---

## What is an offline web app ?
A web app is a _HTML5 / JS / CSS_ software running _within the browser_.

Traditionaly, the frontend part of the web app (the code executed in the browser) is communicating via a _REST API_ with one or more backends.

An _offline web app_ can be used even if the user is _not connected_ to internet or a local network.

## Why using offline web apps ?
- **More and more mature technological stack** : 
    - *Evergreen browsers* : Modern browsers all implement offline web app mechanisms. Even better, they self update 
    - *Frontend stack* : JS frameworks such as _Angular and Backbone_ helps building bigger application, _RequireJS and Browserify_ allows modular building
    - *Backend stack* : API REST are easy or coming natively with modern frameworks such as _Rails, Laravel, Slim or Epiphany_
- **Ease of distribution** : Installing a web app is as easy as visiting its URL from a browser
- **Maintenance and updates** : Updates propagate semalessly as the browser is in charge of it
- **Portability** : Web app can be run on mobiles, tablets and desktop browsers. They can even be embeded within app contaniners such as PhoneGapp.

## Implementing an offline web app
To leverage offline capabilities, the web app needs to use the browser _App Cache_, via the _manifest file_.
The browser then allows to access the web app even if the device is not connected.

### Static assets
The manifest file contains a list of assets that need to be stored for offline usage.
This file typically contains the required CSS, JS and images file of the app.

The app cache storage size depends on browsers. As of writing, a safe bet is _10MB for mobile_ (Safari) devices and _> 200MB for desktop_ (IE10+).

Note as well some precautions need to be taken when working with [this capricious manifest file](http://alistapart.com/article/application-cache-is-a-douchebag).

### App data

#### Storage
While the manifest file is ideal to store static assets with little need for change, _other storage points_ must be used for the app _actual data_.

Possibilities and limits varies greatly depending on the user's browser as you can see on [this HTML5Rocks article](http://www.html5rocks.com/en/tutorials/offline/quota-research/?redirect_from_locale).

Thankfully, Mozilla released [localForage](https://github.com/mozilla/localForage) which abstracts IndexDB, WebSQL and localStorage with a common easy to use API.

As of writing, _5Mb can be leverage on mobile devices_ (Safari) and _> 250MB on desktop_ (IE10+).

#### Management
App data managed by a backend is generally made available over a _REST API_. The web app, when online, access data via some API routes. 

Part or all of it is stored (with _localForage_ for example) for later offline usage.

Some _data syncing_ mechanisms may be implemented, including optimisations (such as version numbers or hashs comparaisons before actual data transfer).

## How to deal with bad browsers ?
As of writing, IE7 and 8 do not allow offline web app and Safari mobile and IE9 desktop do not allow more than 5MB data storage.

As of writing, these setup are not too bad : 

- Dekstop : IE10+, Firefox, Safari, Chrome, 50MB+ data, 10MB+ assets (css, js)
- Mobile : Chrome, Firefox : 50 MB data, 10MB assets (css, js)

> For B2B apps, the app can detect bad browsers, forbid using the app and give users Chrome installation link.

<!-- tsk -->

> For B2C apps, either limit how much data is stored for offline use (by date, not the images, etc.), either detect bad browser and advise for a better one

## When not to use web apps ?
- If native notifications mechanisms are needed (ie. iOS or Android notification bubbles or messages), as a web app cannot yet provide such features
- If the users will be using IE9- and Safari mobile
- if offlined data are big, such as videos (as a compromise, videos could be available online only)
- If the app demands high graphic performances, such as complex and very fluid animations (like for every web project ran in the browser)
 
In theses cases, Adobe Air or native developments should be considered.

## Resources
- [HTML5Rocks Browser data storage study](http://www.html5rocks.com/en/tutorials/offline/quota-research/?redirect_from_locale=fr)
- [Mozilla's localForage lib](https://github.com/mozilla/localForage)
- [Storage, an asynchronous localForage wrapper](https://github.com/alekseykulikov/storage)
- [App Cache beginner guide](http://www.html5rocks.com/en/tutorials/appcache/beginner/)
- [Let's Take This Offline](http://diveintohtml5.info/offline.html)