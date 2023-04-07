import express from "express";
import { dirname } from "path";
import { fileURLToPath } from 'url';
import { router } from "./src/router.js";

const server = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

server.use(express.static(__dirname + "/src/public"));
server.use(express.urlencoded({ extended: true }));
server.use(router);

export { server };