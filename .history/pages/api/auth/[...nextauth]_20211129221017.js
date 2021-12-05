import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/'

export default NextAuth({
    providers: [
        SpotifyProvider({

        })
    ]
})