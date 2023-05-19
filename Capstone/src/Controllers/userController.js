const { Sequelize } = require('sequelize');
const { successCode, errorCode, failCode } = require('../ultis/respone');
const Op = Sequelize.Op;

const initModel = require('../Models/init-models');

const sequelize = require('../Models/index');
const models = initModel(sequelize);
const fs = require('fs');
const bcrypt = require('bcrypt');




const loginUser = async (req, res) => {

    let { email, mat_khau } = req.body;
    
    let checkUser = await models.nguoi_dung.findOne({
        where:{
            email,
        }
    })

    if (checkUser){
        let checkPass = bcrypt.compareSync(mat_khau,checkUser.mat_khau)
        if (checkPass == true){
            successCode(res,"login success","");
        } else {
            failCode(res,"password not found","")
        }
    } else {
        failCode(res,"email not found","")
    }    
}

const createUser = async (req, res) => {
    try{
        let file = req.file;
        let {email, mat_khau, ho_ten, tuoi} = req.body;

        let anh_dai_dien = file.filename;

        let newData = {email,
            mat_khau:bcrypt.hashSync(mat_khau,10),
            ho_ten,
            tuoi,
            anh_dai_dien};

        let checkEmail = await models.nguoi_dung.findOne({
            where: {email
            }
        })

        if(checkEmail){
            failCode(res,"Email already exists","")
            return
        }

        await models.nguoi_dung.create(newData);
        
        //res.send(newData);
        successCode(res, "sign up success", "")

    } catch (err) {
        errorCode(res, "BE Fall", "");
    }    

}

module.exports = {
     createUser, loginUser
}