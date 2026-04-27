import { useParams, Navigate } from "react-router-dom";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getServiceBySlug } from "@/data/services";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return <ServicePageTemplate service={service} />;
};

export default ServicePage;