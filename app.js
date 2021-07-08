

const Discord = require('discord.js')
const bot = new Discord.Client()
const films = require('./films.js')

bot.on('message', receiveMessage)

function receiveMessage(mensagem){
    if(mensagem.author.bot == false){
        if(mensagem.content == 'Qual melhor forma de entender a franquia de Star Wars?'){
           films.map((movie) => {
        
                const msg = new Discord.MessageEmbed()
                msg.setTitle(movie.nome)
                msg.setFooter(movie.secao)
                msg.setColor("#bb22e6")
                msg.setThumbnail("https://i.pinimg.com/originals/4f/71/49/4f7149757a746c4464c97314d1a41cd1.png")
                msg.setImage(movie.imagem)
                msg.setDescription(movie.ano)
                    
                
                
                mensagem.channel.send(msg)
            })
        } else mensagem.channel.send(`Esta é uma mensagem automática`)
    }
}



bot.login('ODYyMTEzMDk3Njk4NTA4ODAx.YOTnYw.oeGGHLZC_lqFVLcwQK1G6UNlyro')


