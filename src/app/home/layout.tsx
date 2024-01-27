import { Nunito } from 'next/font/google';

// import Navbar from '@/app/components/navbar/Navbar';
// import LoginModal from '@/app/components/modals/LoginModal';
// import RegisterModal from '@/app/components/modals/RegisterModal';
// import SearchModal from '@/app/components/modals/SearchModal';
// import RentModal from '@/app/components/modals/RentModal';

import ClientOnly from '@/components/home/empty-state-vs2/ClientOnly';
import getCurrentUser from '../actions/getCurrentUser';
import ToasterContext from '@/context/ToasterContext';
import Navbar from '@/components/home/navbar/Navbar';
import LoginModal from '@/components/home/modals/LoginModal';
import RegisterModal from '@/components/home/modals/RegisterModal';
import SearchModal from '@/components/home/modals/SearchModal';
import RentModal from '@/components/home/modals/RentModal';

export const metadata = {
  title: 'meGoZ',
  description: 'meGoZ Travel',
};

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterContext />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
