import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import InfoCard from "./components/Cardinformes";

function App() {
  return (
    <div className="max-w-5xl m-auto px-3">
      <section id="home" className="sm:py-80 py-56 w-full border-b-2">
        <div className="w-full flex flex-col gap-5 ">
          <h1 className="text-7xl font-medium">Nicolas Vazquez Pizzi</h1>
          <p className="text-[#ffc700] text-xl">
            Lic. Economia y Finanzas | Trader | Programador
          </p>
          <div className="flex gap-5">
            <a
              href="./img/cv nicolas vazquez.pdf" download
              className="inline-block px-8 py-3 bg-transparent border border-gray-600 text-gray-300 font-medium rounded-lg transition duration-200 hover:bg-gray-800 hover:border-[#ffc700]"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="my-36">
        <div
          className="
        m-auto w-full                      
        bg-gray-900                             
        p-8 sm:p-12                                 
        rounded-2xl lg:rounded-3xl        
        flex flex-col gap-6                
        shadow-xl shadow-[#ffc700]/10                
        border border-gray-700"
        >
          <p
            className="
            text-xl font-light text-gray-300         /* Fuente más grande y ligera */
            border-l-4 border-[#ffc700] pl-4           /* Añade una línea de destaque a la izquierda */
            leading-relaxed                         /* Mejora la separación de las líneas */
        "
          >
            Soy estudiante de Economía y Finanzas, apasionado por los mercados
            financieros y el análisis de inversiones. Me interesa entender en
            profundidad cómo funcionan los mercados para anticipar movimientos y
            tomar decisiones basadas en información sólida y estrategias
            fundamentadas. Actualmente me desempeño como asesor financiero
            independiente, combinando experiencia práctica con formación
            académica para brindar soluciones efectivas a clientes y proyectos
            financieros.
          </p>

          {/* Párrafo 2: Texto secundario/continuación */}
          <p
            className="
            text-lg text-gray-400                   /* Texto ligeramente más pequeño y tenue */
            leading-relaxed
        "
          >
            Además de mi formación en finanzas, cuento con experiencia en
            desarrollo de software, lo que me ha permitido crear herramientas
            útiles para el sector, incluyendo bots de trading, indicadores
            personalizados y sistemas de automatización de operaciones. Estas
            soluciones buscan optimizar la eficiencia, mejorar la toma de
            decisiones y aplicar tecnología de manera práctica al análisis
            financiero.
          </p>
          <p
            className="
            text-lg text-gray-400                   /* Texto ligeramente más pequeño y tenue */
            leading-relaxed
        "
          >
            La educación financiera es otro eje de mi trabajo: me interesa
            compartir conocimientos de manera clara y accesible para que más
            personas puedan gestionar sus finanzas de forma inteligente y tomar
            decisiones informadas. Mi objetivo profesional es consolidarme en el
            sector financiero, aportar soluciones innovadoras y seguir
            explorando la intersección entre finanzas y tecnología para generar
            valor real en el mercado.
          </p>
        </div>
      </section>

      <section
        id="reports"
        className="my-20 w-full max-w-6xl mx-auto text-white"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-left">
          Mis últimos informes
        </h1>

        <div
          className="
                grid 
                grid-cols-1                /* 1 columna en móvil */
                md:grid-cols-2             /* 2 columnas en pantallas medianas */
                gap-8 my-10
            "
        >
          {/* Primer InfoCard */}
          <InfoCard
            img={"./img/intervencion-bcra.webp"}
            description={
              "En un esfuerzo por redefinir el rumbo económico, el Banco Central de la República Argentina (BCRA) ha implementado nuevas medidas clave. Estas iniciativas buscan principalmente fortalecer las reservas internacionales y consolidar el control de los agregados monetarios. El objetivo es claro: avanzar hacia una desinflación duradera y una mayor estabilidad cambiaria, sentando las bases para un crecimiento económico más sólido en Argentina."
            }
            url={
              "https://fin.guru/es/economia-y-finanzas/intervention-of-the-national-treasury-in-the-exchange-market-analysis-effects-and-perspectives-q6hz4qaaio"
            }
          />

          {/* Segundo InfoCard */}
          <InfoCard
            img={"./img/medidas-bcra.webp"}
            description={
              "En un esfuerzo por redefinir el rumbo económico, el Banco Central de la República Argentina (BCRA) ha implementado nuevas medidas clave. Estas iniciativas buscan principalmente fortalecer las reservas internacionales y consolidar el control de los agregados monetarios. El objetivo es claro: avanzar hacia una desinflación duradera y una mayor estabilidad cambiaria, sentando las bases para un crecimiento económico más sólido en Argentina."
            }
            url={
              "https://fin.guru/es/economia-y-finanzas/the-new-measures-from-the-bcra-a-breather-for-the-reserves-vfortiof0f"
            }
          />

          {/* Añadimos un tercer Card para demostrar el Grid */}
          <InfoCard
            img={"./img/dolarizacion-endogena.webp"}
            description={
              "La reforma de ARCA no solo simplifica impuestos: también marca el inicio de una dolarización endógena. Al relajar controles y habilitar el uso libre de dólares no declarados, se debilita el rol exclusivo del peso y se abre paso a una economía donde el dólar gana terreno por decisión del mercado."
            }
            url={
              "https://fin.guru/es/economia-y-finanzas/the-tax-reform-and-the-beginning-of-dollarization-b0jzbdy7dn"
            }
          />
        </div>

        {/* Botón "ver todos los informes" */}
        <div className="w-full mt-12">
          <a
            href="https://fin.guru/u/nicomvazquez"
            className="inline-block px-8 py-3 bg-transparent border border-gray-600 text-gray-300 font-medium rounded-lg transition duration-200 hover:bg-gray-800 hover:border-[#ffc700]"
          >
            Ver todos los informes
          </a>
        </div>
      </section>

      <section id="news" className="py-20">
        <div
          className="
        m-auto w-full                      
        bg-gray-900                             
        p-8 sm:p-12                                 
        rounded-2xl lg:rounded-3xl        
        flex flex-col gap-6                
        shadow-xl shadow-[#ffc700]/10                
        border border-gray-700"
        >
          <p
            className="
            text-2xl      
            border-l-4 border-[#ffc700] pl-4           
            leading-relaxed                         
        "
          >
            Newalwtter semanal
          </p>

          {/* Párrafo 2: Texto secundario/continuación */}
          <p
            className="
            text-lg text-gray-400                   /* Texto ligeramente más pequeño y tenue */
            leading-relaxed
        "
          >
            Suscribite a mi newsletter semanal y recibí un resumen de las
            noticias clave del mercado junto con un análisis práctico para tus
            decisiones de inversión. Mantente informado y un paso adelante cada
            semana.
          </p>
          <div className="w-full">
            <a
              href="https://www.linkedin.com/in/nicolasvazquezpizzi/"
              className="inline-block px-8 py-3 bg-transparent border text-gray-300 font-medium rounded-lg transition duration-200 border-[#ffc700] hover:bg-[#ffc80038]"
            >
              Suscribirse
            </a>
          </div>
        </div>
      </section>

      <section id="proyects" className="py-20">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-10 text-left">
          Mis proyectos
        </h1>
        <div className="w-full rounded-xl overflow-hidden bg-gray-900 shadow-lg border border-gray-700 transform transition duration-300 shadow-[#ffc700]/10">
          <img
            className="w-full h-48 object-cover"
            src="./img/bot-trading.png"
            alt="Imagen del informe"
          />
          <div className="p-6 ">
            <h1
              className="text-2xl      
            border-l-4 border-[#ffc700] pl-4           
            leading-relaxed  "
            >
              Bot de trading
            </h1>
            <p className="text-gray-300 text-md mb-4 my-5">
              Diseñé un bot de trading automatizado que opera en los mercados
              financieros siguiendo estrategias definidas y datos en tiempo
              real. Permite ejecutar órdenes de compra y venta de manera
              automática, gestionar riesgos mediante stop-loss y take-profit, y
              analizar resultados históricos para optimizar decisiones de
              inversión.
            </p>
            <p className="text-gray-300 text-md mb-4 my-5">
              Combina conocimientos de finanzas y desarrollo de software,
              integrando indicadores personalizados y herramientas de
              automatización. Su objetivo es maximizar la eficiencia, reducir
              errores humanos y generar valor en la gestión de operaciones,
              aplicando tecnología de manera práctica al trading profesional.
            </p>
            <a
              href="https://github.com/nicomvazquez/trading-bot-crypto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#ffc700] hover:bg-[#c09600] text-black font-medium rounded-lg transition duration-200"
            >
              Ver
            </a>
          </div>
        </div>
      </section>

      <section className="my-20 w-full max-w-6xl mx-auto text-white">
        <div
          className="
                grid 
                grid-cols-1                /* 1 columna en móvil */
                md:grid-cols-2             /* 2 columnas en pantallas medianas */
                gap-8 my-10
            "
        >
          {/* Primer InfoCard */}
          <InfoCard
            img={"./img/calcu-bonos.png"}
            description={
              "Calculadora de bonos soberanos, calculos de TIR y flujos de fondos"
            }
            url={
              "https://docs.google.com/spreadsheets/d/1k_bDEWPKayXkWx6Rz4eJfCrNt9a65lTQ1naOQqzS-yI/edit?usp=sharing"
            }
          />

          {/* Segundo InfoCard */}
          <InfoCard
            img={"./img/calcu-lecaps.png"}
            description={"Calculadora de LECAPs"}
            url={
              "https://docs.google.com/spreadsheets/d/1fUOVgemeY4AtpKDFp2G5iwxwdtG3fuUqpoFfRsfpPUI/edit?usp=sharing"
            }
          />

          {/* Añadimos un tercer Card para demostrar el Grid */}
          <InfoCard
            img={"./img/indicadores.png"}
            description={"Indicadores personalizados para TradingWView"}
            url={"https://github.com/nicomvazquez/indicadores-trading"}
          />
        </div>
      </section>

      <section id="advisor" className="py-20">
        <div className="m-auto w-full bg-gray-900 border border-gray-700  p-0 rounded-4xl overflow-hidden  shadow-xl    text-white  flex  transform transition duration-300 shadow-[#ffc700]/10">
          <div className="sm:w-2/5 w-full p-6 sm:p-8 flex flex-col justify-center gap-5">
            {/* Párrafo de Descripción */}
            <p
              className="
            text-2xl      
            border-l-4 border-[#ffc700] pl-4           
            leading-relaxed                         
        "
            >
              Contactame como tu asesor
            </p>

            <div className="w-full">
              <a
                href="https://www.linkedin.com/in/nicolasvazquezpizzi/"
                className="inline-block px-8 py-3 bg-transparent border text-gray-300 font-medium rounded-lg transition duration-200 border-[#ffc700] hover:bg-[#ffc80038]"
              >
                Contacto
              </a>
            </div>
          </div>
          <div className="w-4/5  hidden sm:block">
            <img
              src="./img/grafico.png"
              alt="Imagen de proyecto"
              // h-full y object-cover son clave para que la imagen ocupe el espacio
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
