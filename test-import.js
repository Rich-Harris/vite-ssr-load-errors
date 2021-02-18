async function main() {
	try {
		const mod = await import('./bad-module.js');
		console.error('the module threw an error, but it was swallowed');
	} catch (e) {
		console.log(`an error happened, as expected: ${e.message}`);
	}
}

main();