import Hero from '@/components/Hero';
import ProductReveal from '@/components/ProductReveal';
import Story from '@/components/Story';
import Craftsmanship from '@/components/Craftsmanship';
import ProductDetails from '@/components/ProductDetails';
import StylingOccasion from '@/components/StylingOccasion';
import ValueAsGift from '@/components/ValueAsGift';
import TrustSignals from '@/components/TrustSignals';
import SocialProof from '@/components/SocialProof';
import LeadForm from '@/components/LeadForm';
import FAQ from '@/components/FAQ';
import FooterConversion from '@/components/FooterConversion';

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory">
      <Hero />
      <ProductReveal />
      <Story />
      <ProductDetails />
      <StylingOccasion />
      <Craftsmanship />
      <ValueAsGift />
      <SocialProof />
      <TrustSignals />
      <FAQ />
      <LeadForm />
      <FooterConversion />
    </main>
  );
}
