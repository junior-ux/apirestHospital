const  Paciente  =  require('../models/paciente')

module.exports  =   {    
    async  criarPaciente (req, res)  {       
        const  { nome,  email }  =  req.body; 
        const  paciente  =  await  Paciente.create({ nome,  email });

                
        return  res.json(paciente)    
    },

    async  listarPaciente(req, res) {         const  paciente  =  await  Paciente.findAll();         return  res.json(paciente);     }    
};