import * as dotenv from 'dotenv'
dotenv.config()
import StartServer from "./server";
import { PrismaClient } from "@prisma/client";

function main() {
  try {
    const prismaClient = new PrismaClient();
    StartServer(prismaClient);
  } catch (error) {
    console.error(error);
  }
}

if (typeof require !== undefined && require.main === module) {
  main();
}
