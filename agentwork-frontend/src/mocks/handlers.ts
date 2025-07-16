import { rest } from 'msw';

export const handlers = [
  rest.post('/api/generate/doc', (_req, res, ctx) => {
    return res(ctx.delay(500), ctx.json({ jobId: '1234' }));
  }),
  rest.get('/api/generate/doc/1234/result', (_req, res, ctx) => {
    return res(ctx.delay(500), ctx.json({ content: '생성된 보고서 내용...' }));
  }),
];
