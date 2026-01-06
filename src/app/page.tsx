import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import ThumbnailCarousel from '@/components/Home/Conferences';
import WorkSpeakers from '@/components/Home/WorkSpeakers';
import EventTicket from '@/components/Home/EventTicket';
import Highlight from '@/components/Home/YearHighlight/page';
import IndustryWeServe from '@/components/Home/Upcoming';
import Testimonials from '@/components/Home/Testimonials';
import TicketSection from '@/components/Home/TicketSection';
import LogoCarousel from '@/components/Home/LogoCarousel';
export const metadata: Metadata = {
  title: "Cassaiot",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoCarousel />
      <Highlight/>
      <EventTicket/>
      <IndustryWeServe/>
      {/* <ThumbnailCarousel/> */}
      <WorkSpeakers/>
      <Testimonials/>
      {/* <TicketSection/> */}
    </main>
  )
}
