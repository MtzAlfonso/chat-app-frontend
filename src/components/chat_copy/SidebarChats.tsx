import { ChatCard } from './ChatCard';

interface Props {}

export const SidebarChats = (props: Props) => {
  const chats: number[] = [1, 2, 3, 4, 5, 6];
  return (
    <div className="overflow-y-scroll col-span-2 lg:col-span-3 row-span-8 border-r-2 border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-800 flex flex-col">
      {chats.map((chat) => (
        <ChatCard key={chat} />
      ))}
    </div>
  );
};
