import express from "express";
import cors from "cors";

async function StartServer() {
  const PORT = process.env.PORT || 8080;

  const app = express();
  app.use(cors())

  app.listen(PORT, () => console.log(`starting server on port ${PORT}...`));
}

export default StartServer;
