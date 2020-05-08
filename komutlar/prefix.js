module.exports={
  durum: true,
  kategori: [["tr", "Yetkili"], ["en", "Moderator"]],
  ad: [["tr", "prefix"], ["en", "prefix"]],
  açıklama: [["tr", "Ön eki ayarlar."], ["en", "Sets prefix."]],
  kullanım: [["tr", "prefix [ prefix ]"], ["en", "prefix [ prefix ]"]],
  yetkiler: [["ADMINISTRATOR"], ["tr", ["Yönetici"]], ["en", ["Administrator"]]],
  diğerkullanımlar: [["tr", ["önek"]], ["en", ["setprefix"]]],
  çalıştır: [
    ["en", function (client, m, args, params) {
      if(!args[0]) return m.channel.send("You need to enter new prefix!");
      client.db.set(`${m.guild.id}.prefix`, args[0]);
      m.channel.send("Prefix set to " + args[0] + " !\nExample: "+args[0]+"help");
    }],
    ["tr", function (client, m, args, params) {
      if(!args[0]) return m.channel.send("Yeni ön eki girmelisin!");
      client.db.set(`${m.guild.id}.prefix`, args[0]);
      m.channel.send("Ön ek " + args[0] + " olarak ayarlandı!\nÖrnek: "+args[0]+"yardım");
    }]
  ]
}