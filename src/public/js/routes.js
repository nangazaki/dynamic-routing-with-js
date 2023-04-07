import { Home } from "./pages/home.js";
import { About } from "./pages/about.js";
import { Services } from "./pages/services.js";
import { Contact } from "./pages/contact.js";

const router = (route) => {
  switch (route) {
    case "/":
      return new Home().handle();
    case "/about":
      return new About().handle();
    case "/services":
      return new Services().handle();
    case "/contact":
      return new Contact().handle();
    default:
      return new Home().handle();
  }
}

export { router }