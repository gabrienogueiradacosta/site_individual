var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.get("/pegar_voto", function (req, res) {
    usuarioController.pegar_voto(req, res);
});
router.get("/pegar_voto2", function (req, res) {
    usuarioController.pegar_voto2(req, res);
});
router.get("/pegar_voto3", function (req, res) {
    usuarioController.pegar_voto3(req, res);
});
router.post("/votos_grafico", function (req, res) {
    usuarioController.votos_grafico(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/cadastrar_voto", function (req, res) {
    usuarioController.cadastrar_voto(req, res);
});
router.post("/cadastrar_voto2", function (req, res) {
    usuarioController.cadastrar_voto2(req, res);
});
router.post("/cadastrar_voto3", function (req, res) {
    usuarioController.cadastrar_voto3(req, res);
});


module.exports = router;