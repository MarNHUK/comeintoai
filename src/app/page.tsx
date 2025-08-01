"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Palette, 
  Mic, 
  Video, 
  Presentation, 
  Clock, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  MessageCircle
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function KIKursLandingPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-white/20 dark:border-gray-800/20 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-cyan-600 dark:text-cyan-400">KI-Kurs</div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button size="sm" className="hidden md:inline-flex bg-cyan-500 hover:bg-cyan-600 text-white">
              Jetzt anmelden
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex items-center justify-center relative overflow-hidden pt-16 transition-colors duration-300">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-cyan-400 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <Badge className="mb-6 text-sm bg-orange-100 text-orange-700 border border-orange-200 hover:bg-orange-200">
              🔥 Begrenzte Teilnehmerzahl
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Einfach KI nutzen
              </span>
              <br />
              <span className="text-2xl md:text-4xl lg:text-5xl text-gray-700 dark:text-gray-300">
                Kreative Power mit ChatGPT, Bild & Video in nur 3 Abenden!
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Kreative Power mit Text, Bild, Ton & Video – ganz ohne Technikkenntnisse. 
              Lerne von KI-Experten in kleinen Gruppen.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Button size="lg" className="w-full md:w-auto text-lg px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white">
                Jetzt Platz sichern! <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" className="w-full md:w-auto text-lg px-8 py-4 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                Mehr erfahren
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                KI verändert unsere Arbeits- und Kreativwelt
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Während andere noch zögern, nutzt du bereits die mächtigsten KI-Tools 
                für deine kreativen Projekte. Von Texten über Bilder bis hin zu Videos – 
                alles in Minuten statt Tagen.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-cyan-500" />
                  <span className="text-gray-700 dark:text-gray-300">90% Zeitersparnis bei kreativen Aufgaben</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-cyan-500" />
                  <span className="text-gray-700 dark:text-gray-300">Professionelle Ergebnisse ohne Vorkenntnisse</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-cyan-500" />
                  <span className="text-gray-700 dark:text-gray-300">Kleine Gruppen für optimales Lernen</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative">
              <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/20 hover:bg-white/90 dark:hover:bg-gray-800/90 hover:shadow-xl transition-all duration-300">
                <CardContent>
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Deine Lösung</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Mit den richtigen Tools erstellst du in Minuten, 
                    wofür du früher Tage brauchtest. Lerne die Geheimnisse 
                    professioneller KI-Nutzung von Experten.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Target Groups Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Wo stehst du gerade mit KI?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Dieser Kurs richtet sich an Anfänger mit KI oder solche, die etwas mehr Perspektiven wünschen. Die Abende schaffen einen guten Überblick.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "🌱",
                title: "Komplette KI-Neulinge",
                description: "Du hast noch nie mit KI gearbeitet und weißt nicht, wo du anfangen sollst? Perfekt! Wir starten bei null und erklären alles Schritt für Schritt - ohne Fachchinesisch."
              },
              {
                icon: "🔍",
                title: "Schon mal ausprobiert",
                description: "Du hast ChatGPT schon mal getestet, aber weißt nicht, wie du richtig gute Ergebnisse bekommst? Hier lernst du die Geheimnisse effektiver Prompts und professioneller Nutzung."
              },
              {
                icon: "🚀",
                title: "Wissen systematisch aufbauen",
                description: "Du kennst die Grundlagen, willst aber endlich strukturiert lernen, wie KI dein Leben und deine Arbeit wirklich verbessern kann? Dann bist du hier richtig!"
              }
            ].map((group, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/20 hover:bg-white/90 dark:hover:bg-gray-800/90 hover:shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300">
                  <CardHeader>
                    <div className="text-4xl mb-4">{group.icon}</div>
                    <CardTitle className="font-bold text-xl text-gray-900 dark:text-white">{group.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                      {group.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Course Timeline Section */}
      <section className="py-20 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Dein 3-Abende Weg zur KI-Meisterschaft
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Jeder Abend baut aufeinander auf und bringt dich näher zur 
              selbstständigen KI-Nutzung.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                number: "01",
                title: "Verstehen & Prompten",
                subtitle: "ChatGPT Grundlagen",
                tools: [Brain, MessageCircle],
                points: [
                  "KI verstehen: Wie denkt ChatGPT?",
                  "Perfekte Prompts schreiben",
                  "Texte, Ideen & Zusammenfassungen erstellen",
                  "Praxis: Dein erstes KI-Projekt"
                ]
              },
              {
                number: "02", 
                title: "Kreativ mit Bild & Ton",
                subtitle: "Canva, DALL·E, ElevenLabs",
                tools: [Palette, Mic],
                points: [
                  "Bilder mit DALL·E & Midjourney erstellen",
                  "Canva mit KI-Power nutzen",
                  "Deine Stimme mit ElevenLabs klonen",
                  "Praxis: Komplettes Branding erstellen"
                ]
              },
              {
                number: "03",
                title: "Dein erstes KI-Projekt", 
                subtitle: "HeyGen, Beautiful.ai",
                tools: [Video, Presentation],
                points: [
                  "Videos aus Text mit HeyGen",
                  "KI-Präsentationen mit Beautiful.ai", 
                  "Workflow automatisieren",
                  "Praxis: Dein Showcase-Projekt"
                ]
              }
            ].map((evening, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative">
                {/* Timeline line */}
                {index < 2 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 z-10"></div>
                )}
                
                <Card className="overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/20 hover:bg-white/90 dark:hover:bg-gray-800/90 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
                      <div className="text-center md:text-left">
                        <div className="text-6xl font-bold text-cyan-200 dark:text-cyan-300 mb-2">
                          {evening.number}
                        </div>
                        <Badge className="mb-4 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                          Abend {evening.number}
                        </Badge>
                      </div>
                      
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {evening.tools.map((Tool, i) => (
                            <div key={i} className="p-2 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg">
                              <Tool className="h-5 w-5 text-cyan-500 dark:text-cyan-400" />
                            </div>
                          ))}
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{evening.title}</h3>
                        <p className="text-cyan-500 dark:text-cyan-400 mb-4">{evening.subtitle}</p>
                        
                        <div className="grid md:grid-cols-2 gap-2">
                          {evening.points.map((point, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-cyan-500 dark:text-cyan-400 flex-shrink-0" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tool Showcase Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Dein KI-Werkzeugkasten nach dem Kurs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Diese Tools beherrschst du nach den 3 Abenden und kannst 
              sofort produktiv damit arbeiten.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                title: "ChatGPT",
                description: "Texte, Ideen, Zusammenfassungen",
                bgColor: "bg-blue-50/80"
              },
              {
                icon: <Palette className="h-8 w-8" />,
                title: "Canva & DALL·E", 
                description: "Bilder, Slides, Poster",
                bgColor: "bg-purple-50/80"
              },
              {
                icon: <Mic className="h-8 w-8" />,
                title: "ElevenLabs",
                description: "Deine Stimme als KI",
                bgColor: "bg-green-50/80"
              },
              {
                icon: <Video className="h-8 w-8" />,
                title: "HeyGen",
                description: "KI-Videos mit Avataren erstellen",
                bgColor: "bg-orange-50/80"
              },
              {
                icon: <Presentation className="h-8 w-8" />,
                title: "Beautiful.ai",
                description: "Intelligente Präsentationen",
                bgColor: "bg-indigo-50/80"
              }
            ].map((tool, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className={`h-full hover:scale-105 transition-transform duration-300 ${tool.bgColor} dark:bg-gray-800/60 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl`}>
                  <CardContent className="p-6 text-center">
                    <div className="text-cyan-500 dark:text-cyan-400 mb-4 flex justify-center">
                      {tool.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{tool.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Warum sich der Kurs lohnt
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Zeitersparnis & kreative Freiheit",
                description: "Schaffe in Stunden, wofür du früher Tage brauchtest",
                emoji: "⚡"
              },
              {
                title: "Lernen durch direktes Ausprobieren",
                description: "Keine graue Theorie - du arbeitest von Minute 1 an praktisch",
                emoji: "🎯"
              },
              {
                title: "Scheu vor KI verlieren",
                description: "Verstehe KI und nutze sie selbstbewusst für deine Ziele",
                emoji: "💪"
              },
              {
                title: "Teil einer motivierten Community",
                description: "Tausche dich mit Gleichgesinnten aus und wachse gemeinsam",
                emoji: "🤝"
              }
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/20 hover:bg-white/90 dark:hover:bg-gray-800/90 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{benefit.emoji}</div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Das sagen unsere Teilnehmer
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Sarah M.",
                role: "Content Creatorin",
                text: "Unglaublich! Ich erstelle jetzt in 30 Minuten Content, für den ich früher einen ganzen Tag brauchte. Die KI-Tools haben mein Business revolutioniert!",
                rating: 5
              },
              {
                name: "Michael K.",
                role: "Unternehmer",
                text: "Endlich KI verstanden! Die praktischen Übungen waren perfekt. Jetzt nutze ich KI täglich für Präsentationen und Marketing-Texte.",
                rating: 5
              },
              {
                name: "Lisa T.",
                role: "Coach",
                text: "Als totaler KI-Neuling war ich skeptisch. Aber die Trainer haben es so einfach erklärt - jetzt bin ich KI-begeistert!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/20 hover:bg-white/90 dark:hover:bg-gray-800/90 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Investiere in deine KI-Zukunft
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Alles inklusive für deinen erfolgreichen KI-Einstieg
            </p>
          </motion.div>

          <motion.div 
            className="max-w-lg mx-auto"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-cyan-200 dark:border-cyan-800">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 p-2">
                <p className="text-center text-sm font-medium text-white">
                  🔥 Limitierte Plätze verfügbar
                </p>
              </div>
              
              <CardContent className="p-8 pt-16">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold mb-2">
                    <span className="line-through text-2xl text-gray-500 dark:text-gray-400">169€</span>
                    <span className="text-cyan-600 dark:text-cyan-400 ml-2">129€</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Einmalig, alles inklusive</p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "3 Live-Sessions à 1,5-2 Stunden",
                    "Alle Aufzeichnungen lebenslang",
                    "Umfassendes PDF-Workbook", 
                    "Private Austauschgruppe",
                    "Direkter Support der Trainer",
                    "Bonus: KI-Tool Cheatsheet"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-500 dark:text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button size="lg" className="w-full text-lg py-6 bg-cyan-500 hover:bg-cyan-600 text-white">
                  Jetzt Platz sichern!
                </Button>
                
                <div className="text-center mt-4">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <Shield className="h-4 w-4" />
                    <span>30 Tage Geld-zurück-Garantie</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Häufig gestellte Fragen
            </h2>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Brauche ich Vorkenntnisse in KI oder Technik?",
                  answer: "Nein, absolut nicht! Der Kurs ist speziell für Einsteiger konzipiert. Du brauchst nur einen Computer und Internetverbindung. Wir starten bei null und erklären alles Schritt für Schritt."
                },
                {
                  question: "Was passiert, wenn ich einen Abend verpasse?",
                  answer: "Kein Problem! Alle Sessions werden aufgezeichnet und du bekommst lebenslangen Zugang. Du kannst also jederzeit nachholen oder Inhalte wiederholen."
                },
                {
                  question: "Welche KI-Tools lerne ich konkret?",
                  answer: "Du lernst ChatGPT, DALL·E, Canva AI, ElevenLabs, HeyGen und Beautiful.ai. Das sind die wichtigsten Tools für Text, Bild, Audio und Video - alles was du für kreative Projekte brauchst."
                },
                {
                  question: "Wie viel Zeit muss ich zusätzlich investieren?",
                  answer: "Die Live-Sessions dauern 1,5-2 Stunden. Dazu empfehlen wir 30-60 Minuten pro Woche zum Üben. Aber du bestimmst das Tempo - alle Materialien bleiben dir erhalten."
                },
                {
                  question: "Gibt es eine Geld-zurück-Garantie?",
                  answer: "Ja! Du hast 30 Tage Geld-zurück-Garantie. Wenn der Kurs nicht deinen Erwartungen entspricht, bekommst du ohne Wenn und Aber dein Geld zurück."
                },
                {
                  question: "Kann ich die Tools auch nach dem Kurs weiter nutzen?",
                  answer: "Absolut! Die meisten Tools haben kostenlose Versionen, die für den Einstieg völlig ausreichen. Wir zeigen dir auch, wann sich Premium-Versionen lohnen."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-50/60 to-blue-50/60 dark:from-gray-800/60 dark:to-gray-900/60 backdrop-blur-sm transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Starte deine KI-Reise – jetzt anmelden!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Werde Teil einer Community von KI-Enthusiasten und lerne die Tools, 
              die deine Kreativität auf das nächste Level bringen.
            </p>
            
            <div className="space-y-6">
              <Button size="lg" className="text-xl px-12 py-6 bg-cyan-500 hover:bg-cyan-600 text-white">
                Jetzt Platz sichern! <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500 dark:text-cyan-400" />
                  <span>Limitierte Anzahl Plätze</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500 dark:text-cyan-400" />
                  <span>30 Tage Geld-zurück-Garantie</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-cyan-500 dark:text-cyan-400" />
                  <span>Sofortiger Zugang zur Community</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">KI-Kurs</div>
              <p className="text-gray-600 dark:text-gray-300">
                Dein Einstieg in die KI-Welt – praktisch, verständlich, erfolgreich.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Kontakt</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>E-Mail: info@matd.ch</p>
                <p>Telefon: +41 71 539 19 99</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Rechtliches</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <a href="/impressum" className="block hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Impressum</a>
                <a href="#" className="block hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Datenschutz</a>
                <a href="#" className="block hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">AGB</a>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-200 dark:bg-gray-700" />
          
          <div className="text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2025 MATD-KI-KURS. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
