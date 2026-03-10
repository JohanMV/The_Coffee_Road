import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Isabella Martínez',
        role: 'Sommelier de Café',
        text: 'The Coffee Road ha redefinido mi concepto de café de especialidad. Cada visita es una revelación de sabores que creía imposibles en una taza. El espresso de origen colombiano es simplemente sublime.',
        rating: 5,
    },
    {
        name: 'Carlos Mendoza',
        role: 'Chef Ejecutivo',
        text: 'Como profesional de la gastronomía, aprecio la dedicación al detalle que se percibe en cada preparación. El maridaje con sus croissants artesanales es una experiencia que recomiendo a todo amante del buen gusto.',
        rating: 5,
    },
    {
        name: 'Victoria Herrera',
        role: 'Arquitecta de Interiores',
        text: 'No solo el café es excepcional — el espacio en sí es una obra maestra del diseño. La atmósfera que han creado es perfecta para inspirarse, reunirse o simplemente disfrutar un momento de paz premium.',
        rating: 5,
    },
    {
        name: 'Diego Fernández',
        role: 'Empresario',
        text: 'Este es mi punto de encuentro favorito para reuniones importantes. La presentación impecable, el servicio atento y la calidad consistente hacen de The Coffee Road un lugar sin comparación.',
        rating: 5,
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent((c) => (c + 1) % testimonials.length);

    return (
        <section id="testimonials" className="section testimonials" ref={ref}>
            <div className="testimonials__bg-text">CAFÉ</div>
            <div className="container">
                <motion.div
                    className="testimonials__header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Testimonios</span>
                    <h2 className="section-title">
                        Lo que Dicen Nuestros <em>Invitados</em>
                    </h2>
                </motion.div>

                <motion.div
                    className="testimonials__container"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Quote className="testimonials__quote-icon" size={48} strokeWidth={1} />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            className="testimonial"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="testimonial__stars">
                                {[...Array(testimonials[current].rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="var(--gold-500)" color="var(--gold-500)" />
                                ))}
                            </div>

                            <p className="testimonial__text">
                                {testimonials[current].text}
                            </p>

                            <div className="testimonial__author">
                                <div className="testimonial__author-avatar">
                                    {testimonials[current].name.charAt(0)}
                                </div>
                                <div>
                                    <span className="testimonial__author-name">{testimonials[current].name}</span>
                                    <span className="testimonial__author-role">{testimonials[current].role}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="testimonials__controls">
                        <button onClick={prev} className="testimonials__arrow" aria-label="Previous testimonial">
                            <ChevronLeft size={20} strokeWidth={1.5} />
                        </button>
                        <div className="testimonials__dots">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                                    onClick={() => setCurrent(i)}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                        <button onClick={next} className="testimonials__arrow" aria-label="Next testimonial">
                            <ChevronRight size={20} strokeWidth={1.5} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
