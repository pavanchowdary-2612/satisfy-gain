"use client"

import { useState, useEffect } from "react"
import {
  Search,
  Filter,
  Heart,
  Star,
  MapPin,
  Users,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  X,
  Sparkles,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"
// Import the GovernmentVerificationInfo component
import { GovernmentVerificationInfo } from "@/components/GovernmentVerificationInfo"

const CharitiesPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedSort, setSelectedSort] = useState("recommended")
  const [showFilters, setShowFilters] = useState(false)
  const [filteredCharities, setFilteredCharities] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // Add a filter for government verification
  const [showGovtVerifiedOnly, setShowGovtVerifiedOnly] = useState(false)

  // Sample charity data
  const charities = [
    {
      id: 1,
      name: "Educate India Foundation",
      category: "Education",
      location: "Delhi",
      rating: 4.8,
      verified: true,
      govtVerified: true,
      description: "Providing quality education to underprivileged children across rural India.",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      donorsCount: 1250,
      raised: 1200000,
      goal: 2000000,
    },
    {
      id: 2,
      name: "Healthcare For All",
      category: "Healthcare",
      location: "Mumbai",
      rating: 4.7,
      verified: true,
      govtVerified: true,
      description: "Making healthcare accessible to everyone through mobile clinics and telemedicine.",
      image:
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      donorsCount: 980,
      raised: 850000,
      goal: 1500000,
    },
    {
      id: 3,
      name: "Clean Water Initiative",
      category: "Environment",
      location: "Bangalore",
      rating: 4.5,
      verified: true,
      govtVerified: false,
      description: "Bringing clean water to communities and promoting water conservation.",
      image:
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      donorsCount: 750,
      raised: 650000,
      goal: 1000000,
    },
    {
      id: 4,
      name: "Women Empowerment Trust",
      category: "Women",
      location: "Chennai",
      rating: 4.6,
      verified: true,
      govtVerified: true,
      description: "Empowering women through education, skills training, and entrepreneurship.",
      image:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      donorsCount: 820,
      raised: 720000,
      goal: 1200000,
    },
    {
      id: 5,
      name: "Animal Rescue Network",
      category: "Animals",
      location: "Pune",
      rating: 4.9,
      verified: true,
      govtVerified: false,
      description: "Rescuing and rehabilitating abandoned and injured animals across urban areas.",
      image:
        "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      donorsCount: 1120,
      raised: 950000,
      goal: 1300000,
    },
    {
      id: 6,
      name: "Rural Development Project",
      category: "Development",
      location: "Rajasthan",
      rating: 4.4,
      verified: true,
      govtVerified: true,
      description: "Supporting sustainable development in rural communities through infrastructure and education.",
      image:
        "https://images.unsplash.com/photo-1541802645635-11f2286a7482?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      donorsCount: 630,
      raised: 580000,
      goal: 900000,
    },
    {
      id: 7,
      name: "Child Welfare Society",
      category: "Children",
      location: "Delhi",
      rating: 4.7,
      verified: true,
      govtVerified: true,
      description: "Providing shelter, education, and healthcare to orphaned and vulnerable children.",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      donorsCount: 890,
      raised: 780000,
      goal: 1200000,
    },
    {
      id: 8,
      name: "Disaster Relief Fund",
      category: "Disaster",
      location: "Mumbai",
      rating: 4.8,
      verified: true,
      govtVerified: true,
      description: "Providing immediate assistance and long-term support to communities affected by natural disasters.",
      image:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      donorsCount: 1450,
      raised: 2500000,
      goal: 3000000,
    },
  ]

  // Categories for filter
  const categories = [
    { value: "all", label: "All Categories" },
    { value: "Education", label: "Education" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Environment", label: "Environment" },
    { value: "Women", label: "Women Empowerment" },
    { value: "Children", label: "Children" },
    { value: "Animals", label: "Animal Welfare" },
    { value: "Disaster", label: "Disaster Relief" },
    { value: "Development", label: "Development" },
    { value: "Elderly", label: "Elder Care" },
  ]

  // Locations for filter
  const locations = [
    { value: "all", label: "All Locations" },
    { value: "Delhi", label: "Delhi" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Chennai", label: "Chennai" },
    { value: "Pune", label: "Pune" },
    { value: "Rajasthan", label: "Rajasthan" },
  ]

  // Sort options
  const sortOptions = [
    { value: "recommended", label: "Recommended" },
    { value: "rating", label: "Highest Rated" },
    { value: "recent", label: "Most Recent" },
    { value: "raised", label: "Most Raised" },
    { value: "donors", label: "Most Donors" },
  ]

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Filter charities based on search term, category, and location
  useEffect(() => {
    let filtered = [...charities]

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (charity) =>
          charity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          charity.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((charity) => charity.category === selectedCategory)
    }

    // Filter by location
    if (selectedLocation !== "all") {
      filtered = filtered.filter((charity) => charity.location === selectedLocation)
    }

    // Filter by government verification
    if (showGovtVerifiedOnly) {
      filtered = filtered.filter((charity) => charity.govtVerified)
    }

    // Sort charities
    switch (selectedSort) {
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "recent":
        // In a real app, you would sort by date
        filtered.sort((a, b) => b.id - a.id)
        break
      case "raised":
        filtered.sort((a, b) => b.raised - a.raised)
        break
      case "donors":
        filtered.sort((a, b) => b.donorsCount - a.donorsCount)
        break
      default:
        // Recommended - could be a custom algorithm
        filtered.sort((a, b) => b.rating - a.rating)
    }

    setFilteredCharities(filtered)
  }, [searchTerm, selectedCategory, selectedLocation, selectedSort, showGovtVerifiedOnly])

  // Calculate percentage of goal raised
  const calculateProgress = (raised, goal) => {
    return Math.min(Math.round((raised / goal) * 100), 100)
  }

  // Format currency
  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(1)}K`
    } else {
      return `₹${amount}`
    }
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-700 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center text-white">
            <div className="inline-block mb-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium">
                <Sparkles className="h-4 w-4 inline-block mr-2 text-yellow-300" />
                <span>Find causes that match your values</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Causes That Need Your Support</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 mb-8">
              Browse verified NGOs and charities making a real difference
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for causes, charities, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-purple-300 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* AI Donation Banner */}
        <section className="bg-white py-6 px-4 mb-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-purple-100 p-1 rounded-full">
                      <Sparkles className="h-4 w-4 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-purple-700">AI-Powered Donations</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Can't decide which charity to support?</h3>
                  <p className="text-gray-600 mb-4">
                    Let our AI allocate your donation to the most active and needy charities based on real-time data and
                    impact metrics.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/ai-recommendations">
                      <Button className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                        <Sparkles className="h-4 w-4" />
                        <span>Get AI Recommendations</span>
                      </Button>
                    </Link>
                    <Link href="/donate?ai=true">
                      <Button variant="outline" className="gap-2">
                        <Heart className="h-4 w-4" />
                        <span>Donate with AI</span>
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Education:</span>
                        <span className="font-medium">35%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: "35%" }}></div>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Healthcare:</span>
                        <span className="font-medium">25%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "25%" }}></div>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Environment:</span>
                        <span className="font-medium">20%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: "20%" }}></div>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Others:</span>
                        <span className="font-medium">20%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-pink-600 h-2 rounded-full" style={{ width: "20%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="bg-white border-b py-4 sticky top-0 z-10 shadow-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                  {showFilters ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </button>

                {selectedCategory !== "all" && (
                  <div className="flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    <span>{categories.find((c) => c.value === selectedCategory)?.label}</span>
                    <button onClick={() => setSelectedCategory("all")}>
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}

                {selectedLocation !== "all" && (
                  <div className="flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                    <span>{locations.find((l) => l.value === selectedLocation)?.label}</span>
                    <button onClick={() => setSelectedLocation("all")}>
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="border-none bg-gray-100 rounded-lg py-2 px-3 focus:ring-2 focus:ring-purple-300"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 pt-4 border-t">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Categories</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.slice(1).map((category) => (
                      <button
                        key={category.value}
                        onClick={() => setSelectedCategory(category.value)}
                        className={`px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                          selectedCategory === category.value
                            ? "bg-purple-100 text-purple-800"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showGovtVerifiedOnly}
                        onChange={() => setShowGovtVerifiedOnly(!showGovtVerifiedOnly)}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm font-medium text-gray-700">Government Verified Only</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Locations</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {locations.slice(1).map((location) => (
                      <button
                        key={location.value}
                        onClick={() => setSelectedLocation(location.value)}
                        className={`px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                          selectedLocation === location.value
                            ? "bg-indigo-100 text-indigo-800"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        {location.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Charities Grid */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredCharities.length} {filteredCharities.length === 1 ? "Charity" : "Charities"} Found
              </h2>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
                    <div className="h-48 bg-gray-200 animate-pulse"></div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-24 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="w-12 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                      </div>
                      <div className="w-3/4 h-8 bg-gray-200 rounded-lg animate-pulse mb-2"></div>
                      <div className="w-full h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
                      <div className="w-full h-4 bg-gray-200 rounded animate-pulse mb-6"></div>
                      <div className="w-full h-2 bg-gray-200 rounded-full mb-4"></div>
                      <div className="flex gap-3">
                        <div className="w-2/3 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                        <div className="w-1/3 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredCharities.length === 0 ? (
              <div className="text-center py-16">
                <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No charities found</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Try adjusting your search or filter criteria to find more charities.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                    setSelectedLocation("all")
                    setSelectedSort("recommended")
                  }}
                  className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCharities.map((charity) => (
                  <div
                    key={charity.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={charity.image || "/placeholder.svg"}
                        alt={charity.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      {/* Update the charity card to show government verification badge */}
                      <div className="absolute top-4 right-4">
                        <div className="flex gap-1">
                          {charity.govtVerified && (
                            <div className="bg-green-600 text-white p-1 rounded-full" title="Government Verified">
                              <ShieldCheck className="h-4 w-4" />
                            </div>
                          )}
                          {charity.verified && (
                            <div
                              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-1 rounded-full"
                              title="Platform Verified"
                            >
                              <CheckCircle className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                          {charity.category}
                        </span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span className="ml-1 text-sm font-medium">{charity.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">{charity.name}</h3>

                      <div className="flex items-center text-gray-600 text-sm mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{charity.location}</span>
                        <span className="mx-2">•</span>
                        <Users className="h-4 w-4 mr-1" />
                        <span>{charity.donorsCount.toLocaleString()} donors</span>
                      </div>

                      <p className="text-gray-600 mb-6 line-clamp-2">{charity.description}</p>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">
                            {formatCurrency(charity.raised)} raised of {formatCurrency(charity.goal)}
                          </span>
                          <span className="text-purple-600 font-medium">
                            {calculateProgress(charity.raised, charity.goal)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full"
                            style={{ width: `${calculateProgress(charity.raised, charity.goal)}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Link
                          href={`/charity/${charity.id}`}
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-center font-medium hover:from-purple-700 hover:to-indigo-700 transition-colors"
                        >
                          View Details
                        </Link>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          <Heart className="h-5 w-5 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        {/* Verification Information */}
        <section className="mt-12">
          <div className="max-w-6xl mx-auto">
            <GovernmentVerificationInfo />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default CharitiesPage
