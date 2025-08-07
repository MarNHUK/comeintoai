"use client";

import Link from 'next/link';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie, ArrowLeft, Settings, ChevronDown, ChevronUp, Lock } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useEffect, useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  enabled: boolean;
  color: string;
  examples: string[];
}

export default function CookieEinstellungenPage() {
  const [cookieSettings, setCookieSettings] = useState<CookieCategory[]>([
    {
      id: "required",
      name: "Erforderlich",
      description: "Diese Cookies sind für das Funktionieren der Website erforderlich und können nicht deaktiviert werden. Sie enthalten keine persönlichen Daten.",
      required: true,
      enabled: true,
      color: "bg-green-500",
      examples: ["Session-Cookies", "Sicherheits-Cookies", "CSRF-Token"]
    },
    {
      id: "functional",
      name: "Nutzererfahrung",
      description: "Diese Cookies ermöglichen erweiterte Funktionalitäten und Personalisierung der Website.",
      required: false,
      enabled: true,
      color: "bg-blue-500",
      examples: ["Spracheinstellungen", "Theme-Präferenzen", "Formular-Daten"]
    },
    {
      id: "analytics",
      name: "Erfolgsmessung",
      description: "Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem Informationen anonym gesammelt werden.",
      required: false,
      enabled: true,
      color: "bg-orange-500",
      examples: ["Google Analytics", "Besucherstatistiken", "Seitenaufrufe"]
    },
    {
      id: "marketing",
      name: "Marketing",
      description: "Diese Cookies werden verwendet, um Besuchern relevante Anzeigen und Marketingkampagnen bereitzustellen.",
      required: false,
      enabled: true,
      color: "bg-purple-500",
      examples: ["Remarketing", "Social Media", "Werbe-Cookies"]
    }
  ]);

  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [showIubendaScript, setShowIubendaScript] = useState(false);

  useEffect(() => {
    // Iubenda Script laden wenn nötig
    if (showIubendaScript) {
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
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, [showIubendaScript]);

  const toggleCategory = (categoryId: string) => {
    setCookieSettings(prev => 
      prev.map(category => 
        category.id === categoryId && !category.required
          ? { ...category, enabled: !category.enabled }
          : category
      )
    );
  };

  const toggleExpanded = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const acceptAll = () => {
    setCookieSettings(prev => 
      prev.map(category => ({ ...category, enabled: true }))
    );
  };

  const rejectAll = () => {
    setCookieSettings(prev => 
      prev.map(category => ({ 
        ...category, 
        enabled: category.required 
      }))
    );
  };

  const saveSettings = () => {
    // Hier würde normalerweise die Speicherung der Einstellungen erfolgen
    console.log('Cookie-Einstellungen gespeichert:', cookieSettings);
    
    // In localStorage speichern
    localStorage.setItem('cookieSettings', JSON.stringify(cookieSettings));
    
    // Erfolgsmeldung anzeigen
    alert('Ihre Cookie-Einstellungen wurden erfolgreich gespeichert!');
  };

  const ToggleSwitch = ({ enabled, onChange, disabled = false }: { 
    enabled: boolean; 
    onChange: () => void; 
    disabled?: boolean;
  }) => (
    <button
      onClick={onChange}
      disabled={disabled}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
        enabled 
          ? 'bg-cyan-500' 
          : 'bg-gray-200 dark:bg-gray-700'
      } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

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
                  <Cookie className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Ihre Datenschutzeinstellungen
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Auf dieser Kontrollfläche können Sie bestimmte Einstellungen zu der Verarbeitung 
                Ihrer personenbezogener Daten festlegen. Sie können Ihre Auswahl jederzeit ändern.
              </p>
            </div>

            {/* Content Card */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/20">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-8">
                  {/* Quick Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={rejectAll}
                      className="flex items-center justify-center px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <span className="text-xl mr-2">✕</span>
                      Alle ablehnen
                    </button>
                    <button
                      onClick={acceptAll}
                      className="flex items-center justify-center px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <span className="text-xl mr-2">✓</span>
                      Allen zustimmen
                    </button>
                  </div>

                  {/* Cookie Categories */}
                  <div className="border-t border-gray-200 pt-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Ihre Einstellungen für Einwilligungen für Tracking Technologien
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Durch die Auswahlmöglichkeiten innerhalb dieses Abschnitts können Sie ihre 
                      Einstellungen für Einwilligungen anpassen.
                    </p>
                    
                    <div className="space-y-4">
                      {cookieSettings.map((category) => (
                        <div key={category.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 ${category.color} rounded-full`}></div>
                              <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                  {category.name}
                                  {category.required && (
                                    <span className="ml-2 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                                      Erforderlich
                                    </span>
                                  )}
                                </h3>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <button
                                onClick={() => toggleExpanded(category.id)}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                              >
                                {expandedCategories.includes(category.id) ? (
                                  <ChevronUp className="h-4 w-4" />
                                ) : (
                                  <ChevronDown className="h-4 w-4" />
                                )}
                              </button>
                              <ToggleSwitch
                                enabled={category.enabled}
                                onChange={() => toggleCategory(category.id)}
                                disabled={category.required}
                              />
                            </div>
                          </div>
                          
                          {expandedCategories.includes(category.id) && (
                            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                                {category.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {category.examples.map((example, index) => (
                                  <span
                                    key={index}
                                    className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                                  >
                                    {example}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="border-t border-gray-200 pt-6">
                    <button
                      onClick={saveSettings}
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      Speichern und weitersurfen
                    </button>
                  </div>

                  {/* Iubenda Link */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between">
                      <a
                        href="https://www.iubenda.com/privacy-policy/17832966/cookie-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      >
                        Die vollständigen Cookie-Richtlinien anzeigen
                      </a>
                      <Lock className="h-4 w-4 text-green-500" />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Fragen zu Cookies?
                    </h3>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Bei Fragen zu unseren Cookie-Einstellungen können Sie sich gerne an uns wenden:
                      </p>
                      <div className="space-y-2 text-gray-700 dark:text-gray-300">
                        <p><strong>E-Mail:</strong> info@matd.ch</p>
                        <p><strong>Telefon:</strong> +41 71 539 19 99</p>
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
