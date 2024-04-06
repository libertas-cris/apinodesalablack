"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/http/controllers/getUserEventDate.ts
var getUserEventDate_exports = {};
__export(getUserEventDate_exports, {
  getUserEventDate: () => getUserEventDate
});
module.exports = __toCommonJS(getUserEventDate_exports);
var import_zod2 = require("zod");

// src/lib/prisma.ts
var import_client = require("@prisma/client");

// src/env/index.ts
var import_config = require("dotenv/config");
var import_zod = require("zod");
var envSchema = import_zod.z.object({
  NODE_ENV: import_zod.z.enum(["dev", "test", "production"]).default("dev"),
  PORT: import_zod.z.coerce.number().default(3333),
  JWT_SECRET: import_zod.z.string(),
  CONTEXT_PATH: import_zod.z.string()
});
var _env = envSchema.safeParse(process.env);
if (_env.success === false) {
  console.error("invalid enviroment variables", _env.error.format());
  throw new Error("Invalid enviroment variables");
}
var env = _env.data;

// src/lib/prisma.ts
var prisma = new import_client.PrismaClient({
  log: env.NODE_ENV === "dev" ? ["query"] : []
});

// src/errors/AppError.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/http/controllers/getUserEventDate.ts
async function getUserEventDate(request, reply) {
  const validateUserId = import_zod2.z.object({
    id: import_zod2.z.string().uuid()
  });
  const { id } = validateUserId.parse(request.params);
  if (!id) {
    throw new AppError("User does not exists", 400);
  }
  const userEventDate = await prisma.user.findUnique({
    where: {
      id
    }
  }).catch((error) => {
    throw new AppError("Server is down");
  });
  reply.status(200).send(userEventDate?.event_date);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getUserEventDate
});
