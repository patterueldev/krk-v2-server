import Localization from "./localization";

export interface Song {
  id: string;
  title: string;
  artist: string | undefined
  image_url: string | undefined;
  has_lyrics: boolean;
  has_voice: boolean;
  language: string | undefined;
  lyrics: string | undefined;
  localizations: Localization[];
}