
const matriculados = require('../cadastroAluno/matriculados')

function mostraMatriculados(){
    return matriculados
}

function pesquisarPorNome(nome){
 if(!nome || typeof nome !== 'string')
    return []
    return matriculados.filter(n => typeof n.nome === 'string' && n.nome.toLowerCase().includes(nome.toLowerCase() ))
}

function mostreSexo(sexo){
    return matriculados.filter(s => s.sexo.toLowerCase() === sexo.toLowerCase())
    
}

module.exports = {mostraMatriculados, pesquisarPorNome, mostreSexo}