import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold text-sky-600 mb-2">UAI Sistemas</h1>
          </Link>
          <h2 className="text-2xl font-bold text-slate-900">Bem-vindo de volta</h2>
          <p className="text-slate-600 mt-2">Entre com sua conta para continuar</p>
        </div>

        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
          <form>
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

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500"
                />
                <span className="ml-2 text-sm text-slate-700">Lembrar de mim</span>
              </label>
              <a href="#" className="text-sm text-sky-600 hover:text-sky-700">
                Esqueceu a senha?
              </a>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
            >
              Entrar
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              Não tem uma conta?{" "}
              <Link href="/cadastro" className="text-sky-600 hover:text-sky-700 font-medium">
                Cadastre-se
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
