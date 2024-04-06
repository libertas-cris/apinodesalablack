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

// src/http/controllers/createSession.ts
var createSession_exports = {};
__export(createSession_exports, {
  createSession: () => createSession
});
module.exports = __toCommonJS(createSession_exports);

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

// src/http/controllers/createSession.ts
var import_zod2 = require("zod");
var import_bcrypt = require("bcrypt");
async function createSession(request, reply) {
  const dataUserLogin = import_zod2.z.object({
    email: import_zod2.z.string().email(),
    password: import_zod2.z.string()
  });
  const { email, password } = dataUserLogin.parse(request.body);
  const userExists = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if (!userExists) {
    return reply.status(400).send("user not exists");
  }
  const isPasswordValid = await (0, import_bcrypt.compare)(password, userExists.password);
  if (!isPasswordValid) {
    return reply.status(400).send("Wrong password");
  }
  const token = await reply.jwtSign({
    event_date: userExists.event_date
  }, {
    sub: userExists.id,
    expiresIn: "1d"
  });
  return reply.status(200).send({
    token
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createSession
});
