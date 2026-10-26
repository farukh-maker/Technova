import SectionTitle from "../components/SectionTitle";
import { advantages } from "../data/advantages";

export default function Advantages() {
  return (
    <section id="advantages" className="section section--alt" aria-labelledby="advantages-title">
      <div className="container">
        <SectionTitle
          id="advantages-title"
          title="Nega aynan biz"
          subtitle="Hamkorlikni oson va ishonchli qiladigan to‘rtta tamoyil."
        />
        <ul className="grid grid--2">
          {advantages.map((a) => (
            <li key={a.id} className="card card--line">
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
