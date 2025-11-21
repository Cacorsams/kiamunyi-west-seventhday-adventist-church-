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

export default function SchizophreniaPage() {
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
              UNDERSTANDING SCHIZOPHRENIA
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-green-600 dark:text-green-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A Comprehensive Guide to Symptoms, Causes, and Treatment
            </motion.p>
            <motion.div
              className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="mb-4">
                Schizophrenia is a serious mental disorder that affects how a person thinks, feels, and behaves. People with schizophrenia may seem like they have lost touch with reality, which can be distressing for them and their loved ones.
              </p>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Section 2: What is Schizophrenia */}
        <SectionWrapper>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-600 dark:text-amber-400">
                What is Schizophrenia?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Schizophrenia is a chronic mental health disorder characterized by distortions in thinking, perception, emotions, language, sense of self, and behavior. It affects approximately 1% of the population worldwide and typically emerges in late adolescence or early adulthood.
                </p>
                <p>
                  Contrary to common misconceptions, schizophrenia is not about having a "split personality." Rather, it involves a range of problems with thinking, behavior, and emotions that can significantly impact daily functioning.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500">
                  <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">
                    Important: With proper treatment and support, many people with schizophrenia can lead productive and fulfilling lives.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl p-0 h-64 md:h-80 flex items-center justify-center overflow-hidden bg-transparent">
              <img
                src="https://www.verywellmind.com/thmb/bpnRskY7BS1l_3GE2NT-swJDQU4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/what-are-the-symptoms-of-schizophrenia-2953120-e15ca22957ec44ff8969cf9b8ac24568.jpg"
                alt="Schizophrenia illustration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </SectionWrapper>

        {/* Section 3: Primary Symptoms */}
        <SectionWrapper className="bg-gradient-to-tr from-red-50 to-amber-50 dark:from-red-950/20 dark:to-amber-950/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-red-600 dark:text-red-400">
              Primary Symptoms of Schizophrenia
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border"
              >
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl">🎭</span>
                  </div>
                  <h3 className="text-2xl font-bold text-red-600 dark:text-red-400">Positive Symptoms</h3>
                  <p className="text-sm text-muted-foreground mt-2">(Behaviors not seen in healthy people)</p>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <strong>Delusions:</strong> Fixed false beliefs not based in reality
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <strong>Hallucinations:</strong> Hearing, seeing, or feeling things that aren't there
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <strong>Disorganized Thinking:</strong> Incoherent speech and thoughts
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <strong>Disorganized Behavior:</strong> Unusual or inappropriate actions
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
                    <span className="text-xl">🌫️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">Negative Symptoms</h3>
                  <p className="text-sm text-muted-foreground mt-2">(Reduced or absent normal behaviors)</p>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <strong>Reduced Expression:</strong> Lack of emotion or facial expression
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <strong>Social Withdrawal:</strong> Loss of interest in social activities
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <strong>Avolition:</strong> Lack of motivation or initiative
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <strong>Anhedonia:</strong> Inability to experience pleasure
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* Section 4: Comprehensive Symptoms Overview */}
        <SectionWrapper>
          <div className="max-w-6xl mx-auto relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-600 dark:text-green-400">
              Detailed Symptoms and Signs
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Cognitive Symptoms",
                  icon: "💭",
                  color: "red",
                  symptoms: [
                    "Poor concentration",
                    "Memory difficulties",
                    "Trouble making decisions",
                    "Disorganized thinking"
                  ]
                },
                {
                  title: "Emotional Symptoms",
                  icon: "😔",
                  color: "green",
                  symptoms: [
                    "Lack of emotional expression",
                    "Inappropriate emotional responses",
                    "Reduced motivation",
                    "Social withdrawal"
                  ]
                },
                {
                  title: "Behavioral Symptoms",
                  icon: "🚶",
                  color: "amber",
                  symptoms: [
                    "Reduced speech and activity",
                    "Impaired daily functioning",
                    "Unusual movements",
                    "Neglect of personal hygiene"
                  ]
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-card p-6 rounded-2xl border shadow-sm"
                >
                  <div className={`w-12 h-12 bg-${category.color}-100 dark:bg-${category.color}-900/30 rounded-full flex items-center justify-center mb-4`}>
                    <span className="text-xl">{category.icon}</span>
                  </div>
                  <h3 className={`text-xl font-semibold text-${category.color}-600 mb-4`}>
                    {category.title}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {category.symptoms.map((symptom, symptomIndex) => (
                      <li key={symptomIndex} className="flex items-start">
                        <span className={`text-${category.color}-500 mr-2`}>•</span>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Section 5: Causes and Risk Factors */}
        <SectionWrapper className="bg-gradient-to-bl from-green-50 to-amber-50 dark:from-green-950/20 dark:to-amber-950/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-amber-600 dark:text-amber-400">
              Causes and Risk Factors
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border">
                  <h3 className="text-xl font-semibold text-red-600 mb-4">Biological Factors</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <strong>Genetic Factors:</strong> Higher risk if family history is present
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <strong>Brain Chemistry:</strong> Imbalance of neurotransmitters like dopamine and glutamate
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <strong>Brain Structure:</strong> Differences in brain structure and central nervous system
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Environmental Factors</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <strong>Prenatal Exposure:</strong> Stress, malnutrition, or infections during pregnancy
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <strong>Childhood Trauma:</strong> Physical, emotional, or sexual abuse
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <strong>Social Factors:</strong> Urban upbringing, migration, social isolation
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <strong>Substance Use:</strong> Cannabis and other drug use during adolescence
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* Section 6: Treatment Approaches */}
        <SectionWrapper>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-600 dark:text-green-400">
              Comprehensive Treatment Approaches
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Medication",
                  icon: "💊",
                  color: "red",
                  treatments: [
                    "Antipsychotic medications",
                    "Risperidone, Olanzapine",
                    "Clozapine for treatment-resistant cases",
                    "Mood stabilizers when needed"
                  ],
                  description: "Medications help manage symptoms by affecting brain neurotransmitters."
                },
                {
                  title: "Psychotherapy",
                  icon: "🛋️",
                  color: "green",
                  treatments: [
                    "Cognitive Behavioral Therapy (CBT)",
                    "Family therapy and education",
                    "Social skills training",
                    "Cognitive remediation therapy"
                  ],
                  description: "Therapy helps develop coping strategies and improve social functioning."
                },
                {
                  title: "Support Services",
                  icon: "🤝",
                  color: "amber",
                  treatments: [
                    "Case management",
                    "Vocational rehabilitation",
                    "Supported employment",
                    "Housing assistance programs"
                  ],
                  description: "Comprehensive support helps with daily living and community integration."
                }
              ].map((approach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-card p-6 rounded-2xl border shadow-sm flex flex-col"
                >
                  <div className={`w-12 h-12 bg-${approach.color}-100 dark:bg-${approach.color}-900/30 rounded-full flex items-center justify-center mb-4`}>
                    <span className="text-xl">{approach.icon}</span>
                  </div>
                  <h3 className={`text-xl font-semibold text-${approach.color}-600 mb-3`}>
                    {approach.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {approach.description}
                  </p>
                  <ul className="space-y-2 text-muted-foreground flex-grow">
                    {approach.treatments.map((treatment, treatmentIndex) => (
                      <li key={treatmentIndex} className="flex items-start">
                        <span className={`text-${approach.color}-500 mr-2`}>•</span>
                        {treatment}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Section 7: Recovery and Management */}
        <SectionWrapper className="bg-gradient-to-br from-green-50 to-red-50 dark:from-green-950/20 dark:to-red-950/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 dark:text-green-400">
              Recovery and Long-Term Management
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Recovery from schizophrenia is a lifelong process that involves learning to manage symptoms, rebuild relationships, and work toward personal goals. Early intervention and consistent treatment are key to better outcomes.
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                <motion.div
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg border"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-semibold text-amber-600 mb-3">Self-Management Strategies</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Stick to treatment plans consistently</li>
                    <li>• Learn to recognize early warning signs</li>
                    <li>• Maintain a stable daily routine</li>
                    <li>• Practice stress management techniques</li>
                    <li>• Avoid alcohol and recreational drugs</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg border"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-semibold text-green-600 mb-3">Family Support</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Learn about schizophrenia together</li>
                    <li>• Practice good communication skills</li>
                    <li>• Set realistic expectations</li>
                    <li>• Take care of your own mental health</li>
                    <li>• Join family support groups</li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                className="bg-amber-100 dark:bg-amber-900/30 p-6 rounded-lg border-l-4 border-amber-500 mt-8"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-amber-800 dark:text-amber-200 font-semibold">
                  "Being able to recognize you have an underlying condition and learning to live positively with appropriate support is a significant step toward recovery and improved quality of life."
                </p>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* Section 8: Educational Topics (replaced Support & Resources) */}
        <SectionWrapper>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-600 dark:text-red-400 text-center">
              Important Educational Topics About Schizophrenia
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl border shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">Prodrome & Early Warning Signs</h3>
                <p className="text-muted-foreground mb-3">
                  Many people pass through a prodromal phase before full illness onset. Early changes can include subtle social withdrawal,
                  sleep disturbance, declining work or school performance, odd beliefs or perceptual changes. Recognising these signs allows
                  for earlier assessment and intervention.
                </p>
                <ul className="list-inside list-disc text-sm text-muted-foreground space-y-1">
                  <li>Gradual decline in motivation or function</li>
                  <li>Unusual perceptual experiences or odd thinking</li>
                  <li>Changes in sleep, appetite, or routines</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl border shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">Differential Diagnosis</h3>
                <p className="text-muted-foreground mb-3">
                  Psychotic symptoms can arise from several conditions. Accurate diagnosis is essential to pick the right treatment.
                </p>
                <ul className="list-inside list-disc text-sm text-muted-foreground space-y-1">
                  <li>Bipolar disorder with psychotic features</li>
                  <li>Major depression with psychosis</li>
                  <li>Substance-induced psychosis (stimulants, cannabis, alcohol withdrawal)</li>
                  <li>Neurological or medical causes (e.g., infections, autoimmune, metabolic)</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl border shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">Common Comorbidities</h3>
                <p className="text-muted-foreground mb-3">
                  Schizophrenia often co-occurs with other conditions that affect outcomes; addressing them improves recovery.
                </p>
                <ul className="list-inside list-disc text-sm text-muted-foreground space-y-1">
                  <li>Substance use disorders</li>
                  <li>Depression and anxiety</li>
                  <li>Cardiometabolic disease (linked to some antipsychotics)</li>
                  <li>Cognitive impairment and poor physical health</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl border shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">Medication Safety & Monitoring</h3>
                <p className="text-muted-foreground mb-3">
                  Antipsychotics are central to treatment but require monitoring for side effects. Education helps patients and families
                  understand benefits and risks.
                </p>
                <ul className="list-inside list-disc text-sm text-muted-foreground space-y-1">
                  <li>Watch for extrapyramidal symptoms and tardive dyskinesia</li>
                  <li>Metabolic monitoring: weight, glucose, lipids, blood pressure</li>
                  <li>Discuss long-acting injectable options where adherence is a concern</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl border shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">Psychosocial & Functional Interventions</h3>
                <p className="text-muted-foreground mb-3">
                  Beyond symptom control, practical interventions restore function and quality of life.
                </p>
                <ul className="list-inside list-disc text-sm text-muted-foreground space-y-1">
                  <li>Cognitive remediation therapy to improve attention and memory</li>
                  <li>Supported education and vocational rehabilitation</li>
                  <li>Social skills training and family psychoeducation</li>
                  <li>Peer-led services and community integration programs</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl border shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">Relapse Prevention & Safety Planning</h3>
                <p className="text-muted-foreground mb-3">
                  Practical plans reduce risk of relapse and support early help-seeking.
                </p>
                <ul className="list-inside list-disc text-sm text-muted-foreground space-y-1">
                  <li>Identify personal early warning signs and triggers</li>
                  <li>Create a written crisis plan with contacts and preferred interventions</li>
                  <li>Strategies for medication adherence and dealing with side effects</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl border shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">Stigma, Rights & Cultural Considerations</h3>
                <p className="text-muted-foreground mb-3">
                  Stigma and misunderstanding limit access to care. Education should address cultural beliefs, legal rights, and capacity issues.
                </p>
                <ul className="list-inside list-disc text-sm text-muted-foreground space-y-1">
                  <li>Promote respectful language and anti-stigma education</li>
                  <li>Understand local cultural attitudes toward mental illness</li>
                  <li>Be aware of legal issues: consent, capacity, and guardianship where relevant</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl border shadow-sm md:col-span-2"
              >
                <h3 className="text-xl font-semibold mb-3">Looking Forward: Research & Practical Tips</h3>
                <p className="text-muted-foreground mb-3">
                  Emerging research aims for earlier detection and personalised care. Meanwhile, practical lifestyle changes support recovery:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-amber-50 rounded">
                    <strong className="block text-sm mb-1">Research</strong>
                    <p className="text-xs text-muted-foreground">Biomarkers, digital monitoring, and tailored treatments.</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <strong className="block text-sm mb-1">Lifestyle</strong>
                    <p className="text-xs text-muted-foreground">Regular sleep, balanced diet, exercise, and substance avoidance.</p>
                  </div>
                  <div className="p-3 bg-red-50 rounded">
                    <strong className="block text-sm mb-1">Practical Tip</strong>
                    <p className="text-xs text-muted-foreground">Keep a simple symptom log to share with clinicians; small data helps guide care.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* Section 9: Hope and Recovery Message */}
        <SectionWrapper className="bg-gradient-to-tr from-amber-50 to-green-50 dark:from-amber-950/20 dark:to-green-950/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 dark:text-green-400">
              Hope for the Future
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                While schizophrenia is a serious condition, many people experience significant improvement with proper treatment and support. Recovery looks different for everyone, but it often involves:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: "🎯", text: "Symptom Management" },
                  { icon: "🏠", text: "Stable Living" },
                  { icon: "💼", text: "Meaningful Work" },
                  { icon: "👨‍👩‍👧‍👦", text: "Healthy Relationships" },
                  { icon: "🎨", text: "Personal Growth" },
                  { icon: "🌟", text: "Quality of Life" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg border"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="text-sm font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="bg-gradient-to-r from-amber-500 to-green-500 p-8 rounded-2xl text-white mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-2xl font-bold mb-4">RECOVERY IS POSSIBLE</p>
                <p className="text-xl font-semibold">With Proper Treatment and Support</p>
                <p className="mt-6 text-amber-100">
                  Many people with schizophrenia lead fulfilling lives, maintain relationships, and achieve personal goals with the right combination of treatment, support, and self-care.
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