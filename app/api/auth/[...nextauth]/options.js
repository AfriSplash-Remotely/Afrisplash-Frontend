import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const options = {
     pages: {
          signIn: "/auth/login",
     },
     providers: [
          CredentialsProvider({
               name: "Credentials",
               credentials: {
                    email: {
                         label: "Email Address:",
                         type: "text",
                         placeholder: "your-cool-email",
                    },
                    password: {
                         label: "Password:",
                         type: "password",
                         placeholder: "your-awesome-password",
                    },
               },
               async authorize(credentials) {

                    const credentialDetails = {
                         email: credentials && credentials.email,
                         password: credentials && credentials.password,
                    };

                    try {
                         const { data } = await axios.post(
                              backendURL + "/auth/login",
                              credentialDetails,
                         );
                         if (data) {
                              return { ...data.user, token: data.token };
                         }
                    } catch (error) {
                         throw new Error(JSON.stringify(error && error.response && error.response.data))
                    }

               },
          }),
     ],
     callbacks: {
          session: ({ session, token }) => {
               return {
                    ...session,
                    user: {
                         ...session.user,
                         id: token.id,

                    },
               };
          },
          jwt: ({ token, user }) => {
               if (user) {
                    const u = user
                    return {
                         ...token,
                         id: u._id,

                    };
               }
               return token;
          },
     },
     secret: process.env.NEXTAUTH_SECRET,

};
