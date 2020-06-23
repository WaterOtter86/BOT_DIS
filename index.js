const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzA2NzkxMDI0MDUxMjI1MDY3.Xq_aMA.VavWNnvkMtj_mw3Fv39w7Cv8pYg'


bot.on('message', msg => {

   console.log('UDALO SIE To dziala!');
   console.info(`Logged in as ${bot.user.tag}!`);
  if (msg.content === '!zasady') {
    msg.reply('1.Brak Zasad11');
  }
});


bot.login(token);