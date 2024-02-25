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
    name_ka: `ლერი ხუფენია`,
    name_eng: `Leri Khupenia`,
    position_ka: `აღმასრულებელი დირექტორი`,
    position_eng: `Executive Director`,
    image: "/assets/LeriKhupenia.png",
  },
  {
    id: 2,
    name_ka: `ირინა მამულაშვილი`,
    name_eng: `Irina Mamulashvili`,
    position_ka: `სტრატეგიული კონსულტანტი`,
    position_eng: `Strategic consultant`,
    image: "/assets/IrinaMamulashvili.png",
  },
  {
    id: 3,
    name_ka: `ირაკლი ბეჟუაშვილი`,
    name_eng: `Irakli Bezhuashvili`,
    position_ka: `სტრატეგიისა და ოპერაციების თანადირექტორი`,
    position_eng: `Co-Director for Strategy and Operations`,
    image: "/assets/IrakliBezhuashvili.png",
  },
];
