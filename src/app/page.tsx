import Collection from "@/components/Landing/Collection";
import Discography from "@/components/Landing/DIscography";
import Hero from "@/components/Landing/Hero";
import Podcast from "@/components/Landing/Podcast";
import Store from "@/components/Landing/Store";
import Subscribe from "@/components/Landing/Subscribe";
import Tour from "@/components/Landing/Tour";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-hero bg-no-repeat bg-cover ">
        <Podcast />
        <Discography />
      </div>
      <Collection />
      <Tour />
      <div className="bg-hero bg-no-repeat bg-cover ">
        <Subscribe />
        <Store />
      </div>
    </div>
  );
}
