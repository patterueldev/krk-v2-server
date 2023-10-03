import { lazyValue, Lazy, GetSongListUseCase, CommonDefaults, SongRepository, } from '@krk/common';

export default class DependencyManager {
  static songRepository: Lazy<SongRepository> = lazyValue(
    () => { throw new Error('SongRepository not set'); }
  );
  static getSongListUseCase: Lazy<GetSongListUseCase> = lazyValue(
    () => CommonDefaults.getSongListUseCase(this.songRepository()) 
  );
}