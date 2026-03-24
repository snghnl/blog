import { TalkPosts } from 'app/components/talks'

export const metadata = {
  title: 'Talks',
  description: 'My talks.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Talks</h1>
      <TalkPosts />
    </section>
  )
}
