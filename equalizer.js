const Discord = require('discord.js');

const Auth = require('./auth');

const client = new Discord.Client();

client.on("ready", () =>
		{
			console.log("ready");
		}
	 );

client.on("message", message =>
		{
			if (message.content.substring(0,1) == '!')
			{
				var command = message.content.split(" ");

				command[0] = command[0].substring(1);

				switch(command[0])
				{
					case 'ping':
						message.channel.sendMessage("Pong!");
						break;

					case 'test':
						message.channel.sendMessage("Test received!");
						break;

					default:
						message.channel.sendMessage("You just tried to run the " + command[0] + " command, didn't you?");
				}
			}
		}
	 );

client.login(Auth.key);
