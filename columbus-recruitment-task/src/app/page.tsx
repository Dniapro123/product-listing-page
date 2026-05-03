import ProductListing from "@/components/ProductListing/ProductListing";
import { getProducts } from "@/services/products";

export default async function Home(){
  const data = await getProducts();

  return <ProductListing data={data} />;
    

}