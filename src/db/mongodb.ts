import mongoose from "mongoose";

export default mongoose
  .connect(
    "mongodb+srv://bbrizolara:lgTuhhSsCL0ykBmS@cluster0.6mzg1x5.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((data) => {
    console.log("MongoDB Connection Succeeded", data.version);
  })
  .catch((err) => {
    console.log("Error in DB connection:", err.message);
  });
