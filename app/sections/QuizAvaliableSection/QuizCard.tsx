interface QuizCardProps {
  title: string;
  heroImage: string;
  onClick: () => void;
}

export function QuizCard({ title, heroImage, onClick }: QuizCardProps) {
  return (
    <main>
      <div className="card bg-white w-96 shadow-xl">
        <div className="card-body">
          <img
            src={heroImage}
            alt="Quiz Image"
            className="w-full h-48 object-cover rounded-xl"
          />

          <h2 className="card-title text-gray-800">{title}</h2>
          <div className="card-actions">
            <button className="btn btn-primary flex-1">Start Quiz</button>
          </div>
        </div>
      </div>
    </main>
  );
}
