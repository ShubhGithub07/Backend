const asyncHandler = (requestHandler) => {
  (res, req, next) => {
    Promise.resolve(requestHandler(res, req, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// using try catch
// const asyncHandler = (fn) = async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 404).json({
//       success: false,
//       message: err.message,
//     });
//   }
// }; // higher order function
