import mongoose, { Model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  refresh_token: string;
  comparePassword: (password: string) => Promise<boolean>;
  signAccessToken: () => string;
  signRefreshToken: () => string;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
      validate: {
        validator: function (value: string) {
          return emailRegex.test(value);
        },
        message: "Invalid email format!",
      },
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    refresh_token: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.signAccessToken = async function () {
  return jwt.sign(
    {
      id: this._id,
      name: this.name,
      email: this.email,
    },
    process.env.ACCESS_TOKEN || "",
    {
      expiresIn: parseInt(process.env.ACCESS_TOKEN_EXPIRES || "0", 10),
    }
  );
};

userSchema.methods.signRefreshToken = async function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.REFRESH_TOKEN || "",
    {
      expiresIn: parseInt(process.env.REFRESH_TOKEN_EXPIRES || "0", 10),
    }
  );
};

export const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);
