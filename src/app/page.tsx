import { Meta } from "@once-ui-system/core";
import AboutPage from "./about/page";
import { baseURL, home } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL,
    path: "/",
    image: home.image,
  });
}

export default AboutPage;
