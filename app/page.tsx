import Image from "next/image";
import styles from "./styles.module.css";
import { Navbar } from "./components/Navbar";
import { QuizAvaliableSection } from "./sections/QuizAvaliableSection";
import bg from "@/public/bg.jpg";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div
        className="flex flex-col justify-center align-middle gap-4"
        style={{
          height: "80vh",
          background: `rgba(0, 0, 0, 0.6) url("${bg.src}")`,
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-center text-5xl">Welcome to MySejarah Quiz</h1>
        <p className="text-center text-xl">
          A platform to test your knowledge and explore history like never
          before
        </p>
      </div>
      <QuizAvaliableSection />
    </main>
  );
}
