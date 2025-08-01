"use client";

import Link from 'next/link';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Globe } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ImpressumPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-white/20 dark:border-gray-800/20 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-cyan-600 dark:text-cyan-400">
            <Link href="/">KI-Kurs</Link>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link 
              href="/" 
              className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              Zurück zur Hauptseite
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Impressum
                </span>
              </h1>
            </div>

            {/* Content Card */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/20">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-8">
                  {/* Company Info */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      MATD Holding AG
                    </h2>
                    <div className="text-gray-700 dark:text-gray-300 space-y-2">
                      <p>Sonnmattstrasse 11</p>
                      <p>9532 Rickenbach TG</p>
                      <p>Schweiz</p>
                    </div>
                  </div>

                  {/* Registration Info */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Handelsregister-Nummer:</h3>
                        <p className="text-gray-700 dark:text-gray-300">CHE-218.349.642</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">UID:</h3>
                        <p className="text-gray-700 dark:text-gray-300">CHE-218.349.642</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-700 dark:text-gray-300">Eintrag im Handelsregister des Kantons Thurgau</p>
                    </div>
                  </div>

                  {/* Representative */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Vertreten durch:</h3>
                    <p className="text-gray-700 dark:text-gray-300">Marcel Kuhn, Verwaltungsratspräsident mit Einzelunterschrift</p>
                  </div>

                  {/* Contact Info */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Kontakt</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-cyan-500 dark:text-cyan-400" />
                        <span className="text-gray-700 dark:text-gray-300">+41 71 539 19 99</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-cyan-500 dark:text-cyan-400" />
                        <a 
                          href="mailto:info@matd.ch" 
                          className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                        >
                          info@matd.ch
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="h-5 w-5 text-cyan-500 dark:text-cyan-400" />
                        <a 
                          href="https://www.comeintoai.matd.ch" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                        >
                          www.comeintoai.matd.ch
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content Responsibility */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Verantwortlich für den Inhalt:</h3>
                    <p className="text-gray-700 dark:text-gray-300">Marcel Kuhn, MATD AG</p>
                  </div>

                  {/* Disclaimer */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Haftungsausschluss:</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Trotz sorgfältiger Prüfung übernehmen wir keine Haftung für die Inhalte externer Links. 
                      Für den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich.
                    </p>
                  </div>

                  {/* Copyright */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Urheberrecht:</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Die Inhalte und Werke auf dieser Website unterliegen dem schweizerischen Urheberrecht. 
                      Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, 
                      Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts 
                      bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}