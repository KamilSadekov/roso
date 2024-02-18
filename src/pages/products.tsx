import { MainLayout } from '~/containers/main-layout';
import cc from 'classcat';
import {
  BLOCK,
  H2,
  H3,
  H4,
  HEADING,
  LI,
  P,
  SUB_BLOCK,
  T,
  TABLE,
  TABLE_CONTAINER,
  THEAD,
  TR,
  UL,
} from '~/shred/constants/article-style';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

export default function Page() {
  const { t } = useTranslation('common');

  return (
    <MainLayout meta={{ description: 'ROSO', title: 'ROSO' }}>
      <div className='container mx-auto flex flex-col items-center justify-start'>
        <article>
          <div className={cc([BLOCK])}>
            <h1 className={cc([HEADING])}>{t('products_title')}</h1>
            <h3 className={cc([H3])}>{t('products_description')}</h3>
            <p className={cc([P])}>{t('products_detailed_description')}</p>
          </div>
          <div className={cc([BLOCK])}>
            <h1 className={cc([HEADING])}>{t('sheets')}</h1>
            <h2 className={cc([H2])}>{t('INDUSTRY-LEADING')}</h2>
            <h4 className={cc([H4])}>{t('ROSO-OFFERS')}</h4>
            <div className={cc([LI])}>1.{t('FIBER-REINFORCED')}</div>
            <p className={cc([P])}>{t('asbestos-free')}</p>
            <div className={cc([LI])}>2.{t('Soft-Sealing')}</div>
            <p className={cc([P])}>{t('PTFE')}</p>
            <div className={cc([LI])}>3.{t('Graphite-Based')}</div>
            <p className={cc([P])}>{t('Quality-Graphite')}</p>
            <div className={cc([LI])}>4. COMPRESSION PACKINGS</div>
            <p className={cc([P])}>
              Compression packings are used to provide an effective sealing
              function in valves, rotary and reciprocating pump applications.
            </p>
            <p className={cc([P])}>
              ROSO product offering ranges from economical traditional packings
              to high specification PTFE grades, which utilize state of the art
              technology to produce a product capable of coping with the highest
              demands of a modern fluid handling system.
            </p>
          </div>
          <div className={cc([BLOCK])}>
            <h1 className={cc([HEADING])}>GASKETS AND SEALS</h1>
            <h3 className={cc([H3])}>
              Our complete range of gaskets for all applications
            </h3>
            <p className={cc([P])}>
              As a leading manufacturer and provider of industrial sealing
              materials, ROSO product portfolio of gaskets remains at the
              forefront of sealing technologies.
            </p>
            <p className={cc([P])}>
              From the revolutionary development of the JG/JP gaskets of the
              world’s leading manufacturer Revoseal to the advanced sealing
              material technology of today, product development, innovation and
              problem-solving abilities have always been the pillars of our
              operating philosophy.
            </p>
            <p className={cc([P])}>
              Gaskets manufactured by ROSO or from ROSO materials are found
              wherever fluids or gases have to be safely contained in pipelines
              and vessels. Fully committed to this approach, our gaskets ensure
              reliable and safe operation – without leakages and subsequent harm
              or material damage.
            </p>
          </div>
          <div className={cc([BLOCK])}>
            <h1 className={cc([HEADING])}>ROSO TEFLEX PTFE gaskets</h1>
            <p className={cc([P])}>
              Our offer of soft sealing material based on PTFE guarantees
              maximum chemical resistance and is designed to satisfy most gasket
              applications. The products of ROSO are tailored to provide the
              features required by the respective industries. Among others, this
              includes sealing even at low surface pressures, high resistance
              against strong acids or strong alkaline solutions, frequent
              fluctuation of pressure, as well as good properties at medium and
              low temperatures.
            </p>
          </div>
          <div className={cc([BLOCK])}>
            <h1 className={cc([HEADING])}>
              ROSO Incapsulated Graphite gaskets
            </h1>
            <p className={cc([P])}>
              Graphite-based gaskets based on encapsulation technology are
              suitable for temperatures between -200 °C and up to 1000 °C, and
              offer resistance against a wide range of chemical products.
              Special geometry of the incapsulated gaskets allows for easy
              removal from the flange, even after exposure to high temperatures.
            </p>
          </div>
          <div className={cc([BLOCK])}>
            <h1 className={cc([HEADING])}>Metallic gaskets</h1>
            <p className={cc([P])}>
              These gaskets, along with the older style jacketed gaskets are
              widely used in petrochemical applications. Metallic gaskets often
              utilize a soft sealing medium such as graphite in conjunction with
              the metal to create a high-strength, high-integrity gasket. This
              results in joints with very high leak-tightness.
            </p>
            <p className={cc([P])}>
              ROSO supplies metallic gaskets in a wide range of alloys to cover
              even the most chemically aggressive applications.
            </p>
            <p className={cc([P])}>
              Rubber-steel gaskets are employed wherever safe sealing of either
              conventional or special industrial media, either in the form of
              liquids or gases, is required. They are typically employed to
              ensure exceptionally low leak rates and are also the optimal
              solution in cases where operators have to work with low bolt loads
              and relatively low temperatures. The steel support ring prevents a
              blowout of the gasket and increases stability, allowing for easy
              handling, even when confronted with challenging fitting
              conditions.
            </p>
            <p className={cc([P])}>
              ROSO gaskets can be used in combination with all types of flange
              materials, ranging from plastic to steel, and are provided in a
              wide range of shapes and dimensions (in diameter up to 4,5 m).
              Amongst others, the product offering includes the EN 1514-1 as
              well as several sizes of the ANSI standard. ROSO gaskets comprise
              the rubber type NBR, EPDM, FKM; other builds are provided on
              demand.
            </p>
            <p className={cc([P])}>
              ROSO gaskets are characterized by an extremely good adhesion
              between the rubber und the steel ring, resulting in a robust and
              safe sealing product. As such, it offers numerous major
              advantages, including easy handling, ruggedness and superior
              sealing capabilities. Last but not least, it also guarantees
              tightness in tandem with uneven (coated) flanges frequently
              encountered in potable water applications.
            </p>
          </div>
          <div className={cc([BLOCK])}>
            <h1 className={cc([HEADING])}>Metallic Gasket ROSO Types</h1>
            <div className={cc([BLOCK])}>
              <h4 className={cc([H4, 'font-bold'])}>Spiral wound gaskets</h4>
              <p className={cc([P])}>
                Widely used throughout refineries and chemical processing
                plants, ROSO Spiral Wound Gaskets are well-suited for power
                generation, pulp and paper, aerospace, and a variety of other
                specialty applications.
              </p>
              <p className={cc([P])}>
                ROSO offers common alloys such as 304L and 316L, as well as a
                vast range of exotic materials, such as INCONEL, HASTELLOY, and
                MONEL. We also have a selection of filler materials, including
                high-purity graphite grades, ePTFE, GYLON®, Mica, and others.
              </p>
              <p className={cc([P])}>
                In addition to our standard ASME B16.20 Gaskets, our engineering
                team can design ROSO Spiral Wounds to fit any custom
                requirement. For specific applications, we also offer Revoseal
                gaskets.
              </p>
              <div className='mx-auto my-5 w-[50%] max-md:w-full'>
                <img
                  src={'/imgs/1.jpeg'}
                  alt={'photo'}
                />
                <img
                  src={'/imgs/2.jpeg'}
                  alt={'photo'}
                />
              </div>
            </div>
            <div className={cc([BLOCK])}>
              <h4 className={cc([H4, 'font-bold'])}>ROSO Insulation gaskets</h4>
              <div className='mx-auto my-5 w-[50%]'>
                <img
                  src={'/imgs/3.jpeg'}
                  alt={'photo'}
                />
              </div>
              <p className={cc([P])}>
                Insulation Gasket is designed to provide chemical resistance and
                fire safety in a single gasket. It seals to the bore of the
                flange in order to limit crevice corrosion inherent in
                hydrofluoric and sulfuric acid alkylation processes.
              </p>
            </div>
            <div className={cc([BLOCK])}>
              <h4 className={cc([H4, 'font-bold'])}>Kammprofile gaskets</h4>
              <p className={cc([P])}>
                Gaskets provide exceptional reliability in difficult
                applications. With a combination of serrated metallic core and
                soft facing, Kammprofile Gaskets are highly compressible and
                adaptable, easy-to-handle, and strong enough to withstand harsh
                operating conditions. ROSO Kammprofile™ Gaskets accommodate
                standard ASME flanges as well as non-standard. Kammprofile
                Gaskets are also an excellent choice for worn heat exchangers
                originally designed for jacketed gaskets.The Kammprofile handles
                pressures from full vacuum to the maximum rating of the flange.
                It also withstands temperatures from cryogenics to 2000°F /
                1090°C, depending on sealing material and metal core.
              </p>
              <div className='mx-auto my-5 w-[50%]'>
                <img
                  src={'/imgs/4.jpeg'}
                  alt={'photo'}
                />
                <img
                  src={'/imgs/5.jpeg'}
                  alt={'photo'}
                />
              </div>
            </div>
            <div className={cc([BLOCK])}>
              <h4 className={cc([H4, 'font-bold'])}>Ring type Joints</h4>
              <div className='mx-auto my-5 w-[50%]'>
                <img
                  src={'/imgs/6.jpeg'}
                  alt={'photo'}
                />
              </div>
            </div>
          </div>
          <div className={cc([BLOCK])}>
            <h1 className={cc([HEADING])}>VALVES</h1>
            <p className={cc([P])}>
              ROSO offers a wide range of industrial valves, including ball
              valves, butterfly valves, piston valves, gate valves, globe
              valves, check valves, knife gate valves, plug valves, bellow seal
              valves, control valves, and safety valves. Our valves are used in
              a variety of industries and meet even the most ball demanding
              specifications. They are suitable for a wide range of applications
              and media, including liquids, gases, and solids.
            </p>

            <div className={cc([SUB_BLOCK])}>
              <h3 className={cc([H3])}>
                Actuators, valves and accessories directly available from stock
              </h3>
              <ul className={cc([UL])}>
                <li>
                  Stainless steel valves with thread and welding ends in sizes
                  1/8″ to 4″
                </li>
                <li> Brass threaded ball valves in sizes 1/8″ to 4″</li>
                <li>Stainless Steel Flanged Ball Valves from DN15 to DN200</li>
                <li> Butterfly valves from DN40 to DN300</li>
                <li>
                  Ball valves made of brass or stainless steel complete with
                  pneumatic part-turn actuator from own production
                </li>
                <li> Pneumatic part-turn actuators from our own production</li>
                <li> Electric part-turn actuators</li>
                <li>
                  Pressure controlled valves made of brass, gunmetal and
                  stainless steel from own production
                </li>
                <li>
                  Knife-gate valves made of GG-25 or stainless steel in sizes
                  DN50 to DN400 from our own production (Spain, Alicante)
                </li>
                <li>
                  Solenoid valves in a wide variety of materials and function
                  types
                </li>
                <li> Stainless steel fittings</li>
                <li> Pneumatic fittings made of brass</li>
                <li> Strainer</li>
                <li> Non-return valves</li>
                <li> Flanged valves</li>
              </ul>
            </div>
            <div className={cc([SUB_BLOCK])}>
              <h3 className={cc([H3])}>Approvals and Certification</h3>
              <ul className={cc([UL])}>
                <li>
                  Certificated Quality Managment System in accordance with DIN
                  EN ISO 9001
                </li>
                <li>
                  The majority of our products carry extensive certification and
                  approvals, e.g.
                </li>
                <li> Testing certification in accordance with DIN EN 10204</li>
                <li> CE-marking in accordance with</li>
                <li> 2014/68/EU (Pressure Equipment Directive)</li>
                <li> 2016/42/EC (Machinery Directive)</li>
                <li>
                  2014/34/EU (Equipment intended for use in potentially
                  explosive atmospheres – ATEX)
                </li>
                <li> Examination Certificates</li>
              </ul>
            </div>
          </div>
          <div className={cc([BLOCK])}>
            <h1 className={cc([HEADING])}>
              INDUSTRIAL MEASUREMENT INSTRUMENTS
            </h1>
            <p className={cc([P])}>
              ROSO’s wide range of tailored to the industry needs high precision
              measurement devices.
            </p>
            <p className={cc([P])}>
              By its nature, measurements demand precision. ROSO offers accurate
              measuring devices you can trust, whether you’re monitoring
              temperatures, determining surface tension, verifying the amount of
              solids in a liquid, or measuring viscosity, density, or gravity.
              From hydrometers to Pycnometers, Imhoff Cones to viscometers — we
              offer measuring devices for a variety of applications ranging —
              from petrochemicals to food and beverage and more. While precision
              and reliability are our primary focus, we’ve also designed our
              portfolio of measuring equipment to be environmentally friendly.
            </p>
            <p className={cc([P])}>
              Offering one of the most extensive within the sealing and fluid
              control industry, ROSO products are obtained exclusively from
              certified sources. Using the latest engineering standards and
              advanced technology, every ROSO product ensures a cutting-edge
              advantage for plant integrity.
            </p>
            <p className={cc([P])}>
              At ROSO we focus on ensuring plant safety. Fully committed to this
              approach, our products ensure reliable and safe operation –
              without leakages and subsequent harm or material damage. Our duty
              is to assist in avoiding such incidents through the provision of
              our innovative and state of the product range, which is tailored
              to meet the specific requirements of the industries we are active
              in.
            </p>
            <div className={cc([SUB_BLOCK])}>
              <h3 className={cc([H3])}>Hydrometers</h3>
              <p className={cc([P])}>
                In accordance with ASTM standards, ROSO supplies hydrometers,
                which are manufactured from glass and are well-suited for
                multiple market segments including petrochemical, environmental,
                chemical industries. The measuring devices are floated in a
                liquid sample and our easy-to-read graduated scale indicates the
                relative density or specific gravity of the solution in units
                appropriate to the application. In response to the market, we’ve
                designed a more environmentally friendly instrument where the
                ballast is made from steel pellets plus a binder, free of
                heavier, toxic metals.
              </p>
            </div>
            <div className={cc([SUB_BLOCK])}>
              <h3 className={cc([H3])}>Pycnometers and Specific Gravity</h3>
              <p className={cc([P])}>
                Psychometry is the most reliable way of calibrating density
                meters. It is the only calibration method which overcomes
                possible measurement errors such as liquid viscosity, flow rate,
                temperature, mounting torque, pressure, position, and vibration.
              </p>
              <ul className={cc([UL])}>
                <li>
                  Capable of determining density to better than ±0.1kg/m³ at the
                  95% confidence level
                </li>
                <li>Simple </li>
                <li> Portable</li>
                <li>Traceable</li>
                <li>
                  11.5 mm diameter valve ports to enable high flow rates through
                  the vessel and give rapid temperature stabilisation.
                </li>
                <li>
                  Internal shape designed to give good mixing with no
                  low-velocity zones. This mitigates against the collection of
                  gas bubbles or water droplets.
                </li>
                <li>
                  Simple, low-maintenance valves, and integral quick
                  connections.
                </li>
                <li>
                  A working pressure of up to 85 bar, with third party test
                  certificates. The vessel is also fitted with a rupture disc to
                  guard against the buildup of excess pressure.
                </li>
                <li> Built under European PED approval from DNV</li>
              </ul>
            </div>
          </div>
          <div className={cc([BLOCK])}>
            <h1 className={cc([HEADING])}>
              ROSO ENGINEERING PUMPING EQUIPMENT
            </h1>
            <p className={cc([P])}>
              The chemical industry produces a wide range of products for
              different spheres. One main focus lies on the production of
              intermediate products for different industrial branches, such as:
            </p>
            <ul className={cc([UL])}>
              <li>Inorganic basic chemicals</li>
              <li>Petrochemicals</li>
              <li>Polymers</li>
              <li>Fine and special chemicals.</li>
            </ul>

            <div className={cc([SUB_BLOCK])}>
              <h3 className={cc([H3])}>
                The production in the chemical industry is based on:
              </h3>

              <div className={cc([TABLE_CONTAINER])}>
                <table className={cc([TABLE])}>
                  <thead className={cc([THEAD])}>
                    <tr>
                      <td className={cc([T])}>
                        The production in the chemical industry is based on:
                      </td>
                      <td className={cc([T])}>Our solution:</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={cc([TR])}>
                      <td className={cc([T])}>High availability </td>
                      <td className={cc([T])}>
                        We provide you with a reliable and nearly
                        maintenance-free pump technology to safe and optimize
                        various processes.
                      </td>
                    </tr>
                    <tr className={cc([TR])}>
                      <td className={cc([T])}>Operational safety </td>
                      <td className={cc([T])}>
                        The leakage-free pump technology ensures the safe
                        conveying of valuable and dangerous fluids.
                      </td>
                    </tr>
                    <tr className={cc([TR])}>
                      <td className={cc([T])}>Cost-intensive research</td>
                      <td className={cc([T])}>
                        As an experienced partner in optimizing and developing
                        processes, we already integrate our know-how into the
                        developing phase of the process.
                      </td>
                    </tr>

                    <tr className={cc([TR])}>
                      <td className={cc([T])}>High-grade engineering</td>
                      <td className={cc([T])}>
                        Simple export constructions allow safe operating methods
                        and minimize complexity. Thus, it can be reached more
                        process safety. ROSO can put a wide range of pumps at
                        your disposal for standardized applications as well as
                        for customized processes.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </article>
      </div>
    </MainLayout>
  );
}
