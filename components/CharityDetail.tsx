"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Users, Calendar, CheckCircle, MapPin, Mail, Phone, Share2, BookmarkPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Mock data for a charity
const charityData = {
  id: "1",
  name: "Child Care Foundation",
  description:
    "We provide education, healthcare, and shelter to underprivileged children across India. Our mission is to ensure every child has access to basic necessities and opportunities for a better future.",
  longDescription:
    "Child Care Foundation was established in 2005 with a vision to create a world where every child has access to education, healthcare, and a safe environment to grow. We work across 15 states in India, reaching over 50,000 children annually through our various programs.\n\nOur approach is holistic, addressing not just immediate needs but also working on sustainable solutions that empower communities to support their children. We partner with local governments, schools, and healthcare providers to maximize our impact.",
  category: "Children",
  verified: true,
  governmentRecognized: true,
  yearFounded: 2005,
  location: "New Delhi, India",
  coverImage: "/placeholder.svg?height=400&width=800",
  logo: "/placeholder.svg?height=100&width=100",
  impactStats: {
    childrenHelped: 50000,
    mealsProvided: 2000000,
    schoolsBuilt: 25,
    healthcampsConducted: 120,
  },
  fundraisingGoal: 5000000,
  fundraisingProgress: 3250000,
  donorCount: 1250,
  contactInfo: {
    email: "info@childcarefoundation.org",
    phone: "+91 11 2345 6789",
    website: "www.childcarefoundation.org",
    address: "45 Charity Lane, New Delhi, 110001",
  },
  socialProof: [
    {
      name: "Rahul Sharma",
      comment: "I've been supporting this charity for 5 years and have seen the impact firsthand. Highly recommended!",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Priya Patel",
      comment:
        "Transparent organization with real results. The regular updates about how my donations are used make me feel connected to the cause.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ],
  updates: [
    {
      date: "2023-04-15",
      title: "New School Inauguration",
      content: "We inaugurated our 25th school in rural Maharashtra, providing education to 500 more children.",
    },
    {
      date: "2023-03-10",
      title: "Healthcare Camp Results",
      content:
        "Our recent healthcare camp provided medical check-ups to 2,000 children and identified 150 who needed further treatment.",
    },
  ],
  gallery: [
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
  ],
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
}

export function CharityDetail({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState("about")
  const charity = charityData // In a real app, you would fetch the charity by ID

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-6">
        <Image
          src={charity.coverImage || "/placeholder.svg"}
          alt={`${charity.name} cover image`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 flex items-end">
          <div className="relative h-20 w-20 mr-4 rounded-lg overflow-hidden border-4 border-white">
            <Image
              src={charity.logo || "/placeholder.svg"}
              alt={`${charity.name} logo`}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">{charity.name}</h1>
            <div className="flex items-center gap-2 mt-1">
              {charity.verified && (
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                  <CheckCircle className="h-3 w-3 mr-1" /> Verified
                </Badge>
              )}
              {charity.governmentRecognized && (
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                  Government Recognized
                </Badge>
              )}
              <Badge variant="outline" className="bg-white/80">
                <MapPin className="h-3 w-3 mr-1" /> {charity.location}
              </Badge>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <Button size="sm" variant="secondary" className="bg-white/80 hover:bg-white">
            <Share2 className="h-4 w-4 mr-1" /> Share
          </Button>
          <Button size="sm" variant="secondary" className="bg-white/80 hover:bg-white">
            <BookmarkPlus className="h-4 w-4 mr-1" /> Save
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
              <TabsTrigger value="updates">Updates</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3">About {charity.name}</h2>
                  <p className="text-gray-700 whitespace-pre-line">{charity.longDescription}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Information</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card>
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                        <Calendar className="h-8 w-8 text-primary mb-2" />
                        <p className="text-sm text-muted-foreground">Founded</p>
                        <p className="font-medium">{charity.yearFounded}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                        <Users className="h-8 w-8 text-primary mb-2" />
                        <p className="text-sm text-muted-foreground">Donors</p>
                        <p className="font-medium">{charity.donorCount.toLocaleString()}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                        <Heart className="h-8 w-8 text-primary mb-2" />
                        <p className="text-sm text-muted-foreground">Category</p>
                        <p className="font-medium">{charity.category}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                        <MapPin className="h-8 w-8 text-primary mb-2" />
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">{charity.location}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p>{charity.contactInfo.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p>{charity.contactInfo.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p>{charity.contactInfo.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Website</p>
                        <p>{charity.contactInfo.website}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="impact" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3">Our Impact</h2>
                  <p className="text-gray-700 mb-6">
                    At {charity.name}, we measure our success by the positive change we create in children's lives. Here
                    are some key metrics that showcase our impact:
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card>
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                        <Users className="h-8 w-8 text-primary mb-2" />
                        <p className="text-sm text-muted-foreground">Children Helped</p>
                        <p className="font-medium text-xl">{charity.impactStats.childrenHelped.toLocaleString()}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                        <Utensils className="h-8 w-8 text-primary mb-2" />
                        <p className="text-sm text-muted-foreground">Meals Provided</p>
                        <p className="font-medium text-xl">{charity.impactStats.mealsProvided.toLocaleString()}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                        <School className="h-8 w-8 text-primary mb-2" />
                        <p className="text-sm text-muted-foreground">Schools Built</p>
                        <p className="font-medium text-xl">{charity.impactStats.schoolsBuilt}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                        <Activity className="h-8 w-8 text-primary mb-2" />
                        <p className="text-sm text-muted-foreground">Health Camps</p>
                        <p className="font-medium text-xl">{charity.impactStats.healthcampsConducted}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Fundraising Progress</h3>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">
                        Raised: ₹{charity.fundraisingProgress.toLocaleString()}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Goal: ₹{charity.fundraisingGoal.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${(charity.fundraisingProgress / charity.fundraisingGoal) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-right mt-1">
                      {Math.round((charity.fundraisingProgress / charity.fundraisingGoal) * 100)}% Complete
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Social Proof</h3>
                  <div className="space-y-4">
                    {charity.socialProof.map((proof, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 italic mb-3">"{proof.comment}"</p>
                        <div className="flex items-center gap-3">
                          <Image
                            src={proof.avatar || "/placeholder.svg"}
                            alt={proof.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <p className="font-medium">{proof.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="updates" className="mt-6">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-3">Latest Updates</h2>
                <div className="space-y-6">
                  {charity.updates.map((update, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4 py-1">
                      <div className="text-sm text-muted-foreground">{update.date}</div>
                      <h3 className="text-lg font-medium mb-2">{update.title}</h3>
                      <p className="text-gray-700">{update.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="mt-6">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-3">Photo Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {charity.gallery.map((image, index) => (
                    <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3">Video</h3>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Play className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Watch our impact video</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Donate Now</h3>
              <p className="text-gray-700 mb-4">
                Your contribution helps us provide education, healthcare, and shelter to underprivileged children.
              </p>
              <Button className="w-full" size="lg">
                <Heart className="h-4 w-4 mr-2" /> Donate
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Verified Organization</h3>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Government Registered</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Tax Exempt Status</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Transparent Financials</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Share This Charity</h3>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

import { Globe, Utensils, School, Activity, Play, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
