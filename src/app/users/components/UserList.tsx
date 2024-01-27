'use client';

import { User } from '@prisma/client';

import UserBox from './UserBox';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import getCurrentUser from '@/app/actions/getCurrentUser';

interface UserListProps {
  items: User[];
  currentUser: User;
}

const UserList: React.FC<UserListProps> = ({ items, currentUser }) => {
  const [formatItems, setFormatItems] = useState<any[]>([]);

  useEffect(() => {
    const checkRole = async () => {
      if (currentUser?.role == 'GUESS') {
        const onlyAdmin = items.filter((item) => item?.role == 'ADMIN');
        setFormatItems(onlyAdmin);
        console.log('onlyAdmin', onlyAdmin);
      } else {
        setFormatItems(items);
      }
    };
    checkRole();
  }, [currentUser?.role, items]);
  return (
    <aside
      className="
        fixed 
        inset-y-0 
        pb-20
        lg:pb-0
        lg:left-20 
        lg:w-80 
        lg:block
        overflow-y-auto 
        border-r 
        border-gray-200
        block w-full left-0
      ">
      <div className="px-5">
        <div className="flex-col">
          <div
            className="
              text-2xl 
              font-bold 
              text-neutral-800 
              py-4
            ">
            People
          </div>
        </div>
        {formatItems.map((item) => (
          <UserBox
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </aside>
  );
};

export default UserList;
