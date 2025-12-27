"use client";

interface DeviceShowcaseProps {
  title: string;
  description: string;
  devices: Array<{
    name: string;
    description: string;
    capabilities: string[];
  }>;
}

export default function DeviceShowcase({
  title,
  description,
  devices,
}: DeviceShowcaseProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {devices.map((device) => (
            <div
              key={device.name}
              className="glass-effect p-8 hover:shadow-xl transition-smooth group"
            >
              {/* Device header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gradient transition-all">
                  {device.name}
                </h3>
                <p className="text-gray-600 mt-2">{device.description}</p>
              </div>

              {/* Capabilities */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Key Capabilities
                </p>
                <ul className="space-y-2">
                  {device.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-center space-x-3 text-gray-700"
                    >
                      <svg
                        className="w-5 h-5 text-brand-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button className="mt-8 w-full py-3 border-2 border-brand-600 text-brand-600 rounded-lg font-semibold hover:bg-brand-50 transition-smooth">
                Explore Device
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
