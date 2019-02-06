const Discord = require("discord.js");

var PREFIX = ":";

var bot = new Discord.Client();

bot.on("ready" , function() {
    bot.user.setGame("aider le staff à administrer.")
    console.log("Le bot s'est bien connecté");
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "invite":
        message.channel.send("test")
    }
});

bot.login("NTQyNzk0OTc2NTU2MzUxNDkx.DzzmnQ.Awseh3bM8djx2rUDvXIiPw6EM1I");
