const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js")

const colors = {
	chansey: 12872892,
	jenny: 31655,
	joy: 16067440,
	rotom: 15752468,
}

module.exports = [
	// EXAMPLE
	// Copy and fill the below example to add a new tag
	/*
	{
		name: "Rule 2 - Spoofing", // tag name
		aliases: [ "rule2", "cheating", "modified" ], // other words that can be searched for. words already contained in the name are redundant
		message: {
			content: `Trainer, remember to follow the server rules. Thank you!`, // message content
			embeds: [ // message embeds
				new MessageEmbed()
					.setTitle("Server Rule Reminder")
					.setDescription("Spoofing and modified versions of the game are **not allowed** here. This includes **any** type of discussion about it")
					.setColor(colors.chansey),
			],
			components: [ // components can also be added
				new MessageActionRow()
					.addComponents([
						new MessageButton() // up to 5 buttons can be added to this array
							.setStyle("LINK")
							.setLabel("Press Me")
							.setURL("https://discord.com/channels/200837505145110528/911646228507426816"),
					])
			]
		},
	},
	*/
	{
		name: "Rule 2 - Spoofing",
		aliases: [ "cheating" ],
		message: {
			content: `Trainer, remember to follow the server rules. Thank you!`,
			embeds: [
				new MessageEmbed()
					.setTitle("Server Rule Reminder")
					.setDescription("Spoofing and modified versions of the game are **not allowed** here. This includes **any** type of discussion about it")
			],
		},
	},
]
