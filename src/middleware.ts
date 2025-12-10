import type { MiddlewareHandler } from 'astro'

const devMiddleware: () => MiddlewareHandler = () => {
	const proxyURL = new URL(import.meta.env.PROXY_BACKEND_URL)
	const prefixes = ['/scripts', '/images']
	return async (context, next) => {
		const url = new URL(context.request.url)
		if (prefixes.some((e) => url.pathname.startsWith(e))) {
			console.log('Proxying', url.toString())
			url.hostname = proxyURL.hostname
			url.port = proxyURL.port
			return await fetch(url, {
				method: context.request.method,
				body: context.request.body
			})
		}
		return await next()
	}
}

export const onRequest: MiddlewareHandler =
	process.env.NODE_ENV === 'development' ? devMiddleware() : (_, next) => next()
