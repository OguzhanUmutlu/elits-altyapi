module.exports={
  durum: true,
  kategori: [["tr", "Yetkili"], ["en", "Moderator"]],
  ad: [["tr", "lang"], ["en", "lang"]],
  açıklama: [["tr", "Dili ayarlar."], ["en", "Sets language."]],
  kullanım: [["tr", "lang [ language ]"], ["en", "lang [ language ]"]],
  yetkiler: [["ADMINISTRATOR"], ["tr", ["Yönetici"]], ["en", ["Administrator"]]],
  diğerkullanımlar: [["tr", ["lang", "language"]], ["en", ["dil", "lang"]]],
  çalıştır: [
    ["en", function (client, m, args, params) {
      if(!args[0] || !client.diller.some(i=> i === args[0])) return m.channel.send("You need to enter new language!\nLanguages: " + client.diller.map(i=> "`"+i+"`").join(", "));
      client.db.set(`${m.guild.id}.dil`, args[0]);
      m.channel.send("Language set to " + args[0] + "!");
    }],
    ["tr", function (client, m, args, params) {
      if(!args[0] || !client.diller.some(i=> i === args[0])) return m.channel.send("Yeni dili yazmalısın!\nDiller: " + client.diller.map(i=> "`"+i+"`").join(", "));
      client.db.set(`${m.guild.id}.dil`, args[0]);
      m.channel.send("Dil " + args[0] + " olarak ayarlandı!");
    }]
  ]
}