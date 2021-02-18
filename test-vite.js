import vite from 'vite';

async function main() {
	const server = await vite.createServer();

	try {
		const mod = await server.ssrLoadModule('/bad-module.js');
		console.error('the module threw an error, but it was swallowed');
	} catch (e) {
		console.log(`an error was thrown, as expected: ${e.message}`);
	}

	server.close();
}

main();