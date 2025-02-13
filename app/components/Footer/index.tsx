import { DiscordIcon } from "@/app/icons/Discord";
import { FacebookIcon } from "@/app/icons/Facebook";

export function Footer() {
  return (
    <footer className="bg-white p-3 flex flex-col gap-2">
      <section className="text-gray-800 text-center">
        My Sejarah: Malaysian History {"&"} Culture
      </section>
      <section className="text-gray-800 text-center">
        Copyright © {new Date().getFullYear()}
      </section>
      <section className="flex flex-row gap-3 justify-center mt-2 items-center">
        <a href="https://www.facebook.com/groups/112458755456497">
          <FacebookIcon />
        </a>
        <a href="https://discord.gg/5rdhAxSJVv">
          <DiscordIcon />
        </a>
      </section>
    </footer>
  );
}
