create database projeto_individual;
use projeto_individual;

create table votos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50)
);

create table usuarios (
	id_usuario int primary key auto_increment,
	email varchar(50),
	nome varchar(50),
	telefone varchar(50),
	senha varchar(50),
    fk_voto int,
    foreign key (fk_voto) references usuarios(id_usuario)
);