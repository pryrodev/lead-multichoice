import type { Language } from "./messages";

// Business copy is keyed by its English source string so existing content data stays easy to edit.
const rw: Record<string, string> = {
  Connecting: "Guhuza",
  "Global Business": "Ubucuruzi Mpuzamahanga",
  to: "ku",
  "Rwanda.": "u Rwanda.",
  "Explore Our Services": "Reba Serivisi Zacu",
  Headquarters: "Icyicaro",
  "Who We Are": "Turi Bande",
  "Learn More About Us": "Menya Ibindi ku Kigo Cyacu",
  "What We Do": "Ibyo Dukora",
  "All services": "Serivisi zose",
  "Read more": "Soma ibindi",
  "Sectors We Support": "Inzego Dukorera",
  "Procurement Resources": "Amakuru ku Masoko",
  "Stay connected to procurement opportunities.": "Komeza gukurikirana amahirwe y'amasoko.",
  "Why Work With Us": "Impamvu Mwakorana Natwe",
  "Local understanding. Professional coordination. Lasting relationships.":
    "Gusobanukirwa aho dukorera. Guhuza ibikorwa kinyamwuga. Ubufatanye burambye.",
  "Trade Facilitation | Procurement | Logistics": "Korohereza Ubucuruzi | Amasoko | Ubwikorezi",
  "Your local partner for selling to buyers in Rwanda — representation, procurement and delivery, handled.":
    "Umufatanyabikorwa wawe wo mu karere mu kugurisha ku baguzi bo mu Rwanda—guhagararirwa, amasoko no kugeza ibicuruzwa, tubigufashamo.",
  "Serving Rwanda and the wider East African region.":
    "Dukorera mu Rwanda no mu karere kagari ka Afurika y'Iburasirazuba.",
  "Rwanda-Based Expertise": "Ubumenyi bushingiye ku Rwanda",
  "Regional Business Coordination": "Guhuza ubucuruzi mu karere",
  "Procurement & Supply Chain Support": "Amasoko n'uruhererekane rw'ibicuruzwa",
  "Long-Term Business Partnerships": "Ubufatanye burambye mu bucuruzi",
  "Your local partner in Rwanda.": "Umufatanyabikorwa wawe wo mu Rwanda.",
  "Based in Kigali since 2015. We connect international suppliers with Rwandan buyers and manage the engagement from first introduction to after-sales.":
    "Dufite icyicaro i Kigali kuva mu 2015. Duhuza abatanga ibicuruzwa mpuzamahanga n'abaguzi bo mu Rwanda, tugakurikirana ubufatanye kuva ku ntangiriro kugeza kuri serivisi zitangwa nyuma yo kugurisha.",
  "The principles behind every engagement.": "Amahame ayobora buri bufatanye.",
  "Connecting businesses. Coordinating opportunity. Building trust.":
    "Guhuza ibigo. Guhuza amahirwe. Kubaka icyizere.",
  "A Rwanda-based partner for international business.":
    "Umufatanyabikorwa mu bucuruzi mpuzamahanga ufite icyicaro mu Rwanda.",
  "Registered in 2015 in Remera, Kigali. We connect international manufacturers and suppliers with buyers in Rwanda and East Africa, and coordinate everything in between.":
    "Twiyandikishije mu 2015 i Remera, Kigali. Duhuza abakora n'abatanga ibicuruzwa mpuzamahanga n'abaguzi bo mu Rwanda no muri Afurika y'Iburasirazuba, kandi tugahuza ibikorwa byose hagati yabo.",
  "Connect international businesses with opportunity in Rwanda — ethically and reliably.":
    "Guhuza ibigo mpuzamahanga n'amahirwe yo mu Rwanda mu buryo bw'inyangamugayo kandi bwizewe.",
  "Be East Africa's most trusted market-access partner.":
    "Kuba umufatanyabikorwa wizewe kurusha abandi mu gufasha kwinjira ku masoko ya Afurika y'Iburasirazuba.",
  "Five stages from first contact to lasting relationship.":
    "Ibyiciro bitanu kuva ku itumanaho rya mbere kugeza ku bufatanye burambye.",
  "Five services. One local point of coordination.":
    "Serivisi eshanu. Umufatanyabikorwa umwe wo mu karere uhuza ibikorwa.",
  "From first opportunity to after-sales — one partner.":
    "Kuva ku mahirwe ya mbere kugeza kuri serivisi za nyuma—umufatanyabikorwa umwe.",
  "We coordinate, source and represent — across five sectors.":
    "Duhuza ibikorwa, tugashaka ibicuruzwa kandi tugahagararira abafatanyabikorwa mu nzego eshanu.",
  "Find current tenders on Rwanda's official portals.":
    "Shaka amatangazo y'amasoko ariho ku mbuga zemewe zo mu Rwanda.",
  "From first contact to repeat business.":
    "Kuva ku itumanaho rya mbere kugeza ku bucuruzi bukomeza.",
  "Market Access & Trade Facilitation": "Kwinjira ku Isoko no Korohereza Ubucuruzi",
  "Find opportunities, meet the right buyers and enter Rwanda with local representation.":
    "Shaka amahirwe, uhure n'abaguzi bakwiye kandi winjire ku isoko ry'u Rwanda uhagarariwe n'umufatanyabikorwa waho.",
  "Market intelligence and opportunity identification.":
    "Amakuru y'isoko no kumenya amahirwe ahari.",
  "Tender and procurement opportunity monitoring.":
    "Gukurikirana amasoko n'amahirwe yo gutanga ibicuruzwa.",
  "Introductions between international suppliers and local buyers.":
    "Guhuza abatanga ibicuruzwa mpuzamahanga n'abaguzi bo mu karere.",
  "Market-entry guidance and local representation.":
    "Kuyobora abashaka kwinjira ku isoko no kubahagararira mu karere.",
  "Procurement & Supply Chain Coordination": "Guhuza Amasoko n'Uruhererekane rw'Ibicuruzwa",
  "Source suppliers, manage procurement and follow every order through to delivery.":
    "Shaka abatanga ibicuruzwa, huza ibikorwa by'amasoko kandi ukurikirane buri cyatumijwe kugeza gishyikirijwe.",
  "Sourcing advisory.": "Inama ku gushaka ibicuruzwa n'ababitanga.",
  "Supplier identification.": "Kumenya abatanga ibicuruzwa bakwiye.",
  "Procurement coordination.": "Guhuza ibikorwa by'amasoko.",
  "Commercial communication and negotiation support.":
    "Gufasha mu itumanaho ry'ubucuruzi no mu biganiro.",
  "Logistics, Distribution & Trade Compliance Support":
    "Ubwikorezi, Ikwirakwizwa n'Iyubahirizwa ry'Amabwiriza y'Ubucuruzi",
  "Track shipments, coordinate customs and documents, and confirm final delivery.":
    "Kurikirana imizigo, huza ibijyanye na gasutamo n'inyandiko, kandi wemeze ko yagejejwe aho igomba kujya.",
  "Approvals remain with the relevant authorities.":
    "Ibyemezo bitangwa n'inzego zibifitiye ububasha.",
  "Local and regional transportation coordination.": "Guhuza ubwikorezi mu gihugu no mu karere.",
  "Shipment and transit tracking.": "Gukurikirana imizigo n'urugendo rwayo.",
  "Customs-clearance coordination through appropriate channels.":
    "Guhuza iyinjira n'isohoka rya gasutamo binyuze mu nzira zemewe.",
  "Import documentation coordination.": "Guhuza inyandiko zikenewe mu gutumiza ibicuruzwa.",
  "Project Coordination & Implementation Support":
    "Guhuza Imishinga no Gufasha mu Iyishyirwa mu Bikorwa",
  "Plan, monitor and report on projects so milestones are met.":
    "Tegura, kurikirana kandi utange raporo ku mishinga kugira ngo ibyiciro byayo bigerweho.",
  "Project planning and resource coordination.": "Gutegura imishinga no guhuza umutungo ikenera.",
  "Budget, milestone and timeline monitoring.":
    "Gukurikirana ingengo y'imari, ibyiciro n'ingengabihe.",
  "Stakeholder communication.": "Kumenyesha abafatanyabikorwa amakuru.",
  "Delivery and implementation tracking.": "Gukurikirana ishyikirizwa n'ishyirwa mu bikorwa.",
  "After-Sales & Lifecycle Support":
    "Serivisi Nyuma yo Kugurisha no Gufasha mu Buzima bw'Igicuruzwa",
  "Handle warranty, maintenance and post-delivery issues after the sale.":
    "Guhuza ibijyanye na garanti, kubungabunga no gukemura ibibazo nyuma yo kugeza igicuruzwa ku mukiriya.",
  "Warranty coordination.": "Guhuza ibijyanye na garanti.",
  "Maintenance and technical support arrangements.":
    "Gutegura serivisi zo kubungabunga no gufasha mu bya tekiniki.",
  "Customer and manufacturer liaison.": "Guhuza abakiriya n'abakora ibicuruzwa.",
  "Invoice and payment-status follow-up.": "Gukurikirana inyemezabwishyu n'uko ubwishyu buhagaze.",
  "Pharmaceuticals & Healthcare": "Imiti na Serivisi z'Ubuzima",
  "Medical supply chains, sourcing and local requirements.":
    "Uruhererekane rw'ibikoresho by'ubuvuzi, kubishaka no kuzuza ibisabwa mu karere.",
  "Supply-chain coordination": "Guhuza uruhererekane rw'ibicuruzwa",
  "Sourcing advisory": "Inama ku gushaka ibicuruzwa",
  "Supplier engagement": "Guhuza n'abatanga ibicuruzwa",
  "Local requirement coordination": "Guhuza ibisabwa byo mu karere",
  "Energy & Electrical Systems": "Ingufu n'Ibikoresho by'Amashanyarazi",
  "Sourcing and delivery of electrical and energy equipment.":
    "Gushaka no kugeza ibikoresho by'amashanyarazi n'ingufu aho bikenewe.",
  "Equipment sourcing": "Gushaka ibikoresho",
  "Delivery coordination": "Guhuza ishyikirizwa ry'ibicuruzwa",
  "Stakeholder engagement": "Guhuza abafatanyabikorwa",
  "Logistics support": "Gufasha mu bwikorezi",
  "General Supplies & IT Equipment": "Ibikoresho Rusange n'Ibya Ikoranabuhanga",
  "Equipment supply, delivery and after-sales support.":
    "Gutanga ibikoresho, kubigeza aho bikenewe no gutanga serivisi nyuma yo kubigurisha.",
  "Supply arrangements": "Gutunganya itangwa ry'ibicuruzwa",
  "Delivery follow-up": "Gukurikirana ishyikirizwa",
  "After-sales coordination": "Guhuza serivisi zitangwa nyuma yo kugurisha",
  "Logistics & Trade": "Ubwikorezi n'Ubucuruzi",
  "Shipment tracking, customs liaison and final delivery.":
    "Gukurikirana imizigo, kuvugana na gasutamo no kugeza ibicuruzwa aho bigomba kujya.",
  "Shipment tracking": "Gukurikirana imizigo",
  "Logistics provider coordination": "Guhuza abatanga serivisi z'ubwikorezi",
  "Customs-process liaison": "Guhuza ibikorwa bya gasutamo",
  "Final delivery follow-up": "Gukurikirana ishyikirizwa rya nyuma",
  "Projects & Systems Implementation": "Imishinga no Gushyira Sisitemu mu Bikorwa",
  "Implementation monitoring and stakeholder updates.":
    "Gukurikirana ishyirwa mu bikorwa no kugeza amakuru ku bafatanyabikorwa.",
  "Project coordination": "Guhuza imishinga",
  "Implementation monitoring": "Gukurikirana ishyirwa mu bikorwa",
  "Progress updates": "Amakuru ajyanye n'aho ibikorwa bigeze",
  "We do what we say.": "Dukora ibyo twiyemeje.",
  "Ethical, transparent representation.":
    "Kuhagararira abandi mu buryo bw'inyangamugayo kandi buboneye.",
  "Consistent from first contact to after-sales.":
    "Dukorana ubudahwema kuva ku itumanaho rya mbere kugeza kuri serivisi za nyuma.",
  "International standards, clear communication.":
    "Dukurikiza amahame mpuzamahanga kandi tugashyikirana neza.",
  "Clear owners, documented follow-up.": "Inshingano zisobanutse no gukurikirana byanditse.",
  "Relationships built to last.": "Twubaka ubufatanye burambye.",
  "We know Rwanda's market and its buyers.": "Tuzi isoko ry'u Rwanda n'abaguzi barikoreramo.",
  "Ethical representation that protects your reputation.":
    "Kuhagararirwa mu buryo bw'inyangamugayo burinda izina ryawe.",
  "One local contact for everything.": "Umuntu umwe wo mu karere uhuza ibikorwa byose.",
  "We know the local rules and who to talk to.":
    "Tuzi amabwiriza yo mu karere n'inzego dukwiye kuvugana na zo.",
  "Every party aligned and informed.":
    "Abafatanyabikorwa bose bahuzwa kandi bakamenyeshwa amakuru.",
  "We follow through to completion.": "Dukurikirana ibikorwa kugeza birangiye.",
  "Find buyers and opportunities.": "Shaka abaguzi n'amahirwe y'ubucuruzi.",
  "Make introductions and open talks.": "Huza abafatanyabikorwa kandi utangize ibiganiro.",
  "Align documents, logistics and delivery.": "Huza inyandiko, ubwikorezi n'ishyikirizwa.",
  "Track milestones and open issues.": "Kurikirana ibyiciro by'ingenzi n'ibibazo bitarakemuka.",
  "Support after-sales and repeat business.": "Fasha nyuma yo kugurisha no mu bucuruzi bukomeza.",
};

const fr: Record<string, string> = {
  Connecting: "Connecter",
  "Global Business": "les entreprises du monde",
  to: "au",
  "Rwanda.": "Rwanda.",
  "Explore Our Services": "Découvrir nos services",
  Headquarters: "Siège",
  "Who We Are": "Qui sommes-nous ?",
  "Learn More About Us": "En savoir plus sur nous",
  "What We Do": "Nos activités",
  "All services": "Tous les services",
  "Read more": "En savoir plus",
  "Sectors We Support": "Secteurs accompagnés",
  "Procurement Resources": "Ressources sur les achats",
  "Stay connected to procurement opportunities.": "Restez informé des opportunités d’achat.",
  "Why Work With Us": "Pourquoi travailler avec nous",
  "Local understanding. Professional coordination. Lasting relationships.":
    "Connaissance locale. Coordination professionnelle. Relations durables.",
  "Trade Facilitation | Procurement | Logistics": "Facilitation des échanges | Achats | Logistique",
  "Your local partner for selling to buyers in Rwanda — representation, procurement and delivery, handled.":
    "Votre partenaire local pour vendre aux acheteurs rwandais : représentation, achats et livraison coordonnés.",
  "Serving Rwanda and the wider East African region.":
    "Au service du Rwanda et de l’ensemble de l’Afrique de l’Est.",
  "Rwanda-Based Expertise": "Expertise basée au Rwanda",
  "Regional Business Coordination": "Coordination commerciale régionale",
  "Procurement & Supply Chain Support": "Appui aux achats et à la chaîne d’approvisionnement",
  "Long-Term Business Partnerships": "Partenariats commerciaux durables",
  "Your local partner in Rwanda.": "Votre partenaire local au Rwanda.",
  "Based in Kigali since 2015. We connect international suppliers with Rwandan buyers and manage the engagement from first introduction to after-sales.":
    "Établis à Kigali depuis 2015, nous mettons en relation les fournisseurs internationaux et les acheteurs rwandais, puis coordonnons la collaboration du premier contact au service après-vente.",
  "The principles behind every engagement.": "Les principes qui guident chaque collaboration.",
  "Connecting businesses. Coordinating opportunity. Building trust.":
    "Relier les entreprises. Coordonner les opportunités. Bâtir la confiance.",
  "A Rwanda-based partner for international business.":
    "Un partenaire basé au Rwanda pour les entreprises internationales.",
  "Registered in 2015 in Remera, Kigali. We connect international manufacturers and suppliers with buyers in Rwanda and East Africa, and coordinate everything in between.":
    "Créée en 2015 à Remera, Kigali, notre entreprise met en relation les fabricants et fournisseurs internationaux avec les acheteurs du Rwanda et d’Afrique de l’Est, et coordonne les étapes intermédiaires.",
  "Connect international businesses with opportunity in Rwanda — ethically and reliably.":
    "Relier les entreprises internationales aux opportunités au Rwanda, avec éthique et fiabilité.",
  "Be East Africa's most trusted market-access partner.":
    "Devenir le partenaire d’accès au marché le plus fiable d’Afrique de l’Est.",
  "Five stages from first contact to lasting relationship.":
    "Cinq étapes, du premier contact à une relation durable.",
  "Five services. One local point of coordination.":
    "Cinq services. Un interlocuteur local pour la coordination.",
  "From first opportunity to after-sales — one partner.":
    "De la première opportunité au service après-vente : un seul partenaire.",
  "We coordinate, source and represent — across five sectors.":
    "Nous coordonnons, recherchons et représentons nos partenaires dans cinq secteurs.",
  "Find current tenders on Rwanda's official portals.":
    "Consultez les appels d’offres en cours sur les portails officiels rwandais.",
  "From first contact to repeat business.": "Du premier contact aux collaborations renouvelées.",
  "Market Access & Trade Facilitation": "Accès au marché et facilitation des échanges",
  "Find opportunities, meet the right buyers and enter Rwanda with local representation.":
    "Repérez des opportunités, rencontrez les bons acheteurs et développez-vous au Rwanda avec une représentation locale.",
  "Market intelligence and opportunity identification.":
    "Veille de marché et identification des opportunités.",
  "Tender and procurement opportunity monitoring.":
    "Suivi des appels d’offres et des opportunités d’achat.",
  "Introductions between international suppliers and local buyers.":
    "Mise en relation de fournisseurs internationaux avec des acheteurs locaux.",
  "Market-entry guidance and local representation.":
    "Conseil à l’entrée sur le marché et représentation locale.",
  "Procurement & Supply Chain Coordination":
    "Coordination des achats et de la chaîne d’approvisionnement",
  "Source suppliers, manage procurement and follow every order through to delivery.":
    "Identifiez des fournisseurs, coordonnez les achats et suivez chaque commande jusqu’à sa livraison.",
  "Sourcing advisory.": "Conseil en approvisionnement.",
  "Supplier identification.": "Identification de fournisseurs.",
  "Procurement coordination.": "Coordination des achats.",
  "Commercial communication and negotiation support.":
    "Appui aux échanges commerciaux et aux négociations.",
  "Logistics, Distribution & Trade Compliance Support":
    "Appui à la logistique, à la distribution et à la conformité commerciale",
  "Track shipments, coordinate customs and documents, and confirm final delivery.":
    "Suivez les expéditions, coordonnez les formalités douanières et les documents, puis confirmez la livraison finale.",
  "Approvals remain with the relevant authorities.":
    "Les autorisations relèvent des autorités compétentes.",
  "Local and regional transportation coordination.": "Coordination du transport local et régional.",
  "Shipment and transit tracking.": "Suivi des expéditions et du transit.",
  "Customs-clearance coordination through appropriate channels.":
    "Coordination du dédouanement par les voies appropriées.",
  "Import documentation coordination.": "Coordination des documents d’importation.",
  "Project Coordination & Implementation Support":
    "Coordination de projets et appui à la mise en œuvre",
  "Plan, monitor and report on projects so milestones are met.":
    "Planifiez, suivez et documentez les projets afin de respecter les étapes clés.",
  "Project planning and resource coordination.":
    "Planification des projets et coordination des ressources.",
  "Budget, milestone and timeline monitoring.": "Suivi des budgets, des étapes et des calendriers.",
  "Stakeholder communication.": "Communication avec les parties prenantes.",
  "Delivery and implementation tracking.": "Suivi de la livraison et de la mise en œuvre.",
  "After-Sales & Lifecycle Support": "Service après-vente et accompagnement du cycle de vie",
  "Handle warranty, maintenance and post-delivery issues after the sale.":
    "Coordonnez les garanties, la maintenance et les questions après livraison.",
  "Warranty coordination.": "Coordination des garanties.",
  "Maintenance and technical support arrangements.":
    "Organisation de la maintenance et du support technique.",
  "Customer and manufacturer liaison.": "Liaison entre clients et fabricants.",
  "Invoice and payment-status follow-up.": "Suivi des factures et de l’état des paiements.",
  "Pharmaceuticals & Healthcare": "Pharmaceutique et santé",
  "Medical supply chains, sourcing and local requirements.":
    "Chaînes d’approvisionnement médicales, achats et exigences locales.",
  "Supply-chain coordination": "Coordination de la chaîne d’approvisionnement",
  "Sourcing advisory": "Conseil en approvisionnement",
  "Supplier engagement": "Relations fournisseurs",
  "Local requirement coordination": "Coordination des exigences locales",
  "Energy & Electrical Systems": "Énergie et systèmes électriques",
  "Sourcing and delivery of electrical and energy equipment.":
    "Approvisionnement et livraison d’équipements électriques et énergétiques.",
  "Equipment sourcing": "Approvisionnement en équipements",
  "Delivery coordination": "Coordination des livraisons",
  "Stakeholder engagement": "Relations avec les parties prenantes",
  "Logistics support": "Appui logistique",
  "General Supplies & IT Equipment": "Fournitures générales et équipements informatiques",
  "Equipment supply, delivery and after-sales support.":
    "Fourniture et livraison d’équipements, avec un appui après-vente.",
  "Supply arrangements": "Organisation des approvisionnements",
  "Delivery follow-up": "Suivi des livraisons",
  "After-sales coordination": "Coordination du service après-vente",
  "Logistics & Trade": "Logistique et commerce",
  "Shipment tracking, customs liaison and final delivery.":
    "Suivi des expéditions, liaison douanière et livraison finale.",
  "Shipment tracking": "Suivi des expéditions",
  "Logistics provider coordination": "Coordination des prestataires logistiques",
  "Customs-process liaison": "Liaison pour les formalités douanières",
  "Final delivery follow-up": "Suivi de la livraison finale",
  "Projects & Systems Implementation": "Projets et mise en œuvre de systèmes",
  "Implementation monitoring and stakeholder updates.":
    "Suivi de la mise en œuvre et information des parties prenantes.",
  "Project coordination": "Coordination de projets",
  "Implementation monitoring": "Suivi de la mise en œuvre",
  "Progress updates": "Points d’avancement",
  "We do what we say.": "Nous tenons nos engagements.",
  "Ethical, transparent representation.": "Une représentation éthique et transparente.",
  "Consistent from first contact to after-sales.":
    "Un accompagnement constant, du premier contact au service après-vente.",
  "International standards, clear communication.":
    "Des normes internationales et une communication claire.",
  "Clear owners, documented follow-up.": "Des responsabilités claires et un suivi documenté.",
  "Relationships built to last.": "Des relations conçues pour durer.",
  "We know Rwanda's market and its buyers.":
    "Nous connaissons le marché rwandais et ses acheteurs.",
  "Ethical representation that protects your reputation.":
    "Une représentation éthique qui protège votre réputation.",
  "One local contact for everything.": "Un interlocuteur local pour coordonner l’ensemble.",
  "We know the local rules and who to talk to.":
    "Nous connaissons les règles locales et les bons interlocuteurs.",
  "Every party aligned and informed.": "Chaque partie est coordonnée et informée.",
  "We follow through to completion.": "Nous assurons le suivi jusqu’à l’aboutissement.",
  "Find buyers and opportunities.": "Identifier des acheteurs et des opportunités.",
  "Make introductions and open talks.": "Mettre les parties en relation et ouvrir le dialogue.",
  "Align documents, logistics and delivery.":
    "Coordonner les documents, la logistique et la livraison.",
  "Track milestones and open issues.": "Suivre les étapes clés et les points en suspens.",
  "Support after-sales and repeat business.":
    "Accompagner l’après-vente et les collaborations futures.",
};

const sw: Record<string, string> = {
  Connecting: "Kuunganisha",
  "Global Business": "Biashara za Kimataifa",
  to: "na",
  "Rwanda.": "Rwanda.",
  "Explore Our Services": "Angalia Huduma Zetu",
  Headquarters: "Makao Makuu",
  "Who We Are": "Sisi ni Nani",
  "Learn More About Us": "Jifunze Zaidi Kutuhusu",
  "What We Do": "Tunachofanya",
  "All services": "Huduma zote",
  "Read more": "Soma zaidi",
  "Sectors We Support": "Sekta Tunazosaidia",
  "Procurement Resources": "Rasilimali za Ununuzi",
  "Stay connected to procurement opportunities.": "Endelea kufuatilia fursa za ununuzi.",
  "Why Work With Us": "Kwa Nini Ushirikiane Nasi",
  "Local understanding. Professional coordination. Lasting relationships.":
    "Uelewa wa ndani. Uratibu wa kitaalamu. Mahusiano ya kudumu.",
  "Trade Facilitation | Procurement | Logistics": "Uwezeshaji wa Biashara | Ununuzi | Usafirishaji",
  "Your local partner for selling to buyers in Rwanda — representation, procurement and delivery, handled.":
    "Mshirika wako wa ndani wa kufanya biashara na wanunuzi nchini Rwanda—uwakilishi, ununuzi na uwasilishaji vinaratibiwa.",
  "Serving Rwanda and the wider East African region.":
    "Tunahudumia Rwanda na eneo pana la Afrika Mashariki.",
  "Rwanda-Based Expertise": "Utaalamu wa Rwanda",
  "Regional Business Coordination": "Uratibu wa Biashara Kikanda",
  "Procurement & Supply Chain Support": "Msaada wa Ununuzi na Mnyororo wa Ugavi",
  "Long-Term Business Partnerships": "Ushirikiano wa Biashara wa Muda Mrefu",
  "Your local partner in Rwanda.": "Mshirika wako wa ndani nchini Rwanda.",
  "Based in Kigali since 2015. We connect international suppliers with Rwandan buyers and manage the engagement from first introduction to after-sales.":
    "Tangu 2015, tukiwa Kigali, tunaunganisha wasambazaji wa kimataifa na wanunuzi wa Rwanda na kuratibu ushirikiano kuanzia utambulisho wa kwanza hadi huduma baada ya mauzo.",
  "The principles behind every engagement.": "Kanuni zinazoongoza kila ushirikiano.",
  "Connecting businesses. Coordinating opportunity. Building trust.":
    "Kuunganisha biashara. Kuratibu fursa. Kujenga uaminifu.",
  "A Rwanda-based partner for international business.":
    "Mshirika wa biashara za kimataifa aliye nchini Rwanda.",
  "Registered in 2015 in Remera, Kigali. We connect international manufacturers and suppliers with buyers in Rwanda and East Africa, and coordinate everything in between.":
    "Tulisajiliwa mwaka 2015 Remera, Kigali. Tunaunganisha watengenezaji na wasambazaji wa kimataifa na wanunuzi nchini Rwanda na Afrika Mashariki, na kuratibu hatua zote zinazohusika.",
  "Connect international businesses with opportunity in Rwanda — ethically and reliably.":
    "Kuunganisha biashara za kimataifa na fursa nchini Rwanda kwa uadilifu na uaminifu.",
  "Be East Africa's most trusted market-access partner.":
    "Kuwa mshirika anayeaminika zaidi wa upatikanaji wa soko Afrika Mashariki.",
  "Five stages from first contact to lasting relationship.":
    "Hatua tano kutoka mawasiliano ya kwanza hadi uhusiano wa kudumu.",
  "Five services. One local point of coordination.":
    "Huduma tano. Mshirika mmoja wa ndani wa kuratibu.",
  "From first opportunity to after-sales — one partner.":
    "Kuanzia fursa ya kwanza hadi huduma baada ya mauzo—mshirika mmoja.",
  "We coordinate, source and represent — across five sectors.":
    "Tunaratibu, tunatafuta bidhaa na tunawakilisha washirika katika sekta tano.",
  "Find current tenders on Rwanda's official portals.":
    "Pata zabuni za sasa kwenye tovuti rasmi za Rwanda.",
  "From first contact to repeat business.":
    "Kuanzia mawasiliano ya kwanza hadi biashara zinazoendelea.",
  "Market Access & Trade Facilitation": "Upatikanaji wa Soko na Uwezeshaji wa Biashara",
  "Find opportunities, meet the right buyers and enter Rwanda with local representation.":
    "Tambua fursa, kutana na wanunuzi wanaofaa na ingia katika soko la Rwanda kwa uwakilishi wa ndani.",
  "Market intelligence and opportunity identification.": "Uchambuzi wa soko na utambuzi wa fursa.",
  "Tender and procurement opportunity monitoring.": "Ufuatiliaji wa zabuni na fursa za ununuzi.",
  "Introductions between international suppliers and local buyers.":
    "Kuunganisha wasambazaji wa kimataifa na wanunuzi wa ndani.",
  "Market-entry guidance and local representation.":
    "Mwongozo wa kuingia sokoni na uwakilishi wa ndani.",
  "Procurement & Supply Chain Coordination": "Uratibu wa Ununuzi na Mnyororo wa Ugavi",
  "Source suppliers, manage procurement and follow every order through to delivery.":
    "Tafuta wasambazaji, ratibu ununuzi na fuatilia kila oda hadi ifikishwe.",
  "Sourcing advisory.": "Ushauri wa kutafuta bidhaa na wasambazaji.",
  "Supplier identification.": "Utambuzi wa wasambazaji.",
  "Procurement coordination.": "Uratibu wa ununuzi.",
  "Commercial communication and negotiation support.":
    "Msaada wa mawasiliano ya kibiashara na mazungumzo.",
  "Logistics, Distribution & Trade Compliance Support":
    "Msaada wa Usafirishaji, Usambazaji na Uzingatiaji wa Biashara",
  "Track shipments, coordinate customs and documents, and confirm final delivery.":
    "Fuatilia mizigo, ratibu taratibu za forodha na nyaraka, kisha thibitisha uwasilishaji wa mwisho.",
  "Approvals remain with the relevant authorities.": "Idhini hutolewa na mamlaka husika.",
  "Local and regional transportation coordination.": "Uratibu wa usafirishaji wa ndani na kikanda.",
  "Shipment and transit tracking.": "Ufuatiliaji wa mizigo na safari yake.",
  "Customs-clearance coordination through appropriate channels.":
    "Uratibu wa uondoaji wa mizigo forodhani kupitia njia zinazofaa.",
  "Import documentation coordination.": "Uratibu wa nyaraka za uagizaji.",
  "Project Coordination & Implementation Support": "Uratibu wa Miradi na Msaada wa Utekelezaji",
  "Plan, monitor and report on projects so milestones are met.":
    "Panga, fuatilia na toa taarifa za miradi ili hatua muhimu zikamilike kwa wakati.",
  "Project planning and resource coordination.": "Upangaji wa miradi na uratibu wa rasilimali.",
  "Budget, milestone and timeline monitoring.": "Ufuatiliaji wa bajeti, hatua muhimu na ratiba.",
  "Stakeholder communication.": "Mawasiliano na wadau.",
  "Delivery and implementation tracking.": "Ufuatiliaji wa uwasilishaji na utekelezaji.",
  "After-Sales & Lifecycle Support": "Huduma baada ya Mauzo na Usaidizi wa Mzunguko wa Bidhaa",
  "Handle warranty, maintenance and post-delivery issues after the sale.":
    "Ratibu dhamana, matengenezo na masuala yanayojitokeza baada ya bidhaa kuwasilishwa.",
  "Warranty coordination.": "Uratibu wa dhamana.",
  "Maintenance and technical support arrangements.":
    "Mipango ya matengenezo na msaada wa kiufundi.",
  "Customer and manufacturer liaison.": "Uhusiano kati ya wateja na watengenezaji.",
  "Invoice and payment-status follow-up.": "Ufuatiliaji wa ankara na hali ya malipo.",
  "Pharmaceuticals & Healthcare": "Dawa na Huduma za Afya",
  "Medical supply chains, sourcing and local requirements.":
    "Minyororo ya ugavi wa vifaa vya afya, utafutaji na mahitaji ya ndani.",
  "Supply-chain coordination": "Uratibu wa mnyororo wa ugavi",
  "Sourcing advisory": "Ushauri wa utafutaji wa bidhaa",
  "Supplier engagement": "Ushirikiano na wasambazaji",
  "Local requirement coordination": "Uratibu wa mahitaji ya ndani",
  "Energy & Electrical Systems": "Nishati na Mifumo ya Umeme",
  "Sourcing and delivery of electrical and energy equipment.":
    "Utafutaji na uwasilishaji wa vifaa vya umeme na nishati.",
  "Equipment sourcing": "Utafutaji wa vifaa",
  "Delivery coordination": "Uratibu wa uwasilishaji",
  "Stakeholder engagement": "Ushirikiano na wadau",
  "Logistics support": "Msaada wa usafirishaji",
  "General Supplies & IT Equipment": "Vifaa vya Jumla na Teknolojia ya Habari",
  "Equipment supply, delivery and after-sales support.":
    "Ugavi na uwasilishaji wa vifaa pamoja na huduma baada ya mauzo.",
  "Supply arrangements": "Mipango ya ugavi",
  "Delivery follow-up": "Ufuatiliaji wa uwasilishaji",
  "After-sales coordination": "Uratibu wa huduma baada ya mauzo",
  "Logistics & Trade": "Usafirishaji na Biashara",
  "Shipment tracking, customs liaison and final delivery.":
    "Ufuatiliaji wa mizigo, mawasiliano ya forodha na uwasilishaji wa mwisho.",
  "Shipment tracking": "Ufuatiliaji wa mizigo",
  "Logistics provider coordination": "Uratibu wa watoa huduma za usafirishaji",
  "Customs-process liaison": "Mawasiliano kuhusu taratibu za forodha",
  "Final delivery follow-up": "Ufuatiliaji wa uwasilishaji wa mwisho",
  "Projects & Systems Implementation": "Miradi na Utekelezaji wa Mifumo",
  "Implementation monitoring and stakeholder updates.":
    "Ufuatiliaji wa utekelezaji na taarifa kwa wadau.",
  "Project coordination": "Uratibu wa miradi",
  "Implementation monitoring": "Ufuatiliaji wa utekelezaji",
  "Progress updates": "Taarifa za maendeleo",
  "We do what we say.": "Tunatimiza tunachoahidi.",
  "Ethical, transparent representation.": "Uwakilishi wa kimaadili na wazi.",
  "Consistent from first contact to after-sales.":
    "Huduma thabiti kuanzia mawasiliano ya kwanza hadi baada ya mauzo.",
  "International standards, clear communication.":
    "Viwango vya kimataifa na mawasiliano yaliyo wazi.",
  "Clear owners, documented follow-up.": "Majukumu yaliyo wazi na ufuatiliaji ulioandikwa.",
  "Relationships built to last.": "Mahusiano yanayojengwa kudumu.",
  "We know Rwanda's market and its buyers.": "Tunaifahamu soko la Rwanda na wanunuzi wake.",
  "Ethical representation that protects your reputation.":
    "Uwakilishi wa kimaadili unaolinda sifa yako.",
  "One local contact for everything.": "Mawasiliano mmoja wa ndani kwa uratibu wa kila kitu.",
  "We know the local rules and who to talk to.":
    "Tunajua sheria za ndani na watu sahihi wa kuwasiliana nao.",
  "Every party aligned and informed.": "Kila mhusika anarifiwa na kuratibiwa.",
  "We follow through to completion.": "Tunafuatilia hadi kazi ikamilike.",
  "Find buyers and opportunities.": "Tafuta wanunuzi na fursa.",
  "Make introductions and open talks.": "Unganisha wahusika na anzisha mazungumzo.",
  "Align documents, logistics and delivery.": "Ratibu nyaraka, usafirishaji na uwasilishaji.",
  "Track milestones and open issues.": "Fuatilia hatua muhimu na masuala ambayo hayajatatuliwa.",
  "Support after-sales and repeat business.":
    "Saidia huduma baada ya mauzo na biashara zinazoendelea.",
};

Object.assign(rw, {
  to: "mu",
  "Rwanda.": "Rwanda.",
  "Trusted local representation. Accountable coordination.":
    "Guhagararirwa n'umufatanyabikorwa wo mu karere. Guhuza ibikorwa mu buryo buboneye.",
  "Coordinating the transaction, not duplicating it.":
    "Guhuza ibikorwa by'ubucuruzi aho kubisubiramo.",
  "You keep your contracts. We connect the parties and keep things moving.":
    "Amasezerano muyagumana. Twebwe duhuza abafatanyabikorwa kandi tugakomeza ibikorwa.",
  "Experience that connects business, trade and digital transformation.":
    "Uburambe buhuza ubucuruzi, amasoko n'impinduka mu ikoranabuhanga.",
  "Stay connected to procurement opportunities.": "Komeza gukurikirana amahirwe y'amasoko.",
  "Find current tenders and requirements on official portals.":
    "Shaka amasoko n'ibisabwa biriho ku mbuga zemewe.",
  "The role of external procurement portals": "Uruhare rw'imbuga zo hanze zigaragaza amasoko",
  "Official portals publish procurement notices, tender documents, deadlines and participation requirements. They are owned and operated by their respective institutions, and all submissions, evaluations and award decisions are handled through them.":
    "Imbuga zemewe zitangaza amasoko, inyandiko zayo, igihe ntarengwa n'ibisabwa kugira ngo uyitabire. Zicungwa n'inzego zazo, kandi inyandiko zitangwa, isuzuma n'ibyemezo by'abatsindiye amasoko bikorwa binyuze kuri izo nzego.",
  "LEAD MULTICHOICE is not affiliated with or the owner of either portal, and this website is not connected to them. We cannot guarantee tender awards, approve bids or issue procurement decisions. Always rely on the official source for current information.":
    "LEAD MULTICHOICE ntifitanye isano n'izo mbuga kandi ntizifite; n'uru rubuga ntiruzigenzura. Ntidushobora kwemeza uzatsinda isoko, kwemeza inyandiko z'ipiganwa cyangwa gufata ibyemezo by'amasoko. Buri gihe reba amakuru agezweho ku rubuga rwemewe.",
  "Coordination support": "Gufasha guhuza ibikorwa",
  "Need help acting on an opportunity?": "Ukeneye ubufasha bwo gukurikirana amahirwe?",
  "Suppliers and institutional buyers can contact LEAD MULTICHOICE to discuss appropriate coordination support, from supplier introductions to logistics and delivery follow-up.":
    "Abatanga ibicuruzwa n'inzego z'abaguzi bashobora kuvugana na LEAD MULTICHOICE bakaganira ku bufasha bukwiye bwo guhuza ibikorwa, kuva ku guhuza abatanga ibicuruzwa kugeza ku bwikorezi no gukurikirana ishyikirizwa.",
});
Object.assign(fr, {
  "Trusted local representation. Accountable coordination.":
    "Une représentation locale fiable. Une coordination responsable.",
  "Coordinating the transaction, not duplicating it.":
    "Coordonner la transaction sans la reproduire.",
  "You keep your contracts. We connect the parties and keep things moving.":
    "Vous conservez vos contrats. Nous mettons les parties en relation et faisons avancer les démarches.",
  "Experience that connects business, trade and digital transformation.":
    "Une expérience qui relie les affaires, le commerce et la transformation numérique.",
  "Stay connected to procurement opportunities.": "Restez informé des opportunités d’achat.",
  "Find current tenders and requirements on official portals.":
    "Consultez les appels d’offres et exigences en vigueur sur les portails officiels.",
  "The role of external procurement portals": "Rôle des portails d’achat externes",
  "Official portals publish procurement notices, tender documents, deadlines and participation requirements. They are owned and operated by their respective institutions, and all submissions, evaluations and award decisions are handled through them.":
    "Les portails officiels publient les avis d’achat, les dossiers d’appel d’offres, les échéances et les conditions de participation. Ils sont gérés par leurs institutions respectives, qui traitent les soumissions, évaluations et décisions d’attribution.",
  "LEAD MULTICHOICE is not affiliated with or the owner of either portal, and this website is not connected to them. We cannot guarantee tender awards, approve bids or issue procurement decisions. Always rely on the official source for current information.":
    "LEAD MULTICHOICE n’est affiliée à aucun de ces portails et ne les possède pas. Ce site n’y est pas non plus rattaché. Nous ne pouvons garantir l’attribution d’un marché, approuver une offre ni prendre de décision d’achat. Consultez toujours la source officielle pour obtenir les informations à jour.",
  "Coordination support": "Appui à la coordination",
  "Need help acting on an opportunity?": "Besoin d’aide pour donner suite à une opportunité ?",
  "Suppliers and institutional buyers can contact LEAD MULTICHOICE to discuss appropriate coordination support, from supplier introductions to logistics and delivery follow-up.":
    "Les fournisseurs et acheteurs institutionnels peuvent contacter LEAD MULTICHOICE pour discuter d’un appui adapté, de la mise en relation avec des fournisseurs au suivi logistique et à la livraison.",
});
Object.assign(sw, {
  "Trusted local representation. Accountable coordination.":
    "Uwakilishi wa ndani unaotegemewa. Uratibu wenye uwajibikaji.",
  "Coordinating the transaction, not duplicating it.": "Kuratibu shughuli bila kuzirudia.",
  "You keep your contracts. We connect the parties and keep things moving.":
    "Unabaki na mikataba yako. Tunaunganisha wahusika na kuendeleza shughuli.",
  "Experience that connects business, trade and digital transformation.":
    "Uzoefu unaounganisha biashara, masoko na mageuzi ya kidijitali.",
  "Stay connected to procurement opportunities.": "Endelea kufuatilia fursa za ununuzi.",
  "Find current tenders and requirements on official portals.":
    "Pata zabuni na masharti ya sasa kwenye tovuti rasmi.",
  "The role of external procurement portals": "Jukumu la tovuti za ununuzi za nje",
  "Official portals publish procurement notices, tender documents, deadlines and participation requirements. They are owned and operated by their respective institutions, and all submissions, evaluations and award decisions are handled through them.":
    "Tovuti rasmi huchapisha matangazo ya ununuzi, nyaraka za zabuni, tarehe za mwisho na masharti ya kushiriki. Taasisi husika huzimiliki na kuziendesha, na hushughulikia uwasilishaji, tathmini na maamuzi ya tuzo kupitia tovuti hizo.",
  "LEAD MULTICHOICE is not affiliated with or the owner of either portal, and this website is not connected to them. We cannot guarantee tender awards, approve bids or issue procurement decisions. Always rely on the official source for current information.":
    "LEAD MULTICHOICE haihusiani na wala haimiliki tovuti hizo, na tovuti hii haijaunganishwa nazo. Hatuwezi kuhakikisha ushindi wa zabuni, kuidhinisha zabuni au kutoa maamuzi ya ununuzi. Tumia chanzo rasmi kupata taarifa za sasa.",
  "Coordination support": "Msaada wa uratibu",
  "Need help acting on an opportunity?": "Unahitaji msaada wa kufuatilia fursa?",
  "Suppliers and institutional buyers can contact LEAD MULTICHOICE to discuss appropriate coordination support, from supplier introductions to logistics and delivery follow-up.":
    "Wasambazaji na wanunuzi wa taasisi wanaweza kuwasiliana na LEAD MULTICHOICE kujadili msaada unaofaa wa uratibu, kuanzia kuwaunganisha na wasambazaji hadi kufuatilia usafirishaji na uwasilishaji.",
});

Object.assign(rw, {
  "Let's move your business into Rwanda.": "Tugufashe guteza imbere ubucuruzi bwawe mu Rwanda.",
  "Supplier, buyer or partner — tell us what you need.":
    "Utanga ibicuruzwa, umuguzi cyangwa umufatanyabikorwa—tubwire ibyo ukeneye.",
  "Week 1": "Icyumweru cya 1",
  "Week 2–4": "Ibyumweru 2–4",
  Order: "Igihe cyo gutumiza",
  Delivery: "Igihe cyo kugeza",
  Ongoing: "Bikomeje",
  "Market scan": "Gusesengura isoko",
  "Buyer meetings": "Guhura n'abaguzi",
  "Docs · Customs · Freight": "Inyandiko · Gasutamo · Ubwikorezi",
  "Milestone reports": "Raporo z'ibyiciro",
  "After-sales · Reorders": "Serivisi za nyuma · Kongera gutumiza",
  "Trusted local representation. Accountable coordination.":
    "Guhagararirwa n'umufatanyabikorwa wo mu karere. Guhuza ibikorwa mu buryo buboneye.",
  "Experience that connects business, trade and digital transformation.":
    "Uburambe buhuza ubucuruzi, amasoko n'impinduka mu ikoranabuhanga.",
  "18+ years in trade facilitation, procurement, supply chain, logistics and digital transformation.":
    "Afite uburambe bw'imyaka irenga 18 mu korohereza ubucuruzi, amasoko, uruhererekane rw'ibicuruzwa, ubwikorezi n'ikoranabuhanga.",
  "Former roles at Bralirwa PLC and Ericsson (Rwanda, Uganda, Kenya), and supply chain lead for the Shisha Kibondo programme with Rwanda's Ministry of Health and RBC.":
    "Yakoze muri Bralirwa PLC na Ericsson mu Rwanda, Uganda na Kenya, anaba umuyobozi w'uruhererekane rw'ibicuruzwa muri gahunda ya Shisha Kibondo ku bufatanye na Minisiteri y'Ubuzima y'u Rwanda na RBC.",
  "Now Enterprise Digitalisation Manager at Cenfri. MSc Procurement & Supply Chain Management, MCILT and CIPS member.":
    "Ubu ni Umuyobozi ushinzwe Ikoranabuhanga mu Bigo muri Cenfri. Afite impamyabumenyi y'icyiciro cya kabiri cya kaminuza mu Masoko n'Uruhererekane rw'Ibicuruzwa, ni MCILT kandi ari muri CIPS.",
});
Object.assign(fr, {
  "Let's move your business into Rwanda.": "Développons votre activité au Rwanda.",
  "Supplier, buyer or partner — tell us what you need.":
    "Fournisseur, acheteur ou partenaire : dites-nous ce dont vous avez besoin.",
  "Week 1": "Semaine 1",
  "Week 2–4": "Semaines 2 à 4",
  Order: "Commande",
  Delivery: "Livraison",
  Ongoing: "En continu",
  "Market scan": "Analyse du marché",
  "Buyer meetings": "Rencontres avec les acheteurs",
  "Docs · Customs · Freight": "Documents · Douanes · Fret",
  "Milestone reports": "Rapports d’étape",
  "After-sales · Reorders": "Après-vente · Réapprovisionnements",
  "Trusted local representation. Accountable coordination.":
    "Une représentation locale fiable. Une coordination responsable.",
  "Experience that connects business, trade and digital transformation.":
    "Une expérience qui relie les affaires, le commerce et la transformation numérique.",
  "18+ years in trade facilitation, procurement, supply chain, logistics and digital transformation.":
    "Plus de 18 ans d’expérience en facilitation des échanges, achats, chaîne d’approvisionnement, logistique et transformation numérique.",
  "Former roles at Bralirwa PLC and Ericsson (Rwanda, Uganda, Kenya), and supply chain lead for the Shisha Kibondo programme with Rwanda's Ministry of Health and RBC.":
    "Il a travaillé chez Bralirwa PLC et Ericsson au Rwanda, en Ouganda et au Kenya, puis dirigé la chaîne d’approvisionnement du programme Shisha Kibondo avec le ministère rwandais de la Santé et le RBC.",
  "Now Enterprise Digitalisation Manager at Cenfri. MSc Procurement & Supply Chain Management, MCILT and CIPS member.":
    "Il est aujourd’hui responsable de la numérisation des entreprises chez Cenfri. Il est titulaire d’un master en achats et chaîne d’approvisionnement, membre MCILT et membre du CIPS.",
});
Object.assign(sw, {
  "Let's move your business into Rwanda.": "Tusaidie kukuza biashara yako nchini Rwanda.",
  "Supplier, buyer or partner — tell us what you need.":
    "Msambazaji, mnunuzi au mshirika—tuambie unahitaji nini.",
  "Week 1": "Wiki ya 1",
  "Week 2–4": "Wiki ya 2–4",
  Order: "Agizo",
  Delivery: "Uwasilishaji",
  Ongoing: "Inaendelea",
  "Market scan": "Uchambuzi wa soko",
  "Buyer meetings": "Mikutano na wanunuzi",
  "Docs · Customs · Freight": "Nyaraka · Forodha · Usafirishaji",
  "Milestone reports": "Ripoti za hatua muhimu",
  "After-sales · Reorders": "Huduma baada ya mauzo · Oda mpya",
  "Trusted local representation. Accountable coordination.":
    "Uwakilishi wa ndani unaotegemewa. Uratibu wenye uwajibikaji.",
  "Experience that connects business, trade and digital transformation.":
    "Uzoefu unaounganisha biashara, masoko na mageuzi ya kidijitali.",
  "18+ years in trade facilitation, procurement, supply chain, logistics and digital transformation.":
    "Zaidi ya miaka 18 ya uzoefu katika uwezeshaji wa biashara, ununuzi, mnyororo wa ugavi, usafirishaji na mageuzi ya kidijitali.",
  "Former roles at Bralirwa PLC and Ericsson (Rwanda, Uganda, Kenya), and supply chain lead for the Shisha Kibondo programme with Rwanda's Ministry of Health and RBC.":
    "Aliwahi kufanya kazi Bralirwa PLC na Ericsson nchini Rwanda, Uganda na Kenya, na kuongoza mnyororo wa ugavi wa mpango wa Shisha Kibondo pamoja na Wizara ya Afya ya Rwanda na RBC.",
  "Now Enterprise Digitalisation Manager at Cenfri. MSc Procurement & Supply Chain Management, MCILT and CIPS member.":
    "Kwa sasa ni Meneja wa Uwekaji wa Kidijitali wa Biashara Cenfri. Ana shahada ya uzamili ya ununuzi na mnyororo wa ugavi, ni MCILT na mwanachama wa CIPS.",
});

Object.assign(rw, {
  "Rwanda-based trade facilitation, business representation, procurement coordination and supply chain support, connecting international business to Rwanda and the wider East African region.":
    "Gufasha korohereza ubucuruzi, guhagararira ibigo, guhuza amasoko n'uruhererekane rw'ibicuruzwa, bihuza ubucuruzi mpuzamahanga n'u Rwanda ndetse n'akarere kagari ka Afurika y'Iburasirazuba.",
  "Medical and healthcare supply tenders.": "Amasoko ajyanye n'ibikoresho by'ubuvuzi n'ubuzima.",
  "Rwanda's official government tenders portal.": "Urubuga rwemewe rwa Leta y'u Rwanda rw'amasoko.",
  "Visit RMS Tenders": "Reba Amasoko ya RMS",
  "Visit UMUCYO Portal": "Sura Urubuga rwa UMUCYO",
  "Trade facilitation": "Korohereza ubucuruzi",
  Procurement: "Amasoko",
  "Supply chain management": "Imicungire y'uruhererekane rw'ibicuruzwa",
  "Logistics & customs": "Ubwikorezi na gasutamo",
  "Strategic sourcing": "Gushaka ibicuruzwa mu buryo bufite ingamba",
  "Regional trade": "Ubucuruzi mu karere",
  "Stakeholder engagement": "Guhuza abafatanyabikorwa",
  "Digital transformation": "Impinduka mu ikoranabuhanga",
  "MSc Procurement & Supply Chain Management":
    "Impamyabumenyi y'icyiciro cya kabiri: Amasoko n'Uruhererekane rw'Ibicuruzwa",
  "CIPS member": "Umunyamuryango wa CIPS",
  MCILT: "MCILT",
});
Object.assign(fr, {
  "Rwanda-based trade facilitation, business representation, procurement coordination and supply chain support, connecting international business to Rwanda and the wider East African region.":
    "Facilitation des échanges, représentation commerciale, coordination des achats et de la chaîne d’approvisionnement pour relier les entreprises internationales au Rwanda et à l’ensemble de l’Afrique de l’Est.",
  "Medical and healthcare supply tenders.":
    "Appels d’offres pour les fournitures médicales et de santé.",
  "Rwanda's official government tenders portal.":
    "Portail officiel des marchés publics du gouvernement rwandais.",
  "Visit RMS Tenders": "Voir les appels d’offres RMS",
  "Visit UMUCYO Portal": "Visiter le portail UMUCYO",
  "Trade facilitation": "Facilitation des échanges",
  Procurement: "Achats",
  "Supply chain management": "Gestion de la chaîne d’approvisionnement",
  "Logistics & customs": "Logistique et douanes",
  "Strategic sourcing": "Approvisionnement stratégique",
  "Regional trade": "Commerce régional",
  "Stakeholder engagement": "Relations avec les parties prenantes",
  "Digital transformation": "Transformation numérique",
  "MSc Procurement & Supply Chain Management": "Master en achats et chaîne d’approvisionnement",
  "CIPS member": "Membre du CIPS",
  MCILT: "MCILT",
});
Object.assign(sw, {
  "Rwanda-based trade facilitation, business representation, procurement coordination and supply chain support, connecting international business to Rwanda and the wider East African region.":
    "Uwezeshaji wa biashara, uwakilishi wa kampuni, uratibu wa ununuzi na mnyororo wa ugavi unaounganisha biashara za kimataifa na Rwanda pamoja na Afrika Mashariki.",
  "Medical and healthcare supply tenders.": "Zabuni za vifaa vya matibabu na huduma za afya.",
  "Rwanda's official government tenders portal.": "Tovuti rasmi ya zabuni za serikali ya Rwanda.",
  "Visit RMS Tenders": "Angalia Zabuni za RMS",
  "Visit UMUCYO Portal": "Tembelea Tovuti ya UMUCYO",
  "Trade facilitation": "Uwezeshaji wa biashara",
  Procurement: "Ununuzi",
  "Supply chain management": "Usimamizi wa mnyororo wa ugavi",
  "Logistics & customs": "Usafirishaji na forodha",
  "Strategic sourcing": "Utafutaji wa kimkakati",
  "Regional trade": "Biashara ya kikanda",
  "Stakeholder engagement": "Ushirikiano na wadau",
  "Digital transformation": "Mageuzi ya kidijitali",
  "MSc Procurement & Supply Chain Management": "Shahada ya uzamili ya Ununuzi na Mnyororo wa Ugavi",
  "CIPS member": "Mwanachama wa CIPS",
  MCILT: "MCILT",
});

Object.assign(rw, {
  "Client portal": "Urubuga rw'Abakiriya",
  "Your partnership with us, in one place.": "Ubufatanye bwanyu natwe, ahantu hamwe.",
  "Keep your company details up to date and stay in touch with our team in Kigali.":
    "Komeza amakuru y'ikigo cyawe ari mashya kandi uvugane n'ikipe yacu i Kigali.",
  "Create your account": "Fungura konti yawe",
  "Reset your password": "Hindura ijambo ry'ibanga",
  "Welcome back": "Urakaza neza",
  "Full name": "Amazina yose",
  Company: "Ikigo",
  Phone: "Telefoni",
  Email: "Imeyili",
  Password: "Ijambo ry'ibanga",
  "Please wait…": "Tegereza…",
  "Create account": "Fungura konti",
  "Send reset link": "Ohereza umurongo wo guhindura ijambo ry'ibanga",
  "Sign in": "Injira",
  or: "cyangwa",
  "Continue with Google": "Komeza ukoresheje Google",
  "Forgot password?": "Wibagiwe ijambo ry'ibanga?",
  "New here?": "Ni ubwa mbere hano?",
  "Create an account": "Fungura konti",
  "Already have an account?": "Usanzwe ufite konti?",
  "← Back to website": "← Subira ku rubuga",
  "Check your email to confirm your account, then sign in.":
    "Reba imeyili yawe wemeze konti, hanyuma winjire.",
  "If that email has an account, a reset link is on its way.":
    "Niba iyo imeyili ifite konti, umurongo wo guhindura ijambo ry'ibanga urimo koherezwa.",
  "Google sign-in failed. Please try again.":
    "Kwinjira ukoresheje Google ntibyagenze. Ongera ugerageze.",
  "Enter your full name": "Andika amazina yawe yose",
  "Enter a valid email": "Andika imeyili yemewe",
  "Use at least 8 characters": "Koresha inyuguti nibura 8",
  "Set a new password": "Shyiraho ijambo ry'ibanga rishya",
  "New password": "Ijambo ry'ibanga rishya",
  "Save password": "Bika ijambo ry'ibanga",
  "Client dashboard": "Urubuga rw'Umukiriya",
  Hello: "Muraho",
  "Admin area": "Igice cy'Ubuyobozi",
  "Sign out": "Sohoka",
  "Your details": "Amakuru yawe",
  "Save details": "Bika amakuru",
  "Next steps": "Intambwe zikurikira",
  "Discuss a new opportunity →": "Ganira natwe ku mahirwe mashya →",
  "Browse tender portals →": "Reba imbuga z'amasoko →",
  "See our services →": "Reba serivisi zacu →",
  "Could not save. Please try again.": "Ntibyabashije kubikwa. Ongera ugerageze.",
  "Saved.": "Byabitswe.",
  "Team access only": "Abakozi b'ikigo gusa",
  "This area is for the LEAD MULTICHOICE team.": "Iki gice kigenewe ikipe ya LEAD MULTICHOICE.",
  "Go to your dashboard →": "Jya ku rubuga rwawe →",
  Admin: "Ubuyobozi",
  "Registered clients": "Abakiriya biyandikishije",
  account: "konti",
  accounts: "konti",
  Name: "Izina",
  Joined: "Yiyandikishije",
  "No clients yet.": "Nta mukiriya uraboneka.",
  "Loading…": "Birimo gutegurwa…",
});
Object.assign(fr, {
  "Client portal": "Espace client",
  "Your partnership with us, in one place.": "Votre partenariat avec nous, au même endroit.",
  "Keep your company details up to date and stay in touch with our team in Kigali.":
    "Tenez à jour les informations de votre entreprise et restez en contact avec notre équipe à Kigali.",
  "Create your account": "Créer votre compte",
  "Reset your password": "Réinitialiser votre mot de passe",
  "Welcome back": "Bon retour",
  "Full name": "Nom complet",
  Company: "Entreprise",
  Phone: "Téléphone",
  Email: "E-mail",
  Password: "Mot de passe",
  "Please wait…": "Veuillez patienter…",
  "Create account": "Créer un compte",
  "Send reset link": "Envoyer le lien de réinitialisation",
  "Sign in": "Se connecter",
  or: "ou",
  "Continue with Google": "Continuer avec Google",
  "Forgot password?": "Mot de passe oublié ?",
  "New here?": "Nouveau ici ?",
  "Create an account": "Créer un compte",
  "Already have an account?": "Vous avez déjà un compte ?",
  "← Back to website": "← Retour au site",
  "Check your email to confirm your account, then sign in.":
    "Consultez votre e-mail pour confirmer votre compte, puis connectez-vous.",
  "If that email has an account, a reset link is on its way.":
    "Si un compte est associé à cette adresse, un lien de réinitialisation vous sera envoyé.",
  "Google sign-in failed. Please try again.":
    "La connexion avec Google a échoué. Veuillez réessayer.",
  "Enter your full name": "Saisissez votre nom complet",
  "Enter a valid email": "Saisissez une adresse e-mail valide",
  "Use at least 8 characters": "Utilisez au moins 8 caractères",
  "Set a new password": "Définir un nouveau mot de passe",
  "New password": "Nouveau mot de passe",
  "Save password": "Enregistrer le mot de passe",
  "Client dashboard": "Espace client",
  Hello: "Bonjour",
  "Admin area": "Espace administration",
  "Sign out": "Se déconnecter",
  "Your details": "Vos informations",
  "Save details": "Enregistrer les informations",
  "Next steps": "Prochaines étapes",
  "Discuss a new opportunity →": "Parler d’une nouvelle opportunité →",
  "Browse tender portals →": "Consulter les portails d’appels d’offres →",
  "See our services →": "Voir nos services →",
  "Could not save. Please try again.": "Enregistrement impossible. Veuillez réessayer.",
  "Saved.": "Enregistré.",
  "Team access only": "Réservé à l’équipe",
  "This area is for the LEAD MULTICHOICE team.":
    "Cet espace est réservé à l’équipe de LEAD MULTICHOICE.",
  "Go to your dashboard →": "Accéder à votre espace →",
  Admin: "Administration",
  "Registered clients": "Clients inscrits",
  account: "compte",
  accounts: "comptes",
  Name: "Nom",
  Joined: "Inscription",
  "No clients yet.": "Aucun client pour le moment.",
  "Loading…": "Chargement…",
});
Object.assign(sw, {
  "Client portal": "Tovuti ya Mteja",
  "Your partnership with us, in one place.": "Ushirikiano wako nasi, sehemu moja.",
  "Keep your company details up to date and stay in touch with our team in Kigali.":
    "Sasisha taarifa za kampuni yako na uwasiliane na timu yetu Kigali.",
  "Create your account": "Fungua akaunti yako",
  "Reset your password": "Weka upya nenosiri lako",
  "Welcome back": "Karibu tena",
  "Full name": "Majina kamili",
  Company: "Kampuni",
  Phone: "Simu",
  Email: "Barua pepe",
  Password: "Nenosiri",
  "Please wait…": "Tafadhali subiri…",
  "Create account": "Fungua akaunti",
  "Send reset link": "Tuma kiungo cha kuweka upya",
  "Sign in": "Ingia",
  or: "au",
  "Continue with Google": "Endelea kupitia Google",
  "Forgot password?": "Umesahau nenosiri?",
  "New here?": "Mgeni hapa?",
  "Create an account": "Fungua akaunti",
  "Already have an account?": "Tayari una akaunti?",
  "← Back to website": "← Rudi kwenye tovuti",
  "Check your email to confirm your account, then sign in.":
    "Angalia barua pepe yako ili kuthibitisha akaunti, kisha uingie.",
  "If that email has an account, a reset link is on its way.":
    "Ikiwa barua pepe hiyo ina akaunti, kiungo cha kuweka upya nenosiri kinatumwa.",
  "Google sign-in failed. Please try again.":
    "Kuingia kwa Google kumeshindikana. Tafadhali jaribu tena.",
  "Enter your full name": "Weka majina yako kamili",
  "Enter a valid email": "Weka barua pepe sahihi",
  "Use at least 8 characters": "Tumia angalau herufi 8",
  "Set a new password": "Weka nenosiri jipya",
  "New password": "Nenosiri jipya",
  "Save password": "Hifadhi nenosiri",
  "Client dashboard": "Dashibodi ya Mteja",
  Hello: "Habari",
  "Admin area": "Sehemu ya Usimamizi",
  "Sign out": "Toka",
  "Your details": "Taarifa zako",
  "Save details": "Hifadhi taarifa",
  "Next steps": "Hatua zinazofuata",
  "Discuss a new opportunity →": "Jadili fursa mpya →",
  "Browse tender portals →": "Angalia tovuti za zabuni →",
  "See our services →": "Tazama huduma zetu →",
  "Could not save. Please try again.": "Haikuweza kuhifadhiwa. Tafadhali jaribu tena.",
  "Saved.": "Imehifadhiwa.",
  "Team access only": "Timu pekee ndiyo inayoruhusiwa",
  "This area is for the LEAD MULTICHOICE team.": "Sehemu hii ni ya timu ya LEAD MULTICHOICE.",
  "Go to your dashboard →": "Nenda kwenye dashibodi yako →",
  Admin: "Usimamizi",
  "Registered clients": "Wateja waliosajiliwa",
  account: "akaunti",
  accounts: "akaunti",
  Name: "Jina",
  Joined: "Alijiunga",
  "No clients yet.": "Bado hakuna wateja.",
  "Loading…": "Inapakia…",
});

const copy: Partial<Record<Language, Record<string, string>>> = { rw, fr, sw };
export function translateSiteCopy(language: Language, text: string) {
  return language === "en" ? text : (copy[language]?.[text] ?? text);
}
