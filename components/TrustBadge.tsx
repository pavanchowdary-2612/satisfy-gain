import { ShieldCheck, BadgeCheck, Heart } from "lucide-react"

type TrustBadgeProps = {
  variant: "pci" | "secure" | "donors"
  theme?: "light" | "dark"
  className?: string
}

export const TrustBadge = ({ variant, theme = "dark", className = "" }: TrustBadgeProps) => {
  const getBadgeContent = () => {
    switch (variant) {
      case "pci":
        return {
          icon: <ShieldCheck className="h-5 w-5 text-white" />,
          text: "PCI DSS Certified",
          gradientFrom: "from-pink-500",
          gradientTo: "to-yellow-400",
        }
      case "secure":
        return {
          icon: <BadgeCheck className="h-5 w-5 text-white" />,
          text: "100% Secure Donations",
          gradientFrom: "from-purple-600",
          gradientTo: "to-pink-500",
        }
      case "donors":
        return {
          icon: <Heart className="h-5 w-5 text-white" />,
          text: "1M+ Donors Trust Us",
          gradientFrom: "from-yellow-400",
          gradientTo: "to-orange-500",
        }
      default:
        return {
          icon: null,
          text: "",
          gradientFrom: "from-gray-500",
          gradientTo: "to-gray-700",
        }
    }
  }

  const { icon, text, gradientFrom, gradientTo } = getBadgeContent()

  // Base styles for the badge
  const baseStyles = "trust-badge"

  // Gradient background styles with animation
  const gradientBg = `bg-gradient-to-r ${gradientFrom} ${gradientTo} animated-gradient`

  return (
    <div className={`${baseStyles} ${gradientBg} ${className}`}>
      <div className="trust-badge-icon">{icon}</div>
      <span className="text-base">{text}</span>
    </div>
  )
}

export const TrustBadgeGroup = ({ theme = "dark", className = "" }) => {
  return (
    <div className={`flex flex-wrap justify-center items-center gap-4 ${className}`}>
      <TrustBadge variant="pci" theme={theme} />
      <TrustBadge variant="secure" theme={theme} />
      <TrustBadge variant="donors" theme={theme} />
    </div>
  )
}
