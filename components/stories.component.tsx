import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
type Props = {
  stories: StoryList[];
};
export type StoryList = {
  id: string;
  slug: string;
  category: string;
  created_at: string;
  title: string;
  img?: string;
};

const Stories = (props: Props) => {
  return (
    <div className="px-5 pb-5">
      <h4 className="text-xl font-semibold">Stories</h4>
      {props.stories.map((story) => {
        return <StoryListItem StoryData={story} key={story.id} />;
      })}
    </div>
  );
};

export const StoryListItem = ({ StoryData }: { StoryData: StoryList }) => {
  const { title, category, created_at, img, slug } = StoryData;
  return (
    <Link href={`/stories/${slug}`}>
      <div className="mb-3 cursor-pointer">
        <div className="text-sm  font-extralight text-gray-400">
          <span>{category}</span>
          <span> - {created_at}</span>
        </div>
        <div className="flex justify-between gap-2 items-top">
          <div className="flex flex-col flex-1 items-start">
            <h3 className="text-md flex-1 font-semibold">{title}</h3>
            <button className="bg-black text-white text-sm rounded-md mt-3 px-4 py-1 hover:bg-gray-200 ">
              read more
            </button>
          </div>

          {img && (
            <div className="w-1/4 h-24 relative ">
              <Image
                src={img}
                layout="fill"
                objectFit="cover"
                alt="Story 1"
                className="rounded-xl"
              />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Stories;
