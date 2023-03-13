const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bark')
        .setDescription('the dog barks.'),
    async execute(interaction){
        await interaction.reply('roof..');
    },
};