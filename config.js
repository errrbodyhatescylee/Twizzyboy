//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572,27849730363";
global.owner = process.env.OWNER_NUMBER || "27630092157";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0pBOU9lUDBVUHBKei9ZMXdUN25pa0k3bEs4U0pMMjNoRWNnV1Y5elAwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGpqdk8rMG1ZLzMwNjZXTjI1NWFxR2JlZmtPQWtXak91VnJBb3I5Mkdpcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SXVqbVpCN0c0UnUzK3ZxTjFVTmFWakc3bHdHYTVORjBiSXNHNTEwd1ZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKTkwvOGtPNThneTFzK0ZicWtaRHdMNHVLczlidUEyYTQxTmQrN0h2VURNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBEZDVYaFdyNnUra0hEL1F6MDV2OFlnaERTWHBNQmw1TVhESlNzcTRDMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktTOHZrRG1GWVR5Y3lQZTRtMmZvREhoK2JwWmF1VjZ5dnpMNDFXbU15RVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUdFem9abHgzZFdLOHdnZ0tIQlZiM1VnUEkyd0VkTmFscHh2VjBPak0zaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienV6bHpCRXhBSXJ5YW4zQVE5QlpGa0V3RW5QMEtFNnVCQnZrZjJrSTQyYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFMSlhxK0ltcUpEQzY2SHIyL3BBbEZLUUZJY3Zna0p6NzllVHVqTThjK0E2QmdSdTcwREJ4K1Y3SDg1N1FEODhTK2lmK0NuQlA2aFkzZ3FxWG9kM2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IjF2TnFaRElCNXZDQU9wbzdnU1p0alRCVmVEREFKS2JGRldUOUhYbC9aVVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2MzAwOTIxNTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDc4OEJFRTc0MjU1QUVDN0U1NjRGNEZEMzlDREFFMzAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMDU2OTA5M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidDMxUWNXQmtTaW1NVEladFZkRTVSUSIsInBob25lSWQiOiIxMWYyNTE0OC1lNmYyLTRlNWUtYTRmNi05OTdhZWYzN2IwMGMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2ZFM1FBdHhSYks2dWF6T3dCWk45R3BaTUVJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilh0Yzd4ZkJRemxPMG9YVHlUckpkYlhPSWtkQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJRWkVXOUxBUCIsIm1lIjp7ImlkIjoiMjc2MzAwOTIxNTc6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSS9rLzljQkVQUEdtYmtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaEsyQVowR3AxTXhISEh6L2hMNG9VV1hHbjdhV2pFcFBhaDZsMzFacVFXQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRUtwSjVRVzRvclZUbTlpMkl3WFJZbGhYWTIwMzRXRElqK0kvZGJ1UEgwK05QU1U5VHh4YjUrZ1hoV2s5Mjl3UWZLUWlIeExqcFpEL2FEUmhYSVdDQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IlpIUUhsd3lsVXB2MjVZblIvSjlUdDNwUy9ZZmZQbUQycllvQ1E5SDZjNG9JQVh2eGFyaGk4VjNlZ1BWK1g4d0VNVWU4Zkprbjl6QnpXQVVNWjhQV2hnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2MzAwOTIxNTc6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZU3RnR2RCcWRUTVJ4eDgvNFMrS0ZGbHhwKzJsb3hLVDJvZXBkOVdha0ZnIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNTY5MDg4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlIdiJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "-",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`theCyleeBot❤️🧸™`",
  author: process.env.PACK_AUTHER || "Sir Cylee ❤️🧸",
  packname: process.env.PACK_NAME || "cylee thee poet ❤️🧸",
  botname: process.env.BOT_NAME || "theCyleeBot❤️🧸",
  ownername: process.env.OWNER_NAME || "🦇🅃🅆🄸🅉🅉🅈🦇",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
