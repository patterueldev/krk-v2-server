import SongRepository from "../../data/repositories/song-repository";
import { Song } from "../entities/song";

export default interface GetSongListUseCase {
  execute(filter?: string, offset?: number, limit?: number): Promise<Song[]>
}

export class DefaultGetSongListUseCase implements GetSongListUseCase {
  constructor(
    private songRepository: SongRepository
  ) {}

  execute(filter?: string, offset?: number, limit?: number): Promise<Song[]>{
    return this.songRepository.getSongs(filter, offset, limit);
  }
}