const express= require('express')
const nunjucks= require('nunjucks')

const server= express()
const videos= require("./data")

server.use(express.static('public'))

server.set("view engine","njk")

nunjucks.configure("views", {
  express:server,
  autoescape:false
})

server.get("/", function(req,res){
  const about = {
    avatar_url:"https://avatars3.githubusercontent.com/u/64164769?s=460&u=798bde4b85385f36abeb22960a0793baec79f088&v=4",
    name:"Tarcia Portela",
    role:"Rocketseat Student",
    description:'Aiming to be a Full Stack Developer. Focused on learning the best practices to deliver the best service to my future clients! Currently, I am sharpening my skills with <a href="https://rocketseat.com.br/launchbase" target="_blank">Rocketseat LaunchBase Bootcamp</a>.',
    links: [
      {name:"Github", url:"https://github.com/prodevengineer"},
      {name:"LinkedIn", url:"https://www.linkedin.com/in/tarciaportela/"}
    ]
  }
  return res.render("about",{about})
})
 
server.get("/portfolio", function(req,res){
  return res.render("portfolio",{items: videos})
})

server.listen(5000, function() {
  console.log("server is exciting")
})
