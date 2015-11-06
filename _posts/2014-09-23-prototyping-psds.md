---
layout: post
title: Prototyping, for real ?
categories: [code]
tags: [email, sass]
description: When to prototype and what tools to use
picture: http://grabs.lucasmouilleron.com/Screen%20Shot%202015-11-06%20at%2018.23.30.png
---
{% include JB/setup %}

_Prototyping_ apps or websites is said in countless blogs to _helping designers, developpers, product managers and owners_ to produce the _right thing with minimal hassle_.

Or at least less than in the _old way of building static mockups_, explaining them along the production chain, and sometimes, _move backward late in the process_.

For real ?

## When to prototype

Prototyping, in its broader sense is about building a __rough fake version of a product to help understand it__.

In the case of an app or a website, it can be a wireframe, an __interactive wireframe__, an __interactive mockup__ or a (semi) __functionnal prototype__.

When the app or the website and / or its budget and / or its lifetime are small, refined prototypes are too expensive.

>As a rule of thumb, here are __common situtations__ and matching __prototypes solutions__ : 

> &nbsp;

>- User flow, global understanding, mature audience (project managers, developpers) : _interactive wireframe_
>- Complex user flow, non mature audience (clients, stakeholders), enough budget  : _interactive mockup_
>- Complex and specific interaction (new UX, reponsive reactions), enough budget : _semi functionnal prototype_

## Prototyping tools

### Interactive wireframe tool
- Users : project managers, designers
- End users : developpers, project managers, mature clients
- Output : pdf file, html website
- [Axure](http://www.axure.com) : robust, medium learning curve, export as html
- [Balsamiq](http://balsamiq.com/products/mockups) : ligher, easy to use, cloud or not, no export (maybe via plugins, did not try)

### Interactive mockup tool 
- Users : project managers, designers
- End users : developers, project managers, clients
- Output : html website
- [Invision](http://www.invisionapp.com) : very easy, cloud, Photoshop auto slicing and sycing, comments

### Semi functionnal prototype tool
- Users : designers with light to medium dev (js) skills, developpers
- End users : developers, project managers, clients
- Output : prototype website
- [FramerJS](http://framerjs.com) : convenient framework (animation helpers, states machine, coffee or js), Photoshop auto slicing

## Conclusions
As we realized, it is actually possible to prototype and yield time and noise savings.

It's just about using the right protootype tool for the right context.

## Examples
- [Invision prototype for one of our client](http://invis.io/R61EYKU7S)
- [Simple FramerJS test for one of our client](http://lab.thecreativetechnology.com/projects/testFramerJS)
- [Facebook galery FramerJS example](http://examples.framerjs.com/#facebook-newsfeed-photos.framer)