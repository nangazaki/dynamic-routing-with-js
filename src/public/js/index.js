import { router } from "./routes.js"
import { header, main } from "./components/components.js"

const root = document.getElementById('root')

root.innerHTML = header
root.innerHTML += main

const app = document.getElementById('app')

let view;

window.onload = () => {
  let links = document.querySelectorAll("a");

  view = router("/");

  app.innerHTML = view

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      let path = link.href.slice(link.href.lastIndexOf("/"), link.href.length);

      window.location.hash = path;

      view = router(path);

      app.innerHTML = view

      e.preventDefault();
    })

  });
}
