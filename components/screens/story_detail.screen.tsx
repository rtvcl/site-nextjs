import React from 'react';
import { NotionRenderer } from 'react-notion';
import DrawerWrapper from '../drawer.component';
import TopMenu from '../top_menu.component';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';

type Props = {
  block: any;
};

const StoryDetailScreen = (props: Props) => {
  return (
    <>
      <DrawerWrapper>
        <TopMenu />
        <div className="px-4">
          <NotionRenderer blockMap={props.block} />
        </div>
      </DrawerWrapper>
    </>
  );
};

export default StoryDetailScreen;
