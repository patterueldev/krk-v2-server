import SongRepository from "./data/repositories/song-repository";
import GetSongListUseCase, { DefaultGetSongListUseCase } from "./domain/use_cases/get-song-list-use-case";

export { 
  SongRepository,
  GetSongListUseCase,
};

export class CoreDefaults {
  static getSongListUseCase(repository: SongRepository): GetSongListUseCase {
    return new DefaultGetSongListUseCase(repository);
  }
}