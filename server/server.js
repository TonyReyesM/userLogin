if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const fileupload = require("express-fileupload");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const cors = require("cors");
const methodOverride = require("method-override");
const helmet = require("helmet");

/*
 **HelmetJS
 **Protección de Headers
 */
app.use(
  helmet({
    //Para que no aparezca el powered by: Express en headers
    hidePoweredBy: true,
    // Para filtrar XSS, cubre carácteres inseguros
    xssFilter: true,
    // Para que no puedan subir archivos dif a los content-type
    noSniff: true,
    //Para que no puedan entrar al contexto(?) de la página
    ieNoOpen: true,
    // HTTP Strict Transport Security, pide al usuario solo acceder por medio de HTTPS
    // Esta puesto para 90 dias, el tiempo está en segundos
    //   hsts: {
    //     maxAge:7776000,
    //     force: true },
    // Content Security Policy, HTLM5 Rocks, KeyCDN, poner lo necesario para cada página o media
    // que necesitemos
    //  contentSecurityPolicy: {
    //    directives: {
    //      defaultSrc: ["'self'"],
    //      scriptSrc: ["'self'"]
    //    }}
  })
);

//  View engine
// app.set("view engine", "ejs"); //Configuramos el motor de vistas para funcionar con ejs
// app.set("views", __dirname + "/views"); //Configuramos el directorio de vistas a utilizar
// app.set("layout", "layouts/layout"); //Escogemos la dirección del archivo layout que servirá para no tener que duplicar el HTML
// app.use(expressLayouts);

app.use(
  fileupload({
    createParentPath: true,
  })
);

app.use(express.static("public")); //Indicamos la dirección de los archivos públicos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cors());

//  Routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const basePath = "/api";

app.use(basePath, indexRouter);
app.use(`${basePath}/users`, usersRouter);

//  Database connection
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const URI =
  "mongodb+srv://" +
  MONGO_USER +
  ":" +
  encodeURIComponent(MONGO_PASSWORD) +
  "@cluster0.upkrn.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");
mongoose.connect(URI, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

//  Server Port
const PORT = process.env.PORT || "5000";
app.listen(PORT, console.log(`Server running on port ${PORT}`));
