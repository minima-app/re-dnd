# rescript-dnd

[![npm version](https://img.shields.io/npm/v/rescript-dnd.svg?style=flat-square)](https://www.npmjs.com/package/rescript-dnd)
[![license](https://img.shields.io/npm/l/rescript-dnd.svg?style=flat-square)](https://www.npmjs.com/package/rescript-dnd)
[![build](https://github.com/shakacode/re-dnd/actions/workflows/pr.yml/badge.svg)](https://github.com/shakacode/re-dnd/actions/workflows/pr.yml)

Drag & drop for [`@rescript/react`](https://reasonml.github.io/reason-react/).

## Features
* Vertical lists
* Horizontal lists
* Multiple drop targets
* Mouse & Touch interactions
* Conditional drag & drop
* Custom drag handles
* Scrollable containers
* Auto-scroll when dragging at container's edge

> ### ShakaCode
> If you are looking for help with the development and optimization of your project, [ShakaCode](https://www.shakacode.com) can help you to take the reliability and performance of your app to the next level.
>
> If you are a developer interested in working on ReScript / TypeScript / Rust / Ruby on Rails projects, [we're hiring](https://www.shakacode.com/career/)!

## Installation

```shell
# yarn
yarn add rescript-dnd
# or npm
npm install --save rescript-dnd
```

Then add it to `bsconfig.json`:

```json
"bs-dependencies": [
  "rescript-dnd"
]
```

## Docs
* [Getting Started](./docs/01-GettingStartedGuide.md)
* [Advanced guide: Safer identifiers and multiple containers](./docs/02-SaferIdentifiersAndMultipleContainersGuide.md)
* [Api](./docs/03-Api.md)

## Examples
* Demos: [`live`](https://rescript-dnd.vercel.app) | [`sources`](./examples)
* Production app: [`Minima`](https://minima.app)

## State
🚧 The library is not feature-complete and some features/apis might be missing.<br>
🎙 Let us know if you miss anything via [creating an issue](issues/new).<br>
🌎 We're using it in production BTW.


### Features we'd like to add at some point
- [ ] Keyboard interactions
- [ ] Ignore form elements (opt-out)
- [ ] Drop-zones
- [ ] Multi-select

## Thanks
* To [`react-beautiful-dnd`](https://github.com/atlassian/react-beautiful-dnd) for inspiration

## License
MIT.

## Supporters

<a href="https://www.jetbrains.com">
  <img src="https://user-images.githubusercontent.com/4244251/184837695-2c00e329-7241-4d9b-9373-644c1ce215be.png" alt="JetBrains" height="120px">
</a>
<a href="https://scoutapp.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/4244251/184837700-a910106b-1b1b-4117-88b8-9b5389425e66.png">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/4244251/184837704-83960568-1599-485b-b184-5fd8b05d5051.png">
    <img alt="ScoutAPM" src="https://user-images.githubusercontent.com/4244251/184837704-83960568-1599-485b-b184-5fd8b05d5051.png" height="120px">
  </picture>
</a>
<br />
<a href="https://www.browserstack.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/4244251/184838560-ada89877-abd1-4d11-b144-b52ef69e0bb9.png">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/4244251/184838569-35f4d4b1-5545-4ee4-a015-41ca7a5dbc7c.png">
    <img alt="BrowserStack" src="https://user-images.githubusercontent.com/4244251/184838569-35f4d4b1-5545-4ee4-a015-41ca7a5dbc7c.png" height="55px">
  </picture>
</a>
<a href="https://railsautoscale.com">
  <img src="https://user-images.githubusercontent.com/4244251/184838579-f8c2fd95-f376-4f0d-a661-50bbdeee892b.png" alt="Rails Autoscale" height="55px">
</a>
<a href="https://www.honeybadger.io">
  <img src="https://user-images.githubusercontent.com/4244251/184838575-e56cac82-5853-448c-a623-67280a91d75f.png" alt="Honeybadger" height="55px">
</a>

<br />
<br />

The following companies support our open source projects, and ShakaCode uses their products!
