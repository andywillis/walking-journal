import { Footer, Header, Main } from '../components';

import useDarkMode from '../hooks/useDarkMode';

export default function Layout() {

  useDarkMode();

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );

}
