export default function Hero() {
  return (
    <section className="fac-hero py-5">
      <div className="container py-5">

        <div className="row align-items-center gy-5">

          {/* Left Content */}
          <div className="col-lg-6">

            <h1 className="text-display-xl">
              Building Modern Digital Platforms
            </h1>

            <p className="text-body-lg text-muted mt-4">
              Focused & Creative delivers product-driven web experiences
              engineered for clarity, performance, and growth.
            </p>

            <div className="mt-5 d-flex gap-3 flex-wrap">
              <button className="btn fac-btn-primary">
                View Work
              </button>

              <button className="btn fac-btn-outline">
                Get Started
              </button>
            </div>

          </div>

          {/* Right Visual */}
          <div className="col-lg-6">

            <div className="fac-hero-visual">
              <div className="fac-hero-glow"></div>
              <div className="fac-hero-card shadow-sm">
                <div className="p-4">
                  <h5 className="text-heading-md">
                    Product-First Engineering
                  </h5>
                  <p className="text-body-sm text-muted mt-3">
                    Structured delivery. Clean architecture.
                    Measurable impact.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
