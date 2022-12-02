import { Router } from "express";
import { PrismaClient } from "@prisma/client";

function commentRouter(prismaClient: PrismaClient) {
  const router = Router();
  return router;
}

export default commentRouter;
