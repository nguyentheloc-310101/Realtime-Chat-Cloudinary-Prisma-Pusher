'use client';

import LoginModal from '@/components/home/modals/LoginModal';
import RegisterModal from '@/components/home/modals/RegisterModal';
import RentModal from '@/components/home/modals/RentModal';
import SearchModal from '@/components/home/modals/SearchModal';

const ModalsProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <SearchModal />
      <RentModal />
    </>
  );
};

export default ModalsProvider;
