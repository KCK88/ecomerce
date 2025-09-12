export interface IUser extends Document {
  name: string;
  email: string;
  photo?: string;
  role?: string;
  password: string;
  passwordConfirm: string | undefined;
  addresses: Address[]
  passwordChangedAt?: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  active?: boolean;
  _id: string;

  comparePassword(
    candidatePassword: string,
    userPassword: string,
  ): Promise<boolean>;

  changedPasswordAfter(JWTTimestamp: number): boolean;
}

export interface Address {
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  country: string
  isDefault: boolean
}