import React, { useRef, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const items: Record<string, string>[] = [
  {
    title_gr: "Τριήρης: Η ιστορική της εξέλιξη",
    title_en: "Triiris: Its historical development",
    desc_gr: `Ο συγκεκριμένος τύπος πλοίου φαίνεται ότι εμφανίστηκε στην ευρύτερη ανατολική μεσόγειο κατά το τελευταίο τέταρτο του 8ου αιώνα π.Χ. Στη ναυσιπλοΐα περίπου κατά το 1.200 π.Χ. υπήρχε ένας βασικός διαχωρισμός στους τύπους πλοίων τόσο στα δεδομένα των ανατολικών λαών όσο και των Ελλήνων. Τα εμπορικά πλοία με κοίλο εσωτερικό και τα μακρά πλοία, πιο στενά για πολεμική χρήση. Τα μακρά πλοία διέθεταν μία σειρά 20 κουπιών και στην ουσία χρησίμευαν για τη μεταφορά στρατευμάτων.  Περίπου μετά το 760 π.Χ. σημειώνονται μία σειρά από τεχνικές εξελίξεις. Τα μακρά πλοία πλέον αποκτούν καταστρώματα και έμβολο, δηλαδή ένα μακρύ κομμάτι μέταλλο στο εμπρόσθιο μέρος της καρίνας βυθισμένο στο νερό κατάλληλο για να πλήξει τα αντίπαλα πλοία χάρη στην ώθηση που δίνουν στο πλοίο οι κωπηλάτες . Μετά από μία μεταβατική περίοδο όπου εμφανίζονται πλοία με 30 κουπιά, προς το τέλος του 8ου αιώνα εμφανίζεται η πεντηκόντορος. Ένα πλοίο με κατάστρωμα, έμβολο και 50 κουπιά σε δύο σειρές. Κατασκευαστικά, λόγω της χρήσης του εμβόλου, η πλώρη των πλοίων γίνεται πλέον πιο ενισχυμένη και συμπαγής. Με τον τρόπο αυτό αντέχει στο χτύπημα του εμβόλου από την ορμή που δίνουν οι πενήντα κωπηλάτες. Μετά την εμπλοκή των πλοίων, η συμπλοκή κρίνεται πλέον από τη σύγκρουση των επιβατών, δηλαδή των στρατιωτών που επιβαίνουν στα πλοία.\n
Όσο προχωρούμε στο 7ο και 6ο αιώνα π.Χ., η ανάγκη για βελτίωση της παραπάνω τεχνικής ναυτικής σύγκρουσης, οδηγεί στη σταδιακή εμφάνιση της τριήρους. Δηλαδή στην εμφάνιση ενός πλοίου με τρεις πλέον σειρές κουπιών. Πρόκειται πλέον για ένα πλοίο που, στη μορφή η οποία επικράτησε στα ελληνικά δεδομένα, είχε μήκος 35 μέτρα, πλάτος 5 μέτρα, βύθισμα λιγότερο από δύο μέτρα, βάρος 25 τόνους  και ταχύτητα κρούσης περίπου 8 ναυτικά μίλια. Προκειμένου το πολεμικό πλοίο να αποκτήσει μεγαλύτερη ώθηση ώστε ο εμβολισμός να γίνει πιο αποτελεσματικός, θα έπρεπε να υπάρξουν περισσότεροι κωπηλάτες. Το πλοίο δεν μπορούσε να επιμηκυνθεί περισσότερο. Επομένως στις δύο σειρές κουπιών προστέθηκε μία ακόμη επιπλέον σειρά στο επάνω μέρος. Το πλοίο πλέον γίνεται πιο ψηλό. Η κατώτερη σειρά κωπηλατών οι θαλαμίτες αριθμεί 27 κωπηλάτες σε κάθε πλευρά. Η δεύτερη σειρά κωπηλατών οι ζυγίτες αριθμεί επίσης 27 κωπηλάτες σε κάθε πλευρά. Τέλος πάνω από αυτούς και ακριβώς κάτω από το κατάστρωμα τοποθετείται η τρίτη υπερκείμενη σειρά από τους θρανίτες, 31 σε κάθε πλευρά. Με τον τρόπο αυτό η δύναμη των κωπηλατών ανέρχεται στους 170. Μαζί τους επιβαίνουν στο πλοίο 20 περίπου ακόμη άτομα. Ανάλογα με την εποχή, το πλήρωμα κυμαινόταν σε δέκα άτομα, ενώ οι υπόλοιποι ήταν συνήθως επιβάτες, δηλαδή στρατιωτικό απόσπασμα επιφορτισμένο με την προστασία του πλοίου από εχθρική επίθεση ή να επιτεθεί το ίδιο στο εχθρικό πλοίο σε περίπτωση εμπλοκής. Σε κάθε περίπτωση, το πλοίο όφειλε να είναι κατά το δυνατόν ελαφρότερο, για τον λόγο αυτό δεν χρησιμοποιούνταν ιστία κατά τη διάρκεια της μάχης. Η τριήρης δεν είχε λοιπόν μεγάλη αυτονομία στην ανοιχτή θάλασσα, καθώς και πάλι για λόγους βάρους δεν μετέφερε πολλές προμήθειες. Τέλος και πάλι προκειμένου το πλοίο να είναι ελαφρό κατασκευαζόταν από ελαφρύ ξύλο, όπως έλατο. Το ξύλο όμως διαβρωνόταν από το θαλασσινό νερό και επομένως η τριήρης έπρεπε να περνάει όσο το δυνατόν λιγότερο χρόνο μέσα στη θάλασσα και αποσύρεται στην ξηρά για να στεγνώσει το κύτος και να μην χάσει την ευελιξία της. Για αυτόν κυρίως τον λόγο όταν βρισκόταν σε εκστρατεία ένας στόλος έπλεε πάντα παράκτια, ώστε κάθε βράδυ να αποσύρονται τα πλοία στη στεριά για παραμείνουν όσο το δυνατόν περισσότερο στεγνά. Όταν ο στόλος ήταν σε προγραμματισμένη ανάπαυλα, αποσύρονταν σε ειδικές ωπές στον χώρο ελλιμενισμού του, τα νεώρεια, δηλαδή λάκκους με λίθινη επένδυση σκαμένους σε στεγνό έδαφος.\n
Τα στοιχεία για την εξέλιξη της τριήρους προέρχονται κατά κύριο λόγο από τη χρήση της στην Αθήνα μετά τους περσικούς πολέμους. Η Αθήνα μετά το 480 ανέπτυξε ένα ισχυρό ναυτικό πολεμικό ναυτικό που της επέτρεψε να διεκδικήσει την ηγεμονία της Ελλάδας. Πολλές από τις τεχνικές μάχης που εφαρμόστηκαν αργότερα δεν φαίνεται να ανταποκρίνονται στην περίοδο πριν και κατά τη διάρκεια των περσικών πολέμων. Το αθηναϊκό ναυτικό βασιζόταν στην ελαφρότητα των πλοίων και στην εκμετάλλευση των τεχνικών εμβολισμού των εχθρικών πλοίων. Αυτές ήταν ο περίπλους, δηλαδή η πλεύση γύρω από τα εχθρικά πλοία σε όλο και μικρότερη διάμετρο κύκλου και η αναμονή για ένα ευαίσθητο σημείο για εμβολισμό λόγω της αναστάτωσης από τον συνωστισμό , και ο διέκπλους, δηλαδή η απευθείας επίθεση σε δύο σειρές, καθώς η πρώτη σειρά είναι ευάλωτη μετά τον εμβολισμό του αντίπαλου πλοίου όταν προσπαθεί να αποσύρει το έμβολο και χρειάζεται την κάλυψη της δεύτερης σειράς. Αυτές οι τακτικές απαιτούν το πλοίο να είναι ελαφρό, επομένως ο αριθμός των επιβατών στις αθηναϊκές τριήρεις ήταν μικρός, περίπου 10 οπλίτες και 4 τοξότες.\n
Την περίοδο όμως των περσικών πολέμων οι τακτικές αυτές δεν είχαν αναπτυχθεί πλήρως. Η τριήρης πιθανώς ως τύπος πολεμικού πλοίου σε μεγάλους αριθμούς αναπτύχθηκε στα πρώτα της στάδια στο πολεμικό ναυτικό της Αιγύπτου και της Φοινίκης κατά τις αρχές του 7ου αιώνα. Μετά τις κατακτήσεις του Κύρου και του Καμβύση δηλαδή μετά το 525 π.Χ., οι Πέρσες μην όντας οι ίδιοι ναυτικός λαός, δημιούργησαν ένα ναυτικό με τριήρεις πιθανώς ιδιοκτησίας του βασιλέα, τις οποίες επάνδρωναν οι ναυτικοί λαοί της αυτοκρατορίας όπως οι Φοίνικες, οι Αιγύπτιοι και οι Έλληνες Ίωνες, υπό την επιτήρηση μεγάλων αποσπασμάτων επιβατών 30 ατόμων αποτελούμενα από Πέρσες, Μήδους, Σάκες και Σκύθες. Περίπου από το 485 π.Χ., όταν πλέον η τριήρης άρχισε να επικρατεί έναντι των προηγούμενων τύπων πολεμικών πλοίων στο βασιλικό ναυτικό της Περσίας, άρχισε να κατασκευάζεται πλέον σε μεγάλους αριθμούς και από τις ελληνικές πόλεις, προκειμένου αυτές να προετοιμαστούν για την επερχόμενη σύγκρουση.`,
    desc_en: `This type of ship seems to have appeared in the wider eastern Mediterranean during the last quarter of the 8th century BC. In navigation around 1,200 BC. there was a basic division in the types of ships in the data of both the eastern people and the Greeks. Merchant ships with a hollow interior and long ships but narrower for military use. The long ships had a range of 20 oars and were essentially used to transport troops. About 760 BC there are a number of technical developments. Long ships now have decks and a ram, that is, a long piece of metal at the front of the keel submerged in water suitable for hitting rival ships thanks to the impetus given to the ship by the rowers. After a transitional period where ships with 30 oars appear, towards the end of the 8th century the penteconter sea vessel appears. A ship with deck, ram and 50 oars in two rows. Constructional-wise, due to the use of the ram, the bow of the ships becomes more reinforced and compact. In this way it withstands the force of the hit by the ram from the momentum given by the fifty rowers. After the ramming occurs the conflict is then judged by the hand to hand battle of the epivatai, ie the infantry soldiers on board the ships.\n
As we move into the 7th and 6th centuries BC, the need to improve the above technical naval conflict, leads to the gradual appearance of the trireme. That is, the appearance of a ship with three rows of oars. It is now a ship that, in the form that prevailed in the Greek city-states, had a length of 35 meters, a width of 5 meters, a draft of less than two meters, a weight of 25 tons and an impact speed of about 8 nautical miles. In order for the warship to gain more momentum to make the ramming more effective, there would have to be more rowers. The ship could not be extended any longer. Therefore an additional row was added to the top of the two rows of oars. The ship is now getting taller. The lower row of rowers the thalamites numbers 27 rowers on each side. The second row of rowers the zevgites numbers 27 rowers on each side. Finally, above them and just below the deck is placed the third overhead row of thranites, 31 on each side. In this way the power of the rowers amounts to 170. Around 20 more people board the ship with them. Depending on the season, the crew was around ten people, while the rest were usually passengers, that is, a military detachment in charge of protecting the ship from enemy attack or attacking the enemy ship itself in case of engagement. In any case, the ship had to be as light as possible, so no sails were used during the battle. The trireme did not have much autonomy on the open sea, and again for reasons of weight did not carry many supplies. Finally, in order for the ship to be light, it was made of light wood, such as fir. The wood, however, was eroded by the sea water and therefore the trireme had to spend as little time as possible in the sea and retreated ashore to dry the hull and not lose its flexibility. For this reason, mainly when a fleet was on a campaign, it always sailed coastal, so that every night the ships are withdrawn to the mainland to stay as dry as possible. When the fleet was on a scheduled break, they retreated to special births in its mooring area, the quay, pits with stone lining, dug in dry ground.\n
The evidence for the evolution of the trireme comes mainly from its use in Athens after the Persian wars. Athens after 480 BC developed a strong navy that allowed it to claim the hegemony of Greece. Many of the later fighting techniques do not seem to correspond to the period before and during the Persian Wars. The Athenian navy relied on the lightness of the ships and the exploitation of the ramming techniques to the enemy ships. These were the periplus, that is, sailling around the enemy ships in a smaller and smaller circle diameter and the waiting for a sensitive point for ramming due to the breakout from the crowd of ships, and the diekplous the direct attack in two rows, as the first row is vulnerable after ramming the opposing ship when it tries to withdraw the ram and needs to be covered by the second row. These tactics require the ship to be light, so the number of passengers in the Athenian triremes was small, about 10 hoplites and 4 archers.\n
However, during the Persian Wars, these tactics were not fully developed. The trireme probably as a type of warship in large numbers developed in its early stages in the navies of Egypt and Phenicia in the early 7th century. After the conquests of Cyprus and Cambyses, ie after 525 BC, the Persians, not being naval people themselves, created a navy with triremes probably owned by the king, which were manned by the naval peoples of the empire such as the Phoenicians and the Egyptians and the Greek Ionians, under the supervision of large detachments of 30 passengers consisting of Persians, Medes, Sakes and Scythians. Around 485 BC, when the trireme began to prevail over the previous types of warships in the royal navy of Persia, it began to be built in large numbers by the Greek cities, in order to prepare them for the coming conflict.
`,
  },

  {
    title_gr: "Έμβολο",
    title_en: "Ram",
    desc_gr:
      "Το κυρίως επιθετικό όργανο του πλοίου, , δηλαδή ένα μακρύ κομμάτι μέταλλο στο εμπρόσθιο μέρος της καρίνας με μήκος περίπου ένα μέτρο βυθισμένο στο νερό κατάλληλο για να πλήξει τα αντίπαλα πλοία χάρη στην ώθηση που δίνουν στο πλοίο οι κωπηλάτες . Η εργασία κατασκευής και προσαρμογής του ήταν ιδιαίτερα απαιτητική. Εάν λάβουμε υπόψη μας μεταγενέστερα παραδείγματα από τον 4ο αιώνα π.Χ., πρόκειται για ένα συμπαγές  χυτό κομμάτι ορείχαλκου βάρους τουλάχιστον 80 κιλών. Στο μπροστινό μέρος είχε τρεις βαθμιδωτές απολήξεις για μπορεί να διαπεράσει αποτελεσματικότερα το κύτος του εχθρικού πλοίου ενώ στο πίσω κοίλο μέρος του εισάγονταν τα άκρα των πρώτων ξύλων του πλοίου, έτσι ώστε η ενέργεια από το τράνταγμα να κατανέμεται στη μέγιστη δυνατή μάζα του κύτους.",
    desc_en:
      "The main offensive instrument of the ship, ie a long piece of metal at the front of the keel with a length of about one meter submersed in water capable to inflict hits to the opposing ships thanks to the impetus given to the ship by the rowers. Its construction and adaptation work was very demanding. If we take into account later examples from the 4th century BC, it is a solid cast piece of brass weighing at least 80 kg. At the front it had three stepped ends so that it could penetrate more effectively the hull of the enemy ship while at the rear in the hollow part,  the ends of the first woods of the ship were inserted, so that the energy from the jolt is distributed to the maximum possible across the mass of the hull.",
  },
  {
    title_gr: "Ακροστόλιον",
    title_en: "Akrostolion",
    desc_gr:
      "Το σύνολο του στολισμού ενός πλοίου. Κατα μία ερμηνεία, ξεκινούσε από την εξέδρα της πρύμνης με το άφλαστον (βλ. λέξη) και με ένα ξύλο κατά μήκος του οποίου γραφόταν το όνομα του πλοίου έφτανε στην εξέδρα της πλώρης και κατέληγε στο ακρωτήριο και την εξέδρα της πλώρης (βλ. λέξη)",
    desc_en:
      "The whole decoration of a ship. According to one interpretation, it started from the stern platform with the aflaston (see word) and with a stick along which the name of the ship was written, it reached the bow platform and ended at the cape and the bow platform (see word)",
  },
  {
    title_gr: "Άφλαστον",
    title_en: "Aflaston",
    desc_gr:
      "Το σημείο όπου στηρίζεται η σημαία του πλοίου. Αυτή χρησίμευε σε πρακτικούς σκοπούς - επικοινωνία μεταξύ των πλοίων ή είχε αναγνωριστική σημασία. Το σύμβολο που επέλεγε ο τριήραρχος αντιπροσώπευε το πλοίο, όπως τα επίσημα στις ασπίδες των οπλιτών. Μία μεγάλη καμπύλη προστάτευε την πρύμνη και είχε μεταλλικές σκαλισμένες απολήξεις. Αποτελούσε μέρος του ακροστολίου.",
    desc_en:
      "The point where the ship's flag rests. It was used for practical purposes - communication between ships or for reconnaissance by the other ships. The symbol chosen by the trierarchos represented the ship, like the official ones on the shields of the hoplites. A large curve protected the stern and had carved metal ends. It was part of the acrostolion.",
  },
  {
    title_gr: "Εξέδρα Πρύμνης",
    title_en: "Stern Podium",
    desc_gr:
      "Το πίσω μέρος του πλοίου όπου βρίσκονται ο τριήραρχος και ο πηδαλιούχος. Αποτελούσε τον εγκέφαλο του πλοίου, καθώς ο διοικητής και ο πλοηγός του πλοίου ήταν εκεί. Για τον λόγο αυτό περιστοιχιζόνταν από επιβάτες για την προστασία τους.",
    desc_en:
      "The rear of the ship where the Trierarch and the helmsman are. It was the brain of the ship, as the ship's commander and navigator were there. For this reason they were surrounded by soldiers (epivatai) for their protection.",
  },
  {
    title_gr: "Εξέδρα πλώρης",
    title_en: "Bow platform",
    desc_gr:
      "Βρίσκοταν πάνω από έμβολο. Εκεί συγκεντρώνονταν οι επιβάτες προκειμένου να εφορμήσουν στο εχθρικό πλοίο. Στην πρόσοψή της υπήρχαν ζωγραφισμένα ή ένθετα μάτια, που έκαναν την τριήρη να μοιάζει με θαλάσσιο τέρας, ζητώντας ταυτόχρονα και τη βοήθεια των θεών. Στο σημείο αυτό βρισκόταν και η άγκυρα του πλοίου. Η εξέδρα έκλεινε με το ακρωτήριον του πλοίου, το οποίο τη στόλιζε και ταυτόχρονα στεκόταν εμπόδιο σε εχθρική επιβίβαση.",
    desc_en:
      "It was above the ram. There the epivatai (soldiers) gathered to rush to the enemy ship. On its front there were painted or inset eyes, which made the trireme look like a sea monster, at the same time asking for the help of the gods. The anchor of the ship was at this point. The platform closed with the cape of the ship, which adorned it and at the same time stood an obstacle to enemy boarding.",
  },
  {
    title_gr: "Επιβάται",
    title_en: "Epivatai",
    desc_gr:
      "Οι μάχιμοι πεζικάριοι που φυλάνε το πλοίο σε περίπτωση εχθρικής επίθεσης ή αποβιβάζονται προκειμένου να πολεμήσουν ως πεζικό. Κατά την περίοδο των περσικών πολέμων οι περσικές τριήρεις διέθεταν μεγάλα αποσπάσματα επιβατών, καθώς οι Πέρσες δεν ήταν ναυτικός λαός. Τα πολυάριθμα πλοία ήταν επανδρωμένα με υποτελείς ναυτικούς λαούς, Αιγυπτίους, Φοίνικες, Έλληνες. Οι επιβάτες διασφάλιζαν την αφοσίωση των πληρωμάτων.",
    desc_en:
      "Combat infantry guarding the ship in the event of an enemy attack or disembarking to fight as foot soldiers. During the Persian Wars the Persian triremes had large numbers of passengers, as the Persians were not  naval people. The numerous ships were manned by subordinate cities-states with naval experience: Egyptians, Phoenicians, Asian Minor Greeks. The epivatai ensured the loyalty of the crew.",
  },
  {
    title_gr: "Τριήραρχος",
    title_en: "Trierarchos",
    desc_gr:
      "Ο διοικητής και ιδιοκτήτης της τριήρους. Όταν ο Θεμιστοκλής έφτιαξε τις πρώτες τριήρεις χρησιμοποιώντας τα αποθέματα αργύρου στο Λαύριο, έδωσε σε κάποιους από τους πιο πλούσιους πολίτες από ένα τάλαντο (6.000 δραχμές) από το κρατικό ταμείο προκειμένου να ναυπηγήσουν ο καθένας από μία τρήρη, συμπληρώνοντας τα έξοδα και τη συντήρηση του πλοίου. Κατά την κλασική περίοδο η τριηραχία έγινε μια από τις λειτουργίες του αθηναϊκού κράτους. Ο τριήραρχος επωμιζόταν τη δαπάνη κατασκευής και συντήρησης μίας τριήρους της οποίας ήταν και διοικητής.",
    desc_en:
      "The commander and owner of the trireme. When Themistocles built the first triremes using the silver reserves in Lavrio, he gave to some of the richest citizens a talant (6,000 drachmas) from the state treasury in order for each of them to build a trirem, supplementing the expenses and the maintenance of the ship. During the classical period, triarchy became one of the functions of the Athenian state. The trierarchos paid the cost of construction and maintenance of a trireme of which he was also the commander.",
  },
  {
    title_gr: "Πηδαλιούχος",
    title_en: "Helmsman",
    desc_gr:
      "Ο οδηγός του πλοίου. Ως πηδάλιο οι τριήρεις είχαν δύο μεγάλα και πλατιά κουπιά, τοποθετημένα εκατέρωθεν στην πρύμνη, που τα χειριζόταν για να στρέψει το πλοίο ο εμπειρος και άξιος ως προς τα ναυτικά πηδαλιούχος.",
    desc_en:
      "The helmsman/navigator of the ship. As a rudder the triremes had two large and wide oars, placed on either side of the stern, which were operated to turn the ship by the experienced and worthy naval rudder.",
  },
  {
    title_gr: "Κωπηλάτες",
    title_en: "Rowers",
    desc_gr: `Η κινητήρια δύναμη του πλοίου. Είναι τοποθετημένοι σε τρεις σειρές: επάνω οι θρανίτες στη μέση οι ζυγίτες και στο κάτω μέρος οι θαλαμίτες. Η συντονισμένη κίνησή τους κάνει την τριήρη ένα αποτελεσματικό και επικίνδυνο όπλο. Ο Αριστοτέλης, τη χαρακτήρισε «κωπηλατική μηχανή». Είχε 170 κουπιά. Αυτό επιτυγχανόταν  με την κατάλληλη διάταξη των σειρών των κουπιών, σε τρία διαφορετικά επίπεδα, αλλά, σχετικά, κοντά μεταξύ τους, για να αποφευχθεί το υπερβολικό μήκος κουπιών για το ανώτατο επίπεδο. Συγκεκριμένα:\n
- Η πιο κάτω σειρά, των 54 θαλαμίων κάθονταν σε ένα επίπεδο λίγο πάνω από την ίσαλο γραμμή.\n
- Η δεύτερη σειρά, των 54 ζυγίων κάθονταν σε ένα επίπεδο που βρίσκονταν πάνω από το προηγούμενο, στο μέσο ύψος των ώμων των θαλάμιων.\n
- Η τελευταία σειρά των 62 θρανιτών βρίσκονταν ένα επίπεδο πάνω και έξω από το προηγούμενο και, πάλι, στο μέσο ύψος των ώμων των ζυγίων.\n
Τα κουπιά διέφεραν από κατηγορία σε κατηγορία, αλλά είχαν το ίδιο μήκος: 4,2 - 4,4 μέτρα. Η διαφορά ήταν στη γωνία που σχημάτιζαν με το επίπεδο της θάλασσας. Τα κουπιά των θαλαμίων έπεφταν, σχεδόν, οριζόντια, αφού ήταν πολύ κοντά στο νερό, ενώ εκείνα των θρανιτών τοποθετούνταν, σχεδόν, κάθετα. Η ξυλεία που χρησιμοποιούνταν για τα κουπιά ήταν το πεύκο.  Το πεύκο χρησιμοποιούνταν και για τη ναυπήγηση του υπόλοιπου πλοίου εκτός από τα κατάρτια που χρησιμοποιούνταν  το κυπαρίσσι. Ο τρόπος ναυπήγησης ήταν η κατασκευή του πετσώματος της γάστρας πρώτα και στη συνέχεια η τοποθέτηση των νομέων (σκελετού). Μέθοδος που εγκαταλείφτηκε από τον 11ο αι μ.Χ. Σύμφωνα με πρόσφατες αρχαιολογικές έρευνες, τα πιο κατάλληλα ξύλα ήταν το έλατο και η δασική πεύκη της Μακεδονίας, από τον Όλυμπο και τα Πιέρια, με κύριο διαμετακομιστικό κέντρο την αρχαία Μεθώνη. Αυτά θεωρούνταν τα πλέον ανθεκτικά ξύλα στη θαλάσσια διάβρωση που σε ελαφρύ ξύλο ήταν αναπόφευκτη για τον συγκεκριμένο τύπο πλοίου.`,
    desc_en: `The ship's driving force. They are arranged in three rows: at the top the thranites, in the middle the zygites and at the bottom the thalamites. Their coordinated movement makes the triereme an effective and dangerous weapon. Aristotle called it a "rowing machine". It had 170 oars. This was achieved by the appropriate arrangement of rows of paddles, on three different levels, but relatively close together, to avoid excessive length of paddles for the top level. Specifically:\n
- The lower row, of 54 thalamites, sat on a level just above the waterline of the trierem.\n
- The second row, of 54 zygites, sat at a level above the previous one, at the average height of the shoulders of the thalamites.\n
- The last row of 62 thranites was one level above and beyond the previous one and, again, at the average height of the zygites shoulders.\n
The oars differed from row to row, but had the same length: 4.2 - 4.4 meters. The difference was in the angle they formed with the sea level. The oars of the thalamites fell, almost, horizontally, since they were very close to the water, while those of the thranites were placed almost vertically. The timber used for the oars was pine tree. The pine tree was also used for the construction of the rest of the ship, apart from the masts for which cypress was used. The construction process was to construct the skin of the hull first and then the body of the ship. This method was abandoned after the 11th century AD. According to recent archaeological research, the most suitable timber were the fir and forest pine of Macedonia, from Olympus and Pieria, with the main transit center being ancient Methoni. These were considered the most resistant woods to marine erosion which in light timber was inevitable for this type of ships.
`,
  },
  {
    title_gr: "Ιστία",
    title_en: "Sails",
    desc_gr:
      "Πέρα του συστήματος προώθησης μέσω της κωπηλασίας, η τριήρης διέθετε και ένα σύστημα ιστίων. Ως πολεμικό πλοίο, ήταν κατασκευασμένη για να έχει ως κύριο μέσο πρόωσης, τα κουπιά  και βοηθητικά τα πανιά που κατά κανόνα ήταν τετράγωνα ή, περισσότερο, τραπεζοειδή εκ των οποίων το μεγαλύτερο ήταν τοποθετημένο  στον μεγάλο ιστό (κατάρτι) που ήταν στο μέσο του σκάφους, ενώ, το μικρότερο  σε κεκλιμένο μικρότερο και κοντύτερο του μεγάλου κατάρτι που ονομαζόταν «ακάτιος». Τα πανιά αυτά χρησιμοποιούνταν μόνο και εφόσον έπνεε «ούριος άνεμος», δηλαδή, με κατεύθυνση από την πρύμνη προς την πλώρη, ή από το πλαινό και πίσω μέρος  του σκάφους. Ήταν, δε, τελείως ακατάλληλα για πλεύση «κατά την εγγυτάτην», δηλαδή  εντελώς προς την κατεύθυνση του ανέμου ή στη ναυτική ορολογία  «όρτσα» ή σε «πλαγιοδρομία» δλδ με τον άνεμο ακριβώς στο πλαινό μέρος του σκάφους. Υπήρχαν, ακόμη, δύο ειδών ιστία: τα μεγάλα, που χρησιμοποιούνταν για μεγάλες πλεύσεις και τα μικρά, που χρησιμοποιούνταν όταν ο άνεμος ήταν ισχυρός και ως βοηθητικά στις ναυμαχίες, κατά τις οποίες τα μεγάλα ήταν πάντα διπλωμένα ή είχαν αφαιρεθεί προηγουμένως.",
    desc_en: `In addition to the rowing propulsion system, the trireme also had a sailing system. As a warship, it was built to have as its main means of propulsion, the oars and as auxiliary the sails, which were usually square or, more likely, trapezoidal. The main sail was carried on a boom in the large main mast which was in the middle of the boat, while, the smallest was carried on smaller boom on a sloping mast in front of the master called "akatios". These sails were used only if there was a "bow wind", that is, in the direction from the stern to the bow, or from the hip of the boat. It was, however, completely unsuitable for sailing towards the wind or upwind in sailing. There were also two types of sails: the larger ones, used for voyages with calmer winds and the smaller ones, used when the wind was strong or as aids in naval battles, in which the large ones were always folded or removed beforehand.`,
  },
];

function NewlineText(props: any) {
  const text = props.text;
  const newText = text
    ?.split("\n")
    ?.filter((e: any) => {
      return e !== "";
    })
    ?.map((str: string, idx: number) => (
      <p key={idx} className="mb-2">
        &nbsp; {str}
      </p>
    ));
  return newText;
}

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const U = () => {
  const { isLoaded, unload, sendMessage, loadingProgression, unityProvider } =
    useUnityContext({
      streamingAssetsUrl: "/unity/salamina.data",
      loaderUrl: "/unity/salamina.loader.js",
      dataUrl: "/unity/salamina.data",
      frameworkUrl: "/unity/salamina.framework.js",
      codeUrl: "/unity/salamina.wasm",
    });

  const router = useRouter();
  const { locale } = router;
  const [idx, setIdx] = useState(0);

  function goTo(b: string) {
    sendMessage("Player", "fly", b);
  }

  const ref = useRef<HTMLCanvasElement>(null);
  async function handleClickBack() {
    await unload()?.then((e) => {
      if (!ref.current) return;
      ref.current.remove();
      router.push(`/`);
    });
  }

  return (
    <div className="bg-black overflow-hidden">
      {!isLoaded && (
        <div className="flex  w-screen h-screen fixed z-50 pointer-events-none justify-center items-center text-white">
          <div>
            <div className="text-2xl text-center w-full mb-4">
              {(loadingProgression * 100).toFixed(2)}%
            </div>
            <div className="w-96 bg-gray-200  rounded-full">
              <div
                className="bg-blue-600 w-full h-4 text-center text-lg font-medium text-blue-100 p-0.5 leading-none rounded-l-full"
                style={{ width: `${loadingProgression * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
      <Unity
        ref={ref}
        className="w-screen h-screen relative"
        unityProvider={unityProvider}
      />
      {isLoaded && (
        <div className="fixed h-8 bg-black bg-opacity-80 text-zinc-200 font-bold border-t border-white border-opacity-20  grid grid-cols-11 select-none bottom-0 w-screen  ">
          {items.map((o, _idx) => (
            <button
              key={_idx}
              className="truncate border-r shadow border-white border-opacity-20"
              onClick={() => {
                if (_idx === idx) return;
                Promise.resolve()
                  .then(() => {
                    setIdx(-1);
                  })
                  .then(() => goTo(o.goTo))
                  .then(() => sleep(1000))
                  .then(() => {
                    setIdx(_idx);
                  });
              }}
            >
              {o[`title_${locale}`]}
            </button>
          ))}
        </div>
      )}
      {isLoaded && (
        <div
          style={{
            height: `calc(100vh -  32px)`,
          }}
          className="fixed select-none border-white border-opacity-20 z-50 right-0 overflow-auto hidden md:block w-[30vw] text-white top-0 pt-4  bg-black bg-opacity-80 px-4 text-justify"
        >
          <motion.h1
            transition={{ duration: 1 }}
            animate={{
              opacity: idx > -1 ? 1 : 0,
            }}
            className="text-2xl font-bold"
          >
            {items?.[idx]?.[`title_${locale}`]}
          </motion.h1>
          <motion.h1
            transition={{ duration: 1 }}
            animate={{
              opacity: idx > -1 ? 1 : 0,
            }}
            className=" mt-6 text-base overflow-auto"
          >
            <NewlineText text={items?.[idx]?.[`desc_${locale}`]} />
            {/* {items?.[idx]?.[`desc_${locale}`].replace(/\n/g, "<br />")} */}
          </motion.h1>
        </div>
      )}
    </div>
  );
};

export default function Page() {
  try {
    return <U />;
  } catch (error) {
    return null;
  }
}
