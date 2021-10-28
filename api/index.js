const exp = require("express");
const srv = exp();

const bodyParser = require("body-parser");
srv.use(bodyParser.urlencoded({ extended: false }));
srv.use(bodyParser.json());

const mysql = require("mysql2");
const banco = mysql.createPool({
  host: "localhost",
  database: "3j_210915",
  user: "root",
  password: "minas",
});

srv.get("/conectar", (req, res) => {
  banco.getConnection((erro, con) => {
    if (erro) {
      return res.status(500).send({
        mensagem: "Erro ao conectar",
        detalhes: erro,
      });
    }

    return res.status(200).send({
      mensagem: "Conectado com sucesso!",
    });
  });
});

srv.get("/veiculos", (req, res) => {
  const QUERY = `SELECT * FROM veiculos ORDER BY marca`;

  banco.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({
        Erro: "Não foi possível atender à solicitação",
      });
    }

    conn.query(QUERY, (error, resultado) => {
      conn.release();

      if (error) {
        return res.status(500).send({
          Erro: "Não foi possível atender à solicitação",
        });
      }

      return res.status(200).send({
        Dados: resultado,
      });
    });
  });
});

srv.get("/pormarca/:marca", (req, res) => {
  let marca = req.params.marca;
  const QUERY = `SELECT * FROM veiculos WHERE marca LIKE '%${marca}%' ORDER BY modelo`;

  banco.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({
        Erro: "Não foi possível atender à solicitação",
      });
    }

    conn.query(QUERY, (error, resultado) => {
      conn.release();

      if (error) {
        return res.status(500).send({
          Erro: "Não foi possível atender à solicitação",
        });
      }

      return res.status(200).send({
        Dados: resultado,
      });
    });
  });
});

srv.get("/porproprietario/:proprietario", (req, res) => {
  let proprietario = req.params.proprietario;
  const QUERY = `SELECT * FROM veiculos WHERE proprietario LIKE '%${proprietario}%'`;

  banco.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({
        Erro: "Não foi possível atender à solicitação",
      });
    }

    conn.query(QUERY, (error, resultado) => {
      conn.release();

      if (error) {
        return res.status(500).send({
          Erro: "Não foi possível atender à solicitação",
        });
      }

      return res.status(200).send({
        Dados: resultado,
      });
    });
  });
});

srv.get("/porpreco/:preco", (req, res) => {
  let preco = req.params.preco;
  const QUERY = `SELECT * FROM veiculos WHERE preco_venda >= '${preco}'`;

  banco.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({
        Erro: "Não foi possível atender à solicitação",
      });
    }

    conn.query(QUERY, (error, resultado) => {
      conn.release();

      if (error) {
        return res.status(500).send({
          Erro: "Não foi possível atender à solicitação",
        });
      }

      return res.status(200).send({
        Dados: resultado,
      });
    });
  });
});

srv.patch("/alterarporid/:id", (req, res, next) => {
  let id = req.params.id;
  let body = req.body;
  const QUERY = `UPDATE veiculos SET modelo = '${body.modelo}', marca = '${body.marca}', preco_venda = '${body.preco_venda}', proprietario = '${body.proprietario}' WHERE id = ${id}`;

  banco.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({
        messagem: "Erro no servidor ",
        detalhes: error,
      });
    }
    conn.query(QUERY, (error, resultado) => {
      conn.release();

      if (error) {
        return res.status(500).send({
          mensagem: `Erro ao atualizar o cadastro`,
        });
      }
      return res.status(200).send({
        mensagem: `Veiculo atualizado com sucesso`,
      });
    });
  });
});

srv.post("/cadveiculo", (req, res) => {
  const dados = req.body;
  const query = `INSERT INTO veiculos(marca, modelo, preco_venda, proprietario) VALUES ('${dados.marca}', '${dados.modelo}', ${dados.preco_venda}, '${dados.proprietario}')`;

  banco.getConnection((erro, con) => {
    if (erro) {
      return res.status(500).send({
        mensagem: "Erro na conexão",
        detalhes: erro,
      });
    }

    con.query(query, (erro, res) => {
      con.release();

      if (erro) {
        return res.status(500).send({
          mensagem: "Erro na query",
          detalhes: erro,
        });
      }

      return res.status(200).send({
        mensagem: "Veículo cadastrado com sucesso!",
      });
    });
  });
});

srv.listen(3000, () => {
  console.log("Servidor funcionando!");
});
