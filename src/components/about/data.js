import DecentIcon from "../icons/DecentIcon";
import EducationIcon from "../icons/Education";
import EqualityIcon from "../icons/EqualityIcon";
import GenderEquality from "../icons/GenderEqualityIcon";
import InclusivityIcon from "../icons/InclusivityIcon";
import IndependencyIcon from "../icons/IndependencyIcon";
import InquiriesIcon from "../icons/InquiriesIcon";
import NoPoverty from "../icons/NoPovertyIcon";
import PeaceIcon from "../icons/PeaceIcon";
import TransparencyIcon from "../icons/TransparencyIcon";
import WellBeingIcon from "../icons/WellBeingIcon";

export const aboutData = [
  {
    id: 1,
    picture: "/assets/aboutFoundation.png",
    title_ka: "ორგანიზაციის შესახებ",
    title_eng: "About Us",
    path: "/about?data=AboutUs",
    demo_path: "/about",
  },
  {
    id: 2,
    picture: "/assets/davitBezhuashvili.png",
    title_ka: "მისია და ხედვა",
    title_eng: "Mission And Vision",
    path: "/about?data=MissionAndVision",
    demo_path: "/",
  },
  {
    id: 3,
    picture: "/assets/Team.png",
    title_ka: "ღირებულებები",
    title_eng: "Values",
    path: "/about?data=Values",
    demo_path: "/",
  },
  {
    id: 4,
    picture: "/assets/AnnualReports.png",
    title_ka: "გაეროს მდგრადი განვითარების მიზნები",
    title_eng: "United Nations Sustainble Development Goals",
    path: "/about?data=UnitedNationsSustainableDevelopment",
    demo_path: "/",
  },
  {
    id: 5,
    picture: "/assets/AnnualReports.png",
    title_ka: "სამიზნე ჯგუფები",
    title_eng: "TargetGroups",
    path: "/about?data=TargetGroups",
    demo_path: "/",
  },
  {
    id: 6,
    picture: "/assets/AnnualReports.png",
    title_ka: "გუნდი",
    title_eng: "Team",
    path: "/about?data=ExecutiveTeam",
    demo_path: "/",
  },
];

export const valuesData = [
  {
    id: 1,
    icon: <InclusivityIcon />,
    title_ka: "ინკლუზიურობა",
    title_eng: "Inclusivity",
    description_ka:
      "მხარს ვუჭერთ ინკლუზიურობას, როგორც ფუნდამენტურ ღირებულებას. ვერთიანდებით მრავალფეროვანი და თანაბარუფლებიანი გარემოს შესაქმნელად. პატივს ვცემთ თითოეული ინდივიდის უფლებებსა და თავისუფლებებს და ვიბრძვით მათ დასაცავად.",
    description_eng:
      "We champion inclusivity as a fundamental value, fostering an environment that embraces diversity and ensures that every individual's voice is respected and valued.",
  },
  {
    id: 2,
    icon: <EqualityIcon />,
    title_ka: "თანასწორობა",
    title_eng: "Equality",
    description_ka: `მტკიცედ გვჯერა თითოეული ინდივიდის თანაბარ-უფლებიანობის. ჩვენი ძალისხმევა მიმართულია ყველაზე მოწყვლადი და დაუცველი პირების მხარდაჭერასა და გაძლიერებაზე, რათა მათ ჰქონდეთ შეუზღუდავი წვდომა საკუთარ უფლებებსა და თავისუფლებებზე.`,
    description_eng: `We firmly believe in the equal rights of all individuals in our work. Our efforts are aimed at ensuring that vulnerable individuals have access to the rights, protections, and opportunities guaranteed to them by relevant conventions and laws.`,
  },
  {
    id: 3,
    icon: <IndependencyIcon />,
    title_ka: "დამოუკიდებლობა და ნეიტრალიტეტი",
    title_eng: "Independence and Neutrality",
    description_ka: `ორგანიზაციის საქმიანობა ხორციელდება ნეიტრალიტეტისა და დამოუკიდებლობის პრინციპების პატივისცემითა და მკაცრი დაცვით. მიუკერძოებლობა, გამჭირვალობა და ანგარიშვალდებულება გახლავთ ის კომპონენტები, რომელიც ფუნდამენტურად კარნახობს ჩვენი დღისწესრიგის ფორმირებას და გამორიცხავს პოლიტიკური კუთვნილებითა თუ სხვა სუბიექტური ნიშნით ინდივიდების, სოციალური ჯგუფებისა თუ თემების გამიჯვნას. `,
    description_eng: `We maintain our commitment to operating independently and impartially, without aligning with any political parties or factions, to effectively serve vulnerable communities.`,
  },
  {
    id: 4,
    icon: <TransparencyIcon />,
    title_ka: "გამჭვირვალობა და ანგარიშვალდებულება",
    title_eng: "Transparency and Accountability",
    description_ka: `გამჭირვალობის, ღიაობისა და ანგარიშვალდებულების პრინციპები კრიტიკულად მნიშვნელოვანია. ორგანიზაციის საქმინობის ყველა სფერო უკავშირდება სენსიტიურ და კომპლექსურ საკითხებს, რომელიც თავის მხრივ მოითხოვს მაქსიმალურად ინფორმირებულ და ხელმისაწვდომ კომუნიკაციას. სწორედ ამიტომ, ჩვენი გუნდის ღირებულებათა ჯაჭვში, ამ ორ კომპონენტს ცენტრალური ადგილი უჭირავს. `,
    description_eng: `We believe in maintaining open and honest communication about our activities, decisions, and limitations, ensuring that our stakeholders are well-informed and engaged in our mission.`,
  },
];

export const goals = [
  {
    id: 1,
    icon: <NoPoverty />,
    description_ka: `სიღარიბის დასრულება ყველა მისი ფორმით ყველგან`,
    description_eng: `Ending poverty in all its forms everywhere`,
  },
  {
    id: 2,
    icon: <WellBeingIcon />,
    description_ka: `სიღარიბის დასრულება ყველა მისი ფორმით ყველგან`,
    description_eng: `Ensuring healthy lives and promoting well-being for all at all ages`,
  },
  {
    id: 3,
    icon: <EducationIcon />,
    description_ka: `სიღარიბის დასრულება ყველა მისი ფორმით ყველგან`,
    description_eng: `Ensuring inclusive and equitable education and promoting lifelong learning opportunities for all`,
  },
  {
    id: 4,
    icon: <GenderEquality />,
    description_ka: `სიღარიბის დასრულება ყველა მისი ფორმით ყველგან`,
    description_eng: `Achieving gender equality`,
  },
  {
    id: 5,
    icon: <DecentIcon />,
    description_ka: `სიღარიბის დასრულება ყველა მისი ფორმით ყველგან`,
    description_eng: `Promoting productive employment and decent work for all`,
  },
  {
    id: 6,
    icon: <InquiriesIcon />,
    description_ka: `სიღარიბის დასრულება ყველა მისი ფორმით ყველგან`,
    description_eng: `Reducing inequality`,
  },
  {
    id: 7,
    icon: <PeaceIcon />,
    description_ka: `სიღარიბის დასრულება ყველა მისი ფორმით ყველგან`,
    description_eng: `Promoting
    peaceful and inclusive societies for sustainable development, providing access to
    justice for all, and building effective, accountable, and inclusive institutions at all levels.`,
  },
];

export const targetGroups = [
  {
    id: 1,
    title_ka: `ლტოლვილები და საქართველოს ტერიტორიაზე იძულებით გადაადგილებული პირები`,
    title_eng: `Refugees and Internally Displaced Persons (IDPs)`,
    description_ka: `ორგანიზაციისთვის პრიორიტეტულ სამიზნე ჯგუფად მოიაზრება საქართველოს ტერიტორიაზე იძულებით გადაადგილებული პირებისა და ლტოლვილი მოსახლეობის მხარდაჭერა. მრავალმხრივი პროექტებისა და პროგრამების ფარგლებში, ჩვენი გუნდი ახორციელებს ამ თემში არსებული პრობლემებისა და გამოწვევების აღმოფხვრას. ჩვენი მიზანია, ხელი შევუწყოთ მთელი რიგი სოციალური და ეკონომიკური პრობლემის გადაჭრას, მათ შორის უმუშევრობის, სოციალური ინტეგრაციის დეფიციტის, ლტოლვილი ახალგაზრდების განათლებასთან წვდომის, ჯანდაცვასთან წვდომისა თუ სხვა რელევანტურ საკითხებთან დაკავშირებით.`,
    description_eng: `ACT Georgia prioritizes the well-being and support of refugees and IDPs residing within the borders of Georgia,
  providing them with essential resources and assistance for their resettlement and integration.`,
    image: "/assets/Refugees.png",
  },
  {
    id: 2,
    title_ka: `მეზობელ რეგიონებში სამხედრო კონფლიქტის, ძალადობისა თუ გეოპოლიტიკური არასტაბილურობის შედეგად დაზარალებული პირები`,
    title_eng: `Individuals Affected by Consequences of War, Conflict, and Political Instability in Neighboring Regions`,
    description_ka: `გასულ წლებში, რუსეთის ფედერაციის მიერ მეზობელ ქვეყნების ტერიტორიაზე, მათ შორის საქართველოსა და უკრაინაში უკანონო შეჭრისა და ომის წარმოების შედეგად ათობით ათასი ადამიანი იძულებული გახდა დაეტოვებინათ საკუთარი საცხოვრებლები. იძულებითი მიგრაციის ტალღამ უკრაინიდან საქართველოს ტერიტორიაზეც მოაღწია და შექმნა მთელი რიგი სოციალური და ეკონომიკური გამოწვევები, რომელიც დაკავშირებულია რუსეთის აგრესიის შედეგად დაზარებულ პირთა დახმარებასთან. ჩვენი ორგანიზაციის მიზანია პრაქტიკული მექანიზმების გამოყენებით მაქსიმალურად ეფექტურად მოახდინოს ამ ადამიანების უსაფრთხო, საიმედო და დაცული საზოგადოებრივი ინტეგრაცია.`,
    description_eng: `Focusing on individuals who have sought refuge in Georgia due to turmoil and instability in neighboring regions, the organization extends its services to ensure the safety, well-being, and integration of these affected populations.`,
    image: "/assets/War.png",
  },
  {
    id: 3,
    title_ka: `შრომისუნარიანი მოქალაქეების, ახალგაზრდებისა და ემიგრანტი პროფესიონალების მხარდაჭერის პროგრამა (‘ტვინების გადინების’ შეკავება)`,
    title_eng: `Combating the challenge of ‘the Brain Drain’ among youth and professionals in Georgia`,
    description_ka: `ACT Georgia-ს ერთერთ ცენტრალურ პროგრამას ‘ტვინების გადინების’ შეკავება წარმოადგენს. აღნიშნული მიმართულება დაფუძნებულია მულტი-ეტაპობრივ, კომპლექსურ მეთოდიკაზე, რომელიც თავის მხრივ მოიცავს შრომისუნარიანი მოქალაქეების გადინების დინამიკის შესწავლას, პოპულაციურ აღწერას, მარკერებისა და ინდიკატორების იდენტიფიცირებას, დადებითი და უარყოფითი ტრენდების განსაზღვრას, კონტრ-პოლიტიკის დაგეგმარებასა და მაღალი საფეხურის სარეკომენდაციო პაკეტის შემუშავებას.  `,
    description_eng: `Addressing the issue of brain drain, ACT Georgia actively engages with young professionals and individuals residing abroad, creating opportunities and incentives for them to contribute to the development and stability of Georgia.`,
    image: "/assets/Young.png",
  },
];

export const additionalFocus = [
  {
    id: 1,
    title_ka: `ლტოლვილები და იძულებით გადაადგილებული პირები (დევნილები) საქართველოში`,
    title_eng: `Refugees and Internally Displaced Persons (IDPs) in Georgia`,
    description_ka: `ACT Georgia პრიორიტეტს ანიჭებს საქართველოს საზღვრებში მცხოვრები ლტოლვილთა და დევნილთა კეთილდღეობასა და მხარდაჭერას.
  უზრუნველყოს მათთვის აუცილებელი რესურსები და დახმარება მათი განსახლებისა და ინტეგრაციისთვის.`,
    description_eng: `ACT Georgia prioritizes the well-being and support of refugees and IDPs residing within the borders of Georgia,
  providing them with essential resources and assistance for their resettlement and integration.`,
    image: "/assets/Refugees.png",
  },
  {
    id: 2,
    title_ka: `მეზობელ რეგიონებში ომის, კონფლიქტის და პოლიტიკური არასტაბილურობის შედეგებით დაზარალებული პირები`,
    title_eng: `Individuals Affected by Consequences of War, Conflict, and Political Instability in Neighboring Regions`,
    description_ka: `ფოკუსირება იმ პირებზე, რომლებმაც თავშესაფარი მოიძიეს საქართველოში მეზობელ რეგიონებში არეულობისა და არასტაბილურობის გამო,
    ორგანიზაცია ავრცელებს თავის სერვისებს ამ დაზარალებული მოსახლეობის უსაფრთხოების, კეთილდღეობისა და ინტეგრაციის უზრუნველსაყოფად.`,
    description_eng: `Focusing on individuals who have sought refuge in Georgia due to turmoil and instability in neighboring regions,
    the organization extends its services to ensure the safety, well-being, and integration of these affected populations.`,
    image: "/assets/War.png",
  },
  {
    id: 3,
    title_ka: `უცხოეთში მცხოვრები ახალგაზრდა პროფესიონალები და ფიზიკური პირები (ტვინების გადინება)`,
    title_eng: `Young Professionals and Individuals Residing Abroad (Brain Drain)`,
    description_ka: `ტვინების გადინების საკითხთან დაკავშირებით, ACT Georgia აქტიურად ერთვება ახალგაზრდა პროფესიონალებთან და მცხოვრებ პირებთან.
    საზღვარგარეთ, მათთვის შესაძლებლობებისა და სტიმულის შექმნას, რათა წვლილი შეიტანონ საქართველოს განვითარებასა და სტაბილურობაში.`,
    description_eng: `Addressing the issue of brain drain, ACT Georgia actively engages with young professionals and individuals residing
    abroad, creating opportunities and incentives for them to contribute to the development and stability of Georgia.`,
    image: "/assets/Young.png",
  },
];

export const teamInfo = [
  {
    id: 1,
    person_id: "leri-khupenia",
    name_ka: `ლერი ხუფენია`,
    name_eng: `Leri Khupenia`,
    position_ka: `აღმასრულებელი დირექტორი`,
    position_eng: `Executive Director`,
    image: "/assets/LeriKhupenia.png",
    biography_ka: `ლერი ხუფენია 10 წელზე მეტია პროფესიონალურად მოღვაწეობს პოლიტიკური მეცნიერების, გეოპოლიტიკური რისკების ანალიზის, მმართველობისა და საერთაშორისო ურთიერთობების სფეროებში. მისი აკადემიური განათლება მოიცავს მაგისტრის ხარისხს კოლუმბიის უნივერსიტეტსა (აშშ) და გრონინგენის (ჰოლანდია) / იაგელონიის (პოლონეთი) უნივერსიტეტებიდან, აგრეთვე ბაკალავრის ხარისხს მალმეს უნივერსიტეტიდან (შვედეთი). წლების განმავლობაში, ლერის ნამუშევარი აქვს წამყვან პოზიციებზე სხვადასხვა საერთაშორისო ორგანიზაციებსა და საჯარო უწყებებში, მათ შორის ევრაზიის გეოპოლიტიკის ინსტიტუტში (ნიუ იორკი, აშშ), ევროკავშირის დელეგაცია საქართველოში, ეროვნული თავდაცვის აკადემია, ეუთოს აღმოსავლეთ ევროპის პოლიტიკური ჯგუფი, საქართველოს პრეზიდენტის ადმინისტრაცია, შვედეთის საგარეო ურთიერთობების ასოციაცია, საქართველოს საელჩო შვედეთში და სხვა. იგი გახლავთ რამოდენიმე საერთაშორისო პრესტიჟული ჯილდოსა და სტიპენდიის გამარჯვებული, მათ შორის კოლუმბიის უნივერსიტეტის წარჩინებულ ახალგაზრდა მეცნიერთა ჯილდოს გამარჯვებული, კოლუმბიის უნივერსიტეტის ევროპული ინსტიტუტის სტიპენდიანტი, ევროპის კომისიის ორგზის სრული აკადემიური სტიპენდიანტი, დევისის ცენტრის ჯილდოს მფლობელი, განათლების საერთაშორისო ცენტრის სტიპენდიანტი, და დავით ბეჟუაშვილის განათლების ცენტრის სტიპენდიანტი. 2023 წელს, ლერი ხუფენია გახდა ფორბსის 30 წლამდელთა სიის გამარჯვებული მეცნიერებისა და განათლების კატეგორიაში. იგი ოკუპირებული აფხაზეთიდან გახლავთ და მისი სამეცნიერო ნაშრომები სწორედ კონფლიქტების რეზოლუციას, უსაფრთხოების თანამედროვე ტექნოლოგიებსა და გეოპოლიტიკურ დიპლომატიას ეხება. ლერი გახლავთ 10-ზე მეტი აკადემიური ნაშრომის ავტორი და თანაავტორი, აგრეთვე 30-ზე მეტი კონფერენციისა მომხსენებელი და მოდერატორი.`,
    biography_eng: `Leri Khupenia, a seasoned researcher and geopolitical risk analyst, brings a wealth of professional experience in education, governance, diplomacy, and international organizations to his role as Projects Manager. His academic journey includes multiple academic degrees in European Politics and Security from renowned institutions like Columbia University (US), Groningen University (Netherlands), and Malmo University (Sweden). Throughout his career, Leri has held various key positions, including serving as a leading analyst on the Eurasian Geopolitics Task Force at the European Institute in New York. He has also been a Policy Advisor at the EU Delegation in Georgia and a Senior Specialist of the International Affairs Department at the National Defense Academy in Georgia. Additionally, he worked as a Security Policy Analyst at the OSCE YPP in Vienna, an International Affairs and Protocol Specialist at the Administration of the President, and a Program Officer at the Embassy of Georgia in Sweden. Leri's dedication and contributions have earned him numerous merit-based scholarships, fellowships, and awards, including the Davis Fellowship, Erasmus Academic Full-Ride Scholarships, SIPRI Fellowship, USDS Fellowship, and IEC scholarship. In 2023, he received the prestigious Forbes "30 under 30" prize in the category of Education and Science. Notably, Leri is a refugee from occupied Abkhazia, Georgia, which adds a personal dimension to his work. He is also an accomplished author with several published papers on international politics and security, and he has been a speaker and delegate at over 30 high-level international conferences and events.`,
  },
  {
    id: 2,
    person_id: "irina-mamulashvili",
    name_ka: `ირინა მამულაშვილი`,
    name_eng: `Irina Mamulashvili`,
    position_ka: `სტრატეგიული კონსულტანტი`,
    position_eng: `Strategic consultant`,
    image: "/assets/IrinaMamulashvili.png",
    biography_ka: `ირინა მამულაშვილს აქვს საერთაშორისო ორგანიზაციებში, სამთავრობო ინსტიტუციებსა და სამოქალაქო საზოგადოებრივ ორგანიზაციებში მუშაობის გამოცდილება. ირინა მუშაობდა დიდი ბრიტანეთის პარლამენტში, თემთა პალატაში, სადაც ის უკრაინის დასახმარებლად რუსეთის ქონების კონფისკაციის შესაძლებლობებს იკვლევდა. ასევე, ირინა მუშაობდა ევროპარლამენტში, სადაც ის, უკრაინაში რუსეთის აგრესიის ფონზე, ევროპარლამენტარის სტრატეგიულ კომუნიკაციებში იყო ჩართული. დამატებით, ირინა მუშაობდა პროგრამების მენეჯერის პოზიციაზე "სამართლიანი არჩევნებისა და დემოკრატიის საერთაშორისო საზოგადოებაში" (ISFED), სადაც ის პასუხისმგებელი იყო დონორებთან ურთიერთობაზე. აღნიშნული საქმიანობის ფარგლებში მან მოიპოვა დაფინანსებები ევროკავშირიდან, NED-დან, SIDA-დან, დიდი ბრიტანეთისა და ნიდერლანდების საელჩოებიდან, დანიის საგარეო საქმეთა სამინისტროდან და Zinc Network-დან. ირინას მიენიჭა მაგისტრის ხარისხი დიპლომატისა და საგარეო პოლიტიკაში City University of London-ში, სადაც მან Chevening-ის დაფინანსებით ისწავლა. ის არის ავტორი რამდენიმე ნაშრომის, რომლებიც ეხება საერთაშორისო პოლიტიკას, უსაფრთხოებას, დემოკრატიასა და დეზინფორმაციას.`,
    biography_eng: `Irina has experience working for international organizations, government institutions, and civil society organizations.Irina worked at the UK Parliament, House of Commons, where she contributed to a research initiative focused on confiscating Russian assets to support Ukraine's reconstruction. Furthermore, Irina worked at the European Parliament, where she assisted an MEP with strategic communication during Russia's aggressive actions in Ukraine. Additionally, she has worked as the Programs Manager for the International Society for Fair Elections and Democracy (ISFED), where she has been in charge of donor communication, securing funding from the EU, the NED, SIDA, the British Embassy, the Netherlands Embassy, Ifa/Zivik, the Danish Foreign Ministry, Zinc Network. She holds a master's degree in Diplomacy and Foreign Policy from the City University of London, where she was awarded the Chevening Award. She is an author of several policy papers on international politics, security, democracy, and disinformation.`,
  },
  {
    id: 3,
    person_id: "irakli-bezhuashvili",
    name_ka: `ირაკლი ბეჟუაშვილი`,
    name_eng: `Irakli Bezhuashvili`,
    position_ka: `სტრატეგიისა და ოპერაციების თანადირექტორი`,
    position_eng: `Co-Director for Strategy and Operations`,
    image: "/assets/IrakliBezhuashvili.png",
    biography_ka: `ირაკლი ბეჟუაშვილი არის კოლუმბიის უნივერსიტეტის დამამთავრებელი კურსის სტუდენტი, ორმაგი სპეციალობით პოლიტიკურ მეცნიერებებსა და ეკონომიკაში. ის ამჟამად აგრძელებს სადიპლომო დისერტაციის დაცვას და იკვლეს ქართული საზოგადოების დამოკიდებულებასა და მათი აზრის სიმტკიცეს ევროინტეგრაციის საკითხებში. ირაკლი არის National Political Science Honors Society-ს წევრი და ასევე არის გამორჩეული სტუდენტი Arnold A. Saltzman Institute of War and Peace Studies. ირაკლი მუშაობდა ევროპარლამენტში ევროპარლამენტართან ერთად, სადაც შეისწავლა  საგარეო და უსაფრთხოების საკითხები და წვლილი შეიტანა საბოლოო რეზოლუციების შემუშავებაში. ის ასევე მუშაობდა მკვლევარ სტაჟიორად ჯეიმსთაუნის ფონდში (The Jamestown Foundation) და Çalik ჰოლდინგის ენერგოსექტორში პროექტის დაფინანსების მიმართულებით. ირაკლი არის სტუდენტების ხელმძღვანელობით შემუშავებული ტრანსატლანტიკური არასამთავრობო ორგანიზაციის European Horizons -ის აღმასრულებელი დირექტორის მოადგილე. წარსულში იგი იყო კოლუმბიის ევროპული საზოგადოების თავმჯდომარე და აქტიურად იყო ჩართული ნიუ-იორკში კოლუმბიის მოდელის გაერთიანებული ერების ორგანიზაციის  (CMUNNY) და საგარეო საქმეთა საკითხებში CIRCA აკადემიის (CAFA)  გენერალური დირექტორის და ევროპული წარმომადგენლის რანგში, შესაბამისად.`,
    biography_eng: `Irakli Bezhuashvili is a Senior at Columbia University, double majoring in Political Science and Economics. He is currently pursuing a Departmental Honors Thesis track, researching the resilience and malleability of Georgian public opinion on European integration. Irakli is part of the National Political Science Honors Society and is also a distinguished student scholar at the Arnold A. Saltzman Institute of War and Peace Studies. Irakli has worked in the European Parliament with an MEP, where he conducted research on foreign and security affairs and contributed to the draft and final resolutions. He has also worked as a research intern at The Jamestown Foundation and has interned at Çalik Holding Energy Sector in a project finance role. Irakli serves as the Deputy Executive Director of European Horizons, a transatlantic student-led policy incubator. Previously, he has served as the President of the Columbia European Society and has been actively involved in Columbia Model United Nations New York (CMUNNY) and CIRCA Academics on Foreign Affairs (CAFA) as Director-General and European Representative, respectively.`,
  },
  {
    id: 4,
    person_id: "otar-davitashvili",
    name_ka: `ოთარ დავითაშვილი`,
    name_eng: `Otar Davitashvili`,
    position_ka: `სოც მედია მენეჯერი`,
    position_eng: `Social media manager`,
    image: "/assets/OtarDavitashvili.jpg",
    biography_eng: `Otari is a Master's student in Political Science at Ilia State University. In parallel with his studies, he transitioned into the private sector and where he gained five years of comprehensive work experience in strategy, branding and public relations areas. For the last three years, he has been working with variety of digital technology companies which prompted him to shift his focus toward UX/UI design and front-end development. He has a versatile skill set, as evidenced by his adeptness in leveraging social media and enhancing brand visuals. His professional portfolio in visual marketing and branding underscores his academic prowess, industry experience, and burgeoning expertise in digital realms, particularly in UX/UI design and front-end development, with a keen eye on social media and brand aesthetics.`,
    biography_ka: `Otari is a Master's student in Political Science at Ilia State University. In parallel with his studies, he transitioned into the private sector and where he gained five years of comprehensive work experience in strategy, branding and public relations areas. For the last three years, he has been working with variety of digital technology companies which prompted him to shift his focus toward UX/UI design and front-end development. He has a versatile skill set, as evidenced by his adeptness in leveraging social media and enhancing brand visuals. His professional portfolio in visual marketing and branding underscores his academic prowess, industry experience, and burgeoning expertise in digital realms, particularly in UX/UI design and front-end development, with a keen eye on social media and brand aesthetics.`,
  },
  {
    id: 5,
    person_id: "ioseb-guruli",
    name_ka: `იოსებ გურული`,
    name_eng: `Ioseb Guruli`,
    position_ka: `ვებ დეველოპერი`,
    position_eng: `Web developer`,
    image: "/assets/IosebGuruli.jpeg",
    biography_eng: `Ioseb Guruli is a seasoned full stack web developer with a distinguished portfolio boasting over a decade of experience in crafting successful international projects. With a proficient command over JavaScript frameworks like Next.js, Node.js, React.js, and Nest.js, he has consistently demonstrated his prowess in delivering high-quality solutions. With over three years of dedicated experience in the field, Ioseb remains committed to continual self-improvement, constantly honing his skills and staying abreast of the latest advancements in the ever-evolving landscape of web development. His dedication to excellence and unwavering passion for his craft set him apart as a formidable force in the industry, ensuring that each project he undertakes is executed with precision and innovation.`,
    biography_ka: `Ioseb Guruli is a seasoned full stack web developer with a distinguished portfolio boasting over a decade of experience in crafting successful international projects. With a proficient command over JavaScript frameworks like Next.js, Node.js, React.js, and Nest.js, he has consistently demonstrated his prowess in delivering high-quality solutions. With over three years of dedicated experience in the field, Ioseb remains committed to continual self-improvement, constantly honing his skills and staying abreast of the latest advancements in the ever-evolving landscape of web development. His dedication to excellence and unwavering passion for his craft set him apart as a formidable force in the industry, ensuring that each project he undertakes is executed with precision and innovation.`,
  },
];
