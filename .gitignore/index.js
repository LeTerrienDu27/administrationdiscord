const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready" , function() {
    bot.user.setGame("aider le staff à administrer.")
    console.log("Le bot s'est bien connecté");
});

bot.login("NTQyNzk0OTc2NTU2MzUxNDkx.Dzzaaw.KrbOUspOKC0Kh2SIsEJk1ElyDZ8");
