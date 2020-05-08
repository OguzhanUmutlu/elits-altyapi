module.exports={
  durum: true,
  kategori: [["tr", "Kullanıcı"], ["en", "General"]],
  ad: [["tr", "yardım"], ["en", "help"]],
  açıklama: [["tr", "Bir komut hakkında yardım eder."], ["en", "Helps about commands."]],
  kullanım: [["tr", "yardım [ komutAdı ]"], ["en", "help [ commandName ]"]],
  yetkiler: [[], ["tr", []], ["en", []]],
  diğerkullanımlar: [["tr", ["y"]], ["en", ["h"]]],
  çalıştır: [
    ["en", function (client, m, args, params) {
      if(!args[0]) {
        m.channel.send(new client.Discord.MessageEmbed()
                     .setAuthor(client.user.username + " Help Menu", client.user.avatarURL(), client.config.site)
                     .setDescription("If you don't understand some command use this command: `"+client.prefix+"help [ commandName ]`")
                     .addField("Komutlar:", client.kmts1.map(i=> "`"+i.ad.filter(i=> i[0] === client.dil)[0][1]+"`").join(", "))
                     .setFooter("Requested by " + m.author.tag, m.author.avatarURL())
                     .setThumbnail(client.user.avatarURL())
                     .setColor(client.config.renk)
                    )
      } else if(client.kmts1.some(i=> i.ad.filter(i=> i[0] === client.dil)[0][1] === args[0])) {
        let xx = client.kmts1.filter(i=> i.ad.filter(i=> i[0] === client.dil)[0][1] === args[0])[0]
        m.channel.send(new client.Discord.MessageEmbed()
                     .setAuthor(client.user.username + " Help Menu", client.user.avatarURL(), client.config.site)
                     .addField("Command Name", xx.ad.filter(i=> i[0] === client.dil)[0][1], true)
                     .addField("Command Description", xx.açıklama.filter(i=> i[0] === client.dil)[0][1], true)
                     .addField("Command Status", (xx.durum ? "On" : "Off"), true)
                     .addField("Command Usage", xx.kullanım.filter(i=> i[0] === client.dil)[0][1], true)
                     .addField("Command Aliases", xx.diğerkullanımlar.filter(i=> i[0] === client.dil)[0][1] === [] ? "None" : xx.diğerkullanımlar.filter(i=> i[0] === client.dil)[0][1].map(i=> "`"+i+"`").join(", "), true)
                     .addField("Required Permissions", xx.yetkiler.filter(i=> i[0] === client.dil)[0][1] === [] ? "None" : xx.yetkiler.filter(i=> i[0] === client.dil)[0][1].map(i=> "`"+i+"`").join(", "), true)
                     .setFooter("Requested by "+m.author.tag, m.author.avatarURL())
                     .setThumbnail(client.user.avatarURL())
                     .setColor(client.config.renk)
                    )
      } else return m.channel.send("**"+args[0]+"** command is not found.")
    }],
    ["tr", function (client, m, args, params) {
      if(!args[0]) {
        m.channel.send(new client.Discord.MessageEmbed()
                     .setAuthor(client.user.username + " Yardım Sekmesi", client.user.avatarURL(), client.config.site)
                     .setDescription("Herhangi bir komut hakkında bilgi almak için `"+client.prefix+"yardım [ komutAdı ]`")
                     .addField("Komutlar:", client.kmts1.map(i=> "`"+i.ad.filter(i=> i[0] === client.dil)[0][1]+"`").join(", "))
                     .setFooter(m.author.tag + " tarafından istendi.", m.author.avatarURL())
                     .setThumbnail(client.user.avatarURL())
                     .setColor(client.config.renk)
                    )
      } else if(client.kmts1.some(i=> i.ad.filter(i=> i[0] === client.dil)[0][1] === args[0])) {
        let xx = client.kmts1.filter(i=> i.ad.filter(i=> i[0] === client.dil)[0][1] === args[0])[0]
        m.channel.send(new client.Discord.MessageEmbed()
                     .setAuthor(client.user.username + " Yardım Sekmesi", client.user.avatarURL(), client.config.site)
                     .addField("Komut Adı", xx.ad.filter(i=> i[0] === client.dil)[0][1], true)
                     .addField("Komut Açıklaması", xx.açıklama.filter(i=> i[0] === client.dil)[0][1], true)
                     .addField("Komut Durumu", (xx.durum ? "Açık" : "Kapalı"), true)
                     .addField("Komut Kullanımı", xx.kullanım.filter(i=> i[0] === client.dil)[0][1], true)
                     .addField("Komut Alternatifleri", xx.diğerkullanımlar.filter(i=> i[0] === client.dil)[0][1] === [] ? "Yok" : xx.diğerkullanımlar.filter(i=> i[0] === client.dil)[0][1].map(i=> "`"+i+"`").join(", "), true)
                     .addField("Komut İçin Gereken Yetkiler", xx.yetkiler.filter(i=> i[0] === client.dil)[0][1] === [] ? "Yok" : xx.yetkiler.filter(i=> i[0] === client.dil)[0][1].map(i=> "`"+i+"`").join(", "), true)
                     .setFooter(m.author.tag + " tarafından istendi.", m.author.avatarURL())
                     .setThumbnail(client.user.avatarURL())
                     .setColor(client.config.renk)
                    )
      } else return m.channel.send("**"+args[0]+"** adlı komut bulunamadı.")
    }]
  ]
}