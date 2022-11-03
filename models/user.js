'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isAlpha:{
          args: true,
          msg:'Username debe tener letras'
        },
        notNull :{
            args: true,
            msg:'Username debe estar presente'
        },
        notEmpty:{
            args: true,
            msg: 'Username no debe estar vacío'
        },
        unique(value){
          return User.findOne({where:{username:value}})
          .then((username)=>{
            if(username){
              throw new Error('El usuario ya está insertado');
            }
          })
        }
      },
    },
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:{
        args:true,
        msg: "e-mail no valido"
      },
     },
    },
    password:{
      type: DataTypes.STRING,
      validate:{
        len:{
          args:[5,20],
          msg: "password no cumple con los requisitos mínimos (mínimo 5, máximo 10 caracteres)"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};