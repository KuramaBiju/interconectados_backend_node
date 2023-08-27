import { Server } from './server';

export class BackOfficeBackendApp {
	server?: Server;

	async start(): Promise<void> {
		const port = process.env.PORT ?? '3311';
		this.server = new Server(port);

		return this.server.listen();
	}

	get httpServer(): Server['httpServer'] | undefined {
		return this.server?.getHTTPServer();
	}

	async stop(): Promise<void> {
		return this.server?.stop();
	}
}
