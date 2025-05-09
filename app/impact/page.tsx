"use client"

import Link from "next/link"

import { useState } from "react"
import {
  BarChart3,
  PieChart,
  Heart,
  Users,
  BookOpen,
  Droplet,
  Globe,
  Sparkles,
  Download,
  Share2,
  Calendar,
  Filter,
  ChevronDown,
  ArrowRight,
} from "lucide-react"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"

const ImpactPage = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [timeRange, setTimeRange] = useState("all")

  // Sample impact data
  const impactStats = {
    totalImpact: 125,
    peopleHelped: 450,
    causesSupported: 8,
    donationsCount: 15,
  }

  const impactByCategory = [
    {
      category: "Education",
      value: 25,
      icon: <BookOpen className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-600",
    },
    { category: "Healthcare", value: 15, icon: <Heart className="h-5 w-5" />, color: "bg-pink-100 text-pink-600" },
    { category: "Water", value: 120, icon: <Droplet className="h-5 w-5" />, color: "bg-blue-100 text-blue-600" },
    { category: "Environment", value: 45, icon: <Globe className="h-5 w-5" />, color: "bg-green-100 text-green-600" },
  ]

  const impactStories = [
    {
      id: 1,
      title: "Clean Water for Village",
      description: "Your donation helped provide clean water to 120 people in a rural village.",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      date: "May 15, 2023",
      category: "Water",
      icon: <Droplet className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "Education for 25 Children",
      description: "Your support provided education materials for 25 underprivileged children.",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      date: "April 20, 2023",
      category: "Education",
      icon: <BookOpen className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 3,
      title: "Healthcare for Elderly",
      description: "15 elderly people received medical check-ups and necessary medications.",
      image:
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      date: "March 10, 2023",
      category: "Healthcare",
      icon: <Heart className="h-5 w-5" />,
      color: "bg-pink-100 text-pink-600",
    },
  ]

  const sdgGoals = [
    { id: 1, name: "No Poverty", progress: 65 },
    { id: 2, name: "Zero Hunger", progress: 45 },
    { id: 3, name: "Good Health", progress: 80 },
    { id: 4, name: "Quality Education", progress: 70 },
    { id: 6, name: "Clean Water", progress: 90 },
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-700 py-16 px-4 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="inline-block mb-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium">
                <Sparkles className="h-4 w-4 inline-block mr-2 text-yellow-300" />
                <span>Your Giving Journey</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Impact Dashboard</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              See how your donations are making a real difference in the world
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tabs and Filters */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div className="flex overflow-x-auto pb-2 gap-2">
                {[
                  { id: "overview", label: "Overview", icon: <BarChart3 className="h-4 w-4" /> },
                  { id: "stories", label: "Impact Stories", icon: <Heart className="h-4 w-4" /> },
                  { id: "sdgs", label: "SDG Goals", icon: <Globe className="h-4 w-4" /> },
                ].map((tab) => (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "default" : "outline"}
                    className={`gap-2 whitespace-nowrap ${activeTab === tab.id ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </Button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" className="gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Time Range</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </Button>
                <Button variant="outline" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-lg bg-purple-100 text-purple-600">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{impactStats.totalImpact}</div>
                    <div className="text-sm text-gray-500">Impact Score</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-lg bg-indigo-100 text-indigo-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{impactStats.peopleHelped}</div>
                    <div className="text-sm text-gray-500">People Helped</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-lg bg-pink-100 text-pink-600">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{impactStats.causesSupported}</div>
                    <div className="text-sm text-gray-500">Causes Supported</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{impactStats.donationsCount}</div>
                    <div className="text-sm text-gray-500">Total Donations</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Content based on active tab */}
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Impact by Category */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-lg font-semibold text-gray-900">Impact by Category</h2>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Filter className="h-3 w-3" />
                        <span>Filter</span>
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="h-64 flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
                        <div className="text-center">
                          <PieChart className="h-16 w-16 text-purple-500 mx-auto mb-4 opacity-50" />
                          <p className="text-gray-500">Impact distribution chart will appear here</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {impactByCategory.map((category, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg ${category.color}`}>{category.icon}</div>
                              <span className="font-medium">{category.category}</span>
                            </div>
                            <div className="font-semibold">{category.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Impact Stories */}
                <div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-lg font-semibold text-gray-900">Recent Impact</h2>
                      <Link href="#stories">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <span>View All</span>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className="space-y-4">
                      {impactStories.slice(0, 2).map((story) => (
                        <div key={story.id} className="flex gap-4 p-3 bg-gray-50 rounded-lg">
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={story.image || "/placeholder.svg"}
                              alt={story.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <div className={`p-1 rounded-full ${story.color}`}>{story.icon}</div>
                              <span className="text-sm text-gray-500">{story.category}</span>
                            </div>
                            <h3 className="font-medium text-gray-900 mb-1">{story.title}</h3>
                            <p className="text-xs text-gray-500">{story.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4">
                      <Link href="#stories">
                        <Button variant="outline" className="w-full gap-2">
                          <span>View All Stories</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "stories" && (
              <div id="stories">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Impact Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {impactStories.map((story) => (
                    <div
                      key={story.id}
                      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all"
                    >
                      <div className="h-48 relative">
                        <img
                          src={story.image || "/placeholder.svg"}
                          alt={story.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <div
                            className={`px-3 py-1 rounded-full text-sm font-medium ${story.color.replace("bg-", "bg-").replace("text-", "text-")}`}
                          >
                            {story.category}
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                        <p className="text-gray-600 mb-4">{story.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{story.date}</span>
                          <Button variant="outline" size="sm" className="gap-1">
                            <span>Read More</span>
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "sdgs" && (
              <div id="sdgs">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Sustainable Development Goals</h2>
                  <p className="text-gray-600 mb-6">
                    Your donations contribute to the United Nations Sustainable Development Goals. Here's how your
                    impact aligns with these global objectives.
                  </p>

                  <div className="space-y-6">
                    {sdgGoals.map((goal) => (
                      <div key={goal.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                              {goal.id}
                            </div>
                            <span className="font-medium">{goal.name}</span>
                          </div>
                          <span className="text-sm font-medium">{goal.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full"
                            style={{ width: `${goal.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ImpactPage
