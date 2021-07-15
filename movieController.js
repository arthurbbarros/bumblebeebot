const Discord = require('discord.js')
const movies = require('./films.js')
const showMovie = (channel, movie) => {
    
    const msg = new Discord.MessageEmbed()
   // const idColor = getColorById(movie.id)

        msg.setTitle(movie.nome)
        //msg.setURL(movie.trailer)
        msg.setDescription(movie.sinopse)
        msg.setColor("#07ad3c")
        msg.setThumbnail("https://i.pinimg.com/originals/4f/71/49/4f7149757a746c4464c97314d1a41cd1.png")
        msg.setImage(movie.imagem)
        msg.setFooter(`
        Ano de Lançamento: ${movie.ano}
        ${movie.secao}`)
        channel.send(msg)
}

function showAllMovies(channel){
    movies.map(movie => showMovie(channel, movie))  }

function filterAndMapById(channel, secao){
        let moviesFiltered = movies.filter(movie => movie.secao == secao)
        moviesFiltered.map(movie => showMovie(channel, movie)) } 

module.exports = {
    showMovie,
    showAllMovies,
    filterAndMapById
}