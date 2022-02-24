import urlServer from '../utils/var.js';
import userApi from '../api/user.js';
function login() {
    const mensagem = document.getElementById('mensagem');
    const formLogin = document.getElementById('formLogin');
    formLogin.addEventListener('submit', async (event) => {
        event.preventDefault();
        var usuario = event.currentTarget.usuario.value;
        var senha = event.currentTarget.senha.value;
        let verificacaoUsuario = await verifyUser(usuario, senha);
        if(verificacaoUsuario){
            mensagem.innerText = ('Credênciais Corretas');
            setTimeout(()=>{
                mensagem.innerText = ('');
            },3000)
        }else{
            mensagem.innerText = ('Credênciais Incorretas');
            setTimeout(()=>{
                mensagem.innerText = ('');
            },3000)
        }
    })
};

function verifyUser(usuario, senha) {
    console.log(senha);
    var user = null;
    userApi.forEach(item => {
        console.log(item.usuario);
        if (item.usuario == usuario) {
            console.log('entrou');
            user = item;
        }

    });
    if (user) {
        document.getElementById("profileImage").src = user.img.url || urlServer + 'assets/img/users/quem.jpg'
        if (user.senha == senha) {
            return true
        } else {
            return false
        }
    } else {
        document.getElementById("profileImage").src =  urlServer + 'assets/img/users/quem.jpg'
        return false
    }
}

login();