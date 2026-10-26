import Button from "../components/Button";

export default function CTA() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container cta__inner">
        <h2 id="cta-title">Loyihangizni bugun boshlaymiz</h2>
        <p>Qisqacha yozing — 24 soat ichida bepul maslahat va taxminiy narxni yuboramiz.</p>
        <Button href="#contact" variant="light">
          Bepul maslahat olish
        </Button>
      </div>
    </section>
  );
}
