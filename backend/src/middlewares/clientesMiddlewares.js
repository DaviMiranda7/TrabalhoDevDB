const validaNome = (req, res, next) => {
    const { body  } = req; 
    
    if( body.nome == undefined ) {
        return res.status(400).json({ error: 'Name is required' }); 
    }
    if( body.nome == "" ) {
        return res.status(400).json({ error: 'Name cannot be empty' }); 
    }

    next();
};

const validaSobrenome = (req, res, next) => {
    const { body } = req;

    if(body.sobrenome == undefined) {
        return res.status(400).json({ error: 'Sobrenome is required' });
    }
    if(body.sobrenome == "") {
        return res.status(400).json({ error: 'Sobrenome cannot be empty' });
    }

    next();
};

const validaEmail = (req, res, next) => {
    const { body } = req;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if(body.email == undefined) {
        return res.status(400).json({ error: 'Email is required' });
    }
    if(!emailRegex.test(body.email)) {
        return res.status(400).json({ error: 'Invalid email' });
    }

    next();
};

const validaIdade = (req, res, next) => {
    const { body } = req;

    if(body.idade == undefined) {
        return res.status(400).json({ error: 'Idade is required' });
    }
    if(body.idade < 18 || body.idade > 100) {
        return res.status(400).json({ error: 'Idade must be between 18 and 100' });
    }

    next();
};





module.exports = {
    validaNome,
    validaSobrenome,
    validaEmail,
    validaIdade
};
