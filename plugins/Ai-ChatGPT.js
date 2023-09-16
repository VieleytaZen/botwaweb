import { axios } from 'axios'
  
 let handler = async (m, { text, usedPrefix, command }) => { 
     if(!text) return m.reply(`Masukkan teks yang mau ditanyakan ke OpenAI \nContoh: ${usedPrefix+command} Apa itu chat GPT?`) 
   const response = await axios.get( 
     `https://sh.xznsenpai.xyz/api/openai?text=${text}&apikey=Rippanteq`, 
     { 
       responseType: "json", 
     } 
   ); 
   const v = response.data
   m.reply(v.result)
 }; 
 handler.help = ["ai"]
 handler.tags = ["Ai"]
 handler.command = /^(ai)$/i
 handler.register = true

export default handler
