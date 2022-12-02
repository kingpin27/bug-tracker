import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import userRouter from "./user";
import ticketRouter from "./ticket";
import projectRouter from "./project";
import commentRouter from "./comment";

function router(prismaClient: PrismaClient) {
  const router = Router();
  router.use('/user',userRouter(prismaClient))
  router.use('/comment',commentRouter(prismaClient))
  router.use('/ticket',ticketRouter(prismaClient))
  router.use('/project',projectRouter(prismaClient))

  return router;
}

export default router;
