import { Router } from "express";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const router = Router();

router.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "../src/template", "index.html"));
});

export { router }