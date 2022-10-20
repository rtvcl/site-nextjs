import { StoryList } from '../components/stories.component';

export interface Cover {
  name: string;
  url: string;
  rawUrl: string;
}

export interface NotionDatabaseResponse {
  id: string;
  'URL - Source': string;
  cover: Cover[];
  slug: string;
  Name: string;
  'Created time': string;
  category: string;
}

const DATABASE_ID = '612c16a7b9114a1c82f183606df47b9a';

export const ABOUT_ME_ID = 'c0df81f064234654be4c83fa45b83ca4';

export const ROADMAP_ID = '9beb06e915fc4a119372d9671e93ba70';

const notion_call = `https://notion-api.splitbee.io/v1/table/${DATABASE_ID}`;

export const getStoryList = async () => {
  const res = await fetch(notion_call);
  const resJson = (await res.json()) as NotionDatabaseResponse[];
  return mapStoryData(resJson);
};

const mapStoryData = (notionDatabaseResponse: NotionDatabaseResponse[]) => {
  return notionDatabaseResponse.map((d) => {
    let data: StoryList = {
      id: d.id,
      slug: d.slug,
      category: d.category,
      created_at: d['Created time'],
      title: d.Name,
    };
    if (d.cover) {
      data['img'] = d.cover[0].url;
    }
    return data;
  });
};

export const getStoryPage = async (id: string) => {
  const res = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`);
  const resJson = await res.json();
  return resJson;
};
