/* ============================================================
   Scène des Talents — École Arc en Ciel
   Source de données unique partagée par index.html et stats.html
   ============================================================ */

const SCHOOL_PROJECTS = [
  { name: "Maternelles de Virginie", note: "Les pouvoirs des fleurs — Les Kids United", kids: ["Lina", "Tiamo", "Nael (maternelle)", "Ambre", "Eva", "Anaelle", "Charlotte (maternelle)", "Maylis", "Emmy (maternelle)", "Adrien maternelle", "Isaure", "Alma", "Raphaël", "Léa", "Charlie", "Andréa", "Appoline"] },
  { name: "Carnaval", note: "Scène maternelle uniquement — Déborah gère les enfants", noPickup: true, manager: "Déborah", kids: ["Elly","Robin","Saliou","Sacha","Abass","Adam","Unaï","Yessin","Mayssan","Léna M.Z","Flore","Matia","Lya (maternelle)","Shaden","Jade","Maïa","Naya","Alice C.","Luna","Palmer","Louise C.","Meï"] },
  { name: "Capoeira", note: "Le spectacle se déroulera le 25 juin.", kids: [] },
  { name: "Oh Mama Tetema + Freestyle", note: "Chorégraphie", kids: ["Keren", "Divine", "Grace", "Maimouna", "Tania", "Orianne", "Husna", "Alicia", "Asma", "Lydia"] },
  { name: "Quinzaine de l'égalité", note: "Nos artistes en herbe — par pays et langue", languages: [
    { flag: "France", country: "France", lang: "Français", kids: ["Lilly","Lydia","Myla","Kelyana","Elaia","Juliette","Ilona","Jasmine","Guillia","Elenna","Mia","Alya CM2","Divine","Lina M.","Alicia","Eileen","Léana","Céline","Cheid","Asma","Lina E."] },
    { flag: "Angleterre", country: "Angleterre", lang: "Anglais", kids: ["Juliette"] },
    { flag: "Espagne", country: "Espagne", lang: "Espagnol", kids: ["Myla","Kelyana","Elaia","Elenna","Mia","Shyne","Alya CM2","Lina M.","Alicia","Mila","Zia","Cheid"] },
    { flag: "Portugal", country: "Portugal", lang: "Portugais", kids: ["Kelyana","Ilona","Alya CM2","Lina M."] },
    { flag: "Italie", country: "Italie", lang: "Italien", kids: ["Guillia","Divine","Camille"] },
    { flag: "Allemagne", country: "Allemagne", lang: "Allemand", kids: ["Elenna","Mia"] },
    { flag: "Tunisie", country: "Tunisie", lang: "Darija tunisien", kids: ["Lydia","Jasmine","Yara","Eileen"] },
    { flag: "Maroc", country: "Maroc", lang: "Darija marocain", kids: ["Yara","Maïssa","Lina M.","Cheid"] },
    { flag: "Algérie", country: "Algérie", lang: "Dziriya", kids: ["Zia","Cheid"] },
    { flag: "Sénégal", country: "Sénégal", lang: "Wolof", kids: ["Divine"] },
    { flag: "Cameroun", country: "Cameroun", lang: "Douala", kids: ["Nayana","Keren"] },
    { flag: "Corée du Sud", country: "Corée du Sud", lang: "Coréen", kids: ["Elenna","Mia","Lina M.","Mila","Zia","Céline"] },
    { flag: "Japon", country: "Japon", lang: "Japonais", kids: ["Kelyana","Juliette","Ilona","Jasmine","Mia","Alya CM2","Lina M.","Mila","Zia","Céline"] }
  ] }
];

const FREE_CATEGORIES = [
  { name: "Théâtre", icon: "theatre", scenes: [ { who: ["Nolan","Adrien élémentaire"], scene: "Minecraft" }, { who: ["Ryma","Clara"], scene: "Mortelle Adèle" }, { who: ["Souleyman","Timéo"], scene: "Théâtre" }, { who: ["Lilly","Shyne"], scene: "Les Martiens — bruit de moteur + musique" }, { who: ["Mélina B.","Lya"], scene: "Théâtre" }, { who: ["Eileen","Léana","Lina M."], scene: "Théâtre — APC mardi/jeudi avec Eileen" }, { who: ["Céline","Emy O."], scene: "Théâtre" } ] },
  { name: "Chant", icon: "mic", scenes: [ { who: ["Ibrahim","Lilly"], scene: "Ciel - Maitre Gims" }, { who: ["Mélina B.","Lya"], scene: "Ninao - Maitre Gims" }, { who: ["Eileen","Léana"], scene: "Je veux m’envoler" }, { who: ["Lina M."], scene: "Appelle ta copine - Maitre Gims" }, { who: ["Céline","Emy O."], scene: "Parisienne - Maitre Gims" }, { who: ["Keren"], scene: "Chant" }, { who: ["Maïmouna"], scene: "Chant" }, { who: ["Jumana"], scene: "À confirmer" }, { who: ["Youga"], scene: "Rnboi - Mon bébé" } ] },
  { name: "Chant / Danse", icon: "mic", scenes: [ { who: ["Jasmine","Léa S."], scene: "Parisienne - Maitre Gims", note: "Exceptionnel : Chant / Danse" } ] },
  { name: "Jonglage ballon de foot", icon: "football", scenes: [ { who: ["Courage","Eliam"], scene: "Jonglage" } ] },
  { name: "Danse", icon: "dance", scenes: [ { who: ["Kaylan","Elvin","Arthur","Alioun"], scene: "Astronomia", duration: "~3 min" }, { who: ["Clara"], scene: "Thriller", duration: "~1 min" }, { who: ["Jasmine","Léa S."], scene: "Gozalo", duration: "~3 min" }, { who: ["Lydia","Yara"], scene: "Pilé", duration: "~3 min" }, { who: ["Mamy Kadiatou","Lina S.","Maïssa"], scene: "Samba du Brésil", duration: "~3 min" }, { who: ["Alya CM2","Elenna","Kelyana"], scene: "Spa", duration: "~2 à 3 min" }, { who: ["Alya CM2","Elenna","Elaïa","Kelyana"], scene: "Danse / gym — Lush Life", duration: "~3 min max" }, { who: ["Giulia","Stella","Héloïse"], scene: "Gabriela", duration: "à confirmer" }, { who: ["Camille","Héloïse","Juliette","Loïcia"], scene: "21 Reasons", duration: "à confirmer" }, { who: ["Héloïse","Camille"], scene: "No Batidão — version instrumentale", duration: "à confirmer" } ] },
  { name: "Gymnastique", icon: "gym", scenes: [ { who: ["Alya CM2","Elaïa"], scene: "GRS — Taki Taki", duration: "~3 min" }, { who: ["Mélina B."], scene: "Solo gymnastique" }, { who: ["Giulia","Stella","Héloïse","Eileen","Lya","Lina S.","Maïssa","Alya CP","Alya CM2","Elenna","Elaïa","Kelyana","Yara","Keren","Tania","Alicia","Lydia","Naima Nour","Mélina B.","Mélyna A.","Léana","Céline","Idrissa","Haby","Hawa","Thalia F."], scene: "Rondades / flip / salto arrière (toutes ensemble)" }, { who: ["Giulia","Stella","Héloïse"], scene: "Gym groupe" }, { who: ["Lina S.","Maïssa"], scene: "Gym duo" }, { who: ["Camille","Héloïse"], scene: "Gym duo" } ] },
  { name: "Roller", icon: "roller", scenes: [ { who: ["Thalia F.","Naïma Nour","Mélyna A.","Haby","Dina"], scene: "Roller — Thalia entre seule puis sort ; Naïma Nour, Mélyna A. et Haby ensemble puis sortent ; Dina finit", duration: "~5 à 7 min" } ] },
  { name: "Magie", icon: "magic", scenes: [ { who: ["Charlotte"], scene: "Magie" } ] }
];

const NAME_ALIASES = { "mayssae": "Maïssa", "maissae": "Maïssa", "guillia": "Giulia", "elenna": "Elenna", "elena": "Elenna", "elaia": "Elaïa", "shine": "Shyne", "lina m": "Lina M.", "lina": "Lina S.", "maimouna": "Maimouna", "heloise": "Héloïse", "leana": "Léana", "lily": "Lilly", "loicia": "Loïcia", "maissa": "Maïssa", "chahd": "Cheid", "naima nour": "Naïma Nour", "housna": "Husna", "husna": "Husna", "melyna b": "Mélina B.", "melyna b.": "Mélina B.", "melina b": "Mélina B.", "melina b.": "Mélina B.", "mélina b": "Mélina B.", "mélina b.": "Mélina B.", "melyna adenet": "Mélyna A.", "melina adenet": "Mélyna A.", "mélina adenet": "Mélyna A.", "melyna a": "Mélyna A.", "melyna a.": "Mélyna A.", "mélyna a": "Mélyna A.", "mélyna a.": "Mélyna A.", "melina": "Melyna", "mélina": "Melyna" };
function normKey(name) { return name.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\./g, "").trim(); }
function canonical(name) { const k = normKey(name); if (NAME_ALIASES[k]) return NAME_ALIASES[k]; return name.trim(); }
function computeStats() {
  const freeSceneCount = FREE_CATEGORIES.reduce((n, c) => n + c.scenes.length, 0);
  const schoolCount = SCHOOL_PROJECTS.length;
  const uniqueKids = list => new Set(list.map(k => normKey(canonical(k))));
  const kidsOfProject = p => p.kids ? p.kids : p.languages.flatMap(l => l.kids);
  const schoolKids = uniqueKids(SCHOOL_PROJECTS.flatMap(kidsOfProject));
  const perChild = new Map();
  FREE_CATEGORIES.forEach(cat => { cat.scenes.forEach(s => { s.who.forEach(raw => { const disp = canonical(raw); const key = normKey(disp); if (!perChild.has(key)) perChild.set(key, { display: disp, count: 0, cats: new Set(), school: false, projects: new Set() }); const e = perChild.get(key); e.cats.add(cat.name); e.count += 1; }); }); });
  SCHOOL_PROJECTS.forEach(p => { kidsOfProject(p).forEach(k => { const disp = canonical(k); const key = normKey(disp); if (!perChild.has(key)) perChild.set(key, { display: disp, count: 0, cats: new Set(), school: false, projects: new Set() }); const e = perChild.get(key); e.school = true; e.projects.add(p.name); }); });
  const allKids = new Set();
  FREE_CATEGORIES.forEach(c => c.scenes.forEach(s => s.who.forEach(w => allKids.add(normKey(canonical(w))))));
  SCHOOL_PROJECTS.forEach(p => kidsOfProject(p).forEach(k => allKids.add(normKey(canonical(k)))));
  const quinzaine = SCHOOL_PROJECTS.find(p => p.languages);
  const quinzaineKids = new Set();
  quinzaine.languages.forEach(l => l.kids.forEach(k => quinzaineKids.add(normKey(canonical(k)))));
  const children = [...perChild.values()].map(e => ({ ...e, cats: [...e.cats], projects: [...e.projects] })).sort((a, b) => b.count - a.count || a.display.localeCompare(b.display));
  const overLimit = children.filter(c => c.count > 2);
  const perFreeCategory = FREE_CATEGORIES.map(c => ({ name: c.name, icon: c.icon, scenes: c.scenes.length, kids: uniqueKids(c.scenes.flatMap(s => s.who)).size }));
  return { freeSceneCount, schoolCount, totalScenes: freeSceneCount + schoolCount, categoryCount: FREE_CATEGORIES.length, uniqueChildren: allKids.size, childrenInFree: uniqueKids(FREE_CATEGORIES.flatMap(c => c.scenes.flatMap(s => s.who))).size, childrenInSchool: schoolKids.size, quinzaineLangs: quinzaine.languages.length, quinzaineKids: quinzaineKids.size, children, overLimit, perCategory: perFreeCategory, perPassageCategory: [{ name: "Projets périscolaires", icon: "school", scenes: schoolCount, kids: schoolKids.size }, ...perFreeCategory], sceneTypeBreakdown: [{ name: "Projets périscolaires", value: schoolCount }, { name: "Scènes libres", value: freeSceneCount }] };
}

const SHOW_START_MIN = 17 * 60 + 45;
function fmtTime(min) { return `${String(Math.floor(min / 60)).padStart(2, "0")}h${String(min % 60).padStart(2, "0")}`; }
function sceneDurationMin(scene) { if (scene.type === "school") return scene.languages ? 8 : 5; return (scene.duration && scene.duration.includes("5 à 7")) ? 6 : 3; }
function computeSchedule() {
  const uniqueKids = list => [...new Map(list.map(k => [normKey(canonical(k)), canonical(k)])).values()].sort((a, b) => a.localeCompare(b, "fr", { sensitivity: "base" }));
  const schoolScenes = SCHOOL_PROJECTS.map((p, i) => ({ num: i + 1, type: "school", cat: "Projet Périscolaire", project: p.name, name: p.name, note: p.note || "", languages: !!p.languages, kids: uniqueKids(p.kids ? p.kids : p.languages.flatMap(l => l.kids)) }));
  let n = schoolScenes.length;
  const freeScenes = FREE_CATEGORIES.flatMap(cat => cat.scenes.map(s => ({ num: ++n, type: "free", cat: cat.name, name: s.scene, note: s.note || "", kids: uniqueKids(s.who), duration: s.duration || "" })));
  const running = [...schoolScenes, ...freeScenes];
  let cursor = SHOW_START_MIN;
  running.forEach(scene => { scene.startMin = cursor; scene.time = fmtTime(cursor); cursor += sceneDurationMin(scene); });
  const endMin = cursor;
  const blockStart = new Map();
  const matName = SCHOOL_PROJECTS[0].name;
  const mat = running.find(s => s.project === matName);
  if (mat) blockStart.set("maternelles", mat.time);
  const firstProject = running.find(s => s.type === "school" && s.project !== matName);
  if (firstProject) blockStart.set("projets", firstProject.time);
  FREE_CATEGORIES.forEach(cat => { const first = running.find(s => s.cat === cat.name); if (first) blockStart.set(cat.name, first.time); });
  return { running, startTime: fmtTime(SHOW_START_MIN), endMin, endTime: fmtTime(endMin), blockStart };
}