import { Request, Response, Router } from 'express';

import container from '../dependency-injection';
import CitizenGetController from '../controllers/CitizenGetController';

export const register = async (router: Router): Promise<void> => {
    const containerInstance = await container;
    const citizenGetController = containerInstance.get<CitizenGetController>(
        'Apps.backoffice.controllers.CitizenGetController'
    );
    router.get('/citizen', (req: Request, res: Response) => citizenGetController.run(req, res));
};