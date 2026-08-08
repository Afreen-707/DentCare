"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import PricingSection from "@/components/landing/Pricing Section";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import WhatToAsk from "@/components/landing/WhatToAsk";
import { currentUser } from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
export default async function Home() {
  const user = await currentUser();

  if (user) redirect("/dashboard");

  if 
  return <div className="min-h-screen bg-background">
    <Header/>
    <Hero/>
    <HowItWorks/>
    <WhatToAsk/>
    <PricingSection/>
    <CTA />
    <Footer/>


  </div>
}
