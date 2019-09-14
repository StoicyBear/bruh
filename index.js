const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjIxODYxODg2Nzc3ODg0Njc3.XXrp_g.E0pI2Suyy_jB7W1JrLdBAogQH9I'

bot.on ('ready', () =>{
    console.log('this bot is online')
})

bot.on('message', msg=>{
    if(msg.content ===  "?bruh"){
        msg.reply('bruh moment');
    }
})

bot.on('message', msg=>{
    if(msg.content ===  "?bmoment"){
        msg.reply('https://giphy.com/gifs/VIOkcgpsnA2Zy')
    }

})

bot.on('message', message => {
    if(message.content ===  ("?ping")) {
            message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");        
    }
})

bot.login(process.env.token);
