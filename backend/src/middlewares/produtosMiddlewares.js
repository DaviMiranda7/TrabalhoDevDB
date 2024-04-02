const validadeBody = (req, res, next) => {
    const { body  } = req; 
    
    if( body.nome == undefined ) {
        return res.status(400).json({ error: 'Name is required' }); 
    }
    if( body.nome == "" ) {
        return res.status(400).json({ error: 'Name cannot be empty' }); 
    }

    next();
};


module.exports = {
    validadeBody
};