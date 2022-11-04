import urlServer from '../utils/var.js';
import db from './database/banco.js'
console.log(db);

class User {
    
}

// Teste Commit
const user = [
    {   
        usuario:"leonardo",
        senha:"senha123",
        img:{
            imageName:"leonardo.png",
            url: urlServer + 'assets/img/users/leonardo.png'
        }
    },
    {   
        usuario:"pierle",
        senha:"senha1",
        img:{
            imageName:"pierle.jpeg",
            url: urlServer + 'assets/img/users/pierle.jpeg'
        }
    },
    {   
        usuario:"pedro",
        senha:"senha",
        img:{
            imageName:"pedro.jpeg",
            url: urlServer + 'assets/img/users/pedro.jpeg'
        }
    },
    {   
        usuario:"joao",
        senha:"senha",
        img:{
            imageName:"joao.jpg",
            url: urlServer + 'assets/img/users/joao.jpg'
        }
    },
]

export default user; 