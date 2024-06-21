import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffers, SuperQuality, Subscribe} from './sections';
import Nav from './Components/Nav';
const App = () => (

  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b"> <Hero />
    </section>
    <section className="padding"><PopularProducts /></section>
    <section className="padding"><SuperQuality /></section>
    <section className="padding-x py-10">Services</section>
    <section className="padding"><SpecialOffers /></section>
    <section className="bg-pale-blue padding"><CustomerReviews /></section>
    <section className="padding"><Services /></section>
    <section className="padding-x sm:py-32 p-16 w-full"><Subscribe /></section>
    <section className="padding bg-black padding-x padding-t pb-8"><Footer/></section>

  </main>
)
export default App;