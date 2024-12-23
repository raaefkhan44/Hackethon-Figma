
import Hero from './components/Hero';
import Footer from './components/Footer';
import ImageGrid from './components/ImageGrid';




export default function Home() {
  return (
    <div className="bg-transparent text-white">
      
      <main>
        <Hero />
  <ImageGrid/>
  
 

      </main>
      <Footer />
    </div>
  );
}
