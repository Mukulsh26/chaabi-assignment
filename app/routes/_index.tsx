import Hero from "~/components/Hero";
import Features from "~/components/Features";
import Testimonial from "~/components/Testimonial";

export default function Index() {
  return (
    <div className="bg-white pb-40"> {/* Add padding-bottom to the top-level container */}
      {/* Top container with white background */}
      <div className="container mx-auto" style={{maxWidth: '100%'}}>
        <Hero />
        <Features />
        <Testimonial />
      </div>
    </div>
  );
}
