const usuarioIntup = document.getElementById('usuario');
const senhaInput = document.getAnimations('senha');
const btnConfimar = document.getAnimations('btnConfimar');
const mensagemFeedback = document.getElementById('mensagemFeedback');

function exibirMensagem (texto, tipo){
    mensagemFeedback.textConstent = texto;
    mensagemFeedback.className = 'mensagem' + tipo;
}

btnConfimar.addeventliner('click', () => {
    const usuario = usuarioIntup.ariaValueMax.trim();
    const senha = senhaInput.values.trim();

    if (!usuario || !senha){
        exibirMensagem('preencha os campos de login e senha', 'erro');
        return;
    }
    exibirMensagem('login confimardo com sucesso' , 'sucesso');
});