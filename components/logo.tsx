import Image from "next/image"

export function Logo() {
  return (
    <div className="relative w-24 h-24">
      <Image
        src="/logo.png"
        alt="SEDS India"
        width={96}
        height={96}
        className="object-contain"
        priority
      />
    </div>
  )
}
