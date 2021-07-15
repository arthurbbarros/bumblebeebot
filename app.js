

const Discord = require('discord.js')
const bot = new Discord.Client()
const movies = require('./films.js')
const movieController = require("./movieController")

//bot.on('message', receiveMessage)

const receiveMessage = async (mensagem) => {
    const {author,content, channel} = mensagem
    if(mensagem.author.bot == false){
        const msg = new Discord.MessageEmbed()
        switch(content){
            case "Olá":
                msg.setDescription(`
                Olá ${author}, tas afim de descobir qual a melhor sequência pra assistir Star Wars? 
                Então é so digitar !comandos e escolher o que você mais precisa saber para começar. `)
                msg.setColor()
                channel.send(msg)
                break
                case "!comandos":
                msg.setDescription(`
                Digite !todos para receber a lista completa dos filmes,
                para ver só a Trilogia Clássica, digite: !classica,
                para a Trilogia Prequel, digite: !prequel,
                para ver os Spin-Offs, digite: !spinoff,
                e para ver os filmes da Nova Trilogia, digite: !nova`)
                msg.setColor('#f7d2ec')
                channel.send(msg)
                break
                case "!todos":
                movieController.showAllMovies(channel)
                break
            case "!classica":
                console.log(channel)
                movieController.filterAndMapById(channel, 1)
                break
            case "!prequel":
                console.log(channel)
                movieController.filterAndMapById(channel, 2)
                break
            case "!spinoff":
                console.log(channel)
                movieController.filterAndMapById(channel, 3)
                break
            case "!nova":
                console.log(channel)
                movieController.filterAndMapById(channel, 4)
                break

                
        
       
       
       /* if(mensagem.content == 'Qual melhor forma de entender a franquia de Star Wars?'){
           films.map((movie) => {
        
               
                msg.setTitle(movie.nome)
                msg.setFooter(movie.secao)
                msg.setColor("#bb22e6")
                msg.setThumbnail("https://i.pinimg.com/originals/4f/71/49/4f7149757a746c4464c97314d1a41cd1.png")
                msg.setImage(movie.imagem)
                msg.setDescription('Ano de Lançamento: '+ (movie.ano))
                    
                
                
                mensagem.channel.send(msg)
            })
        } else mensagem.channel.send(`Esta é uma mensagem automática`)*/
    }
}
}
bot.on('message', receiveMessage)

bot.login('ODY0NjczODYwNTczMzMxNDc5.YO44SQ.jCh7InxBtHp5OWVwLmywliBOZS8')


