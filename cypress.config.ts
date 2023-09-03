import { defineConfig } from 'cypress'

export default defineConfig({
	retries: 2,
	e2e: {
		baseUrl: 'https://next-real-world-six.vercel.app',
		setupNodeEvents(
			on: Cypress.PluginEvents,
			config: Cypress.PluginConfigOptions
		) {
			return config
		},
	},
})
