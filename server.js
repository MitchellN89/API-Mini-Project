const express = require("express");
const app = express();
require("dotenv").config();

const dbConnect = require("./dbConnect");
const PORT = process.env.SERVER_PORT || 8080;

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

const postRoutes = require("./routes/postRoutes");
app.use("/posts", postRoutes);

const setupRoutes = require("./routes/setupRoutes");
app.use("/setup", setupRoutes);

const albumRoutes = require("./routes/albumRoutes");
app.use("/albums", albumRoutes);

const commentRoutes = require("./routes/commentRoutes");
app.use("/comments", commentRoutes);

const photoRoutes = require("./routes/photoRoutes");
app.use("/photos", photoRoutes);

const todoRoutes = require("./routes/todoRoutes");
app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
