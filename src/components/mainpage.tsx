// import Image, { type ImageProps } from "next/image";
// import Link from "next/link";
// import clsx from "clsx";

import { Button } from "@/components/Button";
// import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
// import {
//   GitHubIcon,
//   InstagramIcon,
//   LinkedInIcon,
//   TwitterIcon,
// } from "@/components/SocialIcons";
// import logoAirbnb from "@/images/logos/airbnb.svg";
// import logoFacebook from "@/images/logos/facebook.svg";
// import logoPlanetaria from "@/images/logos/planetaria.svg";
// import logoStarbucks from "@/images/logos/starbucks.svg";
// import image1 from "@/images/photos/image-1.jpg";
// import image2 from "@/images/photos/image-2.jpg";
// import image3 from "@/images/photos/image-3.jpg";
// import image4 from "@/images/photos/image-4.jpg";
// import image5 from "@/images/photos/image-5.jpg";
// import { type ArticleWithSlug, getAllArticles } from "@/lib/articles";
// import { formatDate } from "@/lib/formatDate";

// function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//       {...props}
//     >
//       <path
//         d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
//         className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
//       />
//       <path
//         d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
//         className="stroke-zinc-400 dark:stroke-zinc-500"
//       />
//     </svg>
//   );
// }

// function BriefcaseIcon(props: React.ComponentPropsWithoutRef<"svg">) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//       {...props}
//     >
//       <path
//         d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
//         className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
//       />
//       <path
//         d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
//         className="stroke-zinc-400 dark:stroke-zinc-500"
//       />
//     </svg>
//   );
// }

// function ArrowDownIcon(props: React.ComponentPropsWithoutRef<"svg">) {
//   return (
//     <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
//       <path
//         d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function Article({ article }: { article: ArticleWithSlug }) {
//   return (
//     <Card as="article">
//       <Card.Title href={`/articles/${article.slug}`}>
//         {article.title}
//       </Card.Title>
//       <Card.Eyebrow as="time" dateTime={article.date} decorate>
//         {formatDate(article.date)}
//       </Card.Eyebrow>
//       <Card.Description>{article.description}</Card.Description>
//       <Card.Cta>Read article</Card.Cta>
//     </Card>
//   );
// }

// function SocialLink({
//   icon: Icon,
//   ...props
// }: {
//   icon: React.ComponentType<{ className?: string }>;
// }) {
//   return (
//     <Link className="group -m-1 p-1" {...props}>
//     <Icon
//       className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
//       {...props}
//     />

//      </Link>
//   );
// }

// function Newsletter() {
//   return (
//     <form
//       action="/thank-you"
//       className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
//     >
//       <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
//         <MailIcon className="h-6 w-6 flex-none" />
//         <span className="ml-3">Stay up to date</span>
//       </h2>
//       <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
//         Get notified when I publish something new, and unsubscribe at any time.
//       </p>
//       <div className="mt-6 flex">
//         <input
//           type="email"
//           placeholder="Email address"
//           aria-label="Email address"
//           required
//           className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
//         />
//         <Button type="submit" className="ml-4 flex-none">
//           Join
//         </Button>
//       </div>
//     </form>
//   );
// }

// interface Role {
//   company: string;
//   title: string;
//   //   logo: ImageProps["src"];
//   start: string | { label: string; dateTime: string };
//   end: string | { label: string; dateTime: string };
// }

// function Role({ role }: { role: Role }) {
//   let startLabel =
//     typeof role.start === "string" ? role.start : role.start.label;
//   let startDate =
//     typeof role.start === "string" ? role.start : role.start.dateTime;

//   let endLabel = typeof role.end === "string" ? role.end : role.end.label;
//   let endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

//   return (
//     <li className="flex gap-4">
//       <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
//         {/* <Image src={role.logo} alt="" className="h-7 w-7" unoptimized /> */}
//       </div>
//       <dl className="flex flex-auto flex-wrap gap-x-2">
//         <dt className="sr-only">Company</dt>
//         <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
//           {role.company}
//         </dd>
//         <dt className="sr-only">Role</dt>
//         <dd className="text-xs text-zinc-500 dark:text-zinc-400">
//           {role.title}
//         </dd>
//         <dt className="sr-only">Date</dt>
//         <dd
//           className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
//           aria-label={`${startLabel} until ${endLabel}`}
//         >
//           <time dateTime={startDate}>{startLabel}</time>{" "}
//           <span aria-hidden="true">—</span>{" "}
//           <time dateTime={endDate}>{endLabel}</time>
//         </dd>
//       </dl>
//     </li>
//   );
// }

// function Resume() {
//   let resume: Array<Role> = [
//     {
//       company: "Planetaria",
//       title: "CEO",
//       //   logo: logoPlanetaria,
//       start: "2019",
//       end: {
//         label: "Present",
//         dateTime: new Date().getFullYear().toString(),
//       },
//     },
//     {
//       company: "Airbnb",
//       title: "Product Designer",
//       //   logo: logoAirbnb,
//       start: "2014",
//       end: "2019",
//     },
//     {
//       company: "Facebook",
//       title: "iOS Software Engineer",
//       //   logo: logoFacebook,
//       start: "2011",
//       end: "2014",
//     },
//     {
//       company: "Starbucks",
//       title: "Shift Supervisor",
//       //   logo: logoStarbucks,
//       start: "2008",
//       end: "2011",
//     },
//   ];

//   return (
//     <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
//       <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
//         <BriefcaseIcon className="h-6 w-6 flex-none" />
//         <span className="ml-3">Work</span>
//       </h2>
//       <ol className="mt-6 space-y-4">
//         {resume.map((role, roleIndex) => (
//           <Role key={roleIndex} role={role} />
//         ))}
//       </ol>
//       <Button href="#" variant="secondary" className="group mt-6 w-full">
//         Download CV
//         <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
//       </Button>
//     </div>
//   );
// }

// function Photos() {
//   let rotations = [
//     "rotate-2",
//     "-rotate-2",
//     "rotate-2",
//     "rotate-2",
//     "-rotate-2",
//   ];

//   return (
//     <div className="mt-16 sm:mt-20">
//       <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
//         {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
//           <div
//             key={image.src}
//             className={clsx(
//               "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
//               rotations[imageIndex % rotations.length]
//             )}
//           >
//             {/* <Image
//               src={image}
//               alt=""
//               sizes="(min-width: 640px) 18rem, 11rem"
//               className="absolute inset-0 h-full w-full object-cover"
//             /> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software designer, founder, and amateur astronaut.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>
          <div className="mt-6 flex gap-6">
            <a
              href="https://github.com/jakobevangelista"
              className="group -m-1 p-1"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fcfcfc"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-github group-hover:fill-zinc-600"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/jakeplusev/"
              className="group -m-1 p-1"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fcfcfc"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-instagram group-hover:fill-zinc-600"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@jakeplusev"
              className="group -m-1 p-1"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fcfcfc"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-youtube group-hover:fill-zinc-600"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@jakeplusev"
              className="group -m-1 p-1"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fcfcfc"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-music-2 group-hover:fill-zinc-600"
              >
                <circle cx="8" cy="18" r="4"></circle>
                <path d="M12 18V2l7 4"></path>
              </svg>
            </a>
            <a href="https://twitter.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fcfcfc"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-twitter group-hover:fill-zinc-600"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="https://discord.gg/JHAcFpXcQ6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 640 512"
                className="group-hover:fill-zinc-600 bg-zinc-500"
                stroke="#fcfcfc"
              >
                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {/* {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))} */}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            {/* <Resume /> */}
          </div>
        </div>
      </Container>
    </>
  );
}
