const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("FORZEN-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEFHb25RMjVJL3BJWGx5cVV1ZmlDSk9uaDBXRFFZK21HYnFQT1BWbCtIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXh6Tm1vWGY3WnplaDkzOTByeXN3NGRyNlBpcFVKd1JWYzlkdllKanFtZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSUcxQjZnSll2NjlLdzhlZll5NU1RUWZraXJDazdtenN1RGZPbFhFdWxVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvVTFHOUZQdnNzU3dRT3ptQTNvZk1BK0pqRE1wT3o0UEJpOHMwdVNWZGxRPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldNMjQxbEkrM0s1NWxsOXBsTjlXSlRRR1pFT1M2OVA4clJzSGNYOVdER0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9vQXBpbGc0cklrQjZUVTBPVEc3dm5BSlh1UC9EeUxBVmNRTWtueHdZZzQ9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSkMwcHJrYjQ1ZGJBc3FQTE9zVUo4N1M1WmdMaGNzTjNLb0JodVpjallEVHRReUhRTzE4dGtNREZLNHpsbmFycEg1LzZqLzVMV3NaNjQ5WXBOOEZEQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjQ2LCJhZHZTZWNyZXRLZXkiOiJseFRmZHUyTjR5RGZmREpRK0dMQWtmUkF0d3pQSmJIcVA1UzNTZFJSNHNrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGcUp1RlZDbVJsU0ZuU2ozX29DT09BIiwicGhvbmVJZCI6Ijk4ODgyNzVhLTI5OGQtNDA3OC1iNDZjLWI3ZjA4YjViNjBmNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwcEQ2VjJ2Mm5EZWl0Z3FwZUFseTJMZTNYdkE9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV2WmRFR2Z0RDIvd2Y5R21QS1kzUUN6NUVxST0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pPZ3hQUUJFT083Z0xjR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZUMXBPSm9HN0orTVBMck9rQ0YvMTcyMko2UHMvVVNoSmo4RXkxQWdqa0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6InRqa1pndlh0cHZXYzFBVnV3eTRrUWlINTYvYTB5MHhPMVQzb21MeDQ3cWg5cDA5ejIyb0dCTFJ2ZmIxQ2FSRDJwZWtOcjJFK0tMeWtSVGtxUTdYakRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCcEZjaFc2MEN6U0ZOSDV0Y0xPeEJVMXhPZDJ5ZFhOeFBHdE9helBodlFuMWUrWStWMlloT1dKOS9xZThXcHdBVTRGL0lOUHdmRTlpZldQbTZyNE1DQT09In0sIm1lIjp7ImlkIjoiOTQ3MDQwMjAxNDY6MzBAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDQwMjAxNDY6MzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDA5YVRpYUJ1eWZqRHk2enBBaGY5ZTl0aWVqN1AxRW9TWS9CTXRRSUk1QSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTk2Mzc1MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLNEwifQ==")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/yasiyaofc1/FORZEN-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94704020146'
global.devs = '94704020146';
global.website = 'https://github.com/yasiyaofc1/FORZEN-MD' //94704020146
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/0b5a7839e8ee21874921e.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'FORZEN MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'NIKO OFC' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'NIKO OFC' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'FORZEN MD' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '112' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'FORZEN-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
