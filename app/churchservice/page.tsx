"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer";
import { Logo } from "@/components/logo";

function SectionWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen flex items-center justify-center px-4 py-12 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default function SwahiliSongsPage() {
  return (
    <>
      <HeroHeader />
      <div className="min-h-screen bg-background text-foreground">
        {/* Section 1: Song Cover */}
        <SectionWrapper className="bg-gradient-to-br from-amber-50 to-green-50 dark:from-amber-950/20 dark:to-green-950/20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-6xl md:text-7xl">🎵</span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 text-amber-700 dark:text-amber-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              CHA KUTUMAINI SINA
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl mb-8 text-green-600 dark:text-green-400 font-semibold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              My Hope Is Built — Song No. 69
            </motion.p>
          </div>
        </SectionWrapper>

        {/* Section 2: Landscape Card Showcase */}
        <SectionWrapper>
          <div className="max-w-5xl mx-auto w-full">
            <motion.div
              className="flex flex-col md:flex-row items-stretch bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-amber-200 dark:border-amber-900/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Left: visual / artwork */}
              <div className="md:w-1/3 bg-gradient-to-br from-amber-100 to-green-100 dark:from-amber-900/20 dark:to-green-900/20 flex items-center justify-center p-8">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden bg-white/40 flex items-center justify-center border border-amber-300">
                    <Logo className="h-28 w-auto" />
                  </div>
                </div>
              </div>

              {/* Right: content */}
              <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-amber-700 dark:text-amber-300">
                        CHA KUTUMAINI SINA
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1">My Hope Is Built — Song No. 69 (SDA)</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                      <span className="px-3 py-1 text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 rounded-full font-semibold">NYIMBO 69</span>
                      <span className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 rounded-full font-semibold">SDA Hymnal</span>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {/* Verse blocks — each verse in its own card with subtle color accents */}
                    <div className="rounded-lg p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800">
                      <h4 className="text-sm font-semibold uppercase text-amber-600 tracking-widest mb-2">1. Beti ya Kwanza</h4>
                      <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Cha Kutumaini Sina; Ila Damu Yake Bwana,</p>
                      <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Sina Wema Wa Kutosha; Dhambi Zangu Kuziosha.</p>
                    </div>

                    <div className="rounded-lg p-4 bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800">
                      <h4 className="text-sm font-semibold uppercase text-green-600 tracking-widest mb-2">2. Beti ya Pili</h4>
                      <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Njia Yangu Iwe Ndefu; Yeye Hunipa Wokovu;</p>
                      <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Mawimbi Yakinipoga; Nguvu Zake Ndio Nanga.</p>
                    </div>

                    <div className="rounded-lg p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-800">
                      <h4 className="text-sm font-semibold uppercase text-red-600 tracking-widest mb-2">3. Beti ya Tatu</h4>
                      <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Damu Yake Na Sadaka; Nategemea Daima,</p>
                      <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Yote Chini Yakiisha; Mwokozi Atanitosha.</p>
                    </div>

                    <div className="rounded-lg p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800">
                      <h4 className="text-sm font-semibold uppercase text-amber-600 tracking-widest mb-2">4. Beti ya Nne</h4>
                      <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Nikiitwa Hukumuni; Rohoni Nina Amani;</p>
                      <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">Nikivikwa Haki Yake; Sina Hofu Mbele Zake.</p>
                    </div>
                  </div>
                </div>

                {/* Chorus block styled and italic */}
                <div className="mt-6">
                  <div className="rounded-2xl p-4 bg-gradient-to-r from-amber-50 to-green-50 dark:from-amber-900/10 dark:to-green-900/10 border border-amber-200 dark:border-amber-800">
                    <p className="italic text-lg md:text-xl text-amber-800 dark:text-amber-300 leading-relaxed text-center">
                      Kwake Yesu Nasimama,<br />
                      Ndiye Mwamba: Ni Salama;<br />
                      Ndiye Mwamba: Ni Salama;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Credit / small notes */}
            <motion.div className="mt-6 text-center text-sm text-muted-foreground" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
              <p></p>
            </motion.div>
          </div>
        </SectionWrapper>
      </div>
      <Footer />
    </>
  );
}