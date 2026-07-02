import { Hero } from "@/components/sections/hero";
import { Benefits } from "@/components/sections/benefits";
import { Services } from "@/components/sections/services";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { CaseStudy } from "@/components/sections/case-study";
import { Technologies } from "@/components/sections/technologies";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { siteConfig } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      description: siteConfig.description,
      sameAs: [siteConfig.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Benefits />
      <Services />
      <Industries />
      <Process />
      <CaseStudy />
      <Technologies />
      <FAQ />
      <Contact />
    </>
  );
}
