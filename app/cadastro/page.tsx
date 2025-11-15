import Link from "next/link";

export default function CadastroPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold text-sky-600 mb-2">UAI Sistemas</h1>
          </Link>
          <h2 className="text-2xl font-bold text-slate-900">Criar conta</h2>
          <p className="text-slate-600 mt-2">Comece a usar nossas soluções hoje</p>
        </div>

        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="Seu nome"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-slate-700 mb-2">
                Confirmar senha
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <div className="mb-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500 mt-1"
                />
                <span className="ml-2 text-sm text-slate-700">
                  Aceito os{" "}
                  <a href="#" className="text-sky-600 hover:text-sky-700">
                    termos de uso
                  </a>{" "}
                  e a{" "}
                  <a href="#" className="text-sky-600 hover:text-sky-700">
                    política de privacidade
                  </a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
            >
              Criar conta
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              Já tem uma conta?{" "}
              <Link href="/login" className="text-sky-600 hover:text-sky-700 font-medium">
                Entrar
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-slate-600 hover:text-sky-600">
            ← Voltar para o site
          </Link>
        </div>
      </div>
    </div>
  );
}
