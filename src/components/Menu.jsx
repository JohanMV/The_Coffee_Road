import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Menu.css';

const categories = ['Espresso', 'Filtrado', 'Fríos', 'Acompañamientos'];

const menuItems = {
    Espresso: [
        { name: 'Espresso Doble', description: 'Dos shots de espresso con crema densa y aroma intenso', price: '$75' },
        { name: 'Americano', description: 'Espresso diluido con agua caliente, sabor limpio y profundo', price: '$70' },
        { name: 'Cappuccino', description: 'Espresso con leche texturizada y espuma sedosa de arte latte', price: '$95' },
        { name: 'Flat White', description: 'Microespuma de leche sobre espresso ristretto, cuerpo cremoso', price: '$100' },
        { name: 'Mocha de Autor', description: 'Espresso con chocolate belga 72% cacao y leche vaporizada', price: '$115' },
        { name: 'Macchiato', description: 'Shot de espresso manchado con espuma de leche, puro e intenso', price: '$80' },
    ],
    Filtrado: [
        { name: 'Pour Over V60', description: 'Filtrado manual que resalta las notas florales y frutales del origen', price: '$120' },
        { name: 'Chemex', description: 'Filtrado de cuerpo limpio y cristalino, sabor delicado y complejo', price: '$130' },
        { name: 'Aeropress', description: 'Método de presión que produce un café concentrado y versátil', price: '$110' },
        { name: 'Siphon', description: 'Método de vacío con extracción teatral y sabor extraordinario', price: '$160' },
        { name: 'French Press', description: 'Inmersión completa para un cuerpo robusto y aceitoso', price: '$100' },
    ],
    Fríos: [
        { name: 'Cold Brew 16h', description: 'Infusión en frío durante 16 horas, suave y naturalmente dulce', price: '$95' },
        { name: 'Espresso Tónica', description: 'Espresso sobre tónica premium con twist de naranja', price: '$110' },
        { name: 'Iced Latte', description: 'Espresso sobre hielo con leche fría, refrescante y cremoso', price: '$90' },
        { name: 'Affogato', description: 'Gelato artesanal de vainilla ahogado en espresso caliente', price: '$125' },
        { name: 'Frappé de Autor', description: 'Blend helado con café de especialidad y crema de avellana', price: '$115' },
    ],
    Acompañamientos: [
        { name: 'Croissant de Almendra', description: 'Hojaldre francés relleno de crema de almendra tostada', price: '$85' },
        { name: 'Tarta de Frambuesa', description: 'Base de galleta con mousse de frambuesa y chocolate blanco', price: '$95' },
        { name: 'Pain au Chocolat', description: 'Pan de chocolate con masa hojaldrada y chocolate belga', price: '$75' },
        { name: 'Cheesecake Matcha', description: 'Cheesecake japonés con matcha ceremonial de Uji, Kioto', price: '$110' },
    ],
};

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState('Espresso');
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="menu" className="section menu-section" ref={ref}>
            <div className="container">
                <motion.div
                    className="menu-section__header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Carta</span>
                    <h2 className="section-title">
                        Nuestro <em>Menú</em>
                    </h2>
                    <p className="section-description">
                        Una selección curada de preparaciones artesanales, cada una pensada
                        para destacar lo mejor de cada origen.
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    className="menu-section__tabs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`menu-section__tab ${activeCategory === cat ? 'menu-section__tab--active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Menu Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        className="menu-section__grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {menuItems[activeCategory].map((item, i) => (
                            <motion.div
                                key={item.name}
                                className="menu-item"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                            >
                                <div className="menu-item__content">
                                    <div className="menu-item__header">
                                        <h4 className="menu-item__name">{item.name}</h4>
                                        <div className="menu-item__dots" />
                                        <span className="menu-item__price">{item.price}</span>
                                    </div>
                                    <p className="menu-item__description">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Menu Images */}
                <motion.div
                    className="menu-section__images"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="menu-section__image-card">
                        <img src="/images/espresso.png" alt="Espresso artesanal" />
                        <span>Espresso</span>
                    </div>
                    <div className="menu-section__image-card">
                        <img src="/images/latte.png" alt="Latte premium" />
                        <span>Latte</span>
                    </div>
                    <div className="menu-section__image-card">
                        <img src="/images/pourover.png" alt="Pour over V60" />
                        <span>Pour Over</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
