import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const PalmettoPage = () => {
  useSEO({
    title: "HVAC Services Palmetto FL | AC Repair & Install",
    description: "Trusted HVAC services in Palmetto FL. AC repair, installation, maintenance & duct cleaning. Family owned, licensed & insured. Call (941) 313-2326.",
    canonical: "https://example.com/areas/palmetto",
  });

  return (
    <ServiceAreaPage
      city="Palmetto, FL"
      tagline="Your Trusted HVAC Partner"
      intro="We offer reliable and professional HVAC services in Palmetto, FL. Whether you need heating, cooling, or ventilation services, our experienced technicians are ready to assist you with installations, repairs, and maintenance."
    />
  );
};

export default PalmettoPage;
