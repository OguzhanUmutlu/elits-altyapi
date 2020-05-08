module.exports.run = async client => {
  client.user.setPresence({
    activity: {
      name: client.config.oynuyor.ad,
      type: client.config.oynuyor.tür
    },
    status: client.config.status
  });
};