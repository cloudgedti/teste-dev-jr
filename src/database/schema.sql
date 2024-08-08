create database cloudged;

create extension if not exists "uuid-ossp"; 


create table users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nomeCompleto VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
)
