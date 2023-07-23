const catchAsyncError = require("../../middleware/catchAsyncError");
const AllUser = require("../../models/alluser");
const Seller = require("../../models/sellerModel/sellerSchema");
const ErrorHander = require("../../utils/errorhander");
const Coupons = require("../../models/couponSchema");
const ApiFeatures = require("../../utils/apifeatures");

// get All Products
exports.getAllCouponBySeller = catchAsyncError(async (req, res, next) => {
    const resultperPage = 20;
    const apiFeatures = new ApiFeatures( Coupons.find({user_id:req.seller.id}),req.query).search().filter().pagination(resultperPage);
    const coupons = await apiFeatures.query
     const couponsCount = coupons.length
    //  if (coupons.length < 1) {
    //    return next(
    //      new ErrorHander("Coupon does not exist please add Coupon", 401)
    //    );
    //  }
   
     res.status(200).json({
       success: true,
       coupons,
       couponsCount,
     });
   });


//   create product by seller
   exports.createCouponBySeller = catchAsyncError(async (req, res, next) => {
    // for seller
    const couponExist = await Coupons.findOne({ coupon_code: req.body.coupon_code });
    const addedBySameId = await Coupons.findOne({ user_id: req.seller.id });
    if (addedBySameId) {
      if (couponExist) {
        return next(
          new ErrorHander(
            "This Coupon is already exist, please add new Coupon "
          )
        );
      } else {
        req.body.user_id = req.seller.id;
        req.body.added_by = req.seller.role;
  
      const coupon = await Coupons.create(req.body);
  
      res.status(201).json({
        success: true,
        coupon,
      });
      }
    } else {
      req.body.user_id = req.seller.id;
      req.body.added_by = req.seller.role;
  
      const coupon = await Coupons.create(req.body);
  
      res.status(201).json({
        success: true,
        coupon,
      });
    }
  });



  // delete coupon 
  exports.deleteCouponBySeller = catchAsyncError(async (req, res, next) => {
    const coupon = await Coupons.findByIdAndDelete({ _id: req.params.id });
  
    if (!coupon) {
      return next(
        new ErrorHander(`product not found with this id ${req.params.id}`, 401)
      );
    }
    res.status(201).json({
      coupon,
      success: true,
      msg: "Coupon deleted successfully",
    });
  });