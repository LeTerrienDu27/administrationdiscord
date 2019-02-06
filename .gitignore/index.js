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
        message.channel.send("",{
            embed: {
                color: f700ed,
                author: message.author.name,
                title: '',
                fields: [{
                    name: "Lien d'invitation",
                    value: "https://discord.gg/vCNMJ68",
                    inline: false
                }],
                footer: {
                    footer: "Partagez le lien à vos amis ;)"
                },
            }
        });
        break;
    }
});

bot.login("NTQyNzk0OTc2NTU2MzUxNDkx.Dzzq9A.YcQREx14bfllKfNYzzlyUyASw50");
