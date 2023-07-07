// import React, { useState } from "react";
// import FeatureCard, { IFeatureCard } from "@/components/cards/FeatureCard";
// import LandingNavbar from "@/components/navbar/LandingNavbar";
// import MetaDataContainer from "@/layouts/meta-data/MetaDataContainer";
// import Feature1 from "@/assets/svgs/feature1.svg";
// import Feature2 from "@/assets/svgs/feature2.svg";
// import Feature3 from "@/assets/svgs/feature3.svg";
// export default function Home() {
//   const [cardDetails, setCardDetails] = useState<IFeatureCard[]>([
//     {
//       index: 1,
//       image: Feature1,
//       link: "/simple",
//       subtitle:
//         "CVstack is the ultimate resume building app that offers a simple and user-friendly platform to create a professional resume even on your mobile device. With our free package, you can build a standout resume without spending a dime.",
//       title: "SIMPLE",
//     },
//     {
//       index: 2,
//       image: Feature2,
//       link: "/professional",
//       subtitle:
//         "Whether you're a recent graduate or a seasoned professional, CVstack is the perfect tool to help you craft a compelling resume that will get noticed by hiring managers. Try CVstack today and take the first step towards your dream job!",
//       title: "PROFESSIONAL",
//     },
//     {
//       index: 3,
//       image: Feature3,
//       link: "/intelligent",
//       subtitle:
//         "CVstack's Intelligent Scanning Machine (ISM) analyzes your resume and gives personalized suggestions for improvement, helping you create a tailored and standout resume in today's competitive job market.",
//       title: "INTELLIGENT",
//     },
//   ]);
//   return (
//     <>
//       <MetaDataContainer>
//         <React.Fragment>
//           <div>
//             <LandingNavbar />
//             <div className="flex justify-center gap-6 px-6 flex-wrap">
//               {cardDetails.map((details) => (
//                 <FeatureCard {...details} key={details.index} />
//               ))}
//             </div>
//           </div>
//         </React.Fragment>
//       </MetaDataContainer>
//     </>
//   );
// }
