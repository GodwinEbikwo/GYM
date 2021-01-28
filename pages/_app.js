import "../styles/globals.scss";
function MyApp({ Component, pageProps }) {
  return (
    <main data-scroll-container>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
