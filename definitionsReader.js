const fs = require('fs').promises;
const path = require('path');

const defs = 'reqResDefinitions.json';

async function read() {

    const filePath = path.join(__dirname, defs);

    try {
        const data = await fs.readFile(filePath, 'utf8');
        const definitions = JSON.parse(data);
        console.log('Done reading request-response definitions file!\n');
        return definitions;
    } catch (err) {
        console.error('Error reading or parsing request-response definitions file:', err);
        return null;
    }

}

module.exports = { read };
