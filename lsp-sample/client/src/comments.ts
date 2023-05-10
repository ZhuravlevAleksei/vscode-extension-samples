import {TextParser, IParsedKeyword} from './parser';

export class CommentsSet extends TextParser{
	_search(line: string, parsed: Array<IParsedKeyword>){
		let start = 0;
		const pattern = new RegExp(`/[*].{0,}[*]/`);
		let result = null;
		
		do{
			result = pattern.exec(line.substring(start));

			if(result){
				parsed.push({
					startCharacter: start + result.index,
					length: result[0].length
				});

				start += result.index + result[0].length;
			}
		}while(result);
	}

	_define_token(token){
		token.tokenType = 'comment',
		token.tokenModifiers = ['documentation'];
	}
}
