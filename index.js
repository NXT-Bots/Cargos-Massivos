const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMembers
    ]
});

const GUILD_ID = 'Id do servidor';
const ROLE_ID = 'Id do cargo que será adicionado';

client.once('ready', async () => {
    console.log(`Bot conectado como ${client.user.tag}!`);

    try {
        const guild = client.guilds.cache.get(GUILD_ID);
        if (!guild) {
            console.error('Servidor não encontrado!');
            return;
        }

        const role = guild.roles.cache.get(ROLE_ID);
        if (!role) {
            console.error('Cargo não encontrado!');
            return;
        }

        const members = await guild.members.fetch({ force: true });
        console.log(`Total de membros no servidor: ${members.size}`);

        let membersProcessed = 0;
        const delayBetweenRequests = 1000;

        members.forEach(async (member) => {
            try {
                await member.roles.add(role);
                membersProcessed++;
                console.log(`Cargo adicionado a ${member.user.username} (${membersProcessed}/${members.size})`);

                await new Promise(resolve => setTimeout(resolve, delayBetweenRequests));
            } catch (error) {
                console.error(`Erro ao adicionar cargo a ${member.user.username}:`, error);
            }
        });

        console.log(`Cargo ${role.name} adicionado a todos os membros com sucesso!`);
    } catch (error) {
        console.error('Erro ao processar membros:', error);
    }
});

client.login('Seu Token Aqui');