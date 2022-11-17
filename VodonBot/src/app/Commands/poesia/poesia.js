let inputWords;
let poema;
let poemaFinal;
let esPoema;
let vocabulario01 = ["el amor", "el odio", "el pepe", "el portaavion", "el pensamiento", "la religión", "un script", "42", "el dolor", "el pepe"];
let vocabulario02 = ["el coraje", "el maquinista", "el tren", "la soberbia", "los tíos"];
let vocabulario03 = ["un perro", "un gorila", "un pepe", "un chorizo", "una langosta", "un camión"];
let vocabulario04 = ["Francia", "mi casa", "una mandarina", "una piña", "un cacahuete", "Móstoles", "Italia", "el baño"];

function getDatosVogon(args) {

    var nombre = args[0]
    var ciudad = args[1]
    var objeto = args[2]

    if (!nombre || !ciudad || !objeto) {
        return "No vayas de listo\n ESCRIBE ALGO!!!!!!!";
    }

    var random01 = Math.floor(Math.random() * vocabulario01.length);
    var random02 = Math.floor(Math.random() * vocabulario02.length);
    var random03 = Math.floor(Math.random() * vocabulario03.length);
    var random04 = Math.floor(Math.random() * vocabulario04.length);

    poema = "¿Qué es " + vocabulario01[random01] + "? si no es lo que siento por ti, "
        + nombre + "ato\n¿Qué es " + vocabulario02[random02] + "? si no es lo que siento cuando estás lejos de "
        + ciudad + "ano\n¿Quién soy yo sin " + objeto + "amo?\nCuando " + vocabulario03[random03] + "se va algo se muere en " + vocabulario04[random04];
    
    return poema
}

function getDatosSpain(args) {
    var nombre = args[0]
    var ciudad = args[1]
    var objeto = args[2]

    if (!nombre || !ciudad || !objeto) {
        return "No vayas de listo\n ESCRIBE ALGO!!!!!!!";
    }

    var random01 = Math.floor(Math.random() * vocabulario01.length);
    var random02 = Math.floor(Math.random() * vocabulario02.length);
    var random03 = Math.floor(Math.random() * vocabulario03.length);
    var random04 = Math.floor(Math.random() * vocabulario04.length);

    poema = "¿Qué es " + vocabulario01[random01] + "? si no es lo que siento por ti, "
        + nombre + "\n¿Qué es " + vocabulario02[random02] + "? si no es lo que siento cuando estás lejos de "
        + ciudad + "\n¿Quién soy yo sin " + objeto + "?\nCuando " + vocabulario03[random03] + "se va algo se muere en " + vocabulario04[random04];

    return poema;

}


module.exports = {
    name: "poesia",
    aliases: ["poesia"],
    description: "Generar aleatoriamente una poesia",
    run: async (client, message, args) => {

        poema1 = getDatosVogon(args)
        poema2 = getDatosVogon(args)

        let embed1 = new Discord.MessageEmbed()
            .setColor(0x0099FF)
            .setTimestamp()
            .setTitle("Aqui tienes tu poesia en Vogon")
            .setDescription(poema1)

        let embed2 = new Discord.MessageEmbed()
        .setColor(0x0099FF)
        .setTimestamp()
        .setTitle("Aqui tienes tu poesia en Español")
        .setDescription(poema2)

        message.channel.send(embed1)
        message.channel.send(embed2)
        return

    }
}