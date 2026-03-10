import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const features = [
    { number: '01', title: 'Ambiente Exclusivo', description: 'Un espacio diseñado para estimular los sentidos con iluminación cálida, acabados premium y acústica perfecta.' },
    { number: '02', title: 'Servicio de Sommelier', description: 'Nuestros catadores certificados te guían en la selección perfecta según tu paladar y estado de ánimo.' },
    { number: '03', title: 'Maridajes Gourmet', description: 'Combinaciones únicas de café con repostería artesanal francesa y chocolatería belga de autor.' },
];

export default function Experience() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

    return (
        <section id="experience" className="section experience" ref={ref}>
            <div className="container">
                <div className="experience__layout">
                    {/* Content Side */}
                    <motion.div
                        className="experience__content"
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="section-label">La Experiencia</span>
                        <h2 className="section-title">
                            Más que Café,<br />
                            una <em>Experiencia</em><br />
                            Sensorial
                        </h2>
                        <p className="section-description">
                            En The Coffee Road, cada visita es un viaje. Desde el momento en que cruzas
                            la puerta, estás envuelto en un mundo de aromas, sabores y texturas que
                            transforman lo cotidiano en extraordinario.
                        </p>

                        <div className="experience__features">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={feature.number}
                                    className="experience__feature"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                                >
                                    <span className="experience__feature-number">{feature.number}</span>
                                    <div>
                                        <h4 className="experience__feature-title">{feature.title}</h4>
                                        <p className="experience__feature-desc">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        className="experience__image-col"
                        initial={{ opacity: 0, x: 60 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="experience__image-wrapper">
                            <img
                                src="/images/experience.png"
                                alt="Experiencia premium en The Coffee Road"
                                className="experience__image"
                            />
                            <div className="experience__image-frame" />
                        </div>
                        <div className="experience__quote">
                            <p>&ldquo;El café es el momento en que el mundo se detiene y los sentidos despiertan.&rdquo;</p>
                            <span>— Filosofía The Coffee Road</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
