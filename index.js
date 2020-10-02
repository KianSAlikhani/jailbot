const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (message.author.id === '260163449517113346') {
        if (message.content.startsWith('!jb jail')) {
            const taggedUser = message.mentions.users.first();
            if (taggedUser) {
                message.reply(`${taggedUser.username} was JAILED.`);
            }
        }
        if (message.content.startsWith('!jb mute')) {
            const taggedUser = message.mentions.members.first();
            if (taggedUser) {
                taggedUser.voice.setMute(true);
                let timeoutTime = 1000;
                let timeoutParam = message.content.match(/-t [0-9]{1,2}/g);
                console.log(timeoutParam);
                if (timeoutParam) {
                    timeoutTime = timeoutParam[0].substr(timeoutParam[0].indexOf(' ')+1)*1000;
                }
                console.log(timeoutTime);
                setTimeout(() => {
                    taggedUser.voice.setMute(false);
                }, timeoutTime);
                message.reply(`${taggedUser.user.username} was MUTED.`);
            }
        }
    }
	// console.log(message.content);
});

client.login(process.env.CLIENT_TOKEN);