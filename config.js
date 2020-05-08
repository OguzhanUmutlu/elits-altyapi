module.exports = async (client) => {
  let config = {
  prefix: "!",
  dil: "tr",
  klasör: "komutlar/",
  renk: "#36393F",
  dilayarları: [["tr", {
    yetkisizmesaj: "Bu komudu komudu kullanmak için `{yetki}` yetkisine ihtiyacın var!",
    komutkapalımesaj: "Bu komut bot sahibi tarafından devre dışı bırakılmıştır.",
    yazımhatası: "{komut} diye bir komut yok!"
  }], ["en", {
    yetkisizmesaj: "You need `{yetki}` permission for using this command",
    komutkapalımesaj: "This command is banned by bot owner.",
    yazımhatası: "No command called {komut}!"
  }]],
  oynuyor: {
    ad: client.guilds.cache.size + " sunucuya hizmet veriyor.",
    tür: "PLAYING"
  },
  status: "idle",
  yetkili: {
    sahipID: "460154149040947211",
    geliştiricilerID: [],
    destekekibiID: []
  },
  desteksunucusu: "",
  site: "",
  dblToken: ""
}

return config;
}