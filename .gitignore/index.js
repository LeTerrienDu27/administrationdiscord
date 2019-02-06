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
        message.channel.send("", {
            embed: {
                color: 0xFF0000,
                author: message.author.name,
                title: '',
                fields: [{
                    name: "Lien d'invitation discord",
                    value: "https://discord.gg/CsH3kj",
                    inline: false
                }],
                footer: {
                    footer: "Partager ce lien à tous vos amis !",
                },
            }
        });
        break;
    }
});

let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!kUser) return message.channel.send("Can't find user!");
let kReason = args.join(" ").slice(22);
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

let kickEmbed = new Discord.RichEmbed()
.setDescription("~Kick~")
.setColor("#e56b00")
.addField("Kicked User", `${kUser} with ID ${kUser.id}`)
.addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
.addField("Kicked In", message.channel)
.addField("Tiime", message.createdAt)
.addField("Reason", kReason);

let kickChannel = message.guild.channels.find(`name`, "incidents");
if(!kickChannel) return message.channel.send("Can't find incidents channel.");

message.guild.member(kUser).kick(kReason);
kickChannel.send(kickEmbed);

return;
}


bot.login("NTQyNzk0OTc2NTU2MzUxNDkx.Dzz4ww.-YBDyBATuHm5RvfXpW5a10oplr0");
