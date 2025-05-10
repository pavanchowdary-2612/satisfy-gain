import { ShieldCheck, CheckCircle, AlertTriangle } from "lucide-react"

export function GovernmentVerificationInfo() {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Charity Verification</h3>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-2 rounded-full">
            <ShieldCheck className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Government Verified</h4>
            <p className="text-gray-600 text-sm">
              These charities have been verified by government authorities and hold valid registrations such as 80G,
              12A, FCRA, or equivalent certifications. All financial and legal documents have been thoroughly checked.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-purple-100 p-2 rounded-full">
            <CheckCircle className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Platform Verified</h4>
            <p className="text-gray-600 text-sm">
              Our platform has independently verified these organizations through document checks, on-ground visits, and
              impact assessment. They meet our standards for transparency and accountability.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-yellow-100 p-2 rounded-full">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Why Verification Matters</h4>
            <p className="text-gray-600 text-sm">
              Donating to verified charities ensures your money reaches legitimate organizations that are legally
              compliant and transparent about their operations and impact. This reduces the risk of fraud and misuse of
              funds.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
