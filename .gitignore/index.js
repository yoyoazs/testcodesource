const Discord = required('discord.js');

var bot  = new Discord.Client();

bot.on('ready', function(){
    bot.user.setGame("TEST CODE SOURCE, !help");
    console.log('Le bot a bien été connecté');
});

bot.login("Mzg1MTUwNzc1NTM5NjYyODQ4.DP9LrA.Td5AdLUh_2j2An-lMeKsrKeeNZY");
