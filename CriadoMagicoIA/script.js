 let whebhook = "https://devdiiegol.app.n8n.cloud/webhook/animacao-css"

    async function cliqueiNoBotao() {
        let textoInput = document.querySelector(".input-animacao").value
        let codigo = document.querySelector(".area-codigo")
        let areaResultado = document.querySelector(".area-resultado")

        let resposta = await fetch(whebhook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ pergunta: textoInput })
        }) 

        let resultado = await resposta.json()

        let info =  JSON.parse(resultado.resposta)

        console.log(info)

        codigo.innerHTML = info.code
        areaResultado.innerHTML = info.preview

        document.head.insertAdjacentHTML('beforeend', "<style>"+ info.style +"</style>")
    }
