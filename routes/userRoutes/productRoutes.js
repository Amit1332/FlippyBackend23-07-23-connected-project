const express = require("express")
const { getSingleProductByUser, getAllProductsByUser } = require("../../controller/userController/productController")
const {isAuthenticatedUser, authorizeRoles} =require("../../middleware/auth")
const Router = express.Router()


// Products -----------------------
Router.route("/user/single/product/:id").get( getSingleProductByUser)
Router.route("/user/all/product").get( getAllProductsByUser)



module.exports =Router