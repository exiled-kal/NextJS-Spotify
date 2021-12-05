import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth'

export default NextAuth({
    providers: [
        SpotifyProvider({

        })
    ]
})