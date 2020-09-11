import React, { PropsWithChildren } from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

const DefaultLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
