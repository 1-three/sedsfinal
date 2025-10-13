export function StatsSection() {
  const stats = [
    { label: "Projects Completed", value: "100+" },
    { label: "Active Chapters", value: "65+" },
    { label: "Global Members", value: "10,000" },
  ]

  return (
    <section className="py-16 bg-dark-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
