import { TrustBadge } from "./TrustBadge"

export const FloatingTrustBadges = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-6 pointer-events-none">
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto px-4">
        <div className="animate-float-slow">
          <TrustBadge variant="pci" className="pointer-events-auto" />
        </div>
        <div className="animate-float-medium">
          <TrustBadge variant="secure" className="pointer-events-auto" />
        </div>
        <div className="animate-float-fast">
          <TrustBadge variant="donors" className="pointer-events-auto" />
        </div>
      </div>
    </div>
  )
}
