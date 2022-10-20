import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import StoryDetailScreen from '../../components/screens/story_detail.screen';
import { getStoryList, getStoryPage } from '../../utils/notion';

type Props = {
  block: any;
};

interface IParams extends ParsedUrlQuery {
  story_detail: string;
}

const StoryDetailPage = (props: Props) => {
  return (
    <>
      <StoryDetailScreen block={props.block} />
    </>
  );
};

export async function getStaticPaths() {
  const stories = await getStoryList();
  const paths = stories.map((story) => ({
    params: {
      story_detail: story.slug,
    },
  }));
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const stories = await getStoryList();
  const { story_detail } = context?.params as IParams;
  const [story_data] = stories.filter((story) => story.slug === story_detail);
  const block = await getStoryPage(story_data.id);
  return {
    props: { block },
  };
};

export default StoryDetailPage;
