import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-52 mb-5"
        src="https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png"
        alt=""
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="bg-[#18D860] text-white p-5 rounded-lg ">
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
