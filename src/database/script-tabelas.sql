create database projeto_individual;
use projeto_individual;

create table votos_bando_luffy (
	id_luffy INT PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50)
);

create table votos_bando_newgate (
	id_newgate INT PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50)
);

create table votos_bando_roger (
	id_roger INT PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50)
);

create table usuarios (
	id_usuario int primary key auto_increment,
	email varchar(50),
	nome varchar(50),
	telefone varchar(50),
	senha varchar(50),
    fk_luffy int,
    foreign key (fk_luffy) references votos_bando_luffy(id_luffy),
    fk_newgate int,
    foreign key (fk_newgate) references votos_bando_newgate(id_newgate),
    fk_roger int,
    foreign key (fk_roger) references votos_bando_roger(id_newgate)
);