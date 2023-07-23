const express = require("express")
const { createBlogByAdmin, getaAllBlogByAdmin, getaBlogByAdmin, deleteaBlogByAdmin, updateBlogByAdmin } = require("../../controller/adminController/blogController")
const { authorizeRoles, isAuthenticatedAdmin} =require("../../middleware/auth")
const Router = express.Router()





//blog routes
Router.route("/admin/blog/add").post(isAuthenticatedAdmin,authorizeRoles('superadmin','admin'), createBlogByAdmin)
Router.route("/admin/all/blog").get(isAuthenticatedAdmin,authorizeRoles('superadmin','admin'), getaAllBlogByAdmin)
Router.route("/admin/blog/:id").get(isAuthenticatedAdmin,authorizeRoles('superadmin','admin'), getaBlogByAdmin).delete(isAuthenticatedAdmin,authorizeRoles('superadmin','admin'), deleteaBlogByAdmin).put(isAuthenticatedAdmin,authorizeRoles('superadmin','admin'), updateBlogByAdmin)




 

module.exports =Router