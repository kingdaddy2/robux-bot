const {MessageEmbed} = require("discord.js")
module.exports.run = async(message, args, client) => {
  var prefix = client.prefix;var cmd = "robux";
  var embed = new MessageEmbed()
  .setColor(message.guild.me.displayColor)
  .setDescription(`**قائـمة الـمساعـدة
  -
  لحساب الضريبة:
  \`${prefix}r tax\`
  -
  لشراء الروبكس:
  \`${prefix}r buy\`
  -
  لإلغاء عملية الشراء:
  \`${prefix}r endbuy\`
  -
  للشراء توجه إلى <#871832686073876571>**`)
  .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
  .setFooter(message.guild.name, message.guild.iconURL({dynamic: true, size: 512}))
  message.channel.send(embed);
}

module.exports.help = {
  name: "help"
}