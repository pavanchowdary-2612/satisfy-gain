"use client"

import { useState } from "react"
import { Eye, EyeOff, Heart, Shield, BookOpen, Sparkles, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"

const AuthPage = () => {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    }

    let isValid = true

    if (!isLogin && !formData.name) {
      newErrors.name = "Name is required"
      isValid = false
    }

    if (!formData.email) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format"
      isValid = false
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
      isValid = false
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
      isValid = false
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitting(false)

      // Redirect to dashboard
      router.push("/dashboard")
    }
  }

  const featureCards = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Donations",
      description: "End-to-end encrypted transactions",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Verified Causes",
      description: "Every NGO is thoroughly vetted",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Transparent Impact",
      description: "See exactly where your money goes",
      color: "bg-blue-100 text-blue-600",
    },
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
          {/* Left side - Branding/Features */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-2 rounded-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  SatisfyGain
                </h1>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {isLogin ? "Welcome back to our community!" : "Join our giving community"}
              </h2>
              <p className="text-gray-600">
                {isLogin ? "Login to continue making a difference" : "Create an account to start your giving journey"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {featureCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${card.color}`}>{card.icon}</div>
                    <h3 className="font-medium">{card.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>

            <div className="hidden lg:block">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-400 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Sparkles className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-700">
                      "Small acts, when multiplied by millions of people, can transform the world."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Auth Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{isLogin ? "Sign In" : "Create Account"}</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field (only for signup) */}
                  {!isLogin && (
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        } focus:ring-2 focus:ring-purple-500 focus:border-purple-500`}
                        placeholder="Enter your name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                  )}

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } focus:ring-2 focus:ring-purple-500 focus:border-purple-500`}
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  {/* Password field */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.password ? "border-red-500" : "border-gray-300"
                        } focus:ring-2 focus:ring-purple-500 focus:border-purple-500`}
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                  </div>

                  {/* Confirm Password field (only for signup) */}
                  {!isLogin && (
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.confirmPassword ? "border-red-500" : "border-gray-300"
                          } focus:ring-2 focus:ring-purple-500 focus:border-purple-500`}
                          placeholder="Confirm your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                          {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                      {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                    </div>
                  )}

                  {/* Submit button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
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
                        {isLogin ? "Sign In" : "Create Account"} <ArrowRight className="ml-2 h-5 w-5" />
                      </span>
                    )}
                  </Button>
                </form>

                {/* Toggle between login and signup */}
                <div className="mt-6 text-center">
                  <button
                    onClick={() => {
                      setIsLogin(!isLogin)
                      setErrors({
                        name: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                      })
                    }}
                    className="text-purple-600 hover:text-purple-800 font-medium"
                  >
                    {isLogin ? "Need an account? Sign up" : "Already have an account? Sign in"}
                  </button>
                </div>

                {isLogin && (
                  <div className="mt-4 text-center">
                    <button className="text-purple-600 hover:text-purple-800 text-sm">Forgot your password?</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AuthPage
