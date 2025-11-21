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

export default function SermonPage() {
  return (
    <>
      <HeroHeader />
      <div className="min-h-screen bg-background text-foreground">
        {/* Section 1: Cover */}
        <SectionWrapper className="bg-gradient-to-br from-amber-50 to-green-50 dark:from-amber-950/20 dark:to-green-950/20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-amber-600 dark:text-amber-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              BLOOM WHERE YOU ARE PLANTED
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-green-600 dark:text-green-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Bible Reading | Key Verse 1 Corinthians 7:17
            </motion.p>
            <motion.blockquote
              className="text-lg md:text-xl italic border-l-4 border-red-500 pl-4 max-w-2xl mx-auto text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              "Nevertheless each person should live as a believer in whatever situation the Lord has assigned them, just as God has called them - This is the rule I lay down in all the churches."
            </motion.blockquote>
          </div>
        </SectionWrapper>

        {/* Section 2: Introduction to the Theme */}
        <SectionWrapper>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-600 dark:text-amber-400">
                Introduction to the Theme
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The theme for AAIM Sabbath this year is "Bloom where you are planted", an expression which many have possibly heard before in different circles. Although the expression "to bloom" or "to blossom" conjures up figures of flowers, fruits, abundance or thriving, the essence of the phrase implies triumph over hardship.
                </p>
                <p>
                  To bloom where you are planted means to thrive, grow, and make the most of your circumstances regardless of how challenging they may be. It is about finding ways to flourish and succeed in the environment you find yourself in, rather than wishing for different circumstances."

                  <p>
                    In the context of our lives, this means embracing our current situations, making the best out of them, and striving to grow spiritually, emotionally, and mentally despite any obstacles we may face.
                  </p>
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-tr from-green-100 to-amber-100 dark:from-green-900/30 dark:to-amber-900/30 rounded-2xl p-8 h-64 md:h-80 flex items-center justify-center">
              <div className="text-center">
                <a href="https://aidsministries.co/resources-materials/" target="_blank" rel="noopener noreferrer">
                  <img src="/aaim.png" alt="Theme Inspiration" className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Section 3: AAIM Sabbath Context */}
        <SectionWrapper className="bg-gradient-to-tr from-red-50 to-amber-50 dark:from-red-950/20 dark:to-amber-950/20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/582464954_879342264435206_6699192817633778860_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=107&ccb=1-7&_nc_sid=75d36f&_nc_ohc=qxjZgf71ZtMQ7kNvwGatrzL&_nc_oc=AdmGndMDScNdpE8EbiQJYB8jLTrQnAt73bIL7zyGb-yAhVkm5C8cxAHchmYpf2-frcI&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=lTBUR_OFBn21FYFJOf2sUw&oh=00_AfiHPsTZ1SiwAE_CWBIae-ac8mWLS1rPVX8QKx7J-NoLCQ&oe=6926514B"
                alt="World AIDS Day Commemoration"
                className="w-full h-80 md:h-full object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-600 dark:text-red-400">
                AAIM Sabbath Context
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Today we have the special AAIM Sabbath, usually set just a few days before the World Commemoration of World AIDS Day, December 1st. The AAIM Sabbath has been set aside to draw our attention to the pandemic of HIV/AIDS which continues to take lives and impact so many in mostly negative ways.
                </p>
                <p>
                  One may wonder why we pick the theme "Bloom where you are planted" in the context of a raging pandemic responsible for more than 40 million lives and counting. The point is, we need hope, courage, grit, gratitude and determination to face this pandemic.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Section 4: The Common Thread of Pandemics */}
        <SectionWrapper>
          <div className="max-w-6xl mx-auto relative">
            {/* vertical timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-red-200 via-amber-200 to-green-200 opacity-60" />

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-600 dark:text-green-400">
              The Common Thread of Pandemics
            </h2>

            <div className="space-y-12">
              {/* Item 1 */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:flex md:items-start md:justify-between md:gap-8"
              >
                <div className="md:w-1/2 md:pr-8 text-right md:text-right">
                  <div className="inline-flex items-center justify-end gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center ring-4 ring-red-50 dark:ring-red-900/30">
                      {/* virus icon */}
                      <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 11v2M5 11v2M15.5 6.5l1.4 1.4M7.1 16.9l1.4 1.4M6.5 8.5L7.9 7.1M16.1 17.9l1.4 1.4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="max-w-xl">
                      <h3 className="text-xl font-semibold text-red-700">Life-threatening impact</h3>
                      <p className="mt-2 text-muted-foreground">
                        Pandemics threaten lives at scale — overwhelming health systems and demanding radical, often urgent changes
                        (lockdowns, triage, reallocation of resources) to prevent complications and wider spread. These measures produce
                        ripple effects across society: delayed care for other conditions, economic strain, and long-term public-health challenges.
                      </p>
                    </div>
                  </div>
                </div>

                {/* center marker for md+ */}
                <div className="hidden md:flex items-center justify-center w-0">
                  <div className="relative">
                    <div className="w-5 h-5 rounded-full bg-white shadow-md border-2 border-red-200 -translate-x-2/4" />
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0" />
              </motion.div>

              {/* Item 2 (alternate) */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:flex md:items-start md:justify-between md:gap-8"
              >
                <div className="md:w-1/2 md:pr-8 mt-6 md:mt-0" />

                <div className="hidden md:flex items-center justify-center w-0">
                  <div className="relative">
                    <div className="w-5 h-5 rounded-full bg-white shadow-md border-2 border-amber-200 -translate-x-2/4" />
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-8 text-left">
                  <div className="inline-flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center ring-4 ring-amber-50 dark:ring-amber-900/30">
                      {/* hands / hope icon */}
                      <svg className="w-6 h-6 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 12v7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 12s1-4 4-4 4 4 4 4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 20s2-3 4-3 4 3 4 3 2-3 4-3 4 3 4 3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="max-w-xl">
                      <h3 className="text-xl font-semibold text-amber-700">Threat to hope and faith</h3>
                      <p className="mt-2 text-muted-foreground">
                        The emotional toll of pandemics can erode hope — people lose jobs, loved ones, and routines that anchored daily life.
                        Grief, prolonged uncertainty, and isolation make it natural to question meaning, purpose, and even faith. Restoring hope
                        requires community care, visible acts of compassion, and spiritual support that point beyond immediate hardship.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Item 3 */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:flex md:items-start md:justify-between md:gap-8"
              >
                <div className="md:w-1/2 md:pr-8 text-right md:text-right">
                  <div className="inline-flex items-center justify-end gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center ring-4 ring-green-50 dark:ring-green-900/30">
                      {/* person / worth icon */}
                      <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 20a8 8 0 0116 0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="max-w-xl">
                      <h3 className="text-xl font-semibold text-green-700">Questions of personal worth</h3>
                      <p className="mt-2 text-muted-foreground">
                        When livelihoods, roles, and relationships are disrupted, many people struggle with self-worth and identity.
                        Illness, stigma, or job loss can isolate individuals from family and community, making recovery not only physical but social.
                        Rebuilding dignity means restoring practical support, inclusion, and opportunities to contribute again.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-0">
                  <div className="relative">
                    <div className="w-5 h-5 rounded-full bg-white shadow-md border-2 border-green-200 -translate-x-2/4" />
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0" />
              </motion.div>
            </div>

            <p className="mt-10 text-center text-muted-foreground max-w-4xl mx-auto">
              We cannot speak of hope and courage unless we have confronted hardship. The spirit of blooming amid challenges is not naïve optimism —
              it is a posture of resilience: practical care, spiritual trust, and community solidarity combined. In the face of pandemics we must
              respond with wisdom, compassion and creative love so that lives and communities may not only survive, but flourish.
            </p>
          </div>
        </SectionWrapper>

        {/* Section 5: The Call to Serve */}
        <SectionWrapper className="bg-gradient-to-bl from-green-50 to-amber-50 dark:from-green-950/20 dark:to-amber-950/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-600 dark:text-amber-400">
              The Call to Serve
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                The call today therefore is for all to make the most of your current circumstances, even if they are challenging. Serve God and humanity in your vicinity within your current circumstances as per 1 Corinthians 7:17.
              </p>
              <p>
                Adapt and learn to be resilient despite your circumstances. Take advantage of the opportunities life presents to you.
              </p>
              <motion.div
                className="bg-amber-100 dark:bg-amber-900/30 p-6 rounded-lg border-l-4 border-amber-500 mt-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-amber-800 dark:text-amber-200 font-semibold">
                  "Never lose hope. Some characters in the Bible illustrate this concept of blossoming in the end."
                </p>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* Section 6: Joseph's Story */}
        <SectionWrapper>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 dark:text-green-400">
                Joseph's Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Joseph, son of Jacob and Rachel, lost his mother early in life. His older brothers hated him to the point of wanting to kill him, even selling him as a slave to foreigners. Joseph had to learn to survive in a foreign country with everything different from his home – language, food, culture, dressing, religion.
                </p>
                <p>
                  He dropped from being a favorite son to less than a servant, a slave with no choice and no status. He became a prisoner in this foreign land falsely accused. Yet at every phase of his life, he strove to bloom.
                </p>
                <p className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-500">
                  <strong>Genesis 39:23:</strong> "The warden paid no attention to anything under Joseph's care, because the LORD was with Joseph and gave him success in whatever he did."
                </p>
              </div>
            </div>

            {/* image container — removed colored gradient background so only the image shows */}
            <div className="rounded-2xl p-0 h-64 md:h-80 flex items-center justify-center overflow-hidden bg-transparent">
              <img
                src="https://i0.wp.com/madeofstill.com/wp-content/uploads/2022/10/Joseph-and-his-coat-of-many-colors.png?fit=1000%2C667&ssl=1"
                alt="Joseph's Coat of Many Colors"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </SectionWrapper>

        {/* Section 7: Ruth's Story */}
        <SectionWrapper className="bg-gradient-to-tr from-amber-50 to-red-50 dark:from-amber-950/20 dark:to-red-950/20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="rounded-2xl p-0 h-64 md:h-80 flex items-center justify-center overflow-hidden bg-transparent">
                <img
                  src="https://www.inspirationalchristians.org/images/ruth-fields-1-1024x640.jpg.webp"
                  alt="Ruth's Story - From Gleaning to Grace"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-600 dark:text-amber-400">
                Ruth's Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Ruth's story record starts where things are bad. She has lost both her husband and father-in-law at a time where a woman had no status in society and needed a male figure to give her legitimacy. She opts to go with her mother-in-law Naomi to a foreign land out of love.
                </p>
                <p>
                  In Israel she has bad circumstances – a foreigner from a group of people that Israelites did not associate with, a widow to a destitute mother. Her only means of survival is to glean the fields, picking up what was left behind at harvest.
                </p>
                <p>
                  Yet we see her very diligent at what she does to the point of being noticed by rich farmer Boaz. To bloom where you are means to put down roots where you really are rather than longing for someplace else.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Section 8: Paul's Story */}
        <SectionWrapper>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-600 dark:text-red-400">
                Paul's Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Paul, the Apostle previously named Saul, was an educated man. Well-read and well placed in society. Known for his piety and zeal to enforce the law to death. After meeting Christ, he found himself an outcast – unwanted by the people he previously worked with, not fully trusted by the brethren whose new faith he had embraced.
                </p>
                <p>
                  Without a family or acceptance he was a lonely man. Eventually he ends up in prison sentenced to death. But Paul blooms wherever he finds himself. While in prison, Paul demonstrated that his enthusiasm for work was not because things were easy or he had freedom.
                </p>
                <p className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-l-4 border-red-500">
                  <strong>Romans 8:35-39:</strong> "Who shall separate us from the love of Christ?..."
                </p>
              </div>
            </div>

            <div className="rounded-2xl p-0 h-64 md:h-80 flex items-center justify-center overflow-hidden bg-transparent">
              <img
                src="https://cdn.churchleaders.com/wp-content/uploads/2024/04/how-many-books-did-paul-write-in-the-bible.jpg"
                alt="Paul's Prison Letters"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </SectionWrapper>

        {/* Section 9: Conclusion */}
        <SectionWrapper className="bg-gradient-to-br from-green-50 to-red-50 dark:from-green-950/20 dark:to-red-950/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 dark:text-green-400">
              Conclusion
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Blooming where you are planted is about growing and maturing in the good seasons of life and the tough seasons of life. Even when we don't always have a choice in where we are planted.
              </p>
              <p>
                We reach higher levels of spiritual maturity when our faith is tested. All of us have different circumstances. Maybe you are like Joseph, Ruth, or Paul. Challenged at home, socially despised for your status – there is no state in which God cannot reach you.
              </p>
              <motion.div
                className="bg-green-100 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-green-800 dark:text-green-200 font-semibold">
                  "Reach out to Him and get nourished so you too can BLOOM. Stop focusing on what you lost, but look at who you are now, what do you have at this point."
                </p>
              </motion.div>

              {/* New Section: Faith & Therapy */}
              <motion.div
                className="bg-gradient-to-r from-amber-50 to-green-50 dark:from-amber-900/20 dark:to-green-900/20 p-8 rounded-2xl border border-amber-200 dark:border-amber-800 mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-6">
                  Balancing Religious Beliefs and Therapy
                </h3>
                <div className="space-y-4 text-left text-muted-foreground">
                  <p className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold text-xl mt-1">•</span>
                    <span><strong>Crucial for Holistic Well-being:</strong> While faith provides strength, therapists offer practical tools for mental health.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-xl mt-1">•</span>
                    <span><strong>Complementary Approaches:</strong> Spiritual beliefs instill hope, but therapy aids in understanding and addressing underlying issues.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl mt-1">•</span>
                    <span><strong>Comprehensive Healing:</strong> Embracing both acknowledges the importance of mental and spiritual dimensions, fostering a comprehensive approach to healing.</span>
                  </p>

                  <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-amber-500">
                    <p className="italic text-amber-800 dark:text-amber-300 font-semibold">
                      "Faith gives us the courage to face the uncertainties while therapy equips us to navigate them with clarity."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* Section 10: Songs for Meditation (removed) */}
        {/* Section removed as requested */}

        {/* Section 11: Bible Reading */}
        <SectionWrapper className="bg-gradient-to-tr from-amber-50 to-green-50 dark:from-amber-950/20 dark:to-green-950/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-600 dark:text-red-400">
              Bible Reading
            </h2>
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-2xl md:text-3xl font-serif italic text-muted-foreground mb-4">
                1 Corinthians 7:17
              </p>
              <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                "Nevertheless each person should live as a believer in whatever situation the Lord has assigned them, just as God has called them. This is the rule I lay down in all the churches."
              </blockquote>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Section 12: Final Encouragement */}
        <SectionWrapper>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 dark:text-green-400">
              Final Encouragement
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Remember, no one blooms overnight; it's a process. Blooming with grace also means being gracious, patient, and kind to those around us. When Joseph flourished, he shared what he had with his brothers instead of harboring bitterness toward them.
              </p>
              <p>
                God calls us to be His witnesses wherever we go. When we bloom in tough situations, we show others that our strength comes from God. Our lives testify to God's faithfulness, resilience, and grace.
              </p>
              <motion.div
                className="bg-gradient-to-r from-amber-500 to-green-500 p-8 rounded-2xl text-white mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-2xl font-bold mb-4">I WILL GO!</p>
                <p className="text-xl font-semibold">HOPE, LOVE & COMPASSION</p>
                <p className="mt-6 text-amber-100">Written by Dr. Bangwato Sikwa Ramabu</p>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      </div>
      <Footer />
    </>
  );
}