import type { NextPage } from "next";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import clsx from "clsx";
import { useState } from "react";

const Card = (props: { onClick: () => void; time: string; desc: string }) => {
  const router = useRouter();
  const isSelected = router.query.period === props.time;

  const lang = router.locale;

  const [time, period] = props.time.split(lang === "el" ? "π.Χ." : "B.C.");

  return (
    <motion.button
      transition={{ duration: 0.6 }}
      animate={{
        width: isSelected ? 550 : 80,
      }}
      onClick={props.onClick}
      className={clsx(
        "select-none transition border-r items-center  duration-200 border-white text-white border-opacity-25 relative h-40 hover:bg-cyan-800  hover:text-black  bg-black",
        {
          "bg-cyan-600": isSelected,
        }
      )}
    >
      <div
        className={
          " text-white overflow-hidden w-full p-2 font-black bg-opacity-40 h-full"
        }
      >
        <motion.div
          className={clsx("whitespace-nowrap", {
            "flex w-full justify-center items-center": isSelected,
          })}
          transition={{ duration: 0.45 }}
          animate={{
            rotate: isSelected ? 0 : 90,
            translateY: isSelected ? 0 : 30,
          }}
        >
          <div className={clsx(isSelected ? "text-3xl" : "text-base ")}>
            {time}
            {lang === "el" ? "π.Χ." : "B.C."}
          </div>
          <div className={clsx(isSelected ? "text-xl ml-2 " : "text-xs")}>
            {period.replace("-", "")}
          </div>
        </motion.div>

        {isSelected && (
          <div className="my-2 border-b border border-white border-opacity-5" />
        )}
        <motion.div
          transition={{ duration: 0.6, delay: 0.2 }}
          animate={{
            translateY: isSelected ? 0 : -150,
            opacity: isSelected ? 1 : 0,
          }}
        >
          <div className="whitespace-normal">{props.desc}</div>
        </motion.div>
      </div>
    </motion.button>
  );
};

const timeLine: Record<string, any>[] = [
  {
    title_el: "550 π.Χ.",
    subtitle_el: "Ο Κύρος Β΄ (ο Μέγας)",
    desc_el:
      "Ο Κύρος Β΄ (ο Μέγας) καταλύει το κράτος των Μήδων στους οποίους ο λαός του, οι Πέρσες ήταν υποτελείς, δημιουργώντας ένα ανεξάρτητο βασίλειο.",
    title_en: "550 B.C.",
    subtitle_en: "Cyrus II (the Great)",
    desc_en:
      "Cyrus II (the Great) overthrew the Medes state to which his people, the Persians, were subjects, creating an independent kingdom.",
    img: "1.png",
    Μέγεθος: "316 x 569",
    subtitle1_en: "Cyrus II (the Great)",
  },
  {
    title_el: "547 π.Χ.",
    subtitle_el: "Υποταγή Λυδίας",
    desc_el:
      "Ο Κύρος Β΄ υποτάσσει το βασίλειο της Λυδίας υπό τον βασιλιά Κροίσο, το οποίο βρίσκεται στη δυτική Μικρά Ασία. Μαζί με αυτό, υποτάσσονται στον Πέρση βασιλέα και οι ελληνικές πόλεις των δυτικών παραλίων της Μικράς Ασίας, κτήσεις προηγουμένως της Λυδίας. Μαζί με αυτές υποτάσσονται τα νησιά του Αιγαίου στα ανοιχτά της μικρασιατικής παραλίας και η Φοινίκη.",
    title_en: "547 B.C.",
    subtitle_en: "Submission of Lydia",
    desc_en:
      "Cyrus II subjugates the kingdom of Lydia under King Croesus, which is located in western Asia Minor. Along with this, the Greek cities of the western coasts of Asia Minor, previously conquered by Lydia, submit to the Persian king. Along with them, the Aegean islands off the coast of Asia Minor and Phοenicia are conquered.",
    img: "2.png",
    Μέγεθος: "421 x 420",
    subtitle1_en: "Submission of Lydia",
  },
  {
    title_el: "540 - 539 π.Χ.",
    subtitle_el: "Κατάλυση Βαβυλώνας",
    desc_el:
      "Ο Κύρος Β΄ καταλύει τη Βαβυλώνα, το τελευταίο μεγάλο ανεξάρτητο βασίλειο της Ανατολής.",
    title_en: "540 - 539 B.C.",
    subtitle_en: "Catalysis of Babylon",
    desc_en:
      "Cyrus II overthrows Babylon, the last great independent kingdom of the East.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "Conquering of Babylon",
  },
  {
    title_el: "538 - 530 π.Χ.",
    subtitle_el: "Ολοκλήρωση της περσικής κατάκτησης",
    desc_el: "Ο Κύρος Β΄ υποτάσσει το σύνολο της υπόλοιπης Ανατολής.",
    title_en: "538 - 530 B.C.",
    subtitle_en: "Completion of the Persian conquest",
    desc_en: "Cyrus II subjugates the rest of the East.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "Completion of the Persian conquest",
  },
  {
    title_el: "529 π.Χ.",
    subtitle_el: "Αλλαγή εξουσίας στην Περσία",
    desc_el: "Θάνατος του Κύρου. Τον διαδέχεται ο γιος του Καμβύσης.",
    title_en: "529 B.C.",
    subtitle_en: "Change of power in Persia",
    desc_en: "Death of Cyrus. He is succeeded by his son Cambyses.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "Change of power in Persia",
  },
  {
    title_el: "525 - 523 π.Χ.",
    subtitle_el: "Η Περσία εξαπλώνεται προς τα δυτικά",
    desc_el:
      "Ο Καμβύσης συνεχίζει τις κατακτήσεις. Η Κύπρος, η Αίγυπτος και η Κυρηναϊκή περνούν στην περσική κυριαρχία.",
    title_en: "525 - 523 B.C.",
    subtitle_en: "Persia spreads to the west",
    desc_en:
      "Cambyses continues the conquests. Cyprus, Egypt and the Cyrenaica came under Persian rule.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "Persia spreads to the west",
  },
  {
    title_el: "522 π.Χ.",
    subtitle_el: "Αναταραχές στην περσική αυτοκρατορία",
    desc_el:
      "Ξαφνικός θάνατος του Καμβύση. Δυναστικές συγκρούσεις και άνοδος του Δαρείου Α΄ στον θρόνο. Παρουσιάζεται ως συγγενής του Κύρου Β΄ μέσω ενός κοινού τους προγόνου, του Αχαιμένη. Από τότε η αυτοκρατορία των Περσών ονομάζεται Αχαιμενιδική.",
    title_en: "522 B.C.",
    subtitle_en: "Riots in the Persian Empire",
    desc_en:
      "Sudden death of Cambyses. Dynasty conflicts and the rise of Darius I to the throne. He is presented as a relative of Cyrus II through a common ancestor, Achaemenis. Since then the Persian Empire is called Achaemenid.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "Riots in the Persian Empire",
  },
  {
    title_el: "513 π.Χ.",
    subtitle_el: "Οι Πέρσες στην Ευρώπη",
    desc_el:
      "Ο Δαρείος Α΄ εκστρατεύει στη Θράκη, όντας ο πρώτος ηγεμόνας της Ανατολής που δραστηριοποιείται στρατιωτικά σε ευρωπαϊκό έδαφος.",
    title_en: "513 B.C.",
    subtitle_en: "The Persians in Europe",
    desc_en:
      "Darius I campaigns in Thrace, being the first ruler of the East to operate militarily on European soil.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "The Persians in Europe",
  },
  {
    title_el: "512 π.Χ.",
    subtitle_el: "Η σατραπεία της Θράκης",
    desc_el:
      "Παρά την υποχώρηση του Δαρείου και την ήττα του στη Σκυθία πέρα από τον Ίστρο (σημ. Δούναβη), δημιουργείται η σατραπεία της Θράκης , την υποταγή όλων των ελληνικών πόλεων της περιοχής ( Βυζάντιο, Χαλκηδόνα Άντανδρο, Λαμπώνιο και τα νησιά Λήμνος και Ίμβρος) αλλά και του βασιλείου της Μακεδονίας. Τα σύνορα της αυτοκρατορίας των Αχαιμενιδών φτάνουν πλέον στον Ίστρο και τον Στρυμόνα.",
    title_en: "512 B.C.",
    subtitle_en: "The satrapy of Thrace",
    desc_en:
      "Despite the retreat of Darius and his defeat in Scythia beyond Istros (Danube), the satrapy of Thrace is created, with the subjugation of all Greek cities in the region (Byzantium, Chalcedon Andros, Lamponio and the islands of Lemnos and Imbros) and the Kingdom of Macedonia. The borders of the Achaemenid Empire now reach Istros and Strymon.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "The satrapy of Thrace",
  },
  {
    title_el: "499 - 494 π.Χ.",
    subtitle_el: "Ιωνική επανάσταση",
    desc_el:
      'Οι ιωνικές ελληνικές πόλεις της δυτικής Μικράς Ασίας εξεγείρονται εναντίον των Περσών. Στη συνδρομή που ζήτησαν από τους Έλληνες της κυρίως Ελλάδας ανταποκρίθηκαν η Αθήνα και Ερέτρια. Το εκστρατευτικό σώμα των Αθηναίων κατάφερε να καταλάβει και να πυρπολήσει τις Σάρδεις, το κέντρο διοίκησης των Περσών στην ευρύτερη περιοχή της Μικράς Ασίας.\nΚατά τον Ηρόδοτο, η αθηναϊκή συμμετοχή στην εξέγερση των Ιώνων υπήρξε η αιτία των Μηδικών πολέμων. Νεότεροι ιστορικοί, ωστόσο, έδωσαν μεγαλύτερη έμφαση στην επεκτατική φιλοδοξία του Μεγάλου Βασιλέα και στην επιθυμία του να αποκλείσει μία νέα εξέγερση, εξουδετερώνοντας τις πόλεις της κυρίως Ελλάδας που βοήθησαν τους Ίωνες. Τελευταία, από ορισμένους μελετητές έχει δοθεί περισσότερη έμφαση στις δολοπλοκίες των Ελλήνων που είχαν καταφύγει στην περσική αυλή και υπέθαλψαν την περσική επιθετικότητα για προσωπικό τους όφελος. Η τελική άρνηση των Αθηναίων και των Σπαρτιατών να δώσουν "γην και ύδωρ" στους πρέσβεις των Περσών προκάλεσε την εισβολή του 490 π.Χ., η οποία κατέληξε στη μάχη του Μαραθώνα.',
    title_en: "499 - 494 B.C.",
    subtitle_en: "Ionian revolution",
    desc_en:
      'The Ionian Greek cities of western Asia Minor revolted against the Persians. To their request for help by the states of mainland Greece only Athens and Eretria responded. The Athenian expedition managed to capture and set fire to Sardis, the center of the Persian rule in the wider region of Asia Minor.\nAccording to Herodotus, the Athenian participation in the revolt of the Ionians was the cause of the Persian wars. Recent historians, however, have placed more emphasis on the expansionist ambition of the Great King and in his desire to rule out a new uprising, neutralizing the cities of mainly Greece that helped the Ionians. Recently, some scholars have placed more emphasis on the intrigues of the Greeks who had taken refuge in the Persian court and fostered Persian aggression for their own benefit. The final refusal of the Athenians and the Spartans to give "land and water" to the Persian ambassadors provoked the invasion of 490 BC, which ended with the battle of Marathon.',
    img: "10.png",
    Μέγεθος: "554 x 384",
    subtitle1_en: "Ionian revolution",
  },
  {
    title_el: "493 π.Χ.",
    subtitle_el: "Το τέλος των αναταραχών",
    desc_el: "Οριστική καταστολή της εξέγερσης από τους Πέρσες.",
    title_en: "493 B.C.",
    subtitle_en: "The end of the unrest",
    desc_en: "Definitive suppression of the revolt by the Persians.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "The end of the unrest",
  },
  {
    title_el: "492 π.Χ.",
    subtitle_el: "Η επανεμφάνιση των Περσών στη Θράκη",
    desc_el:
      "Ο Πέρσης στρατηγός Μαρδόνιος εκστρατεύει στη Θράκη. Αποκαθιστά την περσική εξουσία στη Θάσο και τη Μακεδονία. Όμως ένα μεγάλο μέρος του στόλου του καταστρέφεται από τρικυμία στα ανοιχτά του όρους Άθω και η εκστρατεία τερματίζεται. Ο Αθηναίος τύραννος της Χερσονήσου Μιλτιάδης επιστρέφει στην Αθήνα διωγμένος από τους Πέρσες.",
    title_en: "492 B.C.",
    subtitle_en: "The reappearance of the Persians in Thrace",
    desc_en:
      "The Persian general Mardonius is campaigning in Thrace. Restores Persian rule in Thassos and Macedonia. However, a large part of his fleet is destroyed by a storm off Mount Athos and the campaign ends. The Athenian tyrant of the Hersonissos Miltiades returns to Athens persecuted by the Persians.",
    img: "12.png",
    Μέγεθος: "284 x  224",
    subtitle1_en: "The reappearance of the Persians in Thrace",
  },
  {
    title_el: "491 π.Χ.",
    subtitle_el: "Αρχή του πολέμου",
    desc_el:
      "Ο Δαρείος στελνει απεσταλμένους στις ελληνικές πόλεις ζητώντας υποταγή. Αν και η Αθήνα και η Σπάρτη αρνούνται σθεναρά, άλλες πόλεις, όπως η Αίγινα δέχονται την υποταγή.",
    title_en: "491 B.C.",
    subtitle_en: "Beginning of the war",
    desc_en:
      "Darius sends emissaries to Greek cities asking for submission. Although Athens and Sparta strongly refuse, other cities, such as Aegina, accept submission.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "Beginning of the war",
  },
  {
    title_el: "490 π.Χ. - Άνοιξη",
    subtitle_el: "1ος Μηδικός πόλεμος",
    desc_el:
      "Άνοιξη: Άφιξη του περσικού στόλου στο Αιγαίο πέλαγος υπό τους Δάτη και Αρταφέρνη. Την εκστρατεία συνοδεύει και ο εξόριστος τύραννος των Αθηνών Ιππίας. Ο βασιλέας της Σπάρτης Κλεομένης επεμβαίνει μετά από αίτημα της Αθήνας στην Αίγινα και αποτρέπει την υποταγή της στους Πέρσες.",
    title_en: "490 B.C. - Spring",
    subtitle_en: "1st Persian War",
    desc_en:
      "Spring: Arrival of the Persian fleet in the Aegean Sea under Datis and Artafernis. The campaign is accompanied by the exiled tyrant of Athens Ippias. The king of Sparta, Cleomenes, intervenes at the request of Athens in Aegina and prevents its submission to the Persians.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "1st Persian War",
  },
  {
    title_el: "490 π.Χ. - Καλοκαίρι",
    subtitle_el: "Οι πρώτες περσικές επιτυχίες",
    desc_el:
      "Καλοκαίρι: Ο περσικός στόλος πολιορκεί και καταλαμβάνει τη Νάξο. Δείχνει σεβασμό στο θρησκευτικό κέντρο των Ιώνων, τη Δήλο. Καταλαμβάνει την Κάρυστο. Ακολουθεί η πολιορκία και η κατάληψη μετά από προδοσία της Ερέτριας στην Εύβοια. Ως αντίποινα για τη συμμετοχή της στην Ιωνική Εξέγερση του 499 η πόλη καταστρέφεται.",
    title_en: "490 B.C. - Summer",
    subtitle_en: "The First Persian Successes",
    desc_en:
      "Summer: The Persian fleet besieges and occupies Naxos. It shows respect for the religious center of the Ionians, Delos. Occupies Karystos. The siege and occupation follow after the betrayal of Eretria in Evia. In retaliation for her participation in the Ionian Uprising of 499 the city is destroyed.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "The First Persian Successes",
  },
  {
    title_el: "490 π.Χ. - Σεπτέμβριος",
    subtitle_el: "Μαραθώνας",
    desc_el:
      "Σεπτέμβριος: Περσική απόβαση στον Μαραθώνα και πάλι ως αντίποινα για τη συμμετοχή της Αθήνας στην Ιωνική εξέγερση. Νίκη Αθηναίων και Πλαταιών. Οι Αθηναίοι έχουν ως επικεφαλής στρατηγό τον διωγμένο από την Χερσόνησο Μιλτιάδη. Αποτυχία των Περσών να καταλάβουν το Φάληρο. \nΑπό άποψη στρατηγικής η πεδιάδα του Μαραθώνα, αν και ευνοούσε το περσικό ιππικό, επέτρεπε συγχρόνως και την ανάπτυξη της αθηναϊκής φάλαγγας, που έδωσε στους Έλληνες την τελική νίκη. Μετά την πρώτη επίθεση των Περσών, το κέντρο της παράταξης των Αθηναίων αρχικά υποχώρησε. Οι πλευρικές δυνάμεις, όμως, των Ελλήνων περικύκλωσαν το κέντρο και ανέτρεψαν την αρνητική πορεία της μάχης. Οι Πέρσες προβάλλοντας ισχυρή αντίσταση υποχώρησαν προς την παραλία και αποβιβάστηκαν στα πλοία που απειλούσαν να τα κάψουν οι Έλληνες. Οι Πέρσες παρά τις απώλειές τους κατευθύνθηκαν στο Φάληρο, με σκοπό να αποβιβαστούν, πριν επιστρέψουν οι Αθηναίοι. Καθώς ο Μιλτιάδης, όμως, πρόλαβε να φτάσει στην Αθήνα πριν τη δύση του ηλίου και να παρατάξει το στρατό του στην πεδιάδα του Φαλήρου, ο περσικός στόλος αποχώρησε.",
    title_en: "490 B.C. - September",
    subtitle_en: "Marathon",
    desc_en:
      "September: Persian landing in Marathon again in retaliation for Athens' participation in the Ionian uprising. Victory of Athenians and Plataeans. The Athenians are led by the persecuted Miltiades from Hersonissos. Failure of the Persians to capture Faliro. \nFrom a strategic point of view, the plain of Marathon, although it favored the Persian cavalry, at the same time allowed the development of the Athenian phalanx, which gave the Greeks the final victory. After the first attack of the Persians, the center of the Athenian lining up initially retreated. The Greek side forces, however, surrounded the center and overturned the negative course of the battle. The Persians, showing strong resistance, retreated to the beach and disembarked on the ships that the Greeks threatened to burn. Despite their losses, the Persians headed to Faliro, in order to disembark, before the Athenians returned. As Miltiades, however, managed to reach Athens before sunset and line up his army in the Faliro plain, the Persian fleet withdrew.",
    img: "16.png",
    Μέγεθος: "554 x 649",
    subtitle1_en: "Marathon",
  },
  {
    title_el: "490 π.Χ. - Φθινόπωρο",
    subtitle_el: "Αναδίπλωση των Περσών",
    desc_el: "Φθινόπωρο: Ο περσικός στόλος αποσύρεται από το Αιγαίο.",
    title_en: "490 B.C. - Autumn",
    subtitle_en: "Folding of the Persians",
    desc_en: "Autumn: The Persian fleet withdraws from the Aegean.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "Folding of the Persians",
  },
  {
    title_el: "489 π.Χ.",
    subtitle_el: "Το τέλος της αθηναϊκής αντεπίθεσης",
    desc_el:
      "Ο Μιλτιάδης ως στρατηγός της Αθήνας αποτυγχάνει να καταλάβει την Πάρο.",
    title_en: "489 B.C.",
    subtitle_en: "The end of the Athenian counterattack",
    desc_en: "Miltiadis as general of Athens fails to capture Paros.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "The end of the Athenian counterattack",
  },
  {
    title_el: "486 π.Χ.",
    subtitle_el: "Ένας νέος Μεγάλος Βασιλέας",
    desc_el:
      "Θάνατος του Δαρείου Α΄. Τον διαδέχεται ένας από τους γιους του με το όνομα Ξέρξης Α΄. Αυτός είναι αποφασισμένος να συνεχίσει την πολιτική του πατέρα του.",
    title_en: "486 B.C.",
    subtitle_en: "A new Great King",
    desc_en:
      "Death of Darius I. He is succeeded by one of his sons named Xerxes I. He is determined to continue his father's policy.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "A new Great King",
  },
  {
    title_el: "485 - 481 π.Χ.",
    subtitle_el: "Εσωτερικές εξελίξεις στην Ελλάδα",
    desc_el: "Σύγκρουση της Αθήνας με την Αίγινα.",
    title_en: "485 - 481 B.C.",
    subtitle_en: "Internal developments in Greece",
    desc_en: "Conflict between Athens and Aegina.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "Internal developments in Greece",
  },
  {
    title_el: "483 π.Χ.",
    subtitle_el: "Η ναυτική προετοιμασία της Αθήνας και διπλωματικές εξελίξεις",
    desc_el:
      "Ναυτικός νόμος του Θεμιστοκλή όπου τα κέρδη από την πρώτη φλέβα αργύρου που ανακαλύφθηκε στο Λαύριο διοχετεύονται στην κατασκευή τριήρεων. Κατασκευή του οχυρού λιμανιού στον Πειραιά. Οι Αλευάδες, αρχοντική οικογένεια η οποία ελέγχει την πόλη Λάρισα στη Θεσσαλία, έρχεται σε συμφωνία με τους Πέρσες.",
    title_en: "483 B.C.",
    subtitle_en: "The naval preparation of Athens and diplomatic developments",
    desc_en:
      "Naval law of Themistocles where the profits from the first silver vein discovered in Lavrio are channeled to the construction of triremes. Construction of the fort in Piraeus port. The Alevades, a noble family that controls the city of Larissa in Thessaly, come to an agreement with the Persians.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "The naval preparation of Athens and diplomatic developments",
  },
  {
    title_el: "481 π.Χ.",
    subtitle_el: "Αρχή της εισβολής του Ξέρξη",
    desc_el:
      "Φθινόπωρο: Συγκέντρωση του περσικού στρατού στις Σάρδεις υπό διοίκηση του ίδιου του Ξέρξη. Στέλνονται εκ νέου πρέσβεις στις ελληνικές πόλεις. Δημιουργείται μία πανελλήνια συμμαχία με επικεφαλής τη Σπάρτη. Η Αθήνα και η Αίγινα συνάπτουν ειρήνη. Στέλνεται πρεσβεία στον τύραννο των Συρακουσών Γέλωνα στη Σικελία ζητώντας βοήθεια, χωρίς όμως αποτέλεσμα. Ειρήνη μεταξύ Σπάρτης και Άργους.",
    title_en: "481 B.C.",
    subtitle_en: "Beginning of Xerxes' invasion",
    desc_en:
      "Autumn: Gathering of the Persian army in Sardis under the command of Xerxes himself. Ambassadors are sent to Greek cities again. A pan-Hellenic alliance is formed, led by Sparta. Athens and Aegina make peace. An embassy is sent to the tyrant of Syracuse, Gelon, in Sicily, asking for help, but to no avail. Peace between Sparta and Argos.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "Beginning of Xerxes' invasion",
  },
  {
    title_el: "480 π.Χ. - Άνοιξη",
    subtitle_el: "Οι Έλληνες ενώνονται μπροστά στον περσικό κίνδυνο",
    desc_el:
      "Άνοιξη: Επίσημη δημιουργία μιας πανελλήνιας συμμαχίας με κέντρο το Ιερό του Ισθμού στην Κόρινθο. Ο περσικός στρατός βρίσκεται στον Ελλήσποντο.",
    title_en: "480 B.C. - Spring",
    subtitle_en: "The Greeks unite in the face of the Persian danger",
    desc_en:
      "Spring: Formal creation of a pan-Hellenic alliance centered on the Sanctuary of the Isthmus in Corinth. The Persian army is in the Hellespont.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "The Greeks unite in the face of the Persian danger",
  },
  {
    title_el: "480 π.Χ. - Ιούνιος",
    subtitle_el: "Ο Ξέρξης πλησιάζει",
    desc_el:
      "Ιούνιος: Ο Ξέρξης περνά τον Ελλήσποντο και μέσω Θράκης και Μακεδονίας βαδίζει προς την κυρίως Ελλάδα. Οι ελληνικές πόλεις συνεδριάζουν στον Ισθμό και κηρύσσουν ειρήνη μεταξύ τους και επιστροφή των εξόριστων.",
    title_en: "480 B.C. - June",
    subtitle_en: "Xerxes is approaching",
    desc_en:
      "June: Xerxes crosses the Hellespont and through Thrace and Macedonia walks towards mainland Greece. Greek cities meet in the Isthmus and declare peace among themselves and the return of the exiles.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "Xerxes is approaching",
  },
  {
    title_el: "480 π.Χ. - Αύγουστος",
    subtitle_el: "Θερμοπύλες",
    desc_el:
      "Αύγουστος: Μετά από μία αποτυχημένη προσπάθεια των Ελλήνων να σταματήσουν τον Ξέρξη στα Τέμπη της Θεσσαλίας ο βασιλέας της Σπάρτης Λεωνίδας καταλαμβάνει το στενό των Θερμοπυλών , ενώ ο ενωμένος ελληνικός στόλος πλέει προς τη Σκιάθο. Σχεδόν ταυτόχρονη διεξαγωγή της ναυμαχίας του Αρτεμισίου και της μάχης στις Θερμοπύλες. Αν και στη θάλασσα το αποτέλεσμα είναι αμφίρροπο, στις Θερμοπύλες παρά τις αρχικές επιτυχίες, ο Λεωνίδας υπερφαλαγγίζεται. Τόσο ο ίδιος όσο και υπερασπιστές του στενού πολεμούν μέχρι ενός. Προέλαση του Ξέρξη στη Φωκίδα. Ο ελληνικός στόλος αποσύρεται. Οι Έλληνες αποφασίζουν να οχυρωθούν στον Ισθμό και οι Αθηναίοι να εγκαταλείψουν την πόλη τους.",
    title_en: "480 B.C. - August",
    subtitle_en: "Thermopylae",
    desc_en:
      "August: After a failed attempt by the Greeks to stop Xerxes in Tempi of Thessaly, the king of Sparta Leonidas occupies the strait of Thermopylae, while the united Greek fleet sails to Skiathos. Almost simultaneous conduct of the naval battle of Artemisio and the battle of Thermopylae. Although at sea the result is ambiguous, in Thermopylae, despite the initial successes Leonidas is defeated. Both he and the defenders of the strait fight to one.\nAdvancement of Xerxes to Fokida. The Greek fleet withdraws. The Greeks decide to fortify themselves in the Isthmus and the decide Athenians to abandon their city.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "Thermopylae",
  },
  {
    title_el: "480 π.Χ. - Σεπτέμβριος",
    subtitle_el: "Η ναυμαχία της Σαλαμίνας",
    desc_el:
      "Σεπτέμβριος: Ο Ξέρξης εισέρχεται στην Αθήνα η οποία πυρπολείται σε αντίποινα για την πυρπόληση των Σάρδεων. Λαμβάνει χώρα η ναυμαχία στη Σαλαμίνα. Η καταστροφή του περσικού ναυτικού αλλάζει τα δεδομένα της εκστρατείας.",
    title_en: "480 B.C. - September",
    subtitle_en: "The naval battle of Salamis",
    desc_en:
      "September: Xerxes enters Athens which is set on fire in retaliation for the burning of Sardis. The naval battle takes place in Salamina. The destruction of the Persian navy changes the outcome of the campaign.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "The naval battle of Salamis",
  },
  {
    title_el: "480 π.Χ. - Οκτώβριος",
    subtitle_el: "Ο Ξέρξης εγκαταλείπει την Ελλάδα",
    desc_el:
      "Οκτώβριος: Ο περσικός στόλος αναδιπλώνεται στη Μικρά Ασία ενώ ο Ξέρξης επιστρέφει στην Ανατολή. Ο περσικός στρατός όμως αποσύρεται για τον χειμώνα στη Θεσσαλία με επικεφαλής τον Μαρδόνιο, γαμπρό του Ξέρξη.",
    title_en: "480 B.C. - October",
    subtitle_en: "Xerxes leaves Greece",
    desc_en:
      "October: The Persian fleet folds in Asia Minor while Xerxes returns to the East. The Persian army, however, withdraws for the winter in Thessaly, led by Mardonius, Xerxes' son-in-law.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "Xerxes leaves Greece",
  },
  {
    title_el: "479 π.Χ. - Άνοιξη",
    subtitle_el: "Οι Έλληνες αρχίζουν αντεπίθεση",
    desc_el:
      "Άνοιξη: Ο ελληνικός στόλος συγκεντρώνεται στην Αίγινα και πλέει προς τη Δήλο.",
    title_en: "479 B.C. - Spring",
    subtitle_en: "The Greeks start a counterattack",
    desc_en: "Spring: The Greek fleet gathers in Aegina and sails to Delos.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "The Greeks start a counterattack",
  },
  {
    title_el: "479 π.Χ. - Ιούνιος",
    subtitle_el:
      "Ο Περσικός στρατός επιχειρεί εναντίον της Βοιωτίας και της Ατικής",
    desc_el:
      "Ιούνιος: Ο Μαρδόνιος εισβάλλει στη Βοιωτία, την οποία μετατρέπει σε στρατηγείο του. Η Αθήνα για μία ακόμα φορά εγκαταλείπεται, καταλαμβάνεται και καταστρέφεται. Ο ελληνικός στρατός αρχίζει να συγκεντρώνεται στη Βοιωτία.",
    title_en: "479 B.C. - June",
    subtitle_en:
      "The Persian army launches operations against Boeotia and Attica",
    desc_en:
      "June: Mardonius invades Boeotia, which he turns into his headquarters. Athens is once again abandoned, occupied and destroyed. The Greek army begins to gather in Boeotia.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en:
      "The Persian army launches operations against Boeotia and Attica",
  },
  {
    title_el: "479 π.Χ. - Ιούλιος-Αύγουστος",
    subtitle_el: "Ελληνικές ναυτικές επιτυχίες",
    desc_el:
      "Ιούλιος-Αύγουστος: Ο ελληνικός στόλος απελευθερώνει τη Χίο τη Σάμο και τη Λέσβο.",
    title_en: "479 B.C. - July-August",
    subtitle_en: "Greek naval successes",
    desc_en:
      "July - August: The Greek fleet liberates Chios, Samos and Lesvos.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "Greek naval successes",
  },
  {
    title_el: "479 π.Χ. - Σεπτέμβριος",
    subtitle_el: "Η μάχη των Πλαταιών και η μάχη της Μυκάλης",
    desc_el:
      "Σεπτέμβριος: Νίκη των Ελλήνων στις Πλαταιές εναντίον του Μαρδόνιου. Αυτός χάνει τη ζωή του, ενώ τα υπολείμματα του στρατού του υποχωρούν άτακτα προς τον Ελλήσποντο. Στη Μικρά Ασία ο ελληνικός στόλος κατανικά ένα μέρος του περσικού στόλου οχυρωμένου στο ακρωτήριο της Μυκάλης.",
    title_en: "479 B.C. - September",
    subtitle_en: "The battle of Plataea and the battle of Mykale",
    desc_en:
      "September: Victory of the Greeks in Plataea against Mardonius. He loses his life, while the remnants of his army retreat erratically to the Hellespont. In Asia Minor, the Greek fleet subdued a part of the Persian fleet fortified at the cape of Mykale.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "The battle of Plataea and the battle of Mykale",
  },
  {
    title_el: "479 π.Χ. - Φθινόπωρο",
    subtitle_el: "Κατάληψη της Σηστού",
    desc_el:
      "Φθινόπωρο: Παρά το ότι η Σπάρτη αποχωρεί από τη διοίκηση του ενωμένου ελληνικού στόλου, οι Αθηναίοι παραμένουν εν δράσει και προχωρούν προς τον Ελλήσποντο. Στη διαδρομή πολιορκούν και καταλαμβάνουν τη Σηστό. Οι Πέρσες έχουν εκδιωχτεί οριστικά από τον κυρίως ελλαδικό χώρο.",
    title_en: "479 B.C. - Autumn",
    subtitle_en: "Occupation of Sestos",
    desc_en:
      "Autumn: Despite the fact that Sparta leaves the command of the united Greek fleet, the Athenians remain in action and move towards the Hellespont. On the way they besiege and occupy Sestos. The Persians have been permanently expelled from the main Greek area.",
    img: "transparent.png",
    Μέγεθος: "",
    subtitle1_en: "Occupation of Sestos",
  },
];

const Home: NextPage = () => {
  const [info, setInfo] = useState(timeLine[0]);
  const router = useRouter();
  const lang = router.locale;
  const [title, period] = info[`title_${lang}`]?.split(
    lang === "el" ? "π.Χ." : "B.C."
  );

  return (
    <div className="w-screen   h-screen relative">
      <img
        src="/images/BackgroundChronologio.jpg"
        className="object-cover w-full h-full absolute"
        alt=""
      />
      <div className="w-screen flex justify-center items-center h-screen bg-black z-30 flex-col absolute bg-opacity-60">
        <div
          key={info[`desc_${lang}`]}
          className="flex border border-white  border-opacity-10 rounded overflow-hidden shadow bg-black bg-opacity-30 w-4/6 my-auto text-white md:text-xl text-sm"
        >
          <motion.img
            transition={{ delay: 0.2 }}
            animate={{
              translateX: [-50, 0],
              opacity: [0, 1],
            }}
            className={clsx(
              " overflow-hidden object-cover h-[600px] border-r border-white border-opacity-20 ",
              {
                "w-[800px]": info.img !== "transparent.png",
                "w-40": info.img === "transparent.png",
              }
            )}
            src={`/images/${info.img}`}
          />
          <div className=" w-full px-8 py-8">
            <div className="flex items-end mr-3 text-orange-400">
              <motion.h1
                key={info[`title_${lang}`]}
                animate={{
                  translateY: [50, 0],
                  opacity: [0, 1],
                }}
                className="text-7xl  font-bold"
              >
                {title}
              </motion.h1>
              <motion.span
                transition={{
                  delay: 0.3,
                }}
                animate={{
                  translateY: [-150, 0],
                  opacity: [0, 1],
                }}
                className="text-3xl ml-2"
              >
                {lang === "el" ? "π.Χ." : "B.C."}

                {period.replace("-", "")}
              </motion.span>
            </div>
            <div className="border-b border-orange-400 border-opacity-50 my-5" />
            <div className="h-96 overflow-y-auto overflow-x-hidden">
              <motion.div
                transition={{ delay: 0.6 }}
                animate={{
                  translateX: [100, 0],
                  opacity: [0, 1],
                }}
                className="text-xl text-gray-300"
              >
                <div className="mb-2 text-gray-400 text-sm">
                  {info[`subtitle_${lang}`]}:
                </div>
                <div className="mb-4 text-gray-200">
                  {info[`desc_${lang}`]} {period}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="overflow-x-scroll whitespace-nowrap w-screen">
          {timeLine.map((obj, idx) => (
            <Card
              onClick={() => {
                router.push({
                  query: {
                    ...router.query,
                    period: obj[`title_${lang}`],
                  },
                });
                setInfo(obj);
              }}
              time={obj[`title_${lang}`]}
              desc={obj[`subtitle_${lang}`]}
              key={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
