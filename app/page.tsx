// session side / server side render
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import UserSession from './components/User';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <section className='w-full h-full relative'>
      <div className='bg-hero min-h-[300px] bg-center bg-cover opacity-80 bg-blend-darken'>
        <div className='py-12 px-5'></div>
      </div>

      <h1>home</h1>
      <h2>Server side Rendering</h2>
      <pre>{JSON.stringify(session)}</pre>

      <h2>Client side Rendering</h2>
      <UserSession />
    </section>
  );
}
