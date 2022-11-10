'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reviews.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        unique(value) {
          
          return reviews.findOne({where:{title:value}})
            .then((name) => {
              if (name) {
                throw new Error('Error hay mas de un Review asi');
              }
            })
        },
        notNull: {
          args:true,
          msg: "El title courses debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"title no debe estar vacio"
        },
      }
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          args:true,
          msg: "El campo text debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"text no debe estar vacio"
        },
      }
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate:{
        notNull: {
          args:true,
          msg: "El campo rating debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"rating no debe estar vacio"
        },
        isNumeric:{
          args:true,
          msg:"rating debe contener solo numeros"
        }
      }
    }, 
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          args:true,
          msg: "El user_id rating debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"user_id no debe estar vacio"
        },
        isNumeric:{
          args:true,
          msg:"user_id debe contener solo numeros"
        }
      }
    },
    bootcamp_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          args:true,
          msg: "El bootcamp_id debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"bootcamp_id no debe estar vacio"
        },
        isNumeric:{
          args:true,
          msg:"bootcamp_id debe contener solo numeros"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'reviews',
    timestamps: false
  });
  return reviews;
};