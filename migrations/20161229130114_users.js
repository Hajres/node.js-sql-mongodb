
exports.up = function(knex, Promise) {
  return knex.raw(`CREATE TABLE users (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  email varchar(20) DEFAULT NULL,
  password varchar(100) NOT NULL DEFAULT '',
  first_name varchar(11) DEFAULT NULL,
  last_name varchar(11) DEFAULT NULL,
  is_admin int(11) unsigned DEFAULT NULL,
  oauth_provider varchar(50) DEFAULT NULL,
  oauth_id varchar(50) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;`)
};

exports.down = function(knex, Promise) {
	knex.schema.dropTable("users")
  
};
