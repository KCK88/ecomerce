import {model, Schema} from "mongoose";
import {Address, IUser} from "../interfaces/IUser";
import validator from "validator";
import bcrypt from "bcryptjs";
import {ReqUser} from "../interfaces/ReqUser";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (pass) {
        return pass === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  addresses: [{
    street: String,
    number: String,
    complement: String,
    neighborhood: String,
    city: String,
    state: String,
    zipCode: String,
    country: {
      type: String,
      default: "Brasil",
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
  }],
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string,
  userPassword: string,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp: number) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      String(this.passwordChangedAt.getTime() / 1000),
      10,
    );

    return JWTTimestamp < changedTimestamp;
  }

  return false;
};

const User = model<IUser>("User", userSchema);

export async function newUser(user: ReqUser): Promise<IUser> {
  return await User.create(user);
}

export async function loginModel(email: string): Promise<IUser | null> {
  return await User.findOne({email}).select("+password");
}

export async function findUserById(id: string): Promise<IUser | null> {
  return await User.findById(id);
}

export async function modifyUserAddress(id: string, address: Address): Promise<IUser | null> {
  return await User.findByIdAndUpdate(
    id,
    {
      $push: {
        addresses: [
          address
        ]
      },
    },
    { new: true, runValidators: true }
    ).exec();
}

export default User;
