import { Router } from "express";
import { PrismaClient } from "@prisma/client";

function projectRouter(prismaClient: PrismaClient) {
  const router = Router();
  return router;
}

export default projectRouter;
