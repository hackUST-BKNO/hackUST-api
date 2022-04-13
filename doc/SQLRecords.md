create database bkno;

CREATE TABLE Tags (TID serial PRIMARY KEY, Name varchar(255) NOT NULL);

insert into Tags(name) values ('management');
insert into Tags(name) values ('new-job');
insert into Tags(name) values ('leadership');
insert into Tags(name) values ('negotiation');

CREATE TABLE Users (
    UID serial PRIMARY KEY,
    Name varchar(255) NOT NULL,
    Password varchar(255) NOT NULL,
    position int NOT NULL
);

insert into Users(name, password, position) values ('Alice', 'ilovecats', 0);
insert into Users(name, password, position) values ('Bob', 'ilovedogs', 0);
insert into Users(name, password, position) values ('Cindy', 'ilovehammy', 0);
insert into Users(name, password, position) values ('Cindy', 'ilovehammy', 0);
insert into Users(name, password, position) values ('Alex', 'pain', 1);