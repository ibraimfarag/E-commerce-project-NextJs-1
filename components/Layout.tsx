import Header from './Header';
import Heads from './Heads';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Head tag for metadata and external stylesheets */}
     
      <Header />
      {/* <Nav /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
