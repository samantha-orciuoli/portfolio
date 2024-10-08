import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import {Button} from '@/components/Button'
import {Card} from '@/components/Card'
import {Container} from '@/components/Container'
import {
    TwitterIcon,
    GitHubIcon,
    LinkedInIcon,
} from '@/components/SocialIcons'
import logoPython from '@/images/photos/python.png'
import logoNextjs from '@/images/photos/nextjs.png'
import logoGoogleai from '@/images/photos/googleai.png'
import logoVercel from '@/images/photos/vercel.png'
import logoJavascript from '@/images/photos/javascript.png'
import {generateRssFeed} from '@/lib/generateRssFeed'
import {getAllBlogs} from '@/lib/getAllBlogs'
import {formatDate} from '@/lib/formatDate'
import {useForm, ValidationError} from "@formspree/react";

function MailIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function BriefcaseIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function ArrowDownIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function Blog({blog}) {
    return (
        <Card as="blog">
            <Card.Title href={`/blogs/${blog.slug}`}>
                {blog.title}
            </Card.Title>
            <Card.Eyebrow as="time" dateTime={blog.date} decorate>
                {formatDate(blog.date)}
            </Card.Eyebrow>
            <Card.Description>{blog.description}</Card.Description>
            <Card.Cta>Read blog</Card.Cta>
        </Card>
    )
}

function SocialLink({icon: Icon, ...props}) {
    return (
        <Link className="group -m-1 p-1" {...props}>
            <Icon
                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"/>
        </Link>
    )
}

function MessageMe() {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_CONTACT_FORM);
    if (state.succeeded) {
        return <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Thank you for reaching out!</p>;
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
        >
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <MailIcon className="h-6 w-6 flex-none"/>
                <span className="ml-3">Contact Me</span>
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Send me a message and I&apos;ll get back to you as soon as I can!
            </p>
            <label>
                <span className="mt-2 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">Your email: </span>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    required
                    className="mt-2 min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4
              focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"/>
            </label>
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label>
                <span className="mt-2 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">Your message: </span>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    aria-label="Message"
                    required
                    className="mt-2 min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none
              focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"/>
            </label>
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <div>
                <Button
                    type="submit"
                    className="mt-2 flex"
                    disabled={state.submitting}
                >
                    Send
                </Button>
                <ValidationError
                    errors={state.errors}
                />
            </div>
        </form>
    )
}


function Resume() {
    let resume = [
        {
            company: 'Novartis',
            title: 'Data Architect and Mining Intern, Group Lead',
            start: 'Jun 2024',
            end: {
                label: 'Aug 2024',
                dateTime: new Date().getFullYear(),
            },
        },
        {
            company: 'GitoQuest',
            title: 'Application Developer',
            start: '2022',
            end: {
                label: 'Current',
                dateTime: new Date().getFullYear(),
            },
        },
    ]

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none"/>
                <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4">
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {role.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                {role.title}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                aria-label={`${role.start.label ?? role.start} until ${
                                    role.end.label ?? role.end
                                }`}
                            >
                                <time dateTime={role.start.dateTime ?? role.start}>
                                    {role.start.label ?? role.start}
                                </time>
                                {' '}
                                <span aria-hidden="true">—</span>{' '}
                                <time dateTime={role.end.dateTime ?? role.end}>
                                    {role.end.label ?? role.end}
                                </time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            <Button href="https://softwaresammy.com/samantha-orciuoli-resume.pdf"
                    variant="secondary"
                    className="group mt-6 w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                    download = "samantha-orciuoli-resume.pdf">
                Download Resume
                <ArrowDownIcon
                    className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"/>
            </Button>
        </div>
    )
}

function Photos() {
    let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                {[logoPython, logoNextjs, logoGoogleai, logoVercel, logoJavascript].map((image, imageIndex) => (
                    <div
                        key={image.src}
                        className={clsx(
                            'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                            rotations[imageIndex % rotations.length]
                        )}
                    >
                        <Image
                            src={image}
                            alt=""
                            sizes="(min-width: 640px) 18rem, 11rem"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function Home({blogs}) {
    return (
        <>
            <Head>
                <title>
                    Samantha Orciuoli - Software engineer, developer, and student
                </title>
                <meta
                    name="description"
                    content="I’m Samantha, a software engineer, developer, and student."
                />
            </Head>
            <Container className="mt-9">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        Samantha Orciuoli, software engineer, developer, and student.
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        I’m Samantha, a software engineer, developer, and student. I’m working everyday to build
                        technologies that make life easier and more enjoyable.
                    </p>
                    <div className="mt-6 flex gap-6">
                        <SocialLink
                            href="https://www.linkedin.com/in/samantha-orciuoli"
                            target="_blank"
                            aria-label="Follow on LinkedIn"
                            icon={LinkedInIcon}
                        />
                        <SocialLink
                            href="https://github.com/samantha-orciuoli"
                            target="_blank"
                            aria-label="Follow on GitHub"
                            icon={GitHubIcon}
                        />
                    </div>
                </div>
            </Container>
            <Photos/>
            <Container className="mt-24 md:mt-28">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col gap-16">
                        {blogs.map((blog) => (
                            <Blog key={blog.slug} blog={blog}/>
                        ))}
                    </div>
                    <div className="space-y-10 lg:pl-16 xl:pl-24">
                        <MessageMe/>
                        <Resume/>
                    </div>
                </div>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    if (process.env.NODE_ENV === 'production') {
        await generateRssFeed()
    }

    return {
        props: {
            blogs: (await getAllBlogs())
                .slice(0, 4)
                .map(({component, ...meta}) => meta),
        },
    }
}
