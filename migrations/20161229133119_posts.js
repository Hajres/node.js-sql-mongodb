
exports.up = function(knex, Promise) {
  return knex.raw(`CREATE TABLE posts (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  text varchar(11) DEFAULT NULL,
  user_id int(11) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;`)
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable("post")
};
