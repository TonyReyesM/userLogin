if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import express from "express";
import mongoose from "mongoose";
import fileupload from "express-fileupload";
import cors from "cors";
import methodOverride from "method-override";
import helmet from "helmet";
//  Routes
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import postsRouter from "./routes/posts";

const app = express();
const BASE_PATH = "/api";

/*
 ** HelmetJS (for securing http headers)
 ** See https://helmetjs.github.io/ for reference
 */
app.use(helmet());

//  View engine
// app.set("view engine", "ejs"); //Configuramos el motor de vistas para funcionar con ejs
// app.set("views", __dirname + "/views"); //Configuramos el directorio de vistas a utilizar
// app.set("layout", "layouts/layout"); //Escogemos la dirección del archivo layout que servirá para no tener que duplicar el HTML
// app.use(expressLayouts);

// TODO: add comment explaining what this is for
app.use(
  fileupload({
    createParentPath: true,
  })
);

app.use(express.static("public")); // Indicamos la dirección de los archivos públicos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method")); // TODO: add comment for whatever this is
app.use(cors());

// Defined routes + endpoints for api
app.use(BASE_PATH, indexRouter);
app.use(`${BASE_PATH}/users`, usersRouter);
app.use(`${BASE_PATH}/posts`, postsRouter);

//  Database connection
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const URI = `mongodb+srv://${MONGO_USER}:${encodeURIComponent(MONGO_PASSWORD)}@cluster0.upkrn.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(URI);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("<=== Connected to Mongoose ===>"));

//  Server Port
const PORT = process.env.PORT || "5000";
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
