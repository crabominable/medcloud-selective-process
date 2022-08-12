-- Utilizar como referência para migrations e seeds

-- 'medcloud-selective-process-test' para produção
-- 'medcloud-selective-process-test-dev' para desenvolvimento
-- 'medcloud-selective-process-test-test' para o avaliador
DROP DATABASE IF EXISTS `medcloud-selective-process-test`;
CREATE DATABASE IF NOT EXISTS `medcloud-selective-process-test`;

USE `medcloud-selective-process-test`;

CREATE TABLE IF NOT EXISTS patients (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  birthDate VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  streetName VARCHAR(100) NOT NULL,
  number INT NOT NULL,
  city VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO patients (id, name, birthDate, email, streetName, number, city) VALUES
  (1, 'Lucas Pinheiro', '29/04/2001', 'lucas@email.com', 'Rua arco-íris', 99, 'Mushroom Kingdom');
