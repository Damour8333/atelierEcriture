import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow-md p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Les Recettes Littéraires de Joël Zanoui</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/notes">Mes Notes</Link></li>
            <li><Link href="/textes">Textes</Link></li>
            <li><Link href="/references">Références</Link></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-8 space-y-12">
        <section className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-semibold">📖 Présentation</h2>
          <p className="mt-4 text-gray-700">
            Bienvenue sur l'atelier d'écriture où les mots prennent vie. Ici, nous explorons ensemble
            les techniques narratives, les styles littéraires et la puissance de l'écriture.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/notes" className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition block">
            <h2 className="text-2xl font-semibold">📝 Mes Notes</h2>
            <p className="mt-4 text-gray-700">Retrouvez ici toutes mes notes et inspirations.</p>
          </Link>
          <Link href="/textes" className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition block">
            <h2 className="text-2xl font-semibold">📚 Textes</h2>
            <p className="mt-4 text-gray-700">Mes créations littéraires et écrits en cours.</p>
          </Link>
          <Link href="/references" className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition block">
            <h2 className="text-2xl font-semibold">🔖 Références Littéraires</h2>
            <p className="mt-4 text-gray-700">Les œuvres et auteurs qui m'inspirent.</p>
          </Link>
        </section>
      </main>

      <footer className="text-center mt-12 p-6 bg-gray-200 text-gray-600">
        © {new Date().getFullYear()} Joël Zanoui - Tous droits réservés
      </footer>
    </div>
  );
}
