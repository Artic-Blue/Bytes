-- ---
-- Globals
-- ---
DROP DATABASE IF EXISTS bytes;
CREATE DATABASE bytes;
\c bytes;

-- ---
-- Table 'Overview'
--
-- ---

DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
  product_id INTEGER NOT NULL,
  product_name VARCHAR(255) NULL DEFAULT NULL,
  quantity VARCHAR(255) NULL DEFAULT NULL,
  categories TEXT NULL DEFAULT NULL,
  ingredients TEXT NULL DEFAULT NULL,
  serving_size VARCHAR(255) NULL DEFAULT NULL,
  image_url VARCHAR(255) NULL DEFAULT NULL,
  ingredients_url VARCHAR(255) NULL DEFAULT NULL,
  stock INTEGER NULL DEFAULT NULL,
  farmer_id INTEGER NULL DEFAULT NULL,
  instructions TEXT NULL DEFAULT NULL,
  price INTEGER NULL DEFAULT NULL,

  PRIMARY KEY (product_id)
);

DROP TABLE IF EXISTS cart CASCADE;

CREATE TABLE cart (
  cart_id SERIAL NOT NULL,
  "user_id" INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  cart_quantity INTEGER NOT NULL,

  PRIMARY KEY (cart_id),
  UNIQUE("user_id", product_id)
);

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  user_id SERIAL NOT NULL,
  first_name VARCHAR(255) NULL DEFAULT NULL,
  last_name VARCHAR(255) NULL DEFAULT NULL,
  email VARCHAR(255) NULL DEFAULT NULL,
  password VARCHAR(255) NULL DEFAULT NULL,

  PRIMARY KEY (user_id)
);

DROP TABLE IF EXISTS farmer CASCADE;

CREATE TABLE farmer (
  farmer_id INTEGER NOT NULL,
  farmer_name VARCHAR(255) NULL DEFAULT NULL,
  farmer_story TEXT NULL DEFAULT NULL,
  farmer_url VARCHAR(255) NULL DEFAULT NULL,
  logo_url VARCHAR(255) NULL DEFAULT NULL,

  PRIMARY KEY (farmer_id)
);

DROP TABLE IF EXISTS tracker CASCADE;

CREATE TABLE tracker (
  tracker_id SERIAL NOT NULL,
  "user_id" INTEGER NOT NULL,
  thought TEXT NULL DEFAULT NULL,
  feeling_id INTEGER NULL DEFAULT NULL,
  track_date DATE NULL DEFAULT NULL,
  PRIMARY KEY (tracker_id)
);

-- DROP TABLE IF EXISTS meals CASCADE;

-- CREATE TABLE meals (
--   meal_id INTEGER NOT NULL,
--   ingredients VARCHAR(255) NULL DEFAULT NULL,
--   meal_description TEXT NULL DEFAULT NULL,
--   meal_url VARCHAR(255) NULL DEFAULT NULL,
--   stock INTEGER NULL DEFAULT NULL,
--   categories VARCHAR(255) NULL DEFAULT NULL,
--   -- farmer_id INTEGER NULL DEFAULT NULL,

--   PRIMARY KEY (meal_id)
-- );

