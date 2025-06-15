import { Application, Router } from 'express';

export async function SetRoutes(app: Application) {
  const router = Router();

  // Health check
  router.get('/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Test endpoints
  router.get('/test', (_req, res) => {
    res.json({ message: 'Test endpoint working!' });
  });

  // Sample data endpoints
  router.get('/items', (_req, res) => {
    const items = [
      { id: 1, name: 'Item 1', description: 'Description 1' },
      { id: 2, name: 'Item 2', description: 'Description 2' }
    ];
    res.json({ success: true, data: items });
  });

  app.use('/api', router);

  // 404 handler
  app.use((_req, res) => {
    res.status(404).json({
      success: false,
      message: 'Endpoint not found'
    });
  });

  // Global error handler
  app.use((err: Error, _req: any, res: any, _next: any) => {
    console.error(err.stack);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  });
}
