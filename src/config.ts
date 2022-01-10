export default {
  host: process.env.server ?? "tristansmp.com",
  username: process.env.emai ?? "email",
  password: process.env.password ?? "password",
  version: process.env.version ?? "1.17.1",
  admins: process.env.admins ?? ["twisttaan"],
};
