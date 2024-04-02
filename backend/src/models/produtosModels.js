const connection = require("./connection");


const getAll = async () => {
    const [produtos] = await connection.execute('SELECT * FROM produtos');

    return produtos;
};


const createProduto = async (produto) => {
    
    const { nome, descricao, preco } = produto;

    const dateUTC = new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' ');

    const query = 'INSERT INTO produtos (nome, descricao, preco, data_atualizada) VALUES (?, ?, ?, ?)';

    const createdProduto = await connection.execute(query, [nome, descricao, preco, dateUTC]);

    return [createdProduto];
};

const deleteProduto = async (id) => {
    const removedProduto = await connection.execute('DELETE FROM produtos WHERE id = ?', [id]);

    return removedProduto;
};

const updateProduto = async (id, produto) => {
    const { nome, descricao, preco } = produto;

    const dateUTC = new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' ');

    const query = 'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, data_atualizada = ? WHERE id = ?';

    const updatedProduto = await connection.execute(query, [nome, descricao, preco, dateUTC, id]);

    return updatedProduto;
};

module.exports = {
    getAll,
    createProduto,
    deleteProduto,
    updateProduto
};

