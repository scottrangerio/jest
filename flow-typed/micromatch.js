// @flow
// v2.3.11

declare module 'micromatch' {
	declare module.exports: {
		(
			files: string | string[],
			patterns: string | string[],
			opts?: Object,
		): string[],
		any: (fp: string, patterns: string | string[], opts?: Object) => boolean,
		braces: (pattern: string, opts?: Object) => string,
		contains: (fp: string, pattern: string, opts?: Object) => boolean,
		expand: (pattern: string | string[], opts?: Object) => string[],
		filter: (patterns: string | string[], opts?: Object) => Function,
		isMatch: (fp: string, pattern: string, opts?: Object) => boolean,
		makeRe: (glob: string, opts?: Object) => RegExp,
		match: (files: string[], pattern: string, opts?: Object) => string[],
		matcher: (glob: string | RegExp | Function, opts?: Object) => (fp: string) => boolean,
		matchKeys: (obj: Object, glob: string, opts?: Object) => string[],
	};
}
