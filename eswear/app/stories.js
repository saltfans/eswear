"use client";
import React, { useState } from "react";
import { HomeIcon, BellAlertIcon, HeartIcon, PlusIcon, ChatBubbleBottomCenterTextIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import stories from '../components/stories.json';
const Stories = () => {
  return (
    <div className="h-screen relative">
      <div className="">
        <div>
            {stories.map(story => <Story 
            key={story.id}
            img={story.prof_logo}
            username={story.username}
            />)}
        </div>
      </div>
    </div>
  );
};

export default Navigation