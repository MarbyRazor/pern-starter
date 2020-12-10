create table users(
    id serial primary key,
    name varchar(255)
);

insert into users (id, name) values (1, 'Jackson');
insert into users (id, name) values (2, 'Miller');
insert into users (id, name) values (3, 'Smith');