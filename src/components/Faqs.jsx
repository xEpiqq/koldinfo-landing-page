import Image from 'next/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What does this software do?',
      answer: 'It helps you book consistent, quality sales calls without the need for retainers, setters, or paid ads.',
    },
    {
      question: 'Who is it for?',
      answer: 'Perfect for agency owners, freelancers, or any business owner looking to get more clients.',
    },
    {
      question: 'How do you get leads?',
      answer: 'We aggregate contact info from reliable databases, ensuring a steady flow of potential clients.',
    },
  ],
  [
    {
      question: 'Can I filter the data?',
      answer: 'Yes. Filter by job titles, industries, locations, and more to target the exact audience you need.',
    },
    {
      question: 'What’s the export process like?',
      answer: 'Simple. Export clean lists of leads with just one click.',
    },
    {
      question: 'How accurate is the information?',
      answer: 'Our data is sourced from trusted databases, so it’s always fresh and actionable.',
    },
  ],
  [
    {
      question: 'Can I integrate this with my CRM?',
      answer: 'Absolutely. Seamlessly connect it to manage your leads better.',
    },
    {
      question: 'Is there a trial version?',
      answer: 'We offer free resources, including scripts and strategies, to help you get started.',
    },
    {
      question: 'What support is available?',
      answer: 'You’ll get access to courses, resources, and a team ready to help whenever you need it.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team, and we’ll be happy to assist.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
