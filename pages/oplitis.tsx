import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const desc = {
  oplitis: {
    title_el: "Περιγραφή του οπλίτη",
    title_en: "Description of the hoplite",
    desc_el: `Το βασικό εξάρτημα του οπλίτη ήταν το όπλον ή ασπίδα. Ήταν στρογγυλή με διάμετρο 80 ως 100 εκ., αρχικά ξύλινη με ορειχάλκινη ενίσχυση στα άκρα, αλλά στη συνέχεια καλύφθηκε τελείως με ορείχαλκο. Είχε διπλή λαβή: μία δερμάτινη λωρίδα ή μεταλλικό έλασμα στο κέντρο (πόρπαξ), όπου περνούσε το αριστερό χέρι ως τον αγκώνα, κι ένα σχοινί ή δερμάτινη λαβή για την παλάμη κοντά στο εξωτερικό χείλος. Το σχήμα του όπλου σήμαινε ότι μπορούσε να καλύπτει μόνο την αριστερή πλευρά του σώματος, με ένα σημαντικό τμήμα του να προεξέχει προς τα αριστερά. Καθώς η φάλαγγα παρατασσόταν σε σφιχτό σχηματισμό, με τις ασπίδες να επικαλύπτονται, κάθε οπλίτης σκέπαζε την απροστάτευτη δεξιά πλευρά του συμπολεμιστή του. Τα άλλα τυπικά εξαρτήματα του οπλίτη ήταν η περικεφαλαία, οι ορειχάλκινοι θώρακες και περικνημίδες. Τα κύρια, όμως, όπλα του οπλίτη ήταν το δόρυ, μήκους 1,5-2μ., που το χειριζόταν με υψωμένο το χέρι και το ξίφος από σίδερο με ορειχάλκινα εξαρτήματα, που είχε δίκοπη, φυλλόσχημη λεπίδα με μήκος 60εκ. και ήταν τοποθετημένο σε θήκη που κρεμόταν από τον ώμο.\n
  Το αποτέλεσμα του σχηματισμού της φάλαγγας περιγράφεται πολύ ωραία από τον Θουκυδίδη (5.71):  «Όλοι, ανεξαιρέτως, οι στρατοί, καθώς προχωρούν για να χτυπηθούν, έχουν την τάση να επεκτείνονται λοξώς δεξιά, έτσι ώστε με το δεξιό τους να υπεφαλαγγίζουν το αριστερό του αντιπάλου. Αυτό συμβαίνει γιατί κάθε στρατιώτης, από φόβο, προσπαθεί να προφυλάξει την απροστάτευτη πλευρά του πίσω από την ασπίδα του συμπολεμιστή του στα δεξιά, πιστεύοντας ότι όσο πιο πυκνά στέκουν οι ασπίδες τόσο πιο ασφαλής θα είναι. Αυτό ξεκινάει από τον άντρα στο δεξί άκρο της πρώτης γραμμής που προσπαθεί πάντα να κρατάει τη δεξιά εκτεθειμένη πλευρά του μακριά από τον εχθρό, και έτσι μεταδίδει τον φόβο στους άλλους, που ακολουθούν το παράδειγμά του».
  `,
    desc_en: `The basic component of the hoplite was the weapon (ὅπλον) or shield. It was round with a diameter of 80 to 100 cm, initially wooden with brass reinforcement at the ends, but then completely covered with brass. It had a double handle: a leather strap or metal plate in the center (porpax), where the left hand passed to the elbow, and a rope or leather handle for the palm near the outer edge. The shape of the weapon meant that it could only cover the left side of the body, with a significant portion protruding to the left. As the phalanx lined up in a tight formation, with shields overlapping, each hoplite covered the unprotected right side of its comrade-in-arms. The other typical accessories of the hoplite were the helmet, the brass breastplates and the leggings. The main weapons of the hoplite, however, were the spear, 1.5-2 m long, which he handled with his hand raised, and the iron sword with brass fittings, which had a double-edged, leaf-shaped blade 60 cm long. and was placed in a case that hung from the shoulder.\n
  The result of the formation of the phalanx is very nicely described by Thucydides (5.71): «This is because every soldier, out of fear, tries to protect his unprotected side behind the shield of his comrade on the right, believing that the denser the shields stand, the safer they will be. This starts with the man at the right end of the front line who always tries to keep his right exposed side away from the enemy, and thus transmits the fear to the others, who follow his example».`,
  },

  shield: {
    title_el: "Ασπίδα",
    title_en: "Shield",
    desc_el:
      "Το κατεξοχήν σημείο που χαρακτήριζε τον Έλληνα οπλίτη. Αποτελεί ένα θαύμα της μηχανικής, καθώς ο συνδυασμός διαφόρων υλικών όπως ξύλινη βάση και στρώματα από ύφασμα και ορείχαλκο την κάνουν ανθεκτική στα χτυπήματα, αλλά και αρκούντως ελαφριά ώστε να είναι διαχειρίσιμη. Δεν προστατεύει μόνο τον φέροντα, αλλά στον σχηματισμό της φάλαγγας και τον διπλανό του. Σε πολλές περιπτώσεις λοιπόν η κατοχή της είναι ζήτημα ζωής και θανάτου και η απώλειά της η μεγαλύτερη ντροπή και ήττα που θα μπορούσε να βιώσει ένας Έλληνας στρατιώτης.",
    desc_en:
      "The pre-eminent point that characterized the Greek hoplite. It is a marvel of engineering, as the combination of various materials such as wooden base and layers of fabric and brass make it impact resistant, but also light enough to be manageable. It protects not only the carrier, but also the formation of the phalanx and its adjacent. In many cases, its possession is a matter of life and death and its loss the greatest shame and defeat that a Greek soldier could experience.",
  },
  armor: {
    title_el: "Θώρακας και περικνημίδες",
    title_en: "Body armor and leggings",
    desc_el:
      "Αποτελούν τα βασικά μέρη της προστασίας του σώματος του οπλίτη. Συνιστούν προϊόν εξέλιξης από τις παλιές ολόσωμες πανοπλίες κατά τον 7ο και 6ο αιώνα, όπου κομμάτια μετάλλου, ορείχαλκου κυρίως εφαρμόζονταν στον κορμό του πολεμιστή καθιστώντας τον δυσκίνητο. Στις αρχές του 5ου αιώνα έχουν αντικατασταθεί από υφασμάτινους ή δερμάτινους θώρακες που φέρουν μεταλλικά εξαρτήματα είτε πολλαπλά στρώματα του αντίστοιχου υλικού, αλλά διατηρώντας τις μεταλλικές περικνημίδες, συνήθως από ορείχαλκο. Με τον τρόπο αυτό ο οπλίτης αποκτά ευκινησία και η φάλαγγα είναι σε θέση να εκτελέσει περίπλοκους ελιγμούς.",
    desc_en:
      "They are the main parts of the protection of the hoplite's body. They are a product of evolution from the old full body armor during the 7th and 6th century, where pieces of metal, brass were mainly applied to the warrior's trunk, making it cumbersome. At the beginning of the 5th century they were replaced by fabric or leather breastplates that have metal parts or multiple layers of the corresponding material, but retaining the metal leggings, usually made of brass. In this way the hoplite acquires agility and the phalanx is able to perform complex maneuvers.",
  },
  helmet: {
    title_el: "Κράνος",
    title_en: "Helmet",
    desc_el:
      "Την προστασία του οπλίτη ολοκλήρωνε το κράνος στο κεφάλι του. Δεδομένου ότι ο οπλίτης μαχόταν εκ του συστάδην, το κράνος δεν θα έπρεπε να είναι τόσο βαρύ ώστε εμποδίζει την όραση ή την ακοή του. Επομένως η προστασία που του προσέφερε δεν ήταν και τόσο πλήρης, μία παραχώρηση στην ευελιξία του κατά τη μάχη. Ωστόσο, δεν έπαυε να ήταν άβολο και γι’ αυτό σε αρκετές περιπτώσεις ο οπλίτης φορούσε ένα δερμάτινο σκούφο στο εσωτερικό πριν φορέσει την περικεφαλαία του. Στις περισσότερες περιπτώσεις κατά τον 5ο αιώνα ήταν περίκλειστο προστατεύοντας το πρόσωπο έως τις κάτω παρειές. Αυτός είναι ο τύπος κράνους γνωστός ως Κορινθιακός. Στο κράνος συνήθως προσαρμοζόταν λοφία από τρίχες αλόγου σε διάφορα μεγέθη και χρώματα. Αρχικά σκοπός ήταν να φαίνεται ο οπλίτης ψηλότερος και πιο επιβλητικός, προοδευτικά όμως τα διαφορετικά λοφία δήλωναν τους βαθμοφόρους κατά την παράταξη.",
    desc_en:
      "The protection of the hoplite was completed by the helmet on his head. Since the hoplite was fighting from the cluster, the helmet should not be so heavy that it impedes his sight or hearing. Therefore the protection he offered him was not so complete, a concession to his flexibility during battle. However, it did not cease to be uncomfortable, which is why on several occasions the hoplite wore a leather hat inside before putting on his helmet. In most cases during the 5th century it was enclosed protecting the face up to the lower cheeks. This is the type of helmet known as Corinthian. Horseshoes were usually fitted with helmets in various sizes and colors. Initially, the aim was to make the hoplite look taller and more imposing, but gradually the different plumes declared the ranks in the lineup.",
  },
  spear: {
    title_el: "Δόρυ",
    title_en: "Spear",
    desc_el:
      "Το κατεξοχήν επιθετικό όπλο. Πρόκειται για ένα ξύλινο στέλεχος με μήκος που ποικίλει από τα 2,2 έως τα 2,7 μέτρα. Συνήθως ήταν φτιαγμένο από το δέντρο Φράξος (γνωστό και ως Μελία) προκειμένου να είναι ελαφρύ αλλά ανθεκτικό μαζί. Μπροστά είχε προσαρμοσμένη μία μεταλλική αιχμή, ενώ στο κάτω μέρος μία ακόμη μικρότερη με το όνομα σαυρωτήρας. Ο αντίπαλος εκτός από τον τοίχο των ασπίδων όφειλε να αντιμετωπίσει και ένα δάσος δοράτων τα οποία εξείχαν μπροστά από τις ασπίδες σε όλο το μέτωπο αλλά και στο βάθος της παράταξης. Ακόμα και όταν ένα δόρυ έσπαγε κατά τη σύγκρουση, ο κάτοχός του μπορούσε να χρησιμοποιήσει το κάτω μέρος του το οποίο έφερε σαυρωτήρα ως εφεδρική αιχμή. Σε περίπτωση που το δόρυ έμενε άθικτο, σαυρωτήρας χρησίμευε ως αντίβαρο προκειμένου το δόρυ να παραμένει ζυγισμένο. Σε περίπτωση πάλι που επιτυγχανόταν η διάσπαση της αντίπαλης παράταξης, κατά την προέλαση των νικηφόρων οπλιτών ο σαυρωτήρας έδινε τη χαριστική βολή στους πεσμένους αντιπάλους.",
    desc_en:
      "The ultimate offensive weapon. It is a wooden stem with a length that varies from 2.2 to 2.7 meters. It was usually made from the Fraxos tree (also known as Melia) in order to be light but durable together. At the front there was a metal tip, while at the bottom there was an even smaller one called a strainer. The opponent, in addition to the wall of shields, had to face a forest of spears which protruded in front of the shields across the front and in the back of the line. Even when a spear broke during the collision, the holder could use its bottom which had a scraper as a spare tip. If the spear remained intact, a screwdriver served as a counterweight to keep the spear weighed. In case the split of the opposing faction was achieved again, during the advance of the victorious hoplites, the scanner gave the free shot to the fallen opponents.",
  },
  sword: {
    title_el: "Ξίφος",
    title_en: "Sword",
    desc_el:
      "Ως βοηθητικό όπλο ο οπλίτης έφερε και ένα ξίφος. Ο συγκεκριμένος όρος αφορούσε μία ίσια δίκοπη λεπίδα με ορειχάλκινη συνήθως λαβή. Κατά τον 5ο όμως αιώνα και με την επαφή του οπλίτη με τους στρατούς της Ανατολής, αρχίζουν να εμφανίζονται και κυρτές λεπίδες, οι οποίες πλαταίνουν προς την αιχμή, όπως η κοπίς και η μάχαιρα, προκειμένου τα χτυπήματα κατά τη μάχη σώμα και σώμα να αποκτήσουν μεγαλύτερη θλαστικότητα.",
    desc_en:
      "As an auxiliary weapon, the hoplite also brought a sword. This term referred to a straight double-edged blade with a brass handle usually. However, during the 5th century and with the contact of the hoplite with the armies of the East, convex blades began to appear, which widened towards the tip, such as the cutter and the knife, in order for the blows during the battle to gain more body and body fragility.",
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

  const [inv, setInv] = useState({
    toggleSpear: false,
    toggleSword: false,
    toggleArmor: false,
    toggleHelmet: false,
    toggleShield: false,
    toggleShoes: false,
  });
  const [text, setText] = useState<any>(desc.oplitis);

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
    setText(desc.oplitis);
    Object.keys(inv).forEach((key) => sendMessage("GameObject", key, `false`));
  }, [sendMessage]);

  useEffect(() => {
    if (Object.values(inv).every((v) => v === false)) {
      setText(desc.oplitis);
    }
  }, [inv]);

  const items = [
    {
      url: "helmet.png",
      name: `toggleHelmet`,
      fn: () => {
        toggleHelmet(`${!inv.toggleHelmet}`);
        setText(desc.helmet);
        setInv((s) => ({ ...s, toggleHelmet: !inv.toggleHelmet }));
      },
    },
    {
      url: "shield.png",
      name: `toggleShield`,
      fn: () => {
        toggleShield(`${!inv.toggleShield}`);
        setText(desc.shield);
        setInv((s) => ({ ...s, toggleShield: !inv.toggleShield }));
      },
    },
    {
      url: "sword.png",
      name: `toggleSword`,
      fn: () => {
        toggleSword(`${!inv.toggleSword}`);
        setText(desc.sword);
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
        setText(desc.spear);
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
        setText(desc.armor);
        setInv((s) => ({ ...s, toggleArmor: !inv.toggleArmor }));
      },
    },
    {
      url: "shoes.png",
      name: `toggleShoes`,
      fn: () => {
        toggleShoes(`${!inv.toggleShoes}`);
        setText(desc.armor);
        setInv((s) => ({ ...s, toggleShoes: !inv.toggleShoes }));
      },
    },
  ];
  const { locale } = useRouter();

  return (
    <div
      style={{
        backgroundImage: `url(/images/backgroundHoplite.jpg)`,
        backgroundSize: "100% 100%",
      }}
      className="h-screen w-screen overflow-hidden"
    >
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
        className="w-screen  h-screen relative"
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
        <div className="fixed select-none text-justify px-4 z-50 right-0 overflow-auto hidden md:block h-screen w-[26vw] text-white top-0 pt-4  bg-black bg-opacity-20">
          <h1 className="text-2xl mb-4 font-bold">{text[`title_${locale}`]}</h1>
          <NewlineText text={text[`desc_${locale}`]} />
        </div>
      )}
    </div>
  );
}
