import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export function FormCards() {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col space-y-8">
      {/* First Form Card: Billing Details */}
      <Card className="w-full rounded-tl-[10px] bg-white">
        <CardHeader>
          <CardTitle className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
            Billing Details
          </CardTitle>
          <CardDescription className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
            Enter your billing information below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  className="bg-[#F6F7F9]"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone" className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  className="bg-[#F6F7F9]"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="address" className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
                  Address
                </Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Your address"
                  className="bg-[#F6F7F9]"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="city" className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
                  Town/City
                </Label>
                <Input
                  id="city"
                  name="city"
                  placeholder="Your town/city"
                  className="bg-[#F6F7F9]"
                />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Second Form Card: Rental Details */}
      <Card className="w-full rounded-tl-[10px] bg-white">
        <CardHeader>
          <CardTitle className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
            Rental Details
          </CardTitle>
          <CardDescription className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
            Specify your rental information below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            {/* Pickup Section */}
            <div className="mb-6">
              <Label className="flex items-center space-x-2 font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
                <input type="radio" name="rental" />
                <span>Pickup</span>
              </Label>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="pickup-location" className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
                  Location
                </Label>
                <Select>
                  <SelectTrigger className="bg-[#F6F7F9]">
                    <SelectValue placeholder="Select your location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="location1">Location 1</SelectItem>
                    <SelectItem value="location2">Location 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="pickup-date" className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
                  Date
                </Label>
                <Select>
                  <SelectTrigger className="bg-[#F6F7F9]">
                    <SelectValue placeholder="Select your date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date1">Date 1</SelectItem>
                    <SelectItem value="date2">Date 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5 col-span-2">
                <Label htmlFor="pickup-time" className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
                  Time
                </Label>
                <Select>
                  <SelectTrigger className="bg-[#F6F7F9]">
                    <SelectValue placeholder="Select your time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="time1">Time 1</SelectItem>
                    <SelectItem value="time2">Time 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Dropoff Section */}
            <div className="mt-8 mb-6">
              <Label className="flex items-center space-x-2 font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
                <input type="radio" name="rental" />
                <span>Dropoff</span>
              </Label>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="dropoff-location" className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
                  Location
                </Label>
                <Select>
                  <SelectTrigger className="bg-[#F6F7F9]">
                    <SelectValue placeholder="Select your location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="location1">Location 1</SelectItem>
                    <SelectItem value="location2">Location 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="dropoff-date" className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
                  Date
                </Label>
                <Select>
                  <SelectTrigger className="bg-[#F6F7F9]">
                    <SelectValue placeholder="Select your date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date1">Date 1</SelectItem>
                    <SelectItem value="date2">Date 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5 col-span-2">
                <Label htmlFor="dropoff-time" className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
                  Time
                </Label>
                <Select>
                  <SelectTrigger className="bg-[#F6F7F9]">
                    <SelectValue placeholder="Select your time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="time1">Time 1</SelectItem>
                    <SelectItem value="time2">Time 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

  {/* Third Form Card: Payment Method */}
<Card className="w-full rounded-tl-[10px] bg-white">
  <CardHeader>
    <CardTitle className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
      Payment Method
    </CardTitle>
    <CardDescription className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
      Choose your payment method below.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      {/* Mini Form for Card Details */}
      <div
        className="grid grid-cols-2 gap-4 p-4 rounded"
        style={{ backgroundColor: "#F6F7F9" }}
      >
        <div className="flex flex-col space-y-1.5">
          <Label
            htmlFor="card"
            className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]"
          >
            Card Number
          </Label>
          <Input id="card" name="card" placeholder="1234 5678 9012 3456" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label
            htmlFor="expiry"
            className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]"
          >
            Expiry Date
          </Label>
          <Input id="expiry" name="expiry" placeholder="MM/YY" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label
            htmlFor="cardholder"
            className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]"
          >
            Card Holder
          </Label>
          <Input id="cardholder" name="cardholder" placeholder="Full Name" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label
            htmlFor="cvv"
            className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]"
          >
            CVV
          </Label>
          <Input id="cvv" name="cvv" placeholder="123" />
        </div>
      </div>

      {/* Mini Form for Payment Methods */}
      <div
        className="mt-4 p-4 rounded flex flex-col gap-4"
        style={{ backgroundColor: "#F6F7F9" }}
      >
        {/* PayPal Option */}
        <label className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <input
              type="radio"
              name="payment"
              value="paypal"
              className="rounded-full"
            />
            <span className="font-semibold text-[16px] leading-[24px] -tracking-[0.02em]">
              PayPal
            </span>
          </div>
          <img
            src="paypal.png"
            alt="PayPal Logo"
            style={{
              width: "100px", 
              height: "40px", 
            }}
          />
        </label>

        {/* Bitcoin Option */}
        <label className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <input
              type="radio"
              name="payment"
              value="bitcoin"
              className="rounded-full"
            />
            <span className="font-semibold text-[16px] leading-[24px] -tracking-[0.02em]">
              Bitcoin
            </span>
          </div>
          <img
            src="bitcoin.png"
            alt="Bitcoin Logo"
            style={{
              width: "100px", 
              height: "40px", 
            }}
          />
        </label>
      </div>
    </form>
  </CardContent>
</Card>




      {/* Fourth Form Card: Confirmation */}
<Card className="w-full rounded-tl-[10px] bg-white">
  <CardHeader>
    <CardTitle className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
      Confirmation
    </CardTitle>
    <CardDescription className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
      We are getting to the end. Just a few clicks and your rental is ready!
    </CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <div className="space-y-4">
        <Label className="flex items-center space-x-4 font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
          <Checkbox />
          <span>I agree with sending marketing and newsletter emails. No spam, promised!</span>
        </Label>
        <Label className="flex items-center space-x-4 font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em]">
          <Checkbox />
          <span>I agree with our terms and conditions and privacy policy.</span>
        </Label>
      </div>
      <Button className="mt-6 w-full bg-blue-500 text-white hover:bg-blue-600">
        Rent Now
      </Button>
      <div className="mt-4 flex items-center space-x-2">
        <img src="shield.png" alt="Security Icon" className="h-6" />
        <div>
          <p className="text-xs text-gray-500 mt-1">
            We are using the most advanced security to provide you the best experience ever.
          </p>
        </div>
      </div>
      <div>
        <p className="font-semibold text-[16px] leading-[24px] text-left -tracking-[0.02em] mt-4">
          All your data are safe
        </p>
      </div>
    </form>
  </CardContent>
</Card>
</div>

  );
}

export default FormCards;
