import PropTypes from 'prop-types';
import MainAppBar from 'src/components/app-bar/app-bar';
import Footer from 'src/components/footer/footer';




export const Layout = (props) => {

    const { children } = props;

  return (
    <>
      <MainAppBar/>
      {children}
      <Footer/>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};
