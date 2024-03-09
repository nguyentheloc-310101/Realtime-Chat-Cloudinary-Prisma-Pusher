import Sidebar from '@/components/sidebar/Sidebar';
import getConversations from '../actions/getConversations';
import getUsers from '../actions/getUsers';
import ConversationList from './components/ConversationList';
import useUserInput from '@/stores/user-input';
import getCurrentUser from '../actions/getCurrentUser';

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();
  const currentUser = await getCurrentUser();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList
          users={
            currentUser?.role == 'ADMIN'
              ? users
              : users.filter((user) => user.role == 'ADMIN')
          }
          title="Messages"
          initialItems={conversations}
        />

        {children}
      </div>
    </Sidebar>
  );
}
