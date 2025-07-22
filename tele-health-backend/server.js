import express from "express";
import routes from "./routes/index.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running - Public API");
});

app.use("/", routes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
export default app;


