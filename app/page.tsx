import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-sky-600">UAI Sistemas</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicos" className="text-slate-700 hover:text-sky-600 transition-colors">
                Serviços
              </a>
              <a href="#sobre" className="text-slate-700 hover:text-sky-600 transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-slate-700 hover:text-sky-600 transition-colors">
                Contato
              </a>
              <Link
                href="/login"
                className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
              >
                Entrar
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Transformamos ideias em
                <span className="block text-sky-600">soluções digitais</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto" style={{ lineHeight: '150%' }}>
                Desenvolvimento de sistemas sob medida, automação de processos e soluções em nuvem para
                impulsionar seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contato"
                  className="px-8 py-4 bg-sky-600 text-white rounded-lg text-lg font-medium hover:bg-sky-700 transition-all hover:scale-105"
                >
                  Falar com especialista
                </a>
                <a
                  href="#servicos"
                  className="px-8 py-4 bg-white text-sky-600 border-2 border-sky-600 rounded-lg text-lg font-medium hover:bg-sky-50 transition-colors"
                >
                  Conhecer serviços
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="py-20 px-6 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Nossos Serviços
              </h2>
              <p className="text-xl text-slate-600" style={{ lineHeight: '150%' }}>
                Soluções completas para transformar seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Desenvolvimento Web",
                  description: "Sites, sistemas e aplicações web modernas e responsivas com as melhores tecnologias do mercado.",
                  icon: "🌐"
                },
                {
                  title: "Aplicativos Mobile",
                  description: "Apps nativos e híbridos para iOS e Android com design intuitivo e performance excepcional.",
                  icon: "📱"
                },
                {
                  title: "Automação de Processos",
                  description: "Automatize tarefas repetitivas e ganhe eficiência operacional com nossas soluções RPA.",
                  icon: "⚙️"
                },
                {
                  title: "Cloud Computing",
                  description: "Infraestrutura em nuvem escalável, segura e de alta disponibilidade para seu negócio.",
                  icon: "☁️"
                },
                {
                  title: "Consultoria em TI",
                  description: "Assessoria especializada para otimizar sua infraestrutura e processos tecnológicos.",
                  icon: "💡"
                },
                {
                  title: "Suporte Técnico",
                  description: "Atendimento rápido e eficiente para manter seus sistemas sempre funcionando.",
                  icon: "🛠️"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ lineHeight: '120%' }}>
                    {service.title}
                  </h3>
                  <p className="text-slate-600" style={{ lineHeight: '150%' }}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Sobre a UAI Sistemas
              </h2>
              <p className="text-xl text-slate-600 mb-6" style={{ lineHeight: '150%' }}>
                Somos uma empresa especializada em desenvolvimento de software e soluções tecnológicas
                inovadoras. Com uma equipe altamente qualificada, transformamos desafios complexos em
                soluções simples e eficientes.
              </p>
              <p className="text-xl text-slate-600" style={{ lineHeight: '150%' }}>
                Nossa missão é impulsionar o crescimento dos nossos clientes através da tecnologia,
                oferecendo produtos de alta qualidade e um atendimento excepcional.
              </p>
            </div>
          </div>
        </section>

        <section id="contato" className="py-20 px-6 bg-slate-50">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Entre em Contato
              </h2>
              <p className="text-xl text-slate-600" style={{ lineHeight: '150%' }}>
                Vamos conversar sobre seu projeto
              </p>
            </div>

            <form className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
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
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-sky-600 text-white rounded-lg text-lg font-medium hover:bg-sky-700 transition-colors"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-sky-400 mb-4">UAI Sistemas</h3>
              <p className="text-slate-400" style={{ lineHeight: '150%' }}>
                Transformando ideias em soluções digitais inovadoras.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ lineHeight: '120%' }}>Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#servicos" className="text-slate-400 hover:text-sky-400 transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-slate-400 hover:text-sky-400 transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-slate-400 hover:text-sky-400 transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ lineHeight: '120%' }}>Contato</h4>
              <ul className="space-y-2 text-slate-400">
                <li>contato@uaisistemas.com.br</li>
                <li>(31) 99999-9999</li>
                <li>Belo Horizonte - MG</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 UAI Sistemas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
