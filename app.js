    const express = require('express');
    const path = require('path');
    const app = express();
    const PORT = 3000;

    // Chave de API "secreta" exposta no código (vulnerabilidade SAST)
    const SUPER_SECRET_API_KEY = "sk_live_123abc456def789ghi_exemplo";

    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));

    app.get('/', (req, res) => {
      // Pega o parâmetro 'nome' da URL e o reflete na página
      // sem nenhuma validação (vulnerabilidade de XSS para SAST e DAST)
      const nomeUsuario = req.query.nome || "Visitante";
      console.log(`Chave usada (não faça isso em produção): ${SUPER_SECRET_API_KEY}`);
      res.render('index', { nome: nomeUsuario });
    });

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
    
