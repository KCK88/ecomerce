export interface IUser extends Document {
  name: string;
  email: string;
  photo?: string;
  role?: string;
  password: string;
  passwordConfirm: string | undefined;
  passwordChangedAt?: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  active?: boolean;
  _id: string;
  comparePassword(candidatePassword: string, userPassword: string): Promise<boolean>;
}