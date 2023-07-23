const express = require("express")
const { getAllCouponBySeller, createCouponBySeller, deleteCouponBySeller } = require("../../controller/sellerController/couponController")
const {isAuthenticatedSeller} =require("../../middleware/auth")
const Router = express.Router()


Router.route("/seller/all/coupons").get(isAuthenticatedSeller, getAllCouponBySeller)
Router.route("/seller/add/coupons").post(isAuthenticatedSeller, createCouponBySeller)
Router.route("/seller/delete/coupons/:id").delete(isAuthenticatedSeller, deleteCouponBySeller)



module.exports =Router