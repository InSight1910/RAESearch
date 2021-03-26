const Discord = require("discord.js");
const rae = require("rae.js");
const config = require("../config");

const dsClient = new Discord.Client();

dsClient.on("ready", () => {
	console.log("ready");
});

dsClient.on("message", async (msg) => {
	if (msg.channel.name === "rae" && msg.content.includes(config.prefix)) {
		const word = msg.content.split("!rae ")[1];
		const search = await rae.search(word);

		search[0].definition[0].definition.forEach((item) => {
			msg.channel.send(item);
		});
	}
});

dsClient.login(config.token);
