const fs = require("fs");
const Discord = require("discord.js");
const db = require("quick.db");
const chalk = require("chalk")

module.exports.run= async (m) => {
  let arg = m.content.split(" ");
  let args = arg.slice(1);
  let params = args.join(" ");
  let client = m.client;
  let prefix = m.channel.type !== "dm" ? (await db.fetch(`${m.guild.id}.prefix`)) || client.config.prefix : client.config.prefix;
  if(!m.content.startsWith(prefix)) {
    
    return;
  };
  
  let kmt = arg[0].split(prefix)[1];
  
  if(m.author.bot) {
    
    return;
  };
  
  if(m.channel.type === "dm") {
    
    return;
  };
  
  
  try {
  fs.readdirSync(client.config.klasör).filter(i=> i.endsWith(".js"));  
  } catch {
    console.error(chalk.red("HATA! config.js'teki 'klasör' değişkeninin "+client.config.klasör+" verisine ait olan klasör ya yok ya da boş."))
    return;
  }
  let kmts = fs.readdirSync(client.config.klasör).filter(i=> i.endsWith(".js"));
  
  let kmts1 = [];
  
  kmts.forEach(i=> {
    kmts1.push(require("/app/"+client.config.klasör+i))
  })
  
  let diller = kmts1[0].ad.map(i=> i[0]);
  
  let dil = (await db.fetch(`${m.guild.id}.dil`)) || client.config.dil;
  
  db.set(`${m.author.id}.arr.kat`, [])
  
  client.diller=diller;
  client.dil = dil;
  client.prefix = prefix;
  client.kmt = kmt;
  client.kmts=kmts;
  client.kmts1=kmts1;
  
  if(kmts1.filter(i=> i.ad.filter(a=> a[0] === dil)[0][1] === kmt)[0]) {
    let x = kmts1.filter(i=> i.ad.filter(a=> a[0] === dil)[0][1] === kmt)[0];
    client.kmtt=x;
    if(!x.durum && client.config.yetkili.sahipID !== m.author.id) return m.channel.send(client.config.dilayarları.filter(i=> i[0] === dil).komutkapalımesaj)
    if(x.yetkiler[0].some(i=> !m.member.hasPermission(i))) return m.channel.send(client.config.dilayarları.filter(i=> i[0] === dil).yetkisizmesaj.replace(/{yetki}/g, x.yetkiler.filter(i=> i[0] === dil)[0][1]));
    x.çalıştır.filter(i=> i[0] === dil)[0][1](client,m,args,params)
  } else if(kmts1.filter(i=> i.diğerkullanımlar.filter(a=> a[0] === dil)[0][1].some(b=> b === kmt))[0]) {
    let x =(kmts1.filter(i=> i.diğerkullanımlar.filter(a=> a[0] === dil)[0][1].some(b=> b === kmt))[0])
    client.kmtt=x;
    if(!x.durum && client.config.yetkili.sahipID !== m.author.id) return m.channel.send(client.config.dilayarları.filter(i=> i[0] === dil)[0][1].komutkapalımesaj)
    if(x.yetkiler[0].some(i=> !m.member.hasPermission(i))) return m.channel.send(client.config.dilayarları.filter(i=> i[0] === dil)[0][1].yetkisizmesaj.replace(/{yetki}/g, x.yetkiler.filter(i=> i[0] === dil)[0][1]));
    x.çalıştır.filter(i=> i[0] === dil)[0][1](client,m,args,params)
  } else {
    return m.channel.send(client.config.dilayarları.filter(i=> i[0] === dil)[0][1].yazımhatası.replace(/{komut}/g, kmt))
  }
  
}