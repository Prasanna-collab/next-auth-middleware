import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        error: "/error",
        newUser: "/newuser",
        signIn: "/",
        signOut: "/logout",
    },
    // callbacks: {
    //     async signIn({ account, profile }) {
    //         if (!profile?.email) {
    //             console.error("No email found in profile");
    //             return false;
    //         }

    //         // const data = {
    //         //     email: profile.email,
    //         //     login_type: account?.provider,
    //         // };
    //         return true;
    //         // try {
    //         //     const res = await fetch("", {
    //         //         method: "POST",
    //         //         headers: {
    //         //             "Content-Type": "application/json",
    //         //         },
    //         //         body: JSON.stringify(data),
    //         //     });

    //         //     if (!res.ok) {
    //         //         console.error("Failed to send data to API", await res.text());
    //         //         return false;
    //         //     }

    //         //     return true;
    //         // } catch (error) {
    //         //     console.error("Error in sign-in callback", error);

    //         //     return false;
    //         // }
    //     },
    // },
});
