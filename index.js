export default function AlainPolpas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-yellow-50 p-6 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-green-800">Alain Polpas</h1>
          <p className="text-lg mt-2">Polpas de frutas 100% naturais e congeladas</p>
          <img
            src="https://images.unsplash.com/photo-1588167100382-2f9f6d06aaec"
            alt="Frutas congeladas"
            className="mx-auto mt-4 rounded-2xl shadow-md w-full max-w-md"
          />
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Sabores disponíveis</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 list-disc list-inside">
            <li>Cupuaçú</li>
            <li>Taperebá</li>
            <li>Maracujá</li>
            <li>Goiaba</li>
            <li>Bacuri</li>
            <li>Acerola</li>
            <li>Murucí</li>
            <li>Graviola</li>
            <li>Cajú</li>
            <li>Pitaia</li>
            <li>Açaí</li>
          </ul>
          <img
            src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f"
            alt="Polpas de frutas"
            className="mt-4 rounded-2xl shadow-md w-full max-w-2xl mx-auto"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Embalagens</h2>
          <p>Disponível em: 100ml, 500ml e 1 litro</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Entregas</h2>
          <p>Entregamos sob encomenda para famílias, lanchonetes, restaurantes, escolas e eventos.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contato</h2>
          <ul className="space-y-1">
            <li><strong>WhatsApp:</strong> <a href="https://wa.me/5599999999999" className="text-green-600 underline">(91) 99999-9999</a></li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/alainpolpas" className="text-pink-600 underline">@alainpolpas</a></li>
            <li><strong>E-mail:</strong> contato@alainpolpas.com</li>
          </ul>
          <div className="mt-4">
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-2xl shadow hover:bg-green-700 transition"
            >
              Fale conosco pelo WhatsApp
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Depoimentos</h2>
          <blockquote className="italic border-l-4 border-green-400 pl-4">“Polpas com sabor de fruta mesmo, perfeitas pra suco no dia a dia!”</blockquote>
          <blockquote className="italic border-l-4 border-green-400 pl-4 mt-2">“Entrega rápida e atendimento excelente. Recomendo demais!”</blockquote>
        </section>
      </div>
    </div>
  );
}
