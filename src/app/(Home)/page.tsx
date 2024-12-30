
import ActiveBanner from '../components/ActiveBanner';
import Hero from '../components/Hero';
import HomeBlog from '../components/HomeBlog';
import ImageGrid from '../components/ImageGrid';
import { Menucard } from '../components/Menucard';
import { OurChef } from '../components/OurChefs';
import { Testimonials } from '../components/Testimonials';






export default function Home() {
  return (
    <div className="bg-transparent text-white">

      <main>
        <Hero />
        <ImageGrid />

        <Menucard />
        <OurChef />
        <Testimonials/>
        <ActiveBanner />  
        <HomeBlog/>
      </main>

    </div>
  );
}
