import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function EducationSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Education() {
  return (
    <>
      <Head>
        <title>Education - Samantha Orciuoli</title>
        <meta
          name="description"
          content="Samantha Orciuoli - my quest for technical knowledge"
        />
      </Head>
      <SimpleLayout
        title="I’m always on a quest for technical knowledge."
        intro="I'm eager to learn all things technology. Apart from traditional schooling, I'm big on self-learning outside the classroom, and look to expand my knowledge everyday."
      >
        <div className="space-y-20">
            <EducationSection title="Degrees">
                <Appearance
                    href="https://cdso.utexas.edu/msai"
                    title="Master of Science in Artificial Intelligence"
                    description="From the University of Texas at Austin"
                    event="Aug 2026"
                    cta="View Degree Requirements"
                />
                <Appearance
                    href="https://www.cs.rutgers.edu/academics/undergraduate/cs-degrees/b-s-degree"
                    title="Bachelor of Science Degree in Computer Science with a Minor in Business Administration"
                    description="From Rutgers University, New Brunswick"
                    event="May 2023"
                    cta="View Degree Requirements"
                />
            </EducationSection>
            <EducationSection title="Certificates">
                <Appearance
                  href="https://confirm.udacity.com/ZHGCAMPW"
                  title="AI Programming with Python Nanodegree - Udacity"
                  description="A 3 month course exploring Python, NumPy, pandas, Matplotlib, PyTorch, Calculus, and Linear Algebra in order to build neural networks."
                  event="Completed September 05, 2021"
                  cta="View Certificate"
                />
                <Appearance
                  href="https://confirm.udacity.com/WDHJR72W"
                  title="Intermediate Python Nanodegree - Udacity"
                  description="A 2 month course covering advanced python topics and large codebases with libraries.."
                  event="Completed July 14, 2022"
                  cta="View Certificate"
                />
                  <Appearance
                      href="https://coursera.org/share/46f100c289913ea8256cbd239c5779dc"
                      title="Python for Everybody - University of Michigan on Coursera"
                      description="A 32 week course covering python to access web data, python with databases, and python data structures. I also completed a capstone project on the honors track to retrieve, process, and visualize a dataset using python."
                      event="Completed August 29, 2022"
                      cta="View Certificate"
                />
          </EducationSection>
        </div>
      </SimpleLayout>
    </>
  )
}
