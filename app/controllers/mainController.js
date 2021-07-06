const dataMapper = require('../dataMapper.js');
const {Pokemon, Type} = require('../models/');

const mainController = {

    homePage: async (req, res, next) => {
          try {

          const pokemons = await Pokemon.findAll({
            include : ['types']
          });
          res.render('accueil', {pokemons})

          } catch (err) {
            console.error(err)
          }
   
          
        },

    detailPokemon: async (req, res) => {

      const idPoke = Number(req.params.id);
     

        try {
          const onePokemon = await Pokemon.findByPk(idPoke, {
            include : ['types']
          });
          res.render('detail', {
            onePokemon
          })

        } catch (err) {
          console.error(err)
        }

        },

    type: async (req, res) => {
      

      try {
        const types = await Type.findAll({
          include : ['pokemons'],
          order: [
            ['name', 'ASC']
          ],
        });
        res.render('type', {
          types
        })

      } catch (err) {
        console.error(err)
      }

      },


    typeOf: async (req, res,) => {

      const typeId = req.params.id;

      console.log('Type = ', typeId);
      
      try {

        const typeOfPokemon = await Type.findByPk(typeId, {
          include: { 
            association: 'pokemons'
          },
        });

        res.render('typeOf', {typeOfPokemon})

      } catch(err) {
        console.error(err)
      }

    },  



    quiz : async (req, res) => {


      
      res.render('quiz')





    }




      

    
};

module.exports = mainController;

