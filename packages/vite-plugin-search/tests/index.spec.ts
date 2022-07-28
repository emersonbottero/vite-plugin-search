import { describe, it, expect } from 'vitest';
import { search } from '../src';

describe('vite-plugin-search', () => {
	it('should be named', function () {
		expect(search().name).toBe('vite-plugin-search');
	});
});
