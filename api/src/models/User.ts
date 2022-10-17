import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  _id?: mongoose.Schema.Types.ObjectId
  firstname: string
  surname: string
  username: string
  email: string
  password: string
  isBanned: boolean
  isAdmin: boolean
}

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isBanned: {
    type: Boolean,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
})
export default mongoose.model<UserDocument>('User', userSchema)

/*
example:
{
    "firstname":"tester",
    "surname":"tester surname",
    "username": "testerusername",
    "email": "tester@gmail.com"
    "password": "notmyrealpassword",
    "isBanned": false,
    "isAdmin":true
}

*/
