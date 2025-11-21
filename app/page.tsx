"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer";

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

export default function HealthMinistrySabbathPage() {
  return (
    <>
      <HeroHeader />
      <div className="min-h-screen bg-background text-foreground">
        {/* Section 1: Hero Cover */}
        <SectionWrapper className="bg-gradient-to-br from-green-50 via-amber-50 to-red-50 dark:from-green-950/20 dark:via-amber-950/20 dark:to-red-950/20 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 dark:bg-green-800/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-200 dark:bg-amber-800/30 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-red-200 dark:bg-red-800/30 rounded-full blur-lg"></div>
          
          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-2xl md:text-3xl font-light mb-4 text-green-600 dark:text-green-400">
                Kiamunyi West SDA Church
              </h1>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-4"></div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-amber-600 dark:text-amber-400">
                Health Ministry Sabbath
              </h2>
              <div className="text-xl md:text-2xl font-semibold text-red-600 dark:text-red-400 mb-4">
                29th Saturday November
              </div>
            </motion.div>

            <motion.div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-green-200 dark:border-green-800 max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                Welcome to the Health Ministry Sabbath. We focus on promoting physical, mental, and spiritual well-being in alignment with our Seventh-day Adventist faith principles. Today we explore events dedicated to fostering a healthy lifestyle within our community, embracing holistic health as we honor the Sabbath.
              </p>
              
              <motion.div
                className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border-l-4 border-amber-500 mt-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-amber-800 dark:text-amber-200 font-semibold text-lg">
                  "Beloved, I pray that all may go well with you and that you may be in good health, as it goes well with your soul." - 3 John 1:2
                </p>
              </motion.div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Section 2: Key Scripture & Introduction */}
        <SectionWrapper>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6 text-green-600 dark:text-green-400"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                Today's Key Scripture
              </motion.h2>
              <motion.div
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-green-200 dark:border-green-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-2xl md:text-3xl font-serif italic text-center text-muted-foreground leading-relaxed mb-4">
                  "Nevertheless each person should live as a believer in whatever situation the Lord has assigned them, just as God has called them. This is the rule I lay down in all the churches."
                </p>
                <p className="text-center text-lg font-semibold text-amber-600 dark:text-amber-400">
                  1 Corinthians 7:17
                </p>
              </motion.div>
            </div>
            
            <motion.div
              className="bg-gradient-to-br from-green-100 to-amber-100 dark:from-green-900/30 dark:to-amber-900/30 rounded-2xl p-8 h-64 md:h-80 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">⛪</span>
                </div>
                <p className="text-lg font-semibold text-green-700 dark:text-green-300">Holistic Health</p>
                <p className="text-sm text-muted-foreground mt-2">Body, Mind & Spirit</p>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Section 3: Four Pillars of Health */}
        <SectionWrapper className="bg-gradient-to-tr from-red-50 to-amber-50 dark:from-red-950/20 dark:to-amber-950/20">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-600 dark:text-red-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              The Four Pillars of Holistic Health
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🏃‍♂️",
                  title: "Physical Health",
                  color: "green",
                  items: [
                    "Regular exercise and activity",
                    "Balanced nutrition",
                    "Adequate rest and sleep",
                    "Preventive healthcare"
                  ]
                },
                {
                  icon: "🧠",
                  title: "Mental Wellness",
                  color: "amber",
                  items: [
                    "Stress management",
                    "Emotional balance",
                    "Continuous learning",
                    "Mindfulness practices"
                  ]
                },
                {
                  icon: "🙏",
                  title: "Spiritual Growth",
                  color: "red",
                  items: [
                    "Daily prayer and meditation",
                    "Bible study",
                    "Sabbath observance",
                    "Church fellowship"
                  ]
                },
                {
                  icon: "👥",
                  title: "Social Connection",
                  color: "green",
                  items: [
                    "Community involvement",
                    "Healthy relationships",
                    "Support systems",
                    "Service to others"
                  ]
                }
              ].map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-${pillar.color}-100 dark:bg-${pillar.color}-900/30 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    <span className="text-2xl">{pillar.icon}</span>
                  </div>
                  <h3 className={`text-xl font-bold text-${pillar.color}-600 text-center mb-4`}>
                    {pillar.title}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {pillar.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm">
                        <span className={`text-${pillar.color}-500 mr-2`}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Section 4: Today's Focus Areas */}
        <SectionWrapper>
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-amber-600 dark:text-amber-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Today's Health Focus Areas
            </motion.h2>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border-l-4 border-green-500"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-4">Physical Wellness</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Importance of regular exercise for cardiovascular health</li>
                  <li>• Plant-based nutrition principles</li>
                  <li>• Hydration and its benefits</li>
                  <li>• Restorative sleep patterns</li>
                  <li>• Sunlight and fresh air benefits</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border-l-4 border-amber-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-4">Mental Health Awareness</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Recognizing mental health challenges</li>
                  <li>• Stress reduction techniques</li>
                  <li>• Building emotional resilience</li>
                  <li>• Importance of social connections</li>
                  <li>• Seeking professional help when needed</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border-l-4 border-red-500"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4">Spiritual Practices</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Daily devotional routines</li>
                  <li>• Sabbath-keeping benefits</li>
                  <li>• Prayer and meditation</li>
                  <li>• Service and community outreach</li>
                  <li>• Faith-based coping strategies</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* Section 5: Practical Integration */}
        <SectionWrapper className="bg-gradient-to-br from-green-50 to-amber-50 dark:from-green-950/20 dark:to-amber-950/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-green-600 dark:text-green-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Integrating Health into Daily Life
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p>
                Let us delve into practical ways to integrate healthful living into our daily routines while observing the sanctity of the Sabbath. True health encompasses every aspect of our being - physical, mental, and spiritual.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
                <motion.div
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg border"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-semibold text-amber-600 mb-3">Daily Health Habits</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Start with prayer and thanksgiving</li>
                    <li>• 30 minutes of physical activity</li>
                    <li>• Drink 8 glasses of water</li>
                    <li>• Eat colorful plant-based meals</li>
                    <li>• Practice gratitude journaling</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg border"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-semibold text-green-600 mb-3">Sabbath Health Focus</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Nature walks and outdoor worship</li>
                    <li>• Healthy potluck fellowship</li>
                    <li>• Rest and digital detox</li>
                    <li>• Family health activities</li>
                    <li>• Service and community care</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Section 6: Call to Action */}
        <SectionWrapper>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-red-600 dark:text-red-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Join Us in Celebration
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p>
                Let us come together to celebrate Health Ministry Sabbath, strengthening our bodies, minds, and spirits in harmony with our faith. Today we embark on a journey toward comprehensive well-being, supported by our church community and guided by biblical principles.
              </p>

              <motion.div
                className="bg-gradient-to-r from-green-500 to-amber-500 p-8 rounded-2xl text-white mt-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-2xl font-bold mb-4">"I CAN DO ALL THINGS THROUGH CHRIST"</p>
                <p className="text-xl font-semibold mb-4">Philippians 4:13</p>
                <p className="text-amber-100">
                  Including maintaining a healthy lifestyle that honors God's temple - our bodies
                </p>
              </motion.div>

              {/* Additional Content */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white">📚</span>
                  </div>
                  <h4 className="font-semibold text-green-600">Health Seminars</h4>
                  <p className="text-sm text-muted-foreground mt-2">Educational sessions throughout the day</p>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="w-12 h-12 bg-amber-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white">🥗</span>
                  </div>
                  <h4 className="font-semibold text-amber-600">Healthy Cooking</h4>
                  <p className="text-sm text-muted-foreground mt-2">Plant-based cooking demonstrations</p>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white">🏥</span>
                  </div>
                  <h4 className="font-semibold text-red-600">Health Screening</h4>
                  <p className="text-sm text-muted-foreground mt-2">Free basic health check-ups available</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Section 7: Closing Blessing */}
        <SectionWrapper className="bg-gradient-to-tr from-amber-50 to-green-50 dark:from-amber-950/20 dark:to-green-950/20">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400">
                May God Bless Your Health Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                As we conclude this Health Ministry Sabbath introduction, remember that your body is the temple of the Holy Spirit. 
                May you be strengthened in body, renewed in mind, and refreshed in spirit.
              </p>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border">
                <p className="text-xl font-semibold text-amber-600 dark:text-amber-400">
                  "So whether you eat or drink or whatever you do, do it all for the glory of God." - 1 Corinthians 10:31
                </p>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      </div>
      <Footer />
    </>
  );
}