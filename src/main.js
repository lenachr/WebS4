import './assets/main.css'

// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.use(router);
app.mount('#app');

const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
