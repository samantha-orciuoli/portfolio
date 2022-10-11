import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import codeImg from '@/images/logos/code.svg'

const projects = [
  {
    name: 'Portfolio Website',
    description:
        'My personal website www.softwaresammy.com built using JavaScript, Next.js, Vercel, Formspree, & Tailwind CSS',
    link: { href: 'https://github.com/samantha-orciuoli/portfolio.git', label: 'github.com' },
    logo: codeImg,
  },
  {
    name: 'Meme Generator',
    description:
      'A multimedia application to dynamically generate memes taking quotes from a variety of filetypes',
    link: { href: 'https://github.com/samantha-orciuoli/intermediate_python.git', label: 'github.com'},
    logo: codeImg,
  },
  {
    name: 'Dog Breed Identifier',
    description:
      'AI project using a pre-trained image classifier to identify dog breeds',
    link: { href: '#', label: 'github.com' },
    logo: codeImg,
  },
  {
    name: 'Image Classification Application',
    description:
      'An AI application to train a deep learning model on a dataset of images, then use the trained model to classify images',
    link: { href: '#', label: 'github.com' },
    logo: codeImg,
  },
  {
    name: 'Patient Tracker',
    description:
        'Healthcare financial dashboard for physical therapy company built using Python, Django, and PostgreSQL',
    link: { href: 'https://github.com/samantha-orciuoli', label: 'github.com' },
    logo: codeImg,
  },
  {
    name: 'NFT Minting App and Crypto Project',
    description:
        'NFT web application for a Web3 company built using JavaScript, Next.js, Vercel, and Moralis',
    link: { href: 'https://github.com/samantha-orciuoli', label: 'github.com' },
    logo: codeImg,
  },

]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Samantha Orciuoli</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Projects I’ve been working on to solve real-world problems"
        intro="I’ve worked on tons of projects, but these are the ones that I’m most proud of."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="_blank">{project.name} </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
