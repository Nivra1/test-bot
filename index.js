const Discord = require('discord.js'); //imports module into object called Discord
const client = new Discord.Client(); //initializes the client object

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    
});

//executes every time a message is posted to any channel
client.on('message', message => {

    message.channel.send('here');

});

client.login(process.env.BOT_TOKEN);
