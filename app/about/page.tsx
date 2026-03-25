import Image from "next/image";

export const metadata = {
  title: "About",
  description: "About Seungheon Lee.",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About Me</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <Image
          src="/seungheonlee.jpeg"
          alt="Seungheon Lee"
          width={180}
          height={180}
          className="float-right ml-6 mb-4 !mt-0 rounded-full object-cover"
        />
        <p className="mb-4">
          {`Hi, I'm Seungheon Lee — a Computer Science and Engineering student at Korea University in South Korea. I have a deep passion for learning and constantly push myself to grow across a wide range of areas in computer science.`}
        </p>
        <p className="mb-4">
          {`I'm fascinated by the breadth of what's possible in tech, so rather than narrowing in early, I've been actively exploring fields like software engineering, machine learning, and systems programming. I enjoy building things, understanding how they work under the hood, and finding ways to make them better.`}
        </p>
        <p className="mb-4">
          {`Outside of academics, I spend time writing, reading, and reflecting on things I find meaningful — some of which end up on this blog. I believe that thinking clearly and communicating well are just as important as any technical skill.`}
        </p>
        <p className="mb-4">
          {`Feel free to reach out if you'd like to connect or collaborate on something interesting.`}
        </p>
      </div>
    </section>
  );
}
