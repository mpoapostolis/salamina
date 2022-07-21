import React, { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const items: Record<string, string>[] = [
  {
    title_el: "Τριήρης: Η ιστορική της εξέλιξη",
    title_en: "",
    goTo: "Start",
    desc_el: `Ο συγκεκριμένος τύπος πλοίου φαίνεται ότι εμφανίστηκε στην ευρύτερη ανατολική μεσόγειο κατά το τελευταίο τέταρτο του 8ου αιώνα π.Χ. Στη ναυσιπλοΐα περίπου κατά το 1.200 π.Χ. υπήρχε ένας βασικός διαχωρισμός στους τύπους πλοίων τόσο στα δεδομένα των ανατολικών λαών όσο και των Ελλήνων. Τα εμπορικά πλοία με κοίλο εσωτερικό και τα μακρά πλοία, πιο στενά για πολεμική χρήση. Τα μακρά πλοία διέθεταν μία σειρά 20 κουπιών και στην ουσία χρησίμευαν για τη μεταφορά στρατευμάτων. Περίπου μετά το 760 π.Χ. σημειώνονται μία σειρά από τεχνικές εξελίξεις. Τα μακρά πλοία πλέον αποκτούν καταστρώματα και έμβολο, δηλαδή ένα μακρύ κομμάτι μέταλλο στο εμπρόσθιο μέρος της καρίνας βυθισμένο στο νερό κατάλληλο για να πλήξει τα αντίπαλα πλοία χάρη στην ώθηση που δίνουν στο πλοίο οι κωπηλάτες. Μετά από μία μεταβατική περίοδο όπου εμφανίζονται πλοία με 30 κουπιά, προς το τέλος του 8ου αιώνα εμφανίζεται η πεντηκόντορος. Ένα πλοίο με κατάστρωμα, έμβολο και 50 κουπιά σε δύο σειρές. Κατασκευαστικά, λόγω της χρήσης του εμβόλου, η πλώρη των πλοίων γίνεται πλέον πιο ενισχυμένη και συμπαγής. Με τον τρόπο αυτό αντέχει στο χτύπημα του εμβόλου από την ορμή που δίνουν οι πενήντα κωπηλάτες. Μετά την εμπλοκή των πλοίων, η συμπλοκή κρίνεται πλέον από τη σύγκρουση των επιβατών, δηλαδή των στρατιωτών που επιβαίνουν στα πλοία.\n
Όσο προχωρούμε στο 7ο και 6ο αιώνα π.Χ., η ανάγκη για βελτίωση της παραπάνω τεχνικής ναυτικής σύγκρουσης, οδηγεί στη σταδιακή εμφάνιση της τριήρους. Δηλαδή στην εμφάνιση ενός πλοίου με τρεις πλέον σειρές κουπιών. Πρόκειται πλέον για ένα πλοίο που, στη μορφή η οποία επικράτησε στα ελληνικά δεδομένα, είχε μήκος 35 μέτρα, πλάτος 5 μέτρα, βύθισμα λιγότερο από δύο μέτρα, βάρος 25 τόνους και ταχύτητα κρούσης περίπου 8 ναυτικά μίλια. Προκειμένου το πολεμικό πλοίο να αποκτήσει μεγαλύτερη ώθηση ώστε ο εμβολισμός να γίνει πιο αποτελεσματικός, θα έπρεπε να υπάρξουν περισσότεροι κωπηλάτες. Το πλοίο δεν μπορούσε να επιμηκυνθεί περισσότερο. Επομένως στις δύο σειρές κουπιών προστέθηκε μία ακόμη επιπλέον σειρά στο επάνω μέρος. Το πλοίο πλέον γίνεται πιο ψηλό. Η κατώτερη σειρά κωπηλατών οι θαλαμίτες αριθμεί 27 κωπηλάτες σε κάθε πλευρά. Η δεύτερη σειρά κωπηλατών οι ζυγίτες αριθμεί επίσης 27 κωπηλάτες σε κάθε πλευρά. Τέλος πάνω από αυτούς και ακριβώς κάτω από το κατάστρωμα τοποθετείται η τρίτη υπερκείμενη σειρά από τους θρανίτες, 31 σε κάθε πλευρά. Με τον τρόπο αυτό η δύναμη των κωπηλατών ανέρχεται στους 170. Μαζί τους επιβαίνουν στο πλοίο 30 ακόμη άτομα. Ανάλογα με την εποχή, το πλήρωμα κυμαινόταν σε δέκα άτομα, ενώ οι υπόλοιποι ήταν συνήθως επιβάτες, δηλαδή στρατιωτικό απόσπασμα επιφορτισμένο με την προστασία του πλοίου από εχθρική επίθεση ή να επιτεθεί το ίδιο στο εχθρικό πλοίο σε περίπτωση εμπλοκής. Σε κάθε περίπτωση, το πλοίο όφειλε να είναι κατά το δυνατόν ελαφρότερο, για τον λόγο αυτό δεν χρησιμοποιούνταν ιστία κατά τη διάρκεια της μάχης. Η τριήρης δεν είχε λοιπόν μεγάλη αυτονομία στην ανοιχτή θάλασσα, καθώς και πάλι για λόγους βάρους δεν μετέφερε πολλές προμήθειες. Τέλος και πάλι προκειμένου το πλοίο να είναι ελαφρό κατασκευαζόταν από ελαφρύ ξύλο, όπως έλατο. Το ξύλο όμως διαβρωνόταν από το θαλασσινό νερό και επομένως η τριήρης έπρεπε να περνάει όσο το δυνατόν λιγότερο χρόνο μέσα στη θάλασσα και αποσύρεται στην ξηρά για να στεγνώσει το κύτος και να μην χάσει την ευελιξία της. Για αυτόν κυρίως τον λόγο όταν βρισκόταν σε εκστρατεία ένας στόλος έπλεε πάντα παράκτια, ώστε κάθε βράδυ να αποσύρονται τα πλοία στη στεριά για παραμείνουν όσο το δυνατόν περισσότερο στεγνά. Όταν ο στόλος ήταν σε προγραμματισμένη ανάπαυλα, αποσύρονταν σε ειδικές ωπές στον χώρο ελλιμενισμού του, τα νεώρεια, δηλαδή λάκκους με λίθινη επένδυση σκαμένους σε στεγνό έδαφος.\n
Τα στοιχεία για την εξέλιξη της τριήρους προέρχονται κατά κύριο λόγο από τη χρήση της στην Αθήνα μετά τους περσικούς πολέμους. Η Αθήνα μετά το 480 ανέπτυξε ένα ισχυρό ναυτικό πολεμικό ναυτικό που της επέτρεψε να διεκδικήσει την ηγεμονία της Ελλάδας. Πολλές από τις τεχνικές μάχης που εφαρμόστηκαν αργότερα δεν φαίνεται να ανταποκρίνονται στην περίοδο πριν και κατά τη διάρκεια των περσικών πολέμων. Το αθηναϊκό ναυτικό βασιζόταν στην ελαφρότητα των πλοίων και στην εκμετάλλευση των τεχνικών εμβολισμού των εχθρικών πλοίων. Αυτές ήταν ο περίπλους, δηλαδή η πλεύση γύρω από τα εχθρικά πλοία σε όλο και μικρότερη διάμετρο κύκλου και η αναμονή για ένα ευαίσθητο σημείο για εμβολισμό λόγω της αναστάτωσης από τον συνωστισμό, και ο διέκπλους, δηλαδή η απευθείας επίθεση σε δύο σειρές, καθώς η πρώτη σειρά είναι ευάλωτη μετά τον εμβολισμό του αντίπαλου πλοίου όταν προσπαθεί να αποσύρει το έμβολο και χρειάζεται την κάλυψη της δεύτερης σειράς. Αυτές οι τακτικές απαιτούν το πλοίο να είναι ελαφρό, επομένως ο αριθμός των επιβατών στις αθηναϊκές τριήρεις ήταν μικρός, περίπου 10 οπλίτες και 4 τοξότες.\n
Την περίοδο όμως των περσικών πολέμων οι τακτικές αυτές δεν είχαν αναπτυχθεί πλήρως. Η τριήρης πιθανώς ως τύπος πολεμικού πλοίου σε μεγάλους αριθμούς αναπτύχθηκε στα πρώτα της στάδια στο πολεμικό ναυτικό της Αιγύπτου και της Φοινίκης κατά τις αρχές του 7ου αιώνα. Μετά τις κατακτήσεις του Κύρου και του Καμβύση δηλαδή μετά το 525 π.Χ., οι Πέρσες μην όντας οι ίδιοι ναυτικός λαός, δημιούργησαν ένα ναυτικό με τριήρεις πιθανώς ιδιοκτησίας του βασιλέα, τις οποίες επάνδρωναν οι ναυτικοί λαοί της αυτοκρατορίας όπως οι Φοίνικες, οι Αιγύπτιοι και οι Έλληνες Ίωνες, υπό την επιτήρηση μεγάλων αποσπασμάτων επιβατών 30 ατόμων αποτελούμενα από Πέρσες, Μήδους, Σάκες και Σκύθες. Περίπου από το 485 π.Χ., όταν πλέον η τριήρης άρχισε να επικρατεί έναντι των προηγούμενων τύπων πολεμικών πλοίων στο βασιλικό ναυτικό της Περσίας, άρχισε να κατασκευάζεται πλέον σε μεγάλους αριθμούς και από τις ελληνικές πόλεις, προκειμένου αυτές να προετοιμαστούν για την επερχόμενη σύγκρουση. Επομένως είναι πιθανόν κατά τις ναυμαχίες στους περσικούς πολέμους τα ελληνικά πλοία να είχαν επίσης μεγάλους αριθμούς επιβατών, γύρω στους 30 με 40.`,
    desc_en: "",
  },
  {
    title_el: "Έμβολο",
    goTo: "Embolo",
    title_en: "",
    desc_el:
      "Το κυρίως επιθετικό όργανο του πλοίου, δηλαδή ένα μακρύ κομμάτι μέταλλο στο εμπρόσθιο μέρος της καρίνας με μήκος περίπου ένα μέτρο βυθισμένο στο νερό κατάλληλο για να πλήξει τα αντίπαλα πλοία χάρη στην ώθηση που δίνουν στο πλοίο οι κωπηλάτες. Η εργασία κατασκευής και προσαρμογής του ήταν ιδιαίτερα απαιτητική. Εάν λάβουμε υπόψη μας μεταγενέστερα παραδείγματα από τον 4ο αιώνα π.Χ., πρόκειται για ένα συμπαγές χυτό κομμάτι ορείχαλκου βάρους τουλάχιστον 80 κιλών. Στο μπροστινό μέρος είχε τρεις βαθμιδωτές απολήξεις για μπορεί να διαπεράσει αποτελεσματικότερα το κύτος του εχθρικού πλοίου ενώ στο πίσω κοίλο μέρος του εισάγονταν τα άκρα των πρώτων ξύλων του πλοίου, έτσι ώστε η ενέργεια από το τράνταγμα να κατανέμεται στη μέγιστη δυνατή μάζα του κύτους.",
    desc_en: "",
  },
  {
    title_el: "Ακροστόλιον",
    goTo: "Akrostolion",
    title_en: "",
    desc_el:
      "Το σύνολο του στολισμού ενός πλοίου. Κατα μία ερμηνεία, ξεκινούσε από την εξέδρα της πρύμνης με το άφλαστον (βλ. λέξη) και με ένα ξύλο κατά μήκος του οποίου γραφόταν το όνομα του πλοίου έφτανε στην εξέδρα της πλώρης και κατέληγε στο ακρωτήριο και την εξέδρα της πλώρης (βλ. λέξη)",
    desc_en: "",
  },
  {
    title_el: "Άφλαστον",
    goTo: "Alfaston",

    title_en: "",
    desc_el:
      "Το σημείο όπου στηρίζεται η σημαία του πλοίου. Αυτή χρησίμευε σε πρακτικούς σκοπούς - επικοινωνία μεταξύ των πλοίων ή είχε αναγνωριστική σημασία. Το σύμβολο που επέλεγε ο τριήραρχος αντιπροσώπευε το πλοίο, όπως τα επίσημα στις ασπίδες των οπλιτών. Μία μεγάλη καμπύλη προστάτευε την πρύμνη και είχε μεταλλικές σκαλισμένες απολήξεις. Αποτελούσε μέρος του ακροστολίου.",
    desc_en: "",
  },
  {
    title_el: "Εξέδρα Πρύμνης",
    goTo: "Primni",

    title_en: "",
    desc_el:
      "Το πίσω μέρος του πλοίου όπου βρίσκονται ο τριήραρχος και ο πηδαλιούχος. Αποτελούσε τον εγκέφαλο του πλοίου, καθώς ο διοικητής και ο πλοηγός του πλοίου ήταν εκεί. Για τον λόγο αυτό περιστοιχιζόνταν από επιβάτες για την προστασία τους.",
    desc_en: "",
  },
  {
    title_el: "Εξέδρα πλώρης",
    goTo: "Plori",

    title_en: "",
    desc_el:
      "Βρίσκοταν πάνω από έμβολο. Εκεί συγκεντρώνονταν οι επιβάτες προκειμένου να εφορμήσουν στο εχθρικό πλοίο. Στην πρόσοψή της υπήρχαν ζωγραφισμένα ή ένθετα μάτια, που έκαναν την τριήρη να μοιάζει με θαλάσσιο τέρας, ζητώντας ταυτόχρονα και τη βοήθεια των θεών. Στο σημείο αυτό βρισκόταν και η άγκυρα του πλοίου. Η εξέδρα έκλεινε με το ακρωτήριον του πλοίου, το οποίο τη στόλιζε και ταυτόχρονα στεκόταν εμπόδιο σε εχθρική επιβίβαση.",
    desc_en: "",
  },
  {
    title_el: "Επιβάται",
    goTo: "Epivatai",

    title_en: "",
    desc_el:
      "Οι μάχιμοι πεζικάριοι που φυλάνε το πλοίο σε περίπτωση εχθρικής επίθεσης ή αποβιβάζονται προκειμένου να πολεμήσουν ως πεζικό. Κατά την περίοδο των περσικών πολέμων οι περσικές τριήρεις διέθεταν μεγάλα αποσπάσματα επιβατών, καθώς οι Πέρσες δεν ήταν ναυτικός λαός. Τα πολυάριθμα πλοία ήταν επανδρωμένα με υποτελείς ναυτικούς λαούς, Αιγυπτίους, Φοίνικες, Έλληνες. Οι επιβάτες διασφάλιζαν την αφοσίωση των πληρωμάτων. Μοιραία λοιπόν εξίσου πολυάριθμα θα πρέπει να ήταν και τα αποσπάσματα επιβατών στις τριήρεις των Ελλήνων.",
    desc_en: "",
  },
  {
    title_el: "Τριήραρχος",
    goTo: "Triirarxos",

    title_en: "",
    desc_el:
      "Ο διοικητής και ιδιοκτήτης της τριήρους. Όταν ο Θεμιστοκλής έφτιαξε τις πρώτες τριήρεις χρησιμοποιώντας τα αποθέματα αργύρου στο Λαύριο, έδωσε σε κάποιους από τους πιο πλούσιους πολίτες από ένα τάλαντο (6.000 δραχμές) από το κρατικό ταμείο προκειμένου να ναυπηγήσουν ο καθένας από μία τρήρη, συμπληρώνοντας τα έξοδα και τη συντήρηση του πλοίου. Κατά την κλασική περίοδο η τριηραχία έγινε μια από τις λειτουργίες του αθηναϊκού κράτους. Ο τριήραρχος επωμιζόταν τη δαπάνη κατασκευής και συντήρησης μίας τριήρους της οποίας ήταν και διοικητής.",
    desc_en: "",
  },
  {
    title_el: "Πηδαλιούχος",
    goTo: "pidaliouxos",

    title_en: "",
    desc_el:
      "Ο οδηγός του πλοίου. Ως πηδάλιο οι τριήρεις είχαν δύο μεγάλα και πλατιά κουπιά, τοποθετημένα εκατέρωθεν στην πρύμνη, που τα χειριζόταν για να στρέψει το πλοίο ο εμπειρος και άξιος ως προς τα ναυτικά πηδαλιούχος.",
    desc_en: "",
  },
  {
    title_el: "Κωπηλάτες",
    goTo: "kwpilates",

    title_en: "",
    desc_el: `Η κινητήρια δύναμη του πλοίου. Είναι τοποθετημένοι σε τρεις σειρές: επάνω οι θρανίτες στη μέση οι ζυγίτες και στο κάτω μέρος οι θαλαμίτες. Η συντονισμένη κίνησή τους κάνει την τριήρη ένα αποτελεσματικό και επικίνδυνο όπλο. Ο Αριστοτέλης, τη χαρακτήρισε «κωπηλατική μηχανή». Είχε 170 κουπιά. Αυτό επιτυγχανόταν με την κατάλληλη διάταξη των σειρών των κουπιών, σε τρία διαφορετικά επίπεδα, αλλά, σχετικά, κοντά μεταξύ τους, για να αποφευχθεί το υπερβολικό μήκος κουπιών για το ανώτατο επίπεδο. Συγκεκριμένα:\n
  - Η πιο κάτω σειρά, των 54 θαλαμίων κάθονταν σε ένα επίπεδο λίγο πάνω από την ίσαλο γραμμή.\n
  - Η δεύτερη σειρά, των 54 ζυγίων κάθονταν σε ένα επίπεδο που βρίσκονταν πάνω από το προηγούμενο, στο μέσο ύψος των ώμων των θαλάμιων.\n
  - Η τελευταία σειρά των 62 θρανιτών βρίσκονταν ένα επίπεδο πάνω και έξω από το προηγούμενο και, πάλι, στο μέσο ύψος των ώμων των ζυγίων.\n
    Τα κουπιά διέφεραν από κατηγορία σε κατηγορία, αλλά είχαν το ίδιο μήκος: 4,2 - 4,4 μέτρα. Η διαφορά ήταν στη γωνία που σχημάτιζαν με το επίπεδο της θάλασσας. Τα κουπιά των θαλαμίων έπεφταν, σχεδόν, οριζόντια, αφού ήταν πολύ κοντά στο νερό, ενώ εκείνα των θρανιτών τοποθετούνταν, σχεδόν, κάθετα. Η ξυλεία που χρησιμοποιούνταν για τα κουπιά ήταν το πεύκο. Το πεύκο χρησιμοποιούνταν και για τη ναυπήγηση του υπόλοιπου πλοίου εκτός από τα κατάρτια που χρησιμοποιούνταν το κυπαρίσσι. Ο τρόπος ναυπήγησης ήταν η κατασκευή του πετσώματος της γάστρας πρώτα και στη συνέχεια η τοποθέτηση των νομέων (σκελετού). Μέθοδος που εγκαταλείφτηκε από τον 11ο αι μ.Χ. Σύμφωνα με πρόσφατες αρχαιολογικές έρευνες, τα πιο κατάλληλα ξύλα ήταν το έλατο και η δασική πεύκη της Μακεδονίας, από τον Όλυμπο και τα Πιέρια, με κύριο διαμετακομιστικό κέντρο την αρχαία Μεθώνη. Αυτά θεωρούνταν τα πλέον ανθεκτικά ξύλα στη θαλάσσια διάβρωση που σε ελαφρύ ξύλο ήταν αναπόφευκτη για τον συγκεκριμένο τύπο πλοίου.`,
    desc_en: "",
  },
  {
    title_el: "Ιστία",
    goTo: "Istia",

    title_en: "",
    desc_el:
      "Πέραν του συστήματος προώθησης μέσω της κωπηλασίας, η τριήρης διέθετε και ένα σύστημα ιστίων. Ως πολεμικό πλοίο, ήταν κατασκευασμένη για να έχει ως κύριο μέσον πρόωσης, τα κουπιά (τα κωπία) και βοηθητικά τα ιστία (πανιά) που κατά κανόνα ήταν τετράγωνα ή, περισσότερο, τραπεζοειδή εκ των οποίων το κυριότερο φέρονταν επί κεραίας στον μεγάλο ιστό (κατάρτι) που ήταν στο μέσον του σκάφους, ενώ, το μικρότερο φέρονταν σε κεκλιμένο ιστό πρώραθεν του κυρίου που ονομαζόταν «ακάτιος». Τα πανιά αυτά χρησιμοποιούνταν μόνο και εφόσον έπνεε «ούριος άνεμος», δηλαδή, με κατεύθυνση από την πρύμνη προς την πλώρη, ή από το ισχίο του σκάφους. Ήταν, δε, τελείως ακατάλληλα για πλεύση «κατά την εγγυτάτην», κοινώς, «όρτσα» ή σε πλαγιοδρομία. Υπήρχαν, ακόμη, δύο ειδών ιστία: τα μεγάλα, που χρησιμοποιούνταν για μεγάλες πλεύσεις και τα μικρά, που χρησιμοποιούνταν όταν ο άνεμος ήταν ισχυρός και ως βοηθητικά στις ναυμαχίες, κατά τις οποίες τα μεγάλα ήταν πάντα διπλωμένα ή είχαν αφαιρεθεί προηγουμένως.",
    desc_en: "",
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

export default function Page() {
  const { isLoaded, sendMessage, loadingProgression, unityProvider } =
    useUnityContext({
      streamingAssetsUrl: "https://tracker.appoploo.com/",
      loaderUrl: "/unity/salamina.loader.js",
      // dataUrl: "/bucket/salamina.data",
      dataUrl: "/unity/salamina.data",
      frameworkUrl: "/unity/salamina.framework.js",
      codeUrl: "/unity/salamina.wasm",
    });

  const { locale } = useRouter();
  const [idx, setIdx] = useState(0);

  function goTo(b: string) {
    sendMessage("Player", "fly", b);
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
}
