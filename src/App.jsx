import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaDownload, FaChevronDown, FaArrowRight } from "react-icons/fa";

import InfoCard from "./components/Cardinformes";

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-5xl m-auto px-3">
      <section id="home" className="min-h-screen flex items-center relative pt-20 pb-10">
        {/* Gradient background effect */}
        <div className="absolute inset-0 bg-linear-to-br from-[#ffc700]/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column - Content */}
          <div className="space-y-8 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffc700]/10 border border-[#ffc700]/30 rounded-full text-[#ffc700] text-sm font-medium">
              <span className="w-2 h-2 bg-[#ffc700] rounded-full animate-pulse"></span>
              Disponible para nuevos proyectos
            </div>
            
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">Nicolas</span>
                <span className="block bg-linear-to-r from-[#ffc700] to-[#ffb700] bg-clip-text text-transparent">
                  Vazquez Pizzi
                </span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 font-medium">
                Lic. Economía y Finanzas | Trader | Programador
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Especialista en análisis financiero y desarrollo de soluciones tecnológicas 
              para el sector de inversiones. Combinando experiencia práctica con innovación 
              para generar valor real en el mercado.
            </p>
            
            {/* Stats */}
            <div className="flex gap-8 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#ffc700]">5+</div>
                <div className="text-sm text-gray-400">Años Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#ffc700]">50+</div>
                <div className="text-sm text-gray-400">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#ffc700]">100+</div>
                <div className="text-sm text-gray-400">Análisis</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="./img/cv nicolas vazquez.pdf" 
                download
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#ffc700] hover:bg-[#ffb700] text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ffc700]/25"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Descargar CV
              </a>
              <button
                onClick={() => scrollToSection('advisor')}
                className="px-8 py-4 bg-transparent border-2 border-[#ffc700] text-[#ffc700] hover:bg-[#ffc700] hover:text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Contactar
              </button>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/nicolasvazquezpizzi/"
                className="p-3 rounded-full bg-gray-800 hover:bg-[#ffc700] text-gray-300 hover:text-black transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/nicomvazquez"
                className="p-3 rounded-full bg-gray-800 hover:bg-[#ffc700] text-gray-300 hover:text-black transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="mailto:vazquezpizzinicolas@gmail.com"
                className="p-3 rounded-full bg-gray-800 hover:bg-[#ffc700] text-gray-300 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <BiLogoGmail size={20} />
              </a>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Main avatar */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-linear-to-br from-[#ffc700]/20 to-gray-800 p-1 shadow-2xl shadow-[#ffc700]/20">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center border border-[#ffc700]/30 relative overflow-hidden">
                  <span className="text-8xl lg:text-9xl font-bold text-[#ffc700]">NV</span>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-[#ffc700] rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 left-8 w-3 h-3 bg-[#ffc700]/60 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#ffc700]/10 rounded-full flex items-center justify-center border border-[#ffc700]/30 backdrop-blur-sm">
                <span className="text-2xl">📊</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#ffc700]/10 rounded-full flex items-center justify-center border border-[#ffc700]/30 backdrop-blur-sm">
                <span className="text-lg">💼</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-10 h-10 bg-[#ffc700]/10 rounded-full flex items-center justify-center border border-[#ffc700]/30 backdrop-blur-sm">
                <span className="text-sm">🚀</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-[#ffc700] hover:text-white transition-colors duration-300"
          >
            <FaChevronDown size={24} />
          </button>
        </div>
      </section>

      <section id="about" className="py-20 relative">
        {/* Background decoration */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#ffc700]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#ffc700]/3 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Sobre mí
            </h2>
            <div className="w-24 h-1 bg-[#ffc700] mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-700/50 hover:border-[#ffc700]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-12 lg:h-16 bg-[#ffc700] rounded-full shrink-0 mt-2"></div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-[#ffc700] mb-3 lg:mb-4">Formación y Experiencia</h3>
                    <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                      Soy estudiante de Economía y Finanzas, apasionado por los mercados
                      financieros y el análisis de inversiones. Me interesa entender en
                      profundidad cómo funcionan los mercados para anticipar movimientos y
                      tomar decisiones basadas en información sólida y estrategias
                      fundamentadas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-700/50 hover:border-[#ffc700]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-12 lg:h-16 bg-[#ffc700] rounded-full shrink-0 mt-2"></div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-[#ffc700] mb-3 lg:mb-4">Desarrollo Tecnológico</h3>
                    <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                      Además de mi formación en finanzas, cuento con experiencia en
                      desarrollo de software, lo que me ha permitido crear herramientas
                      útiles para el sector, incluyendo bots de trading, indicadores
                      personalizados y sistemas de automatización de operaciones.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-700/50 hover:border-[#ffc700]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-12 lg:h-16 bg-[#ffc700] rounded-full shrink-0 mt-2"></div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-[#ffc700] mb-3 lg:mb-4">Educación Financiera</h3>
                    <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                      La educación financiera es otro eje de mi trabajo: me interesa
                      compartir conocimientos de manera clara y accesible para que más
                      personas puedan gestionar sus finanzas de forma inteligente y tomar
                      decisiones informadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Stats */}
            <div className="space-y-6 lg:space-y-8">
              {/* Skills */}
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-700/50">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 lg:mb-6">Especialidades</h3>
                <div className="space-y-4">
                  {[
                    { skill: "Análisis Financiero", level: "95%" },
                    { skill: "Trading & Inversiones", level: "90%" },
                    { skill: "Desarrollo de Software", level: "85%" },
                    { skill: "Educación Financiera", level: "88%" }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 text-sm lg:text-base">{item.skill}</span>
                        <span className="text-[#ffc700] text-sm lg:text-base">{item.level}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-linear-to-r from-[#ffc700] to-[#ffb700] h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: item.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900/50 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-gray-700/50 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl lg:text-3xl font-bold text-[#ffc700] mb-2">5+</div>
                  <div className="text-gray-300 text-xs lg:text-sm">Años de Experiencia</div>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-gray-700/50 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl lg:text-3xl font-bold text-[#ffc700] mb-2">50+</div>
                  <div className="text-gray-300 text-xs lg:text-sm">Proyectos Completados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="reports"
        className="py-20 w-full max-w-6xl mx-auto text-white relative"
      >
        {/* Background decoration */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#ffc700]/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Mis últimos informes
            </h2>
            <div className="w-24 h-1 bg-[#ffc700] mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Análisis profundos del mercado financiero argentino con perspectivas estratégicas y datos actualizados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
            {/* Primer InfoCard */}
            <InfoCard
              img={"./img/intervencion-bcra.webp"}
              title="Intervención del Tesoro Nacional en el Mercado Cambiario"
              description={
                "En un esfuerzo por redefinir el rumbo económico, el Banco Central de la República Argentina (BCRA) ha implementado nuevas medidas clave. Estas iniciativas buscan principalmente fortalecer las reservas internacionales y consolidar el control de los agregados monetarios."
              }
              url={
                "https://fin.guru/es/economia-y-finanzas/intervention-of-the-national-treasury-in-the-exchange-market-analysis-effects-and-perspectives-q6hz4qaaio"
              }
            />

            {/* Segundo InfoCard */}
            <InfoCard
              img={"./img/medidas-bcra.webp"}
              title="Nuevas Medidas del BCRA: Un Respiro para las Reservas"
              description={
                "En un esfuerzo por redefinir el rumbo económico, el Banco Central de la República Argentina (BCRA) ha implementado nuevas medidas clave. Estas iniciativas buscan principalmente fortalecer las reservas internacionales y consolidar el control de los agregados monetarios."
              }
              url={
                "https://fin.guru/es/economia-y-finanzas/the-new-measures-from-the-bcra-a-breather-for-the-reserves-vfortiof0f"
              }
            />

            {/* Tercer InfoCard */}
            <InfoCard
              img={"./img/dolarizacion-endogena.webp"}
              title="La Reforma Tributaria y el Inicio de la Dolarización"
              description={
                "La reforma de ARCA no solo simplifica impuestos: también marca el inicio de una dolarización endógena. Al relajar controles y habilitar el uso libre de dólares no declarados, se debilita el rol exclusivo del peso y se abre paso a una economía donde el dólar gana terreno por decisión del mercado."
              }
              url={
                "https://fin.guru/es/economia-y-finanzas/the-tax-reform-and-the-beginning-of-dollarization-b0jzbdy7dn"
              }
            />
          </div>

          {/* Botón "ver todos los informes" */}
          <div className="text-center mt-12">
            <a
              href="https://fin.guru/u/nicomvazquez"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#ffc700] text-[#ffc700] hover:bg-[#ffc700] hover:text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Ver todos los informes</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 relative">
        {/* Background decoration */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-[#ffc700]/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-gray-700/50 hover:border-[#ffc700]/30 transition-all duration-500 shadow-2xl shadow-[#ffc700]/10">
            <div className="text-center space-y-6">
              {/* Icon */}
              <div className="w-20 h-20 bg-[#ffc700]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📊</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Newsletter Semanal
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                Suscríbete a mi newsletter semanal y recibe un resumen de las noticias clave del mercado 
                junto con un análisis práctico para tus decisiones de inversión. Mantente informado y un paso adelante cada semana.
              </p>
              
              <div className="pt-4">
                <a
                  href="https://www.linkedin.com/in/nicolasvazquezpizzi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#ffc700] hover:bg-[#ffb700] text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ffc700]/25 group"
                >
                  <span>Suscribirse Ahora</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
              
              <p className="text-sm text-gray-500">
                ✓ Sin spam &nbsp;&nbsp; ✓ Contenido de calidad &nbsp;&nbsp; ✓ Cancela cuando quieras
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="proyects" className="py-20 relative">
        {/* Background decoration */}
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#ffc700]/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Mis Proyectos
            </h2>
            <div className="w-24 h-1 bg-[#ffc700] mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Soluciones tecnológicas innovadoras para el sector financiero y herramientas de análisis especializadas.
            </p>
          </div>

          {/* Featured Project */}
          <div className="mb-12 lg:mb-16">
            <div className="group w-full rounded-2xl overflow-hidden bg-gray-900/80 backdrop-blur-sm shadow-2xl border border-gray-700/50 hover:border-[#ffc700]/50 transform transition-all duration-500 hover:scale-[1.02]">
              <div className="lg:flex">
                {/* Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    className="w-full h-48 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="./img/bot-trading.png"
                    alt="Bot de Trading"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center space-y-4 lg:space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-8 lg:h-12 bg-[#ffc700] rounded-full"></div>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white group-hover:text-[#ffc700] transition-colors duration-300">
                      Bot de Trading Automático
                    </h3>
                  </div>
                  
                  <div className="space-y-3 lg:space-y-4">
                    <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                      Diseñé un bot de trading automatizado que opera en los mercados financieros siguiendo 
                      estrategias definidas y datos en tiempo real. Permite ejecutar órdenes de compra y venta 
                      de manera automática, gestionar riesgos mediante stop-loss y take-profit.
                    </p>
                    
                    <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                      Combina conocimientos de finanzas y desarrollo de software, integrando indicadores 
                      personalizados y herramientas de automatización para maximizar la eficiencia y 
                      reducir errores humanos.
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'APIs', 'Machine Learning', 'Trading'].map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 lg:px-3 py-1 bg-[#ffc700]/20 text-[#ffc700] text-xs lg:text-sm rounded-full border border-[#ffc700]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href="https://github.com/nicomvazquez/trading-bot-crypto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-[#ffc700] hover:bg-[#ffb700] text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#ffc700]/25 group/btn w-fit text-sm lg:text-base"
                  >
                    <span>Ver Proyecto</span>
                    <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard
              img={"./img/calcu-bonos.png"}
              title="Calculadora de Bonos Soberanos"
              description={"Herramienta especializada para cálculos de TIR y flujos de fondos de bonos soberanos argentinos. Incluye análisis de riesgo y rentabilidad."}
              url={"https://docs.google.com/spreadsheets/d/1k_bDEWPKayXkWx6Rz4eJfCrNt9a65lTQ1naOQqzS-yI/edit?usp=sharing"}
            />

            <InfoCard
              img={"./img/calcu-lecaps.png"}
              title="Calculadora de LECAPs"
              description={"Calculadora especializada para LECAPs (Letras Capitalizables del BCRA) con análisis de rendimiento y comparativas del mercado."}
              url={"https://docs.google.com/spreadsheets/d/1fUOVgemeY4AtpKDFp2G5iwxwdtG3fuUqpoFfRsfpPUI/edit?usp=sharing"}
            />

            <InfoCard
              img={"./img/indicadores.png"}
              title="Indicadores Personalizados"
              description={"Colección de indicadores técnicos personalizados para TradingView, optimizados para el análisis del mercado argentino."}
              url={"https://github.com/nicomvazquez/indicadores-trading"}
            />
          </div>
        </div>
      </section>

      <section id="advisor" className="py-20 relative">
        {/* Background decoration */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-[#ffc700]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#ffc700]/3 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Trabajemos Juntos
            </h2>
            <div className="w-24 h-1 bg-[#ffc700] mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              ¿Necesitas asesoramiento financiero profesional o soluciones tecnológicas personalizadas? Contáctame para una consulta.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-[#ffc700]/30 transition-all duration-500 shadow-2xl shadow-[#ffc700]/10">
              <div className="lg:flex">
                {/* Content */}
                <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-16 bg-[#ffc700] rounded-full"></div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-[#ffc700] transition-colors duration-300">
                        Contáctame como tu Asesor
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Ofrezco asesoramiento financiero independiente, combinando experiencia práctica 
                      con formación académica para brindar soluciones efectivas y estrategias fundamentadas.
                    </p>
                  </div>

                  {/* Services List */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      '📊 Análisis de Inversiones',
                      '💼 Asesoramiento Financiero',
                      '🤖 Soluciones Tecnológicas',
                      '📈 Estrategias de Trading'
                    ].map((service, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                      >
                        <span className="text-lg">{service.split(' ')[0]}</span>
                        <span className="text-gray-300">{service.substring(2)}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://www.linkedin.com/in/nicolasvazquezpizzi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ffc700] hover:bg-[#ffb700] text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ffc700]/25 group/btn"
                    >
                      <FaLinkedin />
                      <span>Contactar por LinkedIn</span>
                      <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </a>
                    
                    <a
                      href="mailto:vazquezpizzinicolas@gmail.com"
                      className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-[#ffc700] text-[#ffc700] hover:bg-[#ffc700] hover:text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <BiLogoGmail />
                      <span>Enviar Email</span>
                    </a>
                  </div>
                </div>
                
                {/* Image */}
                <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-[500px]">
                  <img
                    src="./img/grafico.png"
                    alt="Análisis Financiero"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-l from-transparent to-gray-900/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;