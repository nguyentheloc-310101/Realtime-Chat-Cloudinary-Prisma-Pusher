import Sidebar from '@/components/sidebar/Sidebar';
import getUsers from '../actions/getUsers';
import UserList from './components/UserList';
import getCurrentUser from '../actions/getCurrentUser';

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  const currentUser = await getCurrentUser();
  return (
    <Sidebar>
      <div className="h-full">
        <UserList
          items={users}
          currentUser={currentUser!}
        />
        {children}
      </div>
    </Sidebar>
  );
}
