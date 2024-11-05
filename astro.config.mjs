import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
	integrations: [tailwind()],
	output: 'server',
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
});
