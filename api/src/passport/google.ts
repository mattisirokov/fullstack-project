import GoogleTokenStrategy from 'passport-google-id-token'
import { GOOGLE_CLIENT_ID } from '../util/secrets'
import { ParsedToken, VerifiedCallback } from '../types'
import User from '../models/User'

export default function () {
  return new GoogleTokenStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
    },
    async (
      parsedToken: ParsedToken,
      googleId: string,
      done: VerifiedCallback
    ) => {
      try {
        const email = parsedToken.payload.email
        let user: any = await User.findOne({
          email,
          isAdmin: email === 'matti.sirokov@integrify.io',
        })

        if (!user) {
          user = new User({
            firstname: parsedToken.payload.given_name,
            surname: parsedToken.payload.family_name,
            email: parsedToken.payload.email,
            isBanned: false,
            isAdmin: false,
          })
          user.save()
        }
        done(null, user)
      } catch (error) {
        done(error)
      }
    }
  )
}
