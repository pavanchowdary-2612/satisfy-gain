"use client"

import { useState } from "react"
import {
  Wallet,
  CreditCard,
  ArrowRight,
  Check,
  Sparkles,
  Shield,
  Eye,
  EyeOff,
  Info,
  AlertCircle,
  Clock,
} from "lucide-react"
import { useRouter } from "next/navigation"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"
import { TrustBadgeGroup } from "@/components/TrustBadge"

const DonationPage = () => {
  const router = useRouter()
  const [donationAmount, setDonationAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isRecurring, setIsRecurring] = useState(false)
  const [recurringFrequency, setRecurringFrequency] = useState("monthly")
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [showCardDetails, setShowCardDetails] = useState(false)
  const [cardNumber, setCardNumber] = useState("")
  const [cardExpiry, setCardExpiry] = useState("")
  const [cardCvv, setCvv] = useState("")
  const [cardName, setCardName] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [selectedCharity, setSelectedCharity] = useState(null)
  const [useAI, setUseAI] = useState(false)

  // Sample charity data
  const charities = [
    {
      id: 1,
      name: "Educate India Foundation",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      name: "Healthcare For All",
      category: "Healthcare",
      image:
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      name: "Clean Water Initiative",
      category: "Environment",
      image:
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ]

  // AI recommendation categories
  const aiCategories = [
    { id: 1, name: "Education", percentage: 40 },
    { id: 2, name: "Healthcare", percentage: 30 },
    { id: 3, name: "Environment", percentage: 20 },
    { id: 4, name: "Elderly Care", percentage: 10 },
  ]

  const predefinedAmounts = ["100", "500", "1000", "5000"]

  const handleAmountClick = (amount) => {
    setDonationAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "")
    setCustomAmount(value)
    setDonationAmount(value)
  }

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  const handleCardNumberChange = (e) => {
    const value = formatCardNumber(e.target.value)
    setCardNumber(value)
  }

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")

    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`
    }

    return v
  }

  const handleExpiryChange = (e) => {
    const value = formatExpiry(e.target.value)
    setCardExpiry(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to success page or dashboard
    router.push("/dashboard")
  }

  const calculateTotalAmount = () => {
    const amount = Number.parseInt(donationAmount) || 0
    return amount
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4 inline-block mr-2" />
                <span>Make a Difference Today</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Donation Matters</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every contribution, no matter how small, creates a meaningful impact in someone's life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Make Your Donation</h2>

                  <form onSubmit={handleSubmit}>
                    {/* Donation Amount */}
                    <div className="mb-8">
                      <label className="block text-lg font-medium text-gray-900 mb-4">Select Donation Amount</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        {predefinedAmounts.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            className={`py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                              donationAmount === amount
                                ? "border-pink-500 bg-pink-50 text-pink-700"
                                : "border-gray-200 hover:border-pink-300 hover:bg-pink-50"
                            }`}
                            onClick={() => handleAmountClick(amount)}
                          >
                            ₹{amount}
                          </button>
                        ))}
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                        <input
                          type="text"
                          placeholder="Custom Amount"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                    </div>

                    {/* Smart Wallet Option */}
                    <div className="mb-8 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="bg-white p-2 rounded-lg shadow-sm">
                          <Wallet className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-1">Smart Wallet System</h3>
                          <p className="text-gray-600 mb-3">
                            Your donation will be stored in a wallet and used when a threshold amount is reached,
                            ensuring maximum impact.
                          </p>
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="useWallet"
                              className="rounded border-gray-300 text-purple-600 focus:ring-purple-500 h-4 w-4"
                            />
                            <label htmlFor="useWallet" className="text-sm font-medium text-gray-700">
                              Use Smart Wallet for this donation
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Charity Selection */}
                    <div className="mb-8">
                      <label className="block text-lg font-medium text-gray-900 mb-4">
                        Select Charity or Use AI Recommendation
                      </label>

                      <div className="flex items-center gap-4 mb-6">
                        <button
                          type="button"
                          className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                            !useAI
                              ? "border-purple-600 bg-purple-50 text-purple-700"
                              : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"
                          }`}
                          onClick={() => setUseAI(false)}
                        >
                          Choose Charity
                        </button>
                        <button
                          type="button"
                          className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                            useAI
                              ? "border-purple-600 bg-purple-50 text-purple-700"
                              : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"
                          }`}
                          onClick={() => setUseAI(true)}
                        >
                          AI Recommendation
                        </button>
                      </div>

                      {!useAI ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {charities.map((charity) => (
                            <div
                              key={charity.id}
                              className={`border-2 rounded-lg overflow-hidden cursor-pointer transition-all ${
                                selectedCharity === charity.id
                                  ? "border-purple-600 shadow-md"
                                  : "border-gray-200 hover:border-purple-300"
                              }`}
                              onClick={() => setSelectedCharity(charity.id)}
                            >
                              <div className="h-32 relative">
                                <img
                                  src={charity.image || "/placeholder.svg"}
                                  alt={charity.name}
                                  className="w-full h-full object-cover"
                                />
                                {selectedCharity === charity.id && (
                                  <div className="absolute top-2 right-2 bg-purple-600 text-white p-1 rounded-full">
                                    <Check className="h-4 w-4" />
                                  </div>
                                )}
                              </div>
                              <div className="p-3">
                                <h4 className="font-medium text-gray-900">{charity.name}</h4>
                                <p className="text-sm text-gray-500">{charity.category}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="border-2 border-gray-200 rounded-lg p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="bg-purple-100 p-2 rounded-lg">
                              <Sparkles className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                              <h3 className="text-lg font-medium text-gray-900">AI-Powered Allocation</h3>
                              <p className="text-gray-600">
                                Our AI will distribute your donation to verified and active charities based on real-time
                                needs.
                              </p>
                            </div>
                          </div>

                          <div className="space-y-4 mb-4">
                            {aiCategories.map((category) => (
                              <div key={category.id}>
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-sm font-medium">{category.name}</span>
                                  <span className="text-sm text-gray-500">{category.percentage}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div
                                    className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full"
                                    style={{ width: `${category.percentage}%` }}
                                  ></div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="text-sm text-gray-600 flex items-start gap-2">
                            <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <p>
                              AI recommendations are based on current needs, impact potential, and your donation
                              history. You can adjust these allocations if desired.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Donation Frequency */}
                    <div className="mb-8">
                      <label className="block text-lg font-medium text-gray-900 mb-4">Donation Frequency</label>
                      <div className="flex items-center gap-4 mb-4">
                        <button
                          type="button"
                          className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                            !isRecurring
                              ? "border-purple-600 bg-purple-50 text-purple-700"
                              : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"
                          }`}
                          onClick={() => setIsRecurring(false)}
                        >
                          One-time
                        </button>
                        <button
                          type="button"
                          className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                            isRecurring
                              ? "border-purple-600 bg-purple-50 text-purple-700"
                              : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"
                          }`}
                          onClick={() => setIsRecurring(true)}
                        >
                          Recurring
                        </button>
                      </div>

                      {isRecurring && (
                        <div className="grid grid-cols-3 gap-4">
                          {["weekly", "monthly", "quarterly"].map((frequency) => (
                            <button
                              key={frequency}
                              type="button"
                              className={`py-2 px-4 rounded-lg border-2 font-medium transition-colors capitalize ${
                                recurringFrequency === frequency
                                  ? "border-purple-600 bg-purple-50 text-purple-700"
                                  : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"
                              }`}
                              onClick={() => setRecurringFrequency(frequency)}
                            >
                              {frequency}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Anonymous Donation */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="anonymous"
                            checked={isAnonymous}
                            onChange={() => setIsAnonymous(!isAnonymous)}
                            className="rounded border-gray-300 text-purple-600 focus:ring-purple-500 h-4 w-4"
                          />
                          <label htmlFor="anonymous" className="text-lg font-medium text-gray-900">
                            Donate Anonymously
                          </label>
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <Shield className="h-4 w-4" />
                          <span>Privacy Protected</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 ml-6">
                        Your identity will be kept private. Only the impact of your donation will be tracked.
                      </p>
                    </div>

                    {/* Payment Method */}
                    <div className="mb-8">
                      <label className="block text-lg font-medium text-gray-900 mb-4">Payment Method</label>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {[
                          { id: "card", label: "Credit/Debit Card", icon: <CreditCard className="h-5 w-5" /> },
                          { id: "upi", label: "UPI", icon: <Wallet className="h-5 w-5" /> },
                          { id: "wallet", label: "SatisfyGain Wallet", icon: <Wallet className="h-5 w-5" /> },
                        ].map((method) => (
                          <button
                            key={method.id}
                            type="button"
                            className={`py-3 px-4 rounded-lg border-2 font-medium transition-colors flex flex-col items-center gap-2 ${
                              paymentMethod === method.id
                                ? "border-purple-600 bg-purple-50 text-purple-700"
                                : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"
                            }`}
                            onClick={() => setPaymentMethod(method.id)}
                          >
                            {method.icon}
                            <span>{method.label}</span>
                          </button>
                        ))}
                      </div>

                      {paymentMethod === "card" && (
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                              Card Number
                            </label>
                            <input
                              type="text"
                              id="cardNumber"
                              value={cardNumber}
                              onChange={handleCardNumberChange}
                              placeholder="1234 5678 9012 3456"
                              maxLength={19}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                                Cardholder Name
                              </label>
                              <input
                                type="text"
                                id="cardName"
                                value={cardName}
                                onChange={(e) => setCardName(e.target.value)}
                                placeholder="John Doe"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                                  Expiry Date
                                </label>
                                <input
                                  type="text"
                                  id="cardExpiry"
                                  value={cardExpiry}
                                  onChange={handleExpiryChange}
                                  placeholder="MM/YY"
                                  maxLength={5}
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                />
                              </div>
                              <div>
                                <label htmlFor="cardCvv" className="block text-sm font-medium text-gray-700 mb-1">
                                  CVV
                                </label>
                                <div className="relative">
                                  <input
                                    type={showCardDetails ? "text" : "password"}
                                    id="cardCvv"
                                    value={cardCvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    placeholder="123"
                                    maxLength={3}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                  />
                                  <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    onClick={() => setShowCardDetails(!showCardDetails)}
                                  >
                                    {showCardDetails ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {paymentMethod === "upi" && (
                        <div>
                          <label htmlFor="upiId" className="block text-sm font-medium text-gray-700 mb-1">
                            UPI ID
                          </label>
                          <input
                            type="text"
                            id="upiId"
                            placeholder="yourname@upi"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                          />
                        </div>
                      )}

                      {paymentMethod === "wallet" && (
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-700">Wallet Balance:</span>
                            <span className="font-medium text-gray-900">₹2,500</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>Last topped up: 3 days ago</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={!donationAmount || isProcessing}
                      className="w-full py-4 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-medium rounded-lg text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      {isProcessing ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Complete Donation <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Donation Summary */}
            <div>
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden sticky top-24">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Donation Summary</h3>
                  <p className="text-gray-600 text-sm">Review your donation details</p>
                </div>

                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Donation Amount:</span>
                      <span className="font-medium text-gray-900">{donationAmount ? `₹${donationAmount}` : "₹0"}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Donation Type:</span>
                      <span className="font-medium text-gray-900 capitalize">
                        {isRecurring ? recurringFrequency : "One-time"}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Recipient:</span>
                      <span className="font-medium text-gray-900">
                        {useAI
                          ? "AI-Recommended Charities"
                          : selectedCharity
                            ? charities.find((c) => c.id === selectedCharity)?.name
                            : "Not Selected"}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Method:</span>
                      <span className="font-medium text-gray-900 capitalize">
                        {paymentMethod === "card"
                          ? "Credit/Debit Card"
                          : paymentMethod === "upi"
                            ? "UPI"
                            : "SatisfyGain Wallet"}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4 mb-6">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span>{donationAmount ? `₹${calculateTotalAmount()}` : "₹0"}</span>
                    </div>
                    {isRecurring && (
                      <div className="text-sm text-gray-600 text-right mt-1 italic">
                        {recurringFrequency === "weekly"
                          ? "Charged weekly"
                          : recurringFrequency === "monthly"
                            ? "Charged monthly"
                            : "Charged quarterly"}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg text-green-800 text-sm">
                      <Shield className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Secure & Verified</p>
                        <p>Your donation goes only to verified organizations</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg text-blue-800 text-sm">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Transparent Tracking</p>
                        <p>Track how your donation creates impact in real-time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Trusted Platform</h3>
                <TrustBadgeGroup theme="light" className="justify-start" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DonationPage
