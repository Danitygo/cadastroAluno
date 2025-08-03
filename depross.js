
const matriculados = require('./matriculados')

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

function idadeEntre(){
    return matriculados.map(estudar =>{
        const turma = estudar.idade <= 20
        ? 'Turma G2 7º ano'
        :estudar.idade > 20 && estudar.idade <= 40
        ? 'Turma G3 7º ano'
        : 'Turma G4 7º ano'
        
        return{
            ...estudar,
            turma: turma
        }
    })
   
}

module.exports = {mostraMatriculados, pesquisarPorNome, mostreSexo, idadeEntre}