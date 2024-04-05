const validaNome = (req, res, next) => {
  const { body } = req;

  if (body.nome == undefined) {
    return res.status(400).json({ error: 'Name is required' });
  }
  if (body.nome == '') {
    return res.status(400).json({ error: 'Name cannot be empty' });
  }

  next();
};

const validaDescricao = (req, res, next) => {
  const { body } = req;

  if (body.descricao == undefined) {
    return res.status(400).json({ error: 'Descrição is required' });
  }
  if (body.descricao == '') {
    return res.status(400).json({ error: 'Descrição cannot be empty' });
  }

  next();
};

const validaPreco = (req, res, next) => {
  const { body } = req;

  if (body.preco == undefined) {
    return res.status(400).json({ error: 'Preço is required' });
  }
  if (body.preco < 0) {
    return res.status(400).json({ error: 'Preço cannot be negative' });
  }

  next();
};




module.exports = {
  validaNome,
  validaDescricao,
  validaPreco
};
