import {
  OG_IMAGE_SIZE,
  PNG_CONTENT_TYPE,
  renderOgImage,
} from "@/lib/generated-images";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name}: ${SITE.tagline}`;
export const size = OG_IMAGE_SIZE;
export const contentType = PNG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({ title: SITE.tagline });
}
