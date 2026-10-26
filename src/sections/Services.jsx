import SectionTitle from "../components/SectionTitle";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <SectionTitle
          id="services-title"
          title="Xizmatlarimiz"
          subtitle="Biznesingiz uchun kerakli barcha IT yechimlar bir joyda."
        />
        <ul className="grid grid--3">
          {services.map((s) => (
            <li key={s.id} className="card">
              <span className="card__icon" aria-hidden="true">
                {s.icon}
              </span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
