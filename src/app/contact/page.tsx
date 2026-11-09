"use client";

import { useState } from "react";

export default function ContactPage() {
  const [clientType, setClientType] = useState<"particulier" | "professionnel">("particulier");
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    serviceType: "tapisserie-ameublement",
    location: "Lomé",
    projectDesc: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp message
    const message = `*Nouvelle Demande de Devis - C.I.TA.M DÉCOR*
- Type: ${clientType === "particulier" ? "Particulier" : "Professionnel"}
- Nom: ${formData.fullname}
- Tél: ${formData.phone}
- Email: ${formData.email || "Non renseigné"}
- Prestation: ${formData.serviceType}
- Lieu: ${formData.location}
- Description: ${formData.projectDesc}`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/22870377743?text=${encoded}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative w-full py-12 sm:py-20 bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-secondary" />
              <span className="font-label-md text-xs uppercase text-secondary tracking-widest font-semibold">
                Atelier &amp; Devis Gratuit
              </span>
            </div>
            <h1 className="font-display-lg text-3xl sm:text-5xl text-primary tracking-tight mb-4 font-normal">
              Contact &amp; Demande de Devis
            </h1>
            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Discutons de votre projet de réfection, draperie ou sellerie. Notre atelier d&apos;Agbalépédo vous accueille ou se déplace directement à votre domicile à Lomé.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Form + Sidebar */}
      <section className="w-full py-16 sm:py-24 bg-surface">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-10 rounded-xl border border-outline-variant/30 shadow-md">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary-fixed text-primary flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[36px]">check_circle</span>
                  </div>
                  <h3 className="font-headline-sm text-2xl text-primary font-semibold mb-3">
                    Votre demande a été préparée !
                  </h3>
                  <p className="font-body-md text-sm text-on-surface-variant max-w-md mb-6 leading-relaxed">
                    Votre récapitulatif a été transmis via WhatsApp. Nos maîtres tapissiers vous contacteront dans les plus brefs délais.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-secondary text-on-secondary rounded-lg font-label-md text-xs uppercase tracking-wider hover:bg-primary transition-colors font-semibold"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  {/* Client Type */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-sm text-xs uppercase tracking-wider text-primary font-semibold">
                      Vous êtes :
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label
                        className={`flex items-center gap-3 p-3.5 rounded cursor-pointer transition-all border ${
                          clientType === "particulier"
                            ? "bg-surface-container border-secondary"
                            : "bg-surface-container-low border-transparent hover:bg-surface-container"
                        }`}
                      >
                        <input
                          type="radio"
                          name="client_type"
                          value="particulier"
                          checked={clientType === "particulier"}
                          onChange={() => setClientType("particulier")}
                          className="w-4 h-4 text-secondary accent-secondary"
                        />
                        <div className="flex flex-col">
                          <span className="font-label-md text-sm text-primary font-semibold">
                            Particulier
                          </span>
                          <span className="font-body-sm text-xs text-on-surface-variant">
                            Résidence, salon, draperies privées
                          </span>
                        </div>
                      </label>

                      <label
                        className={`flex items-center gap-3 p-3.5 rounded cursor-pointer transition-all border ${
                          clientType === "professionnel"
                            ? "bg-surface-container border-secondary"
                            : "bg-surface-container-low border-transparent hover:bg-surface-container"
                        }`}
                      >
                        <input
                          type="radio"
                          name="client_type"
                          value="professionnel"
                          checked={clientType === "professionnel"}
                          onChange={() => setClientType("professionnel")}
                          className="w-4 h-4 text-secondary accent-secondary"
                        />
                        <div className="flex flex-col">
                          <span className="font-label-md text-sm text-primary font-semibold">
                            Professionnel
                          </span>
                          <span className="font-body-sm text-xs text-on-surface-variant">
                            Hôtel, architecte, ambassade, cabinet
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="font-label-sm text-xs uppercase tracking-wider text-primary font-semibold"
                        htmlFor="fullname"
                      >
                        Nom complet <span className="text-secondary">*</span>
                      </label>
                      <input
                        id="fullname"
                        required
                        type="text"
                        placeholder="ex: M. Koffi Mensah"
                        value={formData.fullname}
                        onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                        className="w-full bg-surface-container-low text-primary font-body-md text-sm px-4 py-3 rounded outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/40 transition-all border border-outline-variant/30"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        className="font-label-sm text-xs uppercase tracking-wider text-primary font-semibold"
                        htmlFor="phone"
                      >
                        Numéro de téléphone (WhatsApp) <span className="text-secondary">*</span>
                      </label>
                      <input
                        id="phone"
                        required
                        type="tel"
                        placeholder="ex: +228 90 00 00 00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-surface-container-low text-primary font-body-md text-sm px-4 py-3 rounded outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/40 transition-all border border-outline-variant/30"
                      />
                    </div>
                  </div>

                  {/* Email & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="font-label-sm text-xs uppercase tracking-wider text-primary font-semibold"
                        htmlFor="email"
                      >
                        Adresse e-mail (optionnel)
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="ex: contact@exemple.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-surface-container-low text-primary font-body-md text-sm px-4 py-3 rounded outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/40 transition-all border border-outline-variant/30"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        className="font-label-sm text-xs uppercase tracking-wider text-primary font-semibold"
                        htmlFor="location"
                      >
                        Quartier / Ville <span className="text-secondary">*</span>
                      </label>
                      <input
                        id="location"
                        required
                        type="text"
                        placeholder="ex: Lomé 2, Agbalépédo, Baguida..."
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-surface-container-low text-primary font-body-md text-sm px-4 py-3 rounded outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/40 transition-all border border-outline-variant/30"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-sm text-xs uppercase tracking-wider text-primary font-semibold"
                      htmlFor="serviceType"
                    >
                      Type de prestation souhaitée <span className="text-secondary">*</span>
                    </label>
                    <select
                      id="serviceType"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-surface-container-low text-primary font-body-md text-sm px-4 py-3 rounded outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/40 transition-all border border-outline-variant/30 cursor-pointer"
                    >
                      <option value="tapisserie-ameublement">
                        Tapisserie d&apos;ameublement &amp; Réfection de sièges
                      </option>
                      <option value="rideaux-voilages">
                        Rideaux et voilages sur-mesure (Draperies &amp; Tringlerie)
                      </option>
                      <option value="decoration-interieure">
                        Décoration et aménagement d&apos;intérieur complet
                      </option>
                      <option value="tapisserie-automobile">
                        Tapisserie &amp; Sellerie automobile haut de gamme
                      </option>
                      <option value="multi-services">
                        Projet global / Hôtellerie &amp; Résidences de maître
                      </option>
                    </select>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-sm text-xs uppercase tracking-wider text-primary font-semibold"
                      htmlFor="projectDesc"
                    >
                      Description du projet <span className="text-secondary">*</span>
                    </label>
                    <textarea
                      id="projectDesc"
                      required
                      rows={5}
                      placeholder="Décrivez vos meubles (canapés 3 places, fauteuils club, chaises de salle à manger...), l'état des mousses, la hauteur sous plafond pour les rideaux ou le type d'intérieur auto..."
                      value={formData.projectDesc}
                      onChange={(e) => setFormData({ ...formData, projectDesc: e.target.value })}
                      className="w-full bg-surface-container-low text-primary font-body-md text-sm p-4 rounded outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/40 transition-all border border-outline-variant/30"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-secondary text-on-secondary rounded font-label-md text-xs sm:text-sm uppercase tracking-wider hover:bg-primary transition-all duration-300 font-semibold shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Transmettre ma demande via WhatsApp</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </button>
                  <p className="text-center font-body-sm text-xs text-on-surface-variant">
                    Réponse personnalisée sous 24h ouvrées. Déplacement possible dans tout le Grand Lomé.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Workshop Card */}
              <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30 shadow-sm flex flex-col gap-6">
                <div>
                  <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-semibold block mb-1">
                    Notre Atelier à Lomé
                  </span>
                  <h3 className="font-headline-sm text-xl text-primary font-semibold">
                    C.I.TA.M DÉCOR Lomé
                  </h3>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-1">
                    Centre International de Tapisserie Moderne - Décoration
                  </p>
                </div>

                <div className="flex flex-col gap-4 font-body-sm text-sm text-on-surface">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">
                      location_on
                    </span>
                    <div>
                      <strong className="block text-primary">Adresse :</strong>
                      <span>Agbalépédo, non loin de la station NAGODÉ, Lomé — Togo</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">
                      call
                    </span>
                    <div>
                      <strong className="block text-primary">Téléphones :</strong>
                      <div className="flex flex-col gap-1 text-secondary font-medium">
                        <a href="tel:+22870377743" className="hover:underline">
                          +228 70 37 77 43
                        </a>
                        <a href="tel:+22879202601" className="hover:underline">
                          +228 79 20 26 01
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">
                      schedule
                    </span>
                    <div>
                      <strong className="block text-primary">Heures d&apos;ouverture :</strong>
                      <span>Lundi — Samedi : 08h00 — 18h30</span>
                      <p className="text-xs text-on-surface-variant mt-0.5">Fermé le dimanche</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-outline-variant/20">
                  <a
                    href="https://wa.me/22870377743"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-surface rounded font-label-md text-xs uppercase tracking-wider hover:bg-secondary transition-colors font-semibold"
                  >
                    <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                      chat
                    </span>
                    <span>Écrire directement sur WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-6 bg-surface-container-high/50 rounded-xl border border-outline-variant/20">
                <span className="font-label-sm text-xs uppercase tracking-wider text-secondary font-semibold block mb-3">
                  Nos Engagements Qualité
                </span>
                <ul className="flex flex-col gap-2.5 font-body-sm text-xs text-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                    <span>Échantillons de tissus consultables sur place</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                    <span>Devis clair, transparent et sans engagement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                    <span>Déplacement pour prise de cotes in situ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                    <span>Garantie de tenue des coutures et des garnitures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
