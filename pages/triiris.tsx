import React, { useRef, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const items: Record<string, string>[] = [
  {
    goTo: "Start",
    title_el: "Τριήρης: Η ιστορική της εξέλιξη",
    title_en: "Triiris: Its historical development",
    desc_el: `Ο συγκεκριμένος τύπος πλοίου φαίνεται ότι εμφανίστηκε στην ευρύτερη ανατολική μεσόγειο κατά το τελευταίο τέταρτο του 8ου αιώνα π.Χ. Στη ναυσιπλοΐα περίπου κατά το 1.200 π.Χ. υπήρχε ένας βασικός διαχωρισμός στους τύπους πλοίων τόσο στα δεδομένα των ανατολικών λαών όσο και των Ελλήνων. Τα εμπορικά πλοία με κοίλο εσωτερικό και τα μακρά πλοία, πιο στενά για πολεμική χρήση. Τα μακρά πλοία διέθεταν μία σειρά 20 κουπιών και στην ουσία χρησίμευαν για τη μεταφορά στρατευμάτων. Περίπου μετά το 760 π.Χ. σημειώνονται μία σειρά από τεχνικές εξελίξεις. Τα μακρά πλοία πλέον αποκτούν καταστρώματα και έμβολο, δηλαδή ένα μακρύ κομμάτι μέταλλο στο εμπρόσθιο μέρος της καρίνας βυθισμένο στο νερό κατάλληλο για να πλήξει τα αντίπαλα πλοία χάρη στην ώθηση που δίνουν στο πλοίο οι κωπηλάτες. Μετά από μία μεταβατική περίοδο όπου εμφανίζονται πλοία με 30 κουπιά, προς το τέλος του 8ου αιώνα εμφανίζεται η πεντηκόντορος. Ένα πλοίο με κατάστρωμα, έμβολο και 50 κουπιά σε δύο σειρές. Κατασκευαστικά, λόγω της χρήσης του εμβόλου, η πλώρη των πλοίων γίνεται πλέον πιο ενισχυμένη και συμπαγής. Με τον τρόπο αυτό αντέχει στο χτύπημα του εμβόλου από την ορμή που δίνουν οι πενήντα κωπηλάτες. Μετά την εμπλοκή των πλοίων, η συμπλοκή κρίνεται πλέον από τη σύγκρουση των επιβατών, δηλαδή των στρατιωτών που επιβαίνουν στα πλοία.\n
Όσο προχωρούμε στο 7ο και 6ο αιώνα π.Χ., η ανάγκη για βελτίωση της παραπάνω τεχνικής ναυτικής σύγκρουσης, οδηγεί στη σταδιακή εμφάνιση της τριήρους. Δηλαδή στην εμφάνιση ενός πλοίου με τρεις πλέον σειρές κουπιών. Πρόκειται πλέον για ένα πλοίο που, στη μορφή η οποία επικράτησε στα ελληνικά δεδομένα, είχε μήκος 35 μέτρα, πλάτος 5 μέτρα, βύθισμα λιγότερο από δύο μέτρα, βάρος 25 τόνους και ταχύτητα κρούσης περίπου 8 ναυτικά μίλια. Προκειμένου το πολεμικό πλοίο να αποκτήσει μεγαλύτερη ώθηση ώστε ο εμβολισμός να γίνει πιο αποτελεσματικός, θα έπρεπε να υπάρξουν περισσότεροι κωπηλάτες. Το πλοίο δεν μπορούσε να επιμηκυνθεί περισσότερο. Επομένως στις δύο σειρές κουπιών προστέθηκε μία ακόμη επιπλέον σειρά στο επάνω μέρος. Το πλοίο πλέον γίνεται πιο ψηλό. Η κατώτερη σειρά κωπηλατών οι θαλαμίτες αριθμεί 27 κωπηλάτες σε κάθε πλευρά. Η δεύτερη σειρά κωπηλατών οι ζυγίτες αριθμεί επίσης 27 κωπηλάτες σε κάθε πλευρά. Τέλος πάνω από αυτούς και ακριβώς κάτω από το κατάστρωμα τοποθετείται η τρίτη υπερκείμενη σειρά από τους θρανίτες, 31 σε κάθε πλευρά. Με τον τρόπο αυτό η δύναμη των κωπηλατών ανέρχεται στους 170. Μαζί τους επιβαίνουν στο πλοίο 30 ακόμη άτομα. Ανάλογα με την εποχή, το πλήρωμα κυμαινόταν σε δέκα άτομα, ενώ οι υπόλοιποι ήταν συνήθως επιβάτες, δηλαδή στρατιωτικό απόσπασμα επιφορτισμένο με την προστασία του πλοίου από εχθρική επίθεση ή να επιτεθεί το ίδιο στο εχθρικό πλοίο σε περίπτωση εμπλοκής. Σε κάθε περίπτωση, το πλοίο όφειλε να είναι κατά το δυνατόν ελαφρότερο, για τον λόγο αυτό δεν χρησιμοποιούνταν ιστία κατά τη διάρκεια της μάχης. Η τριήρης δεν είχε λοιπόν μεγάλη αυτονομία στην ανοιχτή θάλασσα, καθώς και πάλι για λόγους βάρους δεν μετέφερε πολλές προμήθειες. Τέλος και πάλι προκειμένου το πλοίο να είναι ελαφρό κατασκευαζόταν από ελαφρύ ξύλο, όπως έλατο. Το ξύλο όμως διαβρωνόταν από το θαλασσινό νερό και επομένως η τριήρης έπρεπε να περνάει όσο το δυνατόν λιγότερο χρόνο μέσα στη θάλασσα και αποσύρεται στην ξηρά για να στεγνώσει το κύτος και να μην χάσει την ευελιξία της. Για αυτόν κυρίως τον λόγο όταν βρισκόταν σε εκστρατεία ένας στόλος έπλεε πάντα παράκτια, ώστε κάθε βράδυ να αποσύρονται τα πλοία στη στεριά για παραμείνουν όσο το δυνατόν περισσότερο στεγνά. Όταν ο στόλος ήταν σε προγραμματισμένη ανάπαυλα, αποσύρονταν σε ειδικές ωπές στον χώρο ελλιμενισμού του, τα νεώρεια, δηλαδή λάκκους με λίθινη επένδυση σκαμένους σε στεγνό έδαφος.\n
Τα στοιχεία για την εξέλιξη της τριήρους προέρχονται κατά κύριο λόγο από τη χρήση της στην Αθήνα μετά τους περσικούς πολέμους. Η Αθήνα μετά το 480 ανέπτυξε ένα ισχυρό ναυτικό πολεμικό ναυτικό που της επέτρεψε να διεκδικήσει την ηγεμονία της Ελλάδας. Πολλές από τις τεχνικές μάχης που εφαρμόστηκαν αργότερα δεν φαίνεται να ανταποκρίνονται στην περίοδο πριν και κατά τη διάρκεια των περσικών πολέμων. Το αθηναϊκό ναυτικό βασιζόταν στην ελαφρότητα των πλοίων και στην εκμετάλλευση των τεχνικών εμβολισμού των εχθρικών πλοίων. Αυτές ήταν ο περίπλους, δηλαδή η πλεύση γύρω από τα εχθρικά πλοία σε όλο και μικρότερη διάμετρο κύκλου και η αναμονή για ένα ευαίσθητο σημείο για εμβολισμό λόγω της αναστάτωσης από τον συνωστισμό, και ο διέκπλους, δηλαδή η απευθείας επίθεση σε δύο σειρές, καθώς η πρώτη σειρά είναι ευάλωτη μετά τον εμβολισμό του αντίπαλου πλοίου όταν προσπαθεί να αποσύρει το έμβολο και χρειάζεται την κάλυψη της δεύτερης σειράς. Αυτές οι τακτικές απαιτούν το πλοίο να είναι ελαφρό, επομένως ο αριθμός των επιβατών στις αθηναϊκές τριήρεις ήταν μικρός, περίπου 10 οπλίτες και 4 τοξότες.\n
Την περίοδο όμως των περσικών πολέμων οι τακτικές αυτές δεν είχαν αναπτυχθεί πλήρως. Η τριήρης πιθανώς ως τύπος πολεμικού πλοίου σε μεγάλους αριθμούς αναπτύχθηκε στα πρώτα της στάδια στο πολεμικό ναυτικό της Αιγύπτου και της Φοινίκης κατά τις αρχές του 7ου αιώνα. Μετά τις κατακτήσεις του Κύρου και του Καμβύση δηλαδή μετά το 525 π.Χ., οι Πέρσες μην όντας οι ίδιοι ναυτικός λαός, δημιούργησαν ένα ναυτικό με τριήρεις πιθανώς ιδιοκτησίας του βασιλέα, τις οποίες επάνδρωναν οι ναυτικοί λαοί της αυτοκρατορίας όπως οι Φοίνικες, οι Αιγύπτιοι και οι Έλληνες Ίωνες, υπό την επιτήρηση μεγάλων αποσπασμάτων επιβατών 30 ατόμων αποτελούμενα από Πέρσες, Μήδους, Σάκες και Σκύθες. Περίπου από το 485 π.Χ., όταν πλέον η τριήρης άρχισε να επικρατεί έναντι των προηγούμενων τύπων πολεμικών πλοίων στο βασιλικό ναυτικό της Περσίας, άρχισε να κατασκευάζεται πλέον σε μεγάλους αριθμούς και από τις ελληνικές πόλεις, προκειμένου αυτές να προετοιμαστούν για την επερχόμενη σύγκρουση. Επομένως είναι πιθανόν κατά τις ναυμαχίες στους περσικούς πολέμους τα ελληνικά πλοία να είχαν επίσης μεγάλους αριθμούς επιβατών, γύρω στους 30 με 40.`,
    desc_en: `This type of ship seems to have appeared in the wider eastern Mediterranean during the last quarter of the 8th century BC. In navigation around 1,200 BC. there was a basic division in the types of ships in the data of both the eastern peoples and the Greeks. Merchant ships with a hollow interior and long ships, narrower for military use. The long ships had a range of 20 oars and were essentially used to transport troops. About 760 BC there are a number of technical developments. Long ships now have decks and a piston, that is, a long piece of metal at the front of the keel submerged in water suitable for hitting rival ships thanks to the impetus given to the ship by the rowers. After a transitional period where ships with 30 oars appear, towards the end of the 8th century the pentikondoros appears. A ship with deck, piston and 50 oars in two rows. Constructional-wise, due to the use of the piston, the bow of the ships becomes more reinforced and compact. In this way it withstands the blow of the piston from the momentum given by the fifty rowers. After the involvement of the ships, the conflict is now judged by the collision of the passengers, ie the soldiers on board the ships.\n
As we move into the 7th and 6th centuries BC, the need to improve the above technical naval conflict, leads to the gradual appearance of the trireme. That is, in the appearance of a ship with three more rows of oars. It is now a ship that, in the form that prevailed in the Greek data, had a length of 35 meters, a width of 5 meters, a draft of less than two meters, a weight of 25 tons and an impact speed of about 8 nautical miles. In order for the warship to gain more momentum to make the embolization more effective, there would have to be more rowers. The ship could not be extended any longer. Therefore an additional row was added to the top of the two rows of oars. The ship is now getting taller. The lower row of rowers the thalamites numbers 27 rowers on each side. The second row of rowers also weighs 27 rowers on each side. Finally, above them and just below the deck is placed the third overhead row of granites, 31 on each side. In this way the power of the rowers amounts to 170. 30 more people board the ship with them. Depending on the season, the crew was around ten people, while the rest were usually passengers, that is, a military detachment in charge of protecting the ship from enemy attack or attacking the enemy ship itself in case of engagement. In any case, the ship had to be as light as possible, so no sails were used during the battle. The trireme did not have much autonomy on the high seas, and again for reasons of weight did not carry many supplies. Finally, in order for the ship to be light, it was made of light wood, such as fir. The wood, however, was eroded by the sea water and therefore the trireme had to spend as little time as possible in the sea and retreated ashore to dry the hull and not lose its flexibility. For this reason, mainly when a fleet was on a campaign, it always sailed coastal, so that every night the ships are withdrawn to the mainland to stay as dry as possible. When the fleet was on a scheduled break, they retreated to special holes in its mooring area, the new ones, that is, pits with stone lining dug in dry ground.\n
The evidence for the evolution of the trireme comes mainly from its use in Athens after the Persian wars. Athens after 480 developed a strong navy that allowed it to claim the hegemony of Greece. Many of the later fighting techniques do not seem to correspond to the period before and during the Persian Wars. The Athenian navy relied on the lightness of the ships and the exploitation of the embolization techniques of the enemy ships. These were the voyage, that is, the voyage around the enemy ships in a smaller and smaller circle diameter and the waiting for a sensitive point for embolization due to the disturbance from the crowd, and the navigation, ie the direct attack in two rows, as the first row is vulnerable after embolizing the opposing ship when it tries to withdraw the piston and needs to cover the second row. These tactics require the ship to be light, so the number of passengers in the Athenian triremes was small, about 10 hoplites and 4 archers.\n
However, during the Persian Wars, these tactics were not fully developed. The trireme probably as a type of warship in large numbers developed in its early stages in the navies of Egypt and Phenicia in the early 7th century. After the conquests of Cyrus and Cambyses, ie after 525 BC, the Persians, not being a naval people themselves, created a navy with triremes probably owned by the king, which were manned by the naval peoples of the empire such as the Phoenicians and the Egyptians. and the Greek Ionians, under the supervision of large detachments of 30 passengers consisting of Persians, Medes, Sakes and Scythians. Around 485 BC, when the trireme began to prevail over the previous types of warships in the royal navy of Persia, it began to be built in large numbers by the Greek cities, in order to prepare them for the coming conflict. Therefore it is possible that during the naval battles in the Persian wars the Greek ships also had large numbers of passengers, around 30 to 40.
`,
  },

  {
    title_el: "Έμβολο",
    goTo: "Embolo",

    title_en: "Ram",
    desc_el:
      "Το κυρίως επιθετικό όργανο του πλοίου, δηλαδή ένα μακρύ κομμάτι μέταλλο στο εμπρόσθιο μέρος της καρίνας με μήκος περίπου ένα μέτρο βυθισμένο στο νερό κατάλληλο για να πλήξει τα αντίπαλα πλοία χάρη στην ώθηση που δίνουν στο πλοίο οι κωπηλάτες. Η εργασία κατασκευής και προσαρμογής του ήταν ιδιαίτερα απαιτητική. Εάν λάβουμε υπόψη μας μεταγενέστερα παραδείγματα από τον 4ο αιώνα π.Χ., πρόκειται για ένα συμπαγές χυτό κομμάτι ορείχαλκου βάρους τουλάχιστον 80 κιλών. Στο μπροστινό μέρος είχε τρεις βαθμιδωτές απολήξεις για μπορεί να διαπεράσει αποτελεσματικότερα το κύτος του εχθρικού πλοίου ενώ στο πίσω κοίλο μέρος του εισάγονταν τα άκρα των πρώτων ξύλων του πλοίου, έτσι ώστε η ενέργεια από το τράνταγμα να κατανέμεται στη μέγιστη δυνατή μάζα του κύτους.",
    desc_en:
      "The main offensive instrument of the ship, ie a long piece of metal at the front of the keel with a length of about one meter immersed in water suitable to hit the opposing ships thanks to the impetus given to the ship by the rowers. Its construction and adaptation work was very demanding. If we take into account later examples from the 4th century BC, it is a solid cast piece of brass weighing at least 80 kg. At the front it had three stepped ends so that it could penetrate more effectively the hull of the enemy ship while at the rear hollow part the ends of the first woods of the ship were inserted, so that the energy from the jolt is distributed to the maximum possible mass of the hull.",
  },
  {
    title_el: "Ακροστόλιον",
    goTo: "Akrostolion",
    title_en: "Akrostolion",
    desc_el:
      "Το σύνολο του στολισμού ενός πλοίου. Κατα μία ερμηνεία, ξεκινούσε από την εξέδρα της πρύμνης με το άφλαστον (βλ. λέξη) και με ένα ξύλο κατά μήκος του οποίου γραφόταν το όνομα του πλοίου έφτανε στην εξέδρα της πλώρης και κατέληγε στο ακρωτήριο και την εξέδρα της πλώρης (βλ. λέξη)",
    desc_en:
      "The whole decoration of a ship. According to one interpretation, it started from the stern platform with the aflaston (see word) and with a stick along which the name of the ship was written, it reached the bow platform and ended at the cape and the bow platform (see word)",
  },
  {
    title_el: "Άφλαστον",
    goTo: "Alfaston",
    title_en: "Aflaston",
    desc_el:
      "Το σημείο όπου στηρίζεται η σημαία του πλοίου. Αυτή χρησίμευε σε πρακτικούς σκοπούς - επικοινωνία μεταξύ των πλοίων ή είχε αναγνωριστική σημασία. Το σύμβολο που επέλεγε ο τριήραρχος αντιπροσώπευε το πλοίο, όπως τα επίσημα στις ασπίδες των οπλιτών. Μία μεγάλη καμπύλη προστάτευε την πρύμνη και είχε μεταλλικές σκαλισμένες απολήξεις. Αποτελούσε μέρος του ακροστολίου.",
    desc_en:
      "The point where the ship's flag rests. It was used for practical purposes - communication between ships or was of reconnaissance importance. The symbol chosen by the treirarch represented the ship, like the official ones on the shields of the hoplites. A large curve protected the stern and had carved metal ends. It was part of the acropolis.",
  },
  {
    title_el: "Εξέδρα Πρύμνης",
    goTo: "Primni",
    title_en: "Stern Podium",
    desc_el:
      "Το πίσω μέρος του πλοίου όπου βρίσκονται ο τριήραρχος και ο πηδαλιούχος. Αποτελούσε τον εγκέφαλο του πλοίου, καθώς ο διοικητής και ο πλοηγός του πλοίου ήταν εκεί. Για τον λόγο αυτό περιστοιχιζόνταν από επιβάτες για την προστασία τους.",
    desc_en:
      "The rear of the ship where the hierarch and the helmsman are. It was the brain of the ship, as the ship's commander and navigator were there. For this reason they were surrounded by passengers for their protection.",
  },
  {
    goTo: "Plori",
    title_el: "Εξέδρα πλώρης",
    title_en: "Bow platform",
    desc_el:
      "Βρίσκοταν πάνω από έμβολο. Εκεί συγκεντρώνονταν οι επιβάτες προκειμένου να εφορμήσουν στο εχθρικό πλοίο. Στην πρόσοψή της υπήρχαν ζωγραφισμένα ή ένθετα μάτια, που έκαναν την τριήρη να μοιάζει με θαλάσσιο τέρας, ζητώντας ταυτόχρονα και τη βοήθεια των θεών. Στο σημείο αυτό βρισκόταν και η άγκυρα του πλοίου. Η εξέδρα έκλεινε με το ακρωτήριον του πλοίου, το οποίο τη στόλιζε και ταυτόχρονα στεκόταν εμπόδιο σε εχθρική επιβίβαση.",
    desc_en:
      "It was above the ram. There the passengers gathered to rush to the enemy ship. On its front there were painted or inset eyes, which made the trireme look like a sea monster, at the same time asking for the help of the gods. The anchor of the ship was at this point. The platform closed with the cape of the ship, which adorned it and at the same time stood an obstacle to enemy boarding.",
  },
  {
    goTo: "Epivatai",
    title_el: "Επιβάται",
    title_en: "Epibatai",
    desc_el:
      "Οι μάχιμοι πεζικάριοι που φυλάνε το πλοίο σε περίπτωση εχθρικής επίθεσης ή αποβιβάζονται προκειμένου να πολεμήσουν ως πεζικό. Κατά την περίοδο των περσικών πολέμων οι περσικές τριήρεις διέθεταν μεγάλα αποσπάσματα επιβατών, καθώς οι Πέρσες δεν ήταν ναυτικός λαός. Τα πολυάριθμα πλοία ήταν επανδρωμένα με υποτελείς ναυτικούς λαούς, Αιγυπτίους, Φοίνικες, Έλληνες. Οι επιβάτες διασφάλιζαν την αφοσίωση των πληρωμάτων. Μοιραία λοιπόν εξίσου πολυάριθμα θα πρέπει να ήταν και τα αποσπάσματα επιβατών στις τριήρεις των Ελλήνων.",
    desc_en:
      "Combat infantry guarding the ship in the event of an enemy attack or disembarking to fight as an infantryman. During the Persian Wars the Persian triremes had large numbers of passengers, as the Persians were not a naval people. The numerous ships were manned by subordinate naval peoples, Egyptians, Phoenicians, Greeks. The passengers ensured the loyalty of the crews. So the passenger detachments in the triremes of the Greeks must have been just as fatally numerous.",
  },
  {
    goTo: "Triirarxos",
    title_el: "Τριήραρχος",
    title_en: "Trierarchos",
    desc_el:
      "Ο διοικητής και ιδιοκτήτης της τριήρους. Όταν ο Θεμιστοκλής έφτιαξε τις πρώτες τριήρεις χρησιμοποιώντας τα αποθέματα αργύρου στο Λαύριο, έδωσε σε κάποιους από τους πιο πλούσιους πολίτες από ένα τάλαντο (6.000 δραχμές) από το κρατικό ταμείο προκειμένου να ναυπηγήσουν ο καθένας από μία τρήρη, συμπληρώνοντας τα έξοδα και τη συντήρηση του πλοίου. Κατά την κλασική περίοδο η τριηραχία έγινε μια από τις λειτουργίες του αθηναϊκού κράτους. Ο τριήραρχος επωμιζόταν τη δαπάνη κατασκευής και συντήρησης μίας τριήρους της οποίας ήταν και διοικητής.",
    desc_en:
      "The commander and owner of the trireme. When Themistocles built the first triremes using the silver reserves in Lavrio, he gave to some of the richest citizens a talent (6,000 drachmas) from the state treasury in order for each of them to build a trirem, supplementing the expenses and the maintenance of the ship. . During the classical period, trinity became one of the functions of the Athenian state. The trireme was shouldering the cost of construction and maintenance of a trireme of which he was also the commander.",
  },
  {
    title_el: "Πηδαλιούχος",
    goTo: "pidaliouxos",
    title_en: "Helmsman",
    desc_el:
      "Ο οδηγός του πλοίου. Ως πηδάλιο οι τριήρεις είχαν δύο μεγάλα και πλατιά κουπιά, τοποθετημένα εκατέρωθεν στην πρύμνη, που τα χειριζόταν για να στρέψει το πλοίο ο εμπειρος και άξιος ως προς τα ναυτικά πηδαλιούχος.",
    desc_en: `The helmsman/navigator of the ship. As a rudder the triremes had two large and wide oars, placed on either side of the stern, which were operated to turn the ship by the experienced and worthy naval rudder.`,
  },
  {
    title_el: "Κωπηλάτες",
    goTo: "kwpilates",
    title_en: "Rowers",
    desc_el: `Η κινητήρια δύναμη του πλοίου. Είναι τοποθετημένοι σε τρεις σειρές: επάνω οι θρανίτες στη μέση οι ζυγίτες και στο κάτω μέρος οι θαλαμίτες. Η συντονισμένη κίνησή τους κάνει την τριήρη ένα αποτελεσματικό και επικίνδυνο όπλο. Ο Αριστοτέλης, τη χαρακτήρισε «κωπηλατική μηχανή». Είχε 170 κουπιά. Αυτό επιτυγχανόταν με την κατάλληλη διάταξη των σειρών των κουπιών, σε τρία διαφορετικά επίπεδα, αλλά, σχετικά, κοντά μεταξύ τους, για να αποφευχθεί το υπερβολικό μήκος κουπιών για το ανώτατο επίπεδο. Συγκεκριμένα:\n
- Η πιο κάτω σειρά, των 54 θαλαμίων κάθονταν σε ένα επίπεδο λίγο πάνω από την ίσαλο γραμμή.\n
- Η δεύτερη σειρά, των 54 ζυγίων κάθονταν σε ένα επίπεδο που βρίσκονταν πάνω από το προηγούμενο, στο μέσο ύψος των ώμων των θαλάμιων.\n
- Η τελευταία σειρά των 62 θρανιτών βρίσκονταν ένα επίπεδο πάνω και έξω από το προηγούμενο και, πάλι, στο μέσο ύψος των ώμων των ζυγίων.\n
Τα κουπιά διέφεραν από κατηγορία σε κατηγορία, αλλά είχαν το ίδιο μήκος: 4,2 - 4,4 μέτρα. Η διαφορά ήταν στη γωνία που σχημάτιζαν με το επίπεδο της θάλασσας. Τα κουπιά των θαλαμίων έπεφταν, σχεδόν, οριζόντια, αφού ήταν πολύ κοντά στο νερό, ενώ εκείνα των θρανιτών τοποθετούνταν, σχεδόν, κάθετα. Η ξυλεία που χρησιμοποιούνταν για τα κουπιά ήταν το πεύκο. Το πεύκο χρησιμοποιούνταν και για τη ναυπήγηση του υπόλοιπου πλοίου εκτός από τα κατάρτια που χρησιμοποιούνταν το κυπαρίσσι. Ο τρόπος ναυπήγησης ήταν η κατασκευή του πετσώματος της γάστρας πρώτα και στη συνέχεια η τοποθέτηση των νομέων (σκελετού). Μέθοδος που εγκαταλείφτηκε από τον 11ο αι μ.Χ. Σύμφωνα με πρόσφατες αρχαιολογικές έρευνες, τα πιο κατάλληλα ξύλα ήταν το έλατο και η δασική πεύκη της Μακεδονίας, από τον Όλυμπο και τα Πιέρια, με κύριο διαμετακομιστικό κέντρο την αρχαία Μεθώνη. Αυτά θεωρούνταν τα πλέον ανθεκτικά ξύλα στη θαλάσσια διάβρωση που σε ελαφρύ ξύλο ήταν αναπόφευκτη για τον συγκεκριμένο τύπο πλοίου.`,
    desc_en: `The driving force of the ship. They are placed in three rows: at the top the granites in the middle the scales and at the bottom the chambers. Their coordinated movement makes the trireme an effective and dangerous weapon. Aristotle described it as a "rowing machine". It had 170 oars. This was achieved by properly arranging the rows of oars, at three different levels, but relatively close together, to avoid excessive oar length for the top level. Specifically:\n
- The lower row, of 54 chambers, sat on a level just above the waterline.\n
- The second row, of 54 scales, sat at a level above the previous one, at the average height of the shoulders of the cabins.\n
- The last row of 62 thranites was one level above and beyond the previous one and, again, at the average height of the scales shoulders.\n
The oars differed from category to category, but had the same length: 4.2 - 4.4 meters. The difference was in the angle they formed with the sea level. The oars of the booths fell, almost, horizontally, since they were very close to the water, while those of the thranites were placed almost vertically. The timber used for the oars was pine. The pine was also used for the construction of the rest of the ship, apart from the masts used for the cypress. The way of construction was the construction of the skin of the hull first and then the placement of the prefectures (skeleton). Method abandoned from the 11th century AD. According to recent archaeological research, the most suitable woods were the fir and forest pine of Macedonia, from Olympus and Pieria, with the main transit center being ancient Methoni. These were considered the most resistant woods to marine erosion which in light wood was inevitable for this type of ship.
`,
  },
  {
    title_el: "Ιστία",
    goTo: "Istia",
    title_en: "Sails",
    desc_el:
      "Πέραν του συστήματος προώθησης μέσω της κωπηλασίας, η τριήρης διέθετε και ένα σύστημα ιστίων. Ως πολεμικό πλοίο, ήταν κατασκευασμένη για να έχει ως κύριο μέσον πρόωσης, τα κουπιά (τα κωπία) και βοηθητικά τα ιστία (πανιά) που κατά κανόνα ήταν τετράγωνα ή, περισσότερο, τραπεζοειδή εκ των οποίων το κυριότερο φέρονταν επί κεραίας στον μεγάλο ιστό (κατάρτι) που ήταν στο μέσον του σκάφους, ενώ, το μικρότερο φέρονταν σε κεκλιμένο ιστό πρώραθεν του κυρίου που ονομαζόταν «ακάτιος». Τα πανιά αυτά χρησιμοποιούνταν μόνο και εφόσον έπνεε «ούριος άνεμος», δηλαδή, με κατεύθυνση από την πρύμνη προς την πλώρη, ή από το ισχίο του σκάφους. Ήταν, δε, τελείως ακατάλληλα για πλεύση «κατά την εγγυτάτην», κοινώς, «όρτσα» ή σε πλαγιοδρομία. Υπήρχαν, ακόμη, δύο ειδών ιστία: τα μεγάλα, που χρησιμοποιούνταν για μεγάλες πλεύσεις και τα μικρά, που χρησιμοποιούνταν όταν ο άνεμος ήταν ισχυρός και ως βοηθητικά στις ναυμαχίες, κατά τις οποίες τα μεγάλα ήταν πάντα διπλωμένα ή είχαν αφαιρεθεί προηγουμένως.",
    desc_en: `In addition to the rowing propulsion system, the trireme also had a sailing system. As a warship, it was built to have as its main means of propulsion, the oars and auxiliary sails which were usually square or, more, trapezoidal, the main one of which was carried on an antenna in the large mast  which was in the middle of the boat, while, the smallest was carried on a sloping mast in front of the master called "akatios". These sails were used only if there was a "strong wind", that is, in the direction from the stern to the bow, or from the hip of the boat. It was, however, completely unsuitable for voyage "in the vicinity", commonly, "ortsa" or in rafting. There were also two types of sails: the large ones, used for large voyages and the small ones, used when the wind was strong and as aids in naval battles, in which the large ones were always folded or removed beforehand.`,
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
