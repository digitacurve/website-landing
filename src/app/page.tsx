import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import WebsiteProcess from '@/components/WebsiteProcess';
import MobileFirstSection from '@/components/MobileFirstSection';
import SeoReadySection from '@/components/SeoReadySection';
import Testimonials from '@/components/Testimonials';
import IndustriesServed from '@/components/IndustriesServed';
import FAQSection from '@/components/FAQSection';
import Widgets from '@/components/Widgets';
import Footer from '@/components/Footer';

export default function WebDesignMelbournePage() {
  
  // JSON-LD Schemas (pointing to root path https://digitacurve.com/)
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Digitacurve',
    'image': 'https://digitacurve.com/images/web-design-melbourne-og.png',
    '@id': 'https://digitacurve.com/#localbusiness',
    'url': 'https://digitacurve.com/',
    'telephone': '+917572094201',
    'email': 'sale@digitacurve.com',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Sector 62',
      'addressLocality': 'Noida',
      'addressRegion': 'Uttar Pradesh',
      'postalCode': '201309',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '28.6273',
      'longitude': '77.3725'
    },
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Melbourne' },
      { '@type': 'AdministrativeArea', 'name': 'Victoria' },
      { '@type': 'AdministrativeArea', 'name': 'Australia' }
    ],
    'sameAs': [
      'https://www.facebook.com/people/DigitaCurve/61586495587348/',
      'https://www.instagram.com/digitacurve/',
      'https://www.linkedin.com/in/rishabhjaisal0425/'
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Custom Web Design & Development Melbourne',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Digitacurve',
      'url': 'https://digitacurve.com/'
    },
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': 'Melbourne'
    },
    'audience': {
      '@type': 'Audience',
      'audienceType': 'Business Owners'
    },
    'description': 'High-performance, custom-coded Next.js website design and development services custom-tailored for businesses in Melbourne looking to grow leads, organic rankings, and ad campaign conversions.'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How much does website design cost in Melbourne?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Website design pricing varies depending on the scale, integrations, and technical stack. At Digitacurve, custom-coded high-performance business websites start from A$1,500. We structure our packages based on your requirements with no hidden maintenance fees or locked contracts, ensuring you own 100% of your source code.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Who is the best website designer in Melbourne?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The best website designers are agencies focused on measurable business outcomes, load speed, and SEO rather than just aesthetic templates. Digitacurve is a leading premium digital agency delivering bespoke custom-coded Next.js websites that load in under 1 second, rank organically, and outperform page-builder templates in conversion rates.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How long does a website take to build?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A standard custom web design project takes between 2 to 4 weeks from discovery and layout planning to design approval, development, and launch. More complex e-commerce platforms or enterprise-level structures with complex APIs may take 4 to 6 weeks. We keep you updated via live staging links throughout the process.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Why choose custom web design instead of templates?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Custom web design (built with frameworks like Next.js and Tailwind CSS) avoids the heavy script bloat and security liabilities of WordPress/Elementor templates. Custom code ensures mobile response speeds of <1s, gives you unlimited design freedom (no builder boundaries), and achieves near-perfect Core Web Vitals, which lowers your Google Ads Cost-Per-Click.'
        }
      }
    ]
  };

  return (
    <>
      {/* Structural Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Main Page Layout */}
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <WebsiteProcess />
        <MobileFirstSection />
        <SeoReadySection />
        <Testimonials />
        <IndustriesServed />
        <FAQSection />
      </main>
      <Footer />
      <Widgets />
    </>
  );
}
