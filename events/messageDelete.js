module.exports = async (client, message) => {
  const settings = message.settings = client.getGuildSettings(message.guild);
  const logChannel = message.guild.channels.find('name', "logs");
  //if(!logChannel) return;

  if(message.channel.id == logChannel.id) return;

  if (message.content.indexOf(settings.prefix) == 0) return;
  var ignore = false;
  const prefixes2Ignore = settings.prefixes2Ignore.split(',');
  for (let i = 0; i < prefixes2Ignore.length; i++) {
    if (message.content.indexOf(prefixes2Ignore[i]) == 0)
      ignore = true;
  }
  if(ignore) return;
 try {
  content = `Un message de <${message.author.username}> dans le channel <${message.channel.name}> a été supprimé.\n> ${message.cleanContent}`;
  logChannel.send(content, {
      code: "markdown",
      split: true
    });
 } catch (err) {console.log(err)}
}



// 437560047686516736
