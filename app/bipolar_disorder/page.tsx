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

export default function BipolarDisorderPage() {
  return (
    <>
      <HeroHeader />
      <div className="min-h-screen bg-background text-foreground">
        {/* Section 1: Cover */}
        <SectionWrapper className="bg-gradient-to-br from-amber-50 to-green-50 dark:from-amber-950/20 dark:to-green-950/20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-amber-600 dark:text-amber-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              UNDERSTANDING BIPOLAR DISORDER
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-green-600 dark:text-green-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A Comprehensive Guide to Symptoms, Treatment, and Management
            </motion.p>
            <motion.div
              className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="mb-4">
                Bipolar disorder is a mental health condition characterized by extreme mood swings that include emotional highs (mania or hypomania) and lows (depression).
              </p>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Section 2: What is Bipolar Disorder */}
        <SectionWrapper>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-600 dark:text-amber-400">
                What is Bipolar Disorder?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Bipolar disorder is a mental illness that causes unusual and extreme shifts in a person's mood, energy, activity levels, and concentration. These shifts can affect a person's ability to carry out day-to-day tasks and maintain relationships.
                </p>
                <p>
                  The disorder presents in two primary forms: periods of extremely elevated mood (mania) and periods of deep sadness or hopelessness (depressive episodes). These mood episodes can last for days, weeks, or even months at a time.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500">
                  <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">
                    The Kenya Psychiatric Association (as reported in a news article) states that 1 in 4 Kenyans is likely to experience some mental illness at some point in life, though this is a broad mental health stat, not specific to bipolar.
                  </p>
                </div>
              </div>
            </div>
            <img 
              src="/bipolar.jpg" 
              alt="Brain Health Awareness"
              className="w-80 h-full md:h-80 rounded-2xl object-cover"
            />
          </div>
        </SectionWrapper>

        {/* Section 3: Types of Episodes */}
        <SectionWrapper className="bg-gradient-to-tr from-red-50 to-amber-50 dark:from-red-950/20 dark:to-amber-950/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-red-600 dark:text-red-400">
              The Two Faces of Bipolar Disorder
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border"
              >
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-red-600 dark:text-red-400">Manic Episodes</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Feeling unusually high, elevated, or euphoric
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Having lots of energy, feeling jumpy or wired
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Decreased need for sleep without feeling tired
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Talking very fast about many different things
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Racing thoughts and rapid speech
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Doing reckless things with poor judgment
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border"
              >
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl">🌧️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">Depressive Episodes</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Feeling very sad, empty, or hopeless
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Having very little energy
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Sleeping too much or too little
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Trouble concentrating or making decisions
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Feelings of worthlessness or guilt
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Loss of interest in activities once enjoyed
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* Section 4: Symptoms Timeline */}
        <SectionWrapper>
          <div className="max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-red-200 via-amber-200 to-green-200 opacity-60" />

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-600 dark:text-green-400">
              Comprehensive Symptom Overview
            </h2>

            <div className="space-y-12">
              {/* Manic Symptoms */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:flex md:items-start md:justify-between md:gap-8"
              >
                <div className="md:w-1/2 md:pr-8 text-right md:text-right">
                  <div className="inline-flex items-center justify-end gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center ring-4 ring-red-50 dark:ring-red-900/30">
                      <span className="text-red-600">⚡</span>
                    </div>
                    <div className="max-w-xl">
                      <h3 className="text-xl font-semibold text-red-700">Mania Symptoms</h3>
                      <div className="mt-2 text-muted-foreground grid grid-cols-2 gap-2 text-sm">
                        <span>• Excessive talking</span>
                        <span>• Racing thoughts</span>
                        <span>• Hostility</span>
                        <span>• Less sleep needed</span>
                        <span>• Flight of ideas</span>
                        <span>• Poor judgment</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-0">
                  <div className="relative">
                    <div className="w-5 h-5 rounded-full bg-white shadow-md border-2 border-red-200 -translate-x-2/4" />
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0" />
              </motion.div>

              {/* Mixed Symptoms */}
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
                      <span className="text-amber-600">🌀</span>
                    </div>
                    <div className="max-w-xl">
                      <h3 className="text-xl font-semibold text-amber-700">Additional Symptoms</h3>
                      <div className="mt-2 text-muted-foreground grid grid-cols-2 gap-2 text-sm">
                        <span>• Memory loss</span>
                        <span>• Delusions</span>
                        <span>• Extreme fatigue</span>
                        <span>• Prolonged sadness</span>
                        <span>• Poor nutrition</span>
                        <span>• Excessive spending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* Section 5: Teens and Young Adults */}
        <SectionWrapper className="bg-gradient-to-bl from-green-50 to-amber-50 dark:from-green-950/20 dark:to-amber-950/20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 dark:text-green-400">
                Bipolar Disorder in Teens and Young Adults
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Recognizing bipolar disorder in adolescents and young adults is crucial for early intervention and effective treatment. The symptoms may manifest differently than in adults and can often be mistaken for typical teenage mood swings.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Mania Signs in Youth:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Intense happiness or silliness</li>
                      <li>• Very short temper, extreme irritability</li>
                      <li>• Inflated sense of ability and power</li>
                      <li>• Reckless behavior with poor judgment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Depression Signs in Youth:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Feeling very sad or hopeless</li>
                      <li>• Social isolation from friends</li>
                      <li>• Eating too much or too little</li>
                      <li>• Sleeping too much</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <img 
              src="https://www.verywellmind.com/thmb/cVyT1WSI6XTjoSjzs-KkeewU8R4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/treating-bipolar-disorder-3576129_color2-5b32a5a546e0fb005b08b8f1.png" 
              alt="Youth Mental Health"
              className="w-auto h-45 md:h-80 rounded-2xl object-cover"
            />
          </div>
        </SectionWrapper>

        {/* Section 6: Treatment Options */}
        <SectionWrapper>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-amber-600 dark:text-amber-400">
              Comprehensive Treatment Approaches
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Medical Treatment",
                  icon: "💊",
                  color: "red",
                  items: [
                    "Mood stabilizers (Lithium, Valproate)",
                    "Atypical antipsychotics",
                    "Antidepressants (with caution)",
                    "Anti-anxiety medications"
                  ]
                },
                {
                  title: "Therapy & Counseling",
                  icon: "🛋️",
                  color: "green",
                  items: [
                    "Cognitive Behavioral Therapy (CBT)",
                    "Family-focused therapy",
                    "Psychoeducation",
                    "Interpersonal therapy"
                  ]
                },
                {
                  title: "Lifestyle Management",
                  icon: "🌿",
                  color: "amber",
                  items: [
                    "Regular sleep schedule",
                    "Stress management techniques",
                    "Healthy diet and exercise",
                    "Mood tracking and monitoring"
                  ]
                }
              ].map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-card p-6 rounded-2xl border shadow-sm"
                >
                  <div className={`w-12 h-12 bg-${treatment.color}-100 dark:bg-${treatment.color}-900/30 rounded-full flex items-center justify-center mb-4`}>
                    <span className="text-xl">{treatment.icon}</span>
                  </div>
                  <h3 className={`text-xl font-semibold text-${treatment.color}-600 mb-4`}>
                    {treatment.title}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {treatment.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className={`text-${treatment.color}-500 mr-2`}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Section 7: Self-Management & Support */}
        <SectionWrapper className="bg-gradient-to-br from-green-50 to-red-50 dark:from-green-950/20 dark:to-red-950/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 dark:text-green-400">
              Self-Management Strategies
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Effective management of bipolar disorder involves a combination of professional treatment and personal self-care strategies. Learning to recognize early warning signs and developing coping mechanisms are essential for long-term stability.
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                <motion.div
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg border"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-semibold text-amber-600 mb-3">Daily Management</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Maintain consistent sleep schedule</li>
                    <li>• Track mood changes daily</li>
                    <li>• Identify personal triggers</li>
                    <li>• Practice stress reduction</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg border"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-semibold text-green-600 mb-3">Support Systems</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Build strong social support</li>
                    <li>• Join support groups</li>
                    <li>• Educate family and friends</li>
                    <li>• Develop crisis plan</li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                className="bg-amber-100 dark:bg-amber-900/30 p-6 rounded-lg border-l-4 border-amber-500 mt-8"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-amber-800 dark:text-amber-200 font-semibold">
                  "Recovery is a journey, not a destination. With proper treatment, support, and self-care, people with bipolar disorder can lead fulfilling, productive lives."
                </p>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* Section 8: Educational Topics (replacing Crisis Resources) */}
        <SectionWrapper>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-600 dark:text-amber-400 text-center">
              Deeper Educational Topics About Bipolar Disorder
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="p-6 rounded-2xl border bg-red-50 dark:bg-red-900/10"
              >
                <h3 className="text-xl font-semibold text-red-700 mb-2">Subtypes & Course</h3>
                <p className="text-sm text-muted-foreground">
                  Bipolar I (full manic episodes), Bipolar II (hypomania + depression), and cyclothymic disorder (milder, chronic mood swings).
                  Course, episode frequency, and severity vary — knowing subtype guides treatment choices and prognosis.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="p-6 rounded-2xl border bg-amber-50 dark:bg-amber-900/10"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-2">Triggers & Early Warning Signs</h3>
                <p className="text-sm text-muted-foreground">
                  Episodes are often preceded by subtle changes: sleep disruption, increased goal-directed activity, social withdrawal, irritability,
                  or small shifts in mood/energy. Identifying personal triggers (stress, substance use, medication changes) enables prevention.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="p-6 rounded-2xl border bg-green-50 dark:bg-green-900/10"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-2">Circadian Rhythms & Sleep</h3>
                <p className="text-sm text-muted-foreground">
                  Disturbed sleep is both a symptom and a trigger. Stabilizing routines, light exposure, and sleep hygiene are core to relapse prevention
                  and mood stabilisation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="p-6 rounded-2xl border bg-red-50 dark:bg-red-900/10"
              >
                <h3 className="text-xl font-semibold text-red-700 mb-2">Medication & Reproductive Considerations</h3>
                <p className="text-sm text-muted-foreground">
                  Some mood stabilizers and antipsychotics require special care during pregnancy and breastfeeding. Planning with clinicians reduces risks
                  and balances maternal and fetal health needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="p-6 rounded-2xl border bg-amber-50 dark:bg-amber-900/10"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-2">Personalised Medicine & Pharmacogenetics</h3>
                <p className="text-sm text-muted-foreground">
                  Genetic factors influence medication response and side-effect risk. Pharmacogenetic testing can inform drug selection and dosing for some patients.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.25 }}
                className="p-6 rounded-2xl border bg-green-50 dark:bg-green-900/10"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-2">Digital Tools & Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Mood-tracking apps, sleep logs, and simple daily check-ins help detect changes early. Sharing structured data with the care team improves decisions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="p-6 rounded-2xl border bg-red-50 dark:bg-red-900/10 md:col-span-2 lg:col-span-1"
              >
                <h3 className="text-xl font-semibold text-red-700 mb-2">Comorbidities & Physical Health</h3>
                <p className="text-sm text-muted-foreground">
                  High rates of metabolic syndrome, cardiovascular disease, and substance use disorders mean integrated care is essential — monitor weight, glucose,
                  lipids and encourage healthy lifestyle changes alongside psychiatric treatment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.35 }}
                className="p-6 rounded-2xl border bg-amber-50 dark:bg-amber-900/10 md:col-span-2 lg:col-span-2"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-2">Family-Focused & Functional Interventions</h3>
                <p className="text-sm text-muted-foreground">
                  Family psychoeducation, supported employment, and structured relapse-prevention plans improve outcomes. Practical, goal-oriented rehabilitation
                  restores work, school and social roles — central elements of long-term recovery.
                </p>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* Section 9: Hope and Recovery */}
        <SectionWrapper className="bg-gradient-to-tr from-amber-50 to-green-50 dark:from-amber-950/20 dark:to-green-950/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 dark:text-green-400">
              Hope and Recovery
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                While bipolar disorder is a lifelong condition, it is highly treatable. Many people with bipolar disorder achieve stability through a combination of medication, therapy, and lifestyle management.
              </p>
              <p>
                With proper treatment and support, individuals with bipolar disorder can maintain healthy relationships, pursue meaningful careers, and enjoy a good quality of life.
              </p>
              <motion.div
                className="bg-gradient-to-r from-amber-500 to-green-500 p-8 rounded-2xl text-white mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-2xl font-bold mb-4">YOU ARE NOT ALONE</p>
                <p className="text-xl font-semibold">Recovery is Possible</p>
                <p className="mt-6 text-amber-100">
                  Help is available, and with the right support system and treatment plan, managing bipolar disorder effectively is achievable.
                </p>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      </div>
      <Footer />
    </>
  );
}