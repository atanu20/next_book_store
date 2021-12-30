import Arivel from '../components/Arivel';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Homee from '../components/Homee';
import Navbar from '../components/Navbar';
import Review from '../components/Review';

export default function Home() {
  return (
    <>
      <Navbar />
      <Homee />
      <Featured />
      <Arivel />
      <Review />
      <Footer />
    </>
  );
}
