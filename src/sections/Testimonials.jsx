import SectionTitle from "../components/SectionTitle";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionTitle
          id="testimonials-title"
          title="Mijozlar fikri"
          subtitle="Biz bilan ishlagan hamkorlarimiz nima deydi."
        />
        <ul className="grid grid--3">
          {testimonials.map((t) => (
            <li key={t.id} className="card">
              <blockquote>“{t.text}”</blockquote>
              <p className="card__author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
