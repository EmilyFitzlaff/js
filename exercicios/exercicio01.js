const usuarios = new Map();

usuarios.set('Emily', 'Administrador');
usuarios.set('Everton', 'Usuário');
usuarios.set('Julia', 'Usuário');

function getAdm(map) {
    for([key, value] of map) {
        if(value === 'Administrador') {
            adm.push(key);
        }
    }

    return (adm);
}

console.log(getAdm(usuarios));