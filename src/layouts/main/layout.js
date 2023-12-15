import PropTypes from 'prop-types';
import MainAppBar from 'src/components/app-bar/app-bar';
import Footer from 'src/components/footer/footer';
import { Analytics } from '@vercel/analytics/react';



export const Layout = (props) => {

    const { children } = props;

  return (
    <>
      <MainAppBar/>
      {children}
      {/* <Analytics /> */}
      {/* <Footer/> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};
