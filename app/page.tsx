import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Seungheon Lee
      </h1>
      <p className="mb-4">
        {`a student at Korea University in South Korea. I am majoring in Computer Science and Engineering. I do love to learn new things and develop myself. Because I am interested in various fields of computer science, I am diving into various fields.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
