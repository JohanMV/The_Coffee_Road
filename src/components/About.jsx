import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf, Award, Heart } from 'lucide-react';
import './About.css';

const values = [
    {
        icon: Leaf,
        title: 'Origen Sostenible',
        description: 'Trabajamos directamente con fincas certificadas, respetando el planeta y las comunidades productoras.',
    },
    {
        icon: Award,
        title: 'Tueste Artesanal',
        description: 'Cada lote es tostado a mano en pequeñas cantidades para garantizar frescura y perfil de sabor único.',
    },
    {
        icon: Heart,
        title: 'Pasión por el Detalle',
        description: 'Desde la selección del grano hasta la presentación final, cada paso es cuidado con devoción artesanal.',
    },
];

export default function About() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section id="about" className="section about" ref={ref}>
            {/* Decorative line */}
            <div className="about__line" />

            <div className="container">
                <div className="about__grid">
                    {/* Image */}
                    <motion.div
                        className="about__image-wrapper"
                        initial={{ opacity: 0, x: -60 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div className="about__image-container">
                            <img src="/images/beans.png" alt="Granos de café premium" className="about__image" />
                            <div className="about__image-overlay" />
                        </div>
                        <div className="about__image-badge">
                            <span className="about__image-badge-number">100%</span>
                            <span className="about__image-badge-text">Arábica de<br />Especialidad</span>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="about__content"
                        initial={{ opacity: 0, x: 60 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="section-label">Nuestra Historia</span>
                        <h2 className="section-title">
                            Una Tradición de <em>Excelencia</em> en Cada Grano
                        </h2>
                        <p className="section-description">
                            Desde 2018, The Coffee Road ha sido un santuario para los amantes del café excepcional.
                            Nuestro viaje comenzó con una simple pasión: descubrir los mejores granos del mundo
                            y transformarlos en una experiencia inolvidable.
                        </p>
                        <p className="about__detail">
                            Recorremos fincas en Colombia, Etiopía, Guatemala y Kenia para seleccionar granos
                            de la más alta calidad. Cada origen trae una historia única de terroir, clima y
                            tradición que se refleja en tu taza.
                        </p>

                        <div className="about__values">
                            {values.map((value, i) => (
                                <motion.div
                                    key={value.title}
                                    className="about__value"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                                >
                                    <div className="about__value-icon">
                                        <value.icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="about__value-title">{value.title}</h4>
                                        <p className="about__value-desc">{value.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
