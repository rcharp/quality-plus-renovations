import { useParams, Navigate } from "react-router-dom";
import ServiceAreaPageTemplate from "@/components/ServiceAreaPageTemplate";
import { getServiceAreaBySlug } from "@/data/serviceAreas";

const ServiceAreaPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? getServiceAreaBySlug(slug) : undefined;

  if (!area) {
    return <Navigate to="/404" replace />;
  }

  return <ServiceAreaPageTemplate area={area} />;
};

export default ServiceAreaPage;