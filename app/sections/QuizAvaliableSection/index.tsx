import { QuizCard } from "./QuizCard";
import melacca from "@/public/melacca.jpg";
import peanang from "@/public/peanang.jpg";

export function QuizAvaliableSection() {
  return (
    <main className="bg-gray-200 p-9">
      <a id="quiz" />
      <h1 className="text-gray-800 font-bold text-2xl text-center">
        Quizes That Are Available
      </h1>

      <section className="flex flex-row gap-5 my-5 flex-wrap">
        <QuizCard title="Melaka" heroImage={melacca.src} onClick={() => {}} />
        <QuizCard title="Peanang" heroImage={peanang.src} onClick={() => {}} />
      </section>
    </main>
  );
}
