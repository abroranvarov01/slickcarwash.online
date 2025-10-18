import { HeroSection } from "@/components/hero-section"
import { WhySlickSection } from "@/components/why-slick-section"
import { ServicesSection } from "@/components/services-section"
import { BookingSection } from "@/components/booking-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GallerySection } from "@/components/gallery-section"
import { VideoSection } from "@/components/video-section"
import { PricingSection } from "@/components/pricing-section"
import { SubscriptionSection } from "@/components/subscription-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { WaterDroplets } from "@/components/water-droplets"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <WaterDroplets />
      <HeroSection />
      <WhySlickSection />
      <ServicesSection />
      <BookingSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <GallerySection />
      <VideoSection />
      <PricingSection />
      <SubscriptionSection />
      <ContactSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
