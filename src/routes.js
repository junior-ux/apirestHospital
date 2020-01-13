const  express  =  require('express')
const  pacienteController  =  require('./controllers/pacienteControllers')

const  routes  =  express.Router();

routes.get('/',   (req, res)  => {    
    return  res.json({ hello:   "Olá" })
})

routes.post('/paciente',  pacienteController.criarPaciente);
routes.get('/paciente',  pacienteController.listarPaciente);

module.exports  =  routes;