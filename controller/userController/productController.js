const { json } = require("body-parser");
const catchAsyncError = require("../../middleware/catchAsyncError");
const AllUser = require("../../models/alluser");
const Seller = require("../../models/sellerModel/sellerSchema");
const ErrorHander = require("../../utils/errorhander");
const Product = require("../../models/productSchema");
const ApiFeatures = require("../../utils/apifeatures");









// get All Products
exports.getAllProductsByUser = catchAsyncError(async (req, res, next) => {
 const resultperPage = 2;
 const apiFeatures = new ApiFeatures( Product.find(),req.query).search().filter().pagination(resultperPage);
 const products = await apiFeatures.query
  const productsCount = products.length


  res.status(200).json({
    success: true,
    products,
    productsCount,
  });
});







// get single prodcuts by seller

exports.getSingleProductByUser = catchAsyncError(async (req,res,next)=>{

    const product = await Product.findById(req.params.id)

    if(product){
       res.status(200).json({
        success:true,
        product

       })
    }
    else{
        return next(new ErrorHander(`product not found with this id ${req.params.id}`,401))
    }
   
})