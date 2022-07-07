import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const desc = {
  el: {
    oplitis: {
      title: "Περιγραφή του οπλίτη",
      desc: `Το βασικό εξάρτημα του οπλίτη ήταν το όπλον ή ασπίδα. Ήταν στρογγυλή με διάμετρο 80 ως 100 εκ., αρχικά ξύλινη με ορειχάλκινη ενίσχυση στα άκρα, αλλά στη συνέχεια καλύφθηκε τελείως με ορείχαλκο. Είχε διπλή λαβή: μία δερμάτινη λωρίδα ή μεταλλικό έλασμα στο κέντρο (πόρπαξ), όπου περνούσε το αριστερό χέρι ως τον αγκώνα, κι ένα σχοινί ή δερμάτινη λαβή για την παλάμη κοντά στο εξωτερικό χείλος. Το σχήμα του όπλου σήμαινε ότι μπορούσε να καλύπτει μόνο την αριστερή πλευρά του σώματος, με ένα σημαντικό τμήμα του να προεξέχει προς τα αριστερά. Καθώς η φάλαγγα παρατασσόταν σε σφιχτό σχηματισμό, με τις ασπίδες να επικαλύπτονται, κάθε οπλίτης σκέπαζε την απροστάτευτη δεξιά πλευρά του συμπολεμιστή του. Τα άλλα τυπικά εξαρτήματα του οπλίτη ήταν η περικεφαλαία, οι ορειχάλκινοι θώρακες και περικνημίδες. Τα κύρια, όμως, όπλα του οπλίτη ήταν το δόρυ, μήκους 1,5-2μ., που το χειριζόταν με υψωμένο το χέρι και το ξίφος από σίδερο με ορειχάλκινα εξαρτήματα, που είχε δίκοπη, φυλλόσχημη λεπίδα με μήκος 60εκ. και ήταν τοποθετημένο σε θήκη που κρεμόταν από τον ώμο.
      Το αποτέλεσμα του σχηματισμού της φάλαγγας περιγράφεται πολύ ωραία από τον Θουκυδίδη (5.71): «Όλοι, ανεξαιρέτως, οι στρατοί, καθώς προχωρούν για να χτυπηθούν, έχουν την τάση να επεκτείνονται λοξώς δεξιά, έτσι ώστε με το δεξιό τους να υπεφαλαγγίζουν το αριστερό του αντιπάλου. Αυτό συμβαίνει γιατί κάθε στρατιώτης, από φόβο, προσπαθεί να προφυλάξει την απροστάτευτη πλευρά του πίσω από την ασπίδα του συμπολεμιστή του στα δεξιά, πιστεύοντας ότι όσο πιο πυκνά στέκουν οι ασπίδες τόσο πιο ασφαλής θα είναι. Αυτό ξεκινάει από τον άντρα στο δεξί άκρο της πρώτης γραμμής που προσπαθεί πάντα να κρατάει τη δεξιά εκτεθειμένη πλευρά του μακριά από τον εχθρό, και έτσι μεταδίδει τον φόβο στους άλλους, που ακολουθούν το παράδειγμά του».`,
    },
    shield: {
      title: `Ασπίδα`,
      desc: `Το κατεξοχήν σημείο που χαρακτήριζε τον Έλληνα οπλίτη. Αποτελεί ένα θαύμα της μηχανικής, καθώς ο συνδυασμός διαφόρων υλικών όπως ξύλινη βάση και στρώματα από ύφασμα και ορείχαλκο την κάνουν ανθεκτική στα χτυπήματα, αλλά και αρκούντως ελαφριά ώστε να είναι διαχειρίσιμη. Δεν προστατεύει μόνο τον φέροντα, αλλά στον σχηματισμό της φάλαγγας και τον διπλανό του. Σε πολλές περιπτώσεις λοιπόν η κατοχή της είναι ζήτημα ζωής και θανάτου και η απώλειά της η μεγαλύτερη ντροπή και ήττα που θα μπορούσε να βιώσει ένας Έλληνας στρατιώτης.  `,
    },
    armor: {
      title: `Θώρακας και περικνημίδες`,
      desc: `αποτελούν τα βασικά μέρη της προστασίας του σώματος του οπλίτη. Συνιστούν προϊόν εξέλιξης από τις παλιές ολόσωμες πανοπλίες κατά τον 7ο και 6ο αιώνα, όπου κομμάτια μετάλλου, ορείχαλκου κυρίως εφαρμόζονταν στον κορμό του πολεμιστή καθιστώντας τον δυσκίνητο. Στις αρχές του 5ου αιώνα έχουν αντικατασταθεί από υφασμάτινους ή δερμάτινους θώρακες που φέρουν μεταλλικά εξαρτήματα είτε πολλαπλά στρώματα του αντίστοιχου υλικού, αλλά διατηρώντας τις μεταλλικές περικνημίδες, συνήθως από ορείχαλκο. Με τον τρόπο αυτό ο οπλίτης αποκτά ευκινησία και η φάλαγγα είναι σε θέση να εκτελέσει περίπλοκους ελιγμούς. `,
    },
    helmet: {
      title: `Κράνος`,
      desc: `Την προστασία του οπλίτη ολοκλήρωνε το κράνος στο κεφάλι του. Δεδομένου ότι ο οπλίτης μαχόταν εκ του συστάδην, το κράνος δεν θα έπρεπε να είναι τόσο βαρύ ώστε εμποδίζει την όραση ή την ακοή του. Επομένως η προστασία που του προσέφερε δεν ήταν και τόσο πλήρης, μία παραχώρηση στην ευελιξία του κατά τη μάχη. Ωστόσο, δεν έπαυε να ήταν άβολο και γι’ αυτό σε αρκετές περιπτώσεις ο οπλίτης φορούσε ένα δερμάτινο σκούφο στο εσωτερικό πριν φορέσει την περικεφαλαία του. Στις περισσότερες περιπτώσεις κατά τον 5ο αιώνα ήταν περίκλειστο προστατεύοντας το πρόσωπο έως τις κάτω παρειές. Αυτός είναι ο τύπος κράνους γνωστός ως Κορινθιακός. Στο κράνος συνήθως προσαρμοζόταν λοφία από τρίχες αλόγου σε διάφορα μεγέθη και χρώματα. Αρχικά σκοπός ήταν να φαίνεται ο οπλίτης ψηλότερος και πιο επιβλητικός, προοδευτικά όμως τα διαφορετικά λοφία δήλωναν τους βαθμοφόρους κατά την παράταξη.`,
    },
    spear: {
      title: `Δόρυ`,
      desc: `το κατεξοχήν επιθετικό όπλο. Πρόκειται για ένα ξύλινο στέλεχος με μήκος που ποικίλει από τα 2,2 έως τα 2,7 μέτρα. Συνήθως ήταν φτιαγμένο από το δέντρο Φράξος (γνωστό και ως Μελία) προκειμένου να είναι ελαφρύ αλλά ανθεκτικό μαζί. Μπροστά είχε προσαρμοσμένη μία μεταλλική αιχμή, ενώ στο κάτω μέρος μία ακόμη μικρότερη με το όνομα σαυρωτήρας. Ο αντίπαλος εκτός από τον τοίχο των ασπίδων όφειλε να αντιμετωπίσει και ένα δάσος δοράτων τα οποία εξείχαν μπροστά από τις ασπίδες σε όλο το μέτωπο αλλά και στο βάθος της παράταξης. Ακόμα και όταν ένα δόρυ έσπαγε κατά τη σύγκρουση, ο κάτοχός του μπορούσε να χρησιμοποιήσει το κάτω μέρος του το οποίο έφερε σαυρωτήρα ως εφεδρική αιχμή. Σε περίπτωση που το δόρυ έμενε άθικτο, σαυρωτήρας χρησίμευε ως αντίβαρο προκειμένου το δόρυ να παραμένει ζυγισμένο. Σε περίπτωση πάλι που επιτυγχανόταν η διάσπαση της αντίπαλης παράταξης, κατά την προέλαση των νικηφόρων οπλιτών ο σαυρωτήρας έδινε τη χαριστική βολή στους πεσμένους αντιπάλους.`,
    },
    sword: {
      title: `Ξίφος`,
      desc: `Ως βοηθητικό όπλο ο οπλίτης έφερε και ένα ξίφος. Ο συγκεκριμένος όρος αφορούσε μία ίσια δίκοπη λεπίδα με ορειχάλκινη συνήθως λαβή. Κατά τον 5ο όμως αιώνα και με την επαφή του οπλίτη με τους στρατούς της Ανατολής, αρχίζουν να εμφανίζονται και κυρτές λεπίδες, οι οποίες πλαταίνουν προς την αιχμή, όπως η κοπίς και η μάχαιρα, προκειμένου τα χτυπήματα κατά τη μάχη σώμα και σώμα να αποκτήσουν μεγαλύτερη θλαστικότητα. `,
    },
  },
};

export default function Page() {
  const { unityProvider, sendMessage, isLoaded, loadingProgression } =
    useUnityContext({
      streamingAssetsUrl: "/unity/oplitis.data",
      loaderUrl: "/unity/oplitis.loader.js",
      dataUrl: "/unity/oplitis.data",
      frameworkUrl: "/unity/oplitis.framework.js",
      codeUrl: "/unity/oplitis.wasm",
    });

  const [inv, setInv] = useState({
    toggleSpear: false,
    toggleSword: false,
    toggleArmor: false,
    toggleHelmet: false,
    toggleShield: false,
    toggleShoes: false,
  });
  const [text, setText] = useState({
    title: "",
    desc: "",
  });

  function toggleSword(b: string) {
    sendMessage("GameObject", "toggleSpear", `false`);
    sendMessage("GameObject", "toggleSword", `${b}`);
  }
  function toggleSpear(b: string) {
    sendMessage("GameObject", "toggleSword", `false`);
    sendMessage("GameObject", "toggleSpear", `${b}`);
  }
  function toggleArmor(b: string) {
    sendMessage("GameObject", "toggleArmor", `${b}`);
  }
  function toggleHelmet(b: string) {
    sendMessage("GameObject", "toggleHelmet", `${b}`);
  }
  function toggleShield(b: string) {
    sendMessage("GameObject", "toggleShield", `${b}`);
  }
  function toggleShoes(b: string) {
    sendMessage("GameObject", "toggleShoes", `${b}`);
  }

  useEffect(() => {
    setText(desc.el.oplitis);
    Object.keys(inv).forEach((key) => sendMessage("GameObject", key, `false`));
  }, [sendMessage]);
  useEffect(() => {
    if (Object.values(inv).every((v) => v === false)) {
      setText(desc.el.oplitis);
    }
  }, [inv]);

  const items = [
    {
      url: "helmet.png",
      name: `toggleHelmet`,
      fn: () => {
        toggleHelmet(`${!inv.toggleHelmet}`);
        setText(desc.el.helmet);
        setInv((s) => ({ ...s, toggleHelmet: !inv.toggleHelmet }));
      },
    },
    {
      url: "shield.png",
      name: `toggleShield`,
      fn: () => {
        toggleShield(`${!inv.toggleShield}`);
        setText(desc.el.shield);
        setInv((s) => ({ ...s, toggleShield: !inv.toggleShield }));
      },
    },
    {
      url: "sword.png",
      name: `toggleSword`,
      fn: () => {
        toggleSword(`${!inv.toggleSword}`);
        setText(desc.el.sword);
        setInv((s) => ({
          ...s,
          toggleSpear: false,
          toggleSword: !inv.toggleSword,
        }));
      },
    },
    {
      url: "spear.png",
      name: `toggleSpear`,
      fn: () => {
        toggleSpear(`${!inv.toggleSpear}`);
        setText(desc.el.spear);
        setInv((s) => ({
          ...s,
          toggleSword: false,
          toggleSpear: !inv.toggleSpear,
        }));
      },
    },
    {
      url: "armor.png",
      name: `toggleArmor`,
      fn: () => {
        toggleArmor(`${!inv.toggleArmor}`);
        setText(desc.el.armor);
        setInv((s) => ({ ...s, toggleArmor: !inv.toggleArmor }));
      },
    },
    {
      url: "shoes.png",
      name: `toggleShoes`,
      fn: () => {
        toggleShoes(`${!inv.toggleShoes}`);
        setText(desc.el.armor);
        setInv((s) => ({ ...s, toggleShoes: !inv.toggleShoes }));
      },
    },
  ];

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
        <div className="fixed select-none bottom-0 w-screen  flex ">
          <div className="md:mx-auto gap-3 grid grid-cols-6">
            {items.map((o) => (
              <img
                key={o.url}
                onClick={o.fn}
                role={"button"}
                className={clsx(
                  "lg:w-20 lg:h-20 w-16 h-16  bg-opacity-10 p-4",
                  {
                    // @ts-ignore
                    "bg-green-500": inv[o.name],
                    // @ts-ignore
                    "bg-white": !inv[o.name],
                  }
                )}
                src={`/images/${o.url}`}
              />
            ))}
          </div>
        </div>
      )}
      {isLoaded && (
        <div className="fixed select-none z-50 right-0 hidden md:block h-screen w-96 text-white top-0 pt-4  bg-black bg-opacity-20">
          <h1 className="text-2xl font-bold">{text.title}</h1>
          <h1 className=" mt-6 h-[90vh] overflow-auto">{text.desc}</h1>
        </div>
      )}
    </div>
  );
}
