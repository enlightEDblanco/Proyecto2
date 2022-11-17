module.exports = {
    name: "poesia",
    aliases: ["poesia"],
    description: "Generar aleatoriamente una poesia",
    run: async (client, message, args) => {
        
        let embed = new Discord.MessageEmbed() //Creamos otro embed
                .setColor('black')
                .setTimestamp()
                .setTitle("Poesia")
                .setDescription('Aqui Poesia')
        message.channel.send(embed)

    }
}