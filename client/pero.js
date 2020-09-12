require("dotenv").config();
const Discord = require("discord.js");
const pero = new Discord.Client();
const token = process.env.TOKEN;

const api = 'https://quotes.rest';

let e = {
	day: '/qod',
	rand: '/quote/random',
	hot: '/quote/categories/popular'
}

let interval = 24;
let m_p = 'pero!';


module.exports = {
	pokreni: async () => {
		pero.login(process.env.TOKEN);		
	}
}