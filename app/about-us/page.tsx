import { Navbar } from "../components/Navbar";
import { ContentSection } from "./ContentSection";
import styles from "./styles.module.css";

export default function AboutUsPage() {
  return (
    <main>
      <Navbar />
      <div
        className={`${styles.heroContainer} flex flex-col justify-center align-middle gap-4`}
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
