BEGIN;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id          SERIAL    PRIMARY KEY  NOT NULL,
  "firstName" TEXT      NOT NULL,
  "lastName"  TEXT      NOT NULL,
  age         SMALLINT  NOT NULL,
  type        TEXT      NOT NULL
);

INSERT INTO users ("firstName", "lastName", age, type) VALUES
  ('Matt', 'Glover', 25, 'worker'),
  ('Sam', 'Galson', 30, 'professor'),
  ('Matt', 'Sharp', 24, 'hipster'),
  ('Rich', 'Warren', 22, 'boss');

COMMIT;
