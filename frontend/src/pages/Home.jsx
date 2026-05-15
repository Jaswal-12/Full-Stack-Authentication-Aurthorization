import { Link } from "react-router-dom";
import "./Home.css";

const features = [
    {
        icon: "✦",
        title: "Elegant by Design",
        text: "Every detail is crafted with intention — from spacing to typography — to create an experience that feels effortlessly refined.",
    },
    {
        icon: "◈",
        title: "Built for Speed",
        text: "Optimised from the ground up so your users never wait. Performance isn't an afterthought; it's the foundation.",
    },
    {
        icon: "⬡",
        title: "Secure by Default",
        text: "Enterprise-grade security baked into every layer, so you ship with confidence and your users trust you.",
    },
];

const stats = [
    { number: "99%",  label: "Uptime SLA" },
    { number: "40ms", label: "Avg. Response" },
    { number: "12k+", label: "Active Users" },
    { number: "4.9★", label: "User Rating" },
];

const Home = () => {
    return (
        <div className="home-wrapper">

            {/* ── Hero ── */}
            <section className="home-hero">
                <div className="home-hero-line" />
                <p className="home-eyebrow">Welcome to Acme</p>
                <h1 className="home-title">
                    Built for those who<br />
                    demand <em>excellence</em>
                </h1>
                <p className="home-subtitle">
                    A modern platform crafted with precision and care —
                    so you can focus on what truly matters.
                </p>
                <div className="home-hero-actions">
                    <Link to="/signup" className="home-btn-primary">Get Started</Link>
                    <Link to="/login"  className="home-btn-ghost">Sign In</Link>
                </div>
            </section>

            <div className="home-divider" />

            {/* ── Features ── */}
            <section className="home-features">
                <p className="home-section-eyebrow">Why Acme</p>
                <h2 className="home-section-title">Everything you need,<br />nothing you don't</h2>

                <div className="home-grid">
                    {features.map((f) => (
                        <div className="home-card" key={f.title}>
                            <div className="home-card-icon">{f.icon}</div>
                            <h3 className="home-card-title">{f.title}</h3>
                            <p className="home-card-text">{f.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Stats ── */}
            <div className="home-stats">
                {stats.map((s) => (
                    <div className="home-stat" key={s.label}>
                        <div className="home-stat-number">{s.number}</div>
                        <div className="home-stat-label">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* ── CTA ── */}
            <section className="home-cta">
                <h2 className="home-cta-title">Ready to get started?</h2>
                <p className="home-cta-sub">
                    Join thousands of users who already trust Acme
                    to power their most important work.
                </p>
                <Link to="/signup" className="home-btn-primary">
                    Create Free Account
                </Link>
            </section>

        </div>
    );
};

export default Home;