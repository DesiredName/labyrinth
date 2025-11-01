import { app } from "./app.ts";
import { db } from "./services/db.srv.ts";
import { logMessage } from "./services/log.srv.ts";

const port = process.env.SERVER_PORT ?? 3000;

logMessage(`Starting application`, { port });

const start = async () => {
    await db.sync({ alter: true, logging: true });
    return app.listen(port, () => {
        logMessage(`Application has started`, { port });
    });
};

start().then((server) => {
    const shutdown = async () => {
        logMessage(`Stopping application`);
        server.close();
        await db.close();
        process.exit();
    };

    process.on('SIGINT', shutdown);
    process.once('SIGTERM', shutdown);
});