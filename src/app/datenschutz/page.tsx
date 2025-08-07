"use client";

import Link from 'next/link';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function DatenschutzPage() {
  useEffect(() => {
    // Iubenda Script laden
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (w,d) {
        var loader = function () {
          var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; 
          s.src="https://cdn.iubenda.com/iubenda.js"; 
          tag.parentNode.insertBefore(s,tag);
        }; 
        if(w.addEventListener){
          w.addEventListener("load", loader, false);
        }else if(w.attachEvent){
          w.attachEvent("onload", loader);
        }else{
          w.onload = loader;
        }
      })(window, document);
    `;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

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
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Zurück zur Hauptseite</span>
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
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-full">
                  <Shield className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Datenschutzerklärung
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Der Schutz Ihrer persönlichen Daten ist uns wichtig. Hier erfahren Sie, 
                wie wir Ihre Daten verarbeiten und schützen.
              </p>
            </div>

            {/* Content Card */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/20">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-8">
                  {/* Introduction */}
                  <div className="text-center">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck 
                      der Verarbeitung von personenbezogenen Daten auf unserer Website. 
                      Die Datenschutzerklärung gilt für alle mit dieser Website verbundenen 
                      Datenverarbeitungsvorgänge.
                    </p>
                  </div>

                  {/* Iubenda Embed */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Vollständige Datenschutzerklärung
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        Klicken Sie auf den Link unten, um unsere vollständige Datenschutzerklärung zu lesen:
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <a 
                        href="https://www.iubenda.com/privacy-policy/17832966" 
                        className="iubenda-nostyle iubenda-noiframe iubenda-embed iubenda-noiframe inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                        title="Datenschutzerklärung"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Shield className="h-5 w-5 mr-2" />
                        Datenschutzerklärung öffnen
                      </a>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Kontakt für Datenschutzfragen
                    </h3>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Verantwortlicher für die Datenverarbeitung:
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300">
                            MATD Holding AG<br />
                            Sonnmattstrasse 11<br />
                            9532 Rickenbach TG<br />
                            Schweiz
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Kontakt:
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300">
                            E-Mail: info@matd.ch<br />
                            Telefon: +41 71 539 19 99
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Points */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Wichtige Punkte unserer Datenschutzerklärung
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Wir erheben nur die Daten, die für die Kursbuchung notwendig sind
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Sichere Zahlungsabwicklung über Stripe
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Keine Weitergabe an Dritte ohne Ihre Zustimmung
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Recht auf Auskunft, Berichtigung und Löschung
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Verschlüsselte Datenübertragung (HTTPS)
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Keine Cookies ohne Ihre Einwilligung
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Last Updated */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Letzte Aktualisierung: Januar 2025
                      </p>
                    </div>
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
