import { Rocket, Users, Globe, BookOpen } from "lucide-react"

export function WhatWeDoSection() {
  const features = [
    {
      icon: Rocket,
      title: "Space Projects",
      description: "Hands-on experience with real space missions and projects",
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with like-minded space enthusiasts",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Join chapters worldwide and expand your reach",
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Access resources and learning opportunities",
    },
  ]

  return (
    <section className="py-16 bg-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-dark-700 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
