import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema(
  {
    video: {
      tpye: Schema.Types.ObjectId,
      ref: "Video",
    },
    comment: {
      tpye: Schema.Types.ObjectId,
      ref: "Comment",
    },
    comment: {
      tpye: Schema.Types.ObjectId,
      ref: "Tweet",
    },
    likedBy: {
      tpye: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);


export const Like = mongoose.model("Like", likeSchema);
