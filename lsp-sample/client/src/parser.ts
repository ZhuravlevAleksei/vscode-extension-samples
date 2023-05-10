export interface IParsedKeyword {
	startCharacter: number;
	length: number;
}

export interface IParsedToken {
	line: number;
	startCharacter: number;
	length: number;
	tokenType: string;
	tokenModifiers: string[];
}

export class TextParser{
	_parsed: Array<IParsedKeyword>;
	_tokens: Array<IParsedToken>;

	constructor(tokens: Array<IParsedToken>){
		this._tokens = tokens;
	}

	_search(line: string, parsed: Array<IParsedKeyword>){return;}
	_define_token(token: IParsedToken){return;}

	build_tokens(line: string, str_number: number){
		this._parsed = [];
		this._search(line, this._parsed);

		if(this._parsed.length === 0){
			return;
		}

		for(let ki=0; ki<this._parsed.length; ki++){
			const token: IParsedToken = {
				line: str_number,
				startCharacter: this._parsed[ki].startCharacter,
				length: this._parsed[ki].length,
				tokenType: undefined,
				tokenModifiers: undefined
			};

			this._define_token(token);
			this._tokens.push(token);
		}

		return;
	}
}
