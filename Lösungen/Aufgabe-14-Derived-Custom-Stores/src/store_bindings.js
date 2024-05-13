import { writable, derived } from 'svelte/store';

export const feedback = writable('');

export const hinweis = derived(feedback, ($feedback) => `I have the following feedback: ${$feedback}`);
