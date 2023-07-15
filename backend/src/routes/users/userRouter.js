const router = require("express").Router();

const { userValidator } = require("../../Validator/users/userValidator");
const { checkValidation } = require("../../middleware/checkValidation");
const { otpValidator } = require("../../Validator/users/otpValidator");
const { userAuth, adminAuth } = require("../../middleware/authorise");

const {
  registration,
  login,
  updateUser,
  deleteUser,
  getUsers,
  getUserById,
} = require("../../controller/users/userController");

const {
  VerifyEmail,
  VerifyOTP,
  ResetPassword,
} = require("../../controller/users/resetPasswordController");

//User CRUD
router.post("/registration", userValidator, checkValidation, registration);
router.post("/login", login);
router.post(
  "/update/:id",
  [userAuth],
  userValidator,
  checkValidation,
  updateUser
);
router.delete("/delete/:id", [userAuth, adminAuth], deleteUser);
router.get("/get/:id", [userAuth, adminAuth], getUserById);
router.get("/get", [userAuth, adminAuth], getUsers);

//Reset Password
router.get("/verifyEmail/:email", VerifyEmail);
router.get("/verifyOtp/:email/:otp", VerifyOTP);
router.post("/resetPassword", otpValidator, checkValidation, ResetPassword);

module.exports = router;
