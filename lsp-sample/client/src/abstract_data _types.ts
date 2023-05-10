import {TextParser, IParsedKeyword} from './parser';

const _keywords_set = [
	'boolean',
	'character',
	'charstring',
	'integer',
	'natural',
	'real',
	'pid',
	'duration',
	'time',
	'string',
	'array',
	'bag',
	'powerset',
	'syntype',
	'newtype', 'endnewtype'
];

export class AbstractTypesSet extends TextParser{
	_search(line: string, parsed: Array<IParsedKeyword>){
		for(let ki=0; ki<_keywords_set.length; ki++){
			let start = 0;
			const pattern = new RegExp(`\\b${_keywords_set[ki]}\\b`, 'i');
			let result = null;
			
			do{
				result = pattern.exec(line.substring(start));
	
				if(result){
					parsed.push({
						startCharacter: start + result.index,
						length: _keywords_set[ki].length
					});
	
					start += result.index + result[0].length;
				}
			}while(result);
		}
	}

	_define_token(token){
		token.tokenType = 'type',
		token.tokenModifiers = ['declaration'];
	}
}
