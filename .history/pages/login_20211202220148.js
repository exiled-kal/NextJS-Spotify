import {getProviders,signIn} from 'next-auth/reacts'


function Login() {

  return (
    <div>
      <h1>This is login form</h1>
    </div>
  );
}

export default Login;


export async function getServerSideProps() {
  const providers = await getProviders();
}