create database projeto_individual;
use projeto_individual;

create table votos_bando_luffy (
	id_luffy INT PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50)
);

create table votos_bando_newgate (
	id_newgate INT PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50)
) auto_increment = 11;

create table votos_bando_roger (
	id_roger INT PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50)
) auto_increment = 18;

create table usuarios (
	id_usuario int primary key auto_increment,
	email varchar(50),
	nome varchar(50),
	telefone varchar(50),
	senha varchar(50),
    fk_voto1 int,
    foreign key (fk_voto1) references votos_bando_luffy(id_luffy),
    fk_voto2 int,
    foreign key (fk_voto2) references votos_bando_newgate(id_newgate),
    fk_voto3 int,
    foreign key (fk_voto3) references votos_bando_roger(id_roger)
);