'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bootcamp.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        unique(value) {
          
          return Bootcamp.findOne({where:{name:value}})
            .then((name) => {
              if (name) {
                throw new Error('Error hay mas de un Bootcamp asi');
              }
            })
        },
        notNull: {
          args:true,
          msg: "El campo name debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"name no debe estar vacio"
        },
      }
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          args:true,
          msg: "El campo descrption debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"descrption no debe estar vacio"
        },
      }
    },
  
    website: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          args:true,
          msg: "El campo website debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"website no debe estar vacio"
        },
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          args:true,
          msg: "El campo phone debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"phone no debe estar vacio"
        },
      }
    },
    average_rating:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          args:true,
          msg: "El campo average_rating debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"average_rating no debe estar vacio"
        },
        isNumeric:{
          args:true,
          msg:"average_rating debe contener solo numeros"
        }
      }
    }, 
    average_cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          args:true,
          msg: "El campo average_cost debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"average_cost no debe estar vacio"
        },
        isNumeric:{
          args:true,
          msg:"average_cost debe contener solo numeros"
        }
      }
    }, 
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          args:true,
          msg: "El campo user_id debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"user_id no debe estar vacio"
        },
        isNumeric:{
          args:true,
          msg:"average_cost debe contener solo numeros"
        }
      }
    }, 
  }, {
    sequelize,
    modelName: 'Bootcamp',
    timestamps: false
  });
  return Bootcamp;
};