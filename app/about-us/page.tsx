import { Navbar } from "../components/Navbar";
import { ContentSection } from "./ContentSection";
import bg from "@/public/bg.jpg";

export default function AboutUsPage() {
  return (
    <main>
      <Navbar />
      <div
        className="flex flex-col justify-center align-middle gap-4"
        style={{
          height: "60vh",
          background: `rgba(0, 0, 0, 0.6) url("${bg.src}")`,
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-center text-5xl">About Us</h1>
        <p className="text-center text-xl">
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <ContentSection title="About The Quiz" />
      <ContentSection title="How It Works" isOdd />
      <ContentSection title="Custom Questions" />
      <ContentSection title="Why Choose Us" isOdd />
    </main>
  );
}
