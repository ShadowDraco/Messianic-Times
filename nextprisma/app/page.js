import { prisma } from '../lib/prisma/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import AuthButtons from '../components/auth/AuthButtons';
import BasicDeleteUserForm from '../components/auth/BasicDeleteUserForm';
import BasicCreateUserForm from '../components/auth/BasicCreateUserForm';
import { findUser } from '../lib/prisma/crud';

export default async function Home() {
  const session = await getServerSession(authOptions);

  const user = await findUser('test@test.com', 2000);

  return (
    <main>
      Hello {user?.name}
      <pre>{JSON.stringify(session)}</pre>
      <br></br>
      <AuthButtons />
      <br></br>
      <BasicDeleteUserForm />
      <br></br>
      <br></br>
      <BasicCreateUserForm />
      <br></br>
      <a href='/products'>
        <button>Products</button>
      </a>
    </main>
  );
}
