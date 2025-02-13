interface ContentSectionProps {
  isOdd?: boolean;
  title: string;
}

export function ContentSection({ isOdd, title }: ContentSectionProps) {
  return (
    <main className={isOdd ? "bg-gray-200" : "bg-gray-100"}>
      <section className="p-6 max-w-6xl mx-auto flex flex-col gap-2">
        <h2 className="text-gray-800 font-bold text-2xl">{title}</h2>
        <p className="text-gray-800">
          Quis pariatur amet aliqua culpa occaecat anim magna ea culpa. Quis
          nulla reprehenderit et id eu. Proident ipsum commodo veniam in
          deserunt. Magna amet ea sint pariatur dolore mollit aute dolor
          incididunt culpa anim adipisicing culpa quis.
        </p>
        <p className="text-gray-800">
          Ipsum velit sit in occaecat minim reprehenderit reprehenderit ut. Ad
          dolore dolore qui dolor. Aliqua qui incididunt do est veniam qui
          pariatur magna enim id. Incididunt incididunt ipsum laborum Lorem
          veniam excepteur proident. Ea consequat eiusmod aute incididunt in
          aliqua duis ad voluptate qui eu. Dolore commodo consectetur eu
          voluptate eu cupidatat elit. Magna fugiat magna occaecat incididunt
          dolor et laboris esse excepteur.
        </p>
        <p className="text-gray-800">
          Sit cillum deserunt velit sit pariatur eu. Pariatur ullamco ad ea
          occaecat. Laboris laboris incididunt aliqua fugiat veniam sit
          deserunt. Deserunt in do nostrud qui eiusmod Lorem reprehenderit. Sint
          nulla quis quis in dolore et excepteur labore voluptate duis fugiat id
          labore. Nostrud in duis ex sunt consequat ullamco velit sit velit
          aliquip et officia est eiusmod. Nisi officia voluptate Lorem enim est
          aliqua eiusmod anim eiusmod.
        </p>
      </section>
    </main>
  );
}
