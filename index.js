const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const csv = require('csv-parser');

// Function to parse CSV
function parseCSV(filePath) {
    return new Promise((resolve, reject) => {
        const contacts = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                contacts.push({ name: row.name, phone: row.number });
            })
            .on('end', () => {
                console.log('CSV file successfully processed');
                resolve(contacts);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

// Function to initialize WhatsApp client
function initializeClient(contacts) {
    const client = new Client();

    client.on('ready', async () => {
        console.log('Client is ready!');

        for (const contact of contacts) {
            console.log(`Sending message to ${contact.name} at ${contact.phone}...`);
            const number = contact.phone.replace(/\D/g, '');
            const text = "Hey, " + contact.name;
            const chatId = number + "@c.us";

            await client.sendMessage(chatId, text);
        }
    });

    client.on('qr', qr => {
        qrcode.generate(qr, { small: true });
    });

    client.initialize();
}

// Main function to parse CSV and initialize client
async function main() {
    try {
        const contacts = await parseCSV('contacts.csv');
        console.log(`Contacts parsed: ${contacts.length}`);
        initializeClient(contacts);
    } catch (error) {
        console.error('Error:', error);
    }
}

main().then(() => console.log('Finished')).catch(console.error);
