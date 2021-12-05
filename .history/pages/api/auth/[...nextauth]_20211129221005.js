import NextAuth from 'next-auth';
import SpotifyProvider from ''

export default NextAuth({
    providers: [
        SpotifyProvider({

        })
    ]
})