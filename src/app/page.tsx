import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import DeviceShowcase from "@/components/DeviceShowcase";
import Footer from "@/components/Footer";

const navLinks = [
  { href: "#devices", label: "Devices" },
  { href: "#features", label: "Features" },
  { href: "#privacy", label: "Privacy" },
  { href: "#about", label: "About" },
];

const features = [
  {
    icon: "🧠",
    title: "Neural Integration",
    description: "Direct brain-device connection for enhanced therapy and personal visualization.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "🔐",
    title: "Privacy First",
    description: "Quantum-powered encryption. Your data is yours. Never sold, always protected.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🔬",
    title: "Quantum Backed",
    description: "Advanced quantum computing for data restoration and potential future recovery.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: "📊",
    title: "Personal Analytics",
    description: "Understand yourself deeper with advanced visualization of your patterns.",
    gradient: "from-orange-500 to-red-500",
  },
];

const devices = [
  {
    name: "VR Therapy Headset",
    description: "State-of-the-art immersive therapy environment",
    capabilities: [
      "Neural pattern recognition",
      "Immersive therapy environments",
      "Real-time biometric feedback",
      "Quantum-encrypted data storage",
      "Personalized trauma processing",
    ],
  },
  {
    name: "Smart Tech Glasses",
    description: "Track your daily progress and life changes",
    capabilities: [
      "Real-time visual feedback",
      "Life pattern tracking",
      "Decision analytics",
      "Mood and stress monitoring",
      "AR-powered personal insights",
    ],
  },
  {
    name: "Neural Monitor Band",
    description: "Wearable brain-activity tracking device",
    capabilities: [
      "Sleep quality analysis",
      "Stress level detection",
      "Focus pattern tracking",
      "Emotional state recognition",
      "Wellness recommendations",
    ],
  },
  {
    name: "Personal AI Guide",
    description: "Your quantum-powered personal assistant",
    capabilities: [
      "Predictive life guidance",
      "Decision simulation",
      "Future path visualization",
      "Trauma-informed support",
      "Privacy-preserved learning",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header navLinks={navLinks} />

      <Hero
        title="Become Your Best Self"
        subtitle="Advanced personal technology devices powered by quantum privacy to help you understand yourself, heal, grow, and make decisions that lead to your best future."
        primaryCTA="Explore Devices"
        secondaryCTA="Watch Demo"
      />

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Why FREE by Ma™
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with intention. Designed for freedom. Powered by quantum security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Devices Showcase */}
      <DeviceShowcase
        title="Our Devices"
        description="Cutting-edge technology designed to help you understand yourself and unlock your potential"
        devices={devices}
      />

      {/* Privacy Section */}
      <section id="privacy" className="py-24 bg-gradient-to-b from-white to-brand-50/30">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Your Data. Your Control.
            </h2>
            <p className="text-xl text-gray-600">
              We believe in complete privacy and data ownership. Your personal data is never sold.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <div className="text-4xl">🔒</div>
              <h3 className="text-xl font-bold">Quantum Encrypted</h3>
              <p className="text-gray-600">Military-grade quantum encryption protects your data.</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">🗑️</div>
              <h3 className="text-xl font-bold">Auto-Delete Option</h3>
              <p className="text-gray-600">Data automatically deleted after each session unless saved.</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">🙏</div>
              <h3 className="text-xl font-bold">No Algorithm Control</h3>
              <p className="text-gray-600">We don't manipulate your choices—you return by will.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
