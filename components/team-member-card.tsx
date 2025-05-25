"use client"

import Image from "next/image"
import { useState } from "react"
import { Linkedin } from "lucide-react"

interface TeamMemberCardProps {
  name: string
  position?: string
  classYear?: string
  role?: string
  graduation?: string
  quote: string
  image: string
  linkedin?: string
}

export function TeamMemberCard({ 
  name, 
  position, 
  classYear, 
  role, 
  graduation, 
  quote, 
  image, 
  linkedin 
}: TeamMemberCardProps) {
  const displayPosition = role || position || ''
  const displayClassYear = graduation || classYear || ''
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-dark-800 rounded-lg overflow-hidden relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-all duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Hover Overlay */}
        <div
  className={`absolute inset-0 bg-black border border-gray-600 flex flex-col justify-center items-center p-4 transition-opacity duration-300 ${
    isHovered ? "opacity-100" : "opacity-0"
  }`}
>
  <h3 className="text-xl font-bold text-white text-center mb-2">{name}</h3>
  <p className="text-gray-300 text-sm font-medium mb-1">{displayPosition}</p>
  <p className="text-gray-400 text-sm mb-3">{displayClassYear}</p>
  <p className="text-gray-300 text-xs text-center italic mb-4 leading-relaxed">"{quote}"</p>
  {linkedin && (
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-blue-400 transition-colors duration-200"
    >
      <Linkedin className="w-5 h-5" />
    </a>
  )}
</div>

      </div>
    </div>
  )
}
