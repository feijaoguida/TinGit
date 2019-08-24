const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){
        //Id do desenvolvedor que vai receber like - atravez da url
        const { devId }  = req.params;
        //id do usuario logado
        const { user }  = req.headers;

        //busca os usuarios no banco de dados
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        //verifica se o desenvolvedor existe
        if (!targetDev){
            return res.status(400).json({error: "Dev não existe"})
        }

        if (targetDev.likes.includes(loggedDev._id)){
            console.log("Deu match");
        }

        //salvar o id do usuario que recebeu o like no usuario logado
        //ou seja um update na tabela dev, para o usuario logado
        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();


        return res.json(loggedDev);
    }

}