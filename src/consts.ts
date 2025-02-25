import type { Site, Metadata, Socials } from "@/types";

export const SITE: Site = {
  NAME: "Cyrus McCormick",
  EMAIL: "dev@cyrusmcc.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "The portfolio of Cyrus McCormick, a full stack web developer specialized.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of technical articles",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "bsky",
    HREF: "https://twitter.com/icdteas",
  },
  { 
    NAME: "twitter",
    HREF: "https://twitter.com/icdteas",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/cyrusmcc"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/cyrusmcc/",
  }
];
