import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Controller } from './Controller';

export default class  implements Controller {
	run(req: Request, res: Response): void {
		res.status(httpStatus.ACCEPTED).send();
	}
}
