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
    <section className="py-16 sm:py-24 gradient-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {devices.map((device) => (
            <div
              key={device.name}
              className="glass-effect p-6 sm:p-8 hover:shadow-xl dark:hover:shadow-brand-600/20 transition-smooth group"
            >
              {/* Device header */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-gradient transition-all">
                  {device.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
                  {device.description}
                </p>
              </div>

              {/* Capabilities */}
              <div className="space-y-3">
                <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Key Capabilities
                </p>
                <ul className="space-y-2">
                  {device.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-center space-x-3 text-sm sm:text-base text-gray-700 dark:text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-brand-500 dark:text-brand-400 flex-shrink-0"
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
              <button className="mt-8 w-full py-3 border-2 border-brand-600 dark:border-brand-500 text-brand-600 dark:text-brand-400 rounded-lg font-semibold hover:bg-brand-50 dark:hover:bg-gray-900 transition-smooth">
                Explore Device
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
