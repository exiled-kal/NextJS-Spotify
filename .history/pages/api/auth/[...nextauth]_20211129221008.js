import NextAuth from 'next-auth';
import SpotifyProvider from 'next'

export default NextAuth({
    providers: [
        SpotifyProvider({

        })
    ]
})