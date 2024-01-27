import Sidebar from '@/components/sidebar/Sidebar';
import getConversations from '../actions/getConversations';
import getUsers from '../actions/getUsers';
import ConversationList from './components/ConversationList';
import useUserInput from '@/stores/user-input';

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList
          users={users}
          title="Messages"
          initialItems={conversations}
        />

        {children}
      </div>
    </Sidebar>
  );
}
