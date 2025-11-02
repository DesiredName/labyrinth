function logMessage(message: string, details?: unknown) {
  console.dir(
    {
      time: Date.now(),
      message,
      details,
    },
    { depth: 3 },
  );
}

function logError(err: unknown, details?: unknown) {
  console.dir(
    {
      time: Date.now(),
      message: err,
      details,
    },
    { depth: 3 },
  );
}

export { logError, logMessage };
