import { GenericResponse } from '@krk/common';
import express, { Request, Response } from 'express';
import ResponseHelper from './common/response-helper';
import DependencyManager from './common/dependency-manager';

const router = express.Router();

router.get('/songs', async (req: Request, res: Response) => {
  console.log('GET /songs');
  var limit = req.query.limit || req.body.limit || undefined;
  var offset = req.query.offset || req.body.offset || undefined;
  var filter = req.query.filter || req.body.filter || undefined;
  await ResponseHelper.send(res, async () => {
    return await DependencyManager.getSongListUseCase().execute(filter, offset, limit);
  });
})

export default router;