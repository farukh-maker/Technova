import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import Toast from "../components/Toast";

const initialForm = { name: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [toast, setToast] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Haqiqiy loyihada ma'lumot shu yerda serverga yuboriladi.
    console.log("Yuborilgan ma'lumot:", form);
    setToast(`Rahmat, ${form.name.trim()}! Xabaringiz yuborildi.`);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section section--alt" aria-labelledby="contact-title">
      <div className="container">
        <SectionTitle
          id="contact-title"
          title="Biz bilan bog‘laning"
          subtitle="Ma’lumotlaringizni qoldiring, tez orada javob beramiz."
        />

        <form className="form" onSubmit={handleSubmit}>
          <label>
            Ismingiz
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Masalan, Farux"
              autoComplete="name"
              required
            />
          </label>

          <label>
            Telefon raqamingiz
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+998 90 123 45 67"
              autoComplete="tel"
              pattern="^\+?[0-9\s\-()]{9,18}$"
              title="Telefon raqamini to‘g‘ri kiriting. Masalan: +998 90 123 45 67"
              required
            />
          </label>

          <label>
            Xabar
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Loyihangiz haqida qisqacha yozing"
              required
            />
          </label>

          <Button type="submit">Xabarni yuborish</Button>
        </form>
      </div>

      <Toast message={toast} onClose={() => setToast("")} />
    </section>
  );
}
