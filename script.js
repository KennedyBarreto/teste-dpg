const shortBtn = document.getElementById('short-btn'); // identificação do botão de encurtar
const reloadBtn = document.getElementById('reload-btn');// identificação do botão de recarregar

// captura o envio ao ser apertado o botão de encurtar
shortBtn.addEventListener('click', shortenUrl); 

function shortenUrl() {
    // armazena o valor da URL original
    var originalUrl = document.getElementById("originalUrl").value; 
    // envia o valor da URL original para a API para o processamento e armazena o resultado
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl); 
    // identificação da area de texto onde o link final será exibido
    shortenedUrlTextarea = document.getElementById("shortenedUrl");
    // exibe a url armazenada na area de texto
    fetch(apiUrl).then(response => response.text()).then(data => {
        shortenedUrlTextarea.value = data;
    }).catch(error => {
        // caso o valor enviado nao seja uma url valida retorna erro
        shortenedUrlTextarea.value = "Error : Unable to shorten URL!";
    });

}
// adiciona a ação de recarregar a página ao clicar no botão
reloadBtn.addEventListener('click', () => {
    location.reload();
});
