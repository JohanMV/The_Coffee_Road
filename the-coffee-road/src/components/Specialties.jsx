import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Flame, Droplets, Wind, Sun } from 'lucide-react';
import './Specialties.css';

const specialties = [
    {
        icon: Flame,
        title: 'Espresso Clásico',
        origin: 'Colombia · Huila',
        description: 'Notas de chocolate negro, caramelo y un final prolongado. Cuerpo completo con acidez brillante.',
        roast: 'Tueste Medio',
        price: '$85',
    },
    {
        icon: Droplets,
        title: 'Pour Over V60',
        origin: 'Etiopía · Yirgacheffe',
        description: 'Floral y afrutado con notas de jazmín y durazno. Cuerpo sedoso con acidez cítrica vibrante.',
        roast: 'Tueste Ligero',
        price: '$120',
    },
    {
        icon: Wind,
        title: 'Cold Brew',
        origin: 'Guatemala · Antigua',
        description: 'Infusión fría de 16 horas. Suave, dulce con notas de nuez y chocolate con leche.',
        roast: 'Tueste Medio-Oscuro',
        price: '$95',
    },
    {
        icon: Sun,
        title: 'Cappuccino Artesanal',
        origin: 'Kenia · Nyeri',
        description: 'Espresso con leche texturizada perfecta. Notas de grosella negra, tomate y un final limpio.',
        roast: 'Tueste Medio',
        price: '$105',
    },
];

export default function Specialties() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="specialties" className="section specialties" ref={ref}>
            <div className="specialties__accent-bg" />
            <div className="container">
                <motion.div
                    className="specialties__header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Nuestras Especialidades</span>
                    <h2 className="section-title">
                        Sabores que <em>Inspiran</em>
                    </h2>
                    <p className="section-description">
                        Cada especialidad ha sido cuidadosamente creada para ofrecer una experiencia
                        sensorial única, desde el primer aroma hasta el último sorbo.
                    </p>
                </motion.div>

                <div className="specialties__grid">
                    {specialties.map((item, i) => (
                        <motion.div
                            key={item.title}
                            className="specialty-card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                        >
                            <div className="specialty-card__icon">
                                <item.icon size={24} strokeWidth={1.5} />
                            </div>
                            <div className="specialty-card__header">
                                <h3 className="specialty-card__title">{item.title}</h3>
                                <span className="specialty-card__origin">{item.origin}</span>
                            </div>
                            <p className="specialty-card__description">{item.description}</p>
                            <div className="specialty-card__footer">
                                <span className="specialty-card__roast">{item.roast}</span>
                                <span className="specialty-card__price">{item.price}</span>
                            </div>
                            <div className="specialty-card__shine" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
