import { Router } from "express";
import { PrismaClient } from "@prisma/client";

function ticketRouter(prismaClient: PrismaClient) {
  const router = Router();
  return router;
}

export default ticketRouter;
