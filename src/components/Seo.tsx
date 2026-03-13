import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  canonical?: string;
};

const updateMeta = (name: string, content: string) => {
  let element = document.querySelector(`meta[name='${name}']`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
};

const updateOg = (property: string, content: string) => {
  let element = document.querySelector(`meta[property='${property}']`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.content = content;
};

export default function Seo({ title, description, keywords, url, image, canonical }: SeoProps) {
  useEffect(() => {
    document.title = title;

    updateMeta("description", description);
    if (keywords) updateMeta("keywords", keywords);
    updateMeta("robots", "index, follow");

    if (canonical) {
      let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    if (url) {
      updateOg("og:url", url);
      updateMeta("twitter:url", url);
    }

    updateOg("og:title", title);
    updateOg("og:description", description);
    updateOg("og:type", "website");
    if (image) updateOg("og:image", image);

    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    if (image) updateMeta("twitter:image", image);
  }, [title, description, keywords, url, image, canonical]);

  return null;
}
