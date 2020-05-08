const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.send("Bot açık!");
});

app.listen(3000);

const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
client.Discord=Discord;
client.db=db;

client.on("message", async m => {
  client.config = await require("/app/config.js")(client);
  require("/app/event/message.js").run(m);
});
client.on("ready", async () => {
  client.config = await require("/app/config.js")(client);
  require("/app/event/ready.js").run(client);
});

client.login(require("/app/token.js"));
