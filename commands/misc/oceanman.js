module.exports = {
    run: async(client, message, args, owner) => {
        //send a funny message to the chanel
        message.channel.send('OCEAN MAN 🌊 😍 Take me by the hand ✋ lead me to the land that you understand 🙌 🌊 OCEAN MAN 🌊 😍 The voyage 🚲 to the corner of the 🌎 globe is a real trip 👌 🌊 OCEAN MAN 🌊 😍 The crust of a tan man 👳 imbibed by the sand 👍 Soaking up the 💦 thirst of the land 💯');
    },
    config: {
        name: 'oceanman',
        description: 'Meme command',
        usage: '!oceanman',
        category: 'misc',
        accessableby: 'Members',
        aliases: ['ocean']
    }
}