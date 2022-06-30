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
		messageOptions: {
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
		aliases: [ "rule2", "cheating", "modified" ],
		messageOptions: {
			content: `Trainer, remember to follow the server rules. Thank you!`,
			embeds: [
				new MessageEmbed()
					.setTitle("Server Rule Reminder")
					.setDescription("Spoofing and modified versions of the game are **not allowed** here. This includes **any** type of discussion about it")
					.setColor(colors.chansey)
			],
		},
	},
	{
		name: "Trading",
		aliases: [ "trades" ],
		messageOptions: {
			content: `Trainer, remember to follow the server rules. Thank you!`,
			embeds: [
				new MessageEmbed()
					.setTitle("Trading in Pokémon GO")
					.setDescription("Trading can only be done in person within 100 metres of each other. Also keep in mind that IVs reroll, and that Pokémon can only be traded once. Mythical Pokémon cannot be traded, except for Meltan and Melmetal")
					.setColor(colors.joy)
			],
		},
	},
	{
		name: "Rule 4 - No Spam",
		aliases: [],
		messageOptions: {
			content: `Trainer, remember to follow the server rules. Thank you!`,
			embeds: [
				new MessageEmbed()
					.setTitle("Server Rule Reminder")
					.setDescription("Do not spam channels, and be sure to keep content relative to the channel you're in")
					.setColor(colors.chansey)
			],
		},
	},
]
