import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__text">
          <h1 id="hero-title">G‘oyangizni ishlaydigan mahsulotga aylantiramiz</h1>
          <p>
            TechNova — veb-sayt, mobil ilova va Telegram botlar yaratadigan IT jamoa. Rejadan
            ishga tushirishgacha yonma-yon ishlaymiz.
          </p>
          <div className="hero__actions">
            <Button href="#contact">Loyihani boshlash</Button>
            <Button href="#services" variant="outline">
              Xizmatlarni ko‘rish
            </Button>
          </div>
        </div>

        <pre className="hero__code" aria-hidden="true">
{`const project = {
  idea: "sizdan",
  code: "bizdan",
  result: "ishlaydi ✔",
};`}
        </pre>
      </div>
    </section>
  );
}
