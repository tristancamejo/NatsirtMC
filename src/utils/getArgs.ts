import * as yargs from "yargs";

const args: {
  server: string;
  port: number;
  email: string;
  password: string;
  type: "mojang" | "microsoft";
} = yargs
  .usage(
    "Usage: -e <email> -p <password> -t <microsoft | mojang> -s <server> -p <port>"
  )
  .option("email", {
    alias: "e",
    describe: "Email address",
    type: "string",
    demandOption: true,
  })
  .option("password", {
    alias: "p",
    describe: "Password",
    type: "string",
    demandOption: true,
  })
  .option("type", {
    alias: "t",
    describe: "Authentication type",
    type: "string",
    choices: ["microsoft", "mojang"],
    demandOption: true,
  })
  .option("server", {
    alias: "s",
    describe: "Server",
    type: "string",
    demandOption: true,
  })
  .option("port", {
    alias: "p",
    describe: "Port",
    type: "number",
    demandOption: false,
    default: 25565,
  }).argv;

export { args };
