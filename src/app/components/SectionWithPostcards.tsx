import PostCard, { type PostCardProps } from "@/app/components/PostCard";

interface RecentPostsSectionProps {
  title: string;
  postList: Array<PostCardProps>;
}

export default function SectionWithPostcards(props: RecentPostsSectionProps) {
  const { title, postList } = props;

  return (
    <section>
      <h2 className="text-3xl">{title}</h2>
      <ol>
        {postList.map((post) => (
          <li key={post.url}>
            <PostCard
              url={post.url}
              title={post.title}
              description={post.description}
              createdDate={post.createdDate}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
