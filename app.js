// ==========================================================================
// School Talent Show - Application Logic & Database (Tableau de Suivi)
// ==========================================================================

// --- Database Configuration ---
// These arrays are the "live" working copies (mutated by user edits)
let STUDENTS = [
  { id: "s1",   name: "Alya",           group: "Groupe Alya",      acts: ["a1","a11","a12","a19","a36"] },
  { id: "s2",   name: "Elenna",         group: "Groupe Alya",      acts: ["a1","a15","a19","a46"] },
  { id: "s3",   name: "Elaïa",          group: "Groupe Alya",      acts: ["a1","a19","a36"] },
  { id: "s4",   name: "Kelyana",        group: "Groupe Alya",      acts: ["a1","a19","a46","a49"] },
  { id: "s5",   name: "Jasmine",        group: "Groupe Alya",      acts: ["a2","a19","a41","a48"] },
  { id: "s6",   name: "Léa",            group: "Groupe Alya",      acts: ["a2","a14","a19","a48"] },
  { id: "s7",   name: "Lina M.",        group: "Groupe Alya",      acts: ["a2"] },

  { id: "s8",   name: "Yara",           group: "Groupe Yara",      acts: ["a9","a20","a47"] },
  { id: "s9",   name: "Lilly",          group: "Groupe Yara",      acts: ["a3","a19","a38","a47"] },
  { id: "s10",  name: "Divine",         group: "Groupe Yara",      acts: ["a3","a4","a19"] },
  { id: "s11",  name: "Ryma",           group: "Groupe Yara",      acts: ["a3","a4"] },
  { id: "s12",  name: "Clara",          group: "Groupe Yara",      acts: ["a3","a4","a19","a34","a47"] },
  { id: "s13",  name: "Lydia",          group: "Groupe Yara",      acts: ["a3","a19","a34","a47"] },
  { id: "s15",  name: "Sasha",          group: "Groupe Yara",      acts: ["a9","a10"] },
  { id: "s17",  name: "Lya",            group: "Groupe Yara",      acts: ["a13","a14"] },
  { id: "s18",  name: "Eileen",         group: "Groupe Yara",      acts: ["a15","a19"] },
  { id: "s19",  name: "Léana",          group: "Groupe Yara",      acts: ["a15","a19"] },
  { id: "s20",  name: "Céline",         group: "Groupe Yara",      acts: ["a15","a19"] },
  { id: "s21",  name: "Ched",           group: "Groupe Yara",      acts: ["a16","a20"] },
  { id: "s22",  name: "Kaylan",         group: "Groupe Yara",      acts: ["a17"] },
  { id: "s23",  name: "Elvin",          group: "Groupe Yara",      acts: ["a17","a28"] },
  { id: "s24",  name: "Arthur",         group: "Groupe Yara",      acts: ["a17"] },
  { id: "s25",  name: "Alioun",         group: "Groupe Yara",      acts: ["a17"] },
  { id: "s26",  name: "Keren",          group: "Groupe Yara",      acts: ["a3","a18"] },
  { id: "s27",  name: "Mia",            group: "Groupe Yara",      acts: ["a19","a47"] },
  { id: "s29",  name: "Maïmouna",       group: "Groupe Maïmouna",  acts: ["a3","a21"] },
  { id: "s30",  name: "Grace",          group: "Groupe Yara",      acts: ["a3","a30","a47"] },
  { id: "s31",  name: "Tania",          group: "Groupe Yara",      acts: ["a3"] },
  { id: "s32",  name: "Nayana",         group: "Groupe Yara",      acts: ["a19","a47"] },
  { id: "s33",  name: "Maïssa",         group: "Groupe Maïssa",    acts: ["a19","a30","a31"] },
  { id: "s34",  name: "Lina",           group: "Groupe Yara",      acts: ["a19","a20","a30","a31"] },
  { id: "s59",  name: "Anna",           group: "Groupe Yara",      acts: [] },
  { id: "s60",  name: "Calie",          group: "Groupe Yara",      acts: [] },

  { id: "s14",  name: "Giulia",         group: "Groupe Maïmouna",  acts: ["a5","a9","a10"] },
  { id: "s16",  name: "Stella",         group: "Groupe Maïmouna",  acts: ["a10","a25"] },
  { id: "s36",  name: "Housna",         group: "Groupe Maïmouna",  acts: ["a22"] },
  { id: "s37",  name: "Charlotte",      group: "Groupe Maïmouna",  acts: ["a3","a23"] },
  { id: "s38",  name: "Alicia",         group: "Groupe Maïmouna",  acts: ["a24"] },
  { id: "s39",  name: "Orianne",        group: "Groupe Maïmouna",  acts: ["a3"] },
  { id: "s40",  name: "Shine",          group: "Groupe Maïmouna",  acts: ["a3","a38"] },
  { id: "s41",  name: "Jumana",         group: "Groupe Maïmouna",  acts: ["a26"] },
  { id: "s42",  name: "Lana",           group: "Groupe Maïmouna",  acts: ["a27"] },
  { id: "s43",  name: "Naima Nour",     group: "Groupe Naima",     acts: ["a43"] },
  { id: "s44",  name: "Courage",        group: "Groupe Maïmouna",  acts: ["a29"] },
  { id: "s45",  name: "Eliam (Elliam)", group: "Groupe Maïmouna",  acts: ["a29"] },
  { id: "s46",  name: "Ilona",          group: "Groupe Maïmouna",  acts: ["a7","a19","a46"] },
  { id: "s62",  name: "Stone",          group: "Groupe Maïmouna",  acts: ["a29"] },

  { id: "s35",  name: "Mamy",           group: "Groupe Maïssa",    acts: ["a31"] },
  { id: "s47",  name: "Victoire",       group: "Groupe Maïssa",    acts: ["a47"] },
  { id: "s48",  name: "Habi Hawa",      group: "Groupe Maïssa",    acts: ["a8"] },
  { id: "s49",  name: "Lina S.",        group: "Groupe Maïssa",    acts: ["a8"] },
  { id: "s50",  name: "Mila",           group: "Groupe Maïssa",    acts: ["a19","a32"] },
  { id: "s51",  name: "Myla D.",        group: "Groupe Maïssa",    acts: ["a19","a34","a39"] },
  { id: "s52",  name: "Kamil",          group: "Groupe Maïssa",    acts: ["a33"] },
  { id: "s53",  name: "Nina",           group: "Groupe Maïssa",    acts: ["a35"] },
  { id: "s54",  name: "Juliette",       group: "Groupe Maïssa",    acts: ["a19","a37"] },
  { id: "s55",  name: "Héloïse",        group: "Groupe Maïssa",    acts: ["a37"] },
  { id: "s56",  name: "Loïcia",         group: "Groupe Maïssa",    acts: ["a37"] },
  { id: "s58",  name: "Ibrahim",        group: "Groupe Maïssa",    acts: ["a38"] },
  { id: "s61",  name: "Youga",          group: "Groupe Maïssa",    acts: ["a42"] },

  { id: "s28",  name: "Melina B.",      group: "Groupe Naima",     acts: ["a6","a44","a45"] },
  { id: "s300", name: "Léa S.",         group: "Groupe Naima",     acts: ["a19"] },
  { id: "s57",  name: "Thalia",         group: "Groupe Naima",     acts: ["a37"] }
];

const ACTS = [
  { id: "a1",   name: "Danse Lush Life",                    category: "danse",    kids: ["Alya","Elaïa","Elenna","Kelyana"],                                                                                           duration: 3.5, status: "confirmed",  details: "Danse rythmée sur le titre Lush Life (Zara Larsson)." },
  { id: "a36",  name: "GRS Taki Taki",                      category: "gym",      kids: ["Alya","Elaïa"],                                                                                                             duration: 3.0, status: "confirmed",  details: "Enchaînement GRS dynamique sur Taki Taki." },
  { id: "a29",  name: "Jonglage Football",                  category: "magie",    kids: ["Courage","Eliam (Elliam)","Stone"],                                                                                          duration: 3.0, status: "confirmed",  details: "Démonstration d'agilité avec ballons de football (Stone remplaçant)." },
  { id: "a2",   name: "Danse Gozalo",                       category: "danse",    kids: ["Jasmine","Léa"],                                                                                                             duration: 3.0, status: "confirmed",  details: "Chorégraphie dansée énergique." },
  { id: "a48",  name: "Chant Lush Life",                    category: "chant",    kids: ["Jasmine","Léa"],                                                                                                             duration: 3.0, status: "confirmed",  details: "Duo chanté sur Lush Life." },
  { id: "a17",  name: "Danse Astronomia",                   category: "danse",    kids: ["Alioun","Arthur","Elvin","Kaylan"],                                                                                           duration: 4.0, status: "confirmed",  details: "Chorégraphie Astronomia de groupe." },
  { id: "a9",   name: "Gymnastique Duo",                    category: "gym",      kids: ["Giulia","Sasha"],                                                                                                             duration: 2.5, status: "confirmed",  details: "Enchaînement gymnique au sol en duo." },
  { id: "a23",  name: "Tour de Magie",                      category: "magie",    kids: ["Charlotte"],                                                                                                                  duration: 3.5, status: "toconfirm", details: "Numéro de magie solo en attente de confirmation de Charlotte." },
  { id: "a16",  name: "Chant (Solo)",                       category: "chant",    kids: ["Ched"],                                                                                                                       duration: 2.5, status: "toconfirm", details: "Chant solo avec musique d'accompagnement à définir." },
  { id: "a34",  name: "Thriller",                           category: "danse",    kids: ["Clara","Lydia"],                                                                                                               duration: 3.0, status: "review",    details: "Projet de danse Thriller de Clara (faire un point)." },
  { id: "a4",   name: "Théâtre (Mortel Adèle)",             category: "theatre",  kids: ["Clara","Divine","Ryma"],                                                                                                      duration: 4.5, status: "review",    details: "Saynète de théâtre pour Divine, Ryma, Clara (faire un point)." },
  { id: "a30",  name: "Chant Solo - Grace",                 category: "chant",    kids: ["Grace"],                                                                                                                       duration: 3.0, status: "review",    details: "Projet de chant solo de Grace (faire un point)." },
  { id: "a38",  name: "Chant - Duo",                        category: "chant",    kids: ["Ibrahim","Lilly"],                                                                                                             duration: 4.0, status: "review",    details: "Chant d'Ibrahim, potentiellement avec Lilly (faire un point)." },
  { id: "a26",  name: "Chant Solo - Jumana",                category: "chant",    kids: ["Jumana"],                                                                                                                      duration: 2.5, status: "review",    details: "Chant solo de Jumana (faire un point)." },
  { id: "a49",  name: "SPA",                                category: "autre",    kids: ["Kelyana"],                                                                                                                     duration: 2.0, status: "check",     details: "Projet de numéro SPA de Kelyana (vérifier avec qui)." },
  { id: "a27",  name: "Danse Sega",                         category: "danse",    kids: ["Lana"],                                                                                                                        duration: 3.0, status: "toconfirm", details: "Danse Sega de Lana (à confirmer)." },
  { id: "a15",  name: "Gymnastique collective",             category: "gym",      kids: ["Céline","Eileen","Elenna","Léana"],                                                                                            duration: 3.0, status: "review",    details: "Gymnastique avec Leana, Céline, Eileen (faire un point)." },
  { id: "a31",  name: "Danse Brésil",                       category: "danse",    kids: ["Lina","Maïssa"],                                                                                                              duration: 4.0, status: "review",    details: "Numéro de Danse Brésil avec Maïssa (faire un point)." },
  { id: "a21",  name: "Chant (musique ?)",                  category: "chant",    kids: ["Maïmouna"],                                                                                                                    duration: 2.5, status: "review",    details: "Chant de Maimouna sans musique définie (faire un point)." },
  { id: "a31b", name: "Danse Afro",                         category: "danse",    kids: ["Mamy"],                                                                                                                        duration: 3.5, status: "review",    details: "Numéro Afro de Mamy K. sans musique définie (faire un point)." },
  { id: "a40",  name: "Voix off",                           category: "theatre",  kids: ["Shine"],                                                                                                                       duration: 2.0, status: "organize",  details: "Voix off de Shine (à organiser)." },
  { id: "a25",  name: "Gymnastique Solo",                   category: "gym",      kids: ["Stella"],                                                                                                                      duration: 2.0, status: "check",     details: "Vérifier si Stella continue la gymnastique." },
  { id: "a47",  name: "Aucun numéro confirmé",              category: "autre",    kids: ["Mia"],                                                                                                                         duration: 0.0, status: "reposition",details: "Mia n'a aucun numéro validé, à replacer sur un autre projet." },
  { id: "a35",  name: "Numéro non défini",                  category: "autre",    kids: ["Nina"],                                                                                                                        duration: 2.0, status: "position",  details: "Nina n'a aucun numéro spécifié, à positionner rapidement." },
  { id: "a3",   name: "Capoeira Collective",                category: "capoeira", kids: ["Charlotte","Clara","Divine","Grace","Keren","Lydia","Maïmouna","Orianne","Ryma","Shine","Tania"],                               duration: 5.0, status: "confirmed",  details: "Démonstration collective de capoeira." },
  { id: "a5",   name: "Gym & Roller Solo - Giulia",         category: "roller",   kids: ["Giulia"],                                                                                                                      duration: 2.0, status: "confirmed",  details: "Numéro de roller artistique." },
  { id: "a6",   name: "Roller & Gym Solo - Melina",         category: "roller",   kids: ["Melina B."],                                                                                                                   duration: 2.5, status: "review",    details: "Acrobaties sur rollers." },
  { id: "a7",   name: "Roller Solo - Ilona",                category: "roller",   kids: ["Ilona"],                                                                                                                       duration: 2.0, status: "review",    details: "Figures libres en rollers." },
  { id: "a8",   name: "Duo Gym & Roller - Habi Hawa & Lina S.", category: "roller", kids: ["Habi Hawa","Lina S."],                                                                                                    duration: 3.0, status: "review",    details: "Enchaînement synchronisé sur patins." },
  { id: "a10",  name: "Gym Trio - Giulia, Sasha & Stella",  category: "gym",      kids: ["Giulia","Sasha","Stella"],                                                                                                    duration: 3.0, status: "check",     details: "Figures gymniques à trois." },
  { id: "a11",  name: "GRS Solo - Alya",                    category: "gym",      kids: ["Alya"],                                                                                                                        duration: 2.5, status: "confirmed",  details: "Gymnastique Rythmique au sol." },
  { id: "a12",  name: "Voix Française - Alya",              category: "chant",    kids: ["Alya"],                                                                                                                        duration: 2.0, status: "confirmed",  details: "Chanson en français." },
  { id: "a13",  name: "Gymnastique Solo - Lya",             category: "gym",      kids: ["Lya"],                                                                                                                         duration: 2.0, status: "review",    details: "Enchaînement de rondades." },
  { id: "a14",  name: "Chant & Danse - Léa & Lya",         category: "chant",    kids: ["Léa","Lya"],                                                                                                                   duration: 3.0, status: "confirmed",  details: "Numéro de variété chant/danse." },
  { id: "a18",  name: "Chant & Capoeira - Keren",           category: "capoeira", kids: ["Keren"],                                                                                                                       duration: 2.5, status: "review",    details: "Solo chant avec rythmes capoeira." },
  { id: "a19",  name: "Quinzaine de l'Égalité",             category: "egalite",  kids: ["Alya","Céline","Clara","Ched","Eileen","Elaïa","Elenna","Ilona","Jasmine","Juliette","Kelyana","Léa","Léana","Lilly","Lina","Maïssa","Mia","Mila","Myla D.","Nayana","Yara"], duration: 6.0, status: "review", details: "Fresque artistique sur l'égalité." },
  { id: "a20",  name: "Quinzaine de l'Égalité - Tableau Poétique", category: "egalite", kids: ["Ched","Ilona","Lina","Yara"],                                                                                         duration: 3.0, status: "review",    details: "Saynètes chorégraphiées." },
  { id: "a22",  name: "Gymnastique - Housna",               category: "gym",      kids: ["Housna"],                                                                                                                       duration: 2.0, status: "review",    details: "Passage gymnique solo." },
  { id: "a24",  name: "Gymnastique Solo - Alicia",          category: "gym",      kids: ["Alicia"],                                                                                                                       duration: 2.0, status: "review",    details: "Passage acrobatique." },
  { id: "a28",  name: "Danse Moderne - Groupe Elvin",       category: "danse",    kids: ["Elvin"],                                                                                                                        duration: 3.5, status: "review",    details: "Chorégraphie dynamique." },
  { id: "a32",  name: "Chant Ciel - Mila",                  category: "chant",    kids: ["Mila"],                                                                                                                        duration: 2.5, status: "review",    details: "Interprétation poétique." },
  { id: "a33",  name: "Passage Solo - Kamil",               category: "autre",    kids: ["Kamil"],                                                                                                                       duration: 3.0, status: "review",    details: "Présentation libre." },
  { id: "a37",  name: "Danse 21 Reasons",                   category: "danse",    kids: ["Héloïse","Juliette","Loïcia","Thalia"],                                                                                       duration: 3.0, status: "review",    details: "Danse pop à quatre." },
  { id: "a39",  name: "Spider Solo - Myla D.",              category: "chant",    kids: ["Myla D."],                                                                                                                     duration: 3.0, status: "review",    details: "Chant et danse sur Spider." },
  { id: "a41",  name: "Théâtre Duo - Inès & Jasmine",       category: "theatre",  kids: ["Inès","Jasmine"],                                                                                                              duration: 3.0, status: "review",    details: "Saynète costumée." },
  { id: "a42",  name: "Chant RnB - Youga",                  category: "chant",    kids: ["Youga"],                                                                                                                       duration: 3.0, status: "review",    details: "Interprétation vocale." },
  { id: "a43",  name: "Solo Gym Salto - Naima Nour",        category: "gym",      kids: ["Naima Nour"],                                                                                                                  duration: 2.0, status: "review",    details: "Rondade salto arrière." },
  { id: "a44",  name: "Gymnastique Solo - Melina B.",       category: "gym",      kids: ["Melina B."],                                                                                                                   duration: 2.5, status: "review",    details: "Acrobaties au sol." },
  { id: "a45",  name: "Duo Chant - Melina B. & Lya",        category: "chant",    kids: ["Lya","Melina B."],                                                                                                            duration: 3.0, status: "review",    details: "Chant en duo." },
  { id: "a46",  name: "Kakalika Danse",                     category: "danse",    kids: ["Elenna","Ilona","Kelyana"],                                                                                                   duration: 3.0, status: "review",    details: "Danse africaine." }
];

const CATEGORY_LABELS = {
  all: "Toutes les disciplines",
  gym: "Gymnastique & GRS",
  capoeira: "Capoeira",
  chant: "Chant & Musique",
  danse: "Danse",
  theatre: "Théâtre & Voix",
  roller: "Roller",
  egalite: "Quinzaine de l'Égalité",
  magie: "Magie & Jonglerie",
  autre: "Autres Sports & Talents"
};

// Tracking lists provided by organizer (exact matches with STUDENTS names)
let PLACED_KIDS = ["Alioun","Alya","Arthur","Courage","Elaïa","Elenna","Elvin","Giulia","Jasmine","Kaylan","Kelyana","Léa","Sasha","Stone"];
let REVIEW_KIDS = ["Clara","Divine","Grace","Ibrahim","Jumana","Kelyana","Lana","Léana","Maïssa","Maïmouna","Mamy","Shine","Stella","Mia","Nina"];

const STATUS_LABELS = {
  confirmed:  { text: "✅ Confirmé",        class: "status-confirmed" },
  toconfirm:  { text: "🟡 À confirmer",     class: "status-toconfirm" },
  review:     { text: "🟡 Faire un point",  class: "status-review" },
  check:      { text: "🟡 À vérifier",      class: "status-check" },
  organize:   { text: "🟡 À organiser",     class: "status-organize" },
  reposition: { text: "🔴 À repositionner", class: "status-reposition" },
  position:   { text: "🔴 À positionner",   class: "status-position" }
};

// --- Application State ---
let currentTab = "dashboard";
let studentsFilter = { search: "", category: "all", placement: "all" };
let program = [];
let hasUnsavedChanges = false;

// --- DOM elements cache ---
let elements = {};

function initDOMElements() {
  elements = {
    themeToggle:          document.getElementById("theme-toggle"),
    tabBtns:              document.querySelectorAll(".tab-btn"),
    tabPanes:             document.querySelectorAll(".tab-pane"),
    statKidsPlaced:       document.getElementById("stat-kids-placed"),
    statKidsReview:       document.getElementById("stat-kids-review"),
    statActsConfirmed:    document.getElementById("stat-acts-confirmed"),
    statDuration:         document.getElementById("stat-duration"),
    studentSearch:        document.getElementById("student-search"),
    studentPlacementFilter: document.getElementById("student-placement-filter"),
    studentCategory:      document.getElementById("student-category-filter"),
    studentsContainer:    document.getElementById("students-container"),
    disciplinesContainer: document.getElementById("disciplines-container"),
    actsPool:             document.getElementById("acts-pool"),
    plannerStatusFilter:  document.getElementById("planner-status-filter"),
    programList:          document.getElementById("program-list"),
    programDuration:      document.getElementById("program-duration"),
    programCount:         document.getElementById("program-count"),
    printBtn:             document.getElementById("print-program-btn"),
    clearBtn:             document.getElementById("clear-program-btn"),
    saveBtn:              document.getElementById("save-changes-btn"),
    studentDialog:        document.getElementById("student-dialog"),
    dialogTitle:          document.getElementById("dialog-title"),
    dialogGroup:          document.getElementById("dialog-group"),
    dialogTags:           document.getElementById("dialog-tags"),
    dialogActsList:       document.getElementById("dialog-acts-list"),
    editDialog:           document.getElementById("edit-dialog"),
    editStudentName:      document.getElementById("edit-student-name"),
    editStudentGroup:     document.getElementById("edit-student-group"),
    editStudentActs:      document.getElementById("edit-student-acts"),
    editSaveBtn:          document.getElementById("edit-save-btn"),
    editCancelBtn:        document.getElementById("edit-cancel-btn"),
    confirmDialog:        document.getElementById("confirm-dialog"),
    confirmMessage:       document.getElementById("confirm-message"),
    confirmOkBtn:         document.getElementById("confirm-ok-btn"),
    confirmCancelBtn:     document.getElementById("confirm-cancel-btn"),
    toast:                document.getElementById("toast-notification"),
  };
}

// ==========================================================================
// Initialization & Events Setup
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initDOMElements();
  loadSavedData();
  setupEventListeners();
  renderAll();
});

function loadSavedData() {
  const isDark = localStorage.getItem("dark-theme") === "true";
  if (isDark) {
    document.body.classList.add("dark-theme");
    elements.themeToggle.innerHTML = "🌙";
  } else {
    document.body.classList.remove("dark-theme");
    elements.themeToggle.innerHTML = "☀️";
  }

  // Load students from localStorage if available
  try {
    const savedStudents = localStorage.getItem("kermesse-students");
    if (savedStudents) {
      STUDENTS = JSON.parse(savedStudents);
    }
  } catch (e) { /* keep defaults */ }

  // Migration for incorrect group assignments in localStorage
  let migrated = false;
  STUDENTS.forEach(s => {
    if (s.name === "Maïmouna" && s.group === "Groupe Yara") {
      s.group = "Groupe Maïmouna";
      migrated = true;
    }
    if (s.name === "Maïssa" && s.group === "Groupe Yara") {
      s.group = "Groupe Maïssa";
      migrated = true;
    }
    if (s.name === "Naima Nour" && s.group === "Groupe Maïmouna") {
      s.group = "Groupe Naima";
      migrated = true;
    }
  });
  if (migrated) {
    localStorage.setItem("kermesse-students", JSON.stringify(STUDENTS));
  }

  // Load Program
  try {
    const savedProgram = localStorage.getItem("talent-program");
    if (savedProgram) {
      program = JSON.parse(savedProgram);
    } else {
      program = ["a1","a36","a29","a2","a48","a17","a9"];
    }
  } catch (e) {
    program = ["a1","a36","a29","a2","a48","a17","a9"];
  }
}

function setupEventListeners() {
  // Theme Toggle
  elements.themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("dark-theme", isDark);
    elements.themeToggle.innerHTML = isDark ? "🌙" : "☀️";
  });

  // Navigation tabs
  elements.tabBtns.forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  // Student filters
  elements.studentSearch.addEventListener("input", (e) => {
    studentsFilter.search = e.target.value.toLowerCase().trim();
    renderStudentsTab();
  });
  elements.studentPlacementFilter.addEventListener("change", (e) => {
    studentsFilter.placement = e.target.value;
    renderStudentsTab();
  });
  elements.studentCategory.addEventListener("change", (e) => {
    studentsFilter.category = e.target.value;
    renderStudentsTab();
  });

  // Planner
  elements.plannerStatusFilter.addEventListener("change", () => renderPlannerTab());
  elements.printBtn.addEventListener("click", () => window.print());
  elements.clearBtn.addEventListener("click", () => {
    showConfirm("Voulez-vous vraiment vider tout le programme de passage ?", () => {
      program = [];
      saveProgram();
      renderPlannerTab();
      renderStatsRibbon();
    });
  });

  // Global Save button
  elements.saveBtn.addEventListener("click", saveAllChanges);

  // Edit dialog buttons
  elements.editSaveBtn.addEventListener("click", commitStudentEdit);
  elements.editCancelBtn.addEventListener("click", () => elements.editDialog.close());

  // Confirm dialog buttons
  elements.confirmCancelBtn.addEventListener("click", () => elements.confirmDialog.close());
}

// ==========================================================================
// Tab navigation
// ==========================================================================
function switchTab(tabId) {
  currentTab = tabId;
  elements.tabBtns.forEach(btn => btn.classList.toggle("active", btn.dataset.tab === tabId));
  elements.tabPanes.forEach(pane => pane.classList.toggle("active", pane.id === `${tabId}-tab`));

  if (tabId === "students")    renderStudentsTab();
  else if (tabId === "disciplines") renderDisciplinesTab();
  else if (tabId === "planner")    renderPlannerTab();
}

// ==========================================================================
// Persistence helpers
// ==========================================================================
function saveProgram() {
  localStorage.setItem("talent-program", JSON.stringify(program));
}

function saveAllChanges() {
  localStorage.setItem("kermesse-students", JSON.stringify(STUDENTS));
  hasUnsavedChanges = false;
  elements.saveBtn.classList.remove("has-changes");
  showToast("✅ Modifications sauvegardées !");
  renderAll();
}

function markDirty() {
  hasUnsavedChanges = true;
  elements.saveBtn.classList.add("has-changes");
}

// ==========================================================================
// Toast notification
// ==========================================================================
function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  setTimeout(() => elements.toast.classList.remove("show"), 2800);
}

// ==========================================================================
// Confirm dialog (native dialog)
// ==========================================================================
let _confirmCallback = null;
function showConfirm(message, onOk) {
  elements.confirmMessage.textContent = message;
  _confirmCallback = onOk;
  elements.confirmOkBtn.onclick = () => {
    elements.confirmDialog.close();
    if (_confirmCallback) _confirmCallback();
  };
  elements.confirmDialog.showModal();
}

// ==========================================================================
// Utility helpers
// ==========================================================================
function getGroupClass(groupName) {
  const groups = [...new Set(STUDENTS.map(s => s.group))].sort((a, b) => a.localeCompare(b, "fr"));
  const idx = groups.indexOf(groupName);
  return `group-${(idx % 5) + 1}`;
}

function getAllGroupNames() {
  return [...new Set(STUDENTS.map(s => s.group))].sort((a, b) => a.localeCompare(b, "fr"));
}

// ==========================================================================
// Rendering logic
// ==========================================================================
function renderAll() {
  renderStatsRibbon();
  renderStudentsTab();
  renderDisciplinesTab();
  renderPlannerTab();
  populateCategoryDropdown();
}

function renderStatsRibbon() {
  const placedKidsCount = STUDENTS.filter(s => PLACED_KIDS.includes(s.name) || s.name.startsWith("Elenna") || s.name.startsWith("Eliam")).length;
  const reviewKidsCount = STUDENTS.filter(s => REVIEW_KIDS.includes(s.name) || s.name === "Kelyana").length;
  const confirmedActsCount = ACTS.filter(a => a.status === "confirmed").length;

  elements.statKidsPlaced.textContent = `${placedKidsCount} / ${STUDENTS.length}`;
  elements.statKidsReview.textContent = reviewKidsCount;
  elements.statActsConfirmed.textContent = `${confirmedActsCount} / ${ACTS.length}`;

  let duration = 0;
  program.forEach(actId => {
    const act = ACTS.find(a => a.id === actId);
    if (act) duration += act.duration;
  });
  elements.statDuration.textContent = `${duration} min`;
}

function populateCategoryDropdown() {
  const select = elements.studentCategory;
  select.innerHTML = "";
  Object.entries(CATEGORY_LABELS).forEach(([key, label]) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = label;
    select.appendChild(opt);
  });
}

// ==========================================================================
// Student Directory Tab — grouped, sorted alphabetically
// ==========================================================================
function renderStudentsTab() {
  const container = elements.studentsContainer;
  container.innerHTML = "";

  // Filter
  const filtered = STUDENTS.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(studentsFilter.search);
    let matchesCategory = true;
    if (studentsFilter.category !== "all") {
      matchesCategory = student.acts.some(actId => {
        const act = ACTS.find(a => a.id === actId);
        return act && act.category === studentsFilter.category;
      });
    }
    let matchesPlacement = true;
    const isPlaced = PLACED_KIDS.includes(student.name) || student.name.startsWith("Elenna") || student.name.startsWith("Eliam");
    const isReview = REVIEW_KIDS.includes(student.name);
    if (studentsFilter.placement === "placed") matchesPlacement = isPlaced;
    else if (studentsFilter.placement === "review") matchesPlacement = isReview;
    return matchesSearch && matchesCategory && matchesPlacement;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state">Aucun élève ne correspond à votre recherche.</div>`;
    return;
  }

  // Group
  const grouped = {};
  filtered.forEach(student => {
    const g = student.group || "Sans groupe";
    if (!grouped[g]) grouped[g] = [];
    grouped[g].push(student);
  });

  // Sort groups alphabetically
  const sortedGroupNames = Object.keys(grouped).sort((a, b) => a.localeCompare(b, "fr"));

  sortedGroupNames.forEach(groupName => {
    const groupStudents = grouped[groupName];
    // Sort students alphabetically within each group
    groupStudents.sort((a, b) => a.name.localeCompare(b.name, "fr"));

    const groupClass = getGroupClass(groupName);
    const section = document.createElement("section");
    section.className = `group-section ${groupClass}`;
    section.style.marginBlockEnd = "2rem";

    section.innerHTML = `
      <h2 class="group-title">
        <span class="group-dot"></span>
        <span>${groupName}</span>
        <span class="group-count">${groupStudents.length} élève(s)</span>
      </h2>
      <div class="group-grid"></div>
    `;

    const grid = section.querySelector(".group-grid");

    groupStudents.forEach(student => {
      const card = document.createElement("article");
      card.className = `student-card ${groupClass}`;

      const studentActs = student.acts.map(actId => ACTS.find(a => a.id === actId)).filter(Boolean);
      const tagsHtml = studentActs.map(act =>
        `<span class="tag tag-${act.category}">${CATEGORY_LABELS[act.category]}</span>`
      ).join("");

      let statusBadge = "";
      const isPlaced = PLACED_KIDS.includes(student.name) || student.name.startsWith("Elenna") || student.name.startsWith("Eliam");
      const isReview = REVIEW_KIDS.includes(student.name);

      if (student.name === "Kelyana") {
        statusBadge = `<span class="placement-badge placement-review">⚠️ SPA à revoir</span>`;
      } else if (isPlaced) {
        statusBadge = `<span class="placement-badge placement-placed">✅ Placé</span>`;
      } else if (isReview) {
        statusBadge = `<span class="placement-badge placement-review">⚠️ À revoir</span>`;
      } else {
        statusBadge = `<span class="placement-badge placement-neutral">⚪ En attente</span>`;
      }

      card.innerHTML = `
        <div class="student-header">
          <div>
            <h3 class="student-name">${student.name}</h3>
            <p class="student-tagline">${studentActs.length} passage(s)</p>
          </div>
          ${statusBadge}
        </div>
        <div class="tag-container" style="margin-bottom: 0.75rem; margin-top: 0.25rem;">
          ${tagsHtml || '<span style="font-size:0.75rem;color:var(--text-muted)">Aucune catégorie</span>'}
        </div>
        <div class="card-actions">
          <button class="btn btn-secondary btn-sm" onclick="showStudentDetails('${student.id}')">👁 Fiche</button>
          <button class="btn btn-edit btn-sm" onclick="openEditStudent('${student.id}')">✏️ Modifier</button>
          <button class="btn btn-delete btn-sm" onclick="deleteStudent('${student.id}')">🗑 Supprimer</button>
        </div>
      `;

      grid.appendChild(card);
    });

    container.appendChild(section);
  });
}

// ==========================================================================
// Disciplines Grid Tab
// ==========================================================================
function renderDisciplinesTab() {
  const container = elements.disciplinesContainer;
  container.innerHTML = "";
  container.className = "disciplines-main-wrapper";

  // Define the official groups from modif.md
  const constituesIds = ["a1", "a36", "a29", "a2", "a48", "a17", "a9", "a38"];
  const aFinaliserIds = ["a3", "a34", "a31", "a31b", "a27", "a40"];

  // Helper to create a grid section
  function createSection(titleText) {
    const title = document.createElement("h2");
    title.className = "section-title-group";
    title.textContent = titleText;
    container.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "disciplines-container";
    container.appendChild(grid);
    return grid;
  }

  const gridConstitues = createSection("🎭 Groupes actuellement constitués");
  const gridFinaliser = createSection("🟡 Groupes ou numéros à finaliser");
  const gridAutres = createSection("✨ Autres groupes & numéros");

  function renderActCard(act, grid) {
    const block = document.createElement("section");
    block.className = "discipline-block";

    const sortedKids = [...act.kids].sort((a, b) => a.localeCompare(b, "fr"));
    const statusObj = STATUS_LABELS[act.status || "toconfirm"];

    block.innerHTML = `
      <div class="discipline-title-wrapper">
        <h3 class="discipline-block-title">
          <span>${act.name}</span>
        </h3>
        <span class="status-badge ${statusObj.class}">${statusObj.text}</span>
      </div>
      <p class="discipline-kids-summary" style="margin-top:0.5rem; font-size:0.9rem;">
        <strong>${sortedKids.length} élève(s)</strong> : ${sortedKids.join(", ")}
      </p>
      <div style="margin-top:auto; padding-top:0.75rem; border-top: 1px dashed var(--border-color); display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:var(--text-muted);">
        <span class="tag tag-${act.category}" style="font-size:0.65rem;">${CATEGORY_LABELS[act.category]}</span>
        <span>Durée: ${act.duration} min</span>
      </div>
    `;
    grid.appendChild(block);
  }

  ACTS.forEach(act => {
    if (constituesIds.includes(act.id)) {
      renderActCard(act, gridConstitues);
    } else if (aFinaliserIds.includes(act.id)) {
      renderActCard(act, gridFinaliser);
    } else {
      renderActCard(act, gridAutres);
    }
  });
}

// ==========================================================================
// Stage Planner Tab
// ==========================================================================
function renderPlannerTab() {
  const pool = elements.actsPool;
  pool.innerHTML = "";

  const selectedStatusFilter = elements.plannerStatusFilter.value;
  const filteredActs = ACTS.filter(act => {
    if (selectedStatusFilter === "all") return true;
    if (selectedStatusFilter === "confirmed") return act.status === "confirmed";
    if (selectedStatusFilter === "pending") return ["toconfirm","review","check","organize"].includes(act.status);
    if (selectedStatusFilter === "red") return ["reposition","position"].includes(act.status);
    return true;
  });

  filteredActs.forEach(act => {
    const countInProgram = program.filter(id => id === act.id).length;
    const isAddedBadge = countInProgram > 0
      ? `<span class="tag tag-autre" style="font-size:0.65rem;">Programmé (${countInProgram}x)</span>`
      : "";

    const statusObj = STATUS_LABELS[act.status || "toconfirm"];
    const card = document.createElement("div");
    card.className = "pool-card";
    card.innerHTML = `
      <div class="act-info">
        <h4>${act.name} ${isAddedBadge}</h4>
        <p class="act-meta">${act.kids.join(", ")}</p>
        <div style="margin-top:0.4rem;display:flex;gap:0.35rem;align-items:center;flex-wrap:wrap;">
          <span class="tag tag-${act.category}" style="padding:0.05rem 0.3rem;font-size:0.65rem;">${CATEGORY_LABELS[act.category]}</span>
          <span class="status-badge ${statusObj.class}">${statusObj.text}</span>
        </div>
      </div>
      <button class="btn btn-success btn-sm" onclick="addActToProgram('${act.id}')">Ajouter</button>
    `;
    pool.appendChild(card);
  });

  // Program list
  const list = elements.programList;
  list.innerHTML = "";

  if (program.length === 0) {
    list.innerHTML = `
      <div class="program-empty">
        <p>Le programme de passage est vide.</p>
        <p style="font-size:0.8rem;margin-top:0.5rem;">Sélectionnez des actes dans la liste de gauche pour bâtir votre spectacle.</p>
      </div>
    `;
    elements.programDuration.textContent = "0 min";
    elements.programCount.textContent = "0";
    return;
  }

  let totalDuration = 0;
  program.forEach((actId, index) => {
    const act = ACTS.find(a => a.id === actId);
    if (!act) return;
    totalDuration += act.duration;

    const statusObj = STATUS_LABELS[act.status || "toconfirm"];
    const card = document.createElement("div");
    card.className = "program-card";
    card.id = `prog-card-${index}`;
    card.innerHTML = `
      <div class="program-card-num">${index + 1}</div>
      <div class="program-card-body">
        <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">
          <span class="program-card-title">${act.name}</span>
          <span class="status-badge ${statusObj.class}" style="font-size:0.65rem;">${statusObj.text}</span>
        </div>
        <div class="program-card-kids">${act.kids.join(", ")}</div>
        <div class="program-card-duration">${act.duration} min • ${CATEGORY_LABELS[act.category]}</div>
      </div>
      <div class="program-card-actions">
        <button class="btn-icon" onclick="moveAct(${index}, -1)" title="Monter" ${index === 0 ? "disabled style='opacity:0.3'" : ""}>▲</button>
        <button class="btn-icon" onclick="moveAct(${index}, 1)"  title="Descendre" ${index === program.length - 1 ? "disabled style='opacity:0.3'" : ""}>▼</button>
        <button class="btn-icon" style="color:var(--danger);" onclick="removeActFromProgram(${index})" title="Retirer">✕</button>
      </div>
    `;
    list.appendChild(card);
  });

  elements.programDuration.textContent = `${totalDuration} min`;
  elements.programCount.textContent = program.length;
}

// ==========================================================================
// Edit Student Dialog
// ==========================================================================
let _editingStudentId = null;

window.openEditStudent = function(studentId) {
  const student = STUDENTS.find(s => s.id === studentId);
  if (!student) return;
  _editingStudentId = studentId;

  // Populate name
  elements.editStudentName.value = student.name;

  // Populate group dropdown
  const groupSelect = elements.editStudentGroup;
  groupSelect.innerHTML = "";
  getAllGroupNames().forEach(g => {
    const opt = document.createElement("option");
    opt.value = g;
    opt.textContent = g;
    if (g === student.group) opt.selected = true;
    groupSelect.appendChild(opt);
  });
  // Allow adding new group
  const newOpt = document.createElement("option");
  newOpt.value = "__new__";
  newOpt.textContent = "➕ Nouveau groupe…";
  groupSelect.appendChild(newOpt);

  groupSelect.onchange = function() {
    if (this.value === "__new__") {
      const newGroup = prompt("Nom du nouveau groupe :");
      if (newGroup && newGroup.trim()) {
        const existing = [...groupSelect.options];
        const existingOpt = existing.find(o => o.value === newGroup.trim());
        if (!existingOpt) {
          const created = document.createElement("option");
          created.value = newGroup.trim();
          created.textContent = newGroup.trim();
          groupSelect.insertBefore(created, newOpt);
        }
        groupSelect.value = newGroup.trim();
      } else {
        groupSelect.value = student.group;
      }
    }
  };

  // Populate acts checkboxes
  const actsContainer = elements.editStudentActs;
  actsContainer.innerHTML = "";
  ACTS.forEach(act => {
    const checked = student.acts.includes(act.id) ? "checked" : "";
    const statusObj = STATUS_LABELS[act.status || "toconfirm"];
    const wrapper = document.createElement("label");
    wrapper.className = "act-checkbox-label";
    wrapper.innerHTML = `
      <input type="checkbox" value="${act.id}" ${checked}>
      <span class="act-checkbox-name">${act.name}</span>
      <span class="tag tag-${act.category}" style="font-size:0.6rem;">${CATEGORY_LABELS[act.category]}</span>
      <span class="status-badge ${statusObj.class}" style="font-size:0.55rem;">${statusObj.text}</span>
    `;
    actsContainer.appendChild(wrapper);
  });

  elements.editDialog.showModal();
};

function commitStudentEdit() {
  const student = STUDENTS.find(s => s.id === _editingStudentId);
  if (!student) return;

  const newName = elements.editStudentName.value.trim();
  if (!newName) { showToast("⚠️ Le nom ne peut pas être vide."); return; }

  const newGroup = elements.editStudentGroup.value;
  const checkedActs = [...elements.editStudentActs.querySelectorAll("input[type=checkbox]:checked")].map(cb => cb.value);

  student.name  = newName;
  student.group = newGroup;
  student.acts  = checkedActs;

  elements.editDialog.close();
  markDirty();
  renderStudentsTab();
  renderStatsRibbon();
  showToast("✏️ Élève modifié(e). N'oubliez pas de sauvegarder !");
}

// ==========================================================================
// Delete Student
// ==========================================================================
window.deleteStudent = function(studentId) {
  const student = STUDENTS.find(s => s.id === studentId);
  if (!student) return;
  showConfirm(`Supprimer définitivement ${student.name} ?`, () => {
    STUDENTS = STUDENTS.filter(s => s.id !== studentId);
    markDirty();
    renderStudentsTab();
    renderStatsRibbon();
    showToast(`🗑 ${student.name} supprimé(e).`);
  });
};

// ==========================================================================
// Student Details Dialog (read-only)
// ==========================================================================
window.showStudentDetails = function(studentId) {
  const student = STUDENTS.find(s => s.id === studentId);
  if (!student) return;

  const isPlaced = PLACED_KIDS.includes(student.name) || student.name.startsWith("Elenna") || student.name.startsWith("Eliam");
  const isReview = REVIEW_KIDS.includes(student.name);

  let statusBadge = "";
  if (student.name === "Kelyana") {
    statusBadge = `<span class="placement-badge placement-review" style="font-size:0.8rem;">⚠️ SPA à revoir en priorité</span>`;
  } else if (isPlaced) {
    statusBadge = `<span class="placement-badge placement-placed" style="font-size:0.8rem;">✅ Placé</span>`;
  } else if (isReview) {
    statusBadge = `<span class="placement-badge placement-review" style="font-size:0.8rem;">⚠️ À revoir en priorité</span>`;
  } else {
    statusBadge = `<span class="placement-badge placement-neutral" style="font-size:0.8rem;">⚪ En attente</span>`;
  }

  elements.dialogTitle.innerHTML = `<div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;"><span>${student.name}</span>${statusBadge}</div>`;
  elements.dialogGroup.textContent = student.group;

  elements.dialogActsList.innerHTML = "";
  let dialogTagsHtml = "";

  student.acts.forEach(actId => {
    const act = ACTS.find(a => a.id === actId);
    if (!act) return;
    dialogTagsHtml += `<span class="tag tag-${act.category}">${CATEGORY_LABELS[act.category]}</span> `;
    const statusObj = STATUS_LABELS[act.status || "toconfirm"];
    const li = document.createElement("li");
    li.style.paddingBlock = "0.75rem";
    li.style.borderBottom = "1px solid var(--border-color)";
    li.innerHTML = `
      <div style="font-weight:700;font-size:0.95rem;display:flex;justify-content:space-between;align-items:center;">
        <span style="display:flex;align-items:center;flex-wrap:wrap;gap:0.4rem;">${act.name} <span class="status-badge ${statusObj.class}">${statusObj.text}</span></span>
        <span style="color:var(--accent);">${act.duration} min</span>
      </div>
      <p style="font-size:0.8rem;color:var(--text-secondary);margin-top:0.25rem;"><strong>Description :</strong> ${act.details}</p>
      <p style="font-size:0.75rem;color:var(--text-muted);margin-top:0.1rem;"><strong>Partenaires :</strong> ${act.kids.filter(k => k !== student.name).join(", ") || "Solo"}</p>
    `;
    elements.dialogActsList.appendChild(li);
  });

  elements.dialogTags.innerHTML = dialogTagsHtml;
  elements.studentDialog.showModal();
};

window.closeStudentDetails = function() {
  elements.studentDialog.close();
};

// ==========================================================================
// Planner Actions
// ==========================================================================
window.addActToProgram = function(actId) {
  program.push(actId);
  saveProgram();
  renderPlannerTab();
  renderStatsRibbon();
  const container = elements.programList;
  container.scrollTop = container.scrollHeight;
  setTimeout(() => {
    const lastCard = document.getElementById(`prog-card-${program.length - 1}`);
    if (lastCard) lastCard.classList.add("pulse");
  }, 50);
};

window.removeActFromProgram = function(index) {
  program.splice(index, 1);
  saveProgram();
  renderPlannerTab();
  renderStatsRibbon();
};

window.moveAct = function(index, direction) {
  const targetIndex = index + direction;
  if (targetIndex < 0 || targetIndex >= program.length) return;
  [program[index], program[targetIndex]] = [program[targetIndex], program[index]];
  saveProgram();
  renderPlannerTab();
  renderStatsRibbon();
  setTimeout(() => {
    const card = document.getElementById(`prog-card-${targetIndex}`);
    if (card) card.classList.add("pulse");
  }, 50);
};
