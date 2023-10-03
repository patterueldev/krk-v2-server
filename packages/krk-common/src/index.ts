import GenericResponse from "./common/generic-response";
import SongRepository from "./data/repositories/song-repository";
import GetSongListUseCase, { DefaultGetSongListUseCase } from "./domain/use_cases/get-song-list-use-case";
import lazyValue from './common/lazy-value-function';
import lazyValueAsync from './common/lazy-value-async-function';
import {Lazy} from "./common/lazy";

export { 
  Lazy, lazyValue, lazyValueAsync,
  GenericResponse,
  SongRepository,
  GetSongListUseCase,
};

export class CommonDefaults {
  static getSongListUseCase(repository: SongRepository): GetSongListUseCase {
    return new DefaultGetSongListUseCase(repository);
  }
}