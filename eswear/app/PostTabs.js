import { Tab } from "@headlessui/react";
import React from "react";

const PostTabs = () => {
    return (
        <Tab.Group>
            <Tab.List>
                <Tab>Tabs 1</Tab>
                <Tab>Tabs 2</Tab>
                <Tab>Tabs 3</Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>Content 1</Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
                <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}

export default PostTabs