import { Song } from "../../domain/entities/song";

export default interface SongRepository {
  // CRUD
  getSongs(filter?: string, offset?: number, limit?: number): Promise<Song[]>;
}