const database = require('./database.js');

const dataMapper = {

    getAllPokemon: function (callback) {
        const query = {
          text : `SELECT * FROM pokemon`
        };
        database.query(query, callback);
      },

    selectOnePokemon: function(id, callback) {
        const query2 = {
            text : `SELECT * 
            FROM pokemon
            JOIN pokemon_type ON pokemon.numero = pokemon_type.pokemon_numero
            join type ON pokemon_type.type_id = type.id 
            where pokemon.numero = $1`,
            values: [id]
          };

          
          
          database.query(query2, (error, One) => {
           //   console.log('One = ' , One);
              if (error) {
                  callback(error);
              } else {
                 // console.log('One = ', One.rows)
                  callback(null, One.rows);
              }
          });
    }



};


module.exports = dataMapper;