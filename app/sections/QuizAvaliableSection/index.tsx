import { QuizCard } from "./QuizCard";

export function QuizAvaliableSection() {
  return (
    <main className="bg-gray-200 p-9">
      <h1 className="text-gray-800 font-bold text-2xl text-center">
        Quizes That Are Available
      </h1>

      <section className="flex flex-row gap-5 my-5 flex-wrap">
        <QuizCard title="Melaka" heroImage="/melacca.jpg" onClick={() => {}} />
        <QuizCard title="Peanang" heroImage="/peanang.jpg" onClick={() => {}} />
      </section>
    </main>
  );
}
