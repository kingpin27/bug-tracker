import express from "express";
import cors from "cors";
import ApiRouter from "./router";
import { PrismaClient } from "@prisma/client";
import { auth } from "express-oauth2-jwt-bearer";

function StartServer(prismaClient: PrismaClient) {
  const PORT = process.env.PORT || 8080;

  const app = express();
  app.use(cors());
  app.get('/api/ping', (req,res) => res.json({message: "pong"}))
  app.use(express.json());
  app.use(
    auth({
      issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
      audience: process.env.AUTH0_AUDIENCE,
    })
  );
  app.use("/api", ApiRouter(prismaClient));
  app.listen(PORT, () => console.log(`starting server on port ${PORT}...`));
}

export default StartServer;
