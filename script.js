function abrirModalAssinatura() {
    document.getElementById('modalAssinatura').style.display = 'flex';
}

function fecharModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Assinatura Simples
function modalSimples() {
    fecharModal('modalAssinatura');
    document.getElementById('modalSimples').style.display = 'flex';
}
function assinarSimples() {
    fecharModal('modalSimples');
    // Exemplo fake para IP, hash, etc
    document.getElementById('simplesData').innerText = (new Date()).toLocaleString();
    document.getElementById('simplesIp').innerText = '189.56.112.123'; // Fake
    document.getElementById('simplesHash').innerText = 'a12c4f81c83744b988c4e1aab45d10c93f65d4b1e35783b01cc7cdefa88d2bce'; // Fake
    document.getElementById('simplesBrowser').innerText = navigator.userAgent;
    document.getElementById('modalSimplesSucesso').style.display = 'flex';
}

// ClickSign Simulada
function modalClickSign() {
    fecharModal('modalAssinatura');
    document.getElementById('modalClickSign').style.display = 'flex';
}
function assinarClickSign() {
    fecharModal('modalClickSign');
    document.getElementById('clickSignData').innerText = (new Date()).toLocaleString();
    document.getElementById('modalClickSignSucesso').style.display = 'flex';
}

// GovBr Simulada
function modalGovBr() {
    fecharModal('modalAssinatura');
    document.getElementById('modalGovBr').style.display = 'flex';
}
function assinarGovBr() {
    fecharModal('modalGovBr');
    document.getElementById('govBrData').innerText = (new Date()).toLocaleString();
    document.getElementById('modalGovBrSucesso').style.display = 'flex';
}

// Fecha modal ao clicar fora do conteúdo
window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(function(modal){
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Torna a mensagem de erro visível caso o PDF não carregue
document.querySelector('embed').addEventListener('error', function() {
    document.querySelector('.no-pdf').style.display = 'block';
});
