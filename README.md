# Phamily Software Engineering Exercise

At Phamily, a lot of our work involves building well-crafted software to delight our users. So instead of estoric puzzles and brainteasers, we like to get real and simulate building some real features together.

## Challenge

Imagine we're working together on this todo list feature (in Vue). Our user feedback indicates that due dates are important to manage things better. Please add the following enhancements to the todo list:

1. Set a due
2. Sort by due date
3. Group list by due date, e.g. Overdue, Today, Tomorrow, etc.
4. Extra credit: Search the todo list

## Submission instructions
* Fork the project at: https://githubbox.com/Phamily/vue-todo-pwa
* Send us the completed CodeSandbox link.
* Send us 3-5 minute screencast demoing the new features and talking through the major parts of the code. Feel free to use any screencasting software. [Vidyard](https://www.vidyard.com/) is decent if you need a recommendation.

## Guidelines
* We expect spending between 2-6 hrs on the project, depending upon your familiarity with the technologies involved. We recommend timeboxing and seeing how much you can do within that time.
* It's okay if you're not able to finish all the features. We prefer fewer things done well over everything done, but not well.
* Feel free to use your intuition and judgement on time-scope-quality tradeoffs related to the features and implementation details.
* Feel free to use either the Vuex or the Vue Composition API version.
* Keep code clean. Make things look nice. Have fun with it!
## What we'll be evaluating
* Clean working code
* Architectural thinking
* Product craftsmanship
* Clear communication

Good luck!

___

<i><pre>

Original project README below

</pre></i>

___

# vue-todo-pwa

This project is a simple Todo [PWA] (Progressive Web App) based on the Vuex [TodoMVC] example.<br>
Perfect to learn the basics about [Vue 3], [Vuex] and [Bootstrap 5] technologies.

[pwa]: https://developers.google.com/web/progressive-web-apps
[todomvc]: https://github.com/vuejs/vuex/tree/4.0/examples
[vue 3]: https://v3.vuejs.org
[vuex]: https://next.vuex.vuejs.org
[bootstrap 5]: https://getbootstrap.com


<p align="center">
  <a href="https://davidgaroro.github.io/vue-todo-pwa" target="_blank" rel="noopener">
    <img src="https://i.imgur.com/2kAywUP.png"><br>
    Live Demo
  </a>
</p>

## Built With

### Dependencies

| Name           | Description                                          |     |
| -------------- | ---------------------------------------------------- | :-: |
| [Vue 3]        | Progressive JavaScript Framework                     | 🖖  |
| [Vuex 4]       | ️Centralized State Management for Vue.js             | 🗃️  |
| [Vue Router 4] | Official Router for Vue.js                           | 🚦  |
| [Vue CLI 4]    | ️Standard Tooling for Vue.js Development             | 🛠️  |
| [Bootstrap 5]  | The most popular HTML, CSS, and JavaScript framework | 📚  |

[vue 3]: https://v3.vuejs.org
[vuex 4]: https://next.vuex.vuejs.org
[vue router 4]: https://next.router.vuejs.org
[vue cli 4]: https://cli.vuejs.org
[bootstrap 5]: https://getbootstrap.com

## Vue Composition API (optional)

This project includes components with their alternate version made with the composition API.

> For more information on how to use Composition API, visit the [official documentation]

[official documentation]: https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api

### How to use the alternative component version

To toggle between classic or composition components you only have to comment or uncomment, or just edit the name component:

```js
<!-- router/index.js -->
  ...
  import Home from "../views/Home.vue"; // classic
  // import Home from "../views/Home.composition.vue"; // made with composition api
  ...
```

## Installation

### Clone repository

```
git clone https://github.com/davidgaroro/vue-todo-pwa.git
cd vue-todo-pwa
```

### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Donation

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate?hosted_button_id=T7CVYXY994KHJ)

## License

[MIT](./LICENSE) &copy; davidgaroro
