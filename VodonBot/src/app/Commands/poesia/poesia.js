let isUpdating = {}
module.exports = {
    name: "poesia",
    aliases: ["poesia"],
    description: "Generar aleatoriamente una poesia",
    run: async (client, message, args) => {

        message.channel.send('Hola')

    
        let palabras = []
        let exit = false
        isUpdating[message.guild.id] = true;

        while (!exit) {

            answer = await message.channel.awaitMessages((m => m.author.id === message.author.id), {
                max: 1,
                time: 120000,
                errors: ['time']
            }).catch(function () {
                delete isUpdating[question.guild.id]
                question.delete({timeout: 1000})
                message.channel.send(emojis.clock + " Time's up! Please run the Commands again!").then(m => m.delete({timeout: 10000}))
            });

            console.log(answer)

        }

        

    }
}