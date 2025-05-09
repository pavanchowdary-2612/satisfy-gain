"use client"

import { useState, useEffect } from "react"
import {
  Sparkles,
  Heart,
  ArrowRight,
  Filter,
  CheckCircle,
  BarChart3,
  Users,
  Globe,
  Droplet,
  BookOpen,
  Shield,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Search,
  Zap,
  Star,
} from "lucide-react"
import Link from "next/link"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"

const AIRecommendationsPage = () => {
  const [donationAmount, setDonationAmount] = useState("500")
  const [customAmount, setCustomAmount] = useState("")
  const [selectedCategories, setSelectedCategories] = useState([])
  const [showAllCategories, setShowAllCategories] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [recommendations, setRecommendations] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [userPreferences, setUserPreferences] = useState({
    location: "all",
    impact: "high",
    size: "all",
  })

  // Sample categories
  const categories = [
    { id: 1, name: "Education", icon: <BookOpen className="h-5 w-5" />, color: "bg-purple-100 text-purple-600" },
    { id: 2, name: "Healthcare", icon: <Heart className="h-5 w-5" />, color: "bg-pink-100 text-pink-600" },
    { id: 3, name: "Water", icon: <Droplet className="h-5 w-5" />, color: "bg-blue-100 text-blue-600" },
    { id: 4, name: "Environment", icon: <Globe className="h-5 w-5" />, color: "bg-green-100 text-green-600" },
    { id: 5, name: "Elderly Care", icon: <Users className="h-5 w-5" />, color: "bg-yellow-100 text-yellow-600" },
    { id: 6, name: "Child Welfare", icon: <Users className="h-5 w-5" />, color: "bg-indigo-100 text-indigo-600" },
    { id: 7, name: "Women Empowerment", icon: <Users className="h-5 w-5" />, color: "bg-red-100 text-red-600" },
    { id: 8, name: "Disaster Relief", icon: <Zap className="h-5 w-5" />, color: "bg-orange-100 text-orange-600" },
  ]

  // Sample charities for recommendations
  const charities = [
    {
      id: 1,
      name: "Educate India Foundation",
      category: "Education",
      location: "Delhi",
      rating: 4.8,
      verified: true,
      description: "Providing quality education to underprivileged children across rural India.",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      impact: "high",
      size: "medium",
      allocation: 40,
    },
    {
      id: 2,
      name: "Healthcare For All",
      category: "Healthcare",
      location: "Mumbai",
      rating: 4.7,
      verified: true,
      description: "Making healthcare accessible to everyone through mobile clinics and telemedicine.",
      image:
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      impact: "high",
      size: "large",
      allocation: 30,
    },
    {
      id: 3,
      name: "Clean Water Initiative",
      category: "Water",
      location: "Bangalore",
      rating: 4.5,
      verified: true,
      description: "Bringing clean water to communities and promoting water conservation.",
      image:
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      impact: "medium",
      size: "small",
      allocation: 20,
    },
    {
      id: 4,
      name: "Elderly Care Trust",
      category: "Elderly Care",
      location: "Chennai",
      rating: 4.6,
      verified: true,
      description: "Supporting the elderly with healthcare, companionship, and essential services.",
      image:
        "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      impact: "medium",
      size: "small",
      allocation: 10,
    },
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

  const toggleCategory = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
    } else {
      setSelectedCategories([...selectedCategories, categoryId])
    }
  }

  const handleGetRecommendations = () => {
    setIsProcessing(true)

    // Simulate API call
    setTimeout(() => {
      // Filter charities based on user preferences
      let filtered = [...charities]

      if (userPreferences.location !== "all") {
        filtered = filtered.filter((charity) => charity.location === userPreferences.location)
      }

      if (userPreferences.impact !== "all") {
        filtered = filtered.filter((charity) => charity.impact === userPreferences.impact)
      }

      if (userPreferences.size !== "all") {
        filtered = filtered.filter((charity) => charity.size === userPreferences.size)
      }

      // Filter by selected categories if any
      if (selectedCategories.length > 0) {
        const categoryNames = selectedCategories.map((id) => categories.find((cat) => cat.id === id)?.name)
        filtered = filtered.filter((charity) => categoryNames.includes(charity.category))
      }

      setRecommendations(filtered)
      setIsProcessing(false)
    }, 1500)
  }

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Calculate donation amount for each charity
  const calculateDonationAmount = (percentage) => {
    const amount = Number.parseInt(donationAmount) || 0
    return formatCurrency((amount * percentage) / 100)
  }

  useEffect(() => {
    // Get initial recommendations on page load
    handleGetRecommendations()
  }, [])

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4 inline-block mr-2" />
                <span>AI-Powered Recommendations</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Smart Donation Recommendations</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let our AI help you find the perfect causes to support based on your preferences and real-time needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Preferences Panel */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden sticky top-24">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Your Preferences</h2>
                  <p className="text-gray-600 text-sm">Customize your donation recommendations</p>
                </div>

                <div className="p-6">
                  {/* Donation Amount */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-900 mb-2">Donation Amount</label>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {predefinedAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className={`py-2 px-4 rounded-lg border-2 font-medium transition-colors ${
                            donationAmount === amount
                              ? "border-purple-600 bg-purple-50 text-purple-700"
                              : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"
                          }`}
                          onClick={() => handleAmountClick(amount)}
                        >
                          ₹{amount}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="text"
                        placeholder="Custom Amount"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-900 mb-2">Cause Categories</label>
                    <div className="space-y-2">
                      {categories.slice(0, showAllCategories ? categories.length : 4).map((category) => (
                        <button
                          key={category.id}
                          type="button"
                          className={`flex items-center justify-between w-full py-2 px-3 rounded-lg border transition-colors ${
                            selectedCategories.includes(category.id)
                              ? "border-purple-600 bg-purple-50"
                              : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"
                          }`}
                          onClick={() => toggleCategory(category.id)}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`p-1.5 rounded-md ${category.color}`}>{category.icon}</div>
                            <span className="font-medium">{category.name}</span>
                          </div>
                          {selectedCategories.includes(category.id) && (
                            <CheckCircle className="h-5 w-5 text-purple-600" />
                          )}
                        </button>
                      ))}
                    </div>
                    {categories.length > 4 && (
                      <button
                        type="button"
                        className="text-purple-600 hover:text-purple-800 text-sm font-medium mt-2 flex items-center"
                        onClick={() => setShowAllCategories(!showAllCategories)}
                      >
                        {showAllCategories ? (
                          <>
                            Show Less <ChevronUp className="h-4 w-4 ml-1" />
                          </>
                        ) : (
                          <>
                            Show More <ChevronDown className="h-4 w-4 ml-1" />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Additional Filters */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-900 mb-2">Additional Filters</label>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Location</label>
                        <select
                          value={userPreferences.location}
                          onChange={(e) => setUserPreferences({ ...userPreferences, location: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        >
                          <option value="all">All Locations</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Bangalore">Bangalore</option>
                          <option value="Chennai">Chennai</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Impact Level</label>
                        <select
                          value={userPreferences.impact}
                          onChange={(e) => setUserPreferences({ ...userPreferences, impact: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        >
                          <option value="all">All Impact Levels</option>
                          <option value="high">High Impact</option>
                          <option value="medium">Medium Impact</option>
                          <option value="low">Low Impact</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Organization Size</label>
                        <select
                          value={userPreferences.size}
                          onChange={(e) => setUserPreferences({ ...userPreferences, size: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        >
                          <option value="all">All Sizes</option>
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Get Recommendations Button */}
                  <Button
                    onClick={handleGetRecommendations}
                    disabled={isProcessing}
                    className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all"
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
                        <Sparkles className="mr-2 h-5 w-5" /> Get AI Recommendations
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden mb-8">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-1">AI Recommendations</h2>
                      <p className="text-gray-600 text-sm">Based on your preferences and real-time needs</p>
                    </div>

                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search recommendations..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {recommendations.length > 0 ? (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Optimal Allocation for {formatCurrency(Number.parseInt(donationAmount) || 0)}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <BarChart3 className="h-4 w-4" />
                          <span>AI-optimized distribution</span>
                        </div>
                      </div>

                      {recommendations.map((charity) => (
                        <div
                          key={charity.id}
                          className="flex flex-col md:flex-row gap-6 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                          <div className="md:w-1/4">
                            <div className="rounded-lg overflow-hidden h-32 md:h-full">
                              <img
                                src={charity.image || "/placeholder.svg"}
                                alt={charity.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          <div className="md:w-3/4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="text-lg font-semibold text-gray-900">{charity.name}</h3>
                                  {charity.verified && (
                                    <div className="bg-green-100 p-1 rounded-full">
                                      <Shield className="h-4 w-4 text-green-600" />
                                    </div>
                                  )}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <span>{charity.category}</span>
                                  <span>•</span>
                                  <span>{charity.location}</span>
                                </div>
                              </div>

                              <div className="bg-purple-100 px-3 py-1 rounded-lg text-purple-800 font-medium">
                                {calculateDonationAmount(charity.allocation)} ({charity.allocation}%)
                              </div>
                            </div>

                            <p className="text-gray-600 mb-4">{charity.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                              <div className="bg-blue-50 px-2 py-1 rounded text-blue-700 text-xs flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                <span>{charity.size} organization</span>
                              </div>
                              <div className="bg-green-50 px-2 py-1 rounded text-green-700 text-xs flex items-center gap-1">
                                <Zap className="h-3 w-3" />
                                <span>{charity.impact} impact</span>
                              </div>
                              <div className="bg-yellow-50 px-2 py-1 rounded text-yellow-700 text-xs flex items-center gap-1">
                                <Star className="h-3 w-3" />
                                <span>{charity.rating} rating</span>
                              </div>
                            </div>

                            <div className="flex gap-3">
                              <Link href={`/charity/${charity.id}`}>
                                <Button variant="outline" size="sm" className="gap-1">
                                  <span>View Details</span>
                                  <ArrowRight className="h-4 w-4" />
                                </Button>
                              </Link>
                              <Link
                                href={`/donate?charity=${charity.id}&amount=${(Number.parseInt(donationAmount) * charity.allocation) / 100}`}
                              >
                                <Button
                                  size="sm"
                                  className="gap-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                                >
                                  <Heart className="h-4 w-4" />
                                  <span>Donate</span>
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="mt-6">
                        <Link href={`/donate?ai=true&amount=${donationAmount}`}>
                          <Button className="w-full gap-2 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all">
                            <Sparkles className="h-5 w-5" />
                            <span>
                              Donate {formatCurrency(Number.parseInt(donationAmount) || 0)} with AI Allocation
                            </span>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                        <AlertCircle className="h-10 w-10 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">No recommendations found</h3>
                      <p className="text-gray-600 max-w-md mx-auto mb-6">
                        Try adjusting your preferences or filters to get personalized recommendations.
                      </p>
                      <Button
                        onClick={() => {
                          setSelectedCategories([])
                          setUserPreferences({
                            location: "all",
                            impact: "high",
                            size: "all",
                          })
                          handleGetRecommendations()
                        }}
                        className="gap-2"
                      >
                        <Filter className="h-4 w-4" />
                        <span>Reset Filters</span>
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">How AI Recommendations Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="bg-purple-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center mb-3">
                      <Filter className="h-5 w-5 text-purple-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">1. Analyze Your Preferences</h3>
                    <p className="text-sm text-gray-600">
                      Our AI analyzes your selected preferences, donation history, and cause interests.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="bg-indigo-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center mb-3">
                      <BarChart3 className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">2. Match with Real Needs</h3>
                    <p className="text-sm text-gray-600">
                      We match your preferences with real-time needs and verified organizations.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="bg-blue-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center mb-3">
                      <Sparkles className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">3. Optimize Allocation</h3>
                    <p className="text-sm text-gray-600">
                      Our algorithm optimizes the allocation of your donation for maximum impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AIRecommendationsPage
