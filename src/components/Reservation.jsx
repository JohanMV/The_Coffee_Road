import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, Clock, Send, Check } from 'lucide-react';
import './Reservation.css';

export default function Reservation() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="reservation" className="section reservation" ref={ref}>
            {/* Background */}
            <div className="reservation__bg">
                <img src="/images/barista.png" alt="" className="reservation__bg-img" />
                <div className="reservation__bg-overlay" />
            </div>

            <div className="container">
                <div className="reservation__layout">
                    {/* Content */}
                    <motion.div
                        className="reservation__content"
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="section-label">Reservaciones</span>
                        <h2 className="section-title">
                            Reserva tu <em>Experiencia</em>
                        </h2>
                        <p className="section-description">
                            Asegura tu lugar en un espacio exclusivo. Nos encargamos de que cada
                            detalle esté listo para recibirte con la excelencia que mereces.
                        </p>

                        <div className="reservation__perks">
                            <div className="reservation__perk">
                                <Check size={16} strokeWidth={2} />
                                <span>Mesa preferencial garantizada</span>
                            </div>
                            <div className="reservation__perk">
                                <Check size={16} strokeWidth={2} />
                                <span>Bienvenida con café de cortesía</span>
                            </div>
                            <div className="reservation__perk">
                                <Check size={16} strokeWidth={2} />
                                <span>Atención personalizada de sommelier</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        className="reservation__form-wrapper"
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <form className="reservation__form" onSubmit={handleSubmit}>
                            <h3 className="reservation__form-title">Haz tu Reservación</h3>

                            <div className="reservation__form-row">
                                <div className="reservation__field">
                                    <label className="reservation__label">Nombre Completo</label>
                                    <input
                                        type="text"
                                        className="reservation__input"
                                        placeholder="Tu nombre"
                                        required
                                    />
                                </div>
                                <div className="reservation__field">
                                    <label className="reservation__label">Email</label>
                                    <input
                                        type="email"
                                        className="reservation__input"
                                        placeholder="tu@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="reservation__form-row reservation__form-row--3">
                                <div className="reservation__field">
                                    <label className="reservation__label">
                                        <Calendar size={14} /> Fecha
                                    </label>
                                    <input
                                        type="date"
                                        className="reservation__input"
                                        required
                                    />
                                </div>
                                <div className="reservation__field">
                                    <label className="reservation__label">
                                        <Clock size={14} /> Hora
                                    </label>
                                    <select className="reservation__input" required>
                                        <option value="">Seleccionar</option>
                                        <option value="07:00">07:00</option>
                                        <option value="08:00">08:00</option>
                                        <option value="09:00">09:00</option>
                                        <option value="10:00">10:00</option>
                                        <option value="11:00">11:00</option>
                                        <option value="12:00">12:00</option>
                                        <option value="13:00">13:00</option>
                                        <option value="14:00">14:00</option>
                                        <option value="15:00">15:00</option>
                                        <option value="16:00">16:00</option>
                                        <option value="17:00">17:00</option>
                                        <option value="18:00">18:00</option>
                                        <option value="19:00">19:00</option>
                                        <option value="20:00">20:00</option>
                                        <option value="21:00">21:00</option>
                                    </select>
                                </div>
                                <div className="reservation__field">
                                    <label className="reservation__label">
                                        <Users size={14} /> Personas
                                    </label>
                                    <select className="reservation__input" required>
                                        <option value="">Seleccionar</option>
                                        <option value="1">1 persona</option>
                                        <option value="2">2 personas</option>
                                        <option value="3">3 personas</option>
                                        <option value="4">4 personas</option>
                                        <option value="5">5 personas</option>
                                        <option value="6">6+ personas</option>
                                    </select>
                                </div>
                            </div>

                            <div className="reservation__field">
                                <label className="reservation__label">Notas Especiales</label>
                                <textarea
                                    className="reservation__input reservation__textarea"
                                    placeholder="Ocasión especial, alergias, preferencias..."
                                    rows={3}
                                />
                            </div>

                            <button
                                type="submit"
                                className={`btn-primary reservation__submit ${submitted ? 'reservation__submit--done' : ''}`}
                            >
                                {submitted ? (
                                    <>
                                        <Check size={18} />
                                        ¡Reservación Recibida!
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} />
                                        Confirmar Reservación
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
