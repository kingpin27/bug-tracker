import { Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";
import {userValidationRules, validate} from '../validators'

function userReadHandler(prismaClient: PrismaClient) {
  return (req: Request, res: Response) => {
    const userID: String = req.params.id;
    res.json({
      message: userID,
    });
  };
}

function userCreateHandler(prismaClient: PrismaClient) {
  return (req: Request, res: Response) => {
    res.json({
      message: {
        name: req.body.name,
      },
    });
  };
}

function userDeleteHandler(prismaClient: PrismaClient) {
  return (req: Request, res: Response) => {
    res.json({
      message: {
        name: req.body.name,
      },
    });
  };
}

function userUpdateHandler(prismaClient: PrismaClient) {
  return (req: Request, res: Response) => {
    res.json({
      message: {
        name: req.body.name,
      },
    });
  };
}

function userRouter(prismaClient: PrismaClient) {
  const router = Router();
  router.post("/", userCreateHandler(prismaClient));
  router.get("/:id", userValidationRules(), validate, userReadHandler(prismaClient));
  router.put("/:id", userUpdateHandler(prismaClient));
  router.delete("/:id", userDeleteHandler(prismaClient));
  return router;
}

export default userRouter;
