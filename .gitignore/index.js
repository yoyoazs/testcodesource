const Discord = required('discord.js');

var bot  = new Discord.Client();

bot.on('ready', function(){
    bot.user.setGame("TEST CODE SOURCE, !help");
    console.log('Le bot a bien été connecté');
});

bot.login("Mzg0Mzc5MDE1NjA5MzE5NDI2.DP8ozw.7HWAHB3mDvRuR3hJIitKcxXm5_M");
