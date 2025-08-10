"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  X, 
  CreditCard, 
  CheckCircle, 
  Clock, 
  Mail, 
  Users, 
  Calendar,
  ArrowRight,
  Shield,
  Sparkles
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const isValidEmail = (value: string) =>
    /^(?:[a-zA-Z0-9_'^&\-]+(?:\.[a-zA-Z0-9_'^&\-]+)*|"(?:[^"\\]|\\.)+")@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z-]*[a-zA-Z]:.+)\])$/.test(
      value.trim()
    );
  const isFormValid =
    firstName.trim().length > 1 &&
    lastName.trim().length > 1 &&
    isValidEmail(email);

  const handlePayment = () => {
    if (!isFormValid) return;
    setIsLoading(true);

    const baseLink = 'https://buy.stripe.com/4gMcN63IG2kl8EG0Ty5Vu00';
    const url = new URL(baseLink);
    // E-Mail vorbefüllen und weitere Daten als Metadaten übergeben
    url.searchParams.set('prefilled_email', email.trim());
    url.searchParams.set('client_reference_id', `${firstName.trim()} ${lastName.trim()}`);
    url.searchParams.set('prefilled_metadata[first_name]', firstName.trim());
    url.searchParams.set('prefilled_metadata[last_name]', lastName.trim());

    // Webhook non-blocking auslösen
    try {
      const webhookUrl = 'https://nhuk.app.n8n.cloud/webhook/c33ea74d-5e00-4250-9468-d292436c7ca5';
      const payload = {
        event: 'booking_payment_click',
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        stripePaymentLink: url.toString(),
        pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
        timestamp: new Date().toISOString(),
      };
      // nicht warten; Fehler ignorieren, Zahlung nicht blockieren
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    } catch {
      // noop
    }

    window.open(url.toString(), '_blank');

    // Nach kurzer Verzögerung zum Erfolgs-Schritt
    setTimeout(() => {
      setIsLoading(false);
      setStep('success');
    }, 2000);
  };

  const resetModal = () => {
    setStep('info');
    setIsLoading(false);
    onClose();
  };

  const fadeIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.3 }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div
          {...fadeIn}
          className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          <Card className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-2xl border border-white/20 dark:border-gray-700/20">
            {/* Close Button */}
            <button
              onClick={resetModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>

            <CardContent className="p-8">
              {/* Step 1: Information */}
              {step === 'info' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {/* Header */}
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-full">
                        <Sparkles className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        KI-Power Workshop
                      </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Sichern Sie sich Ihren Platz für den 3-Abende KI-Workshop
                    </p>
                  </div>

                                     {/* Course Details */}
                   <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-4">
                       <div className="flex items-center space-x-3">
                         <Calendar className="h-5 w-5 text-cyan-500" />
                         <div>
                           <h3 className="font-semibold text-gray-900 dark:text-white">Nächste Durchführung</h3>
                           <p className="text-sm text-gray-600 dark:text-gray-400">26.-28. August 2025</p>
                         </div>
                       </div>
                       <div className="flex items-center space-x-3">
                         <Clock className="h-5 w-5 text-cyan-500" />
                         <div>
                           <h3 className="font-semibold text-gray-900 dark:text-white">Jeweils ab 19 Uhr</h3>
                           <p className="text-sm text-gray-600 dark:text-gray-400">1,5-2 Stunden pro Abend</p>
                         </div>
                       </div>
                       <div className="flex items-center space-x-3">
                         <Users className="h-5 w-5 text-cyan-500" />
                         <div>
                           <h3 className="font-semibold text-gray-900 dark:text-white">Online via Zoom</h3>
                           <p className="text-sm text-gray-600 dark:text-gray-400">Kleine Gruppen, persönliche Betreuung</p>
                         </div>
                       </div>
                     </div>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg p-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                            <span className="line-through text-lg text-gray-500">199€</span>
                            <span className="ml-2">149€</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Einmalig, alles inklusive</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Shield className="h-4 w-4 text-green-500" />
                        <span>Sichere Zahlung über Stripe</span>
                      </div>
                    </div>
                  </div>

                                     {/* Termine */}
                   <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                     <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Termine im Detail:</h3>
                     <div className="space-y-2 text-sm">
                       <div className="flex items-center justify-between">
                         <span className="text-blue-800 dark:text-blue-200">Dienstag, 26. August 2025</span>
                         <span className="font-medium text-blue-900 dark:text-blue-100">ab 19 Uhr</span>
                       </div>
                       <div className="flex items-center justify-between">
                         <span className="text-blue-800 dark:text-blue-200">Mittwoch, 27. August 2025</span>
                         <span className="font-medium text-blue-900 dark:text-blue-100">ab 19 Uhr</span>
                       </div>
                       <div className="flex items-center justify-between">
                         <span className="text-blue-800 dark:text-blue-200">Donnerstag, 28. August 2025</span>
                         <span className="font-medium text-blue-900 dark:text-blue-100">ab 19 Uhr</span>
                       </div>
                     </div>
                     <div className="mt-3 pt-3 border-t border-blue-200 dark:border-blue-700">
                       <p className="text-xs text-blue-700 dark:text-blue-300">
                         📍 Online via Zoom • Zugangsdaten erhalten Sie nach der Buchung
                       </p>
                     </div>
                   </div>

                   {/* What's Included */}
                   <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                     <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Ihr Workshop-Paket enthält:</h3>
                     <div className="grid md:grid-cols-2 gap-2 text-sm">
                       <div className="flex items-center space-x-2">
                         <CheckCircle className="h-4 w-4 text-green-500" />
                         <span>3 Live-Sessions mit KI-Experten</span>
                       </div>
                       <div className="flex items-center space-x-2">
                         <CheckCircle className="h-4 w-4 text-green-500" />
                         <span>Alle Aufzeichnungen lebenslang</span>
                       </div>
                       <div className="flex items-center space-x-2">
                         <CheckCircle className="h-4 w-4 text-green-500" />
                         <span>Umfassendes PDF-Workbook</span>
                       </div>
                       <div className="flex items-center space-x-2">
                         <CheckCircle className="h-4 w-4 text-green-500" />
                         <span>Private Austauschgruppe</span>
                       </div>
                       <div className="flex items-center space-x-2">
                         <CheckCircle className="h-4 w-4 text-green-500" />
                         <span>Direkter Support der Trainer</span>
                       </div>
                       <div className="flex items-center space-x-2">
                         <CheckCircle className="h-4 w-4 text-green-500" />
                         <span>KI-Tool Cheatsheet (Bonus)</span>
                       </div>
                     </div>
                   </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => setStep('payment')}
                      size="lg"
                      className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-4"
                    >
                      <CreditCard className="h-5 w-5 mr-2" />
                      Jetzt buchen & bezahlen
                    </Button>
                    <Button
                      onClick={resetModal}
                      variant="outline"
                      size="lg"
                      className="flex-1"
                    >
                      Später entscheiden
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Payment */}
              {step === 'payment' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-full">
                        <CreditCard className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Sichere Zahlung
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      Sie werden zu Stripe weitergeleitet, um Ihre Zahlung sicher abzuwickeln.
                    </p>
                  </div>

                  {/* Buyer details */}
                  <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white/60 dark:bg-gray-800/60">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Ihre Angaben</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Vorname</label>
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Max"
                          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Nachname</label>
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Mustermann"
                          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">E-Mail</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="max@example.com"
                          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        {!isValidEmail(email) && email.length > 0 && (
                          <p className="mt-1 text-xs text-red-600">Bitte geben Sie eine gültige E-Mail-Adresse ein.</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                          Was passiert nach der Zahlung?
                        </h3>
                        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                          <li>• Sie erhalten sofort eine Buchungsbestätigung per E-Mail</li>
                          <li>• Zugangsdaten für die Live-Sessions werden Ihnen zugesendet</li>
                          <li>• Alle Workshop-Materialien stehen Ihnen zur Verfügung</li>
                          <li>• Sie werden zur privaten Community hinzugefügt</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={handlePayment}
                      size="lg"
                      disabled={isLoading || !isFormValid}
                      className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-4"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Weiterleitung...
                        </>
                      ) : (
                        <>
                          <CreditCard className="h-5 w-5 mr-2" />
                          Zur sicheren Zahlung
                        </>
                      )}
                    </Button>
                    <Button
                      onClick={() => setStep('info')}
                      variant="outline"
                      size="lg"
                      className="flex-1"
                    >
                      Zurück
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Success */}
              {step === 'success' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                        <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Zahlung erfolgreich!
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      Vielen Dank für Ihre Buchung. Sie sind jetzt offiziell Teilnehmer des KI-Power Workshops!
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                          Nächste Schritte:
                        </h3>
                        <ol className="text-sm text-green-800 dark:text-green-200 space-y-2">
                          <li className="flex items-start space-x-2">
                            <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                            <span>Buchungsbestätigung erhalten Sie sofort per E-Mail</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                            <span>Zugangsdaten für die Live-Sessions folgen in den nächsten Stunden</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                            <span>Workshop-Materialien stehen Ihnen sofort zur Verfügung</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">4</span>
                            <span>Sie werden zur privaten Community hinzugefügt</span>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Fragen?</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Unser Team steht Ihnen gerne zur Verfügung:
                    </p>
                    <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <p><strong>E-Mail:</strong> info@matd.ch</p>
                      <p><strong>Telefon:</strong> +41 71 539 19 99</p>
                    </div>
                  </div>

                  <Button
                    onClick={resetModal}
                    size="lg"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-4"
                  >
                    <ArrowRight className="h-5 w-5 mr-2" />
                    Zurück zur Hauptseite
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
