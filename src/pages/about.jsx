import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Samantha Orciuoli</title>
        <meta
          name="description"
          content="I’m Samantha Orciuoli. I live in New Jersey, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Samantha Orciuoli. I live in New Jersey, where I design the
              future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve loved problem-solving and building for as long as I can remember.
                I’ve always enjoyed figuring out complex issues and creating a solution to
                problems. Believe it or not, at the young age of 15, I enjoyed soldering
                pipes and programming the sprinkler timer in my backyard with my parents.
                As I got older, I realized I wanted a profession where I could solve problems
                and build to help people in any way I could. I then discovered computer science
                and realized this is what I wanted to do for the rest of my life.

              </p>
              <p>
                Since then, my eagerness to learn all things computer science has driven me to
                become a well-rounded software engineer and developer. Besides studying computer
                science in college, I have truly found joy in independent learning, earning numerous
                online degrees and spending countless hours researching the best and upcoming technology.
                I love how the technology field is constantly advancing, and it’s incredible to see all
                the cool things we can do with it.

              </p>
              <p>
                The sense of accomplishment I get when approaching real-world problems and finding a solution
                is extremely gratifying. Even when my grandparents ask me to fix their email, I’m glad I can
                help. I’m so excited to see what’s to come in the technology field and to grow alongside it.
                Learning something new every day is why being a developer is so rewarding.

              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://www.linkedin.com/in/samantha-orciuoli" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href="https://github.com/samantha-orciuoli" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://twitter.com/sammychules" icon={TwitterIcon} className="mt-4">
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="mailto:samantha.orciuoli@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                samantha.orciuoli@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
