import {
  OG_IMAGE_SIZE,
  PNG_CONTENT_TYPE,
  renderOgImage,
} from "@/lib/generated-images";
import { TEXT_STATS_PAGE } from "./constants";

export const alt = TEXT_STATS_PAGE.title;
export const size = OG_IMAGE_SIZE;
export const contentType = PNG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({ title: TEXT_STATS_PAGE.title });
}
