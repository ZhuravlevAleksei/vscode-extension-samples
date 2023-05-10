import {TextParser, IParsedKeyword} from './parser';

const _keywords_set = [
	'SYNONYM', 'CONSTANTS', 'STRUCT',
	'DECISION', 'ENDDECISION',
	'SYSTEM', 'ENDSYSTEM',
	'SYNTYPE', 'ENDSYNTYPE',
	'NEWTYPE', 'ENDNEWTYPE',
	'SIGNAL',
	'CHANNEL', 'ENDCHANNEL',
	'BLOCK', 'ENDBLOCK',
	'PROCESS', 'ENDPROCESS',
	'START',
	'CONNECTION', 'ENDCONNECTION',
	'STATE', 'NEXTSTATE', 'ENDSTATE',
	'SIGNALROUTE', 'INPUT', 'OUTPUT',
	'TASK',
	'IF', 'ELSE',
	'SET',
	'TIMER', 'RESET',
	'DCL'
];

export class KeywordsSet extends TextParser{
	_search(line: string, parsed: Array<IParsedKeyword>){
		for(let ki=0; ki<_keywords_set.length; ki++){
			let start = 0;
			const pattern = new RegExp(`\\b${_keywords_set[ki]}\\b`);
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
		token.tokenType = 'keyword',
		token.tokenModifiers = ['modification'];
	}
}

