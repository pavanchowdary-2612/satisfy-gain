"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Heart, CreditCard, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const formSchema = z.object({
  amount: z.string().min(1, {
    message: "Amount is required",
  }),
  paymentMethod: z.enum(["credit", "wallet", "upi"], {
    required_error: "Please select a payment method",
  }),
  message: z.string().optional(),
  anonymous: z.boolean().optional(),
})

export function DonationForm({ charityName = "General Fund" }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      paymentMethod: "credit",
      message: "",
      anonymous: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  if (isSuccess) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Thank You!</CardTitle>
          <CardDescription className="text-center">Your donation to {charityName} has been processed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="bg-green-50 border-green-200">
            <Heart className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">Donation Successful</AlertTitle>
            <AlertDescription className="text-green-700">
              Your contribution will make a real difference. You can track its impact in your dashboard.
            </AlertDescription>
          </Alert>
          <div className="text-center">
            <Button onClick={() => setIsSuccess(false)} className="mt-4">
              Make Another Donation
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Donate to {charityName}</CardTitle>
        <CardDescription>Your donation will be securely processed and tracked for transparency</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs defaultValue="preset" className="w-full">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="preset">Preset Amounts</TabsTrigger>
                <TabsTrigger value="custom">Custom Amount</TabsTrigger>
              </TabsList>
              <TabsContent value="preset" className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[100, 500, 1000, 2000, 5000, 10000].map((amount) => (
                    <Button
                      key={amount}
                      type="button"
                      variant={form.getValues("amount") === amount.toString() ? "default" : "outline"}
                      onClick={() => form.setValue("amount", amount.toString())}
                      className="h-16"
                    >
                      ₹{amount}
                    </Button>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="custom">
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount (₹)</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter amount" {...field} type="number" min="1" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
            </Tabs>

            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Payment Method</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="credit" />
                        </FormControl>
                        <FormLabel className="font-normal flex items-center gap-2">
                          <CreditCard className="h-4 w-4" /> Credit/Debit Card
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="wallet" />
                        </FormControl>
                        <FormLabel className="font-normal flex items-center gap-2">
                          <Wallet className="h-4 w-4" /> SatisfyGain Wallet
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="upi" />
                        </FormControl>
                        <FormLabel className="font-normal">UPI</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Add a personal message with your donation"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Your message may be shared with the charity</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="anonymous"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Make this donation anonymous</FormLabel>
                    <FormDescription>Your name will not be displayed publicly</FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Donate Now"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center text-sm text-muted-foreground">
        <p>All donations are secure and encrypted</p>
      </CardFooter>
    </Card>
  )
}
