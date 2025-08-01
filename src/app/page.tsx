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
    <div className="gradient-bg min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-primary">KI-Kurs</div>
          <Button size="sm" className="hidden md:inline-flex">
            Jetzt anmelden
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-accent rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-primary rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <Badge variant="secondary" className="mb-6 text-sm">
              🔥 Begrenzte Teilnehmerzahl
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Einfach KI nutzen
              </span>
              <br />
              <span className="text-2xl md:text-4xl lg:text-5xl text-muted-foreground">
                Kreative Power mit ChatGPT, Bild & Video in nur 3 Abenden!
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Kreative Power mit Text, Bild, Ton & Video – ganz ohne Technikkenntnisse. 
              Lerne von KI-Experten in kleinen Gruppen.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Button size="lg" className="w-full md:w-auto text-lg px-8 py-4">
                Jetzt Platz sichern! <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="w-full md:w-auto text-lg px-8 py-4">
                Mehr erfahren
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                KI verändert unsere Arbeits- und Kreativwelt
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Während andere noch zögern, nutzt du bereits die mächtigsten KI-Tools 
                für deine kreativen Projekte. Von Texten über Bilder bis hin zu Videos – 
                alles in Minuten statt Tagen.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>90% Zeitersparnis bei kreativen Aufgaben</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <span>Professionelle Ergebnisse ohne Vorkenntnisse</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-primary" />
                  <span>Kleine Gruppen für optimales Lernen</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent>
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-4">Deine Lösung</h3>
                  <p className="text-muted-foreground">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Für wen ist dieser Kurs?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Egal ob Kreative, Unternehmer oder neugieriger Einsteiger – 
              hier findest du deinen Einstieg in die KI-Welt.
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
                icon: <Palette className="h-8 w-8" />,
                title: "Kreative & Content Creator",
                description: "Designer, Influencer, Marketer die ihre Kreativität mit KI verstärken wollen"
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Unternehmer:innen & Coaches",
                description: "Selbstständige die ihre Effizienz steigern und moderne Tools nutzen möchten"
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Neugierige Einsteiger",
                description: "Alle die KI verstehen und praktisch anwenden wollen – ohne Technik-Angst"
              }
            ].map((group, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="text-primary mb-4">{group.icon}</div>
                    <CardTitle className="text-xl">{group.title}</CardTitle>
                    <CardDescription className="text-base">
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
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dein 3-Abende Weg zur KI-Meisterschaft
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                subtitle: "Descript, Beautiful.ai",
                tools: [Video, Presentation],
                points: [
                  "Videos aus Text mit Descript",
                  "KI-Präsentationen mit Beautiful.ai", 
                  "Workflow automatisieren",
                  "Praxis: Dein Showcase-Projekt"
                ]
              }
            ].map((evening, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
                      <div className="text-center md:text-left">
                        <div className="text-6xl font-bold text-primary/20 mb-2">
                          {evening.number}
                        </div>
                        <Badge variant="outline" className="mb-4">
                          Abend {evening.number}
                        </Badge>
                      </div>
                      
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {evening.tools.map((Tool, i) => (
                            <div key={i} className="p-2 bg-primary/10 rounded-lg">
                              <Tool className="h-5 w-5 text-primary" />
                            </div>
                          ))}
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-2">{evening.title}</h3>
                        <p className="text-primary mb-4">{evening.subtitle}</p>
                        
                        <div className="grid md:grid-cols-2 gap-2">
                          {evening.points.map((point, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm">{point}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dein KI-Werkzeugkasten nach dem Kurs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                gradient: "from-blue-500/20 to-cyan-500/20"
              },
              {
                icon: <Palette className="h-8 w-8" />,
                title: "Canva & DALL·E", 
                description: "Bilder, Slides, Poster",
                gradient: "from-purple-500/20 to-pink-500/20"
              },
              {
                icon: <Mic className="h-8 w-8" />,
                title: "ElevenLabs",
                description: "Deine Stimme als KI",
                gradient: "from-green-500/20 to-emerald-500/20"
              },
              {
                icon: <Video className="h-8 w-8" />,
                title: "Descript",
                description: "Videos aus Texten erstellen",
                gradient: "from-red-500/20 to-orange-500/20"
              },
              {
                icon: <Presentation className="h-8 w-8" />,
                title: "Beautiful.ai",
                description: "Intelligente Präsentationen",
                gradient: "from-indigo-500/20 to-blue-500/20"
              }
            ].map((tool, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className={`h-full hover:scale-105 transition-transform duration-300 bg-gradient-to-br ${tool.gradient}`}>
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-4 flex justify-center">
                      {tool.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                    <p className="text-muted-foreground">{tool.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{benefit.emoji}</div>
                    <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Investiere in deine KI-Zukunft
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
            <Card className="relative overflow-hidden border-primary">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent p-2">
                <p className="text-center text-sm font-medium text-primary-foreground">
                  🔥 Limitierte Plätze verfügbar
                </p>
              </div>
              
              <CardContent className="p-8 pt-16">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold mb-2">
                    <span className="line-through text-2xl text-muted-foreground">169€</span>
                    <span className="text-primary ml-2">129€</span>
                  </div>
                  <p className="text-muted-foreground">Einmalig, alles inklusive</p>
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
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button size="lg" className="w-full text-lg py-6">
                  Jetzt Platz sichern!
                </Button>
                
                <div className="text-center mt-4">
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
                  answer: "Du lernst ChatGPT, DALL·E, Canva AI, ElevenLabs, Descript und Beautiful.ai. Das sind die wichtigsten Tools für Text, Bild, Audio und Video - alles was du für kreative Projekte brauchst."
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
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Starte deine KI-Reise – jetzt anmelden!
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Werde Teil einer Community von KI-Enthusiasten und lerne die Tools, 
              die deine Kreativität auf das nächste Level bringen.
            </p>
            
            <div className="space-y-6">
              <Button size="lg" className="text-xl px-12 py-6">
                Jetzt Platz sichern! <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Nur 15 Plätze verfügbar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>30 Tage Geld-zurück-Garantie</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Sofortiger Zugang zur Community</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-xl font-bold text-primary mb-4">KI-Kurs</div>
              <p className="text-muted-foreground">
                Dein Einstieg in die KI-Welt – praktisch, verständlich, erfolgreich.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Kontakt</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>E-Mail: info@ki-kurs.de</p>
                <p>Telefon: +49 123 456 789</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Rechtliches</h3>
              <div className="space-y-2 text-muted-foreground">
                <a href="#" className="block hover:text-primary">Impressum</a>
                <a href="#" className="block hover:text-primary">Datenschutz</a>
                <a href="#" className="block hover:text-primary">AGB</a>
              </div>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 KI-Kurs. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
