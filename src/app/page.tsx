import Navbar from '@/components/ui/Navbar'
import Starfield from '@/components/ui/Starfield'
import Hero from '@/components/sections/Hero'
import AboutBook from '@/components/sections/AboutBook'
import AboutAuthor from '@/components/sections/AboutAuthor'
import Blog from '@/components/sections/Blog'
import Newsletter from '@/components/sections/Newsletter'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Starfield />
      <Navbar />
      <Hero />
      <AboutBook />
      <AboutAuthor />
      <Blog />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  )
}
