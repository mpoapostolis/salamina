import Link from "next/link";
import { useRouter } from "next/router";

export function NewlineText(props: any) {
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

const sections: Record<string, string>[] = [
  {
    title_el: "Αδείμαντος",
    title_en: "Adimantos",
    desc_el: `Κορίνθιος, γιος του Ωκύτου. Ήταν ο επικεφαλής ναύαρχος του στόλου της Κορίνθου που συμμετείχε στον πανελλήνιο στόλο κατά τους Περσικούς Πολέμους. Στις παραμονές της ναυμαχίας στη Σαλαμίνα ήταν αυτός που κατεξοχήν αντέδρασε στην πρόταση του Θεμιστοκλή να δοθεί ναυμαχία στη Σαλαμίνα και ήταν υπέρ της υποχώρησης στον Ισθμό.\n
Ο Πλούταρχος, στο έργο Βίοι Παράλληλοι (Θεμιστοκλής 11.5), αναφέρεται στην διαφωνία των δύο στρατηγών. Ο Αδείμαντος απαιτούσε να αποσυρθεί ο στόλος από την Σαλαμίνα και να κατευθυνθεί στον Ισθμό της Κορίνθου, αλλά ο Θεμιστοκλής ήταν αντίθετος. Τότε, ο Αδείμαντος πρότεινε να ψηφίσουν όλοι, πλην του Θεμιστοκλή, επειδή η Αθήνα είχε καταστραφεί και ο Θεμιστοκλής θεωρήθηκε ἄπολις (χωρίς πόλη). Αυτό εξόργισε τον Θεμιστοκλή, ο οποίος είπε:\n
"ἡμεῖς τοι, εἶπεν, ὦ μοχθηρέ, τὰς μὲν οἰκίας καὶ τὰ τείχη καταλελοίπαμεν, οὐκ ἀξιοῦντες ἀψύχων ἕνεκα δουλεύειν, πόλις δ' ἡμῖν ἔστι μεγίστη τῶν Ἑλληνίδων, αἱ διακόσιαι τριήρεις, αἳ νῦν μὲν ὑμῖν παρεστᾶσι βοηθοὶ σώζεσθαι δι' αὐτῶν βουλομένοις, εἰ δ' ἄπιτε δεύτερον ἡμᾶς προδόντες, αὐτίκα πεύσεταί τις Ἑλλήνων Ἀθηναίους καὶ πόλιν ἐλευθέραν καὶ χώραν οὐ χείρονα κεκτημένους ἧς ἀπέβαλον"\n
Μετάφραση: Εμείς, ω μοχθηρέ, εγκαταλείψαμε τα σπίτια και τα τείχη μας, επειδή πιστεύουμε ότι δεν αξίζει να γίνουμε σκλάβοι για να προστατεύσουμε άψυχα πράγματα, εμείς έχουμε την μέγιστη πόλη της Ελλάδας, στις διακόσιες τριήρεις, με τις οποίες θα απωθήσουμε τον εχθρό, αν φύγετε θα μας προδώσετε για δεύτερη φορά, και οι Έλληνες δεν θα αργήσουν να καταλάβουν ότι οι εμείς Αθηναίοι έχουμε μια ελεύθερη πόλη που δεν είναι κατώτερη από αυτή που εγκαταλείψαμε.\n
Κατά τη διάρκεια της ναυμαχίας κατηγορήθηκε ότι οδήγησε τους Κορινθίους μακριά από το κέντρο της μάχης. Όμως από ότι φαίνεται οι Κορίνθιοι ήταν επιφορτισμένοι με τη φύλαξη της απομακρυσμένης δυτικής διόδου στο πεδίο της μάχης εναντίον του αιγυπτιακού στόλου τον οποίο είχε στείλει ο Ξέρξης για να αποκλείσει τη διαφυγή των Ελλήνων. Αργότερα φαίνεται ότι οι Κορίνθιοι ενεπλάκησαν στη ναυμαχία και τιμήθηκαν για τη συμμετοχή τους για αυτή.
`,
    desc_en: `From Corinth, son of Okytos. He was the chief admiral of the Corinthian fleet who participated in the pan-Hellenic fleet during the Persian Wars. On the eve of the naval battle in Salamis, he was the one who primarily reacted to Themistocles's proposal to give a naval battle in Salamis and was in favor of retreating to the Isthmus.\n
Plutarch, in the work Parallel Lives (Themistocles 11.5), refers to the disagreement of the two generals. Adimantos demanded that the fleet withdraw from Salamis and head for the Isthmus of Corinth, but Themistocles was opposed. Adeimantus then proposed that all but Themistocles vote, because Athens had been destroyed and Themistocles was considered ἄπολις (without a city). This angered Themistocles, who said:\n
"ἡμεῖς τοι, εἶπεν, ὦ μοχθηρέ, τὰς μὲν οἰκίας καὶ τὰ τείχη καταλελοίπαμεν, οὐκ ἀξιοῦντες ἀψύχων ἕνεκα δουλεύειν, πόλις δ' ἡμῖν ἔστι μεγίστη τῶν Ἑλληνίδων, αἱ διακόσιαι τριήρεις, αἳ νῦν μὲν ὑμῖν παρεστᾶσι βοηθοὶ σώζεσθαι δι' αὐτῶν βουλομένοις, εἰ δ' ἄπιτε δεύτερον ἡμᾶς προδόντες, αὐτίκα πεύσεταί τις Ἑλλήνων Ἀθηναίους καὶ πόλιν ἐλευθέραν καὶ χώραν οὐ χείρονα κεκτημένους ἧς ἀπέβαλον"\n
We, oh visius, have left our homes and walls, because we believe that it is not worth becoming slaves to protect inanimate things, we have the largest city in Greece, in the two hundred triremes, with which we will repel the enemy, if you leave you will betray us for the second time, and the Greeks will soon realize that we Athenians have a free city that is not inferior to the one we abandoned.\n
During the naval battle he was accused of leading the Corinthians away from the center of the battle. However, it seems that the Corinthians were in charge of guarding the remote western passage on the battlefield against the Egyptian fleet that Xerxes had sent to prevent the escape of the Greeks. Later it seems that the Corinthians were involved in the naval battle and were honored for their participation in it.
`,
    img1: "",
    subtitle1_el: "",
    subtitle1_en: "",
    img2: "",
    subtitle2_el: "",
    subtitle2_en: "",
    size1: "",
    size2: "",
  },
  {
    title_el: "Αριστείδης",
    title_en: "Aristides",
    desc_el:
      "Γιος του Λυσιμάχου. Επιφανής πολιτικός και στρατιωτικός ηγέτης στην Αθήνα κατά την περίοδο των Περσικών πολέμων. Αριστοκρατικής καταγωγής, υπηρέτησε ως στρατηγός στη μάχη του Μαραθώνα το 490 π.Χ. και ως επώνυμος άρχων το 489/488. Δεδομένου ότι οστρακίστηκε το 482, όταν μεσουρανούσε ο Θεμιστοκλής, προφανώς υπήρξε πολιτικός του αντίπαλος, φέρνοντας αντιρρήσεις στα μέτρα που αυτός εισηγήθηκε. Κατά τον οστρακισμό του διέμενε στην Αίγινα. Ωστόσο, το 480, όταν ανακλήθηκαν οι εξόριστοι, συμμετείχε στον πόλεμο στο πλευρό του Θεμιστοκλή. Κατά τη ναυμαχία της Σαλαμίνας τέθηκε επικεφαλής ενός τμήματος οπλιτών και κατέσφαξε ένα απόσπασμα Περσών που είχε τοποθετηθεί στο νησάκι της Ψυττάλειας για να αποτελειώσει τους Έλληνες ναυαγούς κατά τη ναυμαχία. Το 479 εκλέχτηκε στρατηγός και ήταν ο επικεφαλής του στρατού της Αθήνας που συμμετείχε στη μάχη των Πλαταιών. Αμέσως μετά, πάντα επικεφαλής των αθηναϊκών δυνάμεων, συμμετείχε στην πανελλήνια εκστρατεία στην Κύπρο και το Βυζάντιο με επικεφαλής τον βασιλέα της Σπάρτης Παυσανία. Όταν η εκστρατεία ατόνησε με την ανάκληση του Παυσανία, ο Αριστείδης χάρη στις διπλωματικές και στρατιωτικές του ικανότητες ενέπνευσε τους Ίωνες των νησιών και της δυτικής Μικράς Ασίας ώστε να ζητήσουν τη συμμαχία της Αθήνας και να συνεχιστεί ο πόλεμος εναντίον των Περσών. Με τον τρόπο αυτό κατέστη ένας από τους πρωτεργάτες της δημιουργίας της Δηλιακής Συμμαχίας το 478/77. Παρέμεινε ενεργός πολιτικός διαμορφώνοντας μάλιστα το πλαίσιο της εν λόγω συμμαχίας συμμαχώντας με τον Κίμωνα, πολιτικό αντίπαλο του Θεμιστοκλή.Πέθανε το 467 αφήνοντας μία φήμη για την προσωπική και πολιτική εντιμότητά του και έμεινε γνωστός ως Αριστείδης ο Δίκαιος.",
    desc_en:
      "Son of Lysimachus. Prominent political and military leader in Athens during the Persian Wars. Of aristocratic origin, he served as a general in the battle of Marathon in 490 BC. and as a Archon Eponimous (Ruler) in 489/488. Since he was ostracized in 482, when Themistocles was in power, he was obviously a political opponent, objecting to the measures he proposed. During his ostracism (exile) he lived in Aegina. However, in 480, when the exiles were recalled, he took part in the war on the side of Themistocles. During the naval battle of Salamis, he headed a detachment of hoplites and slaughtered a Persian detachment that had been stationed on the island of Psyttalia to finish the Greek shipwrecked sailors during the naval battle. In 479 he was elected general and was the head of the army of Athens that participated in the battle of Plataea. Immediately afterwards, always at the head of the Athenian forces, he participated in the pan-Hellenic campaign in Cyprus and Byzantium, led by the king of Sparta, Pausanias. When the campaign faded with the recall of Pausanias, Aristides, thanks to his diplomatic and military skills, inspired the Ionians of the islands and western Asia Minor to call for an alliance of Athens and to continue the war against the Persians. In this way he became one of the pioneers of the creation of the Delian Alliance in 478/77. He remained an active politician, forming the framework of this alliance, allying himself with Kimon, a political opponent of Themistocles. He died in 467, leaving a reputation for his personal and political honesty, and became known as Aristides the Righteous.",
    img1: "/images/aristides.png",
    subtitle1_el: "",
    subtitle1_en: "",
    img2: "",
    subtitle2_el: "",
    subtitle2_en: "",
    size1: "",
    size2: "",
  },
  {
    title_el: "Αρτεμισία",
    title_en: "Artemisia",
    desc_el: `Κόρη του Λύγδαμι. Την περίοδο των Περσικών Πολέμων είχε αναλάβει την εξουσία στην Αλικαρνασσό, πόλη στα παράλια της αρχαίας Καρίας της Μικράς Ασίας απέναντι από τη σημερινή Κω. Καθώς ήταν γενέτειρά του, ο πιο επιφανής ιστορικός των Περσικών Πολέμων ο Ηρόδοτος μας παρουσιάζει την Αρτεμισία ως μία ικανή γυναίκα που όχι μόνο εκπροσωπούσε την οικογένειά της διοικώντας την Αλικαρνασσό, αλλά ασκούσε επιρροή στον Ξέρξη έχοντας την εύνοιά του. Επίσης παρουσιάζεται ως αδίστακτη, καθώς για να γλιτώσει από την ελληνική πίεση κατά τη διάρκεια της ναυμαχίας προέβη στον εμβολισμό  φίλιου πλοίου ώστε οι Έλληνες να θεωρήσουν ότι πολεμούσε μαζί τους, ενώ ο Ξέρξης θεωρώντας ότι το πλοίο ήταν ελληνικό, θεώρησε ότι διέπραξε ανδραγάθημα.\n
Παραδίδεται από τον Ηρόδοτο (8.68) ότι πριν την ναυμαχία, συγκλήθηκε συνέδριο από τον Ξέρξη, όπου όλοι, πλην της Αρτεμισίας, συμφώνησαν στην διεξαγωγή ναυμαχίας στην Σαλαμίνα. Όταν ο Μαρδόνιος της απηύθυνε τον λόγο, η Αρτεμισία είχε δηλώσει τα εξής:\n
"εἰπεῖν μοι πρὸς βασιλέα, Μαρδόνιε, ὡς ἐγὼ τάδε λέγω, οὔτε κακίστη γενομένη ἐν τῇσι ναυμαχίῃσι τῇσι πρὸς Εὐβοίῃ οὔτε ἐλάχιστα ἀποδεξαμένη. δέσποτα, τὴν δὲ ἐοῦσαν γνώμην με δίκαιον ἐστὶ ἀποδείκνυσθαι, τὰ τυγχάνω φρονέουσα ἄριστα ἐς πρήγματα τὰ σά. καὶ τοι τάδε λέγω, φείδεο τῶν νεῶν μηδὲ ναυμαχίην ποιέο. οἱ γὰρ ἄνδρες τῶν σῶν ἀνδρῶν κρέσσονες τοσοῦτο εἰσὶ κατὰ θάλασσαν ὅσον ἄνδρες γυναικῶν. τί δὲ πάντως δέει σε ναυμαχίῃσι ἀνακινδυνεύειν; οὐκ ἔχεις μὲν τὰς Ἀθήνας, τῶν περ εἵνεκα ὁρμήθης στρατεύεσθαι, ἔχεις δὲ τὴν ἄλλην Ἑλλάδα ; ἐμποδὼν δέ τοι ἵσταται οὐδείς· οἳ δέ τοι ἀντέστησαν, ἀπήλλαξαν οὕτω ὡς κείνους ἔπρεπε. τῇ δὲ ἐγὼ δοκέω ἀποβήσεσθαι τὰ τῶν ἀντιπολέμων πρήγματα, τοῦτο φράσω. ἢν μὲν μὴ ἐπειχθῇς ναυμαχίην ποιεύμενος, ἀλλὰ τὰς νέας αὐτοῦ ἔχῃς πρὸς γῇ μένων ἢ καὶ προβαίνων ἐς τὴν Πελοπόννησον, εὐπετέως τοι δέσποτα χωρήσει τὰ νοέων ἐλήλυθας. οὐ γὰρ οἷοί τε πολλὸν χρόνον εἰσί τοι ἀντέχειν οἱ Ἕλληνες, ἀλλὰ σφέας διασκεδᾷς, κατὰ πόλις δὲ ἕκαστοι φεύξονται. οὔτε γὰρ σῖτος πάρα σφι ἐν τῇ νήσῳ ταύτῃ, ὡς ἐγὼ πυνθάνομαι, οὔτε αὐτοὺς οἰκός, ἢν σὺ ἐπὶ τὴν Πελοπόννησον ἐλαύνῃς τὸν πεζὸν στρατόν, ἀτρεμιεῖν τοὺς ἐκεῖθεν αὐτῶν ἥκοντας, οὐδέ σφι μελήσει πρὸ τῶν Ἀθηνέων ναυμαχέειν. ἢν δὲ αὐτίκα ἐπειχθῇς ναυμαχῆσαι, δειμαίνω μὴ ὁ ναυτικὸς στρατὸς κακωθεὶς τὸν πεζὸν προσδηλήσηται. πρὸς δὲ, ὦ βασιλεῦ, καὶ τόδε ἐς θυμὸν βάλευ, ὡς τοῖσι μὲν χρηστοῖσι τῶν ἀνθρώπων κακοὶ δοῦλοι φιλέουσι γίνεσθαι, τοῖσι δὲ κακοῖσι χρηστοί. σοὶ δὲ ἐόντι ἀρίστῳ ἀνδρῶν πάντων κακοὶ δοῦλοι εἰσί, οἳ ἐν συμμάχων λόγῳ λέγονται εἶναι ἐόντες Αἰγύπτιοί τε καὶ Κύπριοι καὶ Κίλικες καὶ Πάμφυλοι, τῶν ὄφελος ἐστὶ οὐδέν"\n
Απόδοση : Πες στον βασιλιά από εμένα, Μαρδόνιε, αυτή είναι η απάντηση που λαμβάνει από αυτή που δεν ήταν ούτε η πιο δειλή ούτε η πιο αδύναμη στις ναυμαχίες στην Εύβοια. Δεσπότα, είναι σωστό για μένα να σου πω την γνώμη μου, καθώς σκέφτομαι τι είναι καλύτερο για σένα. Αυτή είναι η συμβουλή μου για σένα: μην δώσεις μάχη στην θάλασσα. Οι άνδρες τους είναι ανώτεροι από τους δικούς μας στην θάλασσα όπως οι άνδρες είναι ανώτεροι των γυναικών. Γιατί πρέπει να διατρέχεις τον κίνδυνο των ναυτικών δράσεων; Δεν κατέλαβες την Αθήνα, η οποία ήταν στόχος της εκστρατείας, δεν κατέλαβες την υπόλοιπη Ελλάδα; Κανένας δεν σε εμποδίζει. Θα πρέπει να σου εξηγήσω πως νομίζει ότι θα διάγει ο εχθρός. Αν δεν επιτεθείς αλλά κρατήσεις τον στόλο στην ακτή, ή αν επιτεθείς στην Πελοπόννησο, δεσπότα, θα πετύχεις τους στόχους σου χωρίς κόπο. Οι Έλληνες, οι οποίοι δεν θα μπορέσουν να σου αντισταθούν άλλο, θα σκορπιστούν και θα υποχωρήσουν, κατά πόλη. Δεν έχουν προμήθειες σε αυτό το νησί, όπως με πληροφόρησαν, ούτε το θεωρούν οίκο τους. Αν στείλεις στρατό στην Πελοπόννησο, οι Πελοποννήσιοι δεν θα μείνουν ήσυχοι ούτε θα πολεμήσουν σε ναυμαχία για την Αθήνα. Αν όμως αποφασίσεις να δώσεις ναυμαχία, φοβάμαι ότι ο στόλος σου θα καταστραφεί. Άκου και αυτό βασιλιά. Οι καλοί άνδρες έχουν συνήθως κακούς δούλους ενώ οι κακοί άνδρες έχουν καλούς δούλους. Εσύ, ως ο πιο άριστος άνδρας στον κόσμο, έχεις κακούς δούλους. Κανένας από αυτούς τους Αιγύπτιους, τους Κύπριους, τους Κίλικες και τους Πάμφυλους, οι οποίοι λένε ότι είναι σύμμαχοι, δεν θα μας ωφελήσει."\n
Παρ' όλα αυτά, ο Ξέρξης δεν συμφώνησε με την Αρτεμισία και αποφάσισε να επιτεθεί στα Στενά της Σαλαμίνας. Το πλοίο της Αρτεμισίας καταδιώχθηκε από μια αθηναϊκή τριήρη. Τότε, η Αρτεμισία είχε βυθίσει το πλοίο του βασιλιά Δαμασιθύμου, αρχηγού των Καλυνδέων. Τότε, οι Αθηναίοι πίστεψαν ότι το πλοίο της Αρτεμισίας ήταν συμμαχικό και σταμάτησαν την καταδίωξη. Ο Ξέρξης, ο οποίος παρακολουθούσε την ναυμαχία από το Αιγάλεω, ρώτησε να μάθει ποιος είχε βυθίσει το πλοίο, το οποίο θεώρησε ελληνικό. Τότε, κάποιος του απάντησε πως αυτή που το βύθισε ήταν η Αρτεμισία. Τότε ο Ξέρξης είπε «οἱ μὲν ἄνδρες γεγόνασί μοι γυναῖκες, αἱ δὲ γυναῖκες ἄνδρες» (μετ. οι άνδρες μου έγιναν γυναίκες και οι γυναίκες άνδρες 8.87).\n
Μετά την ναυμαχία, ο Ξέρξης είχε πει στον Μαρδόνιο ότι θέλει να αποφασίσει τι έπρεπε να κάνει. Είχε συγκληθεί συνέδριο, αλλά ο Ξέρξης θέλησε να ρωτήσει την Αρτεμισία, η οποία ήταν η μόνη που τον συμβούλευσε να μην επιτεθεί στους Έλληνες στην Σαλαμίνα. Ο Ξέρξης της είπε ότι ο Μαρδόνιος τον συμβούλευσε να μείνει και να επιτεθεί στην Πελοπόννησο, ή να τον αφήσει να διαλέξει 300.000 άνδρες και να καταλάβει την Ελλάδα για τον βασιλιά.\n
Η Αρτεμισία του είχε απαντήσει, δίνοντας τα πιο κάτω επιχειρήματα (Ηρόδοτος 8.102:"
"βασιλεῦ, χαλεπὸν μὲν ἐστὶ συμβουλευομένῳ τυχεῖν τὰ ἄριστα εἴπασαν, ἐπὶ μέντοι τοῖσι κατήκουσι πρήγμασι δοκέει μοι αὐτὸν μέν σε ἀπελαύνειν ὀπίσω, Μαρδόνιον δέ, εἰ ἐθέλει τε καὶ ὑποδέκεται ταῦτα ποιήσειν, αὐτοῦ καταλιπεῖν σὺν τοῖσι ἐθέλει. τοῦτο μὲν γὰρ ἢν καταστρέψηται τὰ φησὶ θέλειν καί οἱ προχωρήσῃ τὰ νοέων λέγει, σὸν τὸ ἔργον ὦ δέσποτα γίνεται· οἱ γὰρ σοὶ δοῦλοι κατεργάσαντο. τοῦτο δὲ ἢν τὰ ἐναντία τῆς Μαρδονίου γνώμης γένηται, οὐδεμία συμφορὴ μεγάλη ἔσται σέο τε περιεόντος καὶ ἐκείνων τῶν πρηγμάτων περὶ οἶκον τὸν σόν· ἢν γὰρ σύ τε περιῇς καὶ οἶκος ὁ σός, πολλοὺς πολλάκις ἀγῶνας δραμέονται περὶ σφέων αὐτῶν οἱ Ἕλληνες. Μαρδονίου δέ, ἤν τι πάθῃ, λόγος οὐδεὶς γίνεται, οὐδέ τι νικῶντες οἱ Ἕλληνες νικῶσι, δοῦλον σὸν ἀπολέσαντες· σὺ δέ, τῶν εἵνεκα τὸν στόλον ἐποιήσαο, πυρώσας τὰς Ἀθήνας ἀπελᾷς"\n
Απόδοση: βασιλιά, είναι δύσκολο να σε συμβουλεύσω τι είναι καλύτερο για σένα. Πιστεύω ότι πρέπει να πάρεις τον στρατό και να επιστρέψεις πίσω, και ο Μαρδόνιος να μείνει εδώ με τις δυνάμεις που θέλει. Αν ο Μαρδόνιος πετύχει αυτό που λέει ότι μπορεί να κάνει, τότε η νίκη θα θεωρείται δική σου. Αν όμως ο Μαρδόνιος αποτύχει, δεν θα είναι μεγάλη συμφορά, καθώς εσύ και οι οίκος σου θα επιζήσετε. Αν εσύ και ο οίκος σου επιζήσουν, οι Έλληνες θα πρέπει να δώσουν πολλούς αγώνες για να επιβιώσουν. Δεν θα γίνει κανένας λόγος αν ο Μαρδόνιος υποστεί λίγα πάθη, καθώς οι Έλληνες δεν θα πετύχουν πραγματική νίκη αν νικήσουν τον δούλο σου - ενώ εσύ, θα επιστρέψεις έχοντας κάψει την Αθήνα, το αντικείμενο της εκστρατείας σου."\n
Αυτή την φορά, ο Ξέρξης υπάκουσε στην συμβουλή της Αρτεμισίας, και την έστειλε μαζί με τα παιδιά του στην Έφεσο, καθώς είχε πάρει μαζί του στην εκστρατεία τους νόθους γιούς του.
`,
    desc_en: `Daughter of Lygdamis. During the Persian Wars she had taken power in Alikarnassos, a city on the shores of ancient Caria in Asia Minor opposite present-day Kos. As his birthplace, the most prominent historian of the Persian Wars, Herodotus presents Artemisia to us as a capable woman who not only represented her family in ruling Alikarnassos, but also influenced Xerxes which has granted her his favor. She is also presented as ruthless, as in order to escape the Greek pressure during the naval battle, she rammed a friendly ship so that the Greeks would think that she was at war with the Persians, while Xerxes, thinking that the ship was Greek, considered her as a capable admiral.\n
It is narrated by Herodotus (8.68) that before the naval battle, a conference was convened by Xerxes, where everyone, except Artemisia, agreed to conduct a naval battle in Salamis. When Mardonius addressed her, Artemisia had stated the following:\n
"Tell the king from me, Mardonius, this is the answer he receives from the one who was neither the most cowardly nor the weakest in the naval battles in Evia. Despot, it's right for me to tell you my opinion, as I'm thinking about what is best for you. This is my advice to you: do not fight at sea. Their men are superior to ours at sea as men are superior to women. Why should you run the risk of naval action? Did you not occupy Athens, which was the target of the campaign, did you not occupy the rest of Greece? No one is stopping you. I have to explain to you how your enemy will proceed. If you do not attack but keep the fleet on shore, or if you attack the Peloponnese, despot, you will achieve your goals effortlessly. The Greeks, who will no longer be able to resist you, will scatter and retreat, city by city. They have no supplies on this island, as they informed me, nor do they consider it their home. If you send an army to the Peloponnese, the Peloponnesians will not remain restless here nor will they fight in a naval battle for Athens. But if you decide to go to war, I'm afraid your fleet will be destroyed. Listen to this, king. Good men usually have bad slaves while bad men have good slaves. You, as the most excellent man in the world, have bad slaves. None of these Egyptians, Cypriots, Cilicians and Pamphyls, who say they are allies, will benefit us."\n
Nevertheless, Xerxes did not agree with Artemisia and decided to attack the Straits of Salamis. The ship of Artemisia was chased by an Athenian trireme. At that time, Artemisia had sunk the ship of King Damasithimos, leader of the Kalindeans. At that time, the Athenians believed that Artemisia's ship was an ally and stopped the pursuit. Xerxes, who was watching the naval battle from Egaleo, asked to find out who had sunk the ship, which he considered Greek. Then someone answered him that the one who sank it was Artemisia. Then Xerxes said "οἱ μὲν ἄνδρες γεγόνασί μοι γυναῖκες, αἱ δὲ γυναῖκες ἄνδρες" (trans. My men became women and women men 8.87).\n
After the naval battle, Xerxes had told Mardonius that he wanted to decide what to do. A conference had been convened, but Xerxes wanted to ask Artemisia, who was the only one who advised him not to attack the Greeks in Salamis. Xerxes told her that Mardonius had advised him to stay and attack the Peloponnese, or let him choose 300,000 men and occupy Greece for the king.\n
Artemisia had answered him, giving the following arguments (Herodotus 8.102):\n
"King, it's hard to advise you what's best for you. I think you have to take the army and go back, and Mardonius stay here with the forces he wants. If Mardonius achieves what he says he can do, then the victory will be considered yours. But if Mardonius fails, it will not be a big disaster, as you and your family will survive. If you and your family survive, the Greeks will have to fight hard to survive. There will be no reason for Mardonius to suffer a few suffering, as the Greeks will not achieve a real victory if they defeat your slave - while you will return having burned Athens, the object of your campaign."\n
This time, Xerxes obeyed the advice of Artemisia, and sent her with his children to Ephesus, as he had taken his illegitimate sons with him on the campaign.
`,
    img1: "/images/artemisia1.png",
    subtitle1_el:
      "Wilhelm von Kaulbach, Η Ναυμαχία της Σαλαμίνας, 1868, Maximilianeum (Landtag of Bavaria)",
    subtitle1_en:
      "Wilhelm von Kaulbach, The Battle of Salamis, 1868, Maximilianeum (Landtag of Bavaria)",
    img2: "/images/artemisia2.png",
    subtitle2_el:
      "Wilhelm von Kaulbach, Η Ναυμαχία της Σαλαμίνας, 1868, Maximilianeum (Landtag of Bavaria), Λεπτομέρεια",
    subtitle2_en:
      "Wilhelm von Kaulbach, The Battle of Salamis, 1868, Maximilianeum (Landtag of Bavaria), Detail",
    size1: "",
    size2: "",
  },
  {
    title_el: "Θεμιστοκλής",
    title_en: "Themistocles",
    desc_el: `Αθηναίος, από τον δήμο των Φρεαρρίων της Λεοντίδος φυλής γιος του Νεοκλή και πιθανώς από μητέρα μη Αθηναία. Γεννήθηκε περίπου το 525 π.Χ. Το 493 εκλέχτηκε Επώνυμος Άρχων και έκτοτε παρέμεινε στο πολιτικό προσκήνιο ως μία από τις σημαντικότερες πολιτικές μορφές οι οποίες διοίκησαν την Αθήνα κατά την περίοδο των Περσικών Πολέμων. Μετά το τέλος της θητείας του έγινε όπως ήταν το έθιμο μέλος του Άρειου Πάγου, του συμβουλίου που διοικούσε την Αθήνα. Πιθανώς πολέμησε ως στρατηγός στον Μαραθώνα το 490. Το 483 χάρη στην επιμονή του και τις πολιτικές του ικανότητες έπεισε τους πολίτες της Αθήνας να προβούν σε ναυτικό εξοπλισμό και να καταστήσουν τον Πειραιά οχυρωμένο πολεμικό λιμάνι διοχετεύοντας για τον σκοπό αυτό τα κέρδη από τα ορυχεία αργύρου στο Λαύριο.\n
Κατά τη διάρκεια της εισβολής του Ξέρξη πρωταγωνίστησε στην απόπειρα να οχυρωθούν τα Τέμπη στη Θεσσαλία. Στο εσωτερικό μέτωπο φρόντισε να ανακληθούν οι εξόριστοι προκειμένου να συνεισφέρουν στην άμυνα της πόλης, ανάμεσά τους και ο πολιτικός αντίπαλος Αριστείδης. Επιπλέον χάρη σε αυτόν ο χρησμός από τους Δελφούς για τα ξύλινα τείχη μπροστά στην περσική εισβολή ερμηνεύτηκε ως κίνηση στρατηγικής με το να οχυρωθεί η πόλη πίσω από ξύλινα τείχη, δηλαδή τα πλοία της.  Όταν η απόπειρα να εμποδιστεί η προέλαση του Ξέρξη απέτυχε, ως επικεφαλής του πολεμικού στόλου της Αθήνας διακρίθηκε στη ναυμαχία του Αρτεμίσιου η οποία έλαβε χώρα παράλληλα με τις Θερμοπύλες και ήταν για μία ακόμα φορά ο ιθύνων νους για την εγκατάλειψη της Αθήνας μετά την παραβίαση των Θερμοπυλών. Ο στρατηγικός νους του και δαιμόνιες ενέργειές του οδήγησαν στη ναυμαχία της Σαλαμίνας, το αποκορύφωμα της στρατιωτικής του συμβολής.\n
Μετά τη μάχη των Πλαταιών και την οριστική εκδίωξη των Περσών από τον κυρίως ελληνικό χώρο το 479, ένα επίτευγμα που έφερε τη σφραγίδα της Σπάρτης, ο Θεμιστοκλής προοδευτικά άρχισε να χάνει την πολιτική του επιρροή. Η τελευταία μεγάλη του υπηρεσία προς την πόλη ήταν ότι με διπλωματικό τρόπο αντιστάθηκε στις απαιτήσεις της τελευταίας να ελέγξουν την Αθήνα με το να τις απαγορεύσουν να ανοικοδομήσει τα τείχη της μετά την καταστροφή της από τον Ξέρξη. Ο Θεμιστοκλής προέβη στην οχύρωση της πόλης ερχόμενος σε αντίθεση με τη Σπάρτη την οποία έφερε προ τετελεσμένου. Κάτι που τον έκανε αντιπαθή σε αυτή. Προοδευτικά οι υπόλοιποι πολιτικοί της Αθήνας όπως ο Αριστείδης και ο Ξάνθιππος στράφηκαν προς τον Κίμωνα. Ο Θεμιστοκλής δεν φαίνεται να ανέλαβε κάποιο πολιτικό αξίωμα. Μάλιστα το 477 εμφανίστηκε ως χορηγός της τραγωδίας Φοίνισσαι η οποία αναφέρεται στη Σαλαμίνα, προκειμένου οι Αθηναίοι να θυμηθούν τη μεγάλη του προσφορά στην πόλη. Όπως και να έχει το θέμα, στα τέλη του 470 εξορίστηκε από την Αθήνα με τη διαδικασία του οστρακισμού. Η συγκεκριμένη διαδικασία δείχνει πως είχε χάσει τη λαϊκή υποστήριξη. Καθώς όμως ακόμη και κατά την εξορία του είχε εμπλακεί σε μία σειρά πολιτικών ενεργειών σε βάρος της Σπάρτης, η τελευταία με τη συνδρομή των πολιτικών του αντιπάλων στην Αθήνα τον κατηγόρησε για συνεννόηση με τον Ξέρξη και προδοσία. Πιθανώς μην μπορώντας να αντιμετωπίσει τις συγκεκριμένες κατηγορίες λόγω του γενικότερου αρνητικού εναντίον του κλίματος, ο Θεμιστοκλής προέβη σε μία μυθιστορηματική απόδραση η οποία τον οδήγησε το 465 στην αυλή του Πέρση βασιλέα του οποίου έγινε υποτελής.\n
Πέθανε πιθανώς το 459, αυτοκτονώντας προκειμένου να μην βρεθεί στη θέση να προδώσει την πόλη του δίνοντας συμβουλές στον Πέρση βασιλέα. Σύμφωνα με κάποιες παραδόσεις επειδή ήταν καταδικασμένος σε θάνατο και εξόριστος το σώμα του μεταφέρθηκε μυστικά στην Αθήνα για να ταφεί εκεί. 
`,
    desc_en: `Athenian, from the municipality of Frearria of phyle Leontida, son of Neocles and probably from a non-Athenian mother. He was born around 525 BC. In 493 he was elected Archon Eponimous (Ruler) and since then has remained on the political scene as one of the most important political figures who ruled Athens during the Persian Wars. After the end of his term, as it was customary, he became one of the permanent members of the Supreme Court (Areios Pagos), the council that governed Athens. He probably fought as a general in Marathon in 490. In 483, thanks to his perseverance and political skills, he persuaded the citizens of Athens to construct trierems and make Piraeus a fortified military port, channeling for this purpose the profits from the silver mines to Lavrio.\n
During the invasion of Xerxes he starred in the attempt to fortify Tempi in Thessaly. On the domestic front, he made sure that the exiles were recalled in order to contribute to the defense of the city, among them the political opponent Aristides. Moreover, thanks to him, the prophesy of the Delphi oracle regarding “the wooden walls” in the face of the Persian invasion was interpreted as a strategic move by fortifying the city behind its ships which are its wooden walls. When the attempt to prevent the advance of Xerxes failed, as commander of the Athens fleet he distinguished himself in the naval battle of Artemisio which took place alongside Thermopylae and was once again responsible for leaving Athens after the breach of Thermopylae. His strategic mind and demonic actions led to the naval battle of Salamis, the culmination of his military contribution.\n  
After the battle of Plataea and the final expulsion of the Persians from the Greek mainland in 479, an achievement that bore the stamp of Sparta, Themistocles gradually began to lose his political influence. His last great service to the city of Athens was that he diplomatically resisted Sparta’s demands to control Athens by forbidding Athens to rebuild its walls after its destruction by Xerxes. Themistocles fortified the city in direct opposition to Sparta’s will wand without permitting Sparta to have any say to this decision. Something that made him extremely unpopular to Sparta. Gradually the other politicians of Athens such as Aristides and Xanthippos turned to Kimonas. Themistocles does not seem to have assumed any political office thereafter. In fact, in 477 appeared as a sponsor of the Phoenician tragedy which refers to Salamis, in order for the Athenians to remember his great contribution to the city. Be that as it may, at the end of 470 he was exiled from Athens by the process of ostracism. This process shows that he had lost popular support. However, because even during his exile he was involved in a series of political actions against Sparta, the latter with the help of his political opponents in Athens accused him of collaborating with Xerxes and betrayal. Probably unable to face the specific accusations due to the general negative against him climate, Themistocles made a novel like escape which led him in 465 to the court of the Persian king to whom he became a subordinate.\n
He probably died in 459, committing suicide in order not to betray his city by giving advice to the Persian king. According to some traditions, because he was sentenced to death and exiled, his body was transported secretly to Athens to be buried there.
`,
    img1: "/images/themistocles.png",
    subtitle1_el: "Προτομή του Θεμιστοκλή στο Εθνικό Αρχαιολογικό Μουσείο",
    subtitle1_en: "Bust of Themistocles at the National Archaeological Museum",
    img2: "",
    subtitle2_el: "",
    subtitle2_en: "",
    size1: "",
    size2: "",
  },
  {
    title_el: "Ξέρξης",
    title_en: "Xerxes",
    desc_el: `Σύμφωνα με τον περσικό νόμο, ο Πέρσης βασιλιάς ήταν υποχρεωμένος να ορίσει τον διάδοχό του πριν εκστρατεύσει, ώστε να είναι ομαλή η διαδοχή σε περίπτωση θανάτου του. Αυτό κλήθηκε να κάνει και ο Δαρείος την περίοδο που προετοίμαζε την εκστρατεία στην Ελλάδα μετά τη μάχη του Μαραθώνα. Ο πρωτότοκος γιός του Δαρείου δεν ήταν ο Ξέρξης, αλλά ο Αρτοβαζάνης, ο οποίος είχε αναγνωριστεί ως διάδοχος το 507 π.Χ. Ωστόσο η επιλογή του Αρτοβαζάνη αμφισβητήθηκε από κάποιους ευγενείς της βασιλικής αυλής με το επιχείρημα ότι είχε γεννηθεί πριν εισέλθει ο πατέρας του στον δημόσιο βίο, όταν δεν φανταζόταν πως θα ανέβαινε κάποτε στο θρόνο, και η μητέρα του ήταν μια κοινή θνητή, μια αγνώστου ονόματος κόρη του Γωβρύα. Αντίθετα, ο νεότερος γιός, ο Ξέρξης, ήταν ένας «πορφυρογέννητος» και η μητέρα του, η Άτοσσα, κόρη του ιδρυτή της αυτοκρατορίας Κύρου. Στην Ανατολή, αυτά τα επιχειρήματα ήταν πολύ ισχυρά και έτσι δεν προκαλεί μεγάλη έκπληξη ότι όταν ξέσπασε άγρια διαμάχη στην βασιλική αυλή ανάμεσα στους υποστηρικτές των δύο υποψηφίων για τον θρόνο, τελικά επελέγη ο Ξέρξης, ο νεότερος γιός, που προερχόταν όμως από ευγενικής καταγωγής σύζυγο. Λαμβάνοντας υπόψη τις περιστάσεις της ανόδου του Ξέρξη στο θρόνο, υπάρχει μια ισχυρή πιθανότητα ότι είχε πολλά να αποδείξει ως Μεγάλος Βασιλιάς.\n
Όταν το 486 μετά τον θάνατο του πατέρα του αναδείχτηκε ως ο μοναδικός Πέρσης βασιλέας, ο Ξέρξης αντιμετώπισε εξεγέρσεις τόσο στην Αίγυπτο όσο και στη Βαβυλώνα. Ωστόσο δεν φαίνεται να εγκατέλειψε τα σχέδια του πατέρα του για μία εκστρατεία αντιποίνων εναντίον των ελληνικών πόλεων, η οποία μετά την καταστολή των εξεγέρσεων δρομολογήθηκε το 481 π.Χ. για να ξεκινήσει το 480.\n
Όπως είναι φυσικό, οι ελληνικές πηγές παρουσιάζουν τον Ξέρξη ως το απόλυτο ηγεμόνα της Ανατολής του οποίου η υπεροψία δεν γνωρίζει όρια και αποτελεί τον στόχο τιμωρίας των θεών. Υπερόπτης και ιερόσυλος, θεωρείται το σημείο αφετηρίας της παρακμής της περσικής αυτοκρατορίας. Ωστόσο η εικόνα αυτή ανατρέπεται μερικώς από τις ανατολικές πηγές, οι οποίες τον παρουσιάζουν ως ένα ισχυρό ηγεμόνα που διατήρησε ενωμένη την αυτοκρατορία που κληρονόμησε από τον πατέρα του Δαρείο Α΄ διατηρώντας την περσική παρουσία  και έλεγχο των αχανών εκτάσεων του κράτους του. Αποτελούσε το εστιακό σημείο της αυτοκρατορίας και τον ευσεβή ηγεμόνα που προστάτευε τους υπηκόους του.\n
Μετά την αποτυχημένη εισβολή στην Ελλάδα η βασιλεία του συνεχίστηκε αδιατάρακτη, αλλά τελικά ο Ξέρξης έπεσε θύμα αυλικής συνομωσίας και έχασε τη ζωή του το 465 π.Χ.
`,
    desc_en: `According to Persian law, the Persian king was obliged to appoint his successor before he campaigned, so that the succession would be smooth in case of his death. This is what Darius was called to do during the period when he was preparing the campaign in Greece after the battle of Marathon. The eldest son of Darius was not Xerxes, but Artovazanis, who was recognized as his successor in 507 BC. However, the choice of Artovazanis was disputed by some nobles of the royal court, arguing that he was born before his father entered public life, when he did not imagine that he would ever ascend the throne, and that his mother was a common mortal, a woman with the unknown name Govryas. On the contrary, the youngest son, Xerxes, was of pure "royal blood" as his mother, Atossa, was the daughter of the founder of the empire Cyrus. In the East, these arguments were very strong and so it is not surprising that when a fierce controversy broke out in the royal court between the supporters of the two candidates for the throne, Xerxes, the youngest son, was chosen, because his mother was a noble woman.  Given the circumstances of Xerxes' ascension to the throne, there is a strong possibility that he had much to prove as the Great King.\n
When in 486 after the death of his father he became the only Persian king, Xerxes faced uprisings in both Egypt and Babylon. However, he does not seem to have abandoned his father's plans for a campaign of retaliation against the Greek cities, which after the suppression of the revolts was organized in 481 BC and started in 480.\n
Naturally, Greek sources present Xerxes as the absolute ruler of the East whose arrogance knows no boundaries and should be subjected to punishment by the gods. Arrogant and sacrilegious, it is considered the starting point of the decline of the Persian Empire. However, this image is partially overturned by Eastern sources, which present him as a powerful ruler who kept united the empire he inherited from his father Darius I while maintaining the Persian presence and control over the vast areas of his state. He was the focal point of the empire and the pious ruler who protected his subjects.\n
After the failed invasion of Greece, his reign continued undisturbed, but finally Xerxes fell victim to a court conspiracy and lost his life in 465 BC.
`,
    img1: "/images/xerxis.png",
    subtitle1_el:
      "Ανάγλυφο που παριστάνει πιθανόν τον Ξέρξη. Μουσείο Τεχεράνης",
    subtitle1_en: "A relief that probably represents Xerxes. Museum of Tehran",
    img2: "",
    subtitle2_el: "",
    subtitle2_en: "",
    size1: "",
    size2: "",
  },
];

export default function Viografies() {
  const { locale } = useRouter();
  return (
    <div className="grid scroll-smooth text-white text-xl grid-cols-[200px_1fr] overflow-scroll w-screen h-screen">
      <div>
        <ul className="flex h-screen sticky top-0 pl-8 items-start list-disc justify-center flex-col   text-gray-300  border-r border-opacity-30 border-white">
          {sections.map((p, idx) => (
            <Link key={idx} href={`#${p.title_en}`}>
              <li role="button" className="list-item w-full ">
                {p[`title_${locale}`]}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="p-4  container mx-auto">
        {sections.map((obj, idx) => (
          <div
            id={obj.title_en}
            className="txt-white mb-10 border-b border-white border-opacity-50 pb-20"
            key={idx}
          >
            <div className="text-4xl">{obj[`title_${locale}`]}</div>
            {obj.img1 && (
              <>
                <br />
                <br />
                <img className="w-1/2" src={obj.img1} />
              </>
            )}
            {obj[`subtitle1_${locale}`] && (
              <>
                <br />
                <br />
                <h1 className="text-gray-300 text-sm">
                  {obj[`subtitle1_${locale}`]}
                </h1>
              </>
            )}
            {obj.img2 && (
              <>
                <br />
                <br />
                <img className="w-1/2" src={obj.img2} />
              </>
            )}
            {obj[`subtitle2_${locale}`] && (
              <>
                <br />
                <br />
                <h1 className="text-gray-300 text-sm">
                  {obj[`subtitle2_${locale}`]}
                </h1>
              </>
            )}
            <br />
            <br />
            <NewlineText text={obj[`desc_${locale}`]} />
          </div>
        ))}
      </div>
    </div>
  );
}
