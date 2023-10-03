import { lazyValue, Lazy, } from '@krk/common';
import { GetSongListUseCase, CoreDefaults, SongRepository } from '@krk/core';
export default class DependencyManager {
  static songRepository: Lazy<SongRepository> = lazyValue(
    () => { throw new Error('SongRepository not set'); }
  );
  static getSongListUseCase: Lazy<GetSongListUseCase> = lazyValue(
    () => CoreDefaults.getSongListUseCase(this.songRepository()) 
  );
}