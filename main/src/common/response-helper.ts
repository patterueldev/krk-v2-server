import { GenericResponse } from "@krk/common";
import { Response } from "express";

export default class ResponseHelper {
  static async send(res: Response, func: () => Promise<any>) {
      var response = await GenericResponse.execute(func);
      console.log('ResponseHelper.send', response);
      res.status(response.status).send(response);
  }
}