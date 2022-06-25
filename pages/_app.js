import LayoutMain from '../layouts/LayoutMain';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <LayoutMain>
            <Component {...pageProps} />
        </LayoutMain>
    )
}

export default MyApp;
