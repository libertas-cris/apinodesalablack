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

// src/http/controllers/updateEventDate.ts
var updateEventDate_exports = {};
__export(updateEventDate_exports, {
  updateEventDate: () => updateEventDate
});
module.exports = __toCommonJS(updateEventDate_exports);

// src/lib/prisma.ts
var import_client = require("@prisma/client");

// src/env/index.ts
var import_config = require("dotenv/config");
var import_zod = require("zod");
var envSchema = import_zod.z.object({
  NODE_ENV: import_zod.z.enum(["dev", "test", "production"]).default("dev"),
  PORT: import_zod.z.coerce.number().default(3333),
  JWT_SECRET: import_zod.z.string().default("apisalablack"),
  CONTEXT_PATH: import_zod.z.string().default("/api")
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

// src/http/controllers/updateEventDate.ts
var import_zod2 = require("zod");
async function updateEventDate(request, reply) {
  const eventDateValidate = import_zod2.z.object({
    id: (0, import_zod2.string)().uuid(),
    eventDate: import_zod2.z.string()
  });
  const { id, eventDate } = eventDateValidate.parse(request.body);
  const parseEventDate = new Date(eventDate);
  await prisma.user.update({
    where: {
      id
    },
    data: {
      event_date: parseEventDate
    }
  });
  return reply.status(200).send("Event date updated successful");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  updateEventDate
});
