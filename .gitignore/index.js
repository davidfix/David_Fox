const Discord = Require("discord.js");

var bot = new Discord.Client();

bot.on("ready" , function () {
    bot.user.setGame("Se faire dev par David");
    console.log("Le bot a bien été connecter");
});

bot.login("NTA4MzcyMTEzNDIyMjg2ODcz.Dr-UIQ.LYY68eRfkyKHJw0dH8mvrF18iJc")

