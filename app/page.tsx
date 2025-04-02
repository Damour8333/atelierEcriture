import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header avec navigation */}
      <header className="bg-white shadow-md p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Les Recettes Littéraires de Joël Zanoui</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-lg font-medium text-gray-600 hover:text-gray-900">Accueil</Link>
            </li>
            <li>
              <Link href="/notes" className="text-lg font-medium text-gray-600 hover:text-gray-900">Mes Notes</Link>
            </li>
            <li>
              <Link href="/textes" className="text-lg font-medium text-gray-600 hover:text-gray-900">Textes</Link>
            </li>
            <li>
              <Link href="/references" className="text-lg font-medium text-gray-600 hover:text-gray-900">Références</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Contenu principal */}
      <main className="max-w-6xl mx-auto p-8 space-y-12">
        {/* Section Présentation */}
        <section className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-semibold text-gray-800">📖 Présentation</h2>
          <p className="mt-4 text-gray-700">
            Bienvenue sur l'atelier d'écriture où les mots prennent vie. Ici, nous explorons ensemble
            les techniques narratives, les styles littéraires et la puissance de l'écriture.
          </p>
        </section>

        {/* Sections sous forme de cartes */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-gray-800">📝 Mes Notes</h2>
            <p className="mt-4 text-gray-700">Retrouvez ici toutes mes notes et inspirations.</p>
            <Link href="/notes">
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Voir les notes
              </button>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-gray-800">📚 Textes</h2>
            <p className="mt-4 text-gray-700">Mes créations littéraires et écrits en cours.</p>
            <Link href="/textes">
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Voir les textes
              </button>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-gray-800">🔖 Références Littéraires</h2>
            <p className="mt-4 text-gray-700">Les œuvres et auteurs qui m'inspirent.</p>
            <Link href="/references">
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Voir les références
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center mt-12 p-6 bg-gray-200 text-gray-600">
        <p>© {new Date().getFullYear()} Joël Zanoui - Tous droits réservés</p>
      </footer>
    </div>
  );
}
