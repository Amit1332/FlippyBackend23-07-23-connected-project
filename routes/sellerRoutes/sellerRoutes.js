const express = require("express")
const { sellerLogin, registerSeller, getSellerDetails, sellerLogout, updateSellerPassword, updateSellerProfile, registerAllSellerdetails, AlldetailsOfSeller, updateAllSellerdetails, updateSellerBankdetails, updateSellerAddressdetails, updateSellerShopdetails } = require("../../controller/sellerController/sellerController")
const {isAuthenticatedSeller} =require("../../middleware/auth")
const Router = express.Router()


Router.route("/seller_signup").post(registerSeller)
Router.route("/seller_login").post(sellerLogin)
Router.route('/seller/logout').get(sellerLogout)
Router.route('/seller/me').get(isAuthenticatedSeller, getSellerDetails)
Router.route("/seller/me/password/update").put(isAuthenticatedSeller, updateSellerPassword)
Router.route("/seller/me/updateProfile").put(isAuthenticatedSeller,updateSellerProfile)
 


Router.route("/seller/me/fill/complete/details").post(isAuthenticatedSeller,registerAllSellerdetails)
Router.route("/seller/me/update/complete/details").put(isAuthenticatedSeller,updateAllSellerdetails)  // gst update and create seller complete details in seller
Router.route("/seller/me/update/bank/details").put(isAuthenticatedSeller,updateSellerBankdetails) 
Router.route("/seller/me/update/address/details").put(isAuthenticatedSeller,updateSellerAddressdetails)   
Router.route("/seller/me/update/supplier/shop/details").put(isAuthenticatedSeller,updateSellerShopdetails)   






Router.route("/seller/me/show/complete/details").get(isAuthenticatedSeller,AlldetailsOfSeller)


module.exports =Router