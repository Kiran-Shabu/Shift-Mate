import mongoose from "mongoose";
import agencyRegSchema from "./agencyRegSchema";

export default mongoose.model<agencyRegSchema>("agency", agencyRegSchema, "agency");